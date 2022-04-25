import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

export default function FeaturesCard({ name, desc, image, label }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className="card-wrapper w-full h-full">
      <Card className="w-full h-full" shadow="sm" p="lg">
        <Card.Section>
          {image.src !== "none" && (
            <Image src={image.src} height={220} alt={image.alt} />
          )}
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text className="card-title">{name}</Text>
          <Badge color="rgb(37 99 235)" variant="light">
            {label}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {desc}
        </Text>
      </Card>
    </div>
  );
}
