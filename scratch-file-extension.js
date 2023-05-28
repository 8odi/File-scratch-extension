const extensionCode = `
class StrechExtension {
  getInfo() {
    return {
      id: 'strech',
      name: 'Strech',
      blocks: [
        {
          opcode: 'strechDance',
          blockType: Scratch.BlockType.COMMAND,
          text: 'dance',
        },
      ],
      menus: {},
    };
  }

  strechDance() {
strechDance() {
  const sprite = this.runtime.getTargetForStage().sprite;
  const originalSize = sprite.size;
  const stretchFactor = 2; // Adjust the value as per your preference

  const intervalId = setInterval(() => {
    sprite.size *= stretchFactor;
    sprite.gotoXY(
      sprite.x + Math.random() * 10 - 5,
      sprite.y + Math.random() * 10 - 5
    );
  }, 10); // 10 milliseconds = 0.01 seconds

  setTimeout(() => {
    sprite.size = originalSize;
    clearInterval(intervalId);
  }, 5000); // Stop after 5 seconds (adjust the duration as needed)
}

  }
}

Scratch.extensions.register(new StrechExtension());
`;

// Inject the extension code into the SheepTester environment
const scriptElement = document.createElement('script');
scriptElement.textContent = extensionCode;
document.head.appendChild(scriptElement);
