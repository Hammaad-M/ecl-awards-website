import React from "react";
// import { createStyles, Select, TextInput, MultiSelect } from "@mantine/core";

// const useStyles = createStyles((theme) => ({
//   root: {
//     position: "relative",
//   },

//   input: {
//     height: "auto",
//     paddingTop: 18,
//   },

//   label: {
//     position: "absolute",
//     pointerEvents: "none",
//     fontSize: theme.fontSizes.xs,
//     paddingLeft: theme.spacing.sm,
//     paddingTop: theme.spacing.sm / 2,
//     zIndex: 1,
//   },
// }));

const Nominations = () => {
  // You can add these classes as classNames to any Mantine input, it will work the same
  // const { classes } = useStyles();

  return (
    <section id="nominations" className="section mb-48">
      <h1 className="heading">Nominations</h1>
      <p className="desc">Coming Soon...</p>

      {/* <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={["Individually", "In an Organization"]}
        placeholder="Pick one"
        label="Where has the individual you're nominating demonstrated civic leadership?"
        classNames={classes}
      />

      <TextInput label="Nominee Name" placeholder="" classNames={classes} />

      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      /> */}
    </section>
  );
};

export default Nominations;
