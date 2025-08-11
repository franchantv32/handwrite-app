# Backend - HandWrite

This is a simple Node.js + Express skeleton to act as an optional cloud OCR and PDF merge service.

## Setup
1. Install Node.js (v18+ recommended).
2. `cd backend && npm install`
3. `npm start` (runs on port 3000)

## Endpoints
- GET / => health check
- POST /ocr => accept image/pdf and return OCR result (placeholder)
- POST /merge => accept PDF and annotations to merge (placeholder)
