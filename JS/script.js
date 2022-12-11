
// Search Bar Function
const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const project = document.querySelectorAll(".project-box")
    const msg = document.querySelector(".msg")
    let notAvailable = 0

    for (let i = 0; i < project.length; i++){
        element = project[i].getElementsByTagName("h2")
        projectTitle = element[0].textContent.toUpperCase()

        if (projectTitle){
            let match = projectTitle.indexOf(searchBox)
            if (match > -1){
                project[i].classList.toggle("animate")
                project[i].style.display = ""

            }else{
                project[i].style.display = "none"
                notAvailable += 1
            }
            if (notAvailable == project.length){
                msg.style.display = "block" 
            }else{
                msg.style.display = "none"   

            }
        }
    }
}
// Modal Popup Function
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}