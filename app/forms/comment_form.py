from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    description = StringField('Description', validators=[DataRequired()])
    user_id = IntegerField('userId', validators=[DataRequired()])
    image_id = IntegerField('imageId', validators=[DataRequired()])
    submit = SubmitField('Submit')
