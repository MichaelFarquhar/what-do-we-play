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
import axios from "axios";
import { API_ROUTE_COLLECTION } from "./api/config";
import { XMLParser } from "fast-xml-parser";

function App() {
  const [input, setInput] = useState<string[]>([]);
  const [wasClicked, setWasClicked] = useState(false);

  console.log(input);
  const buttonClick = async () => {
    console.log("Button was clicked with input: " + input);
    setWasClicked(true);

    const response = await axios({
      method: "get",
      url: API_ROUTE_COLLECTION(input[0]),
      headers: {
        Accept: "application/xml",
        "Content-Type": "application/xml",
      },
    });

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });
    const jObj = parser.parse(response.data);
    console.log(jObj);
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
            options={[] as string[]}
            onChange={(_event, newValue) => setInput(newValue)}
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => {
                const { key, ...tagProps } = getTagProps({ index });
                return <Chip variant="outlined" label={option} key={key} {...tagProps} />;
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="Username" id="outlined-size-small" value={input} />
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
