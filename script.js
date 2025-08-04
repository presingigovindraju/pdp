const menuIcon = document.getElementById("menuDrop");
  const dropMenu = document.getElementById("dropMenu");

  menuIcon.addEventListener("click", () => {
    dropMenu.classList.toggle("dropshoweme");
  });



   const thumbnails = document.querySelectorAll(".thumbnailImage");
  const mainImage = document.getElementById("mainImage");
  const upArrow = document.getElementById("upArrow");
  const downArrow = document.getElementById("downArrow");
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  const imageList = Array.from(thumbnails).map((img) => img.src);
  let currentIndex = 0;

  function updateMainImage(index) {
    currentIndex = index;
    mainImage.src = imageList[index];
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => updateMainImage(index));
  });

  upArrow.addEventListener("click", () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1;
    updateMainImage(newIndex);
  });

  downArrow.addEventListener("click", () => {
    const newIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0;
    updateMainImage(newIndex);
  });

  menuIcon.addEventListener("click", () => {
    const isShown = mobileMenu.style.display === "block";
    mobileMenu.style.display = isShown ? "none" : "block";
  });






//   thirdSection
//   document.addEventListener("DOMContentLoaded", function () {
//     const tabButtons = document.querySelectorAll(".tabHeader button");
//     const tabSections = [
//       document.querySelector(".productOptionsTab"),
//       document.querySelector(".featuresSection"),
//       document.querySelector(".specTables"),
//       document.querySelector(".SpecificationsDownLoadOne")
//     ];

//     function showTab(index) {
//       tabSections.forEach((section, i) => {
//         section.style.display = i === index ? "block" : "none";
//         tabButtons[i].classList.toggle("active", i === index);
//       });
//     }

//     // Default to show the first tab
//     showTab(0);

//     tabButtons.forEach((btn, i) => {
//       btn.addEventListener("click", () => showTab(i));
//     });
//   });

