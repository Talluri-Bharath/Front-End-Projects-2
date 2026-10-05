let songs=[
    {
        name:"Perfect",
        artist:"Ed Sheeran",
        genre:"Romantic"
    },
    {
        name:"Believer",
        artist:"Imagine Dragons",
        genre:"Rock"
    },
    {
        name:"Faded",
        artist:"Alan Walker",
        genre:"Electronic"
    },
    {
        name:"Shape of You",
        artist:"Ed Sheeran",
        genre:"Pop"
    }

];

let playList=[];

function displaySongs(songs)
{
    let container=document.getElementById("sectionSongs");

    container.innerHTML="";

    songs.forEach(function(song)
                {
        container.innerHTML+=`<div class="song-card">
                    <div class="icon">🎵</div>
                    <h3>${song.name}</h3>
                    <p>${song.artist}</p>
                    <p>${song.genre}</p>

                    <button onclick="addToPlayList('${song.name}')">Add To PlayList</button>
                </div>`;


    });

    document.getElementById("songCount").textContent=songs.length+" Songs";
}


function addToPlayList(songName)
{
   let song=songs.find(function(song)
    {
        return song.name==songName;
    })

    if(song)
    {
        playList.push(song);
       updatePlayList();
        alert(songName+" Added to playList!!!");
    }
    else{
         alert(songName+" Not Added to playList!!!");
    }
}

function updatePlayList()
{

   let container= document.getElementById("recentSongs");

   container.innerHTML="";
   playList.forEach(function(song)
    {
    container.innerHTML+=`<span>${song.name}</span>`
    })

    document.getElementById("playListSummery").textContent=playList.map(function(song)
    {
    return song.name;
    }).join(" > ");


}

function addSong()
{
    let newSong={
        name:prompt("Enter the Song Name"),
        artist:prompt("Enter the Artist"),
        genre:prompt("Enter the Genre")
    }

    songs.push(newSong);

    displaySongs(songs)

}

function removeSong()
{
    if(songs.length>0)
    {
        songs.splice(songs.length-1,1);
        displaySongs(songs)
    }

}

function sortSongs()
{
    songs.sort(function(a,b)
{
    if(a.name<b.name)
    {
        return -1;
    }

    if(a.name>b.name)
    {
        return 1;
    }

    return 0;
})

displaySongs(songs);

}

function reverseSongs()
{
    songs.reverse();

    displaySongs(songs);

}

function showRecentSongs()
{
 let container= document.getElementById("recentSongs");

    let recentSongs=songs.slice(-3);

    recentSongs.forEach(function(song)
{
    container.innerHTML+=`<span>${song.name}</span>`
})
}

displaySongs(songs);

showRecentSongs();let songs=[
    {
        name:"Perfect",
        artist:"Ed Sheeran",
        genre:"Romantic"
    },
    {
        name:"Believer",
        artist:"Imagine Dragons",
        genre:"Rock"
    },
    {
        name:"Faded",
        artist:"Alan Walker",
        genre:"Electronic"
    },
    {
        name:"Shape of You",
        artist:"Ed Sheeran",
        genre:"Pop"
    }

];

let playList=[];

function displaySongs(songs)
{
    let container=document.getElementById("sectionSongs");

    container.innerHTML="";

    songs.forEach(function(song)
                {
        container.innerHTML+=`<div class="song-card">
                    <div class="icon">🎵</div>
                    <h3>${song.name}</h3>
                    <p>${song.artist}</p>
                    <p>${song.genre}</p>

                    <button onclick="addToPlayList('${song.name}')">Add To PlayList</button>
                </div>`;


    });

    document.getElementById("songCount").textContent=songs.length+" Songs";
}


function addToPlayList(songName)
{
   let song=songs.find(function(song)
    {
        return song.name==songName;
    })

    if(song)
    {
        playList.push(song);
       updatePlayList();
        alert(songName+" Added to playList!!!");
    }
    else{
         alert(songName+" Not Added to playList!!!");
    }
}

function updatePlayList()
{

   let container= document.getElementById("recentSongs");

   container.innerHTML="";
   playList.forEach(function(song)
    {
    container.innerHTML+=`<span>${song.name}</span>`
    })

    document.getElementById("playListSummery").textContent=playList.map(function(song)
    {
    return song.name;
    }).join(" > ");


}

function addSong()
{
    let newSong={
        name:prompt("Enter the Song Name"),
        artist:prompt("Enter the Artist"),
        genre:prompt("Enter the Genre")
    }

    songs.push(newSong);

    displaySongs(songs)

}

function removeSong()
{
    if(songs.length>0)
    {
        songs.splice(songs.length-1,1);
        displaySongs(songs)
    }

}

function sortSongs()
{
    songs.sort(function(a,b)
{
    if(a.name<b.name)
    {
        return -1;
    }

    if(a.name>b.name)
    {
        return 1;
    }

    return 0;
})

displaySongs(songs);

}

function reverseSongs()
{
    songs.reverse();

    displaySongs(songs);

}

function showRecentSongs()
{
 let container= document.getElementById("recentSongs");

    let recentSongs=songs.slice(-3);

    recentSongs.forEach(function(song)
{
    container.innerHTML+=`<span>${song.name}</span>`
})
}

displaySongs(songs);

showRecentSongs();