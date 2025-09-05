"use client";

export default function ApologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-red-400 text-3xl">💖</span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              From Ujjwal
            </h1>
            <span className="text-red-400 text-3xl">💖</span>
          </div>
          <p className="text-xl text-purple-700 font-medium">To My Dearest Tabish Jan 💕</p>
        </div>

        {/* Apology Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-pink-100">
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-yellow-400 text-2xl block mb-2">✨</span>
              <h2 className="text-2xl font-semibold text-purple-800 mb-6">My Heartfelt Apology 💝</h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-center text-purple-700 font-medium text-xl bg-pink-50 rounded-full py-3 px-6">
                🌸 Sorry Cutieee 🌸
              </p>
              
              <p className="text-center text-rose-700 font-medium text-xl bg-rose-50 rounded-full py-3 px-6">
                💕 Sorry Jani 💕
              </p>
              
              <p className="text-center text-purple-700 font-medium text-xl bg-purple-50 rounded-full py-3 px-6">
                ✨ Sorry Yaar ✨
              </p>
              
              <p className="text-center text-pink-700 font-medium text-xl bg-pink-50 rounded-full py-3 px-6">
                🦋 Sorry Na Bachhuu 🦋
              </p>
              
              <p className="text-center text-rose-700 font-medium text-xl bg-rose-50 rounded-full py-3 px-6">
                🌹 Jani Sorry Na 🌹
              </p>
              
              <p className="text-center text-purple-700 font-medium text-xl bg-purple-50 rounded-full py-3 px-6">
                💖 Maaff Kar Do Yaar 💖
              </p>
              
              <p className="text-center text-pink-700 font-medium text-xl bg-gradient-to-r from-pink-100 to-purple-100 rounded-full py-3 px-6">
                🌺 Cutieee 🌺
              </p>
            </div>

            <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100 rounded-2xl">
              <p className="text-rose-700 text-lg">
                You mean everything to me ✨
              </p>
              <p className="text-purple-700 text-lg mt-2">
                Please forgive me, my precious one 🥺💕
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 text-center border border-pink-100">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">My Promise to You 💝</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5bd9518-c893-4a96-9b39-20845895b4dc.png"
              alt="A young 21-year-old boy catching and holding his ears with both hands while asking lovingly for apology from a beautiful 21-year-old girl in traditional Muslim attire with hijab, showing a cute sorry gesture in an emotional loving scene with soft lighting"
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'block';
                target.style.background = 'linear-gradient(135deg, #fce7f3, #f3e8ff)';
                target.style.minHeight = '300px';
                target.style.display = 'flex';
                target.style.alignItems = 'center';
                target.style.justifyContent = 'center';
                target.innerHTML = '<div style="text-align: center; color: #9333ea; font-size: 18px;"><div style="font-size: 48px; margin-bottom: 16px;">💕</div><div>A heartfelt apology scene</div><div>Boy asking forgiveness from girl</div><div style="margin-top: 8px;">🌹 With Love & Respect 🌹</div></div>';
              }}
            />
          </div>
          <p className="text-purple-600 text-sm mt-4 italic">
            With all my love and sincerest apologies 🌹💕
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-purple-600 font-medium">
            Forever yours, Ujjwal 💝
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="text-red-400 text-xl">💖</span>
            <span className="text-pink-400 text-xl">💕</span>
            <span className="text-purple-400 text-xl">💜</span>
          </div>
        </div>
      </div>
    </div>
  );
}