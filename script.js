// --- 1. MEMORY (Variables) ---
// We use "let" to create boxes to store our data.
let lostItems = [];
let foundItems = [];

// --- 2. REMOTE CONTROLS (Selecting HTML) ---
// We use "document.getElementById" to connect JS to the HTML tags.
let lostForm = document.getElementById('lostForm');
let foundForm = document.getElementById('foundForm');
let lostList = document.getElementById('lostList');
let foundList = document.getElementById('foundList');

// --- 3. ACTIONS (Functions) ---

// ACTION: Add a Lost Item
function addLostItem(event) {
    // 1. Prevent the page from refreshing (Essential step)
    event.preventDefault();

    // 2. Get text from the boxes
    let name = document.getElementById('lostItem').value;
    let location = document.getElementById('lostLocation').value;
    let date = document.getElementById('lostDate').value;

    // 3. Check if empty
    if (name === "" || location === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }

    // 4. Create a Group (Object)
    let newItem = {
        name: name,
        location: location,
        date: date
    };

    // 5. Add to List (push adds to the end)
    lostItems.push(newItem);

    // 6. Update the Screen
    renderLostItems();

    // 7. Success!
    alert("Success! Item added.");
    lostForm.reset();
}

// ACTION: Add a Found Item
function addFoundItem(event) {
    event.preventDefault();

    let name = document.getElementById('foundItem').value;
    let location = document.getElementById('foundLocation').value;
    let date = document.getElementById('foundDate').value;

    if (name === "" || location === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }

    let newItem = {
        name: name,
        location: location,
        date: date
    };

    foundItems.push(newItem);

    renderFoundItems();
    alert("Success! Item added.");
    foundForm.reset();
}

// ACTION: Show Lost Items on Screen
function renderLostItems() {
    // 1. Wipe the list clean
    lostList.innerHTML = "";

    // 2. Loop through our list (Classic FOR Loop)
    // i = 0 (Start at the first item)
    // i < lostItems.length (Stop when we run out of items)
    // i++ (Go to the next item)
    for (let i = 0; i < lostItems.length; i++) {
        let item = lostItems[i]; // Get the item at position "i"

        // 3. Create HTML String (Using nice and simple + signs)
        // We just glue the text parts together.
        let itemHTML = '<div class="item-entry lost">';
        itemHTML += '<h4>' + item.name + '</h4>';
        itemHTML += '<p>📍 ' + item.location + '</p>';
        itemHTML += '<div class="item-date">📅 ' + item.date + '</div>';
        itemHTML += '</div>';

        // 4. Add to the page
        lostList.innerHTML += itemHTML;
    }
}

// ACTION: Show Found Items on Screen
function renderFoundItems() {
    foundList.innerHTML = "";

    for (let i = 0; i < foundItems.length; i++) {
        let item = foundItems[i];

        let itemHTML = '<div class="item-entry found">';
        itemHTML += '<h4>' + item.name + '</h4>';
        itemHTML += '<p>📍 ' + item.location + '</p>';
        itemHTML += '<div class="item-date">📅 ' + item.date + '</div>';
        itemHTML += '</div>';

        foundList.innerHTML += itemHTML;
    }
}

// --- 4. LISTENING (Events) ---
// Wait for the user to click "Submit" buttons
lostForm.addEventListener('submit', addLostItem);
foundForm.addEventListener('submit', addFoundItem);

// Run this once start up
renderLostItems();
renderFoundItems();
