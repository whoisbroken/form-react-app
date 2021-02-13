import styled from 'styled-components';

import { Container } from "../../styles/global.styles";

export const HomepageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;