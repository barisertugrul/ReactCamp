import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")
  }
  
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated
              ?<SignedIn signOut={handleSignOut} bisey="1"/>
              :<SignedOut signIn={handleSignIn}/>
            }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
