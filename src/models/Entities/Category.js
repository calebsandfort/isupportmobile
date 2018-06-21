//@flow
import EntityBase from './entityBase';

export class Category extends EntityBase {
  entry: string;
  level: string;
  hasChildren: string;
  availableToCustomers: string;
  image: string;
  parent: Category;

  static fromApiEntity(apiCategory:CategoryType): Category {
    let category = new Category();
    category.id = apiCategory.id;
    category.entry = apiCategory.entry;
    category.level = apiCategory.level;
    category.hasChildren = apiCategory.hasChildren;
    category.availableToCustomers = apiCategory.availableToCustomers;
    category.image = apiCategory.image;
    if (apiCategory.parent) category.parent = Category.fromApiEntity(apiCategory.parent);

    return category;
  }
}

export default Category;

export type CategoryType = {
  id: number,
  entry: string;
  level: string;
  hasChildren: string;
  availableToCustomers: string;
  image: string;
  parent: Category;
}

