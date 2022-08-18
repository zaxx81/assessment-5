import Header from "../../layouts/Navbar";

function LoginForm(props) {
  return (
    <div>
      <Header />
      <h1>Login to Continue</h1>
      <form onSubmit={props.handleLogin}>
        <div class="mb-3">
          <label for="username" class="form-label">
            Username
          </label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
