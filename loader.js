// A node script
const { writeFile, readFile } = require("fs/promises");

(async () => {
  const images = [];

  const frameCount = 179;
  await new Promise(async (resolve) => {
    for (let idx = 1; idx <= frameCount; idx++) {
      const path = `best-ball/${idx}.jpg`;
      const data = (await readFile(path)).buffer;
      const stringifiedBuffer = Buffer.from(data).toString("base64");
      const contentType = "image/jpeg";
      const imageBas64 = `data:image/${contentType};base64,${stringifiedBuffer}`;

      images.push(imageBas64);
    }
    resolve(images);
  });

  writeFile("images.json", JSON.stringify(images));
})();
