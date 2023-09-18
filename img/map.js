// "use strict";


const end=[ "fosforo", "fosforo-3", "fosforo-4", "fosforo-5", "fosforo-6", "fosforo-7", "fosforo-8", "fosforo-9", "fosforo-10", "fosforo-11", "fosforo-12",  "fosforo-14" ];
let fs = 0;
const movement = (c) => {
  fs++;
  c.remove();
  if (fs === 3) 
    eval();
};
const eval = ()=>{
  let result = true;
  end.forEach((e)=>{
    if(document.getElementById(e) === null)
      result = false;
  });
  window.location.href = result ? 'winner.html' : 'loser.html';
}
const interactive = (lines) => {
  lines.forEach((line) => {
    line = document.getElementById(line);
    line?.addEventListener('click', () => movement(line));
	});
}
interactive([ "fosforo", "fosforo-2", "fosforo-3", "fosforo-4", "fosforo-5", "fosforo-6", "fosforo-7", "fosforo-8", "fosforo-9", "fosforo-10", "fosforo-11", "fosforo-12", "fosforo-13", "fosforo-14", "fosforo-15" ]);
