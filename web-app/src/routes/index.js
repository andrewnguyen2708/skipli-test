import HomePage from "@/pages/Home";
import Login from "@/pages/Login";

const publicRoutes = [
  {
    id: "home-1",
    path: "/",
    component: HomePage,
  },
  {
    id: "login-1",
    path: "/login",
    component: Login,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
