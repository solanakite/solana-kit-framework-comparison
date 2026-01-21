# Solana TypeScript Library Comparison

This repository compares different Solana TypeScript libraries by implementing the same simple task: creating a wallet on devnet, airdropping 1 SOL to it, and sending a memo transaction.

The example was originally taken from the https://www.gillsdk.com/api/gill and adapted for comparison across different libraries.

Code complexity is measured by counting programming tokens (keywords, identifiers, operators, literals, punctuation) while excluding comments and whitespace. Token counting is performed using the TypeScript Compiler API.

## Libraries Compared

- [Solana Kit](https://solanakit.com)
- [Solana Kite](https://solanakite.org)
- [Gill](https://www.gillsdk.com)
- [Framework Kit](https://github.com/solana-foundation/framework-kit)
- [Metaplex Umi](https://github.com/metaplex-foundation/umi)
- [web3.js v1](https://solana-labs.github.io/solana-web3.js/)
- [web3.js v1 with @solana-developers/helpers](https://github.com/solana-developers/helpers)
- [Helius SDK](https://github.com/helius-labs/helius-sdk)

## Token Counting

```bash
npx tsx count-tokens.ts
```

## Results

Run `npx tsx count-tokens.ts` to see the results. As of 2026 01 21, they are:

```
=== Token Count Results ===

Kite                        79 tokens
Framework Kit               99 tokens (25.3% more code)
web3.js v1 + helpers       122 tokens (54.4% more code)
web3.js v1                 145 tokens (83.5% more code)
Gill                       157 tokens (98.7% more code)
Umi                        182 tokens (130.4% more code)
Helius SDK                 247 tokens (212.7% more code)
Solana Kit                 251 tokens (217.7% more code)
```

## Running the Examples

```bash
npx tsx kite.ts
npx tsx gill.ts
npx tsx kit.ts
npx tsx framework-kit.ts
npx tsx umi.ts
npx tsx web3js.ts
npx tsx web3js-with-solana-helpers.ts
npx tsx helius-sdk.ts
```
