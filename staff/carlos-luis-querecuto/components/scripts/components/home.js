'use strict';

class Home extends Component{
    constructor(container, onSearch, onDetails, onLogout){
        super(container);

        const logout = this.container.children[0];
    
        logout.addEventListener('click', function(event) {
            event.preventDefault();
    
            onLogout();
        });

        const form = this.container.children[2];
        new Search(form, onSearch);
    
        const ul = this.container.children[3];
        const results = new Results(ul, onDetails);
        this.__results__ = results;
    
        const article = this.container.children[4];
        const detail = new Details(article);
        this.__detail__ = detail;  

    }

    set results(results){
        this.__detail__.visible = false;
        this.__results__.items = results;
        this.__results__.visible = true;
    }

    set detail(detail){
        this.__results__.visible = false;       
        this.__detail__.item = detail;
        this.__detail__.visible = true;
    }
}