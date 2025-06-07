import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import Badge from "../components/ui/badge/Badge";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import { Modal } from "../components/ui/modal";
import Button from "../components/ui/button/Button";
import { useModal } from "../hooks/useModal";

// Define the TypeScript interface for the table rows
interface Contact {
    id: number; // Unique identifier for each product
    name: string; // Product name
    email: string; // Number of variants (e.g., "1 Variant", "2 Variants")
    company: string; // Category of the product
}

// Define the table data using the interface
const contacts: Contact[] = [
    {
        id: 1,
        name: "Ritik",
        email: "softawereeng.ritik@gmail.com",
        company: "docfliq"
    },
    {
        id: 2,
        name: "Aastha",
        email: "aastha.shukla@example.com",
        company: "techverse"
    },
    {
        id: 3,
        name: "Aryan",
        email: "aryan.dev@example.com",
        company: "codemode"
    },
    {
        id: 4,
        name: "Sneha",
        email: "sneha.frontend@example.com",
        company: "uxmagic"
    },
    {
        id: 5,
        name: "Kabir",
        email: "kabir.nodejs@example.com",
        company: "backendify"
    },
    {
        id: 6,
        name: "Priya",
        email: "priya.ds@example.com",
        company: "algoworks"
    },
    {
        id: 7,
        name: "Nikhil",
        email: "nikhil.qa@example.com",
        company: "testlabz"
    },
    {
        id: 8,
        name: "Tanya",
        email: "tanya.uiux@example.com",
        company: "pixelhub"
    },
    {
        id: 9,
        name: "Rohan",
        email: "rohan.ml@example.com",
        company: "neuralnode"
    },
    {
        id: 10,
        name: "Divya",
        email: "divya.cloud@example.com",
        company: "skyhost"
    }
];

export default function Contacts() {

      const { isOpen, openModal, closeModal } = useModal();
      const handleSave = () => {
        // Handle save logic here
        console.log("Saving changes...");
        closeModal();
    };
    
    return (
        <>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                            Contacts
                        </h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            <svg
                                className="stroke-current fill-white dark:fill-gray-800"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.29004 5.90393H17.7067"
                                    stroke=""
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17.7075 14.0961H2.29085"
                                    stroke=""
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                                    fill=""
                                    stroke=""
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                                    fill=""
                                    stroke=""
                                    strokeWidth="1.5"
                                />
                            </svg>
                            Filter
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            See all
                        </button>
                        <button onClick={ openModal } className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                            Add Contact
                        </button>
                    </div>
                </div>
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        {/* Table Header */ }
                        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Sr. No.
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    email
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Company
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */ }

                        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                            { contacts.map( ( contact, idx ) => (
                                <TableRow key={ contact.id } className="">
                                    <TableCell className="py-3">
                                        { idx + 1 }
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        { contact.name }
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        { contact.email }
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        { contact.company }
                                    </TableCell>
                                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        <Badge>Email</Badge>
                                    </TableCell>
                                </TableRow>
                            ) ) }
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Modal isOpen={ isOpen } onClose={closeModal} className="max-w-[700px] m-4">
                <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Contact
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Update your details to keep your profile up-to-date.
                        </p>
                    </div>
                    <form className="flex flex-col">
                        <div className="px-2 overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div>
                                    <Label>Name</Label>
                                    <Input type="text" value="" placeholder="Name" />
                                </div>

                                <div>
                                    <Label>Email</Label>
                                    <Input type="email" value="" placeholder="Email" />
                                </div>

                                <div>
                                    <Label>Company</Label>
                                    <Input type="text" value="" placeholder="Company" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={ closeModal }>
                                Close
                            </Button>
                            <Button size="sm" onClick={ handleSave}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
