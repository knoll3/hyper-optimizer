import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomConnect } from "./CustomConnect";
import optimizerImage from "../assets/images/optimizer.png";

export function AppHeader() {
  return (
    <header className="border border-[#DFDFDF] bg-white rounded-[18px] mt-8">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <img src={optimizerImage} alt="Optimizer Icon" width={24} height={24} className="object-contain" />
          <span className="text-lg font-semibold text-[#1F180F]">optimizer</span>
        </div>

        <nav className="ml-8 flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-[#1F180F]/100 hover:text-[#1F180F]/60 cursor-pointer">
            HypurrCo
          </Link>
          <div className="flex items-center space-x-2 hover:text-[#1F180F]/60 cursor-pointer">
            <Link
              to="#"
              className="text-sm font-medium text-[#1F180F]/100 transition-colors no-underline hover:no-underline hover:text-inherit"
            >
              Stake
            </Link>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <CustomConnect />
        </div>
      </div>
    </header>
  );
}
