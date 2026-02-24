from .. import db

class Plan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)  # stored in dollars
    features = db.Column(db.Text, nullable=False)
    # max_sessions_per_week = db.Column(db.Integer, nullable=True)
    # max_sessions_per_month = db.Column(db.Integer, nullable=True)