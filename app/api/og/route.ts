// app/api/og/route.ts
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

export async function GET() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport size to 1400x735 pixels
  await page.setViewport({ width: 1400, height: 735 });

  // Define URLs for light and dark modes
  const lightModeUrl = 'http://127.0.0.1:3000/?theme=light';
  const darkModeUrl = 'http://127.0.0.1:3000/?theme=dark';

  // Take screenshots
  await page.goto(lightModeUrl, { waitUntil: 'networkidle2' });
  const lightModeScreenshot = await page.screenshot({ type: 'png' });

  await page.goto(darkModeUrl, { waitUntil: 'networkidle2' });
  const darkModeScreenshot = await page.screenshot({ type: 'png' });

  await browser.close();

  // Convert Uint8Array to Buffer if needed
  const lightModeBuffer = Buffer.isBuffer(lightModeScreenshot) ? lightModeScreenshot : Buffer.from(lightModeScreenshot);
  const darkModeBuffer = Buffer.isBuffer(darkModeScreenshot) ? darkModeScreenshot : Buffer.from(darkModeScreenshot);

  // Create Sharp instances
  const lightModeImage = sharp(lightModeBuffer);
  const darkModeImage = sharp(darkModeBuffer);

  // Extract the left half of the light image and the right half of the dark image
  const lightLeftHalf = await lightModeImage.extract({ left: 0, top: 0, width: 700, height: 735 }).toBuffer();
  const darkRightHalf = await darkModeImage.extract({ left: 700, top: 0, width: 700, height: 735 }).toBuffer();

  // Create a combined image with the left half from the light mode and the right half from the dark mode
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

  // Respond with the combined image as binary data
  return new NextResponse(combinedImageBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
