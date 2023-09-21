window.svgElementClicked = (res)=> { window.location.href = res ? b64DecodeUnicode('Li4vcGFnZXMvd2lubmVyLmh0bWw=') : '../pages/tryAgain.html'; }; function b64DecodeUnicode(str) { return decodeURIComponent(atob(str).split('').map(function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')); }
window.svgLoseClicked = ()=>{
	window.location.href = './../../';
}
