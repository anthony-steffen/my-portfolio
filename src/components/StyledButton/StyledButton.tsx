import {styled} from '@mui/material/styles';

interface StyledButtonProps {
  children: React.ReactNode;
}


const StyledButton: React.FC<StyledButtonProps> = ({children}) => {


  const StyledButton = styled('button')(({theme}) => ({
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
    color: theme.palette.primary.contrastText,
    padding: '5px 15px',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <>
      <StyledButton>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton
