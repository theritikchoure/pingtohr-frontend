import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";
import { useState } from "react";

export default function AccountSettings() {

    const [ resume, setResume ] = useState<File | null>( null );
    const [ uploadDate, setUploadDate ] = useState<Date | null>( null );

    const handleFileChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const file = e.target.files?.[ 0 ];
        if ( file && file.size <= 2 * 1024 * 1024 ) {
            setResume( file );
            setUploadDate( new Date() );
            console.log(uploadDate)
            // upload to server if needed
        } else {
            alert( "File too large. Max 2MB allowed." );
        }
    };

    const handleDownload = () => {
        if ( resume ) {
            const url = URL.createObjectURL( resume );
            const link = document.createElement( "a" );
            link.href = url;
            link.download = resume.name;
            link.click();
            URL.revokeObjectURL( url );
        }
    };

    const handleDelete = () => {
        setResume( null );
        setUploadDate( null );
        // call delete API if needed
    };



    return (
        <>
            <PageMeta
                title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Account Setting" />
         

            <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
                            Resume
                        </h4>

                        { resume ? (
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-800">{ resume.name }</p>
                                    <p className="text-sm text-gray-500">
                                        {/* Uploaded on { dayjs( uploadDate ).format( "MMM DD, YYYY" ) } */}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={ handleDownload }
                                        className="p-2 rounded-full hover:bg-gray-100 text-blue-600"
                                        title="Download"
                                    >
                                        {/* <FiDownload className="w-5 h-5" /> */}
                                    </button>
                                    <button
                                        onClick={ handleDelete }
                                        className="p-2 rounded-full hover:bg-gray-100 text-red-500"
                                        title="Delete"
                                    >
                                        {/* <FiTrash2 className="w-5 h-5" /> */}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-sm">No resume uploaded yet.</p>
                        ) }

                        <div className="border border-dashed border-gray-300 rounded-lg p-4 w-full text-center">
                            <label className="inline-block cursor-pointer text-blue-600 border border-blue-600 px-4 py-1 rounded-full hover:bg-blue-50">
                                Update resume
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx,.rtf"
                                    className="hidden"
                                    onChange={ handleFileChange }
                                />
                            </label>
                            <p className="text-sm text-gray-500 mt-2">
                                Supported Formats: <span className="font-medium">doc, docx, rtf, pdf</span>, up to 2 MB
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="space-y-6">
                <UserMetaCard />
                <UserInfoCard />
                <UserAddressCard />
            </div>
        </>
    );
}
