import { NextSeo } from "next-seo";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { parseISO, format } from "date-fns";

import Main from "components/Main";
import Navbar from "components/Navbar";
import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(1),
  },
  cover: {
    position: "absolute",
    margin: "auto",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
}));

const editUrl = (slug) =>
  `https://github.com/openpatch/blog/edit/master/pages/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://twitter.com/search?q=${encodeURIComponent(
    `https://blog.openpatch.app/${slug}`
  )}`;

export default ({
  title,
  publishedAt,
  description,
  readingTime,
  image,
  __resourcePath,
}) => {
  const slug = __resourcePath.replace(".mdx", "");

  return ({ children }) => {
    const classes = useStyles();
    return (
      <>
        <NextSeo title={title} description={description} />
        <Navbar />
        <Box height={200} overflow="hidden" position="relative">
          <img className={classes.cover} src={image} alt="Cover Image" />
        </Box>
        <Main>
          <Typography variant="h1" className={classes.title}>
            {title}
          </Typography>
          <Box display="flex">
            <Box flex={1} display="flex" alignItems="center">
              <Box mr={1}>
                <Avatar alt="Mike Barkmin" src="/static/mike_barkmin.jpg" />
              </Box>
              <Typography>
                Mike Barkmin / {format(parseISO(publishedAt), "MMMM dd, yyyy")}
              </Typography>
            </Box>
            <Typography>{readingTime.text}</Typography>
          </Box>
          {children}
          <p>
            <Link href={editUrl(slug)} isExternal>
              Discuss on Twitter
            </Link>
            {` • `}
            <Link href={discussUrl(slug)} isExternal>
              Edit on GitHub
            </Link>
          </p>
        </Main>
      </>
    );
  };
};
