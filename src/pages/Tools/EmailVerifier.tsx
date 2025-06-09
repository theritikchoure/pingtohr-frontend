import { useState, ChangeEvent, FormEvent } from "react";
import PageMeta from "../../components/common/PageMeta";
import EmailVerifierList from "./EmailVerifierList";
import { validateEmails } from "../../api/endpoints/emails";
import TextArea from "../../components/form/input/TextArea";
import FileInput from "../../components/form/input/FileInput";

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
            {/* <PageBreadcrumb pageTitle="Email Verifier" /> */ }


            { results.length < 1 && <div className="">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">📧 Email Validator</h2>

                <form onSubmit={ handleSubmit } className="space-y-6">
                    {/* Textarea input */ }
                    <div>
                        <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                            Enter Emails (comma-separated)
                        </label>
                        {/* <textarea
                            rows={ 4 }
                            className="text-black dark:text-white w-full rounded border border-stroke py-3 px-4 text-sm outline-none transition focus:border-primary dark:border-secondary focus-visible:shadow-none"
                            placeholder="e.g., test@example.com, user@domain.org"
                            value={ emailInput }
                            onChange={ ( e ) => setEmailInput( e.target.value ) }
                        /> */}
                        <TextArea placeholder="e.g., test@example.com, user@domain.org"
                            value={ emailInput } onChange={ ( value ) => setEmailInput( value ) } />
                    </div>

                    {/* OR Divider */ }
                    <div className="text-center text-gray-500">— or —</div>

                    {/* File Upload */ }
                    <div>
                        <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                            Upload File (.csv or .json)
                        </label>
                        <div className="relative w-full items-center justify-between rounded">
                            {/* <input title="sdf"
                                type="file"
                                accept=".csv,.json"
                                onChange={ handleFileChange }
                                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                            /> */}
                            <FileInput onChange={ handleFileChange } accept=".csv,.json" />
                            <p className="text-sm text-black mt-2 dark:text-white italic">
                                { fileName ? fileName : "(Click or drag to upload .csv or .json file)" }
                            </p>
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
            </div> }


            { results.length > 0 && (
                <>
                    <p className="text-blue-500 underline cursor-pointer" onClick={ () => {
                        setResults( [] );
                        setEmailInput( '' );
                        setFile( null );
                    }}>Revalidate</p>
                    <EmailVerifierList results={ results } />
                </>
            ) }
        </>
    );
}
