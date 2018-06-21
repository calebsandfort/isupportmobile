//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import QueryPropertyNames from './QueryPropertyNames';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';

class QueryChartPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get title (): string {
    return super.resolvePropertyName("Title");
  }
  get maxGaugeValue (): string {
    return super.resolvePropertyName("MaxGaugeValue");
  }
  get chartType (): string {
    return super.resolvePropertyName("ChartType");
  }
  get isChart (): string {
    return super.resolvePropertyName("IsChart");
  }
  get gaugeColor (): string {
    return super.resolvePropertyName("GaugeColor");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get isCustomerChart (): string {
    return super.resolvePropertyName("IsCustomerChart");
  }
  get module (): string {
    return super.resolvePropertyName("Module");
  }
  get gaugeType (): string {
    return super.resolvePropertyName("GaugeType");
  }
  get query (): QueryPropertyNames {
    return new QueryPropertyNames(super.resolvePropertyName("Query"));
  }
  get accessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("AccessCircle"));
  }
}

export default QueryChartPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
