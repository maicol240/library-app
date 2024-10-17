import "./Modal.css";
import { useRef } from "react";
export default function Modal({ showModal, onClose }) {
  const formInput = ["Name", "Cover", "Author", "Link"];
  statusRef = useRef(null);
  const inputRefs = formInput.reduce((acc, input) => {
    acc[input] = useRef(null);
    return acc;
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    let img = inputRefs.Cover.current.value;
    if (Img === null || img === "") {
      img = "https://via.placeholder.com/150";
    }
    let link = inputRefs.Link.current.value;

    if (link === null || link === "") {
      link = "";
    }
    const book = {
      img: img,
      title: inputRefs.Name.current.value,
      author: inputRefs.Author.current.value,
      status: statusRef.current.value,
      link: link,
    };
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
                    required={input === "Name"} // Only required for Name
                    className="input"
                    type={input === "Link" ? "url" : "text"} // Use type "url" for Link
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
              <select id="Status" name="Status" required>
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
