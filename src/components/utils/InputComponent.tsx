import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputBase,
} from "@mui/material";
import { FieldInputProps } from "formik/";
import React from "react";
import ListItemComp from "./ListItemComp";

interface FormValues {
  first: string;
  lastName: string;
}

type Props = {
  label: string;
  placeholder?: string;
  field: FieldInputProps<FormValues>;
  otherProps?: JSX.Element;
};

function InputComponent({ label, placeholder, otherProps, field }: Props) {
  return (
    <FormControl sx={{ width: "100%", marginBottom: "1.25rem" }}>
      <FormLabel sx={{ fontWeight: 600, color: "#000" }}>{label}</FormLabel>
      <InputBase
        sx={{ borderBottom: "1px solid #ddd" }}
        placeholder={placeholder}
        endAdornment={otherProps}
        {...field}
      />
    </FormControl>
  );
}

export default InputComponent;
