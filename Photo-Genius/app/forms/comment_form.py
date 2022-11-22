from flask import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    description = StringField('Description', validators=[DataRequired()])
    submit = SubmitField('Submit')
