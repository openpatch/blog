export const FeaturedImage = ({ title }: Props) => {
  const imageSrc = titlesToImages[title];

  return imageSrc ? (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: `${rootUrl}${imageSrc}`,
              width: 2048,
              height: 1152,
              alt: `Featured image for ${title}`,
            },
          ],
        }}
        twitter={{
          handle: "@aTwitterHandle",
          cardType: "summary_large_image",
        }}
      />
      <img src={imageSrc} />
    </>
  ) : null;
};
