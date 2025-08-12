import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountOverview from "../../components/setting/AccountOverview";
import General from "../../components/setting/General";
import EditProfile from "../../components/setting/EditProfile";
import AddBankAndCard from "../../components/setting/AddBankAndCard";
import SecurityPage from "../../components/setting/SecurityPage";
import SessionPage from "../../components/setting/SessionPage";
import CategoryPage from "../../components/setting/CategoryPage";
import CurrencyPage from "../../components/setting/CurrencyPage";
import CreateApiPage from "../../components/setting/CreateApiPage";

const Setting = () => {
  const [pagename, setPagename] = useState("Account");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (pagename) {
      case "Account":
        return <AccountOverview />;
      case "General":
        return <General />;
      case "Profile":
        return <EditProfile />;
      case "Add Bank":
        return <AddBankAndCard />;
      case "Security":
        return <SecurityPage />;
      case "Session":
        return <SessionPage />;
      case "Categories":
        return <CategoryPage />;
      case "Currencies":
        return <CurrencyPage />;
      case "Api":
        return <CreateApiPage />;
      default:
        return <div></div>;
    }
  };

  const tabs = [
    "Account",
    "General",
    "Profile",
    "Add Bank",
    "Security",
    "Session",
    "Categories",
    "Currencies",
    "Api",
    "Support",
  ];

  const handleTabClick = (name) => {
    if (name === "Support") {
      navigate("/support");
    } else {
      setPagename(name);
    }
  };

  return (
    <div>
      <div className="sm:ml-16 p-4 pb-14 pt-[120px] md:px-10 lg:ml-10 md:ml-14 bg-white dark:bg-[#131129] min-h-screen">
        <div className="flex flex-col text-black dark:text-white space-y-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Welcome Ekash Finance Management
              </p>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mt-2 lg:mt-0">
              <p className="cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400">Settings</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-2 text-base flex flex-wrap gap-5">
            {tabs.map((name) => (
              <h1
                key={name}
                onClick={() => handleTabClick(name)}
                className={`cursor-pointer font-medium hover:text-black dark:hover:text-white ${
                  pagename === name ? "dark:text-white text-blue-500" : "text-gray-400"
                }`}
              >
                {name}
              </h1>
            ))}
          </div>

          {/* Dynamic Content */}
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
