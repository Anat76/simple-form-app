const Form = ({ stat, setStat, type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(event) => {
        setStat(event.target.value);
      }}
      value={stat}
    />
  );
};

export default Form;
