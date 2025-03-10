// Create web server
// 1. Load the module
var http = require('http');
// 2. Create the server
var server = http.createServer(function(request, response) {
    // 3. Set the response header
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 4. Set the response content
    response.write('<h1>Welcome to Node.js</h1>');
    response.write('<h2>Comments</h2>');
    response.write('<p>Comments are not enabled for this post</p>');
    // 5. End the response
    response.end();
});
// 6. Start the server
server.listen(3000);
console.log('Server is running at http://localhost:3000');
// 7. Output the server status
server.on('close', function() {
    console.log('Server is closing');
});
// 8. Close the server
// server.close();
// 9. Output the server status
// console.log('Server is closed');
// 10. Output the server status
console.log('Server is listening');
// 11. Output the server status
console.log('Server is running');
// 12. Output the server status
console.log('Server is closing');
// 13. Output the server status
console.log('Server is closed');
// 14. Output the server status
console.log('Server is listening');
// 15. Output the server status
console.log('Server is running');