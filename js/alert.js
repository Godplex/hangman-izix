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
        allowOutsideClick: false,
        title: title,
        showCancelButton: false,
        confirmButtonText: 'Start',
        confirmButtonColor: "#0A3871",
    }).then((result) => {
        if (result.isConfirmed) {
            var url = window.location.toString();
            window.location = url.replace("addNewWord.html", "game.html");
        }
    });
}

function errorAlert(title) {
    Swal.fire({
        icon: 'error',
        title: title,
        confirmButtonColor: "#0A3871",
    });
}

