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
      </StyledToolbar>
        </AppBar>
  )
}

export default NavBar