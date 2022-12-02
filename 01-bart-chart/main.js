const wordFrequencies = {
  javascript: 23,
  react: 29,
  typescript: 13,
  json: 17,
  xhr: 5,
  redux: 11
};

const highestCount = Object.values(wordFrequencies).sort((a, b) => b - a)[0];
const root = document.querySelector('#root');

root.innerHTML = `
  <section>
    <h1>Fréquences Des Mots</h1>
    <article class="chart">
    </article>
    <p>nombre de mots</p>
  </section>
`;

const chart = document.querySelector('.chart');
const chartHeight = chart.getBoundingClientRect().height;

for (const prop in wordFrequencies) {
  const element = document.createElement('div');
  const wordFrequency = wordFrequencies[prop];

  element.classList.add('bar');
  element.innerHTML = `<span class="label word">${prop}</span><span class="label stat">${wordFrequency}</span>`;
  element.style.height = `${(wordFrequency / highestCount) * 100}%`;
  element.style.backgroundColor = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;

  chart.appendChild(element);
}
