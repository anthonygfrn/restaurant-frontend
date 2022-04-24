import { connect } from "react-redux";
import Restaurant from "../components/Restaurant";
import fetchRestaurants from "../actions/shop/fetchRestaurants";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  fetch_completed: state.shopPage["fetch_completed"],
  restaurants: state.shopPage["restaurants"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export const RestaurantPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Restaurant)
);
