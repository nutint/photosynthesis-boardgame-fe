import {GameState, incrementScore, Score, TennisScoreCalculator} from "./tennis-score-calculator"

describe("incrementScore", () => {
  it("should become fifteen when start with love", () => {
    const actual = incrementScore(Score.Love)

    expect(actual).toEqual(Score.Fifteen)
  })

  it("should become thirty when start with fifteen", () => {
    const actual = incrementScore(Score.Fifteen)

    expect(actual).toEqual(Score.Thirty)
  })

  it("should become forty when start with thirty", () => {
    const actual = incrementScore(Score.Thirty)

    expect(actual).toEqual(Score.Forty)
  })
})

describe("TennisScoreCalculator", () => {
  describe("Initialization", () => {
    it("should be able to initialize with love-love", () => {
      const actual = TennisScoreCalculator()

      expect(actual.firstPlayerScore).toEqual(Score.Love)
      expect(actual.secondPlayerScore).toEqual(Score.Love)
    })

    it("should be able to initialize with Fifteen-Fifteen", () => {
      const actual = TennisScoreCalculator(undefined, Score.Fifteen, Score.Fifteen)

      expect(actual.firstPlayerScore).toEqual(Score.Fifteen)
      expect(actual.secondPlayerScore).toEqual(Score.Fifteen)
    })

    it("should start with undefined game state", () => {
      const actual = TennisScoreCalculator()

      expect(actual.gameState).toEqual(GameState.Normal)
    })

    it("can be overridden to deuce", () => {
      const actual = TennisScoreCalculator(GameState.Deuce)

      expect(actual.gameState).toEqual(GameState.Deuce)
    })
  })

  describe("PlayerScore", () => {
    it("should become fifteen-love when first player score while love-love", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()

      expect(actual.firstPlayerScore).toEqual(Score.Fifteen)
      expect(actual.secondPlayerScore).toEqual(Score.Love)
    })

    it("should become thirty-love when first player score twice while love-love", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()

      expect(actual.firstPlayerScore).toEqual(Score.Thirty)
      expect(actual.secondPlayerScore).toEqual(Score.Love)
    })

    it("should become love-fifteen when second player score while love-love", () => {
      const actual = TennisScoreCalculator()
        .secondPlayerDidScore()

      expect(actual.firstPlayerScore).toEqual(Score.Love)
      expect(actual.secondPlayerScore).toEqual(Score.Fifteen)
    })

    it("should become deuce when score is thirty-forty and player 1 score", () => {
      const actual = TennisScoreCalculator(GameState.Normal, Score.Thirty, Score.Forty)
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should become deuce when score is forty-thirty and player 2 score", () => {
      const actual = TennisScoreCalculator(GameState.Normal, Score.Forty, Score.Thirty)
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should become player1 advantage when player1 score while deuce", () => {
      const actual = TennisScoreCalculator(GameState.Deuce)
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player1Advantage)
    })

    it("should become deuce again when player1 score while player2 advantage", () => {
      const actual = TennisScoreCalculator(GameState.Player2Advantage)
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should become player1 won when player1 score while player1 advantage", () => {
      const actual = TennisScoreCalculator(GameState.Player1Advantage)
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player1Won)
    })

    it("should become player2 advantage when player2 score while deuce", () => {
      const actual = TennisScoreCalculator(GameState.Deuce)
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player2Advantage)
    })

    it("should become deuce again when player2 score while player1 advantage", () => {
      const actual = TennisScoreCalculator(GameState.Player1Advantage)
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should become player1 won when player1 score while player1 advantage", () => {
      const actual = TennisScoreCalculator(GameState.Player2Advantage)
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player2Won)
    })
  })

  describe("play with scenario", () => {
    it("should calculate deuce correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()


      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should calculate player1 advantage correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .firstPlayerDidScore()


      expect(actual.gameState).toEqual(GameState.Player1Advantage)
    })

    it("should calculate player1 advantage correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player2Advantage)
    })

    it("should calculate win from deuce correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player2Won)
    })

    it("should calculate 2nd deuce correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Deuce)
    })

    it("should calculate case player 1 can win without deuce correctly", () => {
      const actual = TennisScoreCalculator()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .firstPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player1Won)
    })

    it("should calculate case player 2 can win without deuce correctly", () => {
      const actual = TennisScoreCalculator()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .secondPlayerDidScore()
        .firstPlayerDidScore()
        .firstPlayerDidScore()
        .secondPlayerDidScore()

      expect(actual.gameState).toEqual(GameState.Player2Won)
    })
  })
})