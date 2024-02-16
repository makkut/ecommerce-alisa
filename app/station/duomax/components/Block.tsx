const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-black w-full flex justify-center py-2 text-white">
      <div className="w-[330px] h-[213px] rounded-2xl bg-gradient-to-tl from-block-from to-block-to truncate">
        <p className="pt-5 pl-3">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Block;
