import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_APPLICATIONS } from "../graphql/queries"; // Assuming this is defined
import { ADD_BLANK_APPLICATION, UPDATE_APPLICATION, DELETE_APPLICATION } from "../graphql/mutations";
import client from "../services/apolloClient";

interface Application {
    id: string;
    company: string;
    title: string;
    deadline: string;
    requirements: string;
    source: string;
    location: string;
}

const ApplicationList: React.FC = () => {
    const {
        loading: loading_getApplications,
        error: error_getApplications,
        data: data_getApplications,
        refetch: refetchApplications,
    } = useQuery(GET_APPLICATIONS);

    const [
        addBlankApplication,
        {
            data: data_addBlankApplication,
            loading: loading_addBlankApplication,
            error: error_addBlankApplication
        }] = useMutation(ADD_BLANK_APPLICATION);

    const [
        updateApplication,
        {
            data: data_updateApplication,
            loading: loading_updateApplication,
            error: error_updateApplication
        }] = useMutation(UPDATE_APPLICATION);

    const [
        deleteApplication,
        {
            data: data_deleteApplication,
            loading: loading_deleteApplication,
            error: error_deleteApplication
        }] = useMutation(DELETE_APPLICATION);

    const handleDelete = (id: string) => {
        deleteApplication({ variables: { id } }).then(() => {
            console.log("Deleting application with ID:", id);
            refetchApplications(); // Refetch after deleting
        });
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Adding blank application...");
        try {
            await addBlankApplication(); // Mutation call inside the handler
            refetchApplications(); // Refetch after adding the blank application
        } catch (e) {
            console.error("Error adding blank application:", e);
        }
    };

    const handleInputChange = (id: string, field: string, value: string) => {
        // Optionally update local state for immediate UI feedback
        const updatedApplications = applications.map((app) =>
          app.id === id ? { ...app, [field]: value } : app
        );
        
      };
      
    const handleBlur = async (id: string, field: string, value: string) => {
        try {
            await updateApplication({ variables: { id, field, value } });
            refetchApplications(); // Refresh the list after update
        } catch (err) {
            console.error("Error updating application:", err);
        }
    };

    if (error_getApplications) { return <p>Error: {error_getApplications.message}</p>; }
    if (error_addBlankApplication) { return <p>Error: {error_addBlankApplication.message}</p>; }
    if (error_deleteApplication) { return <p>Error: {error_deleteApplication.message}</p>; }
    const applications: Application[] = data_getApplications?.applications || [];

    return (
        <div>
            <button onClick={handleClick}>Add Blank Application</button>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            <td>
                                <input
                                    type="text"
                                    value={app.company}
                                    onChange={(e) => handleInputChange(app.id, "company", e.target.value)}
                                    onBlur={(e) => handleBlur(app.id, "company", e.target.value)}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleDelete(app.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;
