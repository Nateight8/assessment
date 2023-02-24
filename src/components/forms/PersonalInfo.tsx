import React from "react";
import FormContainer from "../utils/FormContainer";

import { Button, InputAdornment, Modal } from "@mui/material";
import InputComponent from "../utils/InputComponent";
import AddQuestion from "./AddQuestion";
import AddQuesBtn from "../utils/AddQuesBtn";
import ListItemComp from "../utils/ListItemComp";
import { Field, FieldProps } from "formik";

type Props = {};

function PersonalInfo({}: Props) {
  interface FormValues {
    first: string;
    lastName: string;
  }
  return (
    <>
      <FormContainer formTitle="Personal Information">
        <Field name="firstName">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent label="First Name" field={field} />
          )}
        </Field>

        <Field name="lastName">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent label="Last Name" field={field} />
          )}
        </Field>

        <Field name="emailId">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent label="Email" field={field} />
          )}
        </Field>

        <Field name="phoneNumber.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="Phone Number"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="phoneNumber"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        <Field name="nationality.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="Nationality"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="nationality"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        <Field name="current.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="Current Residency"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="current"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        <Field name="id.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="ID Number"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="id"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        <Field name="dateOfBirth.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="Date of Birth"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="dateOfBirth"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        <Field name="gender.value">
          {({ field }: FieldProps<FormValues>) => (
            <InputComponent
              label="Gender"
              field={field}
              otherProps={
                <InputAdornment position="end">
                  <ListItemComp
                    name="gender"
                    suffix="internalUse"
                    label="Internal"
                  />
                </InputAdornment>
              }
            />
          )}
        </Field>

        {/* <InputComponent
          label="Phone Number"
          otherProps={
            <InputAdornment position="end">
              <ListItemComp label="Internal" />
            </InputAdornment>
          }
        /> */}

        <AddQuesBtn />
      </FormContainer>
    </>
  );
}

export default PersonalInfo;

// phoneNumber:{
//   internalUse:false
//   show:false
//   value:number
// }
// nationality:{
//   internalUse:false
//   show:false
//   value:""
// }
// currentResidence:{
//   internalUse:false
//   show:false
//   value:""
// }
// nationality:{
//   internalUse:false
//   show:false
//   value:""
// }
// idNumber:{
//   internalUse:false
//   show:false
//   value:""
// }
// dateOfBirth:{
//   internalUse:false
//   show:false
//   value:""
// }
// gender:{
//   internalUse:false
//   show:false
//   value:""
// }
