import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <Grid container spacing={1} alignItems="left">
      <Grid item>
        <FontAwesomeIcon icon={faEnvelope} />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="white">
          Email: <Link color="inherit" href="mailto:WilmerMendez500@outlook.com">WilmerMendez500@outlook.com</Link>
        </Typography>
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faPhone} />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="white">
          Phone: <Link color="inherit" href="tel:+1234567890">+1234567890</Link>
        </Typography>
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faGlobe} />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="white">
          Website: <Link color="inherit" href="https://example.com/">example.com</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  return (
    <footer
      className="footerClass"
      style={{
        backgroundColor: "#738A0A",
        height: "40px",
        fontFamily: "monospace",
        padding: "10px",
      }}
    >
      <Container maxWidth="sm">
        <ContactInfo />
        <Typography variant="body2" color="white">
          {"© "}
          <Link color="inherit" href="https://example.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
