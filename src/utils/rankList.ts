export default function rankList() {
  const left = Array.from({ length: 5 }, (_, i) => i);
  const right = Array.from({ length: 5 }, (_, i) => i + 5);

  return left.flatMap((v, i) => [v, right[i]]);
}
