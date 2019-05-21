import { EntryType } from '$core/domain/siniestros/timeline';
import { Link } from '$ui/components/Link';
import { getImage } from '$ui/images';
import { css, styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export { TimelineItemBodyWrapper, TimelineItemBodyLink, TimelineItemBodyTime };

interface Props {
  entryType: EntryType;
  showDestacado?: boolean;
}

const error = getImage('error.svg');
const success = getImage('success.svg');
const warning = getImage('warning.svg');

const TimelineItemBodyWrapper = styled.div.attrs({})<Props>`
  padding: ${p => p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px;

  font-size: ${p => p.theme.font.size.xsmall}px;

  border: 1px solid ${p => p.theme.colors.beige};

  ${media.tabletAndDesktop`
    flex-grow: 1;
    margin-left: ${p => p.theme.baseSpace.xxsm}px;

    :first-child {
      margin-left: ${p => p.theme.baseSpace.md + p.theme.baseSpace.xxsm}px;
    }
  `}

  ${p =>
    p.entryType !== EntryType.default &&
    css`
      padding-left: ${p.theme.baseSpace.md}px;

      border-color: ${p.theme.colors.amarilloOscuro};
      background-color: ${p.theme.colors.amarillo};
      background-size: ${p.theme.baseSpace.base - p.theme.baseSpace.xxsm}px;
      background-repeat: no-repeat;
      background-position: ${p.theme.baseSpace.xsm}px center;

      ${p.entryType === EntryType.success &&
        css`
          color: ${p.theme.colors.verdeOscuro};

          background-image: url(${success});
        `}

      ${p.entryType === EntryType.warning &&
        css`
          color: ${p.theme.colors.amarilloOscuro};

          background-image: url(${warning});
        `}

      ${p.entryType === EntryType.error &&
        css`
          color: ${p.theme.colors.rojo};

          background-image: url(${error});
        `}
    `}

  ${p =>
    p.showDestacado &&
    css`
      position: relative;

      font-weight: ${p.theme.font.weight.semibold};

      ::before {
        content: ' ';

        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        width: 3px;

        background-color: ${p.theme.colors.magenta};
      }
    `}
`;

interface LinkProps {
  entryType: EntryType;
}

const TimelineItemBodyLink = styled(Link).attrs({})<LinkProps>`
  font-weight: ${p => p.theme.font.weight.semibold};

  ${p =>
    p.entryType === EntryType.success &&
    css`
      color: ${p.theme.colors.verdeOscuro};
    `}

  ${p =>
    p.entryType === EntryType.warning &&
    css`
      color: ${p.theme.colors.amarilloOscuro};
    `}

  ${p =>
    p.entryType === EntryType.error &&
    css`
      color: ${p.theme.colors.rojo};
    `}
`;

const TimelineItemBodyTime = styled.div`
  margin: 0 -${p => p.theme.baseSpace.xsm}px -${p =>
      p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px;

  color: ${p => p.theme.colors.gris};
  font-weight: ${p => p.theme.font.weight.normal};
  line-height: ${p => p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px;
  text-align: right;
`;
