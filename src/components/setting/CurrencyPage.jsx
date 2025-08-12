// CurrencyPage.jsx
import { useMemo, useState } from "react";
import {
  DollarSign,
  Euro,
  PoundSterling,
  JapaneseYen,
  CreditCard,
  Coins,
} from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";
const inputBase =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";
const label = "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

const CurrencyPill = ({ icon, name, rate }) => (
  <div className={`${card} p-5 flex items-center gap-4`}>
    <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="text-lg font-semibold text-gray-900 dark:text-white">{name}</div>
      <div className="text-xs text-gray-600 dark:text-gray-300">1 USD = {rate}</div>
    </div>
  </div>
);

const CurrencyPage = () => {
  // demo FX table (USD -> other)
  const RATES = {
    USD: { label: "USD", toUSD: 1, display: "0.92 Euro", icon: <DollarSign size={20} /> },
    EUR: { label: "Euro", toUSD: 1.09, display: "0.92 Euro", icon: <Euro size={18} /> }, // 1 USD = 0.92 EUR
    GBP: { label: "Pound", toUSD: 1.25, display: "0.92 Euro", icon: <PoundSterling size={18} /> },
    JPY: { label: "Yen", toUSD: 0.0067, display: "0.92 Euro", icon: <JapaneseYen size={18} /> },
  };

  const METHODS = [
    { id: "boa", label: "Bank of America Bank **********5245" },
    { id: "chase", label: "Chase Bank **********8842" },
    { id: "card", label: "Visa **** 3241" },
  ];

  const [currency, setCurrency] = useState("USD");
  const [method, setMethod] = useState(METHODS[0].id);
  const [amount, setAmount] = useState(125); // USD amount

  const rateText = useMemo(() => "1 USD = 0.92 Euro", []);
  const fee = useMemo(() => +(amount * 0.006).toFixed(2), [amount]); // 0.6%
  const vat = useMemo(() => +(Math.max(0, (amount * 0.003) - 0.0)).toFixed(2), [amount]); // 0.3%
  const total = useMemo(() => +(amount - fee).toFixed(2), [amount, fee]);
  const subTotal = useMemo(() => +(total - vat).toFixed(2), [total, vat]);

  const onSubmit = (e) => {
    e.preventDefault();
    // wire to API here
    alert(`Exchanged ${amount} ${currency} via ${method}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Top currency cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <CurrencyPill icon={<DollarSign size={20} />} name="USD" rate="0.92 Euro" />
        <CurrencyPill icon={<Euro size={18} />} name="Euro" rate="0.92 Euro" />
        <CurrencyPill icon={<PoundSterling size={18} />} name="Pound" rate="0.92 Euro" />
        <CurrencyPill icon={<JapaneseYen size={18} />} name="Yen" rate="0.92 Euro" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: exchange form */}
        <section className={`${card} p-6`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Currency Exchange
          </h3>

          <form className="mt-6 space-y-5" onSubmit={onSubmit}>
            {/* Currency */}
            <div>
              <div className={label}>Currency</div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300">
                  <Coins size={16} />
                </span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className={`${inputBase} pl-9`}
                >
                  {Object.keys(RATES).map((k) => (
                    <option key={k} value={k}>
                      {RATES[k].label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment method */}
            <div>
              <div className={label}>Payment Method</div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300">
                  <CreditCard size={16} />
                </span>
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className={`${inputBase} pl-9`}
                >
                  {METHODS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Amount */}
            <div>
              <div className={label}>Enter your amount</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className={inputBase}
                  placeholder="0.0214 BTC"
                  readOnly
                />
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(+e.target.value || 0)}
                  className={inputBase}
                  placeholder="125.00 USD"
                />
              </div>
            </div>

            {/* Monthly limit & CTA */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Monthly Limit
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                $49750 remaining
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:opacity-90"
            >
              Exchange Now
            </button>
          </form>
        </section>

        {/* Right: details */}
        <section className={`${card} p-6`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Exchange Details
          </h3>

          <div className="mt-6 divide-y divide-gray-200/40 dark:divide-white/10 text-sm">
            <DetailRow label="Exchange Amount" value={`${amount.toFixed(2)} USD`} valueClass="text-indigo-400" />
            <DetailRow
              label="Payment Method"
              value={METHODS.find((m) => m.id === method)?.label || "-"}
            />
            <DetailRow label="Exchange Rate" value={rateText} />
            <DetailRow label="Fee" value={`$${fee.toFixed(2)} USD`} />
            <DetailRow label="Total" value={`$${total.toFixed(2)} USD`} />
            <DetailRow label="Vat" value={`$${vat.toFixed(2)} USD`} valueClass="text-rose-400" />
            <DetailRow label="Sub Total" value={`$${subTotal.toFixed(2)} USD`} />
          </div>
        </section>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, valueClass = "" }) => (
  <div className="py-3 flex items-center justify-between">
    <span className="text-gray-600 dark:text-gray-300">{label}</span>
    <span className={`text-gray-900 dark:text-gray-200 ${valueClass}`}>{value}</span>
  </div>
);

export default CurrencyPage;
