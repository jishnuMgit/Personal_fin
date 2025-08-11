// CreateTicketForm.jsx
import { useState } from "react";

const CreateTicketForm = ({ onCancel, onCreate }) => {
  const QUESTION_TYPES = ["Earning", "Withdrawals", "Profile", "General", "Others"];
  const EMP_RESPOND = ["HR", "Payroll", "IT Support", "Manager", "Others"];
  const LANGS = ["English", "Malayalam", "Hindi", "Tamil"];

  const [type, setType] = useState(QUESTION_TYPES[0]);
  const [respondBy, setRespondBy] = useState(EMP_RESPOND[0]);
  const [lang, setLang] = useState(LANGS[0]);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate?.({ type, respondBy, lang, desc });
  };

  const label = "text-sm font-medium text-gray-700 dark:text-gray-300";

  // Input + Select styles for light & dark mode
  const selectClass =
    "w-full rounded-md border border-white/5 px-4 py-3 " +
    "bg-slate-200 text-gray-900 " + // Light mode
    "dark:bg-[#131129] dark:text-gray-200 " + // Dark mode
    "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] placeholder-gray-400";

  const textareaClass =
    "w-full h-32 rounded-md border border-white/5 px-4 py-3 resize-y " +
    "bg-slate-200 text-gray-900 " +
    "dark:bg-[#131129] dark:text-gray-200 " +
    "focus:outline-none focus:ring-2 focus:ring-[#3B82F6]";

  const card =
    "bg-white dark:bg-[#1d1933] border border-gray-200/10 dark:border-transparent " +
    "rounded-xl p-6 shadow-sm";

  return (
    <div className={`${card} max-w-full mx-auto dark:border-none border-gray-500`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Create Ticket
        </h2>
        <button onClick={onCancel} className="text-[#3B82F6] text-sm">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type dropdown */}
        <div>
          <label className={label}>What type of question do you want?</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={selectClass}
          >
            {QUESTION_TYPES.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Employee Respond dropdown */}
        <div>
          <label className={label}>Employee Respond</label>
          <select
            value={respondBy}
            onChange={(e) => setRespondBy(e.target.value)}
            className={selectClass}
          >
            {EMP_RESPOND.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Language dropdown */}
        <div>
          <label className={label}>What language do you prefer to be answered?</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className={selectClass}
          >
            {LANGS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className={label}>
            Please provide a description of the problem you are encountering
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={textareaClass}
            placeholder="Type your issue here..."
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-[#3B82F6] text-white font-medium hover:opacity-90"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicketForm;
