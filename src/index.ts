import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');

const summary = Summary.winsAnalysisWithHtmlReport('Chelsea');
summary.buildAndPrintReport(matchReader.matches);
