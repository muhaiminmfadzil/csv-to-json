const csv = require("csvtojson");
const fs = require("fs");

const pathGenerator = (fileName) => {
  return {
    inputPath: `./${fileName}.csv`,
    outputPath: `./${fileName}.json`,
  };
};
// Filenames
const fileName = ["filename"];

// Run others first to get id
async function runfile() {
  for (let i = 0; i < fileName.length; i++) {
    const { inputPath, outputPath } = pathGenerator(fileName[i]);
    const jsonObj = await csv().fromFile(inputPath);
    const obj = jsonObj.map((obj) => {
      // Output result
      console.log(obj);
      return obj;
    });

    // Output to JSON file (uncomment on output command only..refer README)
    // fs.writeFileSync(outputPath, JSON.stringify(obj));
  }
}

// Running all
(async function runAll() {
  await runfile();
})();
