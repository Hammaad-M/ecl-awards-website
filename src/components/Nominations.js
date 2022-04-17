import React from "react";
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
      />
      <TextInput
        label="Nominee Phone Number:"
        placeholder="100-100-1000"
        type="tel"
        required={true}
        classNames={classes}
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
      <Center className="sm:mt-6">
        <button className="btn-primary">Submit</button>
      </Center>
    </section>
  );
};

export default Nominations;
