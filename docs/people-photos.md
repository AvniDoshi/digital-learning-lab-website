# People photo guide

The People page uses the portraits published on the current Digital Learning Lab website. The repository copies are stored in `dist/assets/people/` using lowercase, hyphenated filenames, for example:

- `mark-warschauer.jpg`
- `tamara-tate.jpg`
- `waverly-tseng.jpg`

## Recommended image preparation

- Use a consistent portrait crop, preferably 4:3 or square.
- Export JPEG or WebP at approximately 1200 px on the longest side.
- Keep each file under 400 KB where practical.
- Use a neutral or uncluttered background when possible.
- Obtain permission from each person before publishing their portrait.

## Replacing a portrait

Replace the corresponding file in `dist/assets/people/` while preserving its filename, or update the image path in both `dist/people.html` and `dist/assets/person-profile.js`.

The People card markup follows this pattern:

```html
<img src="assets/people/mark-warschauer.jpg" alt="Mark Warschauer">
```

The existing CSS will crop each photo consistently without changing the card layout.

## Profile pages

Each person in Leadership, Lab Staff, and Graduate Students has an individual HTML page in `dist/people/`. Shared profile content is maintained in `dist/assets/person-profile.js` so roles, biographies, interests, and professional links can be updated in one place.

## Sources

- Portraits: the public [Digital Learning Lab People page](https://www.digitallearninglab.org/people.html)
- Biographical and research details: public UC Irvine faculty, staff, and doctoral directory pages, plus personal academic websites linked from each profile when available
