import React, { useEffect, useState, useRef } from "react";
import { useInput } from "./useInput";
import {
  createStyles,
  Select,
  TextInput,
  MultiSelect,
  Center,
  List,
  ThemeIcon,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import ControlledTextarea from "./ControlledTextarea";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "1em",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

const Nominations = ({ content }) => {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  const [nameProps, resetName] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [nominatorEmailProps, resetNominatorEmail] = useInput("");
  const [telProps, resetTel] = useInput("");

  // const submit = (e) => {
  //   e.preventDefault();

  //   // Config variables
  //   const SPREADSHEET_ID = "1qk78PF2aOOnKFivW1kvvWDXbq6xRxQSaeu5jg7-EB4k";
  //   const SHEET_ID = "0";
  //   const CLIENT_EMAIL =
  //     "ecl-awards@resonant-hawk-269217.iam.gserviceaccount.com";
  //   const PRIVATE_KEY =
  //     "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmv0twEFTOqSzg\nQPDJMsHrbOSS/AVHLw+UO4cRjLje4hqYV5Wd1rrksa24Uj5KguDZLDX9+xIiuPFP\nHdAtRnKddI5q42nE5IqYa1BmsUqi5LYIF1dZxgr0mdMKTvtidr9Wjw1D9dBFsf5G\nouAgcyEQswV3NSLq9k/mHRGx/6/X/FT4Muta56Gx9tL5+U1pu0vYbBB1uPyrJjyb\nKUWF4+E+6FriD45BWCj9WeCZ+pPJa0pXQdLrTOTelvnWzotkXz6Q6j/NWgMh47Cs\n1s40RpPAUWrrL9KHzIdwVr1azxObqfk8k9xtUZ25SbWqciOv5Bak2E4hQ2Y6Sn10\ncSNGi54nAgMBAAECggEABv7gjdeJj1AGq3PeBjrkatmbL1V2bTmauDfVH1XdjbBD\nuF94TfJrzdtsc96zcVHTWBkkPL8TUDSdHxobmUKq3VM+BFr9HX8PF3ztFxnaDUJ2\nJpnAFuqZnBB2C6krn8JmnZ2Ly22dKsdgaRs9Nu9NlFNGZ+1pRR1HVdqjWunkuTVy\nCEoWZMcyk0E1N0IK6O0d/ht/aJkUqia/Pg2x+BRDsW/BP1I3PTHURlelTsN6RSfd\ntMrHmvpX/5/WFjahnW9cFGfTG+GoYZcAOAG7VZxzfmRdE2tgibr3ylSF0HqLqfF6\n3k1jhN1I3zJzJ3nSzOfyF8rjvut8tZwrG+ei4kOQJQKBgQDaXb5t5+4PPdg3d2g2\nIeS02AONZmn0LqkC/u1Cnq6nlaN5xpS/OcTkHUcf3mW10pNzp+UzbvCrhvrR0u80\n6JnNGtzKLXy87wnXyGqnpJUJqHzs3FUqGXG4TNVZjhCg3qyCCY6nzCy5l0YVMZjH\n4PkzOZ+/q7WO4TK/Y8GOMoRH4wKBgQDDfCMkru2HPREENoUoUn8fYjgMPstyg7aW\n4Fk+vvatj88UrpfyI7vp2K23hgSX417zcMtuTQUH277Rvv+1coJneVH8SSf4AvU9\nH0VuvAhmNvD8hMeTJVuNVItK2MSUfanTZXX5zuzFjHP5rSGVp0b426Z3erMqWDg3\neJJF5jl77QKBgC/A6HAolEsI/0vB9SxBZT6XLs+xYeJggd2B2mkDQrarZsCuyMC4\n5XHtZSx2+k806cIVKW6CCGe6cQeJ1X4AkAHmqfoc0HaQ39osngZjW6RtEETMOmOm\nhNQFGXMoOkKz743QgT34zJ8Zkd34pqyvak/lfiXwaxf/75UjP6TVL1B5AoGAHAI3\nTtQ5eD0JqR7eqU5YpHiAK1D7+WZhzPBMGS9nTKrkMsRpROpVzEWdbkQneFO9kQfC\nPgWPCPc1Ofwxyx+jC4xYcNtSfLh/xsgqPJl4YpzQnn2v0qdxnKhWZNz2HYh7wqww\n4SAC0LM1Err5quWSx6lBCrFr5k9JjrkZzCYWamkCgYEAmt7uRGwfP5kDHHQCDOL7\n3dgeLtxgL6Ca4sEwaDH2e0WIBHjeD5WDeqpTIzP/Xb09KQV3zYLU3MSKGnd41o9g\n6IUUVWXVgpwk1v7nET5ilOvfdDxPow112K3yVxJXPeuXSPVuRvMRNASpsyCnN+Fu\nTA0siwyW3IJ8vIHPFl0o4f4=";

  //   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  //   const appendSpreadsheet = async (row) => {
  //     try {
  //       await doc.useServiceAccountAuth({
  //         client_email: CLIENT_EMAIL,
  //         private_key: PRIVATE_KEY,
  //       });
  //       // loads document properties and worksheets
  //       await doc.loadInfo();

  //       const sheet = doc.sheetsById[SHEET_ID];
  //       const result = await sheet.addRow(row);
  //     } catch (e) {
  //       console.error("Error: ", e);
  //       alert("Something went wrong, please try again later.");
  //     }
  //   };

  //   const newRow = { test: "success" };

  //   appendSpreadsheet(newRow);
  // };

  return (
    <section
      id="nominations"
      className="section mb-48 sm:px-14 md:px-24 lg:px-36"
    >
      <h1 className="heading">{content.heading}</h1>
      <p className="desc text-left">
        <h3>Nomination Guidelines</h3>
        <List
          size="sm"
          icon={
            <ThemeIcon color="#2563eb" size={24} radius="xl">
              <Check />
            </ThemeIcon>
          }
        >
          {content.guidelines.map((g) => (
            <List.Item>{g}</List.Item>
          ))}
        </List>
      </p>
      {content.sections.map((s) => (
        <p className="desc">
          <h3>{s.heading}</h3>
          {s.description}
        </p>
      ))}
      <form>
        <Select
          style={{ marginTop: 20, zIndex: 2 }}
          data={["Individually", "In an Organization"]}
          placeholder="Pick one"
          required={true}
          label="Where have they demonstrated civic leadership?"
          name="role-select"
          classNames={classes}
        />
        <TextInput
          label="Nominee Name"
          placeholder=""
          classNames={classes}
          required={true}
          {...nameProps}
        />
        <TextInput
          label="What is the nominee's Race or Ethnicity?"
          placeholder=""
          required={true}
          classNames={classes}
        />
        <TextInput
          label="Nominee Email:"
          placeholder="test@test.com"
          type="email"
          required={true}
          classNames={classes}
          {...emailProps}
        />
        <TextInput
          label="Nominee Phone Number:"
          placeholder="100-100-1000"
          type="tel"
          required={true}
          classNames={classes}
          {...telProps}
        />
        <TextInput
          label="Nominator Email (if not self-nominating):"
          placeholder=""
          type="email"
          required={false}
          classNames={classes}
          {...nominatorEmailProps}
        />
        <MultiSelect
          data={[
            { value: "Lives", label: "Lives" },
            { value: "Volunteers", label: "Volunteers" },
            { value: "Works", label: "Works" },
          ]}
          className="my-3"
          label="This program is focused on highlighting civic leadership in East King County. Does the nominee live, volunteer, or work in any of the East King County cities: Bellevue,
Redmond,
Sammamish,
Issaquah,
Kirkland, or
Mercer Island.
          "
          placeholder="Select all that apply."
        />

        <ControlledTextarea
          maxLength={375}
          className="my-3"
          placeholder="Maximum 375 words."
          label="Provide 1 - 3 recent examples that occurred within the past two years of
      how the nominee demonstrated civic leadership, improved the quality of
      life in a community, or worked to alleviate a specific community concern.
      Please be sure to describe why this person’s efforts inspired you or how they are making an impact. "
          required
        />
        <ControlledTextarea
          maxLength={200}
          className="my-3"
          required
          placeholder="Maximum 200 words."
          label="Provide 1-3 sentences that describe this person’s exceptional character or traits. "
        />
        <ControlledTextarea
          className="my-3"
          maxLength={100}
          placeholder="Maximum 100 words"
          label="Anything else you’d like to share about the nominee that will help with our decision making process? "
        />
        <Center className="mt-3 sm:mt-6">
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </Center>
      </form>
    </section>
  );
};

export default Nominations;
