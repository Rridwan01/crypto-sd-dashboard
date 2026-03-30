interface SignalBoxProps {
  asset: string;
  type: 'bullish' | 'bearish';
  signalText: string;
  reasoning: string;
  actionText: string;
  lastUpdate: string;
}

function SignalBox({
  asset,
  type,
  signalText,
  reasoning,
  actionText,
  lastUpdate
}: SignalBoxProps) {
  
  // Dynamic styling based on the signal type
  const isBullish = type === 'bullish';
  
  const baseColor = isBullish ? 'text-[#00ff00]' : 'text-[#ff0000]';
  const borderColor = isBullish ? 'border-[#003300]' : 'border-[#330000]';
  const bgColor = isBullish ? 'bg-[#001a00]/40' : 'bg-[#1a0000]/40';
  const icon = isBullish ? '▲' : '▼';

  return (
    <div className={`border ${borderColor} ${bgColor} p-4 rounded flex flex-col gap-3 font-mono`}>
      {/* Header: Asset + Signal */}
      <div className="flex justify-between items-center border-b border-gray-800/50 pb-2">
        <div className="text-xs text-gray-400 tracking-widest uppercase">{asset} TRADE SIGNAL</div>
      </div>

      {/* Main Signal Text */}
      <div className={`text-xl font-bold tracking-widest ${baseColor}`}>
        {signalText}
      </div>

      {/* Reasoning / Institutional Logic */}
      <div className="text-xs text-gray-300 flex items-start gap-2">
        <span className="text-gray-500">✓</span>
        <p>{reasoning}</p>
      </div>

      {/* Action Button / Alert */}
      <div className={`mt-2 py-1 px-2 border ${borderColor} ${baseColor} text-xs font-bold flex items-center gap-2 bg-black/40`}>
        <span>{icon}</span> {actionText}
      </div>

      {/* Footer / Timestamp */}
      <div className="text-[10px] text-gray-600 mt-1 uppercase tracking-widest">
        LAST UPDATE: {lastUpdate}
      </div>
    </div>
  );
}

export { SignalBox };