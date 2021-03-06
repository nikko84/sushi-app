import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
  settings: {
    marginLeft: theme.spacing(2),
  },
}));
