import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container, Button, Stack } from "@mui/material";
import ImageUploader from "@/components/forms/ImageUploader";
import PersonalInfo from "@/components/forms/PersonalInfo";
import Profile from "@/components/forms/Profile";
import AdditionalQuest from "@/components/forms/AdditionalQuest";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { retriveData } from "@/components/redux/features/formSubmitSlice";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: { internalUse: false, show: false, value: "" },
    nationality: {
      internalUse: false,
      show: false,
      value: "",
    },
    currentResidence: {
      internalUse: false,
      show: false,
      value: "",
    },
    idNumber: {
      internalUse: false,
      show: false,
      value: "",
    },
    dateOfBirth: {
      internalUse: false,
      show: false,
      value: "",
    },
    gender: {
      internalUse: false,
      show: false,
      value: "",
    },
    profile: {
      education: {
        mandatory: false,
        show: false,
      },
    },
  };

  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title> Dev by Nate | Accessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component={"main"} sx={{ minHeight: "100vh", width: "100%" }}>
        <Container
          sx={{
            padding: "3rem",
          }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              dispatch(retriveData(values));
            }}
          >
            {(props) => {
              const { values } = props;
              return (
                <Form>
                  <ImageUploader />
                  <PersonalInfo />
                  <Profile />
                  <AdditionalQuest />
                  <Stack
                    alignItems="end"
                    sx={{ width: "100%", maxWidth: "37.2rem" }}
                  >
                    <Box>
                      <Button type="submit" variant="contained">
                        Save & Continue
                      </Button>
                    </Box>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
}
