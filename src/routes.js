import {PATH} from "./const";
import DefaultLayout from "./layout/DefaultLayout";
import {
  Home,
  About,
  Help,
  Progress,
  ListGame,
  Profile,
} from './Pages'
export default [
  {
    path: PATH.Home,
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },
  {
    path: PATH.About,
    exact: true,
    layout: DefaultLayout,
    component: About,
  },
  {
    path: PATH.Progress,
    exact: true,
    layout: DefaultLayout,
    component: Progress,
  },
  {
    path: PATH.Profile,
    exact: true,
    layout: DefaultLayout,
    component: Profile,
  },
  {
    path: PATH.ListGame,
    exact: true,
    layout: DefaultLayout,
    component: ListGame,
  },
  {
    path: PATH.Help,
    exact: true,
    layout: DefaultLayout,
    component: Help,
  },
];