const envioForm = async (form) => {
  try {
    const post = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      form
    );
    return post;
  } catch (error) {
    alert(error);
  }
};

window.onload = () => {
  const buttonBurger = document.getElementsByClassName("navbar-burger");
  const buttonBurgerX = document.getElementsByClassName("navbar-burger-x");

  buttonBurger[0].addEventListener("click", (event) => {
    event.preventDefault();

    const navbarLinksburger = window.document.getElementsByClassName(
      "navbar-links-menu-mobile"
    );

    navbarLinksburger[0].style.display = "flex";

    const navbarlogo = window.document.getElementsByClassName("navbar-burger");

    navbarlogo[0].style.display = "none";

    const navbarlogo2 =
      window.document.getElementsByClassName("navbar-burger-x");

    navbarlogo2[0].style.display = "flex";
  });

  buttonBurgerX[0].addEventListener("click", (event) => {
    event.preventDefault();

    const navbarLinksburger = window.document.getElementsByClassName(
      "navbar-links-menu-mobile"
    );

    navbarLinksburger[0].style.display = "none";

    const navbarlogo = window.document.getElementsByClassName("navbar-burger");

    navbarlogo[0].style.display = "flex";

    const navbarlogo2 =
      window.document.getElementsByClassName("navbar-burger-x");

    navbarlogo2[0].style.display = "none";
  });

  //************************envio do Form***********************//

  const form = document.querySelector("form");
  const formMensagem = [form[0].value, form[1].value, form[2].value];

  const formSubmit = {
    title: "Nova mensagem",
    body: formMensagem,
    userId: 1,
  };

  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const FormSending = await envioForm(formSubmit);
      console.log(FormSending.data);
    } catch (error) {
      alert(error);
    }
  });
};
