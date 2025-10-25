/**
 * Dev portfolio | footer info line component
 */

import * as React from "react"

const Footer = () => {
    return (
        <footer className="mt-2 mb-4">
            <p>
                Last updated in {new Date().getFullYear()}{" "}
                <span className="mx-1">·</span> This website is{" "}
                <a
                    href="https://github.com/jarne/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    open source on GitHub
                </a>
                .
            </p>
        </footer>
    )
}

export default Footer
