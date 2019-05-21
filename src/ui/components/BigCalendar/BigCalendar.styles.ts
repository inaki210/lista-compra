import { mix } from 'polished';
import reactBigCalendarStyles from 'react-big-calendar/lib/css/react-big-calendar.css';

import { css, styled, ThemedStyledProps } from '$ui/styles/styledComponents';

export {
  BigCalendarWrapper,
  BigCalendarEventDescription,
  BigCalendarEventWrapper,
};

const BigCalendarWrapper = styled.div`
  ${reactBigCalendarStyles}

  padding-top: ${p => p.theme.baseSpace.base}px;
  /* min-height: 980px; */

  .rbc-calendar {
    height: auto;
  }

  .rbc-month-view {
    height: auto;

    border-top: none;
    border-left: none;
    border-right: none;
  }

  .rbc-header {
    padding-bottom: ${p => p.theme.baseSpace.xsm}px;

    color: ${p => p.theme.colors.gris};
    font-weight: ${p => p.theme.font.weight.semibold};
    text-transform: uppercase;

    & + .rbc-header {
      border-left: none;
    }
  }

  .rbc-month-row {
    min-height: 160px;
    height: auto;
  }

  .rbc-day-bg {
    :first-child {
      border-left: 1px solid #ddd;
    }
    :last-child {
      border-right: 1px solid #ddd;
    }
  }

  .rbc-date-cell {
    padding-top: ${p => p.theme.baseSpace.xxsm / 2}px;
    padding-right:  ${p => p.theme.baseSpace.xxsm}px;

    font-size: ${p => p.theme.font.size.xsmall}px;

    &.rbc-now {
      font-weight: ${p => p.theme.font.weight.normal};
    }
  }

  .rbc-off-range {
    color: ${p => p.theme.colors.grisClaro};
  }

  .rbc-off-range-bg,
  .rbc-today {
    background-color: ${p => p.theme.colors.background};
  }

  .rbc-event {
    padding: ${p => p.theme.baseSpace.xxsm}px ${p => p.theme.baseSpace.xsm}px;

    font-weight: ${p => p.theme.font.weight.semibold};

    cursor: initial;
    border-radius: 0;

    &:focus {
      outline: none;
    }
  }

  .rbc-show-more {
    padding: ${p => p.theme.baseSpace.xxsm}px;

    color: ${p => p.theme.colors.magenta};
    font-size: ${p => p.theme.font.size.xxsmall}px;
  }
`;

const BigCalendarEventDescription = styled.span`
  font-weight: ${p => p.theme.font.weight.normal};
`;

interface BigCalendarEventWrapperProps {
  index: number;
  completed: boolean;
}

const BigCalendarEventWrapper = styled.div<BigCalendarEventWrapperProps>`
  .rbc-event {
    background-color: ${getColor};

    ${p =>
      p.completed &&
      css`
        color: ${p => p.theme.colors.magentaClaro};
        font-weight: ${p => p.theme.font.weight.normal};
      `}
  }
`;

function getColor(p: ThemedStyledProps<BigCalendarEventWrapperProps>) {
  if (p.completed) {
    return p.theme.colors.rojoClaro3;
  }
  const percent = getPercent(p.index);
  return mix(percent, 'white', p.theme.colors.magentaOscuro);
}

function getPercent(index: number) {
  const color = index % 10;
  return percents[color];
}

const percents = {
  0: 0,
  1: 0.15,
  2: 0.3,
  3: 0.45,
  4: 0.1,
  5: 0.25,
  6: 0.4,
  7: 0.05,
  8: 0.2,
  9: 0.35,
};
