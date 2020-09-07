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

      let x = 0;
      let y = startingY;

      for (let i = 0; i < 500; i++) {
        const r = RandomNumber(0, 360);
        const perl = Noise.perlin2((x * 1) / Period, (y * 1) / Period);

        Leaf(ctx, { x, y }, r);

        const newAngle = perl * 2 * Math.PI;
        console.log(Math.cos(newAngle));
        console.log(Math.sin(newAngle));

        x += Math.abs(Math.cos(newAngle) * 10);
        y += Math.sin(newAngle) * RandomNumber(1, 5);
      }
    };

    treeBranch(window.innerHeight / 3);
    treeBranch(window.innerHeight / 5);
    treeBranch(0);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
    treeBranch(Math.random() * window.innerHeight);
  }, []);

  return (
    <canvas
      id="scene"
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};
