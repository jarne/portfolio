import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProfilePicture = () => {
    const data = useStaticQuery(graphql`
        query ProfilePicQuery {
            file(name: { eq: "profile-pic" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 128
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
            }
        }
    `)

    return (
        <div>
            <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Profile picture"
            />
        </div>
    )
}

export default ProfilePicture
