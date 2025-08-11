// ReferralDashboard.jsx
import { useState } from "react";
import {
  Copy,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const card =
  "bg-white dark:bg-[#1d1933] rounded-xl shadow-sm border border-gray-400 dark:border-none";

const StatRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-4 border-t first:border-t-0 border-white/10">
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
      {label}
    </span>
    <span className="text-sm font-semibold text-[#3B82F6]">$ {value}</span>
  </div>
);

const Pill = ({ title = "Bronze", pct = "5%", highlight = false }) => (
  <div
    className={`relative rounded-2xl px-5 py-3 text-sm min-w-[100px] flex flex-col items-center
      ${highlight ? "bg-[#0f0e1c] text-white border-2 border-amber-400" : "bg-[#191735] text-gray-200 border border-white/10"}
      shadow`}
  >
    <div className="font-semibold flex items-center gap-2">
      {title} <span className="opacity-70">|</span> {pct}
    </div>
    <div className="text-xs opacity-80 mt-1">Referral : 0</div>
    {/* small tail */}
    <div
      className={`absolute -bottom-2 left-8 h-4 w-4 rotate-45
        ${highlight ? "bg-[#0f0e1c] border-b-2 border-r-2 border-amber-400" : "bg-[#191735] border-b border-r border-white/10"}`}
    />
  </div>
);

export default function ReferralDashboard() {
  const [refLink] = useState("https://test123234fgfdgfgtr");
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(refLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left – Your Credit */}
      <aside className={`${card} p-6 lg:col-span-3`}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Your Credit
        </h3>

        <div className="mt-6">
          <div className="flex items-center justify-between py-4 border-t first:border-t-0 border-white/10">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Invited
            </span>
            <span className="text-sm font-semibold text-[#3B82F6]">12</span>
          </div>

          <StatRow label="Earnings" value="111" />
        </div>

        <button className="mt-6 w-full rounded-lg bg-[#3B82F6] text-white py-2.5 text-sm font-semibold hover:opacity-90">
          CLAIM REWARDS
        </button>
      </aside>

      {/* Right – Referral link */}
      <section className={`${card} p-6 lg:col-span-9`}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Referral link
        </h3>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300/80">
          You earn 5% of the Coins your referrals earn through an offer! Give
          them this link to sign up and you’re good to go
        </p>

        <div className="mt-5">
          <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Your Referral Link
          </div>

          <div className="flex items-center gap-2">
            <input
              className="flex-1 rounded-md px-4 py-3 text-sm
                         bg-slate-100 text-gray-900 border border-gray-200
                         dark:bg-[#0f0e1c] dark:text-gray-100 dark:border-white/10
                         focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              value={refLink}
              readOnly
            />
            <button
              onClick={copyLink}
              className="h-11 w-11 inline-flex items-center justify-center rounded-md
                         bg-slate-100 border border-gray-200
                         dark:bg-[#0f0e1c] dark:border-white/10
                         hover:opacity-90"
              title="Copy link"
            >
              <Copy size={18} className="text-[#3B82F6]" />
            </button>
          </div>
          {copied && (
            <div className="text-xs text-emerald-400 mt-2">Copied!</div>
          )}

          {/* Socials */}
          <div className="flex items-center gap-6 mt-6">
            <a href="#" className="text-[#3B82F6] hover:opacity-80">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#3B82F6] hover:opacity-80">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-[#3B82F6] hover:opacity-80">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#3B82F6] hover:opacity-80">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom – Referral level */}
      <section className={`${card} p-6 lg:col-span-9 lg:col-start-4`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Referral level
          </h3>
          <span className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-200/70 dark:text-amber-900 px-3 py-1 rounded-md font-semibold">
            Current Bonus : 5%
          </span>
        </div>

        <div className="mt-8 grid grid-cols-3 md:grid-cols-3 gap-6">
          <Pill title="Bronze" pct="5%" highlight />
          <Pill title="Bronze" pct="5%" />
          <Pill title="Bronze" pct="5%" highlight />
        </div>

        {/* Progress rail */}
        <div className="mt-10 relative">
          <div className="h-3 w-full rounded-full bg-[#1f2238]" />
          <div className="absolute top-0 left-0 h-3 rounded-full bg-[#3B82F6] w-2/5" />
          {/* marker tails */}
          <div className="absolute -bottom-2 left-[40%] h-4 w-4 rotate-45 bg-[#1d1933] border-r border-b border-white/10" />
          <div className="absolute -bottom-2 left-[80%] h-4 w-4 rotate-45 bg-[#1d1933] border-r border-b border-white/10" />
        </div>
      </section>
    </div>
  );
}
