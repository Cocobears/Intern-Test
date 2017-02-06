
		  
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    	if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validateForm() {
        var un = document.loginForm.userName.value;
        var pw = document.loginForm.passWord.value;
        var username = "demo";
        var password = "demo1234";
        if ((un == username) && (pw == password)) {
            confirm("Login was successful, you are now being redirected");
            return true;
            }
        else {
            alert("Login was unsuccessful, please check your username and password");
            return false;
        }
      }

$('button[type=save]').click(function(){
    var date = new Date();
    date.setTime(date.getTime()+(1*24*60*60*1000));

    createCookie('fname', $("#firstName").val(), date);
    createCookie('lname', $("#lastName").val(), date);
    createCookie('grade',$("#grade").val(), date);
    createCookie('venue',$("#venue").val(), date);
 	createCookie('departing',$("#departing").val(), date);
  	createCookie('returning',$("#returning").val(), date);
  	createCookie('dAway',$("#datesAway").val(), date);
  	createCookie('justf',$("#justification").val(), date);
  	createCookie('project',$("#project").val(), date);
  	createCookie('budget',$("#budgetLine").val(), date);
  	createCookie('travelcost',$("#estimatedTravel").val(), date);
  	createCookie('additionalcost',$("#additionalCosts").val(), date);
  	createCookie('percTravel',$("#percentageOfTravel").val(), date);
  	createCookie('department',$("#department").val(), date);
  	createCookie('quarter',$("#quarter").val(), date);
  	createCookie('alloc',$("#totalAllocated").val(), date);
 	createCookie('dateBudgetBalance',$("#dateBudgetBalance").val(), date);
  	createCookie('budgetBalance',$("#budgetBalance").val(), date);
  	createCookie('regionalOffice',$("#regionalOffice").val(), date);
  	createCookie('commSupport',$("#commSupport").val(), date);
});

function createCookie(name, value, date){
    var c = name + '=' + value + "; expires=" + date;
    document.cookie = c;
}

function informUser() {
   	confirm($("#firstName").val()+" "+$("#lastName").val()+", \n\n Your travel plan for " +$("#project").val()+" leaving on "+$("#departing").val()+" and returning on "+$("#returning").val()+" has been saved your system.\n\n Please click on Submit to email it to your supervisor.")
   }

function emailSupervisor() {
	confirm("Your travel plan has been sent to your supervisor for approval! \n\nHave a Great Day!")
}