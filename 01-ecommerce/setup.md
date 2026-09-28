Step 0 :- git init (iniatialize git in you folder)
Step 1 :- pnpm create vite@latest 01-ecommerce --template react (this create react application why vite because )

Vite is a tool that helps you create and run frontend projects, especially React projects.
Fast Hot Module Replacement (HMR) — when you change code, the browser updates quickly without a full reload

React → helps you build the UI
Vite  → helps you develop and build the React application

Why Vite

With an older bundler-based development setup, when you start the app, the tool may need to:

Your source code
      ↓
Analyze many files
      ↓
Bundle them together
      ↓
Start development server
      ↓
Browser

As the project gets bigger, that initial work can become significant.

Vite 
2. Vite's development approach
Vite takes advantage of native ES modules (ESM) supported by modern browsers.

Instead of immediately bundling your entire application, Vite can serve modules to the browser as they're needed:

So Vite doesn't have to prepare your entire application before the browser can start working with it.

That's one of the big reasons Vite's development server can start very quickly.

4. Why is it simpler?
When you create a project with:

pnpm create vite@latest my-app --template react

Vite gives you a relatively small amount of configuration.

You don't have to understand things like:

Webpack configuration
Babel configuration
development server configuration
asset handling
HMR configuration
production bundling configuration

to get started.

Step 2 :- pnpm add react-router-dom redux react-redux redux-saga reselect axios @tanstack/react-query 

Package	Purpose
react-router-dom	🛣️ Routing between pages/screens
redux	🗃️ Global state management
react-redux	🔗 Connects Redux with React
redux-saga	⚙️ Handles complex asynchronous side effects
reselect	⚡ Creates efficient/memoized Redux selectors
axios	🌐 Makes HTTP/API requests
@tanstack/react-query	🔄 Fetching, caching, synchronizing server data


Difference between @tanstack/react-query and redux
https://medium.com/@qingedaig/react-query-vs-redux-be07b78e41cd
Redux
= "Manage my application's state."

React Query
= "Manage my server/API state."


Step 4 :- npm add -D sass @tanstack/react-query-devtools prettier eslint-config-prettier vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event

installs development dependencies.

The important part is:

-D

which means:

These packages are needed while developing/testing the application, but generally aren't runtime dependencies of the deployed app.

Step 4:- pnpm add tailwindcss @tailwindcss/vite

vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

index.css
@import "tailwindcss";

Step 5:- mkdir -p src/{api/helpers,components,containers/Products,reducers,sagas,store,query,hooks,utilities}

What each one holds:

Folder	Contents
api/helpers/	axiosInstance.js (interceptors), methodHelper.js (get/post/put/del)
api/	one file per domain — productApi.js, authApi.js
containers/Products/	the 5-file feature unit: constants / actions / reducer / saga / index.jsx
components/	shared dumb components
reducers/index.js	combineReducers — registration point #1
sagas/index.js	yield all([...]) — registration point #2
store/configureStore.js	createStore + saga middleware
query/	react-query client + hooks
hooks/ utilities/	shared helpers