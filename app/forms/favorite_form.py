from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange


class FavoriteForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    imageId = IntegerField('imageId', validators=[DataRequired()])
    submit = SubmitField('Submit')
