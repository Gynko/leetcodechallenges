import { Container } from "./IconsContainer.styles";

function ContainerIcon({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

export default ContainerIcon;
