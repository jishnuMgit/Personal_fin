// TicketsDashboard.jsx
import { Plus, Bell, ChevronRight, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const card =
  "bg-white dark:bg-[#1d1933] rounded-lg shadow-sm dark:border-none border border-gray-500";

const Section = ({ title, action, children }) => (
  <section className={`${card} p-5`}>
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {action}
    </div>
    {children}
  </section>
);

const StatusBadge = ({ status = "OPEN" }) => (
  <span className="ml-2 text-[10px] font-semibold tracking-wide dark:text-white text-black bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 rounded px-1.5 py-0.5">
    {status}
  </span>
);

export default function TicketsDashboard({
  tickets = [],
  notifications = [],
  onClearNotifications = () => {},
  onOpenTicket = () => {},
}) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Your Ticket */}
      <Section
        title="Your Ticket"
        action={
          <button
            onClick={() => navigate("/createTicket")}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       bg-[#3B82F6] text-white hover:opacity-90 transition"
          >
            <Plus size={16} /> Create Ticket
          </button>
        }
      >
        {tickets.length === 0 ? (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 py-4">
            You have no ticket yet! Create one by hitting the{" "}
            <button
              onClick={() => navigate("/createTicket")}
              className="text-[#3B82F6] underline underline-offset-2"
            >
              Create Button
            </button>
            .
          </p>
        ) : (
          <ul className="divide-y divide-gray-200/10">
            {tickets.slice(0, 1).map((t) => (
              <li key={t.id} className="py-3">
                <div className="text-sm dark:text-white text-black">{t.title}</div>
                <div className="text-xs text-gray-400">
                  Posted on {t.dateFormatted}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* Ticket Notification */}
      <Section
        title="Your Ticket Notification"
        action={
          <button
            onClick={onClearNotifications}
            className="text-xs font-semibold text-[#F59E0B] hover:opacity-90"
          >
            Clear All Notification
          </button>
        }
      >
        {notifications.length === 0 ? (
          <div className="flex items-center gap-2 text-xs text-gray-400 py-3">
            <AlertCircle size={14} className="text-gray-500" />
            Opps sorry, There are no notification to show
          </div>
        ) : (
          <ul className="space-y-2">
            {notifications.map((n) => (
              <li
                key={n.id}
                className="flex items-center gap-2 text-sm text-gray-200"
              >
                <Bell size={14} className="text-[#F59E0B]" /> {n.text}
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* Recent Tickets */}
      <Section title="Recent Tickets">
        {tickets.length === 0 ? (
          <p className="text-xs text-gray-500 dark:text-gray-400 py-3">
            No recent tickets.
          </p>
        ) : (
          <ul className="divide-y divide-gray-200/10">
            {tickets.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => onOpenTicket(t)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div>
                    <div className="text-sm font-medium dark:text-white text-black">
                      {t.title}
                      <StatusBadge status={t.status} />
                    </div>
                    <div className="text-xs text-gray-400">
                      Posted on {t.dateFormatted}
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </div>
  );
}
