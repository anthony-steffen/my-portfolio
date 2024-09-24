import {styled} from '@mui/material'

const Projects: React.FC = () => {
const StyledProjects = styled("section") (() => ({
    backgroundColor: "red",
    color: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  

  return (
    <StyledProjects>
      Projects
    </StyledProjects>
  )
}

export default Projects