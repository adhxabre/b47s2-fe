// create style here
const style = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#212523",
    backgroundColor: "#fff",
    border: "1px solid black",
    borderRadius: ".325rem",
  },
};

// create Form component
function Form() {
  return (
    // code inside div
    <div>
      {/* form */}
      <form style={style.form}>
        <div style={style.formGroup}>
          <label htmlFor="username" style={style.formLabel}>
            Username
          </label>
          <input
            style={style.formInput}
            id="username"
            type="text"
            placeholder="Your Username"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
