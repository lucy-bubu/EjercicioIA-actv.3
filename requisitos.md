nombre del juego;
entre 5 y 8 preguntas con cuatro opciones cada una;
sistema de puntuación;
condición de finalización y botón para reiniciar;
diseño responsive y navegación con teclado;
tecnologías: un index.html, un styles.css y un app.js;
prohibición de librerías, imágenes remotas y datos personales.
ERRORES CORREGIDOS:
- No se enlazó <button id="next-button"> del HTML y la función nextQuestion() con el evento de escucha. Así que añadí la línea: nextButton.addEventListener("click", nextQuestion);
- Algunas secciones del código dentro de los bucles current.answers.forEach tenían errores de sintaxis. Me aseguré de unificar y limpiar la estrutctura de la función showQuestion() y checkAnswer(), así cómo la creación de elementos dinámicos y la asignación de atributos e inserción de nodos.
- Controlé el estado con una bandera (answered = false) que cambia a true al responder. Así, en cuanto el usuario elige una opción, recorro todos los radio buttons y les activo el disabled = true para bloquear cualquier doble clic o cambio de opinión.