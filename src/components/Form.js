// import css modules
import cssModules from "./Form.module.css";

function Form() {
  return (
    <div>
      <form className="form">
        <div className="formGroup">
          <label htmlFor="username" className="formLabel">
            Username
          </label>
          <input
            id="username"
            placeholder="Your Username"
            className="formInput"
          />
        </div>
        <div className={cssModules.formGroup}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className={cssModules.formInput}
          />
        </div>
        {/* code here */}
        <div className="formGroup">
          <label htmlFor="password" className="formLabel">
            Password
          </label>
          <input
            id="password"
            placeholder="Your Password"
            className="formInput"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
