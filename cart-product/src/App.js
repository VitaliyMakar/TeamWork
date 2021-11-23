import React from "react";
import CartList from "./components/cartList";

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CartList/>
          </div>
          <div className="col">
            {/*<CartInfo/>*/}
          </div>
        </div>
      </div>
  );
}

export default App;
