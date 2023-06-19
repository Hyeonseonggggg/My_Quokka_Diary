let todayDay = 1; // 날짜표기
let state; //현재 상태
let images = [];
let width;
let height; //캔버스 크기

let scriptF;
let nameF; 
let letterF;//폰트

let cam; //카메라

let resetOn = false; //리셋 팝업 표시 유무
let sounds; //리셋시 전체 음소거를 위해 사용

let curFrame; //fade를 위해 사용

//start
let startBgm;

//intro
let intro_v_now = false;
let introBgm;
let pillBgm;
let waterBgm;
let paperBgm;
let birdBgm;
let v2_1;
let v2_2;
let v2_3;

let images16_Visible = true;
let images17_Visible = true;
let images18_Visible = true;
let images19_Visible = true;
let images110_Visible = false;
let show_pillimage = false;
let show_waterimage = false;
let show_paperimage = false;
let imageTimer = 0;
let imageInterval = 2000; // 이미지 변경 간격(2초)

//손 움직이기 코드
let d;
let r;

//마이크 코드
let speechRec;
let continuous = false;
let interim = false;

let speech = "";
let speechReady = false;

let h = 500; // 세로 길이 변수 설정
let hIncrease = false; // 증가 플래그 변수 설정

//home
let homeBgm;
let ghost;
let doorOpen;
let homeBirds;
let stampSound;
let mailboxOpenSound;
let home_d_now = 1;
let home_s_now = 1;
let todayDayPlus = true;
let mail_s_now = 0;
let mail_open_time = 0;

//map
let sch_clear = false;
let gym_clear = false;
let sto_clear = false;
let caf_clear = false;
let sch_w;
let gym_w;
let sto_w;
let caf_w;
let sch_h;
let gym_h;
let sto_h;
let caf_h;

//gym
let gym_v_now = false;
let gym_now = true;
let currentImageIndex = 0;
let currentIndex = 0;
let startTime = 0;
const durat = 4000;
let mic;
let gymBgm;
let shockBgm;

let door;
let fail;
let squat;

let v4_1;
let v4_2;
let v4_3;
let v4_4;
let v4_5;
let v4_6;
let v4_7;
let v4_8;
let v4_9;
let v4_10;
let v4_11;
let v4_12;
let gym_s_now = false;
let gym_timer1 = 1200;
let gym_timer2 = 1200;
let gym_timer3 = 1200;
let gym_timer4 = 1200;

//school
let char_pos = 265;
let targetColor = [255, 255, 0];
let timer = 1200;
let birds;
let schoolbell;
let students;
let schoolEndBell;
let studentGameBgm;
let v7_1;
let v7_2;
let v7_3;
let v7_4;
let v7_5;
let v7_6;
let v7_7;
let v7_8;
let v7_9;
let v7_10;
let sch_v_now = true;
let sch_b_now = true;

let posNum = 8;
let sch_positions = [
  [1045, 350],
  [940, 350],
  [825, 350],
  [710, 350],
  [600, 350],
  [490, 350],
  [375, 350],
  [265, 350],
];
let currentPositionIdx = 0;
let nextTime = 120;
let currTime = 0;
let circleRedLayer;
let circleYellowLayer;
let circleGreenLayer;
let circleMask;
let sch_num = 50;
let sch_xpos = [];
let sch_ypos = [];

let red_threshold = 100; //학생 게임 기준
let yellow_threshold = 110; //그냥 넘어가면 낮게
let green_threshold = 100;

//store
let storeBgm;
let clap;
let ta_da;
let toxic;
let sto_s_now = true;
let sto_v_now = true;

let v8_1;
let v8_2;
let v8_3;
let v8_4;
let v8_5;
let v8_6;
let v8_7;
let v8_8;

let clothes;
let chosen;
let scores;
let stotxt;
let stotxts;
let stotxtpos;
let stotxtposs; //점수계산

//cafe
let cafeBgm;
let decision;
let heartbreak;
let my_girl;
let caf_v_now = true;

let v6_1;
let v6_2;
let v6_3;
let v6_4;
let v6_5;
let v6_6;
let v6_7;
let v6_8;
let v6_9;
let v6_10;
let v6_11;
let v6_12;
let v6_13;

//coffee
let mailbox_v_now = false;

//ending
let endingBgm;
let ending_v_now = true;
let end_v_1;
let end_v_2;
let end_v_3;
let end_v_4;
let end_v_5;
let end_v_6;
let end_v_7;
let end_v_8_1;
let end_v_8_2;
let end_v_9;
let end_v_10;
let end_v_11;
let end_v_12;
let end_v_13;
let end_v_14;

//firebase
let storage;
let screenShot;
let qr;
let qrImg;
let tagDiv;

function preload() {
  width = 1280;
  height = 800;

  for (let i = 0; i <= 10; i++) images[i] = [];

  images[0][0] = loadImage("UI/Day_icon.png");
  images[0][1] = loadImage("UI/game_information_screen.png");
  images[0][1.4] = loadImage("gym/gym_game_information_screen.png");
  images[0][1.5] = loadImage("school/student_game_information_screen.png");
  images[0][1.6] = loadImage("store/fashion_game_information_screen.png");
  images[0][1.7] = loadImage("cafe/cafe_game_information_screen.png");
  images[0][2] = loadImage("UI/home_icon.png");
  images[0][3] = loadImage("UI/interactionbox.png");
  images[0][4] = loadImage("UI/researchbook_closebutton.png");
  images[0][5] = loadImage("UI/researchbook.png");
  images[0][5.4] = loadImage("UI/researchbook_gym.png");
  images[0][5.5] = loadImage("UI/researchbook_school.png");
  images[0][5.6] = loadImage("UI/researchbook_fashion.png");
  images[0][5.7] = loadImage("UI/researchbook_couple.png");
  images[0][6] = loadImage("UI/scriptbox_nextbutton.png");
  images[0][7] = loadImage("UI/scriptbox.png");
  images[0][8] = loadImage("UI/game_start_button.png");
  images[0][8.1] = loadImage("UI/game_start_button2.png");
  images[0][9] = loadImage("UI/letter.png");
  images[0][10] = loadImage("UI/timer_icon.png");
  images[0][11] = loadImage("UI/game_main_background.png");
  images[0][12] = loadImage("UI/Mission_Completed.png");
  images[0][13] = loadImage("UI/Mission_Failed.png");
  images[0][14] = loadImage("UI/reset_button.png");
  images[0][18] = loadImage("UI/game_box.png");
  images[0][19] = loadImage("UI/outro_table_background.png");
  
  images[0][20] = loadImage("start/1-play button.png");
  images[0][21] = loadImage("start/2-play button.png");
  images[0][22] = loadImage("start/3-main image.png");
  images[0][23] = loadImage("start/4-cloud2.png");
  images[0][24] = loadImage("start/4-cloud3.png");
  images[0][25] = loadImage("start/4-cloud4.png");
  images[0][26] = loadImage("start/4-cloud5.png");
  images[0][27] = loadImage("start/4-cloud6.png");
  images[0][28] = loadImage("start/4-cloud7.png");
  images[0][29] = loadImage("start/4-cloud8.png");
  images[0][30] = loadImage("start/4-cloud9.png");
  images[0][31] = loadImage("start/5-main background.png");
  
  images[1][6] = loadImage("intro/pill.png");
  images[1][6.1] = loadImage("intro/pill2.png");
  images[1][7] = loadImage("intro/water.png");
  images[1][7.1] = loadImage("intro/water2.png");
  images[1][8] = loadImage("intro/paper.png");
  images[1][8.1] = loadImage("intro/paper2.png");
  images[1][9] = loadImage("intro/arm.png");
  images[1][9.1] = loadImage("intro/arm2.png"); 
  images[1][10] = loadImage("intro/paper_open.png");
  images[1][11] = loadImage("intro/Blackout.png");
  images[1][12] = loadImage("intro/intro_lab_background.png");
  images[1][12.1] = loadImage("intro/intro_lab_table.png");
  images[1][13] = loadImage("intro/intro_senior_character.png");
  images[1][14] = loadImage("intro/arrived_1.png");
  images[1][15] = loadImage("intro/arrived_2.png");
  images[1][16] = loadImage("intro/arrived_3.png");
  images[1][17] = loadImage("intro/arrived_4.png");
  images[1][18] = loadImage("intro/arrived_5.png");

  images[2][0] = loadImage("home/home_day.png");
  images[2][1] = loadImage("home/home_postbox_day.png");
  images[2][1.1] = loadImage("home/mailbox_highlighted.png");
  images[2][2] = loadImage("home/home_night.png");
  images[2][3] = loadImage("home/home_postbox_night.png");
  images[2][4] = loadImage("home/house_postbox_inside.png");
  images[2][5] = loadImage("home/house_postbox_letter.png");
  images[2][6] = loadImage("home/stamp_1.png");
  images[2][7] = loadImage("home/stamp_4.png");
  images[2][8] = loadImage("home/stamp_2.png");
  images[2][9] = loadImage("home/stamp_3.png");
  images[2][10] = loadImage("home/house_door_closed.png");
  images[2][11] = loadImage("home/house_door_opened.png");
  images[2][12] = loadImage("home/research_complete.png");

  images[3][0] = loadImage("map/map_background.png"); //배경
  images[3][1] = loadImage("map/map_gym_icon.png"); //헬스장
  images[3][2] = loadImage("map/map_school_icon.png"); //학교
  images[3][3] = loadImage("map/map_fashion_icon.png"); //백화점
  images[3][4] = loadImage("map/map_coffee_icon.png"); //카페
  images[3][5] = loadImage("map/map_clear_icon.png"); //클리어 

  images[4][0] = loadImage("gym/gym_background.png");
  images[4][1] = loadImage("gym/zzang_1.png");
  images[4][2] = loadImage("gym/zzang_2.png");
  images[4][3] = loadImage("gym/zzang_3.png");
  images[4][4] = loadImage("gym/zzang_4.png");
  images[4][5] = loadImage("gym/zzang_5.png");
  images[4][6.1] = loadImage("gym/zzang_6_1.png");
  images[4][6.2] = loadImage("gym/zzang_6_2.png");
  images[4][7] = loadImage("gym/healthy_broken_interactionbutton.png");
  images[4][8] = loadImage("gym/Gym_gamename.png");
  images[4][8.1] = loadImage("gym/Round 1.png");
  images[4][8.2] = loadImage("gym/Round 2.png");
  images[4][8.3] = loadImage("gym/Round 3.png");
  images[4][8.4] = loadImage("gym/Round 4.png");
  images[4][8.5] = loadImage("gym/Round 5.png");
  images[4][8.6] = loadImage("gym/Round 6.png");
  images[4][9.1] = loadImage("gym/zzang_clap_1.png");
  images[4][9.2] = loadImage("gym/zzang_clap_2.png");
  images[4][10.1] = loadImage("gym/zzang_cry_1.png");
  images[4][10.2] = loadImage("gym/zzang_cry_2.png");
  
  //1라운드
  images[4][11.11] = loadImage("gym/squat.lv.1_1.png");
  images[4][11.12] = loadImage("gym/squat.lv.1_2.png");
  images[4][11.13] = loadImage("gym/squat.lv.1_3-1.png");
  images[4][11.14] = loadImage("gym/squat.lv.1_3-2.png");
  images[4][11.15] = loadImage("gym/squat.lv.1_4-1.png");
  images[4][11.16] = loadImage("gym/squat.lv.1_4-2.png");
  images[4][11.17] = loadImage("gym/squat.lv.1_success.png");
  images[4][11.18] = loadImage("gym/squat.lv.1_fail.png");
  
  //2라운드
  images[4][11.21] = loadImage("gym/squat.lv.2_1.png");
  images[4][11.22] = loadImage("gym/squat.lv.2_2.png");
  images[4][11.23] = loadImage("gym/squat.lv.2_3-1.png");
  images[4][11.24] = loadImage("gym/squat.lv.2_3-2.png");
  images[4][11.25] = loadImage("gym/squat.lv.2_4-1.png");
  images[4][11.26] = loadImage("gym/squat.lv.2_4-2.png");
  images[4][11.27] = loadImage("gym/squat.lv.2_success.png");
  images[4][11.28] = loadImage("gym/squat.lv.2_fail.png");
  
  //3라운드
  images[4][11.31] = loadImage("gym/squat.lv.3_1.png");
  images[4][11.32] = loadImage("gym/squat.lv.3_2.png");
  images[4][11.33] = loadImage("gym/squat.lv.3_3-1.png");
  images[4][11.34] = loadImage("gym/squat.lv.3_3-2.png");
  images[4][11.35] = loadImage("gym/squat.lv.3_4-1.png");
  images[4][11.36] = loadImage("gym/squat.lv.3_4-2.png");
  images[4][11.37] = loadImage("gym/squat.lv.3_success.png");
  images[4][11.38] = loadImage("gym/squat.lv.3_fail.png");
  
  
  //4라운드
  images[4][11.41] = loadImage("gym/squat.lv.4_1.png");
  images[4][11.42] = loadImage("gym/squat.lv.4_2.png");
  images[4][11.43] = loadImage("gym/squat.lv.4_3-1.png");
  images[4][11.44] = loadImage("gym/squat.lv.4_3-2.png");
  images[4][11.45] = loadImage("gym/squat.lv.4_4-1.png");
  images[4][11.46] = loadImage("gym/squat.lv.4_4-2.png");
  images[4][11.47] = loadImage("gym/squat.lv.4_success.png");
  images[4][11.48] = loadImage("gym/squat.lv.4_fail.png");
  
  //
  images[4][12] = loadImage("gym/Rectangle.png");
    images[4][12.1] = loadImage("gym/bar_case.png");
  images[4][13] = loadImage("gym/limit.png");
  images[4][14] = loadImage("gym/gym_door_shadow.png");
  images[4][15] = loadImage("gym/gym_door.png");
  images[4][16] = loadImage("gym/Round 1 Completed!.png");
  images[4][17] = loadImage("gym/Round 2 Completed!.png");
  images[4][18] = loadImage("gym/Round 3 Completed!.png");
  images[4][19] = loadImage("gym/Round 4 Completed!.png");
  images[4][20] = loadImage("gym/Round 5 Completed!.png");
  images[4][21] = loadImage("gym/Round 6 Completed!.png");
  images[4][22] = loadImage("gym/Mission Failed!.png");
  images[4][23] = loadImage("gym/round_barbell.png");
  images[4][23.1] = loadImage("gym/squat_lv1.png");
  images[4][23.2] = loadImage("gym/squat_lv2.png");
  images[4][23.3] = loadImage("gym/squat_lv3.png");
  images[4][23.4] = loadImage("gym/squat_lv4.png");

  images[5][0] = loadImage("school/student_game_cam_frame.png");
  images[5][1] = loadImage("school/student_game_colorbar_background.png");
  images[5][2] = loadImage("school/leaves_colorbar.png");
  images[5][3] = loadImage("school/student_game_moving_icon.png");
  images[5][4] = loadImage("school/student_teacher_background.png");
  images[5][5] = loadImage("school/student_9_10.png");
  images[5][6] = loadImage("school/student_11_12_13.png");
  images[5][7] = loadImage("school/student_14_15_16_17.png");
  images[5][8] = loadImage("school/student_18.png");
  images[5][9] = loadImage("school/student_game_O_X-4_5_6.png");
  images[5][10] = loadImage("school/student_O-2.png");
  images[5][11] = loadImage("school/student_X-1_2_3.png");
  images[5][12] = loadImage("school/student_classroom_background.png");
  images[5][13] = loadImage("school/student_game_main.png");
  images[5][14] = loadImage("school/park background.PNG");
  images[5][15] = loadImage("school/student_classroom_noteacher.png");
  images[5][16] = loadImage("school/student_game_red.png");
  images[5][17] = loadImage("school/student_game_yellow.png");
  images[5][18] = loadImage("school/student_game_green.png");

  clothes = [[], [], [], [], [], []];
  images[6][0] = loadImage("store/fashion_bg.png");
  images[6][1] = loadImage("store/fashion_2_3.png");
  images[6][2] = loadImage("store/fashion_4_5.png");
  images[6][3] = loadImage("store/fashion_6_7.png");
  images[6][4] = loadImage("store/fashion_8.png");
  images[6][5] = loadImage("store/fashion_9_10_11.png");
  images[6][6] = loadImage("store/fashion_game_image.png");
  images[6][7] = loadImage("store/fashion_game_O_1_2.png");
  images[6][8] = loadImage("store/fashion_game_O_X_3_4.png");
  images[6][9] = loadImage("store/fashion_game_X_1_2.png");
  images[6][10] = loadImage("store/fashion_game_sub_1.png");
  images[6][11] = loadImage("store/fashion_game_sub_2.png");
  images[6][12] = loadImage("store/fashion_game_sub_3.png");
  images[6][13] = loadImage("store/fashion_game_sub_4.png");
  images[6][14] = loadImage("store/fashion_game_sub_5.png");
  images[6][15] = loadImage("store/fashion_game_sub_6.png");
  images[6][16] = loadImage("store/fashion_game_logo.png");
  images[6][17] = loadImage("store/fashion_game_background.png");

  images[7][0] = loadImage("cafe/cafe_bg.png");
  images[7][0.1] = loadImage("cafe/cafe_bg.png");
  images[7][1] = loadImage("cafe/cafe_2.png");
  images[7][2] = loadImage("cafe/cafe_3.png");
  images[7][3] = loadImage("cafe/cafe_4.png");
  images[7][4] = loadImage("cafe/cafe_5_6.png");
  images[7][5] = loadImage("cafe/cafe_7_8.png");
  images[7][6] = loadImage("cafe/cafe_9.png");
  images[7][7] = loadImage("cafe/cafe_10.png");
  images[7][8] = loadImage("cafe/couple_game_before.png");
  images[7][8.1] = loadImage("cafe/couple_game_beforetext.png");
  images[7][9] = loadImage("cafe/couple_game_after.png");
  images[7][9.1] = loadImage("cafe/couple_game_aftertext.png");
  images[7][10] = loadImage("cafe/cafe_game_O_1-1.png"); //모션
  images[7][11] = loadImage("cafe/cafe_game_O_1-2.png"); //모션
  images[7][12] = loadImage("cafe/cafe_game_O_2_3_X_6_7.png");
  images[7][13] = loadImage("cafe/cafe_game_X_1.png");
  images[7][13.1] = loadImage("cafe/cafe_black_girl.png");
  images[7][14] = loadImage("cafe/cafe_game_X_2.png");
  images[7][14.1] = loadImage("cafe/cafe_black_boy.png");
  images[7][15] = loadImage("cafe/cafe_game_X_3_4.png");
  images[7][16] = loadImage("cafe/cafe_game_X_5.png");
  images[7][17] = loadImage("cafe/cafe_game_logo.png");
  images[7][18] = loadImage("cafe/couple_game_answer.png");
  images[7][19] = loadImage("cafe/heart.png");
  images[7][20] = loadImage("cafe/caffe_bene.png"); 

  // images[9][0] = loadImage("outro/village.png");
  // images[9][1] = loadImage("outro/quos.png");
  // images[9][2] = loadImage("outro/quosment.png");
  // images[9][3] = loadImage("outro/frame.png");
  
  images[10][0] = loadImage("ending/cafe_3.png");
  images[10][1] = loadImage("ending/healthy_17_18_19_1.png");
  images[10][2] = loadImage("ending/fashion_2_3.png");
  images[10][3] = loadImage("ending/student_game_O_X-4_5_6.png");
  images[10][4] = loadImage("ending/student_14_15_16_17.png");
  images[10][5] = loadImage("ending/healthy_12_13.png");
  images[10][6] = loadImage("ending/cafe_5_6.png");
  images[10][7] = loadImage("ending/fashion_9_10_11.png");
  images[10][8] = loadImage("ending/photoframe.png");
  images[10][9] = loadImage("ending/square background.PNG");
  images[10][10] = loadImage("ending/again button.png");
  images[10][11] = loadImage("ending/finish button.png");
  images[10][12] = loadImage("ending/the_end.png");

  for (let i = 0; i < 3; i++) {
    clothes[i][0] = new Clothes("store/bag" + (i + 1) + ".png", 920 + 130 * i, 120 + 130 * 2, 843, 525, 160);
    clothes[i][1] = new Clothes("store/hat" + (i + 1) + ".png", 900 + 130 * i, 120 + 130 * 0, width / 2 - 15, 80, 200);
    clothes[i][2] = new Clothes("store/shoe" + (i + 1) + ".png", 100 + 130 * i, 120 + 130 * 2, width / 2 + 1, 583, 335);
    clothes[i][3] = new Clothes("store/bottom" + (i + 1) + ".png", 100 + 130 * i, 120 + 130 * 1, width / 2 + 7, 523, 288);
    clothes[i][4] = new Clothes("store/top" + (i + 1) + ".png", 100 + 130 * i, 120 + 130 * 0, width / 2 + 3, 386, 355);
    clothes[i][5] = new Clothes("store/acc" + (i + 1) + ".png", 920 + 130 * i, 120 + 130 * 1, 647, 389, 170);
  }

  chosen = [-1, -1];

  // 옷 입혔을 때 띄울 자막들.
  stotxt = loadImage("store/transparent.png");
  stotxts = [
    images[6][10],
    images[6][11],
    images[6][12],
    images[6][13],
    images[6][14],
    images[6][15],
  ];

  scriptF = loadFont("assets/NanumSquareNeo.otf");
  nameF = loadFont("assets/BMJUA_ttf.ttf");
  researchF = loadFont("assets/NanumHimNaeRaNeunMarBoDan.ttf");
  letterF = loadFont("assets/letter.ttf");
  
  // //start 음악
   startBgm = loadSound("start_sound/startBgm.mp3"); 
   startBgm.setVolume(0.4); //볼륨 조정
  
  // //intro 음악
   introBgm = loadSound("intro_sound/Lab_bgm.mp3");
   introBgm.setVolume(0.4); //볼륨 조정
   waterBgm = loadSound("intro_sound/water_bgm.mp3");
   waterBgm.setVolume(2); //볼륨 조정
  paperBgm = loadSound("intro_sound/paper_bgm.mp3");
  paperBgm.setVolume(2); //볼륨 조정
  pillBgm = loadSound("intro_sound/pill_bgm.wav");
  pillBgm.setVolume(4); //볼륨 조정
  // shockBgm = loadSound("intro_sound/shock.wav");
  birdBgm = loadSound("intro_sound/bird.wav");
  birdBgm.setVolume(0.2); //볼륨 조정
  v2_1 = loadSound("intro_sound/2-1.mp3");
  v2_2 = loadSound("intro_sound/2-2.mp3");
  v2_3 = loadSound("intro_sound/2-3.mp3");
   
  //home 음악
  homeBgm = loadSound("home_sound/home_bgm.mp3");
  ghost = loadSound("home_sound/Ghost_Duet.mp3");
  ghost.setVolume(0.5);
  doorOpen = loadSound("home_sound/doorOpenSound.mp3");
  homeBirds = loadSound("home_sound/homeBirds.mp3");
  stampSound = loadSound("home_sound/stamp_sound.mp3");
  mailboxOpenSound = loadSound("home_sound/mailboxOpenSound.mp3");
  mailboxOpenSound.setVolume(0.8);
  
  //school 음악
  birds = loadSound("school_sound/birds.mp3");
  birds.setVolume(0.5);
  schoolbell = loadSound("school_sound/schoolbell.mp3");
  schoolbell.setVolume(0.4);
  students = loadSound("school_sound/students.mp3");
  students.setVolume(0.2);
  schoolEndBell = loadSound("school_sound/schoolEndBell.mp3");
  schoolEndBell.setVolume(0.2);
  studentGameBgm = loadSound("school_sound/studentGameBgm.mp3");
  studentGameBgm.setVolume(0.1);
  v7_1 = loadSound("school_sound/7-1.mp3");
  v7_2 = loadSound("school_sound/7-2.mp3");
  v7_3 = loadSound("school_sound/7-3.mp3");
  v7_4 = loadSound("school_sound/7-4.mp3");
  v7_5 = loadSound("school_sound/7-5.mp3");
  v7_6 = loadSound("school_sound/7-6.mp3");
  v7_7 = loadSound("school_sound/7-7.mp3");
  v7_8 = loadSound("school_sound/7-8.mp3");
  v7_9 = loadSound("school_sound/7-9.mp3");
  v7_10 = loadSound("school_sound/7-10.mp3");
  
  // //gym 음악
  gymBgm = loadSound("gym_sound/gymBgm.mp3");
  gymBgm.setVolume(0.05);
  door = loadSound("gym_sound/door.wav");
  door.setVolume(0.6);
  fail = loadSound("gym_sound/fail.wav");
  fail.setVolume(0.1);
  squat = loadSound("gym_sound/squat.mp3");
  squat.setVolume(0.05);
  v4_1 = loadSound("gym_sound/4-1.mp3");
  v4_2 = loadSound("gym_sound/4-2.mp3");
  v4_3 = loadSound("gym_sound/4-3.mp3");
  v4_4 = loadSound("gym_sound/4-4.mp3");
  v4_5 = loadSound("gym_sound/4-5.mp3");
  v4_6 = loadSound("gym_sound/4-6.mp3");
  v4_7 = loadSound("gym_sound/4-7.mp3");
  v4_8 = loadSound("gym_sound/4-8.mp3");
  v4_9 = loadSound("gym_sound/4-9.mp3");
  v4_10 = loadSound("gym_sound/4-10.mp3");
  v4_11 = loadSound("gym_sound/4-11.mp3");
  v4_12 = loadSound("gym_sound/4-12.mp3");
  
  // //store 음악
  storeBgm = loadSound("store_sound/storeBgm.mp3");
  storeBgm.setVolume(0.3);
  clap = loadSound("store_sound/clap.mp3");
  clap.setVolume(0.3);
  ta_da = loadSound("store_sound/ta_da.mp3");
  ta_da.setVolume(0.5);
  toxic = loadSound("store_sound/toxic.mp3");
  toxic.setVolume(0.2);
  v8_1 = loadSound("store_sound/8_1.mp3");
  v8_2 = loadSound("store_sound/8_2.mp3");
  v8_3 = loadSound("store_sound/8_3.mp3");
  v8_4 = loadSound("store_sound/8_4.mp3");
  v8_5 = loadSound("store_sound/8_5.mp3");
  v8_6 = loadSound("store_sound/8_6.mp3");
  v8_7 = loadSound("store_sound/8_7.mp3");
  v8_8 = loadSound("store_sound/8_8.mp3");

  // //cafe 음악
  cafeBgm = loadSound("cafe_sound/cafeBgm.mp3");
  cafeBgm.setVolume(0.5);
  decision = loadSound("cafe_sound/decision.mp3");
  decision.setVolume(0.4);
  heartbreak = loadSound("cafe_sound/heartbreak.mp3");
  my_girl = loadSound("cafe_sound/my_girl.mp3");
  my_girl.setVolume(0.5);

  v6_1 = loadSound("cafe_sound/6_1.mp3");
  v6_2 = loadSound("cafe_sound/6_2.mp3");
  v6_3 = loadSound("cafe_sound/6_3.mp3");
  v6_4 = loadSound("cafe_sound/6_4.mp3");
  v6_5 = loadSound("cafe_sound/6_5.mp3");
  v6_6 = loadSound("cafe_sound/6_6.mp3");
  v6_7 = loadSound("cafe_sound/6_7.mp3");
  v6_8 = loadSound("cafe_sound/6_8.mp3");
  v6_9 = loadSound("cafe_sound/6_9.mp3");
  v6_10 = loadSound("cafe_sound/6_10.mp3");
  v6_11 = loadSound("cafe_sound/6_11.mp3");
  v6_12 = loadSound("cafe_sound/6_12.mp3");
  v6_13 = loadSound("cafe_sound/6_13.mp3");
  
  // //ending 음악
  endingBgm = loadSound("ending_sound/endingBgm.mp3");
  endingBgm.setVolume(0.3);
  end_v_1 = loadSound("ending_sound/10-1.mp3");
  end_v_2 = loadSound("ending_sound/10-2.mp3");
  end_v_3 = loadSound("ending_sound/10-3.mp3");
  end_v_4 = loadSound("ending_sound/10-4.mp3");
  end_v_5 = loadSound("ending_sound/10-5.mp3");
  end_v_6 = loadSound("ending_sound/10-6.mp3");
  end_v_7 = loadSound("ending_sound/10-7.mp3");
  end_v_8_1 = loadSound("ending_sound/10-8-1.mp3");
  end_v_8_2 = loadSound("ending_sound/10-8-2.mp3");
  end_v_9 = loadSound("ending_sound/10-9.mp3");
  end_v_10 = loadSound("ending_sound/10-10.mp3");
  end_v_11 = loadSound("ending_sound/10-11.mp3");
  end_v_12 = loadSound("ending_sound/10-12.mp3");
  end_v_13 = loadSound("ending_sound/10-13.mp3");
  end_v_14 = loadSound("ending_sound/10-14.mp3");
} 

function setup() {
  frameRate(60);
  createCanvas(width, height);

  let lang = "ko-KR";
  speechRec = new p5.SpeechRec(lang, gotSpeech);

  function gotSpeech() {
    if (speechRec.resultValue) {
      speechReady = false;
      speech = speechRec.resultString;
      console.log(speech);
    }
  }

  //영상
  cam = createCapture(VIDEO);
  cam.hide();

  //오디오 입력 생성하기
  mic = new p5.AudioIn();

  //오디오 입력 시작하기
  //그 기본값은 .connect()(즉, 컴퓨터 스피커에 연결)되지 "않은" 상태입니다.
  mic.start();

  //백화점 옷의 점수
  scores =
    //백화점 옷의 점수.
    //여섯개 한 묶음이 같은 스타일의 옷(순서대로 acc, bot, bag, hat, shoe, top)
    [[5,5,20,20,10,5],[5,15,10,10,10,10],[15,5,10,10,20,5]];

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAaG3CqDyI_nNqgkev7TXWS22Q1-wfumcQ",
    authDomain: "teamquokka-3e5a9.firebaseapp.com",
    projectId: "teamquokka-3e5a9",
    storageBucket: "teamquokka-3e5a9.appspot.com",
    messagingSenderId: "285218356747",
    appId: "1:285218356747:web:7b9347093794e324b6910e",
    storageURL: "gs://teamquokka-3e5a9.appspot.com",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  storage = firebase.storage();
  console.log(storage);

  tagDiv = createDiv();
  // position it:
  tagDiv.position(width / 2 - 130, height / 2 - 150);

  //학생 쿼카 게임
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(24);
  circleRedLayer = createGraphics(100, 100);
  circleYellowLayer = createGraphics(100, 100);
  circleGreenLayer = createGraphics(100, 100);
  circleRedLayer.imageMode(CENTER);
  circleYellowLayer.imageMode(CENTER);
  circleGreenLayer.imageMode(CENTER);
  circleRedLayer.image(images[5][16], 50, 50, 100, 100);
  circleYellowLayer.image(images[5][17], 50, 50, 100, 100);
  circleGreenLayer.image(images[5][18], 50, 50, 100, 100);
  circleMask = createGraphics(100, 100);
  for (let i = 0; i < sch_num; i++) {
    sch_xpos[i] = 0;
    sch_ypos[i] = 0;
  }

  //리셋용
  sounds = [startBgm, introBgm, waterBgm, paperBgm, pillBgm, birdBgm, v2_1, v2_2, v2_3, homeBgm, ghost, doorOpen, homeBirds, stampSound, mailboxOpenSound, birds, schoolbell, students, schoolEndBell, studentGameBgm, v7_1, v7_2, v7_3, v7_4, v7_5, v7_6, v7_7, v7_8, v7_9, v7_10, gymBgm, door, fail, squat, v4_1, v4_2, v4_3, v4_4, v4_5, v4_6, v4_7, v4_8, v4_9, v4_10, v4_11, v4_12, storeBgm, clap, ta_da, toxic, v8_1, v8_2, v8_3, v8_4, v8_5, v8_6, v8_7, v8_8, cafeBgm, decision, heartbreak, my_girl, v6_1, v6_2, v6_3, v6_4, v6_5, v6_6, v6_7, v6_8, v6_9, v6_10, v6_11, v6_12, v6_13, endingBgm, end_v_1, end_v_2, end_v_3, end_v_4, end_v_5, end_v_6, end_v_7, end_v_8_1, end_v_8_2, end_v_9, end_v_10, end_v_11, end_v_12, end_v_13, end_v_14]; //모든 음원 넣어주세요.
  state = 0; //원하는 장면으로 바로가기
}

let curState = 0;
let curDay = 0;

function draw() {
  if (curState != state) {
    console.log(state);
    curState = state;
  }
  if (curDay != todayDay) {
    console.log(todayDay);
    curDay = todayDay;
  }
  background(255); //기본 배경 흰색

  if (parseInt(state) == 0) starting();
  else if (parseInt(state) == 1) intro();
  else if (parseInt(state) == 2) home();
  else if (state == 3) drawMap();
  //gym이 클리어되지 않은 상태이고, 현재 state의 정수부분이 1이면 school()이라는 그리기함수 실행
  //헬스장
  else if (parseInt(state) == 4) gym();
  //학교
  else if (parseInt(state) == 5) school();
  //백화점
  else if (parseInt(state) == 6) sto();
  //카페
  else if (parseInt(state) == 7) cafe();
  //물
  else if (parseInt(state) == 8) Coffee();
  //아웃트로
  else if (parseInt(state) == 9) outro();
  else if (parseInt(state) == 10) end();

  //리셋 버튼(위치 중요, draw 중 맨 뒤로)
  if (resetOn == true) {
    noStroke();
    fill(0, 100);
    rect(0, 0, width, height);
    imageMode(CENTER);
    image(images[0][14], width / 2, height / 2, 524, 347.5);
    strokeWeight(1);
    fill(0);
  }
}

//각 스테이지에서 마우스를 클릭했을 때 실행될 것들
function mousePressed() {
  
  if (state == 0) mousePressedAt0();
  //시작화면
  else if (parseInt(state) == 2) mousePressedAt2();
  //집
  else if (parseInt(state) == 3) mousePressedAt3();
  //지도
  else if (parseInt(state) == 5) mousePressedAt5();
  //학교
  else if (parseInt(state) == 6) mousePressedAt6();
  //백화점
  else if (parseInt(state) == 7) mousePressedAt7();
  //카페
  else if (parseInt(state) == 8) mousePressedAt8();
  //물
  else if (parseInt(state) == 9) mousePressedAt9();
  //outro
  else if (parseInt(state) == 10) mousePressedAt10(); //엔딩

  //리셋 버튼
  if (58 < mouseX && mouseX < 148 && 27 < mouseY && mouseY < 95) {
    resetOn = true;
  }
  if (
    resetOn == true &&
    425 < mouseX &&
    mouseX < 625 &&
    485 < mouseY &&
    mouseY < 535
  ) {
    state = 0;
    turnOffAllVariables();
    turnOffAllSounds();
  } else if (
    resetOn == true &&
    658 < mouseX &&
    mouseX < 858 &&
    480 < mouseY &&
    mouseY < 530
  ) {
    resetOn = false;
  }
}

function mouseReleased() {
  if (parseInt(state) == 6) mouseReleasedAt6();
}

function mouseClicked() {
  console.log("x: " + mouseX + " y: "+mouseY);
  if (parseInt(state) == 1) mouseClickedAt1();
  else if (parseInt(state) == 4) mouseClickedAt4();
}

//===================시작화면========================

//시작화면 마우스이벤트
function mousePressedAt0() {
  if (530 < mouseX && mouseX < 813 && 636 < mouseY && mouseY < 719) {
      state = 1;
    }
}

function starting() {
  if (!startBgm.isPlaying()) {startBgm.play();}
  imageMode(CORNER);
  image(images[0][31], 0, 0, 1280, 800); //배경
  image(images[0][parseInt(frameCount/10)%8 + 23],0,0,1280,800); //구름
  image(images[0][22], 0, 0, 1280, 800); //일지
  image(images[0][parseInt(frameCount/8)%2 + 20],0,0,1280,800); //플레이버튼
}

//===================여기서부터 인트로========================

//인트로 마우스이벤트
function mouseClickedAt1() {
  // if (!speechReady) {
  //   speech = "";
  //   speechReady = true;
  //   speechRec.start(continuous, interim);
  // }

  if (state == 0) {
    state = 1;
  } else if (state == 1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.1;
    } else {
      state = 1;
    }
  } else if (state == 1.1) {
    if (mouseX >= 255 && mouseX <= 625 && mouseY >= 600 && mouseY <= 700) {
      state = 1.2;
    } else if (
      mouseX >= 655 &&
      mouseX <= 1025 &&
      mouseY >= 600 &&
      mouseY <= 700
    ) {
      state = 1.4;
    } else {
      state = 1.1;
    }
  } else if (state == 1.2) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.3;
    } else {
      state = 1.2;
    }
  } else if (state == 1.3) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.6;
    } else {
      state = 1.3;
    }
  } else if (state == 1.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.5;
    } else {
      state = 1.4;
    }
  } else if (state == 1.5) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.6;
    } else {
      state = 1.5;
    }
  } else if (state == 1.6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.7;
    } else {
      state = 1.6;
    }
  } else if (state == 1.7) {
    if (mouseX >= 148 && mouseX <= 393 && mouseY >= 268 && mouseY <= 561) {
      images16_Visible = false;
      if (intro_v_now == false) {
      pillBgm.play();
      intro_v_now = true;
      }
    } else if (
      images16_Visible &&
      mouseX >= 480 && mouseX <= 743 && mouseY >= 189 && mouseY <= 580
    ) {
    } else if (
      images17_Visible &&
      mouseX >= 830 && mouseX <= 1188 && mouseY >= 217 && mouseY <= 642
    ) {
    } else if (
      !images16_Visible &&
      mouseX >= 480 && mouseX <= 743 && mouseY >= 189 && mouseY <= 580
    ) {
      images17_Visible = false;
      if (intro_v_now == true) {
      waterBgm.play();
      intro_v_now = false;
      }
    } else if (
      !images17_Visible &&
      mouseX >= 830 && mouseX <= 1188 && mouseY >= 217 && mouseY <= 642
    ) {
      images18_Visible = false;
      if (intro_v_now == false) {
      paperBgm.play();
      intro_v_now = true;
      }
      state = 1.8;
    } else {
      state = 1.7;
    }
  } else if (state == 1.8) {state = 1.9;
                           curFrame = frameCount;} 
    else if (state == 1.9) {
      state = 1.51;
  } 
  // else if (state == 1.91) {
  //   if (mouseX >= 980 && mouseX <= 1027 && mouseY >= 685 && mouseY <= 729) {
  //     state = 1.8;
  //   } else {
  //     state = 1.91;
  //   }
  // }
  if (state == 1.51) {
    state = 1.52;
  } else if (state == 1.52) {
    if (255-(frameCount-curFrame)*7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.53;
    }
  } else if (state == 1.53) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.54;
    }
  } else if (state == 1.54) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.55;
    }
  } else if (state == 1.55) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.56;
    }
  } else if (state == 1.56) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.57;
    }
  } else if (state == 1.57) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 1.58; curFrame = frameCount;
    }
  }
}

function intro() {
  if (state == 1) Lab_1();
  else if (state == 1.1) Lab_2();
  else if (state == 1.2) Lab_3();
  else if (state == 1.3) Lab_4();
  else if (state == 1.4) Lab_5();
  else if (state == 1.5) Lab_6();
  else if (state == 1.6) Lab_7();
  else if (state == 1.7) Lab_8();
  else if (state == 1.8) Lab_9();
  else if (state == 1.9) Lab_10();
  // else if (state == 1.91) Lab_11();
  //////마을 도착
  else if (state == 1.51) Arrived_0();
  else if (state == 1.52) Arrived_1();
  else if (state == 1.53) Arrived_2();
  else if (state == 1.54) Arrived_3();
  else if (state == 1.55) Arrived_4();
  else if (state == 1.56) Arrived_5();
  else if (state == 1.57) Arrived_6();
  else if (state == 1.58) Arrived_7();
}

function Lab_1() {
  startBgm.stop();
  if (introBgm.isPlaying() == false) {introBgm.play();}
  
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구소장", width / 2 - 275, 587);
  textFont(scriptF);
  text("그래... 떠날 준비는 다 되었나?", width / 2, 668.5);
}

function Lab_2() {
    if (introBgm.isPlaying() == false) {introBgm.play();}
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  imageMode(CENTER);
  image(
    images[0][3],
    width / 2 - 200,
    height / 2 + 250,
    width / 4 + 50,
    height / 8
  );
  image(
    images[0][3],
    width / 2 + 200,
    height / 2 + 250,
    width / 4 + 50,
    height / 8
  );
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  text("네, 준비됐습니다.", width / 2 - 200, height / 2 + 250);
  textFont(scriptF);
  text("아직... 마음의 준비가...", width / 2 + 200, height / 2 + 250);
}

function Lab_3() {
    if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구소장", width / 2 - 275, 587);
  textFont(scriptF);
  text("그래, 역시 자네답군.", width / 2, 638.5);
  text(
    "이 프로젝트, 아무나 얻을 수 있는 기회가 아니란 걸 자네도 잘 알고 있지?",
    width / 2,
    668.5
  );
  text(
    "쉽지 않을 것이네, 부디 인류의 행복을 위해 최선을 다해주게나.",
    width / 2,
    698.5
  );
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
}

function Lab_4() {
     if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네, 알겠습니다.", width / 2, 668.5);
}

function Lab_5() {
    if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구소장", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "뭐!! 지금까지 대체 뭘 했길래 이렇게 약해 빠진 모습을 보이는 건가?! \n 자네가 얻은 기회가 얼마나 소중한 기회인 줄 모르나?!",
    width / 2,
    668.5
  );
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
}

function Lab_6() {
    if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("죄송합니다. 준비되었습니다.", width / 2, 668.5);
}

function Lab_7() {
  if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  image(images[1][13], 675, 160, 440, 750);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구소장", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "그래, 준비가 되었다니 바로 시작하지. 방법은 간단해. \n 앞에 놓인 알약을 먼저 입에 넣고, 물과 함께 삼키게. \n 그리고 회장님의 편지까지 꼼꼼히 읽도록 하게.",
    width / 2,
    668.5
  );
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
}

function Lab_8() {
  if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  
  imageMode(CORNER);
  image(images[1][12.1], 0, 0, width, height);
  if (images16_Visible) {
      if(mouseX >= 240 && mouseX <= 400 && mouseY >= 280 && mouseY <= 440) { imageMode(CENTER);
  image(images[1][6.1], width / 2 - 320, height / 2 - 40, 335, 300)
  } else { 
    imageMode(CENTER);
    image(images[1][6], width / 2 - 320, height / 2 - 40, 160, 160);
  }
  }
  
    if (!images16_Visible && images17_Visible) {
    if(mouseX >= 540 && mouseX <= 740 && mouseY >= 260 && mouseY <= 460) 
{   imageMode(CENTER);
    image(images[1][7.1], width / 2, height / 2 - 40, 385, 270);
  } else {
    imageMode(CENTER);
    image(images[1][7], width / 2, height / 2 - 40, 200, 200)
  }
  }
  
  if (images16_Visible && images17_Visible) {
    imageMode(CENTER);
    image(images[1][7], width / 2, height / 2 - 40, 200, 200)
  }
  
  if (!images17_Visible && images18_Visible) {
    if(mouseX >= 860 && mouseX <= 1060 && mouseY >= 260 && mouseY <= 460) { imageMode(CENTER);
  image(images[1][8.1], width / 2 + 320, height / 2 - 40, 275, 250);
  } else {
    imageMode(CENTER);
    image(images[1][8], width / 2 + 320, height / 2 - 40, 200, 200);
  }
  }
  
  if (images17_Visible && images18_Visible) {
    imageMode(CENTER);
    image(images[1][8], width / 2 + 320, height / 2 - 40, 200, 200);
  }
  
  if (images110_Visible) {
    imageMode(CENTER);
    image(images[1][10], width / 2, height / 2, 870, 701);
  }

  push();
  translate(width / 2, height);
  d = degrees(-atan2(height - mouseY, mouseX - width / 2) + PI);
  d = constrain(d, 40, 120);
  if (mouseY > height) {
    if (mouseX > width / 2) {
      d = 120;
    } else {
      d = 50;
    }
  }

  r = radians(d);
  rotate(r);
  if (!images110_Visible) {
    // images110_Visible이 false인 경우에만 이미지를 그립니다.
    image(images[1][9.1], -60, -60, 564, 427);
  }
  pop();
}

function Lab_9() {
    if (introBgm.isPlaying() == false) {
    introBgm.play();
  }
  waterBgm.stop();
  pillBgm.stop();
  
  imageMode(CORNER);
  image(images[1][12], 0, 0, width, height);
  imageMode(CENTER);
  image(images[1][10], width / 2, height / 2, 1000, 800);

  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(letterF);
  text("To. 연구원 K", width / 2-280, 130);
  text("그래, 자네가 올해 아주 큰 임무를 맡았다고 들었어.\n 인류의 행복을 위해 꼭 그 자들의 비밀을 밝혀오길 바라네. \n 그 과정에서 아래 두 사항은 반드시 명심하게나. \n\n 1. 절대 정체를 들키지 않을 것 \n 2. 집 안의 우체통을 통해 지령을 확인할 것 \n\n 떠날 준비가 되었나? \n 행운을 비네.", width / 2-25, height / 2+30);
}

function Lab_10() {
  if (state == 1.9) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    imageMode(CENTER);
    image(images[1][11], width / 2, height / 2, 1280, 800);

    if (millis() - startTime >= durat) {
      state = 1.52;
      startTime = 0; // startTime 초기화
    }
  }
  //페이드아웃
 fill(0,0,0,-170+(frameCount-curFrame)*7);
    rectMode(CORNER); rect(0,0,width, height);
    fill(0);
    if(-170+(frameCount-curFrame)*7>255) { state =1.52; curFrame = frameCount;}
}

// function Lab_11() {
//   if (introBgm.isPlaying() == false) {
//     introBgm.play();
//   }
//   imageMode(CORNER);
//   image(images[1][12], 0, 0, width, height);
//   image(images[1][13], 675, 160, 440, 750);
//   image(images[0][7], 205, 558, 870, 201);
//   imageMode(CORNER);
//   image(images[0][6], 980, 685, 47, 44);
//   imageMode(CORNER);
//   image(images[0][2], 58, 27, 90, 68); //홈 버튼
//   textAlign(CENTER, CENTER);
//   textSize(25);
//   textFont(nameF);
//   text("연구소장", width / 2 - 275, 587);
//   text("", width / 2 - 275, 587);
//   textFont(scriptF);
//   text("목소리가 겨우 그것밖에 안 되나?", width / 2, 668.5);
// }

///////마을 도착 이후

function Arrived_0() {
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
}

function Arrived_1() {
  introBgm.stop();
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][17], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("여기는... 어디지?", width / 2, 668.5);

  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
    fill(0,0,0,255-(frameCount-curFrame)*7);
    rectMode(CORNER); rect(0,0,width,height);
    fill(0);
}

function Arrived_2() {
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
    if (intro_v_now == true) {
    v2_1.play();
    intro_v_now = false;
  }
  
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][15], width / 2, height / 2, width, height);
  }
  fill(0);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("???", width / 2 - 275, 587);
  textFont(scriptF);
  text("저기... 괜찮아?", width / 2, 668.5);

  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
}

function Arrived_3() {
  v2_1.stop();
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][15], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("아... 응응, 고마워.", width / 2, 658.5);
  text("혹시 여긴 어디야...?", width / 2, 688.5);

  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
}

function Arrived_4() {
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  
  if (intro_v_now == false) {
    v2_2.play();
    intro_v_now = true;
  }
  
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][16], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("행인 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("여기? 쿼카 마을이잖아!", width / 2, 658.5);
  text("전날 나뭇잎 술이라도 잔뜩 마신거야?", width / 2, 688.5);
  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
}

function Arrived_5() {
  v2_2.stop();
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][16], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("아... 응응!", width / 2, 658.5);
  text("전날 무리해서 마셨더니 정신을 잃었네! 하핫!", width / 2, 688.5);
  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
}

function Arrived_6() {
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  
    if (intro_v_now == true) {
    v2_3.play();
    intro_v_now = false;
  } 
  
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][18], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("행인 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("으이그! \n 아무리 그래도 잠은 집에서 자야지~ \n 일어나! 집으로 부축해줄게.", width / 2, 668.5);
  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
}

function Arrived_7() {
  v2_3.stop();
  if (birdBgm.isPlaying() == false) {
    birdBgm.play();
  }
  imageMode(CENTER);
  //기절 쿼카 애니메이션
  if (millis() - imageTimer <= imageInterval / 2) {
    image(images[1][14], width / 2, height / 2, width, height);
  } else {
    image(images[1][18], width / 2, height / 2, width, height);
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("아, 응응! 고마워.", width / 2, 668.5);
  if (millis() - imageTimer >= imageInterval) {
    imageTimer = millis();
  }
  fill(0,0,0,-170+(frameCount-curFrame)*7);
    rectMode(CORNER); rect(0,0,width, height);
    fill(0);
    if(-170+(frameCount-curFrame)*7>255) { state =2; curFrame = frameCount;}
  
}

//===================여기까지 인트로========================

//===================여기서부터 집========================
//집 마우스 이벤트

function mousePressedAt2() {
  if (state == 2) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (1013 < mouseX && mouseX < 1182 && 405 < mouseY && mouseY < 491) {
      state = 2.1;
    }
  } else if (state == 2.1) {
    if (480 < mouseX && mouseX < 680 && 450 < mouseY && mouseY < 650) {
      state = 2.2;
    }
  } else if (state == 2.2) {
    if (220 < mouseX && mouseX < 320 && 100 < mouseY && mouseY < 200) {
      state = 2.3;
    }
  } else if (state == 2.3 || state == 2.7 || state == 2.8 || state == 2.9) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.4;
    }
  } else if (state == 2.4) {
    if (530 < mouseX && mouseX < 755 && 150 < mouseY && mouseY < 585) {
      curFrame = frameCount;
      state = 2.5;
    }
  } else if (state == 2.11) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.12;
    }
  } else if (state == 2.12) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.13;
    }
  } else if (state == 2.13) {
    if (552 < mouseX && mouseX < 685 && 645 < mouseY && mouseY < 688) {
      state = 2.135;
    }
  } else if (state == 2.135) {
    if (300 < mouseX && mouseX < 400 && 50 < mouseY && mouseY < 150) {
      curFrame = frameCount;
      state = 2.14;
    }
  } else if (state == 2.15) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.16;
    }
  } else if (state == 2.16) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.17;
    }
  } else if (state == 2.17) {
    if (552 < mouseX && mouseX < 685 && 665 < mouseY && mouseY < 708) {
      state = 2.175;
    }
  } else if (state == 2.175) {
    if (300 < mouseX && mouseX < 400 && 50 < mouseY && mouseY < 150) {
      curFrame = frameCount;
      state = 2.18;
    }
  } else if (state == 2.19) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.21;
    }
  } else if (state == 2.21) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.22;
    }
  } else if (state == 2.22) {
    if (552 < mouseX && mouseX < 685 && 665 < mouseY && mouseY < 708) {
      state = 2.225;
    }
  } else if (state == 2.225) {
    if (300 < mouseX && mouseX < 400 && 50 < mouseY && mouseY < 150) {
      curFrame = frameCount;
      state = 2.23;
    }
  } else if (state == 2.24) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.25;
    }
  } else if (state == 2.25) {
    if (255 - (frameCount - curFrame) * 7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 2.26;
    }
  } else if (state == 2.26) {
    if (552 < mouseX && mouseX < 685 && 665 < mouseY && mouseY < 708) {
      state = 2.265;
    }
  } else if (state == 2.265) {
    if (300 < mouseX && mouseX < 400 && 50 < mouseY && mouseY < 150) {
      curFrame = frameCount;
      state = 2.27;
    }
  } else if (state == 2.99) {
    state = state_comeback;
  }
  if (state == 2.3 ||
    state == 2.7 ||
    state == 2.8 ||
    state == 2.9 ||
    state == 2.11 ||
    state == 2.12 ||
    state == 2.15 ||
    state == 2.16 ||
    state == 2.19 ||
    state == 2.21 ||
    state == 2.24 ||
    state == 2.25
  ) {
    if (1013 < mouseX && mouseX < 1182 && 405 < mouseY && mouseY < 491) {
      state_comeback = state;
      state = 2.99;
      mail_open_time += 1;
    }
  }
}

function home() {
  if (state == 2) drawhome0();
  //인트로 이후 화면
  else if (state == 2.1) drawhome1();
  //첫날 우체통 안
  else if (state == 2.2) drawhome2();
  //첫날 편지
  else if (state == 2.3) drawhome3();
  //첫날 멘트
  else if (state == 2.4) drawhome4();
  //문
  else if (state == 2.5) drawHomeFadeFromDoor();
  // //문 페이드 아웃
  // else if (state == 2.6) drawhome6();
  //지도
  else if (state == 2.7) drawhome7();
  //둘째 날 아침
  else if (state == 2.8) drawhome8();
  //셋째 날 아침
  else if (state == 2.9) drawhome9();
  //마지막 날 아침
  else if (state == 2.11) drawhome11();
  //헬스장 밤
  else if (state == 2.12) drawhome12();
  else if (state == 2.13) drawhome13();
  //헬스장 연구 일지
  else if (state == 2.135) drawhome135();
  //헬스장 스탬프
  else if (state == 2.14) drawHomeFadeFrom13();
  //헬스장 페이드 아웃
  else if (state == 2.15) drawhome15();
  //카페 밤
  else if (state == 2.16) drawhome16();
  else if (state == 2.17) drawhome17();
  //카페 연구 일지
  else if (state == 2.175) drawhome175();
  //카페 스탬프
  else if (state == 2.18) drawHomeFadeFrom17();
  //카페 페이드 아웃
  else if (state == 2.19) drawhome19();
  //백화점 밤
  else if (state == 2.21) drawhome21();
  else if (state == 2.22) drawhome22();
  //백화점 연구 일지
  else if (state == 2.225) drawhome225();
  //백화점 스탬프
  else if (state == 2.23) drawHomeFadeFrom22();
  //백화점 페이드 아웃
  else if (state == 2.24) drawhome24();
  //학교 밤
  else if (state == 2.25) drawhome25();
  else if (state == 2.26) drawhome26();
  //학교 연구 일지
  else if (state == 2.265) drawhome265();
  //학교 스탬프
  else if (state == 2.27) drawHomeFadeFrom26();
  //학교 페이드 아웃
  else if (state == 2.99) drawhomeNoPost();
}

function drawhome0() {
  birdBgm.stop();
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }

  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);

  if (0 < frameCount % 60 && frameCount % 60 <= 30) {
    image(images[2][1], 1010, 375, 182, 265); // 첫 번째 이미지
  } else {
    image(images[2][1.1], 1000, 365, 202, 285); // 두 번째 이미지
  }

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  fill(0,0,0,255-(frameCount-curFrame)*7);
     rectMode(CORNER); rect(0,0,width,height);
     fill(0);
}

function drawhome1() {
  if (mail_s_now == 0) {
    mailboxOpenSound.play();
    mail_s_now = 1;
  }
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][4], 0, 0, width, height);

  imageMode(CENTER);
  let letter_size_1 = 471;
  let letter_size_2 = 328;
  if (480 < mouseX && mouseX < 680 && 450 < mouseY && mouseY < 650) {
    letter_size_1 = 491;
    letter_size_2 = 348;
  }
  image(images[2][5], 490, 550, letter_size_1, letter_size_2);

  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
}

function drawhome2() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[0][19], 0, 0, width, height);
  //image(images[2][4], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][9], width / 2, height / 2, 800, 600); //편지

  imageMode(CORNER);
  image(images[0][4], 220, 100, 100, 100);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(35);
  textFont(letterF);
  text(
    "쿼카 마을에는 잘 도착했나?\n앞으로 나흘 동안 쿼카 마을을 살피며\n쿼카들의 행복 요인에 대해 연구하도록 하게.\n매일 연구 결과를 잘 기록해서 가져오는 걸 잊지 말게나.\n행운을 빌겠네.",
    width / 2,
    height / 2
  );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(525, 439, 575, 439);
  // line(510, 470, 605, 470);
  // line(405, 503, 505, 503);
  // noStroke();
}

function drawhome3() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("좋았어! 그럼 바로 시작해볼까?", width / 2, 668.5);
}

function drawhome4() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][10], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
}

function drawhome45() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }

  if (home_d_now == todayDay) {
    doorOpen.play();
    home_d_now += 1;
  }

  imageMode(CORNER);
  image(images[2][11], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
}

function drawHomeFadeFromDoor() {
  background(0);
  drawhome45();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 3;
    curFrame = frameCount;
  }
}

// function drawhome6() {
//   //지도
//   state = 3;
// }

function drawhome7() {
  ghost.stop();
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }

  if (todayDayPlus == true) {
    todayDay += 1;
    todayDayPlus = false;
  }

  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "쿼카 마을에서의 두 번째 날!\n오늘도 열심히 쿼카들을 관찰하고 와야겠어.",
    width / 2,
    668.5
  );

  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome8() {
  ghost.stop();
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  if (todayDayPlus == false) {
    todayDay += 1;
    todayDayPlus = true;
  }

  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "벌써 쿼카 마을에서의 세 번째 날이라니!\n오늘도 열심히 쿼카들을 관찰하고 와야겠어.",
    width / 2,
    668.5
  );

  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome9() {
  ghost.stop();
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  if (todayDayPlus == true) {
    todayDay += 1;
    todayDayPlus = false;
  }

  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "오늘만 지나면 벌써 쿼카 마을을 떠나는 날이네.\n괜히 아쉬운 마음이 들지만, 오늘도 최선을 다해야지.",
    width / 2,
    668.5
  );
  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome11() {
  gymBgm.stop();
  v4_12.stop();
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "다리가 후들후들 떨리는 게\n갓 태어난 송아지가 된 것 같아...",
    width / 2,
    668.5
  );
}

function drawhome12() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("그래도 연구 일지는 써야 하니까...", width / 2, 668.5);

  fill(0,0,0,255-(frameCount-curFrame)*7);
    rectMode(CORNER); rect(0,0,width,height);
    fill(0);
}

function drawhome13() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (startTime == 0) {
    startTime = millis(); // 현재 시간 기록
  }

    if (millis() - startTime >= durat) {
    state = 2.135;
    startTime = 0; // startTime 초기화
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.4], width / 2, height / 2, 600, 700);

  //image(images[4][4], width / 2, height / 2 - 150, 260, 260);
  // image(images[2][12], width / 2 - 20, 670, 150, 150);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 425);
  // textSize(30);
  // text(
  //   "헬짱 쿼카는 몸과 마음이 건강해\n보였고, 특히 자존감이 높아보였다.\n꾸준한 운동을 통해 자기관리를 하며\n행복을 느끼는 것으로 보인다.",
  //   430,
  //   530
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(555, 540, 710, 540);
  // line(545, 577, 605, 577);
  // line(430, 615, 535, 615);
  // line(605, 615, 685, 615);
  // noStroke();
}

function drawhome135() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (home_s_now == todayDay) {
    stampSound.play();
    home_s_now += 1;
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.4], width / 2, height / 2, 600, 700);
  image(images[0][4], 350, 100, 100, 100);

  //image(images[4][4], width / 2, height / 2 - 150, 260, 260);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 425);
  // textSize(30);
  // text(
  //   "헬짱 쿼카는 몸과 마음이 건강해\n보였고, 특히 자존감이 높아보였다.\n꾸준한 운동을 통해 자기관리를 하며\n행복을 느끼는 것으로 보인다.",
  //   430,
  //   530
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(555, 540, 710, 540);
  // line(545, 577, 605, 577);
  // line(430, 615, 535, 615);
  // line(605, 615, 685, 615);
  // noStroke();

  image(images[2][6], 780, 650, 100, 100);
  // if (startTime == 0) {
  //   startTime = millis(); // 현재 시간 기록
  // }
  // if (millis() - startTime >= stampTimer) {
  //   state = 2.14;
  //   startTime = 0; // startTime 초기화
  // }
}

function drawHomeFadeFrom13() {
  background(0);
  drawhome135();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    if (todayDay == 1) {
      state = 2.7;
    } else if (todayDay == 2) {
      state = 2.8;
    } else if (todayDay == 3) {
      state = 2.9;
    } else if (todayDay == 4) {
      state = 8;
    }
    curFrame = frameCount;
  }
}

function drawhome15() {
  cafeBgm.stop();
  decision.stop();
  my_girl.stop();
  v6_13.stop();
  v6_9.stop();
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "쿼카 커플도 인간 커플이랑 별 다를 바 없구나!\n재밌는 경험이었어.",
    width / 2,
    668.5
  );
  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome16() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("이제 연구 일지를 써볼까?", width / 2, 668.5);
}

function drawhome17() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (startTime == 0) {
    startTime = millis(); // 현재 시간 기록
  }

    if (millis() - startTime >= durat) {
    state = 2.175;
    startTime = 0; // startTime 초기화
  }


  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.7], width / 2, height / 2, 600, 700);

  //image(images[7][4], width / 2-60, height / 2 - 170, 280, 280);
  // image(images[2][12], width / 2 - 20, 690, 150, 150);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 400);
  // textSize(30);
  // text(
  //   "쿼카들이라고 해서 연애할 때 갈등이\n없는 것은 절대 아니었다...!\n하지만 사소한 갈등도 사랑으로\n극복하고 채워나가며 행복해하는\n모습이 인상적이었다.",
  //   430,
  //   530
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(635, 613, 710, 613);
  // line(430, 653, 465, 653);
  // noStroke();
}

function drawhome175() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (home_s_now == todayDay) {
    stampSound.play();
    home_s_now += 1;
  }
  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.7], width / 2, height / 2, 600, 700);
  image(images[0][4], 350, 100, 100, 100);

  //image(images[7][4], width / 2-60, height / 2 - 170, 280, 280);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 400);
  // textSize(30);
  // text(
  //   "쿼카들이라고 해서 연애할 때 갈등이\n없는 것은 절대 아니었다...!\n하지만 사소한 갈등도 사랑으로\n극복하고 채워나가며 행복해하는\n모습이 인상적이었다.",
  //   430,
  //   530
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(635, 613, 710, 613);
  // line(430, 653, 465, 653);
  // noStroke();

  image(images[2][7], 780, 650, 100, 100);
}

function drawHomeFadeFrom17() {
  background(0);
  drawhome175();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    if (todayDay == 1) {
      state = 2.7;
    } else if (todayDay == 2) {
      state = 2.8;
    } else if (todayDay == 3) {
      state = 2.9;
    } else if (todayDay == 4) {
      state = 8;
    }
    curFrame = frameCount;
  }
}

function drawhome19() {
  toxic.stop();
  v8_8.stop();
  v8_6.stop();
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "어휴... 까탈스러워서 힘들어 죽는 줄 알았네.\n쿼카들도 예쁜 옷 좋아하는 건 처음 알았어!",
    width / 2,
    668.5
  );

  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome21() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("어서 연구 일지 작성하고 자야겠다!", width / 2, 668.5);
}

function drawhome22() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (startTime == 0) {
    startTime = millis(); // 현재 시간 기록
  }

  if (millis() - startTime >= durat) {
    state = 2.225;
    startTime = 0; // startTime 초기화
  }


  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.6], width / 2, height / 2, 600, 700);

  //image(images[6][2], width / 2-30, height / 2 - 110, 280, 280);
  // image(images[2][12], width / 2 - 20, 690, 150, 150);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 435);
  // textSize(30);
  // text(
  //   "패셔니스타 쿼카는 다양한 멋진 옷을\n통해 개성을 표출하고 있었다!\n남의 시선에 신경쓰지 않고 자신감\n있게 다니는 순간에서 행복을 느끼고\n있었다.",
  //   430,
  //   550
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(480, 598, 575, 598);
  // line(675, 634, 733, 634);
  // noStroke();
}

function drawhome225() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (home_s_now == todayDay) {
    stampSound.play();
    home_s_now += 1;
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.6], width / 2, height / 2, 600, 700);
  image(images[0][4], 350, 100, 100, 100);

  //image(images[6][2], width / 2-30, height / 2 - 110, 280, 280);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 435);
  // textSize(30);
  // text(
  //   "패셔니스타 쿼카는 다양한 멋진 옷을\n통해 개성을 표출하고 있었다!\n남의 시선에 신경쓰지 않고 자신감\n있게 다니는 순간에서 행복을 느끼고\n있었다.",
  //   430,
  //   550
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(480, 598, 575, 598);
  // line(675, 634, 733, 634);
  // noStroke();

  image(images[2][8], 780, 650, 100, 100);
}

function drawHomeFadeFrom22() {
  background(0);
  drawhome225();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    if (todayDay == 1) {
      state = 2.7;
    } else if (todayDay == 2) {
      state = 2.8;
    } else if (todayDay == 3) {
      state = 2.9;
    } else if (todayDay == 4) {
      state = 8;
    }
    curFrame = frameCount;
  }
}

function drawhome24() {
  v7_10.stop();
  birds.stop();
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "쿼카는 나뭇잎만 먹고도 행복해 하는구나!\n신기한 동물이야 정말.",
    width / 2,
    668.5
  );

  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome25() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "그나저나 너무 배고프다.\n얼른 연구 일지 마무리하고 밥 먹어야지.",
    width / 2,
    668.5
  );
  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}

function drawhome26() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (startTime == 0) {
    startTime = millis(); // 현재 시간 기록
  }

  if (millis() - startTime >= durat) {
    state = 2.265;
    startTime = 0; // startTime 초기화
  }


  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.5], width / 2, height / 2, 600, 700);

  //image(images[5][7], width / 2-30, height / 2 - 130, 380, 380);
  // image(images[2][12], width / 2 - 20, 690, 150, 150);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 430);
  // textSize(30);
  // text(
  //   "학생 쿼카는 맛있는 나뭇잎을 먹으며\n행복을 느끼는 모습을 보였다!\n비싸고 특별한 음식은 아니지만\n일상적인 식사를 통해 행복을\n느끼는 모습이 보기 좋았다.",
  //   430,
  //   545
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(550, 555, 670, 555);
  // line(430, 667, 553, 667);
  // noStroke();
}

function drawhome265() {
  if (ghost.isPlaying() == false) {
    ghost.play();
  }

  if (home_s_now == todayDay) {
    stampSound.play();
    home_s_now += 1;
  }

  imageMode(CORNER);
  image(images[2][2], 0, 0, width, height);
  image(images[2][3], 1010, 375);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  imageMode(CENTER);
  image(images[0][5.5], width / 2, height / 2, 600, 700);
  image(images[0][4], 350, 100, 100, 100);

  //image(images[5][7], width / 2-30, height / 2 - 130, 380, 380);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);

  // textAlign(LEFT);
  // textSize(50);
  // textFont(researchF);
  // text(todayDay + "일차 연구 일지", 430, 430);
  // textSize(30);
  // text(
  //   "학생 쿼카는 맛있는 나뭇잎을 먹으며\n행복을 느끼는 모습을 보였다!\n비싸고 특별한 음식은 아니지만\n일상적인 식사를 통해 행복을\n느끼는 모습이 보기 좋았다.",
  //   430,
  //   545
  // );
  
  // strokeWeight(2);
  // stroke(255, 0, 0);
  // line(550, 555, 670, 555);
  // line(430, 667, 553, 667);
  // noStroke();

  image(images[2][9], 780, 650, 100, 100);
}

function drawHomeFadeFrom26() {
  background(0);
  drawhome265();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    if (todayDay == 1) {
      state = 2.7;
    } else if (todayDay == 2) {
      state = 2.8;
    } else if (todayDay == 3) {
      state = 2.9;
    } else if (todayDay == 4) {
      state = 8;
    }
    curFrame = frameCount;
  }
}

function drawhomeNoPost() {
  if (mail_s_now == mail_open_time) {
    mailboxOpenSound.play();
    mail_s_now += 1;
  }

  imageMode(CORNER);
  image(images[2][4], 0, 0, width, height);

  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
}

//===================여기까지 집===========================

//===================여기서부터 지도========================
//지도 마우스이벤트
function mousePressedAt3() {
  if (255 - (frameCount - curFrame) * 7 > 0) return;
  //school을 클리어하지 않은 상태에서 school을 클릭했을 때, state를 3에서 5로 바꿔줌
  if (
    !sch_clear &&
    597 < mouseX &&
    mouseX < 699 &&
    247 < mouseY &&
    mouseY < 369
  )
    state = 5;
  //gym
  else if (
    !gym_clear &&
    807 < mouseX &&
    mouseX < 914 &&
    98 < mouseY &&
    mouseY < 239
  ) {
    state = 4;
    frameRate(8);
  }

  //stoartment store
  else if (
    !sto_clear &&
    773 < mouseX &&
    mouseX < 900 &&
    421 < mouseY &&
    mouseY < 605
  )
    state = 6;
  //cafe
  else if (
    !caf_clear &&
    359 < mouseX &&
    mouseX < 473 &&
    349 < mouseY &&
    mouseY < 507
  )
    state = 7;
  //allClear
  else if (sch_clear && gym_clear && sto_clear && caf_clear) {
    state = 8;
  }
}

function drawMap() {
  imageMode(CENTER);
  image(images[0][11], width / 2, height / 2, width, height);
  image(images[3][0], width / 2, height / 2, width, height);

  //gym 크기 변화
  if (
    !gym_clear &&
    807 < mouseX &&
    mouseX < 914 &&
    98 < mouseY &&
    mouseY < 239
  ) {
    gym_w = images[3][1].width * 1.3;
    gym_h = images[3][1].height * 1.3;
  } else {
    gym_w = images[3][1].width * 1.2;
    gym_h = images[3][1].height * 1.2;
  }

  //school 크기 변화
  if (
    !sch_clear &&
    597 < mouseX &&
    mouseX < 699 &&
    247 < mouseY &&
    mouseY < 369
  ) {
    sch_w = images[3][2].width * 1.3;
    sch_h = images[3][2].height * 1.3;
  } else {
    sch_w = images[3][2].width * 1.2;
    sch_h = images[3][2].height * 1.2;
  }

  //store 크기 변화
  if (
    !sto_clear &&
    773 < mouseX &&
    mouseX < 900 &&
    421 < mouseY &&
    mouseY < 605
  ) {
    sto_w = images[3][3].width * 1.3;
    sto_h = images[3][3].height * 1.3;
  } else {
    sto_w = images[3][3].width * 1.2;
    sto_h = images[3][3].height * 1.2;
  }

  //cafe 크기 변화
  if (
    !caf_clear &&
    359 < mouseX &&
    mouseX < 473 &&
    349 < mouseY &&
    mouseY < 507
  ) {
    caf_w = images[3][4].width * 1.3;
    caf_h = images[3][4].height * 1.3;
  } else {
    caf_w = images[3][4].width * 1.2;
    caf_h = images[3][4].height * 1.2;
  }

  image(images[3][1], 865, 165, gym_w, gym_h); //gym
  image(images[3][2], 648, 305, sch_w, sch_h); //school
  image(images[3][3], 831, 510, sto_w, sto_h); //stoartment store
  image(images[3][4], 420, 430, caf_w, caf_h); //cafe

  //gym
  if (gym_clear) {
    image(images[3][5], 865, 165, images[3][5].width, images[3][5].height);
  }
  //school
  if (sch_clear) {
    image(images[3][5], 648, 305, images[3][5].width, images[3][5].height);
  }
  //stoartment store
  if (sto_clear) {
    image(images[3][5], 831, 510, images[3][5].width, images[3][5].height);
  }
  //cafe
  if (caf_clear) {
    image(images[3][5], 420, 430, images[3][5].width, images[3][5].height);
  }

  imageMode(CORNER);

  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
}
//===================여기까지 지도========================

//===================여기서부터 헬스장========================
//헬스장 마우스 이벤트
function mouseClickedAt4() {
  if (state == 4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.01;
    } else {
      state = 4;
    }
  } else if (state == 4.01) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.02;
    } else {
      state = 4.01;
    }
  } else if (state == 4.02) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.03;
    } else {
      state = 4.02;
    }
  } else if (state == 4.03) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.04;
    } else {
      state = 4.03;
    }
  } else if (state == 4.04) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.05;
    } else {
      state = 4.04;
    }
  } else if (state == 4.05) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.06;
    } else {
      state = 4.05;
    }
  } else if (state == 4.06) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.07;
    } else {
      state = 4.06;
    }
  } else if (state == 4.07) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.08;
    } else {
      state = 4.07;
    }
  } else if (state == 4.08) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.09;
    } else {
      state = 4.08;
    }
  } else if (state == 4.09) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.1;
    } else {
      state = 4.09;
    }
  } else if (state == 4.1) {
    if (mouseX > 30 && mouseX < 350 && mouseY > 585 && mouseY < 715) {
      state = 4.11;
    } else if (mouseX > 480 && mouseX < 800 && mouseY > 585 && mouseY < 715) {
      state = 4.12;
    } else if (mouseX > 930 && mouseX < 1250 && mouseY > 585 && mouseY < 715) {
      state = 4.13;
    } else {
      state = 4.1;
    }
  } else if (state == 4.11) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.14;
    } else {
      state = 4.11;
    }
  } else if (state == 4.12) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.14;
    } else {
      state = 4.12;
    }
  } else if (state == 4.13) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.14;
    } else {
      state = 4.13;
    }
  } else if (state == 4.14) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.15;
    } else {
      state = 4.14;
    }
  } else if (state == 4.16) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.18;
    } else {
      state = 4.16;
    }
  } else if (state == 4.18) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.19;
    } else {
      state = 4.18;
    }
  } else if (state == 4.19) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.20;
    } else {
      state = 4.19;
    }
  } else if (state == 4.20) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.21;
    } else {
      state = 4.20;
    }
  } else if (state == 4.21) {
      state = 4.22;
  } else if (state == 4.22) {
    if (500 < mouseX && mouseX < 785 && 626 < mouseY && mouseY < 700) {state = 4.23;
  } else {
      state = 4.22;
    }
  } else if (state == 4.36) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.42;
    } else {
      state = 4.36;
    }
  } else if (state == 4.37) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.38;
    } else {
      state = 4.37;
    }
  } else if (state == 4.38) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.39;
    } else {
      state = 4.38;
    }
  } else if (state == 4.39) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.4;
    } else {
      state = 4.39;
    }
  } else if (state == 4.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.41;
      curFrame = frameCount;
    } else {
      state = 4.4;
    }
  } else if (state == 4.41) {
  } else if (state == 4.42) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.43;
    } else {
      state = 4.42;
    }
  } else if (state == 4.43) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 4.41;
      curFrame = frameCount;
    } else {
      state = 4.43;
    }
  }
  
}

function gym() {
  background(200);
  if (state == 4) Gym_1();
  else if (state == 4.01) Gym_1();
  else if (state == 4.02) Gym_2();
  else if (state == 4.03) Gym_3();
  else if (state == 4.04) Gym_4();
  else if (state == 4.05) Gym_5();
  else if (state == 4.06) Gym_6();
  else if (state == 4.07) Gym_7();
  else if (state == 4.08) Gym_8();
  else if (state == 4.09) Gym_9();
  else if (state == 4.1) {
    frameRate(8);
    Gym_10();
    }
  else if (state == 4.11) Gym_11();
  else if (state == 4.12) Gym_12();
  else if (state == 4.13) Gym_13();
  else if (state == 4.14) Gym_14();
  else if (state == 4.15) Gym_15();
  else if (state == 4.16) Gym_16();
  // else if (state == 4.17) Gym_17();
  else if (state == 4.18) Gym_18();
  else if (state == 4.19) Gym_19();
  else if (state == 4.2) Gym_20();
  else if (state == 4.21) Gym_21();
  else if (state == 4.22) Gym_22();
  else if (state == 4.23) Gym_23();
  else if (state == 4.24) {
    Gym_24();
    // 전체 볼륨(0과 1.0 사이) 받아오기
    let vol = mic.getLevel();

    // 마이크 소리의 볼륨에 따라 높이가 변하는 직사각형 그리기
    let rectHeight = map(vol, 0, 1, 0, height);
    rectHeight = constrain(rectHeight, 0, 600);

    // 그라데이션 색상 계산하기
    let topColor = color(255, 0, 0); // 윗부분 색상
    let bottomColor = color(239, 180, 30); // 아랫부분 색상
    let fillColor = lerpColor(bottomColor, topColor, vol); // 그라데이션 색상 계산
    let rectY = height - rectHeight / 2 - 80; // 직사각형의 Y 좌표 계산

    rectMode(CENTER);
    image(images[4][12], 93, height / 2 + 20, 50, 600); //게이지 바 배경 프레임
    image(images[4][13], 93, 570, 50, 5); //게이지 limit
    image(images[0][10], 1150, 130, 150, 170); //timer
    fill(fillColor); // 채우기 색상 설정
    noStroke(0);
    rect(93, rectY, 50, rectHeight); // 게이지 바
    image(images[4][12.1], 98, height / 2 + 17, 127.64, 647.8); //게이지 바 테두리

  textSize(50);
  textAlign(CENTER);
  textFont(nameF);
  fill(0);
  text(int((gym_timer1 / 8) % 10) + 1, 1150, 130);
    
      if (gym_timer1 > 0) {
    gym_timer1--;
  } 
    
    if (currentIndex == 0) {
      intervalId = setInterval(showNextImage, 500); // 0.5초 간격으로 이미지 표시
    }

    // 직사각형의 윗부분이 일정 수치를 넘으면 다음 단계로 이동
    if (rectHeight > 150) {
      startTime = 0; // startTime 초기화
      state = 4.31;
    }
    noFill();
    noStroke();                      
    }
  else if (state == 4.25) Gym_25();
  else if (state == 4.26) {
        Gym_26();
    // 전체 볼륨(0과 1.0 사이) 받아오기
    let vol = mic.getLevel();

    // 마이크 소리의 볼륨에 따라 높이가 변하는 직사각형 그리기
    let rectHeight = map(vol, 0, 1, 0, height);
    rectHeight = constrain(rectHeight, 0, 600);

    // 그라데이션 색상 계산하기
    let topColor = color(255, 0, 0); // 윗부분 색상
    let bottomColor = color(239, 180, 30); // 아랫부분 색상
    let fillColor = lerpColor(bottomColor, topColor, vol); // 그라데이션 색상 계산
    let rectY = height - rectHeight / 2 - 80; // 직사각형의 Y 좌표 계산

    rectMode(CENTER);
    image(images[4][12], 93, height / 2 + 20, 50, 600); //게이지 바 배경 프레임
    image(images[4][13], 93, 420, 50, 5); //게이지 limit
    image(images[0][10], 1150, 130, 150, 170); //timer
    fill(fillColor); // 채우기 색상 설정
    noStroke(0);
    rect(93, rectY, 50, rectHeight); // 게이지 바
        image(images[4][12.1], 98, height / 2 + 17, 127.64, 647.8); //게이지 바 테두리

  textSize(50);
  textAlign(CENTER);
  textFont(nameF);
  fill(0);
  text(int((gym_timer2 / 8) % 10) + 1, 1150, 130);
    
      if (gym_timer2 > 0) {
    gym_timer2--;
  } 

    if (currentIndex == 0) {
      intervalId = setInterval(showNextImage, 500); // 0.5초 간격으로 이미지 표시
    }

    // 직사각형의 윗부분이 일정 수치를 넘으면 다음 단계로 이동
    if (rectHeight > 300) {
      startTime = 0; // startTime 초기화
      state = 4.32;
    }
    noFill();
    noStroke();
  }
  else if (state == 4.27) Gym_27();
  else if (state == 4.28) {
        Gym_28();
    // 전체 볼륨(0과 1.0 사이) 받아오기
    let vol = mic.getLevel();

    // 마이크 소리의 볼륨에 따라 높이가 변하는 직사각형 그리기
    let rectHeight = map(vol, 0, 1, 0, height);
    rectHeight = constrain(rectHeight, 0, 600);

    // 그라데이션 색상 계산하기
    let topColor = color(255, 0, 0); // 윗부분 색상
    let bottomColor = color(239, 180, 30); // 아랫부분 색상
    let fillColor = lerpColor(bottomColor, topColor, vol); // 그라데이션 색상 계산
    let rectY = height - rectHeight / 2 - 80; // 직사각형의 Y 좌표 계산

    rectMode(CENTER);
    image(images[4][12], 93, height / 2 + 20, 50, 600); //게이지 바 배경 프레임
    image(images[4][13], 93, 270, 50, 5); //게이지 limit
    image(images[0][10], 1150, 130, 150, 170); //timer
    fill(fillColor); // 채우기 색상 설정
    noStroke(0);
    rect(93, rectY, 50, rectHeight); // 게이지 바
        image(images[4][12.1], 98, height / 2 + 17, 127.64, 647.8); //게이지 바 테두리

  textSize(50);
  textAlign(CENTER);
  textFont(nameF);
  fill(0);
  text(int((gym_timer3 / 8) % 10) + 1, 1150, 130);
    
      if (gym_timer3 > 0) {
    gym_timer3--;
  } 
    
    if (currentIndex == 0) {
      intervalId = setInterval(showNextImage, 500); // 0.5초 간격으로 이미지 표시
    }

    // 직사각형의 윗부분이 일정 수치를 넘으면 다음 단계로 이동
    if (rectHeight > 450) {
      startTime = 0; // startTime 초기화
      state = 4.33;
    }
    noFill();
    noStroke();
  }
  else if (state == 4.29)
    Gym_29();
  else if (state == 4.3) {
    Gym_30();
    // 전체 볼륨(0과 1.0 사이) 받아오기
    let vol = mic.getLevel();

    // 마이크 소리의 볼륨에 따라 높이가 변하는 직사각형 그리기
    let rectHeight = map(vol, 0, 1, 0, height);
    rectHeight = constrain(rectHeight, 0, 600);

    // 그라데이션 색상 계산하기
    let topColor = color(255, 0, 0); // 윗부분 색상
    let bottomColor = color(239, 180, 30); // 아랫부분 색상
    let fillColor = lerpColor(bottomColor, topColor, vol); // 그라데이션 색상 계산
    let rectY = height - rectHeight / 2 - 80; // 직사각형의 Y 좌표 계산

    rectMode(CENTER);
    image(images[4][12], 93, height / 2 + 20, 50, 600); //게이지 바 배경 프레임
    image(images[4][13], 93, 145, 50, 5); //게이지 limit
    image(images[0][10], 1150, 130, 150, 170); //timer
    fill(fillColor); // 채우기 색상 설정
    noStroke(0);
    rect(93, rectY, 50, rectHeight); // 게이지 바
        image(images[4][12.1], 98, height / 2 + 17, 127.64, 647.8); //게이지 바 테두리

  textSize(50);
  textAlign(CENTER);
  textFont(nameF);
  fill(0);
  text(int((gym_timer4 / 8) % 10) + 1, 1150, 130);
    
      if (gym_timer4 > 0) {
    gym_timer4--;
  } 
    
    if (currentIndex == 0) {
      intervalId = setInterval(showNextImage, 500); // 0.5초 간격으로 이미지 표시
    }

    // 직사각형의 윗부분이 일정 수치를 넘으면 다음 단계로 이동
    if (rectHeight > 580) {
      startTime = 0; // startTime 초기화
      state = 4.34;
    }
    noFill();
    noStroke();
  } else if (state == 4.31) {
    Gym_Success_1();
  } else if (state == 4.32) {
    Gym_Success_2();
  } else if (state == 4.33) {
    Gym_Success_3();
  } else if (state == 4.34) {
    Gym_Success_4();
  } else if (state == 4.351) {
    Gym_Fail_1();
  } else if (state == 4.352) {
    Gym_Fail_2();
  } else if (state == 4.353) {
    Gym_Fail_3();
  } else if (state == 4.354) {
    Gym_Fail_4();
  } else if (state == 4.36) {
    Gym_36();
  } else if (state == 4.37) {
    Gym_37();
  } else if (state == 4.38) {
    Gym_38();
  } else if (state == 4.39) { frameRate(30);
    Gym_39();
  } else if (state == 4.4) {
    Gym_40();
  } else if (state == 4.41) {
    Gym_41();
  } else if (state == 4.42) {
    Gym_42(); frameRate(30);
  } else if (state == 4.43) {
    Gym_43();
  }
}


function Gym_1() {
  homeBgm.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("쿼카마을에도 헬스장이 있구나! \n 정말 신기하다.", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_2() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("온갖 쇳덩어리에 머신들까지... \n 인간보다 낫네.", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_3() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "그렇지만 운동은 힘든 거니까, 행복이랑은 거리가 멀지! \n 여긴 아닌 것 같으니 돌아가자.",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_4() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == false) {
    v4_1.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  image(images[4][5], 338, 95, 603, 603); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("어이, 거기 너. 동작 그만.", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_5() {
  v4_1.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][1], width / 2, height / 2 - 100, 600, 650); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네? 저요?", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_6() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == true) {
    v4_2.play();
    gym_v_now = false;
  }
  
  imageMode(CORNER);
  image(images[4][0], -1163, -193, 3605, 2253);
  imageMode(CENTER);
  image(images[4][4], width / 2, height / 2 + 70, 1200, 1200); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("그래, 너 말이야. \n 보아하니 헬스장은 처음인 헬린이 쿼카 같은데... ", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_7() {
  v4_2.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == false) {
    v4_3.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  image(images[4][2],336, 37, 622, 622); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "단도직입적으로 물어본다. 내 몸, 어떤 것 같아?",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_8() {
  v4_3.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][3], width / 2, height / 2, 800, 900); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("예?", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_9() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == true) {
    v4_4.play();
    gym_v_now = false;
  }
  
  imageMode(CORNER);
  image(images[4][0], -1163, -193, 3605, 2253);
  image(images[4][3], -166, -193, 1612, 1612); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  textSize(35);
  text("내 몸 어 떤 것 같 냐 고.", width / 2, 658.5);
  textSize(25);
  text(" 어디가 제일 좋아보이는지 한 번 말해봐.", width / 2, 698.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_10() {
  v4_4.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
    image(images[4][2], 336, 0, 677, 677); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  imageMode(CENTER);
  image(
    images[0][3],
    width / 2 - 450,
    height / 2 + 250,
    width / 4,
    height / 8 + 30
  ); //선택지 버튼
  image(images[0][3], width / 2, height / 2 + 250, width / 4, height / 8 + 30); //선택지 버튼
  image(
    images[0][3],
    width / 2 + 450,
    height / 2 + 250,
    width / 4,
    height / 8 + 30
  ); //선택지 버튼
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(scriptF);
  text("가슴", width / 2 - 450, height / 2 + 250);
  text("등", width / 2, height / 2 + 250);
  text("하체", width / 2 + 450, height / 2 + 250);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_11() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == false) {
    v4_5.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][6.1], width / 2, height / 2, 700, 800); // 첫 번째 이미지
  } else {
    image(images[4][6.2], width / 2, height / 2, 700, 800); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "촤하핫! 너 뭘 좀 아는 쿼카구나!!! 어제 가슴 운동한 건 어떻게 알고!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_12() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
  if (gym_v_now == false) {
    v4_5.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][6.1], width / 2, height / 2, 700, 800); // 첫 번째 이미지
  } else {
    image(images[4][6.2], width / 2, height / 2, 700, 800); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "촤하핫! 너 뭘 좀 아는 쿼카구나!!! 어제 등 운동한 건 어떻게 알고!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_13() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
  if (gym_v_now == false) {
    v4_5.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][6.1], width / 2, height / 2, 700, 800); // 첫 번째 이미지
  } else {
    image(images[4][6.2], width / 2, height / 2, 700, 800); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "촤하핫! 너 뭘 좀 아는 쿼카구나!!! 어제 하체 운동한 건 어떻게 알고!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_14() {
  v4_5.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][6.1], width / 2, height / 2, 700, 800); // 첫 번째 이미지
  } else {
    image(images[4][6.2], width / 2, height / 2, 700, 800); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "아하핫..! 그렇군요! 어쩐지! \n 그럼 전 이만 가보겠습니다! 파이팅하세요...!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_15() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
    if(gym_s_now == false) {
    door.play();
    gym_s_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][15], 0, 0, width, height);
  if (state == 4.15) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    imageMode(CORNER);
    image(images[0][2], 58, 27, 90, 68); //홈 버튼
    imageMode(CORNER);
    image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
    textAlign(CENTER, CENTER);
    textFont(nameF);
    textSize(35);
    text("DAY " + todayDay+"/5", 1110, 50);

    if (millis() - startTime >= durat) {
      state = 4.16;
      startTime = 0; // startTime 초기화
    }
  }
}

function Gym_16() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][15], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("뭐...뭐야? 문이 잠겨있잖아?!", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_18() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][14], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("...?!", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_19() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == true) {
    v4_6.play();
    gym_v_now = false;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][4], width / 2, height / 2 - 50, 600, 650); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("어딜 도망가. 너한테 선택지는 없어.", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_20() {
  v4_6.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
  if (gym_v_now == false) {
    v4_7.play();
    gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][4], width / 2, height / 2 - 50, 600, 650); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "오늘 온 김에 내 보조를 좀 해줘야겠다. \n 마침 오늘 스쿼트 1rm 측정하는 날이거든.",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_21() {
   v4_7.stop();
  gymBgm.stop();
  if (squat.isPlaying() == false) {
    squat.play();
  }

  imageMode(CENTER);
  image(images[4][8], width / 2, height / 2, width, height);
//    imageMode(CORNER);
// if (currentImageIndex % 2 == 0) {
//     image(images[0][8], 484, 620, 312, 91); // 첫 번째 이미지
//   } else {
//     image(images[0][8.1], 484, 620, 312, 91); // 두 번째 이미지
//   }
//   currentImageIndex++;
}

function Gym_22() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  imageMode(CORNER);
  image(images[0][11], 0, 0, 1280, 800); //배경
  image(images[0][1.4], width/2-540, height / 2-360, 1080, 1080*images[0][1.4].height/images[0][1.4].width); //게임 소개글 보드
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont(nameF);
  text("HOW TO PLAY", width / 2, 90);
  textSize(25);
  textFont(scriptF);
  //text("헬짱 쿼카의 일일 보조로 지목된 당신!\n 헬짱 쿼카가 스쿼트 최대 무게를 성공할 수 있도록 목청껏 기합을 넣어 응원하라!\n\n 총 4라운드로 진행되며, 매 라운드마다 기합 데시벨이 기준점을 넘어야 성공! \n 제한 시간 내에 기준점을 넘지 못하면 실패! \n 좌측 게이지 바를 통해 데시벨을 확인할 수 있다!", width / 2, 390);

  imageMode(CENTER);
  if (frameCount % 20 < 10) {
  image(images[0][8], width/2, 620, 440, 275);}
  else {image(images[0][8.1], width/2, 620, 440, 275);}
  imageMode(CORNER);
  
  currentImageIndex++;
}

function Gym_23() {
  if (squat.isPlaying() == false) {
    squat.play();
  }

    if (state == 4.23) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.24;
      startTime = 0; // startTime 초기화
    }
  }
  
  //1라운드 알림
  imageMode(CENTER);
  image(images[0][11], width / 2, height / 2, 1280, 800);
  image(images[4][8.1], width / 2, height / 2, 600, 210);
}

function Gym_24() {
  // 1라운드
  if (squat.isPlaying() == false) {
    squat.play();
  }
  image(images[4][0], width / 2, height / 2, width, height);
  image(images[4][23.1], 505, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 595, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 685, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 775, 70, 150, 150); //라운드 표시용 바벨 버튼

  if (state == 4.24) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }
    if (millis() - startTime >= durat + 6000) {
      state = 4.351;
      startTime = 0; // startTime 초기화
    }
  }

  if (currentIndex % 15 == 0) {
    image(images[4][11.11], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 1) {
    image(images[4][11.11], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 2) {
    image(images[4][11.12], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 3) {
    image(images[4][11.12], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 4) {
    image(images[4][11.12], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 5) {
    image(images[4][11.13], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 6) {
    image(images[4][11.13], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 7) {
    image(images[4][11.13], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 8) {
    image(images[4][11.14], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 9) {
    image(images[4][11.14], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 10) {
    image(images[4][11.14], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 11) {
    image(images[4][11.15], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 12) {
    image(images[4][11.15], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 13) {
    image(images[4][11.15], width / 2+50, height / 2, 700, 800);
  } else if (currentIndex % 15 == 14) {
    image(images[4][11.16], width / 2+50, height / 2, 700, 800);
  } else {
    image(images[4][11.16], width / 2+50, height / 2, 700, 800);
  }

  currentIndex++;
}

function Gym_25() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
    if (state == 4.25) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.26;
      startTime = 0; // startTime 초기화
    }
  }
  
  //2라운드 알림
  clap.stop();
  imageMode(CENTER);
  image(images[0][11], width / 2, height / 2, 1280, 800);
  image(images[4][8.2], width / 2, height / 2, 600, 210);
}

function Gym_26() {
  //2라운드
  if (squat.isPlaying() == false) {
    squat.play();
  }
  image(images[4][0], width / 2, height / 2, width, height);
  image(images[4][23.1], 505, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.2], 595, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 685, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 775, 70, 150, 150); //라운드 표시용 바벨 버튼
  
  if (state == 4.26) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }
    if (millis() - startTime >= durat + 6000) {
      state = 4.352;
      startTime = 0; // startTime 초기화
    }
  }

  if (currentIndex % 15 == 0) {
    image(images[4][11.21], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 1) {
    image(images[4][11.21], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 2) {
    image(images[4][11.22], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 3) {
    image(images[4][11.22], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 4) {
    image(images[4][11.22], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 5) {
    image(images[4][11.23], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 6) {
    image(images[4][11.23], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 7) {
    image(images[4][11.23], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 8) {
    image(images[4][11.24], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 9) {
    image(images[4][11.24], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 10) {
    image(images[4][11.24], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 11) {
    image(images[4][11.25], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 12) {
    image(images[4][11.25], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 13) {
    image(images[4][11.25], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 14) {
    image(images[4][11.26], width / 2+75, height / 2, 800, 800);
  } else {
    image(images[4][11.26], width / 2+75, height / 2, 800, 800);
  }

  currentIndex++;
}

function Gym_27() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
    if (state == 4.27) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.28;
      startTime = 0; // startTime 초기화
    }
  }
  
  //3라운드 알림
  clap.stop();
  imageMode(CENTER);
  image(images[0][11], width / 2, height / 2, 1280, 800);
  image(images[4][8.3], width / 2, height / 2, 600, 210);
}

function Gym_28() {
  //3라운드
  if (squat.isPlaying() == false) {
    squat.play();
  }

  image(images[4][0], width / 2, height / 2, width, height);
  image(images[4][23.1], 505, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.2], 595, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.3], 685, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23], 775, 70, 150, 150); //라운드 표시용 바벨 버튼
  
  if (state == 4.28) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }
    if (millis() - startTime >= durat + 6000) {
      state = 4.353;
      startTime = 0; // startTime 초기화
    }
  }

  if (currentIndex % 15 == 0) {
    image(images[4][11.31], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 1) {
    image(images[4][11.31], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 2) {
    image(images[4][11.32], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 3) {
    image(images[4][11.32], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 4) {
    image(images[4][11.32], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 5) {
    image(images[4][11.33], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 6) {
    image(images[4][11.33], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 7) {
    image(images[4][11.33], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 8) {
    image(images[4][11.34], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 9) {
    image(images[4][11.34], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 10) {
    image(images[4][11.34], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 11) {
    image(images[4][11.35], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 12) {
    image(images[4][11.35], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 13) {
    image(images[4][11.35], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 14) {
    image(images[4][11.36], width / 2+75, height / 2, 800, 800);
  } else {
    image(images[4][11.36], width / 2+75, height / 2, 800, 800);
  }

  currentIndex++;
}

function Gym_29() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
    if (state == 4.29) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.30;
      startTime = 0; // startTime 초기화
    }
  }
  
  //4라운드 알림
  clap.stop();
  imageMode(CENTER);
  image(images[0][11], width / 2, height / 2, 1280, 800);
  image(images[4][8.4], width / 2, height / 2, 600, 210);
}

function Gym_30() {
  //4라운드
  if (squat.isPlaying() == false) {
    squat.play();
  }
  image(images[4][0], width / 2, height / 2, width, height);
  image(images[4][23.1], 505, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.2], 595, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.3], 685, 70, 150, 150); //라운드 표시용 바벨 버튼
  image(images[4][23.4], 775, 70, 150, 150); //라운드 표시용 바벨 버튼
  
  if (state == 4.30) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }
    if (millis() - startTime >= durat + 6000) {
      state = 4.354;
      startTime = 0; // startTime 초기화
    }
  }

  if (currentIndex % 15 == 0) {
    image(images[4][11.41], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 1) {
    image(images[4][11.41], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 2) {
    image(images[4][11.42], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 3) {
    image(images[4][11.42], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 4) {
    image(images[4][11.42], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 5) {
    image(images[4][11.43], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 6) {
    image(images[4][11.43], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 7) {
    image(images[4][11.43], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 8) {
    image(images[4][11.44], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 9) {
    image(images[4][11.44], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 10) {
    image(images[4][11.44], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 11) {
    image(images[4][11.45], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 12) {
    image(images[4][11.45], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 13) {
    image(images[4][11.45], width / 2+75, height / 2, 800, 800);
  } else if (currentIndex % 15 == 14) {
    image(images[4][11.46], width / 2+75, height / 2, 800, 800);
  } else {
    image(images[4][11.46], width / 2+75, height / 2, 800, 800);
  }

  currentIndex++;
}

function Gym_Success_1() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
  if (state == 4.31) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.25;
      startTime = 0; // startTime 초기화
    }
  }
  
  //성공 시
  if(gym_s_now == true) {
    clap.play();
    gym_s_now = false;
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.17], width / 2, height / 2, 850, 800);
  image(images[4][16], width / 2, height / 2, 600, 250);
}

function Gym_Success_2() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
    if (state == 4.32) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.27;
      startTime = 0; // startTime 초기화
    }
  }
  
  //성공 시
  if(gym_s_now == false) {
    clap.play();
    gym_s_now = true;
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.27], width / 2+100, height / 2, 900, 800);
  image(images[4][17], width / 2, height / 2, 600, 250);
}

function Gym_Success_3() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
  if (state == 4.33) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.29;
      startTime = 0; // startTime 초기화
    }
  }
  
  //성공 시
  if(gym_s_now == true) {
    clap.play();
    gym_s_now = false;
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.37], width / 2+100, height / 2, 900, 800);
  image(images[4][18], width / 2, height / 2, 600, 250);
}

function Gym_Success_4() {
  if (squat.isPlaying() == false) {
    squat.play();
  }
  
  if (state == 4.34) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.36;
      startTime = 0; // startTime 초기화
    }
  }
  
  //성공 시
  if(gym_s_now == false) {
    clap.play();
    gym_s_now = true;
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.47], width / 2+100, height / 2, 900, 800);
  image(images[4][19], width / 2, height / 2, 600, 250);
}

function Gym_Fail_1() {
  squat.stop();
  if (fail.isPlaying() == false) {
    fail.play();
  }
  
  if (state == 4.351) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.37;
      startTime = 0; // startTime 초기화
    }
  }
  
  //실패 시
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.18], width / 2, height / 2, 900, 800);
  image(images[4][22], width / 2, height / 2, 600, 250);
}

function Gym_Fail_2() {
  squat.stop();
  if (fail.isPlaying() == false) {
    fail.play();
  }
  
  if (state == 4.352) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.37;
      startTime = 0; // startTime 초기화
    }
  }
  
  //실패 시
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.28], width / 2+100, height / 2-50, 900, 800);
  image(images[4][22], width / 2, height / 2, 600, 250);
}

function Gym_Fail_3() {
  squat.stop();
  if (fail.isPlaying() == false) {
    fail.play();
  }
  
  if (state == 4.353) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.37;
      startTime = 0; // startTime 초기화
    }
  }
  
  //실패 시
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.38], width / 2+100, height / 2-50, 900, 800);
  image(images[4][22], width / 2, height / 2, 600, 250);
}

function Gym_Fail_4() {
  squat.stop();
  if (fail.isPlaying() == false) {
    fail.play();
  }
  
  if (state == 4.354) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat-2000) {
      state = 4.37;
      startTime = 0; // startTime 초기화
    }
  }
  
  //실패 시
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][11.48], width / 2+100, height / 2-50, 900, 800);
  image(images[4][22], width / 2, height / 2, 600, 250);
}

function Gym_36() {
  squat.stop();
  clap.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == true) {
    v4_8.play();
    gym_v_now = false;
  }
  
  //4라운드 최종 성공 시
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][9.1], width / 2, height / 2, 700, 800); // 첫 번째 이미지
  } else {
    image(images[4][9.2], width / 2, height / 2, 700, 800); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "촤하하! 우렁찬 응원 덕분에 최대 무게에 성공할 수 있었어! 고마워!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_37() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
  if (gym_v_now == true) {
    v4_9.play();
  gym_v_now = false;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  //헬짱 쿼카 애니메이션
  imageMode(CENTER);
  if (currentImageIndex % 2 == 0) {
    image(images[4][10.1], width / 2+50, height / 2, 461, 461); // 첫 번째 이미지
  } else {
    image(images[4][10.2], width / 2+50, height / 2, 461, 461); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("응원을 제대로 크게 해줘야 할 것 아니야!!! 에잇...", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  currentImageIndex++;
}

function Gym_38() {
   v4_9.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("죄송합니다...", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_39() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
    if (gym_v_now == false) {
    v4_10.play();
  gym_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][3], width / 2, height / 2, 800, 900); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("됐어, 진정한 헬짱은 이런 시련에 굴하지 않는 법이지.", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_40() {
  v4_10.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
   if (gym_v_now == true) {
    v4_11.play();
  gym_v_now = false;
  }
  
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][1], width / 2, height / 2, 800, 900); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "그래도 수고했으니 보상으로 특별히 무료 PT를 해주지. 이리와!",
    width / 2,
    668.5
  );
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_41() {
  v4_12.stop();
  v4_11.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  //실패
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][1], width / 2, height / 2, 900, 1000); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네..?? 아.. 아니 괜찮은데....!", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);

  fill(0, 0, 0, -170 + (frameCount - curFrame) * 7);
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(0);
  if (-170 + (frameCount - curFrame) * 7 > 255) {
    state = 2.11;
    curFrame = frameCount;
    gym_clear = true;
  }
}

function Gym_42() {
  v4_8.stop();
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][1], width / 2, height / 2, 800, 900); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("하핫... 그런가요? 아무튼 축하드려요!", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Gym_43() {
  if (gymBgm.isPlaying() == false) {
    gymBgm.play();
  }
  
  if (gym_v_now == false) {
    v4_12.play();
    gym_v_now = true;
  }
  
  //성공 끝
  imageMode(CORNER);
  image(images[4][0], 0, 0, width, height);
  imageMode(CENTER);
  image(images[4][1], width / 2, height / 2, 800, 900); //헬짱 쿼카
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201); //텍스트 박스
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44); //화살표 버튼
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(25);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("기분이다! 오늘 내가 무료 PT 해줄게. 이리로 와!", width / 2, 668.5);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

//===================여기까지 헬스장========================

//===================여기서부터 학교=========================
//학교
function mousePressedAt5() {
  if (state == 5) {
    //학교 스테이지의 첫 상태. 클릭하면 다음 상태로 넘어감(선택에 따라 넘어가는 상태가 달라짐)
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.1;
    }
  } else if (state == 5.1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.2;
    }
  } else if (state == 5.2) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.3;
    }
  } else if (state == 5.3) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.4;
    }
  } else if (state == 5.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.5;
    }
  } else if (state == 5.5) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.6;
    }
  } else if (state == 5.6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.7;
    }
  } else if (state == 5.7) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.8;
    }
  } else if (state == 5.8) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.9;
    }
  } else if (state == 5.9) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.11;
    }
  } else if (state == 5.11) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.12;
    }
  } else if (state == 5.12) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      curFrame = frameCount;
      state = 5.13;
    }
  } else if (state == 5.15) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.16;
    }
  } else if (state == 5.16) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.17;
    }
  } else if (state == 5.17) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.18;
    }
  } else if (state == 5.18) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.19;
    }
  } else if (state == 5.19) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.195;
    }
  } else if (state == 5.195) {
    state = 5.21;
  } else if (state == 5.21) {
    if (500 < mouseX && mouseX < 785 && 626 < mouseY && mouseY < 700) {
      state = 5.22;
    }
  } else if (state == 5.23) {
    state = 5.24;
  } else if (state == 5.24) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.25;
    }
  } else if (state == 5.25) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.255;
    }
  } else if (state == 5.255) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      curFrame = frameCount;
      state = 5.26;
    }
  } else if (state == 5.29) {
    state = 5.31;
  } else if (state == 5.31) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.32;
    }
  } else if (state == 5.32) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.33;
    }
  } else if (state == 5.33) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 5.34;
    }
  } else if (state == 5.34) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      curFrame = frameCount;
      state = 5.35;
    }
  }
}

function school() {
  if (state == 5) drawSch0();
  else if (state == 5.1) drawSch1();
  else if (state == 5.2) drawSch2();
  else if (state == 5.3) drawSch3();
  else if (state == 5.4) drawSch4();
  else if (state == 5.5) drawSch5();
  else if (state == 5.6) drawSch6();
  else if (state == 5.7) drawSch7();
  else if (state == 5.8) drawSch8();
  else if (state == 5.9) drawSch9();
  else if (state == 5.11) drawSch11();
  else if (state == 5.12) drawSch12();
  else if (state == 5.13) drawSchFadeFromSchool();
  else if (state == 5.14) drawSchFadetoRestaurant();
  else if (state == 5.15) drawSch15();
  else if (state == 5.16) drawSch16();
  else if (state == 5.17) drawSch17();
  else if (state == 5.18) drawSch18();
  else if (state == 5.19) drawSch19();
  else if (state == 5.195) drawSch195();
  else if (state == 5.21) drawSch21();
  else if (state == 5.22) drawSchGame();
  else if (state == 5.23) drawSch23();
  //성공 화면
  else if (state == 5.24) drawSch24();
  else if (state == 5.25) drawSch25();
  else if (state == 5.255) drawSch26();
  else if (state == 5.26) drawSchFadeFromRestaurant1();
  else if (state == 5.27) drawSchFadetoNight();
  else if (state == 5.28) drawSchNight();
  else if (state == 5.29) drawSch29();
  //실패 화면
  else if (state == 5.31) drawSch31();
  else if (state == 5.32) drawSch32();
  else if (state == 5.33) drawSch33();
  else if (state == 5.34) drawSch34();
  else if (state == 5.35) drawSchFadeFromRestaurant2();
}

function drawSch0() {
  homeBgm.stop();
  if (sch_b_now == true) {
    schoolbell.play();
    sch_b_now = false;
  }
  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][12], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("가만 보자... 여기가 내 자리인가보다!", width / 2, 668.5);
}

function drawSch1() {
  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][12], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("바로 수업 시작인가보네. 어서 앉아야지.", width / 2, 668.5);
}

function drawSch2() {
  schoolbell.stop();
  students.stop();

  imageMode(CORNER);
  image(images[5][4], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "인간학개론!\n쿼카학교에는 인간을 유혹하는 방법을 배우는구나!",
    width / 2,
    668.5
  );
}

function drawSch3() {
  imageMode(CORNER);
  image(images[5][4], 0, 0, width, height);

  fill(0, 100);
  rect(0, 0, width, height);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  fill(0);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("그나저나... 너무 졸려...\n눈꺼풀이 무겁다...", width / 2, 668.5);
}

function drawSch4() {
  imageMode(CORNER);
  image(images[5][4], 0, 0, width, height);

  fill(0, 200);
  rect(0, 0, width, height);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  fill(0);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("zzz...", width / 2, 668.5);
}

function drawSch5() {
  if (sch_b_now == false) {
    schoolEndBell.play();
    sch_b_now = true;
  }
  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][12], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("서건 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("수업 끝! 다들 점심 맛있게 먹어라~", width / 2, 668.5);
}

function drawSch6() {
  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("뭐야. 잠깐 졸았더니 벌써 점심시간이야?", width / 2, 668.5);
}

function drawSch7() {
  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("그나저나... 점심 어디서 먹지? 나 친구도 없는데...", width / 2, 668.5);
}

function drawSch8() {
  if (sch_v_now == true) {
    v7_2.play();
    sch_v_now = false;
  }

  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("???", width / 2 - 275, 587);
  textFont(scriptF);
  text("야, 전학생!", width / 2, 668.5);
}

function drawSch9() {
  v7_2.stop();

  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);
  image(images[5][5], 144, -6, 991, 896);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("응? 나 부르는 거야?", width / 2, 668.5);
}

function drawSch11() {
  if (sch_v_now == false) {
    v7_3.play();
    sch_v_now = true;
  }

  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);
  image(images[5][6], 148, -68, 984, 984);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "응응! 너 오늘 처음 왔잖아!\n나랑 같이 가자! 내가 밥 맛있는 곳 알고 있어.",
    width / 2,
    668.5
  );
}

function drawSch12() {
  v7_3.stop();

  if (students.isPlaying() == false) {
    students.play();
  }

  imageMode(CORNER);
  image(images[5][15], 0, 0, width, height);
  image(images[5][6], 148, -68, 984, 984);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("'다행이다! 얼른 따라가야지..!'", width / 2, 668.5);
}

function drawSch15() {
  if (sch_v_now == true) {
    v7_4.play();
    sch_v_now = false;
  }

  if (birds.isPlaying() == false) {
    birds.play();
  }
  schoolEndBell.stop();
  students.stop();

  imageMode(CORNER);
  image(images[5][14], -89, 0, 1457, 910);
  image(images[5][7], 215, -49, 849, 849);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("다 왔다. 여기야! 어서 먹장 >_<", width / 2, 668.5);
}

function drawSchFadeFromSchool() {
  background(0);
  drawSch12();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 5.14;
    curFrame = frameCount;
  }
}

function drawSchFadetoRestaurant() {
  background(0);
  drawSch15();
  push();
  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 5.15;
    curFrame = frameCount;
  }
}

function drawSch16() {
  v7_4.stop();

  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], -89, 0, 1457, 910);
  image(images[5][7], 215, -49, 849, 849);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("응...! 그러자!", width / 2, 668.5);
}

function drawSch17() {
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], -89, 0, 1457, 910);
  image(images[5][7], 215, -49, 849, 849);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "'어떡하지...? 정말로 나뭇잎을 먹어야 하나...?!\n에잇. 그냥 배부르다고 해야겠다!'",
    width / 2,
    668.5
  );
}

function drawSch18() {
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], -89, 0, 1457, 910);
  image(images[5][7], 215, -49, 849, 849);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "아. 사실 나는 오늘은 아침을 많이 먹고 와서 배가 좀 부르네!\n하핫 너 많이 먹어!",
    width / 2,
    668.5
  );
}

function drawSch19() {
  if (sch_v_now == false) {
    v7_5.play();
    sch_v_now = true;
  }

  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], -89, 0, 1457, 910);
  image(images[5][8], 143, -58, 994, 994);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "그래?? 알겠어 그럼!\n내가 너 몫까지 다 먹을테니 나 맛있게 먹는 것 좀 도와줘!",
    width / 2,
    668.5
  );
}

function drawSch195() {
  if (studentGameBgm.isPlaying() == false) {
    studentGameBgm.play();
  }
  v7_5.stop();
  birds.stop();
  image(images[5][13], 0, 0, width, height);
}

function drawSch21() {
  if (studentGameBgm.isPlaying() == false) {
    studentGameBgm.play();
  }
  imageMode(CORNER);
  image(images[0][11], 0, 0, 1280, 800); //배경
  imageMode(CENTER);
  image(images[0][1.5], width / 2, height / 2, 1080, 720); //게임 소개글 보드
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont(nameF);
  text("HOW TO PLAY", width / 2, 90);
  // textSize(25);
  // textFont(scriptF);
  // text(
  //   "점심시간을 함께 하게 된 쿼카...\n그런데 이 녀석. 시작부터 돼지력 폭발! 먹스킬이 범상치 않다.\n형형색색의 나뭇잎을 꿀조합 순서에 맞추어 제공해주자!\n먹는 흐름이 끊기면 먹보 쿼카가 슬퍼할 거야.\n\n테이블에 놓인 나뭇잎을 활용해\n상단의 컬러바의 순서대로 나뭇잎을 카메라에 인식시켜야 한다.\n제한 시간은 20초! 제한 시간이 넘으면 실패!\n나뭇잎은 발바닥 부분에 대고, 게이지가 다 찰 때까지 기다려야 한다.",
  //   width / 2,
  //   370
  // );

  imageMode(CENTER);
  if (frameCount % 20 < 10) {
  image(images[0][8], width/2, 620, 440, 275);}
  else {image(images[0][8.1], width/2, 620, 440, 275);}
  imageMode(CORNER);

}

function drawSchGame() {
  if (studentGameBgm.isPlaying() == false) {
    studentGameBgm.play();
  }
  background(255);

  imageMode(CENTER);
  push();
  translate(width, 0);
  scale(-1, 1);
  image(cam, width / 2, height / 2, width, height);
  pop();

  image(images[5][0], width / 2, height / 2, width+130, height+130);
  image(images[5][1], width / 2, 220); //colorbar_bg
  image(images[5][2], width / 2, 200, 952, 177); //color_bar

  image(images[0][10], 130, 130, 150, 170); //timer
  image(images[5][3], char_pos, 350, 110, 90); //icon
  if (currentPositionIdx == 1) {
    char_pos = 375;
  } else if (currentPositionIdx == 2) {
    char_pos = 490;
  } else if (currentPositionIdx == 3) {
    char_pos = 600;
  } else if (currentPositionIdx == 4) {
    char_pos = 710;
  } else if (currentPositionIdx == 5) {
    char_pos = 825;
  } else if (currentPositionIdx == 6) {
    char_pos = 940;
  } else if (currentPositionIdx == 7) {
    char_pos = 1045;
  }
  imageMode(CORNER);

  let sumX = 0;
  let sumY = 0;
  let count = 0;

  cam.loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (y * cam.width + x) * 4;
      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let redy = r - (g + b) / 2;
      let greeny = g - (r + b) / 2;
      if (
        currentPositionIdx == 0 ||
        currentPositionIdx == 3 ||
        currentPositionIdx == 5
      ) {
        if (greeny > green_threshold) {
          sumX += x;
          sumY += y;
          count++;
        }
      }
      if (currentPositionIdx == 2 || currentPositionIdx == 7) {
        if (isSimilarColor([r, g, b], targetColor)) {
          sumX += x;
          sumY += y;
          count++;
        }
      }
      if (
        currentPositionIdx == 1 ||
        currentPositionIdx == 4 ||
        currentPositionIdx == 6
      ) {
        if (redy > red_threshold) {
          sumX += x;
          sumY += y;
          count++;
        }
      }
    }
  }

  if (count != 0) {
    let meanX = sumX / count;
    let meanY = sumY / count;

    //update the array
    for (let i = 0; i < sch_num - 1; i++) {
      sch_xpos[i] = sch_xpos[i + 1];
      sch_ypos[i] = sch_ypos[i + 1];
    }

    push();
    translate(width, 0);
    scale(-1, 1);
    //mouseX, mouseY
    sch_xpos[sch_num - 1] = map(meanX, 0, cam.width, 0, width);
    sch_ypos[sch_num - 1] = map(meanY, 0, cam.height, 0, height);

    //draw a snake
    for (let i = 0; i < sch_num; i++) {
      noStroke();
      fill(255);
      ellipse(sch_xpos[i], sch_ypos[i], i, i);
    }
    pop();
  }

  push();
  translate(width, 0);
  scale(-1, 1);
  //동그라미 게이지
  imageMode(CENTER);
  checkPositions();
  drawPositions();
  drawCircle();
  imageMode(CORNER);
  pop();

  fill(0);
  textSize(50);
  textAlign(CENTER);
  textFont(nameF);
  text(int((timer / 60) % 20) + 1, 130, 130);

  if (currentPositionIdx == 8) {
    state = 5.23;
  }
  if (timer > 0) {
    timer-=0.5;
  } else {
    state = 5.29;
  }
}

function isSimilarColor(color1, color2) {
  let rDiff = abs(color1[0] - color2[0]);
  let gDiff = abs(color1[1] - color2[1]);
  let bDiff = abs(color1[2] - color2[2]);
  return (
    rDiff < yellow_threshold &&
    gDiff < yellow_threshold &&
    bDiff < yellow_threshold
  );
}

function drawSch23() {
  studentGameBgm.stop();
  imageMode(CORNER);
  image(images[0][12], 0, 0, width, height);
}

function drawSch29() {
  studentGameBgm.stop();
  imageMode(CORNER);
  image(images[0][13], 0, 0, width, height);
}

function drawSch24() {
  if (sch_v_now == true) {
    v7_6.play();
    sch_v_now = false;
  }
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  if (
    (0 <= frameCount % 60 && frameCount % 60 <= 15) ||
    (30 <= frameCount % 60 && frameCount % 60 <= 45)
  ) {
    image(images[5][10], 148, -120, 920, 920);
  } else {
    image(images[5][9], 148, -120, 920, 920);
  }

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "잘 먹었다!!! 역시 이 조합은 언제 먹어도 질리지 않는다니까!\n고마워!!",
    width / 2,
    668.5
  );
}

function drawSch25() {
  v7_6.stop();

  if (sch_v_now == false) {
    v7_7.play();
    sch_v_now = true;
  }
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  image(images[5][9], 148, -120, 920, 920);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("다음에 너도 꼭 이렇게 먹어봐!! 알겠지?", width / 2, 668.5);
}

function drawSch26() {
  v7_7.stop();

  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  image(images[5][9], 148, -120, 920, 920);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("아. 응응! 알겠어!", width / 2, 668.5);
}

function drawSch31() {
  if (sch_v_now == true) {
    v7_8.play();
    sch_v_now = false;
  }
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  image(images[5][11], 231, -88, 817, 817);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("뭐야... 먹는 흐름이 끊겨버렸어...", width / 2, 668.5);
}

function drawSch32() {
  v7_8.stop();

  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  image(images[5][11], 231, -88, 817, 817);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("미안ㅠㅠ", width / 2, 668.5);
}

function drawSch33() {
  if (sch_v_now == false) {
    v7_9.play();
    sch_v_now = true;
  }
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  if (
    (0 <= frameCount % 60 && frameCount % 60 <= 15) ||
    (30 <= frameCount % 60 && frameCount % 60 <= 45)
  ) {
    image(images[5][10], 103, -122, 1043, 1043);
  } else {
    image(images[5][9], 103, -122, 1043, 1043);
  }

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "괜찮아 맛있는 나뭇잎은 내일도 있는 걸!\n내일 더 맛있게 먹을 생각에 기분이 좋아졌어ㅎㅎ",
    width / 2,
    668.5
  );
}

function drawSch34() {
  v7_9.stop();

  if (sch_v_now == true) {
    v7_10.play();
    sch_v_now = false;
  }
  if (birds.isPlaying() == false) {
    birds.play();
  }

  imageMode(CORNER);
  image(images[5][14], 0, 0, width, height);
  image(images[5][9], 103, -122, 1043, 1043);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("오늘 밥 같이 먹어줘서 고마워!", width / 2, 668.5);
}

function drawSchFadeFromRestaurant1() {
  background(0);
  drawSch26();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 5.27;
    curFrame = frameCount;
    sch_clear = true;
  }
}

function drawSchFadeFromRestaurant2() {
  background(0);
  drawSch34();
  push();
  fill(0, 0, 0, (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 5.27;
    curFrame = frameCount;
    sch_clear = true;
  }
}

function drawSchFadetoNight() {
  background(0);
  drawSchNight();
  push();
  fill(0, 0, 0, 255 - (frameCount - curFrame) * 7);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);
  pop();
  if ((frameCount - curFrame) * 7 >= 255) {
    state = 5.28;
    curFrame = frameCount;
  }
}

function drawSchNight() {
  v7_10.stop();
  birds.stop();
  state = 2.24;
}

function drawPositions() {
  for (let i = currentPositionIdx; i < posNum; i++) {
    let [x, y] = sch_positions[i];
    if (i == 1 || i == 5 || i == 7) {
      fill(255, 0, 0);
    } else if (i == 3 || i == 6) {
      fill(255, 255, 0);
    } else if (i == 0 || i == 2 || i == 4) {
      fill(0, 255, 0);
    }
  }
}

function drawCircle() {
  let imageLayer;
  if (
    currentPositionIdx == 1 ||
    currentPositionIdx == 4 ||
    currentPositionIdx == 6
  ) {
    imageLayer = circleRedLayer.get();
  } else if (currentPositionIdx == 2 || currentPositionIdx == 7) {
    imageLayer = circleYellowLayer.get();
  } else if (
    currentPositionIdx == 0 ||
    currentPositionIdx == 3 ||
    currentPositionIdx == 5
  ) {
    imageLayer = circleGreenLayer.get();
  }
  circleMask.clear();
  let percentage = currTime / nextTime;
  circleMask.arc(50, 50, 200, 200, 0, TWO_PI * percentage);
  if (0 <= currentPositionIdx && currentPositionIdx <= 7) {
    imageLayer.mask(circleMask);
    image(imageLayer, sch_xpos[49], sch_ypos[49]);
  }
}

function checkPositions() {
  let [cx, cy] = sch_positions[currentPositionIdx];
  let d = dist(cx, cy, sch_xpos[49], sch_ypos[49]);
  if (d <= 50) {
    currTime += 3;
  } else {
    currTime = 0;
  }
  if (currTime == nextTime) {
    currentPositionIdx += 1;
    currTime = 0;
  }
  // if (currentPositionIdx == posNum) {
  //   currentPositionIdx = 0;
  // }
  console.log(currTime);
}

//=====================여기까지 학교=============================


//=====================여기서부터 백화점=============================
//백화점 마우스이벤트
function mousePressedAt6() {
  if (state == 6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.1;
    }
  } else if (state == 6.1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.2;
    }
  } else if (state == 6.2) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.3;
    }
  } else if (state == 6.3) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.4;
    }
  } else if (state == 6.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.5;
    }
  } else if (state == 6.5) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.6;
    }
  } else if (state == 6.6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.7;
    }
  } else if (state == 6.7) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.8;
    }
  } else if (state == 6.8) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.9;
    }
  } else if (state == 6.9) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.11;
    }
  } else if (state == 6.11) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.12;
    }
  } else if (state == 6.12) {
    { 
      state = 6.13;
    }
  } else if (state == 6.13) {
    if (496 < mouseX && mouseX < 787 && 593 < mouseY && mouseY < 677) {
      state = 6.14;
    }
  } else if (state == 6.14) {
    if (949 < mouseX && mouseX < 1197 && 672 < mouseY && mouseY < 734) {
      state = 6.15;
      return;
    }
    for (let i = 0; i < 3; i++) for (let j = 0; j < 6; j++) {
      if (clothes[i][j].isOn(mouseX, mouseY)) {
        chosen = [i, j]; clothes[i][j].wearing = false; return;
      }
    }
  }
  else if (state == 6.15) {
    if (score(scores) >= 70) state = 6.21;
    else state = 6.22;
  } else if (state == 6.21) {   //성공
    state = 6.211;
  } else if (state == 6.211) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.212;
    }
  } else if (state == 6.212) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.213; curFrame = frameCount;
    }
  } else if (state == 6.22) {  //실패
    state = 6.221;
  } else if (state == 6.221) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.222;
    }
  } else if (state == 6.222) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 6.223; curFrame = frameCount;
    }
  }
}

function mouseReleasedAt6() {
  if (state == 6.14) {
    if (chosen[0] < 0) return;
    if (clothes[chosen[0]][chosen[1]].isOnQuokka(mouseX, mouseY)) {
      for (let i = 0; i < 3; i++) clothes[i][chosen[1]].wearing = false;
      clothes[chosen[0]][chosen[1]].wearing = true;
      stotxt = stotxts[chosen[1]];
      clap.play();
    }
    chosen = [-1, -1];
  }
}

function score(scrs) {
  let s = 0;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 6; j++) if (clothes[i][j].wearing) s += scrs[i][j];
  return s;
}

function sto() {
  if (state == 6) drawsto0();
  else if (state == 6.1) drawsto1();
  else if (state == 6.2) drawsto2();
  else if (state == 6.3) drawsto3();
  else if (state == 6.4) drawsto4();
  else if (state == 6.5) drawsto5();
  else if (state == 6.6) drawsto6();
  else if (state == 6.7) drawsto7();
  else if (state == 6.8) drawsto8();
  else if (state == 6.9) drawsto9();
  else if (state == 6.11) drawsto11();
  else if (state == 6.12) drawsto12();
  else if (state == 6.13) drawsto13();
  else if (state == 6.14) drawsto14();
  else if (state == 6.15) drawsto15();

  else if (state == 6.21) drawsto21();
  else if (state == 6.211) drawsto211();
  else if (state == 6.212) drawsto212();
  else if (state == 6.213) drawsto213();

  else if (state == 6.22) drawsto22();
  else if (state == 6.221) drawsto221();
  else if (state == 6.222) drawsto222();
  else if (state == 6.223) drawsto223();

}

function drawsto0() {
  homeBgm.stop();
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("우와... 쿼카 마을에도 백화점이 있구나?\n명품 브랜드까지 있어?! 완전 신기하다...", width / 2, 668.5);
}

function drawsto1() {
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][1], 326, 27, 589, 589);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("우와. 저 분 스타일이 완전 범상치 않은데?\n저 분이라면, 행복에 대해 답변해줄 수 있을 것 같아.", width / 2, 668.5);
}

function drawsto2() {
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][1], 326, 27, 589, 589);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("저... 혹시...", width / 2, 668.5);
}

function drawsto3() {
  if (sto_v_now == true) {
    v8_1.play();
    sto_v_now = false;
  }
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();} 
  imageMode(CORNER);
  image(images[6][0], -422, -137, 2052, 1283);
  image(images[6][2], 252, 27, 773, 773);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("네? 저요?", width / 2, 668.5);
}

function drawsto4() {
  v8_1.stop();

  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], -422, -137, 2052, 1283);
  image(images[6][2], 252, 27, 773, 773);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네네, 제가 백화점이 처음인데,\n패션 센스가 상당히 눈에 띄어서요.", width / 2, 668.5);
}

function drawsto5() {
  if (sto_v_now == false) {
    v8_2.play();
    sto_v_now = true;
  }
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], -278, -47, 1764, 1103);
  image(images[6][3], 316, -13, 648, 648);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아, 그런가요? 하하.", width / 2, 668.5);
}

function drawsto6() {
  v8_2.stop();
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], -278, -47, 1764, 1103);
  image(images[6][3], 316, -13, 648, 648);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네, 남의 시선은 느끼지 않으시나요?", width / 2, 668.5);
}

function drawsto7() {
  if (sto_v_now == true) {
    v8_3.play();
    sto_v_now = false;
  }
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], -480, -173, 2168, 1355);
  image(images[6][4], 132, -127, 927, 927);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아뇨, 전혀 신경쓰지 않습니다.\n제가 입고 싶은 대로 입어요.\n이렇게 입으면 기분이 조크든요.", width / 2, 668.5);
}

function drawsto8() {
  v8_3.stop();
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], -480, -173, 2168, 1355);
  image(images[6][5], 103, -81, 1017, 1017);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("그렇군요...! 알겠습니다.", width / 2, 668.5);
}

function drawsto9() {
  if (sto_v_now == false) {
    v8_4.play();
    sto_v_now = true;
  }
  
  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][5], 317, 0, 645, 645);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아, 저기요. 말 나온 김에, 제 패션 한 번 코디해주시겠어요?", width / 2, 668.5);
}

function drawsto11() {
  v8_4.stop();

  if (storeBgm.isPlaying() == false) {storeBgm.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][5], 317, 0, 645, 645);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("네? 아... 네!", width / 2, 668.5);
}

function drawsto12() {
  storeBgm.stop();
  if (toxic.isPlaying() == false) {toxic.play();}
  image(images[6][16], 0, 0, 1280, 800);
}

function drawsto13() {
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[0][11], 0, 0, 1280, 800); //배경
  image(images[0][1.6], width/2-540, height / 2-360, 1080, 1080*images[0][1.6].height/images[0][1.6].width); //게임 소개글 보드
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont(nameF);
  text("HOW TO PLAY", width / 2, 90);
  textSize(25);
  textFont(scriptF);
  //text("이 세상 힙이 아닌 패셔니스타 쿼카와의 만남...!\n스타일링 능력을 총동원해\n패셔니스타 쿼카가 만족할 만한 멋지고 힙한 코디를 완성해주자!\n\n총 6개의 패션 아이템을 '힙한 성수룩'으로 맞춰 입혀준 뒤,\n점수가 70점 이상이면 !", width / 2, 385);
  imageMode(CENTER);
  if (frameCount % 20 < 10) {
  image(images[0][8], width/2, 620, 440, 275);}
  else {image(images[0][8.1], width/2, 620, 440, 275);}
  imageMode(CORNER);
}

function drawsto14() { //백화점 게임
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][17], 0, 0, 1280, 800);
  // image(images[6][0], 0, 0, 1280, 800);
  rectMode(CORNER);
  // fill(255, 180);
  // rect(0,0,1280,800);
  image(images[6][6], width / 2 - 729 / 2, -25, 729, 729);

  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (chosen[0] != i || chosen[1] != j) clothes[i][j].drawClothes();
  if (chosen[0] >= 0) clothes[chosen[0]][chosen[1]].drawAtPoint(mouseX, mouseY);

  //결정 박스
  image(images[0][3], 1125 - 50, 733 - 30, images[0][3].width/3.5, images[0][3].height/3.5); //결정
  fill(0);
  textAlign(CENTER, CENTER); textSize(30); textFont(nameF); text("결정!", 1125 - 50, 733 - 35);

  image(stotxt, width / 2, height / 2 + 300, 500, 500 * stotxt.height / stotxt.width);
}

function drawsto15() {
  if (toxic.isPlaying() == false) {toxic.play();}
  if (sto_s_now == true) {
    ta_da.play();
    sto_s_now = false;
  }
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][6], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();

  //점수 박스
  image(images[0][3], 1125 - 50, 733 - 30, images[0][3].width/3.5, images[0][3].height/3.5);
  fill(0);
  textAlign(CENTER, CENTER); textSize(40); textFont(nameF); text(score(scores), 1125 - 50, 733 - 35);
}

//=======백화점 미션 성공시======================
function drawsto21() {
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[0][12], 0, 0, 1280, 800);
}

function drawsto211() {
  if (sto_v_now == true) {
    v8_5.play();
    sto_v_now = false;
  }
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][7], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("당신, 패션 감각이 좀 있는 편이군요?", width / 2, 668.5);
}

function drawsto212() {
  v8_5.stop();
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][7], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("그런가요...? 하핫", width / 2, 668.5);
}

function drawsto213() {
  if (sto_v_now == false) {
    v8_6.play();
    sto_v_now = true;
  }
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][8], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아무튼, 덕분에 기분이 좋아졌어요.\n고마워요!", width / 2, 668.5);
  fill(0, 0, 0, -600 + (frameCount - curFrame) * 7);
  rectMode(CORNER); rect(0, 0, width, height);
  fill(0);
  if (-600 + (frameCount - curFrame) * 7 > 255) { state = 2.19; curFrame = frameCount; sto_clear = true; }
}

//=======백화점 미션 실패시======================
function drawsto22() {
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[0][13], 0, 0, 1280, 800);
}

function drawsto221() {
  if (sto_v_now == true) {
    v8_7.play();
    sto_v_now = false;
  }
  
  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][9], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("이...이게 뭐죠 대체...?", width / 2, 668.5);
}

function drawsto222() {
  v8_7.stop();

  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][9], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("아... 죄송합니다.", width / 2, 668.5);
}

function drawsto223() {
  if (sto_v_now == false) {
    v8_8.play();
    sto_v_now = true;
  }

  if (toxic.isPlaying() == false) {toxic.play();}
  imageMode(CORNER);
  image(images[6][0], 0, 0, 1280, 800);
  image(images[6][8], width / 2 - 729 / 2, -25, 729, 729);
  imageMode(CENTER);
  for (let j = 0; j < 6; j++) for (let i = 0; i < 3; i++) if (clothes[i][j].wearing) clothes[i][j].drawClothes();
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("뭐, 썩 마음에 들지는 않지만 괜찮아요.\n패션의 완성은 자신감이죠. 고마워요!", width / 2, 668.5);
  fill(0, 0, 0, -600 + (frameCount - curFrame) * 7);
  rectMode(CORNER); rect(0, 0, width, height);
  fill(0);
  if (-600 + (frameCount - curFrame) * 7 > 255) { state = 2.19; curFrame = frameCount; sto_clear = true; }
}


class Clothes {
  constructor(imagedir, xi, yi, xf, yf, size) {
    this.img = loadImage(imagedir);
    this.initialX = xi;
    this.initialY = yi;
    this.finalX = xf;
    this.finalY = yf;
    this.wearing = false;
    this.size = size;
  }

  drawClothes() {
    if (this.wearing) { image(this.img, this.finalX, this.finalY, this.size, this.size * this.img.height / this.img.width); }
    else { image(this.img, this.initialX, this.initialY, 150, 150 * this.img.height / this.img.width); }
  }

  drawAtPoint(x, y) { image(this.img, x, y, this.img.width, this.img.height); }

  isOn(x, y) { //옷 클릭했는지 확인
    if (this.wearing) {
      if (this.finalX - 45 > x || this.finalX + 45 < x) return false;
      if (this.finalY - 45 > y || this.finalY + 45 < y) return false;
      return true;
    }
    else {
      if (this.initialX - 45 > x || this.initialX + 45 < x) return false;
      if (this.initialY - 45 > y || this.initialY + 45 < y) return false;
      return true;
    }
  }

  isOnQuokka(x, y) { //쿼카에 떨궜는지 확인
    if (450 > x || x > 870) return false;
    if (35 > y || y > 630) return false;
    return true;
  }

}
//=====================여기까지 백화점=============================

//=====================여기서부터 카페=============================
//카페 마우스이벤트
let corpos = [[950, 189], [1053, 373], [960, 484], [1059, 548], [975, 728]];
let correct = [false, false, false, false, false];
let wrongpos = [[100, 400], [150, 400], [200, 400]];
let number = 0; let curtime = 60; let sec;

function mousePressedAt7() {
  if (state == 7) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.1;
    }
  } else if (state == 7.1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.2;
    }
  } else if (state == 7.1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.2;
    }
  } else if (state == 7.2) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.3;
    }
  } else if (state == 7.3) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.4;
    }
  } else if (state == 7.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.5;
    }
  } else if (state == 7.5) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.6;
    }
  } else if (state == 7.6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.7;
    }
  } else if (state == 7.7) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.8;
    }
  } else if (state == 7.8) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.9;
    }
  } else if (state == 7.9) {
    state = 7.11;
  } else if (state == 7.11) {
    state = 7.12;
  } else if (state == 7.12) {
    if (496 < mouseX && mouseX < 787 && 593 < mouseY && mouseY < 677) {
      state = 7.13; sec = second();
    }
  } else if (state == 7.13) {
    //옷 외
    let corrected = false;
    for(let i = 0; i < 5; i++){
      if(i == 0){
        if (corpos[i][0] - 150 < mouseX && mouseX < corpos[i][0] + 150 &&
        corpos[i][1] - 30 < mouseY && mouseY < corpos[i][1] + 30) {
          if(!correct[i]) {correct[i] = true; return;}
          else {corrected = true; continue;}
        }
      }else{
      if (corpos[i][0] - 25 < mouseX && mouseX < corpos[i][0] + 25 &&
        corpos[i][1] - 25 < mouseY && mouseY < corpos[i][1] + 25) {
          if(!correct[i]) {correct[i] = true; return;}
          else {corrected = true; continue;}
        }
      }
    }
    if(!corrected){ number++; heartbreak.play(); }
    if (number == 4) { state = 7.22; curFrame = frameCount; } //틀림
  }

  else if (state == 7.21) {
    state = 7.211;
  } else if (state == 7.211) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.212; curFrame = frameCount;
    }
  } else if (state == 7.22) {
    state = 7.221;
  } else if (state == 7.223) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.224;
    }
  } else if (state == 7.224) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.225;
    }
  } else if (state == 7.225) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 7.226; curFrame = frameCount;
    }
  }
}

function cafe() {
  if (state == 7) drawCaf0();
  else if (state == 7.1) drawCaf1();
  else if (state == 7.2) drawCaf2();
  else if (state == 7.3) drawCaf3();
  else if (state == 7.4) drawCaf4();
  else if (state == 7.5) drawCaf5();
  else if (state == 7.6) drawCaf6();
  else if (state == 7.7) drawCaf7();
  else if (state == 7.8) drawCaf8();
  else if (state == 7.9) drawCaf9();
  else if (state == 7.11) drawCaf11();
  else if (state == 7.12) drawCaf12();
  else if (state == 7.13) drawCaf13();

  else if (state == 7.21) drawCaf21();
  else if (state == 7.211) drawCaf211();
  else if (state == 7.212) drawCaf212();

  else if (state == 7.22) drawCaf22();
  else if (state == 7.221) drawCaf221();
  else if (state == 7.222) drawCaf222();
  else if (state == 7.223) drawCaf223();
  else if (state == 7.224) drawCaf224();
  else if (state == 7.225) drawCaf225();
  else if (state == 7.226) drawCaf226();
}

function drawCaf0() {
  homeBgm.stop();
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("여기가 쿼카벅스구나.", width / 2, 668.5);
}

function drawCaf1() {
  if (caf_v_now == true) {
    v6_1.play();
    caf_v_now = false;
  }

  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][1], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201); //멘트
  image(images[0][6], 980, 685, 47, 44); //넥스트

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("오빠 뭐 마실거야? >_<", width / 2, 668.5);
}

function drawCaf2() {
  v6_1.stop();
  if (caf_v_now == false) {
    v6_2.play();
    caf_v_now = true;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][2], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("나는 우리 애기랑 똑같은 거 먹을래 ㅎㅎ", width / 2, 668.5);
}

function drawCaf3() {
  v6_2.stop();
  if (caf_v_now == true) {
    v6_3.play();
    caf_v_now = false;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][3], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("뭐야~ 몰라 >_< 나 엄청 많이 먹을 건데?", width / 2, 668.5);
}

function drawCaf4() {
  v6_3.stop();
  if (caf_v_now == false) {
    v6_4.play();
    caf_v_now = true;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][4], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("우리 애기 먹고 싶은 거 다 먹어!", width / 2, 668.5);
}

function drawCaf5() {
  v6_4.stop();
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][4], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("알콩달콩한 커플이네... 보기 좋다 ㅎㅎ", width / 2, 668.5);
}

function drawCaf6() {
  if (caf_v_now == true) {
    v6_5.play();
    caf_v_now = false;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], -136, -117, 1851, 1157);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][5], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아 맞다 오빠! 있잖아...", width / 2, 668.5);
}

function drawCaf7() {
  v6_5.stop();
  if (caf_v_now == false) {
    v6_6.play();
    caf_v_now = true;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], -136, -117, 1851, 1157);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][5], 319, 27, 625, 625);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("응? 왜 우리 애기~?", width / 2, 668.5);
}

function drawCaf8() {
  v6_6.stop();
  if (caf_v_now == true) {
    v6_7.play();
    caf_v_now = false;
  }
  cafeBgm.stop();
  imageMode(CORNER);
  image(images[7][0], -486, -304, 2417, 1444);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][6], -69, -109, 1233, 1233);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("나 뭐 달라진 거 없어?", width / 2, 668.5);
}

function drawCaf9() {
  v6_7.stop();
  imageMode(CORNER);
  image(images[7][0], -1034, -455, 2755, 1646);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][7], 86, -148, 1032, 1032);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function drawCaf11() { //게임 로고
  if (decision.isPlaying() == false) {decision.play();}
  image(images[7][17], 0, 0, 1280, 800);
}

function drawCaf12() { //게임 설명
  if (decision.isPlaying() == false) {decision.play();}
  imageMode(CORNER);
  image(images[0][11], 0, 0, 1280, 800); //배경
  image(images[0][1.7], width/2-540, height / 2-360, 1080, 1080*images[0][1.7].height/images[0][1.7].width); //게임 소개글 보드
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont(nameF);
  text("HOW TO PLAY", width / 2, 90);
  textSize(25);
  textFont(scriptF);
  //text("평화롭던 데이트... 그러나 말지옥에 빠질 위기에 처한 남친 쿼카!\n남친 쿼카가 무사히 데이트를 마칠 수 있도록 여친 쿼카의 달라진 점을 찾아내야 한다!\n\n제한 시간 60초 내에 오른쪽 그림에서 5군데의 틀린 곳을 발견해 클릭하면 성공!\n3번 이상 잘못된 곳을 클릭하거나, 60초 내에 5개를 모두 찾아내지 못할 경우 실패!", width / 2, 385);
  
  imageMode(CENTER);
  if (frameCount % 20 < 10) {
  image(images[0][8], width/2, 620, 440, 275);}
  else {image(images[0][8.1], width/2, 620, 440, 275);}
  imageMode(CORNER);
}

//카페 게임 시작
function drawCaf13() {
  if (decision.isPlaying() == false) {decision.play();}
  imageMode(CORNER);
  // image(images[7][0], 0, 0, 1280, 800); //배경
  rectMode(CORNER);
  fill('#FFF8C0');
  rect(0,0,1280,800);
  image(images[7][8], -28, 65, 735, 735);
  image(images[7][9], 600, 65, 735, 735);
  image(images[7][8.1], 180, -20, 289, 181);
  image(images[7][9.1], 811, -20, 289, 181);

  //타이머
  imageMode(CENTER);
  image(images[0][10], width/2, 90, 150, 170); //timer
  let curSec = second();
  if (sec != curSec) { sec = curSec; curtime--; }
  
  
  fill(0);
  stroke(1.5);
  textAlign(CENTER,CENTER);
  textFont(nameF);
  textSize(50);
  text(curtime, width/2, 90);
  if (curtime == 0) { state = 7.22; curFrame = frameCount; return; }

  rectMode(CENTER);
  for (let i = 0; i < 5; i++) {
    if (correct[i]) { image(images[7][18], corpos[i][0], corpos[i][1], 126, 126); }
  }
  
  //하트
  let a = [width/2 - 90, width/2 - 30, width/2 + 30, width/2 + 90];
  imageMode(CENTER);
  for (let i = 0; i < 4 - number; i++) {
    image(images[7][19], a[i], 220, 60, 60);
  }
  for (let i = 0; i < 5; i++) { if (!correct[i]) return; }
  state = 7.21;
}

//미션 성공
function drawCaf21() {
  if (decision.isPlaying() == false) {decision.play();}
  imageMode(CORNER);
  image(images[0][12], 0, 0, 1280, 800);

}

function drawCaf211() {
  decision.stop();
  if (!cafeBgm.isPlaying()) {cafeBgm.play();}
  if (!caf_v_now) {
    v6_8.play();
    caf_v_now = true;
  }
  
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);

  if (parseInt(frameCount / 9) % 2) image(images[7][10], 131, -98, 1039, 1039);
  else image(images[7][11], 131, -98, 1039, 1039);

  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  noStroke();
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("오빠~ 완전 감동!\n역시 오빠가 최고야! 사랑해~", width / 2, 668.5);
}

function drawCaf212() {
  v6_8.stop();
  if (caf_v_now == true) {
    v6_9.play();
    caf_v_now = false;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], -1034, -455, 2755, 1646);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][12], 264, 48, 752, 752);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("나도 사랑해~ㅎㅎ\n(휴...)", width / 2, 668.5);

  fill(0, 0, 0, -600 + (frameCount - curFrame) * 7);
  rectMode(CORNER); rect(0, 0, width, height);
  fill(0);
  if (-600 + (frameCount - curFrame) * 7 > 255) { state = 2.15; curFrame = frameCount; caf_clear = true; }
}

//카페 미션 실패
function drawCaf22() {
  if (decision.isPlaying() == false) {decision.play();}
  imageMode(CORNER);
  image(images[0][13], 0, 0, 1280, 800);
}

function drawCaf221() {
  if (state == 7.221) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat+500) {
      state = 7.222;
      startTime = 0; // startTime 초기화
    }
  }

  decision.stop();
  if (my_girl.isPlaying() == false) {my_girl.play();}
  imageMode(CORNER);
  image(images[7][0.1], -486, -304, 2417, 1444);
  images[7][0.1].filter(GRAY);
  // image(images[0][2], 58, 27, 90, 68);
  // image(images[0][0], 1025, 0, 186, 95);
  image(images[7][13.1], 62, -66, 866, 866);
  image(images[7][20], width / 2 - 539 / 2, 560, 539, 187);
  
  noStroke();
  // textFont(nameF);
  // textSize(35);
  // text("DAY " + todayDay+"/5", 1110, 50);
}

function drawCaf222() {
  if (state == 7.222) {
    if (startTime == 0) {
      startTime = millis(); // 현재 시간 기록
    }

    if (millis() - startTime >= durat+500) {
      state = 7.223;
      startTime = 0; // startTime 초기화
    }
  }
  if (my_girl.isPlaying() == false) {my_girl.play();}
  imageMode(CORNER);
  image(images[7][0.1], -1034, -455, 2755, 1646);
  images[7][0.1].filter(GRAY);
  // image(images[0][2], 58, 27, 90, 68);
  // image(images[0][0], 1025, 0, 186, 95);
  image(images[7][14.1], 327, -27, 866, 866);
  image(images[7][20], width / 2 - 539 / 2, 560, 539, 187);
  
  // textFont(nameF);
  // textSize(35);
  // text("DAY " + todayDay+"/5", 1110, 50);
}

function drawCaf223() {
  if (caf_v_now == false) {
    v6_10.play();
    caf_v_now = true;
  }
  my_girl.stop();
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], -486, -304, 2417, 1444);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][15], 15, -148, 1350, 1350);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("오빠... 나한테 관심이 없는 거야?", width / 2, 668.5);
}

function drawCaf224() {
  v6_10.stop();
  if (caf_v_now == true) {
    v6_11.play();
    caf_v_now = false;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][15], 355, 7, 649, 649);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("아...아냐~ 오빠가 요새 바빠서 좀 피곤한가 보다.", width / 2, 668.5);
}

function drawCaf225() {
  v6_11.stop();
  if (caf_v_now == false) {
    v6_12.play();
    caf_v_now = true;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], 0, 0, 1280, 800);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][16], 350, 7, 649, 649);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("그치? ㅎㅎ 다음부터는 잘 알아봐줘~!\n이제 어서 먹자 오빠! 너무 맛있겠다!", width / 2, 668.5);
}

function drawCaf226() {
  v6_12.stop();
  if (caf_v_now == true) {
    v6_13.play();
    caf_v_now = false;
  }
  if (cafeBgm.isPlaying() == false) {cafeBgm.play();}
  imageMode(CORNER);
  image(images[7][0], -1034, -455, 2755, 1646);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[7][12], 264, 48, 752, 752);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("응응...! 다음에는 꼭 바로 알아봐줄게ㅎㅎ;;", width / 2, 668.5);

  fill(0, 0, 0, -600 + (frameCount - curFrame) * 7);
  rectMode(CORNER); rect(0, 0, width, height);
  fill(0);
  if (-600 + (frameCount - curFrame) * 7 > 255) { state = 2.15; curFrame = frameCount; caf_clear = true; }
}

//=====================여기까지 카페=============================

//=====================여기서부터 커피(수정했지만 이름 유지)========================
//커피 마우스 이벤트

function mousePressedAt8() {
  if (state == 8.0) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 8.1;
    } else {
      state = 8.0;
    }
  }

  if (state == 8.1) {
    if (mouseX >= 1010 && mouseX <= 1192 && mouseY >= 375 && mouseY <= 640) {
      state = 8.2;
    } else {
      state = 8.1;
    }
  }

  if (state == 8.2) {
    if (480 < mouseX && mouseX < 680 && 450 < mouseY && mouseY < 650) {
      state = 8.3;
    } else {
      state = 8.2;
    }
  }

  if (state == 8.3) {
    if (220 < mouseX && mouseX < 320 && 100 < mouseY && mouseY < 200) {
      state = 8.4;
    } else {
      state = 8.3;
    }
  }

  if (state == 8.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 8.5;
    } else {
      state = 8.4;
    }
  } else if (state == 8.5) {
    state = 8.6; curFrame = frameCount;
  }
}

function Coffee() {
  if (state == 8.0) {
    Coffee_0();
  } else if (state == 8.1) {
    Coffee_1();
  } else if (state == 8.2) {
    Coffee_2();
  } else if (state == 8.3) {
    Coffee_3();
  } else if (state == 8.4) {
    Coffee_4();
  } else if (state == 8.5) {
    Coffee_5();
  } else if (state == 8.6) {
    Coffee_6();
  } else if (state == 8.7) {
    Coffee_7();
  }
}

function Coffee_0() {
    
  ghost.stop();
  
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  if (todayDayPlus == false) {
    todayDay += 1;
    todayDayPlus = true;
  }
  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "벌써 쿼카마을에서의 마지막 날이네. \n 연구소 지령을 다시 살펴봐야겠다.",
    width / 2,
    668.5
  );
}

function Coffee_1() {
    if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  if (0 < frameCount % 60 && frameCount % 60 <= 30) {
    image(images[2][1], 1010, 375, 182, 265); // 첫 번째 이미지
  } else {
    image(images[2][1.1], 1000, 365, 202, 285); // 두 번째 이미지
  }
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textFont(nameF);
textSize(35);
text("DAY " + todayDay+"/5", 1110, 50);
}

function Coffee_2() {
  if (mailbox_v_now == false) {
    mailboxOpenSound.play();
    mailbox_v_now = true;
    }
  
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }

  imageMode(CORNER);
  image(images[2][4], 0, 0, width, height);

  imageMode(CENTER);
  let letter_size_1 = 471;
  let letter_size_2 = 328;
  if (480 < mouseX && mouseX < 680 && 450 < mouseY && mouseY < 650) {
    letter_size_1 = 491;
    letter_size_2 = 348;
  }
  image(images[2][5], 490, 550, letter_size_1, letter_size_2);

  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  textFont(nameF);
textSize(35);
text("DAY " + todayDay+"/5", 1110, 50);
}

function Coffee_3() {
    if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[0][19], 0, 0, width, height);
  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  textFont(nameF);
textSize(35);
text("DAY " + todayDay+"/5", 1110, 50);

  imageMode(CENTER);
  image(images[0][9], width / 2, height / 2, 800, 600); //편지

  imageMode(CORNER);
  image(images[0][4], 220, 100, 100, 100);

  textAlign(CENTER);
  textSize(35);
  textFont(letterF);
  text(
    "연구는 잘 마무리했나? \n 훌륭한 결과물을 준비했을 것이라 믿어 의심치 않네. \n 마을 바깥쪽에 인간 세상으로 돌아올 수 있는 비행기를 준비해두었네. \n 마지막까지 쿼카들에게 절대 들키지 않고 \n 잘 마무리하여 조심히 복귀하도록.",
    width / 2,
    height / 2
  );
}

function Coffee_4() {
    if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][0], 0, 0, width, height);
  image(images[2][1], 1010, 375);
  imageMode(CORNER);
  image(images[0][7], 205, 558, 870, 201);
  imageMode(CORNER);
  image(images[0][6], 980, 685, 47, 44);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  textFont(nameF);
textSize(35);
text("DAY " + todayDay+"/5", 1110, 50);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("좋았어... 이제 나가볼까?", width / 2, 668.5);
}

function Coffee_5() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  imageMode(CORNER);
  image(images[2][10], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
}

function Coffee_6() {
  if (homeBgm.isPlaying() == false) {
    homeBgm.play();
  }
  if (home_d_now == todayDay) {
    doorOpen.play();
    home_d_now += 1;
  }
  imageMode(CORNER);
  image(images[2][11], 0, 0, width, height);
  imageMode(CORNER);
  image(images[0][2], 58, 27, 90, 68); //홈 버튼
  imageMode(CORNER);
  image(images[0][0], 1025, 0, 186, 95); //날짜 표지판
  
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay+"/5", 1110, 50);
  
   fill(0,0,0,-170+(frameCount-curFrame)*7);
    rectMode(CORNER); rect(0,0,width, height);
    fill(0);
    if(-200+(frameCount-curFrame)*7>255) { state = 10; curFrame = frameCount; caf_clear = true;}
}

function Coffee_7() {
  homeBgm.stop();
  background(0);
}

//=====================여기까지 커피=============================

//=====================여기서부터 아웃트로=============================

// function mousePressedAt9() {
//   if (state == 9) state = 9.1;
//   else if (state == 9.1) state = 10;
// }

// function outro() {
//   if (state == 9) drawOutro0();
//   else if (state == 9.1) drawOutro1();
// }
// function drawOutro0() {
//   imageMode(CENTER);
//   image(images[9][0], width / 2, height / 2, width, height);
// }

// function drawOutro1() {
//   push();
//   translate(width / 2, height / 2);
//   scale(-1, 1);
//   image(cam, 0, 0, width, cam.height);
//   pop();
//   // imageMode(CENTER);
//   // image(images[9][3], width / 2, height / 2, width, height);
// }
//=====================여기까지 아웃트로=============================

//=====================여기서부터 엔딩=============================

function mousePressedAt10() {
  if (state == 10) {
    if (255-(frameCount-curFrame)*7 > 0) return;
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.1;
    }
  } else if (state == 10.1) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.2;
    }
  } else if (state == 10.2) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.3;
    }
  } else if (state == 10.3) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.4;
    }
  } else if (state == 10.4) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.5;
    }
  } else if (state == 10.5) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.6;
    }
  } else if (state == 10.6) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.7;
    }
  } else if (state == 10.7) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.8;
    }
  } else if (state == 10.8) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.9;
    }
  } else if (state == 10.9) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.11;
    }
  } else if (state == 10.11) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.12;
    }
  } else if (state == 10.12) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.13;
    }
  } else if (state == 10.13) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.14;
    }
  } else if (state == 10.14) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.15;
    }
  } else if (state == 10.15) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.16;
    }
  } else if (state == 10.16) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.17;
    }
  } else if (state == 10.17) {
    if (mouseX >= 970 && mouseX <= 1037 && mouseY >= 675 && mouseY <= 739) {
      state = 10.18;
    }
  } else if (state == 10.18) {
    if (500 < mouseX && mouseX < 785 && 626 < mouseY && mouseY < 700) {
      state = 10.19;
    }
  } else if (state == 10.21) {
    if (355 < mouseX && mouseX < 575 && 600 < mouseY && mouseY < 685) {
      state = 10.19;
    }
    if (705 < mouseX && mouseX < 925 && 600 < mouseY && mouseY < 685) {
      state = 10.22;
    }
  } else if (state == 10.22) {
    state = 0;
    turnOffAllVariables();
    turnOffAllSounds();
  }
}

function end() {
  if (state == 10) drawEnd0();
  else if (state == 10.1) drawEnd1();
  else if (state == 10.2) drawEnd2();
  else if (state == 10.3) drawEnd3();
  else if (state == 10.4) drawEnd4();
  else if (state == 10.5) drawEnd5();
  else if (state == 10.6) drawEnd6();
  else if (state == 10.7) drawEnd7();
  else if (state == 10.8) drawEnd8();
  else if (state == 10.9) drawEnd9();
  else if (state == 10.11) drawEnd11();
  else if (state == 10.12) drawEnd12();
  else if (state == 10.13) drawEnd13();
  else if (state == 10.14) drawEnd14();
  else if (state == 10.15) drawEnd15();
  else if (state == 10.16) drawEnd16();
  else if (state == 10.17) drawEnd17();
  else if (state == 10.18) drawEnd18();
  else if (state == 10.19) drawEnd19();
  else if (state == 10.21) drawEnd21();
  else if (state == 10.22) drawEnd22();
  else if (state == 10.23) drawEnd23();
}


function drawEnd0() {
  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER, CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "막상 마을을 떠나려니 아쉽네...\n정든 쿼카 친구들과 인사도 못하고 헤어져야 하다니.",
    width / 2,
    668.5
  );

  fill(0,0,0,255-(frameCount-curFrame)*7);
     rectMode(CORNER); rect(0,0,width,height);
     fill(0);
}

function drawEnd1() {
  homeBgm.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);

  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);
  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("엇...?! 뭐...뭐야?", width / 2, 668.5);
}

function drawEnd2() {
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_1.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);


  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "뭐긴 뭐야! 오늘 떠나는 날이라서 작별 인사 차 모인 거지.",
    width / 2,
    668.5
  );
}

function drawEnd3() {
  end_v_1.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("연구원 K", width / 2 - 275, 587);
  textFont(scriptF);
  text("너희... 내 정체를 알고 있었던 거야?", width / 2, 668.5);
}

function drawEnd4() {
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_2.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("물론이지.", width / 2, 668.5);
}

function drawEnd5() {
  end_v_2.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_3.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "쿼카 행복 연구소에서 우리가 행복한 이유를\n연구하기 위해 매년 인간을 보내고 있잖아.",
    width / 2,
    668.5
  );
}

function drawEnd6() {
  end_v_3.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_4.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("그런데 참 이상해.", width / 2, 668.5);
}

function drawEnd7() {
  end_v_4.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_5.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("우리가 행복한 이유에는 전혀 특별한 게 없거든.", width / 2, 668.5);
}

function drawEnd8() {
  end_v_5.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_6.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], -611, -367, 2080, 1300);
  image(images[10][4], 130, -123, 1045, 1045);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("학생 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("맛있는 음식을 먹고,", width / 2, 668.5);
}

function drawEnd9() {
  end_v_6.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_7.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], -800, -324, 2080, 1300);
  image(images[10][5], 190, 0, 930, 930);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("꾸준히 운동하고,", width / 2, 668.5);
}

function drawEnd11() {
  end_v_7.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_8_1.play();
    end_v_8_2.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], -36, -250, 2080, 1300);
  image(images[10][6], 280, 48, 689, 719);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카, 남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("크고 작게 다투더라도 사랑하는 존재와 함께하고,", width / 2, 668.5);
}

function drawEnd12() {
  end_v_8_1.stop();
  end_v_8_2.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_9.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], -289, -191, 2080, 1300);
  image(images[10][7], 214, 0, 852, 852);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("남의 시선에 구애받지 않으며 나를 표현하고.", width / 2, 668.5);
}

function drawEnd13() {
  end_v_9.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_10.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("패셔니스타 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("이런 사소한 것들이 우리를 행복하게 하는 전부야.", width / 2, 668.5);
}

function drawEnd14() {
  end_v_10.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_11.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("헬짱 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("너희 인간들도 일상 속 행복함을 찾아보길 바라.", width / 2, 668.5);
}

function drawEnd15() {
  end_v_11.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_12.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("여친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text(
    "생각보다 가까운 곳에 행복이 존재함을 깨닫는다면,\n너희 인간들도 늘 행복할 거라 믿어!",
    width / 2,
    668.5
  );
}

function drawEnd16() {
  end_v_12.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == true) {
    end_v_13.play();
    ending_v_now = false;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("남친 쿼카", width / 2 - 275, 587);
  textFont(scriptF);
  text("그동안 즐거웠어.", width / 2, 668.5);
}

function drawEnd17() {
  end_v_13.stop();
  if (endingBgm.isPlaying() == false) {
    endingBgm.play();
  }
  if (ending_v_now == false) {
    end_v_14.play();
    ending_v_now = true;
  }

  imageMode(CORNER);
  image(images[10][9], 0, 0, width, height);
  image(images[10][0], 205, 183, 390, 390);
  image(images[10][1], 606, 190, 375, 375);
  image(images[10][2], 746, 190, 359, 359);
  image(images[10][3], 418, 171, 376, 376);

  image(images[0][2], 58, 27, 90, 68);
  image(images[0][0], 1025, 0, 186, 95);
  image(images[0][7], 205, 558, 870, 201);
  image(images[0][6], 980, 685, 47, 44);

  textAlign(CENTER);
  textFont(nameF);
  textSize(35);
  text("DAY " + todayDay + "/5", 1110, 50);
  textSize(25);
  textFont(nameF);
  text("쿼카들", width / 2 - 275, 587);
  textFont(scriptF);
  text("잘 가, 인간!", width / 2, 668.5);
}

function drawEnd18() {
  end_v_14.stop();
  imageMode(CORNER);

  imageMode(CORNER);
  image(images[0][11], 0, 0, 1280, 800); //배경
  image(images[0][1], width / 2 - 540, height / 2 - 360, 1080, 720); //게임 소개글 보드
  textAlign(CENTER, CENTER);
  textSize(35);
  textFont(nameF);
  text("HOW TO PLAY", width / 2, 90);
  textSize(25);
  textFont(scriptF);
  text(
    "마지막으로 쿼카와 함께 단체 사진을 찍자.\n엔터키를 누르면 사진을 저장할 수 있는 QR코드가 제공된다.",
    width / 2,
    370
  );
  imageMode(CENTER);
if (frameCount % 20 < 10) {
  image(images[0][8], width/2, 620, 440, 275); // 첫 번째 이미지
} else {
  image(images[0][8.1], width/2, 620, 440, 275); // 두 번째 이미지
}
}

function drawEnd19() {
  tagDiv.html("");
  
  imageMode(CORNER);

  push();
  translate(width, 0);
  scale(-1, 1);

  let poloroidCam = cam.get(90, 60, 500, 500);
  imageMode(CENTER);
  image(poloroidCam, width / 2, height / 2 - 40, 450, 450);
  pop();

  imageMode(CENTER);
  image(images[10][8], width / 2, height / 2, 700, 700);

  textFont(scriptF);
  textSize(30);
  textAlign(CENTER);
  text("엔터키를 눌러 사진을 찍어 주세요.", width/2, 30);
}

function drawEnd21() {
  imageMode(CORNER);
  image(images[0][31], 0, 0, 1280, 800); //배경
  image(images[0][(parseInt(frameCount / 10) % 8) + 23], 0, 0, 1280, 800); //구름

  tagDiv.html(qrImg);
  
  image(images[10][10], width / 2-300, height / 2+100, 300, 300);
  image(images[10][11], width / 2 + 50, height / 2 + 100, 300, 300);
}

function drawEnd22() {
  tagDiv.html("");
  
  imageMode(CORNER);
  image(images[10][12], 0, 0, width, height);
  
  textFont(scriptF);
  textSize(30);
  textAlign(CENTER);
  text("화면을 클릭해 초기 화면으로 돌아가 주세요.", width/2, 50);
}

function drawEnd23() {
  imageMode(CORNER);
  image(images[0][31], 0, 0, 1280, 800); //배경
  image(images[0][(parseInt(frameCount / 10) % 8) + 23], 0, 0, 1280, 800); //구름
  
  textFont(nameF);
  textSize(30);
  textAlign(CENTER);
  if (0 < frameCount%60 && frameCount%60 <= 15) {
    text("변환 중", width/2, height/2);
  } else if (16 < frameCount%60 && frameCount%60 <= 30) {
    text("변환 중.", width/2, height/2);
  } else if (31 < frameCount%60 && frameCount%60 <= 45) {
    text("변환 중..", width/2, height/2);
  } else if (45 < frameCount%60 && frameCount%60 <= 60) {
    text("변환 중...", width/2, height/2);
  }
}

function keyPressed() {
  if (keyCode == 13 && state == 10.19) {
    //사진을 파이어베이스에 저장하고 QR코드 생성

    let storageRef = storage.ref();
    let filesRef = storageRef.child(
      "images/" +
        year() +
        month() +
        day() +
        hour() +
        minute() +
        second() +
        ".jpg"
    );
    screenShot = get(385, 60, 505, 680);
    screenShot.loadPixels();
    convertdata = screenShot.canvas.toDataURL();
    const uploadStart = filesRef.putString(convertdata, "data_url");
    uploadStart.then((uploadTaskSnapshot) => {
      uploadTaskSnapshot.ref.getDownloadURL().then((url) => {
        forQRurl = url;
        qr = qrcode(0, "L");
        qr.addData(forQRurl);
        qr.make();
        qrImg = qr.createImgTag(5, 20, "qr code");
        state = 10.21;
      });
    });
    // 업로드 중 화면 표시
    state = 10.23;
  }
}
//=====================여기까지 엔딩=============================

//=====================여기서부터 리셋=============================
function turnOffAllVariables() {
  todayDay = 1;
  resetOn = false;
  intro_v_now = false;
  images16_Visible = true;
  images17_Visible = true;
  images18_Visible = true;
  images19_Visible = true;
  images110_Visible = false;
  show_pillimage = false;
  show_waterimage = false;
  show_paperimage = false;
  imageTimer = 0;
  imageInterval = 2000;
  continuous = false;
  interim = false;
  speech = "";
  speechReady = false;
  h = 500;
  hIncrease = false;
  home_d_now = 1;
  home_s_now = 1;
  todayDayPlus = true;
  mail_s_now = 0;
  mail_open_time = 0;
  sch_clear = false;
  gym_clear = false;
  sto_clear = false;
  caf_clear = false;
  gym_v_now = false;
  gym_now = true;
  currentImageIndex = 0;
  currentIndex = 0;
  startTime = 0;
  // durat = 4000;
  gym_s_now = false;
  gym_timer1 = 1200;
  gym_timer2 = 1200;
  gym_timer3 = 1200;
  gym_timer4 = 1200;
  char_pos = 265;
  timer = 1200;
  sch_v_now = true;
  sch_b_now = true;
  posNum = 8;
  sch_positions = [
  [1045, 350],
  [940, 350],
  [825, 350],
  [710, 350],
  [600, 350],
  [490, 350],
  [375, 350],
  [265, 350],
  ];
  currentPositionIdx = 0;
  nextTime = 120;
  currTime = 0;
  sto_s_now = true;
  sto_v_now = true;
  caf_v_now = true;
  ending_v_now = true;
  curState = 0;
  curDay = 0;
  correct = [false, false, false, false, false];
  number = 0;

}

function turnOffAllSounds() {
  for (let sf of sounds) {
    sf.stop();
  }
}
