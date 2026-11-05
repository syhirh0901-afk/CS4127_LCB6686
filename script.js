//the seven puak tabs 
function openCity(evt, cityName) {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablinks");

    tabcontent.forEach(function(content) {
        content.style.display = "none";
    });

    tablinks.forEach(function(button) {
        button.classList.remove("active");
    });

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const firstTab = document.querySelector(".tablinks");

    if (firstTab) {
        firstTab.click();
    }
});

 // Attraction category
 // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements

function filterSelection(category) {

    const cards = document.querySelectorAll(".grid-gallery .flexbox-card");
    const buttons = document.querySelectorAll(".filterBtn");

    cards.forEach(function(card) {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    buttons.forEach(function(button) {
        button.classList.remove("active");

        if (button.getAttribute("onclick") ===
            "filterSelection('" + category + "')") {
            button.classList.add("active");
        }
    });

}

// Automatically filter based on selected district - about to attraction page
const district = window.location.hash.substring(1);

const districts = [
    "BruneiMuara",
    "Tutong",
    "Belait",
    "Temburong"
];

function loadDistrict() {

    // Only run on Attractions page
    if (!document.querySelector(".grid-gallery")) {
        return;
    }

    // Get district from URL
    const district = window.location.hash.substring(1);

    const districts = [
        "BruneiMuara",
        "Tutong",
        "Belait",
        "Temburong"
    ];

    if (districts.includes(district)) {
        filterSelection(district);
    } else {
        filterSelection("all");
    }
}

// Run when page opens
loadDistrict();

// Run if URL changes
window.addEventListener("hashchange", loadDistrict);

