import React, { Component } from "react";
import { Grid, Image, Button, Segment } from "semantic-ui-react";
import RentFont from "./Rent_Font";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class Rent extends Component {
  state = {
    startDiscount: 0,
    endDiscount: 30
  };
  onChangePorcentage = () => {
    this.setState({
      startDiscount: this.state.startDiscount + 1
    });
  };
  componentDidUpdate() {
    const { startDiscount, endDiscount } = this.state;
    setTimeout(() => {
      if (startDiscount < endDiscount) {
        this.setState({
          startDiscount: this.state.startDiscount + 1
        });
      }
    }, 300);
  }
  render() {
    const { startDiscount } = this.state;
    return (
      <div id="section3">
        <RentFont />
        <Grid doubling stackable>
          <Grid.Column width="10">
            <div className="font_rent">
              <Fade right delay={500}>
                <Image src="/img7.jpg" size="medium" />
              </Fade>
              <Segment raised className="font_info">
                <p>
                  sed quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam.
                </p>
              </Segment>
            </div>
            <Button content="More" size="massive" />
          </Grid.Column>

          <Grid.Column className="procentage" width="6">
            <Zoom onReveal={this.onChangePorcentage} delay={100}>
              <div className="wrapper_rent" style={{ margin: "auto 0" }}>
                <div className="item_rent">
                  {startDiscount}%<span>Off</span>
                </div>
              </div>
            </Zoom>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Rent;
