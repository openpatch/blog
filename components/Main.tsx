import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}));

const Main = (props) => {
  const classes = useStyles();
  return <Container maxWidth="md" className={classes.container} {...props} />;
};

export default Main;
