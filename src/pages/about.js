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
                <title>About Me</title>

                <div class="aboutstage">
                    <div class="columncontainer">
                        <div class="column">

                            <h1>Some Things About Me</h1>
                        </div>

                        <div class="column">
                            <p>My name is Peter Jiang, a software Developer at Epic Systems. I work on the Release of Information team, under the 
                                Health Information Management umbrella. The areas I am most proficient in would be the individual selection module, and
                                the batch release module.
                            </p>
                            <p>
                                Outside of work, you can primarily find me playing volleyball, pickleball, or badminton. I also enjoy board games,
                                or attending local trivias.

                            </p>
                            <p></p>


                        </div>
                    </div>

                </div>
                <div class="spacing"></div>

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