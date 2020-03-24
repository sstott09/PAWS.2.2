## Table of Contents
<ul>
<li><a href="#preview">Preview</a></li>
<li><a href="#about">About</a></li>
<li><a href="#functionality">Functionality</a></li>
<li><a href="#technical-features">Technical Features</a></li>
<li><a href="#requirements">Requirements</a></li>
<li><a href="demo">Demo Application</a></li>
<li><a href="#build-tools">Build Tools</a></li>
<li><a href="#acknowledgements">Acknowledgements</a></li>

### Preview
![preview](https://github.com/sstott09/PAWS.2.2/blob/master/client/public/PAWS%20-%20New%20Adoption%20Checklist.gif?raw=true)

### About
In phase I of the migration from the original JavaScript Application (www.paws.wtf). I've created a Full Stack MERN (MondoDB, Express, React, Node.js) application framework to help facilitate the transition. This new website allows the user to create and customize a checklist of essential items for Pet Adopters bringing a new pet into their home via the New Adopters Checklist REACT Component. Upon accessing the app, the user is provided a template of recommended essential items for both Dog's and Cats. They will have the ability to add (utilzing a functional Modal) or delete any item to their checklist. Making it fully customizable to their specific need.

### Functionality
 While it appears to be a simple application on the surface, there is a lot going on under the hood. This "Full Stack" application utilizes MondoDB, which is a no-SQL database that stores data in the cloud. It also incorporates Express as a backend framework used primarily to build API's and React as a front-end UI Library/Framework. Plus, Node.js which is a JavaScript run-time that allows the developer to use JavaScript as a server-side technology or server-side language. Putting all of these together allows the developer to build a very powerful application.

### Technical Features
I've built the API with Node.js and Express, along with Mongoose to connect to the MongoDB Atlas cloud database via Mlab. I've also used a couple of other things on top of the MERN Stack. One being Reactstrap, a cool module that allows the developer to import Bootstrap components and utilize them as React components. Also utilized React-Transition Group which creates a fade-effect when adding or deleting a list item and implemented Redux and Reducer for state management. 

This application is comprised of (3) client-side components; 
* Navbar - which is constructed utilizing Reactstrap with it's own state when the hamburger menu is open or not.
* Item Modal - where we {connect} via the React-Redux package.  We have an add-item action, and have constructed the Modal via Reactstrap.
* Shopping List - which gets the items via an action function from the back-end, and the list group is created via Reactstrap which utilizes react-transition with the CSSTransition for the fade-in and fade-out effect with list item additions and deletions.

Phase II - will incorporate Authentication, User Profiles, and the ability to Save Searches via the Pet Finder API.

### Requirements
The application was deployed via Heroku site, so there are no requirements to use. 

### Demo Application
Want to give it a go?<br></br>
Access this site at: **https://stark-savannah-39499.herokuapp.com//**

### Build Tools
<ul>
<li>"body-parser": "^1.19.0"</li>
<li>"bootstrap": "^4.4.1"</li>
<li>"concurrently": "^5.1.0"</li>
<li>"dotenv": "^8.2.0"</li>
<li>"express": "^4.17.1"</li>
<li>"mongoose": "^5.9.4"</li>
<li>"axios": "^0.19.2"</li>
<li>"react": "^16.13.0"</li>
<li>"react-dom": "^16.13.0"</li>
<li>"react-redux": "^7.2.0"</li>
<li>"react-scripts": "3.4.0"</li>
<li>"react-transition-group": "^4.3.0"</li>
<li>"reactstrap": "^8.4.1"</li>
<li>"redux": "^4.0.5"</li>
<li>"redux-thunk": "^2.3.0"</li>

### Acknowledgements
Thanks to all of the authors of Node.js packages, Brad Traversy at Traversy Media for a fine MERN Stack tutorial, as well as to my instructors and fellow students at DU - they have all proven invaluable.