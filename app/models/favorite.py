from .db import db, environment, SCHEMA, add_prefix_for_prod

class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    imageId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('images.id')))

    # Relationships
    image = db.relationship('Image', back_populates='favorites')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.userId,
            'image_id': self.imageId
        }
