function revealMessage() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
}

function goToProposal() {
    const loveNoteSection = document.getElementById('loveNoteSection');
    const proposalSection = document.getElementById('proposalSection');
    loveNoteSection.classList.add('hidden');
    proposalSection.classList.remove('hidden');
}

function showProposalMessage() {
    const proposalMessage = document.getElementById('proposalMessage');
    proposalMessage.classList.remove('hidden');
}

function acceptProposal() {
    alert("Yay! You said yes! 🎉 I love you more than anything!");
    window.open('thankyou.html', '_blank');  // Opens the thank you page in a new tab
}

function swapButtons() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Swap positions of the Yes and No buttons
    const yesButtonRect = yesButton.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    yesButton.style.transform = `translate(${noButtonRect.left - yesButtonRect.left}px, ${noButtonRect.top - yesButtonRect.top}px)`;
    noButton.style.transform = `translate(${yesButtonRect.left - noButtonRect.left}px, ${yesButtonRect.top - noButtonRect.top}px)`;

    // Move the No button away randomly
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;

    const newLeft = Math.random() * (containerWidth - noButton.offsetWidth);
    const newTop = Math.random() * (containerHeight - noButton.offsetHeight);

    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
}