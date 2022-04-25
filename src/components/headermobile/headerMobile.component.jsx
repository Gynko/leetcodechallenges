import IconMenu from "../../assets/icons/IconMenu";
import { IconContainer } from "../../assets/icons/IconsContainer.styles";
import LogoLcChallenges from "../LogoLcChallenges/LogoLcChallenges.component";
import {
  Container,
  Header,
  Nav,
  Ul,
  LiIconMenu,
  LiLogo,
} from "./headerMobile.styles.js";
import { useState } from "react";

function HeaderMobile() {
  const [dropdown, SetDropdown] = useState(false);

  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <LiIconMenu>
              <IconContainer height="2.2rem" marginleft="0.6rem">
                <IconMenu />
              </IconContainer>
            </LiIconMenu>
            <LiLogo>
              <LogoLcChallenges />
            </LiLogo>
          </Ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default HeaderMobile;
