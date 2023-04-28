const Inputs = ({ label, id, type, placeholder, state, setState }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
      />
    </>
  );
};

export default Inputs;
