const http = require('http');

let movies = [
    {
        "id": 1,
      name:"Vampire in Brooklyn",
      releaseYear: 1995,
      tagLine:"A comic tale of horror and seduction."
    },
    {
        "id": 2,
      name:"Alien vs. Predator",
      releaseYear:2004,
      tagLine:"Whoever wins, we lose."
    },
    {
        "id": 3,
      name:"Chicken Run",
      releaseYear:2000,
      tagLine:"Escape or die frying."
    }
  ];

let server = http.createServer(function(req, res) {
    res.setHeader("Content-type", "application/json");

    if (req.method === "GET") {
        const movieNames = movies.map(movie => movie.name);
        const formattedNames = movieNames.join('\n');
        res.write(formattedNames); 
        res.end();
    } else if (req.method === "POST") {
        let body = "";

        req.on("data", function(chunk) {
            body += chunk;
        });
      
        req.on("end", function() {
            try {
                let newMovie = JSON.parse(body);
                movies.push(newMovie);
                res.writeHead(201, { 'Content-Type': 'text/plain' }); // Created
                res.end('Movie added successfully!');
            } catch (error) {
                console.error('Error parsing JSON data in POST request:', error);
                res.writeHead(400, { 'Content-Type': 'text/plain' }); // Bad Request
                res.end('Invalid JSON data in request body.');
            } 
        });
    } else if (req.method === "DELETE") {
        let body = "";

        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            try {
                let movieToDelete = JSON.parse(body);

                // Find the index of the movie to delete
                const index = movies.findIndex(movie => movie.name === movieToDelete.name);

                if (index !== -1) {
                    movies.splice(index, 1); // Remove the movie
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Movie deleted successfully!');
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Movie not found.');
                }
            } catch (error) {
                console.error('Error parsing JSON data in DELETE request:', error);
                res.writeHead(400, { 'Content-Type': 'text/plain' }); 
                res.end('Invalid JSON data in request body.');
            } 
        });
    }
});

server.listen(3000);
