// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.textContent = "Text Changed Dynamically!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById("changeStyleBtn").addEventListener("click", function () {
    const desc = document.getElementById("description");
    desc.style.color = "white";
    desc.style.backgroundColor = "#007bff";
    desc.style.padding = "10px";
    desc.style.borderRadius = "5px";
  });
  
  // Add or remove an element when a button is clicked
  let elementAdded = false;
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const section = document.querySelector("section");
  
    if (!elementAdded) {
      const newElement = document.createElement("div");
      newElement.id = "extraContent";
      newElement.textContent = "New content added!";
      newElement.style.marginTop = "10px";
      section.appendChild(newElement);
      elementAdded = true;
    } else {
      const oldElement = document.getElementById("extraContent");
      if (oldElement) {
        section.removeChild(oldElement);
      }
      elementAdded = false;
    }
  });
  