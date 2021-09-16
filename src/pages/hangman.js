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
                <div class="slide" slide="1" annot="Homepage of Boilerup Hangman">
                    <img class="galleryimage" src="/hangtitle.PNG" alt="Slide 1" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="2" annot="Gameplay picture">
                    <img class="galleryimage" src="/hangmanGameplay.PNG" alt="Slide 2" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="3" annot="Screen displayed after loss">
                    <img class="galleryimage" src="/losescreen.PNG" alt="Slide 3" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="4" annot="High scores window">
                    <img class="galleryimage" src="/highscores.PNG" alt="Slide 4" />
                </div>


            </div>
            <div class="projectheadings">
                <ul>
                    <li>Purpose: To make a fun little game to play while bored</li>
                    <li>Languages used: Python</li>
                    <li>Description: Hangman made in a Purdue theme. High scores are saved
                        in a text file, and can be displayed in a automatically scrolling window. Each move is timed,
                        so think quickly!
                    </li>
                </ul>
            </div>






        </Layout >

    )

}

export default HangmanPage