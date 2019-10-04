import gql from 'graphql-tag';

export default gql`
query ListNotes{
  batchGetNotes {
    title
    content
    id
  }
}
`
