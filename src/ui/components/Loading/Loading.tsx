import React, { useEffect, useState } from 'react';

import {
  LoadingWrapper,
  Spin,
  SpinItem,
  SpinPosition1,
  SpinPosition10,
  SpinPosition2,
  SpinPosition3,
  SpinPosition4,
  SpinPosition5,
  SpinPosition6,
  SpinPosition7,
  SpinPosition8,
  SpinPosition9,
} from './Loading.styles';

export { Loading };

const delay = 250;

interface Props {
  withoutDelay?: boolean;
  small?: boolean;
}

function Loading({ withoutDelay = false, small }: Props) {
  const [visible, setVisible] = useState(withoutDelay);
  useEffect(delayVisibility, [setVisible]);
  return (
    <>
      {visible && (
        <LoadingWrapper small={small}>
          <Spin small={small}>
            <SpinPosition1>
              <SpinItem />
            </SpinPosition1>
            <SpinPosition2>
              <SpinItem />
            </SpinPosition2>
            <SpinPosition3>
              <SpinItem />
            </SpinPosition3>
            <SpinPosition4>
              <SpinItem />
            </SpinPosition4>
            <SpinPosition5>
              <SpinItem />
            </SpinPosition5>
            <SpinPosition6>
              <SpinItem />
            </SpinPosition6>
            <SpinPosition7>
              <SpinItem />
            </SpinPosition7>
            <SpinPosition8>
              <SpinItem />
            </SpinPosition8>
            <SpinPosition9>
              <SpinItem />
            </SpinPosition9>
            <SpinPosition10>
              <SpinItem />
            </SpinPosition10>
          </Spin>
        </LoadingWrapper>
      )}
    </>
  );

  function delayVisibility() {
    if (visible) {
      return;
    }
    const handle = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(handle);
  }
}
