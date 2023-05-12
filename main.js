const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');


// ������� ��� ��������� ���� ��������
function setLightTheme() {
    document.body.style.backgroundColor = 'white';
    textDiv.style.color = 'MediumSlateBlue';
}

function setDarkTheme() {
    document.body.style.backgroundColor = 'MediumSlateBlue';
    textDiv.style.color = 'white';
}

lightModeButton.addEventListener('click', setLightTheme);
darkModeButton.addEventListener('click', setDarkTheme);

