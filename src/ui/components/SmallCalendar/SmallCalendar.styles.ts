import reactCalendarStyles from 'react-calendar/dist/Calendar.css';

import { styled } from '$ui/styles/styledComponents';

export { SmallCalendarWrapper };

const SmallCalendarWrapper = styled.div`
  ${reactCalendarStyles}

  .react-calendar {
    border: none;
  }

  .react-calendar__navigation {
    height: ${p => p.theme.baseSpace.base}px;
    margin-bottom: ${p => p.theme.baseSpace.xxsm}px;

    button {
      color: ${p => p.theme.colors.berenjena};

      &:disabled {
        background-color: ${p => p.theme.colors.background};

        &.react-calendar__navigation__arrow {
          visibility: hidden;
        }
      }
    }
  }

  .react-calendar__month-view__weekdays {
    border-bottom: 1px solid ${p => p.theme.colors.grisClaro};
    margin-bottom: ${p => p.theme.baseSpace.xsm}px;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: ${p => p.theme.baseSpace.xxsm}px;

    color: ${p => p.theme.colors.gris};
    font-size: ${p => p.theme.font.size.xxsmall}px;
    font-weight: ${p => p.theme.font.weight.semibold};
    letter-spacing: 0.54px;
    text-transform: uppercase;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    padding: ${p => p.theme.baseSpace.sm}px;

    color: ${p => p.theme.colors.magentaOscuro2};
    letter-spacing: 0.71px;

    &:disabled {
      background-color: ${p => p.theme.colors.background};
    }

    &.react-calendar__tile--selected {
      ::after {
        content: ' ';

        display: block;
        margin: 0 -${p => p.theme.baseSpace.sm}px -${p =>
            p.theme.baseSpace.xsm}px;
        padding-bottom: ${p => p.theme.baseSpace.xxsm}px;

        border-bottom: ${p => p.theme.baseSpace.xxsm}px solid
          ${p => p.theme.colors.magentaClaro};
      }
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${p => p.theme.colors.gris};
  }
`;
