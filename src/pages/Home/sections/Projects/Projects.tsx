// src/components/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import { projectsData } from '../../../../data/projectsData' // Importando os dados dos projetos
import Bg from '../../../../assets/vecteezy_virtual-tecnology-blue-vector-background-eps-10_10742634.jpg'; // Importando a imagem de fundo
// Componente do Card de Projeto usando Material UI
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, url }) => {
  return (
    <Card sx={{ maxWidth: 350 }} style={{ margin: 'auto' , border: '1px solid #000', boxShadow: '0 0 10px #000', borderRadius: '10px' }}>
      <CardMedia
        component="img"
        height="350"
        image={imageUrl}
        alt={title}
      />
      <CardContent style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center', 
        border: '1px solid #CCCCCC',
        height: '10vh',
        padding: '0.5rem',
      }}>
        <Link to={url} style={{ textDecoration: 'none'}} target="_blank">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

// Componente de Projetos usando Material UI Grid para responsividade
const Projects = () => {
  const StyledProjects = styled('div')(({ theme }) => ({
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
    <StyledProjects>
      <Container style={{ 
        paddingTop: '4rem', 
        paddingBottom: '1rem',
       }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" mb={3}>
          My Projects
        </Typography>
        <Grid container spacing={2}>
          {projectsData.map((project, index,) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              {/* <Link to={project.url} style={{ textDecoration: 'none'}} target="_blank"> */}
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                url={project.url}
              />
              {/* </Link> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};


export default Projects;
