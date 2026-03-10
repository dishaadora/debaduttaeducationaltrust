export default function BackgroundGrid() {
  const verticalLines = 5;
  const horizontalLines = 3;

  return (
    <div className="fixed inset-0 z-8 pointer-events-none">
      {/* Vertical Lines */}
      {Array.from({ length: verticalLines }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="grid-line vertical"
          style={{ left: `${((i + 1) / (verticalLines + 1)) * 100}%` }}
        />
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: horizontalLines }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="grid-line horizontal"
          style={{ top: `${((i + 1) / (horizontalLines + 1)) * 100}%` }}
        />
      ))}
    </div>
  );
}

