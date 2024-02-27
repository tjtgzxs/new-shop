import { useState, useContext } from "react";
import {
  createAuthFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Buttion from "../button/button.component";
import "./sign-up.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const clearForm = () => {
    setFormField(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password  do not match");
      return;
    }
    try {
      const auth = await createAuthFromEmailAndPassword(email, password);
      const userDoc = await createUserDocumentFromAuth(auth.user, {
        displayName: displayName,
      });
      clearForm();
    } catch (except) {
      if (except.code === "auth/email-already-in-use") {
        alert("cannot create user ,email already in use");
      } else if (except.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log(`user createion encountered an error`, except);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="ConfirmPassword"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Buttion type="submit" buttonType="google">
          Sign up
        </Buttion>
      </form>
    </div>
  );
};

export default SignUpForm;
