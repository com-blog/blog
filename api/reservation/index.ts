import { Event } from '@/shared/types/Calendar';
import { useDayjs } from '@/.nuxt/imports';

export class Reservation {
  public static get(): Event[] {
    const dayjs = useDayjs();
    const now = dayjs();
    const test1Start = now.subtract(1, 'd').set('minute', 0).set('second', 0);
    const test2Start = now.add(2, 'd').set('hour', 10).set('minute', 15).set('second', 0);

    return [
      {
        id: 1,
        start: test1Start.utc().format(),
        end: test1Start.add(10, 'm').utc().format(),
        title: 'test1',
        description: 'test',
      },
      {
        id: 2,
        start: test2Start.utc().format(),
        end: test2Start.add(15, 'm').utc().format(),
        title: 'Test2',
        description: 'test',
      },
    ] as Event[];
  }
}
