from app.models import db, environment, SCHEMA, Tag

def seed_tags():
    tag_one = Tag(
        image_id=1, tag_name='space'
    )
    tag_two = Tag(
        image_id=2, tag_name='sunsets'
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
