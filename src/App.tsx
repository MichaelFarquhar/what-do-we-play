import {
  Alert,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5">Enter Username:</Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Size"
            id="outlined-size-small"
            value={input}
            onChange={(el) => setInput(el.target.value)}
            size="small"
          />
          <Button variant="contained" onClick={() => setWasClicked(true)}>
            Submit
          </Button>
        </Stack>
        {wasClicked && <Alert severity="success">Button clicked!</Alert>}
      </CardContent>
    </Card>
  );
}

export default App;
