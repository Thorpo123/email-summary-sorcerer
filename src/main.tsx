
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a more robust root initialization
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
  document.body.innerHTML = 'Could not find root element! Please check your HTML.';
} else {
  createRoot(rootElement).render(<App />);
}
