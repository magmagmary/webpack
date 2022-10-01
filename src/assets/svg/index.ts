function importAll(r: __WebpackModuleApi.RequireContext) {
  const images: Record<string, string> = {};
  r.keys().map((fileName: string) => {
    return (images[fileName.replace('./', '').replace('.svg', '')] =
      r(fileName));
  });
  return images;
}

const commonImages = importAll(
  require.context('./', false, /\.(png|jpe?g|svg)$/),
);

export { commonImages };
