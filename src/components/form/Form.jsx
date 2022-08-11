
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";


const Form = ({ info, setInfo, handleSubmit }) => {
  const handleChange = (e) => {
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log("info bilgisi:", info);
  };

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ backgroundColor: "lightblue", width: "300", borderRadius: 5 }}
    >
      <p className="contact-header">
        <div
          style={{
            backgroundColor: "lightblue",
            padding: "2px",
            borderRadius: 5,
          }}
        >
          <h2 className="design-header">RK</h2>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              value={info.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
              ADD
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Form;