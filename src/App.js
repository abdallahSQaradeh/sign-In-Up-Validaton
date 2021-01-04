import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import { Grid } from "@material-ui/core";
import SignIn from "./pages/sign-in/sign-in.component";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="App">
      <Grid container direction="row">
        <SignIn />
      </Grid>
    </div>
  );
}

export default App;
