from flask import Blueprint
from flask_login import login_required
from app.models import Comment

comment_routes = Blueprint('comments', __name__)
