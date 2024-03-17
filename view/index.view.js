// Код шаблона страницы HTML
const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        {{ content }}
    </body>
    </html>
`;

// Логика замены содержимого
function render(moneyList) {
  const content = () => {
    return `
${moneyList.map(
  (item) => `<div key = ${item.id}> ${item.name} - ${item.money}</div>\n`
)}
    `;
  };
  return html.replace("{{ content }}", content);
}

module.exports = render;
