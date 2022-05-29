import * as React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"




const ProjectPage = () => {

    return (

        <Layout>
            <title>Projects</title>

            <div class="columncontainer">

                <div class="column">
                    <img src="hangtitle.PNG" class="imageteasers" />
                </div>

                <div class="column">
                    <h1>Name: Boilerup Hangman</h1>
                    <p> This project was made exclusively with python, using a graphics library.
                        Text files are used to store high scores, as well as the word bank which
                        the game pulls from for each round. The theme is Purdue, thus in order to keep
                        the game child friendly, a block "P" was used instead of a man hanging. For images,
                        please check out the link below!
                    </p>

                    <Link class="projectlinks" to="/hangman">Hangman Gallery :) </Link>
                </div>
            </div>
            <div class="spacing"> </div>

            <div class="columncontainer">
                <div class="column">
                    <h1>Name: Purdue Circle</h1>
                    <p> This project was made using React as the frontend and Rails as the backend, as well as Postgres as the database.
                        The web app is a model of the common social media apps prevalent in our daily lives, allowing users to follow and message
                        each other, as well as interact with each other's posts. Check out some pictures of the different features with the link below!
                    </p>

                    <Link class="projectlinks" to="/boofpage">Purdue Circle Gallery :) </Link>

                </div>

                <div class="column">
                    <img src="booftitle.PNG" class="imageteasers" />

                </div>
            </div>
            <div class="spacing"> </div>

            <div class="projectheadings">

                For more, please check out my GitHub! Just click on the GitHub symbol in the footer below!

            </div>






        </Layout >

    )

}

export default ProjectPage