/*

function App() {
  return <center>Application</center>;
}

export default App;

*/

/*

function App() {
  return [
    <center key={1}>1</center>,
    <center key={2}>2</center>,
    <center key={3}>3</center>,
    <center key={4}>4</center>,
    <center key={5}>5</center>,
  ];
}

export default App;

*/

/*

function App() {
  return (
    <center>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </center>
  );
}

export default App;

*/

/*

import React from "react";

function App() {
  return (
    <React.Fragment>
      <center>1</center>
      <center>2</center>
      <center>3</center>
      <center>4</center>
      <center>5</center>
    </React.Fragment>
  );
}

export default App;

*/

/*

function App() {
  return (
    <>
      <center>1</center>
      <center>2</center>
      <center>3</center>
      <center>4</center>
      <center>5</center>
    </>
  );
}

export default App;

*/

/*

import Header from "./components/Header";

function App() {
  return <Header />;
}

export default App;

*/

/*

import Footer from "./components/Footer";

function App() {
  return <Footer />;
}

export default App;

*/

/*

// Anonymous Function

const App = function () {
  return <center>Application</center>;
};

export default App;

*/

/*

// Anonymous Function

export default function () {
  return <center>Application</center>;
}

*/

/*

// Fat Arrow Function

const App = () => <center>Application</center>;

export default App;

*/

/*

// Fat Arrow Function

export default () => <center>Application</center>;

*/

import Module, {
  number,
  string,
  array,
  object,
  addition,
} from "./components/Module";

const App = () => {
  return (
    <center>
      <Module />
      <p>{number}</p>
      <p>{string}</p>
      <p>{array.join(" ")}</p>
      <p>{object.ID}</p>
      <p>{object.name}</p>
      <p>{object.CGPA}</p>
      {addition.calculate()}
    </center>
  );
};

export default App;
