import HeaderName from "./components/header/Header";
import Fashion from "./components/layout/fashion/Fashion";
import Entertainment from "./components/layout/entertainment/Entertainment";
import Tech from "./components/layout/tech/Tech";
import Shop from "./components/layout/shop/Shop";
import News from "./components/layout/news/News";
import Contact from "./components/header/header items/Contact";
import Login from "./components/header/header items/Login"
import SubHeaderCard from "./components/layout/SubHeaderCard";
import Featured from "./components/Featured";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Footer from "./components/footer/Footer";
import { useState } from "react";








function App() {



  return (
    <div>
      <HeaderName />
        <header className="sub--header">
          <MainNavigation />
          </header>
         
            <Switch>
              <Route path="/" exact><Featured /></Route>
              <Route path="/entertainment"><Entertainment /></Route>
              <Route path="/fashion"><Fashion /></Route>
              <Route path="/tech"><Tech /></Route>
              <Route path="/shop"><Shop /></Route>
              <Route path="/news"><News /></Route>
              <Route path="/contact"><Contact /></Route>
              <Route path="/login"><Login /></Route>
            </Switch>
      <Footer />   
    
    </div>
  );
}

export default App
