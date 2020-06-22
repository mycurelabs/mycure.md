export default () => {
  return new Promise((resolve) => {
    const image = new Image();

    image.onerror = () => { return resolve(false); };
    image.onload = () => { return resolve(image.width === 1); };

    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  }).catch(() => false);
};
