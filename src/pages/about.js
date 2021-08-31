import * as React from "react"
import Layout from "../components/layout.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"


/*
    title:
    date:
    content:
*/




//styles will be located in the contact page css


const AboutPage = () => {

    return (
        <div>
            <Layout>
                <title>About</title>

                <div class="aboutstage">
                    <div class="columncontainer">
                        <div class="column">

                            <h1>Some Things About Me</h1>
                        </div>

                        <div class="column">
                            <p>My name is Peter Jiang, an undergrad at Purdue University, studying computer science with minors in statistics and chinese.
                                Software engineering and data structures/algorithms are my main points of interest.
                            </p>
                            <p>
                                I also teach Hu-Lu-Si, providing both private lessons and public lessons at Chinese Schools. I have taught 5 years collectively at
                                the Pittsburgh Chinese School located in Pittsburgh, PA, as well as the Carmel branch of ICCCI in Carmel, Indiana. I currently
                                teach virtually through Zoom for the TAMU Chinese based in College Station, Texas. Check out the syllabus website here:
                                <Link to="https://hulusi.gatsbyjs.io/">Hu-Lu-Si</Link>

                            </p>
                            <p></p>


                        </div>
                    </div>

                </div>

                <div class="knowledge">
                    <div class="columncontainer">

                        <div class="column">
                            <div class="logorow">
                                <FontAwesomeIcon icon={["fab", "python"]} />
                                <div class="logo-spacer" />
                                <FontAwesomeIcon icon={["fab", "java"]} />
                                <div class="logo-spacer" />
                                <FontAwesomeIcon icon={["fab", "angular"]} />

                            </div>
                            <div class="logorow">
                                <FontAwesomeIcon icon={["fab", "js-square"]} />
                                <div class="logo-spacer" />
                                <FontAwesomeIcon icon={["fab", "css3-alt"]} />
                                <div class="logo-spacer" />
                                <FontAwesomeIcon icon={["fab", "react"]} />


                            </div>


                        </div>
                        <div class="column">
                            <h1>What I Know</h1>

                        </div>

                    </div>

                </div>


            </Layout>
        </div >
    )

}

export default AboutPage