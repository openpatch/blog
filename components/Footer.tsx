import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import Box, { BoxProps } from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  copyright: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const Footer = (props: BoxProps) => {
  const classes = useStyles();
  return (
    <Box component="footer" mt={8} {...props}>
      <Box className={classes.social}>
        <IconButton
          href="https://twitter.com/OpenPatchOrg"
          color="inherit"
          component="a"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://github.com/openpatch"
          color="inherit"
          component="a"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="mailto:support@openpatch.org"
          color="inherit"
          component="a"
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Box className={classes.copyright}>© 2020 Copyright OpenPatch</Box>
    </Box>
  );
};

export default Footer;
