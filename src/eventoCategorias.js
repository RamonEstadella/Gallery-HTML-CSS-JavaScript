// AQUÍ queremos que al clicar sobre una categoria, se nos abra la GALERIA.

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => { // El evento se propaga a los HIJOS!
    e.preventDefault(); // para que NO nos suba la pagina hacia arriba!

    if (e.target.closest('a')) {
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';
    }
});

