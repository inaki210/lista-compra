import { styled } from '$ui/styles/styledComponents';

export { Link };

const Link = styled.a`
  color: ${p => p.theme.colors.magenta};
  text-decoration: underline;
`;
