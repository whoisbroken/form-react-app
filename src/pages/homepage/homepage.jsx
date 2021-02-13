import React from 'react';
import styled from 'styled-components';

import FormComponent from "../../components/FormComponent/FormComponent.component";
import Support from "../../components/support/support.component";

import { HomepageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
        <FormComponent />
        <Support />
      </HomepageContainer>
    </>
  );
};

export default Homepage;