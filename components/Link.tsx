import NLink from "next/link";
import MLink from "@material-ui/core/Link";

const Link = ({ href, isExternal, ...props }) =>
  isExternal ? (
    <MLink href={href} {...props} />
  ) : (
    <NLink href={href} passHref>
      <MLink {...props} />
    </NLink>
  );

export default Link;
