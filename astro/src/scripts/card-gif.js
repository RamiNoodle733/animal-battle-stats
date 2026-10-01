// GIFs of the share videos: the same reel (card-reel.js) drawn frame by frame
// at a smaller size and encoded in the browser (gifenc). One palette for the
// whole GIF, taken from moments across the reel, and every frame after the
// first stores only the pixels that changed (the rest is transparent over the
// frame before), which keeps the file small. Loops forever.
import { GIFEncoder, quantize, applyPalette } from 'gifenc';

export const GIF_FPS = 12.5; // 80 ms a frame: GIF delays are in hundredths of a second

const pause = () => new Promise((resolve) => { setTimeout(resolve, 0); });

// reel: { canvas, duration, draw(ctx, t) }. Returns the GIF's bytes.
export async function encodeGif(reel, { width = 360, onFrame, signal } = {}) {
    const height = Math.round((width * reel.canvas.height) / reel.canvas.width);
    const full = reel.canvas.getContext('2d');
    const small = document.createElement('canvas');
    small.width = width;
    small.height = height;
    const ctx = small.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingQuality = 'high';
    const grab = (t) => {
        reel.draw(full, t);
        ctx.drawImage(reel.canvas, 0, 0, width, height);
        return ctx.getImageData(0, 0, width, height).data;
    };
    const stop = () => { if (signal?.aborted) throw new DOMException('Cancelled', 'AbortError'); };

    // the palette: every other pixel of six moments, 255 colours (one is kept for "unchanged")
    const moments = 6;
    const stride = 2;
    const pixels = width * height;
    const sample = new Uint8Array(Math.ceil(pixels / stride) * 4 * moments);
    let offset = 0;
    for (let index = 0; index < moments; index += 1) {
        stop();
        const data = grab((reel.duration * (index + 0.5)) / moments);
        for (let pixel = 0; pixel < pixels; pixel += stride) {
            sample.set(data.subarray(pixel * 4, pixel * 4 + 4), offset);
            offset += 4;
        }
        await pause();
    }
    const colours = quantize(sample.subarray(0, offset), 255);
    const unchanged = colours.length;
    const palette = [...colours, [0, 0, 0]];

    const gif = GIFEncoder();
    const frames = Math.max(1, Math.round(reel.duration * GIF_FPS));
    const delay = 1000 / GIF_FPS;
    let previous = null;
    for (let frame = 0; frame < frames; frame += 1) {
        stop();
        const index = applyPalette(grab(Math.min(reel.duration, frame / GIF_FPS)), colours);
        if (!previous) {
            gif.writeFrame(index, width, height, { palette, delay, repeat: 0 });
        } else {
            const changes = new Uint8Array(index.length);
            for (let pixel = 0; pixel < index.length; pixel += 1) changes[pixel] = index[pixel] === previous[pixel] ? unchanged : index[pixel];
            gif.writeFrame(changes, width, height, { delay, transparent: true, transparentIndex: unchanged, dispose: 1 });
        }
        previous = index;
        onFrame?.((frame + 1) / frames);
        await pause();
    }
    gif.finish();
    small.width = 0;
    small.height = 0;
    return gif.bytes();
}
