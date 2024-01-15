# Next.js Dashboard Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's a dashboard application that displays user data in a table format.

## Online demonstration:
https://nextjs-mui-table-gmartinsdev.vercel.app

## Project Structure

The project has the following structure:

- `app/`: Contains the main application code.
  - `assets/`: Contains static assets used in the application.
  - `components/`: Contains reusable React components.
    - `Search/`: Contains the `Search.tsx` component for user search functionality.
    - `UsersTable/`: Contains the `UsersTable.tsx` component for displaying user data.
  - `services/`: Contains service functions, such as `getUsers.ts` for fetching user data.
  - `utils/`: Contains utility functions.
  - `layout.tsx`: The main layout of the application.
  - `page.tsx`: The main page of the application.
- `pages/`: Contains the pages of the application.
  - `dashboard/`: Contains the dashboard page.
- `public/`: Contains public assets like images.
- `theme/`: Contains theme configuration for the application.

## Getting Started

1. **Clone the Repository**

Use the `git clone` command to clone the repository:

`git clone https://github.com/gmartins-dev/nextjs-mui-table`

2. **Navigate to the Project Directory**

Use the `cd` command to navigate into the project directory:

`cd nextjs-mui-table`

3. **Install Dependencies**

Use the `npm install` command to install the project's dependencies:

4. **Run the Project Locally**

Use the `npm run dev` command to start the development server:

The project should now be running at <http://localhost:3000>.
