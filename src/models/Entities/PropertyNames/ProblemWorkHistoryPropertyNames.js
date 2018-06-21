//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class ProblemWorkHistoryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get entry (): string {
    return super.resolvePropertyName("Entry");
  }
  get problemNumber (): string {
    return super.resolvePropertyName("ProblemNumber");
  }
  get timeWorked (): string {
    return super.resolvePropertyName("TimeWorked");
  }
  get startDate (): string {
    return super.resolvePropertyName("StartDate");
  }
  get stopDate (): string {
    return super.resolvePropertyName("StopDate");
  }
  get owner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Owner"));
  }
  get ownerGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("OwnerGroup"));
  }
  get workHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("WorkHistoryType"));
  }
}

export default ProblemWorkHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
