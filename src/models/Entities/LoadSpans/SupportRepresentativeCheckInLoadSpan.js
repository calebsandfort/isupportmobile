//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import IncidentLoadSpan from './IncidentLoadSpan';
import ProblemLoadSpan from './ProblemLoadSpan';
import ChangeLoadSpan from './ChangeLoadSpan';
import KnowledgeEntryLoadSpan from './KnowledgeEntryLoadSpan';
import AssetLoadSpan from './AssetLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SupportRepresentativeCheckInLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  latitude: boolean;
  longitude: boolean;
  owner: SupportRepresentativeLoadSpan;
  incident: IncidentLoadSpan;
  problem: ProblemLoadSpan;
  change: ChangeLoadSpan;
  knowledge: KnowledgeEntryLoadSpan;
  asset: AssetLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.latitude = false;
    this.longitude = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get incidentLoadSpan(): IncidentLoadSpan {
    if(!this.incident){
		this.incident = new IncidentLoadSpan();
	}

    return this.incident;
  }

  get problemLoadSpan(): ProblemLoadSpan {
    if(!this.problem){
		this.problem = new ProblemLoadSpan();
	}

    return this.problem;
  }

  get changeLoadSpan(): ChangeLoadSpan {
    if(!this.change){
		this.change = new ChangeLoadSpan();
	}

    return this.change;
  }

  get knowledgeLoadSpan(): KnowledgeEntryLoadSpan {
    if(!this.knowledge){
		this.knowledge = new KnowledgeEntryLoadSpan();
	}

    return this.knowledge;
  }

  get assetLoadSpan(): AssetLoadSpan {
    if(!this.asset){
		this.asset = new AssetLoadSpan();
	}

    return this.asset;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.latitude = true;
    this.longitude = true;
  }
}

export default SupportRepresentativeCheckInLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
