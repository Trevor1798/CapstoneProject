from flask import Blueprint
from flask_login import login_required
from app.models import Tag

tag_routes = Blueprint('tags', __name__)
