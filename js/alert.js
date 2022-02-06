function confirmAlert(title, color) {
    Swal.fire({
        allowOutsideClick: false,
        title: `<h3 style="color:${color}">${title}</h3>`,
        showCancelButton: false,
        confirmButtonText: 'Start again',
        confirmButtonColor: "#0A3871",
    }).then((result) => {
        if (result.isConfirmed) {
            chooseWord();
        }
    });
}

function successAlert(title) {
    Swal.fire({
        icon: 'success',
        title: title,
        confirmButtonColor: "#0A3871",
    })
}

function errorAlert(title) {
    Swal.fire({
        icon: 'error',
        title: title,
        confirmButtonColor: "#0A3871",
    });
}

