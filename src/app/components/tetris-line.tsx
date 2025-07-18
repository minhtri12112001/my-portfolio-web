import { TetrisBlock } from "./tetris-block";

export const TetrisLine = ({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) => (
  <div className={`absolute ${className}`}>
    <div className={`grid gap-1 ${vertical ? "grid-rows-4" : "grid-cols-4"}`}>
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
    </div>
  </div>
);
