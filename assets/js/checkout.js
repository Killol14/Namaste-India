var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope)
{
  $scope.showMe = false;
  $scope.myFunc = function()
  {
    
    var checka = document.getElementById("validationDefault07");
    var checkb = document.getElementById("validationDefault06");
    var checkc = document.getElementById("validationDefault05");
    var checkd = document.getElementById("validationDefault04");
    var checke = document.getElementById("validationDefault03");
    var checkf = document.getElementById("validationDefault02");
    var checkg = document.getElementById("validationDefault01");
    var checkh = document.getElementById("validationDefaultUsername");
    if (checka.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkb.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkc.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkd.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checke.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkf.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkg.value === "")
    {
      alert('Fill the form!');
      return;
    }
    if (checkh.value === "")
    {
      alert('Fill the form!');
      return;
    }
    
    $scope.showMe = !$scope.showMe;
  }
});
var data, p;
data = {
  "Delhi": 2000,
  "Agra": 2500,
  "Mumbai": 4000,
  "Jaipur": 3500,
  "Darjeeling": 3000,
  "Andaman": 4000,
  "Banglore": 5000,
  "Goa": 6000,
  "Kerala": 4000
};

function myFunc()
{
  p = document.getElementById('validationDefault07').value;
  document.getElementById('pack').innerHTML = p;
  if (p === "Delhi")
  {
    document.getElementById('price').innerHTML = data.Delhi + "£";
  }
  if (p === "Agra")
  {
    document.getElementById('price').innerHTML = data.Agra + "£";
  }
  if (p === "Mumbai")
  {
    document.getElementById('price').innerHTML = data.Mumbai + "£";
  }
  if (p === "Jaipur")
  {
    document.getElementById('price').innerHTML = data.Jaipur + "£";
  }
  if (p === "Darjeeling")
  {
    document.getElementById('price').innerHTML = data.Darjeeling + "£";
  }
  if (p === "Andaman")
  {
    document.getElementById('price').innerHTML = data.Andaman + "£";
  }
  if (p === "Banglor")
  {
    document.getElementById('price').innerHTML = data.Banglore + "£";
  }
  if (p === "Goa")
  {
    document.getElementById('price').innerHTML = data.Goa + "£";
  }
  if (p === "Kerala")
  {
    document.getElementById('price').innerHTML = data.Kerala + "£";
  }
}
