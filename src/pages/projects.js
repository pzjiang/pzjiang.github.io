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
                    <h1>Name: Home Defender Boof</h1>
                    <p> This project was made using JavaScript, HTML, and CSS. The premise of the game is a grape named Boof
                        is defending his home from invading raisins. In order to eliminate the raisins that are invading, the player
                        must enter in the matching sequence of arrow key inputs. Images can be found in the gallery below!
                    </p>

                    <Link class="projectlinks" to="/boofpage">Boof Gallery :) </Link>

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