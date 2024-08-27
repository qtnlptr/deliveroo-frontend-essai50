const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-details">
        <div className="items">
          <div className="item-details">
            <div className="counter">
              <p>-</p>
              <p>0</p>
              <p>+</p>
            </div>
            <p className="item-name">Name</p>
            <p className="price">XX€</p>
          </div>
          <div className="cart-result">
            <div className="subtotal">
              <p>Sous-total</p>
              <p>XX€</p>
            </div>
            <div className="delivery-cost">
              <p>Frais de livraison</p>
              <p>2.50€</p>
            </div>
          </div>
          <div className="cart-total">
            <p>Total</p>
            <p>XX€</p>
          </div>
        </div>
      </div>
      <button className="cta-validation">Valider mon panier</button>
    </div>
  );
};
export default Cart;
