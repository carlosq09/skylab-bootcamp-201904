'use strict';
class Results extends Component {
    constructor(ul, onDetails) {
        super(ul);
        this.__ondetails__ = onDetails
    }
    set items(items){ //set
        this.container.innerHTML = '';

        items.forEach(item => { // id, title, image, price
            const li = document.createElement('li');
            li.setAttribute('data-id', item.id);

            const h3 = document.createElement('h3');
            h3.innerText = item.title;
            li.appendChild(h3);

            const img = document.createElement('img');
            img.style.width ='300px'
            img.src = item.image;
            li.appendChild(img);

            const span = document.createElement('span');
            span.innerText = item.price;
            li.appendChild(span);

            li.addEventListener('click', event => {
                event.preventDefault();
                this.__ondetails__(item.id)
            });

            this.container.appendChild(li);
        });
    }
}
