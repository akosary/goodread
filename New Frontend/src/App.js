import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import AdminLogin from "./ourcomponents/AdminLogin/AdminLogin";
import Adminpage from "ourcomponents/AdminLogin/Adminpage";
// import UserLogin from "./ourcomponents/UserLogin/UserLogin";
import Userpage from "ourcomponents/UserLogin/Userpage";
import UserRegister from "./ourcomponents/registeration/UserRegister";

// Components
import Home from "./components/Home/home.jsx";
import UserLogin from "./components/user Login/userLogin.jsx";
import UserDashboard from "./components/Dashboard/user/index.jsx";
import All from "./components/Dashboard/user/allread.jsx";
import AllCategories from "components/category/AllCategories";
import Categories from "components/category/Categories";
import CategoryDetails from "components/category/CategoryDetails";
import { Provider } from "react-redux";
import categoryStore from "/src/Redux/categoryStore";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Provider store={categoryStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Home />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/all" element={<All />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admins" element={<Adminpage />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/users" element={<Userpage />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="categories" Component={AllCategories} />
          <Route path="categories/groups" Component={Categories} />
          <Route path="categories/:id/books" Component={CategoryDetails} />
          <Route path="*" element={<Navigate to="/presentation" />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
