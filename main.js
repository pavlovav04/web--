const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');
const itemBlock = document.getElementById('items');

function setLightTheme() {
    document.body.style.backgroundColor = 'white';
    itemBlock.style.color = 'MediumSlateBlue';
}

function setDarkTheme() {
    document.body.style.backgroundColor = 'MediumSlateBlue';
    itemBlock.style.color = 'white';
}

lightModeButton.addEventListener('click', setLightTheme);
darkModeButton.addEventListener('click', setDarkTheme);

const categories = {
  flowers: ["1", "3", "11"],
  candles: ["4", "8", "9"],
  beads: ["6", "7"],
  leather: ["12"],
};

function updateProductCards(event) {
  const category = event.target.id;
  const ids = categories[category];

  Array.from(itemBlock.children).forEach((div) => {
    const div_id = div.id;
    if (ids.includes(div_id)) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

flowers.addEventListener("click", updateProductCards);
candles.addEventListener("click", updateProductCards);
beads.addEventListener("click", updateProductCards);
leather.addEventListener("click", updateProductCards);