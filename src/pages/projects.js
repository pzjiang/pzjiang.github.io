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
                    <h1>Name: <p> BoilerUp Hangmang</p></h1>
                    <h1>Brief Summary: <p></p></h1>
                    <Link class="projectlinks" to="/hangman">Hangman Gallery :) </Link>



                </div>
            </div>






        </Layout >

    )

}

export default ProjectPage