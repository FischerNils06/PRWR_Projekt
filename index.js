table_list = document.getElementById("table_list");
table = document.getElementById("table");

// change table into list if the screen is too small
if (window.innerWidth < 600) {
    table_list.style.display = "block";
    table.style.display = "none";
}

