import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <ChakraProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={admin ? <Home /> : <Login />} />
              <Route path="newproduct" element={ <NewProduct /> } />
              <Route path="users">
                <Route index element={<UserList />} />
                {/* <Route path=":id" element={<User /> } /> */}
              </Route>
              <Route path="products">
                <Route index element={<ProductList />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
