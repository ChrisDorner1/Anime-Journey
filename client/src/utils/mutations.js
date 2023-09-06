import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TO_WATCH_LIST = gql`
  mutation addToWatchList(
    $listId: ID!
    $animeName: String!
    $animePoster: String!
  ) {
    addToWatchList(
      listId: $listID
      animeName: $animeName
      animePoster: $animePoster
    ) {
      name
      animes
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String
    ) {
      addUser(
        username: $username
        email: $email
        password: $password
        ) {
        token
        user {
          _id
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation addList($name: String!, $createdBy: String!) {
    addList(name: $name, createdBy: $createdBy) {
      name
      createdBy
    }
  }
`;
