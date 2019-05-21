import { getImagesNames } from '$ui/images';

export { getRandomImage };

function getRandomImage() {
  const images = getImagesNames();
  const index = Math.round(Math.random() * (images.length - 1));
  return images[index];
}
