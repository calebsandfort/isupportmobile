// @flow
class EntityBase {
  id: number;

  get idString (): string {
    return this.id.toString();
  }

  set idString (_idString: string){
    this.id = parseInt(_idString, 10);
  }
}

export default EntityBase;
