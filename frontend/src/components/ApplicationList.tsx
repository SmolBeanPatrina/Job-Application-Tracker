import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_APPLICATIONS } from "../graphql/queries";
import { ADD_BLANK_APPLICATION } from "../graphql/mutations";

const ApplicationList = () => {
    const { loading: loading_getApplications, error: error_getApplications, data: data_getApplications } = useQuery(GET_APPLICATIONS); 
    const [ addBlankApplication, { data: data_addBlankApplication, loading: loading_addBlankApplication, error: error_addBlankApplication }] = useMutation(ADD_BLANK_APPLICATION);

    if (loading_getApplications) return <p>Loading...</p>
    if (error_getApplications) return <p>Error: {error_getApplications.message}</p>;

    const applications = data_getApplications.applications;

    const handleClick = async() => {
        try {
            const response = await addBlankApplication();
            console.log('Application Added: ', response.data.addBlankApplication.data);
        } catch (e) {
            console.error('Error adding application: ', e);
        }
     };

    if (loading_addBlankApplication) return <p>Loading...</p>
    if (error_addBlankApplication) return <p>Error: {error_addBlankApplication.message}</p>;

    return (
        <div>
            <button onClick={handleClick} disabled={loading_addBlankApplication}>
                {loading_addBlankApplication ? 'Adding Application...' : 'Add Application'}
            </button> 

            <table style={{ width: "100%", borderCollapse: "collapse"}}>
                {/* Table Header */}
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Company</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {applications.map((app: {id: string; company: string; title: string; deadline: string; requirements: string; source: string; location: string}) => (
                        <tr key={app.id}>
                            <td style={{ border: "1px solid black", padding: "8px"}}>{app.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default ApplicationList;