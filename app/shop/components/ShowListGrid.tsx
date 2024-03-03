interface ShowListGridProps {
  func: () => void;
  children: React.ReactNode;
  show: boolean;
}

const ShowListGrid: React.FC<ShowListGridProps> = ({
  func,
  show,
  children,
}) => {
  return (
    <>
      <span
        onClick={func}
        className={`${
          show
            ? "border-[1px] border-gray-300 text-black"
            : "bg-primeColor text-[#737373]"
        } w-8 h-8 text-base flex items-center justify-center cursor-pointer`}
      >
        {children}
      </span>
    </>
  );
};
export default ShowListGrid;
