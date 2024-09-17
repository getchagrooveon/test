Getting Started

To run this project locally, follow the steps below:
1. Clone the repository:
git clone https://github.com/getchagrooveon/test.git
2. Navigate to the project directory:
cd test
3. Install the dependencies:
npm install

Environment Variables

Create a .env file in the root of the project with the following content:

# -----------------------------------------------------------------------------
# App
# -----------------------------------------------------------------------------
BASEPATH=
NEXT_PUBLIC_APP_URL=http://localhost:3000${BASEPATH}
NEXT_PUBLIC_DOCS_URL=https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation

# -----------------------------------------------------------------------------
# Authentication (NextAuth.js)
# -----------------------------------------------------------------------------
NEXTAUTH_BASEPATH=${BASEPATH}/api/auth
NEXTAUTH_URL=http://localhost:3000${BASEPATH}/api/auth
NEXTAUTH_SECRET=

# Google OAuth 2.0 (https://console.cloud.google.com/apis/credentials)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# -----------------------------------------------------------------------------
# Database
# -----------------------------------------------------------------------------
DATABASE_URL=

# -----------------------------------------------------------------------------
# API
# -----------------------------------------------------------------------------
API_URL=http://localhost:3000${BASEPATH}/api
NEXT_PUBLIC_API_URL=${API_URL}

Description of the Environment Variables: 

    BASEPATH: The base path for the app (leave empty for the root).
    NEXT_PUBLIC_APP_URL: The public URL for your app.
    NEXT_PUBLIC_DOCS_URL: The URL for documentation.
    NEXTAUTH_BASEPATH: The base path for NextAuth.js.
    NEXTAUTH_URL: The full URL for NextAuth.js authentication.
    NEXTAUTH_SECRET: A secret key for securing NextAuth.js sessions.
    GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: Credentials for Google OAuth.
    DATABASE_URL: The connection string for the database.
    API_URL and NEXT_PUBLIC_API_URL: URLs for internal and public APIs.

Scripts

npm run build: Builds the app for production.
npm run dev: Starts the app in development mode.