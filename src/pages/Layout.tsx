import { Outlet, Link } from "react-router-dom";

const Layout : React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center fixed-top top-0 left-0 right-0 p-5">
        <div>
          <p className="text-xl">General Embedded</p>
        </div>
        <div>
          <Link className="mx-3" to="/">Home</Link>
          <Link className="mx-3" to="/images">Images</Link>
          <Link className="mx-3" to="/streaming">Streaming</Link>
        </div>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;