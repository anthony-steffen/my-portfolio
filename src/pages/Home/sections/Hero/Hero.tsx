
import { Button, Container, Grid, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/Avatar.png'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
const Hero = () => {

  const StyledHero = styled('div') (() => ({
    backgroundColor: 'red',
    height: '100vh',
  }))

  const StyledImg = styled('img') (() => ({
    width: '100%',
    borderRadius: '50%',
    objectFit: 'cover'
    
  }))
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}> 
            <Grid item xs={12} md={4}>
            <StyledImg src={Avatar} alt="Avatar"/>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" textAlign={'center'} color='white'>Anthony Steffen</Typography>
              <Typography variant="h2" textAlign={'center'} color='white'>Im a Web Developer full Stack</Typography>
             
                <Button>
                <DownloadIcon/>
                  Download CV
                </Button>
                <Button>
                <EmailIcon/>
                  Contact me
                </Button>
             
            </Grid>
          </Grid>
        </Container>
      </StyledHero>


    </>
  )
}

export default Hero
