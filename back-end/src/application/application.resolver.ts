import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Application } from './application.entity';
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => Application)
export class ApplicationResolver {
  private applications: Application[] = [];

  @Query(() => [Application], { name: 'applications' })
  getApplications(): Application[] {
    return this.applications;
  }

  @Mutation(() => Application)
  addBlankApplication(): Application {
    const newApplication: Application = {
      id: uuidv4(),
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

  @Mutation(() => Application)
  updateApplication(
    @Args('id') id: string,
    @Args('field') field: string,
    @Args('value') value: string
  ): Application {
    var index;
    for (let i = 0; i < this.applications.length; i++) {
      if (this.applications[i].id = id) {index = i; break;}
    }
    switch(field) {
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

  @Mutation(() => Boolean)
  deleteApplication(@Args('id') id: string): boolean {
    const index = this.applications.findIndex((application) => application.id === id);
    if (index === -1) return false;
    this.applications.splice(index, 1);
    return true;
  }
}
