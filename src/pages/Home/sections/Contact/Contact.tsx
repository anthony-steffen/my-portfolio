import {styled} from '@mui/material'

const Contact = () => {
  const StyledContact = styled("section")(() => ({
    backgroundColor: 'blue',
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));
  return (
    <StyledContact>
      Contact
    </StyledContact>
  )
}

export default Contact