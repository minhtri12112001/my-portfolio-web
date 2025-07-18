import { TetrisBlock } from "./tetris-block";

export const TetrisSquare = ({ className }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <div className="grid grid-cols-2 gap-1">
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
      <TetrisBlock className="w-6 h-6" />
    </div>
  </div>
);
