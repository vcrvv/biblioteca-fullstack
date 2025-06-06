import { useState, useEffect } from 'react';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    published_date: '',
    pages: '',
    cover_image: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/books/');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      if (response.ok) {
        fetchBooks();
        setNewBook({
          title: '',
          author: '',
          description: '',
          published_date: '',
          pages: '',
          cover_image: ''
        });
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="books-container">
      <h1>Library Books</h1>
      
      <form onSubmit={handleSubmit} className="book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newBook.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="published_date"
          placeholder="Published Year"
          value={newBook.published_date}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          value={newBook.pages}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="cover_image"
          placeholder="Cover Image URL"
          value={newBook.cover_image}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>

      <div className="books-list">
        <h2>Available Books</h2>
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.book_id} className="book-card">
              {book.cover_image && (
                <img src={book.cover_image} alt={book.title} className="book-cover" />
              )}
              <h3>{book.title}</h3>
              <p className="author">By {book.author}</p>
              <p className="description">{book.description}</p>
              <div className="book-details">
                <span>Published: {book.published_date}</span>
                <span>Pages: {book.pages}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books; 