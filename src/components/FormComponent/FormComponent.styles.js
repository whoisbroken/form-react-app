import styled from 'styled-components';

import { Title } from "../../styles/global.styles";

export const Wrapper = styled.div`
  width: 100%;
`;

// Forms, inputs, buttons

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 1005px) { 
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 450px) { 
    min-width: 100%;
  }
`;

export const GroupFields = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 420px;
  @media (max-width: 1005px) { 
    justify-content: center;
  }

  @media (max-width: 450px) { 
    min-width: 240px;
  }
  
`;

export const FlexInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 450px) { 
    flex-direction: column;
    .card-input {
      display: none;
    }
  }
  
`;

export const Input = styled.input`
  width: ${({ size }) => size || "100%"};
  flex-basis: 50%;
  height: 35px;
  border: 1px solid #ccc;

  @media (max-width: 450px) { 
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const SectionTitle = styled(Title)`
  
`;

export const Text = styled.p`
  font-family: "Geometria-Light", sans-serif;
  color: #ccced6;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #ced1d5;
  font-size: 0.8em;   
  margin: 27px 0 4px;
  position: ${({ position }) => position || ""};
`;

export const UploadLogo = styled.span`
  color: #4d92e3;
  position: absolute;
  right: -70px;
  top: 50%;
  @media (max-width: 600px) {
    right: 0;
    top: 0;
  }
`;

export const LabelText = styled.p`
  margin-bottom: 7px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Gilroy-Light", sans-serif;
  margin-bottom: 30px;
  `;

export const Tab = styled.a`
  font-family: "Gilroy-Light", sans-serif;   
  font-size: 14px;
  font-weight: 600;
  padding: 11px 22px;
  border: 2px solid #363b5d;
  color: ${({ active }) => active ? "#fff" : "#363b5d"};
  background-color: ${({ active }) => active ? "#363b5d" : "#fff"};
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    &:hover {
      background-color: lighten(#000, 10%)
    }
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:hover {
      background-color: darken(#000, 10%)
    }
  }
`;