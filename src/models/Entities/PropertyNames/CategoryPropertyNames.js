//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';

class CategoryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get entry (): string {
    return super.resolvePropertyName("Entry");
  }
  get level (): string {
    return super.resolvePropertyName("Level");
  }
  get hasChildren (): string {
    return super.resolvePropertyName("HasChildren");
  }
  get availableToCustomers (): string {
    return super.resolvePropertyName("AvailableToCustomers");
  }
  get image (): string {
    return super.resolvePropertyName("Image");
  }
  get parent (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Parent"));
  }
}

export default CategoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
