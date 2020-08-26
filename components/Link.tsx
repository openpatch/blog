import NLink from "next/link";
import MLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { CustomTheme } from "theme";

const useStyles = makeStyles((theme: CustomTheme) => ({
  link: {
    color: theme.palette.link,
  },
}));

interface LinkProps {
  href: string;
  isExternal?: boolean;
  children?: any;
}

const Link = ({ href, isExternal, ...props }: LinkProps) => {
  const classes = useStyles();
  return isExternal ? (
    <MLink className={classes.link} href={href} {...props} />
  ) : (
    <NLink href={href} passHref>
      <MLink className={classes.link} {...props} />
    </NLink>
  );
};

export default Link;
