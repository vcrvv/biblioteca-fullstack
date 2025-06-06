# Biblioteca Online

This project is a full-stack application for an online library, featuring a Django REST Framework backend and a React frontend.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [CI/CD](#ci/cd)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Book management (add, view, update, delete)
- Search and filter books
- Borrowing and returning books

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- Node.js (LTS version) & npm
- PostgreSQL (or other database as configured in `backend/core/settings.py`)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment (if you haven't already):**
    ```bash
    python -m venv ../venv
    ```

3.  **Activate the virtual environment:**
    -   **On Linux/macOS:**
        ```bash
        source ../venv/bin/activate
        ```
    -   **On Windows:**
        ```bash
        ..\\venv\\Scripts\\activate
        ```

4.  **Install Python dependencies:**
    ```bash
    pip install -r ../requirements.txt
    ```

5.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **Create a superuser (optional, for admin access):**
    ```bash
    python manage.py createsuperuser
    ```

7.  **Run the backend server:**
    ```bash
    python manage.py runserver
    ```
    The backend API will be available at `http://127.0.0.1:8000/`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

## CI/CD

This project uses GitHub Actions for Continuous Integration and Continuous Deployment. The workflow is defined in `.github/workflows/ci.yml`.

### Workflow Details

-   **Trigger:** The workflow runs on every `push` and `pull_request` to any branch.
-   **Jobs:**
    -   `backend`: Runs Python tests for the Django backend.
    -   `frontend`: Installs Node.js dependencies and builds the React frontend.

## Project Structure

```
biblioteca_online/
├── backend/               # Django REST Framework backend
│   ├── api/               # API specific apps, views, serializers, tests
│   ├── core/              # Core Django project settings, URLs
│   └── manage.py          # Django project management utility
├── frontend/              # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # React source code (components, pages, etc.)
│   ├── package.json       # Frontend dependencies and scripts
│   └── vite.config.js     # Vite configuration
├── venv/                  # Python virtual environment
├── .github/               # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml         # CI/CD workflow for the project
├── .gitignore             # Specifies intentionally untracked files to ignore
├── requirements.txt       # Python dependencies
└── README.md              # Project README file
```

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details. (Note: A LICENSE.md file has not been created in this session, but it is good practice to include one.)
