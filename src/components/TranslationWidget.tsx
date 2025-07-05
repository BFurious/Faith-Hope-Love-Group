'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    X,
    Languages
} from 'lucide-react'
import { useState } from 'react'

export default function TranslationWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Load Google Translate script
        const script = document.createElement('script')
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.head.appendChild(script)

        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'es,fr,de,it,pt,ru,zh,ja,ko,ar,hi,bn,ur,tr,nl,pl,sv,da,no,fi,cs,hu,ro,bg,hr,sk,sl,et,lv,lt,mt,el,he,th,vi,id,ms,tl,my,km,lo,mn,ka,hy,az,kk,ky,uz,tg,fa,ps,sd,ne,si,ta,te,kn,ml,gu,pa,or,as,mr,sa,am,sw,yo,ig,ha,zu,xh,af,st,tn,ss,ve,ts,nr,rw,lg,ak,tw,ee,ga,cy,gd,kw,br,oc,ca,eu,gl,ast,an,sc,fur,vec,lmo,pms,rm,lb,als,bar,ksh,nds,fy,li,zea,vls,wa,pcd,nrm,co,frp,pdc,yi,lad',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
            }, 'google_translate_element')
            setIsLoaded(true)
        }

        return () => {
            // Cleanup
            if (window.googleTranslateElementInit) {
                window.googleTranslateElementInit = undefined
            }
        }
    }, [])

    return (
        <div
            className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => !isOpen && setIsHovered(false)}
        >
            {/* Sticky Drawer */}
            <motion.div
                initial={{ x: -60 }}
                animate={{
                    x: isOpen ? 0 : isHovered ? -20 : -60
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
            >
                {/* Main Translation Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-r-xl shadow-lg hover:bg-green-700 transition-colors duration-300"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Globe className="h-6 w-6" />
                    )}
                </motion.button>

                {/* Drawer Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute left-16 top-0 bg-white rounded-r-xl shadow-2xl border border-gray-200 p-6 min-w-[320px]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-900">Translate Page</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Google Translate Widget */}
                            <div className="mb-4">
                                {!isLoaded ? (
                                    <div className="flex items-center justify-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                                        <span className="ml-3 text-gray-600">Loading translator...</span>
                                    </div>
                                ) : (
                                    <div id="google_translate_element" className="w-full"></div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                <div className="flex items-start gap-2">
                                    <Languages className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <div className="font-medium mb-1">How to use:</div>
                                        <div>• Select your language from the dropdown above</div>
                                        <div>• The page will translate automatically</div>
                                        <div>• Click "Original" to switch back to English</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hover Drawer - Quick Info */}
                <AnimatePresence>
                    {isHovered && !isOpen && (
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-16 top-0 bg-white rounded-r-xl shadow-lg border border-gray-200 p-4"
                        >
                            <div className="text-center">
                                <div className="text-sm font-medium text-gray-900">Translate</div>
                                <div className="text-xs text-gray-600 mt-1">Click to open translator</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

// Add TypeScript declarations for Google Translate
declare global {
    interface Window {
        google: {
            translate: {
                TranslateElement: any
            }
        }
        googleTranslateElementInit: (() => void) | undefined
    }
} 