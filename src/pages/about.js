import * as React from "react"
import Layout from "../components/layout.js"


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
                    <h1>About Me</h1>
                    <p>I am an undergrad at Purdue University, studying computer science with minors in statistics and chinese.
                        My main points of interest are software engineering and data structures/algorithms.

                    </p>

                </div>

            </Layout>
        </div >
    )

}

export default AboutPage