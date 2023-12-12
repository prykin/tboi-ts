/* cSpell:disable */

function nooo() {
  if (!_init.linx) {
    this.mdm.Application.exit();
  } else {
    this.fscommand("quit");
  }
}
function ffss1(f0) {
  if (f0 == true) {
    f0 = 1;
  }
  if (f0 <= 0) {
    f0 = 0;
  }
  return f0;
}
function add(v1) {
  if (v1.length > 0) {
    _init.f1 += "," + ffss1(v1[0]);
    let z = 1;
    while (z < v1.length) {
      _init.f1 += "'" + ffss1(v1[z]);
      z++;
    }
  } else {
    if (v1 == undefined || !v1 || v1 == "false") {
      v1 = 0;
    }
    _init.f1 += "," + v1;
  }
}
function sub(f3) {
  _init.f1++;
  var _loc1_: any = _init.checker2[_init.f1];
  if (f3) {
    _loc1_ = _loc1_.split("'");
    for (let z in _loc1_) {
      _loc1_[z] *= 1;
      if (_loc1_[z] <= 0) {
        _loc1_[z] = 0;
      }
    }
    return _loc1_;
  }
  if (_loc1_ * 1 > 0) {
    _loc1_ *= 1;
  }
  if (_loc1_ == "undefined") {
    _loc1_ = undefined;
  }
  if (_loc1_ == "true") {
    _loc1_ = true;
  }
  if (_loc1_ == "false") {
    _loc1_ = false;
  }
  if (_loc1_ == "0") {
    _loc1_ = 0;
  }
  return _loc1_;
}
function aloc() {
  _init.checker1 = new Array(400);
  let e = 0;
  while (e < 400) {
    _init.checker1[e] = _init.checker[e];
    e++;
  }
  _init.locker.forEach((e) =>
    //for(let e in _init.locker) //quick fix
    {
      if (e > 0) {
        if (_init.locker[e]) {
          _init.f1 = e * 2 + 11;
          _init.checker1[_init.f1] += (e % 4) + 1;
          if (_init.checker1[_init.f1] > 9) {
            _init.checker1[_init.f1] -= 9;
          }
        }
      }
    }
  );
  _init.f1 = "";
  e = 0;
  while (e < 400) {
    _init.f1 += _init.checker1[e];
    e++;
  }
  add(_init.so.data.frog);
  add(_init.so.data.left);
  add(_init.so.data.frog);
  add(_init.so.data.wins);
  add(_init.so.data.shits);
  add(_init.so.data.pill);
  add(_init.so.data.dde);
  add(_init.so.data.gams);
  add(_init.so.data.bomb);
  add(_init.so.data.deads);
  add(_init.so.data.rocks);
  add(_init.so.data.cols);
  add(_init.so.data.boss);
  add(_init.so.data.lcomp);
  add(_init.so.data.mwin);
  add(_init.so.data.rox);
  add(_init.so.data.icer);
  _init.saverr = _init.f1;
}
function aloc2() {
  if (!_init.linx) {
    var _loc3_ = this.mdm.Application.path;
    var _loc2_ = this.mdm.FileSystem.loadFile(_loc3_ + "serial.txt");
    _init.checker2 = _loc2_.split(",");
    _init.f1 = 0;
    if (!_init.so.data.cocks) {
      if (_init.so.data.deads > 5) {
        _init.so.data.cocks = true;
      }
      if (_init.checker2.length > 10) {
        _init.so.data.cocks = true;
        _init.so.data.frog = this.sub();
        _init.so.data.left = this.sub();
        _init.so.data.frog = this.sub();
        _init.so.data.wins = this.sub();
        _init.so.data.shits = this.sub();
        _init.so.data.pill = this.sub();
        _init.so.data.dde = this.sub();
        _init.so.data.gams = this.sub();
        _init.so.data.bomb = this.sub();
        _init.so.data.deads = this.sub();
        _init.so.data.rocks = this.sub();
        _init.so.data.cols = sub(true);
        _init.so.data.boss = sub(true);
        _init.so.data.lcomp = sub(true);
        _init.so.data.mwin = sub(true);
        _init.so.data.rox = this.sub();
        _init.so.data.icer = this.sub();
      }
    }
    _init.checker1 = _init.checker2[0].split("");
    let e = 0;
    while (e < 400) {
      if (!_init.locker[e]) {
        _init.f1 = e * 2 + 11;
        _init.f2 = _init.checker[_init.f1] * 1 + (e % 4) * 1 + 1;
        if (_init.f2 > 9) {
          _init.f2 -= 9;
        }
        if (_init.f2 == _init.checker1[_init.f1]) {
          _init.locker[e] = _init.ulocker[e] = true;
          _root.lockor.unshift(e);
        }
      }
      e++;
    }
  }
}
function soundy(nam, vol, xxasda) {
  _init.lastn = nam;
  if (_root.soundonce[nam] == undefined || xxasda) {
    _root.soundonce[nam] = true;
    if (!_init.so.data.soff || xxasda) {
      let mpp = nam.indexOf(".mp3") <= 0;
      if (nam.indexOf(".mp") > 0 && mpp) {
        nam += "3";
      }
      mpp = true;
      if (vol == undefined) {
        vol = 100;
      }
      vol *= _root.soundvol;
      let v0 = _root.sz.length;
      _init.f2 = _init.f1 = false;
      if (_root.bossl == _root.lev || _root.bossl2 == _root.lev) {
        if (nam == "bossintro.mp3" && _root.chaps == 6) {
          _init.f1 = true;
          nam = "m10-0.mp3";
          _root.bossmusic = true;
        } else if (nam == "bossintro.mp3" && _root.chaps == 8) {
          _init.f1 = true;
          nam = "m8-0.mp3";
          _root.bossmusic = true;
        } else if (
          nam == "bossintro.mp3" &&
          _root.chaps == 9 &&
          !_root.altchap
        ) {
          _init.f1 = true;
          nam = "m20-0.mp3";
          _root.bossmusic = true;
        }
      }
      _root.szz = _root.szz + 1;
      _root.sz[v0] = _root.attachMovie(
        "soundz",
        "sz" + _root.szz,
        _root.szz + 2000000000
      );
      _root.sz[v0].nam = nam;
      _root.sz[v0].s = new Sound(_root.sz[v0]);
      if (mpp) {
        _root.sz[v0].s.attachSound(nam);
      } else {
        _root.sz[v0].s.loadSound(nam, false);
      }
      let z = 0;
      while (z < 40) {
        if (nam == "m" + z + "-1.mp3") {
          _init.f1 = true;
          _init.f2 = true;
          if (z == 19) {
            vol = 0;
          }
        }
        if (nam == "m" + z + "-0.mp3") {
          _init.f1 = true;
        }
        z++;
      }
      if (
        _init.f1 ||
        nam == "bossintro.mp3" ||
        nam == "isaacbosswin.mp3" ||
        nam == "ambushwin.mp3" ||
        nam == "levelbumper.mp3" ||
        nam == "m1-2.mp3" ||
        nam == _init.bosm ||
        nam == "m-b0.mp3" ||
        nam == "m-b1.mp3" ||
        nam == "isaactitleloop.mp3" ||
        nam == "credits1-0.mp3" ||
        nam == "credits1-1.mp3"
      ) {
        if (nam == "bossintro.mp3") {
          _root.bossmusic = true;
        }
        if (_root.musc != undefined) {
          _root.fade = true;
        }
        if (nam == "isaacbosswin.mp3" || nam == "ambushwin.mp3") {
          _root.sz[v0].wining = true;
        }
        if (_root.amusc == undefined) {
          if (_init.f2 || nam == "m-b1.mp3" || nam == "isaactitleloop.mp3") {
            _root.sz[v0].looper = true;
            _root.sz[v0].s.start(_init.lop, 0);
          } else {
            _root.sz[v0].s.start(0, 0);
          }
          _root.amusc = _root.sz[v0];
          vol = _init.mvol;
        }
      } else {
        if (nam.indexOf("loop") > 0) {
          _root.sz[v0].s.start(0, 999999);
          _root.sz[v0].looper2 = true;
        } else {
          _root.sz[v0].s.start(0, 0);
        }
        if (nam.indexOf("Lightning_Zap") > 0) {
          _init.light.dones = true;
          _init.light = _root.sz[v0];
        }
      }
      _root.sz[v0].s.setVolume(vol);
      return _root.sz[v0];
    }
  }
}
function soz() {
  _init.so = this.SharedObject.getLocal("so", "/");
  if (_init.so.data.qqal == undefined) {
    this.qua("MEDIUM");
  } else {
    this.qua(_init.so.data.qqal);
  }
  _root.musicoff = _init.so.data.moff;
  _root.hardmode = _init.so.data.hard;
  if (_init.so.data.wins == undefined) {
    _init.so.data.wins = 0;
  }
  if (_init.so.data.rox == undefined) {
    _init.so.data.rox = 0;
  }
  if (_init.so.data.icer <= 0) {
    _init.so.data.icer = 0;
  }
  if (_init.so.data.shits == undefined) {
    _init.so.data.shits = 0;
  }
  if (_init.so.data.pill == undefined) {
    _init.so.data.pill = 0;
  }
  if (_init.so.data.dde == undefined) {
    _init.so.data.dde = 0;
  }
  if (_init.so.data.gams == undefined) {
    _init.so.data.gams = 0;
  }
  if (_init.so.data.bomb == undefined) {
    _init.so.data.bomb = 0;
  }
  if (_init.so.data.deads == undefined) {
    _init.so.data.deads = 0;
  }
  if (_init.so.data.rocks <= 0) {
    _init.so.data.rocks = 0;
  }
  if (_init.so.data.cols == undefined) {
    _init.so.data.cols = [];
  }
  if (_init.so.data.lock == undefined) {
    _init.so.data.lock = [];
  }
  if (_init.so.data.lockor == undefined) {
    _init.so.data.lockor = [];
  }
  if (_init.so.data.ulock == undefined) {
    _init.so.data.ulock = [];
  }
  if (_init.so.data.boss == undefined) {
    _init.so.data.boss = [];
  }
  if (_init.so.data.lcomp == undefined) {
    _init.so.data.lcomp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (_init.so.data.mwin == undefined) {
    _init.so.data.mwin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  _root.minwin = _init.so.data.mwin;
  _init.f1 = [];
  let e = 0;
  while (e < 200) {
    _init.f1[e] = _init.so.data.lock[e];
    e++;
  }
  _init.so.data.lock = [];
  e = 0;
  while (e < 200) {
    _init.so.data.lock[e] = _init.f1[e];
    e++;
  }
  _root.locker = _init.so.data.lock;
  _root.lockor = _init.so.data.lockor;
  _root.ulocker = _init.so.data.ulock;
  _root.res = _init.so.data.res;
  if (_init.so.data.wind == undefined) {
    _root.hdd = true;
  } else {
    _root.hdd = _init.so.data.wind;
  }
  aloc2();
  aloc();
  if (_init.so.data.cols == undefined) {
    _init.so.data.cols = [];
  }
  if (_init.so.data.lock == undefined) {
    _init.so.data.lock = [];
  }
  if (_init.so.data.lockor == undefined) {
    _init.so.data.lockor = [];
  }
  if (_init.so.data.ulock == undefined) {
    _init.so.data.ulock = [];
  }
  if (_init.so.data.boss == undefined) {
    _init.so.data.boss = [];
  }
  if (_init.so.data.lcomp == undefined) {
    _init.so.data.lcomp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (_init.so.data.mwin == undefined) {
    _init.so.data.mwin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  _root.colss = _init.so.data.cols;
  _root.bossk = _init.so.data.boss;
  _root.lcomp = _init.so.data.lcomp;
}
function unlos() {
  _init.loslol--;
  if (_init.loslol < 0) {
    _root.unl.gogo = false;
    _init.f1 = 0;
    _init.f3 = 1000;
    for (let z in _root.locker) {
      if (_root.locker[z] && !_root.ulocker[z]) {
        _init.f4 = z;
        if (_init.f4 < _init.f3) {
          _init.f3 = _init.f4;
          _init.f1 = z;
        }
      }
    }
    if (_init.f1 != 0) {
      _root.unl.nogo = true;
      _root.unl.gotoAndPlay(4);
      _root.ulocker[_init.f1] = true;
      _root.lockor.unshift(_init.f1);
      _root.unlll = _init.f3;
      _root.unl.gotoAndPlay(2);
      _root.soundy("Choir_unlock.wav", 100);
      _init.loslol = 90;
      if (_init.acnam[_init.f1] != 0) {
        this.callit(_init.acnam[_init.f1]);
      }
    }
  }
  if (_root._currentframe > 2) {
    _root.winners = _init.so.data.wins;
    if (_root.winners >= 2) {
      _root.locker[8] = true;
    }
    if (_root.winners >= 3) {
      _root.locker[9] = true;
    }
    if (_root.winners >= 4) {
      _root.locker[10] = true;
    }
    if (_root.winners >= 5) {
      _root.locker[11] = true;
    }
    if (_root.winners >= 6) {
      _root.locker[42] = true;
    }
    if (_root.winners >= 7) {
      _root.locker[43] = true;
    }
    if (_root.winners >= 8) {
      _root.locker[44] = true;
    }
    if (_root.winners >= 9) {
      _root.locker[45] = true;
    }
    if (_root.winners >= 10) {
      _root.locker[12] = true;
      _root.locker[41] = true;
    }
    let z = 0;
    while (z < 3) {
      _root.locker[z + 15] = _root.locker[z + 1];
      z++;
    }
    if (_root.locker[54]) {
      _root.locker[56] = true;
      _root.locker[57] = true;
    }
  }
}
function soundfra() {
  _root.soundonce = [];
  if (Key.isDown(77)) {
    if (_init.nomute) {
      _init.nomute = false;
      _root.musicoff = !_root.musicoff;
    }
  } else {
    _init.nomute = true;
  }
  if (_root.musc == undefined) {
    _root.musc = _root.amusc;
    _root.amusc = undefined;
  }
  _init.so.data.moff = _root.musicoff;
  if (_root.musc.nam == "bossintro.mp3" && _root.musc.s.position > 4000) {
    _init.fade = true;
  }
  if (_root.a.flyshut > 0) {
    if (_root.flyss == undefined) {
      _root.flyss = _root.soundy("insect_swarm_loop.wav", 100);
    }
    _root.flyss.s.setVolume(Math.min(150, _root.a.flyshut * 30 + 30));
  } else {
    _root.flyss.dones = true;
    _root.flyss = undefined;
  }
  if (_root.dmusic && (_root.a.player.hp > 0 || _root._currentframe != 2)) {
    _root.dmusic = false;
    _root.fade = true;
  }
  if (_root.amas && !_root.amusic) {
    _root.amas = false;
    _root.fade = true;
  }
  if (_init._currentframe == 2 && _root.musc.nam == "m1-2.mp3") {
    _root.fade = false;
  }
  if (_root.musicoff || _root.fade) {
    _init.f1 = _root.musc.s.getVolume();
    if (_init.f1 > 5) {
      _root.musc.s.setVolume(_init.f1 - 5);
    } else {
      _root.musc.done = true;
      _root.musc = undefined;
      _root.fade = false;
      if (_init.introz || _init.intro == 2) {
        _init.introz = false;
      } else {
        _init.intro = true;
      }
    }
  } else if (
    (_init._currentframe != 1 && _root._currentframe <= 5) ||
    _init._currentframe == 20 ||
    _init._currentframe == 21 ||
    _init._currentframe == 24 ||
    _init._currentframe == 41
  ) {
    _init.f10 =
      (_root._currentframe == 2 && _root.lev == _root.lib) ||
      _root._currentframe == 24;
    _init.f9 = _root._currentframe == 2 && _root.lev == _root.hide2;
    _init.f5 = _root._currentframe == 2 && _root.lev == _root.gamb;
    _init.f6 =
      _root._currentframe == 2 &&
      _root.lev == _root.shopl &&
      _root.lev != _root.minb;
    _init.f7 =
      _root._currentframe == 2 &&
      _root.lev == 166 &&
      _root.kramper != _root.chaps;
    _init.f11 = _root._currentframe == 2 && _root.lev == 166 && _root.altsat;
    _init.f8 =
      _root._currentframe == 2 &&
      _root.lev == _root.hide &&
      _root.lev != _root.minb;
    if (_root.musc == undefined && _root.amusc == undefined) {
      _init.menubeen--;
      if (_init.f10) {
        if (_init.intro) {
          this.soundy("m30-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m30-1.mp3");
        }
      } else if (_init.f9) {
        if (_init.intro) {
          this.soundy("m28-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m28-1.mp3");
        }
      } else if (_init.f9) {
        if (_init.intro) {
          this.soundy("m25-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m25-1.mp3");
        }
      } else if (_init.f8) {
        if (_init.intro) {
          this.soundy("m15-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m15-1.mp3");
        }
      } else if (_init.f7) {
        if (_init.intro) {
          this.soundy("m14-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m14-1.mp3");
        }
      } else if (_init.f6) {
        if (_init.intro) {
          this.soundy("m13-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m13-1.mp3");
        }
      } else if (_init.f5) {
        if (_init.intro) {
          this.soundy("m12-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m12-1.mp3");
        }
      } else if (_root._currentframe == 20 || _root._currentframe == 21) {
        if (_init.so.data.wins > 9) {
          if (_init.intro) {
            this.soundy("m11-0.mp3");
            _init.intro = false;
          } else {
            this.soundy("m11-1.mp3");
          }
        } else if (_init.intro) {
          this.soundy("credits1-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("credits1-1.mp3");
        }
      } else if (_root._currentframe == 5) {
        this.soundy("isaactitleloop.mp3");
      } else if (_root.bossmusic && !_root.dmusic) {
        if (_root.a.ashut > 0.9 || _root._currentframe == 4) {
          _init.f1 = _root.lev == _root.bossl || _root.bossl2 == _root.lev;
          if (_root.chaps == 11 || (_root.chaps == 9 && _root.altchap)) {
            if (_root.intro) {
              this.soundy("m29-0.mp3");
              _root.intro = false;
            } else {
              this.soundy("m29-1.mp3");
            }
          } else if (_root.chaps == 6 && _init.f1) {
            this.soundy("m10-1.mp3");
          } else if (_root.chaps == 8 && _init.f1) {
            this.soundy("m8-1.mp3");
          } else if (_root.chaps == 9 && _init.f1 && !_root.altchap) {
            this.soundy("m20-1.mp3");
          } else if (_root.altchap) {
            if (_root.intro) {
              this.soundy("m26-0.mp3");
              _root.intro = false;
            } else {
              this.soundy("m26-1.mp3");
            }
          } else if (_root.intro) {
            this.soundy("m-b0.mp3");
            _root.intro = false;
          } else {
            this.soundy("m-b1.mp3");
          }
          _init.bosm = _init.lastn;
        } else if (_init._currentframe == 24) {
          if (_root.intro) {
            this.soundy("m30-0.mp3");
            _init.intro = false;
          } else {
            this.soundy("m30-1.mp3");
          }
        } else if (_root.intro == 2) {
          this.soundy("m9-1.mp3");
        } else if (_root.intro) {
          if (_root.a.fra > 50) {
            if (_root.lev == _root.bossl || _root.bossl2 == _root.lev) {
              this.soundy("isaacbosswin.mp3", 35);
            } else {
              this.soundy("ambushwin.mp3", 85);
            }
          }
          _root.intro = 2;
        } else {
          this.soundy("m9-1.mp3");
        }
      } else {
        _init.f1 = Math.min(Math.round(_root.chaps / 2), 4);
        if (_init.f1 <= 0) {
          _init.f1 = 1;
        }
        if (_root.altchap && _init.f1 != 4) {
          _init.f1 += 20;
        }
        if (_root.chaps == 9) {
          if (_root.altchap) {
            _init.f1 = 25;
          } else {
            _init.f1 = 19;
          }
        }
        if (_root.dmusic) {
          _root.bossmusic = false;
          _init.f1 = 7;
        } else if (_root.amusic) {
          _init.f1 = 6;
          if (
            (_root.lev == _root.chamb && _root.altch) ||
            ((_root.lev == _root.shopl || _root.lev == _root.minb) &&
              _root.altm)
          ) {
            _init.f1 = 27;
          }
          if (_root.lev != _init.chamb) {
            _root.amas = true;
          }
        }
        if (_root.chaps == 11) {
          if (_init.intro) {
            this.soundy("m-b0.mp3");
            _init.intro = false;
          } else {
            this.soundy("m-b1.mp3");
          }
          _root.bossmusic = false;
        } else if (_init.intro) {
          this.soundy("m" + _init.f1 + "-0.mp3");
          _init.intro = false;
        } else {
          this.soundy("m" + _init.f1 + "-1.mp3");
        }
      }
    } else if (
      _root.mmus == undefined &&
      _root.musc.s.getVolume() < _init.mvol
    ) {
      if (!_root.musc.wait) {
        _init.f11 = Math.min(_root.musc.s.getVolume() + 1, _init.mvol);
        _root.musc.s.setVolume(_init.f11);
      }
    }
    if (_root.musc.nam != undefined && !_init.fader) {
      if (_root.bossmusic) {
        if (
          _root.lev != _root.bossl &&
          _root.bossl2 != _root.lev &&
          _root.lev != _root.gamb &&
          (_root.lev != 166 || _root.kramper != _root.chaps) &&
          _root.lev != _root.minb &&
          _root.lev != _root.chamb &&
          _root._currentframe != 4
        ) {
          _root.bossmusic = false;
          _init.fade = true;
        }
        if (
          _root.a.ashut == 0 &&
          _root.musc.nam != "m9-0.mp3" &&
          _root.musc.nam != "m9-1.mp3" &&
          _root.a.fra > 20 &&
          _root.bossmusic != 2
        ) {
          _root.bossmusic = 2;
          _init.fade = true;
        }
      }
      if (_init._currentframe != 5 && _root.musc.nam == "isaactitleloop.mp3") {
        _root.fade = true;
      }
      if (_init._currentframe == 5 && _root.musc.nam != "isaactitleloop.mp3") {
        _root.fade = true;
      }
      if (
        _init.f5 &&
        _root.musc.nam != "m12-1.mp3" &&
        _root.musc.nam != "m12-0.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f5 &&
        (_root.musc.nam == "m12-1.mp3" || _root.musc.nam == "m12-0.mp3")
      ) {
        _root.fade = true;
      }
      if (
        _init.f6 &&
        _root.musc.nam != "m13-0.mp3" &&
        _root.musc.nam != "m13-1.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f6 &&
        (_root.musc.nam == "m13-0.mp3" || _root.musc.nam == "m13-1.mp3")
      ) {
        _root.fade = true;
        _init.introz = true;
      }
      if (
        _init.f7 &&
        _root.musc.nam != "m14-0.mp3" &&
        _root.musc.nam != "m14-1.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f7 &&
        (_root.musc.nam == "m14-0.mp3" || _root.musc.nam == "m14-1.mp3")
      ) {
        _root.fade = true;
      }
      if (
        _init.f8 &&
        _root.musc.nam != "m15-0.mp3" &&
        _root.musc.nam != "m15-1.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f8 &&
        (_root.musc.nam == "m15-0.mp3" || _root.musc.nam == "m15-1.mp3")
      ) {
        _root.fade = true;
        _init.introz = true;
      }
      if (
        _init.f9 &&
        _root.musc.nam != "m28-0.mp3" &&
        _root.musc.nam != "m28-1.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f9 &&
        (_root.musc.nam == "m28-0.mp3" || _root.musc.nam == "m28-1.mp3")
      ) {
        _root.fade = true;
        _init.introz = true;
      }
      if (
        _init.f10 &&
        _root.musc.nam != "m30-0.mp3" &&
        _root.musc.nam != "m30-1.mp3"
      ) {
        _root.fade = true;
      }
      if (
        !_init.f10 &&
        (_root.musc.nam == "m30-0.mp3" || _root.musc.nam == "m30-1.mp3")
      ) {
        _root.fade = true;
        _init.introz = true;
      }
      if (
        _init._currentframe != 20 &&
        _init._currentframe != 21 &&
        (_root.musc.nam == "credits1-0.mp3" ||
          _root.musc.nam == "credits1-1.mp3" ||
          _root.musc.nam == "m11-0.mp3" ||
          _root.musc.nam == "m11-1.mp3")
      ) {
        _root.fade = true;
      }
      if (
        (_init._currentframe == 20 || _init._currentframe == 21) &&
        _root.musc.nam != "credits1-0.mp3" &&
        _root.musc.nam != "credits1-1.mp3" &&
        _root.musc.nam != "m11-0.mp3" &&
        _root.musc.nam != "m11-1.mp3"
      ) {
        _root.fade = true;
      }
    }
  } else {
    _init.fade = true;
  }
  for (let e in _init.sz) {
    _init.trg = _init.sz[e];
    if (_init.trg.dones) {
      _init.f1 = _init.trg.s.getVolume() - 20;
      _init.trg.s.setVolume(_init.f1);
      if (_init.f1 < 20) {
        _init.trg.done = true;
      }
    }
    if (
      _init.trg.looper &&
      _init.trg.s.duration - _init.lop2 < _init.trg.s.position
    ) {
      _init.trg.s.stop();
      _init.trg.s.start(_init.lop, 0);
    }
    if (
      _root.musc == _init.trg &&
      _init.trg.s.duration - _init.lop2 < _init.trg.s.position
    ) {
      _init.trg.s.stop();
      _init.trg.done = true;
      _root.musc = undefined;
    }
    if (
      _root.musc == _init.trg &&
      _init.trg.wining &&
      _init.trg.s.duration - 2500 < _init.trg.s.position
    ) {
      _root.musc = undefined;
    }
    if (
      _root.mmus == _init.trg &&
      _init.trg.s.duration - 1000 < _init.trg.s.position
    ) {
      _root.mmus = undefined;
    }
    if (
      (_init.trg.s.duration == _init.trg.s.position &&
        !_init.trg.looper &&
        !_init.trg.looper2) ||
      _init.trg.done
    ) {
      if (_root.mmus == _init.trg) {
        _root.mmus = undefined;
      }
      if (_root.musc == _init.trg) {
        _root.musc = undefined;
      }
      _init.trg.s.stop();
      _init.trg.swapDepths(100);
      removeMovieClip(_init.trg);
      _init.sz.splice(e, 1);
    }
  }
  if (random(1000) == 0) {
    _init.f1 = [];
    let e = 0;
    while (e < _init.sz.length) {
      _init.f1[e] = _init.sz[e];
      e++;
    }
    _init.sz = [];
    e = 0;
    while (e < _init.f1.length) {
      _init.sz[e] = _init.f1[e];
      e++;
    }
  }
  if (_root.mmus != undefined) {
    _root.musc.s.setVolume(Math.max(5, _root.musc.s.getVolume() - 7));
  }
}
function prelod() {
  _init.lod = _root.getBytesLoaded();
  _init.tot = _root.getBytesTotal();
  let v1 = Math.round((_init.lod / _init.tot) * 100);
  let v2 = (v1 - _init.cent) * 0.5;
  let v3 = 100;
  if (Key.isDown(65)) {
    v3 += 5;
  }
  _init.cent += Math.min(v3, v2);
  if (_init._currentframe != 1) {
    this.prelod = undefined;
  }
  if (_init.cent > 99.5) {
    v1 = _init.passw.toLowerCase();
    _root.gotoAndStop("intro");
  }
}
function fullf(f1) {
  if (_init.linx) {
    _init.hdd = true;
    _root._yscale = _root._xscale = 125;
    _root.a.mapd();
    _root._x = ((1 - _root._xscale / 125) * 800) / 2;
    _root._y = ((1 - _root._yscale / 125) * 600) / 2;
  } else if (_init.win || _init.macVersion != undefined) {
    _init.lasf = _init.fra;
    if (f1) {
      _init.so.data.full = !_init.so.data.full;
    }
    this.getUrl("FSCommand:allowscale", "false");
    if (_root.res <= 0 || !_init.win) {
      if (!_init.wider) {
        if (_init.wid > 1000) {
          _root.res = 6;
        } else {
          _root.res = 1;
        }
      } else if (_init.wid > 1200) {
        if (_init.wider == 2) {
          _root.res = 5;
        } else {
          _root.res = 4;
        }
      } else {
        _root.res = 2;
      }
    }
    if (_init.so.data.full) {
      _init.f2 = _init.refs[_root.res][0];
      _init.f3 = _init.refs[_root.res][1];
      this.mdm.Forms.thisForm.showFullScreen(true);
      if (_init.win) {
        this.mdm.System.DirectX.enable(_init.f2, _init.f3, _init.colz);
        this.mdm.Forms.thisForm.hideCaption(true);
      }
      if (_init.f2 >= 1000 && _init.f3 >= 800) {
        _root._xscale = 166.7;
      } else if (_init.f2 >= 800 && _init.f3 >= 700) {
        _root._xscale = 154;
      } else if (_init.f2 >= 720 && _init.f3 >= 600) {
        _root._xscale = 125;
      } else {
        _root._xscale = 100;
      }
    } else {
      this.mdm.Forms.thisForm.showFullScreen(false);
      this.mdm.Application.restore();
      if (_init.win) {
        this.mdm.System.DirectX.disable();
        this.mdm.Forms.thisForm.hideCaption(false);
      }
      if (_init.hdd == 2) {
        this.mdm.Forms.thisForm.width = 1024;
        this.mdm.Forms.thisForm.height = 800;
        _root._xscale = 163.5;
      } else if (_init.hdd) {
        this.mdm.Forms.thisForm.width = 800;
        this.mdm.Forms.thisForm.height = 620;
        _root._xscale = 125;
      } else {
        this.mdm.Forms.thisForm.width = 640;
        this.mdm.Forms.thisForm.height = 510;
        _root._xscale = 100;
      }
      if (_init.win) {
        this.mdm.System.DirectX.enable();
      }
    }
    _root._yscale = _root._xscale;
    _root.a.mapd();
    _root._x = ((1 - _root._xscale / 125) * 800) / 2;
    _root._y = ((1 - _root._yscale / 125) * 600) / 2;
    if (!_init.so.data.full) {
      f1 = this.mdm.System.getResolution();
      this.mdm.Forms.thisForm.x =
        (f1[0] - this.mdm.Forms.thisForm.width) / 2 - 2;
      this.mdm.Forms.thisForm.y =
        (f1[1] - this.mdm.Forms.thisForm.height) / 2 - 20;
    }
  } else {
    _root._yscale = _root._xscale = 125;
    _init.nozinc = true;
  }
}
function callit(f1) {
  if (!_init.linx) {
    var _loc2_ = this.mdm.Application.path;
    if (_init.win) {
      var _loc3_ = this.mdm.Process.create(
        "My App",
        0,
        0,
        500,
        600,
        "",
        _loc2_ + "FlashAchievements.exe " + f1,
        _loc2_,
        2,
        4
      );
    } else {
      if (_init.fuk) {
        this.mdm.Process.setParams(f1);
        f1 = "";
      } else {
        f1 = " " + f1;
      }
      _init.fuk = !_init.fuk;
      _loc3_ = this.mdm.Process.create(
        "My App",
        0,
        0,
        500,
        600,
        "",
        _loc2_ + "FlashAchievements " + f1,
        _loc2_,
        2,
        4
      );
    }
  }
}
function doit(trg) {
  switch (trg._name) {
    case "b4":
      _init.so.data.frog = !_init.so.data.frog;
      break;
    case "b3":
      _init.so.data.left = !_init.so.data.left;
      break;
    case "b0":
      this.fullf(true);
      break;
    case "b1":
      _init.so.data.soff = !_init.so.data.soff;
      break;
    case "b2":
      _root.musicoff = !_root.musicoff;
      break;
    case "b5":
      _root.hardmode = _init._loc0_ = !_root.hardmode;
      _init.so.data.hard = _init._loc0_;
  }
}
function wiq(f1) {
  _init.so.data.wind = _root.hdd = f1;
  showit();
  this.fullf();
}
function reser(f1) {
  if (_init.win) {
    _init.f2 = _init.refs[f1];
    _init.so.data.res = _root.res = f1;
    showit();
    if (_init.so.data.full) {
      this.fullf();
    }
  }
}
function showit() {
  _init.trg = _root.paus;
  _root.paus.b0.gotoAndStop(1);
  _root.paus.b1.gotoAndStop(1);
  _root.paus.b2.gotoAndStop(1);
  _root.paus.b3.gotoAndStop(1);
  _root.paus.b4.gotoAndStop(1);
  _root.men.men.b5.gotoAndStop(2);
  _init.trg.wq0.gotoAndStop(2);
  _init.trg.wq1.gotoAndStop(2);
  _init.trg.wq2.gotoAndStop(2);
  if (_root.hdd == 2) {
    _init.trg.wq0.gotoAndStop(1);
  } else if (_root.hdd) {
    _init.trg.wq1.gotoAndStop(1);
  } else {
    _init.trg.wq2.gotoAndStop(1);
  }
  if (!_init.so.data.full) {
    _root.paus.b0.gotoAndStop(2);
  }
  if (!_init.so.data.soff) {
    _root.paus.b1.gotoAndStop(2);
  }
  if (!_init.so.data.frog) {
    _root.paus.b4.gotoAndStop(2);
  }
  if (!_init.so.data.left) {
    _root.paus.b3.gotoAndStop(2);
  }
  if (_root.musicoff) {
    _root.paus.b2.gotoAndStop(2);
  }
  if (_root.hardmode) {
    _root.men.men.b5.gotoAndStop(1);
  }
  _init.trg.r0.gotoAndStop(_root.res);
  let e = 1;
  while (e < 8) {
    _init.trg2 = _init.trg["r" + e];
    _init.trg2.gotoAndStop(e);
    _init.trg2.as._visible = e == _root.res;
    e++;
  }
}
function qshow() {
  _init.f1 = ["HIGH", "MEDIUM", "LOW", "AUTO"];
  let z = 0;
  while (z < 4) {
    _init.trg = _root.paus["bq" + z];
    if (_init.f1[z] == _init.qqua || (z == 3 && _init.qqua == undefined)) {
      _init.trg.gotoAndStop(1);
    } else {
      _init.trg.gotoAndStop(2);
    }
    z++;
  }
}
function qua(f1) {
  _init.qqua = _init.so.data.qqal;
  if (f1) {
    _init.qqua = f1;
  } else if (_init.qqua == "AUTO") {
    _init.qqua = "HIGH";
  } else if (_init.qqua == "MEDIUM") {
    _init.qqua = "LOW";
  } else if (_init.qqua == "LOW") {
    _init.qqua = "AUTO";
  } else {
    _init.qqua = "MEDIUM";
  }
  if (_init.qqua == "AUTO") {
    _init._quality = "MEDIUM";
  } else {
    _init._quality = _init.qqua;
  }
  _root.a.st22(_init.qqua);
  _init.so.data.qqal = _init.qqua;
  qshow();
}
function goblack() {
  if (_init._currentframe >= 3 && _init._currentframe < 10) {
    _init.f1 = _init._currentframe;
  } else {
    _init.f1 = 0;
  }
  if (_init.ala != _init.f1) {
    _init.ala = _init.f1;
    _init.overlay2._alpha = 100;
    _root.hud._visible = false;
  }
}
// function colorit(trg, f1, f2, f3, f4, f5, f6)
// {
//    var _loc1_ = new flash.geom.ColorTransform();
//    _loc1_.redMultiplier = f1;
//    _loc1_.greenMultiplier = f2;
//    _loc1_.blueMultiplier = f3;
//    _loc1_.redOffset = f4;
//    _loc1_.greenOffset = f5;
//    _loc1_.blueOffset = f6;
//    var _loc2_ = new flash.geom.Transform(trg);
//    _loc2_.colorTransform = _loc1_;
// }
function uncolera() {
  _init.trg2 = _init.hud.it;
  if (_init.itb >= 0) {
    if (_init.itb % 5 == 0) {
      if (_init.itb % 10 == 0) {
      }
    }
  }
  _init.itb--;
}
function darky(f1) {
  if (f1 != 150) {
    if (f1 > 0) {
      _init.dark = f1;
    }
  } else {
    _init.dark = 5;
    _root.men.men.pos = 4;
    _init.fader = true;
    _root.musc.done = true;
    if (!_root.musicoff) {
      _root.soundy("m1-2.mp3");
    }
    _root.intro = true;
    _root.fade = false;
    _root.chaps = 1;
  }
  if (_init.dark > 0 || _init.undark) {
    f1 = 2.5;
    f1 = this.getTimer() - _init.dda;
    f1 /= 15;
    if (_init.f1 > 15 || f1 <= 0) {
      _init.f5 = 15;
    }
    if (_init.fader) {
      _init.dark += f1 * 2;
      if (_init.dark > 160) {
        _init.fader = false;
        _root.gotoAndStop("game");
      }
    }
    _init.dark -= f1;
    _init.undark = _init.dark > 0;
    f1 = 1 - _init.dark / 100;
    if (_root.chaps == 9 && _root.altchap) {
      _init.f2 = 255 * (1 - f1);
    } else {
      _init.f2 = 0;
    }
    _init.colo = new flash.geom.ColorTransform();
    _init.colo.redMultiplier = f1;
    _init.colo.greenMultiplier = f1;
    _init.colo.blueMultiplier = f1;
    _init.colo.redOffset = _init.f2;
    _init.colo.greenOffset = _init.f2;
    _init.colo.blueOffset = _init.f2;
    var _loc4_ = new flash.geom.Transform(this);
    _loc4_.colorTransform = _init.colo;
  } else if (_root.a.fra < 50) {
    _init.colo = new flash.geom.ColorTransform();
    _loc4_ = new flash.geom.Transform(this);
    _loc4_.colorTransform = _init.colo;
  }
  _init.dda = this.getTimer();
}
function init_onEnterFrame() {
  if (_init._currentframe == 2) {
    if (_root.paus != _root.hud.paus) {
      _root.paus = _root.hud.paus;
      aloc();
    }
  } else if (_root.paus != _root.pauss) {
    aloc();
    _root.paus = _root.pauss;
  }
  _init.fra++;
  _init.nosave++;
  if ((_init.nosave > 100 && _init._currentframe != 2) || _init.gosave) {
    _init.nosave = 0;
    _init.gosave = false;
    if (!_init.linx) {
      var _loc2_ = this.mdm.Application.path;
      this.mdm.FileSystem.saveFile(_loc2_ + "myFile.txt", "10");
      _loc2_ = this.mdm.Application.path;
      this.mdm.FileSystem.saveFile(_loc2_ + "serial.txt", _init.saverr);
    }
  }
  this.darky();
  soundfra();
  uncolera();
  if (_init.overlay2._alpha > 0) {
    _init.overlay2._alpha -= 7;
  } else {
    _init.overlay2._alpha = 0;
  }
  if (
    Key.isDown(32) &&
    ((_init._currentframe == 3 && _init.d._currentframe > 5) ||
      (_init._currentframe == 4 && _init.d._currentframe > 21))
  ) {
    _root.gotoAndStop("game");
    _root.fade = true;
  }
  if (Key.isDown(32) && _init._currentframe == 6) {
    _root.gotoAndStop(7);
    _init.ffs1 = true;
  }
  if (
    Key.isDown(32) &&
    (_init._currentframe == 21 ||
      _init._currentframe == 7 ||
      (_root.creskip && _init._currentframe == 20)) &&
    !_init.ffs1
  ) {
    _root.creskip = false;
    _root.gotoAndStop("menu");
  }
  if (Key.isDown(32) && _init._currentframe == 9 && !_init.ffs1) {
    _root.gotoAndStop(20);
    _init.ffs1 = true;
  }
  if (
    Key.isDown(32) &&
    ((_init._currentframe > 9 && _init._currentframe < 20) ||
      _init._currentframe == 22 ||
      _init._currentframe == 23) &&
    !_init.ffs1
  ) {
    _root.gotoAndStop(21);
    _init.ffs1 = true;
  }
  if (!Key.isDown(32)) {
    _init.ffs1 = false;
  }
  unlos();
  prelod();
  if (Key.isDown(73)) {
    if (_init.unqua) {
      this.qua();
      _init.unqua = false;
      _root.soundy("butt");
    }
  } else {
    _init.unqua = true;
  }
  if (Key.isDown(72)) {
    if (_init.unff2) {
      if (_init.hdd == 2) {
        _init.hdd = true;
      } else if (_init.hdd) {
        _init.hdd = false;
      } else {
        _init.hdd = 2;
      }
      this.fullf();
      _init.unff2 = false;
      _init.so.data.wind = _init.hdd;
    }
  } else {
    _init.unff2 = true;
  }
  if (Key.isDown(70)) {
    if (_init.unff) {
      if (!_root.a.unpause) {
        fullf(true);
        _init.unff = false;
      }
    }
  } else {
    _init.unff = true;
  }
  if (!Key.isDown(90)) {
  }
}
function init() {
  _init.linx = false;
  _init.st1 = [
    0,
    "The Sad Onion",
    "The Inner Eye",
    "Spoon Bender",
    "Max's Head",
    "My Reflection",
    "Number one",
    "Blood of the Martyr",
    "Brother Bobby",
    "Skatole",
    "Halo of Flies",
    "1up!",
    "Magic Mushroom",
    "The Virus",
    "Roid Rage",
    "<3",
    "Raw Liver",
    "Skeleton Key",
    "A dollar!",
    "Boom!",
    "Transcendence",
    "The Compass",
    "Lunch",
    "Dinner",
    "Dessert",
    "Breakfast",
    "Rotten Meat ",
    "Wooden Spoon",
    "The Belt",
    "Moms Underwear",
    "Moms Heels ",
    "Moms Lipstick",
    "Wire Coat hanger!",
    "The Bible",
    "The Book of Belial",
    "The Necronomicon",
    "The Poop!",
    "Mr. Boom!",
    "Tammys Head",
    "Moms Bra",
    "kamikaze!",
    "Moms Pad ",
    "Bobs Rotten Head",
    "Pills here!",
    "Teleport!",
    "Yum Heart",
    "Lucky Foot",
    "Doctors Remote",
    "Cupids arrow",
    "Shoop da Whoop!",
    "Steven",
    "Pentagram",
    "Dr Fetus",
    "Magneto",
    "Treasure Map",
    "Moms Eye",
    "Lemon Mishap",
    "Distant Admiration",
    "Book of shadows",
    "Wiggle Worm",
    "The Ladder",
    "Tarot Card",
    "Charm of the vampire",
    "The Battery",
    "Steam Sale",
    "Anarchist Cookbook",
    "The Hourglass",
    "Sister Maggy",
    "Technology",
    "Chocolate Milk",
    "Growth Hormones",
    "Mini Mush",
    "Rosary",
    "Cube of Meat",
    "A Quarter",
    "PHD",
    "Xray-Vision",
    "My little Unicorn",
    "Book of Revelations",
    "The Mark",
    "The Pact",
    "Dead Cat",
    "Lord of the Pit",
    "the Nail",
    "We need to go deeper!",
    "Deck of Cards",
    "Monstros Tooth",
    "Lokis Horns",
    "Lil Chubby",
    "Spider Bite",
    "The Small Rock",
    "Spelunker Hat",
    "Super Bandage",
    "The Gamekid",
    "Sack of pennies",
    "Robo-Baby",
    "Little Chad",
    "The Book of Sin",
    "The Relic",
    "Little Gish",
    "Little Steve",
    "The Halo",
    "Moms Bottle of Pills",
    "The common cold",
    "The Parasite",
    "The Dice",
    "Mr. Mega",
    "The Pinking Shears",
    "The Wafer",
    "Money = Power",
    "Moms Contacts",
    "The Bean",
    "Guardian Angel",
    "Demon Baby",
    "Moms Knife",
    "Ouija Board",
    "9 Volt",
    "Dead Bird",
    "Brimstone",
    "Blood Bag",
    "Odd Mushroom",
    "Odd Mushroom",
    "Whore of Babylon",
    "Monster Manuel",
    "Dead Sea Scrolls",
    "Bobby - Bomb",
    "Razor Blade",
    "Forget Me Now",
    "Forever alone",
    "Bucket of Lard",
    "A Pony",
    "Bomb Bag",
    "A Lump of Coal",
    "Guppys Paw",
    "Guppys Tail",
    "IV Bag",
    "Best Friend",
    "Remote Detonator",
    "Stigmata",
    "Moms Purse",
    "Bobs Curse",
    "Pageant Boy",
    "Scapular",
    "Speed Ball",
    "Bum friend",
    "Guppys Head",
    "Prayer Card",
    "Notched Axe",
    "Infestation",
    "Ipecac",
    "Tough love",
    "The Mulligan",
    "Technology 2",
    "Mutant Spider",
    "Chemical peel",
    "The Peeper!",
    "Habit",
    "Bloody Lust",
    "Crystal Ball",
    "Spirit of the night",
    "Crack the Sky",
    "Ankh",
    "Celtic cross",
    "Ghost Baby",
    "The Candle",
    "Cat-o-nine-tails",
    "D20",
    "Harlequin baby",
    "Epic Fetus",
    "Polyphemus",
    "Daddy longlegs",
    "Spider Butt",
    "Sacrificial Dagger",
    "Mitre",
    "Rainbow Baby",
    "Dads Key",
    "Stem cells",
    "Portable Slot!",
    "Holy Water",
    "Fate",
    "The Black Bean",
    "White Pony",
    "Sacred Heart",
    "Tooth Picks",
    "Holy Grail",
    "Dead Dove",
    "Blood Rights",
    "Guppys Hairball",
    "Abel",
    "SMB Super Fan!",
    "Pyro",
    "3 Dollar bill",
    "Telepathy for Dummies",
    "MEAT!",
    "Magic 8 ball",
    "Moms coin purse",
    "Squeezy",
    "Jesus Juice",
    "BOX",
  ];
  _init.st2x = [
    0,
    "Tears up!",
    "Triple Shot",
    "Homing shots",
    "Dmg up!",
    0,
    "Tears up!",
    "Dmg up!",
    0,
    "Fly Love",
    0,
    "1up!",
    "All stats up!",
    "Poison touch",
    "Speed & Range up!",
    "HP up!",
    "HP up!",
    0,
    "$$$",
    0,
    0,
    0,
    "HP up!",
    "HP up!",
    "HP up!",
    "HP up!",
    "HP up!",
    "Speed up!",
    "Speed up!",
    "Range up!",
    "Range up!",
    "Range up!",
    "Tears up!",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    0,
    "SPACE to use",
    "Piercing shots",
    "SPACE to use",
    "Damage Up",
    "Damage Up",
    "???",
    "Item snatcher",
    0,
    "Extra Tears",
    "SPACE to use",
    "Attack Fly",
    "SPACE to use",
    "SSSSS!  ",
    "Building Bridges",
    0,
    "kills heal",
    "items recharge",
    "50% off",
    "Space to Use",
    0,
    0,
    "Laser Tears",
    "Charge Shots",
    "Speed + Dmg",
    "Speed + Range",
    "Faith Up!",
    0,
    "+25 coins",
    "better Pills!",
    "Ive seen everything!",
    "SPACE to use",
    "SPACE to use",
    "Dmg + Speed!",
    "Dmg + Tears!",
    "9 lives",
    "Deamon wings!",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "Extra Tears",
    0,
    "Slow Effect",
    "Dmg Up + Tears",
    "see thru doors",
    "+2 hearts",
    "SPACE to use",
    "Gives Money",
    0,
    "Gives Hearts",
    "SPACE to use",
    0,
    0,
    0,
    "all stats up",
    "SPACE to use",
    "Poison dmg",
    "Split Shot",
    "SPACE to use",
    "Blast dmg",
    "SPACE to use",
    "dmg resistence",
    "$$$ = Damage",
    "freeze effect",
    "SPACE to use",
    "Faith up",
    0,
    "Stab Stab Stab!",
    "Spectral Tears",
    "Quicker charge",
    0,
    0,
    "HP Up",
    "Tears + Speed",
    "Dmg + HP + Range",
    "Curse Up",
    "SPACE to use",
    "SPACE to use",
    "Homing Bombs",
    "SPACE to use",
    "SPACE to use",
    "Attack Fly",
    "HP Up",
    "SPACE to use",
    "Gives Bombs",
    "My Xmas Present",
    "SPACE to use",
    "Cursed?",
    "Portable blood bank",
    "Friends till the end!",
    "SPACE to Detonate!",
    "Dmg + Health +",
    "more trinket room!",
    "+5 Poison Bombs",
    "",
    "you have been blessed",
    "Speed + Shot Speed +",
    "hes greedy!",
    "SPACE to use",
    "SPACE to use",
    "SPACE to use",
    "They grow inside!",
    "explosive shots!",
    "tooth shot!",
    "They grow inside!",
    "laser!",
    "Quad shot",
    "Dmg up!",
    "plop",
    "Item Martyr ",
    "RAGE!",
    "SPACE to use",
    "scary",
    "SPACE to use",
    "eternal life?",
    "you feel blessed",
    "",
    "SPACE to use",
    "shot speed up!",
    "SPACE to use",
    "",
    "",
    "",
    "Daddys love",
    "SPACE to use",
    "",
    "you feel blessed",
    "",
    "SPACE to use",
    "HP + Shot Speed",
    "SPACE to use",
    "Don't spill it",
    "",
    "Panic Farts",
    "SPACE to Use",
    "Dmg + Homing",
    "Shot Speed Up",
    "Hp Up",
    "Spectral Shots",
    "SPACE to Use",
    "Yuck!",
    "",
    "All Stats Up",
    "",
    "Random Tears",
    "SPACE to use",
    "Dmg + HP Up",
    "Shot Speed up",
    "",
    "Tears Up",
    "Dmg Up + Range",
    "",
    "",
    "",
    0,
  ];
  _init.acnam = [
    0,
    "Maggy",
    "Cain",
    "Judas",
    "Killed_Mom",
    0,
    0,
    0,
    "The_Noose",
    "The_Nail",
    "The_Quarter",
    "The_Fetus",
    0,
    "The_Spider",
    "The_Spelunker",
    0,
    0,
    0,
    "The_Rock",
    "Monstros_Tooth",
    "Lil_Chubby",
    "Lokis_Horns",
    0,
    0,
    0,
    "The_Bandage",
    "The_Cross",
    "The_Bag",
    "The_Robo-Baby",
    "Book_of_Sin",
    "Gish",
    "Steven",
    "Chad",
    "The_Gamekid",
    "The_Halo",
    "Mr_Mega",
    "Pill_Bottle",
    "Common_Cold",
    "The_D6",
    "The_Shears",
    "The_Parasite",
    "Baby",
    "Terrible",
    "The_Wafer",
    "Money_Power",
    "It_Lives",
    "The_Bean",
    "Moms_Contact",
    "The_Necronomicon",
    "Basement_Boy",
    "Cave_Boy",
    "Depths_Boy",
    "Womb_Boy",
    "Golden_God",
    "Eve",
    "Moms_Knife",
    0,
    0,
    "The_Razor_Blade",
    "The_Guardian_Angel",
    "bombs",
    "The_Demon_Baby",
    "Forget_Me_Now",
    "The_Monster_Manual",
    "a_gift_from_krampus",
  ];
  _init.acnam.push(
    "_d20",
    "_cross",
    "_abel",
    "_horn",
    "_knife2",
    "_rainbow",
    "_bloodlust",
    "_bloodpenny",
    "_bloodrights",
    "_polaroid",
    "_dadskey",
    "_toe",
    "_candle",
    "_burntpenny",
    "_tail",
    "_megafetus",
    "_fish",
    "_superfan",
    "_spiderbutt",
    "_counterfeit",
    "_hairball",
    "_eggsack",
    0,
    "_samson",
    0,
    "_platinum"
  );
  _init.acnam.push(
    "_head",
    "_faith",
    "_eye",
    "_tongue",
    "_birdfoot",
    "_soul",
    "_lock",
    "_hand"
  );
  _init.acnam.push(
    "emom",
    "esatan",
    "eisaac",
    "eheart",
    "hardgame",
    "ppers",
    "egod",
    "pisaac",
    "pjudas",
    "pmaggy",
    "pcain",
    "peve",
    "psam",
    "pblue",
    "elife"
  );
  this.getUrl("FSCommand:showmenu", "false");
  this.getUrl("FSCommand:trapallkeys", "true");
  stop();
  _init.cent = 0;
  _root.sz = [];
  _root.szz = 0;
  _root.soundonce = [];
  _root.soundvol = 0.7;
  _init.mvol = 35;
  _init.dark = 0;
  _init.lop = 0.03;
  _init.checker = new Array(400);
  _init.f1 = 5;
  _init.f2 = 6;
  let e = 0;
  while (e < 400) {
    _init.checker[e] = 0;
    e++;
  }
  e = 0;
  while (e < 1000) {
    _init.f1 += _init.f2;
    _init.f2++;
    if (_init.f2 > 5) {
      _init.f2 = 2;
    }
    if (_init.f1 >= 200) {
      _init.f1 -= 200;
    }
    _init.checker[_init.f1] += e % 5;
    if (_init.checker[_init.f1] >= 9) {
      _init.checker[_init.f1] -= 9;
    }
    _init.checker[_init.f1 + 201] = _init.checker[_init.f1];
    e++;
  }
  _root.colss = [];
  soz();
  _init.loslol = 0;
  _init.intro = true;
  _init.menubeen = 0;
  _init.lop2 = 30;
  _init.gof = 0;
  prelod();
  _init.currUrl = _init._url.toLowerCase();
  _init.pass = true;
  _init.trg = _root.createEmptyMovieClip("olda", 299);
  _init.old = new flash.display.BitmapData(640, 480, true, 0);
  _init.trg.attachBitmap(_root.old, 1);
  _init.trg = createEmptyMovieClip("mapa", 301);
  _init.map = new flash.display.BitmapData(450, 150, true, 0);
  _init.trg.attachBitmap(_init.map, 1, true, false);
  _init.trg._x = -45;
  _init.overlay.swapDepths(500);
  if (!_init.linx) {
    _init.f1 = this.mdm.System.getResolution();
  }
  _init.wid = _init.f1[0];
  _init.wider = _init.f1[0] / _init.f1[1];
  _init.colz = _init.f1[2];
  if (_init.colz <= 10) {
    _init.colz = 32;
  }
  if (_init.wider <= 1.5) {
    _init.wider = false;
  } else if (_init.wider > 1.7) {
    _init.wider = 2;
  }
  if (_init.linx) {
    _init.win = false;
  } else {
    _root.tex = _init.macVersion = this.mdm.System.macVerString;
    _init.winVersion = this.mdm.System.winVerString;
    _init.win =
      (_init.macVersion + " ").indexOf("type Function") > 0 ||
      _init.winVersion > 0;
    _root.tex = _init.win + " " + _init.winVersion;
    this.mdm.Application.onAppChangeFocus = function (myObject) {
      if (myObject.focus != "true") {
        if (_init.lasf + 100 < _init.fra) {
          if (_init.so.data.full) {
            _init.so.data.full = false;
            this.fullf();
          }
        }
      }
    };
  }
  _init.lasf = 0;
  _init.refs = [
    [0],
    [800, 600],
    [720, 480],
    [640, 480],
    [1280, 800],
    [1280, 720],
    [1024, 768],
  ];
  _init.overlay2._alpha = 0;
  _init.ala = 0;
  this.attachMovie("hud", "hud", 300);
  this.fullf();
  _init.fra = 0;
  _init.nosave = 0;
  _init.f1 = "";
  _init.f3 = false;
  for (let e in _root.locker) {
    if (_root.locker[e]) {
      if (_init.acnam[e]) {
        if (_init.f3) {
          _init.f1 += " ";
        }
        _init.f1 += _init.acnam[e];
        _init.f3 = true;
      }
    }
  }
  _root.tex = _init.f1;
  if (_init.f3) {
    callit(_init.f1);
    if (!_init.win) {
      callit(_init.f1);
    }
  }
  var myMenu = new ContextMenu();
  myMenu.hideBuiltInItems();
  _root.menu = myMenu;
}
