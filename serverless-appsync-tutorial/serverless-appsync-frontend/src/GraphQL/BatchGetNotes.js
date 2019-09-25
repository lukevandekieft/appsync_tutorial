import gql from 'graphql-tag';

export default gql`
query batchGetNotes($ids: [Note]){
  batchGetNotes(ids: $ids) {
    id
    title
    content
  }
}`
