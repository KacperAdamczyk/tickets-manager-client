export interface IMessageResponse {
  message: string;
}

export interface IDataResponse extends IMessageResponse {
  [data: string]: any;
}
