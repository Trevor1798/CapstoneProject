from app.models import db, environment, SCHEMA, Image


def seed_images():
    image_1 = Image(
        title = 'James Webb Space Telescope', user_id=1, description='Welcome to the new era of space images.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669931900/Photo-genius/web_first_images_release_1_ocpayj.png'
    )
    image_2 = Image(
        title = 'Florida Sunset', user_id=2, description='Does it get more beautiful than this Miami sunset?', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935548/Photo-genius/SunsetMiamiFloridaGLWJ_snzh6f.png'
    )
    image_3= Image(
        title = 'light butterfly', description='Surreal light art.', user_id=3, image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935593/Photo-genius/tumblr_b4235bc088703bd70c3e17bd2161a06a_1e9e2f92_540_hmbayu.jpg'
    )
    image_4 = Image(
        title = 'sky', user_id=4, description=' Surreal light art of the sky.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935647/Photo-genius/tumblr_49cee743c0993ec11c9c5394aa55ef9c_1a4ebb37_500_qhkdls.jpg'
    )
    image_5 = Image(
        title = 'Ginza Tokyo', user_id=5, description='Night life in Ginza, Tokyo', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935708/Photo-genius/ginza-tokyo-around-midnight-4k_1602353876-2048x1575_mhxupw.jpg'
    )
    image_6 = Image(
        title = 'Hong Kong CityScape', user_id=6, description='Look at this image of this Hong Kong Building!', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935763/Photo-genius/city-hong-kong-cityscape-urban-metropolis-building_1596916637-2048x1280_zh8zc3.jpg'
    )
    image_7 = Image(
        title = 'Singapore CityScape ', user_id=7, description='Beautiful evening in Singapore City.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935799/Photo-genius/singapore-skyscrapers-marina-bay-sands-evening_1569187783_rcsbxe.jpg'
    )
    image_8= Image(
        title = 'Lake Wakatipu', user_id=8, description='Mountain range in New Zealand.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935831/Photo-genius/lake-wakatipu-in-newzealand_1569187788_yr5kct.jpg'
    )
    image_9 = Image(
        title = 'Allegheny Mountains', user_id=1, description='Image of the Allegheny mountain range.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935865/Photo-genius/allegheny-mountains-4k_1630079636-2048x1365_rg39xm.jpg'
    )
    image_10 = Image(
        title = 'Mars Sunset', user_id=2, description='Look at this photo I took on my vacation to Mars!', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935907/Photo-genius/mars-sunset-4k_1629256144-2048x1153_aojxwu.jpg'
    )
    image_11 = Image(
        title = 'Autumn is here', user_id=3, description='Who else loves this time of year.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935933/Photo-genius/autumn-photography-4k_1660849791-2048x1365_hgxnpi.jpg'
    )
    image_12 = Image(
        title = 'Jolly times', user_id=4, description='It\'s the most wonderful time...', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935962/Photo-genius/fireworks-celebrations-4k_1630612242-2048x1365_wiplvl.jpg'
    )
    image_13 = Image(
        title = 'SWE Favorite Bridge', user_id=5, description='I heard SWE love this bridge.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669935991/Photo-genius/san-francisco-bay-bridge_1569187782_cptfpj.jpg'
    )
    image_14 = Image(
        title = 'Paris', user_id=6, description='Took this while skydiving over Paris.', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936022/Photo-genius/eiffel-tower-france-city-at-night-4k_1540756881_mgyjze.jpg'
    )
    image_15 = Image(
        title = 'Pink Sunset', user_id=7, description='What a color pallette', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936055/Photo-genius/dawn-city-panorama-4k_1538066745_aal0ks.jpg'
    )
    image_16 = Image(
        title = '2022 Qatar', user_id=8, description='The World Cup is being held here this year!', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936087/Photo-genius/Doha_Qatar_Skyline710439032_otqcmm.jpg'
    )
    image_17 = Image(
        title = 'Golden Child', user_id=1, description='This cat will rule the world', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936112/Photo-genius/cat-golden-eyes-lying-down-4k_1615884681-2048x1365_vhtppz.jpg'
    )
    image_18 = Image(
        title = 'FAANG-Mobile', user_id=2, description='This car was handed to me as a signing bonus with a FAANG corporation', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936209/Photo-genius/bmw-i8-white-side-view-wallpaper-preview_g7xdaz.jpg'
    )
    image_19 = Image(
        title = 'Santorini, Greece', user_id=3, description='This place is lowkey overrated for tourists, beautiful if you live here though', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669936610/Photo-genius/pexels-photo-1518500_szzsfa.jpg'
    )
    image_20 = Image(
        title = 'Andromeda', user_id=4, description='If you look very closely you can see back in time', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937453/Photo-genius/Andromeda_tj1fwp.jpg'
    )
    image_21 = Image(
        title = 'Lightning Strikes!', user_id=3, description='Wow still can\'t beleive I took this photo while attending App Academy', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937466/Photo-genius/Lightning_zgvv50.jpg'
    )
    image_22 = Image(
        title = 'Cruise Ship', user_id=5, description='If you look very closely you can see me on the cruise ship', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937469/Photo-genius/cruise_zn2beb.jpg'
    )
    image_23 = Image(
        title = 'Butterfly', user_id=7, description='Got him right out of the coccoon', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937732/Photo-genius/butterfly-4089197_960_720_2_cysxme.jpg'
    )
    image_24 = Image(
        title = 'Cologne Cathedral', user_id=8, description='Cologne Cathedral in Germany', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937698/Photo-genius/cologne-cathedral-in-gemany-4k_1546277758_qabvms.jpg'
    )
    image_25 = Image(
        title = 'Pagoda', user_id=1, description='Pagoda roof during night time', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937674/Photo-genius/pagoda-roof-building-night-lighting-4k_1538066616_lnywum.jpg'
    )
    image_26 = Image(
        title = 'Night City Sunset', user_id=2, description='Night City Sunset Skyscrapers Beach', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937636/Photo-genius/night-city-sunset-skyscrapers-beach-4k_1538066946_aghzjb.jpg'
    )
    image_27 = Image(
        title = 'Long Exposure Road', user_id=3, description='Being creative can be hard, naming things is also difficult as far as seed data is concerned', image_url='https://res.cloudinary.com/dgmw9nv61/image/upload/v1669937589/Photo-genius/night-city-road-clouds-overcast-4k_1538067239_um7dps.jpg'
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
    db.session.commit()


def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

        db.session.commit()
