from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Favorite
from ..forms.favorite_form import FavoriteForm
favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/')
def get_faves():
    favorites = Favorite.query.all()
    get_faves = []
    get_faves.extend([i.to_dict() for i in favorites])
    return{'favorites' : get_faves}


@favorite_routes.route('/create_favorite', methods=['POST'])
@login_required
def create_fav():
    form = FavoriteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        favorite = Favorite(
            userId = form.data['userId'],
            imageId =form.data['imageId']
        )

        db.session.add(favorite)
        db.session.commit()
        return jsonify(favorite.to_dict())

@favorite_routes.route('/<int:id>', methods=['DELETE'])
# @login_required
def delete_fav(id):
    fav_data = Favorite.query.get(id)
    db.session.delete(fav_data)
    db.session.commit()
    return "Fav Deleted"
