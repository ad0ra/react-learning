// import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // <div>
    // <Fragment>
    <>
     <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    {/* </div> */}
    {/* </Fragment> */}
    </>
  );
}

export default App;
