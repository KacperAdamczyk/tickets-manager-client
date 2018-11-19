export interface IRoute {
  _id: string;
  startTime: number | string;
  endTime: number | string;
  sourceIata: string;
  destinationIata: string;
}
