(function(){
    let ciaData = null;
    let articles = document.querySelector('.articles');
    fetch("https://raw.githubusercontent.com/AlexanderHOB/ScrapyIntelligenceAgent/master/intelligence_agency_proyect/cia.json")
        .then((r)=>{
            return r.json();
        })
        .then((data)=>{
            ciaData = data;
            cards = ciaData.map((content,id)=> buildArticle(content['title'],content['body'],content['url'],content['img']));
        })
    const buildArticle = (title,body,link,image)=>{
        let article = document.createElement('div');
        article.classList.add('col','s6','article');
        article.appendChild(buildCard(title,body,link,image))
        articles.appendChild(article)
    }
    const buildCard = (title,body,link,image)=>{
        let card = document.createElement('div')
        let cardImage = document.createElement('div')
        let cardContent = document.createElement('div')
        let img = document.createElement('IMG');
        card.classList.add('card');
        cardImage.classList.add('card-image');
        cardContent.classList.add('card-content');
        img.classList.add('responsive-img')
        img.style.height="280px";
        img.src="../images/img.jpg";
        if(image !=null){
            img.src="https://www.cia.gov"+image;
        }
        cardImage.appendChild(img);
        cardImage.appendChild(buildTitle(title,link));
        cardContent.appendChild(buildBody(body));
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        return card
    }
    const buildTitle = (title,link)=>{
        let a = document.createElement('a');
        let h1 = document.createElement('span');
        a.href = link;
        a.textContent = title
        a.classList.add('white-text')
        h1.classList.add('card-title')
        h1.appendChild(a);
        return h1
    }
    const buildBody = (body)=>{
        let p = document.createElement('p');
        body = body.join(' ')
        body = body.substr(0,200)
        body += '...'
        p.textContent=body;
        return p
    }
})();
