import React from 'react';
import styled from 'styled-components';

import FormBody from "../../components/formBody/formBody.component";
import Support from "../../components/support/support.component";

import { HomepageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
        <FormBody />
        <Support />
      </HomepageContainer>
    </>
  );
};

export default Homepage;