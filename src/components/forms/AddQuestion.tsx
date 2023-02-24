import React, { Dispatch, SetStateAction, useState } from "react";
import FormContainer from "../utils/FormContainer";
import InputComponent from "../utils/InputComponent";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  InputBase,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  Button,
  Typography,
  SelectChangeEvent,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import MultiChoice from "./MultiChoice";
import Dropdown from "./Dropdown";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function AddQuestion({ open, setOpen }: Props) {
  const [selected, setSelected] = useState("");

  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={{ width: 560 }}> */}
      <FormContainer y="1rem" formTitle="Create Custom Question">
        <Box sx={{ width: 556 }}>
          <FormControl
            fullWidth
            sx={{ paddingRight: "40px", marginBottom: "1.5rem" }}
          >
            <FormLabel>Type</FormLabel>
            <Select
              sx={{
                color: "black",
              }}
              labelId="type"
              id="type"
              value={selected}
              input={<OutlinedInput />}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Paragraph</MenuItem>
              <MenuItem value="multi">Multi Choice</MenuItem>
              <MenuItem value="drop">Dropdown</MenuItem>
              <MenuItem value="option">Yes or No</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            fullWidth
            sx={{ paddingRight: "40px" }}
          >
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

          {/* rendering type components here */}

          {selected && selected === "multi" ? (
            <MultiChoice />
          ) : selected === "drop" ? (
            <Dropdown />
          ) : selected === "option" ? (
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              label="Disqualify candidate if answer is no"
            />
          ) : null}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingRight: "40px", marginY: "1rem" }}
          >
            <Box>
              <Button
                sx={{ color: "#A80000" }}
                variant="text"
                startIcon={<ClearIcon />}
              >
                Delete question
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ background: "#087B2F", color: "white" }}
                disableElevation
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </FormContainer>
    </Modal>
  );
}

export default AddQuestion;
