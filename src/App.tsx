import { SignalBox } from "./components/signalBox";
import { ZonesTable } from "./components/ZonesTable";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] p-6 font-mono selection:bg-gray-700">
      {/* Main Grid Container: Max width for ultrawide screens, 2 columns on desktop */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Header Section (Spans both columns) */}
        <header className="lg:col-span-2 flex justify-between items-end border-b border-gray-800 pb-4 mb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-gray-400">
              SMC FLOW <span className="text-white">/ CRYPTO SD DASHBOARD</span>
            </h1>
          </div>
          <div className="text-xs text-gray-500 tracking-widest">
            SYSTEM ONLINE // {new Date().toLocaleTimeString()}
          </div>
        </header>

        {/* --- LEFT COLUMN: ANCHOR ASSET (BTC) --- */}
        <section className="flex flex-col gap-6">
          {/* Price Header */}
          <div className="flex justify-between items-end border-b border-gray-800 pb-2">
            <div>
              <h2 className="text-xs text-gray-500 tracking-widest mb-1">
                BTC - BITCOIN / USDT
              </h2>
              <div className="text-5xl font-bold tracking-tight">67,450.25</div>
              <div className="text-[#00ff00] text-sm mt-2 font-bold tracking-wide">
                ▲ BULLISH (+1.2%)
              </div>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              Anchor
            </div>
          </div>

          {/* Component Placeholders */}
          <div className="h-32 border border-gray-800 border-dashed rounded flex items-center justify-center text-gray-700 text-sm">
            <SignalBox
              asset="BTC"
              type="bullish"
              signalText="LONGS FAVORED"
              reasoning="High conviction. BTC bullish + ETH bullish - classic crypto risk-on alignment confirmed."
              actionText="TAKE BTC LONG NOW - macro confirmed, zone + signal aligned"
              lastUpdate={new Date().toLocaleTimeString()}
            />
          </div>
          <div className="h-48 border border-gray-800 border-dashed rounded flex items-center justify-center text-gray-700 text-sm">
            <ZonesTable
              asset="BTC"
              supplyHigh="68,500"
              supplyLow="67,800"
              demandHigh="64,200"
              demandLow="62,650"
            />
          </div>
        </section>

        {/* --- RIGHT COLUMN: DIVERGENT ASSET (SOL) --- */}
        <section className="flex flex-col gap-6">
          {/* Price Header */}
          <div className="flex justify-between items-end border-b border-gray-800 pb-2">
            <div>
              <h2 className="text-xs text-gray-500 tracking-widest mb-1">
                SOL - SOLANA / USDT
              </h2>
              <div className="text-5xl font-bold tracking-tight">185.30</div>
              <div className="text-[#ff0000] text-sm mt-2 font-bold tracking-wide">
                ▼ BEARISH (-0.8%)
              </div>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              Divergent
            </div>
          </div>

          {/* Component Placeholders */}
          <div className="h-32 border border-gray-800 border-dashed rounded flex items-center justify-center text-gray-700 text-sm">
            <SignalBox
              asset="SOL"
              type="bearish"
              signalText="SHORTS FAVORED"
              reasoning="Divergence noted. SOL bearish + ETH mixed - specific asset divergence, SOL selling off."
              actionText="TAKE SOL SHORT NOW - asset weakness confirmed, resistance held"
              lastUpdate={new Date().toLocaleTimeString()}
            />
          </div>
          <div className="h-48 border border-gray-800 border-dashed rounded flex items-center justify-center text-gray-700 text-sm">
            <ZonesTable
              asset="SOL"
              supplyHigh="205.00"
              supplyLow="198.50"
              demandHigh="172.00"
              demandLow="160.00"
            />
          </div>
        </section>

        {/* --- BOTTOM LOG SECTION (Spans both columns) --- */}
        <section className="lg:col-span-2 mt-4 border-t border-gray-800 pt-6">
          <div className="text-xs text-gray-500 tracking-widest mb-4">
            SYSTEM EVENT LOG
          </div>
          <div className="h-32 border border-gray-800 border-dashed rounded flex items-center justify-center text-gray-700 text-sm">
            [ Live Event Log Component ]
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
