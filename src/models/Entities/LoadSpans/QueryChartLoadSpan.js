//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import QueryLoadSpan from './QueryLoadSpan';
import AccessCircleLoadSpan from './AccessCircleLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class QueryChartLoadSpan extends LoadSpanBase {
  title: boolean;
  maxGaugeValue: boolean;
  chartType: boolean;
  isChart: boolean;
  gaugeColor: boolean;
  modifiedDate: boolean;
  isCustomerChart: boolean;
  module: boolean;
  gaugeType: boolean;
  query: QueryLoadSpan;
  accessCircle: AccessCircleLoadSpan;

  constructor(){
    super();
    this.title = false;
    this.maxGaugeValue = false;
    this.chartType = false;
    this.isChart = false;
    this.gaugeColor = false;
    this.modifiedDate = false;
    this.isCustomerChart = false;
    this.module = false;
    this.gaugeType = false;
  }

  get queryLoadSpan(): QueryLoadSpan {
    if(!this.query){
		this.query = new QueryLoadSpan();
	}

    return this.query;
  }

  get accessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.accessCircle){
		this.accessCircle = new AccessCircleLoadSpan();
	}

    return this.accessCircle;
  }

  loadAllProperties() {
    this.title = true;
    this.maxGaugeValue = true;
    this.chartType = true;
    this.isChart = true;
    this.gaugeColor = true;
    this.modifiedDate = true;
    this.isCustomerChart = true;
    this.module = true;
    this.gaugeType = true;
  }
}

export default QueryChartLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
