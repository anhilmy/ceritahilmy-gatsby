import React from "react";
import { graphql } from "gatsby";

const AuthorFragment = graphql`
    fragment AuthorBio on WpUser {
        id
        name
        description
    }
`

const AuthorBio = ({ author: { id, name, description } }) => {
    return (
        <div>
            <h2 className={`author-${id}`}>{name}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    )
}

export default AuthorBio

export { AuthorFragment }