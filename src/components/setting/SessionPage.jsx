// SessionPage.jsx
import { useState } from "react";
import { ShieldAlert, Check, X, LogOut } from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";
const th =
  "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300";
const td = "px-4 py-3 text-sm text-gray-800 dark:text-gray-200";
const title = "text-lg font-semibold text-gray-900 dark:text-white";

const SessionPage = () => {
  // --- mock data ---
  const [sessions, setSessions] = useState([
    { id: 1, signedIn: "1 day ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: true },
    { id: 2, signedIn: "1 day ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: false },
    { id: 3, signedIn: "1 day ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: false },
  ]);

  const [devices] = useState([
    { id: 1, confirmed: "1 day ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: true },
    { id: 2, confirmed: "8 days ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: false },
    { id: 3, confirmed: "15 days ago", browser: "Chrome (Windows)", ip: "250.364.239.254", near: "Bangladesh, Dhaka", current: false },
  ]);

  const [activity] = useState([
    ["verified second factor", "api", "157.119.239.254", "Bangladesh", "about 1 hour ago"],
    ["verified second factor", "api", "157.119.239.254", "Bangladesh", "about 2 hours ago"],
    ["second factor failure", "api", "157.119.239.254", "Bangladesh", "about 2 hours ago"],
    ["device confirmation completed", "web", "157.119.239.254", "Bangladesh", "1 day ago"],
    ["signin", "web", "157.119.239.254", "Bangladesh", "1 day ago"],
    ["verified second factor", "web", "157.119.239.254", "Bangladesh", "1 day ago"],
  ]);

  // --- handlers ---
  const revokeSession = (id) => setSessions((s) => s.filter((r) => r.id !== id));
  const closeAccount = () => alert("Close account clicked — wire this to your API.");

  return (
    <div className="p-6 space-y-8">
      {/* Third‑Party Applications */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Third‑Party Applications</h2>
        <div className="mt-4 flex items-start gap-4">
          <div className="h-11 w-11 rounded-full bg-amber-400/90 flex items-center justify-center">
            <ShieldAlert className="text-white" size={22} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              You haven’t authorized any applications yet.
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              After connecting an application with your account, you can manage or revoke its access here.
            </p>
          </div>
          <button className="rounded-lg bg-[#3B3DFE] text-white px-4 py-2 text-sm font-semibold hover:opacity-90">
            Authorize now
          </button>
        </div>
      </section>

      {/* Web Sessions */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Web Sessions</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className={th}>Signed In</th>
                <th className={th}>Browser</th>
                <th className={th}>IP Address</th>
                <th className={th}>Near</th>
                <th className={th}>Current</th>
                <th className={th}></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/40 dark:divide-white/10">
              {sessions.map((s) => (
                <tr key={s.id}>
                  <td className={td}>{s.signedIn}</td>
                  <td className={td}>{s.browser}</td>
                  <td className={td}>{s.ip}</td>
                  <td className={td}>{s.near}</td>
                  <td className={`${td} font-semibold`}>
                    {s.current ? (
                      <span className="inline-flex items-center gap-1 text-emerald-500">
                        <Check size={16} /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-500">
                        <X size={16} /> No
                      </span>
                    )}
                  </td>
                  <td className={td}>
                    {!s.current && (
                      <button
                        onClick={() => revokeSession(s.id)}
                        className="inline-flex items-center gap-2 rounded-md border border-rose-500 text-rose-500 px-3 py-1.5 text-xs font-semibold hover:bg-rose-500/10"
                      >
                        <LogOut size={14} /> Revoke
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Confirmed Devices */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Confirmed Devices</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className={th}>Confirmed</th>
                <th className={th}>Browser</th>
                <th className={th}>IP Address</th>
                <th className={th}>Near</th>
                <th className={th}>Current</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/40 dark:divide-white/10">
              {devices.map((d) => (
                <tr key={d.id}>
                  <td className={td}>{d.confirmed}</td>
                  <td className={td}>{d.browser}</td>
                  <td className={td}>{d.ip}</td>
                  <td className={td}>{d.near}</td>
                  <td className={`${td} font-semibold`}>
                    {d.current ? (
                      <span className="inline-flex items-center gap-1 text-emerald-500">
                        <Check size={16} /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-500">
                        <X size={16} /> No
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Account Activity */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Account Activity</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className={th}>Action</th>
                <th className={th}>Source</th>
                <th className={th}>IP Address</th>
                <th className={th}>Location</th>
                <th className={th}>When</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/40 dark:divide-white/10">
              {activity.map(([action, source, ip, loc, when], i) => (
                <tr key={i}>
                  <td className={td}>{action}</td>
                  <td className={td}>{source}</td>
                  <td className={td}>{ip}</td>
                  <td className={td}>{loc}</td>
                  <td className={`${td} text-indigo-400`}>{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Close Account */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Close Account</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Withdraw funds and close your account –{" "}
          <span className="text-rose-500 font-semibold">this cannot be undone</span>.
        </p>
        <button
          onClick={closeAccount}
          className="mt-4 rounded-lg bg-rose-600 hover:bg-rose-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Close Account
        </button>
      </section>
    </div>
  );
};

export default SessionPage;
