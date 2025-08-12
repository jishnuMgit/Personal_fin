import { useState } from "react";
import { useNavigate } from "react-router-dom";

const card =
  "rounded-xl shadow-sm border border-gray-200 bg-white dark:bg-[#1d1933] dark:border-white/10";
const label = "text-sm font-medium text-gray-700 dark:text-gray-300";
const input =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-100";

const AddBankForm = () => {
  const navigate = useNavigate();
  const [routing, setRouting] = useState("25487");
  const [account, setAccount] = useState("36475");
  const [fullName, setFullName] = useState("Carla Pascle");

  return (
    <div className="bg-gray-50 dark:bg-[#131129] min-h-screen px-4 py-10">
      <div className={`${card} mx-auto max-w-3xl p-6 md:p-8`}>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
          Link a bank account
        </h2>

        {/* FORM */}
        <form className="mt-6 space-y-5">
          <div className="space-y-2">
            <label className={label}>Routing number</label>
            <input className={input} value={routing} onChange={e => setRouting(e.target.value)} />
          </div>

          <div className="space-y-2">
            <label className={label}>Account number</label>
            <input className={input} value={account} onChange={e => setAccount(e.target.value)} />
          </div>

          <div className="space-y-2">
            <label className={label}>Full name</label>
            <input className={input} value={fullName} onChange={e => setFullName(e.target.value)} />
          </div>

          {/* CHECK IMAGE / GUIDE */}
          <div className="mt-4">
            <div className="rounded-lg bg-[#A7E672] text-[#0b1a13] px-6 py-6 md:px-8 md:py-8 relative overflow-hidden">
              {/* Logo + Title */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/90 flex items-center justify-center text-white text-2xl">
                  🏦
                </div>
                <div className="h-2 w-28 bg-black/70 rounded" />
              </div>

              {/* Lines */}
              <div className="mt-8 space-y-4 pr-36">
                <div className="h-2 bg-black/25 rounded" />
                <div className="h-2 bg-black/20 rounded w-3/4" />
              </div>

              {/* Amount box */}
              <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
                <div className="bg-white/90 rounded px-4 py-2 min-w-[120px] text-left">
                  <span className="font-semibold">$</span>
                </div>
              </div>

              {/* MICR row */}
              <div className="mt-10 md:mt-12 font-mono text-lg tracking-wider flex flex-wrap gap-x-8 gap-y-2">
                <span>:999688777</span>
                <span>:00123456789</span>
                <span>:123</span>
              </div>
            </div>

            {/* Legend: perfectly aligned using grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <div className="font-semibold">routing number</div>
                <div className="text-gray-500 dark:text-gray-400">number</div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <div className="font-semibold">bank account</div>
                <div className="text-gray-500 dark:text-gray-400">number</div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <div className="font-semibold">cheque</div>
                <div className="text-gray-500 dark:text-gray-400">number</div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-40 rounded-lg bg-[#3B3DFE] text-white font-semibold py-2.5 hover:opacity-90"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:w-40 rounded-lg bg-emerald-600 text-white font-semibold py-2.5 hover:bg-emerald-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBankForm;
