import { makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "theme";

const useStyles = makeStyles((theme: CustomTheme) => ({
  container: {
    "& img": {
      width: "100%",
    },
    "& a": {
      color: theme.palette.link,
    },
    "& p": {
      textAlign: "justify",
      hyphens: "auto",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
}));

const Markdown = (props) => {
  const classes = useStyles();
  return <div className={classes.container} {...props}></div>;
};

export default Markdown;
