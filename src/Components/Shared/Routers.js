import { Route, Routes } from "react-router";
import { ProductDetails } from "../../Screens/ProductDetails/ProductDetails";
import { Home } from "../../Screens/Home/Home";
import About from "../About/About";
import { Contact } from "../../Components/Contact/Contact";
import { ProductScreen } from "../../Screens/Product/ProductScreen";
import { CheckOut } from "../ChekOut/CheckOut";
export const AllRouters = () => {
  return (
    <Routes>
      <Route path="/oldVersionCoza" element={<Home />}></Route>
      <Route path="/oldVersionCoza/About" element={<About />}></Route>
      <Route
        path="/oldVersionCoza/Shop"
        element={<ProductScreen></ProductScreen>}
      ></Route>
      <Route
        path="/oldVersionCoza/ProductDetails/:id"
        element={<ProductDetails />}
      ></Route>
      <Route path="/oldVersionCoza/Contact" element={<Contact />}></Route>
      <Route path="/oldVersionCoza/CheckOut" element={<CheckOut />}></Route>
    </Routes>
  );
};
