import useDarkMode from "use-dark-mode";
import Button from "@material-ui/core/Button";
export default () => {
  const darkMode = useDarkMode();

  return (
    <Button color="inherit" onClick={darkMode.toggle}>
      {darkMode.value ? "Light" : "Dark"}
    </Button>
  );
};
