var sidebar = document.querySelector('.sidebar')
var expSidebar = document.querySelector('.exp-sidebar')
var menu = document.querySelector('#menu')
var filters = document.querySelector('.filters')
var videosGrid = document.querySelector('.videos-grid')

let expanded = false
menu.addEventListener('click',() => {
    
    if(!expanded)
        {
            sidebar.style.display = 'none'
            expSidebar.style.display = 'flex'
            filters.style.width = 'calc(100% - 200px)'
            filters.style.marginLeft = '190px'
            videosGrid.style.paddingLeft = '190px'
        }
        else{
            sidebar.style.display = 'flex'
            expSidebar.style.display = 'none'
            filters.style.width = 'clac(100% - 80px)'
            filters.style.marginLeft = '80px'
            videosGrid.style.paddingLeft = '80px'
    }
    expanded = !expanded;
})