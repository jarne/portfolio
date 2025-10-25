/**
 * Dev portfolio | profile description header component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import usePrefersColorScheme from "use-prefers-color-scheme"

import ProfilePicture from "./profilePicture"
import { nameHeading, githubLogo } from "./profileHeader.module.css"

import githubSvg from "../../images/logos/github.svg"
import githubLightSvg from "../../images/logos/github-light.svg"

const ProfileHeader = () => {
    const prefersColorScheme = usePrefersColorScheme()
    const isDarkMode = prefersColorScheme === "dark"

    const data = useStaticQuery(graphql`
        query ProfileMetaQuery {
            site {
                siteMetadata {
                    title
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
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <ProfilePicture />
            </div>
            <div className="col-12 col-md-8 d-flex align-items-center">
                <div>
                    <h1 className={nameHeading}>
                        {data.site.siteMetadata.name}:{" "}
                        {data.site.siteMetadata.title}
                    </h1>
                    <p className="mb-2">{data.site.siteMetadata.bio}</p>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faLocationPin} /> Based in{" "}
                        {data.site.siteMetadata.location}{" "}
                        <span className="mx-1">·</span>{" "}
                        <FontAwesomeIcon icon={faEnvelope} /> Contact me:{" "}
                        <a href={`mailto:${data.site.siteMetadata.email}`}>
                            {data.site.siteMetadata.email}
                        </a>
                    </p>
                    <div className="d-flex align-items-center">
                        <span className="me-2">
                            <b>Links:</b>
                        </span>
                        <a
                            href={data.site.siteMetadata.githubProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={isDarkMode ? githubLightSvg : githubSvg}
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
