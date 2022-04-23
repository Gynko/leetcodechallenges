import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAbove = styled.p`
  text-align: center;
  color: #f8acac;
  font-family: "Operator Mono Light";
  @media (min-width: 0em) {
    font-size: 1rem;
  }
  @media (min-width: 40em) {
    font-size: 1.5rem;
  }
`;

export const TextUnder = styled.p`
  text-align: center;
  color: #f9c510;
  font-family: "Bungee";
  line-height: 1.2rem;
  @media (min-width: 0em) {
    font-size: 1rem;
  }
  @media (min-width: 40em) {
    font-size: 1.5rem;
  }
`;
