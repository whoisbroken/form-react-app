import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

// Forms, inputs, buttons

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const GroupFields = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 420px;
`;

export const FlexInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: ${({ size }) => size || "100%"};
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  text-align: center;
  font-family: 'Geometria-ExtraBold', sans-serif;
  font-weight: 800;
  font-size: 68px;
  margin-bottom: 20px;
  color: #363b5d;
`;

export const SubTitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
font-family: "Geometria-Light", sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;   
  margin: 27px 0 4px;
  position: ${({ position }) => position || ""};
`;

export const UploadLogo = styled.span`
  color: #4d92e3;
  position: absolute;
  right: -70px;
  top: 50%;
`;

export const LabelText = styled.span`
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