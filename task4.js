let arr = [10,12,13,14,15,16]

function smth(arr){
    console.log('start array');
    for(let i=0; i < arr.length; i++)
    {
        
        console.log(arr[i]);
    }


    for(let i=0; i < arr.length; i++)
    {
        arr[i] = arr[i]*1.1;

    }
    console.log('array * 10%')
    for(let i=0; i < arr.length; i++)
    {
         
        console.log(arr[i].toFixed(2));
    
    }
    
}
smth(arr);