"use client";

import CcsLogo from "./_components/CcsLogo";
import ShiftingCountdown from "../components/ui/countdown-timer";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {Sparkles} from "lucide-react";

export default function Page() {
    const router = useRouter();

    const handleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`;
    };

    return (
        <>
            <div
                className="relative min-h-screen flex flex-col"
                style={{
                    backgroundImage: "url('/bg_image.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/30 md:bg-black/50 z-10"></div>

                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30">
                    <button
                        onClick={() => router.push("/sponsors")}
                        className="px-3 py-2 sm:px-4 sm:py-2 border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
            <span
                className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl font-['GothamXNarrow'] uppercase tracking-wide">
              Our Sponsors
            </span>
                    </button>
                </div>

                <div
                    className="relative z-20 flex flex-col flex-grow px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 md:pt-16 lg:pt-20 justify-between sm:justify-center">
                    <div className="flex flex-col items-center text-center gap-2 sm:gap-4 md:gap-6 pt-8 sm:pt-0">
                        <div className="w-20 h-14 sm:w-28 sm:h-18 md:w-36 md:h-22 lg:w-44 lg:h-26 xl:w-52 xl:h-32">
                            <CcsLogo className="w-full h-full"/>
                        </div>

                        <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-['Megarok'] leading-none tracking-wider drop-shadow-2xl">
                            PRESENTS
                        </h2>

                        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-['Megarok'] leading-none tracking-wider drop-shadow-2xl">
                            OBSCURA
                        </h1>

                        <div className="mt-4 sm:mt-6">
                            <ShiftingCountdown/>
                        </div>
                    </div>


                    <div className="flex flex-col items-center pb-8 sm:pb-0 sm:mt-8">
                        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
                            <button
                                onClick={handleLogin}
                                className="w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#ff3300] text-white font-bold text-sm sm:text-base md:text-lg font-['GothamXNarrow'] uppercase tracking-wide transition-all duration-300 ease-in-out shadow-[0_0_20px_4px_rgba(255,51,0,0.6),0_0_40px_8px_rgba(255,100,0,0.4)] hover:bg-[#ff5500] hover:shadow-[0_0_10px_8px_rgba(255,100,0,0.8),0_0_30px_12px_rgba(255,150,0,0.6)]"
                            >
                                Register Now
                            </button>

                            <button
                                onClick={() => router.push("/Dashboard")}
                                className="w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#ff3300] text-white font-bold text-sm sm:text-base md:text-lg font-['GothamXNarrow'] uppercase tracking-wide transition-all duration-300 ease-in-out shadow-[0_0_30px_8px_rgba(255,100,0,0.8),0_0_60px_12px_rgba(255,150,0,0.6)] hover:bg-[#ff5500] hover:shadow-[0_0_10px_8px_rgba(255,100,0,0.8),0_0_30px_12px_rgba(255,150,0,0.6)]"
                            >
                                Team Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section id="section2"
                     className="relative py-32 bg-gradient-to-br from-black via-indigo-950/20 to-black text-white overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Animated gradient mesh */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.1] via-red-500/[0.07] to-orange-500/[0.1]"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundSize: '400% 400%'
                        }}
                    />

                    {/* Moving light orbs */}
                    <motion.div
                        className="absolute top-1/3 left-1/5 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl"
                        animate={{
                            x: [0, 150, 0],
                            y: [0, 80, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl"
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -60, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full"
                            style={{
                                left: `${15 + (i * 7)}%`,
                                top: `${25 + (i * 5)}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 2, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-6"
                    variants={{
                        hidden: {opacity: 0},
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                >
                    {/* Header */}
                    <motion.div
                        className="text-center mb-20"
                        variants={{
                            hidden: {opacity: 0, y: 60},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
                            whileHover={{scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)"}}
                        >
                            <motion.div
                                animate={{rotate: 360}}
                                transition={{duration: 3, repeat: Infinity, ease: "linear"}}
                            >
                                <Sparkles className="h-4 w-4 text-indigo-300"/>
                            </motion.div>
                            <span className="text-sm font-medium text-white/80">
              ✨ Client Success Stories
            </span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                        </motion.div>

                        <motion.h2
                            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Hack The Maze
            </span>
                            <br/>
                        </motion.h2>

                        <motion.p
                            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >In a fractured realm between logic and sorcery, a rogue demonic entity named Obscura has
                            hijacked the overworld&apos;s robotic army and fractured two souls into hacker and wizard. Now
                            trapped in a shifting digital labyrinth, you and your team must outwit firewalls, dodge
                            arcane traps, and decode corrupted transmissions. Obscura&apos;s power grows with every passing
                            minute — can you sever the portal and escape before you&apos;re consumed by the maze?
                        </motion.p>
                        Are you smart enough to escape? Or will the glitch claim you too?
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
