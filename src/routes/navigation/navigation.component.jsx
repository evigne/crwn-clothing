import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.style.jsx';
import CartIcon from '../../componets/cart-icon/cart-icon.component';
import CartDropdown from '../../componets/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   setCurrentUser(null);
  // };
  // console.log('The Current User is,', currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Crwnlogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {/* <Link className='nav-link' to='/contact'>
            CONTACT
          </Link> */}
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {/* && meaning shot circuit operator */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* OLD Code 1 */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

//// OLD CODE 1

//  <div className='navigation'>
//         <Link className='logo-container' to='/'>
//           <Crwnlogo className='logo' />
//         </Link>
//         <div className='nav-links-container'>
//           <Link className='nav-link' to='/shop'>
//             SHOP
//           </Link>
//
// {
//   /* <Link className='nav-link' to='/contact'>
//             CONTACT
//           </Link> */
// }
//
//   {currentUser ? (
//             <span className='nav-link' onClick={signOutUser}>
//               SIGN OUT
//             </span>
//           ) : (
//             <Link className='nav-link' to='/auth'>
//               SIGN IN
//             </Link>
//           )}
//           <CartIcon />
//         </div>
//
// {
//   /* && meaning shot circuit operator */
// }
//
//   {isCartOpen && <CartDropdown />}
//       </div>
