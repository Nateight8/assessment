import React, { Dispatch, useCallback, useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Dropzone, { DropzoneState, useDropzone } from "react-dropzone";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import FormContainer from "../utils/FormContainer";
import Image from "next/image";

interface ImageUploaderProps {
  // onFileChange: (file: File | null) => void;
  // AcceptString: string;
  // setFile: Dispatch<any>;
  // file
}

function ImageUploader({}: ImageUploaderProps) {
  const [image, setImage] = useState<any>(null);
  const [showDropzone, setShowDropzone] = useState(true);
  const handleImageDrop = (acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setShowDropzone(false);
    };
  };

  return (
    <FormContainer formTitle="Upload Cover Image">
      <Box sx={{ position: "Relative" }}>
        <Dropzone onDrop={handleImageDrop}>
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
          }: DropzoneState) => {
            return (
              <div
                {...getRootProps()}
                style={{
                  border: isDragAccept
                    ? `2px dashed green`
                    : isDragReject
                    ? `2px dashed red`
                    : "2px dashed",

                  height: "13.125rem",
                  borderRadius: "0.3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingInline: "3.9rem",
                }}
              >
                <input {...getInputProps()} />
                <Stack justifyContent="center" alignItems="center">
                  <FileUploadOutlinedIcon sx={{ fontSize: "33px" }} />
                  <Typography>Upload cover image</Typography>
                  <Typography variant="caption">
                    16:9 ratio is recommended. Max image size 1mb
                  </Typography>
                </Stack>
              </div>
            );
          }}
        </Dropzone>
        {image && (
          <>
            <Box
              sx={{
                position: "absolute",
                background: "Red",
                zIndex: 1000,
                inset: 1,
              }}
            >
              <Box
                sx={{
                  position: "Relative",
                  height: "9.125rem",
                  width: "100%",
                  background: "Red",
                }}
              >
                <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
              </Box>

              <Stack
                alignItems="start"
                justifyContent="center"
                sx={{ height: "4rem", background: "white", width: "100%" }}
              >
                <Box>
                  <Button
                    variant="text"
                    onClick={() => {
                      setShowDropzone(false);
                    }}
                    // color="primary"
                    // startIcon={}
                  >
                    Delete and re-upload
                  </Button>
                </Box>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </FormContainer>
  );
}

export default ImageUploader;
