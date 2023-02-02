# Photo-Genius: A Flickr Clone 📷

## Hello all future participants!   👋

# About Photo-Genius:

## Photo-Genius is a website clone, inspired by [Flickr](https://www.flickr.com/)
## Photo-Genius live link [PhotoGenius](https://photo-genius.onrender.com)
## Photo-Genius hosts a wide range of different inspiring photos that hopefully make you say Wow!. Photo-genius also allows you to upload your own images and            share with community. Photo-genius also has comment interactions on all photos to make you more connected to the community! This site is best suited for              those who'd like to view my ideas of beautiful pictures and add their own!
# Wiki
## Here's some more info on how the project came together!
-[MVP Feature List](https://github.com/Trevor1798/CapstoneProject/wiki/MVP-Feature-List)

-[Database Schema](https://github.com/Trevor1798/CapstoneProject/wiki/DB-Schema)

-[User Stories](https://github.com/Trevor1798/CapstoneProject/wiki/User-Stories)

-[WireFrames](https://github.com/Trevor1798/CapstoneProject/wiki/Photo-Genius-Wireframe)

# Tech Stack:
 - [<img src='https://img.shields.io/badge/-flask-yellow' alt='Javascript Logo'  target='_blank'/>](https://flask.palletsprojects.com/en/2.2.x/)
 - [<img src='https://img.shields.io/badge/-React-blue' alt='React Logo' target='_blank'/>](https://reactjs.org/)
 - [<img src='https://img.shields.io/badge/-HTML5-orange' alt='HTML Logo' target='_blank'/>](https://html.com/)
 - [<img src='https://img.shields.io/badge/-CSS-blue' target='_blank'/>](https://www.w3.org/Style/CSS/Overview.en.html)
 - [<img src='https://img.shields.io/badge/-postgres-lightgrey' target='_blank'/>](https://www.postgresql.org/)
 - [<img src='https://img.shields.io/badge/-render-purple' target='_blank'/>](https://render.com/)

 # Getting Started
 
 Directions to run on your local machine:
 
 
 1. Clone the repo
 - SSH Version:
 ``` 
 git@github.com:Trevor1798/CapstoneProject.git
 ```
 or
 -HTTPS Version:
 ```
 git clone https://github.com/nwinzig/YSTE.git](https://github.com/Trevor1798/CapstoneProject.git)
 ```
 2. Install Packages:
 ```
 pipenv install
cd react-app
npm install
 ```
 3. Create a .env file and set the environment variables for SECRET_KEY and DATABASE_URL to your choosing.
 4. Migrate and seed the files.
 ```
 flask run db init
flask run migrate
flask seed all
 ```
 5. Run the server and start the react app
 ```
 pipenv run flask run
cd react-app
npm start
 ```
 
# Usage
## Splash Page

- From the home page you can start your journey by Logging in or Signing up.


![deployedSplash](https://user-images.githubusercontent.com/102115797/204970982-6863bfe2-be7c-44b1-9980-4a9857ecd96c.PNG)


## Sign Up
- Here you can become an official user of the site! 


![deployedSignUp](https://user-images.githubusercontent.com/102115797/204971681-e553b0b0-e2dc-4236-9b19-32d93f81eacb.PNG)


## Log in
-After you become a member of Photo-genius you can login here!


![deployedLogin](https://user-images.githubusercontent.com/102115797/204971732-29d9dd06-8a77-4cf5-8adb-c569b27ee853.PNG)


## Explore Page
- Here you can view all current images Photo-genius has to offer!


![deployedExplore](https://user-images.githubusercontent.com/102115797/204971123-9ee04d27-098f-4434-a7f9-98b3907b077a.PNG)


## Upload Image
- Here Each authenticated and logged in users can add their favorite images to the site.


![deployedCreateImage](https://user-images.githubusercontent.com/102115797/204971267-13010450-0c49-4e24-a446-59855312c08d.PNG)


## Image Details
- Here users can look at each individual image to get further details on that image, if the user is authorized and logged in then they can leave/edit/delete their own comments to interact with the image as well! Also if the user owns this image then they can proceed to edit the image to their liking or delete the image entirely.


![deployedImageDetail](https://user-images.githubusercontent.com/102115797/204971929-023fa6f7-0964-4065-b5f7-a7a439176a8b.PNG)

![deployedComments](https://user-images.githubusercontent.com/102115797/204971946-1b31a8d6-9412-470a-bf74-00f89116b44f.PNG)


# Contact - Trevor Jones (devTrev) 
- [<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' target='_blank' alt='Github Logo' width=30px height=27px/>](https://github.com/Trevor1798)
- [<img src='https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' target='_blank' alt='LinkedIn Logo' width=30px height=30px/>](https://www.linkedin.com/in/trevor-jones-458b75202/)
