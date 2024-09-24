import { Button, Card, CardActions, CardContent, CardMedia, Grid, styled, Typography } from '@mui/material'
import theme from '../../theme';

const Cards = () => {
  const StyledCards = styled("section") (() => ({
    [theme.breakpoints.up("lg")]: {
      paddingTop: '10rem',
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: '2rem',
    },    
  }));


  return (
  <StyledCards>
          <Grid>
            <Card sx={{ maxWidth: 340}}>
              <CardMedia
                sx={{ height: 100 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
                />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
  </StyledCards>
  )         
}

export default Cards