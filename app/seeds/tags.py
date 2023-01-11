from app.models import db, environment, SCHEMA, Tag

def seed_tags():
    tag_one = Tag(
        userId=3, image_id=1, name='space'
    )
    tag_two = Tag(
        userId = 1, image_id=2, name='sunsets'
    )

    db.session.add(tag_one)
    db.session.add(tag_two)
    db.session.commit()

def undo_tags():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

        db.session.commit()
