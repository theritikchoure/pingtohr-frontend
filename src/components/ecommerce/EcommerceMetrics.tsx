import {
 
  ArrowUpIcon,
  MailIcon,
  UserIcon,
} from "../../icons"; // Replace these with appropriate icons
import Badge from "../ui/badge/Badge";

export default function PingToHRMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* Emails Sent */ }
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <MailIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Emails Sent
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              200K+
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            18.4%
          </Badge>
        </div>
      </div>

      {/* HR Contacts Managed */ }
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <UserIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              HR Contacts
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              50K+
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            12.7%
          </Badge>
        </div>
      </div>
    </div>
  );
}
