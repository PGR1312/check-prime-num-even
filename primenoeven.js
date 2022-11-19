var num=8887;
var check=0;
if(num==1)
{
    console.log('1 neither prime no or not');
}
else if(num>1)
{
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            check++;
        }
    }
}

if(check==0)
    {
        console.log(num+' is prime no');
        var even=num.toString().split('');
        //console.log(even);
        var evenarr=[]
        for(i=0;i<even.length;i++)
        {
             if((even[i]%2)==0)
             {
                evenarr.push(even[i]);
             }
        }
        console.log('even digits '+evenarr);
    }
else
    {
        console.log(num+' is not prime no');
    }
