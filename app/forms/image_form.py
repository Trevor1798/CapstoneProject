from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class ImageForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    user_id = IntegerField('User_Id')
    image_url = StringField("Image_url", validators=[DataRequired()])
    submit = SubmitField('Submit')
