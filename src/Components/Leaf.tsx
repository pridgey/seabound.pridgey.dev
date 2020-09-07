import { CanvasPoint } from "./../Types";
import { CalculateRotationPoint, RandomNumber } from "./../Utilities";

const ConstructCurve = (
  ctx: CanvasRenderingContext2D,
  rotation: number,
  size: number,
  startingPoint: CanvasPoint,
  reverse?: boolean
) => {
  const endPoint: CanvasPoint = CalculateRotationPoint(
    rotation,
    size,
    startingPoint
  );

  const pointARotation = RandomNumber(10, 15);
  const pointALength = RandomNumber(10, 50);
  const conPointA: CanvasPoint = CalculateRotationPoint(
    rotation + (reverse ? -pointARotation : pointARotation),
    size * pointALength * 0.01,
    startingPoint
  );

  const pointBRotation = RandomNumber(20, 45);
  const pointBLength = RandomNumber(50, 80);
  const conPointB: CanvasPoint = CalculateRotationPoint(
    rotation + (reverse ? -pointBRotation : pointBRotation),
    size * pointBLength * 0.01,
    startingPoint
  );

  ctx.moveTo(startingPoint.x, startingPoint.y);
  ctx.bezierCurveTo(
    conPointA.x,
    conPointA.y,
    conPointB.x,
    conPointB.y,
    endPoint.x,
    endPoint.y
  );
};

export const Leaf = (
  ctx: CanvasRenderingContext2D,
  point: CanvasPoint,
  rotation?: number
) => {
  // Creates a new Leaf
  const sizeOfLeaf = RandomNumber(50, 75);

  ctx.beginPath();

  ConstructCurve(ctx, rotation || 0, sizeOfLeaf, point);
  ConstructCurve(ctx, rotation || 0, sizeOfLeaf, point, true);

  // Fill in
  const randomColor = RandomNumber(0, 4);
  let color = "#1b4831";
  switch (randomColor) {
    case 0:
    default:
      color = "#6dad85";
      break;
    case 1:
      color = "#298657";
      break;
    case 2:
      color = "#57a48d";
      break;
    case 3:
      color = "#4c8651";
      break;
    case 4:
      color = "#22443e";
      break;
  }

  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  ctx.fill();
  ctx.closePath();
};
