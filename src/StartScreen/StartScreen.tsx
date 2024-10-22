import { Stack } from "@mui/material";
import {
  StartScreenCardSelect,
  StartScreenCardFilter,
  StartScreenCardConfirm,
} from "./cards";

export const StartScreen = () => {
  return (
    <Stack spacing={4}>
      <StartScreenCardSelect />
      <StartScreenCardFilter />
      <StartScreenCardConfirm />
    </Stack>
  );
};
