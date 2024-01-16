import type { IHistoryElement } from '@/interfaces/IHistoryElement';
import dayjs from 'dayjs';

export const filterLSVideosFromHistory = (history: IHistoryElement[]): IHistoryElement[] => {
  return history.filter((element) => element.subtitles[0].name === 'Lekko Stronniczy');
};

export const filterVideosWithChannelNames = (history: any[]): IHistoryElement[] => {
  return history.filter((element: any | IHistoryElement) => {
    return !!(
      element.header &&
      element.title &&
      element.titleUrl &&
      element.subtitles &&
      element.subtitles.length > 0 &&
      element.time &&
      element.products &&
      element.activityControls
    );
  });
};

// Titles have a prefix "Watched ". This function removes it.
const fixTitle = (title: string): string => {
  const prefix = 'Watched ';
  if (title.startsWith(prefix)) {
    return title.slice(prefix.length);
  }

  return title;
};

export const getSubtextFromVideoCount = (count: number): string => {
  if (count < 100) {
    return 'Musisz dużo nadrobić!';
  } else if (count < 250) {
    return 'Nie jest źle, ale dalej jesteś w tyle!';
  } else if (count < 500) {
    return 'Już wiesz za dużo...';
  } else if (count < 2000) {
    return 'Nie ma już ratunku...';
  }

  return 'Lecz się...';
};

export const groupByTitles = (
  history: IHistoryElement[]
): { title: string; count: number; link: string }[] => {
  const titles: { title: string; count: number; link: string }[] = [];

  history.forEach((element) => {
    const title = fixTitle(element.title);

    if (titles.some((t) => t.title === title)) {
      const index = titles.findIndex((t) => t.title === title);
      titles[index].count++;
    } else {
      titles.push({ title, count: 1, link: element.titleUrl });
    }
  });

  return titles.sort((a, b) => b.count - a.count);
};

export const groupByDayOfTheWeek = (
  history: IHistoryElement[]
): { day: string; day_number: number; count: number }[] => {
  const days: { day: string; day_number: number; count: number }[] = [];

  history.forEach((element) => {
    const day = dayjs(element.time).format('dddd');

    if (days.some((d) => d.day === day)) {
      const index = days.findIndex((d) => d.day === day);
      days[index].count++;
    } else {
      const day_number = dayjs(element.time).day() !== 0 ? dayjs(element.time).day() : 7;
      days.push({ day, day_number, count: 1 });
    }
  });

  return days.sort((a, b) => a.day_number - b.day_number);
};

export const groupByDay = (history: IHistoryElement[]): { day: string; count: number }[] => {
  const days: { day: string; count: number }[] = [];

  history.forEach((element) => {
    const day = dayjs(element.time).format('YYYY-MM-DD');

    if (days.some((d) => d.day === day)) {
      const index = days.findIndex((d) => d.day === day);
      days[index].count++;
    } else {
      days.push({ day, count: 1 });
    }
  });

  return days.sort((a, b) => b.count - a.count);
};
