import Button from "../Button/Button.component";
import LogoLcChallenges from "../LogoLcChallenges/LogoLcChallenges.component";
import { Container, Header, Nav, Ul, LiLogo } from "./headerDesktop.styles.js";

function HeaderDesktop() {
  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <LiLogo>
              <LogoLcChallenges />
            </LiLogo>
            <li>
              <Button label="Leetcode" />
            </li>
            <li>
              <Button label="React Components" />
            </li>
            <li>
              <Button label="Challenge Me!" />
            </li>
          </Ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default HeaderDesktop;
