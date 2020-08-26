import { NextSeo } from "next-seo";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { parseISO, format } from "date-fns";

import Link from "components/Link";
import Markdown from "components/Markdown";
import MainLayout from "components/MainLayout";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(1),
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
      <MainLayout cover={image}>
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            title: title,
            description: description,
            images: [
              {
                url: `https://og.openpatch.app/${encodeURIComponent(
                  title
                )}.png?theme=light&username=mikebarkmin&type=Blog&avatar=${encodeURIComponent(
                  "https://blog.openpatch.app/static/mike_barkmin.jpg"
                )}`,
              },
            ],
          }}
        />
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
          <Box display="flex" alignItems="center">
            <Typography>{readingTime.text}</Typography>
          </Box>
        </Box>
        <Markdown>{children}</Markdown>
        <p>
          <Link href={editUrl(slug)} isExternal>
            Discuss on Twitter
          </Link>
          {` • `}
          <Link href={discussUrl(slug)} isExternal>
            Edit on GitHub
          </Link>
        </p>
      </MainLayout>
    );
  };
};
