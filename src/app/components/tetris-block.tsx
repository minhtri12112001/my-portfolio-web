export const TetrisBlock = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-orange-500 border-2 border-orange-400 ${className} rounded-md`}
  >
    {children}
  </div>
);
