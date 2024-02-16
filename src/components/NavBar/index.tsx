import { Link } from "react-router-dom";

const style = {
  display: "flex",
  gap: 20,
  backgroundColor: "Menu",
  marginBottom: 32,
  padding: 10
};

const Navbar = () => (
  <div style={style}>
    <Link to='/'>Lottie</Link>
    <Link to='/rive'>Rive</Link>
    <Link to='/3d'>TheeJS</Link>
  </div>
);

export default Navbar;