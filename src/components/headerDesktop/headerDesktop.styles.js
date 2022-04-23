import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: var(--header-background-color);
  width: 100vw;
  height: var(--height-header-desktop);
  @media (min-width: 0em) {
    display: none;
  }
  @media (min-width: 40em) {
    display: flex;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Ul = styled.ul`
  width: 38rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: var(--pages-mobile-elements-width);
`;

export const LiLogo = styled.li``;
