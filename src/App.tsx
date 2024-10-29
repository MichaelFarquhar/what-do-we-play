import {
  Alert,
  Autocomplete,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSearchHistoryStore } from "./store/useSearchHistoryStore";

function App() {
  const [input, setInput] = useState<string[]>([]);
  const [wasClicked, setWasClicked] = useState(false);
  const searchHistory = useSearchHistoryStore((state) => state.searchHistoryObject);
  const searchHistoryObject = searchHistory();
  const saveSearchHistory = useSearchHistoryStore((state) => state.save);

  const buttonClick = () => {
    console.log("Button was clicked with input: " + input);
    setWasClicked(true);
    if (input) saveSearchHistory(input);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5">Enter Username:</Typography>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            multiple
            freeSolo
            size="small"
            fullWidth
            options={searchHistoryObject.map((option) => option.title)}
            onChange={(_event, newValue) => setInput(newValue)}
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => {
                const { key, ...tagProps } = getTagProps({ index });
                return <Chip variant="outlined" label={option} key={key} {...tagProps} />;
              })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Username"
                id="outlined-size-small"
                value={input}
                // onChange={(el) => console.log(el.target.value)}
              />
            )}
          />
          <Button variant="contained" onClick={() => buttonClick()}>
            Submit
          </Button>
        </Stack>
        {wasClicked && <Alert severity="success">Button clicked!</Alert>}
      </CardContent>
    </Card>
  );
}

export default App;
