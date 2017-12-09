let sign = '°C';
let temp = 0;

function success(pos){
  const crd = pos.coords;

  $.getJSON(`https://fcc-weather-api.glitch.me/api/current?lat=${crd.latitude}&lon=${crd.longitude}`, (data)=>{
    temp = Math.round(data.main.temp);
    $('#cityName').html(data.name);
    $('#wIcon').attr('src', data.weather[0].icon);
    $('#temp').html(temp);

  });
};

navigator.geolocation.getCurrentPosition(success);

$('button').on('click', () =>{
  sign=='°C' ? sign='°F' : sign='°C';
  sign=='°F' ? $('#temp').html(Math.round(temp*1.8+32)) : $('#temp').html(temp);
  $('#sign').html(sign);

});
