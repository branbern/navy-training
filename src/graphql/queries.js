/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMain = /* GraphQL */ `
  query GetMain($id: ID!) {
    getMain(id: $id) {
      id
      users {
        id
        name
      }
      chapters {
        title
        sectionNumber
        items {
          itemID
          title
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMains = /* GraphQL */ `
  query ListMains(
    $filter: ModelMainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        users {
          id
          name
        }
        chapters {
          title
          sectionNumber
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
