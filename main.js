let imageName =document.querySelector("#imageName")
let imageUrl =document.querySelector("#imageUrl")
let btn =document.querySelector("#btn")
console.log();


async function subPost(){
let yname =document.getElementById("y-name")
    let res = await fetch("https://665736ae9f970b3b36c86600.mockapi.io/lab2",{
        method: 'POST',
        body: JSON.stringify({
            imageName:imageName.value,
            imageUrl:imageUrl.value


        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
})


// let data = await res.json()
// console.log(data);
// yname.innerText = `imageName ${data.imageName}`
// console.log(data);
// sessionStorage.setItem("imageName",data.imageName)
}

async function subGet(){
        let res = await fetch("https://665736ae9f970b3b36c86600.mockapi.io/lab2" )
        let data = await res.json();
        let getimag = document.querySelector("getimag")
        data.forEach(element => {
            let image = document.createElement("img")
            image.src = element.imageUrl

            let imgName=document.createElement("h2")
            imgName.innerText = element.imageName
            getimag.append(imgName,image)
        });;

 }

 subGet()