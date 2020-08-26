import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "components/Navbar";
import Main from "components/Main";
import Footer from "components/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    minHeight: "100vh",
  },
  cover: {
    position: "absolute",
    margin: "auto",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
}));

interface MainLayoutProps {
  children: any;
  cover?: string;
}

const MainLayout = ({ children, cover }: MainLayoutProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Navbar />
      {cover && (
        <Box height={200} overflow="hidden" position="relative">
          <img className={classes.cover} src={cover} alt="Cover Image" />
        </Box>
      )}
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

export default MainLayout;
