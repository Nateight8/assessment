import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import React from "react";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";

type Props = {};

function Dropdown({}: Props) {
  return (
    <>
      <Grid container sx={{ paddingRight: "40px", marginY: "1rem" }}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <IconButton disableFocusRipple disableRipple disableTouchRipple>
            <ListIcon />
          </IconButton>
        </Grid>
        <Grid xs={10}>
          <FormControl variant="filled" fullWidth>
            <FormLabel>Choice</FormLabel>

            <InputBase
              sx={{
                border: "1px solid ",
                paddingY: "0.8rem",
                paddingLeft: "0.8rem",
                fontSize: "14px",
                color: "black",
                borderRadius: "0.2rem",
              }}
              placeholder="type here"
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <IconButton disableFocusRipple disableRipple disableTouchRipple>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      <FormControlLabel
        control={<Checkbox color="secondary" />}
        label="Enable 'Other' options"
      />
    </>
  );
}

export default Dropdown;
