(()=>{"use strict";class e{constructor(e){this.name=e}createGoblin(){const e=document.createElement("img");return e.className=this.name,e.id="goblin",e}}const t=new class{constructor(){this.field=document.getElementById("field"),this.cells=document.querySelectorAll(".cell"),this.missesCount=0,this.hitsCount=0,this.lastCell=null,this.TimerId=null}createEnemy(t){const s=new e(t);return this.enemy=s.createGoblin(),this.enemy}removeEnemy(){null!==this.lastCell&&null!==this.lastCell.firstElementChild&&this.lastCell.firstChild.remove()}showEnemy(t){const s=new e("goblin");this.enemy=s.createGoblin(),t.appendChild(this.enemy)}randomChangeEnemy(){const e=Math.floor(Math.random()*this.cells.length),t=this.cells[e];t!==this.lastCell&&(5===this.missesCount&&(this.statusGame="lose"),9===this.hitsCount&&(this.statusGame="win"),this.removeEnemy(),this.lastCell=t,this.showEnemy(this.lastCell))}newGame(){this.timerId=setInterval((()=>{this.playing()}),1e3),this.statusGame="play",this.missesCount=0,this.hitsCount=0,this.removeEnemy()}gameOver(){alert("No, Game Over!!!"),clearInterval(this.timerId),this.statusGame="end",this.timerId=null}youWin(){alert("You win!!!"),clearInterval(this.timerId),this.statusGame="end",this.timerId=null}playing(){"lose"!==this.statusGame?"win"!==this.statusGame?(0!==this.field.querySelectorAll(".goblin").length&&(this.missesCount+=1,this.displayCounter("miss-counter")),this.randomChangeEnemy()):this.youWin():this.gameOver()}displayCounter(e){const t=document.getElementById(e);"hit-counter"===e?t.textContent=this.hitsCount:"miss-counter"===e&&(t.textContent=this.missesCount)}},s=document.getElementById("new-game");s&&s.addEventListener("click",(()=>{null!=t.timerId&&clearInterval(t.timerId),t.missesCount=0,t.displayCounter("miss-counter"),t.hitsCount=0,t.displayCounter("hit-counter"),t.newGame()}));document.getElementById("field")&&document.getElementById("field").addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".cell").querySelector(".goblin")===t.enemy&&(t.removeEnemy(),t.hitsCount+=1,t.displayCounter("hit-counter"),t.missesCount-=1)}))})();