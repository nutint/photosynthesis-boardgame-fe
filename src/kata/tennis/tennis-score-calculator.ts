export enum Score {
  Love= "Love",
  Fifteen = "Fifteen",
  Thirty = "Thirty",
  Forty = "Forty",
}

export enum GameState {
  Normal= "Normal",
  Deuce = "Deuce",
  Player1Advantage = "Player1Advantage",
  Player1Won = "Player1Won",
  Player2Advantage = "Player2Advantage",
  Player2Won = "Player2Won",
}

export const incrementScore = (score: Score): Score => {
  if (score === Score.Love) return Score.Fifteen
  if (score === Score.Fifteen) return Score.Thirty
  return Score.Forty
}
export const TennisScoreCalculator = (gameState?: GameState, firstPlayerScore?: Score, secondPlayerScore?: Score) => {
  const calculatedFirstPlayerScore = firstPlayerScore || Score.Love
  const calculatedSecondPlayerScore = secondPlayerScore || Score.Love
  return ({
    gameState: gameState || GameState.Normal,
    firstPlayerScore: calculatedFirstPlayerScore,
    secondPlayerScore: calculatedSecondPlayerScore,
    firstPlayerDidScore: () => {
      if(calculatedFirstPlayerScore === Score.Thirty && calculatedSecondPlayerScore === Score.Forty)
        return TennisScoreCalculator(GameState.Deuce)
      if (gameState === GameState.Deuce)
        return TennisScoreCalculator(GameState.Player1Advantage)
      if (gameState === GameState.Player1Advantage)
        return TennisScoreCalculator(GameState.Player1Won)
      if (gameState === GameState.Player2Advantage)
        return TennisScoreCalculator(GameState.Deuce)
      if ([Score.Love, Score.Fifteen, Score.Thirty].includes(calculatedSecondPlayerScore) &&
         calculatedFirstPlayerScore === Score.Forty)
        return TennisScoreCalculator(GameState.Player1Won)
      return TennisScoreCalculator(GameState.Normal, incrementScore(calculatedFirstPlayerScore), calculatedSecondPlayerScore)
    },
    secondPlayerDidScore: () => {
      if(calculatedFirstPlayerScore === Score.Forty && calculatedSecondPlayerScore === Score.Thirty)
        return TennisScoreCalculator(GameState.Deuce)
      if (gameState === GameState.Deuce)
        return TennisScoreCalculator(GameState.Player2Advantage)
      if (gameState === GameState.Player2Advantage)
        return TennisScoreCalculator(GameState.Player2Won)
      if (gameState === GameState.Player1Advantage)
        return TennisScoreCalculator(GameState.Deuce)
      if ([Score.Love, Score.Fifteen, Score.Thirty].includes(calculatedFirstPlayerScore) &&
        calculatedSecondPlayerScore === Score.Forty)
        return TennisScoreCalculator(GameState.Player2Won)
      return TennisScoreCalculator(GameState.Normal, calculatedFirstPlayerScore, incrementScore(calculatedSecondPlayerScore))
    }
  })
}