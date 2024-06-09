import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="white" style={{marginLeft:-350}}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <footer
      className="footerClass"
      style={{
        backgroundColor: "#738A0A",
        height: "60px",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          style={{
            color: "white",
            marginLeft:-350
          }}
        >
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
