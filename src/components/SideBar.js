import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


export default function TemporaryDrawer({ state, setState, toggleDrawer, categories }) {


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {categories.length > 1 && categories.map(text => (
        <List>
          <Link to={`/${text.slug}`} style={{textDecoration:"none",color:"black"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <OpenInBrowserIcon />
                </ListItemIcon>
                <ListItemText primary={text.name.toUpperCase()} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
        </List>
      ))}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
