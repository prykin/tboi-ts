/* cSpell:disable */

function nooo()
{
   if(!linx)
   {
      mdm.Application.exit();
   }
   else
   {
      fscommand("quit");
   }
}
function ffss1(f0)
{
   if(f0 == true)
   {
      f0 = 1;
   }
   if(f0 <= 0)
   {
      f0 = 0;
   }
   return f0;
}
function add(v1)
{
   if(v1.length > 0)
   {
      f1 += "," + ffss1(v1[0]);
      z = 1;
      while(z < v1.length)
      {
         f1 += "\'" + ffss1(v1[z]);
         z++;
      }
   }
   else
   {
      if(v1 == undefined or !v1 or v1 == "false")
      {
         v1 = 0;
      }
      f1 += "," + v1;
   }
}
function sub(f3)
{
   f1++;
   var _loc1_ = checker2[f1];
   if(f3)
   {
      _loc1_ = _loc1_.split("\'");
      for(z in _loc1_)
      {
         _loc1_[z] *= 1;
         if(_loc1_[z] <= 0)
         {
            _loc1_[z] = 0;
         }
      }
      return _loc1_;
   }
   if(_loc1_ * 1 > 0)
   {
      _loc1_ *= 1;
   }
   if(_loc1_ == "undefined")
   {
      _loc1_ = undefined;
   }
   if(_loc1_ == "true")
   {
      _loc1_ = true;
   }
   if(_loc1_ == "false")
   {
      _loc1_ = false;
   }
   if(_loc1_ == "0")
   {
      _loc1_ = 0;
   }
   return _loc1_;
}
function aloc()
{
   checker1 = new Array(400);
   e = 0;
   while(e < 400)
   {
      checker1[e] = checker[e];
      e++;
   }
   for(e in locker)
   {
      if(e > 0)
      {
         if(locker[e])
         {
            f1 = e * 2 + 11;
            checker1[f1] += e % 4 + 1;
            if(checker1[f1] > 9)
            {
               checker1[f1] -= 9;
            }
         }
      }
   }
   f1 = "";
   e = 0;
   while(e < 400)
   {
      f1 += checker1[e];
      e++;
   }
   add(so.data.frog);
   add(so.data.left);
   add(so.data.frog);
   add(so.data.wins);
   add(so.data.shits);
   add(so.data.pill);
   add(so.data.dde);
   add(so.data.gams);
   add(so.data.bomb);
   add(so.data.deads);
   add(so.data.rocks);
   add(so.data.cols);
   add(so.data.boss);
   add(so.data.lcomp);
   add(so.data.mwin);
   add(so.data.rox);
   add(so.data.icer);
   saverr = f1;
}
function aloc2()
{
   if(!linx)
   {
      var _loc3_ = mdm.Application.path;
      var _loc2_ = mdm.FileSystem.loadFile(_loc3_ + "serial.txt");
      checker2 = _loc2_.split(",");
      f1 = 0;
      if(!so.data.cocks)
      {
         if(so.data.deads > 5)
         {
            so.data.cocks = true;
         }
         if(checker2.length > 10)
         {
            so.data.cocks = true;
            so.data.frog = sub();
            so.data.left = sub();
            so.data.frog = sub();
            so.data.wins = sub();
            so.data.shits = sub();
            so.data.pill = sub();
            so.data.dde = sub();
            so.data.gams = sub();
            so.data.bomb = sub();
            so.data.deads = sub();
            so.data.rocks = sub();
            so.data.cols = sub(true);
            so.data.boss = sub(true);
            so.data.lcomp = sub(true);
            so.data.mwin = sub(true);
            so.data.rox = sub();
            so.data.icer = sub();
         }
      }
      checker1 = checker2[0].split("");
      e = 0;
      while(e < 400)
      {
         if(!locker[e])
         {
            f1 = e * 2 + 11;
            f2 = checker[f1] * 1 + e % 4 * 1 + 1;
            if(f2 > 9)
            {
               f2 -= 9;
            }
            if(f2 == checker1[f1])
            {
               locker[e] = ulocker[e] = true;
               _root.lockor.unshift(e);
            }
         }
         e++;
      }
   }
}
function soundy(nam, vol, xxasda)
{
   lastn = nam;
   if(_root.soundonce[nam] == undefined or xxasda)
   {
      _root.soundonce[nam] = true;
      if(!so.data.soff or xxasda)
      {
         mpp = nam.indexOf(".mp3") <= 0;
         if(nam.indexOf(".mp") > 0 && mpp)
         {
            nam += "3";
         }
         mpp = true;
         if(vol == undefined)
         {
            vol = 100;
         }
         vol *= _root.soundvol;
         v0 = _root.sz.length;
         f2 = f1 = false;
         if(_root.bossl == _root.lev or _root.bossl2 == _root.lev)
         {
            if(nam == "bossintro.mp3" && _root.chaps == 6)
            {
               f1 = true;
               nam = "m10-0.mp3";
               _root.bossmusic = true;
            }
            else if(nam == "bossintro.mp3" && _root.chaps == 8)
            {
               f1 = true;
               nam = "m8-0.mp3";
               _root.bossmusic = true;
            }
            else if(nam == "bossintro.mp3" && _root.chaps == 9 && !_root.altchap)
            {
               f1 = true;
               nam = "m20-0.mp3";
               _root.bossmusic = true;
            }
         }
         _root.szz = _root.szz + 1;
         _root.sz[v0] = _root.attachMovie("soundz","sz" + _root.szz,_root.szz + 2000000000);
         _root.sz[v0].nam = nam;
         _root.sz[v0].s = new Sound(_root.sz[v0]);
         if(mpp)
         {
            _root.sz[v0].s.attachSound(nam);
         }
         else
         {
            _root.sz[v0].s.loadSound(nam,false);
         }
         z = 0;
         while(z < 40)
         {
            if(nam == "m" + z + "-1.mp3")
            {
               f1 = true;
               f2 = true;
               if(z == 19)
               {
                  vol = 0;
               }
            }
            if(nam == "m" + z + "-0.mp3")
            {
               f1 = true;
            }
            z++;
         }
         if(f1 or nam == "bossintro.mp3" or nam == "isaacbosswin.mp3" or nam == "ambushwin.mp3" or nam == "levelbumper.mp3" or nam == "m1-2.mp3" or nam == bosm or nam == "m-b0.mp3" or nam == "m-b1.mp3" or nam == "isaactitleloop.mp3" or nam == "credits1-0.mp3" or nam == "credits1-1.mp3")
         {
            if(nam == "bossintro.mp3")
            {
               _root.bossmusic = true;
            }
            if(_root.musc != undefined)
            {
               _root.fade = true;
            }
            if(nam == "isaacbosswin.mp3" or nam == "ambushwin.mp3")
            {
               _root.sz[v0].wining = true;
            }
            if(_root.amusc == undefined)
            {
               if(f2 or nam == "m-b1.mp3" or nam == "isaactitleloop.mp3")
               {
                  _root.sz[v0].looper = true;
                  _root.sz[v0].s.start(lop,0);
               }
               else
               {
                  _root.sz[v0].s.start(0,0);
               }
               _root.amusc = _root.sz[v0];
               vol = mvol;
            }
         }
         else
         {
            if(nam.indexOf("loop") > 0)
            {
               _root.sz[v0].s.start(0,999999);
               _root.sz[v0].looper2 = true;
            }
            else
            {
               _root.sz[v0].s.start(0,0);
            }
            if(nam.indexOf("Lightning_Zap") > 0)
            {
               light.dones = true;
               light = _root.sz[v0];
            }
         }
         _root.sz[v0].s.setVolume(vol);
         return _root.sz[v0];
      }
   }
}
function soz()
{
   so = SharedObject.getLocal("so","/");
   if(so.data.qqal == undefined)
   {
      qua("MEDIUM");
   }
   else
   {
      qua(so.data.qqal);
   }
   _root.musicoff = so.data.moff;
   _root.hardmode = so.data.hard;
   if(so.data.wins == undefined)
   {
      so.data.wins = 0;
   }
   if(so.data.rox == undefined)
   {
      so.data.rox = 0;
   }
   if(so.data.icer <= 0)
   {
      so.data.icer = 0;
   }
   if(so.data.shits == undefined)
   {
      so.data.shits = 0;
   }
   if(so.data.pill == undefined)
   {
      so.data.pill = 0;
   }
   if(so.data.dde == undefined)
   {
      so.data.dde = 0;
   }
   if(so.data.gams == undefined)
   {
      so.data.gams = 0;
   }
   if(so.data.bomb == undefined)
   {
      so.data.bomb = 0;
   }
   if(so.data.deads == undefined)
   {
      so.data.deads = 0;
   }
   if(so.data.rocks <= 0)
   {
      so.data.rocks = 0;
   }
   if(so.data.cols == undefined)
   {
      so.data.cols = [];
   }
   if(so.data.lock == undefined)
   {
      so.data.lock = [];
   }
   if(so.data.lockor == undefined)
   {
      so.data.lockor = [];
   }
   if(so.data.ulock == undefined)
   {
      so.data.ulock = [];
   }
   if(so.data.boss == undefined)
   {
      so.data.boss = [];
   }
   if(so.data.lcomp == undefined)
   {
      so.data.lcomp = [0,0,0,0,0,0,0,0,0,0];
   }
   if(so.data.mwin == undefined)
   {
      so.data.mwin = [0,0,0,0,0,0,0,0,0,0];
   }
   _root.minwin = so.data.mwin;
   f1 = [];
   e = 0;
   while(e < 200)
   {
      f1[e] = so.data.lock[e];
      e++;
   }
   so.data.lock = [];
   e = 0;
   while(e < 200)
   {
      so.data.lock[e] = f1[e];
      e++;
   }
   _root.locker = so.data.lock;
   _root.lockor = so.data.lockor;
   _root.ulocker = so.data.ulock;
   _root.res = so.data.res;
   if(so.data.wind == undefined)
   {
      _root.hdd = true;
   }
   else
   {
      _root.hdd = so.data.wind;
   }
   aloc2();
   aloc();
   if(so.data.cols == undefined)
   {
      so.data.cols = [];
   }
   if(so.data.lock == undefined)
   {
      so.data.lock = [];
   }
   if(so.data.lockor == undefined)
   {
      so.data.lockor = [];
   }
   if(so.data.ulock == undefined)
   {
      so.data.ulock = [];
   }
   if(so.data.boss == undefined)
   {
      so.data.boss = [];
   }
   if(so.data.lcomp == undefined)
   {
      so.data.lcomp = [0,0,0,0,0,0,0,0,0,0];
   }
   if(so.data.mwin == undefined)
   {
      so.data.mwin = [0,0,0,0,0,0,0,0,0,0];
   }
   _root.colss = so.data.cols;
   _root.bossk = so.data.boss;
   _root.lcomp = so.data.lcomp;
}
function unlos()
{
   loslol--;
   if(loslol < 0)
   {
      _root.unl.gogo = false;
      f1 = 0;
      f3 = 1000;
      for(z in _root.locker)
      {
         if(_root.locker[z] && !_root.ulocker[z])
         {
            f4 = z;
            if(f4 < f3)
            {
               f3 = f4;
               f1 = z;
            }
         }
      }
      if(f1 != 0)
      {
         _root.unl.nogo = true;
         _root.unl.gotoAndPlay(4);
         _root.ulocker[f1] = true;
         _root.lockor.unshift(f1);
         _root.unlll = f3;
         _root.unl.gotoAndPlay(2);
         _root.soundy("Choir_unlock.wav",100);
         loslol = 90;
         if(acnam[f1] != 0)
         {
            callit(acnam[f1]);
         }
      }
   }
   if(_root._currentframe > 2)
   {
      _root.winners = so.data.wins;
      if(_root.winners >= 2)
      {
         _root.locker[8] = true;
      }
      if(_root.winners >= 3)
      {
         _root.locker[9] = true;
      }
      if(_root.winners >= 4)
      {
         _root.locker[10] = true;
      }
      if(_root.winners >= 5)
      {
         _root.locker[11] = true;
      }
      if(_root.winners >= 6)
      {
         _root.locker[42] = true;
      }
      if(_root.winners >= 7)
      {
         _root.locker[43] = true;
      }
      if(_root.winners >= 8)
      {
         _root.locker[44] = true;
      }
      if(_root.winners >= 9)
      {
         _root.locker[45] = true;
      }
      if(_root.winners >= 10)
      {
         _root.locker[12] = true;
         _root.locker[41] = true;
      }
      z = 0;
      while(z < 3)
      {
         _root.locker[z + 15] = _root.locker[z + 1];
         z++;
      }
      if(_root.locker[54])
      {
         _root.locker[56] = true;
         _root.locker[57] = true;
      }
   }
}
function soundfra()
{
   _root.soundonce = [];
   if(Key.isDown(77))
   {
      if(nomute)
      {
         nomute = false;
         _root.musicoff = !_root.musicoff;
      }
   }
   else
   {
      nomute = true;
   }
   if(_root.musc == undefined)
   {
      _root.musc = _root.amusc;
      _root.amusc = undefined;
   }
   so.data.moff = _root.musicoff;
   if(_root.musc.nam == "bossintro.mp3" && _root.musc.s.position > 4000)
   {
      fade = true;
   }
   if(_root.a.flyshut > 0)
   {
      if(_root.flyss == undefined)
      {
         _root.flyss = _root.soundy("insect_swarm_loop.wav",100);
      }
      _root.flyss.s.setVolume(Math.min(150,_root.a.flyshut * 30 + 30));
   }
   else
   {
      _root.flyss.dones = true;
      _root.flyss = undefined;
   }
   if(_root.dmusic && (_root.a.player.hp > 0 or _root._currentframe != 2))
   {
      _root.dmusic = false;
      _root.fade = true;
   }
   if(_root.amas && !_root.amusic)
   {
      _root.amas = false;
      _root.fade = true;
   }
   if(_currentframe == 2 && _root.musc.nam == "m1-2.mp3")
   {
      _root.fade = false;
   }
   if(_root.musicoff or _root.fade)
   {
      f1 = _root.musc.s.getVolume();
      if(f1 > 5)
      {
         _root.musc.s.setVolume(f1 - 5);
      }
      else
      {
         _root.musc.done = true;
         _root.musc = undefined;
         _root.fade = false;
         if(introz or intro == 2)
         {
            introz = false;
         }
         else
         {
            intro = true;
         }
      }
   }
   else if(_currentframe != 1 && _root._currentframe <= 5 or _currentframe == 20 or _currentframe == 21 or _currentframe == 24 or _currentframe == 41)
   {
      f10 = _root._currentframe == 2 && _root.lev == _root.lib or _root._currentframe == 24;
      f9 = _root._currentframe == 2 && _root.lev == _root.hide2;
      f5 = _root._currentframe == 2 && _root.lev == _root.gamb;
      f6 = _root._currentframe == 2 && _root.lev == _root.shopl && _root.lev != _root.minb;
      f7 = _root._currentframe == 2 && _root.lev == 166 && _root.kramper != _root.chaps;
      f11 = _root._currentframe == 2 && _root.lev == 166 && _root.altsat;
      f8 = _root._currentframe == 2 && _root.lev == _root.hide && _root.lev != _root.minb;
      if(_root.musc == undefined && _root.amusc == undefined)
      {
         menubeen--;
         if(f10)
         {
            if(intro)
            {
               soundy("m30-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m30-1.mp3");
            }
         }
         else if(f9)
         {
            if(intro)
            {
               soundy("m28-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m28-1.mp3");
            }
         }
         else if(f9)
         {
            if(intro)
            {
               soundy("m25-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m25-1.mp3");
            }
         }
         else if(f8)
         {
            if(intro)
            {
               soundy("m15-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m15-1.mp3");
            }
         }
         else if(f7)
         {
            if(intro)
            {
               soundy("m14-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m14-1.mp3");
            }
         }
         else if(f6)
         {
            if(intro)
            {
               soundy("m13-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m13-1.mp3");
            }
         }
         else if(f5)
         {
            if(intro)
            {
               soundy("m12-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m12-1.mp3");
            }
         }
         else if(_root._currentframe == 20 or _root._currentframe == 21)
         {
            if(so.data.wins > 9)
            {
               if(intro)
               {
                  soundy("m11-0.mp3");
                  intro = false;
               }
               else
               {
                  soundy("m11-1.mp3");
               }
            }
            else if(intro)
            {
               soundy("credits1-0.mp3");
               intro = false;
            }
            else
            {
               soundy("credits1-1.mp3");
            }
         }
         else if(_root._currentframe == 5)
         {
            soundy("isaactitleloop.mp3");
         }
         else if(_root.bossmusic && !_root.dmusic)
         {
            if(_root.a.ashut > 0.9 or _root._currentframe == 4)
            {
               f1 = _root.lev == _root.bossl or _root.bossl2 == _root.lev;
               if(_root.chaps == 11 or _root.chaps == 9 && _root.altchap)
               {
                  if(_root.intro)
                  {
                     soundy("m29-0.mp3");
                     _root.intro = false;
                  }
                  else
                  {
                     soundy("m29-1.mp3");
                  }
               }
               else if(_root.chaps == 6 && f1)
               {
                  soundy("m10-1.mp3");
               }
               else if(_root.chaps == 8 && f1)
               {
                  soundy("m8-1.mp3");
               }
               else if(_root.chaps == 9 && f1 && !_root.altchap)
               {
                  soundy("m20-1.mp3");
               }
               else if(_root.altchap)
               {
                  if(_root.intro)
                  {
                     soundy("m26-0.mp3");
                     _root.intro = false;
                  }
                  else
                  {
                     soundy("m26-1.mp3");
                  }
               }
               else if(_root.intro)
               {
                  soundy("m-b0.mp3");
                  _root.intro = false;
               }
               else
               {
                  soundy("m-b1.mp3");
               }
               bosm = lastn;
            }
            else if(_currentframe == 24)
            {
               if(_root.intro)
               {
                  soundy("m30-0.mp3");
                  intro = false;
               }
               else
               {
                  soundy("m30-1.mp3");
               }
            }
            else if(_root.intro == 2)
            {
               soundy("m9-1.mp3");
            }
            else if(_root.intro)
            {
               if(_root.a.fra > 50)
               {
                  if(_root.lev == _root.bossl or _root.bossl2 == _root.lev)
                  {
                     soundy("isaacbosswin.mp3",35);
                  }
                  else
                  {
                     soundy("ambushwin.mp3",85);
                  }
               }
               _root.intro = 2;
            }
            else
            {
               soundy("m9-1.mp3");
            }
         }
         else
         {
            f1 = Math.min(Math.round(_root.chaps / 2),4);
            if(f1 <= 0)
            {
               f1 = 1;
            }
            if(_root.altchap && f1 != 4)
            {
               f1 += 20;
            }
            if(_root.chaps == 9)
            {
               if(_root.altchap)
               {
                  f1 = 25;
               }
               else
               {
                  f1 = 19;
               }
            }
            if(_root.dmusic)
            {
               _root.bossmusic = false;
               f1 = 7;
            }
            else if(_root.amusic)
            {
               f1 = 6;
               if(_root.lev == _root.chamb && _root.altch or (_root.lev == _root.shopl or _root.lev == _root.minb) && _root.altm)
               {
                  f1 = 27;
               }
               if(_root.lev != chamb)
               {
                  _root.amas = true;
               }
            }
            if(_root.chaps == 11)
            {
               if(intro)
               {
                  soundy("m-b0.mp3");
                  intro = false;
               }
               else
               {
                  soundy("m-b1.mp3");
               }
               _root.bossmusic = false;
            }
            else if(intro)
            {
               soundy("m" + f1 + "-0.mp3");
               intro = false;
            }
            else
            {
               soundy("m" + f1 + "-1.mp3");
            }
         }
      }
      else if(_root.mmus == undefined && _root.musc.s.getVolume() < mvol)
      {
         if(!_root.musc.wait)
         {
            f11 = Math.min(_root.musc.s.getVolume() + 1,mvol);
            _root.musc.s.setVolume(f11);
         }
      }
      if(_root.musc.nam != undefined && !fader)
      {
         if(_root.bossmusic)
         {
            if(_root.lev != _root.bossl && _root.bossl2 != _root.lev && _root.lev != _root.gamb && (_root.lev != 166 or _root.kramper != _root.chaps) && _root.lev != _root.minb && _root.lev != _root.chamb && _root._currentframe != 4)
            {
               _root.bossmusic = false;
               fade = true;
            }
            if(_root.a.ashut == 0 && _root.musc.nam != "m9-0.mp3" && _root.musc.nam != "m9-1.mp3" && _root.a.fra > 20 && _root.bossmusic != 2)
            {
               _root.bossmusic = 2;
               fade = true;
            }
         }
         if(_currentframe != 5 && _root.musc.nam == "isaactitleloop.mp3")
         {
            _root.fade = true;
         }
         if(_currentframe == 5 && _root.musc.nam != "isaactitleloop.mp3")
         {
            _root.fade = true;
         }
         if(f5 && _root.musc.nam != "m12-1.mp3" && _root.musc.nam != "m12-0.mp3")
         {
            _root.fade = true;
         }
         if(!f5 && (_root.musc.nam == "m12-1.mp3" or _root.musc.nam == "m12-0.mp3"))
         {
            _root.fade = true;
         }
         if(f6 && _root.musc.nam != "m13-0.mp3" && _root.musc.nam != "m13-1.mp3")
         {
            _root.fade = true;
         }
         if(!f6 && (_root.musc.nam == "m13-0.mp3" or _root.musc.nam == "m13-1.mp3"))
         {
            _root.fade = true;
            introz = true;
         }
         if(f7 && _root.musc.nam != "m14-0.mp3" && _root.musc.nam != "m14-1.mp3")
         {
            _root.fade = true;
         }
         if(!f7 && (_root.musc.nam == "m14-0.mp3" or _root.musc.nam == "m14-1.mp3"))
         {
            _root.fade = true;
         }
         if(f8 && _root.musc.nam != "m15-0.mp3" && _root.musc.nam != "m15-1.mp3")
         {
            _root.fade = true;
         }
         if(!f8 && (_root.musc.nam == "m15-0.mp3" or _root.musc.nam == "m15-1.mp3"))
         {
            _root.fade = true;
            introz = true;
         }
         if(f9 && _root.musc.nam != "m28-0.mp3" && _root.musc.nam != "m28-1.mp3")
         {
            _root.fade = true;
         }
         if(!f9 && (_root.musc.nam == "m28-0.mp3" or _root.musc.nam == "m28-1.mp3"))
         {
            _root.fade = true;
            introz = true;
         }
         if(f10 && _root.musc.nam != "m30-0.mp3" && _root.musc.nam != "m30-1.mp3")
         {
            _root.fade = true;
         }
         if(!f10 && (_root.musc.nam == "m30-0.mp3" or _root.musc.nam == "m30-1.mp3"))
         {
            _root.fade = true;
            introz = true;
         }
         if(_currentframe != 20 && _currentframe != 21 && (_root.musc.nam == "credits1-0.mp3" or _root.musc.nam == "credits1-1.mp3" or _root.musc.nam == "m11-0.mp3" or _root.musc.nam == "m11-1.mp3"))
         {
            _root.fade = true;
         }
         if((_currentframe == 20 or _currentframe == 21) && (_root.musc.nam != "credits1-0.mp3" && _root.musc.nam != "credits1-1.mp3" && _root.musc.nam != "m11-0.mp3" && _root.musc.nam != "m11-1.mp3"))
         {
            _root.fade = true;
         }
      }
   }
   else
   {
      fade = true;
   }
   for(e in sz)
   {
      trg = sz[e];
      if(trg.dones)
      {
         f1 = trg.s.getVolume() - 20;
         trg.s.setVolume(f1);
         if(f1 < 20)
         {
            trg.done = true;
         }
      }
      if(trg.looper && trg.s.duration - lop2 < trg.s.position)
      {
         trg.s.stop();
         trg.s.start(lop,0);
      }
      if(_root.musc == trg && trg.s.duration - lop2 < trg.s.position)
      {
         trg.s.stop();
         trg.done = true;
         _root.musc = undefined;
      }
      if(_root.musc == trg && trg.wining && trg.s.duration - 2500 < trg.s.position)
      {
         _root.musc = undefined;
      }
      if(_root.mmus == trg && trg.s.duration - 1000 < trg.s.position)
      {
         _root.mmus = undefined;
      }
      if(trg.s.duration == trg.s.position && !trg.looper && !trg.looper2 or trg.done)
      {
         if(_root.mmus == trg)
         {
            _root.mmus = undefined;
         }
         if(_root.musc == trg)
         {
            _root.musc = undefined;
         }
         trg.s.stop();
         trg.swapDepths(100);
         removeMovieClip(trg);
         sz.splice(e,1);
      }
   }
   if(random(1000) == 0)
   {
      f1 = [];
      e = 0;
      while(e < sz.length)
      {
         f1[e] = sz[e];
         e++;
      }
      sz = [];
      e = 0;
      while(e < f1.length)
      {
         sz[e] = f1[e];
         e++;
      }
   }
   if(_root.mmus != undefined)
   {
      _root.musc.s.setVolume(Math.max(5,_root.musc.s.getVolume() - 7));
   }
}
function prelod()
{
   lod = _root.getBytesLoaded();
   tot = _root.getBytesTotal();
   v1 = Math.round(lod / tot * 100);
   v2 = (v1 - cent) * 0.5;
   v3 = 100;
   if(Key.isDown(65))
   {
      v3 += 5;
   }
   cent += Math.min(v3,v2);
   if(_currentframe != 1)
   {
      prelod = undefined;
   }
   if(cent > 99.5)
   {
      v1 = passw.toLowerCase();
      _root.gotoAndStop("intro");
   }
}
function fullf(f1)
{
   if(linx)
   {
      hdd = true;
      _root._yscale = _root._xscale = 125;
      _root.a.mapd();
      _root._x = (1 - _root._xscale / 125) * 800 / 2;
      _root._y = (1 - _root._yscale / 125) * 600 / 2;
   }
   else if(win || macVersion != undefined)
   {
      lasf = fra;
      if(f1)
      {
         so.data.full = !so.data.full;
      }
      getUrl("FSCommand:allowscale", "false");
      if(_root.res <= 0 or !win)
      {
         if(!wider)
         {
            if(wid > 1000)
            {
               _root.res = 6;
            }
            else
            {
               _root.res = 1;
            }
         }
         else if(wid > 1200)
         {
            if(wider == 2)
            {
               _root.res = 5;
            }
            else
            {
               _root.res = 4;
            }
         }
         else
         {
            _root.res = 2;
         }
      }
      if(so.data.full)
      {
         f2 = refs[_root.res][0];
         f3 = refs[_root.res][1];
         mdm.Forms.thisForm.showFullScreen(true);
         if(win)
         {
            mdm.System.DirectX.enable(f2,f3,colz);
            mdm.Forms.thisForm.hideCaption(true);
         }
         if(f2 >= 1000 && f3 >= 800)
         {
            _root._xscale = 166.7;
         }
         else if(f2 >= 800 && f3 >= 700)
         {
            _root._xscale = 154;
         }
         else if(f2 >= 720 && f3 >= 600)
         {
            _root._xscale = 125;
         }
         else
         {
            _root._xscale = 100;
         }
      }
      else
      {
         mdm.Forms.thisForm.showFullScreen(false);
         mdm.Application.restore();
         if(win)
         {
            mdm.System.DirectX.disable();
            mdm.Forms.thisForm.hideCaption(false);
         }
         if(hdd == 2)
         {
            mdm.Forms.thisForm.width = 1024;
            mdm.Forms.thisForm.height = 800;
            _root._xscale = 163.5;
         }
         else if(hdd)
         {
            mdm.Forms.thisForm.width = 800;
            mdm.Forms.thisForm.height = 620;
            _root._xscale = 125;
         }
         else
         {
            mdm.Forms.thisForm.width = 640;
            mdm.Forms.thisForm.height = 510;
            _root._xscale = 100;
         }
         if(win)
         {
            mdm.System.DirectX.enable();
         }
      }
      _root._yscale = _root._xscale;
      _root.a.mapd();
      _root._x = (1 - _root._xscale / 125) * 800 / 2;
      _root._y = (1 - _root._yscale / 125) * 600 / 2;
      if(!so.data.full)
      {
         f1 = mdm.System.getResolution();
         mdm.Forms.thisForm.x = (f1[0] - mdm.Forms.thisForm.width) / 2 - 2;
         mdm.Forms.thisForm.y = (f1[1] - mdm.Forms.thisForm.height) / 2 - 20;
      }
   }
   else
   {
      _root._yscale = _root._xscale = 125;
      nozinc = true;
   }
}
function callit(f1)
{
   if(!linx)
   {
      var _loc2_ = mdm.Application.path;
      if(win)
      {
         var _loc3_ = mdm.Process.create("My App",0,0,500,600,"",_loc2_ + "FlashAchievements.exe " + f1,_loc2_,2,4);
      }
      else
      {
         if(fuk)
         {
            mdm.Process.setParams(f1);
            f1 = "";
         }
         else
         {
            f1 = " " + f1;
         }
         fuk = !fuk;
         _loc3_ = mdm.Process.create("My App",0,0,500,600,"",_loc2_ + "FlashAchievements " + f1,_loc2_,2,4);
      }
   }
}
function doit(trg)
{
   switch(trg._name)
   {
      case "b4":
         so.data.frog = !so.data.frog;
         break;
      case "b3":
         so.data.left = !so.data.left;
         break;
      case "b0":
         fullf(true);
         break;
      case "b1":
         so.data.soff = !so.data.soff;
         break;
      case "b2":
         _root.musicoff = !_root.musicoff;
         break;
      case "b5":
         _root.hardmode = _loc0_ = !_root.hardmode;
         so.data.hard = _loc0_;
   }
}
function wiq(f1)
{
   so.data.wind = _root.hdd = f1;
   showit();
   fullf();
}
function reser(f1)
{
   if(win)
   {
      f2 = refs[f1];
      so.data.res = _root.res = f1;
      showit();
      if(so.data.full)
      {
         fullf();
      }
   }
}
function showit()
{
   trg = _root.paus;
   _root.paus.b0.gotoAndStop(1);
   _root.paus.b1.gotoAndStop(1);
   _root.paus.b2.gotoAndStop(1);
   _root.paus.b3.gotoAndStop(1);
   _root.paus.b4.gotoAndStop(1);
   _root.men.men.b5.gotoAndStop(2);
   trg.wq0.gotoAndStop(2);
   trg.wq1.gotoAndStop(2);
   trg.wq2.gotoAndStop(2);
   if(_root.hdd == 2)
   {
      trg.wq0.gotoAndStop(1);
   }
   else if(_root.hdd)
   {
      trg.wq1.gotoAndStop(1);
   }
   else
   {
      trg.wq2.gotoAndStop(1);
   }
   if(!so.data.full)
   {
      _root.paus.b0.gotoAndStop(2);
   }
   if(!so.data.soff)
   {
      _root.paus.b1.gotoAndStop(2);
   }
   if(!so.data.frog)
   {
      _root.paus.b4.gotoAndStop(2);
   }
   if(!so.data.left)
   {
      _root.paus.b3.gotoAndStop(2);
   }
   if(_root.musicoff)
   {
      _root.paus.b2.gotoAndStop(2);
   }
   if(_root.hardmode)
   {
      _root.men.men.b5.gotoAndStop(1);
   }
   trg.r0.gotoAndStop(_root.res);
   e = 1;
   while(e < 8)
   {
      trg2 = trg["r" + e];
      trg2.gotoAndStop(e);
      trg2.as._visible = e == _root.res;
      e++;
   }
}
function qshow()
{
   f1 = ["HIGH","MEDIUM","LOW","AUTO"];
   z = 0;
   while(z < 4)
   {
      trg = _root.paus["bq" + z];
      if(f1[z] == qqua or z == 3 && qqua == undefined)
      {
         trg.gotoAndStop(1);
      }
      else
      {
         trg.gotoAndStop(2);
      }
      z++;
   }
}
function qua(f1)
{
   qqua = so.data.qqal;
   if(f1)
   {
      qqua = f1;
   }
   else if(qqua == "AUTO")
   {
      qqua = "HIGH";
   }
   else if(qqua == "MEDIUM")
   {
      qqua = "LOW";
   }
   else if(qqua == "LOW")
   {
      qqua = "AUTO";
   }
   else
   {
      qqua = "MEDIUM";
   }
   if(qqua == "AUTO")
   {
      _quality = "MEDIUM";
   }
   else
   {
      _quality = qqua;
   }
   _root.a.st22(qqua);
   so.data.qqal = qqua;
   qshow();
}
function goblack()
{
   if(_currentframe >= 3 && _currentframe < 10)
   {
      f1 = _currentframe;
   }
   else
   {
      f1 = 0;
   }
   if(ala != f1)
   {
      ala = f1;
      overlay2._alpha = 100;
      _root.hud._visible = false;
   }
}
function colorit(trg, f1, f2, f3, f4, f5, f6)
{
   var _loc1_ = new flash.geom.ColorTransform();
   _loc1_.redMultiplier = f1;
   _loc1_.greenMultiplier = f2;
   _loc1_.blueMultiplier = f3;
   _loc1_.redOffset = f4;
   _loc1_.greenOffset = f5;
   _loc1_.blueOffset = f6;
   var _loc2_ = new flash.geom.Transform(trg);
   _loc2_.colorTransform = _loc1_;
}
function uncolera()
{
   trg2 = hud.it;
   if(itb >= 0)
   {
      if(itb % 5 == 0)
      {
         if(itb % 10 == 0)
         {
         }
      }
   }
   itb--;
}
function darky(f1)
{
   if(f1 != 150)
   {
      if(f1 > 0)
      {
         dark = f1;
      }
   }
   else
   {
      dark = 5;
      _root.men.men.pos = 4;
      fader = true;
      _root.musc.done = true;
      if(!_root.musicoff)
      {
         _root.soundy("m1-2.mp3");
      }
      _root.intro = true;
      _root.fade = false;
      _root.chaps = 1;
   }
   if(dark > 0 or undark)
   {
      f1 = 2.5;
      f1 = getTimer() - dda;
      f1 /= 15;
      if(f1 > 15 or f1 <= 0)
      {
         f5 = 15;
      }
      if(fader)
      {
         dark += f1 * 2;
         if(dark > 160)
         {
            fader = false;
            _root.gotoAndStop("game");
         }
      }
      dark -= f1;
      undark = dark > 0;
      f1 = 1 - dark / 100;
      if(_root.chaps == 9 && _root.altchap)
      {
         f2 = 255 * (1 - f1);
      }
      else
      {
         f2 = 0;
      }
      colo = new flash.geom.ColorTransform();
      colo.redMultiplier = f1;
      colo.greenMultiplier = f1;
      colo.blueMultiplier = f1;
      colo.redOffset = f2;
      colo.greenOffset = f2;
      colo.blueOffset = f2;
      var _loc4_ = new flash.geom.Transform(this);
      _loc4_.colorTransform = colo;
   }
   else if(_root.a.fra < 50)
   {
      colo = new flash.geom.ColorTransform();
      _loc4_ = new flash.geom.Transform(this);
      _loc4_.colorTransform = colo;
   }
   dda = getTimer();
}
function onEnterFrame()
{
   if(_currentframe == 2)
   {
      if(_root.paus != _root.hud.paus)
      {
         _root.paus = _root.hud.paus;
         aloc();
      }
   }
   else if(_root.paus != _root.pauss)
   {
      aloc();
      _root.paus = _root.pauss;
   }
   fra++;
   nosave++;
   if(nosave > 100 && _currentframe != 2 || gosave)
   {
      nosave = 0;
      gosave = false;
      if(!linx)
      {
         var _loc2_ = mdm.Application.path;
         mdm.FileSystem.saveFile(_loc2_ + "myFile.txt","10");
         _loc2_ = mdm.Application.path;
         mdm.FileSystem.saveFile(_loc2_ + "serial.txt",saverr);
      }
   }
   darky();
   soundfra();
   uncolera();
   if(overlay2._alpha > 0)
   {
      overlay2._alpha -= 7;
   }
   else
   {
      overlay2._alpha = 0;
   }
   if(Key.isDown(32) && (_currentframe == 3 && d._currentframe > 5 or _currentframe == 4 && d._currentframe > 21))
   {
      _root.gotoAndStop("game");
      _root.fade = true;
   }
   if(Key.isDown(32) && _currentframe == 6)
   {
      _root.gotoAndStop(7);
      ffs1 = true;
   }
   if(Key.isDown(32) && (_currentframe == 21 or _currentframe == 7 or _root.creskip && _currentframe == 20) && !ffs1)
   {
      _root.creskip = false;
      _root.gotoAndStop("menu");
   }
   if(Key.isDown(32) && _currentframe == 9 && !ffs1)
   {
      _root.gotoAndStop(20);
      ffs1 = true;
   }
   if(Key.isDown(32) && (_currentframe > 9 && _currentframe < 20 or _currentframe == 22 or _currentframe == 23) && !ffs1)
   {
      _root.gotoAndStop(21);
      ffs1 = true;
   }
   if(!Key.isDown(32))
   {
      ffs1 = false;
   }
   unlos();
   prelod();
   if(Key.isDown(73))
   {
      if(unqua)
      {
         qua();
         unqua = false;
         _root.soundy("butt");
      }
   }
   else
   {
      unqua = true;
   }
   if(Key.isDown(72))
   {
      if(unff2)
      {
         if(hdd == 2)
         {
            hdd = true;
         }
         else if(hdd)
         {
            hdd = false;
         }
         else
         {
            hdd = 2;
         }
         fullf();
         unff2 = false;
         so.data.wind = hdd;
      }
   }
   else
   {
      unff2 = true;
   }
   if(Key.isDown(70))
   {
      if(unff)
      {
         if(!_root.a.unpause)
         {
            fullf(true);
            unff = false;
         }
      }
   }
   else
   {
      unff = true;
   }
   if(!Key.isDown(90))
   {
   }
}
linx = false;
st1 = [0,"The Sad Onion","The Inner Eye","Spoon Bender","Max\'s Head","My Reflection","Number one","Blood of the Martyr","Brother Bobby","Skatole","Halo of Flies","1up!","Magic Mushroom","The Virus","Roid Rage","<3","Raw Liver","Skeleton Key","A dollar!","Boom!","Transcendence","The Compass","Lunch","Dinner","Dessert","Breakfast","Rotten Meat ","Wooden Spoon","The Belt","Moms Underwear","Moms Heels ","Moms Lipstick","Wire Coat hanger!","The Bible","The Book of Belial","The Necronomicon","The Poop!","Mr. Boom!","Tammys Head","Moms Bra","kamikaze!","Moms Pad ","Bobs Rotten Head","Pills here!","Teleport!","Yum Heart","Lucky Foot","Doctors Remote","Cupids arrow","Shoop da Whoop!","Steven","Pentagram","Dr Fetus","Magneto","Treasure Map","Moms Eye","Lemon Mishap","Distant Admiration","Book of shadows","Wiggle Worm","The Ladder","Tarot Card","Charm of the vampire","The Battery","Steam Sale","Anarchist Cookbook","The Hourglass","Sister Maggy","Technology","Chocolate Milk","Growth Hormones","Mini Mush","Rosary","Cube of Meat","A Quarter","PHD","Xray-Vision","My little Unicorn","Book of Revelations","The Mark","The Pact","Dead Cat","Lord of the Pit","the Nail","We need to go deeper!","Deck of Cards","Monstros Tooth","Lokis Horns","Lil Chubby","Spider Bite","The Small Rock","Spelunker Hat","Super Bandage","The Gamekid","Sack of pennies","Robo-Baby","Little Chad","The Book of Sin","The Relic","Little Gish","Little Steve","The Halo","Moms Bottle of Pills","The common cold","The Parasite","The Dice","Mr. Mega","The Pinking Shears","The Wafer","Money = Power","Moms Contacts","The Bean","Guardian Angel","Demon Baby","Moms Knife","Ouija Board","9 Volt","Dead Bird","Brimstone","Blood Bag","Odd Mushroom","Odd Mushroom","Whore of Babylon","Monster Manuel","Dead Sea Scrolls","Bobby - Bomb","Razor Blade","Forget Me Now","Forever alone","Bucket of Lard","A Pony","Bomb Bag","A Lump of Coal","Guppys Paw","Guppys Tail","IV Bag","Best Friend","Remote Detonator","Stigmata","Moms Purse","Bobs Curse","Pageant Boy","Scapular","Speed Ball","Bum friend","Guppys Head","Prayer Card","Notched Axe","Infestation","Ipecac","Tough love","The Mulligan","Technology 2","Mutant Spider","Chemical peel","The Peeper!","Habit","Bloody Lust","Crystal Ball","Spirit of the night","Crack the Sky","Ankh","Celtic cross","Ghost Baby","The Candle","Cat-o-nine-tails","D20","Harlequin baby","Epic Fetus","Polyphemus","Daddy longlegs","Spider Butt","Sacrificial Dagger","Mitre","Rainbow Baby","Dads Key","Stem cells","Portable Slot!","Holy Water","Fate","The Black Bean","White Pony","Sacred Heart","Tooth Picks","Holy Grail","Dead Dove","Blood Rights","Guppys Hairball","Abel","SMB Super Fan!","Pyro","3 Dollar bill","Telepathy for Dummies","MEAT!","Magic 8 ball","Moms coin purse","Squeezy","Jesus Juice","BOX"];
st2x = [0,"Tears up!","Triple Shot","Homing shots","Dmg up!",0,"Tears up!","Dmg up!",0,"Fly Love",0,"1up!","All stats up!","Poison touch","Speed & Range up!","HP up!","HP up!",0,"$$$",0,0,0,"HP up!","HP up!","HP up!","HP up!","HP up!","Speed up!","Speed up!","Range up!","Range up!","Range up!","Tears up!","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use","SPACE to use",0,"SPACE to use","Piercing shots","SPACE to use","Damage Up","Damage Up","???","Item snatcher",0,"Extra Tears","SPACE to use","Attack Fly","SPACE to use","SSSSS!  ","Building Bridges",0,"kills heal","items recharge","50% off","Space to Use",0,0,"Laser Tears","Charge Shots","Speed + Dmg","Speed + Range","Faith Up!",0,"+25 coins","better Pills!","Ive seen everything!","SPACE to use","SPACE to use","Dmg + Speed!","Dmg + Tears!","9 lives","Deamon wings!","SPACE to use","SPACE to use","SPACE to use","SPACE to use","Extra Tears",0,"Slow Effect","Dmg Up + Tears","see thru doors","+2 hearts","SPACE to use","Gives Money",0,"Gives Hearts","SPACE to use",0,0,0,"all stats up","SPACE to use","Poison dmg","Split Shot","SPACE to use","Blast dmg","SPACE to use","dmg resistence","$$$ = Damage","freeze effect","SPACE to use","Faith up",0,"Stab Stab Stab!","Spectral Tears","Quicker charge",0,0,"HP Up","Tears + Speed","Dmg + HP + Range","Curse Up","SPACE to use","SPACE to use","Homing Bombs","SPACE to use","SPACE to use","Attack Fly","HP Up","SPACE to use","Gives Bombs","My Xmas Present","SPACE to use","Cursed?","Portable blood bank","Friends till the end!","SPACE to Detonate!","Dmg + Health +","more trinket room!","+5 Poison Bombs","","you have been blessed","Speed + Shot Speed +","hes greedy!","SPACE to use","SPACE to use","SPACE to use","They grow inside!","explosive shots!","tooth shot!","They grow inside!","laser!","Quad shot","Dmg up!","plop","Item Martyr ","RAGE!","SPACE to use","scary","SPACE to use","eternal life?","you feel blessed","","SPACE to use","shot speed up!","SPACE to use","","","","Daddys love","SPACE to use","","you feel blessed","","SPACE to use","HP + Shot Speed","SPACE to use","Don\'t spill it","","Panic Farts","SPACE to Use","Dmg + Homing","Shot Speed Up","Hp Up","Spectral Shots","SPACE to Use","Yuck!","","All Stats Up","","Random Tears","SPACE to use","Dmg + HP Up","Shot Speed up","","Tears Up","Dmg Up + Range","","","",0];
acnam = [0,"Maggy","Cain","Judas","Killed_Mom",0,0,0,"The_Noose","The_Nail","The_Quarter","The_Fetus",0,"The_Spider","The_Spelunker",0,0,0,"The_Rock","Monstros_Tooth","Lil_Chubby","Lokis_Horns",0,0,0,"The_Bandage","The_Cross","The_Bag","The_Robo-Baby","Book_of_Sin","Gish","Steven","Chad","The_Gamekid","The_Halo","Mr_Mega","Pill_Bottle","Common_Cold","The_D6","The_Shears","The_Parasite","Baby","Terrible","The_Wafer","Money_Power","It_Lives","The_Bean","Moms_Contact","The_Necronomicon","Basement_Boy","Cave_Boy","Depths_Boy","Womb_Boy","Golden_God","Eve","Moms_Knife",0,0,"The_Razor_Blade","The_Guardian_Angel","bombs","The_Demon_Baby","Forget_Me_Now","The_Monster_Manual","a_gift_from_krampus"];
acnam.push("_d20","_cross","_abel","_horn","_knife2","_rainbow","_bloodlust","_bloodpenny","_bloodrights","_polaroid","_dadskey","_toe","_candle","_burntpenny","_tail","_megafetus","_fish","_superfan","_spiderbutt","_counterfeit","_hairball","_eggsack",0,"_samson",0,"_platinum");
acnam.push("_head","_faith","_eye","_tongue","_birdfoot","_soul","_lock","_hand");
acnam.push("emom","esatan","eisaac","eheart","hardgame","ppers","egod","pisaac","pjudas","pmaggy","pcain","peve","psam","pblue","elife");
getUrl("FSCommand:showmenu", "false");
getUrl("FSCommand:trapallkeys", "true");
stop();
cent = 0;
_root.sz = [];
_root.szz = 0;
_root.soundonce = [];
_root.soundvol = 0.7;
mvol = 35;
dark = 0;
lop = 0.03;
checker = new Array(400);
f1 = 5;
f2 = 6;
e = 0;
while(e < 400)
{
   checker[e] = 0;
   e++;
}
e = 0;
while(e < 1000)
{
   f1 += f2;
   f2++;
   if(f2 > 5)
   {
      f2 = 2;
   }
   if(f1 >= 200)
   {
      f1 -= 200;
   }
   checker[f1] += e % 5;
   if(checker[f1] >= 9)
   {
      checker[f1] -= 9;
   }
   checker[f1 + 201] = checker[f1];
   e++;
}
_root.colss = [];
soz();
loslol = 0;
intro = true;
menubeen = 0;
lop2 = 30;
gof = 0;
prelod();
currUrl = _url.toLowerCase();
pass = true;
trg = _root.createEmptyMovieClip("olda",299);
old = new flash.display.BitmapData(640,480,true,0);
trg.attachBitmap(_root.old,1);
trg = createEmptyMovieClip("mapa",301);
map = new flash.display.BitmapData(450,150,true,0);
trg.attachBitmap(map,1,true,false);
trg._x = -45;
overlay.swapDepths(500);
if(!linx)
{
   f1 = mdm.System.getResolution();
}
wid = f1[0];
wider = f1[0] / f1[1];
colz = f1[2];
if(colz <= 10)
{
   colz = 32;
}
if(wider <= 1.5)
{
   wider = false;
}
else if(wider > 1.7)
{
   wider = 2;
}
if(linx)
{
   win = false;
}
else
{
   _root.tex = macVersion = mdm.System.macVerString;
   winVersion = mdm.System.winVerString;
   win = (macVersion + " ").indexOf("type Function") > 0 || winVersion > 0;
   _root.tex = win + " " + winVersion;
   mdm.Application.onAppChangeFocus = function(myObject)
   {
      if(myObject.focus != "true")
      {
         if(lasf + 100 < fra)
         {
            if(so.data.full)
            {
               so.data.full = false;
               fullf();
            }
         }
      }
   };
}
lasf = 0;
refs = [0,[800,600],[720,480],[640,480],[1280,800],[1280,720],[1024,768]];
overlay2._alpha = 0;
ala = 0;
attachMovie("hud","hud",300);
fullf();
fra = 0;
nosave = 0;
f1 = "";
f3 = false;
for(e in _root.locker)
{
   if(_root.locker[e])
   {
      if(acnam[e])
      {
         if(f3)
         {
            f1 += " ";
         }
         f1 += acnam[e];
         f3 = true;
      }
   }
}
_root.tex = f1;
if(f3)
{
   callit(f1);
   if(!win)
   {
      callit(f1);
   }
}
var myMenu = new ContextMenu();
myMenu.hideBuiltInItems();
_root.menu = myMenu;
