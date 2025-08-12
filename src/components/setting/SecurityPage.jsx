// SecurityPage.jsx
import { useState } from "react";
import {
  IdCard,
  Mail,
  Phone,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";

const inputBase =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";

const SectionTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    {children}
  </h3>
);

const Row = ({ icon, primary, status = "Verified", pending }) => (
  <div className="flex items-start gap-3">
    <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {primary}
      </div>
      <div className="mt-1 flex items-center gap-1 text-xs">
        {pending ? (
          <>
            <XCircle className="h-4 w-4 text-rose-500" />
            <span className="text-rose-500">Verification pending</span>
          </>
        ) : (
          <>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-500">{status}</span>
          </>
        )}
      </div>
    </div>
  </div>
);

const SecurityPage = () => {
  // mock data
  const [emails, setEmails] = useState([
    { id: 1, value: "hello@example.com", pending: false },
    { id: 2, value: "hello@example.com", pending: false },
    { id: 3, value: "hello@example.com", pending: false },
    { id: 4, value: "hello@example.com", pending: true },
  ]);

  const [phones, setPhones] = useState([
    { id: 1, value: "+1 135 468 45", pending: false },
    { id: 2, value: "+1 135 468 45", pending: false },
    { id: 3, value: "+1 135 468 45", pending: false },
    { id: 4, value: "+1 135 468 45", pending: true },
  ]);

  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addEmail = () => {
    if (!newEmail.trim()) return;
    setEmails((prev) => [
      ...prev,
      { id: Date.now(), value: newEmail, pending: true },
    ]);
    setNewEmail("");
  };

  const addPhone = () => {
    if (!newPhone.trim()) return;
    setPhones((prev) => [
      ...prev,
      { id: Date.now(), value: newPhone, pending: true },
    ]);
    setNewPhone("");
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Social Security Card */}
      <section className={`${card} p-6`}>
        <SectionTitle>Social Security Card</SectionTitle>

        <div className="mt-5 rounded-xl bg-indigo-400/70 border-4 border-indigo-700 h-56 flex items-center justify-center text-white">
          {/* placeholder ID card artwork */}
          <div className="w-4/5">
            <div className="h-2 bg-white/80 rounded mb-4 w-2/3" />
            <div className="h-2 bg-white/80 rounded mb-4 w-1/2" />
            <div className="h-2 bg-white/80 rounded mb-4 w-1/3" />
            <div className="flex items-center gap-6 mt-6">
              <div className="h-14 w-14 rounded-full bg-white/90" />
              <div className="h-2 bg-white/80 rounded w-1/2" />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="text-base font-semibold text-gray-900 dark:text-white">
            Carla Pascle
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
              <IdCard className="text-indigo-600 dark:text-indigo-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-100">
                0024 5687 2254 3698
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-emerald-500">Verified</span>
              </div>
            </div>
          </div>

        </div>

        <button className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#3B3DFE] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
          Add New ID
        </button>
      </section>

      {/* Email Verification */}
      <section className={`${card} p-6`}>
        <SectionTitle>Email Verification</SectionTitle>

        <div className="mt-5 space-y-5">
          {emails.map((e) => (
            <Row
              key={e.id}
              icon={<Mail size={18} className="text-indigo-600 dark:text-indigo-300" />}
              primary={e.value}
              pending={e.pending}
            />
          ))}
        </div>

        <div className="mt-5">
          <input
            className={inputBase}
            placeholder="hello@example.com"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button
            onClick={addEmail}
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#3B3DFE] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Add New Email
          </button>
        </div>
      </section>

      {/* Phone Verification */}
      <section className={`${card} p-6`}>
        <SectionTitle>Phone Verification</SectionTitle>

        <div className="mt-5 space-y-5">
          {phones.map((p) => (
            <Row
              key={p.id}
              icon={<Phone size={18} className="text-indigo-600 dark:text-indigo-300" />}
              primary={p.value}
              pending={p.pending}
            />
          ))}
        </div>

        <div className="mt-5">
          <input
            className={inputBase}
            placeholder="+1 135 468 45"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <button
            onClick={addPhone}
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#3B3DFE] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Add New Phone
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
