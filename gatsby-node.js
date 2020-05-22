const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allStrapiPages {
                nodes {
                    name
                    id
                }
            }
            allStrapiProperties {
                nodes {
                    name
                    id
                }
            }
        }
    `)

    // console.log(JSON.stringify(result.data.allStrapiProperties))

    // if there aren't results
    if(result.errors) {
        reporter.panic(`There weren't error`, result.errors)
    }

    // if there are results create static files
    const pages = result.data.allStrapiPages.nodes;
    const properties = result.data.allStrapiProperties.nodes;

    // create templates for the pages
    pages.forEach(page => {
        actions.createPage({
            path: urlSlug(page.name),
            component: require.resolve('./src/components/pages.jsx'),
            context: {
                id: page.id
            }
        })
    })

    // create properties templates
    properties.forEach(property => {
        actions.createPage({
            path: urlSlug(property.name),
            component: require.resolve('./src/components/properties.jsx'),
            context: {
                id: property.id
            }
        })
    })

}