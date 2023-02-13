function RandomHex () {
  

    const getRgb = () => Math.floor(Math.random() * 256);

    const rgbToHex = (r, g, b) =>
      '#' +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');
  
    const handleGenerate = () => {
      
    
      return (rgbToHex(getRgb(), getRgb(), getRgb()));
}

return handleGenerate();
}
export default RandomHex;