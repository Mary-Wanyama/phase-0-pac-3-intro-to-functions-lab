function shout(hello) {
    return hello.toUpperCase();
  }
  function whisper(hello) {
    return hello.toLowerCase();
  }
  function logShout(hello) {
    console.log(hello.toUpperCase());
  }
  function logWhisper(hello) {
    console.log(hello.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(hello) {
    switch (hello) {
        case hello.toLowerCase(): return "I" + ' can\'t hear you!'.toLowerCase();
            case hello.toUpperCase(): return 'YES INDEED!'.toUpperCase();
            case "Let's have dinner together!" : return 'I would love to!';
        default:
            break;
    }
  
  }