let usuario;
let contraseña;

function login() {    
usuario = prompt(`Ingrese nombre de usuario`);
contraseña = prompt(`Ingrese contraseña`);
};

function validate(){
    if (usuario!=="admin" || contraseña!=="1234"){
        alert("usuario o contraseña incorrecta");
        login();
        validate();
    }
    else {
        alert("bienvenido al sistema");
    }
};
    
login();
validate();
