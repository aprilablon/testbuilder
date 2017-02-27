/* 
Given a credit card number, this function should return a string with the 
name of a network, like 'MasterCard' or 'American Express'
Example: detectNetwork('343456789012345') should return 'American Express'

How can you tell one card network from another? Easy! 
There are two indicators:
  1. The first few numbers (called the prefix)
  2. The number of digits in the number (called the length)

Covering the following cards:
  - Diner's Club
  - American Express
  - Visa
  - MasterCard
  - Discover
  - Maestro
  - China UnionPay
  - Switch
*/

var detectNetwork = function(cardNumber) {
  // Define card number length and prefix
  var cardNumberLength = cardNumber.length;
  var cardNumberPrefix = cardNumber.slice(0, 2);

  // Save if the card number length and prefix match the Diner's Club criteria
  var isDinersClubPrefix = cardNumberPrefix == '38' || cardNumberPrefix == '39';
  var isDinersClubLength = cardNumberLength == 14;

  // Save if the card number length and prefix match the American Express criteria
  var isAmericanExpressPrefix = cardNumberPrefix == '34' || cardNumberPrefix == '37';
  var isAmericanExpressLength = cardNumberLength == 15;

  // Save if the card number length and prefix match the Switch criteria
  var isSwitchPrefix = cardNumber.slice(0, 4) == '4903' || cardNumber.slice(0, 4) == '4905' || cardNumber.slice(0, 4) == '4911' || cardNumber.slice(0, 4) == '4936' || cardNumber.slice(0, 6) == '564182' || cardNumber.slice(0, 6) == '633110' || cardNumber.slice(0, 4) == '6333' || cardNumber.slice(0, 4) == '6759';
  var isSwitchLength = cardNumberLength == 16 || cardNumberLength == 18 || cardNumberLength == 19;

  // Save if the card number length and prefix match the Visa criteria
  var isVisaPrefix = cardNumberPrefix[0] == '4';
  var isVisaLength = cardNumberLength == 13 || cardNumberLength == 16 || cardNumberLength == 19;

  // Save if the card number length and prefix match the MasterCard criteria
  var isMasterCardPrefix = false;
  if (cardNumber[0] == '5') {
  	for (var prefix = 51; prefix <= 55; prefix++) {
  	  if (cardNumberPrefix == prefix.toString()) {
  	  	isMasterCardPrefix = true;
  	  }
  	}
  }
  var isMasterCardLength = cardNumberLength == 16;

  // Save if the card number length and prefix match the Discover criteria
  var isDiscoverPrefix = cardNumber.slice(0, 4) == '6011' || cardNumber.slice(0, 3) == '644' || cardNumber.slice(0, 3) == '645' || cardNumber.slice(0, 3) == '646' || cardNumber.slice(0, 3) == '647' || cardNumber.slice(0, 3) == '648' || cardNumber.slice(0, 3) == '649' || cardNumberPrefix == '65';
  var isDiscoverLength = cardNumberLength == 16 || cardNumberLength == 19;

  // Save if the card number length and prefix match the Maestro criteria
  var isMaestroPrefix = cardNumber.slice(0, 4) == '5018' || cardNumber.slice(0, 4) == '5020' || cardNumber.slice(0, 4) == '5038' || cardNumber.slice(0, 4) == '6304';
  var isMaestroLength = cardNumberLength == 12 || cardNumberLength == 13 || cardNumberLength == 14 || cardNumberLength == 15 || cardNumberLength == 16 || cardNumberLength == 17 || cardNumberLength == 18 || cardNumberLength == 19; 

  // Save if the card number length and prefix match the China UnionPay criteria
  var isUnionPayPrefix = false;
  if (cardNumberPrefix == '62') {
  	for (var prefix = 622126; prefix <= 622925; prefix++) {
  	  if (cardNumber.slice(0, 6) == prefix.toString()) {
  	    isUnionPayPrefix = true;
  	  } 
  	}
  	for (var prefix = 624; prefix <= 626; prefix++) {
  	  if (cardNumber.slice(0, 3) == prefix.toString()) {
  	    isUnionPayPrefix = true;
  	  } 
  	}
  	for (var prefix = 6282; prefix <= 6288; prefix++) {
  	  if (cardNumber.slice(0, 4) == prefix.toString()) {
  	    isUnionPayPrefix = true;
  	  } 
  	}
  }
  var isUnionPayLength = cardNumberLength == 16 || cardNumberLength == 17 || cardNumberLength == 18 || cardNumberLength == 19;

  if (isDinersClubPrefix && isDinersClubLength) {
  	return 'Diner\'s Club';
  } else if (isAmericanExpressPrefix && isAmericanExpressLength) {
  	return 'American Express';
  } else if (isSwitchPrefix && isSwitchLength) {
  	return 'Switch';
  } else if (isVisaPrefix && isVisaLength) {
  	return 'Visa';
  } else if (isMasterCardPrefix && isMasterCardLength) {
  	return 'MasterCard';
  } else if (isDiscoverPrefix && isDiscoverLength) {
  	return 'Discover';
  } else if (isMaestroPrefix && isMaestroLength) {
  	return 'Maestro';
  } else if (isUnionPayPrefix && isUnionPayLength) {
  	return 'China UnionPay';
  } else {
  	return 'Not a valid card number';
  }
};


