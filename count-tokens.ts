import * as ts from "typescript";
import { readFileSync } from "fs";

const files = [
  { file: "kite.ts", name: "Kite" },
  { file: "gill.ts", name: "Gill" },
  { file: "kit.ts", name: "Solana Kit" },
  { file: "framework-kit.ts", name: "Framework Kit" },
  { file: "umi.ts", name: "Umi" },
  { file: "web3js.ts", name: "web3.js v1" },
  { file: "web3js-with-solana-helpers.ts", name: "web3.js v1 + helpers" },
];

interface TokenCount {
  name: string;
  tokens: number;
}

const countTokens = (filePath: string): number => {
  const sourceCode = readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceCode,
    ts.ScriptTarget.Latest,
    true
  );

  let tokenCount = 0;

  const visit = (node: ts.Node) => {
    if (
      node.kind !== ts.SyntaxKind.EndOfFileToken &&
      node.kind !== ts.SyntaxKind.SingleLineCommentTrivia &&
      node.kind !== ts.SyntaxKind.MultiLineCommentTrivia
    ) {
      const tokenText = node.getText(sourceFile).trim();
      if (tokenText.length > 0) {
        tokenCount++;
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return tokenCount;
};

const results: Array<TokenCount> = [];

for (const fileEntry of files) {
  const tokens = countTokens(fileEntry.file);
  results.push({ name: fileEntry.name, tokens });
}

results.sort((a, b) => a.tokens - b.tokens);

const minTokens = results[0].tokens;

console.log("\n=== Token Count Results ===\n");

for (const result of results) {
  const extraTokens = result.tokens - minTokens;

  let moreCodeIndicator = "";
  if (extraTokens > 0) {
    const percentageMore = (((result.tokens - minTokens) / minTokens) * 100).toFixed(1);
    moreCodeIndicator = ` (${percentageMore}% more code)`;
  }

  console.log(
    `${result.name.padEnd(25)} ${result.tokens
      .toString()
      .padStart(4)} tokens${moreCodeIndicator}`
  );
}

console.log();
