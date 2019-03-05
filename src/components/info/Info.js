import React from "react";
import { Header, Segment, Grid, Button, Icon } from "semantic-ui-react";
import Zoom from "react-reveal/Zoom";
const Info = () => {
  const styleIcon = {
    fontSize: "4.5rem",
    margin: "15% 0 3% 0",
    color: "#e81d32"
  };
  return (
    <div style={{ textAlign: "center" }} id="section2">
      <Header as="h1">How it Work</Header>
      <Grid stackable columns={3}>
        <Grid.Column>
          <Zoom delay={500}>
            <Segment raised style={{ fontSize: "1.5rem", padding: "5%" }}>
              <Icon name="world" style={styleIcon} />
              <Header>Choose yours</Header>
              <p style={{ padding: "10%" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolo totam rem aperiam, eaque ipsa quae ab illo
                officia deserunt mollit anim id est laborum inventore veritatis
                et quasi architecto beatae vitae
              </p>
            </Segment>
          </Zoom>
        </Grid.Column>
        <Grid.Column>
          <Zoom delay={1000}>
            <Segment raised style={{ fontSize: "1.5rem", padding: "5%" }}>
              <Icon name="mobile alternate" style={styleIcon} />
              <Header> Answer a questions</Header>
              <p style={{ padding: "10%" }}>
                Ut enim ad minima veniam, quis nostrum exercitationem officia
                deserunt mollit anim id est laborum ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem
                vel
              </p>
            </Segment>
          </Zoom>
        </Grid.Column>
        <Grid.Column>
          <Zoom delay={1500}>
            <Segment raised style={{ fontSize: "1.5rem", padding: "5%" }}>
              <Icon name="payment" style={styleIcon} />
              <Header>Payment</Header>
              <p style={{ padding: "10%" }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est.
              </p>
            </Segment>
          </Zoom>
        </Grid.Column>
      </Grid>
      <Button content="Get Started" size="massive" />
    </div>
  );
};
export default Info;
