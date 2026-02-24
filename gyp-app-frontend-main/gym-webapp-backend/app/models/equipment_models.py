from app.extensions import db
from datetime import date

class Equipment(db.Model):
    __tablename__ = "equipment"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(20), nullable=False, default="Good")
    last_maintenance = db.Column(db.Date, nullable=True)
    location = db.Column(db.String(120), nullable=True)

    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "quantity": self.quantity,
            "status": self.status,
            "lastMaintenance": (
                self.last_maintenance.isoformat()
                if self.last_maintenance
                else None
            ),
            "location": self.location,
            "createdAt": self.created_at.isoformat(),
        }