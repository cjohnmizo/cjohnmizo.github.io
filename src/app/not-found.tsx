import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
                        <div className="w-24 h-24 relative z-10 flex items-center justify-center">
                            <span className="text-6xl text-indigo-500">404</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold font-mono tracking-tight">Page Not Found_</h1>
                    <p className="text-gray-400">
                        The digital coordinates you are looking for do not exist in this sector.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors group"
                    >
                        ← Return to Base
                    </Link>
                </div>
            </div>
        </div>
    );
}
