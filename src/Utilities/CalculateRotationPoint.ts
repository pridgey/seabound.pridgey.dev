import { CanvasPoint } from "./../Types";

export const CalculateRotationPoint = (
  rotationalAngle: number,
  sizeOfItem: number,
  startingPoint: CanvasPoint
): CanvasPoint => {
  const resultingPoint: CanvasPoint = {
    x: startingPoint.x,
    y: startingPoint.y + sizeOfItem,
  };

  if (rotationalAngle !== 0) {
    const oppositeLength =
      Math.round(
        Math.sin((rotationalAngle * Math.PI) / 180) * sizeOfItem * 10000
      ) / 10000;
    const adjacentLength =
      Math.round(
        (oppositeLength / Math.tan((rotationalAngle * Math.PI) / 180)) * 10000
      ) / 10000;

    resultingPoint.x = startingPoint.x + oppositeLength;
    resultingPoint.y = startingPoint.y + adjacentLength;
  }

  return resultingPoint;
};
