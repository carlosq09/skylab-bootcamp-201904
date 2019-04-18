'use strict';

function Results(ul, onDetails) {
    Component.call(this, ul);

    this.__ondetails__ = onDetails
}

Results.prototype = Object.create(Component.prototype);
Results.prototype.constructor = Results;

Object.defineProperty(Results.prototype, 'items', {
    set: function(items) {
        this.container.innerHTML = '';

        items.forEach(function(item) { // id, title, image, price
            var li = document.createElement('li');
            li.setAttribute('data-id', item.id);

            var h3 = document.createElement('h3');
            h3.innerText = item.title;
            li.appendChild(h3);

            var img = document.createElement('img');
            img.style.width ='300px'
            img.src = item.image;
            li.appendChild(img);

            var span = document.createElement('span');
            span.innerText = item.price;
            li.appendChild(span);

            li.addEventListener('click', function(event) {
                event.preventDefault();
                this.__ondetails__(item.id)
            }.bind(this));
            

            this.container.appendChild(li);
        }.bind(this));
    }
});

