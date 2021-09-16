import * as React from "react"
import Layout from "../components/layout.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'



const BoofPage = () => {

    return (

        <Layout>
            <title>Boof</title>
            <div class="projectheadings">
                <h1> Boof Exhibit </h1>
                <p> Here are some pictures of the game:</p>
            </div>
            <div class="carousel">
                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="Homepage of Boilerup Hangman">
                    <img class="galleryimage" src="/booflosescreen.PNG" alt="Slide 1" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="2" annot="Gameplay picture">
                    <img class="galleryimage" src="/boofgameplay.PNG" alt="Slide 2" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="Screen displayed after loss">
                    <img class="galleryimage" src="/booftitle.PNG" alt="Slide 1" />
                </div>




            </div>
            <div class="projectheadings">
                <ul>
                    <li>Purpose: Project used as an introduction to JavaScript, HTML, and CSS</li>
                    <li>Languages used: JavaScript, HTML, CSS</li>
                    <li>Description: Boof was made for the freshman year Hello World Hackathon. It was created
                        in order to become more familiar with JavaScript, and to learn basic techiniques such as
                        simple animations.
                    </li>
                </ul>
            </div>






        </Layout >

    )

}

export default BoofPage