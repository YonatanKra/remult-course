import experss from 'express';

const app = experss();
app.get("/api/hi", (req, res) => res.send("Hello"));
app.listen(3002, ()=>console.log('server running on port 3002!'));