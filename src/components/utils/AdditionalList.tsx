import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

type Props = {
  primary: string;
  secondary: string;
};

function AdditionalList({ primary, secondary }: Props) {
  const [editable, setEditable] = useState(false);
  return (
    // <List disablePadding sx={{}}>
    <ListItem
      disablePadding
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginY: "1rem",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "14px", color: "#979797", fontWeight: 500 }}
        >
          {secondary}
        </Typography>
        <ListItemText
          sx={
            editable
              ? {
                  border: "1px solid #e3e3e3",
                  padding: "1rem",
                  borderRadius: "2px",
                }
              : null
          }
          contentEditable={editable}
          primary={primary}
        />
      </Box>
      <IconButton
        onClick={() => {
          setEditable(!editable);
        }}
      >
        {!editable ? <EditIcon /> : <SaveAsIcon />}
      </IconButton>
    </ListItem>
    // </List>
  );
}

export default AdditionalList;
