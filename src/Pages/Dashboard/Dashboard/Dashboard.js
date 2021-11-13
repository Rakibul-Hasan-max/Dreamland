import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo.png'
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProperties from '../../Admin/AddProperties/AddProperties';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logout } = useAuth();

  const drawer = (
    <div>
      <Link to="/"><img style={{width: 250, height: 100, padding: '0 10px', marginBottom: 0}} src={logo} alt="" /></Link>
      <Divider />
      <Link style={{textDecoration: 'none'}} to="/purchase">Purchase</Link> <br />
      <Link style={{textDecoration: 'none'}} to={`${url}/myOrders`}>My Orders</Link> <br />
      <Link style={{textDecoration: 'none'}} to={`${url}/payment`}>Payment</Link> <br />
      <Link style={{textDecoration: 'none'}} to={`${url}/review`}>Review</Link> <br />
      {admin && <Box>
        <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}>Make Admin</Link> <br />
        <Link style={{textDecoration: 'none'}} to={`${url}/addProperties`}>Add Properties</Link> <br />
        <Link style={{textDecoration: 'none'}} to={`${url}/manageAllOrders`}>Manage All Orders</Link> <br />
        <Link style={{textDecoration: 'none'}} to={`${url}/manageProducts`}>Manage Products</Link> <br />
        </Box>}
      <Button style={{backgroundColor: '#1A354A', color: 'white'}} onClick={logout} color="inherit">Logout</Button>
      
      {/* <List>
        {['Payment', 'My Orders', 'Review', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
              <Payment></Payment>
          </Route>
          <Route path={`${path}/payment`}>
              <Payment></Payment>
          </Route>
          <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
              <Review></Review>
          </Route>
          <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProperties`}>
              <AddProperties></AddProperties>
          </Route>
          <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
