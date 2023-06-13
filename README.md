# Ionic Notes App Backend
This project is a demonstration of a working ionic-notes-app backend


## Demo

This application is deployed on Vercel. Please check it out: [here](https://ionic-notes-app-backend.vercel.app/api/note/).


## 🛠 Installation and setup

- First clone the project `git clone https://github.com/mdalireza021/ionic-notes-backend.git`
- change the current directory in your terminal or command `cd ionic-notes-backend`
- Install all the necessary packages using `npm i`
- Now run the command `npm tart`
- And you should see the below message in the browser at url `http://localhost:8080`


## ⚙ Tools and Technologies used

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

* features:
  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data


## Live API Routes Documentations

```sh
_____________________________________________________________________________________________________
| METHOD:                   URL:                                             // DESCRIPTION         |
|___________________________________________________________________________________________________|
| GET:      https://ionic-notes-app-backend.vercel.app/api/note/getall/       // get all notes      |
| GET:      https://ionic-notes-app-backend.vercel.app/api/note/get/:id       // get a single note  |
| POST:     https://ionic-notes-app-backend.vercel.app/api/note/new           // create a new note  |          
| PATCH:    https://ionic-notes-app-backend.vercel.app/api/note/update/:id    // update a note      |
| DELETE:   https://ionic-notes-app-backend.vercel.app/api/note/delete/:id    // delete a note      |
| DELETE:   https://ionic-notes-app-backend.vercel.app/api/note/deleteall     // delete all notes   |
|___________________________________________________________________________________________________|
```

## Thanks!

thank you for being here💙