import { cn } from "@/lib/utils";

interface BlockProps {
  title: string;
  classN?: string;
  classN2?: string;
  col?: string;
  children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({
  title,
  classN,
  classN2,
  col,
  children,
}) => {
  return (
    <div className={cn("bg-black flex justify-center py-2 text-white", col)}>
      <div
        className={cn(
          "w-[330px] h-[213px] rounded-2xl bg-gradient-to-tl from-block-from to-block-to overflow-hidden",
          classN
        )}
      >
        <p className={cn("pt-5 pl-3 text-wrap!", classN2)}>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Block;
