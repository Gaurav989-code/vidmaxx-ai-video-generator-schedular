import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Calendar, Share2, Mail, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    title: "AI Video Generator",
    description: "Turn text prompts into viral-ready shorts with realistic voiceovers and captions in seconds.",
    icon: Video,
  },
  {
    title: "Multi-Platform Scheduler",
    description: "Write once, post everywhere. Auto-publish to YouTube Shorts, TikTok, and Instagram Reels.",
    icon: Calendar,
  },
  {
    title: "Smart Repurposing",
    description: "Automatically slice long-form content into bite-sized clips optimized for retention.",
    icon: Share2,
  },
  {
    title: "Email Marketing",
    description: "Convert video views into newsletter subscribers with built-in email capture tools.",
    icon: Mail,
  },
  {
    title: "Trend Analysis",
    description: "AI scans successful niche content to suggest winning video ideas and hooks.",
    icon: TrendingUp,
  },
  {
    title: "Instant Rendering",
    description: "Cloud-based rendering means no lag, no heavy hardware, and instant results.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-primary">go viral</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stop spending hours editing. Let our AI handle the creation, scheduling, and growth while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-colors bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
