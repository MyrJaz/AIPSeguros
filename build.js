// Static site build script. Plain Node, no dependencies.
// Stitches src/partials/{head-meta,header,footer}.html around each page's
// src/pages/<contentFile> and writes the result to <outputDir>/index.html,
// mirroring the site's existing URL structure (e.g. /conocenos/index.html).
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const pages = require("./pages.config.js");

const headMeta = fs.readFileSync(path.join(ROOT, "src/partials/head-meta.html"), "utf8");
const header = fs.readFileSync(path.join(ROOT, "src/partials/header.html"), "utf8");
const footer = fs.readFileSync(path.join(ROOT, "src/partials/footer.html"), "utf8");

// Publish generated CSS to css/generated/ (shared blocks) and css/pages/ (per-page blocks).
// Each output dir is wiped first so stale files from renamed/removed sources don't linger.
function publishDir(srcDir, outDir) {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    fs.copyFileSync(path.join(srcDir, file), path.join(outDir, file));
  }
}
publishDir(path.join(ROOT, "src/css/generated"), path.join(ROOT, "css/generated"));
publishDir(path.join(ROOT, "src/css/pages"), path.join(ROOT, "css/pages"));

function baseFor(outputDir) {
  if (outputDir === ".") return "";
  const depth = outputDir.split("/").filter(Boolean).length;
  return "../".repeat(depth);
}

function fillTemplate(str, vars) {
  return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (!(key in vars)) throw new Error(`Missing template var {{${key}}} while building`);
    return vars[key];
  });
}

for (const page of pages) {
  const base = baseFor(page.outputDir);
  const content = fs.readFileSync(path.join(ROOT, "src/pages", page.contentFile), "utf8");

  const vars = {
    BASE: base,
    SLUG: page.slug,
    TITLE: page.title,
    CANONICAL: page.canonical,
    BODY_CLASS: page.bodyClass,
    ARTICLE_ID: page.articleId,
    ARTICLE_CLASS: page.articleClass,
    PAGE_TITLE_BAR: page.titleBar || "",
  };

  const html =
    fillTemplate(headMeta, vars) +
    fillTemplate(header, vars) +
    fillTemplate(content, vars) +
    fillTemplate(footer, vars);

  const outDir = path.join(ROOT, page.outputDir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  console.log(`built ${page.outputDir === "." ? "index.html" : page.outputDir + "/index.html"}`);
}
