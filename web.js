document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DATA STORES (Edit/Update your items here)
    // ==========================================
    
    const articles = [
        {
            url: "#",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80",
            imgAlt: "CAT Exam Preparation",
            tag: "EXAM GUIDE",
            tagColor: "text-[#5b21b6]",
            title: "CAT 2025: Complete Preparation Strategy",
            desc: "Detailed strategy, section-wise breakdown plan and timeline.",
            date: "May 15, 2025",
            readTime: "6 min read"
        },
        {
            url: "#",
            img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=300&q=80",
            imgAlt: "Top Business Management Colleges",
            tag: "COLLEGE INSIGHTS",
            tagColor: "text-[#166534]",
            title: "Top MBA Colleges in India 2025: Rankings & Fees",
            desc: "Check the latest updated list of top management institutes.",
            date: "May 12, 2025",
            readTime: "7 min read"
        },
        {
            url: "#",
            img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&q=80",
            imgAlt: "Engineering Books Study",
            tag: "EXAM TIPS",
            tagColor: "text-[#1e40af]",
            title: "GATE 2025: Best Books & Study Plan",
            desc: "Recommended books and month-wise study plans for GATE 2025.",
            date: "May 10, 2025",
            readTime: "5 min read"
        },
        {
            url: "#",
            img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
            imgAlt: "Medical Stethoscope and Laptop",
            tag: "CAREER GUIDE",
            tagColor: "text-[#0369a1]",
            title: "MBBS in India: Admission Process & Top Colleges",
            desc: "Everything you need to know about NEET, counselling and colleges.",
            date: "May 10, 2025",
            readTime: "5 min read"
        },
        {
            url: "#",
            img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80",
            imgAlt: "Law Scale Concept",
            tag: "EXAM GUIDE",
            tagColor: "text-[#b45309]",
            title: "CLAT 2025: Syllabus, Pattern & Prep Tips",
            desc: "Complete guide to CLAT 2025 syllabus, pattern and preparation strategy.",
            date: "May 8, 2025",
            readTime: "4 min read"
        }
    ];

    const videos = [
        {
            id: "J1VzC-KGdOk",
            tag: "STRATEGY",
            tagColor: "text-purple-800",
            title: "CAT 2025 Strategy by IIM Alumni",
            views: "12.4K views",
            timeAgo: "1w ago"
        },
        {
            id: "6kTqkTOd3Lk",
            tag: "EXAM GUIDE",
            tagColor: "text-blue-800",
            title: "How to Prepare for GATE 2025 Effectively",
            views: "9.8K views",
            timeAgo: "2w ago"
        },
        {
            id: "o82hXc44EpU",
            tag: "EXAM TIPS",
            tagColor: "text-amber-800",
            title: "CLAT 2025 Preparation Tips & Blueprints",
            views: "7.6K views",
            timeAgo: "2w ago"
        },
        {
            id: "dNrPkJttEjg",
            tag: "COLLEGE INSIGHTS",
            tagColor: "text-green-800",
            title: "Top MBA Colleges in India: Complete Breakdown",
            views: "15.3K views",
            timeAgo: "3 days ago"
        },
        {
            id: "aQS3zSkNX1k",
            tag: "EXAM GUIDE",
            tagColor: "text-red-800",
            title: "NEET 2025 Preparation Strategy & Core Topics",
            views: "11.1K views",
            timeAgo: "1 month ago"
        }
    ];

    // ==========================================
    // 2. RENDER ENGINES
    // ==========================================

    // Render Articles Grid
    const articlesContainer = document.getElementById("articles-grid");
    if (articlesContainer) {
        articlesContainer.innerHTML = articles.map(article => `
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md transition-all flex flex-col justify-between">
                <a href="${article.url}" class="block no-underline text-inherit h-full flex flex-col justify-between">
                    <div>
                        <div class="h-28 bg-slate-100 relative overflow-hidden">
                            <img src="${article.img}" alt="${article.imgAlt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            <span class="absolute bottom-2 left-2 bg-white/95 text-[8px] font-extrabold px-1.5 py-0.5 rounded ${article.tagColor} uppercase tracking-wider shadow-xs">${article.tag}</span>
                        </div>
                        <div class="p-2.5">
                            <h4 class="font-bold text-[11px] text-gray-900 leading-tight group-hover:text-blue-900 transition line-clamp-2">${article.title}</h4>
                            <p class="text-[10px] text-gray-500 mt-1 line-clamp-2 leading-tight">${article.desc}</p>
                        </div>
                    </div>
                    <div class="px-2.5 pb-2.5 pt-2 border-t border-gray-50 text-[9px] text-gray-400 font-medium flex justify-between items-center">
                        <span>${article.date}</span>
                        <span>${article.readTime}</span>
                    </div>
                </a>
            </div>
        `).join('');
    }

    // Render Videos Grid
    const videoContainer = document.getElementById("videos-grid");
    if (videoContainer) {
        videoContainer.innerHTML = videos.map(video => `
            <div data-video-id="${video.id}" class="video-card group bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
                <div>
                    <div class="h-28 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                        <img class="w-full h-full object-cover transition duration-300 group-hover:scale-105" src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition">
                            <div class="w-10 h-10 bg-red-600 group-hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-md transform transition group-hover:scale-110">
                                <i class="fa-solid fa-play ml-0.5 text-xs"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <span class="text-[8px] uppercase tracking-wider font-extrabold ${video.tagColor}">${video.tag}</span>
                        <h4 class="font-bold text-[11px] text-gray-900 mt-0.5 line-clamp-2 leading-tight">${video.title}</h4>
                    </div>
                </div>
                <div class="p-2 pt-0 text-[9px] text-gray-400 font-medium flex items-center">
                    <span>${video.views}</span><span class="mx-1">&bull;</span><span>${video.timeAgo}</span>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. LIGHTBOX MODAL CORE CONTROLS
    // ==========================================
    
    const modal = document.getElementById("video-modal");
    const modalIframe = document.getElementById("modal-iframe");
    const closeModalBtn = document.getElementById("close-modal");

    // Open Modal Function
    if (videoContainer) {
        videoContainer.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('click', () => {
                const videoId = card.getAttribute('data-video-id');
                // Set stream Source with Autoplay active
                modalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                
                // Animate Fade In
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                }, 10);
            });
        });
    }

    // Close Modal Function
    const closeModal = () => {
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modalIframe.src = ""; // Clear source to instantly kill background video audio stream
        }, 300);
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(); // Close if background shroud overlay is clicked
    });
});