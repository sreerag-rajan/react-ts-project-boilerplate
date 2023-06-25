import { ThemeOptions, createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

export const theme :ThemeOptions = createTheme({
  palette: palette,
  typography: typography
});
