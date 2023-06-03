const validation = (userData, errors, setErrors) => {
    if (!userData.username) setErrors({ ...errors, username: "Ingresa Email" });
    else if
        (userData.username.length > 35) setErrors({ ...errors, username: "Error de Longitud" });
    else if
        (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) setErrors({ ...errors, username: "Email Invalido" })
    else { setErrors({ ...errors, username: "" }) }

    if (!userData.password){setErrors({ ...errors, password: "Ingrese Contraseña" });}

    else if (userData.password.length > 1  || userData.password.length > 10) {
        setErrors({ ...errors, password: "Longitud invalida" });
    }
    else if (!/\d/.test(userData.password)) {
        setErrors({ ...errors, password: "Debe contener al menos un numero" });
    }
    else { setErrors({ ...errors, password: "" }) }

}

export default validation;
