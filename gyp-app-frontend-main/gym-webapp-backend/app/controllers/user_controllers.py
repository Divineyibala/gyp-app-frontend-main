from flask import request, jsonify
from app.extensions import db, bcrypt
from app.models.user_model import User
from flask_jwt_extended import create_access_token
from itsdangerous import URLSafeTimedSerializer
from flask import current_app
from app import mail
from flask_mail import Message
import os


def register_user():
    data = request.get_json()

    fullname = data.get("fullname")
    email = data.get("email")
    phone = data.get("phone")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    if not all([fullname, email, password, confirm_password]):
        return jsonify({"error": "All fields are required"}), 400

    if password != confirm_password:
        return jsonify({"error": "Password did not match"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user = User(
        fullname=fullname,
        email=email,
        phone=phone,
        password=hashed_password
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201


def login_user():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = create_access_token(identity=user.id)

    return jsonify({
        "access_token": token,
        "user": {
            "id": user.id,
            "fullname": user.fullname,
            "email": user.email
        }
    }), 200


def forgot_password():
    data = request.get_json()
    email = data.get("email")

    if not email:
        return jsonify({"error": "Email is required"}), 400

    user = User.query.filter_by(email=email).first()

    # Always return same message to prevent email enumeration
    response_message = {
        "message": "If an account with that email exists, a reset link has been sent."
    }

    if not user:
        return jsonify(response_message), 200

    serializer = URLSafeTimedSerializer(current_app.config["SECRET_KEY"])
    token = serializer.dumps(email, salt="password-reset")

    frontend_url = os.getenv("FRONTEND_URL")
    reset_link = f"{frontend_url}/reset-password/{token}"

    try:
        msg = Message(
            subject="Password Reset Request",
            recipients=[email]
        )

        msg.body = f"""
Hello,

To reset your password, click the link below:

{reset_link}

This link expires in 30 minutes.

If you did not request this, please ignore this email.
"""

        mail.send(msg)

    except Exception as e:
        current_app.logger.error(f"Email sending failed: {str(e)}")
        return jsonify({"error": "Failed to send reset email"}), 500

    return jsonify(response_message), 200


def reset_password():
    data = request.get_json()

    token = data.get("token")
    new_password = data.get("new_password")

    serializer = URLSafeTimedSerializer(current_app.config["SECRET_KEY"])

    try:
        email = serializer.loads(token, salt="password-reset", max_age=3600)
    except Exception:
        return jsonify({"error": "Invalid or expired token"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    user.password = bcrypt.generate_password_hash(new_password).decode("utf-8")
    db.session.commit()

    return jsonify({"message": "Password reset successful"}), 200