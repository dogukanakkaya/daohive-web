# Contract

This documentation outlines the functionality of the Contracts, which enables users to interact with smart contracts. The endpoint offers the following queries and mutations:

```graphql
type Contract {
  id: ID!
  address: String!
  type: String!
  name: String!
  description: String!
  voterCount: BigInt!
  proposalCount: BigInt!
  activeProposalCount: BigInt!
  createdAt: String!
  voters: [String!]!
  weights: JSONObject!
  proposals: [Proposal!]!
}

input DeployContractInput {
  name: String!
  description: String
  type: String!
  voterGroupId: ID
}

input WhitelistInput {
  address: String!
  voters: [String!]!
}

input SetWeightsInput {
  address: String!
  voters: [String!]!
  weights: [Int!]!
}

input DeleteWeightsInput {
  address: String!
  voters: [String!]!
}

type Query {
  contract(address: String!): Contract!
  preDeployContract(input: DeployContractInput!): PreCalculation!
  preAddToWhitelist(input: WhitelistInput!): PreCalculation!
  preRemoveFromWhitelist(input: WhitelistInput!): PreCalculation!
  preSetWeights(input: SetWeightsInput!): PreCalculation!
  preDeleteWeights(input: DeleteWeightsInput!): PreCalculation!
}

type Mutation {
  deployContract(input: DeployContractInput!): Contract!
  addToWhitelist(input: WhitelistInput!): Boolean!
  removeFromWhitelist(input: WhitelistInput!): Boolean!
  setWeights(input: SetWeightsInput!): Boolean!
  deleteWeights(input: DeleteWeightsInput!): Boolean!
}
```

<br/>

## Fetch

You can retrieve contract data by using the `contract(address: String!)` query, see query examples below.

```graphql
query Contract($address: String!) {
  contract(address: $address) {
    name
    description
    voterCount
    proposalCount
    activeProposalCount
  }
}
```

<br/>

## Deploy

You can deploy a new contract by using the `deployContract(input: DeployContractInput!)` mutation, see query examples below.

```graphql
mutation DeployContract ($input: DeployContractInput!) {
  deployContract(input: $input) {
    address
  }
}
```

<br/>

## Whitelist

> :warning: This can only be used by the contracts that are created as private.

You can add or remove voters to your whitelist by using the `addToWhitelist(input: WhitelistInput!)` and `removeFromWhitelist(input: WhitelistInput!)` mutations, see query examples
below.

```graphql
mutation AddToWhitelist ($input: WhitelistInput!) {
  addToWhitelist(input: $input)
}

mutation RemoveFromWhitelist ($input: WhitelistInput!) {
  removeFromWhitelist(input: $input)
}
```

<br/>

## Voter Weights

You can set your voter's weights to a specific number (default is 1) by using the `setWeights(input: SetWeightsInput!)` mutation, see query examples below.

```graphql
mutation SetWeights ($input: SetWeightsInput!) {
  setWeights(input: $input)
}
```

<br/>

You can also your voter's weights by using the `setWeights(input: SetWeightsInput!)` mutation, see query examples below. This is the same thing as setting your voter's weight to 0
or 1 but more gas efficient.

```graphql
mutation DeleteWeights ($input: DeleteWeightsInput!) {
  deleteWeights(input: $input)
}
```
