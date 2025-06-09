document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const books = document.querySelectorAll(".book");

  books.forEach(book => {
    const title = book.querySelector("h2").textContent.toLowerCase();
    book.style.display = title.includes(filter) ? "" : "none";
  });
});

