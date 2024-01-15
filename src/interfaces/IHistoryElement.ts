export interface IHistoryElement {
  header: string;
  title: string;
  titleUrl: string;
  subtitles: ISubtitle[];
  time: string;
  products: string[];
  activityControls: string[];
}

export interface ISubtitle {
  name: string;
  url: string;
}
