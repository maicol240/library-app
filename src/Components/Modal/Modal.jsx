import "./Modal.css";
import { useRef } from "react";
export default function Modal({ showModal, onClose, addBook }) {
  const formInput = ["Title", "Cover", "Author", "Link"];
  const statusRef = useRef(null);
  const inputRefs = formInput.reduce((acc, input) => {
    acc[input] = useRef(null);
    return acc;
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    let img = inputRefs.Cover.current.value;
    if (img === null || img === "") {
      img = "https://via.placeholder.com/150";
    }
    let link = inputRefs.Link.current.value;

    if (link === null || link === "") {
      link = "";
    }
    let author = inputRefs.Author.current.value;
    if (author === "") {
      author = "unknown";
    }
    const book = {
      id: null, // Automatically assigned id based on current length of books arrayl,
      img: img,
      title: inputRefs.Title.current.value,
      author: author,
      status: statusRef.current.value,
      link: link,
    };

    addBook(book);
    onClose();
  };

  if (showModal)
    return (
      <>
        <div className="overlay">
          <form onSubmit={handleSubmit} className="modal">
            <h1 style={{ textDecoration: "underline" }}>Book</h1>
            <div className="form-group">
              {formInput.map((input, index) => (
                <div className="form-text" key={index}>
                  <label htmlFor={input}>{input}</label>
                  <input
                    required={input === "Title"} // Only required for Title
                    className="input"
                    type={
                      input === "Link" || input === "Cover" ? "url" : "text"
                    } // Use type "url" for Link or Cover
                    id={input}
                    name={input}
                    ref={inputRefs[input]}
                  />
                </div>
              ))}
            </div>

            {/* Select Option */}
            <div className="status-selection" style={{ gridColumn: "span 2" }}>
              <label
                style={{ fontWeight: "bold", textAlign: "center" }}
                htmlFor="Status"
              >
                Status
              </label>
              <select ref={statusRef} id="Status" name="Status" required>
                <option value="" disabled selected>
                  Select an option
                </option>

                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div style={{ gridColumn: "span 2" }} className="modal-buttons">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </>
    );

  return null;
}
