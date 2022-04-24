const registerStarted = () => ({
  type: "REGISTER_STARTED",
});

const registerCompleted = () => ({
  type: "REGISTER_COMPLETED",
});

const registerError = () => ({
  type: "REGISTER_ERROR",
});

const registerUser = (username, email, password, ownProps) => {
  return (dispatch) => {
    dispatch(registerStarted());
    fetch(
      "https://restaurant-app-demo1.herokuapp.com/register?" +
        new URLSearchParams({
          username: username,
          email: email,
          password: password,
        })
    ).then((resp) => {
      resp.json().then((body) => {
        dispatch(registerCompleted());
        if (body.user_added) {
          ownProps.history.push("/login");
        } else {
          dispatch(registerError());
        }
      });
    });
  };
};

export default registerUser;
