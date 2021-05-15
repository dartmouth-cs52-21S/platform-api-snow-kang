# Lab 5 

*Compli-Pet Platform API*

[client url](https://snowxposts.netlify.app/)

[api url](https://compli-pet-platform-server.herokuapp.com/)

## What Worked Well
- The mongodb documentation was really straightforward so the routing went smoothly. 

## What Didn't
- I had a typo in my schema where I wrote "contents" instead of "content" and it took me hours to figure out, so that wasn't great. I also am a bit confused about the ordering of the items in server.js. Out of the following four items, which have to go in a certain order and which are free to move around: the default index route, DB setup, registering routes, and starting the server? 

## Extra Credit
- Changed my frontend and backend to support commenting
- Sort comments with newest first
- Support comment deletion
- Input validation for comments: no duplicate comments, no empty comments
- Added parents array field to schema. Separated by commas and shows up as separate bubbles in display.
- Added search bar that works in conjunction with the checkboxes (if you click on the dog checkmark and type in "coco" it will look for posts that match both criterion)
  - The search bar covers Title, Tags, and Parents
## Screenshots
![screen1](https://user-images.githubusercontent.com/38738497/118359051-97472c80-b54f-11eb-8453-ba2b7d353d8f.PNG)
![screen2](https://user-images.githubusercontent.com/38738497/118359052-97dfc300-b54f-11eb-9692-27336ddbaab9.PNG)
![screen3](https://user-images.githubusercontent.com/38738497/118359053-97dfc300-b54f-11eb-918e-ed08ee73e3dc.PNG)
![screen4](https://user-images.githubusercontent.com/38738497/118359054-97dfc300-b54f-11eb-8cb3-a3880145771d.PNG)
![screen5](https://user-images.githubusercontent.com/38738497/118359050-97472c80-b54f-11eb-9fcf-8ef14dc99c49.PNG)
