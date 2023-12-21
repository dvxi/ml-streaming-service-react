import { Outlet, Link } from "react-router-dom";

const Layout : React.FC = () => {
  return (
    <div className="bg-black w-screen min-h-screen pb-10">
      <div className="flex flex-row justify-between items-center top-0 left-0 right-0 p-5 border-b border-zinc-900 bg-zinc-950">
        <div>
          <p className="text-xl font-semibold text-zinc-400">General Embedded</p>
          <p className="text-sm text-zinc-600">Machine Learning Project</p>
        </div>
        <div className="flex flex-row">
        <div className="rounded-lg border-zinc-900 p-1 px-5 mx-2 text-zinc-400 hover:text-zinc-200">
            <Link to="/">Home Page</Link>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 p-1 px-4 mx-2
          hover:bg-zinc-800 hover:text-zinc-200">
            <Link to="/images">Live Images Feed</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;