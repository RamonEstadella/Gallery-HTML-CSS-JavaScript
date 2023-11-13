// TODO PERQUÈ VOLEM INSERTAR EL CODI HTML AMB JAVASCRIPT?

import dataCategorias from './datos/categorias'; // 
const {categorias} = dataCategorias; // Desestructuración de objetos. Extraemos la propiedad "categorias" de un objecto llamado "dataCategorias", y se asigna a una variable llamada "categorias".
const contenedorCategorias = document.getElementById('categorias'); // Cogemos el codigo HTML con ID = categorias

categorias.forEach((categoria) => { // Por cada categoria (del Array) ejecutamos este codigo:
    const nuevaCategoria = document.createElement('a'); // Creamos un enlaze en el HTML
    const plantilla = ` 
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
    `; // Creamos una plantilla de código HTML

    nuevaCategoria.innerHTML = plantilla; // insertamos el codigo HTML creado antes en el HTML
    nuevaCategoria.classList.add('categoria'); // añadimos una clase
    nuevaCategoria.href = "#"; // añadimos un href al enlaze
    nuevaCategoria.dataset.categoria = categoria.id; // 

    contenedorCategorias.append(nuevaCategoria); // Añadimos el código creado al contenedor de ID=categorias 
});