import {styled, Typography} from '@mui/material'
import Bg from '../../../../assets/vecteezy_virtual-tecnology-blue-vector-background-eps-10_10742634.jpg'; // Importando a imagem de fundo

const About: React.FC = () => {
  const StyledAbout = styled('div')(({ theme }) => ({
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: theme.palette.primary.contrastText,
    

    [theme.breakpoints.up('md')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      height: '100vh',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '2rem',
      paddingBottom: '1rem',
      height: '100vh',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      height: '100%',
    },
  }));
 
  return (
    <StyledAbout>
      <Typography 
      variant="h2" 
      align="center" 
      gutterBottom
      style={{paddingTop: '5rem'}}
      >
      About me
      </Typography>
    </StyledAbout>
  )
}

export default About