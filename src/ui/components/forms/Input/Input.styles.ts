import { css, styled } from '$ui/styles/styledComponents';
import { formControl } from '../form.styles';

export { Input };

interface InputProps {
  isInvalid?: boolean;
}

const Input = styled.input<InputProps>`
  ${formControl}

  border: 1px solid ${p => p.theme.colors.beigeOscuro};

  ${p =>
    p.isInvalid &&
    css`
      border-color: ${p.theme.colors.rojo};

      :focus {
        outline-color: ${p.theme.colors.rojo};
      }
    `}
`;
