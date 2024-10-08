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
            <title>Avalon</title>
            <div class="projectheadings">
                <h1>Avalon: Exhibit</h1>
                <p> Here are some pictures of the app:</p>
            </div>
            <div class="carousel">
                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="home page">
                    <img class="galleryimage" src="/avalonHome.png" alt="Slide 1" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="2" annot="room creation">
                    <img class="galleryimage" src="/roomCreation.png" alt="Slide 2" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="room lobby">
                    <img class="galleryimage" src="/roomLobbyPopulated.png" alt="Slide 3" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="role selection">
                    <img class="galleryimage" src="/roleSelection.png" alt="Slide 4" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="game room">
                    <img class="galleryimage" src="/gameRoom.png" alt="Slide 5" />
                </div>

                <input type="checkbox" class="faux-ui-facia" />
                <div class="slide" slide="1" annot="role assignment">
                    <img class="galleryimage" src="/myRole.png" alt="Slide 6" />
                </div>



            </div>
            <div class="projectheadings">
                <ul>
                    <li>Purpose: Use between friends on game night</li>
                    <li>Languages used: JavaScript, HTML, CSS</li>
                    <li>Description: This project was started due to the fact that wear and tear on the voting tiles and cards 
                        allowed us to tell what role each person was simply by looking at the back of their card. Thus, the virtual avalon
                        was created, allowing voting, role assignment, and gameplay mechanics to all be made virtual, thus removing any 
                        unfair variables, as well as eliminate the time we spent shuffling and dealing out the physical materials.
                    </li>
                </ul>
            </div>






        </Layout >

    )

}

export default BoofPage