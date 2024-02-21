function InsideTheBox() {
  return (
    <div className="flex-col sm:flex-row lg:flex-col gap-8 flex">
      <h3 className="sm:min-w-[339px] min-w-[unset]">Inside the box</h3>
      <div className="flex-col gap-2 flex">
        <div className="gap-6 flex">
          <p className="text-[#D87D4A] body">1x</p>
          <dipv className="opacity-50 text-black body">Headphone Unit</dipv>
        </div>
        <div className="gap-6 flex">
          <p className="text-[#D87D4A] body">2x</p>
          <dipv className="opacity-50 text-black body">
            Replacement Earcups
          </dipv>
        </div>
        <div className=" gap-6 flex">
          <p className="text-[#D87D4A] body">3x</p>
          <dipv className="opacity-50 text-black body">User Manual</dipv>
        </div>
      </div>
    </div>
  );
}

export default InsideTheBox;
