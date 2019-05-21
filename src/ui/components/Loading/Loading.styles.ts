import { css, keyframes, styled } from '$ui/styles/styledComponents';

export {
  LoadingWrapper,
  Spin,
  SpinItem,
  SpinPosition1,
  SpinPosition2,
  SpinPosition3,
  SpinPosition4,
  SpinPosition5,
  SpinPosition6,
  SpinPosition7,
  SpinPosition8,
  SpinPosition9,
  SpinPosition10,
};

interface Props {
  small?: boolean;
}

const LoadingWrapper = styled.div.attrs({})<Props>`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${p => (p.small ? p.theme.baseSpace.xxsm : p.theme.baseSpace.xlg)}px;
`;

const Spin = styled.div.attrs({})<Props>`
  position: relative;

  ${p => {
    const size = p.small ? 60 : 89;
    const translate = size / 2;
    const scale = translate / 100;
    return css`
      width: ${size}px;
      height: ${size}px;

      transform: translate(-${translate}px, -${translate}px) scale(${scale})
        translate(${translate}px, ${translate}px);
    `;
  }}
`;

const spinAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1);
  }
`;

const SpinItem = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;

  border-radius: 50%;
  background: ${p => p.theme.colors.magentaOscuro};
  animation: ${spinAnimation} 1s linear infinite;
`;

const SpinPosition1 = styled.div`
  transform: rotate(0deg);
  transform-origin: 160px 100px;

  ${SpinItem} {
    left: 146px;
    top: 86px;

    animation-delay: -0.9s;
  }
`;

const SpinPosition2 = styled.div`
  transform: rotate(36deg);
  transform-origin: 148.54101964px 135.26711512px;

  ${SpinItem} {
    left: 134.54101964px;
    top: 121.26711512px;

    animation-delay: -0.8s;
  }
`;

const SpinPosition3 = styled.div`
  transform: rotate(72deg);
  transform-origin: 118.54101964px 157.06339096px;

  ${SpinItem} {
    left: 104.54101964px;
    top: 143.06339096px;

    animation-delay: -0.7s;
  }
`;

const SpinPosition4 = styled.div`
  transform: rotate(108deg);
  transform-origin: 81.45898036px 157.06339096px;

  ${SpinItem} {
    left: 67.45898036px;
    top: 143.06339096px;

    animation-delay: -0.6s;
  }
`;

const SpinPosition5 = styled.div`
  transform: rotate(144deg);
  transform-origin: 51.45898036px 135.26711512px;

  ${SpinItem} {
    left: 37.45898036px;
    top: 121.26711512px;

    animation-delay: -0.5s;
  }
`;

const SpinPosition6 = styled.div`
  transform: rotate(180deg);
  transform-origin: 40px 100px;

  ${SpinItem} {
    left: 26px;
    top: 86px;

    animation-delay: -0.4s;
  }
`;

const SpinPosition7 = styled.div`
  transform: rotate(216deg);
  transform-origin: 51.45898036px 64.73288488px;

  ${SpinItem} {
    left: 37.45898036px;
    top: 50.73288488px;

    animation-delay: -0.3s;
  }
`;

const SpinPosition8 = styled.div`
  transform: rotate(252deg);
  transform-origin: 81.45898036px 42.93660904px;

  ${SpinItem} {
    left: 67.45898036px;
    top: 28.93660904px;

    animation-delay: -0.2s;
  }
`;

const SpinPosition9 = styled.div`
  transform: rotate(288deg);
  transform-origin: 118.54101964px 42.93660904px;

  ${SpinItem} {
    left: 104.54101964px;
    top: 28.93660904px;

    animation-delay: -0.1s;
  }
`;

const SpinPosition10 = styled.div`
  transform: rotate(324deg);
  transform-origin: 148.54101964px 64.73288488px;

  ${SpinItem} {
    left: 134.54101964px;
    top: 50.73288488px;

    animation-delay: 0s;
  }
`;
