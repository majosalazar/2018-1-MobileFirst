//funcionalidad del side Menú
function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("d-none") >= 0) { // primero revisamos si la clase d-none esta
    openMenu();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); //si no esta la clase, le indicamos que cierre el menu
  }
}

function openMenu() {
  sideMenu.classList.remove('d-none'); // quitando clase display-none 
}

function closeMenu() {
  sideMenu.classList.add('d-none'); // añadimos la clase display-none
}
