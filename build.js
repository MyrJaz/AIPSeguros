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

// WPBakery only enqueues these per component actually used on a page (tabs,
// accordion, round-chart widgets). pages.config lists which ones each page
// needs via `vcComponents`, and this map supplies the matching <script> tags.
const VC_COMPONENT_SCRIPTS = {
  tabs: [
    '<script type="text/javascript" src="{{BASE}}wp-content/plugins/js_composer/assets/lib/vc/vc_accordion/vc-accordion.min.js" id="vc_accordion_script-js"></script>',
    '<script type="text/javascript" src="{{BASE}}wp-content/plugins/js_composer/assets/lib/vc/vc-tta-autoplay/vc-tta-autoplay.min.js" id="vc_tta_autoplay_script-js"></script>',
    '<script type="text/javascript" src="{{BASE}}wp-content/plugins/js_composer/assets/lib/vc/vc_tabs/vc-tabs.min.js" id="vc_tabs_script-js"></script>',
  ],
  roundChart: [
    '<script type="text/javascript" src="{{BASE}}wp-content/plugins/js_composer/assets/lib/vendor/node_modules/chart.js/dist/chart.min.js" id="ChartJS-js"></script>',
    '<script type="text/javascript" src="{{BASE}}wp-content/plugins/js_composer/assets/lib/vc/vc_round_chart/vc_round_chart.min.js" id="vc_round_chart-js"></script>',
  ],
};

// Same idea as VC_COMPONENT_SCRIPTS but for the matching per-component stylesheet.
const VC_COMPONENT_STYLES = {
  tabs: [
    '<link rel=\'stylesheet\' id=\'vc_tta_style-css\' href=\'{{BASE}}wp-content/plugins/js_composer/assets/css/js_composer_tta.min.css\' type=\'text/css\' media=\'all\' />',
  ],
};

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
    EXTRA_SCRIPTS: (page.vcComponents || [])
      .flatMap((name) => VC_COMPONENT_SCRIPTS[name])
      .join("\n")
      .replace(/\{\{BASE\}\}/g, base),
    EXTRA_STYLES: (page.vcComponents || [])
      .flatMap((name) => VC_COMPONENT_STYLES[name] || [])
      .join("\n")
      .replace(/\{\{BASE\}\}/g, base),
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
