const Form = ({ submit }) => {
  //   console.log({ state });
  //   console.log({ setState });
  //   console.log({ type });
  //   console.log({ placeholder });
  return (
    <form onSubmit={submit}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
      />
    </form>
  );
};

export default Form;
