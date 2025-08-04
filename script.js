// const menuIcon = document.getElementById("menuDrop");
//   const dropMenu = document.getElementById("dropMenu");

//   menuIcon.addEventListener("click", () => {
//     dropMenu.classList.toggle("dropshoweme");
//   });



//    const thumbnails = document.querySelectorAll(".thumbnailImage");
//   const mainImage = document.getElementById("mainImage");
//   const upArrow = document.getElementById("upArrow");
//   const downArrow = document.getElementById("downArrow");
//   const menuIcon = document.getElementById("menuIcon");
//   const mobileMenu = document.getElementById("mobileMenu");

//   const imageList = Array.from(thumbnails).map((img) => img.src);
//   let currentIndex = 0;

//   function updateMainImage(index) {
//     currentIndex = index;
//     mainImage.src = imageList[index];
//     thumbnails.forEach((thumb, i) => {
//       thumb.classList.toggle("active", i === index);
//     });
//   }

//   thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener("click", () => updateMainImage(index));
//   });

//   upArrow.addEventListener("click", () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : imageList.length - 1;
//     updateMainImage(newIndex);
//   });

//   downArrow.addEventListener("click", () => {
//     const newIndex = currentIndex < imageList.length - 1 ? currentIndex + 1 : 0;
//     updateMainImage(newIndex);
//   });

//   menuIcon.addEventListener("click", () => {
//     const isShown = mobileMenu.style.display === "block";
//     mobileMenu.style.display = isShown ? "none" : "block";
//   });






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













//  <script>
// chairImageChange arrow up/down
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainProductImage");
  const thumbnails = document.querySelectorAll(".thumbnailImage");
  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");

  let currentIndex = 0;

  // Update main image
  function updateMainImage(index) {
    if (thumbnails[index]) {
      mainImage.src = thumbnails[index].dataset.src || thumbnails[index].src;
      thumbnails.forEach(t => t.classList.remove("activeThumbnail"));
      thumbnails[index].classList.add("activeThumbnail");
      currentIndex = index;
    }
  }

  // Thumbnail click
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      updateMainImage(index);
    });
  });

  // Arrow up
  arrowUp?.addEventListener("click", () => {
    if (currentIndex > 0) updateMainImage(currentIndex - 1);
  });

  // Arrow down
  arrowDown?.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - 1) updateMainImage(currentIndex + 1);
  });

  // Initialize with first thumbnail
  updateMainImage(currentIndex);
});



//   button 
document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("seeMoreButton");
  const moreText = document.getElementById("moreText");
  const dots = document.getElementById("dots");
  const seeMoreText = seeMoreBtn.querySelector(".seeMoreText");
  const icon = seeMoreBtn.querySelector("i");

  seeMoreBtn.addEventListener("click", function () {
    const isHidden = moreText.style.display === "none";

    moreText.style.display = isHidden ? "inline" : "none";
    dots.style.display = isHidden ? "none" : "inline";

    seeMoreText.textContent = isHidden ? "See Less" : "See More";
    icon.classList.toggle("fa-angle-right", !isHidden);
    icon.classList.toggle("fa-angle-up", isHidden);
  });
});



//    SecoundSection
function renderSeatSizeButtons(containerId, sizes = [], defaultSize = '') {
  const container = document.getElementById(containerId);

  if (!container || !Array.isArray(sizes)) return;

  // Clear existing buttons
  container.innerHTML = '';

  sizes.forEach(size => {
    const button = document.createElement('button');
    button.textContent = size;

    // Add 'active' class to default size
    if (size === defaultSize) {
      button.classList.add('active');
    }

    // On click, set active and do something with the value
    button.addEventListener('click', () => {
      const allButtons = container.querySelectorAll('button');
      allButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Example: log selected size
      console.log(`Selected seat size: ${size}`);
    });

    container.appendChild(button);
  });
}

// Example usage (simulate backend data)
const seatSizesFromBackend = ['16"', '18"', '20"', '22"'];
renderSeatSizeButtons('seatSizeButtons', seatSizesFromBackend, '18"');


// for color buttons
function renderColorDots(containerId, colors = [], defaultColor = '') {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(colors)) return;

  container.innerHTML = '';

  colors.forEach(color => {
    const dot = document.createElement('span');
    dot.classList.add('dot', color); // e.g., class="dot red"
    if (color === defaultColor) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      container.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      console.log(`Selected color: ${color}`);
    });

    container.appendChild(dot);
  });
}
const colorsFromBackend = ['red', 'blue', 'black', 'green', 'white'];
renderColorDots('colorDotsContainer', colorsFromBackend, 'red');



// Arm style 
function renderArmStyleButtons(containerId, styles = [], defaultStyle = '') {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(styles)) return;

  container.innerHTML = '';

  styles.forEach(style => {
    const button = document.createElement('button');
    const maxChars = 12;
    const isLong = style.length > maxChars;

    const displayText = isLong ? style.slice(0, maxChars) + '...' : style;

    button.textContent = displayText;
    button.title = style; // Show full text on hover
    button.className = 'styleButton';

    if (isLong) {
      button.classList.add('left-align');
    }

    if (style === defaultStyle) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      container.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      console.log(`Selected arm style: ${style}`);
    });

    container.appendChild(button);
  });
}

// Example usage
const armStyles = [
  'Desk',
  'Full',
  'Adjustable Flip-Back Armrests',
  'Compact Padded Support Arm',
  'Swivel Height Adjustable Ergonomic Arm'
];

renderArmStyleButtons('armStyleButtons', armStyles, 'Full');















// font rigging
function renderFrontRiggingButtons(containerId, options = [], defaultOption = '') {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(options)) return;

  container.innerHTML = '';

  options.forEach(option => {
    const button = document.createElement('button');
    const maxChars = 12;
    const isLong = option.length > maxChars;

    const displayText = isLong ? option.slice(0, maxChars) + '...' : option;

    button.textContent = displayText;
    button.title = option;
    button.className = 'riggingButton';

    if (isLong) {
      button.classList.add('left-align');
    }

    if (option === defaultOption) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      container.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      console.log(`Selected front rigging: ${option}`);
    });

    container.appendChild(button);
  });
}

// Example usage
const riggingOptions = [
  'Footrests',
  'Legrests',
  'Elevating Leg Rests with Straps',
  'Swing-Away Foot Platform for Comfort'
];

renderFrontRiggingButtons('frontRiggingButtons', riggingOptions, 'Legrests');









// thirdSection
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tabHeader button");
  const tabSections = [
    document.querySelector(".productOptionsTab"),
    document.querySelector(".featuresSection"),
    document.querySelector(".specTables"),
    document.querySelector(".SpecificationsDownLoadOne")
  ];

  if (tabButtons.length === 0 || tabSections.some(section => !section)) return;

  function showTab(index) {
    tabSections.forEach((section, i) => {
      section.style.display = i === index ? "block" : "none";
      tabButtons[i]?.classList.toggle("active", i === index);
    });
  }

  // Show first tab by default
  showTab(0);

  tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => showTab(i));
  });
});


// fifthSection

document.addEventListener("DOMContentLoaded", function () {
  const accessoriesGrid = document.getElementById("accessoriesGrid");
  const seeAllButton = document.getElementById("seeAllButton");

  const itemsPerRow = 4;
  let visibleRows = 1;

  const accessories = Array.from({ length: 20 }, (_, i) => ({
    name: "Heel Strap",
    itemNumber: "STDS831",
    price: "$262.23",
    image:
      "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  }));

  function renderAccessories() {
    accessoriesGrid.innerHTML = ""; // clear first
    const itemsToShow = accessories.slice(0, visibleRows * itemsPerRow);

    itemsToShow.forEach((item) => {
      const card = document.createElement("div");
      card.className = "accessoryCard";
      card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <div class="accessoryDetails">
            <h3>${item.name}</h3>
            <p>Item # ${item.itemNumber}</p>
            <h4>${item.price}</h4>
            <button class="addToCartBtn">Add to Cart</button>
          </div>
        `;
      accessoriesGrid.appendChild(card);
    });

    // Hide See All button if all items are shown
    if (visibleRows * itemsPerRow >= accessories.length) {
      seeAllButton.style.display = "none";
    }
  }

  seeAllButton.addEventListener("click", function () {
    visibleRows++;
    renderAccessories();
  });

  renderAccessories(); // Initial render
});


{/* </script> */ }
