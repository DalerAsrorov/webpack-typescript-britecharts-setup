import { ChartDimensionsAPI, ChartAnimationAPI, ExportableChartAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';

export enum SparklineChartKeys {
  Value = 'value',
  Date = 'date',
}

export type SparklineChartDataShape = {
  [SparklineChartKeys.Value]: number;
  [SparklineChartKeys.Date]: string;
};

export type SparklineSelection = Selection<
  BaseType,
  SparklineChartDataShape,
  HTMLElement,
  any
>;

export interface SparkelineTitleTextStyle {
  'font-family'?: string;
  'font-size'?: string,
  'font-weight'?: number,
  'font-style'?: string,
  'fill'?: string,
}

export interface SparklineChartAPI extends
    ChartDimensionsAPI<SparklineChartModule>,
    ChartAnimationAPI<SparklineChartModule>,
    ExportableChartAPI<SparklineChartModule>  {
  areaGradient(gradient?: [string, string]): SparklineChartModule;
  lineGradient(gradient?: [string, string]): SparklineChartModule;
  loadingState(markup?: string): SparklineChartModule;
  titleText(title?: string): SparklineChartModule;
  titleTextStyle(titleStyle?: SparkelineTitleTextStyle): SparklineChartModule;
}

export type SparklineChartModule = ChartModuleSelection<SparklineChartDataShape[]> &
  SparklineChartAPI;

/**
 * import {sparkline} from 'britecharts;
 * sparkline().width(100).height(100)
 */
export function sparkline(): SparklineChartModule;
