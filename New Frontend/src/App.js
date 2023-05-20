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
import Adminpage from "ourcomponents/AdminLogin/Adminpage";
// import UserLogin from "./ourcomponents/UserLogin/UserLogin";
import Userpage from "ourcomponents/UserLogin/Userpage";
<<<<<<< HEAD

// Components
import Home from "./components/Home/home.jsx";
import UserLogin from "./components/user Login/userLogin.jsx";
import AdminLogin from "./components/adminLogin/AdminLogin";
import UserRegister from "./components/registeration/UserRegister";
import UserDashboard from "./components/Dashboard/user/index.jsx";
import All from "./components/Dashboard/user/allread.jsx";
import AllCategories from "components/category/AllCategories";
import Categories from "components/category/Categories";
import CategoryDetails from "components/category/CategoryDetails";
// import { Provider } from "react-redux";
// import categoryStore from "/src/Redux/categoryStore";
=======
import UserRegister from "./ourcomponents/registeration/UserRegister";
import Book from "./components/Book";
import BookForm from "./components/BookForm";
import BookAdmin from "./components/bookAdmin";
>>>>>>> 0e4dbf63532b2a4b9cb74e220db73e335cfef1d2

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
    // <Provider store={categoryStore}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Home />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="categories" Component={AllCategories} />
        <Route path="categories/groups" Component={Categories} />
        <Route path="categories/:id/books" Component={CategoryDetails} />
        <Route path="/all" element={<All />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admins" element={<Adminpage />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/users" element={<Userpage />} />
        <Route path="/register" element={<UserRegister />} />
<<<<<<< HEAD
        <Route path="*" element={<Navigate to="/home" />} />
=======
        <Route path="/book" element={<Book />} />
        <Route path="/bookAdmin" element={<BookAdmin />} />
        <Route path="books/:id/edit" element={<BookForm />} />
>>>>>>> 0e4dbf63532b2a4b9cb74e220db73e335cfef1d2
      </Routes>
    </ThemeProvider>
    // </Provider>
  );
}
