import { Button, Divider } from "@mui/material";
import React from "react";
import AddQuesBtn from "../utils/AddQuesBtn";
import FormContainer from "../utils/FormContainer";
import ListItemComp from "../utils/ListItemComp";

type Props = {};

function Profile({}: Props) {
  return (
    <FormContainer formTitle="Profile">
      <ListItemComp
        name="education"
        label="Mandatory"
        title="Education"
        suffix="Mandatory"
      />
      <Divider />
      <ListItemComp
        name="experience"
        label="Mandatory"
        title="Experience"
        suffix="Mandatory"
      />
      <Divider />
      <ListItemComp
        name="resume"
        label="Mandatory"
        title="Resume"
        suffix="Mandatory"
      />
      <AddQuesBtn />
    </FormContainer>
  );
}

export default Profile;
