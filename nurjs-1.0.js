function N(selector){

	var tag = 
	{

		element: document.querySelector(selector),
		elementall: document.querySelectorAll(selector),


		createMany: (options) => {
			if (options.tag && typeof options.tag === 'object') {
				var tagName = Object.keys(options.tag)[0];
				var count = options.tag[tagName];

				for (var i = 0; i < count; i++) {
					let elem_create = document.createElement(tagName);
					if (options.id) {
						elem_create.id = options.id;
					}
					if (options.className) {
						elem_create.className = options.className;
					}
					if (options.style) {
						elem_create.style = options.style;
					}
					if (options.text) {
						elem_create.textContent = options.text;
					}
					tag.element.appendChild(elem_create);
				}
			} else {
				console.error('No');
			}
		},

		create: (options) => {
			let elem_create = document.createElement(options.tag);
			if (options.id) {
				elem_create.id = options.id;
			}
			if (options.className) {
				elem_create.className = options.className;
			}
			if (options.style) {
				elem_create.style = options.style;
			}
			if (options.text) {
				elem_create.textContent = options.text;
			}
			tag.element.appendChild(elem_create);
		},

		putIt: (elem_name, elem_id, elem_className, style)=>{
			let elem_create = document.createElement(elem_name);
			elem_create.id = elem_id; 
			elem_create.className = elem_className;
			elem_create.style = style;
			tag.element.appendChild(elem_create);
		},

		// tag create section
		Italic: (text, id, elem_className)=>{
			let elem_create = document.createElement("i");
			elem_create.id = id;
			elem_create.className = elem_className;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		font: (text, id, elem_className)=>{
			let elem_create = document.createElement("font");
			elem_create.id = id;
			elem_create.className = elem_className;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		input: (type, placeholder, name, value, elem_id, elem_className)=>{
			let elem_create = document.createElement("input");
			elem_create.id = elem_id;
			elem_create.className = elem_className;
			elem_create.type = type;
			elem_create.placeholder = placeholder;
			elem_create.name = name;
			elem_create.value = value;
			tag.element.appendChild(elem_create);
		},

		fontFace: (fontName, fontURL) => {
			let styleElement = document.getElementById('nurjs-fonts');
			if (!styleElement) {
				styleElement = document.createElement('style');
				styleElement.id = 'nurjs-fonts';
				document.head.appendChild(styleElement);
			}
		
			let fontFace = `
				@font-face {
					font-family: '${fontName}';
					src: url('${fontURL}');
				}
			`;
			
			styleElement.innerHTML += fontFace;
		},



		p: (text, id)=>{
			let elem_create = document.createElement("p");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		img: (src, alt, id, className, style) => {
			let elem_create = document.createElement('img');
			elem_create.src = src;
			elem_create.alt = alt || 'Image';
			elem_create.id = id || '';
			elem_create.className = className || '';
			elem_create.style = style || '';
			tag.element.appendChild(elem_create);
		},
		

		h: (level, text, id, classname) => {
			let elem_create = document.createElement(`h${level}`);
			elem_create.id = id;
			elem_create.className = classname;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},
		

		h1: (text, id)=>{
			let elem_create = document.createElement("h1");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		h2: (text, id)=>{
			let elem_create = document.createElement("h2");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		h3: (text, id)=>{
			let elem_create = document.createElement("h3");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		h4: (text, id)=>{
			let elem_create = document.createElement("h4");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		h5: (text, id)=>{
			let elem_create = document.createElement("h5");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},

		h6: (text, id)=>{
			let elem_create = document.createElement("h6");
			elem_create.id = id;
			elem_create.textContent = text;
			tag.element.appendChild(elem_create);
		},



		br: ()=>{
			let elem_create = document.createElement("br");
			tag.element.appendChild(elem_create);
		},

		hr: (elem_style)=>{
			let elem_create = document.createElement("hr");
			elem_create.style = elem_style;
			tag.element.appendChild(elem_create);
		},


		HTML: (content)=>{
			tag.element.innerHTML += content;
		},	
		
		// actions animation effects

		action: (event, callback)=>{
			tag.element.addEventListener(event, callback)
		},


		// get style(css) for element

		style: (css)=>{
			tag.element.style = css;
		},
		
		setMargin: (margValue)=>{
			tag.element.style.margin = margValue;
		},

		defMargin: ()=>{
			tag.element.style.margin = "0";
		},

		setPadding: (margValue)=>{
			tag.element.style.padding = margValue;
		},

		defPadding: ()=>{
			tag.element.style.padding = "0";
		},

		// font family weight size setter
		setFont: (fontFamilyValue, fontSizeValue, fontWeightValue)=>{
			tag.element.style.fontFamily = fontFamilyValue;
			if(fontSizeValue != null){
				tag.element.style.fontSize = fontSizeValue;
			}
			if(fontWeightValue != null){
				tag.element.style.fontWeight = fontWeightValue;
			}
		},

		cursor: (cursvalue)=>{
			tag.element.style.cursor = cursvalue;
		},

		display: (display)=>{
			tag.element.style.display = display;
		},

		addText: (text, style)=>{
			tag.element.innerHTML += text;
			tag.element.style = style;
		},

		getLink: (link, style)=>{
			tag.element.href = link;
			tag.element.style = style;
		},

		getSrc: (link)=>{
			tag.element.src = link;
		},

		attr: (name, value) => {
			tag.element.setAttribute(name, value);
		},

		getType: (type)=>{
			tag.element.type = type;
		},

		getPlaceholder: (value)=>{
			tag.element.placeholder = value;
		},

		getName: (value)=>{
			tag.element.name = value;
		},

		getValue: (value)=>{
			tag.element.value = value;
		},

		getValueAll: (value)=>{
			tag.elementall.innerHTML = value;
		},

		inner: (value)=>{
			tag.element.innerHTML = value;
		},

		V: ()=>{
			tag.element.value;
		},

		controls: ()=>{
			tag.element.controls = "controls";
		},

		target: (value)=>{
			tag.element.target = value;
		},

		getAction: (value)=>{
			tag.element.action = value;
		},

		acceptImg: ()=>{
			tag.element.accept = "image/*";
		},
		acceptVideo: ()=>{
			tag.element.accept = "video/*";
		},
		acceptAudio: ()=>{
			tag.element.accept = "audio/*";
		},

		method: (value)=>{
			tag.element.method = value;
		},

		enctype: (value)=>{
			tag.element.enctype = value;
		},





		// events

		mouseover: (callback)=>{
			tag.element.addEventListener("mouseover", callback);
		},
		mouseout: (callback)=>{
			tag.element.addEventListener("mouseout", callback);
		},
		click: (callback)=>{
			tag.element.addEventListener("click", callback);
		},
		keyPress: (callback)=>{
			tag.element.addEventListener("keypress", callback);
		},
		keyDown: (callback)=>{
			tag.element.addEventListener("keydown", callback);
		},
		onload: (callback)=>{
			tag.element.addEventListener("onload", callback);
		},
		focus: (callback)=>{
			tag.element.addEventListener("focus", callback);
		},
		focusout: (callback)=>{
			tag.element.addEventListener("focusout", callback);
		},
		oncanplay: (callback)=>{
			tag.element.addEventListener("oncanplay", callback);	
		},

		// css actions

		bgColor: (bg_color)=>{
			tag.element.style.backgroundColor = bg_color;
		},

		setColor: (colorTextValue)=>{
			tag.element.style.color = colorTextValue;
		},

		centerT: ()=>{
			tag.element.style.textAlign = "center";
		},

		leftT: ()=>{
			tag.element.style.textAlign = "left";
		},

		rightT: ()=>{
			tag.element.style.textAlign = "right";
		},

		transition: (value)=>{
			tag.element.style.transition = value;
		},



	
		hoverMove: function (distance = "10px", duration = "0.1s") { 
			if (!tag.element) {
				console.warn(`⚠️ Элемент '${selector}' не найден.`);
				return;
			}
		
			tag.element.style.willChange = "transform"; 
			tag.element.style.transition = duration; 
		
			tag.element.addEventListener("mouseover", (event) => {
				event.stopPropagation();
				setTimeout(() => {
					tag.element.style.transform = `translateX(${distance})`; 
				}, 10); 
			});
		
			tag.element.addEventListener("mouseout", (event) => {
				event.stopPropagation();
				setTimeout(() => {
					tag.element.style.transform = "translateX(0)";
				}, 10);
			});
		
			return tag;
		},		
		
		hoverSound: function (soundURL) {
			if (!tag.element) {
				console.warn(`⚠️ Элемент '${selector}' не найден.`);
				return;
			}
		
			let audio = new Audio(soundURL);
			let isHovered = false; 
		
			tag.element.addEventListener("mouseover", (event) => {
				event.stopPropagation();
				if (!isHovered) {
					isHovered = true;
					audio.currentTime = 0;
					audio.play().catch(error => console.warn("🔇 Браузер блокирует звук:", error));
				}
			});
		
			tag.element.addEventListener("mouseout", (event) => {
				event.stopPropagation();
				isHovered = false;
			});
		
			return tag;
		},

		showErrorPanel: function (duration = 3000, display = "block") {
			if (!tag.element) {
				console.warn(`⚠️ Элемент '${selector}' не найден.`);
				return;
			}
		
			tag.element.style.opacity = "0";
			tag.element.style.display = display;
			tag.element.style.transform = "scale(0.1) skewX(-5deg)";
			tag.element.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-out";
		
		
			setTimeout(() => {
				tag.element.style.opacity = "1";
				tag.element.style.transform = "scale(1) skewX(0)";
			}, 50);
		
	
			setTimeout(() => {
				tag.element.style.opacity = "0";
				tag.element.style.transform = "scale(0.8) skewX(5deg)";
		
				setTimeout(() => {
					tag.element.style.display = "none";
				}, 400);
			}, duration);
		},

		playSound: function (soundURL) {
			let audio = new Audio(soundURL);
			
			audio.play().catch(error => {
				console.warn("🔇 Браузер блокирует звук:", error);
			});
		},
		
		
		
		
		
		
		
		
		


		// PHP



	}
	return tag

}


function nur(selector) {
	var tag = {
		element: document.querySelector(selector),

		icon: function(iconOptions) {
			var iconsArray = [];

			for (var iconName in iconOptions) {
				var iconParams = iconOptions[iconName];
				var iconSize = iconParams[0] || '16px'; 
				var iconColor = iconParams[1] || 'black';

				var iconElement = document.createElement('i');
				iconElement.className = 'icon-' + iconName;
				iconElement.style.fontSize = iconSize;
				iconElement.style.color = iconColor;

				iconsArray.push(iconElement);
			}

			return iconsArray;
		}
	};

	return tag;
}

N.icons = function(iconOptions) {
	var nInstance = N();
	return nInstance.icon(iconOptions); 
};

