"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const application_entity_1 = require("./application.entity");
const uuid_1 = require("uuid");
let ApplicationResolver = class ApplicationResolver {
    constructor() {
        this.applications = [];
    }
    getApplications() {
        return this.applications;
    }
    addBlankApplication() {
        const newApplication = {
            id: (0, uuid_1.v4)(),
            company: "",
            title: "",
            deadline: "",
            requirements: "",
            source: "",
            location: ""
        };
        this.applications.push(newApplication);
        return newApplication;
    }
    updateApplication(id, field, value) {
        var index;
        for (let i = 0; i < this.applications.length; i++) {
            if (this.applications[i].id = id) {
                index = i;
                break;
            }
        }
        switch (field) {
            case "company":
                this.applications[index].company = value;
                break;
            case "title":
                this.applications[index].title = value;
                break;
            case "deadline":
                this.applications[index].deadline = value;
                break;
            case "requirements":
                this.applications[index].requirements = value;
                break;
            case "source":
                this.applications[index].source = value;
                break;
            case "location":
                this.applications[index].location = value;
                break;
            default:
        }
        return this.applications[index];
    }
    deleteApplication(id) {
        const index = this.applications.findIndex((application) => application.id === id);
        if (index === -1)
            return false;
        this.applications.splice(index, 1);
        return true;
    }
};
exports.ApplicationResolver = ApplicationResolver;
__decorate([
    (0, graphql_1.Query)(() => [application_entity_1.Application], { name: 'applications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ApplicationResolver.prototype, "getApplications", null);
__decorate([
    (0, graphql_1.Mutation)(() => application_entity_1.Application),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", application_entity_1.Application)
], ApplicationResolver.prototype, "addBlankApplication", null);
__decorate([
    (0, graphql_1.Mutation)(() => application_entity_1.Application),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('field')),
    __param(2, (0, graphql_1.Args)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", application_entity_1.Application)
], ApplicationResolver.prototype, "updateApplication", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], ApplicationResolver.prototype, "deleteApplication", null);
exports.ApplicationResolver = ApplicationResolver = __decorate([
    (0, graphql_1.Resolver)(() => application_entity_1.Application)
], ApplicationResolver);
//# sourceMappingURL=application.resolver.js.map