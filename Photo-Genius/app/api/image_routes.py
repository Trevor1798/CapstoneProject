from flask import Blueprint
from flask_login import login_required
from app.models import Image

image_routes = Blueprint('images', __name__)
