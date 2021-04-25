import { withApollo } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const apolloConfig = {
  link: new HttpLink({
    uri: 'https://faker-graphql.now.sh/graphql'
  })
}

export default withApollo(apolloConfig)
