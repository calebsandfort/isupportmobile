//@flow
import EntityBase from './entityBase';
import Query from './Query';
import AccessCircle from './AccessCircle';
import {QueryEngineModule} from './Enums';
import {GaugeType} from './Enums';

export class QueryChart extends EntityBase {
  title: string;
  maxGaugeValue: string;
  chartType: string;
  isChart: string;
  gaugeColor: string;
  modifiedDate: string;
  isCustomerChart: string;
  module: QueryEngineModule;
  gaugeType: GaugeType;
  query: Query;
  accessCircle: AccessCircle;

  static fromApiEntity(apiQueryChart:QueryChartType): QueryChart {
    let queryChart = new QueryChart();
    queryChart.id = apiQueryChart.id;
    queryChart.title = apiQueryChart.title;
    queryChart.maxGaugeValue = apiQueryChart.maxGaugeValue;
    queryChart.chartType = apiQueryChart.chartType;
    queryChart.isChart = apiQueryChart.isChart;
    queryChart.gaugeColor = apiQueryChart.gaugeColor;
    queryChart.modifiedDate = apiQueryChart.modifiedDate;
    queryChart.isCustomerChart = apiQueryChart.isCustomerChart;
    queryChart.module = QueryEngineModule.enumOrdinalOf(parseInt(apiQueryChart.module, 10));
    queryChart.gaugeType = GaugeType.enumOrdinalOf(parseInt(apiQueryChart.gaugeType, 10));
    if (apiQueryChart.query) queryChart.query = Query.fromApiEntity(apiQueryChart.query);
    if (apiQueryChart.accessCircle) queryChart.accessCircle = AccessCircle.fromApiEntity(apiQueryChart.accessCircle);

    return queryChart;
  }
}

export default QueryChart;

export type QueryChartType = {
  id: number,
  title: string;
  maxGaugeValue: string;
  chartType: string;
  isChart: string;
  gaugeColor: string;
  modifiedDate: string;
  isCustomerChart: string;
  module: QueryEngineModule;
  gaugeType: GaugeType;
  query: Query;
  accessCircle: AccessCircle;
}

