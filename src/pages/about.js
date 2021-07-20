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
                    <div class="column">

                        <h1>About Me</h1>
                    </div>

                    <div class="column">
                        <p>I am an undergrad at Purdue University, studying computer science with minors in statistics and chinese.<br />
                            My main points of interest are software engineering and data structures/algorithms.

                        </p>
                    </div>

                </div>

            </Layout>
        </div >
    )

}

export default AboutPage