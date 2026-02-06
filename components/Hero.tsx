import { Button } from "@/components/ui/button";
import { PlayCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-500/40 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          New: TikTok Auto-Schedule
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Viral Shorts, <br />
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Generated & Scheduled by AI.
          </span>
        </h1>

        <p className="max-w-2xl text-xl text-muted-foreground mb-10 leading-relaxed">
          Create engaging short-form videos from text, blogs, or long videos in seconds. 
          Automatically schedule them to YouTube Shorts, Instagram Reels, and TikTok.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button size="lg" className="h-12 px-8 text-lg w-full sm:w-auto gap-2 group">
            <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
            Start Generating Free
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-lg w-full sm:w-auto gap-2">
            <PlayCircle className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 relative w-full max-w-5xl rounded-xl border bg-card/50 shadow-2xl backdrop-blur-sm p-2 md:p-4 animate-fade-in-up delay-200">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black overflow-hidden relative group cursor-pointer">
                {/* Simulated UI elements */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-background/80 rounded flex items-center px-4 gap-2">
                   <div className="h-2 w-2 rounded-full bg-red-400"></div>
                   <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                   <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground font-medium flex items-center gap-2">
                        <PlayCircle className="h-12 w-12 opacity-80" />
                        <span className="sr-only">Play Demo Video</span>
                    </p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -left-4 top-1/3 p-4 bg-background border rounded-lg shadow-lg transform -rotate-6 hidden md:block">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs">YT</div>
                        <div>
                            <p className="text-xs font-semibold">Short Uploaded</p>
                            <p className="text-[10px] text-muted-foreground">Just now</p>
                        </div>
                    </div>
                </div>
                <div className="absolute -right-4 bottom-1/3 p-4 bg-background border rounded-lg shadow-lg transform rotate-6 hidden md:block">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">TK</div>
                        <div>
                            <p className="text-xs font-semibold">1.2M Views</p>
                            <p className="text-[10px] text-muted-foreground">Trending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
