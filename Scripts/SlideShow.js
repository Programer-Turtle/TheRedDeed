let i = 1

function ChangeSlide(Number)
{
    i += Number
    if(i > 12)
    {
        i = 1
    }
    else if(i< 1)
    {
        i = 12
    }
    for(v = 1; v<13; v++)
    {
        HidePopUp(v)
    }
    ShowPopUp(i, "block")
}

ChangeSlide(0)

var x = setInterval(() => 
{
    ChangeSlide(1)
}, 6000)