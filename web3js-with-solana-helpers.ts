
import { Connection, Keypair, Transaction, TransactionInstruction, sendAndConfirmTransaction, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { airdropIfRequired, makeKeypairs } from "@solana-developers/helpers";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const [user] = makeKeypairs(1);

await airdropIfRequired(
  connection,
  user.publicKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

const memoProgramId = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");

const memoInstruction = new TransactionInstruction({
  keys: [],
  programId: memoProgramId,
  data: Buffer.from("hello world!", "utf-8"),
});

const transaction = new Transaction().add(memoInstruction);

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [user],
  {
    commitment: "confirmed",
    skipPreflight: true,
  }
);

console.log(signature);
