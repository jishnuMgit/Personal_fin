// src/pages/TicketsPage.jsx
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const card =
  "rounded-xl border border-gray-200/10 dark:border-transparent shadow-sm bg-white dark:bg-[#1d1933]";

const StatusBadge = ({ status = "OPEN" }) => {
  const styles = {
    OPEN: "text-white bg-emerald-600/20 border border-emerald-500/30",
    CLOSED: "text-white bg-gray-500/20 border border-gray-400/30",
    PENDING: "text-white bg-amber-500/20 border border-amber-400/30",
  };
  return (
    <span
      className={`ml-3 text-[11px] px-2 py-[2px] rounded font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const TicketsPage = ({
  tickets = [
    {
      id: "t1",
      title: "I’m having issues claming with my daily hours",
      status: "OPEN",
      postedOn: "Posted on 24 June 2024",
    },
    {
      id: "t2",
      title: "I’m having issues claming with my daily hours",
      status: "OPEN",
      postedOn: "Posted on 24 June 2024",
    },
    {
      id: "t3",
      title: "I’m having issues claming with my daily hours",
      status: "OPEN",
      postedOn: "Posted on 24 June 2024",
    },
  ],
}) => {
  const navigate = useNavigate();

  return (
    <div className="sm:ml-16 p-4 pt-[120px] md:px-10 lg:ml-10 md:ml-14 bg-white dark:bg-[#131129] min-h-screen">
      <div className="max-w-7xl mx-auto text-black dark:text-white">
        {/* Card */}
        <section className={`${card} p-5 md:p-6 border border-gray-600 `}>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg md:text-xl font-semibold">Your Ticket</h2>
            <button
              onClick={() => navigate("/createTicket")}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#3B82F6] text-white hover:opacity-90"
            >
              Create Ticket
            </button>
          </div>

          {/* List */}
          <ul className="divide-y divide-gray-200/10">
            {tickets.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => navigate(`/tickets/${t.id}`)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div>
                    <div className="flex items-center">
                      <span className="text-base md:text-lg font-semibold">
                        {t.title}
                      </span>
                      <StatusBadge status={t.status} />
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {t.postedOn}
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-300" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TicketsPage;
