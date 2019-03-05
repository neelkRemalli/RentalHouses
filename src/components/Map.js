import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

const Map = () => {
  return (
    <div
      className="map"
      style={{ textAlign: "center", margin: "5rem" }}
      id="section4"
    >
      <Header as="h1">Location</Header>
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <iframe
              title="This is rent buy sell houses"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26360909.888257876!2d-113.74875964478716!3d36.242299409623534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2s!4v1551696975994"
              width="100%"
              height="400rem"
              frameBorder="0"
              allowFullScreen
            />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default Map;
