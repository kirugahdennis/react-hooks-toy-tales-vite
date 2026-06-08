import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const[toys, setToys] = useState([]);
}

useEffect(() => {
  fetch("http://localhost:3001/toys")
  .then((res) => res.json())
  .then((data) => setToys(data))
  .catch((error) => console.error("Error fetching toys:", error));
}, []);

function handleAddToy(newToy) {
  setToys([...toys, newToy]);
}
 
return (
  <>
  <Header />
  <ToyForm onAddToy={handleAddToy}/>
  <ToyContainer toys={toys} />
  </>
)
export default App;
