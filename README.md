# Squora

[Squora](https://squora.herokuapp.com/), a full-stack application inspired by the questions and answers website Quora, is an online platform for users ask questions related to investing.

Visit the [wiki](https://github.com/w-duffy/squora/wiki/Feature-List) for more information.

<!-- PROJECT LOGO -->


<!-- TABLE OF CONTENTS -->

  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
     <a href="#live-link">Live Link To Project</a>
    </li>
    <--  -->
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>

<br>
<br>



<br><br/>


## Technologies


- <img src="./public/images/documentation/technologies/jslogo.png" height=40 alt="JavaScript"> JavaScript
- <img src="./public/images/documentation/technologies/css3.png" height=40 alt="CSS"> CSS

- <img src="./public/images/documentation/technologies/nodejs.png" height=40 alt="Node.js"> Node.js
- <img src="./public/images/documentation/technologies/express.png" height=40 alt="Express"> Express
- <img src="./public/images/documentation/technologies/postgres.png" height=40 alt="PostgreSQL"> PostgreSQL
- <img src="./public/images/documentation/technologies/sequelize.png" height=40 alt="Sequelize"> Sequelize
- <img src="public/images/react.svg" alt="React" height="40"> React
- <img src="public/images/redux.svg" alt="Redux" height="40"> Redux

<br><br/>

<!-- GETTING STARTED -->

## Getting Started

To render a local copy please follow the below steps.


### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/w-duffy/squora.git
   ```
2. Install NPM packages in /frontend folder
   ```bash
   npm install
   ```
3. Install NPM packages in /backend folder
   ```bash
   npm install
   ```
4. Create a **.env** file based on the example with proper settings for your
   development environment

5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Migrate your database, seed your database, and run your express app from your backend and frontend folders

   ```bash
   npx dotenv sequelize-cli db:migrate
   ```

   ```bash
   npx dotenv sequelize-cli db:seed:all

   ```

   ```bash
    npm start
   ```

---

<!-- CONTACT -->

## Contact

Email: w.duffy@outlook.com

Linkedin: [My Linkedin](https://www.linkedin.com/in/will-duffy-a46a7a8a/)

Project Link: [Project GitHub Link](https://github.com/w-duffy/squora)
