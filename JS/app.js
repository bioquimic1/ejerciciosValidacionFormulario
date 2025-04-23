document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let valido = true;
    limpiarErrores();

    // Captura de campos 
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const edad = document.getElementById('edad');
    const input = document.querySelectorAll('input');
     
 
    // Validar campos 
    if (nombre.value.length < 3) {
      mostrarError(nombre, 'El nombre debe tener al menos 3 caracteres');
      valido = false;
    } 
    if (email.value.trim() === '') {
      mostrarError(email, 'El email es obligatorio'  );
      valido = false;
    }
     
    if (password.value.length < 6) {
      mostrarError(password, 'La contraseña debe tener al menos 6 caracteres'   );
      valido = false;
    } 

    if (parseInt(edad.value) < 18) {
      mostrarError(edad, 'Debes ser mayor de 18 años'    );
      valido = false;
    }
  
    if (valido) {
      alert('¡Registro exitoso!');
       
    }
  });
  
  function mostrarError(input, mensaje) {
    input.classList.add('error');
    const error = document.createElement('div');
    error.className = 'error-message'; 
    
    const mensajeError = document.createElement('p');  
    mensajeError.textContent = mensaje;  
    mensajeError.style.color = 'red';  
    input.parentNode.appendChild(mensajeError);  
    
}

  function limpiarErrores() {
    document.querySelectorAll('.error-message').forEach(e => e.remove());
    document.querySelectorAll('input').forEach(i => i.classList.remove('error'));
    valido = true;
    
  }
  