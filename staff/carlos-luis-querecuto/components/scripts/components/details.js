
class Details extends Component{
    constructor(article){
        super(article);
    }
    set item(item){
        this.container.innerHTML = '';

        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.innerText = item.title;
        article.appendChild(h3);

        const img = document.createElement('img');
        img.src = item.image;
        img.style.width = '300px';
        article.appendChild(img);

        const span = document.createElement('span');
        span.innerText = item.price;
        article.appendChild(span);

        const p = document.createElement('p');
        p.innerText = item.description;
        article.appendChild(p);

        this.container.appendChild(article);
    }
}