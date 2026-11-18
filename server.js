const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const students = [
    { id: 'ESP-001', nom: 'Ahmed Taleb', filiere: 'Informatique' },
    { id: 'ESP-002', nom: 'Mariem Mohamed', filiere: 'Génie Civil' },
    { id: 'ESP-003', nom: 'Alioune Sall', filiere: 'Électronique' }
];

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.listen(5000, () => {
    console.log('Server läuft auf Port 5000');
});
   app.use(cors({
     origin: 'http://localhost:3000'
   }));
   
