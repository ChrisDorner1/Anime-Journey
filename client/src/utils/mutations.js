import { gql } from '@apollo/client';


export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`


export const ADD_TO_WATCH_LIST = gql`
    mutation addToWatchList($animes: ) {
        addToWatchList(animes: $animes) {
            name
            animes
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
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
    mutation addList($animes: []!) {
        addList(animes: $animes) {
            name
            createdBy
        }
    }
`
