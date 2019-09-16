import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });
  });
  it("X should be able to make move", () => {
    const game = new Game();
  
    game.onClick(0);
    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
    it("O should move after X", () => {
      const game = new Game();
    
      game.onClick(0);
      game.onClick(1);
      
      expect(game.getCells()).toEqual([
        "X", "O", "-",
        "-", "-", "-",
        "-", "-", "-"
      ]);
});

it("X should win on first x line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(3);
  game.onClick(1);
  game.onClick(4);
  game.onClick(2);
  
  expect(game.getCells()).toEqual([
    "X", "X", "X",
    "O", "O", "-",
    "-", "-", "-"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on second x line", () => {
  const game = new Game();

  game.onClick(3);
  game.onClick(0);
  game.onClick(4);
  game.onClick(1);
  game.onClick(5);
  
  expect(game.getCells()).toEqual([
    "O", "O", "-",
    "X", "X", "X",
    "-", "-", "-"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});
it("X should win on third x line", () => {
  const game = new Game();

  game.onClick(6);
  game.onClick(3);
  game.onClick(7);
  game.onClick(4);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "-", "-", "-",
    "O", "O", "-",
    "X", "X", "X"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on first y line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(1);
  game.onClick(3);
  game.onClick(4);
  game.onClick(6);
  
  expect(game.getCells()).toEqual([
    "X", "O", "-",
    "X", "O", "-",
    "X", "-", "-"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on second y line", () => {
  const game = new Game();

  game.onClick(1);
  game.onClick(0);
  game.onClick(4);
  game.onClick(3);
  game.onClick(7);
  
  expect(game.getCells()).toEqual([
    "O", "X", "-",
    "O", "X", "-",
    "-", "X", "-"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on third y line", () => {
  const game = new Game();

  game.onClick(2);
  game.onClick(0);
  game.onClick(5);
  game.onClick(3);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "O", "-", "X",
    "O", "-", "X",
    "-", "-", "X"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on xy line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(3);
  game.onClick(4);
  game.onClick(2);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "X", "-", "O",
    "O", "X", "-",
    "-", "-", "X"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("X should win on yx line", () => {
  const game = new Game();

  game.onClick(2);
  game.onClick(3);
  game.onClick(4);
  game.onClick(8);
  game.onClick(6);
  
  expect(game.getCells()).toEqual([
    "-", "-", "X",
    "O", "X", "-",
    "X", "-", "O"
  ]);
  expect(game.getWinner()).toBe("X");
  expect(game.isTie()).toBe(false);
});

it("O should move after X", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(0);
  
  expect(game.getCells()).toEqual([
    "X", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ]);
  expect(game.getWinner()).toBe("-");
  expect(game.getTurn()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on first x line", () => {
  const game = new Game();

  game.onClick(3);
  game.onClick(0);
  game.onClick(4);
  game.onClick(1);
  game.onClick(8);
  game.onClick(2);
  
  expect(game.getCells()).toEqual([
    "O", "O", "O",
    "X", "X", "-",
    "-", "-", "X"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});
it("O should win on second x line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(3);
  game.onClick(1);
  game.onClick(4);
  game.onClick(6);
  game.onClick(5);
  
  expect(game.getCells()).toEqual([
    "X", "X", "-",
    "O", "O", "O",
    "X", "-", "-"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on third x line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(6);
  game.onClick(1);
  game.onClick(7);
  game.onClick(4);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "X", "X", "-",
    "-", "X", "-",
    "O", "O", "O"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on first y line", () => {
  const game = new Game();

  game.onClick(1);
  game.onClick(0);
  game.onClick(4);
  game.onClick(3);
  game.onClick(5);
  game.onClick(6);
  
  expect(game.getCells()).toEqual([
    "O", "X", "-",
    "O", "X", "X",
    "O", "-", "-"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on third y line", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(2);
  game.onClick(3);
  game.onClick(5);
  game.onClick(4);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "X", "-", "O",
    "X", "X", "O",
    "-", "-", "O"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on xy line", () => {
  const game = new Game();

  game.onClick(3);
  game.onClick(0);
  game.onClick(2);
  game.onClick(4);
  game.onClick(5);
  game.onClick(8);
  
  expect(game.getCells()).toEqual([
    "O", "-", "X",
    "X", "O", "X",
    "-", "-", "O"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("O should win on yx line", () => {
  const game = new Game();

  game.onClick(3);
  game.onClick(2);
  game.onClick(7);
  game.onClick(4);
  game.onClick(5);
  game.onClick(6);
  
  expect(game.getCells()).toEqual([
    "-", "-", "O",
    "X", "O", "X",
    "O", "X", "-"
  ]);
  expect(game.getWinner()).toBe("O");
  expect(game.isTie()).toBe(false);
});

it("should be able to restart the game", () => {
  const game = new Game();

  game.onClick(3);
  game.onClick(0);
  game.onClick(4);
  game.onClick(1);
  game.onClick(8);
  game.onClick(2);
  
  expect(game.getCells()).toEqual([
    "O", "O", "O",
    "X", "X", "-",
    "-", "-", "X"
  ]);
  game.restart();

  expect(game.getCells()).toEqual([
    "-", "-", "-",
    "-", "-", "-",
    "-", "-", "-"
  ]);

});
it("Should be tie", () => {
  const game = new Game();

  game.onClick(0);
  game.onClick(2);
  game.onClick(1);
  game.onClick(3);
  game.onClick(5);
  game.onClick(4);
  game.onClick(6);
  game.onClick(8);
  game.onClick(7);
  
  expect(game.getCells()).toEqual([
    "X", "X", "O",
    "O", "O", "X",
    "X", "X", "O"
  ]);
  expect(game.getWinner()).toBe("-");
  expect(game.isTie()).toBe(true);
});
