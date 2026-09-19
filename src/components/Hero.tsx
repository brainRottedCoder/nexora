import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { DashboardPreview } from "@/components/DashboardPreview";
import { Button } from "@/components/ui/button";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4";

export function Hero() {
  return (
    <section className="relative min-h-0 flex-1">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex w-full flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 font-body text-sm text-muted-foreground"
        >
          Now with GPT-5 support ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-center font-display text-5xl leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-[5rem]"
        >
          The Future of <span className="italic">Smarter</span> Automation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-[650px] text-center font-body text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Automate your busywork with intelligent agents that learn, adapt, and
          execute—so your team can focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 flex items-center gap-3"
        >
          <Button className="h-auto rounded-full px-6 py-5 font-body text-sm font-medium">
            Book a demo
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Play demo"
            className="h-11 w-11 rounded-full border-0 bg-background shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80"
          >
            <Play className="h-4 w-4 fill-foreground text-foreground" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
