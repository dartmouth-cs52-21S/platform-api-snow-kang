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

## Screenshots
