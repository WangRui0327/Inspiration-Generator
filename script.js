function getContrastingTextColor(bgColor) {
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? 'black' : 'white';
}

function generateTheme(data) {
  const color = data.colors[Math.floor(Math.random() * data.colors.length)];
  const keyword = data.keywords[Math.floor(Math.random() * data.keywords.length)];
  const line = data.lines[Math.floor(Math.random() * data.lines.length)];
  //const symbols = data.symbols.sort(() => 0.5 - Math.random()).slice(0, 2);
  //const symbols = data.symbols[Math.floor(Math.random() * data.symbols.length)];

  document.body.style.backgroundColor = color.hex;
  document.body.style.color = getContrastingTextColor(color.hex);

  document.getElementById('color').innerHTML = `<b>Color:</b> ${color.hex} (${color.name})`;
  document.getElementById('keywords').innerHTML = `<b>Keywords:</b> ${keyword.words.join(', ')}<br><i>${keyword.reference}</i>`;
  document.getElementById('line').innerHTML = `<b>Line:</b> ${line.text}`;
  //document.getElementById('symbol').innerHTML = `<b>Symbols:</b> ${symbols.items.join(', ')}`;
}

let globalData = {};  // We’ll load this from data.json


function generatePDF() {
  html2pdf().from(document.getElementById("content")).save("poetic-theme.pdf");
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    globalData = data;
    generateTheme(globalData);
    document.getElementById("print").addEventListener("click", generatePDF);
  });


  function addColor() {
    const hex = document.getElementById("newColorHex").value.trim();
    const name = document.getElementById("newColorName").value.trim();
    if (hex && name) {
      globalData.colors.push({ hex, name });
      alert(`Added color ${name} (${hex})`);
    }
  }
  
  function addKeywords() {
    const word1 = document.getElementById("keyword1").value.trim();
    const word2 = document.getElementById("keyword2").value.trim();
    const reference = document.getElementById("keywordRef").value.trim();
    if (word1 && word2 && reference) {
      globalData.keywords.push({ words: [word1, word2], reference });
      alert(`Added keywords: ${word1}, ${word2}`);
    }
  }
  
  function addLine() {
    const line = document.getElementById("poeticLine").value.trim();
    if (line) {
      globalData.lines.push(line);
      alert("Added poetic line.");
    }
  }
  
  function addSymbol() {
    const symbol = document.getElementById("symbolText").value.trim();
    if (symbol) {
      globalData.symbols.push(symbol);
      alert("Added symbol: " + symbol);
    }
  }

  function downloadData() {
    const blob = new Blob([JSON.stringify(globalData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "updated-data.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  
