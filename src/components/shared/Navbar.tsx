import logo from "../../assets/mbst-logo.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { Link } from "react-router";
import { useContextElement } from "../../context/Context";

function Navbar() {
  const { cartProducts } = useContextElement();

  return (
    <div className="flex align-center justify-between py-xl px-xl">
      <Link to="/">
        <img src={logo} alt="MBST logo" />
      </Link>
      <Link to="/cart" className="flex gap-xs font-light align-center">
        <img className="size-18" src={cartIcon} alt="cart" />{" "}
        {cartProducts.length}
      </Link>
    </div>
  );
}

export default Navbar;
