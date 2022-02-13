export enum Score {
  Love,
  Fifteen,
  Thirty,
  Forty,
}

export enum GameState {
  Normal,
  Deuce,
  Player1Advantage,
  Player1Won,
  Player2Advantage,
  Player2Won,
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
      return TennisScoreCalculator(undefined, incrementScore(calculatedFirstPlayerScore), calculatedSecondPlayerScore)
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
      return TennisScoreCalculator(undefined, calculatedFirstPlayerScore, incrementScore(calculatedSecondPlayerScore))
    }
  })
}