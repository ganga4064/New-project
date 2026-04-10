// Import the built-in http module
const http = require('http');

// Define the port the server will listen on
const PORT = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header with HTTP status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
// This is a single-line comment
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});