"use client";
import {
    ChevronDownIcon,
    ClockIcon,
    CpuChipIcon,
    DocumentTextIcon,
    FilmIcon,
    FunnelIcon,
    GiftIcon,
    GlobeAltIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    SparklesIcon,
    StarIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";
import { Accordion, AccordionBody, AccordionHeader, Typography } from "@material-tailwind/react";
import { useMemo, useState } from "react";

const FAQ_CATEGORIES = [
    { id: "all", label: "All Questions", icon: QuestionMarkCircleIcon, color: "dark" },
    { id: "languages", label: "Languages", icon: GlobeAltIcon, color: "info" },
    { id: "features", label: "Features", icon: CpuChipIcon, color: "primary" },
    { id: "formats", label: "Formats", icon: FilmIcon, color: "success" },
    { id: "pricing", label: "Pricing", icon: GiftIcon, color: "warning" }
];

const FAQS = [
    {
        id: 1,
        title: "What languages are supported for media files transcription?",
        desc: "Our advanced AI transcription service supports over 100 languages including Abkhaz, Afrikaans, Arabic (Gulf & Modern Standard), Armenian, Asturian, Azerbaijani, Bashkir, Basque, Belarusian, Bengali, Bosnian, Bulgarian, Catalan, Central Kurdish (Iran & Iraq), Chinese (Simplified & Traditional), Croatian, Czech, Danish, Dutch, English (Australian, British, Indian, Irish, New Zealand, Scottish, South African, US, Welsh), Estonian, Farsi, Finnish, French (Standard & Canadian), Galician, Georgian, German (Standard & Swiss), Greek, Gujarati, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kabyle, Kannada, Kazakh, Kinyarwanda, Korean, Kyrgyz, Latvian, Lithuanian, Luganda, Macedonian, Malay, Malayalam, Maltese, Marathi, Meadow Mari, Mongolian, Norwegian Bokmål, Odia/Oriya, Pashto, Polish, Portuguese (Standard & Brazilian), Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Somali, Spanish (Standard & US), Sundanese, Swahili (Kenya, Burundi, Rwanda, Tanzania, Uganda), Swedish, Tagalog/Filipino, Tamil, Tatar, Telugu, Thai, Turkish, Ukrainian, Uyghur, Uzbek, Vietnamese, Welsh, Wolof, and Zulu.",
        icon: GlobeAltIcon,
        color: "info",
        category: "languages",
        tags: ["transcription", "languages", "multilingual", "global"],
        popularity: 95,
        lastUpdated: "2024-01-15"
    },
    {
        id: 2,
        title: "What languages are supported for translation?",
        desc: "Our translation service covers 80+ languages including Afrikaans, Albanian, Amharic, Arabic, Armenian, Azerbaijani, Bengali, Bosnian, Bulgarian, Canadian French, Catalan, Chinese (Simplified & Traditional), Croatian, Czech, Danish, Dari, Dutch, English, Estonian, Finnish, French, Georgian, German, Greek, Gujarati, Haitian Creole, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Irish, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Malayalam, Maltese, Marathi, Mexican Spanish, Mongolian, Norwegian, Pashto, Persian, Polish, Portugal Portuguese, Portuguese, Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Somali, Spanish, Swahili, Swedish, Tagalog, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Uzbek, Vietnamese, and Welsh.",
        icon: DocumentTextIcon,
        color: "success",
        category: "languages",
        tags: ["translation", "languages", "localization"],
        popularity: 88,
        lastUpdated: "2024-01-10"
    },
    {
        id: 3,
        title: "What AI & machine learning services are included?",
        desc: "Our comprehensive AI suite includes: 🎯 High-accuracy transcription with speaker identification, 🌐 Multi-language translation with context awareness, 📝 Intelligent summarization with key points extraction, 🧠 Content comprehension with sentiment analysis, 🔍 Keyword extraction and topic modeling, 📊 Real-time analytics and insights, 🎨 Custom formatting and styling options.",
        icon: CpuChipIcon,
        color: "primary",
        category: "features",
        tags: ["AI", "machine learning", "transcription", "translation", "summarization"],
        popularity: 92,
        lastUpdated: "2024-01-12"
    },
    {
        id: 4,
        title: "What summarization model is being used?",
        desc: "We use Meta Llama 3 70B Instruct, one of the most advanced language models available. This state-of-the-art model provides: ✨ Highly accurate content summarization, 🎯 Context-aware key point extraction, 📋 Multiple summary formats (bullet points, paragraphs, executive summaries), 🔄 Customizable length and detail levels, 🌟 Multi-language summarization capabilities.",
        icon: SparklesIcon,
        color: "warning",
        category: "features",
        tags: ["AI model", "Llama 3", "summarization", "advanced"],
        popularity: 85,
        lastUpdated: "2024-01-08"
    },
    {
        id: 5,
        title: "What media file formats are supported for transcription?",
        desc: "We support a comprehensive range of audio and video formats: 🎵 Audio: AMR, FLAC, M4A, MP3, WAV, OGG, AIFF, WMA, AAC 🎬 Video: MP4, AVI, MOV, WMV, FLV, MKV, WebM, 3GP 📱 Mobile: Voice memos, WhatsApp audio, Telegram voice messages 🎙️ Professional: Broadcast quality, studio recordings, podcast formats ☁️ Cloud: Direct upload from Google Drive, Dropbox, OneDrive",
        icon: FilmIcon,
        color: "info",
        category: "formats",
        tags: ["file formats", "audio", "video", "upload"],
        popularity: 90,
        lastUpdated: "2024-01-14"
    },
    {
        id: 6,
        title: "Is this service completely free?",
        desc: "Yes! Our core transcription service is completely free.",
        icon: GiftIcon,
        color: "success",
        category: "pricing",
        tags: ["free", "pricing", "premium", "plans"],
        popularity: 98,
        lastUpdated: "2024-01-16"
    },
    {
        id: 7,
        title: "How accurate is the transcription service?",
        desc: "Our AI achieves 98% accuracy on clear audio with: 🎯 Advanced noise reduction algorithms, 🗣️ Speaker identification and separation, 📚 Industry-specific vocabulary recognition, 🔄 Continuous learning from user feedback, 🎚️ Adaptive audio enhancement, ⚡ Real-time error correction. Accuracy may vary based on audio quality, background noise, and speaker accent.",
        icon: ShieldCheckIcon,
        color: "success",
        category: "features",
        tags: ["accuracy", "quality", "AI", "performance"],
        popularity: 94,
        lastUpdated: "2024-01-13"
    },
    {
        id: 8,
        title: "How long does transcription typically take?",
        desc: "Processing times are lightning fast: ⚡ Audio files: 2-5 minutes for 1 hour of content, 🎬 Video files: 3-7 minutes for 1 hour of content, 📱 Voice memos: Under 1 minute for most files, 🚀 Bulk processing: Parallel processing for multiple files, 📊 Progress tracking: Real-time status updates. Large files may take longer but we'll keep you informed throughout the process.",
        icon: ClockIcon,
        color: "warning",
        category: "features",
        tags: ["speed", "processing time", "performance"],
        popularity: 87,
        lastUpdated: "2024-01-11"
    }
];

export function Faq() {
    const [open, setOpen] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("popularity");
    const [helpfulClicks, setHelpfulClicks] = useState<{ [key: number]: 'yes' | 'no' | null }>({});

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    const handleHelpfulClick = (faqId: number, response: 'yes' | 'no') => {
        setHelpfulClicks(prev => ({ ...prev, [faqId]: response }));
    };

    const filteredAndSortedFAQs = useMemo(() => {
        let filtered = FAQS.filter(faq => {
            const matchesSearch = faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        return filtered.sort((a, b) => {
            if (sortBy === "popularity") return b.popularity - a.popularity;
            if (sortBy === "recent") return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
            return a.title.localeCompare(b.title);
        });
    }, [searchQuery, selectedCategory, sortBy]);

    const getColorClasses = (color: string) => {
        const colorMap = {
            primary: {
                gradient: "bg-gradient-primary",
                light: "bg-primary-50",
                border: "border-primary-200",
                text: "text-primary-600",
                ring: "ring-primary-500/20",
            },
            info: {
                gradient: "bg-gradient-info",
                light: "bg-info-50",
                border: "border-info-200",
                text: "text-info-600",
                ring: "ring-info-500/20",
            },
            success: {
                gradient: "bg-gradient-success",
                light: "bg-success-50",
                border: "border-success-200",
                text: "text-success-600",
                ring: "ring-success-500/20",
            },
            warning: {
                gradient: "bg-gradient-warning",
                light: "bg-warning-50",
                border: "border-warning-200",
                text: "text-warning-600",
                ring: "ring-warning-500/20",
            },
            dark: {
                gradient: "bg-gradient-dark",
                light: "bg-gray-50",
                border: "border-gray-200",
                text: "text-gray-600",
                ring: "ring-gray-500/20",
            },
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.info;
    };

    return (
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
            {/* Enhanced Background decorations - Hidden on mobile to improve performance */}
            <div className="absolute inset-0 hidden sm:block">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-info-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-success-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-warning-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-primary-400/10 rounded-full blur-lg"></div>
            </div>

            {/* Floating particles - Hidden on mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                <div className="absolute top-20 left-20 w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-info-400 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-success-400 rounded-full animate-bounce delay-3000"></div>
                <div className="absolute bottom-20 right-20 w-1 h-1 bg-warning-400 rounded-full animate-bounce delay-4000"></div>
            </div>

            <div className="relative container-custom px-4 sm:px-6 lg:px-8">
                {/* Enhanced Section Header - Mobile Responsive */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
                    {/* Main Icon with floating elements */}
                    <div className="relative mb-6 sm:mb-8 flex justify-center">
                        <div className="absolute inset-0 bg-gradient-primary rounded-2xl sm:rounded-3xl transform rotate-6 shadow-colored-primary animate-pulse"></div>
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-primary text-white shadow-colored-primary">
                            <QuestionMarkCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" />
                        </div>
                        {/* Enhanced floating elements - Hidden on mobile */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-success rounded-full flex items-center justify-center animate-bounce hidden sm:flex">
                            <span className="text-white text-xs sm:text-sm font-bold">?</span>
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-info rounded-full animate-pulse hidden sm:block"></div>
                        <div className="absolute top-2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-warning rounded-full animate-ping hidden sm:block"></div>
                        <div className="absolute -top-4 sm:-top-6 left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-primary rounded-full animate-bounce delay-500 hidden sm:block"></div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="mb-4 sm:mb-6">
                            <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-50 to-info-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider border border-primary-200">
                                <StarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="hidden sm:inline">Frequently Asked Questions</span>
                                <span className="sm:hidden">FAQ</span>
                                <StarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                            </span>
                        </div>

                        <Typography
                            placeholder={""}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            variant="h1"
                            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark-500 leading-tight"
                        >
                            Everything You Need to <span className="text-gradient-primary">Know</span>
                        </Typography>

                        <Typography
                            placeholder={""}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            variant="lead"
                            className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
                        >
                            Find answers to the most common questions about our AI-powered transcription service, explore our features, and discover how we can help transform your audio and video content.
                        </Typography>

                        {/* Stats Section - Mobile Responsive */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-primary-600">100+</div>
                                <div className="text-xs sm:text-sm text-gray-500">Languages</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-info-600">98%</div>
                                <div className="text-xs sm:text-sm text-gray-500">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-success-600">50K+</div>
                                <div className="text-xs sm:text-sm text-gray-500">Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-warning-600">24/7</div>
                                <div className="text-xs sm:text-sm text-gray-500">Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Section - Mobile Responsive */}
                <div className="max-w-4xl mx-auto mb-8 sm:mb-12 animate-slide-up">
                    <div className="card-material bg-white/80 backdrop-blur-sm p-4 sm:p-6">
                        {/* Search Bar */}
                        <div className="relative mb-4 sm:mb-6">
                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search questions, topics, or keywords..."
                                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/90 text-sm sm:text-base"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 text-lg"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Category Filters - Mobile Responsive */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                            {FAQ_CATEGORIES.map((category) => {
                                const colorClasses = getColorClasses(category.color);
                                const isActive = selectedCategory === category.id;
                                const Icon = category.icon;

                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${isActive
                                            ? `${colorClasses.gradient} text-white shadow-lg transform scale-105`
                                            : `bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105`
                                            }`}
                                    >
                                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                                        <span className="hidden sm:inline">{category.label}</span>
                                        <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sort Options - Mobile Responsive */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <FunnelIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="text-xs sm:text-sm font-medium">Sort by:</span>
                            </div>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                {[
                                    { id: "popularity", label: "Popular", fullLabel: "Most Popular" },
                                    { id: "recent", label: "Recent", fullLabel: "Recently Updated" },
                                    { id: "alphabetical", label: "A-Z", fullLabel: "A-Z" }
                                ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSortBy(option.id)}
                                        className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ${sortBy === option.id
                                            ? "bg-primary-100 text-primary-700"
                                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span className="sm:hidden">{option.label}</span>
                                        <span className="hidden sm:inline">{option.fullLabel}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                            <p className="text-xs sm:text-sm text-gray-500">
                                Showing {filteredAndSortedFAQs.length} of {FAQS.length} questions
                                {searchQuery && ` for "${searchQuery}"`}
                                {selectedCategory !== "all" && ` in ${FAQ_CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Enhanced FAQ Accordion - Mobile Responsive */}
                <div className="max-w-4xl mx-auto animate-slide-up">
                    <div className="space-y-4 sm:space-y-6">
                        {filteredAndSortedFAQs.map((faq, index) => {
                            const colorClasses = getColorClasses(faq.color);
                            const isOpen = open === faq.id;
                            const Icon = faq.icon;

                            return (
                                <div
                                    key={faq.id}
                                    className={`group card-material border-l-4 ${colorClasses.border} transition-all duration-500 hover:shadow-material-lg hover:-translate-y-1 ${isOpen ? `${colorClasses.light} shadow-material-lg ring-4 ${colorClasses.ring}` : 'hover:bg-gray-50/50'
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Popularity Indicator - Mobile Responsive */}
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                                        <div className="flex items-center gap-1">
                                            <div className="flex items-center gap-0.5 sm:gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        className={`h-2 w-2 sm:h-3 sm:w-3 ${i < Math.round(faq.popularity / 20) ? 'text-yellow-400' : 'text-gray-200'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-500 ml-0.5 sm:ml-1 hidden sm:inline">{faq.popularity}%</span>
                                        </div>
                                    </div>

                                    <Accordion
                                        placeholder={""}
                                        onPointerEnterCapture={undefined}
                                        onPointerLeaveCapture={undefined}
                                        onResize={undefined}
                                        onResizeCapture={undefined}
                                        open={isOpen}
                                        className="border-0 shadow-none"
                                    >
                                        <AccordionHeader
                                            placeholder={""}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                            onResize={undefined}
                                            onResizeCapture={undefined}
                                            onClick={() => handleOpen(faq.id)}
                                            className={`border-0 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 text-left hover:bg-white/50 transition-all duration-300 ${isOpen ? colorClasses.light : ''
                                                }`}
                                        >
                                            {/* Mobile Layout */}
                                            <div className="block sm:hidden w-full">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-6 h-6 ${colorClasses.gradient} rounded-lg flex items-center justify-center`}>
                                                            <Icon className="h-3 w-3 text-white" />
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-xs text-gray-500">{faq.popularity}%</span>
                                                            <div className="flex items-center gap-0.5">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <StarIcon
                                                                        key={i}
                                                                        className={`h-2 w-2 ${i < Math.round(faq.popularity / 20) ? 'text-yellow-400' : 'text-gray-200'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`w-8 h-8 rounded-full ${colorClasses.light} flex items-center justify-center transition-all duration-300 ${isOpen ? `${colorClasses.gradient} shadow-lg` : 'group-hover:bg-gray-100'
                                                        }`}>
                                                        <ChevronDownIcon
                                                            className={`h-4 w-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : `${colorClasses.text} group-hover:scale-110`
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                                <Typography
                                                    placeholder={""}
                                                    onPointerEnterCapture={undefined}
                                                    onPointerLeaveCapture={undefined}
                                                    onResize={undefined}
                                                    onResizeCapture={undefined}
                                                    variant="h5"
                                                    className="font-bold text-dark-500 mb-2 leading-tight text-base"
                                                >
                                                    {faq.title}
                                                </Typography>
                                                <div className="flex flex-wrap gap-1 mb-2">
                                                    {faq.tags.slice(0, 2).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className={`px-1.5 py-0.5 ${colorClasses.light} ${colorClasses.text} text-xs font-medium rounded-full`}
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Desktop Layout */}
                                            <div className="hidden sm:flex items-start gap-4 lg:gap-6 w-full">
                                                {/* Enhanced Icon - Desktop */}
                                                <div className="relative flex-shrink-0">
                                                    <div className={`w-12 h-12 lg:w-14 lg:h-14 ${colorClasses.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-105'
                                                        }`}>
                                                        <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                                                    </div>
                                                    {/* Decorative ring */}
                                                    <div className={`absolute inset-0 rounded-2xl border-2 ${colorClasses.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110`}></div>
                                                </div>

                                                {/* Content - Desktop */}
                                                <div className="flex-grow min-w-0 pr-12 lg:pr-16">
                                                    <Typography
                                                        placeholder={""}
                                                        onPointerEnterCapture={undefined}
                                                        onPointerLeaveCapture={undefined}
                                                        onResize={undefined}
                                                        onResizeCapture={undefined}
                                                        variant="h5"
                                                        className="font-bold text-dark-500 mb-3 leading-tight text-lg lg:text-xl"
                                                    >
                                                        {faq.title}
                                                    </Typography>

                                                    {/* Tags - Desktop */}
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {faq.tags.slice(0, 3).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className={`px-2 py-1 ${colorClasses.light} ${colorClasses.text} text-xs font-medium rounded-full`}
                                                            >
                                                                #{tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Meta info - Desktop */}
                                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <UserGroupIcon className="h-3 w-3" />
                                                            <span>{faq.popularity}% find this helpful</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <ClockIcon className="h-3 w-3" />
                                                            <span>Updated {new Date(faq.lastUpdated).toLocaleDateString()}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Enhanced Chevron - Desktop */}
                                                <div className="flex-shrink-0 flex items-center">
                                                    <div className={`w-10 h-10 rounded-full ${colorClasses.light} flex items-center justify-center transition-all duration-300 ${isOpen ? `${colorClasses.gradient} shadow-lg` : 'group-hover:bg-gray-100'
                                                        }`}>
                                                        <ChevronDownIcon
                                                            className={`h-5 w-5 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : `${colorClasses.text} group-hover:scale-110`
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionHeader>

                                        <AccordionBody className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-0">
                                            {/* Mobile Layout */}
                                            <div className="block sm:hidden">
                                                <Typography
                                                    placeholder={""}
                                                    onPointerEnterCapture={undefined}
                                                    onPointerLeaveCapture={undefined}
                                                    onResize={undefined}
                                                    onResizeCapture={undefined}
                                                    className="text-gray-700 leading-relaxed text-sm mb-4"
                                                >
                                                    {faq.desc}
                                                </Typography>

                                                {/* Action buttons - Mobile */}
                                                <div className="mt-4 flex flex-col gap-3">
                                                    <span className="text-xs text-primary-600 font-medium">Was this helpful?</span>
                                                    {helpfulClicks[faq.id] ? (
                                                        <div className="flex flex-col gap-2">
                                                            <div className="flex items-center gap-2 px-3 py-2 bg-success-50 border border-success-200 rounded-lg">
                                                                <span className="text-xs text-success-700 font-medium">
                                                                    {helpfulClicks[faq.id] === 'yes' ? '👍 Thanks for your feedback!' : '👎 Thanks for your feedback!'}
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={() => setHelpfulClicks(prev => ({ ...prev, [faq.id]: null }))}
                                                                className="text-xs text-gray-400 hover:text-gray-600 underline text-left"
                                                            >
                                                                Reset
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => handleHelpfulClick(faq.id, 'yes')}
                                                                className="flex items-center justify-center gap-1 px-4 py-2 text-xs text-gray-600 hover:text-success-600 hover:bg-success-50 rounded-lg transition-all duration-200 border border-transparent hover:border-success-200 flex-1"
                                                            >
                                                                👍 Yes
                                                            </button>
                                                            <button
                                                                onClick={() => handleHelpfulClick(faq.id, 'no')}
                                                                className="flex items-center justify-center gap-1 px-4 py-2 text-xs text-gray-600 hover:text-warning-600 hover:bg-warning-50 rounded-lg transition-all duration-200 border border-transparent hover:border-warning-200 flex-1"
                                                            >
                                                                👎 No
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Desktop Layout */}
                                            <div className="hidden sm:block ml-16 lg:ml-20 border-l-2 border-gray-100 pl-6">
                                                <Typography
                                                    placeholder={""}
                                                    onPointerEnterCapture={undefined}
                                                    onPointerLeaveCapture={undefined}
                                                    onResize={undefined}
                                                    onResizeCapture={undefined}
                                                    className="text-gray-700 leading-relaxed text-base"
                                                >
                                                    {faq.desc}
                                                </Typography>

                                                {/* Action buttons - Desktop */}
                                                <div className="mt-6 flex items-center gap-4">
                                                    <span className="text-sm text-primary-600 font-medium">Was this helpful?</span>

                                                    {helpfulClicks[faq.id] ? (
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2 px-3 py-2 bg-success-50 border border-success-200 rounded-lg">
                                                                <span className="text-sm text-success-700 font-medium">
                                                                    {helpfulClicks[faq.id] === 'yes' ? '👍 Thanks for your feedback!' : '👎 Thanks for your feedback!'}
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={() => setHelpfulClicks(prev => ({ ...prev, [faq.id]: null }))}
                                                                className="text-xs text-gray-400 hover:text-gray-600 underline"
                                                            >
                                                                Reset
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => handleHelpfulClick(faq.id, 'yes')}
                                                                className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-success-600 hover:bg-success-50 rounded-lg transition-all duration-200 border border-transparent hover:border-success-200"
                                                            >
                                                                👍 Yes
                                                            </button>
                                                            <button
                                                                onClick={() => handleHelpfulClick(faq.id, 'no')}
                                                                className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-warning-600 hover:bg-warning-50 rounded-lg transition-all duration-200 border border-transparent hover:border-warning-200"
                                                            >
                                                                👎 No
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </AccordionBody>
                                    </Accordion>
                                </div>
                            );
                        })}
                    </div>

                    {/* No results message - Mobile Responsive */}
                    {filteredAndSortedFAQs.length === 0 && (
                        <div className="text-center py-12 sm:py-16">
                            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <MagnifyingGlassIcon className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400" />
                            </div>
                            <Typography
                                placeholder={""}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                onResize={undefined}
                                onResizeCapture={undefined}
                                variant="h4"
                                className="mb-3 sm:mb-4 text-gray-600 text-lg sm:text-xl lg:text-2xl"
                            >
                                No questions found
                            </Typography>
                            <Typography
                                placeholder={""}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                onResize={undefined}
                                onResizeCapture={undefined}
                                className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base px-4"
                            >
                                Try adjusting your search or filter criteria
                            </Typography>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("all");
                                }}
                                className="btn-gradient-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Enhanced Bottom CTA - Mobile Responsive */}
                <div className="mt-16 sm:mt-20 lg:mt-24 animate-fade-in">
                    <div className="card-material max-w-4xl mx-auto bg-gradient-to-br from-primary-50 via-white to-info-50 border border-primary-100 relative overflow-hidden p-6 sm:p-8 lg:p-12">
                        {/* Background decoration - Hidden on mobile */}
                        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl hidden sm:block"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-info opacity-5 rounded-full blur-2xl hidden sm:block"></div>

                        <div className="relative text-center">
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-colored-primary">
                                    <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                </div>
                            </div>

                            <Typography
                                placeholder={""}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                onResize={undefined}
                                onResizeCapture={undefined}
                                variant="h3"
                                className="mb-3 sm:mb-4 font-bold text-dark-500 text-xl sm:text-2xl lg:text-3xl"
                            >
                                Still Have Questions?
                            </Typography>

                            <Typography
                                placeholder={""}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                onResize={undefined}
                                onResizeCapture={undefined}
                                className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4 sm:px-0"
                            >
                                Our dedicated support team is here to help you with any additional questions about our AI-powered transcription service. Get personalized assistance and expert guidance.
                            </Typography>

                            <div className="flex justify-center">
                                <button
                                    onClick={() => window.open('mailto:shaharyar.malik2000@gmail.com?subject=Support Request - AI Transcription Service', '_blank')}
                                    className="btn-gradient-primary flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                                >
                                    <UserGroupIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span className="hidden sm:inline">Contact Support Team</span>
                                    <span className="sm:hidden">Contact Support</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
