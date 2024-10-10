<script>
  // Selecciona el ícono de corazón y el contador const heartIcon =
  document.querySelector('.heart-icon'); const likesCount =
  document.getElementById('likes-count'); // Convierte el texto del contador de
  likes a número let likes = parseInt(likesCount.textContent.replace(',', ''));
  // Escucha el evento de clic en el ícono de corazón
  heartIcon.addEventListener('click', function (){" "}
  {
    // Incrementa el contador de likes
    likes++
  }
  ; // Actualiza el texto en la página con el nuevo número de likes
  likesCount.textContent = likes.toLocaleString(); // Convierte a formato con
  comas );
</script>;
