/* ============================
   Portfolio 2.0 — FULL FIX VERSION
   + Auto Gallery System
   ============================ */

document.addEventListener("DOMContentLoaded", () => {

  // ============================
  // Mobile Nav Toggle
  // ============================
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // ============================
  // Scroll Reveal
  // ============================
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // ============================
  // Lightbox（保留你原功能）
  // ============================
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // ============================
  // 🔥 AUTO GALLERY SYSTEM（核心）
  // ============================
  const images = [
    // 👉 你只需要保证 images 文件夹有这些文件
    "images/p1-1.jpg",
    "images/p1-2.jpg",
    "images/p1-3.jpg",
    "images/p1-4.jpg",
    "images/p1-5.jpg",

    "images/p2-1.jpg",
    "images/p2-2.jpg",
    "images/p2-3.jpg",

    "images/p3-1.jpg",
    "images/p3-2.jpg",
    "images/cover.jpg"
  ];

  const gallery = document.getElementById("gallery");

  if (gallery) {
    images.forEach(src => {
      const img = document.createElement("img");

      img.src = src;
      img.className = "gallery-img";

      // 防止图片404影响布局
      img.onerror = () => {
        img.style.display = "none";
      };

      // 点击放大
      img.addEventListener("click", () => {
        openLightbox(src);
      });

      gallery.appendChild(img);
    });
  }

});
