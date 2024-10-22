import {
  Alert,
  Autocomplete,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSearchHistoryStore } from "./store/useSearchHistoryStore";

function App() {
  const [input, setInput] = useState("");
  const [wasClicked, setWasClicked] = useState(false);
  const searchHistory = useSearchHistoryStore((state) => state.searchHistoryObject);
  const searchHistoryObject = searchHistory();
  const saveSearchHistory = useSearchHistoryStore((state) => state.save);

  const buttonClick = () => {
    console.log("Button was clicked with input: " + input);
    setWasClicked(true);
    if (input) saveSearchHistory(input);
    setInput("");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5">Enter Username:</Typography>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            freeSolo
            size="small"
            fullWidth
            options={searchHistoryObject.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Username"
                id="outlined-size-small"
                value={input}
                onChange={(el) => setInput(el.target.value)}
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
