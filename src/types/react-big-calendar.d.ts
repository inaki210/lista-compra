import 'react-big-calendar';

declare module 'react-big-calendar' {
  export interface BigCalendarProps<
    TEvent extends Event = Event,
    TResource extends object = object
  > extends React.Props<BigCalendar<TEvent, TResource>> {
    tooltipAccessor?: keyof TEvent | ((event: TEvent) => string);
  }
}
