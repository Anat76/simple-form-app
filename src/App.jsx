import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  // déclaration de 4 states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // state qui gere un message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      alert("Vos deux mot de passe ne sont pas identiques");
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Form
          stat={name}
          setState={setName}
          type="text"
          placeholder="Jean Dupont"
        />
        {/* <input
          type="text"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        /> */}

        <input
          type="email"
          placeholder="jeandupont@leractor.io"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword1(event.target.value);
          }}
          value={password1}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword2(event.target.value);
          }}
          value={password2}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
