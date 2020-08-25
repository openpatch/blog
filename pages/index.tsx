import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { frontMatter as blogPosts } from "./**/*.mdx";

import Link from "components/Link";
import Navbar from "components/Navbar";
import Main from "components/Main";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  postTitle: {
    fontSize: "1.2rem",
    marginBottom: theme.spacing(1),
  },
}));

export default function DocsPage() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Main>
        <Typography variant="h2" className={classes.title}>
          All Posts
        </Typography>
        {blogPosts.map((blogPost) => (
          <Box key={blogPost.__resourcePath} mb={3}>
            <Link href={formatPath(blogPost.__resourcePath)}>
              <Typography className={classes.postTitle} variant="h3">
                {blogPost.title}
              </Typography>
            </Link>
            <Typography>{blogPost.abstract}</Typography>
          </Box>
        ))}
      </Main>
    </>
  );
}

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}
