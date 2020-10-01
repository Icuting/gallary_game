import {PATH} from "./const";
import DefaultLayout from "./layout/DefaultLayout";
import {
  Home,
  About,
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
];