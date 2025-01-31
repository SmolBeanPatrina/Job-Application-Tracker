import { gql } from '@apollo/client';

export const GET_APPLICATIONS = gql`
    query getApplications {
        applications {
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
    
