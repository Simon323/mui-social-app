import {
  Home,
  People,
  Person,
  Settings,
  Newspaper,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      // bgcolor="red"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#pages">
            <ListItemIcon>
              <Newspaper />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#groups">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch defaultChecked />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
