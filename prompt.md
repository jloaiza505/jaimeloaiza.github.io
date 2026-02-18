Create a new project page for my portfolio website using:

1) Template file:
`projects/project-template.html`

2) Source markdown:
`<PASTE_RAW_MARKDOWN_URL_OR_LOCAL_PATH>`

3) Project slug (folder/file id):
`<project-slug>` 
(example: `ros2-diff-drive-control-demo`)

Requirements:
- Create `projects/<project-slug>.html` populated from the markdown content.
- Keep structure, typography, nav, and styling consistent with existing project pages and global styles.
- Use nav link order exactly: `Home` then `All Projects`.
- Use hero banner path:
  `../assets/images/<project-slug>/banner.png`
- Create image folder if missing:
  `assets/images/<project-slug>/`
  and include `.gitkeep` if needed.
- Convert markdown sections into clean HTML sections (`h2`, `h3`, paragraphs, ul/ol).
- Convert command snippets into `<pre><code>` blocks (copy button is handled by shared script).
- Ensure inline code uses `<code>...</code>`.
- For project media blocks, use:
  `<div class="card-media project-media"><img ...></div>`
  and avoid fixed-height/cropping behavior.
- Place `main_results.png` (or equivalent primary result image from markdown) at the start of Results when applicable.
- Add/confirm script include at bottom:
  `<script src="../js/code-blocks.js"></script>`
- Add/update project entry in `data/projects.js`:
  - `id`, `title`, `category`, `summary`, `stack`, `result`, `ready_to_publish`, `github`, `link`, `image`.
- Ensure card image fallback uses:
  `assets/images/<project-slug>/card.png`
- Keep GitHub buttons using `.github-btn`.
- If homepage featured cards are used, keep `View project details` + `GITHUB REPO` side-by-side.
- Preserve existing site conventions; do not break other pages.

After edits:
- Validate changed files for syntax/format issues.
- Summarize exactly which files were created/modified.
- List any placeholder images/files I still need to add.
- Ask me whether I would like to add project to homepage featured list in `data/site-config.js` under the correct category.