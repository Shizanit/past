import { EditorView } from "@/components/editor/editor-view";
import { env } from "@/lib/env";
import { Suspense } from "react";
import readmeRaw from "@/../../README.md";

export default function AboutPage() {
  let readme = readmeRaw as string;
  readme = readme.replace(
    '<a href="https://vercel.com/new/project?template=jozsefsallai/fastbin-rewritten"><img width="128" src="https://vercel.com/button" alt="One-click Deployment" /></a>',
    "https://vercel.com/new/project?template=jozsefsallai/fastbin-rewritten",
  );
  readme = readme.replace(
    '<a href="https://app.netlify.com/start/deploy?repository=https://github.com/jozsefsallai/fastbin-rewritten"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>',
    "https://app.netlify.com/start/deploy?repository=https://github.com/jozsefsallai/fastbin-rewritten",
  );
  readme = readme.replace(
    "[ABUSE_REPORT_EMAIL]",
    env.ABUSE_REPORT_EMAIL ?? "[EMAIL NOT PROVIDED]",
  );

  return (
    <Suspense>
      <EditorView contents={readme} languageId="markdown" readOnly />
    </Suspense>
  );
}
