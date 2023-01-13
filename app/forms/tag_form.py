from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class TagForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    imageId = IntegerField('imageId', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Submit')
