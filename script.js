
function login() {

  let usuario = document.getElementById("usuario").value;

  if (usuario == "Javier" || usuario == "Maite") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Blanco";

    document.getElementById("pareja").innerHTML = "Maite y Javier"
  }

  else if (usuario == "José" || usuario == "Yurent") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Negro";

    document.getElementById("pareja").innerHTML = "José y Yurent"
  }

  else if (usuario == "Auria" || usuario == "Ulbio") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Azul";

    document.getElementById("pareja").innerHTML = "Auria y Ulbio";
  }

  else if (usuario == "Alejandra" || usuario == "Marlon") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Celeste";

    document.getElementById("pareja").innerHTML = "Alejandra y Marlon";
  }

  else if (usuario == "Liseth" || usuario == "Alex") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Rojo";

    document.getElementById("pareja").innerHTML = "Liseth y Alex"
  }

  else if (usuario == "Leonela" || usuario == "Fernando") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Vino";

    document.getElementById("pareja").innerHTML = "Leonela y Fernando"
  }

  else if (usuario == "Paulina" || usuario == "Jorge") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Verde";

    document.getElementById("pareja").innerHTML = "Paulina y Jorge"
  }

  else if (usuario == "Génesis" || usuario == "Eduardo") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Amarillo";

    document.getElementById("pareja").innerHTML = "Génesis y Eduardo"
  }

  else if (usuario == "Erika" || usuario == "Alexis") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Rosado";

    document.getElementById("pareja").innerHTML = "Erika y Alexis"
  }

  else if (usuario == "Paola" || usuario == "Jonathan") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Morado";

    document.getElementById("pareja").innerHTML = "Paola y Jonathan"
  }

  else if (usuario == "Cristian" || usuario == "Sttefany") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Marrón";

    document.getElementById("pareja").innerHTML = "Sttefany y Cristian";
  }

  else if (usuario == "Anthony" || usuario == "Luis") {
    const login = document.getElementById("login");
    login.style.display = "none";

    const page = document.getElementById("page");
    page.style.display = "block";

    document.getElementById("nombre").innerHTML = usuario;

    document.getElementById("color").innerHTML = "Blanco";

    document.getElementById("pareja").innerHTML = "Luis y Anthony"
  }

  else {
    alert("Lo siento, usuario no encontrado");
  }

}