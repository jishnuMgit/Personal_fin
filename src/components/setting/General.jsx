// General.jsx
import { useState } from "react";

const card =
  "rounded-lg shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";

const inputBase =
  "w-full rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "border border-gray-300 text-gray-900 " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";

const General = () => {
  const [currency, setCurrency] = useState("USD");
  const [timeZone, setTimeZone] = useState("(GMT−12:00) International Date Line West");
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: false,
  });

  const handleNotificationToggle = (key) =>
    setNotifications((p) => ({ ...p, [key]: !p[key] }));

  const handleSavePreferences = () =>
    console.log("Preferences Saved:", { currency, timeZone });

  const handleSaveNotifications = () =>
    console.log("Notifications Saved:", notifications);

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-[#131129] min-h-screen">
      {/* Preferences */}
      <section className={`${card} p-6`}>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Preferences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Primary Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className={inputBase}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>

          {/* Time Zone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className={inputBase}
            >
              <option>(GMT−12:00) International Date Line West</option>
              <option>(GMT+05:30) India Standard Time</option>
              <option>(GMT+00:00) Greenwich Mean Time</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSavePreferences}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Save
        </button>
      </section>

      {/* Notifications */}
      <section className={`${card} p-6`}>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Notifications
        </h2>

        <div className="space-y-5">
          {[
            { key: "digitalCurrency", label: "I send or receive digital currency" },
            { key: "merchantOrder", label: "I receive merchant order" },
            { key: "recommendations", label: "There are recommendation for my account" },
          ].map((item) => {
            const checked = notifications[item.key];
            return (
              <div key={item.key} className="flex items-center gap-3">
                {/* Toggle */}
                <label className="relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={checked}
                    onChange={() => handleNotificationToggle(item.key)}
                  />
                  <div
                    className="h-6 w-11 rounded-full transition-colors
                               bg-gray-200 dark:bg-white/10 peer-checked:bg-green-500"
                  />
                  <span
                    className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform
                    ${checked ? "translate-x-5" : ""}`}
                  />
                </label>

                <span className="text-sm text-gray-800 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleSaveNotifications}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default General;
