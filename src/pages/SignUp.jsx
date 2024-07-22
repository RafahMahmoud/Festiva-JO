

// import { auth } from "../firebase-config/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import axios from "axios";
// import GoogleButton from "react-google-button";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [registerName, setRegisterName] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Minimum eight characters, at least one letter and one number
//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return regex.test(password);
//   };

//   const register = async () => {
//     setError("");
//     if (!validateEmail(registerEmail)) {
//       setError("Invalid email format");
//       return;
//     }
//     if (!validatePassword(registerPassword)) {
//       setError("Password must be at least 8 characters long and include at least one letter and one number");
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );

//       const customersData = await axios.get("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json");
//       const customersLength = customersData.data ? Object.keys(customersData.data).length : 0;

//       await axios.put(
//         `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
//         {
//           active: true,
//           email: registerEmail,
//           isDeleted: false,
//           name: registerName,
//           password: registerPassword,
//           role: "Customer"
//         }
//       );

//       sessionStorage.setItem("register", customersLength);
//       navigate("/login");
//       console.log("User successfully registered:", userCredential.user);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     setError("");
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const customersData = await axios.get("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json");
//       const customersLength = customersData.data ? Object.keys(customersData.data).length : 0;

//       await axios.put(
//         `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
//         {
//           active: true,
//           email: user.email,
//           isDeleted: false,
//           name: user.displayName,
//           role: "Customer"
//         }
//       );

//       sessionStorage.setItem("register", customersLength);
//       // alert("Congratulations! You get a 10% discount.");
//       navigate("/login");
//       console.log("User signed in with Google:", user);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="pg-page flex items-center justify-center p-36">
//     <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h3 className="text-3xl font-bold mb-8 text-center">Register User</h3>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <input
//         id="RrgName"
//         type="text"
//         placeholder="Name..."
//         value={registerName}
//         onChange={(event) => setRegisterName(event.target.value)}
//         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         id="RrgEmail"
//         type="email"
//         placeholder="Email..."
//         value={registerEmail}
//         onChange={(event) => setRegisterEmail(event.target.value)}
//         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         id="RrgPassword"
//         type="password"
//         placeholder="Password..."
//         value={registerPassword}
//         onChange={(event) => setRegisterPassword(event.target.value)}
//         className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         onClick={register}
//         className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       >
//         Create User
//       </button>
//       <div className="flex justify-center mb-4">
//         <GoogleButton onClick={handleGoogleSignUp} />
//       </div>
//       <div className="mt-4 text-center">
//         <Link to="/login" className="text-blue-500 hover:underline">
//           <p>Already have an account?</p>
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignUp;


import { auth } from "../firebase-config/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Minimum eight characters, at least one letter and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const register = async () => {
    setError("");
    if (!validateEmail(registerEmail)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(registerPassword)) {
      setError("Password must be at least 8 characters long and include at least one letter and one number");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const customersData = await axios.get("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json");
      const customersLength = customersData.data ? Object.keys(customersData.data).length : 0;

      await axios.put(
        `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
        {
          active: true,
          email: registerEmail,
          isDeleted: false,
          name: registerName,
          role: "Customer"
        }
      );

      sessionStorage.setItem("register", customersLength);
      alert("Congratulations! You get a 10% discount. Your code for DISCOUNT is:DISCOUNT10");

      navigate("/login");
      console.log("User successfully registered:", userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const customersData = await axios.get("https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json");
      const customersLength = customersData.data ? Object.keys(customersData.data).length : 0;

      await axios.put(
        `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersLength}.json`,
        {
          active: true,
          email: user.email,
          isDeleted: false,
          name: user.displayName,
          role: "Customer"
        }
      );

      sessionStorage.setItem("register", customersLength);
      alert("Congratulations! You get a 10% discount.");
      navigate("/login");
      console.log("User signed in with Google:", user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="pg-page flex items-center justify-center p-36">
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h3 className="text-3xl font-bold mb-8 text-center text-page1">Sign Up </h3>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        id="RrgName"
        type="text"
        placeholder="Name..."
        value={registerName}
        onChange={(event) => setRegisterName(event.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="RrgEmail"
        type="email"
        placeholder="Email..."
        value={registerEmail}
        onChange={(event) => setRegisterEmail(event.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="RrgPassword"
        type="password"
        placeholder="Password..."
        value={registerPassword}
        onChange={(event) => setRegisterPassword(event.target.value)}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={register}
        className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        Sing Up
      </button>
      <div className="flex justify-center mb-4">
        <GoogleButton onClick={handleGoogleSignUp} />
      </div>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-blue-500 hover:underline">
          <p>Already have an account?</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
