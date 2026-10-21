# People photo guide

The People page is ready for portrait photos. Store final images in `dist/assets/people/` and use lowercase, hyphenated filenames, for example:

- `mark-warschauer.jpg`
- `tamara-tate.jpg`
- `waverly-tseng.jpg`

## Recommended image preparation

- Use a consistent portrait crop, preferably 4:3 or square.
- Export JPEG or WebP at approximately 1200 px on the longest side.
- Keep each file under 400 KB where practical.
- Use a neutral or uncluttered background when possible.
- Obtain permission from each person before publishing their portrait.

## Replacing a placeholder

Inside the corresponding `.person-photo` block in `dist/people.html`, replace the initials placeholder:

```html
<div class="person-placeholder" aria-label="Photo placeholder for Mark Warschauer">MW</div>
```

with an image:

```html
<img src="assets/people/mark-warschauer.jpg" alt="Mark Warschauer">
```

The existing CSS will crop each photo consistently without changing the card layout.
