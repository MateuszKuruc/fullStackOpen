const LoginForm = ({ show }) => {
  if (!show) {
    return null;
  }

  const login = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={login}>
        <div>
          name
          <input />
        </div>
        <div>
          password
          <input />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
