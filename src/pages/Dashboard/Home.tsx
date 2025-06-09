import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import { useEffect, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import { checkSMTPAuth, smtpAuth } from "../../api/endpoints/emails";

export default function Home() {

  const [ showModal, setShowModal ] = useState( false );
  const [ formData, setFormData ] = useState( { email: "", password: "" } );
  const [ loading, setLoading ] = useState( false );
  const [ smtpAuthVerified, setSmtpAuthVerified ] = useState<boolean>( false );
  const [ smtpStatus, setSmtpStatus ] = useState<"checking" | "authenticated" | "unauthenticated">( "checking" );

  useEffect( () => {
    checksmtpAuth();
  }, [] );
  
  const checksmtpAuth = async () => {
    try {
      const response = await checkSMTPAuth();

      console.log( response )

      setSmtpAuthVerified( response.data.success );
      if ( response.data.success ) {
        setSmtpStatus( "authenticated" );
      }
      // setSmtpStatus( response.data.success );
    } catch ( err ) {
      console.log( err )
      setSmtpAuthVerified( false );
    } finally {
      setLoading( false );
    }
  }

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setFormData( { ...formData, [ e.target.name ]: e.target.value } );
  };

  const handleConnect = async () => {
    setLoading( true );
    setSmtpAuthVerified( false );

    try {
      const response = await smtpAuth( formData.email, formData.password );

      console.log(response)

      setSmtpAuthVerified( response.data.success );
    } catch ( err ) {
      console.log(err)
      setSmtpAuthVerified( false );
    } finally {
      setLoading( false );
    }
  };


  return (
    <>
      <PageMeta
        title="PingToHR | Cold Email Platform"
        description="PingToHR is your all-in-one HR contact manager and cold email assistant. Automate outreach, track engagement, and boost your job search—all directly from your Gmail inbox."
      />

      
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between max-w-xl mx-auto my-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">SMTP Status</h3>
          <p className="text-sm text-gray-600">
            { smtpStatus === "checking" && "Checking SMTP authentication..." }
            { smtpStatus === "authenticated" && "Your Gmail is successfully authenticated for sending emails." }
            { smtpStatus === "unauthenticated" && "Your SMTP session has expired or is not connected." }
          </p>
        </div>

        { smtpStatus === "authenticated" && (
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
            ✅ Authenticated
          </span>
        ) }

        { smtpStatus === "unauthenticated" && (
          <button
            // onClick={ handleReauthenticate }
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
          >
            Re-authenticate
          </button>
        ) }
      </div>
      
      {!smtpAuthVerified && <div className="h-[80vh]  flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <button
          onClick={ () => setShowModal( true ) }
          className="px-8 py-4 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
        >
          Connect Gmail
        </button>


        { showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md relative">
              <h2 className="text-xl font-semibold text-center mb-4">Authenticate Gmail</h2>

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={ formData.email }
                onChange={ handleInputChange }
                className="w-full mb-3 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />

              <input
                name="password"
                type="password"
                placeholder="App Password"
                value={ formData.password }
                onChange={ handleInputChange }
                className="w-full mb-4 px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />

              <button
                onClick={ handleConnect }
                disabled={ loading }
                className="w-full py-2 bg-primary text-black font-medium rounded hover:bg-primary-dark transition"
              >
                { loading ? "Authenticating..." : "Connect" }
              </button>

              { smtpAuthVerified && (
                <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
                  { smtpAuthVerified }
                </p>
              ) }

              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                onClick={ () => setShowModal( false ) }
              >
                ✖
              </button>
            </div>
          </div>
        ) }

      </div> }

      { !smtpAuthVerified && <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div> }
    </>
  );
}
