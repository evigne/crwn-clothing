import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

import {
  CardDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CardDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CardDropdownContainer>
  );
};

export default CartDropdown;

// Old before styled component
/*
<div className='cart-dropdown-container'>
  <div className='cart-items'>
    {cartItems.length ? (
      cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
    ) : (
      <span>Your Cart Is Empty</span>
    )}
  </div>
  <Button onClick={goToCheckoutHandler}>Checkout</Button>
</div>;
*/
