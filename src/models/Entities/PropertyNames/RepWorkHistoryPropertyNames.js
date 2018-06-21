//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import WorkHistoryTypePropertyNames from './WorkHistoryTypePropertyNames';

class RepWorkHistoryPropertyNames extends PropertyNamesBase {
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
  get incidentNumber (): string {
    return super.resolvePropertyName("IncidentNumber");
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
  get workHistoryType (): WorkHistoryTypePropertyNames {
    return new WorkHistoryTypePropertyNames(super.resolvePropertyName("WorkHistoryType"));
  }
}

export default RepWorkHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
