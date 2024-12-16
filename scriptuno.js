<script>
console.log("Hola, mundo desde JavaScript");


    function cerrarAnotaciones() {
        const anotaciones = document.getElementById('anotaciones');
        anotaciones.style.display = 'none'; // Oculta la sección de anotaciones
        localStorage.setItem('anotacionesCerradas', 'true'); // Guarda en el navegador que el usuario la cerró
    }

    // Al cargar la página, verifica si se cerraron las anotaciones
    window.onload = function() {
        if (localStorage.getItem('anotacionesCerradas') === 'true') {
            document.getElementById('anotaciones').style.display = 'none';
        }
    };
</script>
