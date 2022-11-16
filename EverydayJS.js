function readMoreArtikel(artikel_ke) {
    let dots = document.querySelector(`.artikelClass[artikel_week="${artikel_ke}"] .dots`);
    let moreText = document.querySelector(`.artikelClass[artikel_week="${artikel_ke}"] .more`);
    let btnText = document.querySelector(`.artikelClass[artikel_week="${artikel_ke}"] .readMore`);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
      dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
  }
  