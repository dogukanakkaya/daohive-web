# Voters

This documentation outlines the functionality of the Voters. The endpoint offers the following queries and mutations:

```graphql
type Voter {
  id: ID!
  address: String!
  name: String
  email: String
  weight: Int!
  createdAt: String!
}

input CreateVoterInput {
  name: String
  email: String
  address: String!
  weight: Int
}

input UpdateVoterInput {
  name: String
  email: String
  address: String
  weight: Int
}

type Query {
  voters: [Voter!]!
  voter(id: ID!): Voter!
}

type Mutation {
  createVoter(input: CreateVoterInput!): Voter!
  updateVoter(id: ID!, input: UpdateVoterInput!): Voter!
  deleteVoter(id: [ID!]!): Boolean!
}
```

<br/>

## Fetch

You can retrieve voters/voter data by using the `voters()` and `voter(id: ID!)` queries, see query examples below.

```graphql
query Voters {
  voters {
    id
    address
    name
    email
    weight
  }
}

query Voter($id: ID!) {
  voter(id: $id) {
    id
    address
    name
    email
    weight
  }
}
```

<br/>

## Create

You can create a new voter by using the `createVoter(input: CreateVoterInput!)` mutation, see below query example.

```graphql
mutation CreateVoter ($input: CreateVoterInput!) {
  createVoter(input: $input) {
    id
  }
}
```

<br/>

## Update

You can update a voter by using the `updateVoter($id: ID!, input: UpdateVoterInput!)` mutation, see below query example.

```graphql
mutation UpdateVoter ($id: ID!, $input: UpdateVoterInput!) {
  updateVoter(id: $id, input: $input) {
    id
  }
}
```

<br/>

## Delete

You can delete a voter by using the `deleteVoter($id: [ID!]!)` mutation, see below query example.

```graphql
mutation DeleteVoter ($id: [ID!]!) {
  deleteVoter(id: $id)
}
```
