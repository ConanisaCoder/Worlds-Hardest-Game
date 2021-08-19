var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  
  
  
  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  playSound( "assets/project.mp3");
  
  var ding = createSprite(40,190,13,13);
  ding.shapeColor = "green";
  
  var dong1 = createSprite(100,130,20,10);
  dong1.shapeColor = "red";
  var dong2 = createSprite(215,130,30,10);
  dong2.shapeColor = "red";
  var dong3 = createSprite(165,250,40,10);
  dong3.shapeColor = "red";
  var dong4 = createSprite(270,250,50,10);
  dong4.shapeColor = "red";
  dong1.velocityY = 1;
  dong2.velocityY = -7;
  dong3.velocityY = -8;
  dong4.velocityY = 7;
  
  var count = 0;
  if(ding.isTouching(wall1) || ding.isTouching(wall2)) 
  playSound("sound123.mp3", true);

{
  textSize(40);
  stroke("red");
  text("You Win",200,200);
 }
function draw() {
  background("lightgrey");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  ding.bounceOff(wall1);
   ding.bounceOff(wall2);
   ding.bounceOff(wall3);
   ding.bounceOff(wall4);
   ding.bounceOff(wall5);
    ding.bounceOff(wall7);
   ding.bounceOff(wall8);
   ding.bounceOff(wall9);
   ding.bounceOff(wall10);
   ding.bounceOff(wall11);
 ding.bounceOff(wall12);
    
  
  
 if(keyDown("up"))
{ 
  ding.velocityX=0;
  ding.velocityY=-3;
  
}
if(keyDown("down"))
{ 
  ding.velocityX=0;
  ding.velocityY=3;
  
}
if(keyDown("right"))
{ 
  ding.velocityX=2;
  ding.velocityY=0;
  
}
if(keyDown("left"))
{ 
  ding.velocityX=-2;
  ding.velocityY=0;
  
}
   
  if(ding.isTouching(wall11)||
     ding.isTouching(wall12)||
     ding.isTouching(dong1)||
     ding.isTouching(dong2)||
     ding.isTouching(dong3)||
     ding.isTouching(dong4))
  {
     ding.x = 40;
     ding.y = 190;
     count = count + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
