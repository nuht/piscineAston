var tab     = [34, -2, 6, 9, 34, 25, -10, 43];

function chercherMin(tab) 
{
    if (tab.length == 0)
    {
        var e = new Error('Array is empty');
        throw e;
    }

    var resultMin = tab[0];

    for (var key in tab)
    {
        if (key > 0) 
        {
            resultMin = Math.min(resultMin, tab[key]);
        }
    }
    return resultMin;
}

function chercherMaxAbs(tab)
{
    if (tab.length == 0)
    {
        var e = new Error('Array is empty');
        throw e;
    }

    for(var key in tab)
    {
        tab[key] = Math.abs(tab[key]);
    }

    var resultMaxAbs = tab[0];

    for(var key in tab)
    {
        if (tab[key] > resultMaxAbs)
        {
            resultMaxAbs = tab[key];
        }
    }
    return resultMaxAbs;
}

console.log('max abs : ', chercherMaxAbs(tab));
console.log('minimum : ', chercherMin(tab));
