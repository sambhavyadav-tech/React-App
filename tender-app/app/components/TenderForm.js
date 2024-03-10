import { useState } from 'react';

export default function TenderForm({ tender, onSubmit, onClose }) {
  const [formData, setFormData] = useState(tender || {}); // Pre-fill form for edits

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{tender ? 'Edit Tender' : 'Add New Tender'}</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="deadline">Deadline (YYYY-MM-DD):</label>
      <input
        type="date"
        id="deadline"
        name="deadline"
        value={formData.deadline || ''}
        onChange={handleChange}
        required
      />
      {/* Add more form fields as needed (e.g., budget, category) */}
      <button type="submit">Submit</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  );
}
