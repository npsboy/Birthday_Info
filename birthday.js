function dummy() {
    //   let xyz = document.getElementById("date_input").innerHTML
    //alert(xyz) 
        
        // determine today's date 
        // determine if birthday is over this year
        // find out how many days till next birthday 
        // then fill the value of x 
    
 

        var form = document.getElementById("dateform");
        var enteredDate = form.elements[0].value;
        var inputDate = new Date (enteredDate)
        var today = new Date ();
        var difference = today - inputDate;
        var no_mil_in_day = 86400000;
        var daysElapsed = Math. trunc(difference/no_mil_in_day) ;
        var maxDays = 43800
  
        console.log("entered date is " + enteredDate)
        console.log(inputDate)
        console.log(difference)
        console.log(daysElapsed)

        if (enteredDate != "" && daysElapsed < maxDays && daysElapsed > 0 ) {

            if (daysElapsed<0 ) {

                document.getElementById("days").innerHTML="Oh you were born in the future I see! What happens in the future?" 

            }else{ 
            
                document.getElementById("days").innerHTML= "You are " + daysElapsed + " days old." ;

            }

            let zodiac = ["03-21,04-20,Aries",
                            "04-20,05-21,Taurus",
                            "05-21,06-21,Gemini",
                            "06-21,07-23,Cancer",
                            "07-23,08-23,Leo", 
                            "08-23,09-23,Virgo",
                            "09-23,10-23,Libra",
                            "10-23,11-22,Scorpio",
                            "11-23,12-22,Sagittarius",
                            "12-22,01-20,Capricorn",
                            "01-20,02-19,Aquarius",
                            "02-19,03-21,Pisces"]
        
            function zodiacFinder () {
                var i = 0
                var item = "" 
                var firstDate = ""
                var lastDate = ""
                var symbol = ""
                let zodiacArray = [ ]
                let birthYear = inputDate.getFullYear()
           
                


                while (i<zodiac.length) {
            
                    zodiacArray = zodiac[i].split(',')
                    firstDate = new Date (birthYear + "-" + zodiacArray[0] )
                  
                   
                    lastDate =  new Date (birthYear + "-" + zodiacArray[1] ) 
                    
                    symbol = zodiacArray[2]
            
                    if (inputDate>=firstDate && inputDate<lastDate) {

                        return symbol
                    }

                    i = i + 1
                } 
         
            }
      
            let zodiacSign = zodiacFinder()
            console.log(zodiacSign)
            document.getElementById ("zodiacSymbol").innerHTML="Your Zodiac sign is " + zodiacSign 
      
        } else {

            if (enteredDate == "" ) {

            document.getElementById("days").innerHTML="Please enter a valid date!"
            document.getElementById("zodiacSymbol").innerHTML=""
            } 
            if (daysElapsed > maxDays) {
                document.getElementById("days").innerHTML="Are you the oldest person alive?"
                document.getElementById("zodiacSymbol").innerHTML=""
            
            }
            if (daysElapsed<0 ) {

            document.getElementById("days").innerHTML="Oh you were born in the future I see! What happens in the future?" 
            document.getElementById("zodiacSymbol").innerHTML=""

            }   
            
        }

    } 
 