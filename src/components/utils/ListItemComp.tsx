import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Field } from "formik";
import React, { useState } from "react";

type Props = {
  label: string;
  title?: string;
  name: string;
  suffix: string;
};

function ListItemComp({ label, title, name, suffix }: Props) {
  interface FormValues {
    first: string;
    lastName: string;
  }

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      sx={{ paddingY: "1rem" }}
    >
      <Typography variant="h6">{title}</Typography>
      <Box>
        <FormControlLabel
          control={
            <Field
              type="checkbox"
              name={`profile.${name}.mandatory`}
              as={Checkbox}
              color="secondary"
            />
          }
          label={label}
        />

        <FormControlLabel
          control={
            <Field name={`profile.${name}.${suffix}`}>
              {(props: {
                field: { value: boolean; name: string };
                form: { setFieldValue: (name: string, value: boolean) => void };
              }) => {
                const { field, form } = props;

                return (
                  <Switch
                    {...field}
                    checked={field.value}
                    onChange={(event) => {
                      form.setFieldValue(field.name, event.target.checked);
                    }}
                  />
                );
              }}
            </Field>
          }
          label={"hide"}
        />
      </Box>
    </Stack>
  );
}

export default ListItemComp;
