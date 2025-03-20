function renderBooks(books) {
  const list = document.getElementById("book-list");
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    list.appendChild(li);
  });
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: "A Game of Thrones" }])
  })
);

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));
}

document.addEventListener("DOMContentLoaded", fetchBooks);