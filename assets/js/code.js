// /* --------------------------- HEADER --------------------------- */

let currentIndexHeader = 0;
const items = document.querySelectorAll('.header_topbar-item');
const totalItems = items.length;

function updateCarousel() {
  const wrapper = document.querySelector('.header_topbar-wrapper');
  const width = wrapper.clientWidth;
  wrapper.style.transform = `translateX(-${currentIndexHeader * width}px)`;
}

function showNext() {
  if (currentIndexHeader < totalItems - 1) {
    currentIndexHeader++;
  } else {
    currentIndexHeader = 0;
  }
  updateCarousel();
}

function showPrevious() {
  if (currentIndexHeader > 0) {
    currentIndexHeader--;
  } else {
    currentIndexHeader = totalItems - 1;
  }
  updateCarousel();
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    document.querySelector('.header_topbar-wrapper').style.transform = 'none';
  } else {
    updateCarousel();
  }
});

window.onload = () => {
  if (window.innerWidth < 1024) {
    updateCarousel();
  }
};


// /* --------------------------- BANNER MAIN --------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  const bannerMainCarousel = document.querySelector('.banner_main_carousel');
  const bannerMainCarouselPrev = document.querySelector('.banner_main_carousel-prev');
  const bannerMainCarouselNext = document.querySelector('.banner_main_carousel-next');
  const bannerMainCarouselItem = document.querySelectorAll('.banner_main_carousel-item');
  let currentIndexBannerMain = 0;

  function updateCarousel() {
      const width = bannerMainCarouselItem[0].offsetWidth;
      bannerMainCarousel.style.transform = `translateX(-${currentIndexBannerMain * width}px)`;
  }

  function nextSlide() {
      currentIndexBannerMain = (currentIndexBannerMain + 1) % bannerMainCarouselItem.length;
      updateCarousel();
  }

  function prevSlide() {
      currentIndexBannerMain = (currentIndexBannerMain - 1 + bannerMainCarouselItem.length) % bannerMainCarouselItem.length;
      updateCarousel();
  }

  bannerMainCarouselNext.addEventListener('click', nextSlide);
  bannerMainCarouselPrev.addEventListener('click', prevSlide);

  window.addEventListener('resize', updateCarousel);
  
  updateCarousel();
});

// /* --------------------------- SECÇÃO COMPRAS POR CATEGORIA --------------------------- */

const sliderContainer = document.querySelector('.category_slider_side-container');
const slider = document.querySelector('.category_slider_side');
const slides = document.querySelectorAll('.category_slider_side-item');
const totalSlides = slides.length;

let currentIndexCategoryPurchase = 0;

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth; 

  const translateX = -currentIndexCategoryPurchase * slideWidth;

  slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  currentIndexCategoryPurchase = (currentIndexCategoryPurchase + 1) % totalSlides; 
  updateSliderPosition();
}

function prevSlide() {
  currentIndexCategoryPurchase = (currentIndexCategoryPurchase - 1 + totalSlides) % totalSlides; 
  updateSliderPosition();
}

window.addEventListener('resize', updateSliderPosition);

updateSliderPosition();

// /* --------------------------- SECÇÃO RECOMENDADOS PARA VOCË --------------------------- */

let currentSlideRecommendedProducts = 0;
const recommendedProductsList = document.querySelector('.recommended_products_list');
const recommendedProductsItems = document.querySelectorAll('.recommended_products_item');

function showSlideRecommendedProducts(index) {
    if (index >= recommendedProductsItems.length) {
        currentSlideRecommendedProducts = 0;
    } else if (index < 0) {
        currentSlideRecommendedProducts = recommendedProductsItems.length - 1;
    }

    const itemWidth = recommendedProductsItems[0].offsetWidth;
    
    const newPosition = -itemWidth * currentSlideRecommendedProducts;

    recommendedProductsList.style.transform = `translateX(${newPosition}px)`;
}

function prevSlideRecommendedProducts() {
    currentSlideRecommendedProducts--;
    showSlideRecommendedProducts(currentSlideRecommendedProducts);
}

function nextSlideRecommendedProducts() {
    currentSlideRecommendedProducts++;
    showSlideRecommendedProducts(currentSlideRecommendedProducts);
}

window.onload = () => {
  showSlideRecommendedProducts(currentSlideRecommendedProducts);
};

// /* --------------------------- SECÇÃO MAIS VENDIDOS --------------------------- */

let currentSlideBestSellers = 0;
const recommendedBestSelerList = document.querySelector('.best_sellers_list');
const recommendedBestSelersitem = document.querySelectorAll('.best_sellers_item');

function showSlideBestSellers(index) {
    if (index >= recommendedBestSelersitem.length) {
        currentSlideBestSellers = 0;
    } else if (index < 0) {
        currentSlideBestSellers = recommendedBestSelersitem.length - 1;
    }

    const itemWidth = recommendedBestSelersitem[0].offsetWidth;
    
    const newPosition = -itemWidth * currentSlideBestSellers;

    recommendedBestSelerList.style.transform = `translateX(${newPosition}px)`;
}

function prevSlideBestSellers() {
    currentSlideBestSellers--;
    showSlideBestSellers(currentSlideBestSellers);
}

function nextSlideBestSellers() {
    currentSlideBestSellers++;
    showSlideBestSellers(currentSlideBestSellers);
}

window.onload = () => {
  showSlideBestSellers(currentSlideBestSellers);
};


// /* --------------------------- SECÇÃO ÓCULOS DE SOL --------------------------- */

let currentSlideSunglasses = 0;
const recommendedSunglassesList = document.querySelector('.sunglasses_list');
const recommendedSunglassesItem = document.querySelectorAll('.sunglasses_item');

function showSlideSunglasses(index) {
    if (index >= recommendedSunglassesItem.length) {
        currentSlideSunglasses = 0;
    } else if (index < 0) {
        currentSlideSunglasses = recommendedSunglassesItem.length - 1;
    }

    const itemWidth = recommendedSunglassesItem[0].offsetWidth;
    
    const newPosition = -itemWidth * currentSlideSunglasses;

    recommendedSunglassesList.style.transform = `translateX(${newPosition}px)`;
}

function prevSlideSunglasses() {
    currentSlideSunglasses--;
    showSlideSunglasses(currentSlideSunglasses);
}

function nextSlideSunglasses() {
    currentSlideSunglasses++;
    showSlideSunglasses(currentSlideSunglasses);
}

window.onload = () => {
  showSlideSunglasses(currentSlideSunglasses);
};

// /* --------------------------- SECÇÃO PERFUMES --------------------------- */

let currentSlideFragrance = 0;
const recommendedFragranceList = document.querySelector('.fragrance_list');
const recommendedFragranceItem = document.querySelectorAll('.fragrance_item');

function showSlideFragrance(index) {

    if (index >= recommendedFragranceItem.length) {
        currentSlideSunglasses = 0;
    } else if (index < 0) {
        currentSlideSunglasses = recommendedFragranceItem.length - 1;
    }

    const itemWidth = recommendedFragranceItem[0].offsetWidth;
    
    const newPosition = -itemWidth * currentSlideSunglasses;

    recommendedFragranceList.style.transform = `translateX(${newPosition}px)`;
}

function prevSlideFragrance() {
    currentSlideSunglasses--;
    showSlideFragrance(currentSlideSunglasses);
}

function nextSlideFragrance() {
    currentSlideSunglasses++;
    showSlideFragrance(currentSlideSunglasses);
}

window.onload = () => {
  showSlideFragrance(currentSlideSunglasses);
};

// /* --------------------------- SECÇÃO DE ACESSORIOS --------------------------- */

let currentSlideAccessories = 0;
const recommendedAccessoriesList = document.querySelector('.accessories_list');
const recommendedAccessoriesItem = document.querySelectorAll('.accessories_item');

function showSlideAccessories(index) {
    if (index >= recommendedAccessoriesItem.length) {
        currentSlideAccessories = 0;
    } else if (index < 0) {
        currentSlideAccessories = recommendedAccessoriesItem.length - 1;
    }

    const itemWidth = recommendedAccessoriesItem[0].offsetWidth;

    const newPosition = -itemWidth * currentSlideAccessories;

    recommendedAccessoriesList.style.transform = `translateX(${newPosition}px)`;
}

function prevSlideAccessories() {
    currentSlideAccessories--;
    showSlideAccessories(currentSlideAccessories);
}

function nextSlideAccessories() {
    currentSlideAccessories++;
    showSlideAccessories(currentSlideAccessories);
}

window.onload = () => {
  showSlideAccessories(currentSlideAccessories);
};

// /* --------------------------- SECÇÃO DE FEEDBACK DE CLIENTES --------------------------- */

document.addEventListener("DOMContentLoaded", function() {
  const sliderContainer = document.querySelector(".client_feedback_list");
  const items = document.querySelectorAll(".client_feedback_item");
  const itemCount = items.length;
  let currentIndex = 0;
  const slideWidth = items[0].clientWidth;
  
  function moveSlider() {

      currentIndex++;
      
      if (currentIndex >= itemCount) {
          currentIndex = 0;
      }
      
      sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  setInterval(moveSlider, 3000);

  window.addEventListener("resize", () => {
      const newSlideWidth = items[0].clientWidth;
      sliderContainer.style.transform = `translateX(-${newSlideWidth * currentIndex}px)`;
  });
});

// /* --------------------------- SECÇÃO DE CONTATO --------------------------- */

const newsletterForm = document.getElementById('newsletterForm');
const inputCompleteName = document.getElementById('newsletterCompleteName');
const errorMessageCompleteName = document.getElementById('newsletterErrorMessageCompleteName');
const inputCompleteEmail = document.getElementById('newsletterCompleteEmail');
const errorMessageCompleteEmail = document.getElementById('newsletterErrorMessageCompleteEmail');
const subscribeButtom = document.getElementById('newsletterSubscribeButton');
const successMessage = document.getElementById('newsletterSuccessMessage');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputCheckbox = document.getElementById('newsletterCheckbox');
const errorMessageCheckbox = document.getElementById('newsletterErrorMessageCheckbox');

function validateName() {
  if (inputCompleteName.value.trim() === '') {
    errorMessageCompleteName.innerText = 'Campo Obrigatório';
    return false;
  } else if (inputCompleteName.value.length <= 6) {
    errorMessageCompleteName.innerText = 'Digite o nome completo!';
    return false;
  } else {
    errorMessageCompleteName.innerText = '';
    return true; 
  }
}

function validateEmail() {
  if (inputCompleteEmail.value.trim() === '') {
    errorMessageCompleteEmail.innerText = 'Campo obrigatório';
    return false; 
  } else if (!emailRegex.test(inputCompleteEmail.value)) {
    errorMessageCompleteEmail.innerText = 'Formato de email inválido!';
    return false; 
  } else {
    errorMessageCompleteEmail.innerText = '';
    return true; 
  }
}

function validateCheckbox() {
  if (!inputCheckbox.checked) {
    errorMessageCheckbox.innerText = 'Checkbox obrigatório';
    return false; 
  } else {
    errorMessageCheckbox.innerText = '';
    return true; 
  }
}

function messageSuccess() {
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 2000);
}

function clearFields() {
  inputCompleteName.value = '';
  inputCompleteEmail.value = '';
  inputCheckbox.checked = false; 
  errorMessageCompleteName.innerText = ''; 
  errorMessageCompleteEmail.innerText = '';
  errorMessageCheckbox.innerText = ''; 
}

inputCompleteName.addEventListener('input', validateName);
inputCompleteEmail.addEventListener('input', validateEmail);

inputCheckbox.addEventListener('change', () => {
  if (inputCheckbox.checked) {
    errorMessageCheckbox.innerText = ''; 
  } else {
    errorMessageCheckbox.innerText = 'Checkbox obrigatório'; 
  }
});


subscribeButtom.addEventListener('click', (event) => {
  event.preventDefault();
  
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isCheckboxValid = validateCheckbox();
  
  if (isNameValid && isEmailValid && isCheckboxValid) {
    messageSuccess();
    clearFields();
  }
});

// /* --------------------------- SECÇÃO DE CONTATO FOOTER --------------------------- */

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  
  const arrowUpContent1 = document.getElementById('arrow_up_icon-content-1');
  const arrowDownContent1 = document.getElementById('arrow_down_icon-content-1');
  
  const arrowUpContent2 = document.getElementById('arrow_up_icon-content-2');
  const arrowDownContent2 = document.getElementById('arrow_down_icon-content-2');

  const arrowUpContent3 = document.getElementById('arrow_up_icon-content-3');
  const arrowDownContent3 = document.getElementById('arrow_down_icon-content-3');

  const arrowUpContent4 = document.getElementById('arrow_up_icon-content-4');
  const arrowDownContent4 = document.getElementById('arrow_down_icon-content-4');

  if (content.style.display === "block") {
      content.style.display = "none";
      if (contentId === 'content1') {
          arrowUpContent1.style.display = "none";
          arrowDownContent1.style.display = "inline";
      } else if (contentId === 'content2') {
          arrowUpContent2.style.display = "none";
          arrowDownContent2.style.display = "inline";
      } else if (contentId === 'content3') {
          arrowUpContent3.style.display = "none";
          arrowDownContent3.style.display = "inline";
      } else if (contentId === 'content4') {
          arrowUpContent4.style.display = "none";
          arrowDownContent4.style.display = "inline";
      }
  } else {
      content.style.display = "block";
      if (contentId === 'content1') {
          arrowUpContent1.style.display = "inline";
          arrowDownContent1.style.display = "none";
      } else if (contentId === 'content2') {
          arrowUpContent2.style.display = "inline";
          arrowDownContent2.style.display = "none";
      } else if (contentId === 'content3') {
          arrowUpContent3.style.display = "inline";
          arrowDownContent3.style.display = "none";
      } else if (contentId === 'content4') {
          arrowUpContent4.style.display = "inline";
          arrowDownContent4.style.display = "none";
      }
  }
}

