
let resultArr = [];
let picture = document.getElementById("pic");
picture.setAttribute("width", "100%");
picture.setAttribute("height", "550");
function displaypic(){
  let userdata = document.getElementById("demo").value;
       
let response = fetch(`http://api.giphy.com/v1/gifs/search?q=${userdata}&api_key=HxXROY36MZzzdbg3Cxc1LnDjTlxnXEZU&limit=5`);
response.then(function(val){
  let data = val.json();
  return data;
}).then((imgurl)=>{return imgurl["data"];
}).then((pic) => {
pic.forEach((elem)=>{
  showImg(elem["url"]);
})
})
}
function showImg(picUrl){
  picture.setAttribute("src", picUrl);
  document.body.append(picture);
}
