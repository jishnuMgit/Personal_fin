// AccountOverview.jsx

import { Check, ShieldUser } from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";

const Label = ({ children }) => (
  <div className="flex items-center gap-2 text-[13px] font-medium text-gray-700 dark:text-gray-300">
    {children}
  </div>
);

const AccountOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Welcome */}
      <section className={`${card} p-5 lg:col-span-6`}>
        <div className="flex items-start gap-4">
          {/* avatar */}
          <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/10">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Welcome, Hafsa Humaira!
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Looks like you are not verified yet. Verify yourself to use the full
              potential of Ekash.
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between py-3 border-t border-white/10">
            <Label>
              <span className="h-10 w-10 rounded-full bg-emerald-500  flex justify-center items-center " ><Check size={24} /> </span>
             Verify account
            </Label>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-white/10">
            <Label>
              <span className="h-10 w-10 rounded-full bg-indigo-500 flex justify-center items-center " ><ShieldUser color="white" size={24} /></span>
            
            <p className='text-[#2f2cd8]' >  Two-factor authentication (2FA)</p>
            </Label>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className={`${card} p-5 lg:col-span-6`}>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          Download App
        </h3>
        <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Get Verified On Our Mobile App
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Verifying your identity on our mobile app is more secure, faster, and reliable.
        </p>

       <div className="mt-5 flex flex-col gap-3 w-52">
  {/* Google Play Button */}
  <a
    href="#"
    className="flex items-center justify-center gap-2 rounded-lg bg-[#3B3DFE] py-2 px-4"
  >
    <img
      src="/android.svg" // place your Google Play logo PNG in public folder
      alt="Google Play"
    />
  
  </a>

  {/* App Store Button */}
  <a
    href="#"
    className="flex items-center justify-center gap-2 rounded-lg bg-[#3B3DFE] py-2 px-4"
  >
    <img
      src="/apple.svg" // place your App Store logo PNG in public folder
      alt="App Store"
    />
    
  </a>
</div>

      </section>

      {/* Verify & Upgrade */}
      <section className={`${card} p-5 lg:col-span-6`}>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          VERIFY & UPGRADE
        </h3>

        <div className="mt-4">
          <div className="text-sm">
            <span className="text-gray-300">Account Status : </span>
            <span className="font-semibold text-amber-400">Pending</span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Your account is unverified. Get verified to enable funding, trading, and withdrawal.
          </p>
        </div>

        <button className="mt-5 rounded-lg bg-[#2f2cd8] text-white px-4 py-2 text-sm font-semibold hover:opacity-90">
          Get Verified
        </button>
      </section>

      {/* Earn 30% Commission */}
      <section className={`${card} p-5 lg:col-span-6`}>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          Earn 30% Commission
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Refer your friends and earn 30% of their trading fees.
        </p>

        <button className="mt-5 rounded-lg bg-[#2f2cd8] text-white px-4 py-2 text-sm font-semibold hover:opacity-90">
          Referral Program
        </button>
      </section>

      {/* Information */}
      <section className={`${card} p-5 lg:col-span-12`}>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Information
          </h3>
          <button className="rounded-md bg-[#2f2cd8] text-white px-4 py-2 text-sm font-semibold hover:opacity-90">
            Edit
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-wide text-gray-400">
              User ID
            </div>
            <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              818778
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wide text-gray-400">
              Email Address
            </div>
            <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              email@example.com
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wide text-gray-400">
              Joined Since
            </div>
            <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              20/10/2020
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wide text-gray-400">
              Type
            </div>
            <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              Personal
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4">
            <div className="text-[11px] uppercase tracking-wide text-gray-400">
              Country of Residence
            </div>
            <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              Bangladesh
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountOverview;
