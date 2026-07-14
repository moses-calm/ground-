/* ===== Ground – app logic ===== */
const T = {
  he:{appName:"Ground",tagline:"Calm Anxiety Fast",homeHint:"לחצו על הכפתור כשמרגישים לחץ או חרדה",
    callHelp:"התקשרו לעזרה",safetyText:"האפליקציה אינה תחליף לטיפול מקצועי. אם החרדה מחמירה, יש מחשבות אובדניות או פאניקה מתמשכת — פנו לעזרה מיד.",
    levelQ:"כמה חזק זה עכשיו?",levelSub:"1 = רגוע, 10 = פאניקה",moodBefore:"איך אתם מרגישים כרגע?",
    continue:"המשך",back:"חזרה",stop:"עצור",next:"הבא",doneTitle:"כל הכבוד",doneSub:"סיימתם את התרגול",
    moodAfter:"איך אתם מרגישים עכשיו?",feedbackQ:"איך היה התרגול?",liked:"אהבתי 👍",notForMe:"לא בשבילי",finish:"סיום",
    recTitle:"המלצות בשבילכם",recSub:"מבוסס על מה שעזר לכם",histTitle:"ההיסטוריה שלכם",histMonth:"תרגולים החודש",
    moodTrend:"מגמת מצב רוח",chatTitle:"צ'אט עם המאמן",chatSoon:"האפשרות לשוחח איתי ישירות תיפתח בקרוב. בינתיים אתם יכולים לתרגל בכל רגע דרך כפתור Ground.",
    setTitle:"הגדרות",ageGroup:"קבוצת גיל",reminderTime:"שעת תזכורת יומית",sound:"צלילים",langLabel:"שפה",
    navHome:"בית",navRec:"המלצות",navHist:"היסטוריה",navChat:"צ'אט",navSet:"הגדרות",
    installTxt:"התקינו את Ground על הטלפון",installBtn:"התקן",
    reminderNote:"התראה תופיע רק כשהאפליקציה פתוחה בדפדפן (מגבלת ווב).",
    mEmergency:"מצב חירום",mRegulate:"ויסות",mReset:"איפוס",
    breatheIn:"שאיפה",breatheOut:"נשיפה",hold:"החזק",
    coldTitle:"מים קרים על הפנים",coldTxt:"התיזו מים קרים על הפנים או החזיקו משהו קר על הלחיים למשך 15–30 שניות. זה מרגיע את הגוף מהר.",
    sighTitle:"אנחת מחזור",sighTxt:"שאיפה עמוקה מהאף, ואז עוד שאיפה קצרה קטנה על גביה. נשיפה ארוכה ואיטית מהפה. חזרו 5 פעמים.",
    groundTitle:"5-4-3-2-1",gr5:"5 דברים שאתם רואים",gr4:"4 דברים שאתם שומעים",gr3:"3 דברים שאתם מרגישים במגע",gr2:"2 דברים שאתם מריחים",gr1:"1 דבר שאתם טועמים",
    reassure:"זה יעבור. אתם בטוחים עכשיו. הגוף שלכם יודע להירגע.",
    pacedTitle:"נשימה מווסתת",pacedTxt:"שאיפה 4 שניות, נשיפה 6–8 שניות. עקבו אחרי המעגל. 3 דקות.",
    pmrTitle:"הרפיית שרירים",pmrTxt:"כווצו כל קבוצת שרירים 5 שניות ואז שחררו 10 שניות: אגרוף, זרוע, כתפיים, פנים, רגליים.",
    imgTitle:"דמיון מודרך",imgTxt:"אני עוצם/ת עיניים ונושם/ת עמוק. אני מרגיש/ה איך הכתפיים שלי משתחררות. אני נמצא/ת עכשיו במקום שקט ובטוח, והגוף שלי נרגע לאט. אני כאן, ואני בסדר.",
    selfcTitle:"חמלה עצמית",selfcTxt:"אני עובר/ת רגע קשה, וזה בסדר. אני מתייחס/ת לעצמי בעדינות. מגיע לי רוגע, בדיוק כמו לכל אדם.",
    walkTitle:"תנועה קלה",walkTxt:"קומו והתהלכו 5 דקות. תנועה עדינה עוזרת לגוף לשחרר את המתח.",
    balloonTitle:"נשימת בלון",balloonTxt:"דמיינו בלון בבטן. שאיפה — הבלון מתנפח. נשיפה — הבלון מתרוקן לאט. חזרו 5 פעמים.",
    recPaced:"נשימה מווסתת",recPacedWhy:"מרגיע את מערכת העצבים תוך דקות",
    recSigh:"אנחת מחזור",recSighWhy:"הדרך המהירה ביותר להוריד מתח לפי מחקר",
    recGround:"תרגיל גראונדינג 5-4-3-2-1",recGroundWhy:"מחזיר את תשומת הלב להווה בזמן חרדה",
    recEmpty:"התחילו לתרגל וההמלצות יתאימו את עצמן אליכם."},

  en:{appName:"Ground",tagline:"Calm Anxiety Fast",homeHint:"Tap the button when you feel stress or anxiety",
    callHelp:"Call for help",safetyText:"This app is not a substitute for professional care. If anxiety worsens, you have suicidal thoughts, or ongoing panic — get help now.",
    levelQ:"How strong is it right now?",levelSub:"1 = calm, 10 = panic",moodBefore:"How do you feel right now?",
    continue:"Continue",back:"Back",stop:"Stop",next:"Next",doneTitle:"Well done",doneSub:"You finished the practice",
    moodAfter:"How do you feel now?",feedbackQ:"How was it?",liked:"Liked 👍",notForMe:"Not for me",finish:"Finish",
    recTitle:"For you",recSub:"Based on what helped you",histTitle:"Your history",histMonth:"practices this month",
    moodTrend:"Mood trend",chatTitle:"Chat with coach",chatSoon:"Direct chat with me is coming soon. For now you can practice anytime with the Ground button.",
    setTitle:"Settings",ageGroup:"Age group",reminderTime:"Daily reminder time",sound:"Sound",langLabel:"Language",
    navHome:"Home",navRec:"For you",navHist:"History",navChat:"Chat",navSet:"Settings",
    installTxt:"Install Ground on your phone",installBtn:"Install",
    reminderNote:"Reminder shows only while the app is open in the browser (web limit).",
    mEmergency:"Emergency",mRegulate:"Regulate",mReset:"Reset",
    breatheIn:"Breathe in",breatheOut:"Breathe out",hold:"Hold",
    coldTitle:"Cold water on your face",coldTxt:"Splash cold water on your face or hold something cold to your cheeks for 15–30 seconds. It calms the body fast.",
    sighTitle:"Cyclic sighing",sighTxt:"Deep breath in through the nose, then a short second sip on top. Long slow exhale through the mouth. Repeat 5 times.",
    groundTitle:"5-4-3-2-1",gr5:"5 things you see",gr4:"4 things you hear",gr3:"3 things you feel",gr2:"2 things you smell",gr1:"1 thing you taste",
    reassure:"This will pass. You are safe right now. Your body knows how to calm down.",
    pacedTitle:"Paced breathing",pacedTxt:"Inhale 4 seconds, exhale 6–8 seconds. Follow the circle. 3 minutes.",
    pmrTitle:"Muscle relaxation",pmrTxt:"Tense each muscle group 5 sec, release 10 sec: fist, arm, shoulders, face, legs.",
    imgTitle:"Guided imagery",imgTxt:"I close my eyes and breathe deeply. I feel my shoulders letting go. I am now in a quiet, safe place, and my body slowly calms. I am here, and I am okay.",
    selfcTitle:"Self-compassion",selfcTxt:"I'm going through a hard moment, and that's okay. I treat myself gently. I deserve calm, just like anyone else.",
    walkTitle:"Gentle movement",walkTxt:"Stand up and walk for 5 minutes. Gentle movement helps your body release tension.",
    balloonTitle:"Balloon breathing",balloonTxt:"Imagine a balloon in your belly. Breathe in — it inflates. Breathe out — it slowly empties. Repeat 5 times.",
    recPaced:"Paced breathing",recPacedWhy:"Calms the nervous system within minutes",
    recSigh:"Cyclic sighing",recSighWhy:"The fastest way to lower stress per research",
    recGround:"5-4-3-2-1 grounding",recGroundWhy:"Brings attention back to the present during anxiety",
    recEmpty:"Start practicing and the recommendations will adapt to you."},

  ar:{appName:"Ground",tagline:"Calm Anxiety Fast",homeHint:"اضغط الزر عندما تشعر بالتوتر أو القلق",
    callHelp:"اطلب المساعدة",safetyText:"هذا التطبيق ليس بديلاً عن الرعاية المهنية. إذا ازداد القلق أو راودتك أفكار انتحارية أو نوبة هلع مستمرة — اطلب المساعدة الآن.",
    levelQ:"ما مدى قوة ذلك الآن؟",levelSub:"1 = هادئ، 10 = ذعر",moodBefore:"كيف تشعر الآن؟",
    continue:"متابعة",back:"رجوع",stop:"إيقاف",next:"التالي",doneTitle:"أحسنت",doneSub:"أنهيت التمرين",
    moodAfter:"كيف تشعر الآن؟",feedbackQ:"كيف كان التمرين؟",liked:"أعجبني 👍",notForMe:"ليس لي",finish:"إنهاء",
    recTitle:"لك",recSub:"بناءً على ما ساعدك",histTitle:"سجلك",histMonth:"تمارين هذا الشهر",
    moodTrend:"اتجاه المزاج",chatTitle:"محادثة مع المدرب",chatSoon:"المحادثة المباشرة معي ستتوفر قريباً. حتى ذلك الحين يمكنك التمرن في أي وقت عبر زر Ground.",
    setTitle:"الإعدادات",ageGroup:"الفئة العمرية",reminderTime:"وقت التذكير اليومي",sound:"الصوت",langLabel:"اللغة",
    navHome:"الرئيسية",navRec:"لك",navHist:"السجل",navChat:"محادثة",navSet:"الإعدادات",
    installTxt:"ثبّت Ground على هاتفك",installBtn:"تثبيت",
    reminderNote:"يظهر التذكير فقط عندما يكون التطبيق مفتوحاً في المتصفح (قيود الويب).",
    mEmergency:"طوارئ",mRegulate:"تنظيم",mReset:"إعادة ضبط",
    breatheIn:"شهيق",breatheOut:"زفير",hold:"امسك",
    coldTitle:"ماء بارد على الوجه",coldTxt:"رش ماءً بارداً على وجهك أو ضع شيئاً بارداً على خديك لمدة 15–30 ثانية. يهدئ الجسم بسرعة.",
    sighTitle:"التنهد الدوري",sighTxt:"شهيق عميق من الأنف ثم شهيق قصير إضافي. زفير طويل بطيء من الفم. كرر 5 مرات.",
    groundTitle:"5-4-3-2-1",gr5:"5 أشياء تراها",gr4:"4 أشياء تسمعها",gr3:"3 أشياء تلمسها",gr2:"شيئان تشمهما",gr1:"شيء واحد تتذوقه",
    reassure:"سيمر هذا. أنت بأمان الآن. جسدك يعرف كيف يهدأ.",
    pacedTitle:"تنفّس منتظم",pacedTxt:"شهيق 4 ثوانٍ، زفير 6–8 ثوانٍ. اتبع الدائرة. 3 دقائق.",
    pmrTitle:"إرخاء العضلات",pmrTxt:"شدّ كل مجموعة عضلات 5 ثوانٍ ثم ارخِها 10 ثوانٍ: قبضة، ذراع، كتفان، وجه، ساقان.",
    imgTitle:"تخيّل موجّه",imgTxt:"أُغمض عينيّ وأتنفس بعمق. أشعر بكتفيّ يرتخيان. أنا الآن في مكان هادئ وآمن، وجسدي يهدأ ببطء. أنا هنا، وأنا بخير.",
    selfcTitle:"التعاطف مع الذات",selfcTxt:"أمرّ بلحظة صعبة، وهذا طبيعي. أعامل نفسي بلطف. أستحق الهدوء مثل أي شخص.",
    walkTitle:"حركة خفيفة",walkTxt:"قف وامشِ 5 دقائق. الحركة اللطيفة تساعد جسدك على تحرير التوتر.",
    balloonTitle:"تنفّس البالون",balloonTxt:"تخيّل بالوناً في بطنك. شهيق — ينتفخ. زفير — يفرغ ببطء. كرر 5 مرات.",
    recPaced:"تنفّس منتظم",recPacedWhy:"يهدئ الجهاز العصبي خلال دقائق",
    recSigh:"التنهد الدوري",recSighWhy:"أسرع طريقة لخفض التوتر وفق الأبحاث",
    recGround:"تأريض 5-4-3-2-1",recGroundWhy:"يعيد الانتباه إلى الحاضر أثناء القلق",
    recEmpty:"ابدأ بالتمرن وستتكيّف التوصيات معك."},

  es:{appName:"Ground",tagline:"Calm Anxiety Fast",homeHint:"Pulsa el botón cuando sientas estrés o ansiedad",
    callHelp:"Pedir ayuda",safetyText:"Esta app no sustituye la atención profesional. Si la ansiedad empeora, tienes pensamientos suicidas o pánico continuo — busca ayuda ahora.",
    levelQ:"¿Qué tan fuerte es ahora?",levelSub:"1 = calma, 10 = pánico",moodBefore:"¿Cómo te sientes ahora?",
    continue:"Continuar",back:"Atrás",stop:"Parar",next:"Siguiente",doneTitle:"Bien hecho",doneSub:"Terminaste la práctica",
    moodAfter:"¿Cómo te sientes ahora?",feedbackQ:"¿Cómo estuvo?",liked:"Me gustó 👍",notForMe:"No es para mí",finish:"Finalizar",
    recTitle:"Para ti",recSub:"Según lo que te ayudó",histTitle:"Tu historial",histMonth:"prácticas este mes",
    moodTrend:"Tendencia de ánimo",chatTitle:"Chat con el coach",chatSoon:"El chat directo conmigo llegará pronto. Por ahora puedes practicar cuando quieras con el botón Ground.",
    setTitle:"Ajustes",ageGroup:"Grupo de edad",reminderTime:"Hora del recordatorio diario",sound:"Sonido",langLabel:"Idioma",
    navHome:"Inicio",navRec:"Para ti",navHist:"Historial",navChat:"Chat",navSet:"Ajustes",
    installTxt:"Instala Ground en tu teléfono",installBtn:"Instalar",
    reminderNote:"El recordatorio solo aparece con la app abierta en el navegador (límite web).",
    mEmergency:"Emergencia",mRegulate:"Regular",mReset:"Reiniciar",
    breatheIn:"Inhala",breatheOut:"Exhala",hold:"Mantén",
    coldTitle:"Agua fría en la cara",coldTxt:"Échate agua fría en la cara o pon algo frío en las mejillas 15–30 segundos. Calma el cuerpo rápido.",
    sighTitle:"Suspiro cíclico",sighTxt:"Inhala profundo por la nariz y luego una inhalación corta más. Exhala largo y lento por la boca. Repite 5 veces.",
    groundTitle:"5-4-3-2-1",gr5:"5 cosas que ves",gr4:"4 cosas que oyes",gr3:"3 cosas que sientes",gr2:"2 cosas que hueles",gr1:"1 cosa que saboreas",
    reassure:"Esto pasará. Estás a salvo ahora. Tu cuerpo sabe calmarse.",
    pacedTitle:"Respiración pausada",pacedTxt:"Inhala 4 seg, exhala 6–8 seg. Sigue el círculo. 3 minutos.",
    pmrTitle:"Relajación muscular",pmrTxt:"Tensa cada grupo 5 seg y suelta 10 seg: puño, brazo, hombros, cara, piernas.",
    imgTitle:"Imaginación guiada",imgTxt:"Cierro los ojos y respiro profundo. Siento mis hombros soltarse. Ahora estoy en un lugar tranquilo y seguro, y mi cuerpo se calma poco a poco. Estoy aquí, y estoy bien.",
    selfcTitle:"Autocompasión",selfcTxt:"Estoy pasando un momento difícil, y está bien. Me trato con amabilidad. Merezco calma, como cualquier persona.",
    walkTitle:"Movimiento suave",walkTxt:"Levántate y camina 5 minutos. El movimiento suave ayuda a liberar la tensión.",
    balloonTitle:"Respiración globo",balloonTxt:"Imagina un globo en tu barriga. Inhala — se infla. Exhala — se vacía despacio. Repite 5 veces.",
    recPaced:"Respiración pausada",recPacedWhy:"Calma el sistema nervioso en minutos",
    recSigh:"Suspiro cíclico",recSighWhy:"La forma más rápida de bajar el estrés según la investigación",
    recGround:"Anclaje 5-4-3-2-1",recGroundWhy:"Devuelve la atención al presente durante la ansiedad",
    recEmpty:"Empieza a practicar y las recomendaciones se adaptarán a ti."},

  fr:{appName:"Ground",tagline:"Calm Anxiety Fast",homeHint:"Appuyez sur le bouton en cas de stress ou d'anxiété",
    callHelp:"Demander de l'aide",safetyText:"Cette app ne remplace pas un suivi professionnel. Si l'anxiété s'aggrave, en cas de pensées suicidaires ou de panique continue — demandez de l'aide maintenant.",
    levelQ:"C'est fort à quel point là ?",levelSub:"1 = calme, 10 = panique",moodBefore:"Comment vous sentez-vous ?",
    continue:"Continuer",back:"Retour",stop:"Arrêter",next:"Suivant",doneTitle:"Bravo",doneSub:"Vous avez terminé l'exercice",
    moodAfter:"Comment vous sentez-vous maintenant ?",feedbackQ:"C'était comment ?",liked:"J'ai aimé 👍",notForMe:"Pas pour moi",finish:"Terminer",
    recTitle:"Pour vous",recSub:"Selon ce qui vous a aidé",histTitle:"Votre historique",histMonth:"exercices ce mois-ci",
    moodTrend:"Tendance de l'humeur",chatTitle:"Chat avec le coach",chatSoon:"Le chat direct avec moi arrive bientôt. En attendant, pratiquez à tout moment avec le bouton Ground.",
    setTitle:"Réglages",ageGroup:"Tranche d'âge",reminderTime:"Heure du rappel quotidien",sound:"Son",langLabel:"Langue",
    navHome:"Accueil",navRec:"Pour vous",navHist:"Historique",navChat:"Chat",navSet:"Réglages",
    installTxt:"Installez Ground sur votre téléphone",installBtn:"Installer",
    reminderNote:"Le rappel n'apparaît que lorsque l'app est ouverte dans le navigateur (limite web).",
    mEmergency:"Urgence",mRegulate:"Réguler",mReset:"Réinitialiser",
    breatheIn:"Inspirez",breatheOut:"Expirez",hold:"Retenez",
    coldTitle:"Eau froide sur le visage",coldTxt:"Aspergez votre visage d'eau froide ou posez quelque chose de froid sur vos joues 15–30 secondes. Cela calme le corps vite.",
    sighTitle:"Soupir cyclique",sighTxt:"Inspiration profonde par le nez, puis une courte inspiration en plus. Longue expiration lente par la bouche. Répétez 5 fois.",
    groundTitle:"5-4-3-2-1",gr5:"5 choses que vous voyez",gr4:"4 choses que vous entendez",gr3:"3 choses que vous ressentez",gr2:"2 choses que vous sentez",gr1:"1 chose que vous goûtez",
    reassure:"Ça va passer. Vous êtes en sécurité maintenant. Votre corps sait se calmer.",
    pacedTitle:"Respiration rythmée",pacedTxt:"Inspirez 4 sec, expirez 6–8 sec. Suivez le cercle. 3 minutes.",
    pmrTitle:"Relaxation musculaire",pmrTxt:"Contractez chaque groupe 5 sec puis relâchez 10 sec : poing, bras, épaules, visage, jambes.",
    imgTitle:"Imagerie guidée",imgTxt:"Je ferme les yeux et je respire profondément. Je sens mes épaules se relâcher. Je suis maintenant dans un lieu calme et sûr, et mon corps se calme lentement. Je suis là, et je vais bien.",
    selfcTitle:"Auto-compassion",selfcTxt:"Je traverse un moment difficile, et c'est normal. Je me traite avec douceur. Je mérite le calme, comme tout le monde.",
    walkTitle:"Mouvement léger",walkTxt:"Levez-vous et marchez 5 minutes. Un mouvement doux aide le corps à relâcher la tension.",
    balloonTitle:"Respiration ballon",balloonTxt:"Imaginez un ballon dans votre ventre. Inspirez — il gonfle. Expirez — il se vide lentement. Répétez 5 fois.",
    recPaced:"Respiration rythmée",recPacedWhy:"Calme le système nerveux en quelques minutes",
    recSigh:"Soupir cyclique",recSighWhy:"Le moyen le plus rapide de réduire le stress selon la recherche",
    recGround:"Ancrage 5-4-3-2-1",recGroundWhy:"Ramène l'attention au présent pendant l'anxiété",
    recEmpty:"Commencez à pratiquer et les recommandations s'adapteront à vous."}
};

const HELP = {he:"1201",en:"988",es:"024",fr:"3114",ar:"937"};
const RTL = ["he","ar"];
const MOODS = ["😣","😟","😐","🙂","😌"];

let lang = localStorage.getItem("lang") || "he";
let db = JSON.parse(localStorage.getItem("db") || "{}");
db.sessions = db.sessions || [];
db.likes = db.likes || {};
db.age = db.age || "adult";
db.reminder = db.reminder || "";
db.sound = db.sound===undefined ? true : db.sound;

let cur = {level:0,moodBefore:2,moodAfter:2,module:"",steps:[],step:0,fbGiven:0};

/* ---- language + rendering ---- */
function tr(k){return (T[lang]&&T[lang][k])||T.en[k]||k;}
function setLang(l){lang=l;localStorage.setItem("lang",l);render();}
function saveDB(){localStorage.setItem("db",JSON.stringify(db));}

function render(){
  document.documentElement.lang=lang;
  const dir = RTL.includes(lang)?"rtl":"ltr";
  document.documentElement.dir=dir; document.body.dir=dir;
  document.querySelectorAll("[data-t]").forEach(el=>el.innerText=tr(el.dataset.t));
  // language selects
  ["langSel","langSel2"].forEach(id=>{
    const s=document.getElementById(id);if(!s)return;
    s.innerHTML="";const names={he:"עברית",en:"English",ar:"العربية",es:"Español",fr:"Français"};
    Object.keys(names).forEach(k=>{const o=document.createElement("option");o.value=k;o.text=names[k];if(k===lang)o.selected=true;s.appendChild(o);});
  });
  // age select
  const a=document.getElementById("ageSel");
  if(a){const ages={child:{he:"ילדים 3-11",en:"Children 3-11",ar:"أطفال 3-11",es:"Niños 3-11",fr:"Enfants 3-11"},
    teen:{he:"נוער 12-18",en:"Teens 12-18",ar:"مراهقون 12-18",es:"Adolescentes 12-18",fr:"Ados 12-18"},
    adult:{he:"מבוגרים 19-65",en:"Adults 19-65",ar:"بالغون 19-65",es:"Adultos 19-65",fr:"Adultes 19-65"},
    senior:{he:"מבוגרים 65+",en:"Seniors 65+",ar:"كبار السن 65+",es:"Mayores 65+",fr:"Seniors 65+"}};
    a.innerHTML="";Object.keys(ages).forEach(k=>{const o=document.createElement("option");o.value=k;o.text=ages[k][lang]||ages[k].en;if(k===db.age)o.selected=true;a.appendChild(o);});}
  const rt=document.getElementById("reminderTime"); if(rt)rt.value=db.reminder;
  const rn=document.getElementById("reminderNote"); if(rn)rn.innerText=tr("reminderNote");
  const st=document.getElementById("soundToggle"); if(st)st.checked=db.sound;
  buildMood("moodBefore",v=>cur.moodBefore=v,cur.moodBefore);
  buildMood("moodAfter",v=>cur.moodAfter=v,cur.moodAfter);
  updateHistory(); buildRec();
}

function buildMood(id,cb,selIdx){
  const c=document.getElementById(id);if(!c)return;c.innerHTML="";
  MOODS.forEach((m,i)=>{const b=document.createElement("button");b.innerText=m;
    if(i===selIdx)b.className="sel";
    b.onclick=()=>{cb(i);[...c.children].forEach(x=>x.className="");b.className="sel";};
    c.appendChild(b);});
}

/* ---- navigation ---- */
function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("s-"+id).classList.add("active");
  document.querySelectorAll(".nav button").forEach(b=>b.classList.remove("active"));
  const nav=document.getElementById("n-"+id); if(nav)nav.classList.add("active");
  window.scrollTo(0,0);
  if(id==="hist")updateHistory(); if(id==="rec")buildRec();
}

/* ---- flow ---- */
function openLevel(){beep();show('level');document.getElementById('levelSlider').value=5;document.getElementById('levelVal').innerText=5;}
function startModule(){
  cur.level=+document.getElementById('levelSlider').value;
  if(cur.level>=8)cur.module="emergency";
  else if(cur.level>=4)cur.module="regulate";
  else cur.module="reset";
  cur.steps=buildSteps(cur.module);
  cur.step=0;cur.fbGiven=0;
  show('module');renderStep();
}

function buildSteps(m){
  const child = db.age==="child";
  const senior = db.age==="senior";
  if(m==="emergency"){
    let s=[];
    if(!senior) s.push("cold");          // seniors skip intense cold
    s.push("sigh","grounding","reassure");
    return s;
  }
  if(m==="regulate"){
    return child ? ["balloon","imagery"] : ["paced","pmr","imagery"];
  }
  // reset
  return child ? ["balloon","selfc"] : ["sigh","selfc","walk"];
}

const STEP = {
  cold:{t:"coldTitle",x:"coldTxt",type:"text"},
  sigh:{t:"sighTitle",x:"sighTxt",type:"breath",cycles:5,inT:4000,outT:6000},
  grounding:{t:"groundTitle",type:"ground"},
  reassure:{t:"reassure",type:"reassure"},
  paced:{t:"pacedTitle",x:"pacedTxt",type:"breath",cycles:6,inT:4000,outT:7000},
  pmr:{t:"pmrTitle",x:"pmrTxt",type:"text"},
  imagery:{t:"imgTitle",x:"imgTxt",type:"imagery"},
  selfc:{t:"selfcTitle",x:"selfcTxt",type:"imagery"},
  walk:{t:"walkTitle",x:"walkTxt",type:"text"},
  balloon:{t:"balloonTitle",x:"balloonTxt",type:"breath",cycles:5,inT:4000,outT:5000}
};

function renderStep(){
  const key=cur.steps[cur.step]; const cfg=STEP[key];
  document.getElementById("modTitle").innerText=tr("m"+cur.module.charAt(0).toUpperCase()+cur.module.slice(1));
  document.getElementById("modStep").innerText=(cur.step+1)+" / "+cur.steps.length;
  const body=document.getElementById("modBody"); body.innerHTML="";
  const h=document.createElement("h2");h.innerText=tr(cfg.t);body.appendChild(h);

  if(cfg.type==="text"||cfg.type==="reassure"){
    const p=document.createElement("div");p.className="imagery";
    p.innerText=cfg.type==="reassure"?tr("reassure"):tr(cfg.x);body.appendChild(p);
  }
  if(cfg.type==="imagery"){
    const p=document.createElement("div");p.className="imagery";p.innerText=tr(cfg.x);body.appendChild(p);
  }
  if(cfg.type==="breath"){
    const stage=document.createElement("div");stage.className="breath-stage";
    stage.innerHTML=`<div class="breath-circle" id="bc">${tr("breatheIn")}</div>
      <div class="breath-txt" id="bt">${tr(cfg.x)}</div><div class="count" id="bcnt"></div>`;
    body.appendChild(stage);
    setTimeout(()=>runBreath(cfg),300);
  }
  if(cfg.type==="ground"){
    const items=[["gr5"],["gr4"],["gr3"],["gr2"],["gr1"]];
    items.forEach((it,i)=>{
      const d=document.createElement("div");d.className="check-item";
      d.innerHTML=`<div class="num">${5-i}</div><div>${tr(it[0])}</div>`;
      d.onclick=()=>{d.classList.toggle("done");beep();};body.appendChild(d);
    });
  }
  const last = cur.step===cur.steps.length-1;
  document.getElementById("modNext").innerText = last?tr("finish"):tr("next");
}

let breathTimer=null;
function runBreath(cfg){
  clearInterval(breathTimer);
  const bc=document.getElementById("bc"),bt=document.getElementById("bt"),bcnt=document.getElementById("bcnt");
  if(!bc)return;
  let c=0,phase=0; // 0 in,1 out
  function tick(){
    if(!document.getElementById("bc"))return;
    if(phase===0){bc.className="breath-circle in";bc.innerText=tr("breatheIn");bc.style.transitionDuration=(cfg.inT/1000)+"s";phase=1;setTimeout(tick,cfg.inT);}
    else{bc.className="breath-circle out";bc.innerText=tr("breatheOut");bc.style.transitionDuration=(cfg.outT/1000)+"s";phase=0;c++;bcnt.innerText=c+" / "+cfg.cycles;
      if(c>=cfg.cycles){bt.innerText="✓";return;}setTimeout(tick,cfg.outT);}
  }
  tick();
}

function nextStep(){
  beep();
  if(cur.step<cur.steps.length-1){cur.step++;renderStep();window.scrollTo(0,0);}
  else{show('done');window.scrollTo(0,0);}
}

function feedback(v){
  cur.fbGiven=v;
  db.likes[cur.module]=(db.likes[cur.module]||0)+v;
  saveDB();
}

function finishSession(){
  db.sessions.push({date:Date.now(),module:cur.module,before:cur.moodBefore,after:cur.moodAfter,fb:cur.fbGiven});
  saveDB();updateHistory();buildRec();
  cur={level:0,moodBefore:2,moodAfter:2,module:"",steps:[],step:0,fbGiven:0};
  show('home');
}

/* ---- history ---- */
function updateHistory(){
  const now=new Date(); const m=now.getMonth(),y=now.getFullYear();
  const monthly=db.sessions.filter(s=>{const d=new Date(s.date);return d.getMonth()===m&&d.getFullYear()===y;});
  const hc=document.getElementById("histCount"); if(hc)hc.innerText=monthly.length;
  const mt=document.getElementById("moodTrend");
  if(mt){const last=db.sessions.slice(-10);mt.innerText=last.length?last.map(s=>MOODS[s.after]).join(""):"—";}
}

/* ---- recommendations ---- */
function buildRec(){
  const list=document.getElementById("recList"); if(!list)return; list.innerHTML="";
  let recs=[["recSigh","recSighWhy"],["recPaced","recPacedWhy"],["recGround","recGroundWhy"]];
  // reorder by likes: put liked module's tools first
  const best=Object.keys(db.likes).sort((a,b)=>db.likes[b]-db.likes[a])[0];
  if(best==="regulate")recs=[["recPaced","recPacedWhy"],["recSigh","recSighWhy"],["recGround","recGroundWhy"]];
  if(best==="emergency")recs=[["recGround","recGroundWhy"],["recSigh","recSighWhy"],["recPaced","recPacedWhy"]];
  if(db.sessions.length===0){
    const e=document.createElement("div");e.className="rec-item";e.innerText=tr("recEmpty");list.appendChild(e);return;
  }
  recs.forEach(r=>{
    const d=document.createElement("div");d.className="rec-item";
    d.innerHTML=`<div style="font-weight:600">${tr(r[0])}</div><div class="why">${tr(r[1])}</div>`;
    list.appendChild(d);
  });
}

/* ---- settings ---- */
function saveAge(v){db.age=v;saveDB();}
function saveSound(v){db.sound=v;saveDB();}
function saveReminder(v){db.reminder=v;saveDB();if("Notification"in window&&Notification.permission!=="granted")Notification.requestPermission();scheduleReminder();}

let remTimer=null;
function scheduleReminder(){
  clearTimeout(remTimer);
  if(!db.reminder||!("Notification"in window))return;
  const [h,mi]=db.reminder.split(":").map(Number);
  const now=new Date();const next=new Date();next.setHours(h,mi,0,0);
  if(next<=now)next.setDate(next.getDate()+1);
  remTimer=setTimeout(()=>{
    if(Notification.permission==="granted")new Notification("Ground",{body:tr("homeHint")});
    scheduleReminder();
  },next-now);
}

/* ---- sound ---- */
let ac=null;
function beep(){
  if(!db.sound)return;
  try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();
    const o=ac.createOscillator(),g=ac.createGain();
    o.frequency.value=440;g.gain.value=0.04;o.connect(g);g.connect(ac.destination);
    o.start();g.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+0.15);o.stop(ac.currentTime+0.16);
  }catch(e){}
}

function callHelp(){window.location.href="tel:"+HELP[lang];}

/* ---- install (PWA) ---- */
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;document.getElementById("installBar").classList.add("show");});
function doInstall(){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;document.getElementById("installBar").classList.remove("show");}}

/* ---- boot ---- */
render();
scheduleReminder();
if("serviceWorker"in navigator){navigator.serviceWorker.register("sw.js").catch(()=>{});}
