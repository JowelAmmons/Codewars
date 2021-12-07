function hero(bullets, dragons){
    let num = bullets/dragons;
    if(num<2){
      return false;
    }
    else{
      return true;
    }
  }