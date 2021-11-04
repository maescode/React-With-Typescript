import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Istate {
  people: {
    name: string;
    url: string;
    age: number;
    note: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Akangbe Ajao",
      url: "https://picsum.photos/id/1002/4312/2868",
      age: 36,
      note: "Alergic to stay in one team",
    },
  ]);

  return (
    <div className='App'>
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
