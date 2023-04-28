import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowInformations from "./components/ShowInformations";

const App = () => {
  // déclaration de 4 states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showStepTwo, setShowStepTwo] = useState(false);

  return (
    <div>
      {showStepTwo === false ? (
        <Form
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setShowStepTwo={setShowStepTwo}
        />
      ) : (
        <ShowInformations
          name={name}
          email={email}
          password={password}
          setShowStepTwo={setShowStepTwo}
        />
      )}
    </div>
  );
};

export default App;
