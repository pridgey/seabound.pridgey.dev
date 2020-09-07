import React, { useEffect } from "react";
import { Leaf } from "./Components";
import { RandomNumber, Perlin } from "./Utilities";

export const Scene = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement =
      (document.getElementById("scene") as HTMLCanvasElement) ||
      document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    const treeBranch = (startingY: number) => {
      const Noise = new Perlin(Math.random());
      const Period = RandomNumber(1000, 2000);
      const Direction = Math.random() > 0.5 ? -1 : 1;

      let x = window.innerWidth / 2;
      let y = startingY;

      for (let i = 0; i < 100; i++) {
        const r = RandomNumber(0, 360);
        const perl = Noise.perlin2((x * 1) / Period, (y * 1) / Period);

        Leaf(ctx, { x, y }, "#22443e", r);

        const newAngle = perl * 2 * Math.PI;

        x += Math.abs(Math.cos(newAngle) * RandomNumber(5, 8)) * Direction;
        y += Math.sin(newAngle) * RandomNumber(1, 5);
      }

      x = window.innerWidth / 2;
      y = startingY;

      for (let i = 0; i < 70; i++) {
        const r = RandomNumber(0, 360);
        const perl = Noise.perlin2((x * 1) / Period, (y * 1) / Period);

        Leaf(ctx, { x, y }, "#298657", r);

        const newAngle = perl * 2 * Math.PI;

        x += Math.abs(Math.cos(newAngle) * RandomNumber(8, 10)) * Direction;
        y += Math.sin(newAngle) * RandomNumber(1, 5);
      }

      x = window.innerWidth / 2;
      y = startingY;

      for (let i = 0; i < 50; i++) {
        const r = RandomNumber(0, 360);
        const perl = Noise.perlin2((x * 1) / Period, (y * 1) / Period);

        Leaf(ctx, { x, y }, "#57a48d", r);

        const newAngle = perl * 2 * Math.PI;

        x += Math.abs(Math.cos(newAngle) * RandomNumber(10, 15)) * Direction;
        y += Math.sin(newAngle) * RandomNumber(1, 5);
      }
    };

    for (let i = 1; i < 50; i++) {
      const height = 1 - i * 0.01;
      treeBranch(window.innerHeight * height);
    }
  }, []);

  return (
    <canvas
      id="scene"
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};
