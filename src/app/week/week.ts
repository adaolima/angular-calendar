export interface IWeek {
  total: number;
  from: number;
  size: number;
  has_prior: boolean;
  has_next: boolean;
  items: IWeekEvents[];
}

export interface IWeekEvents {
  id: number;
  images: IWeekEventsImages[]
  calendar_id: number;
  start_datetime: Date;
  end_datetime: Date;
  title: string;
  description_short: string;
  timezone: string;
  event_status: 'confirmed' | string;
  url: URL;
}

export interface IWeekEventsImages {
  sizes: {
    full: {
      url: URL;
      width: number;
      height: number;
    },
    medium: {
      url: URL;
      width: number;
      height: number;
    },
    small: {
      url: URL;
      width: number;
      height: number;
    },
    thumbnail: {
      url: URL;
      width: number;
      height: number;
    },
  }
}
export interface IWeekInfo {
  id: number;
  title: string;
  date: {
    delimiter: string;
    format: string;
  },
  time: {
    format: string;
    timezone: string;
  },
  translations: {
    language: string;
  }
}