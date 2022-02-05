const fs = require("fs"); 

function dynamicallyLoadRoutes(app) {

    //apply function to each file in routes
    fs.readdirSync(__dirname).forEach(function (file) {
        if (
            file === "index.js" ||
            file.substring(file.lastIndexOf(".") + 1) !== "js"
        )
            return;

        let name = file.substring(0, file.indexOf("."));
        //add files to export
        require("./" + name)(app);
    });
}

module.exports = dynamicallyLoadRoutes;
