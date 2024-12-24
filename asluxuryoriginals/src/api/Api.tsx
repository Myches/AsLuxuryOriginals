import { data } from "react-router-dom";

const Api_Base_URL = "https://asluxeryoriginals.pythonanywhere.com";

// interface TokenResponse {
//   access: string;
//   refresh: string;
//   token: string;
// }

// export const getToken = () => localStorage.getItem("token");
// export const setToken = (token) => localStorage.setItem("token", token);
// export const removeToken = () => localStorage.removeItem("token");

export const Login = async (formData) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // const data: TokenResponse = await response.json();
    // if (data.token) {
    //   setToken(data.token);
    // }
    if (!response.ok) {
      throw new Error("sign-up failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export default Login;

export const Signup = async (formData) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/signup/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // const data: TokenResponse = await response.json();
    // if (data.access) {
    //   setToken(data.access);
    // }
    // return await response.json()
    if (!response.ok) {
      throw new Error("sign-up failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Sign-up Error:", error);
    throw error;
  }
};

export const SignOut = () => {
  localStorage.removeItem("token")
};

export const CheckOTP = async (otpData) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/CheckOTP/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(otpData),
    });
    return await response.json();
  } catch (error) {
    console.error("Check-OTP Error:", error);
    throw error;
  }
};

export const CheckSignUpOTP = async (otpData) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/Check_signup_otp/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(otpData),
    });
    return await response.json();
  } catch (error) {
    console.error("Check_SignUp-OTP Error:", error);
    throw error;
  }
};

export const RefreshToken = async (token) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/token/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    });
    return await response.json();
  } catch (error) {
    console.error("Token Error:", error);
    throw error;
  }
};

export const ForgotPassword = async (email) => {
  try {
    const response = await fetch(`${Api_Base_URL}/auth/forgot_password/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });
    return await response.json();
  } catch (error) {
    console.error("Forgot Password Error:", error);
    throw error;
  }
};
