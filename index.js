const express = require('express');
const app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/hello", (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to windermere'
    });
});