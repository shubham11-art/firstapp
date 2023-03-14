

function styling (){

    return (

  let namaste = " ";

  const curDate = new Date().getHours;
  const cssStyle = {};

  if (curDate >= 1 && curDate <= 12) {
    namaste = "Good Morning";
    cssStyle.color = "Green";
  } else if (curDate > 12 && curDate <= 19) {
    namaste = "GoodA fternoon";
    cssStyle.color = "Orange";
  } else {
    namaste = "Good Night";
    cssStyle.color = "Black";
  }
    );
}

export default styling; 
