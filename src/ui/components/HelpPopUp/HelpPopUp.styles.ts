import { Image } from '$ui/components/Image';
import { Link } from '$ui/components/Link';
import { PopUpStyledProps } from '$ui/components/PopUp';
import { css, styled } from '$ui/styles/styledComponents';

export {
  HelpPopUpLink,
  HelpPopUpImage,
  HelpPopUpContentWrapper,
  HelpPopUpArrow,
  HelpPopUpContent,
};

const HelpPopUpLink = styled(Link)`
  display: inline-block;
`;

const HelpPopUpImage = styled(Image)`
  width: 1.25em;
  height: 1.25em;

  vertical-align: text-bottom;
`;

const HelpPopUpContentWrapper = styled.div<PopUpStyledProps>`
  ${p => p.styles}

  border: 1px solid ${p => p.theme.colors.grisClaro};
  box-shadow: 0 5px 10px ${p => p.theme.colors.grisClaro};
  background-color: ${p => p.theme.colors.background};

  ${p => {
    switch (p.placement) {
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return css`
          margin-top: 10px;
        `;
      case 'top-start':
      case 'top':
      case 'top-end':
        return css`
          margin-bottom: 10px;
        `;
      default:
        return null;
    }
  }}
`;

const HelpPopUpArrow = styled.div<PopUpStyledProps>`
  ${p => p.styles}

  position: absolute;

  ${p => {
    switch (p.placement) {
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return css`
          top: -11px;

          border-bottom: 11px solid ${p => p.theme.colors.grisClaro};
          border-left: 11px solid transparent;
          border-right: 11px solid transparent;

          :after {
            content: '';

            display: block;
            position: absolute;
            top: 1px;
            left: -10px;
            width: 0;
            height: 0;

            border-bottom: 10px solid ${p => p.theme.colors.background};
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
        `;
      case 'top-start':
      case 'top':
      case 'top-end':
        return css`
          bottom: -11px;

          border-top: 11px solid ${p => p.theme.colors.grisClaro};
          border-left: 11px solid transparent;
          border-right: 11px solid transparent;

          :after {
            content: '';

            display: block;
            position: absolute;
            bottom: 1px;
            left: -10px;
            width: 0;
            height: 0;

            border-top: 10px solid ${p => p.theme.colors.background};
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
        `;
      default:
        return null;
    }
  }}
`;

const HelpPopUpContent = styled.div`
  max-width: 300px;
  padding: ${p => p.theme.baseSpace.xsm}px;
`;
