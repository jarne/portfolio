/**
 * Dev portfolio | profile description header component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProfilePicture from "./profilePicture"
import { githubLogo } from "./profileHeader.module.css"

import githubSvg from "../../images/logos/github.svg"

const ProfileHeader = () => {
    const data = useStaticQuery(graphql`
        query ProfileMetaQuery {
            site {
                siteMetadata {
                    name
                    bio
                    location
                    email
                    githubProfileUrl
                }
            }
        }
    `)

    return (
        <div className="row mt-3">
            <div className="col-12 col-md-4 text-center">
                <ProfilePicture />
            </div>
            <div className="col-12 col-md-8 d-flex align-items-center">
                <div>
                    <h1>{data.site.siteMetadata.name}</h1>
                    <p className="mb-2">{data.site.siteMetadata.bio}</p>
                    <p className="mb-2">
                        <span role="img" aria-label="">
                            📍
                        </span>{" "}
                        {data.site.siteMetadata.location} | Mail:{" "}
                        <a href={`mailto:${data.site.siteMetadata.email}`}>
                            {data.site.siteMetadata.email}
                        </a>
                    </p>
                    <div>
                        <a
                            href={data.site.siteMetadata.githubProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubSvg}
                                className={githubLogo}
                                alt="GitHub profile"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
