// UNIT test begin
describe('Parse Test', () => {
    it('test run', async () => {
        const GameScore = Parse.Object.extend("GameScore")
        const gameScore = new GameScore()
        await gameScore.save({
            score: 1337,
            playerName: "Sean Plott",
            cheatMode: false
        })
        const result = await Parse.Cloud.run('getData')
        console.log(JSON.stringify(result))
    })
})