b=[c=""];for(d=e=f=g=i=0;500>i;i++)c+="  "+"⡆⡅⡃⠇"[b[i]=4*Math.random()|0];onkeyup=a=>d+=a.keyCode-39,0>d&&(d=0),3<d&&(d=3);setInterval('3<e&&!(e%30)?b[g++]==d?(h="⡇",f++):alert(f):h="⠁⠂⠄⡀"[d];history.replaceState(0,0,"#"+(h+c.slice(e++/10)))',30)