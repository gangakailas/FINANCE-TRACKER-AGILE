import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
// import { useToast } from "@chakra-ui/react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { toast, ToastContainer } from "react-toastify"; // Corrected import statement
import "react-toastify/dist/ReactToastify.min.css";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null); // Define user state
  // const [successMessage, setSuccessMessage] = useState(""); // Define state for success message
  // const toast = useToast();
  // eslint-disable-next-line no-unused-vars
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
   
    console.log("Submit handler called");
    setIsLoading(true);
    if (!email || !password) {
       toast({
         title: "Please Fill all the Fields",
         status: "warning",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
       setIsLoading(false);
       return;
    }
   
    try {
       const config = {
         headers: {
           "Content-type": "application/json",
         },
       };
   
       const { data } = await axios.post(
         "http://localhost:5000/api/user/login",
         { email, password },
         config
       );
   
       toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
       setUser(data);
       localStorage.setItem("userInfo", JSON.stringify(data));
       setIsLoading(false);
       navigate("/dashboard");
    } catch (error) {
       // Improved error handling
       if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         console.log(error.response.data);
         console.log(error.response.status);
         console.log(error.response.headers);
   
         // Display a toast with the error message if available
         if (error.response.data && error.response.data.message) {
           toast({
             title: "Error Occured!",
             description: error.response.data.message,
             status: "error",
             duration: 5000,
             isClosable: true,
             position: "bottom",
           });
         } else {
           // Fallback to a generic error message if no specific message is provided
           toast({
             title: "Error Occured!",
             description: "An error occurred during login. Please try again.",
             status: "error",
             duration: 5000,
             isClosable: true,
             position: "bottom",
           });
         }
       } else if (error.request) {
         // The request was made but no response was received
         console.log(error.request);
         toast({
           title: "Error Occured!",
           description: "No response received from the server. Please try again.",
           status: "error",
           duration: 5000,
           isClosable: true,
           position: "bottom",
         });
       } else {
         // Something happened in setting up the request that triggered an Error
         console.log('Error', error.message);
         toast({
           title: "Error Occured!",
           description: "An unexpected error occurred. Please try again.",
           status: "error",
           duration: 5000,
           isClosable: true,
           position: "bottom",
         });
       }
       setIsLoading(false);
    }
   };
   

  return (
    <div className="signin-container">
      <ToastContainer />
      <div className="Signin-Box">
        <form onSubmit={submitHandler}>
          <h1>MoneyMinder</h1>
          <h2>SIGN IN</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email-ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email" // Added id attribute
              name="email" // Added name attribute
              autoComplete="email" // Added autocomplete attribute
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" // Added id attribute
              name="password" // Added name attribute
              autoComplete="current-password" // Added autocomplete attribute
            />
          </div>
          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">SIGN IN</button>
          <div className="register-link">
            <p>
              Don&apos;t have an account?<Link to="/Signup">SIGN UP</Link>
            </p>
          </div>
        </form>
        {/* {successMessage && <p>{successMessage}</p>} Conditionally render success message */}
      </div>
    </div>
  );
};
