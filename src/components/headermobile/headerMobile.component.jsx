import IconMenu from "../../assets/icons/IconMenu";
import { IconContainer } from "../../assets/icons/IconsContainer.styles";
import LogoLcChallenges from "../LogoLcChallenges/LogoLcChallenges.component";
import { Container, Header, Nav, Ul } from "./headerMobile.styles.js";

function HeaderMobile() {
  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <li>
              <IconContainer height="2.8rem">
                <IconMenu />
              </IconContainer>
            </li>
          </Ul>
          <Ul>
            <li>
              <LogoLcChallenges />
            </li>
          </Ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default HeaderMobile;
