import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem>
          Home
        </MenuItem>
        <MenuItem>
          About
        </MenuItem>
        <MenuItem>
          Portfolio
        </MenuItem>
        <MenuItem>
          Contact
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar