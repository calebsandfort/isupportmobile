//@flow
import EntityBase from './entityBase';

export class CustomFieldDataSource extends EntityBase {

  static fromApiEntity(apiCustomFieldDataSource:CustomFieldDataSourceType): CustomFieldDataSource {
    let customFieldDataSource = new CustomFieldDataSource();
    customFieldDataSource.id = apiCustomFieldDataSource.id;

    return customFieldDataSource;
  }
}

export default CustomFieldDataSource;

export type CustomFieldDataSourceType = {
  id: number,
}

