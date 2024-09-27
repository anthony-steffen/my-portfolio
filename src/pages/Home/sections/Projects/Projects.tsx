import {
  styled, 
  // Card, 
  // CardActions, 
  // CardMedia, 
  // CardContent,  
  // Button, 
  // Typography,
  Grid,
  } from '@mui/material'
import Cards from '../../../../components/Cards/Cards';
import theme from '../../../../theme';


const Projects: React.FC = () => {

const StyledProjects = styled("section") (() => ({
   background: theme.palette.primary.dark,
   [theme.breakpoints.up("lg")]: {
      height: '100vh',
  },
  [theme.breakpoints.down("md")]: {
    height: '100vh',
    paddingTop: '5rem',
  },    
  [theme.breakpoints.down("sm")]: {
    height: '180%',
  },
  }));

    return (
      <StyledProjects>
      <Grid container
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
      >
          <Cards  />
          <Cards />
          <Cards />
          <Cards />
        </Grid>
      </StyledProjects>
    );
  }

export default Projects