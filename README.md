# Task Management Project

This project is focused on structuring files and applying atomic design principles using **TypeScript**, **React**, and **Next.js**. The primary goal is to demonstrate how to organize a React application with a clear and maintainable file structure, while utilizing **Context API** to share data across components.

## Features
- **Atomic Design:** The project follows atomic design principles, breaking the UI down into reusable components.
- **Responsive Design:** The layout adapts to different screen sizes, ensuring a good user experience on both small and large screens.
- **Login System:** A simple login system is implemented with the following credentials:
  - **Email:** eman@gmail.com
  - **Password:** 123
- **Task Management:** Tasks are stored in memory (no API is used) to focus on handling shared state via **Context API**.

## File Structure
- **/components:** Contains UI components broken down into atoms, molecules, and organisms following atomic design principles.
- **/context:** Contains context providers for shared state like tasks.
- **/pages:** Contains the Next.js pages, such as the main task list and login page.
- **/utils:** Contains utility functions, like task ID generation.

## Usage

To run the project:

1. Clone the repository:
   ```bash
   git clone <repository_url>

2. npm install
3.npm run dev

