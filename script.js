const videos = [
    {
        thumbnail: "img/bigblackcar.avif",
        length: "4:22",
        title: "Big Black Car - Gregory Alan Isakov",
        author: "Gregory Alan Isakov",
        views: "1.5M views",
        uploadTime: "14 years ago",
        profilePic: "profile-pics/gak.jpg",
        videoUrl: "https://www.youtube.com/watch?v=E69qahzgeN8",
    },
    {
        thumbnail: "img/shrike.avif",
        length: "5:09",
        title: "Hozier - Shrike (Live) | Vevo Official Performance",
        author: "Hozier",
        views: "2.3M views",
        uploadTime: "5 years ago",
        profilePic: "profile-pics/hozier.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Bwe1O29sfRY",
    },
    {
        thumbnail: "img/lacy.avif",
        length: "3:52",
        title: "Noah Kahan - lacy (Olivia Rodrigo cover) in the Live Lounge",
        author: "BBCRadio1VEVO",
        views: "1.2M views",
        uploadTime: "1 year ago",
        profilePic: "profile-pics/vevo.jpg",
        videoUrl: "https://www.youtube.com/watch?v=XSapM9uuomQ",
    },
    {
        thumbnail: "img/benhoward.avif",
        length: "18:32",
        title: "Ben Howard: Tiny Desk (Home) Concert",
        author: "NPR Music",
        views: "1.2M views",
        uploadTime: "3 years ago",
        profilePic: "profile-pics/npr.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5VHlrsZbgBI",
    },
    {
        thumbnail: "img/css.avif",
        length: "9:39",
        title: "10 CSS Pro Tips - Code this, NOT that!",
        author: "Fireship",
        views: "2.3M views",
        uploadTime: "3 years ago",
        profilePic: "profile-pics/fs.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Qhaz36TZG5Y",
    },
    {
        thumbnail: "img/oj.avif",
        length: "5:08",
        title: "Noah Kahan - Orange Juice (Live Acoustic)",
        author: "Noah Kahan",
        views: "3M views",
        uploadTime: "2 years ago",
        profilePic: "profile-pics/noahkahan.jpg",
        videoUrl: "https://www.youtube.com/watch?v=M70Mh58_qXs",
    },
    {
        thumbnail: "img/slo.avif",
        length: "3:24",
        title: "John Mayer - Something Like Olivia (Acoustic Performance)",
        author: "John Mayer",
        views: "20M views",
        uploadTime: "12 years ago",
        profilePic: "profile-pics/jm.jpg",
        videoUrl: "https://www.youtube.com/watch?v=izkqPdVAdL4",
    },
    {
        thumbnail: "img/utss.avif",
        length: "5:00",
        title: "Ben Howard - Under The Same Sun",
        author: "Ben Howard",
        views: "9.2M views",
        uploadTime: "14 years ago",
        profilePic: "profile-pics/bh.jpg",
        videoUrl: "https://www.youtube.com/watch?v=6KrU1LY-pQU",
    },
    {
        thumbnail: "img/willbosi.avif",
        length: "14:56",
        title: "Burden Of Dreams | Will Bosi Bouldering In Finland | adidas TERREX",
        author: "adidas TERREX",
        views: "488K views",
        uploadTime: "1 year ago",
        profilePic: "profile-pics/adidas.jpg",
        videoUrl: "https://www.youtube.com/watch?v=SlUw8X7xuq0",
    },
    {
        thumbnail: "img/rotsw.avif",
        length: "18:58",
        title: "The North Face Presents: \"Return of the Sleepwalker\" (9A/v17) (First Ascent)",
        author: "mellow",
        views: "598K views",
        uploadTime: "3 years ago",
        profilePic: "profile-pics/mellow.jpg",
        videoUrl: "https://www.youtube.com/watch?v=IoEeHwd5GTs",
    },
    {
        thumbnail: "img/lrpd.avif",
        length: "3:31",
        title: "Hozier - Like Real People Do -- Barn on the Farm Sessions",
        author: "Barn on the Farm",
        views: "7.9M views",
        uploadTime: "10 years ago",
        profilePic: "profile-pics/botf.jpg",
        videoUrl: "https://www.youtube.com/watch?v=97uHUyPL5dA",
    },
    {
        thumbnail: "img/hm.avif",
        length: "4:24",
        title: "Sam Fender - Hypersonic Missiles (Official Video)",
        author: "Sam Fender",
        views: "7.6M views",
        uploadTime: "5 years ago",
        profilePic: "profile-pics/sf.jpg",
        videoUrl: "https://www.youtube.com/watch?v=CDsFKOrLWhU",
    },
];

document.getElementById("videoContainer").innerHTML = videos.map(video => `
    <div class="video-preview">
        <div class="thumbnail-container">
            <a href="${video.videoUrl}" target="_blank">
                <img class="thumbnail" src="${video.thumbnail}">
            </a>
            <p class="thumbnail-length">${video.length}</p>
        </div>
        <div class="video-info-grid">
            <div class="profile-pic-container">
                <img class="details-profile-pic" src="${video.profilePic}">
            </div>
            <div class="details-text-container">
                <a href="${video.videoUrl}" target="_blank" class="video-title">
                    ${video.title}
                </a>
                <p class="video-author">${video.author}</p>
                <p class="video-stats">${video.views} &#183; ${video.uploadTime}</p>
            </div>
        </div>
    </div>
`).join(""); 
