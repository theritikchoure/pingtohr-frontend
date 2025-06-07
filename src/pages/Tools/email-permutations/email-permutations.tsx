import { useState } from "react";
import { generateEmailPermutations } from "../../../api/endpoints/emails";


export default function EmailPermutations() {
    const [ firstName, setFirstName ] = useState( "" );
    const [ lastName, setLastName ] = useState( "" );
    const [ domain, setDomain ] = useState( "" );
    const [ emails, setEmails ] = useState( [] );

    const handleGenerate = async () => {
        if ( !firstName || !lastName || !domain ) {
            alert( "Please fill all fields." );
            return;
        }

        const emails = await generateEmailPermutations( firstName, lastName, domain );

        console.log( emails );
        setEmails(  emails.data.data);
    };

    const [ copiedEmailIndex, setCopiedEmailIndex ] = useState<number | null>( null );
    const [ copiedAll, setCopiedAll ] = useState( false );

    const copyToClipboard = ( text:string, index:number|null ) => {
        navigator.clipboard.writeText( text ).then( () => {
            if ( index !== null ) {
                setCopiedEmailIndex( index );
                setTimeout( () => setCopiedEmailIndex( null ), 2000 );
            } else {
                setCopiedAll( true );
                setTimeout( () => setCopiedAll( false ), 2000 );
            }
        } );
    };

    return (
        <div className="p-10">
            <h1 className="text-lg font-semibold mb-12">
                Corporate Email Permutations
            </h1>

            <div className="flex flex-wrap gap-4 items-end w-full max-w-7xl">
                <div className="flex-1 min-w-[180px]">
                    <label
                        htmlFor="firstName"
                        className="block text-gray-700 font-semibold mb-2 text-md"
                    >
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={ firstName }
                        onChange={ ( e ) => setFirstName( e.target.value ) }
                        placeholder="John"
                        className="w-full rounded-lg border border-gray-300 px-4 py-1 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    />
                </div>

                <div className="flex-1 min-w-[180px]">
                    <label
                        htmlFor="lastName"
                        className="block text-gray-700 font-semibold mb-2 text-md"
                    >
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={ lastName }
                        onChange={ ( e ) => setLastName( e.target.value ) }
                        placeholder="Doe"
                        className="w-full rounded-lg border border-gray-300 px-4 py-1 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    />
                </div>

                <div className="flex-1 min-w-[180px]">
                    <label
                        htmlFor="domain"
                        className="block text-gray-700 font-semibold mb-2 text-md"
                    >
                        Domain
                    </label>
                    <input
                        id="domain"
                        type="text"
                        value={ domain }
                        onChange={ ( e ) => setDomain( e.target.value ) }
                        placeholder="example.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-1 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                    />
                </div>

                <div className="min-w-[180px]">
                    <button
                        onClick={ handleGenerate }
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 rounded-xl text-md shadow-md transition"
                    >
                        Generate Emails
                    </button>
                </div>
            </div>


            { emails.length > 0 && (
                <div className="mt-14 w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">
                            Possible Emails:
                        </h2>
                        <button
                            onClick={ () => copyToClipboard( emails.join( ", " ) , null) }
                            className="text-sm bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            { copiedAll ? "Copied!" : "Copy All" }
                        </button>
                    </div>

                    <table className="w-full text-left text-gray-800 font-mono text-md max-h-96 overflow-y-auto">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="py-3 px-4">No.</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4 text-center w-24">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { emails.map( ( email, idx ) => (
                                <tr
                                    key={ idx }
                                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                                >
                                    <td className="py-3 px-4 break-words">{ idx+1 }</td>
                                    <td className="py-3 px-4 break-words">{ email }</td>
                                    <td className="py-3 px-4 text-center">
                                        <button
                                            onClick={ () => copyToClipboard( email, idx ) }
                                            className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 shadow-sm transition"
                                        >
                                            { copiedEmailIndex === idx ? "Copied!" : "Copy" }
                                        </button>
                                    </td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>

                </div>
            ) }
        </div>
    );
}
