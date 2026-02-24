import os

class Config:
    SQLALCHEMY_DATABASE_URI = "sqlite:///gypapp.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "super-secret-key"
    SECRET_KEY = "reset-secret-key"