import React from "react";
import { createStyles, Container, Group, Anchor } from "@mantine/core";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export default function Footer({ links }: FooterSimpleProps) {
  gsap.registerPlugin(ScrollToPlugin);
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => {
        event.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: link.link });
      }}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div id="footer" className={classes.footer}>
      <Container className={classes.inner}>
        Eastside Civic Leadership Awards
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
