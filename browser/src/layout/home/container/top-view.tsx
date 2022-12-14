export const TopViewCtn = () => {
  return (
    <div className="">
      <h1 className="m-0 p-0 text-[24px] pb-2 border-b">Top View</h1>
      <div className="mx-0 my-2">
        <div className="min-h-[200px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el, index) => (
            <div className="px-4 py-5 flex flex-row items-center mb-[-1px]">
              <span className="float-left flex-none ml-1 p-2 text-[20px] font-bold bg-transparent text-blue-500">
                {index + "."}
              </span>
              <span className="text-[13px] font-['r_conde_regular']">
                Tour du lịch Sài Gòn Miền Tây 1 ngày | Về thăm làng hoa Sa Đéc
                ngút ngàn
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
