// const cardImages = document.querySelectorAll('.card-image');
// const cardTitle = document.querySelectorAll('.card-title');
// const cardDescribtion = document.querySelectorAll('.card-describtion');
// const cardMediaIcons = document.querySelectorAll('.card-mediaIcons a');
const cardImgs = document.querySelectorAll('.card-image img');
const cardTitleSpans = document.querySelectorAll('.card-title span');
const cardDescribtionSpans = document.querySelectorAll('.card-describtion span');
const mediaIcons = document.querySelectorAll('.card-mediaIcons a i');

// const renderCard = () => {
//     cardImages.forEach((cardImage) => {
//         cardImage.classList.remove("loading")
//     });
//     cardTitle.forEach((cardTitle) => {
//         cardTitle.classList.remove("loading")
//     });
//     cardDescribtion.forEach((cardDescribtion) => {
//         cardDescribtion.classList.remove("loading")
//     });
//     cardMediaIcons.forEach((cardMediaIcon) => {
//         cardMediaIcon.classList.remove("loading")
//     });

//     cardImgs.forEach((cardImg) => {
//         cardImg.style.visibility = "visible"
//     });
//     cardTitleSpans.forEach((cardTitleSpan) => {
//         cardTitleSpan.style.visibility = "visible"
//     });
//     cardDescribtionSpans.forEach((cardDescribtionSpan) => {
//         cardDescribtionSpan.style.visibility = "visible"
//     });
//     mediaIcons.forEach((mediaIcon) => {
//         mediaIcon.style.visibility = "visible"
//     });
// };

// setTimeout(() => {
//     renderCard();
// }, 3000)

const chooses = document.querySelectorAll('.choose');

const renderCard = () => {
    chooses.forEach((choose) => {
        choose.classList.remove('loading')
    });
    cardImgs.forEach((cardImg) => {
        cardImg.style.visibility = "visible"
    });
    cardTitleSpans.forEach((cardTitleSpan) => {
        cardTitleSpan.style.visibility = "visible"
    });
    cardDescribtionSpans.forEach((cardDescribtionSpan) => {
        cardDescribtionSpan.style.visibility = "visible"
    });
    mediaIcons.forEach((mediaIcon) => {
        mediaIcon.style.visibility = "visible"
    });
} 

setTimeout(() => {
    renderCard();
}, 3000)