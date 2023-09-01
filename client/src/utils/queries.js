import { gql } from '@apollo/client';

export const QUERY_ALL_LISTS = gql`
    {
        lists {
            animes
            name
            createdBy
        }
    }
`;

export const QUERY_USER = gql`
    {
        username
        email
        password
        lists {
            animes
            name
            createdBy
        }
    }
`;
