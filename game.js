
"use strict";

const QUESTIONS = [
  {id:1,q:"Por que começam a aparecer pelos nas axilas durante a puberdade?",a:["Porque os hormônios estimulam os folículos dos pelos","Porque o corpo sente mais frio","Porque a pele fica mais fina"],c:0},
  {id:2,q:"Por que aparecem pelos na região pubiana?",a:["Por causa das mudanças hormonais","Porque os músculos crescem","Porque a temperatura do corpo aumenta"],c:0},
  {id:3,q:"Todos os adolescentes começam a ter pelos na mesma idade?",a:["Não, cada corpo tem seu próprio ritmo","Sim, exatamente aos 13 anos","Apenas depois dos 18 anos"],c:0},
  {id:4,q:"Por que Jake pode começar a ter bigode e barba?",a:["Porque os hormônios estimulam os folículos do rosto","Porque o rosto fica mais quente","Porque o cabelo se espalha para o rosto"],c:0},
  {id:5,q:"Por que alguns adolescentes desenvolvem mais barba que outros?",a:["Genética e hormônios influenciam","Depende apenas da alimentação","Depende da quantidade de água ingerida"],c:0},
  {id:6,q:"Jake percebeu que está suando mais. Por que isso pode acontecer?",a:["As glândulas sudoríparas ficam mais ativas","Os músculos produzem suor","Os ossos eliminam água"],c:0},
  {id:7,q:"Qual é uma função importante do suor?",a:["Ajudar a controlar a temperatura corporal","Fazer os pelos crescerem","Fazer a voz ficar grave"],c:0},
  {id:8,q:"Por que o cheiro das axilas pode ficar mais forte na puberdade?",a:["Bactérias da pele agem sobre secreções produzidas pelas glândulas","O sangue passa a produzir cheiro","Os músculos eliminam substâncias com odor"],c:0},
  {id:9,q:"O suor recém-produzido sempre tem cheiro forte?",a:["Não, a ação de bactérias da pele participa bastante do odor","Sim, todo suor é malcheiroso","Apenas o suor produzido à noite"],c:0},
  {id:10,q:"Que glândulas passam a ter maior atividade nas axilas durante a puberdade?",a:["Glândulas sudoríparas apócrinas","Glândulas lacrimais","Glândulas salivares"],c:0},
  {id:11,q:"Por que usar roupas limpas e manter a higiene ajuda a diminuir o odor corporal?",a:["Porque reduz o acúmulo de suor, secreções e bactérias","Porque impede o corpo de transpirar","Porque fecha permanentemente as glândulas"],c:0},
  {id:12,q:"Por que a pele pode ficar mais oleosa durante a adolescência?",a:["As glândulas sebáceas ficam mais ativas","Os músculos começam a produzir óleo","A pele começa a armazenar água"],c:0},
  {id:13,q:"O aumento da oleosidade da pele pode favorecer:",a:["Acne","Fraturas","Cáries"],c:0},
  {id:14,q:"Ter acne significa que o adolescente não cuida da higiene?",a:["Não. Hormônios, genética e características da pele também influenciam","Sim, sempre","A acne acontece apenas por comer chocolate"],c:0},
  {id:15,q:"Por que o cabelo pode ficar mais oleoso na puberdade?",a:["Porque as glândulas sebáceas do couro cabeludo também podem ficar mais ativas","Porque o cabelo produz suor","Porque o cérebro libera gordura pelo cabelo"],c:0},
  {id:16,q:"Por que Jake pode crescer muitos centímetros em pouco tempo?",a:["Por causa do estirão de crescimento","Porque os ossos incham","Porque o corpo acumula água"],c:0},
  {id:17,q:"Durante o estirão, Jake pode perceber que:",a:["Roupas e tênis ficam pequenos rapidamente","Seus cabelos param de crescer","Sua altura diminui temporariamente"],c:0},
  {id:18,q:"Por que os ombros podem ficar mais largos durante a puberdade masculina?",a:["Pelo crescimento dos ossos e desenvolvimento muscular","Porque os braços ficam menores","Porque a pele se estica"],c:0},
  {id:19,q:"Por que a massa muscular pode aumentar na adolescência?",a:["Pelo crescimento corporal e pela ação hormonal","Porque gordura se transforma diretamente em músculo","Porque os ossos produzem músculos"],c:0},
  {id:20,q:"Jake percebeu que sua voz começou a mudar. Qual estrutura está se desenvolvendo?",a:["Laringe","Estômago","Rim"],c:0},
  {id:21,q:"Onde fica a laringe?",a:["No pescoço, entre a faringe e a traqueia","Dentro do coração","Atrás do estômago"],c:0},
  {id:22,q:"O que acontece com as pregas vocais durante a puberdade masculina?",a:["Elas aumentam em comprimento e espessura","Elas desaparecem","Elas se transformam em ossos"],c:0},
  {id:23,q:"Por que a voz de muitos meninos fica mais grave?",a:["Porque a laringe cresce e as pregas vocais se modificam","Porque os pulmões ficam menores","Porque a língua fica maior"],c:0},
  {id:24,q:"Por que a voz pode “falhar” ou variar durante essa fase?",a:["Porque a laringe e as pregas vocais estão passando por mudanças rápidas","Porque o adolescente perdeu a capacidade de falar","Porque o coração está mudando de tamanho"],c:0},
  {id:25,q:"O chamado “pomo de Adão” faz parte de qual estrutura?",a:["Laringe","Mandíbula","Língua"],c:0},
  {id:26,q:"Jake é surdo. A laringe dele também cresce durante a puberdade?",a:["Sim. A surdez não impede o desenvolvimento da laringe","Não, porque ele não escuta a própria voz","Somente se usar aparelho auditivo"],c:0},
  {id:27,q:"Um adolescente surdo também apresenta mudanças nas pregas vocais durante a puberdade?",a:["Sim, essas mudanças anatômicas também podem acontecer","Não, porque as pregas vocais dependem da audição","Somente depois dos 18 anos"],c:0},
  {id:28,q:"Se Jake não percebe a mudança da voz pelo som, como ele pode compreender essa transformação?",a:["Com Libras, imagens, animações e percepção das vibrações","Ele não consegue perceber nenhuma mudança","Somente através de uma gravação de áudio"],c:0},
  {id:29,q:"Jake pode colocar suavemente a mão no pescoço e perceber vibrações quando produz sons?",a:["Sim","Não, vibrações só podem ser percebidas pelos ouvidos","Apenas durante exercícios físicos"],c:0},
  {id:30,q:"Qual é a principal mensagem sobre a puberdade de Jake?",a:["Cada adolescente muda em seu próprio ritmo, e todas essas informações devem ser acessíveis também aos adolescentes surdos","Todos passam pelas mudanças exatamente na mesma idade","A puberdade acontece apenas quando todas as mudanças surgem juntas"],c:0},
];

const STAGES = [
  {
    title:"Fase 1 — O corpo está mudando",
    subtitle:"Crescimento e ritmo individual",
    bg:"assets/backgrounds/fase1.png",
    questions:[3,16,17,18,19],
    obstacles:["backpack","ball","stool","box"],
    reward:"star"
  },
  {
    title:"Fase 2 — Pelos, pele e oleosidade",
    subtitle:"Folículos, glândulas sebáceas e acne",
    bg:"assets/backgrounds/fase2.png",
    questions:[1,2,4,5,12,13,14,15],
    obstacles:["dinosaur","books","skateboard","shoes"],
    reward:"gem"
  },
  {
    title:"Fase 3 — Suor e higiene",
    subtitle:"Glândulas sudoríparas e odor corporal",
    bg:"assets/backgrounds/fase3.png",
    questions:[6,7,8,9,10,11],
    obstacles:["clothes","basket","shoes","chair"],
    reward:"medal"
  },
  {
    title:"Fase 4 — Laringe e mudança da voz",
    subtitle:"Pregas vocais, voz e pomo de Adão",
    bg:"assets/backgrounds/fase4.png",
    questions:[20,21,22,23,24,25],
    obstacles:["ball","stool","backpack","lamp"],
    reward:"trophy"
  },
  {
    title:"Fase 5 — Puberdade acessível para todos",
    subtitle:"Surdez, vibração, imagens e inclusão",
    bg:"assets/backgrounds/fase5.png",
    questions:[26,27,28,29,30],
    obstacles:["box","clothes","skateboard","backpack","ball"],
    reward:"chest"
  }
];

const ASSET_PATHS = [
  ...STAGES.map(s=>s.bg),
  ...Array.from({length:8},(_,i)=>`assets/jake/walk_${i}.png`),
  "assets/jake/jump.png",
  ...["backpack","box","clothes","basket","shoes","skateboard","ball","books","chair","stool","dinosaur","lamp"].map(x=>`assets/obstacles/${x}.png`),
  ...["coin","coin_stack","star","gem","medal","trophy","chest","heart","potion","crown_coin"].map(x=>`assets/rewards/${x}.png`)
];

const $ = sel => document.querySelector(sel);
const canvas = $("#gameCanvas"), ctx = canvas.getContext("2d");
const W=canvas.width, H=canvas.height;
const FLOOR_Y=710;
const PLAYER_W=104, PLAYER_H=206;
const RUN_SPEED=480;
const JUMP_SPEED=930;
const GRAVITY=2100;

const images = {};
let ready=false, running=false, paused=true, lastTime=0;
let stageIndex=0, lives=3, coins=0, phaseStartCoins=0;
let completedQuestions=new Set(), triggeredQuestion=null;
let pickedCoins=new Set(), heartPicked=false;
let walkFrame=0, walkClock=0, coinClock=0;
let bigText=false, installPrompt=null;
let unlockedStage=0;
let completedStages=new Set();

const player = {x:62,y:FLOOR_Y-PLAYER_H,vx:0,vy:0,onGround:true,dir:1,standingOn:null};
const keys={left:false,right:false,jump:false};

const SAVE_KEY="jake_puberdade_save_v2";
function loadSave(){
  try{
    const s=JSON.parse(localStorage.getItem(SAVE_KEY)||"null");
    if(!s) return null;
    return {
      unlockedStage: Math.min(Math.max(0,s.unlockedStage||0),STAGES.length-1),
      coins: Math.max(0,s.coins||0),
      completedStages: new Set(Array.isArray(s.completedStages)?s.completedStages:[])
    };
  }catch(e){return null}
}
function writeSave(){
  localStorage.setItem(SAVE_KEY,JSON.stringify({
    unlockedStage, coins, completedStages:[...completedStages]
  }));
}
function clearSave(){
  localStorage.removeItem(SAVE_KEY);
  unlockedStage=0; completedStages=new Set(); coins=0;
}

function img(src){return images[src]}
function preload(){
  return Promise.all(ASSET_PATHS.map(src=>new Promise(res=>{
    const im=new Image();im.onload=im.onerror=res;im.src=src;images[src]=im;
  }))).then(()=>{ready=true});
}

class AudioEngine{
  constructor(){this.ctx=null;this.enabled=true;this.musicTimer=null;this.step=0}
  init(){
    if(!this.ctx) this.ctx=new (window.AudioContext||window.webkitAudioContext)();
    if(this.ctx.state==="suspended") this.ctx.resume();
    this.startMusic();
  }
  tone(freq=440,dur=.1,type="sine",vol=.035,delay=0){
    if(!this.enabled||!this.ctx)return;
    const t=this.ctx.currentTime+delay,o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.connect(g);g.connect(this.ctx.destination);o.start(t);o.stop(t+dur+.02)
  }
  sfx(name){
    if(name==="jump"){this.tone(330,.07,"square",.024);this.tone(480,.06,"square",.018,.05)}
    if(name==="coin"){this.tone(760,.06,"sine",.05);this.tone(1080,.08,"sine",.035,.05)}
    if(name==="correct"){this.tone(520,.09,"triangle",.045);this.tone(780,.13,"triangle",.04,.08)}
    if(name==="wrong"){this.tone(180,.16,"sawtooth",.035);this.tone(120,.18,"sawtooth",.026,.08)}
    if(name==="hit"){this.tone(95,.15,"square",.045);this.tone(70,.12,"square",.025,.06)}
    if(name==="win"){[523,659,784,1047].forEach((f,i)=>this.tone(f,.22,"triangle",.04,i*.09))}
  }
  startMusic(){
    if(this.musicTimer||!this.enabled||!this.ctx)return;
    const seq=[220,277,330,277,247,311,370,311];
    this.musicTimer=setInterval(()=>{if(!paused&&this.enabled)this.tone(seq[this.step++%seq.length],.22,"sine",.011)},470)
  }
  stopMusic(){if(this.musicTimer){clearInterval(this.musicTimer);this.musicTimer=null}}
  toggle(){
    this.enabled=!this.enabled;
    if(this.enabled){this.init();this.startMusic()}else this.stopMusic();
    $("#soundBtn").textContent=this.enabled?"🔊":"🔇";
    showToast(this.enabled?"Som ligado":"Som desligado");
  }
}
const audio=new AudioEngine();

function stage(){return STAGES[stageIndex]}
function qById(id){return QUESTIONS.find(q=>q.id===id)}

function loadProgress(){
  const s=loadSave();
  if(s){unlockedStage=s.unlockedStage;coins=s.coins;completedStages=s.completedStages}
}
function renderPhaseCards(){
  const wrap=$("#phaseCards");wrap.innerHTML="";
  STAGES.forEach((s,i)=>{
    const locked=i>unlockedStage,done=completedStages.has(i);
    const card=document.createElement("article");
    card.className=`phase-card ${locked?"locked":""} ${done?"completed":""}`;
    card.innerHTML=`
      <div class="phase-card-bg" style="background-image:url('${s.bg}')"></div>
      <div class="lock-badge">${done?"✓ CONCLUÍDA":locked?"🔒 BLOQUEADA":"▶ DISPONÍVEL"}</div>
      <div class="phase-card-content">
        <span class="phase-card-num">${i+1}</span>
        <h3>${s.title.replace(/^Fase \d+ — /,"")}</h3>
        <p>${s.subtitle}</p>
        <div class="phase-card-meta">
          <span>❓ ${s.questions.length} perguntas</span>
          <span>🏆 prêmio</span>
        </div>
      </div>`;
    if(!locked) card.onclick=()=>startStage(i);
    wrap.appendChild(card);
  });
}

function showPhaseScreen(){
  paused=true;running=false;
  $("#startScreen").hidden=true;$("#gameScreen").hidden=true;$("#phaseScreen").hidden=false;
  loadProgress();renderPhaseCards();
}
function startStage(i){
  stageIndex=i;lives=3;phaseStartCoins=coins;
  $("#phaseScreen").hidden=true;$("#gameScreen").hidden=false;
  audio.init();setupStage();
}
function home(){
  paused=true;running=false;
  $("#gameScreen").hidden=true;$("#phaseScreen").hidden=true;$("#startScreen").hidden=false;
  const s=loadSave();$("#continueBtn").hidden=!s;
}
function continueSaved(){showPhaseScreen()}

function stagePlatforms(){
  // solid platforms, varied per stage; every platform is reachable with the higher jump.
  const layouts=[
    [{x:330,y:560,w:190,h:24},{x:740,y:515,w:190,h:24},{x:1150,y:560,w:170,h:24}],
    [{x:290,y:545,w:180,h:24},{x:625,y:485,w:190,h:24},{x:1010,y:535,w:190,h:24},{x:1320,y:470,w:150,h:24}],
    [{x:350,y:525,w:205,h:24},{x:760,y:470,w:180,h:24},{x:1160,y:520,w:180,h:24}],
    [{x:270,y:550,w:170,h:24},{x:590,y:475,w:190,h:24},{x:930,y:420,w:190,h:24},{x:1270,y:500,w:170,h:24}],
    [{x:250,y:540,w:180,h:24},{x:575,y:470,w:180,h:24},{x:900,y:410,w:180,h:24},{x:1215,y:475,w:180,h:24}]
  ];
  return layouts[stageIndex];
}

function obstacleInstances(){
  const names=stage().obstacles;
  const xs=[440,690,980,1240,1430,1500];
  const sizes=[115,100,110,105,96,100];
  return names.map((name,i)=>{
    let h=sizes[i%sizes.length],w=h;
    if(name==="skateboard"){w=155;h=72}
    if(name==="books"){w=105;h=98}
    if(name==="clothes"){w=116;h=72}
    if(name==="basket"){w=108;h=100}
    if(name==="lamp"){w=72;h=150}
    if(name==="chair"){w=105;h=136}
    if(name==="backpack"){w=92;h=118}
    if(name==="box"){w=116;h=94}
    if(name==="ball"){w=86;h=86}
    return {name,x:xs[i],y:FLOOR_Y-h,w,h};
  });
}
function coinInstances(){
  const plat=stagePlatforms();
  const list=[
    {x:210,y:FLOOR_Y-190,w:58,h:58,id:0},
    {x:815,y:FLOOR_Y-235,w:58,h:58,id:1},
    {x:1360,y:FLOOR_Y-210,w:58,h:58,id:2},
  ];
  plat.slice(0,2).forEach((p,i)=>list.push({x:p.x+p.w/2-28,y:p.y-75,w:58,h:58,id:3+i}));
  return list;
}
function checkpointPositions(){
  const n=stage().questions.length,start=250,end=1390;
  return Array.from({length:n},(_,i)=>start+(end-start)*(i/(Math.max(1,n-1))));
}

function resetPhase(){
  completedQuestions=new Set();triggeredQuestion=null;pickedCoins=new Set();heartPicked=false;
  coins=phaseStartCoins;
  player.x=62;player.y=FLOOR_Y-PLAYER_H;player.vx=0;player.vy=0;player.onGround=true;player.dir=1;player.standingOn=null;
  updateHUD();showPhaseBanner();
}
function setupStage(){
  phaseStartCoins=coins;resetPhase();running=true;paused=false;
}
function updateHUD(){
  $("#livesText").textContent=lives;$("#coinsText").textContent=coins;
  $("#stageText").textContent=`Fase ${stageIndex+1}/${STAGES.length}`;
  $("#progressText").textContent=`${completedQuestions.size}/${stage().questions.length}`;
}
function showPhaseBanner(){
  const b=$("#phaseBanner");
  b.innerHTML=`${stage().title}<small style="display:block;font-weight:650;color:#c8d4ea;margin-top:2px">${stage().subtitle}</small>`;
  b.classList.add("show");setTimeout(()=>b.classList.remove("show"),2300);
}
function showToast(msg,ms=1200){
  const t=$("#toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove("show"),ms)
}
function flash(type){
  const el=$("#visualFeedback");el.className=`visual-feedback ${type}`;
  setTimeout(()=>el.className="visual-feedback",520)
}
function showInfo(title,text,imageSrc,cb,buttonText="Continuar"){
  $("#infoTitle").textContent=title;$("#infoText").textContent=text;$("#infoImage").src=imageSrc;
  $("#infoBtn").textContent=buttonText;$("#infoModal").hidden=false;
  $("#infoBtn").onclick=()=>{$("#infoModal").hidden=true;cb&&cb()}
}
function fail(reason){
  if(paused)return;
  paused=true;lives--;audio.sfx(reason==="obstacle"?"hit":"wrong");flash("bad");updateHUD();
  const title=lives>0?"Vida perdida":"Sem vidas!";
  const msg=lives>0
    ? `${reason==="obstacle"?"Jake bateu em um obstáculo.":"A resposta não estava correta."} Você perdeu uma vida e esta fase volta ao início.`
    : `Jake ficou sem vidas. Ele recebe 3 novas vidas e tenta esta fase novamente desde o início.`;
  showInfo(title,msg,"assets/rewards/heart.png",()=>{
    if(lives<=0)lives=3;
    resetPhase();paused=false;
  },"Recomeçar fase");
}

function overlap(a,b,pad=0){
  return a.x+pad < b.x+b.w && a.x+a.w-pad > b.x && a.y+pad < b.y+b.h && a.y+a.h-pad > b.y;
}
function playerRect(){return{x:player.x+18,y:player.y+20,w:PLAYER_W-36,h:PLAYER_H-22}}

function shuffleAnswers(q){
  const arr=q.a.map((text,i)=>({text,correct:i===q.c}));
  for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}
  return arr;
}
function askQuestion(idx){
  if(paused)return;
  paused=true;triggeredQuestion=idx;
  const q=qById(stage().questions[idx]);
  $("#questionTitle").textContent=q.q;
  $("#questionCounter").textContent=`${completedQuestions.size+1} de ${stage().questions.length}`;
  $("#questionTag").textContent=stage().subtitle.toUpperCase();
  const box=$("#answerButtons");box.innerHTML="";
  const letters=["A","B","C"];
  shuffleAnswers(q).forEach((opt,i)=>{
    const b=document.createElement("button");b.className="answer-btn";
    b.innerHTML=`<strong>${letters[i]})</strong> ${opt.text}`;
    b.onclick=()=>answerQuestion(opt.correct,idx);box.appendChild(b);
  });
  $("#questionModal").hidden=false;
  setTimeout(()=>box.querySelector("button")?.focus(),40);
}
function answerQuestion(correct,idx){
  $("#questionModal").hidden=true;
  if(correct){
    completedQuestions.add(idx);coins+=10;audio.sfx("correct");flash("good");showToast("Correto! +10 moedas 🪙",1500);
    updateHUD();player.x+=24;paused=false;
  }else fail("answer");
}

function completeStage(){
  if(paused)return;
  paused=true;audio.sfx("win");flash("good");
  completedStages.add(stageIndex);
  unlockedStage=Math.max(unlockedStage,Math.min(stageIndex+1,STAGES.length-1));
  writeSave();
  const rewardPath=`assets/rewards/${stage().reward}.png`;
  const rewardNames={star:"Estrela do Crescimento",gem:"Cristal do Conhecimento",medal:"Medalha do Autocuidado",trophy:"Troféu da Voz",chest:"Baú da Puberdade"};
  const final=stageIndex===STAGES.length-1;
  showInfo(final?"Missão concluída! 🎉":"Fase concluída!",
    final
      ? `Jake completou todas as fases. Total: ${coins} moedas. A puberdade acontece em ritmos diferentes e informação acessível faz parte do cuidado.`
      : `Você acertou todas as perguntas e conquistou: ${rewardNames[stage().reward]}. A próxima fase foi desbloqueada.`,
    rewardPath,
    ()=>showPhaseScreen(),
    final?"Ver fases":"Escolher próxima fase"
  );
}

function resolvePlatforms(prevY){
  player.onGround=false;player.standingOn=null;
  const feetPrev=prevY+PLAYER_H,feetNow=player.y+PLAYER_H;
  for(const p of stagePlatforms()){
    const horizontal=player.x+PLAYER_W-18>p.x && player.x+18<p.x+p.w;
    if(horizontal && player.vy>=0 && feetPrev<=p.y+10 && feetNow>=p.y){
      player.y=p.y-PLAYER_H;player.vy=0;player.onGround=true;player.standingOn=p;return;
    }
  }
  if(player.y>=FLOOR_Y-PLAYER_H){
    player.y=FLOOR_Y-PLAYER_H;player.vy=0;player.onGround=true;
  }
}

function update(dt){
  if(paused||!running)return;
  coinClock+=dt;
  let dir=0;if(keys.left)dir--;if(keys.right)dir++;
  player.vx=dir*RUN_SPEED;if(dir)player.dir=dir;
  if(keys.jump&&player.onGround){
    player.vy=-JUMP_SPEED;player.onGround=false;audio.sfx("jump");keys.jump=false
  }
  const prevY=player.y;
  player.vy+=GRAVITY*dt;player.x+=player.vx*dt;player.y+=player.vy*dt;
  player.x=Math.max(0,Math.min(W-PLAYER_W,player.x));
  resolvePlatforms(prevY);

  if(dir&&player.onGround){walkClock+=dt;if(walkClock>.065){walkClock=0;walkFrame=(walkFrame+1)%8}}
  else if(player.onGround)walkFrame=0;

  const pr=playerRect();
  for(const ob of obstacleInstances()){
    if(overlap(pr,ob,12)){fail("obstacle");return}
  }
  for(const c of coinInstances()){
    if(!pickedCoins.has(c.id)&&overlap(pr,c,5)){
      pickedCoins.add(c.id);coins++;audio.sfx("coin");flash("coin");showToast("+1 moeda");updateHUD();
    }
  }
  if(stageIndex===4&&!heartPicked){
    const hb={x:1090,y:FLOOR_Y-230,w:66,h:66};
    if(overlap(pr,hb,5)){heartPicked=true;lives=Math.min(5,lives+1);audio.sfx("correct");showToast("+1 vida ❤️");updateHUD()}
  }
  const cps=checkpointPositions();
  for(let i=0;i<cps.length;i++){
    if(!completedQuestions.has(i)&&player.x+PLAYER_W/2>=cps[i]-8){askQuestion(i);return}
  }
  if(player.x>W-125&&completedQuestions.size===stage().questions.length)completeStage();
}

function roundedRect(x,y,w,h,r,fill,stroke){
  ctx.beginPath();
  ctx.roundRect(x,y,w,h,r);
  if(fill){ctx.fillStyle=fill;ctx.fill()}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=3;ctx.stroke()}
}
function draw(){
  const bg=img(stage().bg);
  if(bg&&bg.complete)ctx.drawImage(bg,0,0,W,H);else{ctx.fillStyle="#14213d";ctx.fillRect(0,0,W,H)}
  const grad=ctx.createLinearGradient(0,500,0,H);grad.addColorStop(0,"rgba(0,0,0,0)");grad.addColorStop(1,"rgba(0,0,0,.23)");
  ctx.fillStyle=grad;ctx.fillRect(0,480,W,H-480);

  // Real solid platforms
  stagePlatforms().forEach((p,i)=>{
    ctx.save();
    ctx.shadowColor="rgba(0,0,0,.35)";ctx.shadowBlur=14;ctx.shadowOffsetY=7;
    roundedRect(p.x,p.y,p.w,p.h,12,"rgba(35,54,83,.92)","rgba(255,209,102,.7)");
    ctx.shadowColor="transparent";
    ctx.fillStyle="rgba(255,255,255,.16)";ctx.fillRect(p.x+12,p.y+4,p.w-24,3);
    ctx.restore();
  });

  // Question checkpoints
  checkpointPositions().forEach((x,i)=>{
    const done=completedQuestions.has(i);
    ctx.save();ctx.globalAlpha=done?.42:.94;
    ctx.beginPath();ctx.arc(x,FLOOR_Y-84,26,0,Math.PI*2);
    ctx.fillStyle=done?"#7cf29a":"#55d6ff";ctx.fill();
    ctx.strokeStyle="rgba(255,255,255,.92)";ctx.lineWidth=4;ctx.stroke();
    ctx.fillStyle="#07101f";ctx.font="900 25px system-ui";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(done?"✓":"?",x,FLOOR_Y-84);
    ctx.restore();
  });

  // Animated coins (bounce + slight horizontal squish)
  const ci=img("assets/rewards/coin.png");
  coinInstances().forEach((c,idx)=>{
    if(pickedCoins.has(c.id)||!ci)return;
    const bounce=Math.sin(coinClock*4+idx)*8;
    const squash=.72+.28*Math.abs(Math.cos(coinClock*3.2+idx));
    ctx.save();
    ctx.translate(c.x+c.w/2,c.y+c.h/2+bounce);
    ctx.scale(squash,1);
    ctx.drawImage(ci,-c.w/2,-c.h/2,c.w,c.h);
    ctx.restore();
  });
  if(stageIndex===4&&!heartPicked){
    const hi=img("assets/rewards/heart.png");
    if(hi){
      const pulse=1+.08*Math.sin(coinClock*5);
      ctx.save();ctx.translate(1123,FLOOR_Y-197);ctx.scale(pulse,pulse);ctx.drawImage(hi,-33,-33,66,66);ctx.restore();
    }
  }

  obstacleInstances().forEach(ob=>{
    const oi=img(`assets/obstacles/${ob.name}.png`);if(oi)ctx.drawImage(oi,ob.x,ob.y,ob.w,ob.h)
  });

  // Exit portal
  ctx.save();ctx.globalAlpha=.9;ctx.strokeStyle="#ffd166";ctx.lineWidth=8;ctx.shadowColor="#ffd166";ctx.shadowBlur=18;
  ctx.beginPath();ctx.arc(W-64,FLOOR_Y-75,50,Math.PI,0);ctx.lineTo(W-14,FLOOR_Y);ctx.moveTo(W-114,FLOOR_Y-75);ctx.lineTo(W-114,FLOOR_Y);ctx.stroke();
  ctx.shadowBlur=0;ctx.fillStyle="#ffd166";ctx.font="900 18px system-ui";ctx.textAlign="center";ctx.fillText("SAÍDA",W-64,FLOOR_Y-101);ctx.restore();

  // Jake larger
  const src=(!player.onGround)?"assets/jake/jump.png":`assets/jake/walk_${walkFrame}.png`,pi=img(src);
  if(pi){
    ctx.save();
    ctx.shadowColor="rgba(0,0,0,.35)";ctx.shadowBlur=12;ctx.shadowOffsetY=8;
    if(player.dir<0){ctx.translate(player.x+PLAYER_W,0);ctx.scale(-1,1);ctx.drawImage(pi,0,player.y,PLAYER_W,PLAYER_H)}
    else ctx.drawImage(pi,player.x,player.y,PLAYER_W,PLAYER_H);
    ctx.restore();
  }
}

function loop(ts){
  const dt=Math.min(.033,(ts-lastTime)/1000||0);lastTime=ts;update(dt);draw();requestAnimationFrame(loop)
}
function setKey(k,v){
  if(k==="ArrowLeft"||k==="a"||k==="A")keys.left=v;
  if(k==="ArrowRight"||k==="d"||k==="D")keys.right=v;
  if(k==="ArrowUp"||k==="w"||k==="W"||k===" "){if(v)keys.jump=true}
}
window.addEventListener("keydown",e=>{
  if(["ArrowLeft","ArrowRight","ArrowUp"," ","a","A","d","D","w","W"].includes(e.key))e.preventDefault();
  setKey(e.key,true)
});
window.addEventListener("keyup",e=>setKey(e.key,false));
function holdButton(el,key){
  const on=e=>{e.preventDefault();keys[key]=true;if(key==="jump")setTimeout(()=>keys.jump=false,70)};
  const off=e=>{e.preventDefault();if(key!=="jump")keys[key]=false};
  ["pointerdown","touchstart"].forEach(ev=>el.addEventListener(ev,on,{passive:false}));
  ["pointerup","pointercancel","pointerleave","touchend"].forEach(ev=>el.addEventListener(ev,off,{passive:false}));
}
holdButton($("#leftBtn"),"left");holdButton($("#rightBtn"),"right");holdButton($("#jumpBtn"),"jump");

$("#startBtn").onclick=showPhaseScreen;
$("#continueBtn").onclick=showPhaseScreen;
$("#phaseBackBtn").onclick=home;
$("#homeBtn").onclick=showPhaseScreen;
$("#soundBtn").onclick=()=>audio.toggle();
$("#textBtn").onclick=()=>{bigText=!bigText;document.body.classList.toggle("big-text",bigText);showToast(bigText?"Texto ampliado":"Texto normal")};

window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{
  if(!installPrompt){showToast("Use “Adicionar à tela inicial” no menu do navegador.");return}
  installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("#installBtn").hidden=true;
};

function netBadge(){$("#offlineBadge").textContent=navigator.onLine?"PRONTO OFFLINE ✓":"OFFLINE ✓"}
window.addEventListener("online",netBadge);window.addEventListener("offline",netBadge);netBadge();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))
}

preload().then(()=>{
  loadProgress();
  $("#continueBtn").hidden=!loadSave();
  renderPhaseCards();
  requestAnimationFrame(loop);
});
