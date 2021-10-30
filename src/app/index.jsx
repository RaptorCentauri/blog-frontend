
import * as React from 'react';
import {render} from 'react-dom';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useQuery
} from "@apollo/client";
import {ALL_POSTS} from '../utils/queries.js'
import './index.scss'



const client = new ApolloClient({
  uri: "http://blog-api.daveleoshilander.com/graphql",
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  cache: new InMemoryCache(),
});

const Post = ({title, content}) => {
    return(
      <React.Fragment>
        <h1>TITLE: {title}</h1>
        <p>CONTENT: {content}</p>
      </React.Fragment>
  )
}

const App = () => {
  
  const { loading, data } = useQuery(ALL_POSTS);
  const posts = data?.posts || [];
  
  console.log(posts)

  return(
      <React.Fragment>
        {posts.map(post => <Post title={post.title} content={post.content}/>)}
      </React.Fragment>
  )
}

render(<ApolloProvider client={client}><App/></ApolloProvider>,window.document.getElementById('root'));
