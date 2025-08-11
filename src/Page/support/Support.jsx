import { ChevronRight } from 'lucide-react'
import React from 'react'
import TicketsDashboard from '../../components/support/TicketsDashboard'

const Support = () => {
    const sampleTickets = [
  { id: 1, title: "I’m having issues claming with my daily hours", status: "OPEN", dateFormatted: "24 June 2024" },
  { id: 2, title: "Timesheet not saving", status: "OPEN", dateFormatted: "24 June 2024" },
  { id: 3, title: "Mobile app crash on submit", status: "OPEN", dateFormatted: "24 June 2024" },
];

  return (
   <div className="sm:ml-16 p-4 pt-[120px] lg:ml-10 bg-white dark:bg-[#131129] min-h-screen">
       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-28">
            <div>
              <h1 className="text-2xl font-bold">Support</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300">Welcome Ekash Finance Management</p>
            </div>

            <div className="flex items-center text-sm text-gray-500  dark:text-gray-300 mt-2 lg:mt-0">
              <p className="hover:underline cursor-pointer">Home</p>
              <ChevronRight className="mx-2 h-4 w-4" />
              <p className="font-medium text-blue-600 dark:text-blue-400">Support</p>
            </div>
          </div>
       

        <div className="md:px-28 mt-10 mb-5">
      <TicketsDashboard
        tickets={sampleTickets}
        notifications={[]}
        onCreate={() => console.log("create")}
        onClearNotifications={() => console.log("clear notifications")}
        onOpenTicket={(t) => console.log("open", t)}
      />
    </div>
      </div>
  )
}

export default Support