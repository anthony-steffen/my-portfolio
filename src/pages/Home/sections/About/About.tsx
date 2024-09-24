import {styled} from '@mui/material'

const About: React.FC = () => {
  const StyledAbout = styled("section")(() => ({
    backgroundColor: 'green',
    height: "100vh",
    display: "flex",
    alignItems: "center",
 
  }));
  return (
    <StyledAbout>
      About
    </StyledAbout>
  )
}

export default About