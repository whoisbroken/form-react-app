import styled from 'styled-components';

import { Title} from "../../styles/global.styles";
import { Label, Input } from "../FormComponent/FormComponent.styles.js";

import { ReactComponent as Hand } from "../../assets/open-hands.svg";
import { ReactComponent as Wallet } from "../../assets/wallet.svg";
import { ReactComponent as Clothes } from "../../assets/clothes.svg";
import { ReactComponent as Heart } from "../../assets/heart-shape-outline.svg";
import { ReactComponent as MasterCard } from "../../assets/mastercard.svg";
import { ReactComponent as Visa } from "../../assets/visa.svg";
import Privat24 from "../../assets/privat24.png";
import { ReactComponent as Terminal } from "../../assets/atm.svg";
import { ReactComponent as WebMoney } from "../../assets/webmoney.svg";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";


export const SectionTitle = styled(Title)`
  
`;

export const SubTitle = styled.p`
  text-align: center;
  font-family: "Geometria-Light", sans-serif;
  font-size: 19px;
  color: #ccced6;
  margin-bottom: 38px;
`;

export const TypesOfSupport = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const SupportList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SupportItem = styled.li`
  display: flex;
  flex-basis: 24%;
  align-items: center;
  cursor: pointer;
  transition: .3s all ease;
  &:hover {
    div {
      border: 2px solid #9c5d9a;
      background-color: #9c5d9a;
      svg {
        fill: #fff;
      }
    }
    span {
      color: #363b5d;
    }
  }

  @media (max-width: 950px) {
    flex-basis: 48%;
    margin-bottom: 15px;
    margin-right: 8px;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }

`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79px;
  height: 78px;
  background-color: transparent;
  border: 2px solid #c5d5e6;
  border-radius: 15px;
  margin-right: 20px;
  transition: .3s all ease;
`;

export const ItemText = styled.h4`
  font-size: 16px;
  line-height: 16px;  
  color: #c5d5e6;
  font-weight: 600;
  transition: .3s all ease;
  width: 66px;
`;

export const GroupLogos = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const HandLogo = styled(Hand)`
  width: 41px;
  height: 38px;
  fill: #c5d5e6;
`

export const WalletLogo = styled(Wallet)`
  width: 74px;
  height: 38px;
  fill: #c5d5e6;
`

export const ClothesLogo = styled(Clothes)`
  width: 83px;
  height: 53px;
  fill: #c5d5e6;
`

export const HeartLogo = styled(Heart)`
  width: 42px;
  height: 51px;
  fill: #c5d5e6;
`
export const MasterCardLogo = styled(MasterCard)`
  width: 42px;
  height: 51px;
  fill: #000;
  margin-right: 10px;
  .path {
    fill: #000; 
  }
`
export const VisaLogo = styled(Visa)`
  width: 42px;
  height: 51px;
  fill: #fff;
`

export const Privat24Logo = styled.div`
  background-image: url(${Privat24});
`

export const TerminalLogo = styled(Terminal)`
  width: 42px;
  height: 51px;
  fill: #fff;
`
export const WebMoneyLogo = styled(WebMoney)`
  width: 42px;
  height: 40px;
  fill: #fff;
`

export const PaypalLogo = styled(Paypal)`
  width: 28px;
  height: 40px;
  fill: #fff;
  margin-bottom: 3px;
`

export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #c5d5e6;
  border-radius: 20px;
  position: relative;

  &::after, &:before {
    content: "";
    bottom: 100%; 
    left: 29.5%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 10px;
  	margin-left: -10px;
  }
  &:before {
    border-color: rgba(197, 213, 230, 0);
    border-bottom-color: #c5d5e6;
    border-width: 13px;
  	margin-left: -13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const PaymentMethod = styled.div`
  flex-basis: 60%;
`

export const PaymentTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  color: #c5c8cd;
`

export const PaymentText = styled.span`
  font-size: 12px;
  color: #fff;
`

export const PaymentList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`

export const PaymentItem = styled.li`
  width: 168px;
  height: 84px;
  margin: 0 22px 21px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3dfec;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s ease all;
  &:hover {
    background-color: #9c5d9a;
  }
  
  @media (max-width: 475px) {
    width: 100%;
    margin: 0 0 15px 0;
  }
`

export const Card = styled.div`
  width: 373px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const CardDetails = styled.div`
  width: 100%;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: #d3dfec;
  `

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardLabel = styled(Label)`
  width: 100%;
  margin: 10px 0 4px;
  color: #fff;
`

export const UseUntilLabel = styled(Label)`
  margin: 10px 0 4px;
  flex-basis: 40%;
  color: #fff;
  `

export const CvcCvvLabel = styled(Label)`
margin: 10px 0 4px;
  flex-basis: 40%;
  color: #fff;
`

export const CardInput = styled(Input)`
  flex-basis: 23%;
`

export const Button = styled.button`
  margin-top: 50px;
  width: 300px;
  height: 59px;
  border-radius: 7px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  background: rgb(229,54,86);
  background: linear-gradient(90deg, rgba(229,54,86,1) 0%, rgba(139,105,173,1) 100%);
	box-shadow: 0 2px 35px rgba(237, 122, 139, 0.9);
  transition: 1s ease all;
  cursor: pointer;
  &:hover {
    background: rgb(139,105,173);
    background: linear-gradient(90deg, rgba(139,105,173,1) 0%, rgba(229,54,86,1) 100%);
  }

  @media (max-width: 350px) {
    width: 250px;
    height: 50px;
  }
`
