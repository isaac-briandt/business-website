export default function TipSection({ title }: { title: string }) {
  return (
    <div className="flex gap-[20px] sm:gap-[47px]">
      <div className="w-[5px] h-[133px] bg-[#279AED] mt-[56px] rounded-[5px]"></div>
      <div className="flex flex-col w-[322px] gap-[16px]">
        <p className="font-bold text-[18px]">{title}</p>
        <p
          style={{ fontFamily: "Inter" }}
          className="leading-[30px] text-[16px]"
        >
          Lorem ipsum dolor sit amet consectetur. Massa ipsum quam amet amet mi
          odio tempor Lorem ipsum dolor sit amet consectetur. Massa ipsum quam
          amet amet mi odio tempor
        </p>
      </div>
    </div>
  );
}
