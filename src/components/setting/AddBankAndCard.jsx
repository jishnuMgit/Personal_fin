// AddBankAndCard.jsx
import { Landmark, CreditCard } from "lucide-react";

const cardCls =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";

const ManageBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-5 py-2 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-semibold hover:bg-[#3B82F6]/10"
  >
    Manage
  </button>
);

const ItemRow = ({ icon, title, sub, status, onManage }) => (
  <div className="flex items-start justify-between py-6">
    <div className="flex items-start gap-4">
      <div className="h-14 w-14 rounded-full bg-[#3B3DFE] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{sub}</div>
        <div className="text-sm text-emerald-500 mt-1">{status}</div>
      </div>
    </div>
    <ManageBtn onClick={onManage} />
  </div>
);

const AddBankAndCard = ({
  items = [
    {
      id: "bank1",
      type: "bank",
      title: "Bank of America",
      sub: "Bank ************5421",
      status: "Verified",
    },
    {
      id: "card1",
      type: "card",
      title: "Master Card",
      sub: "Credit Card ********5478",
      status: "Verified",
    },
  ],
  onAddBank = () => {},
  onAddCard = () => {},
  onManage = (item) => console.log("manage", item),
}) => {
  return (
    <section className={`${cardCls} p-6`}>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Add Bank Account or Card
      </h2>

      <div className="mt-4">
        {items.map((it, idx) => (
          <div key={it.id}>
            <ItemRow
              icon={
                it.type === "bank" ? (
                  <Landmark size={22} className="text-white" />
                ) : (
                  <CreditCard size={22} className="text-white" />
                )
              }
              title={it.title}
              sub={it.sub}
              status={it.status}
              onManage={() => onManage(it)}
            />
            {idx !== items.length - 1 && (
              <hr className="border-t border-gray-200/40 dark:border-white/10" />
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={onAddBank}
          className="px-6 py-3 rounded-lg bg-[#3B3DFE] text-white font-semibold hover:opacity-90"
        >
          Add New Bank
        </button>
        <button
          onClick={onAddCard}
          className="px-6 py-3 rounded-lg bg-[#3B3DFE] text-white font-semibold hover:opacity-90"
        >
          Add New Card
        </button>
      </div>
    </section>
  );
};

export default AddBankAndCard;
