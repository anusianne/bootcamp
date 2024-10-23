import Box from "./Box";

export default function BoxGrid({ numBoxes = 9 }) {
  return (
    <div className="BoxGrid">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}
