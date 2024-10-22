import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  number: number;
  title: string;
  children: React.ReactNode;
  smoothScrollId: string;
  isActive?: boolean;
}

export const StartScreenCard = ({
  number,
  title,
  children,
  smoothScrollId,
  isActive = true,
}: Props) => {
  return (
    <Card
      id={smoothScrollId}
      sx={{
        maxWidth: 500,
        opacity: isActive ? "1" : "0.5",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <CardHeader sx={{ borderBottom: "1px solid grey" }}>
        <Stack direction="row" spacing={2}>
          <Chip color="primary" label={number} />
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Stack>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
