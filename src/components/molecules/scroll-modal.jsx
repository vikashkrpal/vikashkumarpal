// "use client"

// import { useState, useEffect } from "react"
// import { X } from "lucide-react"

// export default function ScrollModal() {
//     const [isVisible, setIsVisible] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             // Calculate scroll percentage
//             const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

//             if (scrollPercent >= 50 && !isVisible) {
//                 setIsVisible(true)
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [isVisible])

//     if (!isVisible) return null

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-300">
//             <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
//                 <div className="grid md:grid-cols-2">
//                     {/* Left Section */}
//                     <div className="bg-blue-500 p-6 text-white">
//                         <div className="mb-8">
//                             <h2 className="text-2xl font-bold">Vikash</h2>
//                         </div>

//                         <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
//                             <p className="text-sm mb-4">
//                                 Vikash&apos;s SEO expertise has transformed our startup, boosting organic traffic and client inquiries.
//                                 His strategic optimizations helped us attract qualified leads and establish a strong online presence.
//                                 Highly recommended!
//                             </p>
//                             <div className="flex items-center gap-3">
//                                 <div className="h-12 w-12 rounded-full bg-white/20" />
//                                 <div>
//                                     <p className="font-semibold">Anil Gupta</p>
//                                     <p className="text-sm opacity-80">Founder | Karo Startup</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-3 gap-4">
//                             {[...Array(6)].map((_, i) => (
//                                 <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
//                                     <span className="text-xs font-medium">beetronics</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Section */}
//                     <div className="bg-gray-900 p-6 text-white">
//                         <div className="flex justify-between items-center mb-6">
//                             <span className="bg-blue-500 text-sm font-medium px-3 py-1 rounded-full">Step-1</span>
//                             <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white transition-colors">
//                                 <X className="h-6 w-6" />
//                             </button>
//                         </div>

//                         <div className="space-y-6">
//                             <div>
//                                 <h2 className="text-2xl font-bold mb-2">
//                                     Grow Your Business with <span className="text-blue-500">Expert SEO</span> Services?
//                                 </h2>
//                                 <p className="text-gray-400">
//                                     What&apos;s your primary goal with SEO? Select the option that best describes your needs.
//                                 </p>
//                             </div>

//                             <div className="space-y-3">
//                                 {["1. Boost Rankings", "2. Generate More Leads", "3. Improve Local Visibility", "4. Not Sure Yet"].map(
//                                     (option) => (
//                                         <button
//                                             key={option}
//                                             className="w-full p-4 text-left rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-colors"
//                                         >
//                                             {option}
//                                         </button>
//                                     ),
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

