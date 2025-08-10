# Startup Info API

A RESTful API built with Node.js, Express.js, and MongoDB for managing and retrieving information about various startups. This API includes authentication, authorization, and advanced search functionality.

## Features

- **RESTful Endpoints:** Full CRUD (Create, Read, Update, Delete) functionality for startups.
- **Authentication & Authorization:**
  - Secure user registration and login with JSON Web Tokens (JWT).
  - Password hashing using `bcryptjs`.
  - Role-based access control to protect sensitive routes (`POST`, `PUT`, `DELETE`).
- **Public Read Access:** All users can `GET` startup data without authentication.
- **Advanced Search & Filtering:** Filter startups by keywords, industry, and country using query parameters.
- **MongoDB Database:** Utilizes a Mongoose ODM to interact with a MongoDB Atlas database.
- **Static Homepage:** Serves a simple, informative homepage with API documentation and a search demo.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A MongoDB Atlas cluster (a free tier M0 cluster is sufficient).

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install the project dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root directory and add your environment variables.

### Environment Variables

Create a `.env` file and add the following variables.

```dotenv
# MongoDB Connection
MONGODB_URI="your_mongodb_atlas_connection_string"

# Server Port
PORT=3500

# JWT Secret (MUST be a long, random string)
JWT_SECRET="your_very_long_and_complex_jwt_secret_key"
```

### Running the Server

- **Development Mode:**

  ```bash
  npm run dev
  ```

  This will start the server using `nodemon`, which automatically restarts the application on file changes.

- **Production Mode:**

  ```bash
  npm start
  ```

## API Endpoints

All endpoints are prefixed with `/api`.

### Startup Endpoints (`/api/startups`)

| Method   | Endpoint | Description                      | Access         |
| :------- | :------- | :------------------------------- | :------------- |
| `GET`    | `/`      | Retrieve all startups.           | **Public**     |
| `GET`    | `/:id`   | Retrieve a single startup by ID. | **Public**     |
| `POST`   | `/`      | **Create a new startup.**        | **Admin-only** |
| `PUT`    | `/:id`   | **Update an existing startup.**  | **Admin-only** |
| `DELETE` | `/:id`   | **Delete a startup by ID.**      | **Admin-only** |

---

### Search Queries (`GET /api/startups`)

You can filter and search for startups by adding query parameters to the `/api/startups` endpoint.

| Parameter  | Example                | Description                                                    |
| :--------- | :--------------------- | :------------------------------------------------------------- |
| `search`   | `?search=FinTech`      | Fuzzy search by name, industry, description, and founder name. |
| `industry` | `?industry=HealthTech` | Filter specifically by the industry field.                     |
| `country`  | `?country=Nigeria`     | Filter specifically by the country field.                      |

**Example:**
`GET /api/startups?search=pay&industry=FinTech`

### User Endpoints (`/api/users`)

| Method | Endpoint | Description                                    | Access     |
| :----- | :------- | :--------------------------------------------- | :--------- |
| `POST` | `/login` | Log in and receive a JWT for protected routes. | **Public** |

> **Note:** The user registration endpoint is not public for security reasons. The initial admin user must be created manually or via a seeding script.

## Authentication

Protected routes require a JSON Web Token (JWT) to be passed in the request header.

1.  **Login:** Send a `POST` request to `/api/users/login` with your admin `username` and `password` to receive a token.

    **Request Body:**

    ```json
    {
      "username": "youradminuser",
      "password": "youradminpassword"
    }
    ```

    **Response:**

    ```json
    {
      "token": "your_jwt_token_here",
      "role": "admin",
      "message": "Logged in successfully!"
    }
    ```

2.  **Use the Token:** Include the JWT in the `Authorization` header of your protected requests (`POST`, `PUT`, `DELETE`).

    **Header:**

    ```
    Authorization: Bearer your_jwt_token_here
    ```

## Technology Stack

- **Backend:** [Node.js](https://nodejs.org/en/) & [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication:** [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Environment Variables:** [dotenv](https://www.npmjs.com/package/dotenv)
- **Development:** [Nodemon](https://nodemon.io/)
- **Frontend (Homepage):** HTML, Tailwind CSS, JavaScript (Vanilla JS)

## Author

- **MI Okoro** - _Initial Work_
