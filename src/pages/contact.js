import * as React from "react"
import Layout from "../components/layout.js"


const ContactPage = () => {

    return (

        <Layout>
            <title>Contact</title>
            <div class="contactbody">

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
                <p>Please check out the links below! You can find github, linkedin, my resume, Hu-Lu-Si Syllabus website, and youtube respectively.</p>

            </div>

        </Layout>

    )

}

export default ContactPage