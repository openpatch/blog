import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    "& img": {
      width: "100%",
    },
    "& a": {
      color: theme.palette.primary.main,
    },
    "& p": {
      textAlign: "justify",
      hyphens: "auto",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
}));

const Main = (props) => {
  const classes = useStyles();
  return <Container maxWidth="md" className={classes.container} {...props} />;
};

export default Main;
