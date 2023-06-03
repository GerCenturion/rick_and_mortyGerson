import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";


const Form = ({login}) => {
    const [ userData, setUserData ] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    const hanleInpuntChange = (event) => { 
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]:value})
        validation({...userData,[property]:value}, errors, setErrors)
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        login(userData);

    }
    return (
        <div className={styles.form}>
            < form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={userData.username} onChange={hanleInpuntChange}></input>
                    <p>{errors.username}</p>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={hanleInpuntChange}></input>
                    <p>{errors.password}</p>
                </div>
                <button>LOGIN</button>

            </form >
        </div>
    )

}

export default Form