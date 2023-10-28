import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return res.status(200).json({ feedback: data });
  }

  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that in a database or in a file
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({ message: 'Success!', feedback: newFeedback });
  }

  res.status(200).json({ message: 'Success!' });
}

export default handler;
