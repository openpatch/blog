const title = "OpenPatch - Blog";
const description =
  "Blog for the open platform for assesment and training of competencies";

const SEO = {
  title,
  description,
  canonical: "https://blog.openpatch.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.openpatch.app",
    title,
    description,
    images: [
      {
        url:
          "https://og.openpatch.app/OpenPatch%20-%20Blog.png?theme=light&username=mikebarkmin&type=+",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@openpatchorg",
    site: "@openpatchorg",
    cardType: "summary_large_image",
  },
};

export default SEO;
