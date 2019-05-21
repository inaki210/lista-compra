import { createDerivedIdentity } from '$core/infraestructure/utils/identity';
import { MediaQueries } from './queries.models';

export { queries };

const identity = createDerivedIdentity<MediaQueries>();

const queries = identity({
  all: () => 'all',
  mediumMobile: theme => `(max-width: ${theme.breakpoints.mediumMobile}px)`,
  largeMobile: theme => `(max-width: ${theme.breakpoints.largeMobile}px)`,
  onlyMobile: theme => `(max-width: ${theme.breakpoints.tablet - 1}px)`,
  onlyMobileAndTablet: theme =>
    `(max-width: ${theme.breakpoints.desktop - 1}px)`,
  phablet: theme => `(min-width: ${theme.breakpoints.phablet}px)`,
  tabletAndDesktop: theme => `(min-width: ${theme.breakpoints.tablet}px)`,
  mediumDesktop: theme => `(min-width: ${theme.breakpoints.mediumMobile}px)`,
  desktop: theme => `(min-width: ${theme.breakpoints.desktop}px)`,
  largeDesktop: theme => `(min-width: ${theme.breakpoints.largeDesktop}px)`,
  onlyPrint: () => 'print',
  noPrint: () => 'not print',
});
