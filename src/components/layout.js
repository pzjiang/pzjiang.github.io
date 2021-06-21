import * as React from "react"

import { Link } from "gatsby"

//style
const linkStyle = {
    marginRight: "3rem",
    display: "inline-block",
}
const nameStyle = {
    textDecoration: "none",
    //color: "white",
}






const ListLink = props => (
    <li class="linkLayout">
        <Link class="tabs" to={props.to}>{props.children}</Link>
    </li>
)



export default function layout({ children }) {
    return (
        <div >
            <div class="banner">
                <div class="tagname">
                    <Link class="nameLayout" to="/">Peter Jiang</Link>
                </div>


                <ul class="pagetabs">
                    <ListLink to="/">About Me</ListLink>
                    <ListLink to="/projects">Projects</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                    <ListLink to="/blog">Thoughts</ListLink>

                </ul>



            </div>

            <div class="desk">

                {children}

            </div>

            <div class="footer">
                <hr />

                <div class="copyright">

                </div>


                <div class="footlinks">

                </div>
            </div>

        </div>

    )
}