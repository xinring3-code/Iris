"use strict";
(() => {
  const nodes = [...document.querySelectorAll("[data-en]")];
  nodes.forEach(node => { node.dataset.zh = node.innerHTML; });
  const toggle = document.getElementById("language");
  const nav = document.querySelector("nav");
  function setLanguage(language) {
    const english = language === "en";
    document.documentElement.lang = english ? "en" : "zh-CN";
    nodes.forEach(node => { node.innerHTML = english ? node.dataset.en : node.dataset.zh; });
    document.title = english ? "Iris | Poultry Genetics & Breeding" : "Iris | 家禽遗传育种";
    document.querySelector('meta[name="description"]').content = english
      ? "Iris · Chinese Academy of Agricultural Sciences · Poultry genetics, alternative splicing, eQTL/sQTL and G×E GWAS."
      : "Iris · Chinese Academy of Agricultural Sciences · 家禽遗传育种、可变剪接、eQTL/sQTL 与 G×E GWAS。";
    nav.setAttribute("aria-label", english ? nav.dataset.labelEn : "主导航");
    toggle.textContent = english ? "中文 / EN" : "EN / 中文";
    toggle.setAttribute("aria-label", english ? "切换至中文" : "Switch to English");
    try { localStorage.setItem("iris-language", language); } catch (_) {}
  }
  let initial = "zh";
  try { initial = localStorage.getItem("iris-language") === "en" ? "en" : "zh"; } catch (_) {}
  setLanguage(initial);
  toggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "en" ? "zh" : "en"));
  document.getElementById("year").textContent = new Date().getFullYear();
})();
