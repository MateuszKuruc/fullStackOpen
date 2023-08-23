import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`;

export const ADD_BOOK = gql`
mutation addBook($title: String!, $published: Int, $author: String!, $genres: [String]!) {
    addBook(
        title
        published
        author
        genres
    )
}
`;
