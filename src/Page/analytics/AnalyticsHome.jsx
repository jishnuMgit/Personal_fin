import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Analytict from './Analytics'

const AnalyticsHome = () => {
  const [pagename, setPagename] = useState("Analytics");

  const renderContent = () => {
    switch (pagename) {
      case "Analytics":
        return <div><Analytict/></div>;
      case "Expenses":
        return <div>💸 Expenses Content</div>;
      case "Income":
        return <div>💰 Income Content</div>;
      case "Income vs Expenses":
        return <div>⚖️ Income vs Expenses Content</div>;
      case "Balance":
        return <div>🏦 Balance Content</div>;
      case "Transaction History":
        return <div>📂 Transaction History Content</div>;
      default:
        return <div>📊 Default Analytics Content</div>;
    }
  };

  return (
    <div>
      <div className="sm:ml-16 p-4 pt-[120px] lg:ml-10 md:ml-14 bg-white dark:bg-[#131129] min-h-screen">
        <div className="flex flex-col text-black dark:text-white space-y-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold">{pagename}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">Welcome Ekash Finance Management</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mt-2 lg:mt-0">
              <p className="hover:underline cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400">{pagename}</p>
            </div>
          </div>

          {/* Page Tabs */}
          <div className="  mt-10 text-lg flex flex-wrap gap-5">
            {["Analytics", "Expenses", "Income", "Income vs Expenses", "Balance", "Transaction History"].map((name) => (
              <h1
                key={name}
                onClick={() => setPagename(name)}
                className={`cursor-pointer font-semibold hover:text-[#4d70f1] dark:hover:text-white ${
                  pagename === name
                    ? "text-[#4d70f1] dark:text-white"
                    : "text-gray-500 dark:text-[#aca7d5]"
                }`}
              >
                {name}
              </h1>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className=" ">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHome;
