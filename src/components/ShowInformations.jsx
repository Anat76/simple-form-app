const ShowInformation = ({ name, email, password, setShowStepTwo }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button
        onClick={() => {
          setShowStepTwo(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};
export default ShowInformation;
