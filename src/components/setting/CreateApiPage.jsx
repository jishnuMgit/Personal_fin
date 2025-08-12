// CreateApiPage.jsx
import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";
const inputBase =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";
const label = "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const title = "text-lg font-semibold text-gray-900 dark:text-white";

const CreateApiPage = () => {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [keys, setKeys] = useState([
    { id: "69e387f1-31c3-45ad-9c68-5a51e5e78b43", enabled: true },
    { id: "a2b74521-7bd1-4f1d-9dbe-6b8d7b41a912", enabled: false },
    { id: "c88f8a39-41f0-49ba-a6b0-1e7d2c3f3b11", enabled: false },
    { id: "2d3f0723-8a9f-4e64-a6c8-0b8c7e112ba9", enabled: false },
    { id: "53c27a59-28bd-4d1e-9a77-0e4d891b170d", enabled: false },
  ]);

  const disabled = useMemo(
    () => !pass || pass !== confirm,
    [pass, confirm]
  );

  const makeKey = () =>
    ([1e7]+-1e3+-4e3+-8e3+-1e11)
      .replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );

  const handleCreate = (e) => {
    e.preventDefault();
    if (disabled) return;
    const newKey = makeKey();
    // TODO: call your API with { passphrase: pass }
    setKeys((k) => [{ id: newKey, enabled: true }, ...k]);
    setPass("");
    setConfirm("");
  };

  const toggle = (id) =>
    setKeys((k) => k.map((row) => (row.id === id ? { ...row, enabled: !row.enabled } : row)));

  const remove = (id) =>
    setKeys((k) => k.filter((row) => row.id !== id));

  return (
    <div className="p-6 space-y-8">
      {/* Create section */}
      <section className={`${card} p-6`}>
        <h2 className={title}>Create API Key</h2>

        <form onSubmit={handleCreate} className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className={label}>Generate New Key</div>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className={inputBase}
              placeholder="Enter passphrase"
            />
          </div>

          <div>
            <div className={label}>Confirm Passphrase</div>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={inputBase}
              placeholder="Re‑enter passphrase"
            />
          </div>

          <div className="lg:col-span-2">
            <button
              type="submit"
              disabled={disabled}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold
                ${disabled
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-white/10 dark:text-gray-400"
                  : "bg-[#3B3DFE] text-white hover:opacity-90"}`}
            >
              Save
            </button>
            {pass && confirm && pass !== confirm && (
              <span className="ml-3 text-sm text-rose-500">Passphrases don’t match.</span>
            )}
          </div>
        </form>
      </section>

      {/* Keys table */}
      <section className={`${card} p-6`}>
        <h3 className={title}>Your API Keys</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-xs uppercase tracking-wide">
                <th className="px-4 py-3 text-left text-gray-600 dark:text-gray-300">Key</th>
                <th className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 w-32">Status</th>
                <th className="px-4 py-3 text-left text-gray-600 dark:text-gray-300 w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50 dark:divide-white/10">
              {keys.map((k) => (
                <tr key={k.id}>
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{k.id}</td>
                  <td className="px-4 py-3">
                    <label className="inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={k.enabled}
                        onChange={() => toggle(k.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-[#3B3DFE] relative transition-colors">
                        <span
                          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform
                            ${k.enabled ? "translate-x-5" : ""}`}
                        />
                      </div>
                    </label>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => remove(k.id)}
                      className="h-8 w-8 inline-flex items-center justify-center rounded-md
                                 bg-rose-50 text-rose-600 dark:bg-white/5 dark:text-rose-400 hover:opacity-90"
                      title="Delete key"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {keys.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-sm text-gray-500 dark:text-gray-300" colSpan={3}>
                    No API keys yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CreateApiPage;
