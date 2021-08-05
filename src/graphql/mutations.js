/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMain = /* GraphQL */ `
  mutation CreateMain(
    $input: CreateMainInput!
    $condition: ModelMainConditionInput
  ) {
    createMain(input: $input, condition: $condition) {
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
export const updateMain = /* GraphQL */ `
  mutation UpdateMain(
    $input: UpdateMainInput!
    $condition: ModelMainConditionInput
  ) {
    updateMain(input: $input, condition: $condition) {
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
export const deleteMain = /* GraphQL */ `
  mutation DeleteMain(
    $input: DeleteMainInput!
    $condition: ModelMainConditionInput
  ) {
    deleteMain(input: $input, condition: $condition) {
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
