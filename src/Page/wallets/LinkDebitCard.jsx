import React, { useState } from "react";

const card =
  "rounded-xl shadow-sm border border-gray-200 bg-white dark:bg-[#1d1933] dark:border-white/10";
const label = "text-sm font-medium text-gray-700 dark:text-gray-300";
const input =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-100";

const LinkDebitCard = () => {
  const [name, setName] = useState("Carla Pascle");
  const [cardNumber, setCardNumber] = useState("5658 4258 6358 4756");
  const [expiry, setExpiry] = useState("10/22");
  const [cvc, setCvc] = useState("125");
  const [postal, setPostal] = useState("2368");

  // Small helpers to format inputs -------------------------------------------
  const formatCard = (v) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .trim();

  const formatExpiry = (v) => {
    const num = v.replace(/\D/g, "").slice(0, 4);
    if (num.length <= 2) return num;
    return `${num.slice(0, 2)}/${num.slice(2)}`;
  };

  return (
    <div className="bg-gray-50 pt-28 dark:bg-[#131129] min-h-screen px-4 py-10">
      <div className={`${card} mx-auto max-w-3xl p-6 md:p-8`}>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
          Link a debit card
        </h2>

        <form className="mt-6 space-y-5">
          {/* Name on card */}
          <div className="space-y-2">
            <label className={label}>Name on card</label>
            <input
              className={input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </div>

          {/* Card number */}
          <div className="space-y-2">
            <label className={label}>Card number</label>
            <input
              inputMode="numeric"
              autoComplete="cc-number"
              className={input}
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCard(e.target.value))}
              placeholder="1234 5678 9012 3456"
            />
          </div>

          {/* Row: Expiration, CVC, Postal code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className={label}>Expiration</label>
              <input
                inputMode="numeric"
                autoComplete="cc-exp"
                className={input}
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY"
              />
            </div>

            <div className="space-y-2">
              <label className={label}>CVC</label>
              <input
                inputMode="numeric"
                autoComplete="cc-csc"
                className={input}
                value={cvc}
                onChange={(e) =>
                  setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                placeholder="CVC"
              />
            </div>

            <div className="space-y-2">
              <label className={label}>Postal code</label>
              <input
                className={input}
                value={postal}
                onChange={(e) => setPostal(e.target.value.slice(0, 12))}
                placeholder="ZIP / Postal"
              />
            </div>
          </div>

          {/* Save button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 text-white font-semibold py-3 hover:bg-emerald-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkDebitCard;
