# Lab 5, SA7

*Compli-Pet Platform API*

[deployed url](https://snowxposts.netlify.app)

[client github url](https://github.com/dartmouth-cs52-21S/platform-client-snow-kang)

[netlify client url](https://snowxposts.netlify.app/)

[heroku api url](https://compli-pet-platform-server.herokuapp.com/)

## What Worked Well
Lab 5: The mongodb documentation was really straightforward so the routing went smoothly. Adding new features was super fun; going back and forth between backend and frontend was really cool and shows how much we have learned in this class!

SA7: This SA helped me understand JWT and Passport a lot more. It also gave me the chance to go back and add more styling that I didn't have time to add before. I also fixed the horizontal glitch that I struggled with in Lab 5. 

## What Didn't
Lab 5: I had a typo in my schema where I wrote "contents" instead of "content" and it took me hours to figure out, so that wasn't great. There is a weird horizontal glitch that happens sometimes due to the scrollbar sometimes being present and sometimes not. I also am a bit confused about the ordering of the items in server.js. Out of the following four items, which have to go in a certain order and which are free to move around: the default index route, DB setup, registering routes, and starting the server? 

SA7: I couldn't figure out how to do the author by reference in the Schema and instead did it using authorname :( I tried to separate modal into a separate component but ran out of time

## Extra Credit
Lab 5:
- Changed my frontend and backend to support commenting
- Sort comments with newest first
- Support comment deletion
- Input validation for comments: no duplicate comments, no empty comments
- Image Upload w AWS S3
- Added parents array field to schema in addition to animal tag. Separated by commas and shows up as separate bubbles in display (animal tag as blue and parents as pink).
  - Easy to visualize in the edit page where you are shown a dynamic preview of what the card (icon + tags) will look like
- Added search bar that works in conjunction with the checkboxes (if you click on the dog checkmark and type in "coco" it will look for posts that match both criterion)
  - The search bar covers Title, Tags, and Parents

SA7:
- Live preview of markdown editing
- Prevent duplicate animal tags (a string), prevent duplicate parent tags (contained in an array of strings) from displaying
- Added Error Reducer along with Auth Reducer to display toast notifications upon exceptions
- Redirects you to signin page if you try to edit, create, or delete a post
- Added mobile compatibility and a lot of more styling! Fixed a lot of edge cases such as super long data entries, oversized gifs, etc (functional in all screen sizes)
- Incorporated all the suggestions Jordan, the TA who graded my Lab4, gave (removing \<br/\>'s, connected errors to redux state, adding a clear error to handle toasts, creating more components to further modularize my code) EXCEPT for the one about separating the modal :( I tried but struggled and ran out of time </3

## Screenshots
Lab 5:
![screen1](https://user-images.githubusercontent.com/38738497/118359051-97472c80-b54f-11eb-8453-ba2b7d353d8f.PNG)
![screen2](https://user-images.githubusercontent.com/38738497/118359052-97dfc300-b54f-11eb-9692-27336ddbaab9.PNG)
![screen3](https://user-images.githubusercontent.com/38738497/118359053-97dfc300-b54f-11eb-918e-ed08ee73e3dc.PNG)
![screen4](https://user-images.githubusercontent.com/38738497/118359054-97dfc300-b54f-11eb-8cb3-a3880145771d.PNG)

SA7:
Desktop & Mobile Screens for header:
![headerScreens](https://user-images.githubusercontent.com/38738497/118756592-42e6ca00-b839-11eb-9eca-0e57df9ab9bf.PNG)
Desktop & Mobile Screens for cards:
![cardsScreen](https://user-images.githubusercontent.com/38738497/118756597-45e1ba80-b839-11eb-8c18-742965902f5c.PNG)
Desktop & Mobile Screens for expanded cards:
![detailsScreen](https://user-images.githubusercontent.com/38738497/118756601-48441480-b839-11eb-84fa-7208a179e0fb.PNG)
Desktop & Mobile Screens for signin:
![signInScreens](https://user-images.githubusercontent.com/38738497/118756604-4aa66e80-b839-11eb-8321-a75827e82969.PNG)





