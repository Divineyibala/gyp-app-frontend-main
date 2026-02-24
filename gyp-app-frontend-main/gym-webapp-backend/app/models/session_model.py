from .. import db
from datetime import datetime, date, time

class TrainingSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    trainer_id = db.Column(db.Integer, db.ForeignKey("trainer.id"), nullable=False)

    session_date = db.Column(db.Date, nullable=False)
    session_time = db.Column(db.Time, nullable=False)

    duration_minutes = db.Column(db.Integer, default=60)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User")
    trainer = db.relationship("Trainer")

    __table_args__ = (
        db.UniqueConstraint(
            "trainer_id",
            "session_date",
            "session_time",
            name="unique_trainer_slot"
        ),
    )