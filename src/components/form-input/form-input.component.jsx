import "./form-input.styles.scss";
const FormInput = ({ label, ...otherprops }) => {
  // console.log(otherprops);
  return (
    <div className="group">
      <label
        className={`${
          otherprops.value.length ? "shrink " : ""
        } form-input-label`}
      >
        {label}
      </label>
      <input className="form-input" {...otherprops} />
    </div>
  );
};
export default FormInput;
