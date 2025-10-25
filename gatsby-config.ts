import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Dev Portfolio",
        description:
            "Development portfolio showcasing my projects and most-used frameworks and technologies.",
        siteUrl: "https://portfolio.jarne.rocks",
        name: "Jarne",
        bio: "Welcome! I'm a developer who enjoys diving into a wide range of challenges. This portfolio highlights my work building web and mobile apps, along with some fun games, powered by core technologies like JavaScript, Swift, React, CI/CD pipelines, and Docker. I'm also passionate about open-source collaboration in a team setting and frequently work on DevOps tooling.",
        location: "Germany",
        email: "dev@jarne.rocks",
        githubProfileUrl: "https://github.com/jarne",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
                ignore: ["**/\.*"],
                fastHash: true,
            },
        },
    ],
}

export default config
