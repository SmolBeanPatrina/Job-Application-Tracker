// src/graphql/mutations.ts
import { gql } from "@apollo/client";

// Add a blank application
export const ADD_BLANK_APPLICATION = gql`
  mutation addBlankApplication {
    addBlankApplication {
      id
      company
      title
      deadline
      requirements
      source
      location
    }
  }
`;

//update application for specific field
export const UPDATE_APPLICATION = gql`
  mutation updateApplication(
    $id: String!
    $field: String!
    $value: String!
  ) {
    addApplication(
      id: $id
      field: $field
      value: $value
    ) {
      id
      company
      title
      deadline
      requirements
      source
      location
    }
  }
`;

// Delete an application
export const DELETE_APPLICATION = gql`
  mutation deleteApplication($id: String!) {
    deleteApplication(id: $id)
  }
`;
