// Function to open a note by providing the correct password
function openNote(noteId) {
    const passwordInput = document.getElementById(`password-${noteId}`);
    const noteContainer = document.getElementById(`note-${noteId}`);
    const password = notePasswords[noteId];
    
    if (passwordInput.value === password) {
        passwordInput.value = '';
        noteContainer.style.display = 'block';
    } else {
        showAlert('Incorrect password. Please try again.');
    }
}

// Function to save a note using local storage
function saveNote(noteId) {
    const textArea = document.getElementById(`text-${noteId}`);
    localStorage.setItem(`note-${noteId}`, textArea.value);
    showAlert('Note saved successfully.');
}

// Function to display a custom styled alert
function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

// Function to close the custom styled alert
function closeAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none';
}

// Define passwords for each note
const notePasswords = {
    1: 'password1', // Password for Note 1
    2: 'password2', // Password for Note 2
};

// Check if there are saved notes and populate the text areas
for (let i = 1; i <= 2; i++) {
    const savedNote = localStorage.getItem(`note-${i}`);
    if (savedNote !== null) {
        const textArea = document.getElementById(`text-${i}`);
        textArea.value = savedNote;
    }
}
