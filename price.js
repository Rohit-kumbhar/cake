function show(){

    document.getElementById("result").innerHTML = '';
    if(parseInt(document.getElementById("input_from").value) > -1)
    {
        if(document.getElementById("unit").value == 'Any Other Flavour')
        {

            if(document.getElementById("unit_type").value == 'Grams')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*0.002205*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Kilograms')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2.204586*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Metric tonnes')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2204.586*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Short ton')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2000*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Long ton')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2239.859*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Pounds')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*350) + ' Rs.' ;
                }
                else if(document.getElementById("unit_type").value == 'Ounces')
                {
                    document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*0.000028 *350) + ' Rs.' ;
                }
        
        }
        else
        {

            if(document.getElementById("unit_type").value == 'Grams')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*0.002205*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Kilograms')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2.204586*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Metric tonnes')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2204.586*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Short ton')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2000*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Long ton')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*2239.859*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Pounds')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*400) + ' Rs.' ;
            }
            else if(document.getElementById("unit_type").value == 'Ounces')
            {
                document.getElementById("result").innerHTML = ((document.getElementById("input_from").value)*0.000028 *400) + ' Rs.' ;
            }

        }
    }
    else if(document.getElementById("input_from").value == '')
    {
        document.getElementById("result").innerHTML = '';
    }
    else
    {
        alert('Please Enter a valid mass');
    }
}

