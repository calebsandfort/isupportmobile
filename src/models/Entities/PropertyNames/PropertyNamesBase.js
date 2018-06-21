//@flow
class PropertyNamesBase {
  _owner: ?string;

  constructor(owner: ?string){
    this._owner = owner;
  }

  resolvePropertyName(property: string): string {
    if (this._owner != null){
      property = `${this._owner}.${property}`;
    }

    return property;
  }
}

export default PropertyNamesBase;
