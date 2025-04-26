Project Explanation
This project is a simple example of how to protect private routes in a React application using Context API and React Router.
The authentication flow is straightforward: the user logs in, accesses a protected page, and can log out.

📂 Code Structure
AuthContext.tsx:
Defines the authentication context, controlling the isAuthenticated state and exposing two functions:

login(): authenticates the user.

logout(): logs out the user.

PrivateRoute.tsx:
A component that protects routes. If the user is not authenticated, it redirects to the login page.

HomePage.tsx:
A private page that is only accessible after login. It displays a welcome message and a logout button.

LoginPage.tsx:
A public page for user login. After clicking "Enter," the user is authenticated and redirected to the Home page.

App.tsx:
Where all routes are defined. All private routes are wrapped with the PrivateRoute component.

🔒 How Route Protection Works
The app starts with the user not authenticated (isAuthenticated = false).

When trying to access a private route (e.g., /home), PrivateRoute checks the state:

If not authenticated, it redirects to /login.

If authenticated, it grants access to the protected content.

After logging in, isAuthenticated is set to true, allowing the user to navigate freely through private routes.

The "Logout" button resets isAuthenticated to false, and the user is no longer considered authenticated.

🚀 Technologies Used
React

TypeScript

React Router DOM

Context API

📋 Basic Commands to Run the Project
bash
Copiar
Editar

# Install dependencies

npm install

# Run the development server

npm run dev
Note: This project is an educational example. In real applications, authentication should involve a backend server, token handling (e.g., JWT), and persistence using localStorage or sessionStorage.
