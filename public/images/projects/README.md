# project images

drop per-project images here, keyed by slug:

```
public/images/projects/
├── le-the-forge/
│   ├── cover.png   # 1600×900, used in og + case study hero
│   └── screen-1.png
├── baseball-os/
│   ├── cover.png
│   └── screen-1.png
└── lineup-lab/
    ├── cover.png
    └── screen-1.png
```

## dimensions

- **cover**: 1600×900 (16:9). used in the case-study hero and fallback og.
- **screens**: any width, target ≤ 1920px longest side. next/image will
  resize for the viewport.
- **format**: png for crisp ui screenshots, jpg for photos. next will
  serve avif/webp.

reference each image from mdx with a relative url, e.g.
`/images/projects/le-the-forge/screen-1.png`.
