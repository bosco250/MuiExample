import { createTheme } from "@mui/material";

export const Mytheme = (darkMode) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      appbar:{
        background:darkMode? "#000":'#fff',
        text: darkMode? '#fff':'#000'
      }
    },
  });
};
