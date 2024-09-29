// src/components/Projects.tsx
import React from 'react';
import { Grid, Container, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import { projectsData } from '../../../../data/projectsData' // Importando os dados dos projetos
import Bg from '../../../../assets/vecteezy_minimal-abstract-circuit-technology-background_22513757.jpg'; // Importando a imagem de fundo
// Componente do Card de Projeto usando Material UI
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
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

    [theme.breakpoints.up('md')]: {
      paddingTop: '4rem',
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
          Meus Projetos
        </Typography>
        <Grid container spacing={4}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};


export default Projects;
