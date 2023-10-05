# Voter Groups

This documentation outlines the functionality of the Voter Groups. The endpoint
offers the following queries and mutations:

```graphql
type VoterGroup {
  id: ID!
  name: String!
  createdAt: String!
  voters: [Voter!]!
}

input VoterGroupInput {
  name: String!
  voters: [ID!]
}

type Query {
  voterGroups: [VoterGroup!]!
  voterGroup(id: ID!): VoterGroup!
}

type Mutation {
  createVoterGroup(input: VoterGroupInput!): VoterGroup!
  updateVoterGroup(id: ID!, input: VoterGroupInput!): VoterGroup!
  deleteVoterGroup(id: ID!): Boolean!
}
```

<br/>

## Fetch

You can retrieve groups/group data by using the `voterGroups()` and
`voterGroup(id: ID!)` queries, see query examples below.

```graphql
query VoterGroups {
  voterGroups {
    id
    name
  }
}

query VoterGroup($id: ID!) {
  voterGroup(id: $id) {
    id
    name
  }
}
```

<br/>

## Create

You can create a new group by using the
`createVoterGroup(input: VoterGroupInput!)` mutation, see below query example.

```graphql
mutation CreateVoterGroup ($input: VoterGroupInput!) {
  createVoterGroup(input: $input) {
    id
  }
}
```

<br/>

## Update

You can update a group by using the
`updateVoterGroup($id: ID!, $input: VoterGroupInput!)` mutation, see below query
example.

```graphql
mutation UpdateVoterGroup ($id: ID!, $input: VoterGroupInput!) {
  updateVoterGroup(id: $id, input: $input) {
    id
  }
}
```

<br/>

## Delete

You can delete a group by using the `deleteVoterGroup($id: ID!)` mutation, see
below query example.

```graphql
mutation DeleteVoterGroup ($id: ID!) {
  deleteVoterGroup(id: $id)
}
```
