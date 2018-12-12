const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

const card = document.createElement('div');
card.setAttribute('class', 'card');

container.appendChild(card);

const rbusiness = 'https://www.reddit.com/r/business.json';
const stories =[];

fetch(rbusiness)
    .then(response => response.json())
    .then(data => {
        stories.push(...data.data.children)
        stories.forEach(story => console.log(story.data.title))
        });

function newStory(data)
        {
          document.getElementById('card').innerHTML = document.getElementById('card').innerHTML +" "+ data;
        }
        