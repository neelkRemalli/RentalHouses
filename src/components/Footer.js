import React from 'react';
import {Grid, List, Header, Divider} from 'semantic-ui-react';

 const Footer=()=> {
  return (
    <Grid  className="footer">
    <Header className="footer_header">Follow Us</Header>
    
    <Grid.Column width="16">
     <List horizontal>
      <List.Item>
      <List.Icon className="footer_icon"  name="facebook"/>
      </List.Item>
       <List.Item>
      <List.Icon className="footer_icon"  name="twitter"/>
      </List.Item>
      <List.Item>
      <List.Icon className="footer_icon"  name="google"/>
      </List.Item>
      <List.Item>
      <List.Icon className="footer_icon"  name="youtube"/>
      </List.Item>
     </List>
     <Divider inverted section />
     <p>&copy; all right reserved 2019 Created by neelkRemalli</p>
     </Grid.Column>
    </Grid>
  )
}
export default Footer;