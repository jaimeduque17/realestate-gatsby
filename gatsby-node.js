const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
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
    const properties = result.data.allStrapiProperties.nodes;

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