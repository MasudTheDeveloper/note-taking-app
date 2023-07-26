const noteTitleInput = document.getElementById("noteTitle");
const noteContentInput = document.getElementById("noteContent");
const noteList = document.getElementById("noteList");

let notes = [];

function saveNote() {
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();

  if (!title || !content) {
    alert("Please enter both title and content.");
    return;
  }

  const newNote = {
    title: title,
    content: content,
    timestamp: new Date().getTime(),
  };

  notes.push(newNote);
  displayNotes();
  resetForm();
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}

function displayNotes() {
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item");
    noteItem.innerHTML = `
            <div class="note-header">
                <span class="note-title">${note.title}</span>
                <button onclick="deleteNote(${index})">Delete</button>
            </div>
            <div class="note-content">${note.content}</div>
        `;
    noteList.appendChild(noteItem);
  });
}

function resetForm() {
  noteTitleInput.value = "";
  noteContentInput.value = "";
}

displayNotes();
