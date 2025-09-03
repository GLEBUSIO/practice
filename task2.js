function variables()
{
    {
    var x = 10;
    let y = 11;
    const z = 12;
    //console.log(x)
    //console.log(y)           // Только переменная объявленная через var видна снаружи блока  
    //console.log(z)           // А внутри блока видны все переменные 
    }                          // Это говорит о том, что у жтих переменных разные области видимости
    //console.log(x)
    console.log(y)
    //console.log(z)
}

variables()