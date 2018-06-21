//@flow
import EntityBase from './entityBase';
import CustomFieldDataSource from './CustomFieldDataSource';

export class CustomFieldDataSourceItem extends EntityBase {
  value: string;
  customFieldDataSource: CustomFieldDataSource;

  static fromApiEntity(apiCustomFieldDataSourceItem:CustomFieldDataSourceItemType): CustomFieldDataSourceItem {
    let customFieldDataSourceItem = new CustomFieldDataSourceItem();
    customFieldDataSourceItem.id = apiCustomFieldDataSourceItem.id;
    customFieldDataSourceItem.value = apiCustomFieldDataSourceItem.value;
    if (apiCustomFieldDataSourceItem.customFieldDataSource) customFieldDataSourceItem.customFieldDataSource = CustomFieldDataSource.fromApiEntity(apiCustomFieldDataSourceItem.customFieldDataSource);

    return customFieldDataSourceItem;
  }
}

export default CustomFieldDataSourceItem;

export type CustomFieldDataSourceItemType = {
  id: number,
  value: string;
  customFieldDataSource: CustomFieldDataSource;
}

