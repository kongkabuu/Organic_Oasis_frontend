import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <>
      <h1>welcome to the login page</h1>
      <GoogleLogin
        onSuccess={(CredentialResponse) => {
          console.log(CredentialResponse);
        }}
        onError={() => {
          console.log("login failed");
        }}
      />
      <p>
        register here<Link to="/sign-up">Register</Link>
      </p>
    </>
  );
}
