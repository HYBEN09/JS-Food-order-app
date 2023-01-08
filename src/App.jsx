import { Fragment, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";

function App() {
  //장바구니를 보이게 할지 여부를 관리
  const [cartIsShown, setCartIsShown] = useState(false);

  //버튼 or 백드롭이 클릭되면 호출 되어지는 함수
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {/* cartIsShown true이면 장바구니를 렌더링하고, false이면 렌더링하지 않는다. */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
