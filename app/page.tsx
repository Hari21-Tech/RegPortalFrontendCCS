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
                    className="relative z-20 flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
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

                        <div className="mt-4 sm:mt-6 mb-8 sm:mb-12">
                            <ShiftingCountdown/>
                        </div>
                    </div>
                </div>
            </div>
            <section id="section2"
                     className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Animated gradient mesh */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] via-orange-500/[0.1] to-red-600/[0.12]"
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

                    {/* Digital grid overlay */}
                    <div className="absolute inset-0 opacity-10"
                         style={{
                             backgroundImage: `
                                 linear-gradient(rgba(255,51,0,0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,51,0,0.3) 1px, transparent 1px)
                             `,
                             backgroundSize: '50px 50px'
                         }}
                    />

                    {/* Moving light orbs */}
                    <motion.div
                        className="absolute top-1/4 left-1/6 w-48 sm:w-72 h-48 sm:h-72 bg-red-400/20 rounded-full blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 60, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/6 w-56 sm:w-80 h-56 sm:h-80 bg-orange-400/20 rounded-full blur-3xl"
                        animate={{
                            x: [0, -80, 0],
                            y: [0, -40, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Floating particles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-red-400/60 rounded-full"
                            style={{
                                left: `${20 + (i * 8)}%`,
                                top: `${30 + (i * 6)}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 4 + i * 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.4,
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
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
                        className="text-center mb-12 sm:mb-16 md:mb-20"
                        variants={{
                            hidden: {opacity: 0, y: 60},
                            visible: {opacity: 1, y: 0}
                        }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm mb-8"
                            whileHover={{scale: 1.05, borderColor: "rgba(255, 51, 0, 0.5)"}}
                        >
                            <motion.div
                                animate={{rotate: 360}}
                                transition={{duration: 3, repeat: Infinity, ease: "linear"}}
                            >
                                <Sparkles className="h-4 w-4 text-red-400"/>
                            </motion.div>
                            <span
                                className="text-sm font-medium text-white/90 font-['GothamXNarrow'] uppercase tracking-wide">
                400+ HACKERS REGISTERED
              </span>
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"/>
                        </motion.div>

                        <motion.h2
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Megarok'] mb-6 tracking-wider leading-tight"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >
              <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-red-300 drop-shadow-lg">
                HACK THE MAZE
              </span>
                        </motion.h2>

                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8 font-['GothamXNarrow']"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >
                            In a <span className="text-red-400 font-bold">fractured realm</span> between logic and
                            sorcery, a rogue demonic entity named <span
                            className="text-orange-400 font-bold">Obscura</span> has
                            hijacked the overworld's robotic army and fractured two souls into hacker and wizard. Now
                            trapped in a shifting digital labyrinth, you and your team must outwit firewalls, dodge
                            arcane traps, and decode corrupted transmissions.
                        </motion.p>

                        <motion.p
                            className="text-xl sm:text-2xl md:text-3xl text-red-300 font-['Megarok'] mb-12 tracking-wide"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >
                            Are you smart enough to escape? Or will the glitch claim you too?
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg mx-auto"
                            variants={{
                                hidden: {opacity: 0, y: 60},
                                visible: {opacity: 1, y: 0}
                            }}
                        >
                            <motion.button
                                onClick={handleLogin}
                                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg font-['GothamXNarrow'] uppercase tracking-wide transition-all duration-300 ease-in-out shadow-[0_0_30px_8px_rgba(255,51,0,0.4)] hover:shadow-[0_0_40px_12px_rgba(255,51,0,0.6)] hover:scale-105 border border-red-400/50"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                🚀 Register Now
                            </motion.button>

                            <motion.button
                                onClick={() => router.push("/Dashboard")}
                                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-lg font-['GothamXNarrow'] uppercase tracking-wide transition-all duration-300 ease-in-out shadow-[0_0_30px_8px_rgba(255,165,0,0.4)] hover:shadow-[0_0_40px_12px_rgba(255,165,0,0.6)] hover:scale-105 border border-orange-400/50"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                🎮 Team Dashboard
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
