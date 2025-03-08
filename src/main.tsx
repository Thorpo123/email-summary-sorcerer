
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Log initialization for debugging
console.log("Application initializing...");

try {
  // Create a more robust root initialization
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Failed to find the root element");
    document.body.innerHTML = 'Could not find root element! Please check your HTML.';
  } else {
    console.log("Root element found, rendering app");
    createRoot(rootElement).render(<App />);
    console.log("App rendered successfully");
  }
} catch (error) {
  console.error("Error initializing application:", error);
  document.body.innerHTML = `<div style="color: red; padding: 20px;">
    <h1>Application Error</h1>
    <p>${error instanceof Error ? error.message : String(error)}</p>
    <p>Please check the console for more details.</p>
  </div>`;
}
