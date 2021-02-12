import React, { Component } from 'react';
import { Formik } from "formik";

import {
  Form, GroupFields, FlexInputs, Input,
  Title, SubTitle, Text, Label, LabelText, Button, Tabs, Tab,
  Wrapper, UploadLogo
} from "./formBody.styles";

class FormBody extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Заповніть форму</Title>
        <Tabs>
          <Tab active >Фіз. особа</Tab>
          <Tab>Юр. особа</Tab>
        </Tabs>
        <Formik
          initialValues={{
            name: "", surName: "", company: "", email: "", password: "",
            phone: "", country: "", city: "", state: "", address: "", postIndex: "",
            logo: "",
          }}
          validate={values => {
            let errors = {};

            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = "A password is required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be 6 characters";
            }
            return errors;
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <GroupFields>
                <FlexInputs>
                  <Label>
                    <LabelText>Ім'я</LabelText>
                    {touched.name &&
                      errors.name && <Text color="red">{errors.name}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      border={touched.name && errors.name && "1px solid red"}
                      type="text"
                      name="name"
                      size="200px"
                    />
                  </Label>
                  <Label >
                    <LabelText>Прізвище</LabelText>
                    {touched.surName &&
                      errors.surName && <Text color="red">{errors.surName}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surName}
                      border={
                        touched.surName && errors.surName && "1px solid red"
                      }
                      type="password"
                      name="surName"
                      size="200px"
                    />
                  </Label>
                </FlexInputs>
                <Label position="relative">
                  <LabelText>Назва компанії, організації</LabelText>
                  {touched.company &&
                    errors.company && <Text color="red">{errors.company}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                    border={touched.company && errors.company && "1px solid red"}
                    type="tel"
                    name="company"
                  />
                  <UploadLogo>
                    + Логотип
                  </UploadLogo>
                </Label>
                <Label>
                  <LabelText>Email-адрес</LabelText>
                  {touched.email &&
                    errors.email && <Text color="red">{errors.email}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    border={touched.email && errors.email && "1px solid red"}
                    type="email"
                    name="email"
                  />
                </Label>
                <Label>
                  <LabelText>Номер телефону</LabelText>
                  {touched.phone &&
                    errors.phone && <Text color="red">{errors.phone}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    border={touched.email && errors.phone && "1px solid red"}
                    type="tel"
                    name="phone"
                  />
                </Label>
              </GroupFields>
              <GroupFields>
                <Label>
                  <LabelText>Країна</LabelText>
                  {touched.country &&
                    errors.country && <Text color="red">{errors.country}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    border={touched.country && errors.country && "1px solid red"}
                    type="tel"
                    name="country"
                  />
                </Label>
                <FlexInputs>
                  <Label>
                    <LabelText>Місто</LabelText>
                    {touched.city &&
                      errors.city && <Text color="red">{errors.city}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                      border={touched.city && errors.city && "1px solid red"}
                      type="email"
                      name="city"
                      size="200px"
                    />
                  </Label>
                  <Label>
                    <LabelText>Штат,район</LabelText>
                    {touched.state &&
                      errors.state && <Text color="red">{errors.state}</Text>}
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                      border={touched.state && errors.state && "1px solid red"}
                      type="tel"
                      name="state"                 
                      size="200px"
                    />
                  </Label>
                </FlexInputs>
                <Label>
                  <LabelText>Адреса</LabelText>
                {touched.address &&
                    errors.address && <Text color="red">{errors.address}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    border={touched.address && errors.address && "1px solid red"}
                    type="tel"
                    name="address"
                  />
                </Label>
                <Label>
                  <LabelText>Поштовий індекс</LabelText>
                  {touched.postIndex &&
                    errors.postIndex && <Text color="red">{errors.postIndex}</Text>}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postIndex}
                    border={touched.email && errors.postIndex && "1px solid red"}
                    type="email"
                    name="postIndex"
                    size="200px"
                  />
                </Label>
              </GroupFields>
              {/* <Button type="submit">Submit</Button> */}
            </Form>
          )}
        />
      </Wrapper>
    );
  }
}

export default FormBody;