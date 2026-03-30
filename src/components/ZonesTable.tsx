interface ZonesTableProps {
  asset: string;
  supplyHigh: string;
  supplyLow: string;
  demandHigh: string;
  demandLow: string;
}

function ZonesTable({
  asset,
  supplyHigh,
  supplyLow,
  demandHigh,
  demandLow
}: ZonesTableProps) {
  return (
    <div className="w-full font-mono text-sm mt-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
         <div className="text-[10px] text-[#00ff00] tracking-widest uppercase">{asset} ZONES</div>
         <div className="text-[10px] text-gray-600 uppercase tracking-widest">ZONE LEVELS</div>
      </div>
      
      {/* The 2x2 Data Grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-b border-gray-800 py-4">
        
        {/* Top Row: Supply */}
        <div className="flex flex-col gap-1">
          <div className="text-gray-500 text-[10px] uppercase tracking-widest">SUPPLY HIGH</div>
          <div className="text-gray-300 text-sm">e.g. {supplyHigh}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-gray-500 text-[10px] uppercase tracking-widest">SUPPLY LOW</div>
          <div className="text-gray-300 text-sm">e.g. {supplyLow}</div>
        </div>

        {/* Bottom Row: Demand */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="text-gray-500 text-[10px] uppercase tracking-widest">DEMAND HIGH</div>
          <div className="text-gray-300 text-sm">e.g. {demandHigh}</div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="text-gray-500 text-[10px] uppercase tracking-widest">DEMAND LOW</div>
          <div className="text-gray-300 text-sm">e.g. {demandLow}</div>
        </div>
        
      </div>
      
      {/* Footer Action */}
      <div className="flex justify-end mt-2">
        <button className="text-[10px] text-gray-600 hover:text-gray-300 transition-colors uppercase tracking-widest cursor-pointer">
          Recalc
        </button>
      </div>
    </div>
  );
}

export { ZonesTable };