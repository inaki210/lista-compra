export { getImage, getImagesNames };

const context = require.context('.', true, /\.svg$/);

function getImage(name: string) {
  return context(`./${name}`);
}

function getImagesNames() {
  return context.keys().map(image => image.substring(2));
}
