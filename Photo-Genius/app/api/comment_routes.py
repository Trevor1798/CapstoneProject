from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms import CommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/')
def get_all_comments():
    comments = Comment.query.all()
    new_comments = []
    new_comments.extend([i.to_dict() for i in comments])

    return {"comments": new_comments}

# create a comment
@comment_routes.route('/create-comment')
@login_required
def create_comment():
    form = CommentForm()
    form['csrf_token'] = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            "description": form.data['description'],
            "user_id": form.data['user_id'],
            "image_id": form.data['image_id']

        }
        db.session.add()
        db.session.commmit()
        new_comment = Comment(**params)
        return {"comments": new_comment.to_dict()}

# update a comment
@comment_routes.route('/<int:id>')
@login_required
def update_comment(id):
    form = CommentForm()
    form['csrf_token'] = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment.query.get(id).first()
        comment.description = form.data['description']
        comment.user_id = form.data['user_id']
        comment.image_id = form.data['image_id']
        db.session.commit()
        return comment.to_dict()


# delete a comment
@comment_routes.route('/<int:id>')
def delete_comment(id):
    comment = Comment.query.get(id).first()
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Comment Deleted"}
