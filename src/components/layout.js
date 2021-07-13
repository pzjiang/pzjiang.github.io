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
        <Link class="tabs" activeClassName="activeLink" to={props.to}>{props.children}</Link>
    </li>
)



export default function layout({ children }) {
    return (
        <div class="entiredesk">
            <div class="banner">

                <Link class="nameLayout" to="/">Peter Jiang</Link>



                <ul class="pagetabs">
                    <ListLink to="/about">About Me</ListLink>
                    <ListLink to="/projects">Projects</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                    <ListLink to="/blog">Thoughts</ListLink>

                </ul>



            </div>

            <div class="desk">

                {children}

            </div>

            <div class="footer">


                <div class="footercontain">
                    <span class="copyright">©peter jiang, 2021, all rights reserved.  </span>



                </div>
            </div>

        </div>

    )
}