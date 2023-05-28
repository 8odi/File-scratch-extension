class ScratchFile {
  constructor () {
    this.fileInput = document.createElement("input");
    this.fileInput.type = "file";
    this.fileInput.accept = ".txt";
    this.fileInput.style.display = "none";
    this.fileInput.addEventListener("change", this.handleFileSelect.bind(this));
    document.body.appendChild(this.fileInput);
  }

  getInfo () {
    return {
      "id": "File",
      "name": "File",
      "blocks": [
        {
          "opcode": "chooseFile",
          "blockType": "reporter",
          "text": "choose a .txt file",
          "arguments": {}
        }
      ]
    };
  }

  chooseFile () {
    this.fileInput.click();
    return new Promise(resolve => {
      this.resolve = resolve;
    });
  }

  handleFileSelect (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        this.resolve(file.name + "\n" + content);
      };
      reader.readAsText(file);
    }
  }
}

Scratch.extensions.register(new ScratchFile());
