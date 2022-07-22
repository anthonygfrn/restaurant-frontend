import React, { Component } from "react";
import "../styles/ShopPage.css";
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import "../styles/Spinner.css";

class Restaurant extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return this.props.fetch_completed ? (
      <div className="books-paper">
        <Grid container spacing={9} justify="space-evenly" alignItems="center">
          {this.props.restaurants.map((restaurant) => {
            return (
              <Grid item key={restaurant.restaurant_id}>
                <Card>
                  <CardMedia
                    className="card-media"
                    image="../resources/book-store-bg.jpg"
                    title={restaurant.restaurant_name}
                  />
                  <CardContent className="card-content">
                    <div className="proj-title">
                      {restaurant.restaurant_name}
                    </div>
                    <div>{restaurant.area}</div>
                  </CardContent>

                  <CardActions>
                    <div className="container card-bottom">
                      <div className="row">
                        <div className="col-3">
                          <p className="price-tag">{restaurant.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    ) : (
      <div className="loading">Loading&#8230;</div>
    );
  }
}

export default Restaurant;
