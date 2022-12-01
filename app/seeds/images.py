from app.models import db, environment, SCHEMA, Image


def seed_images():
    image_1 = Image(
        title = 'James Webb Space Telescope', user_id=1, description='Welcome to the new era of space images.', image_url='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/web_first_images_release.png?itok=g21NrdRw'
    )
    image_2 = Image(
        title = 'Florida Sunset', user_id=2, description='Does it get more beautiful than this Miami sunset?', image_url='https://www.getlostwithjackie.com/wp-content/uploads/2016/07/SunsetMiamiFloridaGLWJ.png'
    )
    image_3= Image(
        title = 'light butterfly', description='Surreal light art.', user_id=3, image_url='https://64.media.tumblr.com/b4235bc088703bd70c3e17bd2161a06a/9841d0484512d868-3c/s540x810/1e9e2f92eeb22a97b3f54a4fdec176fb8a78986a.jpg'
    )
    image_4 = Image(
        title = 'sky', user_id=4, description=' Surreal light art of the sky.', image_url='https://64.media.tumblr.com/49cee743c0993ec11c9c5394aa55ef9c/732fd28b2b4a72b8-3f/s500x750/1a4ebb3796624a44c504a08ca8223867ea431d1d.jpg'
    )
    image_5 = Image(
        title = 'JWST ', user_id=5, description='Image of the James Webb Space Telescope!', image_url='https://cdn.mos.cms.futurecdn.net/CvKUQQ5jB7vHkGZcAxGNpB.jpg'
    )
    image_6 = Image(
        title = 'Hong Kong CityScape', user_id=6, description='Look at this image of this Hong Kong Building!', image_url='https://www.pixel4k.com/wp-content/uploads/2020/08/city-hong-kong-cityscape-urban-metropolis-building_1596916637-2048x1280.jpg'
    )
    image_7 = Image(
        title = 'Singapore CityScape ', user_id=7, description='Beautiful evening in Singapore City.', image_url='https://www.pixel4k.com/wp-content/uploads/2019/09/singapore-skyscrapers-marina-bay-sands-evening_1569187783.jpg'
    )
    image_8= Image(
        title = 'Lake Wakatipu', user_id=8, description='Mountain range in New Zealand.', image_url='https://www.pixel4k.com/wp-content/uploads/2019/09/lake-wakatipu-in-newzealand_1569187788.jpg'
    )
    image_9 = Image(
        title = 'Allegheny Mountains', user_id=1, description='Image of the Allegheny mountain range.', image_url='https://www.pixel4k.com/wp-content/uploads/2021/08/allegheny-mountains-4k_1630079636-2048x1365.jpg'
    )
    image_10 = Image(
        title = 'Mars Sunset', user_id=2, description='Look at this photo I took on my vacation to Mars!', image_url='https://www.pixel4k.com/wp-content/uploads/2021/08/mars-sunset-4k_1629256144-2048x1153.jpg'
    )
    image_11 = Image(
        title = 'Autumn is here', user_id=3, description='Who else loves this time of year.', image_url='https://www.pixel4k.com/wp-content/uploads/2022/08/autumn-photography-4k_1660849791-2048x1365.jpg'
    )
    image_12 = Image(
        title = 'Jolly times', user_id=4, description='It\'s the most wonderful time...', image_url='https://www.pixel4k.com/wp-content/uploads/2021/09/fireworks-celebrations-4k_1630612242-2048x1365.jpg'
    )
    image_13 = Image(
        title = 'SWE Favorite Bridge', user_id=5, description='I heard SWE love this bridge.', image_url='https://www.pixel4k.com/wp-content/uploads/2019/09/san-francisco-bay-bridge_1569187782.jpg'
    )
    image_14 = Image(
        title = 'Paris', user_id=6, description='Took this while skydiving over Paris.', image_url='https://www.pixel4k.com/wp-content/uploads/2018/10/eiffel-tower-france-city-at-night-4k_1540756881.jpg'
    )
    image_15 = Image(
        title = 'Pink Sunset', user_id=7, description='What a color pallette', image_url='https://www.pixel4k.com/wp-content/uploads/2018/09/dawn-city-panorama-4k_1538066745.jpg'
    )
    image_16 = Image(
        title = '2022 Qatar', user_id=8, description='The World Cup is being held here this year!', image_url='https://www.pixel4k.com/wp-content/uploads/2018/03/Doha%20Qatar%20Skyline710439032.jpg'
    )
    image_17 = Image(
        title = 'Golden Child', user_id=1, description='This cat will rule the world', image_url='https://www.pixel4k.com/wp-content/uploads/2021/03/cat-golden-eyes-lying-down-4k_1615884681-2048x1365.jpg'
    )
    image_18 = Image(
        title = 'FAANG-Mobile', user_id=2, description='This car was handed to me as a signing bonus with a FAANG corporation', image_url='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg'
    )
    image_19 = Image(
        title = 'Santorini, Greece', user_id=3, description='This place is lowkey overrated for tourists, beautiful if you live here though', image_url='https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg'
    )
    image_20 = Image(
        title = 'Andromeda', user_id=4, description='If you look very closely you can see back in time', image_url='https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg'
    )
    image_21 = Image(
        title = 'Night Sky', user_id=5, description='Wow doesn\'t get much better than this', image_url='https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
    )
    image_22 = Image(
        title = 'Amazon', user_id=6, description='Might\'ve unlocked my third eye when I was here not sure yet.', image_url='https://images.pexels.com/photos/3222686/pexels-photo-3222686.jpeg'
    )
    image_23 = Image(
        title = 'Colorful Sky', user_id=7, description='If you don\'t love this picture then we might have some problems', image_url='https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg'
    )
    image_24 = Image(
        title = 'Telescope Image', user_id=8, description='First time using a telescope did I do good?', image_url='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg'
    )
    image_25 = Image(
        title = 'Northern Lights', user_id=1, description='Looks just like a hurricane forming in the sky!', image_url='https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg'
    )
    image_26 = Image(
        title = 'New Airbnb', user_id=2, description='Check out this Airbnb I found, apparently you can stay here for free!', image_url='https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg'
    )
    image_27 = Image(
        title = 'Lightning Strikes!', user_id=3, description='Wow still can\'t beleive I took this photo while attending App Academy', image_url='https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg'
    )
    image_28 = Image(
        title = 'Night Life', user_id=4, description='Beautiful city signs, love the night life', image_url='https://images.pexels.com/photos/3678857/pexels-photo-3678857.jpeg'
    )
    image_29 = Image(
        title = 'Cruise Ship', user_id=5, description='If you look very closely you can see me on the cruise ship', image_url='https://images.pexels.com/photos/2725479/pexels-photo-2725479.jpeg'
    )
    image_30 = Image(
        title = 'Milky Way', user_id=6, description='Took this image on Elon Musk\'s space shuttle to Mars!', image_url='https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg'
    )
    image_31 = Image(
        title = 'Butterfly', user_id=7, description='Got him right out of the coccoon', image_url='https://cdn.pixabay.com/photo/2019/03/29/13/18/butterfly-4089197_960_720.jpg'
    )
    image_32 = Image(
        title = 'Cologne Cathedral', user_id=8, description='Cologne Cathedral in Germany', image_url='https://www.pixel4k.com/wp-content/uploads/2018/12/cologne-cathedral-in-gemany-4k_1546277758.jpg'
    )
    image_33 = Image(
        title = 'Pagoda', user_id=1, description='Pagoda roof during night time', image_url='https://www.pixel4k.com/wp-content/uploads/2018/09/pagoda-roof-building-night-lighting-4k_1538066616.jpg'
    )
    image_34 = Image(
        title = 'Night City Sunset', user_id=2, description='Night City Sunset Skyscrapers Beach', image_url='https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-sunset-skyscrapers-beach-4k_1538066946.jpg'
    )
    image_35 = Image(
        title = 'Long Exposure Road', user_id=3, description='Being creative can be hard, naming things is also difficult as far as seed data is concerned', image_url='https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-road-clouds-overcast-4k_1538067239.jpg'
    )


    db.session.add(image_1)
    db.session.add(image_2)
    db.session.add(image_3)
    db.session.add(image_4)
    db.session.add(image_5)
    db.session.add(image_6)
    db.session.add(image_7)
    db.session.add(image_8)
    db.session.add(image_9)
    db.session.add(image_10)
    db.session.add(image_11)
    db.session.add(image_12)
    db.session.add(image_13)
    db.session.add(image_14)
    db.session.add(image_15)
    db.session.add(image_16)
    db.session.add(image_17)
    db.session.add(image_18)
    db.session.add(image_19)
    db.session.add(image_20)
    db.session.add(image_21)
    db.session.add(image_22)
    db.session.add(image_23)
    db.session.add(image_24)
    db.session.add(image_25)
    db.session.add(image_26)
    db.session.add(image_27)
    db.session.add(image_28)
    db.session.add(image_29)
    db.session.add(image_30)
    db.session.add(image_31)
    db.session.add(image_32)
    db.session.add(image_33)
    db.session.add(image_34)
    db.session.add(image_35)
    db.session.commit()


def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

        db.session.commit()
