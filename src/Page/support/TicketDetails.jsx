
// components/support/TicketDetails.jsx
import { useState } from "react";
import { X, Flag, Send } from "lucide-react";

const TicketDetails = () => {
  // demo ticket + replies (replace with real data / API)
  const [ticket, setTicket] = useState({
    id: "TKT-1042",
    title: "I’m having issues claiming with my daily hours",
    status: "OPEN",
    createdAt: "24 June 2024",
    body:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
  });

  const [replies, setReplies] = useState([
    {
      id: 1,
      author: "Rick Henary",
      role: "User",
      date: "24 June 2024",
      avatar: "https://i.pravatar.cc/80?img=12",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "It has been the industry’s standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      author: "Admin",
      role: "Admin",
      date: "24 June 2024",
      avatar: "https://i.pravatar.cc/80?img=5",
      text:
        "Thanks for reporting. We’re checking your timesheet sync. " +
        "Please keep the app open for the next 10 minutes while we run diagnostics.",
    },
    {
      id: 3,
      author: "Thomas Halva",
      role: "User",
      date: "24 June 2024",
      avatar: "https://i.pravatar.cc/80?img=33",
      text:
        "I’m seeing the same thing today. Mine fixed itself after a manual refresh.",
    },
  ]);

  const [newReply, setNewReply] = useState("");

  const handleAddReply = () => {
    if (!newReply.trim()) return;
    setReplies((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: "You",
        role: "User",
        date: new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        avatar: "https://i.pravatar.cc/80?img=1",
        text: newReply.trim(),
      },
    ]);
    setNewReply("");
  };

  const handleClose = () => {
    setTicket((t) => ({ ...t, status: "CLOSED" }));
  };

  const StatusBadge = ({ status }) => {
    const map = {
      OPEN: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      PENDING: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      CLOSED: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    };
    return (
      <span
        className={`text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded border ${map[status]}`}
      >
        {status}
      </span>
    );
  };

  const card =
    "rounded-xl border border-gray-300/40 dark:border-white/10 bg-white dark:bg-[#1d1933] shadow-sm";

  return (
    <div className="sm:ml-16 p-4 pt-[120px] md:px-10 lg:ml-10 md:ml-14 bg-white dark:bg-[#131129] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-6 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <div className={`${card} p-5`}>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-semibold">
                  {ticket.title}
                </h1>
                <StatusBadge status={ticket.status} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Posted on {ticket.createdAt}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-gray-300/50 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
                onClick={() => alert("Reported to moderators")}
              >
                <Flag size={14} /> Report
              </button>

              <button
                onClick={handleClose}
                disabled={ticket.status === "CLOSED"}
                className={`inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg transition
                  ${
                    ticket.status === "CLOSED"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-white/10 dark:text-gray-400"
                      : "bg-rose-600 text-white hover:opacity-90"
                  }`}
              >
                <X size={14} /> Close Ticket
              </button>
            </div>
          </div>

          <hr className="my-4 border-gray-200/60 dark:border-white/10" />

          <p className="text-sm text-gray-700 dark:text-gray-300">{ticket.body}</p>
        </div>

        {/* Add response */}
        <div className={`${card} p-5`}>
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 grid place-items-center text-indigo-300">
              {/* Placeholder user icon circle */}
              <span className="text-sm font-semibold">U</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Write a response…"
                rows={4}
                className="w-full rounded-lg bg-white dark:bg-[#0f0e1c] border border-gray-300 dark:border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3B82F6]"
              />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Be kind, follow the community rules.
                </span>
                <button
                  onClick={handleAddReply}
                  className="inline-flex items-center gap-2 bg-[#3B82F6] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90"
                >
                  <Send size={14} /> Add Response
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Replies */}
        <div className={`${card} p-5`}>
          <h3 className="text-sm font-semibold mb-4">Conversation</h3>

          <ul className="space-y-6">
            {replies.map((r) => (
              <li key={r.id} className="flex items-start gap-3">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{r.author}</p>
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                      {r.role}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {r.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    {r.text}
                  </p>

                  <div className="mt-2">
                    <button
                      onClick={() => alert("Reported")}
                      className="text-[11px] text-gray-500 hover:text-rose-400"
                    >
                      REPORT
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
