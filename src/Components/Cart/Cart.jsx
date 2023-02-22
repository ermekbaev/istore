import * as React from "react";
import { useCart } from "../../Contexts/CartContextProduct";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  console.log(cart);

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <div>
      <table>
        <div>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Type</td>
            <td>Description</td>
            <td>Price</td>
            <td>Count</td>
            <td>SubPrice</td>
            <td>-</td>
          </tr>
        </div>
        <div>
          {cart?.products.map((row) => (
            <tr key={row.item.id}>
              <th>
                <img src={row.item.picture} alt="" width="70" height="70" />
              </th>
              <td>{row.item.name}</td>
              <td>{row.item.type}</td>
              <td>{row.item.descr}</td>
              <td>{row.item.price}</td>
              <td>
                <input
                  min={1}
                  max={20}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  type="number"
                  value={row.count}
                />
              </td>
              <td>{row.subPrice}</td>
              <td>
                <button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </div>
      </table>

      <button onClick={cartCleaner}> BUY NOW FOR {cart?.totalPrice} $</button>
    </div>
  );
}
