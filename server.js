const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Die Route, die dein Frontend aufruft
app.get('/api/students', (req, res) => {
    const students = [
        { id: 'ESP-001', nom: 'Ahmed Taleb', filiere: 'Informatique' },
        { id: 'ESP-002', nom: 'Mariem Mohamed', filiere: 'Génie Civil' }
    ];
    res.json(students);
});

app.listen(PORT, () => {
    console.log('Server läuft auf Port 5000');
});
