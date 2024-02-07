import cn from "classnames";

type PaginationButtonProps = {
  icon: React.ReactElement | string | number;
  disabled?: boolean;
  selected?: boolean;
  threeDots?: boolean;
  handleOnclick?: () => void;
};

const PaginationButton = ({
  icon,
  disabled,
  selected,
  threeDots,
  handleOnclick,
}: PaginationButtonProps) => (
  <div
    className={cn(
      "grid justify-items-center content-center w-12 h-8 border text-gray-400 bg-black bg-opacity-20 rounded border-inherit cursor-pointer select-none",
      {
        "text-white bg-blue-dark": selected,
        "text-slate-200 cursor-default pointer-events-none": disabled,
        "cursor-default pointer-events-none": threeDots,
      }
    )}
    onClick={handleOnclick}
  >
    {icon}
  </div>
);

export default PaginationButton;
