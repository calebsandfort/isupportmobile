//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedIncidentLoadSpan from './ArchivedIncidentLoadSpan';

export class ArchivedIncidentAttachmentLoadSpan {
  fileName: boolean;
  fileData: boolean;
  fileType: boolean;
  incident: ArchivedIncidentLoadSpan;

  constructor(){
    this.fileName = false;
    this.fileData = false;
    this.fileType = false;
  }

  get incidentLoadSpan(): ArchivedIncidentLoadSpan {
    if(!this.incident){
		this.incident = new ArchivedIncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
    this.fileName = true;
    this.fileData = true;
    this.fileType = true;
  }
}

export default ArchivedIncidentAttachmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
