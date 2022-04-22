import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/index";
import Loader from "../Loader/Loader";
import styles from "./Login.module.css";
import NavBar from "../NavBar/NavBar";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: true,
    password: true,
  });
  const [errorIncorrect, setErrorIncorrect] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const makedispatch = (e) => {
    e.preventDefault();
    setSuccess(true);
    dispatch(loginUser(input))
    .then((res) => {
        setInput({
          email: "",
          password: "",
        });
        setSuccess(false);
        setErrorIncorrect(false);
        window.location.href = "http://localhost:3000/home";
    })
    .catch(e=>{
      setSuccess(false);
      setErrorIncorrect(true);
    })
  };

  function validate_password(str) {
    let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    return !!pattern.test(str);
  }

  function validate_email(str) {
    let pattern = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    return !!pattern.test(str);
  }

  function validate(ipname, ipvalue) {
    if (ipname === "email") {
      validate_email(ipvalue) === true
        ? setError({ ...error, email: false })
        : setError({ ...error, email: true });
    }
    if (ipname === "password") {
      validate_password(ipvalue) === true
        ? setError({ ...error, password: false })
        : setError({ ...error, password: true });
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate(e.target.name, e.target.value);
  };

  return (
    <div>
      <div className={styles.divbtt}>
          <NavBar/>
      </div>

      <div className={styles.page}>
        <form className={styles.form} onSubmit={(e) => makedispatch(e)}>
          <div className={styles.title}>Login</div>
          <input
            className={styles.input}
            value={input.email}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.input}
            value={input.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          ></input>
          <div>
            {error.email === true || error.password === true ? (
              <button className={styles.buttondis} disabled type="submit">
                Sign in
              </button>
            ) : (
              <button className={styles.button} type="submit">
                Sign in
              </button>
            )}
          </div>
          {errorIncorrect === true ? (
            <p className={styles.errors}>No puede iniciar sesión con las credenciales proporcionadas</p>
          ) : (
            <></>
          )}
        </form>
      </div>
      {success === true ? <Loader /> : <></>}
    </div>
  );
};
export default Login;
