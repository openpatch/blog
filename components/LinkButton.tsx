import NLink from "next/link";
import MButton from "@material-ui/core/Button";

const Button = ({ href, ...props }) => (
  <NLink href={href} passHref>
    <MButton component="a" {...props} />
  </NLink>
);

export default Button;
