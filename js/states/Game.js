
Tutorial.Game = function (game)
{
  /* members */
  this.cursorkeys;
  this.keys;

  // scalemanager modes (http://phaser.io/docs/2.6.2/Phaser.ScaleManager.html)
  this.currentMode = 0;
  this.scaleModesTxt = [" NO_SCALE", "SHOW_ALL", "EXACT_FIT", "RESIZE", "USER_SCALE"];
  this.scaleModes = [ Phaser.ScaleManager.NO_SCALE, Phaser.ScaleManager.SHOW_ALL, Phaser.ScaleManager.EXACT_FIT, Phaser.ScaleManager.RESIZE, Phaser.ScaleManager.USER_SCALE];
};

Tutorial.Game.prototype =
{
  create: function ()
  {


  },
  update: function()
  {

  },
  render: function()
  {

  }
};
