import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";

//별도의 CartProvider 컴포넌트를 사용하면 App 컴포넌트를 간결하게 유지 가능
import { CartProvider } from "./store/CartProvider";

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

  // 장바구니에 접근해야 하는 모든 컴포넌트를 감싸기 위해서 CartProvider component 사용
  return (
    <CartProvider>
      {/* cartIsShown true이면 장바구니를 렌더링하고, false이면 렌더링하지 않는다. */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
