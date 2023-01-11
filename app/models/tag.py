from .db import db, environment, SCHEMA, add_prefix_for_prod


class Tag(db.Model):
    __tablenme__ = 'tags'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id'), nullable=False))
    image_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('images.id')), nullable=False)
    name = db.Column(db.String(75), nullable=False)

    image = db.relationship('Image', back_populates="tags")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'image_id': self.image_id,
            'tag_name': self.name
        }
