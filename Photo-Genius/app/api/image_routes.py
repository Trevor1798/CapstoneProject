from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Image, db
from app.forms import ImageForm

image_routes = Blueprint('images', __name__)

# Get all images
@image_routes.route('/')
def get_all_images():
    all_images = Image.query.all()
    get_images = []
    get_images.extend([i.to_dict() for i in all_images])
    return {"images": get_images}


# Create an Image
@image_routes.route('/new_image', methods=["POST"])
# @login_required
def create_image():
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        params = {
            "title": form.data["title"],
            "description": form.data["description"],
            "image_url": form.data["image_url"],
            # "user_id": current_user.id
        }
        new_image = Image(**params)
        db.session.add(new_image)
        db.session.commit()
        return {"images": new_image.to_dict()}


# Update an Image
@image_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_image(id):
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        image = Image.query.get(id)
        image.title = form.data["title"]
        image.description = form.data['description']
        image.image_url = form.data['image_url']

        db.session.commit()
        return image.to_dict()


# Delete an Image
@image_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def delete_image(id):
    image = Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return {"message": "Image Deleted"}
