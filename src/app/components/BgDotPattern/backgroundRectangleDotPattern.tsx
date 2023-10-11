export const BackgroundRectangleDotPattern = ({
  width = 500,
  height = 500,
  numDots = 100,
}) => {
  const randomInRange = (min = 0, max = width) => {
    return Math.random() * (max - min) + min;
  };

  const circles = Array.from({ length: numDots }).map((_, i) => {
    const x = randomInRange(0, width);
    const y = randomInRange(0, height);
    const animationDuration = `${randomInRange(30, 120)}s`; // Random animation duration between 1 to 5 seconds
    // an array of gold colors
    const colors = [
      "#ffc400",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
      "#ffab00",
      "#ff6d00",
      "#ff9100",
      "#ff3d00",
      "#ff8f00",
      "#ff6f00",
      "#ff9100",
    ];

    return (
      <circle
        cx={x}
        cy={y}
        r={2}
        fill={colors[Math.floor(Math.random() * colors.length)]}
        key={i}
        style={{
          animation: `bounce ${animationDuration} ease-in-out infinite alternate, fade ${animationDuration} ease-in-out infinite alternate`,
        }}
      />
    );
  });

  return (
    <svg width={width} height={height}>
      {circles}
    </svg>
  );
};
