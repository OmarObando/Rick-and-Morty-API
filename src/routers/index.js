const router = require('express').Router();
const fs = require('fs');
const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

const loadRoute = (route) => {
    const name = removeExtension(route);
    if (name !== 'index') {
        console.log(`Loading route: ${name}`);
        router.use(`/${name}`, require(`./${route}`));
    }
}

fs.readdirSync(PATH_ROUTES).filter(
    (file) => {
        loadRoute(file);
    }
);

module.exports = router;