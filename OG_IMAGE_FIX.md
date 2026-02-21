# 🔧 Fix Open Graph Image

## Problem
Current `meta-image.png` is **530x820** (portrait)
Should be **1200x630** (landscape, 1.91:1 ratio)

## Solution: Resize Image

### Option 1: Using Online Tool
1. Go to: https://www.iloveimg.com/resize-image
2. Upload `public/images/meta-image.png`
3. Resize to: **1200 x 630 pixels**
4. Download and replace file

### Option 2: Using Photoshop/Figma
1. Open `meta-image.png`
2. Image Size: 1200 x 630 pixels
3. Export as PNG
4. Replace `public/images/meta-image.png`

### Option 3: Using ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick

# Resize (will maintain aspect ratio)
magick public/images/meta-image.png -resize 1200x630^ -gravity center -extent 1200x630 public/images/meta-image-resized.png

# Replace
mv public/images/meta-image-resized.png public/images/meta-image.png
```

### Option 4: Using Preview (Mac)
1. Open `meta-image.png` in Preview
2. Tools > Adjust Size...
3. Width: 1200, Height: 630
4. Scale proportionally: OFF
5. Save

## After Resize

1. **Commit & Push:**
   ```bash
   git add public/images/meta-image.png
   git commit -m "Fix OG image size to 1200x630"
   git push
   ```

2. **Clear Cache:**
   - Go to: https://developers.facebook.com/tools/debug/
   - Paste your production URL
   - Click "Scrape Again" 3-5 times

3. **Test Again:**
   - Share link di WhatsApp
   - Should show new image

## Recommended Image Specs

- **Size**: 1200 x 630 pixels (exact)
- **Ratio**: 1.91:1 (landscape)
- **Format**: PNG or JPG
- **File Size**: < 8MB (ideally < 1MB)
- **Content**: Center important elements (avoid edges)

## Why This Size?

- **Facebook/WhatsApp**: 1200x630 optimal
- **Twitter**: 1200x600 (close enough)
- **LinkedIn**: 1200x627 (close enough)
- **1.91:1 ratio** is the sweet spot for all platforms
