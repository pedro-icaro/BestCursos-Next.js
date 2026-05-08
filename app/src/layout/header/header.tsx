import { FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "../../components/logo/logo";

export default function Header(){
  return(
    <>
                  <div className="md:bg-olive-200 flex p-5 items-center gap-5 h-20">
                    <div className=" block md:hidden">
                      <Logo/>
                    </div>
                    <div
                      className="flex items-center border-2 rounded-[15px]
                border-olive-300 gap-5 p-1 md:w-[500]"
                    >
                      <FaSearch
                        size="20px"
                        className="text-olive-600 flex items-center "
                      />
    
                      <input
                        type="text"
                        placeholder="Pesquisa"
                        className=" outline-none w-full"
                      />
                    </div>
    
                    <div className=" flex-1 flex gap-3 items-center justify-end overflow-y-auto">
                      <FaUserCircle size="40px" className=" " />
                      <span className=" hidden md:block">User Name</span>
                    </div>
                  </div>
    </>
  )
}