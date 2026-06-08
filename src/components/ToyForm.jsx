import React from "react";

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
.then((createdToy) => res.json())
onAddToy(createdToy);

setName("")
setName("")
};
}
  return (
    <div className="container">
      <form className="add-toy-form">
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
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );


export default ToyForm;
