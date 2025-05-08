const sidebar = document.getElementById("sidebar");
        const menuBtn = document.getElementById("menu");
        const closeBtn = document.getElementById("closeSidebar");
        const overlay = document.querySelector(".sidebar-overlay");
        const langBtn = document.getElementById("langBtn");
        const selectedLang = document.getElementById("selectedLang");
        const selectedFlag = document.getElementById("selectedFlag");
    
        const translations = {
        "home": { en: "Home", uz: "Uy" },
        "about": { en: "About", uz: "Haqida" },
        "projects": { en: "Projects ", uz: "Loyihalar" },
        "contact": { en: "Contact", uz: "Bog'lanish" },
        "greeting": { 
            en: "Hello, I'm <span class='text-green-400'>A'loyev Sardor</span>", 
            uz: "Salom, men <span class='text-green-400'>A'loyev Sardor</span>" 
        },
        "description": { 
            en: "As a web developer and designer, I am a result-oriented professional. My goal is to contribute to product success by creating and managing websites and web applications.", 
            uz: "Men veb-dasturchi va dizaynerman. Mening maqsadim - veb-saytlar va veb-ilovalarni yaratish va boshqarish orqali mahsulot muvaffaqiyatiga hissa qo'shish." 
        },
        "aboutBtn": { en: "About Me", uz: "Men haqimda" },
        "profession": { en: "Web Developer | Designer", uz: "Veb Dasturchi | Dizayner" },
        "frontend": { en: "Frontend", uz: "Frontend" },
        "uiux": { en: "UI/UX", uz: "UI/UX" },
        "freelancer": { en: "Freelancer", uz: "Freelancer" },
        "email": { en: "Email", uz: "E-pochta" },
        "github": { en: "GitHub", uz: "GitHub" },
        "filter": { en: "Filter", uz: "Filtrlash" },
        "ism": { en: "Name", uz: "Ism" },
        "email":{en:"Email",uz:"E-pochta"},
        "xabar":{en:"Description",uz:"Xabar"},
        "request":{en:"Send a request", uz:"So'rov Jo'natish"},
        "submit":{en:"Send", uz:"Jo'natish"},
        "tel": { en: "Phone Number", uz: "Telefon" },
        "map": { en: "Location", uz: "Joylashuv" },
        "telegram": { en: "Telegram", uz: "Telegram" },
        "phone": { en: "Phone", uz: "Telefon" },
        "mennima": { en: "What I Can Do?", uz: "Men nima qila olaman" },
        "texno": { en: "Technologies", uz: "Texnologiyalar" },
        "seotitle": { en: "SEO Optimization", uz: "SEO optimizatsiya"},
        "seotext": { en: "Boost website ranking in search engine results", uz: "Saytni qidiruv tizimlarida yuqori o'rinlarga ko'tarish"},
        "qualitytitle": { en: "High-Quality Development" , uz: "Sifatli ishlab chiqish"},
        "qualitytext": { en: "Develop websites with top-notch quality and modern standards", uz: "Saytlarni yuqori sifatli va zamonaviy standartlarga mos ishlab chiqish"},
        "strongtitle": { en: "Strong Design", uz: "Kuchli Dizayn"},
        "strongtext": { en: "Focus on elegance and attention to small details in design", uz: "Dizayn jarayonida nafislik va detallarga katta e’tibor qaratish"},
        "efficiencytitle": { en: "Efficiency" , uz:"Tezkor ish jarayoni"},
        "efficiencytext": { en: "Create websites quickly and efficiently within short timeframes", uz: "Belgilangan vaqt ichida samarali va tezkor sayt yaratish"},
     "abouttitle" : {
            en: `
            Hello, my name is A'loyev Sardor. I was born in 2011 in the Tashkent region of the Republic of Uzbekistan.
            From a young age, my interest in technology led me to web development. I enjoy creating user-friendly and 
            efficient applications, which constantly inspires me to grow in this field. 
        
            Programming fascinates me because it requires not only creative thinking but also the ability to find 
            the most efficient solution to every problem. My primary goal when developing applications is to create 
            products that combine multi-functionality, modern design, and ease of use for users. 
        
            I specialize in developing web applications using React, Tailwind CSS, and other cutting-edge technologies. 
            My aim is to create fast and intuitive user interfaces for websites while maintaining a perfect balance 
            between design and functionality. 
        
            As I continue to grow in web development, I strive to create intuitive and user-friendly products. 
            At the same time, I am constantly learning new technologies to broaden my knowledge and improve my skills.
        
            If you're interested in the projects I’ve worked on, feel free to visit the Projects page!
            `,
            uz: `
            Assalomu alaykum, Men A'loyev Sardorman. Men 2011-yil O’zbekiston Respublikasining Toshkent shahrida 
            tug’ilganman. Yoshligimdan texnologiyaga bo'lgan qiziqishim meni veb dasturchilikka yetakladi. Men foydalanuvchilar 
            uchun qulay va samarali dasturlar yaratishni yaxshi ko'raman, bu esa meni bu sohada doimiy o'sishga ilhomlantiradi.
        
            Dasturlash – bu meni qiziqtiradigan jarayon, chunki u nafaqat ijodiy tafakkurni talab qiladi, balki har bir 
            muammo uchun eng samarali yechimni izlashni o'rgatadi. Dastur yaratishda asosiy maqsadim – ko'p funksionallikka 
            ega, zamonaviy dizayn bilan birga foydalanuvchilarga qulay foydalanish hususiyatini taqdim etadigan mahsulot 
            yaratishdir.
        
            Men asosan JavaScript, Tailwind CSS va boshqa ilg'or texnologiyalar yordamida veb ilovalar ishlab chiqaman. Maqsadim – 
            veb saytlarda tezkor va qulay foydalanuvchi interfeysi yaratish, shuningdek, dizayn va funksionallik o'rtasida 
            muvozanatni saqlashdir.
        
            Veb dasturlashdagi o'sishim davomida, foydalanuvchilarga intuitiv va qulay mahsulotlar yaratishga intilaman. 
            Bu bilan birga, yangi texnologiyalarni o'rganib, o'z bilimlarimni kengaytirishga harakat qilaman.
        
            Agar mening loyihalarim sizni qiziqtirsa, Loyihalar sahifasiga tashrif buyurishingiz mumkin!
            `}
        };
        
    
        function getSavedLanguage() {
            return localStorage.getItem("lang") || "en"; 
        }
    
        function saveLanguage(lang) {
            localStorage.setItem("lang", lang);
        }
    
        function updateTextContent(lang) {
            document.querySelectorAll("[data-key]").forEach(el => {
                el.innerText = translations[el.getAttribute("data-key")][lang];
            });
    
            document.getElementById("greeting").innerHTML = translations["greeting"][lang];
            document.getElementById("description").innerText = translations["description"][lang];
            document.getElementById("aboutBtn").innerHTML = ` <i class="fa-solid fa-circle-info"></i>  ${translations["aboutBtn"][lang]}<i class="fa-solid fa-arrow-right group-hover:pl-3 transition-all"></i>`;
            document.getElementById("projectBtn").innerHTML = `  
            ${translations["projects"][lang]}  
            <i class="fa-sharp fa-arrow-right group-hover:pl-3 transition-all"></i>
        `;
                }
    
        function switchLanguage() {
            let currentLang = getSavedLanguage();
            let newLang = currentLang === "en" ? "uz" : "en";
    
            saveLanguage(newLang);
            selectedLang.innerText = newLang === "en" ? "English" : "O'zbek";
            selectedFlag.src = newLang === "en" 
                ? "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
                : "http://www.geonames.org/flags/x/uz.gif";
    
            updateTextContent(newLang);
        }
    
        document.addEventListener("DOMContentLoaded", () => {
            let savedLang = getSavedLanguage();
            selectedLang.innerText = savedLang === "en" ? "English" : "O'zbek";
            selectedFlag.src = savedLang === "en" 
                ? "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
                : "http://www.geonames.org/flags/x/uz.gif";
    
            updateTextContent(savedLang);
        });
    
        langBtn.addEventListener("click", switchLanguage);
    
        // Sidebar Management
        menuBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
            document.body.classList.add("sidebar-active");
            overlay.style.display = "block";
        });
    
        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("open");
            document.body.classList.remove("sidebar-active");
            overlay.style.display = "none";
        });
    
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            document.body.classList.remove("sidebar-active");
            overlay.style.display = "none";
        });
    
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.add("open");
            } else {
                sidebar.classList.remove("open");
                document.body.classList.remove("sidebar-active");
            }
        });

        document.addEventListener("DOMContentLoaded", function () {
            const currentPath = window.location.pathname.split("/").pop(); // Joriy sahifa nomini olish
            const links = document.querySelectorAll(".nav-link"); // Barcha linklarni olish (desktop + mobile)
        
            links.forEach(link => {
                if (link.getAttribute("href") === `./${currentPath}`) {
                    link.classList.add("text-green-400"); // Aktiv sahifaga yashil rang berish
                } else {
                    link.classList.remove("text-green-400"); // Boshqalardan olib tashlash
                }
            });
        });
        
        document.addEventListener("keydown", function(event) {
            if (event.ctrlKey && event.key === "/") {
                event.preventDefault(); // Brauzerning default shortcutini bloklaydi
                document.getElementById("searchInput").focus();
            }
        });
        const projects = [
            {
                id: 1,
                name: "PORTFOLIO",
                image: "./images/portfolio.png",
                description: "Portfolio website",
                technologies: ["HTML", "TailwindCSS", "CSS", "JavaScript", "Website"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/FIRST-PORTFOLIO/"
            },
            {
                id: 2,
                name: "NFT-Marketplace",
                image: "./images/nft.png",
                description: "Marketplace platform",
                technologies: ["Html", "TailwindCSS", "JavaScript", "Website"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/NFTMarketplace/"
            },
            {
                id: 3,
                name: "LIVE TIME / SOAT",
                image: "./images/clock.png",
                description: "LIVE TIME / SOAT",
                technologies: ["JavaScript", "API", "Time", "TailwindCSS"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/LIVE-CLOCK-3/"
            },
            {
                id: 4,
                name: "LIVE TIME 2 / SOAT",
                image: "./images/digital.png",
                description: "Vazifalarni boshqarish tizimi",
                technologies: ["HTML", "Website", "Time" , "TailwindCSS" , "JavaScript"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/DIGITAL-CLOCK/"
            },
            {
                id: 5,
                name: "All Countries / Barcha davlatlar",
                image: "./images/flag.png",
                description: "All Countries of the World",
                technologies: ["HTML", "CSS", "JavaScript", "API" , "Flags", "Countries"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/All-Flags/"
            },
            {
                id: 6,
                name: "Movie Library",
                image: "./images/movies.png",
                description: "Interesting Movies",
                technologies: ["JavaScript", "LocalStorage", "Movies" , "API", "TailwindCSS"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/2-oy-exam-movies/"
            },
            {
                id: 7,
                name: "Weather App",
                image: "./images/weather.png",
                description: "Every country weather",
                technologies: ["JavaScript", "LocalStorage", "Weather" , "API", "TailwindCSS"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/10-weatherapp/"
            },
            {
                id: 8,
                name: "Green Portfolio",
                image: "./images/green.png",
                description: "Green portfolio ",
                technologies: ["JavaScript", "CSS", "Portfolio"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/SimplePortfolio/"
            },
            {
                id: 9,
                name: "Konstify",
                image: "./images/konsta.jpg",
                description: "Konstify for KONSTA SINGER",
                technologies: ["React", "TailwindCSS", "MUSIC"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://9-konstify.vercel.app/"
            },
            {
                id: 10,
                name: "Cinemas trailer",
                image: "./images/trailer.png",
                description: "Cinemas trailer",
                technologies: ["HTML", "TailwindCSS", "CSS", "JavaScript"],
                github: "https://github.com/SARDORALOYEV",
                live: "https://sardoraloyev.github.io/cinema/"
            },
        ];
        
        document.addEventListener("DOMContentLoaded", () => {
            const projectContainer = document.querySelector(".project-list");
            const modal = document.querySelector("#projectModal");
            const modalTitle = document.querySelector("#modalTitle");
            const modalImage = document.querySelector("#modalImage");
            const modalDescription = document.querySelector("#modalDescription");
            const modalGithub = document.querySelector("#modalGithub");
            const modalLive = document.querySelector("#modalLive");
            const searchInput = document.querySelector("#searchInput");
            const closeModal = document.querySelector("#closeModal");
            const projectsList = document.querySelector("#projects_list");
            const refresh = document.querySelector(".refresh_button");


            // Loyihalarni ekranga chiqarish
            function renderProjects(filter = "") {
                projectContainer.innerHTML = "";
                const filteredProjects = projects.filter(project => 
                    project.name.toLowerCase().includes(filter.toLowerCase())
                );
                
                filteredProjects.forEach(project => {
                    const projectCard = document.createElement("div");
                    projectCard.classList.add("relative", "bg-gray-900", "rounded-lg", "overflow-hidden", "cursor-pointer");
        
                    projectCard.innerHTML = `
                        <img src="${project.image}" alt="${project.name}" class="w-full h-48 object-cover">
                        <div class="absolute top-2 left-2 bg-black border border-white p-2 rounded-lg">
                            <button class="view-btn" data-id="${project.id}">
                                <i class="fa-solid fa-eye text-white"></i>
                            </button>
                        </div>
                        <div class="absolute top-2 right-2 flex gap-2">
                            <div class="bg-black border border-white p-2 rounded-lg">
                                <a href="${project.live}" target="_blank">
                                    <i class="fa-solid fa-link text-white"></i>
                                </a>
                            </div>
                            <div class="bg-black border border-white p-2 rounded-lg">
                                <a href="${project.github}" target="_blank">
                                    <i class="fa-brands fa-github text-white"></i>
                                </a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h2 class="text-white font-bold text-lg">${project.name}</h2>
                            <p class="text-green-400 text-sm mt-2">#${project.technologies.join(" #")}</p>
                        </div>
                    `;
                    projectContainer.appendChild(projectCard);
                });
            }
        
            // Modalni ochish
            projectContainer.addEventListener("click", (e) => {
                const btn = e.target.closest(".view-btn");
                if (!btn) return;
                const projectId = parseInt(btn.dataset.id);
                const project = projects.find(p => p.id === projectId);
        
                if (project) {
                    modalTitle.textContent = project.name;
                    modalImage.src = project.image;
                    modalDescription.textContent = project.description;
                    modalGithub.href = project.github;
                    modalLive.href = project.live;
                    modal.classList.remove("hidden"); // Modalni ochish
                    projectsList.classList.add("hidden");
                }
            });
        
            // Modalni yopish
            closeModal.addEventListener("click", () => {
                modal.classList.add("hidden"); // Modalni yopish
                refresh.classList.remove("hidden");
            });
        
            // Modal tashqarisini bosganda yopish
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.add("hidden");
                    refresh.classList.remove("hidden");
                }
            });
        
            // Qidiruv funksiyasi
            searchInput.addEventListener("input", (e) => {
                renderProjects(e.target.value);
            });
        
            // Dastlab barcha loyihalarni chiqaramiz
            renderProjects();
        });
        document.getElementById("submitBtn").addEventListener("click", function () {
            
            
            const botToken = "8081073963:AAFbg0-LbTtBboGeU1Ppu0aejF29GUccDV0"; // Bot tokeningizni yozing
            const chatId = "7116299492"; // Telegram chat yoki group ID
            
            const name = document.getElementById("userName").value.trim();
            const email = document.getElementById("userEmail").value.trim();
            const message = document.getElementById("userMessage").value.trim();
        
            // Email validatsiyasi
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!name || !email || !message) {
                alert("Boshidan to'ldiring!!!");
                return;
            }
        
            if (!emailPattern.test(email)) {
                alert("Iltimos, to‘g‘ri email kiriting! (masalan: example@gmail.com)");
                return;
            }
        
            const text = `📩 *New Message!*\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Message:* ${message}`;
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;
        
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar yuborildi!");
                        document.getElementById("userName").value = "";
                        document.getElementById("userEmail").value = "";
                        document.getElementById("userMessage").value = "";
                    } else {
                        alert("Xatolik yuz berdi!");
                    }
                })
                .catch(error => console.error("Error:", error));
        });
        function refresh() {
            window.location.reload();
        }
        
