function Details(article) {
    Component.call(this, article);
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;

Object.defineProperty(Details.prototype, 'item', {
    set: function(item) {
        this.container.innerHTML = '';

        var article = document.createElement('article');
        
        var h3 = document.createElement('h3');
        h3.innerText = item.title;
        article.appendChild(h3);

        var img = document.createElement('img');
        img.src = item.image;
        img.style.width = '300px';
        article.appendChild(img);

        var span = document.createElement('span');
        span.innerText = item.price;
        article.appendChild(span);

        var p = document.createElement('p');
        p.innerText = item.description;
        article.appendChild(p);

        this.container.appendChild(article);
    }
});