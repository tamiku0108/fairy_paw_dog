console.log("JS OK");

document.addEventListener("DOMContentLoaded", () => {
    // ページが読み込まれたらスタート

    const paws = document.querySelectorAll(".paw");
    const pawWrap = document.querySelector(".paw-wrap");

    // 要素が無ければ止める（エラー防止）
    if (!pawWrap || paws.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                // 足あとを順番に表示
                paws.forEach((paw, i) => {
                    setTimeout(() => {
                        paw.classList.add("show");
                    }, i * 600);
                });

                // 1回だけ実行
                observer.disconnect();
            }
        });
    });

    observer.observe(pawWrap);
});

// ------------------------------------------------
$(".pickup-img").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerPadding: "50px",
                slidesToShow: 1,
            },
        },
    ],
});


// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#About,#service,#Gallery,#price,#contact");
    const backToTop = document.querySelector("#backToTop");

    let showButton = false;

    // Aboutに入ったら表示ON
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showButton = true;
                backToTop.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(aboutSection);

    // スクロールで制御（最後まで表示）
    window.addEventListener("scroll", () => {
        if (showButton) {
            backToTop.classList.add("show");
        }
    });

    // TOPへ戻る
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#About");
    const backToTop = document.querySelector("#backToTop");

    if (!aboutSection || !backToTop) {
        console.error("要素が見つかりません", aboutSection, backToTop);
        return;
    }

    let showButton = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showButton = true;
                backToTop.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);

    window.addEventListener("scroll", () => {
        if (showButton) {
            backToTop.classList.add("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// ハンバーガーメーーーーーーーーーーーーー
const hamburger = document.querySelector(".hamburger");
const siteMenu = document.querySelector(".site-menu");

if (hamburger && siteMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        siteMenu.classList.toggle("active");
    });
}
// メニュー内リンクを押したら閉じる
const menuLinks = document.querySelectorAll(".site-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        siteMenu.classList.remove("active");
    });
});