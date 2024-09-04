document.addEventListener('DOMContentLoaded', () => {
    const texts = ['Web Designer', 'App Developer', 'Extension Developer', 'Freelancer'];
    let currentIndex = 0;

    const changingText = document.getElementById('changing-text');
    const typingSpeed = 100; // Speed of typing effect
    const eraseSpeed = 50; // Speed of erasing effect
    const pauseDuration = 4000; // Duration between texts

    function typeText(text, callback) {
        let index = 0;
        changingText.textContent = '';

        function typing() {
            if (index < text.length) {
                changingText.textContent += text.charAt(index);
                index++;
                setTimeout(typing, typingSpeed);
            } else {
                setTimeout(callback, pauseDuration);
            }
        }

        typing();
    }

    function eraseText(callback) {
        let text = changingText.textContent;
        let index = text.length;

        function erasing() {
            if (index > 0) {
                changingText.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(erasing, eraseSpeed);
            } else {
                callback();
            }
        }

        erasing();
    }

    function changeText() {
        eraseText(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            typeText(texts[currentIndex], changeText);
        });
    }

    // Start the typing effect
    typeText(texts[currentIndex], changeText);
});
