//@flow
import EntityBase from './entityBase';

export class JobFunction extends EntityBase {
  name: string;

  static fromApiEntity(apiJobFunction:JobFunctionType): JobFunction {
    let jobFunction = new JobFunction();
    jobFunction.id = apiJobFunction.id;
    jobFunction.name = apiJobFunction.name;

    return jobFunction;
  }
}

export default JobFunction;

export type JobFunctionType = {
  id: number,
  name: string;
}

