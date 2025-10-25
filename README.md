# Dev portfolio

Portfolio website showing current development side projects

## 📙 Description

This is a portfolio website showcasing current development side projects, both open source and
closed-source projects. Further information on the technologies and programming languages used to
create the projects is also included.

## 🧱 Architecture

The website is based on the Gatsby framework. Bootstrap is used as the basis for styling.
No dynamic data is fetched from the web during the build process, it's a simple static website.

Showcase projects are defined in the [data/projects](./src/data/projects) folder in the JSON format
and are then queried using GraphQL and rendered on the website.
