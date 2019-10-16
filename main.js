const handleUpload = function(event) {
  const input = event.target.files[0];
  const output = document.getElementById("memeImage");

  output.src = URL.createObjectURL(input);
};

const handleChangeText = function(event, id) {
  const input = event.target.value;
  const output = document.getElementById(id);

  output.innerHTML = input;
};

const handleSaveImage = function() {
  const meme = document.getElementById("meme");
  const options = { allowTaint: true };

  html2canvas(meme, options).then(function(canvas) {
    document.body.appendChild(canvas);
  });
};
