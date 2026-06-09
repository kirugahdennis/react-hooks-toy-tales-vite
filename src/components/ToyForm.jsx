import React, {useState} from "react";

function ToyForm({ onAddToy}) {
  const [name, setName] = useState ("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };
  

fetch ("http://localhost:3001/toys", {
  method: "POST",
  headers: {
    "Content-Type":"application/json",
  },
  body: JSON.stringify(newToy),
})

.then((res) => res.json())
.then((createdToy) => {
onAddToy(createdToy);
});

setName("");
setName("");
};

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a toy's image uRL..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
          value="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
      </form>
    </div>
  );
}


export default ToyForm;
