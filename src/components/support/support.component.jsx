import React, { Component } from 'react';
import { Formik } from "formik";

import { FlexInputs, Input, LabelText } from "../FormComponent/FormComponent.styles"

import {
  SectionTitle, SubTitle, TypesOfSupport,
  SupportList, SupportItem, Box, ItemText, HandLogo, WalletLogo,
  ClothesLogo, HeartLogo, Payment, PaymentMethod, PaymentList,
  PaymentItem, PaymentTitle, PaymentText, GroupLogos, MasterCardLogo, Privat24Logo,
  VisaLogo, TerminalLogo, WebMoneyLogo, PaypalLogo, Card, CardDetails,
  CardForm, CardLabel, UseUntilLabel, CvcCvvLabel, CardInput, Button
} from "./support.styles";

class Support extends Component {
  render() {
    return (
      <>
        <SectionTitle>Види допомоги</SectionTitle>
        <SubTitle>Ви може змінити вид допомоги</SubTitle>
        <TypesOfSupport>
          <SupportList>
            <SupportItem>
              <Box>
                <HandLogo />
              </Box>
              <ItemText>Зробити</ItemText>
            </SupportItem>
            <SupportItem>
              <Box>
                <WalletLogo />
              </Box>
              <ItemText>Фінансова допомога</ItemText>
            </SupportItem>
            <SupportItem>
              <Box>
                <ClothesLogo />
              </Box>
              <ItemText>Матеріальна допомога</ItemText>
            </SupportItem>
            <SupportItem>
              <Box>
                <HeartLogo />
              </Box>
              <ItemText>Волонтерство</ItemText>
            </SupportItem>
          </SupportList>
        </TypesOfSupport>
        <Payment>
          <PaymentMethod>
            <PaymentTitle>Спосіб оплати</PaymentTitle>
            <PaymentList>
              <PaymentItem>
                <GroupLogos>
                  <MasterCardLogo />
                  <VisaLogo />
                </GroupLogos>
                <PaymentText>Карта Visa/MasterCard</PaymentText>
              </PaymentItem>
              <PaymentItem>
                <Privat24Logo />
                <PaymentText>Приват24</PaymentText>
              </PaymentItem>
              <PaymentItem>
                <TerminalLogo />
                <PaymentText>Термінали України</PaymentText>
              </PaymentItem>
              <PaymentItem>
                <WebMoneyLogo />
                <PaymentText>WebMoney</PaymentText>
              </PaymentItem>
              <PaymentItem>
                <PaypalLogo />
                <PaymentText>Paypal</PaymentText>
              </PaymentItem>
            </PaymentList>
          </PaymentMethod>
          <Card>
            <PaymentTitle>Введіть наступні данні</PaymentTitle>
            <CardDetails>
              <Formik
                initialValues={{ cardFirst4: "", cardSecond4: "", 
                cardThird4: "", cardFourth4: "", useUntil: "", cvv: "" }}
                onSubmit={values => {
                  console.log(values);
                }}
                render={({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <CardForm onSubmit={handleSubmit}>
                    <FlexInputs>
                      <CardLabel>
                        <LabelText>Номер карти</LabelText>
                        <FlexInputs>
                          <CardInput
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardFirst4}
                            type="text"
                            name="cardFirst4"
                          />
                          <CardInput 
                            className="card-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardSecond4}
                            type="text"
                            name="cardSecond4"
                          />
                          <CardInput 
                            className="card-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardThird4}
                            type="text"
                            name="cardThird4"
                          />
                          <CardInput 
                            className="card-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cardFourth4}
                            type="text"
                            name="cardFourth4"
                          />
                        </FlexInputs>
                      </CardLabel>
                    </FlexInputs >
                    <FlexInputs>
                      <UseUntilLabel>
                        <LabelText>Термін дії</LabelText>
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.useUntil}
                          type="text"
                          name="useUntil"
                        />
                      </UseUntilLabel>
                      <CvcCvvLabel>
                        <LabelText>CVC/CVV</LabelText>
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cvv}
                          type="number"
                          name="cvv"
                        />
                      </CvcCvvLabel>
                    </FlexInputs>
                  </CardForm>
                )}
              />
            </CardDetails>
          </Card>                
        </Payment>
        <Button type="submit">Допомогти</Button>
      </>
    );
  }
}

export default Support;