import path from 'path';

const filePath = path.resolve('./dist/index.html');

export default () => async (req, res) => {
  res.status(200)
    .set({ 'Content-Type': 'text/html' })
    .sendFile(filePath);
};
