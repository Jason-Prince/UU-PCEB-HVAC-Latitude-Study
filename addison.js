const Griffin_EnerG = "https://griffinec.com/";

window.addEventListener("load", function () {
  // Logo
  // Select header
  const container = document.querySelector("div.d-flex");
  
  // Replace the HiPlot image with logo left image
  const logo_image_left = document.querySelector("img");
  logo_image_left.src = "images/logoAddison.svg";
  logo_image_left.alt = "Addison and Associates";
  
  // Create a link for the logo image.
  const logo_link_left = document.createElement("a");
  logo_link_left.href = "https://www.msaddison.com/";
  logo_link_left.target = "_blank";
  
  // Add the logo image to the logo link
  logo_link_left.appendChild(logo_image_left);
  
  // Add the logo link as a first child to the container
  container.prepend(logo_link_left);
  
  // Favicon and Title
  const title = document.querySelector("title");
  title.innerText = "M.S. Addison and Associates, LLC | Building Performance Simulation";
//   const link = document.querySelector("link");
//   link.href = "images/test.svg";

  // Fonts
  const head = document.querySelector("head");
  const link1 = document.createElement("LINK");
  link1.setAttribute("rel", "preconnect");
  link1.setAttribute("href", "https://fonts.googleapis.com");
  const link2 = document.createElement("LINK");
  link2.setAttribute("rel", "preconnect");
  link2.setAttribute("href", "https://fonts.gstatic.com");
  link2.setAttribute("crossorigin", "anonymous");
  const link3 = document.createElement("LINK");
  link3.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Roboto:wght@300&display=swap"
  );
  link3.setAttribute("rel", "stylesheet");
  console.log(link3);
  head.prepend(link1, link2, link3);
});
