import {videos} from './data.js'

var filtersContainer = document.querySelector('.filters')
var videosContainer = document.querySelector('.videos-grid')
var searchBox = document.querySelector('#searchInput')
var searchBtn = document.querySelector('#searchIcon')

var filters = [
    'All',
    'AI',
    'Music',
    'Mixes',
    'Podcasts',
    'News',
    'Live',
    'Projects',
    'Web-development',
    'React',
    'Javascript',
    'CSS',
    'Github',
]

let activeFilter = 'All'

// applying filters logic
function applyFilters(){
    const query = searchBox.value.toLowerCase();
    
    

    const filterdVideos = videos.filter((video) => {
        const matchesSearch =
            video.title.toLowerCase().includes(query) ||
            video.channelName.toLowerCase().includes(query);

        const matchesCategory =
            activeFilter === "All" || video.category === activeFilter;

        return matchesSearch && matchesCategory;
    })
    renderVideos(filterdVideos);
    
}

searchBtn.addEventListener('click', applyFilters)
searchBox.addEventListener('keypress',(e) => {
    if(e.key == "Enter"){
        applyFilters();
    }
})

//render Filter
function renderFilters(){
    filtersContainer.innerHTML = ''

    filters.forEach((filter) => {
    var button = document.createElement('button')
    button.textContent = filter
    button.setAttribute('class','filter')
    button.className = activeFilter === filter ? 'filter activeFilter' : 'filter';
    
    button.addEventListener('click', () => {
        activeFilter = filter;
        renderFilters();
        applyFilters();
    })

    filtersContainer.appendChild(button)
})
}

renderFilters();

//Rendering of video cards
function renderVideos(videoList){
    videosContainer.innerHTML = ""
    videoList.forEach((v) => {
        var videoCard = document.createElement('div')
        videoCard.setAttribute('class','card')
        videoCard.innerHTML = `
        
        <div class="thumb">
            <img class="thumbnail" src="${v.thumbnail}" alt="Thumbnail" />
            <span class="duration">${v.duration}</span>
        </div>
        <div class='card-details'>
            <img  src="${v.channelAvatar}" alt="logo" />
            <div>
                <div class="title"><p>${v.title}</p></div>
                <div class="channelName">${v.channelName}</div>
                <div class="description"> 
                    <div class="views">${v.views} •</div>
                    <div class="uploaded">${v.uploaded}</div>
                </div>
            </div>
        </div>
        `
        if(v.uploaded.includes('month')){
            videoCard.classList.add('bgc2')
        }
        else if(v.uploaded.includes('day')){
            videoCard.classList.add('bgc3')
        }

        videosContainer.appendChild(videoCard)
        
    })
}
renderVideos(videos)
