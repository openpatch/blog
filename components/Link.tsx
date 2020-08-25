import NLink from "next/link";
import MLink from "@material-ui/core/Link";

interface LinkProps {
  href: string;
  isExternal?: boolean;
  children?: any;
}

const Link = ({ href, isExternal, ...props }: LinkProps) =>
  isExternal ? (
    <MLink href={href} {...props} />
  ) : (
    <NLink href={href} passHref>
      <MLink {...props} />
    </NLink>
  );

export default Link;
