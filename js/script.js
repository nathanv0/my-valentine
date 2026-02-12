// Select the element that we need to change
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Track the state (how many times "No" was clicked)
let noCount = 0;

// The text phrases
const phrases = [
    "Hônggg",
    "Cậu chắc chưa nè?",
    "Chắc thiệt luôn á hả?",
    "Suy nghĩ lại đi mà...",
    "Cơ hội cuối cùng cho cậu đó nha!",
    "Hông lẽ là vậy thiệt sao?",
    "Coi chừng hối hận đó nhen!",
    "Thử nghĩ lại thêm một xíu nữa thôi!",
    "Cậu chắc chắn 100% luôn rồi hả?",
    "Như vầy là một sai lầm to lớn luôn đó!",
    "Đừng có nhẫn tâm với mình vậy mà...",
    "Đừng có lạnh lùng với mình thế chứ!",
    "Có thay đổi ý định một tẹo nào chưa?",
    "Hông lẽ hông tính xem xét lại thiệt hả?",
    "Đây là câu trả lời chốt hạ luôn rồi hả?",
    "Cậu làm trái tim mình tan nát mất rồi... ;(("
];

// Add event click to the "No" button
noBtn.addEventListener('click', () => {
    noCount++;

    // Change the text to No button
    // (Math.min ensures we don't go past the end of the list)
    const index = Math.min(noCount, phrases.length - 1);
    noBtn.innerText = phrases[index];

    // Make the Yes button bigger
    const newSize = 16 + (noCount * 20);
    yesBtn.style.fontSize = `${newSize}px`;
});

// Add behavior to the "yes" button
yesBtn.addEventListener('click', () => {
    // hide the question screen
    questionScreen.classList.add('hidden');

    // Show the success screen when click yes btn clicked
    successScreen.classList.remove('hidden');
})