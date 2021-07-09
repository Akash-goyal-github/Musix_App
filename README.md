 <h1 align="center"> Musix-App :boom::100:</h1>


 <p align="center">
  
Who doesn't appreciate good music? :zany_face:

- Musix-App is a platform where you can browse nonstop tunes around the world. :heart_eyes: The platform is very easy to use for people from all walks of life and of any age. They can search music by album/ by artist or by country. :partying_face: :gift_heart: 

- Login/registration is required only if the you want to see recommendations or add songs to favorites. :100: :boom:
 
  </p>



---

This project was generated with Angular CLI: 11.2.1. We used itunes API to fetch the data.
Source:https://developer.apple.com/develop/

Objective:
1. Enabling the user to play music artist-wise, album-wise and country-wise.
2. Enabling the user to save their favourites by signing in.
3. User can also recommend songs and access the list of songs reccomended by others by logging in.
4. User can access the video links of music from different genres.
5. User can add comments to the songs.
6. User can logout.

RoadMap:
1. Register-->login/continue without registration.
2. Play songs by artist/ album/ country.
3. Add favourites/recommendations (for registered users).

Actions:
1. Fork this repository.
2. Clone the repository and cd into it/ import the spring boot files.
3. Install dependencies through npm install in Angular Musix_App.
4. Run the emailsender backend using the command node app.js which shall run on port:3000.
5. Run the musix_app_backend as Spring boot App on the server port 8282 and configure the datasource with your mysql user credentials(in Application Properties}.
6. Run the musix_reg_login_backend as Spring boot App on the tomcat port 8080 and configure your mongodb through application properties file.
7. Run the frontend npm run start which shall run on port:4200.

Prerequisites:
-JDK 1.8 or later
-Maven 3 or later
-MySQL 5.6 or later
-MongoDB 4.2
 
Stack:
-Spring MVC
-Spring Security
-Spring Data JPA
-Maven
-JSP
-MySQL
-MongoDB

Know your server:
1. To register the user- post- http://localhost:8282/register- Expecting data-{ name,email, password, image }
2. To authenticate User - post- http://localhost:8282/login -Expecting data-{email , password}
3. To get specific user details- get- http://localhost:8282/getuserdetails/{userId}- expecting header - { 'Authorization', Bearer ${token} }.
4. To add favourites- post- http://localhost:8080/favourites/addtofav- Expecting data-{userEmail, trackName, trackId, albumName, trackurl, trackGenre, isaddedtofav }
5. To get favourites- get -http://localhost:8080/favourites/getallfav- expecting header - { 'Authorization', Bearer ${token} }.
6. To add recommendations- post -http://localhost:8080/recommend/addtorecommend-Expecting data-{userEmail, trackName, trackId, albumName, trackurl, trackGenre, isaddedtofav }
7. To get all recommendations- get -http://localhost:8080/recommend/getallrecommend- expecting header - { 'Authorization', Bearer ${token} }.

Steps to Setup the Spring Boot Back end app:
1.Clone the application
2.Create MySQL database.
3.Change MySQL username and password as per your MySQL installation.
-open src/main/resources/application.properties file.
-change spring.datasource.username and spring.datasource.password properties as per your mysql installation.
4.Run the app.
-run as spring Boot App/ command: mvn spring-boot:run.

Steps to be followed in running Angular:
1.npm install, npm run build, npm serve.
2. For unit test cases testing: npm run test via Karma.
3. For e2e test cases testing: npm run serve, npm run e2e via Protractor.

features used for UI display:
1. Angular Material
2. Responsive Design, Bootstrap, HTML 5.1, CSS

For further help:
1. To get more help on the Angular CLI use ng help or go check out the Angular CLI README.





