// export const shortenText = text => {
//     let shortened = text.substr(0, 100).trim();
//     if (shortened.length === 100){
//       shortened += '...';
//       console.log(shortened);
//     };
//     return shortened;
//   };

  export const shortenText = text => {
    if (text.trim().length >= 100 && text.length !== 100) {
      return `${text.substr(0, 100).trim()}...`;
    }
    return text;
  }
  

  shortenText('This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.');