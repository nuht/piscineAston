var tab     = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var count   = 2;
var result  = 0;

for (var cle in tab)
{
    tab[cle] = count;
    
    if (cle % 2 === 0)
    {
        result = result + count;
    }

    count = count + 2;
}

console.log(tab);

console.log(result);
