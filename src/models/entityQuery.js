// @flow
export class EntityQuery {
  enablePaging: boolean;
  startRowIndex: number;
  maximumRows: number;
  sqlTimeout: number;
  sortExpression: string;
  searchFilters: Array<SearchFilter>;

  constructor(enablePaging:boolean = false, startRowIndex:number = 0, maximumRows:number = 0, sqlTimeout:number = 30, sortExpression:string = "") {
    this.enablePaging = enablePaging;
    this.startRowIndex = startRowIndex;
    this.maximumRows = maximumRows;
    this.sqlTimeout = sqlTimeout;
    this.sortExpression = sortExpression;
    this.searchFilters = [];
  }
}

export class SearchFilter {
  isAndFilter: boolean;
  propertyName: string;
  condition: number;
  value: mixed;
  value2: mixed;
  searchFilters: Array<SearchFilter>;

  constructor(isAndFilter:boolean = true, propertyName:string = "", condition:number = SearchFilterCondition.None, value:mixed = null, value2:mixed = null) {
    this.isAndFilter = isAndFilter;
    this.propertyName = propertyName;
    this.condition = condition;
    this.value = value;
    this.value2 = value2;
    this.searchFilters = [];
  }
}

export const SearchFilterCondition = {
    None: 0,
    Contains: 1,
    StartsWith: 2,
    EndsWith: 3,
    Is: 4,
    In: 5,
    IsDBNull: 6,
    IsNotDBNull: 7,
    Between: 8,
    IsNot: 9,
    IsTrue: 10,
    IsFalse: 11,
    InFlag: 12,
    IsLessThanOrEqual: 13,
    IsLessThan: 14,
    NotIn: 15,
    Before: 16,
    After: 17,
    IsGreaterThanOrEqual: 18,
    IsGreaterThan: 19
};
