from app.models import db, environment, SCHEMA, Image


def seed_images():
    image_one = Image(
        title = 'James Webb Space Telescope', user_id=1, description='Welcome to the new era of space images.', image_url='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/web_first_images_release.png?itok=g21NrdRw'
    )
    image_two = Image(
        title = 'Florida Sunset', user_id=1, description='Does it get more beautiful than this Miami sunset?', image_url='https://www.getlostwithjackie.com/wp-content/uploads/2016/07/SunsetMiamiFloridaGLWJ.png'
    )
    image_three = Image(
        title = 'light butterfly', description='Surreal light art.', user_id=1, image_url='https://64.media.tumblr.com/b4235bc088703bd70c3e17bd2161a06a/9841d0484512d868-3c/s540x810/1e9e2f92eeb22a97b3f54a4fdec176fb8a78986a.jpg'
    )
    image_four = Image(
        title = 'sky', user_id=1, description=' Surreal light art of the sky.', image_url='https://64.media.tumblr.com/49cee743c0993ec11c9c5394aa55ef9c/732fd28b2b4a72b8-3f/s500x750/1a4ebb3796624a44c504a08ca8223867ea431d1d.jpg'
    )
    image_five = Image(
        title = 'JWST ', user_id=1, description='Image of the James Webb Space Telescope!', image_url='https://cdn.mos.cms.futurecdn.net/CvKUQQ5jB7vHkGZcAxGNpB.jpg'
    )

    db.session.add(image_one)
    db.session.commit()


def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
