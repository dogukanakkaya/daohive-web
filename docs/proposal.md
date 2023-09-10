# Proposal

This documentation outlines the functionality of the Proposals, which enables users to create new proposals on a contract. The endpoint offers the following queries and mutations:

```graphql
type Metadata {
  name: String!
  description: String!
  content: String!
  image: String!
}

type Proposal {
  id: ID!
  uri: String!
  metadata: Metadata!
  approvalCount: BigInt!
  disapprovalCount: BigInt!
  neutralCount: BigInt!
  startAt: BigInt!
  endAt: BigInt!
  createdAt: String!
  contract: Contract!
}

input AddProposalInput {
  address: String!
  name: String!
  description: String!
  content: String!
  startAt: String!
  endAt: String!
  image: String!
}

type Query {
  proposal(id: ID!): Proposal!
  preAddProposal(input: AddProposalInput!): PreCalculation!
}

type Mutation {
  addProposal(input: AddProposalInput!): Proposal!
}
```

<br/>

## Fetch

You can retrieve proposal data by using the `proposal(id: ID!)` query, see query examples below.

```graphql
query Proposal($id: ID!){
  proposal(id: $id) {
    approvalCount
    disapprovalCount
    neutralCount
    startAt
    endAt
    metadata {
      name
      description
      image
    }
  }
}
```

<br/>

## Create

You can create a new proposal by using the `addProposal(input: AddProposalInput!)` mutation, see query examples below.

```graphql
mutation AddProposal ($input: AddProposalInput!) {
  addProposal(input: $input) {
    id
  }
}
```
