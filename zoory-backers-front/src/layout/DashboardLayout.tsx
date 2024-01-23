import { Link, Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <div>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col items-center justify-center drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/dashboard/users">All Users</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashboardLayout