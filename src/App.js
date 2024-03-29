import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
// import SignIn from "./routes/sign-in/sign-in.component";
import Authentication from "./routes/authentication/authentication.conponent";
import CheckOut from "./routes/checkout/checkout.component";
import Shop from "./routes/shop/shop.componont";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
