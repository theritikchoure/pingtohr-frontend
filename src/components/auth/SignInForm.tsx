import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";
import { login } from "../../api/endpoints/auth";

export default function SignInForm() {
  const [ showPassword, setShowPassword ] = useState( false );
  const [ isChecked, setIsChecked ] = useState( false );

  const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ error, setError ] = useState( "" );
  const [ loading, setLoading ] = useState( false );

  const handleSubmit = async ( e: React.FormEvent ) => {
    e.preventDefault();
    setError( "" );

    if ( !email || !password ) {
      setError( "Email and password are required." );
      return;
    }

    try {
      setLoading( true );
      const res = await login( email, password );
      // const res = await axios.post( "/api/auth/login", { email, password } );

      // Example: Store access token in localStorage
      localStorage.setItem( "accessToken", res.data.accessToken );
      localStorage.setItem( "user", JSON.stringify(res.data.user) );
      // Redirect user or show success message
      window.location.href = "/dashboard"; // Change route accordingly
    } catch ( err: any ) {
      setError( err?.response?.data?.message || "Login failed" );
    } finally {
      setLoading( false );
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to home
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={ handleSubmit }>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{ " " }
                  </Label>
                  <Input placeholder="info@gmail.com" value={ email }
                    onChange={ ( e: any ) => setEmail( e.target.value ) }
                    type="email" />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{ " " }
                  </Label>
                  <div className="relative">
                    <Input
                      type={ showPassword ? "text" : "password" }
                      placeholder="Enter your password"
                      value={ password }
                      onChange={ ( e: any ) => setPassword( e.target.value ) }
                    />
                    <span
                      onClick={ () => setShowPassword( !showPassword ) }
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      { showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) }
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={ isChecked } onChange={ setIsChecked } />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                { error && (
                  <div className="text-sm text-red-500 dark:text-red-400">
                    { error }
                  </div>
                ) }
                <div>
                  <Button className="w-full" size="sm" disabled={ loading }>
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? { "" }
                <Link
                  to="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
