import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { useState, useContext } from "react";
import {
  auth,
  signWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  SignAuthByEmailAndPassowrd,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;
  const clearForm = () => {
    setFormField(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
    // console.log(formFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignAuthByEmailAndPassowrd(email, password);
      clearForm();
    } catch (except) {
      if (except.code === "auth/wrong-password") {
        alert("wrong password");
      } else if (except.code === "auth/user-not-found") {
        alert("user not found");
      } else if (except.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else if (except.code === "auth/invalid-email") {
        alert("invalid email address");
      } else {
        console.log(except);
      }
    }
  };
  const logGoogleUser = async () => {
    const response = await signWithGooglePopup();
    // console.log(response);
    // const userDocref = await createUserDocumentFromAuth(response.user);
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button onClick={handleSubmit}>SIGN IN</Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
