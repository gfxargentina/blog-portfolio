//trae la data de la api de graphcms

import { GraphQLClient, gql } from 'graphql-request'


export const getPostsAndPortfolio = async() => {
    const endpoint = 'https://api-ca-central-1.graphcms.com/v2/ckp1di4pgfzly01xr4n8abc4c/master'

    const graphQLClient = new GraphQLClient(endpoint);
    
    const query = gql`
                      {
                        
                        posts{
                          id,
                          title,
                          description,
                          slug,
                          date,
                          author{name}
                          
                        },
                        portfolios{
                          title,
                          tags,
                          slug,
                          description,
                          date,
                          coverImage{
                            url,
                            width,
                            height
                          }
                        }
                      }                
    `;
    
    return await graphQLClient.request(query)

}