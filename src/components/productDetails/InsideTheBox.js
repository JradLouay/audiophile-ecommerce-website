function InsideTheBox({ includes }) {
  return (
    <div className="flex flex-col gap-8 sm:flex-row lg:flex-col">
      <h3 className="min-w-[unset] sm:min-w-[339px]">Inside the box</h3>
      <div className="flex flex-col gap-2">
        {includes.map((element) => (
          <div key={element.item} className="flex gap-6">
            <p className="body text-[#D87D4A]">{element.quantity}x</p>
            <div className="body text-black opacity-50">{element.item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsideTheBox;
