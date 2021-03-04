import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { changeNav, newGame, setTable } from "../redux/actions";
import generateTable from "../generateTable";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const game = useSelector((state) => state.game);
  const navState = useSelector((state) => state.nav.state);
  const [size, setSize] = React.useState(game.deckSize);
  const [value, setValue] = React.useState(navState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeNav(newValue));
  };

  const handleSelect = (event, newValue) => {
    setSize(newValue.props.value);
  };

  const handleClick = (event) => {
    dispatch(newGame(size));
    dispatch(setTable(generateTable(size)));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="RULES" {...a11yProps(0)} />
          <Tab label="MEMORY GAME" {...a11yProps(1)} />
        </Tabs>
        {game.inProgress && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Deck Size</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={size}
                  onChange={handleSelect}
                  label="size"
                >
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                  <MenuItem value={6}>Six</MenuItem>
                  <MenuItem value={7}>Seven</MenuItem>
                  <MenuItem value={8}>Eight</MenuItem>
                  <MenuItem value={9}>Nine</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleClick()}
              >
                New Game
              </Button>
            </div>
          </div>
        )}
      </AppBar>
    </div>
  );
}
