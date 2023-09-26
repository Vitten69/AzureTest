let zahl = 1;

function switcher()
{
    zahl++;

    let x = loadImage(zahl);

    document.getElementById("catswitcher").src = x;
}

function loadImage(x)
{
    let image = new Image();

    let speicherort = "./Cat" + x + ".jfif";
    image.src = speicherort;

    if(image.width == 0)
    {
        zahl = 1;
        return './Cat1.jfif';
    }
    else
    {
        return speicherort;
    }
}