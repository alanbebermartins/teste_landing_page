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
    currentIndexHeader = 0; // Voltar ao início
  }
  updateCarousel();
}

function showPrevious() {
  if (currentIndexHeader > 0) {
    currentIndexHeader--;
  } else {
    currentIndexHeader = totalItems - 1; // Ir para o último item
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

  // Função para mover o carrossel
  function updateCarousel() {
      const width = bannerMainCarouselItem[0].offsetWidth; // Corrigido para pegar o primeiro item sempre
      bannerMainCarousel.style.transform = `translateX(-${currentIndexBannerMain * width}px)`;
  }

  // Função para mover para o próximo slide
  function nextSlide() {
      currentIndexBannerMain = (currentIndexBannerMain + 1) % bannerMainCarouselItem.length;
      updateCarousel();
  }

  // Função para mover para o slide anterior
  function prevSlide() {
      currentIndexBannerMain = (currentIndexBannerMain - 1 + bannerMainCarouselItem.length) % bannerMainCarouselItem.length;
      updateCarousel();
  }

  // Evento de clique nos botões
  bannerMainCarouselNext.addEventListener('click', nextSlide);
  bannerMainCarouselPrev.addEventListener('click', prevSlide);

  // Ajustar o carrossel ao redimensionar a janela
  window.addEventListener('resize', updateCarousel);
  
  // Ajustar para garantir que o primeiro slide seja visível ao carregar a página
  updateCarousel();
});

// /* --------------------------- SECÇÃO COMPRAS POR CATEGORIA --------------------------- */

const sliderContainer = document.querySelector('.category_slider_side-container');
const slider = document.querySelector('.category_slider_side');
const slides = document.querySelectorAll('.category_slider_side-item');
const totalSlides = slides.length;

let currentIndexCategoryPurchase = 0;

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth; // largura de um slide

  // Calculando a translação para o slide atual
  const translateX = -currentIndexCategoryPurchase * slideWidth;

  slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  currentIndexCategoryPurchase = (currentIndexCategoryPurchase + 1) % totalSlides; // Avança o índice, volta ao primeiro se for o último
  updateSliderPosition();
}

function prevSlide() {
  currentIndexCategoryPurchase = (currentIndexCategoryPurchase - 1 + totalSlides) % totalSlides; // Volta o índice, vai para o último se estiver no primeiro
  updateSliderPosition();
}

// Setando evento de resize para ajustar a posição do slide ao redimensionar a tela
window.addEventListener('resize', updateSliderPosition);

// Inicializando a posição inicial
updateSliderPosition();

// /* --------------------------- SECÇÃO RECOMENDADOS PARA VOCË --------------------------- */

// Variáveis globais para controlar o índice atual do slide
let currentSlideRecommendedProducts = 0;
const recommendedProductsList = document.querySelector('.recommended_products_list');
const recommendedProductsItems = document.querySelectorAll('.recommended_products_item');

// Função para exibir o slide atual
function showSlideRecommendedProducts(index) {
    // Limita o índice dentro do número total de itens
    if (index >= recommendedProductsItems.length) {
        currentSlideRecommendedProducts = 0;
    } else if (index < 0) {
        currentSlideRecommendedProducts = recommendedProductsItems.length - 1;
    }

    // Calcula a largura de cada item
    const itemWidth = recommendedProductsItems[0].offsetWidth;
    
    // Calcula a posição correta do carrossel
    const newPosition = -itemWidth * currentSlideRecommendedProducts;

    // Move o carrossel para a posição do slide atual
    recommendedProductsList.style.transform = `translateX(${newPosition}px)`;
}

// Função para ir para o slide anterior
function prevSlideRecommendedProducts() {
    currentSlideRecommendedProducts--;
    showSlideRecommendedProducts(currentSlideRecommendedProducts);
}

// Função para ir para o próximo slide
function nextSlideRecommendedProducts() {
    currentSlideRecommendedProducts++;
    showSlideRecommendedProducts(currentSlideRecommendedProducts);
}

// Ajusta o carrossel ao iniciar
window.onload = () => {
  showSlideRecommendedProducts(currentSlideRecommendedProducts);
};

// /* --------------------------- SECÇÃO MAIS VENDIDOS --------------------------- */

// Variáveis globais para controlar o índice atual do slide
let currentSlideBestSellers = 0;
const recommendedBestSelerList = document.querySelector('.best_sellers_list');
const recommendedBestSelersitem = document.querySelectorAll('.best_sellers_item');

// Função para exibir o slide atual
function showSlideBestSellers(index) {
    // Limita o índice dentro do número total de itens
    if (index >= recommendedBestSelersitem.length) {
        currentSlideBestSellers = 0;
    } else if (index < 0) {
        currentSlideBestSellers = recommendedBestSelersitem.length - 1;
    }

    // Calcula a largura de cada item
    const itemWidth = recommendedBestSelersitem[0].offsetWidth;
    
    // Calcula a posição correta do carrossel
    const newPosition = -itemWidth * currentSlideBestSellers;

    // Move o carrossel para a posição do slide atual
    recommendedBestSelerList.style.transform = `translateX(${newPosition}px)`;
}

// Função para ir para o slide anterior
function prevSlideBestSellers() {
    currentSlideBestSellers--;
    showSlideBestSellers(currentSlideBestSellers);
}

// Função para ir para o próximo slide
function nextSlideBestSellers() {
    currentSlideBestSellers++;
    showSlideBestSellers(currentSlideBestSellers);
}

// Ajusta o carrossel ao iniciar
window.onload = () => {
  showSlideBestSellers(currentSlideBestSellers);
};


// /* --------------------------- SECÇÃO ÓCULOS DE SOL --------------------------- */

// Variáveis globais para controlar o índice atual do slide
let currentSlideSunglasses = 0;
const recommendedSunglassesList = document.querySelector('.sunglasses_list');
const recommendedSunglassesItem = document.querySelectorAll('.sunglasses_item');

// Função para exibir o slide atual
function showSlideSunglasses(index) {
    // Limita o índice dentro do número total de itens
    if (index >= recommendedSunglassesItem.length) {
        currentSlideSunglasses = 0;
    } else if (index < 0) {
        currentSlideSunglasses = recommendedSunglassesItem.length - 1;
    }

    // Calcula a largura de cada item
    const itemWidth = recommendedSunglassesItem[0].offsetWidth;
    
    // Calcula a posição correta do carrossel
    const newPosition = -itemWidth * currentSlideSunglasses;

    // Move o carrossel para a posição do slide atual
    recommendedSunglassesList.style.transform = `translateX(${newPosition}px)`;
}

// Função para ir para o slide anterior
function prevSlideSunglasses() {
    currentSlideSunglasses--;
    showSlideSunglasses(currentSlideSunglasses);
}

// Função para ir para o próximo slide
function nextSlideSunglasses() {
    currentSlideSunglasses++;
    showSlideSunglasses(currentSlideSunglasses);
}

// Ajusta o carrossel ao iniciar
window.onload = () => {
  showSlideSunglasses(currentSlideSunglasses);
};

// /* --------------------------- SECÇÃO PERFUMES --------------------------- */

// Variáveis globais para controlar o índice atual do slide
let currentSlideFragrance = 0;
const recommendedFragranceList = document.querySelector('.fragrance_list');
const recommendedFragranceItem = document.querySelectorAll('.fragrance_item');

// Função para exibir o slide atual
function showSlideFragrance(index) {
    // Limita o índice dentro do número total de itens
    if (index >= recommendedFragranceItem.length) {
        currentSlideSunglasses = 0;
    } else if (index < 0) {
        currentSlideSunglasses = recommendedFragranceItem.length - 1;
    }

    // Calcula a largura de cada item
    const itemWidth = recommendedFragranceItem[0].offsetWidth;
    
    // Calcula a posição correta do carrossel
    const newPosition = -itemWidth * currentSlideSunglasses;

    // Move o carrossel para a posição do slide atual
    recommendedFragranceList.style.transform = `translateX(${newPosition}px)`;
}

// Função para ir para o slide anterior
function prevSlideFragrance() {
    currentSlideSunglasses--;
    showSlideFragrance(currentSlideSunglasses);
}

// Função para ir para o próximo slide
function nextSlideFragrance() {
    currentSlideSunglasses++;
    showSlideFragrance(currentSlideSunglasses);
}

// Ajusta o carrossel ao iniciar
window.onload = () => {
  showSlideFragrance(currentSlideSunglasses);
};

// /* --------------------------- SECÇÃO DE ACESSORIOS --------------------------- */

// Variáveis globais para controlar o índice atual do slide
let currentSlideAccessories = 0;
const recommendedAccessoriesList = document.querySelector('.accessories_list');
const recommendedAccessoriesItem = document.querySelectorAll('.accessories_item');

// Função para exibir o slide atual
function showSlideAccessories(index) {
    // Limita o índice dentro do número total de itens
    if (index >= recommendedAccessoriesItem.length) {
        currentSlideAccessories = 0;
    } else if (index < 0) {
        currentSlideAccessories = recommendedAccessoriesItem.length - 1;
    }

    // Calcula a largura de cada item
    const itemWidth = recommendedAccessoriesItem[0].offsetWidth;
    
    // Calcula a posição correta do carrossel
    const newPosition = -itemWidth * currentSlideAccessories;

    // Move o carrossel para a posição do slide atual
    recommendedAccessoriesList.style.transform = `translateX(${newPosition}px)`;
}

// Função para ir para o slide anterior
function prevSlideAccessories() {
    currentSlideAccessories--;
    showSlideAccessories(currentSlideAccessories);
}

// Função para ir para o próximo slide
function nextSlideAccessories() {
    currentSlideAccessories++;
    showSlideAccessories(currentSlideAccessories);
}

// Ajusta o carrossel ao iniciar
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
      // Atualiza o índice do slide atual
      currentIndex++;
      
      // Reseta o índice se chegar ao final
      if (currentIndex >= itemCount) {
          currentIndex = 0;
      }
      
      // Move o container do slider
      sliderContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  // Configura o intervalo para mover o slider a cada 3 segundos
  setInterval(moveSlider, 3000);

  // Ajusta o comportamento ao redimensionar a janela
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
    return false; // Indica que a validação falhou
  } else if (inputCompleteName.value.length <= 6) {
    errorMessageCompleteName.innerText = 'Digite o nome completo!';
    return false; // Indica que a validação falhou
  } else {
    errorMessageCompleteName.innerText = ''; // Limpa a mensagem de erro
    return true; // Indica que a validação passou
  }
}

function validateEmail() {
  if (inputCompleteEmail.value.trim() === '') {
    errorMessageCompleteEmail.innerText = 'Campo obrigatório';
    return false; // Indica que a validação falhou
  } else if (!emailRegex.test(inputCompleteEmail.value)) {
    errorMessageCompleteEmail.innerText = 'Formato de email inválido!';
    return false; // Indica que a validação falhou
  } else {
    errorMessageCompleteEmail.innerText = '';
    return true; // Indica que a validação passou
  }
}

function validateCheckbox() {
  if (!inputCheckbox.checked) {
    errorMessageCheckbox.innerText = 'Checkbox obrigatório';
    return false; // Indica que a validação falhou
  } else {
    errorMessageCheckbox.innerText = '';
    return true; // Indica que a validação passou
  }
}

function messageSuccess() {
  successMessage.style.display = 'block';
  // Oculta a mensagem após 3 segundos (3000 milissegundos)
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 2000);
}

// Função para limpar os campos
function clearFields() {
  inputCompleteName.value = '';
  inputCompleteEmail.value = '';
  inputCheckbox.checked = false; // Desmarca o checkbox
  errorMessageCompleteName.innerText = ''; // Limpa mensagem de erro
  errorMessageCompleteEmail.innerText = ''; // Limpa mensagem de erro
  errorMessageCheckbox.innerText = ''; // Limpa mensagem de erro
}


// Adiciona um listener para o evento 'input' no campo de nome completo
inputCompleteName.addEventListener('input', validateName);
inputCompleteEmail.addEventListener('input', validateEmail);

// Adiciona um listener para o checkbox
inputCheckbox.addEventListener('change', () => {
  if (inputCheckbox.checked) {
    errorMessageCheckbox.innerText = ''; // Limpa mensagem de erro ao marcar o checkbox
  } else {
    errorMessageCheckbox.innerText = 'Checkbox obrigatório'; // Mostra mensagem se desmarcado
  }
});

// Listener do botão
subscribeButtom.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Verifica se todas as validações passaram
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isCheckboxValid = validateCheckbox();
  
  // Se todos os campos forem válidos, mostra a mensagem de sucesso
  if (isNameValid && isEmailValid && isCheckboxValid) {
    messageSuccess();
    clearFields(); // Limpa os campos após o envio
  }
});

// /* --------------------------- SECÇÃO DE CONTATO FOOTER --------------------------- */
/*
const arrowUpContent1 = document.getElementById('arrow_up_icon-content-1'); // Acesso direto ao icone de ARROU UP referente a div com atributo onclick="toggleContent('content1')
const arrowDownContent1 = document.getElementById('arrow_down_icon-content-1'); // Acesso direto ao icone de ARROU DOWN referente a div com atributo onclick="toggleContent('content1')

const arrowUpContent2 = document.getElementById('arrow_up_icon-content-2'); // Acesso direto ao icone de ARROU UP referente a div com atributo onclick="toggleContent('content2')
const arrowDownContent2 = document.getElementById('arrow_down_icon-content-2'); // Acesso direto ao icone de ARROU DOWN referente a div com atributo onclick="toggleContent('content2')

const arrowUpContent3 = document.getElementById('arrow_up_icon-content-3'); // Acesso direto ao icone de ARROU UP referente a div com atributo onclick="toggleContent('content3')
const arrowDownContent3 = document.getElementById('arrow_down_icon-content-3'); // Acesso direto ao icone de ARROU DOWN referente a div com atributo onclick="toggleContent('content3')

const arrowUpContent4 = document.getElementById('arrow_up_icon-content-4'); // Acesso direto ao icone de ARROU UP referente a div com atributo onclick="toggleContent('content4')
const arrowDownContent4 = document.getElementById('arrow_down_icon-content-4'); // Acesso direto ao icone de ARROU DOWN referente a div com atributo onclick="toggleContent('content4')

*/
// function toggleContent(contentId) {
//   const content = document.getElementById(contentId);
//   console.log("RETORNO = " + content);
//   if (content.style.display === "block") {
//       content.style.display = "none";
//   } else {
//       content.style.display = "block";
//   }
// }

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  
  // Acessos diretos aos ícones
  const arrowUpContent1 = document.getElementById('arrow_up_icon-content-1');
  const arrowDownContent1 = document.getElementById('arrow_down_icon-content-1');
  
  const arrowUpContent2 = document.getElementById('arrow_up_icon-content-2');
  const arrowDownContent2 = document.getElementById('arrow_down_icon-content-2');

  const arrowUpContent3 = document.getElementById('arrow_up_icon-content-3');
  const arrowDownContent3 = document.getElementById('arrow_down_icon-content-3');

  const arrowUpContent4 = document.getElementById('arrow_up_icon-content-4');
  const arrowDownContent4 = document.getElementById('arrow_down_icon-content-4');

  // Esconder ou mostrar o conteúdo e os ícones
  if (content.style.display === "block") {
      content.style.display = "none";
      // Esconde os ícones de seta
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
      // Mostra os ícones de seta
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

