function brew(app) {
    // (Attempt) to get some coffee
    app.get("/", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send('<!DOCTYPE html><body><iframe width="560" height="315" src="https://www.youtube.com/embed/nXjro36-uLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body>');
    });
}

module.exports = brew;