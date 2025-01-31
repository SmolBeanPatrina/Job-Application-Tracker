import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Application {
    @Field()
    id: string;

    @Field()
    company: string;

    @Field()
    title: string;

    @Field()
    deadline: string;

    @Field()
    requirements: string;

    @Field()
    source: string;

    @Field()
    location: string;
}