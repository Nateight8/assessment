import {
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputBase,
  List,
} from "@mui/material";
import React, { useState } from "react";
import FormContainer from "../utils/FormContainer";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import InputComponent from "../utils/InputComponent";
import AdditionalList from "../utils/AdditionalList";
import AddQuesBtn from "../utils/AddQuesBtn";

type Props = {};

function AdditionalQuest({}: Props) {
  return (
    <FormContainer formTitle="Additional Question">
      <List sx={{ paddingBottom: "1.25rem" }}>
        <AdditionalList
          primary="Please tell me about yourself..."
          secondary="Paragraph"
        />
        <Divider />
        <AdditionalList
          secondary="Dropdown"
          primary="Please select the year of graduation from the list below"
        />
      </List>
      <FormControl variant="outlined" fullWidth sx={{ paddingRight: "40px" }}>
        <FormLabel>Question</FormLabel>
        <InputBase
          placeholder="type here"
          sx={{
            border: "1px solid ",
            paddingY: "0.8rem",
            paddingLeft: "0.8rem",
            fontSize: "14px",
            color: "black",
            borderRadius: "0.2rem",
          }}
        />
      </FormControl>

      <Grid container sx={{ marginY: "1rem" }}>
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
      <List sx={{ paddingBottom: "1.25rem" }}>
        <AdditionalList
          secondary="Yes / No Question"
          primary="Have you ever been rejected by the british embasy?"
        />
      </List>
      <AddQuesBtn />
    </FormContainer>
  );
}

export default AdditionalQuest;
