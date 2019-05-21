import { Image } from '$ui/components/Image';
import { css, styled } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';

export {
  InfografiaBullet,
  InfografiaSeccion,
  InfografiaMensaje,
  InfografiaMensajeIcon,
  InfografiaMensajeContent,
  InfografiaFaq,
  InfografiaFaqQuestion,
  InfografiaFaqResponse,
};

const InfografiaBullet = styled.div`
  position: relative;

  ::before {
    content: ' ';

    display: block;
    position: absolute;
    top: ${p => (p.theme.baseSpace.md - 13) / 2}px;
    left: -${p => p.theme.baseSpace.sm + 8}px;
    width: 7px;
    height: 7px;

    border: 3px solid ${p => p.theme.colors.magenta};
    border-radius: 6px;
    background: ${p => p.theme.colors.background};
  }
`;

const InfografiaSeccion = styled.div`
  margin-top: ${p => p.theme.baseSpace.sm}px;
  margin-bottom: ${p => p.theme.baseSpace.xxsm}px;

  color: ${p => p.theme.colors.magenta};
  font-weight: ${p => p.theme.font.weight.semibold};
  text-transform: uppercase;
`;

const InfografiaMensaje = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px;

  ${media.tabletAndDesktop`
    display: flex;
  `}
`;

const InfografiaMensajeIcon = styled(Image)`
  width: ${p => p.theme.baseSpace.md}px;
  height: ${p => p.theme.baseSpace.md}px;
  margin-right: ${p => p.theme.baseSpace.xsm}px;

  ${media.onlyMobile`
    float: left;
  `}
  ${media.tabletAndDesktop`
    flex-shrink: 0;
  `}
`;

const InfografiaMensajeContent = styled.div`
  flex-grow: 1;
`;

const InfografiaFaq = styled.div`
  margin: 0 auto ${p => p.theme.baseSpace.sm}px;

  ${media.onlyMobile`
    padding: 0 17px;
  `}
  ${media.tabletAndDesktop`
    width: 530px;
  `}
`;

const faqBox = (
  side: 'left' | 'right',
  backgroundColor: string,
  borderColor?: string,
) => css`
  position: relative;
  padding: ${p => p.theme.baseSpace.sm}px
    ${p => p.theme.baseSpace.sm + p.theme.baseSpace.xxsm}px;

  border-radius: 3px;

  ${media.tabletAndDesktop`
    width: 420px;
  `};

  ::before,
  ::after {
    content: ' ';

    position: absolute;
    top: 50%;
    height: 0;
    width: 0;

    pointer-events: none;
  }

  ::after {
    margin-top: -16px;

    border: 16px solid transparent;
  }

  ::before {
    margin-top: -17px;

    border: 17px solid transparent;
  }

  ${side === 'left' &&
    css`
      ::before,
      ::after {
        right: 100%;
      }

      ::after {
        border-right-color: ${backgroundColor};
      }
      ${borderColor &&
        css`
          ::before {
            border-right-color: ${borderColor};
          }
        `}
    `}

  ${side === 'right' &&
    css`
      ::before,
      ::after {
        left: 100%;
      }

      ::after {
        border-left-color: ${backgroundColor};
      }
      ${borderColor &&
        css`
          ::before {
            border-left-color: ${borderColor};
          }
        `}
    `}
`;

const InfografiaFaqQuestion = styled.div`
  font-weight: ${p => p.theme.font.weight.semibold};

  background-color: ${p => p.theme.colors.rojoClaro3};

  ${p => faqBox('left', p.theme.colors.rojoClaro3)}

  ${media.onlyMobile`
    margin-right: ${p => p.theme.baseSpace.base}px;
  `}
  ${media.tabletAndDesktop`
    margin-right: auto;
  `}
`;

const InfografiaFaqResponse = styled.div`
  border: 1px solid ${p => p.theme.colors.grisClaro};

  ${p => faqBox('right', p.theme.colors.background, p.theme.colors.grisClaro)}

  ${media.onlyMobile`
    margin-left: ${p => p.theme.baseSpace.base}px;
  `}
  ${media.tabletAndDesktop`
    margin-left: auto;
  `}
`;
