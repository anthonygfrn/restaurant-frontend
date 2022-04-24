const shopPage = (
  state = {
    restaurants: undefined,
    fetch_started: false,
    fetch_completed: false,
    fetch_error: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_STARTED":
      return {
        ...state,
        fetch_started: true,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        fetch_error: true,
      };

    case "FETCH_COMPLETED":
      return {
        ...state,
        fetch_started: false,
        fetch_completed: true,
        restaurants: action.restaurants,
      };

    default:
      return state;
  }
};

export default shopPage;
