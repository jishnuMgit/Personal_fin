import { useNavigate } from "react-router-dom";



const AddAccountPage  = () => {
  const navigate = useNavigate();





  return (
    <div className='pb-10'>
      <div className="sm:ml-16 pt-[120px]  -mt-40 p-4 lg:ml-10  bg-[#f6f9fc] dark:bg-[#131129] min-h-screen">
          
            {/* Header */}
          

            {/* Main Wallet Content */}
           
 <div className="bg-gray-50 dark:bg-[#131129] min-h-screen flex items-center justify-center p-10">
      <div className="bg-white dark:bg-[#1a1832] shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Add New Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bank Account */}
          <div className="flex flex-col gap-5" >
            <h3 className="font-bold text-gray-900 dark:text-white">Bank account</h3>
            <p
              className="text-gray-600 dark:text-gray-300 cursor-pointer hover:underline hover:text-[blue] dark:hover:text-[blue]"
              onClick={() => navigate("/AddBankForm")}
            >
              Use bank account to make purchase and sells. Prices are locked today.
              Trades may take 4-5 days to process
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Recommended for invest large amount
            </p>
          </div>

          {/* Debit Card */}
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-gray-900 dark:text-white">Debit card</h3>
            <p
              className="text-gray-600 dark:text-gray-300 cursor-pointer hover:underline hover:text-[blue] dark:hover:text-[blue]"
              onClick={() => navigate("/LinkDebitCard")}
            >
              Use any visa or mastercard debit card to make small investment. Add a bank or
              wallet to sell
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Recommended for invest small amount
            </p>
          </div>
        </div>
      </div>
    </div>
         
         
          
     
      </div>
    </div>
  );
};

export default AddAccountPage ;
