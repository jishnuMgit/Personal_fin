// CategoryPage.jsx
import React, { useMemo, useState } from "react";
import {
  Pencil,
  Eye,
  EyeOff,
  Trash2,
  GripHorizontal,
  Banknote,
  Briefcase,
  Car,
  GraduationCap,
  Clapperboard,
  ShoppingBag,
  Home,
  HeartPulse,
  Utensils,
  PiggyBank,
  Gift,
  ShieldCheck,
  Wallet,
  HandCoins,
  Dumbbell,
  Trees,
  Plane,
} from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";
const inputBase =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";
const label = "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

// Available icon options
const ICONS = {
  Salary: PiggyBank,
  Business: Briefcase,
  Client: HandCoins,
  Gifts: Gift,
  Insurance: ShieldCheck,
  Loan: Wallet,
  Other: Banknote,
  Beauty: Wallet,
  "Bills & Fees": Banknote,
  Car: Car,
  Education: GraduationCap,
  Entertainment: Clapperboard,
  Family: Home,
  "Food & Drink": Utensils,
  Groceries: ShoppingBag,
  Healthcare: HeartPulse,
  Home: Home,
  Shopping: ShoppingBag,
  Sports: Dumbbell,
  Hobbies: Trees,
  Travel: Plane,
};

// Some quick palette options
const COLOR_OPTIONS = [
  { name: "Emerald", value: "#10B981" },
  { name: "Sky", value: "#0EA5E9" },
  { name: "Violet", value: "#8B5CF6" },
  { name: "Amber", value: "#F59E0B" },
  { name: "Rose", value: "#F43F5E" },
  { name: "Lime", value: "#84CC16" },
  { name: "Slate", value: "#64748B" },
];

const RowActionButton = ({ children, ...props }) => (
  <button
    {...props}
    className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-indigo-50 text-indigo-600
               dark:bg-white/5 dark:text-indigo-300 hover:opacity-90"
  >
    {children}
  </button>
);

const CategoryRow = ({ cat, onEdit, onToggle, onDelete }) => {
  const Icon = ICONS[cat.icon] || Wallet;
  return (
    <li className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <GripHorizontal className="text-gray-500 dark:text-gray-400" size={16} />
        <span
          className="h-8 w-8 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: cat.color }}
        >
          <Icon size={16} />
        </span>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {cat.name}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <RowActionButton onClick={() => onEdit(cat)}>
          <Pencil size={14} />
        </RowActionButton>
        <RowActionButton onClick={() => onToggle(cat.id)}>
          {cat.visible ? <Eye size={14} /> : <EyeOff size={14} />}
        </RowActionButton>
        <RowActionButton onClick={() => onDelete(cat.id)}>
          <Trash2 size={14} className="text-rose-500" />
        </RowActionButton>
      </div>
    </li>
  );
};

const CategoryList = ({ title, items, onEdit, onToggle, onDelete }) => (
  <section className={`${card} p-5`}>
    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
      {title}
    </h3>
    <ul className="divide-y divide-gray-200/40 dark:divide-white/10">
      {items.map((c) => (
        <CategoryRow
          key={c.id}
          cat={c}
          onEdit={onEdit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </section>
);

const CategoryForm = ({ onSubmit, editing, onCancel }) => {
  const [name, setName] = useState(editing?.name || "");
  const [type, setType] = useState(editing?.type || "income");
  const [icon, setIcon] = useState(editing?.icon || "Salary");
  const [color, setColor] = useState(editing?.color || COLOR_OPTIONS[0].value);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: editing?.id || Date.now(),
      name,
      type,
      icon,
      color,
      visible: editing?.visible ?? true,
    });
    if (!editing) {
      setName("");
      setType("income");
      setIcon("Salary");
      setColor(COLOR_OPTIONS[0].value);
    }
  };

  return (
    <section className={`${card} p-5`}>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
        {editing ? "Edit category" : "Create a new categories"}
      </h3>

      <form className="space-y-4" onSubmit={submit}>
        <div>
          <div className={label}>Name</div>
          <input
            className={inputBase}
            placeholder="category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <div className={label}>Type</div>
          <select
            className={inputBase}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className={label}>Icon</div>
            <select
              className={inputBase}
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            >
              {Object.keys(ICONS).map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className={label}>Color</div>
            <select
              className={inputBase}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              {COLOR_OPTIONS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:opacity-90"
          >
            {editing ? "Save changes" : "Create new category"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-white/10 text-sm text-gray-700 dark:text-gray-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

const CategoryPage = () => {
  const [categories, setCategories] = useState([
    // Income
    { id: 1, name: "Salary", type: "income", icon: "Salary", color: "#8B5CF6", visible: true },
    { id: 2, name: "Business", type: "income", icon: "Business", color: "#F43F5E", visible: true },
    { id: 3, name: "Client", type: "income", icon: "Client", color: "#F59E0B", visible: true },
    { id: 4, name: "Gifts", type: "income", icon: "Gifts", color: "#F59E0B", visible: true },
    { id: 5, name: "Insurance", type: "income", icon: "Insurance", color: "#F59E0B", visible: true },
    { id: 6, name: "Loan", type: "income", icon: "Loan", color: "#22C55E", visible: true },
    { id: 7, name: "Other", type: "income", icon: "Other", color: "#10B981", visible: true },
    // Expense (sample)
    { id: 101, name: "Beauty", type: "expense", icon: "Beauty", color: "#10B981", visible: true },
    { id: 102, name: "Bills & Fees", type: "expense", icon: "Bills & Fees", color: "#0EA5E9", visible: true },
    { id: 103, name: "Car", type: "expense", icon: "Car", color: "#06B6D4", visible: true },
    { id: 104, name: "Education", type: "expense", icon: "Education", color: "#22D3EE", visible: true },
    { id: 105, name: "Entertainment", type: "expense", icon: "Entertainment", color: "#3B82F6", visible: true },
    { id: 106, name: "Family", type: "expense", icon: "Family", color: "#2563EB", visible: true },
    { id: 107, name: "Food & Drink", type: "expense", icon: "Food & Drink", color: "#7C3AED", visible: true },
    { id: 108, name: "Salary", type: "expense", icon: "Salary", color: "#A855F7", visible: true },
    { id: 109, name: "Groceries", type: "expense", icon: "Groceries", color: "#EC4899", visible: true },
    { id: 110, name: "Healthcare", type: "expense", icon: "Healthcare", color: "#EF4444", visible: true },
    { id: 111, name: "Home", type: "expense", icon: "Home", color: "#EA580C", visible: true },
    { id: 112, name: "Shopping", type: "expense", icon: "Shopping", color: "#EF4444", visible: true },
    { id: 113, name: "Sports", type: "expense", icon: "Sports", color: "#F97316", visible: true },
    { id: 114, name: "Hobbies", type: "expense", icon: "Hobbies", color: "#22C55E", visible: true },
    { id: 115, name: "Travel", type: "expense", icon: "Travel", color: "#10B981", visible: true },
  ]);

  const [editing, setEditing] = useState(null);

  const income = useMemo(
    () => categories.filter((c) => c.type === "income"),
    [categories]
  );
  const expense = useMemo(
    () => categories.filter((c) => c.type === "expense"),
    [categories]
  );

  const upsertCategory = (payload) => {
    setCategories((prev) => {
      const exists = prev.some((c) => c.id === payload.id);
      return exists ? prev.map((c) => (c.id === payload.id ? payload : c)) : [payload, ...prev];
    });
    setEditing(null);
  };

  const toggleVisibility = (id) =>
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
    );

  const deleteCategory = (id) =>
    setCategories((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Create / Edit */}
      <div className="lg:col-span-4">
        <CategoryForm
          editing={editing}
          onSubmit={upsertCategory}
          onCancel={() => setEditing(null)}
        />
      </div>

      <div className="lg:col-span-8 space-y-6">
        <CategoryList
          title="Income Categories"
          items={income}
          onEdit={setEditing}
          onToggle={toggleVisibility}
          onDelete={deleteCategory}
        />

        <CategoryList
          title="Expense Categories"
          items={expense}
          onEdit={setEditing}
          onToggle={toggleVisibility}
          onDelete={deleteCategory}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
