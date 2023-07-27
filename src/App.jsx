import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleLogin
        onSuccess={(CredentialResponse) => {
          console.log(CredentialResponse);
        }}
        onError={() => {
          console.log("login failed");
        }}
      />
    </>
  );
}

export default App;
