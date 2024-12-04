const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');

async function generateImages() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 735 });

  const lightModeUrl = "http://127.0.0.1:3000/?theme=light";
  const darkModeUrl = "http://127.0.0.1:3000/?theme=dark";

  await page.goto(lightModeUrl, { waitUntil: "networkidle0" });
  const lightModeScreenshot = await page.screenshot({ type: "png" });

  await page.goto(darkModeUrl, { waitUntil: "networkidle0" });
  const darkModeScreenshot = await page.screenshot({ type: "png" });

  await browser.close();

  const lightModeBuffer = Buffer.from(lightModeScreenshot);
  const darkModeBuffer = Buffer.from(darkModeScreenshot);

  const lightModeImage = sharp(lightModeBuffer);
  const darkModeImage = sharp(darkModeBuffer);

  const lightLeftHalf = await lightModeImage
    .extract({ left: 0, top: 0, width: 700, height: 735 })
    .toBuffer();
  const darkRightHalf = await darkModeImage
    .extract({ left: 700, top: 0, width: 700, height: 735 })
    .toBuffer();

  const combinedImageBuffer = await sharp({
    create: {
      width: 1400,
      height: 735,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      { input: lightLeftHalf, top: 0, left: 0 },
      { input: darkRightHalf, top: 0, left: 700 },
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('app/opengraph-image.png', combinedImageBuffer);
  console.log('OG image generated successfully.');
}

generateImages().catch(console.error);
