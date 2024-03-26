import React from 'react'
import './Signup.css';

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setIsLoading(true);
    if (!username || !email || !password) {
      toast({
        title: "Please fill all the fields ",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setIsLoading(false);
      return;
    }

    console.log(username, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("Data to be sent:", { username, email, password });
      const { data } = await axios.post("http://localhost:5000/api/user", { username, email, password }, config);
      // const { data } = await axios.post("/api/user", { username, email, password }, config);
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="Signup-Box">
        <form onSubmit={submitHandler}>
          <h1>MoneyMinder</h1>
          <h2>SIGN UP</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              autoComplete="username"
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email-ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              autoComplete="new-password"
            />
          </div>
          <button type="submit">SIGN UP</button>
          <div className="register-link">
            <p>
              Already have an account?<Link to="/Signin">SIGN IN</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;