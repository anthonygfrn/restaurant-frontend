const fetchStarted = () => ({
  type: "FETCH_STARTED",
});

const fetchCompleted = (restaurants) => ({
  type: "FETCH_COMPLETED",
  restaurants: restaurants,
});

const fetchError = () => ({
  type: "FETCH_ERROR",
});

const formatRestaurants = (RestaurantList) => {
  return RestaurantList.map((item) => {
    return {
      restaurant_name: item.restaurant_name,
      area: item.area,
      category: item.category,
    };
  });
};

const fetchRestaurants = () => {
  return (dispatch) => {
    dispatch(fetchStarted());
    fetch("https://restaurant-app-demo1.herokuapp.com/fetch_restaurants").then(
      (resp) => {
        resp.json().then((body) => {
          if (body) {
            dispatch(fetchCompleted(formatRestaurants(body)));
          } else {
            dispatch(fetchError());
          }
        });
      }
    );
  };
};

export default fetchRestaurants;
