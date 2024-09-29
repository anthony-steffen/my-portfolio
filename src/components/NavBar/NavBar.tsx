import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import { useNavigate } from "react-router-dom";


const NavBar = () => {

  const navigation = useNavigate();
  const StyledToolbar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex", 
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
			backgroundColor: theme.palette.primary.main
		},
  }));
  return (
<<<<<<< HEAD
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem onClick={() => navigation("/")}>
          Home
        </MenuItem>
        <MenuItem onClick={() => navigation("/about")}>
          About
        </MenuItem>
        <MenuItem onClick={() => navigation("/projects")}>
          Projects
        </MenuItem>
        <MenuItem onClick={() => navigation("/contact")}>
          Contact
        </MenuItem>
=======
    <AppBar>
            <StyledToolbar>
            <MenuItem onClick={() => navigation("/")}>
              Home
            </MenuItem>
            <MenuItem onClick={() => navigation("/about")}>
              About
            </MenuItem>
            <MenuItem onClick={() => navigation("/projects")}>
              Projects
            </MenuItem>
            <MenuItem onClick={() => navigation("/contact")}>
              Contact
            </MenuItem>
>>>>>>> 2849ff25fd32fb87840844cf0996a602f8fa18ba
      </StyledToolbar>
        </AppBar>
  )
}

export default NavBar