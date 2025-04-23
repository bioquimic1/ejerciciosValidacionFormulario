## Creación de un formulario básico:
### Objetivo: 
Construir un formulario de registro sencillo con los siguientes campos:
 - Nombre (input de texto)
 - Email (input de tipo email)
 - Contraseña (input de tipo password)
 - Edad (input de tipo number)
 - Botón de envío
### Instrucciones:
 - Creo fichero index.html
 - - snnippet html:5
 - - cambio idioma 
 - - Cambio titulo : Validación formularios con JS
 - Creo fichero CSS/style.css
 - - Vinculo el fichero con el index.html mediante una etiqueta link
 - Creo fichero JS/app.js
 - - Vinculo el fichero con el index.html mediante una etiqueta script
 - Estructura html semantico:
 - - Creo un **header**, un **main** y un **footer**. 
 - - Entre **main** Establezco las etiquetas del formulario:
 - - - **label** Para Texto 
 - - - atributo for para vincular label con su input.
 - - - **input** Para campos.  
 - - - a cada campo asignamos el atributo type, id, name, placeholder.
 - - - el atributo placeholder es opcional, pero aporta usabilidad.
 - - - los inputs son required.
## Estilizando el formulario con CSS
### Objetivo:
Aplicar estilos para mejorar la apariencia del formulario.

### Instrucciones:
 - Establezco el reset.css 
 - Aplico los estilos al  formulario: 
 - - etiquetas html : header, footer, main
 - - etiquetas formulario: label, input, button
 - - algunas clases y eventos:  :focus, .error
 

## Validación de formulario con Javascript
### Objetivo: 
Validar los campos del formulario antes de enviarlo usando JavaScript.

### Instrucciones: 
- Prevenir el envio del formulario con event.preventDefault()
 - - Validamos nombre con mínimo 3 caracteres
 - - Email ya valida con el campo HTML
 - - Contraseña con al menos 6 caracteres
 - - Edad tiene que ser mayor de 18 años
 - Mostrar mensaje de error junto a cada campo
 - Resaltar los campos de error usando CSS.