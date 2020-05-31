function get_data(inp){

    console.log(inp)

    var key="480611d5"

    var url="https://www.omdbapi.com/?apikey="+key

    var result=null
    var xhr=new XMLHttpRequest()
    
    //title
    if(inp.title=="" && inp.id==""){
        alert("Enter a Valid Title or & Try Again!")
    }
    else{
        url+="&t="+inp.title
    }

    //year
    if(inp.year==""){
        
    }
    else{
        url+="&="+inp.year
    }

    //type
    if(inp.type==""){
        
    }
    else{
        url+="&type="+inp.type
    }


    //id
    if(inp.id=""){
        
    }
    else{
        url+="&i="+inp.ids
    }

    console.log(url)

    xhr.open("GET",url)
    xhr.send()
    xhr.onload =function(){
        if(xhr.status == 200){
            result=xhr.response
            console.log(result)
            display_data(result, inp.type)
        }
    }
function display_data(result, ty){
    var rm=document.getElementById("first")
    rm.remove()

    result=JSON.parse(result)
    console.log(result)

    var bdy=document.querySelector("body")

    bdy.setAttribute("id","background_a")

    var to_show=document.getElementById("make")

    //poster
    var poster=document.createElement("div")
    poster.setAttribute("class","col-sm-12 col-lg-6")

    var data_po=document.createElement("div")
    data_po.setAttribute("class", "row")


    //poster insert
    var poster_c=document.createElement("div")
    poster_c.setAttribute("class","col-12 text-center")
    var im=document.createElement("img")
    im.setAttribute("src",result["Poster"])
    im.setAttribute("class","img-fluid m-5 img-thumbnail shadow-lg")
    poster_c.appendChild(im)

    data_po.appendChild(poster_c)
    poster.appendChild(data_po)
    
    
    //for data
    //1
    var data=document.createElement("div")
    data.setAttribute("class","mx-auto col-10 col-lg-5 bg-danger rounded m-5")

    //2
    var data_r=document.createElement("div")
    data_r.setAttribute("class", "row")


    //title&year
    var data_t=document.createElement("div")
    data_t.setAttribute("class","col-6")

    var h_1=document.createElement("h4")
    h_1.setAttribute("class","mx-2 mt-2 font-weight-bold display-5")
    h_1.innerHTML=result["Title"]+" "+"("+result["Year"]+")"
    var hr=document.createElement("hr")
    data_t.appendChild(h_1)
    data_t.appendChild(hr)

    data_r.appendChild(data_t)

    // gene run rat
    var data_g=document.createElement("div")
    data_g.setAttribute("class","col-12")

    var sml=document.createElement("div")
    sml.setAttribute("class", "mx-1")
    sml.innerHTML="Genre:"+" "+result["Genre"]+ "  "+"<br>"+result["Rated"]+ " | "+result["Runtime"]+" | "+result["Language"]+"<br>"+result["Released"]
    data_g.appendChild(sml)

    data_r.appendChild(data_g)

    //plot
    var data_p=document.createElement("div")
    data_p.setAttribute("class","col-12")

    var para=document.createElement("p")
    para.innerHTML="<h3>Plot-</h3>"+result["Plot"]
    para.setAttribute("class","my-5 mx-1 bg-light rounded p-2")
    data_p.appendChild(para)

    data_r.appendChild(data_p)

    //director
    var data_d=document.createElement("div")
    data_d.setAttribute("class","col-12")

    var para_b=document.createElement("p")
    para_b.innerHTML="<h3>Director-</h3>"+result["Director"]
    para_b.setAttribute("class"," mx-1 mb-5 bg-warning rounded p-2")
    data_d.appendChild(para_b)

    data_r.appendChild(data_d)

    
    //actors
    var data_act=document.createElement("div")
    data_act.setAttribute("class","col-12")

    var para_c=document.createElement("p")
    para_c.innerHTML="<h3>Actors-</h3>"+result["Actors"]
    para_c.setAttribute("class"," mx-1 mb-5 bg-info rounded p-2")
    data_act.appendChild(para_c)

    data_r.appendChild(data_act)

    //award
    var data_aw=document.createElement("div")
    data_aw.setAttribute("class","col-12")

    var para_d=document.createElement("p")
    para_d.innerHTML="<h3>Awards-</h3>"+result["Awards"]
    para_d.setAttribute("class"," mx-1 mb-5 bg-success rounded p-2")
    data_aw.appendChild(para_d)

    data_r.appendChild(data_aw)


    if(ty=="movie"){
        //ratings imdb
        var poster_re=document.createElement("div")
        poster_re.setAttribute("class","col-3")
        url_imdb="pic/New-imdb-logo.png"
        var imgs=document.createElement("img")
        imgs.setAttribute("src",url_imdb)
        imgs.setAttribute("class","img-fluid mx-5 2rem")
        var para_imdb=document.createElement("h2")
        para_imdb.innerHTML="<h3>"+result["Ratings"][0]["Value"]+"</h3>"
        para_imdb.setAttribute("class"," mx-5 text-center")
        poster_re.appendChild(imgs)
        poster_re.appendChild(para_imdb)


        data_po.appendChild(poster_re)
        poster.appendChild(data_po)


        //rotten
        var poster_rot=document.createElement("div")
        poster_rot.setAttribute("class","col-3")
        url_rot="pic/rotten-tomatoes-logo-white.png"
        var imgss=document.createElement("img")
        imgss.setAttribute("src",url_rot)
        imgss.setAttribute("class","img-fluid mx-5 2rem")
        var para_rot=document.createElement("h2")
        para_rot.innerHTML="<h3>"+result["Ratings"][1]["Value"]+"</h3>"
        para_rot.setAttribute("class"," mx-5 text-center")
        poster_rot.appendChild(imgss)
        poster_rot.appendChild(para_rot)


        data_po.appendChild(poster_rot)
        poster.appendChild(data_po)

        //metacritic
        var poster_mc=document.createElement("div")
        poster_mc.setAttribute("class","col-3")
        url_mc="pic/1280px-Metacritic_logo.png"
        var imgsss=document.createElement("img")
        imgsss.setAttribute("src",url_mc)
        imgsss.setAttribute("class","img-fluid mx-5 2rem")
        var para_mc=document.createElement("h2")
        para_mc.innerHTML="<h3>"+result["Ratings"][2]["Value"]+"</h3>"
        para_mc.setAttribute("class"," mx-5 text-center")
        poster_mc.appendChild(imgsss)
        poster_mc.appendChild(para_mc)


        data_po.appendChild(poster_mc)
        poster.appendChild(data_po)
    }
    else{
        //ratings imdb
        var poster_re=document.createElement("div")
        poster_re.setAttribute("class","col-3")
        url_imdb="pic/New-imdb-logo.png"
        var imgs=document.createElement("img")
        imgs.setAttribute("src",url_imdb)
        imgs.setAttribute("class","img-fluid mx-5 2rem")
        var para_imdb=document.createElement("h2")
        para_imdb.innerHTML="<h3>"+result["Ratings"][0]["Value"]+"</h3>"
        para_imdb.setAttribute("class"," mx-5 text-center")
        poster_re.appendChild(imgs)
        poster_re.appendChild(para_imdb)


        data_po.appendChild(poster_re)
        poster.appendChild(data_po)
    }




    //fin
    data.appendChild(data_r)

    to_show.appendChild(poster)
    to_show.appendChild(data)

}
    
}

var form=document.querySelector("form")
// console.log("Hi")

form.addEventListener("submit", function(){
    event.preventDefault()

    var data={}

    var inp=document.querySelectorAll("input")
    var sel=document.querySelector("select")

    data.title=inp[0].value.split(" ").join("+")
    data.year=inp[1].value
    data.type=sel.value
    data.ids=inp[2].value

    console.log(data)

    get_data(data)
})

var bck=document.getElementById("press")
bck.addEventListener("click",function(){
    window.location.href="index.html"
})