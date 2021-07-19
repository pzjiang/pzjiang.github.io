import * as React from "react"
import Layout from "../components/layout.js"


/*
    title:
    date:
    content:
*/
const blogposts = [

    {
        title: "The Beginning",
        date: "July 19, 2021",
        content: "Creation of the blog :) This'll be my slightly less public twitter.",
    },

]


const BlogPage = () => {

    return (

        <Layout>
            <title>Blog</title>

            <div class="blogstage">


            </div>

        </Layout>

    )

}

export default BlogPage