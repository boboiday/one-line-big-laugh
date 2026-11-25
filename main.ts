// One Line, Big Laugh — make.fun entry
// Prints one hilarious line (160 chars, gate 1-200) and validates the length.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You pay $14 for hotel Wi-Fi. The portal asks for your email, your room number, your firstborn — then the signal dies and the lobby sign blinks: 'complimentary.'";

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry must be 1-200 chars, got ${LINE.length}`);
  process.exit(1);
}

console.log(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
