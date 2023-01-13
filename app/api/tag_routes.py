from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Tag, db
from ..forms.tag_form import TagForm

tag_routes = Blueprint('tags', __name__)

@tag_routes.route('/')
def get_tags():
    tags = Tag.query.all()

    return {'tags': [tag.to_dict() for tag in tags]}


@tag_routes.route('/create_tag', methods=['POST'])
@login_required
def create_tag():
    form = TagForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        tag = Tag(
            userId = form.data['userId'],
            imageId = form.data['imageId'],
            name = form.data['name']

        )
        db.session.add(tag)
        db.session.commit()
        return jsonify(tag.to_dict())

@tag_routes.route('/<int:tag_id>', methods=['DELETE'])
@login_required
def delete_tag(tag_id):
    tagData = Tag.query.get(tag_id)
    db.session.delete(tagData)
    db.session.commit()
    return "Tag Deleted"
