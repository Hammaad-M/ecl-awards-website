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

const Nominations = () => {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  const [nameProps, resetName] = useInput("");
  const [emailProps, resetEmail] = useInput("");
  const [nominatorEmailProps, resetNominatorEmail] = useInput("");
  const [telProps, resetTel] = useInput("");

  return (
    <section
      id="nominations"
      className="section mb-48 sm:px-14 md:px-24 lg:px-36"
    >
      <h1 className="heading">Nominations</h1>
      <List
        size="sm"
        icon={
          <ThemeIcon color="rgb(37 99 235)" size={24} radius="xl">
            <Check />
          </ThemeIcon>
        }
      >
        <List.Item>Nominees must live or work on the Eastside.</List.Item>
        <List.Item>
          Nominees have inspired others through either their work, volunteerism,
          or advocacy efforts with diverse or underrepresented communities. This
          work is not limited to those serving through nonprofit organizations.{" "}
        </List.Item>
        <List.Item>
          {" "}
          Nominees take the initiative to engage in positive action, especially
          in times of need.{" "}
        </List.Item>
        <List.Item>
          Nominees deployed creative or innovative solutions or ways to impact
          change.{" "}
        </List.Item>{" "}
        <List.Item>
          Nominees' actions have the potential to result in long lasting
          positive change.
        </List.Item>
      </List>
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
        label="This program is focused on highlighting civic leadership in East King County. Does the nominee live, volunteer, or work in any of the East King County cities?"
        placeholder="Select all that apply."
      />

      <ControlledTextarea
        maxLength={375}
        className="my-3"
        placeholder="Maximum 375 words."
        label="Provide 1 - 3 recent examples that occurred within the past two years of
      how the nominee demonstrated civic leadership, improved the quality of
      life in a community, or worked to alleviate a specific community concern.
      Please be sure to describe why this person’s efforts inspired you or are
      having a positive impact."
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
        <button className="btn-primary">Submit</button>
      </Center>
    </section>
  );
};

export default Nominations;
