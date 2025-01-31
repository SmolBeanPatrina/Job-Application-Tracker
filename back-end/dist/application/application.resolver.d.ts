import { Application } from './application.entity';
export declare class ApplicationResolver {
    private applications;
    getApplications(): Application[];
    addBlankApplication(): Application;
    updateApplication(id: string, field: string, value: string): Application;
    deleteApplication(id: string): boolean;
}
