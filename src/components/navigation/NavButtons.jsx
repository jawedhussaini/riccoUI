import { Link } from "react-router-dom";
import { FaBars, FaRegUser, FaChartBar, FaPlus } from "react-icons/fa6";

const btnStyles = `hover:text-red text-white transition-colors duration-300 focus`;

function NavButtons({ onToggleNav, onToggleSidebar }) {
  return (
    <div className="flex items-center justify-between gap-7">
      <button className={`3xl:hidden ${btnStyles}`} onClick={onToggleNav}>
        <FaBars className="h-6 w-6" />
      </button>
      <Link to="/" className={btnStyles}>
        <FaRegUser className="h-6 w-6 text-red hover:text-white
        " />
      </Link>
    
      <div className="focus hidden rounded-sm border-2 border-solid border-gray-350 p-1.5 lg:block">
        <Link
          to="/contact"
          className="mr-2 flex items-center justify-between gap-2 text-sm font-bold uppercase text-red hover:text-white outline-none"
        >
        </Link>
      </div>
    </div>
  );
}

export default NavButtons;
