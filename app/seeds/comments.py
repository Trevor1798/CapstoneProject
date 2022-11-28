from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    comment_one = Comment(
        description = "This photo changed my life", user_id = 1, image_id = 3
    )
    comment_two = Comment(
        description = 'Wow! Spectacular!', user_id = 2, image_id= 3
    )

    db.session.add(comment_one)
    db.session.add(comment_two)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

        db.session.commit()
