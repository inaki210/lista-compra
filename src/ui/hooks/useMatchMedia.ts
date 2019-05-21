import { useContext, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '$ui/styles/styledComponents';
import { matchMedia } from '$ui/styles/utils/media';

export { useMatchMedia };

export type MatchMediaKey = keyof typeof matchMedia;

function useMatchMedia(matchMediaKey: MatchMediaKey) {
  const theme = useContext(ThemeContext);
  const mediaQuery = useMemo(createMediaQuery, [matchMediaKey, theme]);
  const [matches, setMatches] = useState(mediaQuery.matches);
  useEffect(updateMatches, [mediaQuery, setMatches]);

  return matches;

  function createMediaQuery() {
    return matchMedia[matchMediaKey](theme);
  }

  function updateMatches() {
    mediaQuery.addListener(onMediaQueryChange);
    return () => mediaQuery.removeListener(onMediaQueryChange);

    function onMediaQueryChange() {
      setMatches(mediaQuery.matches);
    }
  }
}
