import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery, Link } from "gatsby"

const TemplateWrapper = ( props ) => {
    // const siteMetadata = this.props.data
    console.log(this)

    return (
        <StaticQuery
            query={
                graphql`
                    query {
                        site {
                            siteMetadata {
                                description
                                title
                            }
                        }
                    }
                `
            }

            render={
                data => {
                    console.log(data)
                    return (
                        <div>
                            <Helmet title={data.site.siteMetadata.title} />
                            
                            <Link to="/">Home</Link> | <Link to="/pagina-de-teste">pagina-de-teste</Link> |  <Link to="/sample-page">sample-page</Link>

                            <div>{props.children}</div>

                            <div>
                            <hr />
                            Rodapé aqui</div>
                        </div>
                    )
                }
            }
         />

    )
} 



export default TemplateWrapper


// export const metaQuery = graphql`
//     query {
//         site {
//             siteMetadata {
//                 description
//                 title
//             }
//         }
//     }
// `