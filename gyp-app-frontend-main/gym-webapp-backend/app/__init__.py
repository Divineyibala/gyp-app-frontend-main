



# from flask import Flask
# from flask_cors import CORS
# from .config import Config
# from dotenv import load_dotenv
# import os
# from .extensions import db, bcrypt, jwt, mail

# def create_app():
#     app = Flask(__name__)
#     app.config.from_object(Config)
#     load_dotenv()
    
#     app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

#     app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER")
#     app.config["MAIL_PORT"] = int(os.getenv("MAIL_PORT"))
#     app.config["MAIL_USE_TLS"] = os.getenv("MAIL_USE_TLS") == "True"
#     app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
#     app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
#     app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")
    
#     CORS(app)

#     # initialize extensions
#     db.init_app(app)
#     bcrypt.init_app(app)
#     jwt.init_app(app)
#     mail.init_app(app)
#     from app.route.workout_routes import workout_bp
#     from .route.equipment_routes import equipment_bp

# # register blueprints
#     from .route.user_routes import user_bp
#     from .route.membership_routes import membership_bp

#     app.register_blueprint(user_bp, url_prefix="/api/users")
#     app.register_blueprint(membership_bp, url_prefix="/api/memberships")
#     app.register_blueprint(workout_bp, url_prefix="/api/workout")
#     app.register_blueprint(equipment_bp, url_prefix="/api/equipment")

#     return app


from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

from .config import Config
from .extensions import db, bcrypt, jwt, mail

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    load_dotenv()

    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER")
    app.config["MAIL_PORT"] = int(os.getenv("MAIL_PORT"))
    app.config["MAIL_USE_TLS"] = os.getenv("MAIL_USE_TLS") == "True"
    app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
    app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_DEFAULT_SENDER")

    CORS(app)

    # init extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    mail.init_app(app)

    #  IMPORT MODELS (THIS CREATES TABLE METADATA)
    from app.models.equipment_models import Equipment
    from app.models.user_model import User
    # import other models here

    #  CREATE TABLES
    with app.app_context():
        db.create_all()

    #  IMPORT & REGISTER BLUEPRINTS
    from app.route.user_routes import user_bp
    from app.route.membership_routes import membership_bp
    from app.route.workout_routes import workout_bp
    from app.route.equipment_routes import equipment_bp

    app.register_blueprint(user_bp, url_prefix="/api/users")
    app.register_blueprint(membership_bp, url_prefix="/api/memberships")
    app.register_blueprint(workout_bp, url_prefix="/api/workout")
    app.register_blueprint(equipment_bp, url_prefix="/api/equipment")

    return app