import "./App.css";
import Button from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Ishan",
    last: "Sharma",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Lil",
      last: "Wayne",
    },
    {
      first: "Wayne",
      last: "Rooney",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Ishan" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to ......</Heading>
      </Oscar> */}
      {/* <Button
        handleClick={(event,id) => {
          console.log("Button clicked",event,id);
        }}
      /> */}
      <Container styles={{color: "navy"}}>
        <h2>HELLO ISHAN</h2>
      </Container>
    </div>
  );
}

export default App;
