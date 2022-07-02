import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vpxw661o2k01ta8g705f1f/master',
    cache: new InMemoryCache()
})