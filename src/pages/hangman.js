import * as React from "react"
import Layout from "../components/layout.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'



const HangmanPage = () => {

    return (

        <Layout>
            <title>Hangman</title>
            <div class="projectheadings">
                <h1> Hangman Exhibit </h1>
                <p> Here are some pictures of the game:</p>
            </div>
            <div class="carousel">
                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="More to come, but enjoy this picture I took of NEOWISE for now.">
                    <img src="/hangtitle.PNG" alt="Slide 1" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="2" annot="BoilerMake - Cam Mouse">
                    <img src="/hangmanGameplay.PNG" alt="Slide 2" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="3" annot="VandyHacks - Social Savage">
                    <img src="/losescreen.PNG" alt="Slide 3" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="4" annot="HackTX - Farm Assist">
                    <img src="/highscores.PNG" alt="Slide 4" />
                </div>


            </div>







        </Layout >

    )

}

export default HangmanPage