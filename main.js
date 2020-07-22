
// Feet to Miles...

function feetToMile(Feet){
    if(Feet<0){
        console.log('Negrative is not Support !error');
    }
    else{
       var Miles = Feet * 0.0001893939393939394;
    }
    return Miles;
}
console.log('Miles is :' + feetToMile(52800));





// Wood calculator....

function woodCalculator(Chair , Table , Bed){

    if(Chair<=0 || Table<=0 || Bed<=0){
        console.log('Negative is not Count');
    }
    else{
        var requiredOfChair = Chair * 1;
        var requiredOfTable = Table * 3;
        var requiredOfBed = Bed *5;
        var TotalWood = requiredOfChair + requiredOfTable + requiredOfBed;
    }
    return TotalWood;
}
var output = woodCalculator(4,7,6);
console.log('Wood Calculator is :'+ output);




// BrickCalculator


  function BrickCalculator(TotalSize){
      var FirstToTen = 15;
      var ElavanToTwenty = 12;
      var TwentyUp = 10;
      if(TotalSize<=0){
          console.log('Zero is not Support , !Error');
      }
      else{
          if(TotalSize<=10){
              var FirstToTen = TotalSize * FirstToTen;
              Output = FirstToTen * 1000;
          }
          else if(TotalSize<=20){
              FirstToTen = FirstToTen * 10;
           var ElavanToTwenty= TotalSize - 10;
            var  TotalSize = FirstToTen + (ElavanToTwenty * 12);
             Output = TotalSize * 1000;
          }
          else{
            FirstToTen = FirstToTen * 10;
            ElavanToTwenty = ElavanToTwenty * 10;
            TwentyUp = TotalSize -20;
            TotalSize = FirstToTen + ElavanToTwenty + (TwentyUp * 10);
            Output = TotalSize * 1000;
        }
      }
      return Output;
  }
var Home = BrickCalculator(27);
console.log('BrickCalculator is :' + Home);



// // Tinyfriend

function tinyFriend(FriendName){
    var min = FriendName[0];
    for (var i = 0; i < FriendName.length; i++) {
    var element = FriendName[i];
    if (element.length<min.length) {
        min = element;
    }
}
return min;
}
var FriendName = tinyFriend(['Nasim','MA.Faraz','Prithom']);
console.log('Tinyfriend is :' + FriendName);



