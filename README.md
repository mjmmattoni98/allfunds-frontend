# Frontend for News Application

## Overview

This project is the frontend of a technical test for Allfunds. It is a news application that displays news items from an API. The application is built with Next.js, a React framework, and uses Tailwind CSS for styling.

## Project Structure

### Key Directories and Files

- **src/app/**: Contains the main application files, including global styles and layout components.

  - `globals.css`: Global CSS styles.
  - `layout.tsx`: Main layout component.
  - `archived/`: Directory for archived news pages and components.
    - `page.tsx`: Main archived news page.
  - `page.tsx`: Main application page of the news.

- **src/components/**: Contains reusable UI components.

  - `component/`: Directory for specific components.
    - `EmptyItem.tsx`: Component for displaying an empty item.
    - `Navbar.tsx`: Navigation bar component.
    - `NewCard.tsx`: Card component for displaying news.
    - `NewsList.tsx`: Component for listing news items.
    - `Sidebar.tsx`: Sidebar component.
    - `TitlePage.tsx`: Component for displaying a title page.
  - `ui/`: Directory for UI elements from shadcn ui.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```sh
   cd <project-directory>
   ```

3. Install dependencies:

   ```sh
    npm install
   ```

### Development

1. Start the development server:

   ```sh
   npm run dev
   ```
