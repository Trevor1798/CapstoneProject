from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    comment_1 = Comment(
        description = "Tintin is just an allegory which shows that dark matter is really just made of fairy dust. You can tell this is the truth because Tumblr is censoring me, and Tintin has secret messages encoded in it with numerology.", user_id = 1, image_id = 2
    )
    comment_2 = Comment(
        description = 'Jim Morrison took the red pill.', user_id = 2, image_id= 1
    )
    comment_3= Comment(
        description = "Well thank you for clearing it all up for us.", user_id = 3, image_id = 1
    )
    comment_4 = Comment(
        description = 'Your point is? Well you managed to write an observation with absolutely no content at all. Well done.', user_id = 4, image_id= 1
    )
    comment_5 = Comment(
        description = "Twas ever thus. The irony is delicious.", user_id = 5, image_id = 1
    )
    comment_6 = Comment(
        description = 'Can you hear that ominous rumble? It\'s the unmistakeable pinging of millions of corn kernels against pot lids.', user_id = 6, image_id= 1
    )
    comment_7 = Comment(
        description = "Typical. Most commentators are in denial.", user_id = 7, image_id = 1
    )
    comment_8 = Comment(
        description = 'This does not surprise me. Said it before and I\'ll say it again.', user_id = 8, image_id= 1
    )
    comment_9 = Comment(
        description = "Was this web page written by an old-age pensioner? Absolute hypocrisy.", user_id = 1, image_id = 3
    )
    comment_10 = Comment(
        description = 'Seriously, people. Bit of insight might be in order. ', user_id = 2, image_id= 3
    )
    comment_11= Comment(
        description = "Nature abhors a vacuum, as does knowledge.", user_id = 3, image_id = 2
    )
    comment_12 = Comment(
        description = 'This thought is completely absurd. Not strictly relevant to this web page but I just wanted to say it!', user_id = 4, image_id= 2
    )
    comment_13 = Comment(
        description = "My thoughts as well. I wonder if they will ever get it.", user_id = 5, image_id = 2
    )
    comment_14 = Comment(
        description = 'We\'re being socially conditioned from early age. There is no end in sight.', user_id = 6, image_id= 2
    )
    comment_15 = Comment(
        description = "Yawn. This all sounds great until you remember there is such a thing as an unforeseeable future.", user_id = 7, image_id = 2
    )
    comment_16 = Comment(
        description = 'Charles Darwin discovered that snakes like jazz music.', user_id = 8, image_id= 2
    )
    comment_17 = Comment(
        description = "I now have a guide to what phone brands to get next.", user_id = 1, image_id = 4
    )
    comment_18 = Comment(
        description = 'Sleek!! Love the use of gradient and pattern!', user_id = 2, image_id= 4
    )
    comment_19= Comment(
        description = "Purple. This is new school.", user_id = 3, image_id = 4
    )
    comment_20 = Comment(
        description = 'I approve your work!!', user_id = 4, image_id= 3
    )
    comment_21 = Comment(
        description = "I want to learn this kind of atmosphere! Teach me.", user_id = 5, image_id = 3
    )
    comment_22 = Comment(
        description = 'You just won the internet!', user_id = 6, image_id= 3
    )
    comment_23 = Comment(
        description = "Excellent work you have here.", user_id = 7, image_id = 3
    )
    comment_24 = Comment(
        description = 'Extra thought out! Trying it now.', user_id = 8, image_id= 3
    )
    comment_25 = Comment(
        description = "Minimal shot m8", user_id = 1, image_id = 5
    )
    comment_26 = Comment(
        description = 'Nice use of contrast in this colours :-)', user_id = 2, image_id= 5
    )
    comment_27= Comment(
        description = "This atmosphere blew my mind.", user_id = 3, image_id = 5
    )
    comment_28 = Comment(
        description = 'I think I\'m crying. It\'s that radiant.!', user_id = 4, image_id= 5
    )
    comment_29 = Comment(
        description = "Truly magnificent shot!", user_id = 5, image_id = 4
    )
    comment_30 = Comment(
        description = 'My 72 year old son rates this boldness very clean, friend.', user_id = 6, image_id= 4
    )
    comment_31 = Comment(
        description = "Sleek. So sleek.", user_id = 7, image_id = 4
    )
    comment_32 = Comment(
        description = 'This is fresh work =)', user_id = 8, image_id= 4
    )
    comment_33 = Comment(
        description = "Such style, many shape, so sleek", user_id = 1, image_id = 6
    )
    comment_34 = Comment(
        description = 'Just beastly mate', user_id = 2, image_id= 6
    )
    comment_35= Comment(
        description = "Let me take a nap... great camera angle, anyway.", user_id = 3, image_id = 6
    )
    comment_36 = Comment(
        description = 'This shot has navigated right into my heart.', user_id = 4, image_id= 6
    )
    comment_37 = Comment(
        description = "Gold. It makes me laugh...", user_id = 5, image_id = 6
    )
    comment_38 = Comment(
        description = 'Appealing work you have here.', user_id = 6, image_id= 7
    )
    comment_39 = Comment(
        description = "This is fun and minimal.", user_id = 7, image_id = 5
    )
    comment_40 = Comment(
        description = 'I think I\'m crying. It\'s that delightful.', user_id = 8, image_id= 5
    )
    comment_41 = Comment(
        description = "Alluring! I admire the use of type and background image!", user_id = 1, image_id = 7
    )
    comment_42 = Comment(
        description = 'Outstandingly clean concept!!', user_id = 2, image_id= 7
    )
    comment_43= Comment(
        description = "Style, playfulness, colour, shot revolutionary", user_id = 3, image_id = 7
    )
    comment_44 = Comment(
        description = 'Truly thought out! You are so inspiring!', user_id = 4, image_id= 7
    )
    comment_45 = Comment(
        description = "Radiant. So gorgeous.", user_id = 5, image_id = 7
    )
    comment_46 = Comment(
        description = 'This design blew my mind.', user_id = 6, image_id= 7
    )
    comment_47 = Comment(
        description = "Mission accomplished. It's incredible.", user_id = 7, image_id = 8
    )
    comment_48 = Comment(
        description = 'I adore your icons dude', user_id = 8, image_id= 1
    )
    comment_49 = Comment(
        description = "Nice use of fuschia in this shot dude", user_id = 1, image_id = 8
    )
    comment_50 = Comment(
        description = 'Clean. So fun.', user_id = 2, image_id= 8
    )
    comment_51= Comment(
        description = "YEW!", user_id = 3, image_id = 8
    )
    comment_52 = Comment(
        description = 'Classic texture m8', user_id = 4, image_id= 8
    )
    comment_53 = Comment(
        description = "Such illustration, many style, so cool", user_id = 5, image_id = 8
    )
    comment_54 = Comment(
        description = 'I want to learn this kind of shot! Teach me.', user_id = 6, image_id= 8
    )
    comment_55 = Comment(
        description = "Just splendid dude", user_id = 7, image_id = 8
    )
    comment_56 = Comment(
        description = 'Highly sublime colour palette', user_id = 8, image_id= 4
    )



    db.session.add(comment_1)
    db.session.add(comment_2)
    db.session.add(comment_3)
    db.session.add(comment_4)
    db.session.add(comment_5)
    db.session.add(comment_6)
    db.session.add(comment_7)
    db.session.add(comment_8)
    db.session.add(comment_9)
    db.session.add(comment_10)
    db.session.add(comment_11)
    db.session.add(comment_12)
    db.session.add(comment_13)
    db.session.add(comment_14)
    db.session.add(comment_15)
    db.session.add(comment_16)
    db.session.add(comment_17)
    db.session.add(comment_18)
    db.session.add(comment_19)
    db.session.add(comment_20)
    db.session.add(comment_21)
    db.session.add(comment_22)
    db.session.add(comment_23)
    db.session.add(comment_24)
    db.session.add(comment_25)
    db.session.add(comment_26)
    db.session.add(comment_27)
    db.session.add(comment_28)
    db.session.add(comment_29)
    db.session.add(comment_30)
    db.session.add(comment_31)
    db.session.add(comment_32)
    db.session.add(comment_33)
    db.session.add(comment_34)
    db.session.add(comment_35)
    db.session.add(comment_36)
    db.session.add(comment_37)
    db.session.add(comment_37)
    db.session.add(comment_38)
    db.session.add(comment_39)
    db.session.add(comment_40)
    db.session.add(comment_41)
    db.session.add(comment_42)
    db.session.add(comment_43)
    db.session.add(comment_44)
    db.session.add(comment_45)
    db.session.add(comment_46)
    db.session.add(comment_47)
    db.session.add(comment_48)
    db.session.add(comment_49)
    db.session.add(comment_50)
    db.session.add(comment_51)
    db.session.add(comment_52)
    db.session.add(comment_53)
    db.session.add(comment_54)
    db.session.add(comment_55)
    db.session.add(comment_56)
    # db.session.add(comment_57)
    # db.session.add(comment_58)
    # db.session.add(comment_59)
    # db.session.add(comment_60)
    # db.session.add(comment_61)
    # db.session.add(comment_62)
    # db.session.add(comment_63)
    # db.session.add(comment_64)
    # db.session.add(comment_65)
    # db.session.add(comment_66)
    # db.session.add(comment_67)
    # db.session.add(comment_68)
    # db.session.add(comment_69)
    # db.session.add(comment_70)
    # db.session.add(comment_71)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

        db.session.commit()
