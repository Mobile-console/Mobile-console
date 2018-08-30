window.onload = function(){
	//容器对象
	var box = document.getElementById('container');

	//获取图片Nodelist图片集合
	var imgs = box.getElementsByTagName('img');

	//单张图片宽度
	var imgWidth = imgs[0].offsetWidth;

	//掩藏门体露出的宽度
	var exposeWidth = 200;

	//容器总宽度
	var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px';

	//设置每道门的初始位置
	function setImgsPos(){
		for (var i = 1; i < imgs.length; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) +'px';
		}
	}
	setImgsPos();

	//门打开时应该移动的距离
	var translate = imgWidth - exposeWidth;

	//门绑定事件
	for (var i = 0; i < imgs.length; i++) {
		//立即调用的函数表达式
		(function(i){
			imgs[i].onmouseover = function(){
				//先将门复位
				setImgsPos();
				//dakaimen
				for (var j = 1; j <= i; j++) {
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate +'px';
				}
			}
		})(i);
	}
}