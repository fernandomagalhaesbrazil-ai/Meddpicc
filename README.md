# MEDDPICC Deal Coach

A static MEDDPICC deal-coaching app built with plain HTML, CSS, and JavaScript.

## Features

- MEDDPICC scorecard with local persistence or Firebase sync
- Qualification health score and gap list
- AI-style coaching prompts and responses
- Generated action plan
- Playbook guidance for each MEDDPICC element
- Clipboard export for deal review summaries
- English, Portuguese, and Spanish UI
- Email/password sign-in with a multi-deal repository

## Run Locally

Open `index.html` directly in a browser, or run a static server:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Firebase Setup

The app runs without Firebase by falling back to browser `localStorage`. To enable real account-based sync:

1. In Firebase Console, create or open a project.
2. Add a Web app and copy the Firebase config.
3. Enable `Authentication` -> `Sign-in method` -> `Email/Password`.
4. Create a Firestore database.
5. Paste your Web app config into `firebase-config.js`:

```js
window.MEDDPICC_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
```

Recommended Firestore rules:

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/deals/{dealId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Publish With GitHub Pages

This app is static. In GitHub, enable Pages from:

`Settings` -> `Pages` -> `Deploy from a branch` -> `main` -> `/root`
