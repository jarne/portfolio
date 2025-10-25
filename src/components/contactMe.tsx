/**
 * Dev portfolio | contact info component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactMe = () => {
    const data = useStaticQuery(graphql`
        query ContactInfoQuery {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `)

    return (
        <p>
            Feel free to reach out:{" "}
            <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
            </a>
        </p>
    )
}

export default ContactMe
