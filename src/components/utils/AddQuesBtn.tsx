import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AddQuestion from "../forms/AddQuestion";
type Props = {};

function AddQuesBtn({}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        disableRipple
        variant="text"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add a question
      </Button>
      <AddQuestion open={open} setOpen={setOpen} />
    </>
  );
}

export default AddQuesBtn;
