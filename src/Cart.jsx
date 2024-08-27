const Cart = ({ items, setItems }) => {
  // console.log(items);
  return (
    <div className="cart">
      <div className="cart-details">
        <div className="items">
          {items.map((elem, index) => (
            <div className="item-details" key={index}>
              <div className="counter">
                <button
                  onClick={() => {
                    const newItem = [...items];
                    console.log(elem.counter);
                    newItem.counter = elem.counter - 1;
                    // elem.counter - 1;
                    // const newItems = [...items];
                    // newItems.
                    // setItems(elem.counter - 1);
                  }}
                >
                  -
                </button>
                <p>{elem.counter}</p>
                <button
                  onClick={() => {
                    setItems(elem.counter - 1);
                  }}
                >
                  +
                </button>
              </div>
              <p className="item-name">{elem.title}</p>{" "}
              <p className="price">{elem.price}€</p>{" "}
            </div>
          ))}
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
