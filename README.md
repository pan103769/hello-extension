# YouTube Education Filter

## Goal

What problem does this extension solve?

---

## How it works

1.
2.
3.
4.
5.

---

## Project Structure

manifest.json
↓

popup.html
↓

popup.js
↓

content.js

---

## Workflow

YouTube Page
↓

MutationObserver

↓

Find video links

↓

Extract video ID

↓

Call YouTube Data API

↓

Receive JSON response

↓

Read categoryId

↓

Hide or keep video

---

## Files

### manifest.json

Purpose:

Permissions:

---

### popup.html

Purpose:

Contains:

---

### popup.js

Purpose:

Responsibilities:

---

### content.js

Purpose:

Responsibilities:

---

## JavaScript Concepts Used

- MutationObserver
- Set
- URL
- searchParams
- fetch()
- async / await
- JSON
- chrome.storage.local

Explain each in one sentence.

---

## APIs Used

YouTube Data API v3

Endpoint:

Purpose:

Parameters:

Response:

---

## Data Flow

User
↓

Popup

↓

chrome.storage

↓

Content Script

↓

YouTube API

↓

DOM

---

## Problems Faced

-

-

-

---

## Things I Learned

-

-

-

---

## Future Improvements

- Cache API responses
- Batch requests
- Multiple allowed categories
- Better UI
- AI classification
