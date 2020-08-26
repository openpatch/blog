import useDarkMode from "use-dark-mode";
import IconButton from "@material-ui/core/IconButton";
import DarkIcon from "@material-ui/icons/Brightness2";
import LightIcon from "@material-ui/icons/BrightnessHigh";

export default () => {
  const darkMode = useDarkMode();

  return (
    <IconButton color="inherit" onClick={darkMode.toggle}>
      {darkMode.value ? <LightIcon /> : <DarkIcon />}
    </IconButton>
  );
};
