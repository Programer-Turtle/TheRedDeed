let SlideImage = document.getElementById("SlideShowImage")

let i = 1
let Slidevalues = ["TheRedDeedLogo.jpg", "CanalDayParade.jpeg", "Flower.jpeg", "MowedLawn.jpeg", "MowedLawnWithDog.jpeg", "MowedLawnWithTractor.jpeg", "NightMowedLawn.jpeg", "RCPlane.jpeg", "StickCollection.jpeg", "Tractor.jpeg", "TractorInFeild.jpeg", "TractorTowTractor.jpeg"]

function ChangeSlide(Number)
{
    i += Number
    if(i > Slidevalues.length)
    {
        i = 1
    }
    else if(i< 1)
    {
        i = Slidevalues.length
    }
    SlideImage.src = "Images/" + Slidevalues[i - 1]
    console.log("Images/" + Slidevalues[i - 1])
}

var x = setInterval(() => 
{
    ChangeSlide(1)
}, 6000)