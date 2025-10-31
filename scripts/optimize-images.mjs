#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const imagesDir = join(publicDir, 'images');

const sizes = {
  hero: [400, 800, 1024],
  card: [400, 662, 1024],
  logo: [128],
  badge: [253]
};

const imagesToOptimize = [
  { input: 'feature1.jpg', type: 'hero', dir: 'images' },
  { input: 'friends1.png', type: 'card', dir: 'images' },
  { input: 'friends2.png', type: 'card', dir: 'images' },
  { input: 'friends3.png', type: 'card', dir: 'images' },
  { input: 'logo-128.png', type: 'logo', dir: 'images' },
  { input: 'google-play-badge.png', type: 'badge', dir: 'images' },
];

async function optimizeImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const stats = await sharp(outputPath).metadata();
    console.log(`✅ ${basename(outputPath)} (${stats.width}x${stats.height}) - ${Math.round(stats.size / 1024)}KB`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de imagens...\n');

  for (const image of imagesToOptimize) {
    const inputPath = join(publicDir, image.dir, image.input);
    const baseName = basename(image.input, extname(image.input));
    const widths = sizes[image.type];

    console.log(`📸 Processando: ${image.input}`);

    for (const width of widths) {
      const outputFileName = widths.length > 1
        ? `${baseName}-${width}.webp`
        : `${baseName}.webp`;

      const outputPath = join(publicDir, image.dir, outputFileName);
      await optimizeImage(inputPath, outputPath, width);
    }
    console.log('');
  }

  console.log('✨ Otimização concluída!');
}

main();
