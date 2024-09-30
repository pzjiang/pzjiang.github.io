import * as React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Link } from "gatsby"


library.add(fab, fas)

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
                    <ListLink to="/about">About</ListLink>
                    <ListLink to="/projects">Projects</ListLink>
                    <ListLink to="/contact">Contact</ListLink>
                    <ListLink to="/blog">More</ListLink>

                </ul>



            </div>

            <div class="desk">

                {children}

            </div>

            <div class="footer">


                <div class="footercontain">
                    <span class="copyright">© peter jiang, 2024. all rights reserved.  </span>
                    <div class="svgcontainer">
                        <Link to="https://github.com/pzjiang" class="svgicon"> <FontAwesomeIcon icon={["fab", "github-square"]} /> </Link>
                        <Link to="https://www.linkedin.com/in/peter-jiang-9923580bb/" class="svgicon"><FontAwesomeIcon icon={["fab", "linkedin"]} /></Link>
                        <a class="svgicon" href="/peterJiangResume.pdf"><FontAwesomeIcon icon={["fas", "file"]} /></a>
                    </div>
                </div>
            </div>

        </div>

    )
}