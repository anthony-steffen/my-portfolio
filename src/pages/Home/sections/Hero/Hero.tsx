import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/Avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
const Hero = () => {
	const StyledHero = styled("div")(({theme}) => ({
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
	}));

	const StyledImg = styled("img")(() => ({
		width: "100%",
		borderRadius: "50%",
		objectFit: "cover",
	}));
	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<StyledImg src={Avatar} alt="Avatar" />
						</Grid>
						<Grid item xs={12} md={8}>
							<Typography variant="h1" textAlign="center" color='secondary'>
								Anthony Steffen
							</Typography>
							<Typography variant="h4" textAlign="center" color='secondary'>
								Im a Web Developer full Stack
							</Typography>

							<Grid container spacing={2} display="flex" justifyContent="center">
								<Grid item xs={12} md={4} display="flex" justifyContent="center" mt={2}>
									<Button variant="outlined" color="secondary">
										<DownloadIcon />
										Download CV
									</Button>
								</Grid>
								<Grid item xs={12} md={4} display="flex" justifyContent="center">
								<Button variant="outlined" color="secondary">
										<EmailIcon />
										Contact me
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</StyledHero>
		</>
	);
};

export default Hero;
