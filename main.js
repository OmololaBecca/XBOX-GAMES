const copyrightFooter = document.getElementById("copyright-footer")
const preloader = document.getElementById("preloader")



setTimeout(function preloaderTimeOut (){
    preloader.style = "display: none"
}, 5000)

copyrightFooter.innerHTML = "© " + new Date().getFullYear() + " eXStore"
