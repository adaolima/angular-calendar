export interface ICalendar {
  data: {
    total: number;
    from: number;
    size: number;
    has_prior: boolean;
    has_next: boolean;
    items: ICalendarEvents[];
  }
}

export interface ICalendarEvents {
  id: number;
  images: ICalendarEventsImages[]
  calendar_id: number;
  start_datetime: Date;
  end_datetime: Date;
  title: string;
  description_short: string;
  timezone: string;
  event_status: 'confirmed' | string;
  url: URL;
}

export interface ICalendarEventsImages {
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

export interface ICalendarInfo {
  data: {
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
}

export interface IMonth {
  name: string;
  days: number;
  startAt: number;
}