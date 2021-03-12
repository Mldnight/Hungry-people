
let sectionsItem = document.querySelectorAll('section');
let isScrolling = false;



function Scrolling(){
	for( let sectionItem of sectionsItem){
			let sectionItemLeft = sectionItem.querySelector('#sectionContentLeft');
			let sectionItemRight = sectionItem.querySelector('#sectionContentRight');
			let sectionItemAll = sectionItem.querySelector('#sectionItem');
			console.log(sectionItemAll);
			if (sectionItem.getBoundingClientRect().height
			+window.innerHeight - sectionItem.getBoundingClientRect().bottom >50)
			{
				if(sectionItemLeft!=null || sectionItemRight!=null){
						sectionItemLeft.classList.add('animate__animated', 'animate__fadeInLeft');
						sectionItemRight.classList.add('animate__animated', 'animate__fadeInRight');
					}
				if(sectionItemAll!=null){
							sectionItemAll.classList.add('animate__animated', 'animate__fadeInUp');
						}
			}
	}
}


window.onload = function(){
	Scrolling();
}

window.onscroll = function (){
	if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          	Scrolling();
          	isScrolling = false;
        });
    }
    isScrolling = true;
}
