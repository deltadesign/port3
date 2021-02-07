// event listener for the nav bar
document.getElementById("nav").addEventListener("click", navigate)

// function to identify the link clicked, removes the class of active from visible elements and updates the selected
// links class to include the active attribute

function navigate(e) {

  const target = e.target.name;

  if (!target) {
    return
  } else {
    document.querySelectorAll('section.active').forEach((element) => {
      element.classList.remove('active')
    })

    document.getElementById(target).classList.toggle('active');
  }

}
