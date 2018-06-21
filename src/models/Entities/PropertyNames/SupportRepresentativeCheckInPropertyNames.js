//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import IncidentPropertyNames from './IncidentPropertyNames';
import ProblemPropertyNames from './ProblemPropertyNames';
import ChangePropertyNames from './ChangePropertyNames';
import KnowledgeEntryPropertyNames from './KnowledgeEntryPropertyNames';
import AssetPropertyNames from './AssetPropertyNames';

class SupportRepresentativeCheckInPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get latitude (): string {
    return super.resolvePropertyName("Latitude");
  }
  get longitude (): string {
    return super.resolvePropertyName("Longitude");
  }
  get owner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Owner"));
  }
  get incident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
  get problem (): ProblemPropertyNames {
    return new ProblemPropertyNames(super.resolvePropertyName("Problem"));
  }
  get change (): ChangePropertyNames {
    return new ChangePropertyNames(super.resolvePropertyName("Change"));
  }
  get knowledge (): KnowledgeEntryPropertyNames {
    return new KnowledgeEntryPropertyNames(super.resolvePropertyName("Knowledge"));
  }
  get asset (): AssetPropertyNames {
    return new AssetPropertyNames(super.resolvePropertyName("Asset"));
  }
}

export default SupportRepresentativeCheckInPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
