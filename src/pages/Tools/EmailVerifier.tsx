import { useState, ChangeEvent, FormEvent } from "react";
import PageMeta from "../../components/common/PageMeta";
import EmailVerifierList from "./EmailVerifierList";
import { validateEmails } from "../../api/endpoints/emails";

export default function BasicTables() {

    const [ emailInput, setEmailInput ] = useState( "" );
    const [ file, setFile ] = useState<File | null>( null );
    const [ fileName, setFileName ] = useState<string | null>( null );
    const [ results, setResults ] = useState( [] );

    const handleFileChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        const uploaded = e.target.files?.[ 0 ];
        if ( uploaded ) {
            const ext = uploaded.name.split( "." ).pop();
            if ( ext === "csv" || ext === "json" ) {
                setFile( uploaded );
                setFileName( uploaded.name );
            } else {
                alert( "Only CSV or JSON files are allowed." );
                setFile( null );
                setFileName( null );
            }
        }
    };

    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();
        const emails = emailInput
            .split( "," )
            .map( ( e ) => e.trim() )
            .filter( Boolean );
        
        const res = await validateEmails( emails );

        setResults( res.data.results );

        console.log( res );

        if ( file ) {
            console.log( "File to upload:", file );
        } else if ( emails.length > 0 ) {
            console.log( "Emails to validate:", emails );
        } else {
            alert( "Please provide emails or upload a file." );
        }
    };
    
    return (
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            {/* <PageBreadcrumb pageTitle="Email Verifier" /> */}


            <div className="rounded-lg bg-white p-6 shadow-card w-full mx-auto mt-10">
                <h2 className="text-2xl font-semibold text-black mb-6">📧 Email Validator</h2>

                <form onSubmit={ handleSubmit } className="space-y-6">
                    {/* Textarea input */ }
                    <div>
                        <label className="mb-2 block text-sm font-medium text-black">
                            Enter Emails (comma-separated)
                        </label>
                        <textarea
                            rows={ 4 }
                            className="w-full rounded border border-stroke bg-white py-3 px-4 text-sm text-black outline-none transition focus:border-primary focus-visible:shadow-none"
                            placeholder="e.g., test@example.com, user@domain.org"
                            value={ emailInput }
                            onChange={ ( e ) => setEmailInput( e.target.value ) }
                        />
                    </div>

                    {/* OR Divider */ }
                    <div className="text-center text-gray-500">— or —</div>

                    {/* File Upload */ }
                    <div>
                        <label className="mb-2 block text-sm font-medium text-black">
                            Upload File (.csv or .json)
                        </label>
                        <div className="relative flex w-full items-center justify-between rounded border border-dashed border-stroke bg-gray-50 p-4 hover:bg-gray-100">
                            <input title="sdf"
                                type="file"
                                accept=".csv,.json"
                                onChange={ handleFileChange }
                                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center gap-3 z-0">
                                {/* <FiUpload className="text-xl text-primary" /> */}
                                <p className="text-sm text-black">
                                    { fileName ? fileName : "Click or drag to upload .csv or .json file" }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit */ }
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-500 py-2 px-6 text-white font-semibold hover:bg-opacity-90 transition"
                    >
                        Validate Emails
                    </button>
                </form>
            </div>


            <EmailVerifierList results={results}/>
        </>
    );
}
