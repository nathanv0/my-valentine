// Select the element that we need to change
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Track the state (how many times "No" was clicked)
let noCount = 0;
const mainImage = document.getElementById('main-image');

// The text phrases
const phrases = [
    "Hônggg 🙂",
    "Hong đâuuu 😅",
    "Bé chắc chưa nà 🥺",
    "Anh hong mún nghe đâu 😣",
    "Suy nghĩ lại đi mò...",
    "Cơ hội cuối cùng cho bé đó nha 🥲",
    "Hông lẽ là dị thiệt sao 🥹",
    "Tất cả kết thúc rồi seo 😞",
    "Coi chừng hối hận đó nhen!",
    "Thử nghĩ lại thêm một xíu nữa hoi!",
    "Bé chắc chắn 100% luôn rồi hở?",
    "Như vầy là một sai lầm to lớn luôn đó 😭",
    "Đừng có nhẫn tâm với anh vậy mà...",
    "Hông chịu đâuuuu",
    "Hông lẽ hông tính xem xét lại thiệt à 🙁",
    "Anh hỏi bé lần cuối đó 🥹",
    "Bé làm tim anh tan nát mất rồi... ;((",
    "Hông bắt được đâu:)",
];

// List of GIFs
const noGifs = [
    "./assets/please.gif",
    "./assets/sad-dudu-1.gif",
    "./assets/goma-sad-3.gif",
    "./assets/capoo-sad-2.gif",
    "./assets/sad-dudu-2.gif",
    "./assets/sad-dudu-5.gif",
    "./assets/sad-dudu-3.gif",
    "./assets/goma-sad.gif",
    "./assets/capoo-sad-4.gif",
    "./assets/goma-sad-2.gif",
    "./assets/sad-dudu-4.gif",
    "./assets/sad-dudu-6.gif",
    "./assets/capoo-sad-1.gif",
    "./assets/capoo-sad-5.gif",
    "./assets/sad-dudu-8.gif",
    "./assets/capoo-sad-6.gif",
    "./assets/capoo-sad-3.gif",
    "./assets/capoo.gif",
];

// Add event click to the "No" button
noBtn.addEventListener('click', () => {
    noCount++;

    // Change the text to No button
    // (Math.min ensures we don't go past the end of the list)
    const index = Math.min(noCount, phrases.length - 1);
    noBtn.innerText = phrases[index];

    // Change the Gif
    mainImage.src = noGifs[index];

    // Make the Yes button bigger
    const newSize = 16 + (noCount * 20);
    yesBtn.style.fontSize = `${newSize}px`;

    // Check if the last phrase of the list
    if (index === phrases.length - 1) {
        noBtn.innerText = "Hông bắt được đâu :P";

        // Make the button absolute so it can move freely
        noBtn.style.position = "absolute";

        // Add mouseenter event
        noBtn.addEventListener("mouseenter", function() {
            moveRandomEl(noBtn);
        });
    }
});

// Add behavior to the "yes" button
yesBtn.addEventListener('click', () => {
    // hide the question screen
    questionScreen.classList.add('hidden');

    // Show the success screen when click yes btn clicked
    successScreen.classList.remove('hidden');
})