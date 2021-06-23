import * as React from "react"
import Layout from "../components/layout.js"


const ContactPage = () => {

    return (
        <div>
            <Layout>
                <title>Contact</title>

                <div class="emailsection">
                    <h1>Email</h1>
                    <p>pzjiang01@hotmail.com</p>
                </div>

                <div class="wechatsection">
                    <h1>WeChat</h1>
                    <p> pzjiang4568</p>
                </div>

                <div class="githubsection">

                    <h1>GitHub</h1>
                    <p>pzjiang01</p>

                </div>
                <div class="codeforce">
                    <h1>CodeForce</h1>
                    <p>TBD</p>

                </div>

            </Layout>
        </div>
    )

}

export default ContactPage