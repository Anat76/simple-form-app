import Inputs from "./Inputs";

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setShowStepTwo,
}) => {
  const submit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Vos deux mot de passe ne sont pas identiques");
    } else {
      setShowStepTwo(true);
    }
  };

  return (
    <form onSubmit={submit}>
      <Inputs
        label="Name"
        id="name"
        placeholder="Jean Dupont"
        state={name}
        setState={setName}
      />
      <Inputs
        label="Email"
        id="email"
        placeholder="jeandupont@lereactor.io"
        state={email}
        setState={setEmail}
        type="email"
      />
      <Inputs
        label="Password"
        id="password"
        type="password"
        placeholder={"password"}
        state={password}
        setState={setPassword}
      />
      <Inputs
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder={"confirm password"}
        state={confirmPassword}
        setState={setConfirmPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
