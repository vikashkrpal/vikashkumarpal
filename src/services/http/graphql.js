import {GraphQLClient} from 'graphql-request';
import Config from '../../config'

// Function to create a GraphQL client
export const createGraphQLClient = (endpoint, headers) => {
    return new GraphQLClient(endpoint, { headers });
};

// Function to perform a GraphQL query
export const request = async (query, variables) => {
    const endpoint = Config.serverGraphQlUrl;
    const client = createGraphQLClient(endpoint, {
        // Add any headers you need, such as authorization headers
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
    });

    try {
        return await client.request(query, variables);
    } catch (error) {
        // Handle error
        console.error('GraphQL request error:', error.message);
        throw error;
    }
};
