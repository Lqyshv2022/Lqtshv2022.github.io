document.addEventListener("DOMContentLoaded", function(event) {
    alert("1");
    let targetImage = document.querySelector("#smart-image");
    targetImage.addEventListener("click", function() {
   		alert("点击了图片");
        targetImage.classList.remove("small");
	});
});
