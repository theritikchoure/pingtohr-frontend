import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

import Badge from "../../components/ui/badge/Badge";

interface EmailVerified {
    email: string,
    validFormat: boolean,
    isDisposable: boolean,
    hasMx: boolean,
    smtp: boolean,
    reason: string,
    canSend: boolean,
}

interface StatusIconProps {
    status: boolean;
}

// Define the table data using the interface
// const results: EmailVerified[] = [
//     {
//         email: "ritik.c@docfliq.com",
//         validFormat: true,
//         isDisposable: false,
//         hasMx: true,
//         smtp: false,
//         reason: "SMTP check failed.",
//         canSend: true,
//     },
//     {
//         email: "rahul.k@docfliq.com",
//         validFormat: true,
//         isDisposable: false,
//         hasMx: true,
//         smtp: false,
//         reason: "SMTP check failed.",
//         canSend: true,
//     },
// ];



const StatusIcon: React.FC<StatusIconProps> = ( { status } ) => {
    return (
        <span className={ `text-${status ? "green" : "red"}-500 font-bold` }>
            { status ? "✅" : "❌" }
        </span>
    );
};
  
export default function EmailVerifierList( { results } : {results: EmailVerified[]}) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <Table>
                    {/* Table Header */ }
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Email
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Format
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Disposable
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                MX Record
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                SMTP
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                can send
                            </TableCell>
                            <TableCell
                                isHeader
                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                            >
                                Reason
                            </TableCell>
                        </TableRow>
                    </TableHeader>

                    {/* Table Body */ }
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        { results?.length > 0 && results.map( ( email ) => (
                            <TableRow key={ email.email }>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    { email.email }
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <StatusIcon status={ email.validFormat } />
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <StatusIcon status={ email.isDisposable } />
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <StatusIcon status={ email.hasMx } />
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <StatusIcon status={ email.smtp } />
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    <StatusIcon status={ email.canSend } />
                                </TableCell>
                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                    { email.reason }
                                </TableCell>
                            </TableRow>
                        ) ) }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
  