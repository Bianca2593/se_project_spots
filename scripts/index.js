const initialCards= [
 {
    name:"Val Thorens" , 
    alt:"Val Thrones",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
 {
    name:"Restaurant terrace" , 
    alt:"Restaurant terrace",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
 {
    name:"An outdoor cafe" ,
    alt:"An outdoor cafe",
     link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
     },
 {
    name:"A very long bridge, over the forest and through the trees" , 
    alt:"A very long bridge, over the forest and through the trees",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
 {
    name:"Tunnel with morning light" ,
    alt:"Tunnel with morning light" ,
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
 {
    name:"Mountain house" ,
    alt:"Mountain house" ,
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    },

];

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const profileEditExitButton = document.querySelector(".modal__close-button");
const proileEditModalForm = profileEditModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const modalInputName = document.querySelector("#profile-name-input");
const modalInputDescription = document.querySelector(
  "#profile-description-input"
);
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__text");
  const cardImage = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = "Description of the image";

  return cardElement;
}

function editProfile() {
  modalInputName.value = profileName.textContent;
  modalInputDescription.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
}

function closeProfile() {
  profileEditModal.classList.remove("modal_opened");
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalInputName.value;
  profileDescription.textContent = modalInputDescription.value;
  closeProfile();
}

profileEditButton.addEventListener("click", editProfile);

profileEditExitButton.addEventListener("click", closeProfile);
proileEditModalForm.addEventListener("submit", handleEditProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}

