import {Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/Avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
	const StyledHero = styled("div")(({theme}) => ({
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			backgroundColor: theme.palette.primary.dark,
		},

	}));

	const StyledImg = styled("img")(({theme}) => ({
		width: "80%",
		borderRadius: "50%",
		border: `solid 1px ${theme.palette.primary.contrastText}`,
		objectFit: "cover",
		display: "flex",
		margin: "auto",
		position: "relative",

		[theme.breakpoints.down("md")]: {
			width: "60%",
		},
		
	}));
	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid container spacing={2} position="relative">
						<Grid item xs={12} md={5}>
							<StyledImg src={Avatar} alt="Avatar" />
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography variant="h1" textAlign="center" color='secondary' py={2}>
								Anthony Steffen
							</Typography>
							<Typography variant="h4" textAlign="center" color='secondary' pb={3}>
								I'm a Web Developer Full Stack
							</Typography>

							<Grid container spacing={2} display="flex" justifyContent="center" position="relative">
								<Grid item xs={12} md={4} display="flex" justifyContent="center">
								<StyledButton>
									<DownloadIcon />
										<Typography>
											Download CV
										</Typography>
									</StyledButton>
								</Grid>
								<Grid item xs={12} md={4} display="flex" justifyContent="center">
								<StyledButton>
										<EmailIcon />
											<Typography>
												Contact me
											</Typography>
								</StyledButton>
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
