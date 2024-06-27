//
// This Javascript file is for changing the appearance on the graphic design portfolio page.
//

var smallWidth = false;

function checkSize() {

    var docWidth = document.documentElement.clientWidth;
    
    if (docWidth < 1000)
    {
        if (smallWidth != true)
        {
            // update visuals
            smallWidth = true;
            updateCarouselOneItem();
        }
    }
    else
    {
        if (smallWidth == true)
        {
          updateCarouselMultiItem();
        }
        smallWidth = false;
    }
}

var carouselInnerContainerHtmlOneItem = `
          <div class="item active">
              <div class="card mb-2">
                <a href="design-subpages/pandys-parlour.html">
                  <img class="card-img-top" src="graphics/pandyparlour.png" alt="pandys parlour"/>
                </a>
                <div class="card-body">
                  <h1 class="card-title">pandy's parlour game</h1>
                </div>
              </div>
          </div>
  
          <div class="item">
            <div class="card mb-2">
              <a href="design-subpages/preschool.html">
                <img class="card-img-top" src="designs/preschool preview square blue.png" alt="preschool preview night" />
              </a>
              <div class="card-body">
                <h1 class="card-title">preschool preview night</h1>
              </div>
            </div>
          </div>
  
          <div class="item">
            <div class="card mb-2">
              <a href="design-subpages/alumni-mag.html">
                <img class="card-img-top" src="designs/alumni-mag-square.png" alt="alumni magazine" />
              </a>
              <div class="card-body">
                <h1 class="card-title">alumni magazine</h1>
              </div>
            </div>
          </div>
  
          <div class="item">
            <div class="card mb-2">
              <a href="design-subpages/coffee-cat.html">
                <img class="card-img-top" src="designs/coffeecatsquare.png" alt="coffee cat"/>
              </a>
              <div class="card-body">
                <h1 class="card-title">coffee cat</h4>
              </div>
            </div>
          </div>
  
          <div class="item">
            <div class="card mb-2">
              <a href="design-subpages/desserts.html">
                <img class="card-img-top" src="designs/opera-cake2.gif" alt="here for the dessert"/>
              </a>
              <div class="card-body">
                <h1 class="card-title">here for the dessert</h1>
              </div>
            </div>
          </div>
  
          <div class="item">
            <div class="card mb-2">
              <a href="design-subpages/biggive.html">
                <img class="card-img-top" src="designs/big-give-crop.jpg" alt="uc berkeley big give"/>
              </a>
              <div class="card-body">
                <h1 class="card-title">uc berkeley big give</h1>
              </div>
            </div>
          </div>`;
var carouselInnerContainerHtmlMultiItem;

function updateCarouselOneItem()
{
  console.log("updating carousel for one item");
  var carouselInner = document.querySelector(".carousel-inner");
  if (carouselInnerContainerHtmlMultiItem == null)
  {
    carouselInnerContainerHtmlMultiItem = carouselInner.innerHTML;
  }
  carouselInner.innerHTML = carouselInnerContainerHtmlOneItem;
}

function updateCarouselMultiItem()
{
  var carouselInner = document.querySelector(".carousel-inner");
  if (carouselInnerContainerHtmlMultiItem == null)
  {
    console.log("carouselInnerContainerHtmlMultiItem is null. Ignoring.");
    return;
  }
  console.log("updating carousel for multi-item");
  carouselInner.innerHTML = carouselInnerContainerHtmlMultiItem;
}

window.onload = checkSize;

// Add event listener for window resize
window.addEventListener('resize', checkSize);






// const nav = $(".navigation");

// const carouselSlide = $("#slide");
// const carouselImages = $("#slide").children();
// const carouselContainer = $(".carousel-container");

// const nextBtn = document.querySelector('.down-arrow-bounce')

// var counter = 1;
// console.log(carouselImages[0])
// var size = carouselImages[0].clientHeight;

// var docWidth = document.documentElement.clientWidth;

// nextBtn.addEventListener('click', changeSlide);

// /** HELPER FUNCTION **/
// function vhTOpx(value) {
//   var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     x = w.innerWidth || e.clientWidth || g.clientWidth,
//     y = w.innerHeight|| e.clientHeight|| g.clientHeight;

//   var result = (y*value)/100;
//   return result;
// }


// function changeSlide() {
// 	var margin = carouselImages[0].style.marginTop.toString();
// 	margin = margin.substring(0, margin.length - 2);
// 	margin = vhTOpx(margin);
// 	console.log('margin', margin, vhTOpx(margin));
// 	var size = carouselImages[0].clientHeight + margin * 2;
// 	// carouselContainer.css('height', (size * 100 / docWidth) + "vw");
// 	console.log(size);
// 	// console.log(carouselImages)
// 	if (counter % carouselImages.length == 0) {
// 		counter = 1;
// 		carouselSlide.css('transform', "none");
// 	} else {
// 		carouselSlide.css('transform', "translateY(" + (-(size * 100 / docWidth) * counter) + "vw)");
// 		counter++;
// 	}	
// }

// $(".down-arrow-bounce").hover(
//   function () {
//     $(this).removeClass('bounce');
//   }, 
//   function () {
//     $(this).addClass('bounce');
//   }
//   );

