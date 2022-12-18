export type ElonTraceRecord = {
  altitude: number;
  longitude: number;
  latitude: number;
}
export type ElonTrace = {
  datetime: string;
  records?: ElonTraceRecord[];
};