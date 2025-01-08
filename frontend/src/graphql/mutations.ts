// src/graphql/mutations.ts
import { gql } from "@apollo/client";

// Add a new application
export const ADD_APPLICATION = gql`
  mutation addApplication(
    $company: String!
    $title: String!
    $deadline: String!
    $requirements: String!
    $source: String!
    $location: String!
  ) {
    addApplication(
      company: $company
      title: $title
      deadline: $deadline
      requirements: $requirements
      source: $source
      location: $location
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

// Delete an application
export const DELETE_APPLICATION = gql`
  mutation deleteApplication($id: String!) {
    deleteApplication(id: $id)
  }
`;
