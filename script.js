function showDiv(divId) {
    // Hide all divs
    const divs = document.querySelectorAll('.content');
    divs.forEach(div => div.style.display = 'none');

    // Show the selected div
    document.getElementById(divId).style.display = 'block';
}


