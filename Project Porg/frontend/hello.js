console.log("hello world!");
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        const userMessageContainer = document.createElement('div');
        userMessageContainer.className = 'user-message';
        const userMessage = document.createElement('div');
        userMessage.className = 'message';
        userMessage.textContent = userInput;
        userMessageContainer.appendChild(userMessage);
        document.querySelector('.user-message').appendChild(userMessageContainer);
        document.getElementById('user-input').value = '';
    }
}

function receiveMessage(message) {
    if (message.trim() !== '') {
        message = lookForLinks(message);
        const botMessageContainer = document.createElement('div');
        botMessageContainer.className = message;
        const botMessage = document.createElement('div');
        botMessage.className = 'message';
        botMessage.textContent = message;
        botMessageContainer.appendChild(botMessage);
        document.querySelector('.chat-container').appendChild(botMessageContainer);
        message.value = '';
    }
}

function lookForLinks(message) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return message.replace(urlRegex, function(url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    })
}