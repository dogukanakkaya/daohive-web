# Daohive API Documentation

Welcome to the **Daohive API documentation**. This comprehensive guide will help you understand and utilize our GraphQL-based API. Whether you're a developer integrating our
services into your application or a user seeking to access our platform's features programmatically, this documentation will provide you with the necessary information.

<br/>

## Overview

### GraphQL Endpoint

Our API is entirely **GraphQL-based**, offering a powerful and flexible way to interact with our platform. You can make requests to our API by sending POST requests to the
`/graphql` endpoint, which is hosted at `api.daohive.io`.

### API Key

To access our API, you will need an <a href="https://platform.daohive.io/developer/api" target="_blank"> **API key**</a>. These keys are essential for authentication and
authorization. <a href="https://platform.daohive.io/developer/api" target="_blank">You can obtain an API key from our platform</a>, which provides a seamless way to generate and
manage keys for your applications.

You just need to send that token in every request as a **Bearer** token.

```
Authorization: Bearer ${API_KEY}
```

### Rate Limiting

For the stability and fairness of our service, we have implemented **rate limiting**. Each user is limited to **15 requests per second (req/s)** to ensure that the platform remains
responsive for all users. Additionally, each user is allocated a total of **10,000 requests per month**, with this count resetting on the **1st day of each month**. This monthly
quota allows you to manage your usage effectively.

### Permissions

When generating an API key from our platform, you'll be required to select specific **permissions**. These permissions determine what actions the key can perform within the API.
This granular control ensures that your application only has access to the necessary features, enhancing security and minimizing potential risks.

In the following sections, we will delve deeper into the specifics of how to obtain an API key, make requests to the API, handle rate limiting, and understand the available
permissions.

Let's get started with integrating Daohive's API into your application!

<br/>

## Transaction Fees

Every operation that changes state in blockchain requires gas fees along with the platform's commission. Deploying new contract, changing your whitelist or weights of voters are of
those operations. Every small byte you write costs.

Every mutation that requires gas fee has a side-query that is prefixed with `pre` key which expects the exact same arguments as mutation. For example
`preDeployContract(input: DeployContractInput!)` for `deployContract(input: DeployContractInput!)`. All of those `pre` queries returns `PreCalculation` type which has the costs to
do that transaction in MATIC tokens and USD.

<br/>

## Global Types

Following types are/may shared across queries and mutations.

```graphql
type TransactionFee {
  usd: Float!
  matic: Float!
}

type PreCalculation {
  transactionFee: TransactionFee!
}
```

<br/>

## Additional Context

Code examples shown in the documentation are mostly written for a Frontend application that uses Apollo Client but you can always construct your queries and mutations with
different technologies on both Frontend and Backend as long as you send the necessary data.

```ts
export interface GraphQLArgs {
  schema: GraphQLSchema;
  source: string | Source;
  rootValue?: unknown;
  contextValue?: unknown;
  variableValues?: Maybe<{
    readonly [variable: string]: unknown;
  }>;
  operationName?: Maybe<string>;
  fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
  typeResolver?: Maybe<GraphQLTypeResolver<any, any>>;
}
```
