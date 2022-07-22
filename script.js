const options = {
    size: 12,
    walls: true,
    hearts: true,
    enemies: true,
    loot: true,
    ice: true,

};

createGrid(options)
v = getHeroPosition();
w = getWalls(v.x, v.y);
h = setHearts(3);
t = getTreasures(0);

function fight(){
    if(getCellContent(v.x,v.y)===MONSTER){
        if(getHearts()>getMonsterPower(v.x,v.y)){
            setHearts(getHearts()-getMonsterPower(v.x,v.y))
            killMonster(v.x,v.y)
        }else{
            alert("Vous êtes Death")
        }
    }
}

function tresor(){
    let v = getHeroPosition();
    if(getCellContent(v.x,v.y)===LOOT){
        loot(v.x,v.y);
        getTreasures();
        if (heroLoot == 7){
            alert("Vous avez gagné !");
        }
    }
}

function goUp(){
    let v = getHeroPosition();
    let w = getWalls(v.x, v.y);
    if (!w.north){
        setHeroPosition(v.x, v.y-1);
    }
    if(getCellContent(v.x,v.y)===HEART && getHearts() < 5){
        getHearts();
        setHearts(getHearts()+1);
    }
    fight();
    tresor();
    if(v =isFrozen(v.x,v.y-1)){
        goUp();
    }
}

function goDown(){
    v = getHeroPosition();
    w = getWalls(v.x, v.y);
    if (!w.south){
        setHeroPosition(v.x, v.y+1);
    }
    if(getCellContent(v.x,v.y)===HEART && getHearts() < 5){
        getHearts();
        setHearts(getHearts()+1);
    }
    fight();
    tresor();
    if(v =isFrozen(v.x,v.y+1)){
        goDown();
    }
}

function goRight(){
    v = getHeroPosition();
    w = getWalls(v.x, v.y);
    if (!w.east){
        setHeroPosition(v.x+1, v.y);
    }
    if(getCellContent(v.x,v.y)===HEART && getHearts() < 5){
        getHearts();
        setHearts(getHearts()+1);
    }
    fight();
    tresor();
    if(v =isFrozen(v.x+1,v.y)){
        goRight();
    }
}

function goLeft(){
    v = getHeroPosition();
    w = getWalls(v.x, v.y);
    if (!w.west){
        setHeroPosition(v.x-1, v.y);
    }
    if(getCellContent(v.x,v.y)===HEART && getHearts() < 5){
        getHearts();
        setHearts(getHearts()+1);
    }
    fight();
    tresor();
    if(v =isFrozen(v.x-1,v.y)){
        goLeft();
    }
}

document.querySelector('#go-up').onclick = goUp;
document.querySelector('#go-down').onclick = goDown;
document.querySelector('#go-right').onclick = goRight; 
document.querySelector('#go-left').onclick = goLeft;
