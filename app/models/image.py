from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = 'images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    title = db.Column(db.String(500), nullable=False)
    description = db.Column(db.String(1000))
    image_url = db.Column(db.String, nullable=False)

    # Relationships
    comments = db.relationship('Comment', back_populates='image', cascade='all, delete')
    favorites = db.relationship('Favorite', back_populates='image', cascade='all, delete')
    tags = db.relationship('Tag', back_populates='image', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'image_url': self.image_url
        }
