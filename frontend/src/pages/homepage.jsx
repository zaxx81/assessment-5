import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/Navbar";
import axios from "axios";
import getCSRFToken from "../utils/getCSRFToken";
import LoginForm from "../components/forms/login";

axios.defaults.headers.common["X-CSRFToken"] = getCSRFToken();

function Homepage() {
  const [user, setUser] = useState(null);
  const [showPlayLink, setShowPlayLink] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  const whoAmI = async () => {
    const response = await axios.get("/api/whoami");
    const user = response.data && response.data[0] && response.data[0].fields;
    console.log("user from whoami? ", user, response);
    if (user != undefined) {
      setUser(user);
      setShowPlayLink(true);
      setShowLoginError(false);
    }
  };

  const submitLoginForm = function (event) {
    event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;

    axios
      .post("/api/login", { username: username, password: password })
      .then((response) => {
        if (response.data["login"] == "Success") setShowPlayLink(true);
        else setShowLoginError(true);
      })
      .catch((error) => {
        console.log("There was an error logging in: ", error);
      });
  };

  useEffect(() => {
    whoAmI();
  }, []);

  return (
    <div>
      <Header user={user} />
      {showPlayLink ? (
        <button>
          <Link to="/dungeon/" user={user}>
            Enter the Dungeon!
          </Link>
        </button>
      ) : (
        <LoginForm handleLogin={submitLoginForm} />
      )}
      {showLoginError ? (
        <p>There was an error logging in. Please try again!</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Homepage;
