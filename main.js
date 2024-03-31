class Start{
    constructor(){
        this.playerName = "ndak tau"
        this.botName = "MeongBot"
        this.winner;
        this.botOptions
        this.playerOptions;
    }

    get getbotOptions () {
        return this.botOptions
    }

    set setbotOptions (option) {
        this.botOptions
    }

    get getplayerOptions () {
        return this.playerOptions
    }

    set playerOptions (option) {
        this.setplayerOptions = option;
    }
    
    botBrain () {
        const option = ["✊","🤚","✌️"]
        const bot = option [Math.floor(Math.random() * option.length)]
        console.log('pilih ', bot.toString())
    }
}


function pickOption(parameter) {
    const start = new Start();
    start.setplayerOptions = parameter;
    start.botBrain()
    console.log(start.setplayerOptions)
}

