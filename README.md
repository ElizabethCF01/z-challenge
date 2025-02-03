# Mobile Phone E-commerce Application

This project is a React-based e-commerce application for mobile phones, built with TypeScript and Vite.

## Features

- Product listing with search functionality
- Detailed product pages
- Shopping cart
- Color and storage selection for products
- Similar products recommendation

## Project Structure

The project follows a typical React application structure:

- `src/`: Contains the main source code
  - `components/`: Reusable React components
  - `pages/`: Main page components
  - `context/`: React context for state management
  - `interfaces/`: TypeScript interfaces
  - `api/`: API call functions
  - `lib/`: Utility functions and configurations like axios instance
  - `routes/`: Application routing
- `tests/`: Contains test files
- `public/`: Public assets

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   VITE_BASE_URL=your_api_base_url
   VITE_API_KEY=your_api_key
   ```

## Running the Application

To start the development server:

```
npm run dev
```

## Building for Production

To create a production build:

```
npm run build
```

## Running Tests

To run the test suite:

```
npm test
```

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- Axios for API calls
- Vitest and React Testing Library for testing

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.
