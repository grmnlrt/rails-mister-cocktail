import swal from 'sweetalert';

function alerteOnDestroy() {
  const doses = document.querySelectorAll('.destroy_dose');
  if (doses) {
    doses.forEach(dose => {
      dose.addEventListener('click', () => {
        swal("Are you sure you want to do this?", {
          buttons: ["Oh noez!", "Aww yiss!"],
        });
      })
    })
  }
}

export { alerteOnDestroy };
