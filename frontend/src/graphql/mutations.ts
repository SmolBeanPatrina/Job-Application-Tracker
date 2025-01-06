import { gql } from "@apollo/client";

export const ADD_APPLICATION = gql`
    mutation addApplication($company: String!, $title: String!, $deadline: String!, $requirements: String!, $source: String!, $location: String!) {
        addApplication(company: $company, title: $title, deadline: $deadline, requirements: $requirements, source: $source, location: $location) {
            Application {
                id
                company
                title
                deadline
                requirements
                sources
                location
            }    
        }
    }
`;

export const ADD_BLANK_APPLICATION = gql`
    mutation addBlankApplication {
        addBlankApplication() {
            Application {
                id
                company
                title
                deadline
                requirements
                sources
                location
            }
                
        }        
        
    }
`;