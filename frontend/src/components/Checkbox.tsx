export default function SquareCheckbox({
  isSelected,
  handleCheckbox,
  label,
  checkboxSelectedClass,
  checkboxNotSelectClass,
  labelClass,
}: {
  isSelected: boolean;
  handleCheckbox: any;
  label: string;
  checkboxSelectedClass?: string;
  checkboxNotSelectClass?: string;
  labelClass?: string;
}) {
  return (
    <div className="w-full flex items-center gap-3" onClick={handleCheckbox}>
      <div
        className={`relative max-w-[20px] w-full h-[20px] rounded-md border hover:cursor-pointer ${
          isSelected
            ? `bg-black border-black after:absolute after:contents[' '] after:left-[6px] after:top-[2px] after:w-[6px] after:h-[12px] after:border-white after:border-s-[0px] after:border-b-[2.8px] after:border-r-[2.8px] after:rotate-45 after:rounded-sm ${checkboxSelectedClass}`
            : `bg-transparent border-[#D0D5DD] ${checkboxNotSelectClass}`
        }`}
      ></div>
      <span
        className={`font-normal text-sm leading-4 cursor-pointer text-blackText ${labelClass}`}
      >
        {label}
      </span>
    </div>
  );
}
