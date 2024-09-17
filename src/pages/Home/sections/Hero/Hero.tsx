
import { Container, Grid, styled } from '@mui/material'
import Avatar from '../../../../assets/Avatar.png'

const Hero = () => {

  const StyledHero = styled('div') (() => ({
    backgroundColor: 'red',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    height: '100vh'
  }))

  const StyledImg = styled('img') (() => ({
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
    
  }))
  return (
    <>
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <StyledImg src={Avatar} alt="Avatar"/>
        </Grid>
        <Grid item xs={8} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          xs=4
        </Grid>
      </Grid>
    </Container>

      <StyledHero>
        
        <h1>Anthony Steffen</h1>
        <p>Im a Web Developer full Stack</p>
   
  
      </StyledHero>

    </>
  )
}

export default Hero
