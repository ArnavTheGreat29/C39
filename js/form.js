class Form{
    constructor(){
        this.input = createInput()
        this.button = createButton('Join')
    }
    display(){
       
        this.input.position(displayWidth/2,130)

       
        this.button.position(displayWidth/2,160)
        this.button.mousePressed(()=>{
        this.button.hide()
        this.input.hide()
            
            playerCount++
            player.index = playerCount;
            player.name = this.input.value()
            

            console.log(playerCount)
            player.updatePlayerCount(playerCount)
            player.playerProfile()
        
        })
    }
}