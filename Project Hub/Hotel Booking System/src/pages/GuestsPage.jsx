import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const GuestsPage = () => {
  const { showToast, openModal } = useContext(AppContext);
  const guests = [
    { id: 'G001', name: 'Alice Smith', phone: '01712345678', email: 'alice@example.com', bookings: 3 },
    { id: 'G002', name: 'Bob Johnson', phone: '01812345678', email: 'bob@example.com', bookings: 1 },
    { id: 'G003', name: 'Charlie Brown', phone: '01912345678', email: 'charlie@example.com', bookings: 5 },
    { id: 'G004', name: 'Diana Prince', phone: '01612345678', email: 'diana@example.com', bookings: 2 },
  ];

  const handleAddGuest = () => {
    openModal(
      <form>
        <div className="mb-3">
          <label htmlFor="guestName" className="form-label">Guest Name</label>
          <input type="text" className="form-control" id="guestName" placeholder="Enter guest name" />
        </div>
        <div className="mb-3">
          <label htmlFor="guestPhone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="guestPhone" placeholder="e.g., 01XXXXXXXXX" />
        </div>
        <div className="mb-3">
          <label htmlFor="guestEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="guestEmail" placeholder="e.g., guest@example.com" />
        </div>
        <div className="d-flex justify-content-end pt-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              showToast('Guest added successfully!', 'success');
              // closeModal();
            }}
            className="btn btn-primary"
          >
            Save Guest
          </button>
        </div>
      </form>,
      'Add New Guest'
    );
  };

  const handleDraftEmail = (guest) => {
    const defaultPrompt = `Draft a welcome email for ${guest.name} (${guest.email}). Mention their upcoming stay and ask if they have any special requests.`;
    const [prompt, setPrompt] = useState(defaultPrompt);
    const [generatedEmail, setGeneratedEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateEmailWithLLM = async () => {
      setIsLoading(true);
      setGeneratedEmail('');
      setError(null);
      try {
        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`API error: ${response.status} - ${errorData.error.message || 'Unknown error'}`);
        }

        const result = await response.json();
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
          const text = result.candidates[0].content.parts[0].text;
          setGeneratedEmail(text);
          showToast('Email draft generated!', 'success');
        } else {
          setGeneratedEmail('No email draft could be generated. Please try a different prompt.');
          showToast('Failed to generate email draft.', 'danger');
        }
      } catch (err) {
        console.error('Error generating email:', err);
        setError(`Failed to generate email: ${err.message}`);
        showToast(`Error: ${err.message}`, 'danger');
      } finally {
        setIsLoading(false);
      }
    };

    openModal(
      <div>
        <p className="text-muted">Drafting email for: <span className="fw-semibold">{guest.name} ({guest.email})</span></p>
        <div className="mb-3">
          <label htmlFor="emailPrompt" className="form-label">Your Prompt:</label>
          <textarea
            id="emailPrompt"
            rows="4"
            className="form-control"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Write a welcome email..."
          ></textarea>
        </div>
        <button
          onClick={generateEmailWithLLM}
          disabled={isLoading}
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
        >
          {isLoading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          ) : (
            '✨ Generate Email'
          )}
        </button>

        {generatedEmail && (
          <div className="mt-4 p-3 bg-light border rounded">
            <h4 className="h6 fw-semibold mb-2">Generated Email Draft:</h4>
            <pre className="text-break small">{generatedEmail}</pre>
            <button
                onClick={() => {
                    const el = document.createElement('textarea');
                    el.value = generatedEmail;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    showToast('Email copied to clipboard!', 'info');
                }}
                className="btn btn-secondary btn-sm mt-3"
            >
                Copy to Clipboard
            </button>
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            <h6 className="alert-heading">Error:</h6>
            <p className="mb-0">{error}</p>
          </div>
        )}
      </div>,
      `Draft Email for ${guest.name}`
    );
  };

  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Guests</h1>
        <button
          onClick={handleAddGuest}
          className="btn btn-primary shadow"
        >
          Add Guest
        </button>
      </div>

      <div className="card shadow-sm p-3 mb-4">
        <input
          type="text"
          placeholder="Search by Name, Phone, or Email..."
          className="form-control"
        />
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Guest ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Bookings Count</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest) => (
                  <tr key={guest.id}>
                    <td>{guest.id}</td>
                    <td>{guest.name}</td>
                    <td>{guest.phone}</td>
                    <td>{guest.email}</td>
                    <td>{guest.bookings}</td>
                    <td>
                      <button
                        onClick={() => showToast(`Viewing Guest ${guest.id}`, 'info')}
                        className="btn btn-link text-primary p-0 me-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => showToast(`Editing Guest ${guest.id}`, 'info')}
                        className="btn btn-link text-info p-0 me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal(
                          <div>
                            <p>Are you sure you want to delete Guest {guest.id}?</p>
                            <div className="d-flex justify-content-end mt-3">
                              <button
                                onClick={() => { showToast(`Guest ${guest.id} deleted!`, 'danger'); }}
                                className="btn btn-danger"
                              >
                                Confirm Delete
                              </button>
                            </div>
                          </div>,
                          'Confirm Deletion'
                        )}
                        className="btn btn-link text-danger p-0 me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleDraftEmail(guest)}
                        className="btn btn-secondary btn-sm"
                      >
                        ✨ Draft Email
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsPage;