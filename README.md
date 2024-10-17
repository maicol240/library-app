# Library App

## Description

The Library App is a web application built using React.js, HTML, and CSS. It allows users to manage their reading list by adding, editing, deleting, and filtering books based on their reading status. The app provides a user-friendly interface with responsive design for both small and larger screens.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **HTML**: The standard markup language for creating web pages.
- **CSS**: A style sheet language used for describing the presentation of a document written in HTML.

## Features

- **Filter Functionality**: Users can filter books based on their reading status: Reading, Completed, or Pending.
- **Create Button with Validation**: Users can add new books with validation to ensure that the required fields are filled.
  - **Image**: If no image is provided, a default image is displayed.
  - **Title**: A default title is assigned if no title is specified.
  - **Author**: A default value is used if no author is specified.
  - **Link**: If the link is not provided, a default value ("Coming Soon") is displayed.
- **Edit and Delete**: Users can edit or delete existing books from the list.
- **Responsive Design**: The app is designed to be responsive and works well on both small and large screens.
- **Book Count**: Displays the total number of books currently in the app.
## Seed Data

To help you get started, the app comes with some initial seed data. This data populates the library with sample books, allowing users to see how the app functions without needing to add new entries right away. The seed data includes:

1. **Title**: *To Kill a Mockingbird*
   - **Author**: Harper Lee
   - **Status**: Completed

2. **Title**: *The Hobbit*
   - **Author**: J.R.R. Tolkien
   - **Status**: Reading

3. **Title**: *The Da Vinci Code*
   - **Author**: Dan Brown
   - **Status**: Pending

4. **Title**: *The Hunger Games*
   - **Author**: Suzanne Collins
   - **Status**: Completed

5. **Title**: *Harry Potter and the Sorcerer's Stone*
   - **Author**: J.K. Rowling
   - **Status**: Reading 

These entries can be modified or deleted as per user requirements.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maicol240/library-app
   ```
