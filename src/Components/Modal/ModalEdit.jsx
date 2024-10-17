import "./Modal.css";
import { useRef, useEffect } from "react";

export default function ModalEdit({
  showModalEdit,
  onClose,
  getBook,
  setUpdate,
}) {
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

    const updatedBook = {
      id: getBook.id,
      img: img,
      title: inputRefs.Title.current.value,
      author: author,
      status: statusRef.current.value,
      link: link,
    };

    setUpdate(updatedBook);
    onClose();
  };
  useEffect(() => {
    if (showModalEdit && getBook) {
      inputRefs.Title.current.value = getBook.title || "";
      inputRefs.Cover.current.value = getBook.img || "";
      inputRefs.Author.current.value = getBook.author || "";
      inputRefs.Link.current.value = getBook.link || "";
      if (statusRef.current) {
        statusRef.current.value = getBook.status || ""; // Set default status
      }
    }
  }, [showModalEdit, getBook]); // Depend on showModalEdit and getBook

  if (showModalEdit) {
    return (
      <>
        <div className="overlay">
          <form onSubmit={handleSubmit} className="modal">
            <h1 style={{ textDecoration: "underline" }}>Book</h1>
            <div className="form-group">
              {formInput.map((input, index) => {
                return (
                  <div className="form-text" key={index}>
                    <label htmlFor={input}>{input}</label>
                    <input
                      required={input === "Title"} // Only required for Name
                      className="input"
                      type={
                        input === "Link" || input === "Cover" ? "url" : "text"
                      } // Use type "url" for Link or Cover
                      id={input}
                      name={input}
                      ref={inputRefs[input]}
                    />
                  </div>
                );
              })}
              ;
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
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div style={{ gridColumn: "span 2" }} className="modal-buttons">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
