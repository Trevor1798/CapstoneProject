from app.models import db, environment, SCHEMA, Favorite


def seed_favorites():
    favorite_one = Favorite(
        user_id=2, image_id=2
    )
    favorite_two = Favorite(
        user_id=3, image_id=3
    )

    db.session.add(favorite_one)
    db.session.add(favorite_two)
    db.session.commit()


def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
