import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
  const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            <Dropdown className="cart-summary" item text="Your Cart">
              <Dropdown.Menu>
                {
                cartItems.map((cartItem)=>(
                  <Dropdown.Item key={cartItem.product.id}>
                    {cartItem.product.productName}
                    <Label circular color="orange">
                      {cartItem.quantity}
                    </Label>
                  </Dropdown.Item>
                ))
                }
                
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Go to Cart</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
