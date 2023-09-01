const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        lists: [List]!
    }

    type List {
        _id: ID
        animes: [String]
        name: String
        createdBy: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        lists: [List]
        user(username: String!): User 
    }

    type Mutation {
        addList(animes: String!, name: String!, createdBy: String!): List
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        updateList(animes: [String], name: String, createdBy: String): List
    }

`;

module.exports = typeDefs;