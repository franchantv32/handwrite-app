const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(fileUpload());

app.get('/', (req, res) => res.send('HandWrite Backend Running'));

app.post('/ocr', (req, res) => {
  // Placeholder: accept an uploaded file and return dummy OCR
  return res.json({ success: true, text: 'OCR placeholder result' });
});

app.post('/merge', (req, res) => {
  // Placeholder: accept PDF and annotations and return merged PDF link or buffer
  return res.json({ success: true, message: 'Merge placeholder' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
