/* cSpell:disable */

// start...
function main() {
  _this.llev = [
    2, 117, 57, 186, 2, 113, 61, 173, 2, 101, 53, 152, 2, 90, 46, 135, 2, 80, 0,
    0, 6, 34,
  ];
  _this.llev2 = [
    2, 117, 57, 183, 2, 115, 60, 171, 2, 103, 53, 153, 2, 91, 46, 135, 2, 90, 0,
    0, 6, 34,
  ];
  _this.specol = [
    [1, 0.1, 0.1],
    [0.5, 0.5, 0],
    [0.2, 0.5, 0.4],
    [1, 0.5, 0.5],
    [0.7, 0.45, 0.4],
    [0.1, 0.8, 0.2],
    [0.1, 1, 0.5],
    [0, 0.15, 0.15],
    [0.55, 0.55, 1.35],
    [1.6, 0.7, 1],
  ];
  _this.specol2 = [
    [0],
    [1, 0.6, 0.6],
    [0.6, 0.6, 0.6],
    [0.6, 1, 0.6],
    [0.6, 1, 1],
    [0.5, 0.7, 0.5],
    [1, 0.7, 0.5],
    [0.5, 0.7, 1],
    [0.5, 0.7, 0.7],
    [1, 0.7, 0.5],
    [0, 1.7, 1.1],
    [0.6, 0.7, 0.6],
    [1, 1, 0.5],
    [0.3, 0.7, 0.6],
    [1, 0.6, 0.6],
    [0.5, 0.5, 0.6],
    [0.44, 0.44, 0.44],
    [0.5, 0.5, 0.5, 50, 50, 50],
    [0.24, 0.24, 0.24],
    [1.2, 0.7, 0.7],
    [2.5, 1.2, 1.5],
    [1, 1, 1, 20, -50, -222],
    [1.5, 1, 1.15],
    [1.2, 1.2, 1.2, 50, 50, 50],
  ];
  _this.levn = [
    0,
    "Basement 1",
    "Basement 2",
    "Caves 1",
    "Caves 2",
    "The Depths 1",
    "The Depths 2",
    "The Womb 1",
    "The Womb 2",
    "Sheol",
    0,
    "The Chest",
  ];
  _this.levn2 = [
    0,
    "Cellar 1",
    "Cellar 2",
    "Catacombs 1",
    "Catacombs 2",
    "Necropolis 1",
    "Necropolis 2",
    "Utero 1",
    "Utero 2",
    "Cathedral",
    0,
    "The Chest",
  ];
  _root.tex = undefined;
  if (_root.chala <= 0) {
    _root.chala = 0;
  }
  if (_root.lev == _root.bossl2) {
    _this.altboss = _root.altboss2;
  }
  if (_root.lev == _root.bossl) {
    _this.altboss = _root.altboss;
    if (_root.chaps == 8 || (_root.chaps == 6 && !_root.locker[3])) {
      _root.unl.gotoAndStop(1);
      _root.unl.nogo = true;
    }
  }
  _this.gridx = 0;
  _this.gridy = 0;
  if (_root._xscale < 110) {
    _this.gridxs = 640;
    _this.gridys = 480;
    _this.hdx = 1;
  } else if (_root._xscale < 135) {
    _this.gridxs = 800;
    _this.gridys = 620;
    _this.hdd = true;
    _this.hdx = 1.25;
  } else {
    _this.gridxs = 1100;
    _this.gridys = 800;
    _this.hdd = true;
    _this.hdx = 1.667;
  }
  if (_root.nozinc) {
    _this.hdx = 4;
    _this.gridxs = 640 * _this.hdx;
    _this.gridys = 480 * _this.hdx;
  }
  _this.gridv = 100;
  _this.gridmax = 10;
  _this.tiles._visible = false;
  _this.razor = 0;
  _this.etols = 0;
  _this.rage = 1;
  if (_root.chaps < 3) {
    _this.lars = 4;
  } else {
    _this.lars = 0;
  }
  _this.combis = 0;
  _this.lusts = 0;
  _this.rag = 1;
  _this.thistern = 0;
  if (_root.levz.length <= 1) {
    _root.chaps = Math.max(1, _root.chaps);
    _this.f1 = 61;
    _this.e = 0;
    while (_this.e < _this.f1) {
      _this.f2 = random(random(10)) * Math.random();
      _this.e++;
    }
    _root.darky(120);
    if (_root.newstartt || _root.it == undefined) {
      _root.newstartt = false;
      newstats();
      _root.eta = false;
    }
    _root.big = false;
    _root.darks = false;
    _this.f1 = 80;
    if (_root.locker[4]) {
      _this.f1 = 60;
    }
    if (_root.locker[42]) {
      _this.f1 = 25;
    }
    if (
      _root.locker[65] ||
      _root.locker[66] ||
      _root.locker[67] ||
      _root.locker[68] ||
      _root.locker[70] ||
      _root.locker[69] ||
      _root.locker[72]
    ) {
      _this.f1 = 15;
    }
    sams();
    _root.altm =
      random(_this.f1) == 0 &&
      _root.chaps != 1 &&
      (_root.chaps != 2 || !_root.double);
    _root.big = false;
    _root.double = false;
    _root.darks = false;
    if (_root.chaps != 11) {
      if (random(_this.f1) == 0 && _root.chaps % 2 == 1 && _root.chaps < 8) {
        _root.double = true;
      } else {
        _root.double = false;
        if (random(_this.f1 * 2) == 0) {
          _root.big = true;
        } else if (random(_this.f1 * 2) == 0) {
          _root.darks = true;
        }
      }
    }
    if (_root.chala == 1) {
      _root.big = false;
      _root.double = false;
      _root.darks = true;
    }
    if (_root.chala == 3) {
      _root.big = false;
      _root.double = true;
      _root.darks = false;
    }
    if (_root.double) {
      _root.chaps = _root.chaps + 1;
      _this.curss = "Curse of the Labyrinth";
    } else if (_root.big) {
      _this.curss = "Curse of the Lost";
    } else if (_root.darks) {
      _this.curss = "Curse of Darkness";
    }
    _root.rax00 = random(5);
    _root.rax01 = random(5);
    _root.rax02 = random(5);
    _root.rax03 = random(5);
    _root.rax04 = random(5);
    _root.rax10 = random(5);
    _root.rax11 = random(5);
    _root.rax12 = random(5);
    _root.rax13 = random(5);
    _root.rax14 = random(5);
    _root.rax20 = random(5);
    _root.rax21 = random(5);
    _root.rax22 = random(5);
    _root.rax23 = random(5);
    _root.rax24 = random(5);
    _root.kep = false;
    _root.mapsize = 0;
    _this.f6 = Math.min(20, random(2) + 5 + _root.chaps * 2.6);
    _root.rarer = [];
    _root.levblow = [];
    _root.levsav = [];
    _root.levit = [];
    _root.beenlev = [];
    _root.specol = [];
    _root.alto = [];
    _root.dropo = [];
    _root.beenlev2 = [];
    _root.seenlev = [];
    _root.bomf = [];
    _root.shopa = false;
    _root.liba = false;
    _root.bona = _root.chaps == 1 || (_root.chaps == 2 && _root.double);
    _root.bona2 = false;
    _root.hider = _root.hiderr = false;
    _root.hider2 = _root.hiderr2 = false;
    _root.hid2 = random(5);
    _root.minbb = false;
    _root.gama = false;
    _root.gambb = false;
    _root.chambb = false;
    _root.chama = false;
    _root.shopaz = false;
    _root.bossd = false;
    _root.treasd = false;
    _root.treasd2 = false;
    _root.gamaaa = false;
    _root.levcol = [];
    _root.world = false;
    _root.altsat = random(2) == 0 && _root.evs == 0 && _root.lastdev! > 0;
    _root.iter = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1,
    ];
    _root.devil = _root.chaps != 1;
    _root.bumkill = false;
    _root.altch = _root.chaps % 2 == 0 && random(2) == 0;
    if (_root.hardmode) {
      if (_root.chaps % 3 == _root.alof && random(2) == 0) {
        _root.altch = 2;
      }
    }
    _root.ceye = false;
    if (trixx(59) && random(4) == 0) {
      _root.ceye = _this.ups[21] = true;
    }
    _root.altchap = 0;
    if ((random(2) == 0 && _root.chaps < 9) || _root.heaven == 2) {
      _root.altchap = 9;
    }
    _this.fuckup = 0;
    if (
      _root.chaps == 1 ||
      _root.chaps == 3 ||
      _root.chaps == 5 ||
      _root.chaps == 7
    ) {
      _root.nodmg = true;
    }
    if (_root.hairb > 1) {
      _root.hairb = Math.round(_root.hairb * 0.5 + 0.5);
    } else {
      _root.hairb = 1;
    }
    if (_root.double) {
      _this.f6 *= 1.8;
      _this.f6 = Math.min(30, _this.f6);
    } else {
      if (_root.big) {
        _this.f6 += 4;
      }
      if (random(12) == 0) {
      }
      _this.f6 = Math.min(30, _this.f6);
    }
    while (
      (_root.mapsize * 1.25 < _this.f6 ||
        _root.levz.length <= 1 ||
        _root.bossl == 45 ||
        (_root.hide == undefined && _root.chaps < 3) ||
        _root.bossl == 25 ||
        _root.bossl == 36 ||
        _root.bossl == 34) &&
      _this.fuckup++ < 1000
    ) {
      _this.endrooms = [];
      _root.levz = new Array(80);
      _this.e = 0;
      while (_this.e < 80) {
        _root.levz[_this.e] = 0;
        _this.e++;
      }
      _this.acts = [];
      _this.acts2 = [];
      pffx(35);
      _this.f3 = random(4);
      _this.f5 = 0;
      if (_root.double) {
        _this.f6 -= 1;
      }
      let v3 = 0;
      _this.e = 0;
      while (_this.e < 300) {
        _this.acts2[_this.acts2.length] = 0;
        _this.acts = _this.acts2.slice(0, -1);
        _this.acts2 = [];
        if (_this.f6 > 15) {
          pffx(35);
        }
        for (let a in _this.acts) {
          let v1 = _this.acts[a];
          if (v1 > 0) {
            v3 = v1;
          }
          _this.f8 = 0;
          _this.f2 = 2;
          if (
            _this.e > 3 + random(3 - _this.fuckup) &&
            _this.f5 + random(2) < _this.f6 &&
            _this.fuckup > 4 + random(4)
          ) {
            _this.f2 = 1;
          }
          if (random(_this.f2) == 0 && v1 % 10 < 9) {
            pffx(v1 + 1);
          }
          if (random(_this.f2) == 0 && v1 % 10 > 1) {
            pffx(v1 - 1);
          }
          if (random(_this.f2) == 0 && v1 < 70) {
            pffx(v1 + 10);
          }
          if (random(_this.f2) == 0 && v1 > 10) {
            pffx(v1 - 10);
          }
          if (_this.f8 == 0 && v1 != 35) {
            _this.endrooms.push(v1);
          }
        }
        if (_this.acts2.length < 2) {
          _this.e -= 0.5;
        }
        _this.e++;
      }
      if (_root.double) {
        _this.f6 += 1;
      }
      _root.lastl = _root.lev;
      _root.lastl = _root.lev = 35;
      _root.mapsize = _this.f5;
      _root.boner =
        _root.shopl =
        _root.bossl =
          _this.endrooms[_this.endrooms.length - 1];
      _this.endrooms.splice(_this.endrooms.length - 1, 1);
      if (_root.double) {
        _this.f1 = -1;
        if (ncheck(_root.bossl + 1) == 1 && _root.bossl % 10 < 9) {
          _this.f1 = _root.bossl + 1;
        }
        if (ncheck(_root.bossl - 1) == 1 && _root.bossl % 10 > 1) {
          _this.f1 = _root.bossl - 1;
        }
        if (ncheck(_root.bossl + 10) == 1 && _root.bosslv1 < 70) {
          _this.f1 = _root.bossl + 10;
        }
        if (ncheck(_root.bossl - 10) == 1 && _root.bossl > 10) {
          _this.f1 = _root.bossl - 10;
        }
        if (_this.f1 > 0) {
          _root.bossl2 = _root.bossl;
          _root.bossl = _this.f1;
        } else {
          _root.bossl = 34;
        }
      } else {
        _root.bossl2 = undefined;
      }
      _root.hide = undefined;
      _root.hide2 = undefined;
      _root.beenlev = [];
      _root.hide2 = ender();
      if (_root.mapsize * 2 > _this.f6 && _root.bossl != 34) {
        if (_root.double) {
          _this.endrooms.splice(0, Math.max(0, _this.endrooms.length - 6));
        }
        _this.e = 0;
        while (_this.e < 3000) {
          _this.f1 = random(_root.levz.length);
          _this.f2 = _this.f1 % 10;
          if (!_root.levz[_this.f1] && _this.f2 < 9 && _this.f2 > 1) {
            _this.f2 = ncheck(_this.f1);
            _this.f4 = true;
            if (_this.f2 > 0) {
              _this.f3 = ncheck1(_this.f1);
              if (!_root.double) {
              }
            } else {
              _this.f3 = false;
            }
            if (
              ((_this.f2 > 2 && _this.f3) ||
                ((_this.f2 > 2 ||
                  (_this.f2 > 1.9 && (_this.e > 600 || _this.f3))) &&
                  _this.e > 300 &&
                  _this.f4)) &&
              _root.hide == undefined
            ) {
              _root.levz[_this.f1] = "hide" + random(5);
              _root.hide = _this.f1;
            } else if (
              _root.mapsize < _this.f6 + random(10) + _root.chaps * 2 &&
              _root.double &&
              _this.f1 != _root.hide &&
              _this.f1 != _root.hide2
            ) {
              if (
                _this.f3 &&
                (_this.f2 > 1 || (_this.f2 == 1 && random(2) == 0)) &&
                _this.f1 + 10 != _root.hide &&
                _this.f1 - 10 != _root.hide &&
                _this.f1 - 1 != _root.hide &&
                _this.f1 + 1 != _root.hide &&
                _this.f1 + 10 != _root.hide2 &&
                _this.f1 - 10 != _root.hide2 &&
                _this.f1 - 1 != _root.hide2 &&
                _this.f1 + 1 != _root.hide2
              ) {
                _root.levz[_this.f1] = 0.75;
                _root.mapsize = _root.mapsize + 1;
              }
            } else if (_root.hide != undefined) {
              _this.e += 100000;
            }
          }
          _this.e++;
        }
      }
      _root.minb = undefined;
      _root.gamb = undefined;
      _root.chamb = undefined;
      _root.sacb = undefined;
      _root.libb = undefined;
      _root.cusb = undefined;
      _root.cus = undefined;
      _root.sac = undefined;
      _root.sacer = false;
      _root.lib = undefined;
      _root.boner = _root.boner2 = undefined;
      if (
        (_this.endrooms.length >= 4 ||
          (_root.chaps == 1 && _this.endrooms.length >= 3)) &&
        _root.bossl != _root.lev &&
        _root.bossl > 0
      ) {
        _root.shopl = ender();
        if (_root.chaps != 11) {
          if (_root.chala < 5 && (_root.chala != 2 || random(3) != 1)) {
            _root.boner = ender();
          }
          if (_root.double && _root.chala < 5) {
            _root.boner2 = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            (random(7) == 0 || (random(4) == 0 && _root.fullhp))
          ) {
            _root.sac = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            (random(20) == 0 || (_root.bookster && random(4) == 0))
          ) {
            _root.lib = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            (random(2) == 0 || (_root.lastdev && random(4) == 0))
          ) {
            _root.cus = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            (random(4) == 0 || (_root.chaps == 1 && random(3) == 0)) &&
            _root.minz.length > 0
          ) {
            _root.minb = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            _root.fullhp &&
            _root.chaps > 1 &&
            (random(2) == 0 || _root.chaps > 2)
          ) {
            _root.chamb = ender();
          }
          if (
            _this.endrooms.length > 0 &&
            _root.coins >= 5 &&
            _root.chaps % 2 == 0
          ) {
            _root.gamb = ender();
          }
        }
      } else {
        _root.levz = [];
        _root.mapsize = 0;
      }
      if (_root.chaps > 6) {
        _root.boner = undefined;
        _root.boner2 = undefined;
        if (random(5) != 0 || (!_this.ups[64] && random(5) != 0)) {
          _root.shopl = undefined;
        }
      }
    }
    if (_this.fuckup >= 399) {
      _root.levz = undefined;
      if (_root.double) {
        _root.chaps--;
      }
      _root.cuts = true;
      moveon();
      _root.gotoAndStop("reset");
    }
    if (!_root.altchap) {
      _this.f13 = Math.min(_this.llev.length - 2, _root.chaps * 2 - 2);
      _this.f15 = Math.min(_this.llev.length - 2, _root.chaps * 2 - 4);
    } else {
      _this.f13 = Math.min(_this.llev2.length - 2, _root.chaps * 2 - 2);
      _this.f15 = Math.min(_this.llev2.length - 2, _root.chaps * 2 - 4);
    }
    _this.f14 = true;
    for (let e in _root.levz) {
      if (random(2) == 0 && _root.double) {
        _this.f14 = _this.f15;
      } else {
        _this.f14 = _this.f13;
      }
      if (_root.levz[e] > 0) {
        if (_root.altchap) {
          _root.levz[e] =
            random(_this.llev2[_this.f14 + 1] - _this.llev2[_this.f14]) +
            _this.llev2[_this.f14] +
            2;
        } else {
          _root.levz[e] =
            random(_this.llev[_this.f14 + 1] - _this.llev[_this.f14]) +
            _this.llev[_this.f14] +
            2;
        }
        _root.rarer[e] = random(115) + 65;
      }
    }
    if (_root.double) {
      _root.chaps--;
    }
    bosschoose();
    if (_root.double) {
      _root.levz[_root.bossl2!] = _this.f1;
      _root.bosss2 = _root.bosss;
      _root.altboss2 = _root.altboss;
      _root.chaps = _root.chaps + 1;
      while (_root.bosss2 == _root.bosss) {
        bosschoose();
      }
      _root.levz[_root.bossl] = _this.f1;
      _this.f1 = _root.bosss2;
      _root.bosss2 = _root.bosss;
      _root.bosss = _this.f1;
    } else {
      _root.levz[_root.bossl] = _this.f1;
    }
    _root.levz[35] = 2;
    _root.levz[166] = "satan";
    if (_root.altsat) {
      _root.levz[166] = "sata";
    } else if (
      !_root.kramper &&
      (random(10) == 0 || (random(3) == 0 && _root.evs > 0))
    ) {
      _root.levz[166] = "krampus";
      _root.kramper = _root.chaps;
    }
    if (_root.chaps == 8) {
      _root.levz[166] = "satan1";
    }
    if (_root.chaps < 9) {
      _root.levz[169] = "error" + random(4);
    }
    _root.levz[_root.shopl!] = "shop" + (random(6) + 1) * 1;
    _root.levz[_root.sac!] = "sac";
    _root.levz[_root.lib!] = "lib";
    _root.levz[_root.cus!] = "c";
    _root.levz[_root.hide2!] = "hi" + _root.hid2;
    if (random(3) == 0) {
      _root.levz[_root.cus!] = "c" + random(2);
      if (random(4) == 0) {
        _root.levz[_root.cus!] = "c2";
      }
    }
    _root.levz[_root.boner!] = "t" + random(6);
    _root.levz[_root.boner2!] = "t" + random(6);
    _this.f1 = random(_root.minz.length);
    _this.f2 = "min";
    if (_root.altm) {
      _this.f2 = "mi";
    }
    _this.f3 = _this.f2;
    _this.f2 += _root.minz[_this.f1];
    if (_root.chaps > 2 && !_root.us && random(10) == 0) {
      _this.f2 = "us";
      _root.us = true;
    }
    _root.levz[_root.minb!] = _this.f2;
    _root.levz[_root.gamb!] = "gam" + random(6);
    _root.levz[_root.chamb!] = "cha" + random(6);
    if (_root.chaps == 11) {
      _root.levz[35] = 5;
    }
    if (_root.altch) {
      _root.levz[_root.chamb!] = "cha5";
    }
    if (_root.chaps > 3 && _root.minb == undefined) {
      if (_root.chaps > 4) {
        if (random(3) == 0 && _root.chaps - 1 > _root.lastkeeps) {
          _root.levz[_root.hide!] = _this.f3 + 4;
          _root.minb = _root.hide;
        }
      }
      if (_root.levz[_root.hide!] == _this.f3 + 4) {
        _root.lastkeeps = _root.chaps;
      }
      if (
        random(6 - Math.min(_root.chaps, 5)) == 0 &&
        _root.chaps - 1 > _root.lastkeeps
      ) {
        _root.minb = _root.shopl;
        _root.levz[_root.shopl!] = _this.f3 + 4;
        _root.lastkeeps = _root.chaps;
      }
    }
    _root.minz.splice(_this.f1, 1);
    if (_root.eta) {
      _this.etogo = 4;
      _root.eta = false;
      _root.hp = _root.hp + 1;
      _this.ups[22] = _this.ups[22] + 1;
      _root.ups[22] = _root.ups[22] + 1;
      _root.eto = _root.eto + 1;
    }
    if (trixx(55)) {
      eta();
    }
  }
  _root.amusic = false;
  if (!_root.beenlev[_root.lev!]) {
    if (_root.lev == _root.boner || _root.lev == _root.boner2) {
      _root.mmus = _root.soundy("treasure room enter.mp", 100);
    } else if (_root.lev == _root.bossl || _root.lev == _root.bossl2) {
      _root.soundy("castleportcullis.wav", 100);
    } else if (_root.lev == _root.chamb) {
      _root.mmus = _root.soundy("weapon room.mp", 100);
    } else if (_root.lev == 166) {
      if (_root.kramper == _root.chaps) {
        _root.bossmusic = true;
        _root.soundy("bossintro.mp3");
      } else {
        _root.mmus = _root.soundy("Satan find.mp", 100);
      }
    } else if (_root.lev == _root.minb) {
      _root.mmus = _root.soundy("miniboss.mp", 100);
      _root.amusic = true;
      _root.fade = true;
    }
  }
  _this.firsttime = _root.beenlev[_root.lev!];
  if (_this.firsttime != 2) {
    _root.beenlev[_root.lev!] = true;
  }
  if (_root.lev == _root.hide) {
    hider();
  }
  if (_root.lev == _root.hide2) {
    hider2();
  }
  if (_root.lev == _root.minb) {
    _root.minbb = true;
  }
  if (_root.lev == _root.gamb) {
    _root.gambb = true;
    _root.gama = true;
    if (!_root.gamaaa) {
      _root.gamaaa = true;
      _root.so.data.gams = _root.so.data.gams + 1;
      if (_root.so.data.gams > 10) {
        _root.locker[33] = true;
      }
    }
  }
  _root.seenlev[_root.lev!] = true;
  _this.door = [_this.d1, _this.d2, _this.d3, _this.d4];
  let v1 = _root.lev!;
  if (v1 % 10 < 9) {
    _this.door[2].gol = v1 + 1;
  }
  if (v1 % 10 > 1) {
    _this.door[0].gol = v1 - 1;
  }
  if (v1 < 70) {
    _this.door[1].gol = v1 + 10;
  }
  if (v1 > 10) {
    _this.door[3].gol = v1 - 10;
  }
  for (let e in _this.door) {
    _this.trg = _this.door[e];
    _this.trg.swapDepths(int(291 + e));
    _this.trg.govo = false;
    if (_this.trg.gol > -1 && _root.levz[_this.trg.gol] != 0) {
      if (
        _this.trg.gol == _root.hide ||
        _this.trg.gol == _root.hide2 ||
        _root.lev == _root.hide ||
        _root.lev == _root.hide2
      ) {
        _this.trg.govo = true;
        _this.trg.visible = false;
      }
    } else {
      _this.trg._visible = false;
    }
  }
  _this.rowz = 16;
  _this.roxx = 40;
  _this.roxx2 = _this.roxx / 2;
  _this.f1 = _root.levz[_root.lev!];
  if (_this.f1 == 2) {
    gotoAndStop(2);
  } else if (_this.f1 * 1 > 1) {
    if (_root.chaps == 11) {
      _this.f15 = 15;
    } else {
      _this.f15 = Math.round(_root.chaps / 2 + _root.altchap);
    }
    gotoAndStop("levs" + _this.f15);
    _this.inl.gotoAndStop(_this.f1 - 2);
  } else {
    gotoAndStop("levs6");
    _this.inl.gotoAndStop(_this.f1);
    _this.inl.shop.swapDepths(33901);
    _this.inem = true;
  }
  _this.error = false;
  if (_root.lev == _root.chamb) {
    _this.f1 = 19;
    if (_root.altch == 2) {
      _this.f1 = 26;
    }
  } else if (_root.lev == _root.gamb) {
    _this.f1 = 15;
  } else if (_root.lev == 166 || _root.lev == _root.cus) {
    _this.f1 = 19;
    if (_root.lev == 166) {
      _this.satan = true;
      _root.devil = 2;
      if (_root.door! <= -1) {
        _root.door = random(4);
      }
      if (_root.altsat) {
        _this.f1 = 26;
      }
    }
  } else if (_root.lev == 169) {
    _this.error = true;
    _this.f1 = 40;
  } else if (_root.chaps > 8) {
    if (_root.altchap) {
      _this.f1 = 26;
    } else {
      _this.f1 = 45;
    }
  } else {
    _this.altgo = true;
    _this.f1 = 1 + Math.round(_root.chaps / 2 - 1) * 3;
  }
  if (_root.shopl == _root.lev) {
    _this.f1 = 2;
  } else if (
    (_root.bossl == _root.lev || _root.bossl2 == _root.lev) &&
    _root.chaps != 9
  ) {
    _this.f1 += 2;
  } else if (_root.hide == _root.lev) {
    _this.f1 = 20;
  } else if (_root.hide2 == _root.lev) {
    _this.f1 = [10, 26, 19, 23, 21];
    _this.f1 = _this.f1[_root.hid2];
  } else if (
    _this.altgo &&
    _root.altchap != 0 &&
    _root.chaps != 7 &&
    _root.chaps != 8
  ) {
    _this.f1 = 21 + Math.round(_root.chaps / 2 - 1);
  }
  _this.f2 = _this.f1;
  if (_root.lev == 35 && !_this.satan && _root.chaps == 1) {
    _this.f2 = 50;
  }
  if (_root.lev == _root.sac) {
    _this.f2 = _this.f1 = 24;
  }
  if (_root.lev == _root.lib) {
    _this.f2 = _this.f1 = 25;
  }
  if (_root.chaps == 11) {
    _this.f2 = _this.f1 = 27;
  }
  _this.b.w1.gotoAndStop(_this.f1);
  _this.b.w2.gotoAndStop(_this.f1);
  _this.b.w3.gotoAndStop(_this.f1);
  _this.b.w4.gotoAndStop(_this.f1);
  _this.b.bg.gotoAndStop(_this.f2);
  _this.b.bg.d.gotoAndStop(
    ((_root.rax00 +
      _root.lev! +
      _root.lev! * _root.lev! * (_root.rax20 + _root.lev!) +
      (_root.rax10 + _root.lev!) * _root.lev! * _root.lev!) %
      _this.b.bg.d._totalframes) +
      1
  );
  _this.b.w1.d.gotoAndStop(
    ((_root.rax01 +
      _root.lev! +
      _root.lev! * _root.lev! * (_root.rax21 + _root.lev!) +
      (_root.rax11 + _root.lev!) * _root.lev! * _root.lev!) %
      _this.b.w1.d._totalframes) +
      1
  );
  _this.b.w2.d.gotoAndStop(
    ((_root.rax02 +
      _root.lev! +
      _root.lev! * _root.lev! * (_root.rax22 + _root.lev!) +
      (_root.rax12 + _root.lev!) * _root.lev! * _root.lev!) %
      _this.b.w2.d._totalframes) +
      1
  );
  _this.b.w3.d.gotoAndStop(
    ((_root.rax03 +
      _root.lev! +
      _root.lev! * _root.lev! * (_root.rax23 + _root.lev!) +
      (_root.rax13 + _root.lev!) * _root.lev! * _root.lev!) %
      _this.b.w3.d._totalframes) +
      1
  );
  _this.b.w4.d.gotoAndStop(
    ((_root.rax04 +
      _root.lev! +
      _root.lev! * _root.lev! * (_root.rax24 + _root.lev!) +
      (_root.rax14 + _root.lev!) * _root.lev! * _root.lev!) %
      _this.b.w4.d._totalframes) +
      1
  );
  _this.xenf = Math.round((_this.gridxs - _this.gridx) / _this.gridv + 1.5);
  _this.yenf = Math.round((_this.gridys - _this.gridy) / _this.gridv + 1.5);
  _this.gxe = _this.xenf;
  _this.gye = _this.yenf;
  _this.xenf *= _this.gridmax;
  var grid = new flash.display.BitmapData(_this.xenf, _this.yenf, false, 0);
  var grid2 = new flash.display.BitmapData(_this.xenf, _this.yenf, false, 0);
  var tests = new flash.display.BitmapData(300, 300, false, 0);
  _root.g.gotoAndPlay(60);
  _this.timer = [];
  _this.alltimer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  _this.ballz = 0;
  _this.ball = [];
  if (_root.chaps >= 5) {
    _this.mux = 1.25;
  } else {
    _this.mux = 1;
  }
  v1 = 13;
  let v2 = 60 + 15 * Math.min(10, _root.chaps);
  v2 /= _this.mux;
  _this.p180 = 0.017453292519943295;
  _this.p10 = 0.5235987755982988;
  let v3 = 17;
  _this.sizes = [
    5,
    10,
    8,
    v1,
    16,
    12,
    0,
    v1,
    v1,
    5,
    v1,
    v1,
    v1,
    v3,
    v3,
    v1,
    v1,
    v1,
    v3,
    20,
    40,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    50,
    0,
    v1,
    v1,
    v1,
    v1,
    v1,
    35,
    v1,
    35,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    25,
    25,
    25,
    25,
    35,
    27,
    20,
    0,
    40,
    25,
    v1,
    40,
    30,
    20,
    v1,
    35,
    v1,
    v1,
    20,
    20,
    16,
    55,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    v1,
    20,
    30,
    35,
    35,
    40,
    25,
  ];
  _this.masses = [
    0,
    5,
    8 + _root.ups[4] * 2,
    0,
    6,
    3,
    0,
    6,
    6,
    8,
    5,
    3,
    3,
    3,
    4,
    10,
    6,
    6,
    3,
    50,
    50,
    7,
    7,
    7,
    10,
    7,
    7,
    15,
    20,
    10,
    10,
    10,
    10,
    1,
    10,
    10,
    70,
    1,
    10,
    10,
    10,
    10,
    20,
    50,
    15,
    70,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    10,
    10,
    10,
    30,
    30,
    10,
    10,
    10,
    7,
    30,
    30,
    30,
    30,
    30,
    30,
    40,
    20,
    0,
    40,
    30,
    20,
    30,
    20,
    10,
    3,
    100,
    20,
    3,
    50,
    30,
    30,
    100,
    5,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    5,
    30,
    30,
    80,
    38,
    80,
    100,
  ];
  _this.hps = [
    0,
    10,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    10,
    10,
    10,
    3,
    8,
    15,
    13,
    13,
    5,
    22,
    250,
    15,
    20,
    20,
    33,
    20,
    20,
    15,
    350,
    10,
    20,
    10,
    20,
    0,
    25,
    25,
    700,
    0,
    25,
    25,
    25,
    20,
    20,
    550,
    100,
    530,
    v2,
    v2,
    v2 * 1.6,
    v2,
    v2,
    v2 * 0.5,
    v2,
    20,
    20,
    25,
    30,
    40,
    35,
    20,
    20,
    10,
    300,
    240,
    280,
    400,
    450,
    110,
    450,
    350,
    0,
    60,
    15,
    8,
    190,
    75,
    30,
    12,
    950,
    140,
    10,
    v2 * 3,
    v2 * 2,
    100,
    600,
    10,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    40,
    20,
    40,
    300,
    200,
    200,
    250,
    250,
    300,
    1000,
  ];
  _this.hard = [
    1.5707963267948966,
    0.15707963267948966,
    _this.p10 * 5,
    _this.p10,
    _this.p10,
    _this.p10 * 2,
    0,
    0,
    0,
    _this.p10 * 5,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    0,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    0,
    0,
    0,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    0,
    0,
    0,
    0,
    0,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    0,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
    _this.p10,
  ];
  _this.hard[85] = _this.p10;
  _this.hard[54] = 0;
  _this.hps[88] = 20;
  _this.hps[62] *= 1.5;
  _this.hps[43] *= 1.15;
  _this.hps[65] *= 1.25;
  _this.hps[57] *= 1.55;
  _this.hps[45] *= 1.22;
  _this.hps[36] *= 0.85;
  _this.hps[89] = 20;
  _this.hps[85] *= 0.65;
  _this.hps[86] *= 0.475;
  _this.hps[102] *= 2;
  _this.hps[92] *= 0.7;
  if (_root.hardmode) {
    _this.hps[78] *= 1.45;
  }
  if (_root.chaps < 3) {
    _this.hps[83] *= 0.75;
    _this.hps[82] *= 0.75;
  }
  _this.masses[21] = _this.masses[23];
  if (_root.locker[45]) {
    _this.hps[78] *= 1.25;
  }
  for (let e in _this.hops) {
    _this.hps[e] *= _this.mux;
  }
  _this.wb = [];
  _this.sizes[61] = v3;
  _this.sizes[80] = v3;
  _this.hardx = [];
  _this.hardy = [];
  //for(let e in _this.hard) //TODO: wtf? number[] -> [string] ??!
  _this.hard.forEach((e) => {
    //TODO: quick fix
    v1 = _this.hard[e];
    _this.siz = _this.sizes[e];
    if (e == 14 || e == 13) {
      _this.siz = 5;
    }
    if (v1 > 0) {
      _this.hardx[e] = [];
      _this.hardy[e] = [];
      let a = 0;
      while (a < 6.283185307179586) {
        _this.hardx[e][_this.hardx[e].length] = Math.sin(a) * _this.siz;
        _this.hardy[e][_this.hardy[e].length] = Math.cos(a) * _this.siz;
        a += v1;
      }
    }
  });
  _this.sizes[28] = 18;
  _this.it1 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  _this.watz = 0;
  _this.flyer = 0;
  _this.hearts = [];
  _this.masks = [];
  if (_root.chaps != 9 && (_root.chala <= 0 || _root.chala == 10)) {
    _root.heaven = _root.so.data.wins >= 10;
  } else {
    _root.heaven = false;
  }
  _this.noetern = false;
  _this.spuz = 0;
  if (
    _root.specol[_root.lev!] &&
    _root.lev != _root.chamb &&
    (_root.lev != _root.bossl || (_root.chaps != 6 && _root.chaps < 8))
  ) {
    _this.gospo = true;
    if (!_root.beenlev2[_root.lev!]) {
      _root.specol[_root.lev!] = [];
      _root.alto[_root.lev!] = [];
    }
  } else {
    _root.specol[_root.lev!] = [];
    _root.alto[_root.lev!] = [];
  }
  _this.parz = 0;
  _this.par = [];
  createEmptyMovieClip("blorz", 297);
  _this.hitc = 0;
  _this.hitcc = 0;
  _this.lasth = 0;
  _this.bossdmg = true;
  _this.org = new flash.display.BitmapData(40, 40, true, 13421772);
  v3 = 1;
  v2 = 20;
  //v1.scale(v3,v3); //TODO: wrapper?
  //v1.translate(v2,v2); //TODO: wrapper?
  _this.org.draw(_this.shaz, v1);
  _this.f1 = 75;
  _this.trg = createEmptyMovieClip("bggg", 290);
  _this.bgg = new flash.display.BitmapData(
    _this.gridxs,
    _this.gridys - _this.f1,
    true,
    0
  );
  _this.trg.attachBitmap(_this.bgg, 1);
  _this.trg._yscale = _this.trg._xscale = 100 / _this.hdx;
  _this.trg._y = _this.f1;
  _this.trg = createEmptyMovieClip("splala", 296);
  _this.splat = new flash.display.BitmapData(
    _this.gridxs,
    _this.gridys,
    true,
    0
  );
  _this.trg.attachBitmap(_this.splat, 1);
  _this.trg._yscale = _this.trg._xscale = 100 / _this.hdx;
  _this.trg._alpha = 70;
  _this.trg = createEmptyMovieClip("guta", 298);
  _this.gut = new flash.display.BitmapData(_this.gridxs, _this.gridys, true, 0);
  _this.trg.attachBitmap(_this.gut, 1);
  _this.trg._yscale = _this.trg._xscale = 100 / _this.hdx;
  _this.poi = new flash.geom.Point(0, 0);
  _this.ref = [];
  mapd();
  _this.sk = _root.sk;
  _this.webs = [];
  upa();
  mapd();
  if (_this.levz.length <= 1) {
    _this.levz = new Array(200);
    if (_root.whatstart) {
      _root.whatstart = false;
    }
  }
  _this.kogs = [];
  _this.itb = 0;
  _this.lastcraf = -30;
  if (_root.playerx <= 0 || _root.newstartt) {
    _root.playerx = 320;
    _root.playery = 400;
  }
  _this.trg = _this.player = this.create(
    _root.playerx,
    _root.playery,
    0,
    0,
    0,
    0,
    1
  ); //TODO: bug?
  if (_root.eto >= 7) {
    _root.etol = true;
    _root.playcol[0] = 5;
    _root.playcol[1] = 5;
    _root.playcol[2] = 5;
    _root.locker[113] = true;
  }
  if (_root.getup) {
    _root.getup = false;
    _this.player.d.gotoAndStop(5);
  }
  if (_root.tell) {
    _root.tell = false;
    _this.player.d.gotoAndStop(8);
  }
  _this.player.mhp = _root.mhp;
  _this.player.hp = _root.hp;
  if (_root.lev == _root.bossl && !_this.firsttime) {
    if (trixx(53)) {
      _this.player.hp = _this.player.hp + 1;
    }
  }
  this.Mouse.removeListener();
  if (this.mouseListener == undefined) {
    this.mouseListener = new Object();
    this.mouseListener.onMouseDown = function () {
      _this.md = true;
    };
    this.mouseListener.onMouseUp = function () {
      _this.md = false;
    };
  }
  this.Mouse.addListener(this.mouseListener);
  _this.unpause = true;
  _root.pinfo = 2;
  _this.fra = 0;
  _this.player.fire = 0;
  _this.player.fire1 = 0;
  _this.axenf = _this.ayenf = 0;
  _this.sob = 1;
  _root.hud.st1._visible = _root.st2._visible = false;
  _this.olfx = _this.olfy = 0;
  _this.f1 = 440;
  switch (_root.door! * 1) {
    case 0:
      _this.olfx = -640;
      break;
    case 2:
      _this.olfx = 640;
      break;
    case 1:
      _this.olfy = _this.f1;
      break;
    case 3:
      _this.olfy = 0 - _this.f1;
  }
  _this._X = _this.olfx;
  _this._Y = _this.olfy;
  _this.shutdoor = 1;
  _this.brr = [];
  _this.brr2 = [];
  _this.gibb = 0;
  if (_root.tex != undefined) {
    _this.wtftex = _root.tex;
  }
  _this.gameover = 0;
  _this.justnow = 9;
  _this.itc = [
    0, 6, 3, 6, 1, 2, 1, 3, 0, 3, 3, 0, 2, 4, 0, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0,
    3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 6, 6, 6, 3, 0, 0, 0,
    0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 6, 0, 0, 3, 0, 6, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4,
  ];
  _this.itc[96] = 3;
  _this.itc[106] = 6;
  _this.itc[105] = 1;
  _this.itc[107] = 1;
  _this.itc[118] = 6;
  _this.itc[131] = 2;
  _this.itc[126] = 6;
  _this.itc[120] = 4;
  _this.itc[135] = 2;
  _this.itc[141] = 6;
  _this.itc[152] = 2;
  _this.wtfps2 = 6251;
  _this.wtfps = 35;
  _this.wtfpsh = true;
  _this.wtff = 60;
  _root.mapa._visible = true;
  _root.hud._visible = true;
  if (_root.shopl == _root.lev) {
    _root.shopa = true;
  }
  if (_root.lib == _root.lev) {
    _root.liba = true;
  }
  if (_root.boner == _root.lev) {
    _root.bona = true;
  }
  if (_root.boner2 == _root.lev) {
    _root.bona2 = true;
  }
  _this.secol = 0;
  _this.minions = 0;
  _this.flyby = 0;
  _this.mom = _this._loc0_ = [];
  _this.worm = _this._loc0_;
  _this.mags = _this._loc0_;
  _this.mhelps = 0;
  if (random(2) == 0) {
  }
  _this.ffly = 0;
  _this.fiz = 0;
  _this.etux = 0;
  _root.hud.hardon._visible = _root.hardmode;
  _root.hud.hardon.cacheAsBitmap = true;
  _root.hud.weap.cacheAsBitmap = true;
  _root.hud.cacher.cacheAsBitmap = true;
  //f; //???
  _this.nextbo = true;
  _this.emosound = true;
  if (_root.lasth) {
    _this.lasth = 50; //TODO: possible bug?
  }
  _this.nospo = -10;
  _this.flyby2 = _this._loc0_ = 0;
  _this.flyby3 = _this._loc0_;
  _this.flyby4 = _this._loc0_;
  _this.playsave = _this._loc0_ = -1;
  _this.unic = _this._loc0_;
  _this.demon = _this._loc0_;
  _this.plo = 1;
  _this.lastxy = _this._loc0_ = 0;
  _this.lastxx = _this._loc0_;
  if (_root.chaf) {
    _this.player.fire = -10;
    _this.chaf = -20;
  }
  _this.tictic = _root.itc;
  _this.nocharge = 0;
  _this.chamb = 0;
  _this.mhpp = _this._loc0_ = 0;
  _this.ahpp = _this._loc0_;
  _this.red = _this._loc0_ = 0;
  _this.blue = _this._loc0_;
  _this.shiz = [];
  if (_root.ups[122] && _this.player.hp < 1) {
    _this.player._visible = false;
  }
}

// continue ...

function levzz(f1) {
  if (_this.trg.s > 10) {
    if (
      (_this.door[0].blo == f1 ||
        _this.door[1].blo == f1 ||
        _this.door[2].blo == f1 ||
        _this.door[3].blo == f1) &&
      f1 > 0
    ) {
      return 2;
    }
    return _this.levz[f1];
  }
  return _this.levz[f1];
}
function horsch(trg) {
  if (_root.it == 141) {
    trg.gotoAndStop(2);
  } else {
    trg.gotoAndStop(1);
  }
}
function sloter(trg) {
  trg.gotoAndStop(1);
  _this.trg2 = trg._parent._parent._parent;
  if (_this.trg2.s != 5) {
    _this.trg2 = trg._parent._parent._parent._parent;
  }
  if (_this.trg2.col == 41) {
    trg.gotoAndStop(2);
  }
}
function pffx(f1) {
  var _loc3_ =
    _root.levz[f1 + 1] +
    _root.levz[f1 - 1] +
    _root.levz[f1 + 10] +
    _root.levz[f1 - 10];
  if ((_root.levz[f1] == 0 && _loc3_ < 2 && _this.f5 < _this.f6) || f1 == 35) {
    _root.levz[f1] = 1;
    _this.acts2.push(f1);
    _this.f8++;
    if (f1 != 35) {
      _this.f5++;
    }
  }
}
function hat(f1) {
  var _loc2_ = 0;
  _root.hat[f1] = true;
  switch (f1) {
    case 10:
    case 11:
    case 12:
    case 31:
    case 37:
    case 40:
      _loc2_ = 2;
      break;
    case 4:
    case 6:
    case 7:
    case 9:
    case 16:
    case 19:
    case 21:
    case 23:
    case 28:
    case 29:
    case 32:
    case 41:
    case 42:
    case 48:
    case 50:
    case 54:
      _loc2_ = 5;
      break;
    case 2:
    case 5:
    case 20:
    case 30:
    case 34:
    case 52:
    case 53:
    case 58:
      _loc2_ = 3;
      break;
    case 3:
    case 8:
    case 22:
    case 36:
    case 45:
    case 56:
    case 60:
    case 61:
      _loc2_ = 4;
      break;
    case 26:
    case 24:
    case 27:
    case 33:
    case 35:
    case 39:
    case 42:
    case 44:
    case 51:
    case 55:
    case 58:
      _loc2_ = 1;
      break;
    case 13:
    case 14:
    case 15:
    case 17:
    case 18:
    case 25:
    case 46:
    case 47:
    case 49:
    case 59:
      _loc2_ = 0;
  }
  _root.hatmode[_loc2_] = f1;
}
function gish(trg, f1) {
  if (f1 == 2) {
    if (
      trg._parent._parent == _this.player ||
      trg._parent._parent._parent == _this.player ||
      trg._parent._parent._parent._parent == _this.player ||
      trg._parent._parent._parent._parent._parent == _this.player
    ) {
      f1 = 3;
    }
  }
  if (f1 == 3) {
    trg.gotoAndStop(1);
  } else if (f1) {
    if (_this.altboss == 2) {
      trg.gotoAndStop(2);
    } else {
      trg.gotoAndStop(1);
    }
  } else if (_this.altboss == 2) {
    trg.gotoAndStop(3);
  } else if (_this.altboss) {
    trg.gotoAndStop(2);
  } else {
    trg.gotoAndStop(1);
  }
}
function dmgdo() {
  var _loc2_ = 0;
  if (_this.doub) {
    _loc2_ += 0.75;
  }
  if (_this.ups[7]) {
    _loc2_ = _loc2_ + 1;
  }
  if (_root.etol) {
    _loc2_ += 3;
  }
  if (_this.ups[90]) {
    _loc2_ = _loc2_ + 1;
  }
  if (_this.ups[109]) {
    _loc2_ += _root.coins * 0.04;
  }
  if (_this.ups[122] > 0) {
    _loc2_ += _this.ups[122] * _this.ups[122] * 1.5;
  }
  _loc2_ +=
    _this.ups[50] +
    _this.ups[51] +
    _this.ups[70] +
    _this.ups[79] +
    (_this.ups[80] + _this.ups[4] + _this.ups[197]) * 0.5 +
    (_this.ups[12] +
      _this.ups[101] +
      _this.ups[121] +
      _this.ups[138] +
      _this.ups[193] +
      _this.ups[189]) *
      0.3 +
    (_this.ups[176] + _this.ups[184] + _this.ups[165]) * 0.08;
  if (_this.ups[120]) {
    _loc2_ *= 0.95;
    _loc2_ -= 0.4;
  }
  if (_this.demon > 0) {
    _loc2_ += 0.7;
  }
  if (_this.rage != 1) {
    _loc2_ += _this.rage - 1;
  }
  if (_this.ups[154]) {
    if (_this.sob == -1 || (_root.hat[11] && random(2) == 0)) {
      _loc2_ += 2;
    }
  }
  if (_this.ups[69] && !_this.ups[118] && _this.chaf! > 0) {
    _this.chal = Math.max(
      1,
      Math.min(5, 1 + (_this.fra - _this.chaf!) / 10) * 1.8 - 2
    );
    _loc2_ += (_this.chal - 1) * 1.3;
  }
  _loc2_ += _this.razor * 0.6;
  _loc2_ = 3.5 * Math.sqrt(1 + _loc2_ * 1.2);
  if (_this.ups[169]) {
    if (_this.ups[2] == 1 || _this.ups[153] || _this.ups[182] || true) {
      // ???
      _loc2_ += 6.6;
    } else {
      _loc2_ += 4;
      _loc2_ *= 2;
    }
  }
  var _loc3_ = [0, 0, 0.2, 0.35, 0.05, -0.23, 0];
  if (_this.ups[122]) {
    _loc3_[5] = -0.1;
  }
  _loc2_ *= 1 + _loc3_[_root.skiner];
  _root.firrb = _loc2_;
  if (trixx(35)) {
    _loc2_ += 2;
  }
  if (trixx(62)) {
    _loc2_ += 1;
  }
  if (_this.ups[182]) {
    _loc2_ *= 1.3;
    _loc2_ += 4;
  }
  if (_this.ups[152]) {
    _loc2_ *= 0.65;
  }
  if (_root.it == 83) {
    _loc2_ += 0.5;
  }
  if (_root.hardmode) {
    var _loc5_ = _loc2_;
    var _loc4_ = 1 + Math.max(0, 12 - _root.firra) * 0.1;
    _loc2_ *= _loc4_;
    if (_loc2_ > 5) {
      _loc2_ = 5 + (_loc2_ - 5) * 0.95;
    }
    if (_loc2_ > 10) {
      _loc2_ = 10 + (_loc2_ - 10) * 0.85;
    }
    if (_loc2_ > 15) {
      _loc2_ = 15 + (_loc2_ - 15) * 0.85;
    }
    if (_loc2_ > 20) {
      _loc2_ = 20 + (_loc2_ - 20) * 0.85;
    }
    if (_loc2_ > 30) {
      _loc2_ = 25 + (_loc2_ - 25) * 0.85;
    }
    _loc2_ /= _loc4_;
  }
  return _loc2_;
}
function omgz(f1) {
  if (random(3) != 0) {
    _root.ittt.push(f1);
  } else {
    _root.ittt7.push(f1);
  }
}
function itemzz() {
  _root.junxx = [
    30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 48, 51, 53,
  ];
  if (_root.locker[68]) {
    _root.junxx.push(35);
  }
  if (_root.locker[74]) {
    _root.junxx.push(47);
  }
  if (_root.locker[72]) {
    _root.junxx.push(49);
  }
  if (_root.locker[77]) {
    _root.junxx.push(50);
  }
  if (_root.locker[78]) {
    _root.junxx.push(42);
  }
  if (_root.locker[81]) {
    _root.junxx.push(29);
  }
  if (!_root.locker[84]) {
  }
  if (_root.locker[91]) {
    _root.junxx.push(54);
  }
  if (_root.locker[92]) {
    _root.junxx.push(55);
  }
  if (_root.locker[93]) {
    _root.junxx.push(56);
  }
  if (_root.locker[94]) {
    _root.junxx.push(57);
  }
  if (_root.locker[95]) {
    _root.junxx.push(58);
  }
  if (_root.locker[96]) {
    _root.junxx.push(59);
  }
  if (_root.locker[97]) {
    _root.junxx.push(60);
  }
  if (_root.locker[98]) {
    _root.junxx.push(61);
  }
  if (random(4) == 0) {
    _root.junxx.push(62);
  }
  _root.ittt = [
    1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 12, 13, 14, 15, 19, 19, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 37, 38, 39, 40, 41, 44, 47, 48, 49, 50, 51,
    53, 54, 55, 56, 57, 58, 59, 60, 62, 65, 66, 67, 69, 70, 71, 72, 75, 76, 77,
    85, 115, 120, 121, 124, 125, 128, 129,
  ];
  _root.ittt.push(
    136,
    137,
    138,
    140,
    142,
    143,
    144,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    157,
    160,
    163,
    167,
    169,
    173,
    177,
    178,
    180,
    183,
    191,
    192
  );
  _root.ittt2 = [
    22,
    23,
    24,
    25,
    26,
    27 + random(2),
    29 + random(3),
    29 + random(3),
    32,
    51,
    141,
    165,
    176,
    193,
    194,
    195,
    196,
    197,
    198,
  ];
  _root.ittt3 = [11, 16, 42, 77, 161];
  _root.ittt4 = [54, 54, 60, 60, 64, 21, 21, 139, 156, 147, 195];
  _root.ittt6 = [38, 27 + random(2), 29 + random(3), 26, 1, 50];
  _root.ittt7 = [8, 67, 79, 80, 81, 115, 133, 159];
  _root.ittt8 = [26, 17, 19, 21, 44, 70, 14, 13];
  _root.ittt9 = [58, 65, 192];
  _root.ittt10 = [7, 33, 101, 146, 142, 173, 182, 184, 185];
  if (random(4) == 0 || !_root.hardmode) {
    _root.ittt7.push(118);
  }
  if (random(2) == 0) {
    _root.ittt3.push(11, 77);
  }
  if (random(2) == 0) {
    _root.ittt10.push(184);
    _root.ittt4.push(144);
  } else {
    _root.ittt4.push(177);
  }
  if (random(2) == 0) {
    _root.ittt6.push(179);
    _root.ittt3.push(190);
  }
  if (_root.locker[65]) {
    _root.ittt.push(166);
  }
  if (_root.locker[66]) {
    _root.ittt.push(162);
  }
  if (_root.locker[67]) {
    _root.ittt.push(188);
  }
  if (_root.locker[69]) {
    _root.ittt.push(172);
  }
  if (_root.locker[70]) {
    _root.ittt.push(174);
  }
  if (_root.locker[71]) {
    _root.ittt7.push(157);
  }
  if (_root.locker[73]) {
    _root.ittt.push(186);
  }
  if (_root.locker[75]) {
    _root.ittt3.push(175);
  }
  if (_root.locker[76]) {
    _root.ittt4.push(164);
  }
  if (random(5) != 0 || !_root.locker[79]) {
    _root.ittt7.push(145);
    if (_root.locker[79] && random(10) != 0) {
      _root.ittt7.push(134);
    }
  } else if (_root.locker[79]) {
    _root.ittt7.push(134);
  }
  if (_root.locker[80] && (!_root.hardmode || random(3) == 0)) {
    _root.ittt3.push(168);
  }
  if (_root.locker[82]) {
    _root.ittt.push(189);
  }
  if (_root.locker[83]) {
    _root.ittt.push(171);
  }
  if (_root.locker[86]) {
    _root.ittt.push(170);
  }
  if (_root.locker[85]) {
    _root.ittt.push(187);
  }
  if (random(2) == 0) {
    _root.ittt.push(17);
  }
  if (random(3) != 0 && _root.locker[48]) {
    if (random(3) == 0) {
      _root.ittt7.push(35);
    } else {
      _root.ittt.push(35);
    }
    _root.ittt9.push(35);
  }
  if (random(2) == 0) {
    _root.ittt4.push(116);
  }
  if (random(2) == 0) {
    _root.ittt4.push(63);
  }
  if (random(5) == 0) {
    _root.ittt7.push(68);
  } else {
    _root.ittt.push(68);
  }
  if (random(3) == 0) {
    _root.ittt7.push(82);
  }
  if (random(3) == 0) {
    _root.ittt7.push(84);
  } else if (random(2) == 0) {
    _root.ittt3.push(84);
  }
  if (_root.locker[3] && _root.skiner != 3) {
    if (random(3) == 0) {
      _root.ittt.push(34);
    } else if (random(2) == 0) {
      _root.ittt3.push(34);
    } else {
      _root.ittt7.push(34);
    }
    _root.ittt9.push(34);
  }
  if (_root.locker[1]) {
    _root.ittt.push(45);
  }
  if (_root.locker[2]) {
    if (random(3) != 0) {
      _root.ittt.push(46);
    } else {
      _root.ittt7.push(46);
    }
  }
  if (_root.locker[7]) {
    _root.ittt4.push(78);
    _root.ittt9.push(78);
  }
  if (_root.locker[8] && random(3) != 0) {
    _root.ittt3.push(20);
  }
  if (_root.locker[9] && random(3) != 0) {
    _root.ittt7.push(83);
  }
  if (_root.locker[10]) {
    if (random(3) != 0) {
      _root.ittt.push(74);
    } else {
      _root.ittt7.push(74);
    }
  }
  if (_root.locker[11] && (!_root.hardmode || random(3) != 0)) {
    _root.ittt.push(52);
  }
  if (_root.locker[12]) {
    _root.ittt.push(36);
  }
  if (_root.locker[13]) {
    _root.ittt3.push(89);
  }
  if (_root.locker[14]) {
    _root.ittt.push(91);
  }
  if (!_root.locker[18]) {
  }
  if (_root.locker[19]) {
    _root.ittt.push(86);
  }
  if (_root.locker[20]) {
    _root.ittt.push(87);
  }
  if (_root.locker[21]) {
    _root.ittt.push(88);
  }
  if (_root.locker[25] && random(3) != 0) {
    _root.ittt2.push(92);
  }
  if (_root.locker[26]) {
    _root.ittt.push(98);
    _root.ittt10.push(98);
  }
  if (_root.locker[27]) {
    _root.ittt.push(94);
  }
  if (_root.locker[28]) {
    _root.ittt.push(95);
  }
  if (_root.locker[33]) {
    _root.ittt.push(93);
  }
  if (_root.locker[29]) {
    if (random(3) != 0) {
      _root.ittt.push(97);
    } else {
      _root.ittt7.push(97);
    }
    _root.ittt9.push(97);
  }
  if (_root.locker[30]) {
    _root.ittt.push(99);
  }
  if (_root.locker[31]) {
    _root.ittt.push(100);
  }
  if (_root.locker[32]) {
    _root.ittt.push(96);
  }
  if (_root.locker[34]) {
    _root.ittt.push(101);
  }
  if (_root.locker[36]) {
    _root.ittt.push(102);
  }
  if (_root.locker[37]) {
    if (random(3) != 0) {
      _root.ittt.push(103);
    } else {
      _root.ittt7.push(103);
    }
  }
  if (_root.locker[40]) {
    if (random(3) != 0) {
      _root.ittt.push(104);
    } else {
      _root.ittt7.push(104);
    }
  }
  if (_root.locker[38]) {
    _root.ittt.push(105);
  }
  if (_root.locker[35]) {
    _root.ittt.push(106);
  }
  if (_root.locker[39]) {
    _root.ittt.push(107);
  }
  if (_root.locker[43]) {
    _root.ittt.push(108);
  }
  if (_root.locker[44]) {
    if (random(3) != 0) {
      _root.ittt.push(109);
    } else {
      _root.ittt7.push(109);
    }
  }
  if (_root.locker[47]) {
    _root.ittt.push(110);
  }
  if (_root.locker[46]) {
    _root.ittt.push(111);
  }
  if (_root.locker[55]) {
    omgz(114);
  }
  if (_root.locker[56]) {
    _root.ittt.push(117);
  }
  if (_root.locker[57] && _root.skiner != 5) {
    omgz(122);
  }
  if (_root.locker[58]) {
    omgz(126);
  }
  if (_root.locker[59]) {
    _root.ittt.push(112);
    _root.ittt10.push(112);
  }
  if (_root.locker[60]) {
    _root.ittt.push(131);
  }
  if (_root.locker[61]) {
    omgz(113);
  }
  if (_root.locker[62]) {
    omgz(127);
  }
  if (_root.locker[63]) {
    omgz(123);
    _root.ittt9.push(123);
  }
  for (let z in _root.ittt2) {
    let i = 0;
    while (i < _root.ittt.length) {
      if (_root.ittt2[z] == _root.ittt[i]) {
        _root.ittt.splice(i, 1);
        break;
      }
      i++;
    }
  }
  for (let z in _root.ittt4) {
    let i = 0;
    while (i < _root.ittt.length) {
      if (_root.ittt4[z] == _root.ittt[i]) {
        _root.ittt.splice(i, 1);
        break;
      }
      i++;
    }
  }
  for (let z in _root.ittt6) {
    let i = 0;
    while (i < _root.ittt.length) {
      if (_root.ittt6[z] == _root.ittt[i]) {
        _root.ittt.splice(i, 1);
        break;
      }
      i++;
    }
  }
}
// function picc(f2) // Duplicate impl
// {
//    if(random(2) == 0)
//    {
//       _root.picers[random(6)] = f2;
//    }
// }
function newstats() {
  _root.picers = [1, 2, 3, 4, 5, 6];
  picc(101);
  picc(102);
  picc(103);
  _root.noff = false;
  _root.noff2 = false;
  _root.noff3 = false;
  _root.alof = random(3);
  _root.darky(120);
  _root.door = undefined;
  _root.playcol = [1, 1, 1];
  _root.pillfirst = true;
  _root.bombnext = false;
  _root.notch = false;
  _root.lastkeeps = 0;
  _root.armor = 0;
  _root.pilc = undefined;
  _root.trix = undefined;
  _root.atrix = undefined;
  _root.vamp = 0;
  _root.monbb = 0;
  if (_root.chaps > 2) {
    _root.fade = true;
  }
  _root.chaps = 1;
  _root.horsedown = 0;
  _root.it = 0;
  _root.fmode = 1;
  _root.hmode = 1;
  _root.bmode = 1;
  _root.demonz = 0;
  _root.bookster = false;
  _root.hatmode = [1, 1, 1, 1, 1];
  _root.wtfuuz = false;
  _root.hat = [];
  if (_root.skiner > 0 && _root.skiner < 4) {
    hat(_root.skiner + 9);
    _root.classit = true;
  }
  _root.coins = _root.bombs = _root.keys = 0;
  _root.lastdev = undefined;
  _root.minz = [0, 1, 2, 3, 5, 6];
  _root.sk = _root.skiner + 1;
  _root.eto = 0;
  _root.etol = false;
  switch (_root.skiner) {
    case 0:
      _root.bombs = _root.bombs + 1;
      break;
    case 1:
      _root.sk = 3;
      break;
    case 2:
      _root.sk = 2;
      _root.keys = _root.keys + 1;
      break;
    case 3:
      _root.sk = 4;
      _root.coins += 3;
      break;
    case 4:
      _root.sk = 5;
      hat(31);
      _root.classit = true;
      break;
    case 5:
      _root.sk = 6;
      hat(37);
      _root.classit = true;
      break;
    case 6:
      _root.sk = 8;
      hat(40);
      _root.classit = true;
      _root.armor = 1;
  }
  _root.hp = 1000;
  _root.wiptz = 0;
  if (_root.skiner == 6) {
    _root.wiptz = -1.5;
  }
  if (_root.skiner == 5) {
    _root.wiptz = -0.75;
  }
  _root.cols = [];
  _root.colit = 0;
  _root.piller = [];
  _root.kramper = false;
  _root.nohead = false;
  _root.nodmg = true;
  _root.evs = 0;
  _root.firra = 10;
  _root.firrr = 23;
  _root.bluf = 0;
  _root.luck = 0;
  _root.eterns = 0;
  if (_root.hardmode) {
    _root.eterns = 3;
  }
  if (_root.chala == 2) {
    _root.luck = -4;
  }
  _root.altb3 = false;
  if (_root.skiner == 2) {
    _root.firrr -= 5;
  }
  if (_root.skiner == 2) {
    _root.firrr -= 5;
    _root.firra -= 2;
  }
  var _loc2_ = [0, 0, 0.2, 0.35, 0.05, -0.25, 0];
  let v1 = 1 + _loc2_[_root.skiner];
  _root.firrb = 3.5 * v1;
  _root.ups = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  _root.samer = 0;
  _root.catlives = 0;
  _root.shitpenny = false;
  _root.us = false;
  _root.whatstart = true;
  _root.whatstart2 = true;
  itemzz();
  if (_root.chaps > 1) {
    _root.bombs += _root.chaps;
    _root.keys += _root.chaps;
    _root.ups[50] = _this._loc0_ = (_root.chaps - 1) * 0.8;
    _this.ups[50] = _this._loc0_;
    _root.ups[1] = _this._loc0_ = (_root.chaps - 1) * 0.8;
    _this.ups[1] = _this._loc0_;
    _root.ups[15] = _this._loc0_ = Math.round((_root.chaps - 1) * 1.4);
    _this.ups[15] = _this._loc0_;
    if (_root.hardmode) {
      _root.eterns += 0.4 * _root.chaps;
    }
  }
}
function ender() {
  var _loc1_ = random(_this.endrooms.length);
  _this.f2 = _this.endrooms[_loc1_];
  _this.endrooms.splice(_loc1_, 1);
  return _this.f2;
}
function nch(f5) {
  if (_root.levz[f5]) {
    _this.f12 = true;
  } else {
    _this.f12 = 2;
    _this.f4 = false;
  }
  if (f5 == _root.bossl || f5 == _root.bossl2 || f5 == _root.hide2) {
    _this.f12 = false;
    _this.f4 = false;
  }
  if (_this.f12 && _this.f12 != 2) {
    for (let z in _this.endrooms) {
      if (_this.endrooms[z] == f5) {
        _this.f12 = false;
      }
    }
  }
  if (f5 == _root.hide) {
    _this.f12 = false;
    _this.f4 = false;
  }
  return _this.f12;
}
function ncheck1(f5) {
  return nch(f5 + 1) && nch(f5 - 1) && nch(f5 + 10) && nch(f5 - 10);
}
function nxx(f1) {
  if (_root.levz[f1] > 0) {
    return 1;
  }
  return 0;
}
function ncheck(f5) {
  return nxx(f5 + 1) + nxx(f5 - 1) + nxx(f5 + 10) + nxx(f5 - 10);
}
function bosschoose() {
  if (_root.chaps % 2 == 0) {
    _root.altb3 = true;
  }
  if (_root.chaps % 2 == 1) {
    _root.horsem = _root.locker[5];
    _root.altb = true;
    _root.altb2 = _root.chaps < 4;
    _root.switchero = _root.chaps < 4 && random(2);
    _root.swww = _root.chaps + 1;
  }
  _this.f1 = "b" + Math.min(8, _root.chaps) + "-" + random(5);
  _root.bosss = _root.chaps;
  _root.horse = false;
  _root.altboss = false;
  _this.altb = [0, 34, 37, 29, 26, 30 + random(2) * 5, 30, 31, 8];
  if (_root.chaps != 6 && _root.chaps != 8) {
    if (_root.chaps == 11) {
      _root.bosss = 40;
    } else if (_root.bosss <= 25) {
      if (_root.chaps > 8) {
        _root.chaps = 9;
        if (_root.altchap) {
          _root.bosss = 39;
        } else {
          _root.bosss = 24;
          _this.f1 = "stan";
        }
      } else if (_root.horsem && random(5) == 0) {
        _root.horse = true;
        _root.horsem = false;
        _this.f1 = Math.round(_root.chaps / 2);
        _root.bosss = _this.f1 + 8;
        if (random(10) == 0) {
          _this.f1 = 5;
          _root.bosss = 22;
        }
        _this.f1 = "h" + _this.f1;
      } else if (_root.locker[88] && _root.chaps == 7 && random(3) == 0) {
        if (random(2) == 0) {
          _root.bosss = 38;
        } else {
          _root.bosss = 41;
        }
      } else if (_root.demonz == 1 && random(10) == 0) {
        _root.demonz = 2;
        _root.bosss = 23;
        _this.f1 = "demon";
      } else if (_root.chaps == 7 && random(3) == 0) {
        _this.f1 = [30, 33];
        _root.bosss = _this.f1[random(_this.f1.length)];
      } else if (
        _root.altb3 &&
        _root.altchap &&
        random(4) == 0 &&
        _root.chaps < 6
      ) {
        _root.altb3 = false;
        _this.f1 = Math.round(_root.chaps / 2 - 1.5);
        if (random(2) == 0) {
          _this.f2 = [28, 36];
        } else {
          _this.f2 = [32, 27];
        }
        _root.bosss = _this.f2[_this.f1];
      } else if (_root.altb && random(5) == 0) {
        _root.altb = false;
        _this.f1 = Math.round(_root.chaps / 2);
        _root.bosss = _this.f1 + 12;
        _this.f1 = "a" + _this.f1 + "-" + random(3);
        if (_root.altchap && _root.chaps == 1) {
        }
      } else if (
        _root.altb2 &&
        random(4) == 0 &&
        (_root.chap > 2 || !_root.altchap)
      ) {
        _root.altb2 = false;
        _this.f1 = Math.round(_root.chaps / 2) + 4;
        _root.bosss = _this.f1 + 12;
        _this.f1 = "a" + _this.f1 + "-" + random(3);
      } else if (_root.switchero) {
        _this.f1 = _root.swww;
        _root.bosss = _this.f1;
        if (_root.altchap) {
          _root.bosss = _this.altb[_root.bosss];
        }
        _this.f1 = "b" + Math.min(8, _this.f1) + "-" + random(5);
      } else {
        _root.bosss = _root.chaps;
        if (_root.altchap) {
          _root.bosss = _this.altb[_root.bosss];
        }
        _this.f1 = "b" + Math.min(8, _root.bosss) + "-" + random(5);
      }
    }
  }
  if (_root.bosss > 25) {
    _this.f6 = [26, 27, 29, 30, 31, 32, 33, 36, 37, 38, 40, 42];
    _this.f7 = [2, 3, 13, 14, 15, 17, 18, 34, 7, 11, 39, 41];
    _this.f1 = "b" + _root.bosss + "-" + random(4);
    for (let e in _this.f6) {
      if (_root.bosss == _this.f6[e]) {
        _root.altboss = true;
        if (_root.bosss == 32 || _root.bosss == 27) {
          _root.altboss = 2;
        }
        if (_root.bosss == 38) {
          _this.f1 = "h3";
        }
      }
    }
  }
  if (random(2) == 0) {
    if (
      (_root.bosss == 17 && _root.locker[22]) ||
      (_root.bosss == 3 && _root.locker[23]) ||
      (_root.bosss == 5 && _root.locker[24]) ||
      (_root.bosss == 41 && _root.locker[89])
    ) {
      _root.altboss = true;
      switch (_root.bosss) {
        case 17:
          _root.bosss = 20;
          break;
        case 3:
          _root.bosss = 21;
          break;
        case 5:
          _root.bosss = 19;
          break;
        case 41:
          _root.bosss = 42;
      }
    }
  }
  if (_root.bosss == 8 && _root.locker[45]) {
    _root.bosss = 25;
  }
  _root.swww = _root.chaps;
}
function sams() {
  if (
    _root.beenlev[_root.boner!] != 2 &&
    _root.chaps != 1 &&
    _root.boner != undefined
  ) {
    _root.samer = _root.samer + 1;
  }
  if (
    _root.beenlev[_root.boner2!] != 2 &&
    _root.double &&
    _root.chaps != 1 &&
    _root.boner2 != undefined
  ) {
    _root.samer = _root.samer + 1;
  }
}
function hider() {
  if (!_root.hider) {
    _root.mmus = _root.soundy("secret room find.mp", 100);
    _root.hider = true;
  }
}
function hider2() {
  if (!_root.hider2) {
    _root.mmus = _root.soundy("isaacxpsecretroomreveal2.mp3", 100);
    _root.hider2 = true;
  }
}
function itmc() {
  if (_root.levcol[_this.e] > 0) {
    _this.mpiece.itmc.gotoAndStop(_root.levcol[_this.e]);
  } else {
    _this.mpiece.itmc.gotoAndStop("empty");
  }
}
function mapd() {
  _this.qq = _root._quality;
  if (_this.qq != "high") {
    _root._quality = "high";
  }
  _root.map.fillRect(_root.map.rectangle, 0);
  _this.maxxx = undefined;
  if (_this.satan || _this.error || _root.darks) {
    _this.e = 35;
    _this.f1 = (_this.e % 10) * 25 + 15;
    _this.f2 = Math.round(_this.e / 10 - 0.5) * 10 + 7;
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(_this.f1, _this.f2);
    _this.maxx.scale(_root._xscale / 100, _root._yscale / 100);
    _this.mpiece.gotoAndStop(7);
    _root.map.draw(_this.mpiece, _this.maxx);
    _this.minx = _this.f1;
    _this.maxxx = _this.f1;
    _this.miny = _this.f2;
    _this.maxy = _this.f2;
  } else {
    //for(let e in _root.levz) //TODO: number <-> string
    _root.levz.forEach((e) => {
      if (e < 110) {
        if (
          _root.levz[e] != 0 &&
          (_root.seenlev[e] || _this.ups[54]) &&
          ((_root.hide != e && _root.hide2 != e) ||
            (_root.beenlev[e] && (e != _root.chamb || _root.chama)))
        ) {
          _this.maxx = new flash.geom.Matrix();
          _this.f1 = (e % 10) * 25 + 15;
          _this.f2 = Math.round(e / 10 - 0.5) * 10 + 7;
          if (_this.f1 > 0) {
            if (_this.maxxx == undefined) {
              _this.minx = _this.maxxx = _this.f1;
              _this.miny = _this.maxy = _this.f2;
            } else {
              _this.minx = Math.min(_this.f1, _this.minx);
              _this.maxxx = Math.max(_this.f1, _this.maxxx);
              _this.miny = Math.min(_this.f2, _this.miny);
              _this.maxy = Math.max(_this.f2, _this.maxy);
            }
            _this.maxx.translate(_this.f1, _this.f2);
            if (_root.lev == e) {
              _this.mpiece.gotoAndStop(3);
            } else if (_root.beenlev[e]) {
              _this.mpiece.gotoAndStop(2);
            } else {
              _this.mpiece.gotoAndStop(1);
            }
            itmc();
            _this.maxx.scale(_root._xscale / 100, _root._yscale / 100);
            _root.map.draw(_this.mpiece, _this.maxx);
          }
        }
      }
    });
    let e = 0;
    while (e < _root.levz.length) {
      if (_root.levz[e] != 0 && e < 110) {
        _this.maxx = new flash.geom.Matrix();
        _this.f1 = (e % 10) * 25 + 15;
        _this.f2 = Math.round(e / 10 - 0.5) * 10 + 7;
        _this.maxx.translate(_this.f1, _this.f2);
        _this.maxx.scale(_root._xscale / 100, _root._yscale / 100);
        _this.mpiece.gotoAndStop(1);
        if (_root.shopl == e && (_root.shopaz || _this.ups[21])) {
          _this.mpiece.gotoAndStop(4);
        } else if (
          (_root.boner == e && (_this.ups[21] || _root.treasd)) ||
          (_root.boner2 == e && (_this.ups[21] || _root.treasd2))
        ) {
          _this.mpiece.gotoAndStop(5);
        } else if (
          ((_root.bossl == e &&
            (!_root.double || _root.bosss == _root.bosss2)) ||
            (_root.bossl2 == e && _root.bosss != _root.bosss2)) &&
          (_this.ups[21] || _root.bossd || _this.ups[194])
        ) {
          _this.mpiece.gotoAndStop(6);
        } else if (
          _root.hide == e &&
          (_this.ups[54] || _root.hider || _root.hiderr)
        ) {
          _this.mpiece.gotoAndStop(7);
        } else if (_root.hide2 == e && (_root.hider2 || _root.hiderr2)) {
          _this.mpiece.gotoAndStop(16);
        } else if (_root.minb == e && (_this.ups[21] || _root.minbb)) {
          _this.mpiece.gotoAndStop(8);
        } else if (_root.gamb == e && (_this.ups[21] || _root.gambb)) {
          _this.mpiece.gotoAndStop(9);
        } else if (_root.cus == e && (_this.ups[21] || _root.cusb)) {
          _this.mpiece.gotoAndStop(14);
        } else if (_root.chamb == e && (_this.ups[21] || _root.chambb)) {
          if (_root.altch == 2) {
            _this.mpiece.gotoAndStop(17);
          } else if (_root.altch) {
            _this.mpiece.gotoAndStop(11);
          } else {
            _this.mpiece.gotoAndStop(10);
          }
        } else if (_root.lib == e && (_this.ups[21] || _root.libb)) {
          _this.mpiece.gotoAndStop(12);
        } else if (_root.sac == e && (_this.ups[21] || _root.sacb)) {
          _this.mpiece.gotoAndStop(13);
        }
        if (_this.mpiece._currentframe > 1) {
          itmc();
          _root.map.draw(_this.mpiece, _this.maxx);
          _this.minx = Math.min(_this.f1, _this.minx);
          _this.maxxx = Math.max(_this.f1, _this.maxxx!);
          _this.miny = Math.min(_this.f2, _this.miny);
          _this.maxy = Math.max(_this.f2, _this.maxy);
        }
      }
      e++;
    }
  }
  _root.mapa._xscale = _root.mapa._yscale = 10000 / _root._xscale;
  _root.mapa._x = 130 - (_this.maxxx + _this.minx) / 2;
  _root.mapa._y = 40 - (_this.maxy + _this.miny) / 2;
  if (_this.qq != "high") {
    _root._quality = _this.qq;
  }
}
function outgrid(f1) {
  var _loc1_ = f1 % _this.rowz;
  var _loc2_ = Math.round(f1 / _this.rowz - 0.5);
  _this.xenf = _loc1_ * _this.roxx;
  _this.yenf = _loc2_ * _this.roxx;
}
function ingrid(f1, f2, f3) {
  if (f3) {
    f1 = Math.min(560, Math.max(80, f1));
    f2 = Math.min(400, Math.max(160, f2));
  } else {
    f1 = Math.min(620, Math.max(20, f1));
    f2 = Math.min(447, Math.max(110, f2));
  }
  f1 /= _this.roxx;
  f2 /= _this.roxx;
  f1 = Math.round(f1);
  f2 = Math.round(f2);
  f1 = Math.max(0, Math.min(_this.rowz - 1, f1));
  f2 = Math.max(0, f2);
  return f1 + _this.rowz * f2;
}
function gridp(f1, f2, f3, f4) {
  f1 -= _this.gridx;
  f2 -= _this.gridy;
  if (f3 == undefined) {
    return [
      int(f1 / _this.gridv + 1) * _this.gridmax + 1,
      int(f2 / _this.gridv) + 1,
    ];
  }
  return [
    int(f1 / _this.gridv + 1 + f3) * _this.gridmax + 1,
    int(f2 / _this.gridv + f4) + 1,
  ];
}
function gridput(f5, f6) {
  let a = 0;
  while (grid.getPixel(f5[0], f5[1]) != 0 && a < _this.gridmax) {
    f5[0] = f5[0] + 1;
    a++;
  }
  grid.setPixel(f5[0], f5[1], f6);
}
function gridput2(f5, f6) {
  let a = 0;
  while (grid2.getPixel(f5[0], f5[1]) != 0 && a < _this.gridmax) {
    f5[0] = f5[0] + 1;
    a++;
  }
  grid2.setPixel(f5[0], f5[1], f6);
}
function topz(cap) {
  _this.timer[cap] = 2918;
}
function tip(cap) {
  _this.alltimer[cap] += (5977 - _this.timer[cap]) / 25;
}
function crand(f1) {
  if (_this.cra1 == undefined) {
    _this.cra1 = Math.random() * 3.141592653589793 * 2;
    _this.cra2 = f1;
    return Math.cos(_this.cra1) * f1;
  }
  f1 = _this.cra1;
  _this.cra1 = undefined;
  return Math.sin(f1) * _this.cra2;
}
function itzz(f1) {
  var _loc2_ =
    f1 != 114 &&
    f1 != 118 &&
    f1 != 138 &&
    f1 != 150 &&
    f1 != 151 &&
    f1 != 152 &&
    f1 != 153 &&
    f1 != 154 &&
    f1 != 157 &&
    f1 != 159 &&
    f1 != 168 &&
    f1 != 169 &&
    f1 != 182 &&
    f1 != 184 &&
    f1 != 185 &&
    f1 != 189 &&
    f1 != 190 &&
    f1 != 191 &&
    f1 != 193 &&
    f1 != 196 &&
    f1 != 197;
  return (
    (f1 > 7 &&
      f1 != 12 &&
      f1 != 16 &&
      f1 != 48 &&
      f1 != 50 &&
      f1 != 51 &&
      f1 != 52 &&
      f1 != 68 &&
      f1 != 70 &&
      f1 != 79 &&
      f1 != 80 &&
      f1 != 88 &&
      f1 != 89 &&
      f1 != 90 &&
      f1 != 99 &&
      f1 != 101 &&
      f1 != 103 &&
      f1 != 108 &&
      f1 != 109 &&
      f1 != 110 &&
      _loc2_) ||
    f1 == 5
  );
}
function itz(f1) {
  if (
    (f1 == 79 ||
      f1 == 80 ||
      f1 == 82 ||
      f1 == 83 ||
      f1 == 81 ||
      f1 == 113 ||
      f1 == 122 ||
      f1 == 118 ||
      f1 == 157 ||
      f1 == 159 ||
      f1 == 145) &&
    _this.satan &&
    !trixx(56)
  ) {
    _root.trg.d.d.gotoAndStop(10);
  } else if (_this.satan && _root.trg.d.d._currentframe == 10) {
    _root.trg.d.d.gotoAndStop(9);
  }
  if (_root.skiner == 4 && _this.satan) {
    _root.trg.d.d.gotoAndStop(11);
  }
  var _loc2_ = [8, 67, 95, 99, 100, 113, 163, 167, 174, 188];
  var _loc4_ = false;
  for (let o in _loc2_) {
    if (_loc2_[o] == f1) {
      _loc4_ = true;
    }
  }
  var _loc5_ = 0;
  if (_loc4_) {
    for (let o in _loc2_) {
      _loc5_ += _root.ups[_loc2_[o]];
    }
  }
  _this.wtftex = _root.wiptz;
  var _loc6_ = 1.2 + _root.wiptz * 3;
  if (_root.hardmode && _root.wiptz > 0) {
    _loc6_ *= 0.6;
    _loc6_ += _root.wiptz * _root.wiptz * 0.2;
  }
  if (_loc4_ && _loc5_ > 2) {
    return 0;
  }
  if (_root.ups[f1] || (_root.colss[f1] && random(5) == 0)) {
    return 0;
  }
  if (itzz(f1)) {
    return f1;
  }
  if (1 / Math.max(0.2, _loc6_) > Math.random()) {
    return f1;
  }
  return 0;
}
function giveit() {
  var _loc2_ = 0;
  var _loc4_ = 0;
  while (_loc2_ == 0) {
    _loc4_ = _loc4_ + 1;
    if (_loc4_ > 100) {
      var _loc3_ = random(_root.ittt.length);
      _loc2_ = itz(_root.ittt[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt.splice(_loc3_, 1);
      }
      if (_root.ittt.length <= 5) {
        itemzz();
      }
    } else if (_root.lev == _root.lib) {
      _loc3_ = random(_root.ittt9.length);
      _loc2_ = itz(_root.ittt9[_loc3_]);
      if (_loc2_ > 0) {
        if (_this.lib == _loc3_) {
          //TODO: possible bug? missed _root?
          _loc2_ = -1;
          _this.lib = _loc3_;
        }
      }
    } else if (
      _root.ittt8.length > 0 &&
      _root.lev == _root.chamb &&
      !_root.altch
    ) {
      _loc3_ = random(_root.ittt8.length);
      _loc2_ = itz(_root.ittt8[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt8.splice(_loc3_, 1);
      }
    } else if (
      (((_root.ittt7.length > 0 && !_root.altsat) ||
        (_root.ittt10.length > 0 && _root.altsat)) &&
        (_this.satan || _this.bummer == 2 || _root.lev == _root.cus)) ||
      (_root.lev == _root.chamb && _root.altch == 2 && _root.ittt10.length > 0)
    ) {
      _this.bummer = false;
      if (_root.altsat || _root.lev == _root.chamb) {
        _loc3_ = random(_root.ittt10.length);
        _loc2_ = itz(_root.ittt10[_loc3_]);
      } else {
        _loc3_ = random(_root.ittt7.length);
        _loc2_ = itz(_root.ittt7[_loc3_]);
        if (_loc2_ > 0) {
          _root.ittt7.splice(_loc3_, 1);
        }
      }
    } else if (_root.ittt6.length > 0 && _this.treas && _root.chaps != 11) {
      _loc3_ = random(_root.ittt6.length);
      _loc2_ = itz(_root.ittt6[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt6.splice(_loc3_, 1);
      }
    } else if (
      (_root.lev == _root.shopl || _this.bummer) &&
      _root.ittt4.length > 1
    ) {
      _this.bummer = false;
      _loc3_ = random(_root.ittt4.length);
      _loc2_ = itz(_root.ittt4[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt4.splice(_loc3_, 1);
      }
    } else if (
      (_root.lev == _root.boner || _root.lev == _root.boner2) &&
      random(2) == 0 &&
      _root.ittt5.length > 1
    ) {
      _loc3_ = random(_root.ittt5.length);
      _loc2_ = itz(_root.ittt5[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt5.splice(_loc3_, 1);
      }
    } else if (_root.lev == _root.hide) {
      _loc3_ = random(_root.ittt3.length);
      _loc2_ = itz(_root.ittt3[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt3.splice(_loc3_, 1);
      }
    } else if (_root.lev == _root.chamb && _root.altch) {
      _loc3_ = random(_root.ittt2.length);
      _loc2_ = itz(_root.ittt2[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt2.splice(_loc3_, 1);
      }
    } else if (_root.lev == _root.bossl || _root.lev == _root.bossl2) {
      if (
        _root.chaps == 6 &&
        _root.locker[74] &&
        random(3) != 0 &&
        !_this.ups[139]
      ) {
        _loc2_ = 139;
      } else if (_root.bosss == 23 && _root.ittt7.length > 0) {
        let e = 0;
        while (e < 100) {
          _loc3_ = _root.ittt7[random(_root.ittt7.length)];
          if (!_this.ups[_loc3_]) {
            _loc2_ = _loc3_;
            e = 1000;
          }
          e++;
        }
      } else if (_root.bosss == 38 && !_this.ups[181]) {
        _loc2_ = 181;
      } else if (_root.bosss == 22 && !_this.ups[130]) {
        _root.locker[32] = true;
        _loc2_ = 130;
      } else if (_root.bosss == 21 && !_this.ups[96]) {
        _root.locker[32] = true;
        _loc2_ = 96;
      } else if (_root.bosss == 19 && !_this.ups[99]) {
        _root.locker[30] = true;
        _loc2_ = 99;
      } else if (_root.bosss == 20 && (!_this.ups[100] || !_this.ups[50])) {
        _root.locker[31] = true;
        if (_this.ups[100] || random(6) == 0) {
          _loc2_ = 50;
        } else {
          _loc2_ = 100;
        }
      } else if (_root.bosss > 8 && _root.bosss < 13) {
        _root.locker[7] = true;
        _loc2_ = 73;
      } else {
        _loc3_ = random(_root.ittt2.length);
        _loc2_ = itz(_root.ittt2[_loc3_]);
        if (_loc2_ > 0) {
          _root.ittt2.splice(_loc3_, 1);
        }
      }
    } else {
      _loc3_ = random(_root.ittt.length);
      _loc2_ = itz(_root.ittt[_loc3_]);
      if (_loc2_ > 0) {
        _root.ittt.splice(_loc3_, 1);
      }
    }
  }
  return _loc2_;
}
function speco(trg, b1) {
  trg.uncol = 200 + _this.fra;
  if (trg.specoz) {
    var _loc2_ = trg.specoz;
    if (trg.specoz == 23) {
      switch (trg.s) {
        case 94:
        case 85:
        case 80:
        case 18:
          colorit(trg, 1, 1, 1, 0, 0, 0);
          break;
        case 81:
        case 10:
        case 54:
        case 101:
          colorit(trg, 15, 15, 15, 0, 0, 0);
          break;
        case 46:
        case 55:
          colorit(trg, 15, 15, 15, 0, 0, 0);
          break;
        case 78:
          colorit(trg, 7, 7, 7, 0, 0, 0);
          break;
        case 36:
        case 74:
        case 75:
        case 76:
          colorit(trg, 5.5, 5.5, 5.5, 0, 0, 0);
          break;
        case 99:
          colorit(trg, 5.2, 5.2, 5.2, 0, 0, 0);
          break;
        case 45:
        case 52:
          colorit(trg, 2, 2, 2, 0, 0, 0);
          break;
        case 25:
          colorit(trg, 5, 5, 5, 0, 0, 0);
          break;
        case 61:
          colorit(trg, 7, 7, 7, 0, 0, 0);
          break;
        case 65:
        case 24:
          colorit(trg, 5, 8, 8, 0, 0, 0);
          break;
        case 69:
          colorit(trg, 5, 15, 15, 0, 0, 0);
          break;
        case 15:
          if (trg.alter == 2) {
            colorit(trg, 5.5, 5.5, 5.5, 0, 0, 0);
          } else {
            colorit(trg, 3, 6, 6, 0, 0, 0);
          }
          break;
        case 100:
          if (_this.altboss) {
            colorit(trg, 7.5, 7.5, 7.5, 0, 0, 0);
          } else {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          }
          break;
        case 64:
          colorit(trg, 5, 3, 5, 0, 0, 0);
          break;
        case 27:
          if (trg.alter == 2) {
            colorit(trg, 6, 6, 6, 0, 0, 0);
          } else {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          }
          break;
        case 28:
          if (_this.altboss == 1) {
            colorit(trg, 65, 65, 65, 0, 0, 0);
          } else {
            colorit(trg, 1.5, 1.5, 1.5, 0, 0, 0);
          }
          break;
        case 30:
        case 88:
          if (trg.alter == 2 || trg.alter == 3) {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          } else {
            colorit(trg, 6, 6, 6, 0, 0, 0);
          }
          break;
        case 71:
        case 72:
        case 73:
          if (_this.altboss) {
            colorit(trg, 10, 10, 10, 0, 0, 0);
          } else {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          }
          break;
        case 43:
          colorit(trg, 7, 7, 7, 0, 0, 0);
          break;
        case 87:
        case 84:
          colorit(trg, 4.5, 4.5, 4.5, 0, 0, 0);
          break;
        case 62:
          if (_this.altboss) {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          } else {
            colorit(trg, 3, 4.5, 4.5, 0, 0, 0);
          }
          break;
        case 79:
          if (_this.altboss == 1) {
            colorit(trg, 3, 3, 3, 160, 160, 160);
          } else {
            colorit(trg, 3, 3, 3, 0, 0, 0);
          }
          break;
        case 102:
          colorit(trg, 2, 2, 2, 0, 0, 0);
          break;
        default:
          colorit(trg, 3, 3, 3, 0, 0, 0);
      }
    } else if (_this.specol2[_loc2_].length > 4) {
      colorit(
        trg,
        _this.specol2[_loc2_][0],
        _this.specol2[_loc2_][1],
        _this.specol2[_loc2_][2],
        _this.specol2[_loc2_][3],
        _this.specol2[_loc2_][4],
        _this.specol2[_loc2_][5]
      );
    } else {
      colorit(
        trg,
        _this.specol2[_loc2_][0],
        _this.specol2[_loc2_][1],
        _this.specol2[_loc2_][2],
        0,
        0,
        0
      );
    }
  } else if (trg.special || trg.specozz) {
    _loc2_ = trg.specol;
    colorit(
      trg,
      _this.specol[_loc2_][0],
      _this.specol[_loc2_][1],
      _this.specol[_loc2_][2],
      0,
      0,
      0
    );
  } else {
    colorit(trg, 1, 1, 1, 0, 0, 0);
  }
  if (!b1) {
    if (_this.pacman) {
      trg.uncol = _this.unic + _this.fra + 1;
      colorit(
        trg,
        trg.colo.redMultiplier * 0.6,
        trg.colo.greenMultiplier * 0.7,
        trg.colo.blueMultiplier * 1.3,
        trg.colo.redOffset * 0.6,
        trg.colo.greenOffset * 0.6,
        trg.colo.blueOffset * 0.6
      );
    } else if (trg.frezz > 0) {
      trg.uncol = trg.frezz + _this.fra + 2;
      colorit(
        trg,
        trg.colo.redMultiplier * 0.52,
        trg.colo.greenMultiplier * 0.52,
        trg.colo.blueMultiplier * 0.52,
        60 + trg.colo.redOffset * 0.6,
        60 + trg.colo.greenOffset * 0.6,
        60 + trg.colo.blueOffset * 0.6
      );
    } else if (trg.poiss > 0 && trg.s != 64 && trg.s != 46) {
      _loc2_ = Math.max(0.6, (200 - trg.poiss) / 200 - 0.1);
      if (trg.specoz == 23) {
        trg.colo.blueMultiplier *= _loc2_;
        trg.colo.redMultiplier *= _loc2_;
      }
      colorit(
        trg,
        trg.colo.redMultiplier * (_loc2_ * 0.25 + 0.75),
        trg.colo.greenMultiplier * 0.9 + 0.2 * (1 - _loc2_),
        trg.colo.blueMultiplier * (_loc2_ * 0.25 + 0.75),
        trg.colo.redOffset * 0.6,
        trg.colo.greenOffset * 0.6 + 20 + (1 - _loc2_) * 90,
        trg.colo.blueOffset * 0.6
      );
    } else if (trg.alter == 2 && trg.s == 42) {
      colorit(trg, 0.66, 1, 0.74, 0, 0, 0);
    } else if (trg.spid > 0) {
      if (trg.spida == 2) {
        colorit(trg, 0.5, 0.5, 0.5, -100, -100, -100);
      } else {
        colorit(
          trg,
          trg.colo.redMultiplier * 0.5,
          trg.colo.greenMultiplier * 0.5,
          trg.colo.blueMultiplier * 0.5,
          150 + trg.colo.redOffset * 0.45,
          150 + trg.colo.greenOffset * 0.45,
          150 + trg.colo.blueOffset * 0.45
        );
      }
      trg.uncol = _this.fra + 10;
    }
  }
}
function momlo() {
  if (_this.trrisss + 45 + random(120) <= _this.fra) {
    _this.trrisss = _this.fra;
    _root.soundy("Mom_Vox_Isaac_" + random(3) + ".mp");
  }
  let mome = random(4);
  if (mome >= 2) {
    mome++;
  }
  _this.moml = _this.fra + 30;
  _this.mom[mome].d.gotoAndStop(2);
}
function atta(f7) {
  return (
    (f7 >= 7 || f7 <= 2 || f7 == 4 || f7 == 5 || f7 == 3) &&
    f7 != 37 &&
    f7 != 33
  );
}
function trgdy(f1) {
  if (f1) {
    var _loc1_ = Math.max(0, 8.5 + _this.trg.dy);
    _this.trg.d._y = _this.trg.dy * 0.5 - 15 + _loc1_ * _loc1_;
    if (_this.trg.ba) {
      _this.trg.d._y += 5;
    }
  } else {
    _this.trg.d._y = _this.trg.dy;
  }
  if (_this.trg.d._xscale == 100) {
    _this.trg.d.sh._y = 0 - _this.trg.d._y;
  } else {
    _this.trg.d.sh._y = ((0 - _this.trg.d._y) / _this.trg.d._xscale) * 100;
  }
}
function attach(trg, f7) {
  if (atta(f7)) {
    trg.gotoAndStop(1);
    if (f7 == 72 || f7 == 73) {
      f7 = 71;
    }
    if (f7 == 75 || f7 == 76 || f7 == 77) {
      f7 = 74;
    }
    if (f7 == 7 && _root.chaps > 6 && _root.chaps != 9) {
      f7 = "gibs-red";
    } else {
      f7 = "b" + f7;
    }
    trg.attachMovie(f7, "d", 30);
  } else {
    trg.gotoAndStop(f7);
  }
}
function abr() {
  if (_this.fra2) {
    return "A";
  }
  return "B";
}
function efly(trg) {
  var _loc1_ = this.create(trg.xp + 0.2, trg.yp + 0.2, 0, 0, 0, 0, 96);
  _loc1_.efly = true;
  _loc1_.trg2 = trg;
  _loc1_.outway = true;
  _loc1_.wtf = _this.flyer++;
  return _loc1_;
}
function create(f1, f2, f3, f4, f5, f6, f7, f9) {
  var _loc5_ = f7;
  _this.ballz++;
  var _loc13_ = "b" + _this.ballz;
  var _loc11_ = _this.ball.length;
  var _loc8_ = 0;
  if (_loc11_ == 0) {
    _loc8_ = _this.ballz + 20000;
  } else {
    _loc8_ = _this.ballz + 10000;
  }
  let f18 = false;
  if (f7 == 33.1) {
    f7 == 33;
    f18 = true;
    _loc8_ = 323;
  } else if (f7 == 33) {
    _loc8_ = 322;
  }
  f7 = Math.round(f7);
  _loc5_ -= f7;
  var _loc10_ = atta(f7);
  let namer2 = "ball";
  if (f7 == 9) {
    namer2 = "bullet1";
    _loc10_ = false;
  }
  if (_loc10_) {
    namer2 = "emptyz";
  }
  _this.ball[_loc11_] = this.attachMovie(namer2, _loc13_, _loc8_);
  var _loc2_ = _this.ball[_loc11_];
  if (f18) {
    _loc2_.holi = true;
  }
  if (f7 > 9 && f7 != 33) {
    _this.spuz++;
    _loc2_.spuz = _this.spuz;
  }
  _loc2_.mhp = _loc2_.hp = _this.hps[f7];
  if (f7 == 5 && _loc5_ > 0.04) {
    while (
      enfcheckx(f1, f2, 320, 280, 1000) &&
      !enfcheck(f1 * 0.5 + 160, f2, 320, 280, 100)
    ) {
      this.posw(f1, f2, 20);
      f1 = _this.xenf;
      f2 = _this.yenf;
    }
  }
  _loc2_.e = _this.ballz;
  _loc2_.xp = f1;
  _loc2_.yp = f2;
  _loc2_.rp = f3;
  _loc2_.ma = _this.masses[f7];
  _loc2_.sss = f9;
  switch (f9) {
    case 42:
      _root.soundy("stoneshoot" + random(3) + ".wav");
      break;
    case 12:
    case 26:
      if (_loc2_.alter != 3) {
        _root.soundy("Shakey_Kid_Roar_" + random(3) + ".mp", 100);
        break;
      }
    case 19:
    case 31:
    case 30:
    case 14:
    case 11:
    case 34:
    case 49:
    case 62:
    case 79:
    case 88:
    case 86:
    case 90:
    case 99:
    case 98:
    case 92:
    case 100:
    case 102:
      _root.soundy("bloodshoot" + random(3) + ".wav");
      break;
    case 56:
      _root.soundy("meatheadshoot" + (_this.fra % 3) + ".wav");
      break;
    case 69:
      _root.soundy("Cute_Grunt_" + random(3) + ".mp", 100);
      break;
    case 63:
    case 64:
    case 65:
    case 66:
      _root.soundy("Monster_Grunt_0_" + abr() + ".mp", 100);
      break;
    case 38:
  }
  _loc2_.xbew = _this._loc0_ = f4 + Math.random() * 0.01;
  _loc2_.xb = _this._loc0_;
  _loc2_.ybew = _this._loc0_ = f5 + Math.random() * 0.01;
  _loc2_.xb = _this._loc0_;
  _loc2_.s = f7;
  _loc2_.e = _this.ballz;
  if (_loc10_) {
    attach(_loc2_, Math.round(f7));
  } else {
    _loc2_.gotoAndStop(f7);
    if (_loc2_.holi) {
      _loc2_.gotoAndStop(32);
    }
  }
  _loc2_.sca = 1;
  _loc2_.fra = _this.fra;
  _this.refl = [];
  _loc2_.spl = 0;
  _loc2_.bh = true;
  _loc2_.rr = 1;
  if (_loc2_.s == 49) {
    _loc2_.alter = 1;
  }
  _loc2_.apf =
    _loc2_.s <= 5 ||
    _loc2_.s == 19 ||
    _loc2_.s == 20 ||
    _loc2_.s == 33 ||
    _loc2_.s == 36 ||
    _loc2_.s == 43 ||
    _loc2_.s == 28 ||
    _loc2_.s == 45 ||
    _loc2_.s == 53 ||
    _loc2_.s == 62 ||
    (_loc2_.s >= 72 && _loc2_.s <= 77) ||
    _loc2_.s == 78 ||
    _loc2_.s == 84 ||
    _loc2_.s == 101;
  _loc2_.minb = _loc2_.s > 45 && _loc2_.s < 53;
  if (
    _root.specol[_root.lev!][_loc2_.spuz] < 23 &&
    _root.specol[_root.lev!][_loc2_.spuz] > -1
  ) {
    _loc2_.special = _root.specol[_root.lev!][_loc2_.spuz];
    _loc2_.specol = _root.specol[_root.lev!][_loc2_.spuz];
  }
  if (!_root.beenlev2[_root.lev!] && !_this.gospo) {
    if (
      f7 > 9 &&
      f7 != 13 &&
      f7 != 18 &&
      f7 != 20 &&
      f7 != 28 &&
      f7 != 33 &&
      f7 != 35 &&
      f7 != 36 &&
      f7 != 37 &&
      f7 != 42 &&
      f7 != 19 &&
      f7 != 43 &&
      f7 != 44 &&
      f7 != 45 &&
      _this.fra < 10 &&
      !_loc2_.minb &&
      f7 < 62
    ) {
      _loc2_.special = _this._loc0_ = random(20) == 0;
      _root.specol[_root.lev!][_loc2_.spuz] = _this._loc0_;
    }
  }
  var _loc9_ = _loc2_.minb;
  f2 =
    f7 == 15 ||
    f7 == 29 ||
    f7 == 61 ||
    f7 == 38 ||
    f7 == 35 ||
    f7 == 88 ||
    f7 == 44 ||
    f7 == 39 ||
    f7 == 57 ||
    f7 == 42 ||
    f7 == 30 ||
    _loc9_;
  f1 = f7 == 41 || f7 == 55 || f7 == 60 || f7 == 53;
  if (_loc5_ && f7 == 28) {
    _this.altboss = 2;
  }
  if (_loc5_ && (f7 == 100 || f7 == 67 || f7 == 68 || f7 == 62 || f7 == 19)) {
    _this.altboss = 1;
  }
  if (_root.alto[_root.lev!][_loc2_.spuz] == 2) {
    _loc5_ = 0.1;
  } else if (_root.alto[_root.lev!][_loc2_.spuz] == 3) {
    _loc5_ = 0.2;
  }
  if (
    f7 == 16 ||
    f7 == 27 ||
    f7 == 25 ||
    f7 == 26 ||
    f7 == 24 ||
    f7 == 14 ||
    f2 ||
    f1
  ) {
    if (
      (_loc5_ > 0.15 || (random(100) == 0 && !_this.gospo)) &&
      (f7 == 26 ||
        f7 == 15 ||
        f7 == 30 ||
        f7 == 88 ||
        f7 == 16 ||
        f7 == 39 ||
        f7 == 55)
    ) {
      _loc2_.alter = 3;
      if (f7 == 26 || f7 == 55) {
        _this.trg2 = efly(_loc2_);
      }
    } else if (
      (_loc5_ ||
        (random(21) == 0 && !_this.gospo && !f1) ||
        (random(25) == 0 && !f2) ||
        (random(100) == 0 && !_loc9_)) &&
      f7 != 15
    ) {
      if (f7 == 46 && _this.flox.s == 38) {
        _this.flox.minb = 3;
        _loc2_.minb = 3;
        _this.flox.alter = 3;
        _loc2_.alter = 3;
        _loc2_._xscale *= 1.6;
        _loc2_._yscale *= 1.6;
        if (_this.flox.special) {
          _this.flox._xscale = 133;
          _this.flox._yscale = 133;
          _this.flox.special = undefined;
          this.speco(_this.flox);
        } else {
          _this.flox._xscale *= 1.33;
          _this.flox._yscale *= 1.33;
        }
        _loc2_.hp *= 2;
        _loc2_.mhp = _loc2_.hp;
        _this.flox.hp *= 1.5;
        if (_this.flox.eternal) {
          _this.flox.hp *= 0.6;
        }
        _this.flox.mhp = _this.flox.hp;
      } else {
        _loc2_.alter = 2;
        if (_loc9_) {
          _loc2_.minb = 2;
          _loc2_._xscale *= 1.25;
          _loc2_._yscale *= 1.25;
          f1 = 1.5;
          switch (_loc2_.s) {
            case 48:
              f1 = 1.3;
              break;
            case 49:
              f1 = 1.6;
              break;
            case 51:
              if (_this.fra < 30) {
                _loc2_.specol = 8;
                _loc2_.specozz = true;
                this.speco(_loc2_);
              }
              f1 = 1;
              break;
            case 52:
              _loc2_.specol = 9;
              _loc2_.specozz = true;
              this.speco(_loc2_);
              f1 = 1;
          }
          _loc2_.hp *= f1;
          _loc2_.mhp = _loc2_.hp;
        }
      }
    } else {
      _loc2_.alter = 1;
    }
    if ((f7 == 38 || f7 == 14) && _loc2_.alter == 2) {
      _loc2_.hp *= 1.5;
      _loc2_.mhp = _loc2_.hp;
    }
    if (
      (f7 == 57 && _loc2_.alter == 2) ||
      (_loc2_.s == 55 && _loc2_.alter == 3)
    ) {
      _loc2_.hp *= 1.25;
      _loc2_.mhp = _loc2_.hp;
    }
    if (f7 == 29 && _loc2_.alter == 2) {
      _loc2_.hp *= 1.5;
      _loc2_.mhp = _loc2_.hp;
      _loc2_.wait = 0;
    }
    if (f1 && _loc2_.alter == 2) {
      _loc2_.hp *= 1.25;
      _loc2_.mhp = _loc2_.hp;
      if (_root.chaps < 9) {
        _loc2_.hallo = true;
      }
    }
  }
  _root.alto[_root.lev!][_loc2_.spuz] = _loc2_.alter;
  if (f7 == 90) {
    _loc2_.alter = random(4) + 1;
    efly(_loc2_);
  }
  if (f7 == 15 && _loc2_.alter != 3) {
    if (_this.altboss == 2 || _loc5_ > 0.15) {
      _loc2_.alter = 3;
    } else if (_this.altboss || _loc5_) {
      _loc2_.alter = 2;
    } else {
      _loc2_.alter = 1;
    }
  }
  if (f7 == 81) {
    if (_loc5_) {
      _loc2_.alter = 2;
      _loc2_.hp *= 1.1;
      _loc2_.mhp = _loc2_.hp;
      f4 = ["Isaac", "Magdalene", "Cain", "Judas", "???", "Eve", "Samson"];
      st11(f4[_root.skiner] + " vs " + "Krampus");
    } else {
      _loc2_.alter = 1;
    }
  }
  if (
    ((_this.fra < 30 || _root.lev == _root.chamb) &&
      _root.lev != _root.bossl &&
      _root.lev != _root.bossl2 &&
      !_this.gospo) ||
    (_this.mheart && _this.spezz == 23) ||
    _this.allets ||
    _root.specol[_root.lev!][_loc2_.spuz] == 23 ||
    _root.specol[_root.lev!][_loc2_.spuz] == 23.1
  ) {
    if (
      f7 == 10 ||
      f7 == 11 ||
      f7 == 14 ||
      f7 == 12 ||
      f7 == 15 ||
      f7 == 16 ||
      f7 == 21 ||
      f7 == 22 ||
      f7 == 23 ||
      f7 == 24 ||
      f7 == 25 ||
      f7 == 26 ||
      f7 == 27 ||
      f7 == 29 ||
      f7 == 31 ||
      f7 == 30 ||
      f7 == 32 ||
      f7 == 34 ||
      f7 == 38 ||
      f7 == 39 ||
      f7 == 40 ||
      f7 == 41 ||
      f7 == 46 ||
      f7 == 47 ||
      f7 == 48 ||
      f7 == 49 ||
      f7 == 50 ||
      f7 == 51 ||
      f7 == 52 ||
      f7 == 54 ||
      (f7 == 55 && _loc2_.alter == 2) ||
      f7 == 56 ||
      f7 == 57 ||
      f7 == 58 ||
      f7 == 59 ||
      f7 == 60 ||
      f7 == 61 ||
      f7 == 80 ||
      f7 == 86 ||
      f7 == 87 ||
      f7 == 88 ||
      f7 == 89 ||
      f7 == 90 ||
      f7 == 91 ||
      f7 == 92 ||
      f7 == 94 ||
      (f7 == 77 && _this.fra < 20)
    ) {
      f1 = 0;
      if (f7 == 80 || f7 == 30 || f7 == 57) {
        f1 = 1;
      }
      if (
        ((random(4) + random(4) + f1 < _root.eterns * 0.48 - _this.thistern &&
          _this.spezz != 23) ||
          (_this.mheart && _this.spezz == 23) ||
          _this.allets ||
          _root.specol[_root.lev!][_loc2_.spuz] == 23 ||
          _root.specol[_root.lev!][_loc2_.spuz] == 23.1) &&
        !_this.noet &&
        (_loc2_.s != 77 || random(30) == 0)
      ) {
        if (
          f7 == 14 ||
          f7 == 80 ||
          f7 == 12 ||
          f7 == 31 ||
          f7 == 40 ||
          f7 == 56 ||
          f7 == 61 ||
          f7 == 89
        ) {
          f1 = 0.25;
        } else {
          f1 = 0.5;
        }
        if (f7 == 26 && _loc2_.alter == 3) {
          _this.trg3 = efly(_loc2_);
          _this.trg4 = efly(_loc2_);
          _this.trg2.wtf *= 1.5;
          _this.trg3.wtf *= 1.5;
          _this.trg4.wtf *= 1.5;
        }
        if (f7 == 60) {
          if (_loc2_.alter > 1) {
            _loc2_.alter = 1;
          }
          _loc2_.hp *= 1.1;
        }
        if (!_this.gospo) {
          if (_root.lev != _root.chamb || _root.altch != 2) {
            _root.eterns -= f1;
          }
          if (f7 == 30 || f7 == 57) {
            f1 *= 2.2;
          }
          _this.thistern += f1 * 4;
        }
        if (f7 == 40) {
          _loc2_.fire = 10;
        }
        _this.b1 = random(5) == 0 && f7 == 22;
        if (
          (_this.b1 && _root.specol[_root.lev!][_loc2_.spuz] != 23) ||
          _root.specol[_root.lev!][_loc2_.spuz] == 23.1
        ) {
          _root.specol[_root.lev!][_loc2_.spuz] == 23.1;
          _loc2_.specoz = 23;
          _loc2_.eternal = 2;
          _loc2_.bossheart = true;
          _loc2_.showbar = true;
        } else {
          _loc2_.specoz = _this._loc0_ = 23;
          _root.specol[_root.lev!][_loc2_.spuz] = _this._loc0_;
          _loc2_.eternal = true;
        }
        _loc2_.etdrop =
          !_this.mheart && (_root.lev != _root.chamb || _root.altch != 2);
        this.speco(_loc2_);
        if (_root.chaps < 3) {
          _loc2_.hp += 3.25;
          _loc2_.hp *= 1.275;
          _loc2_.mhp = _this._loc0_;
        } else {
          _loc2_.hp += 2;
          _loc2_.hp *= 2.1;
          _loc2_.mhp = _this._loc0_;
        }
        if (_loc2_.minb) {
          if (_root.chaps < 3) {
            _loc2_.hp *= 0.75;
            _loc2_.mhp = _this._loc0_;
          }
          _loc2_.specol = undefined;
          _loc2_.specozz = undefined;
          this.speco(_loc2_);
          if (_loc2_.alter == 2) {
            _loc2_._yscale *= 1.3;
            _loc2_._xscale = _this._loc0_;
          } else {
            _loc2_._yscale *= 1.2;
            _loc2_._xscale = _this._loc0_;
          }
          if (_loc2_.minb == 3) {
            _loc2_.hp *= 0.4;
            _loc2_.mhp = _this._loc0_;
          }
        }
        switch (f7) {
          case 80:
            attach(_loc2_, "80-");
            _loc2_.etdrop = false;
            break;
          case 25:
            _loc2_._yscale *= 1.4;
            _loc2_._xscale = _this._loc0_;
            break;
          case 27:
            if (_loc2_.alter != 2) {
              _loc2_._yscale *= 0.8;
              _loc2_._xscale = _this._loc0_;
              _loc2_.hp *= 0.6;
              _loc2_.mhp = _this._loc0_;
            }
            break;
          case 34:
          case 29:
          case 54:
            _loc2_.hp *= 1.4;
            _loc2_.mhp = _this._loc0_;
            break;
          case 16:
            _loc2_.hp *= 2;
            _loc2_.mhp = _this._loc0_;
            break;
          case 94:
            attach(_loc2_, "94-");
            _loc2_._yscale *= 1.7;
            _loc2_._xscale = _this._loc0_;
            break;
          case 10:
            _loc2_._yscale *= 0.9;
            _loc2_._xscale = _this._loc0_;
            break;
          case 14:
            if (_loc2_.alter == 2) {
              _loc2_._yscale *= 1.3;
              _loc2_._xscale = _this._loc0_;
            } else {
              _loc2_._yscale *= 1.4;
              _loc2_._xscale = _this._loc0_;
            }
            _loc2_.hp *= 2.2;
            _loc2_.mhp = _this._loc0_;
            break;
          case 58:
            _loc2_._yscale *= 1.4;
            _loc2_._xscale = _this._loc0_;
            _loc2_.hp *= 2.2;
            _loc2_.mhp = _this._loc0_;
            break;
          case 77:
            _loc2_.bossheart = true;
            _this.sizes[_loc2_.s] = 18;
            _loc2_._yscale *= 3;
            _loc2_._xscale = _this._loc0_;
            _loc2_.hp *= 1.8;
            _loc2_.mhp = _this._loc0_;
            break;
          case 24:
            _loc2_.rest = 0;
            break;
          case 56:
            _loc2_._yscale *= 1.15;
            _loc2_._xscale = _this._loc0_;
            break;
          case 89:
            _loc2_.mhp = _loc2_.hp * 5;
            _loc2_._yscale *= 1.3;
            _loc2_._xscale = _this._loc0_;
            break;
          case 22:
            if (_loc2_.eternal == 2) {
              _loc2_.hp *= 1.7;
              _loc2_.mhp = _this._loc0_;
              _loc2_._yscale *= 1.3;
              _loc2_._xscale = _this._loc0_;
              _this.trg2 = efly(_loc2_);
              _this.trg3 = efly(_loc2_);
              _this.trg2.wtf *= 6;
              _this.trg3.wtf *= 6;
            } else {
              _loc2_._yscale *= 0.9;
              _loc2_._xscale = _this._loc0_;
            }
            break;
          case 61:
            _loc2_.hp *= 0.4;
            _loc2_.mhp = _this._loc0_;
          case 15:
          case 16:
          case 30:
          case 55:
            _loc2_._yscale *= 1.3;
            _loc2_._xscale = _this._loc0_;
        }
      }
    }
  }
  if (f7 == 54) {
    _loc2_.alter = 1;
  }
  f1 = [];
  if (_root.locker[3] || _root.lev! % 4 == 0 || _root.hardmode) {
    if (_this.altboss) {
      switch (f7) {
        case 67:
          f1 = [16, 19];
          break;
        case 19:
          if (_this.f155 == undefined) {
            _this.f155 = random(3) == 0;
          }
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [16, 3];
            if (_this.f155) {
              f1 = [21];
            }
          }
          break;
        case 28:
          if ((!_this.wtfe || _this.spezz) && _this.altboss == 2) {
            _this.wtfe = true;
            f1 = [22];
          }
          break;
        case 68:
          f1 = [3];
          break;
        case 62:
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [16];
          }
      }
    } else {
      switch (f7) {
        case 98:
          f1 = [18];
          break;
        case 99:
          f1 = [21, 7];
          break;
        case 100:
          f1 = [18, 20];
          break;
        case 45:
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [19, 7];
          }
          break;
        case 63:
          f1 = [7];
          break;
        case 64:
          f1 = [17];
          break;
        case 65:
          f1 = [16];
          break;
        case 66:
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [18];
          }
          break;
        case 71:
        case 72:
        case 73:
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [15];
          }
          break;
        case 43:
          if (!_this.altboss) {
            f1 = [14];
          }
          break;
        case 68:
          f1 = [12, 13];
          break;
        case 36:
          f1 = [11];
          break;
        case 28:
          if ((!_this.wtfe || _this.spezz) && !_this.altboss) {
            _this.wtfe = true;
            f1 = [8, 9];
          }
          break;
        case 19:
          if (!_this.wtfe || _this.spezz) {
            _this.wtfe = true;
            f1 = [3, 7];
          }
          break;
        case 67:
          f1 = [5, 6];
          break;
        case 79:
          if ((_this.i == 0 || _this.spezz) && !_this.altboss) {
            //wtf? ??? context of i?
            f1 = [3, 4];
          }
          break;
        case 20:
          f1 = [1, 2];
      }
    }
    let gobo = false;
    if (
      (((_this.spezz == 23 ||
        (!_this.noetern && !_this.spezz && _root.hardmode)) &&
        (!_this.gospo || _this.fra > 10)) ||
        _this.allets) &&
      (_root.hardmode || _root.locker[42])
    ) {
      if (
        _loc2_.s == 81 ||
        _loc2_.s == 82 ||
        _loc2_.s == 83 ||
        _loc2_.s == 69 ||
        _loc2_.s == 64 ||
        _loc2_.s == 65 ||
        _loc2_.s == 66 ||
        _loc2_.s == 63 ||
        _loc2_.s == 100 ||
        _loc2_.s == 20 ||
        _loc2_.s == 68 ||
        _loc2_.s == 67 ||
        _loc2_.s == 97 ||
        _loc2_.s == 98 ||
        f7 == 71 ||
        f7 == 19 ||
        f7 == 28 ||
        f7 == 36 ||
        f7 == 43 ||
        f7 == 45 ||
        f7 == 62 ||
        f7 == 74 ||
        f7 == 78 ||
        f7 == 84 ||
        f7 == 79 ||
        f7 == 99 ||
        f7 > 99
      ) {
        gobo = true;
        if (
          (((random(6) + random(2) < _root.eterns * 0.7 &&
            (random(3) != 0 ||
              _root.lev == _root.bossl ||
              _root.lev == _root.bossl2)) ||
            f7 == 45) &&
            _this.fra < 10) ||
          _this.spezz == 23 ||
          ((_root.chaps == 6 || _root.chaps > 7) && _root.lev == _root.bossl) ||
          _this.allets
        ) {
          if (_this.spezz != 23) {
            if (!_this.gospo) {
              if (_root.lev != _root.chamb || _root.altch != 2) {
                _root.eterns = _root.eterns - 1;
              }
              _this.thistern += 3;
            }
          }
          f1.unshift(23);
          _this.spezz = 23;
          _loc2_.eternal = true;
        }
        _this.noetern = true;
      }
      if (f7 == 28 && _this.spezz != 23) {
        _this.noetern = true;
      }
    }
    if (f1.length > 0 && (_this.fra < 40 || _this.spezz) && !_this.gospo) {
      if (_this.spezz) {
        if (
          f1[0] == _this.spezz ||
          f1[1] == _this.spezz ||
          f1[2] == _this.spezz ||
          f1[3] == _this.spezz ||
          f1[4] == _this.spezz
        ) {
          _loc2_.specoz = _this.spezz;
        }
      } else if (_this.i == 0) {
        if (_root.locker[42]) {
          f2 = random(5);
        } else {
          f2 = random(10);
        }
        if (_loc2_.s == 19) {
          f2 += random(5);
        }
        if (f2 <= f1.length) {
          _loc2_.specoz = _this._loc0_ = f1[f2];
          _this.spezz = _this._loc0_;
        }
      }
    }
    if (!_this.gospo) {
      if (gobo) {
        _root.specol[_root.lev!][_loc2_.spuz] = 0 - _loc2_.specoz;
      }
    } else if (!gobo) {
      if (_root.specol[_root.lev!][_loc2_.spuz] < 0) {
        _loc2_.specoz = 0 - _root.specol[_root.lev!][_loc2_.spuz];
        if (_this.spezz == undefined) {
          _this.spezz = _loc2_.specoz;
        }
      }
    }
  }
  if (f7 == 102 && _loc2_.specoz == 23) {
    _loc2_._yscale *= 1.1;
    _loc2_._xscale = _this._loc0_;
  }
  if (_loc2_.s == 84 && _loc2_.specoz == 23 && !_this.groso) {
    _this.groso = true;
    _this.hps[84] *= 2.5;
    _loc2_.hp = _this._loc0_ = _this.hps[84];
    _loc2_.mhp = _this._loc0_;
  }
  if (_loc2_.s == 99 && _loc2_.specoz == 23 && _root.chaps < 3) {
    _this.hps[99] *= 0.8;
    _loc2_.hp = _this._loc0_ = _this.hps[99];
    _loc2_.mhp = _this._loc0_;
  }
  if (_loc2_.s == 42) {
    this.speco(_loc2_);
  }
  if (_loc2_.specoz) {
    this.speco(_loc2_);
    _loc2_.special = false;
    if (_loc2_.s == 45) {
      if (_loc2_.specoz == 7) {
        _loc2_.mhp *= 0.85;
        _loc2_.hp *= 0.85;
      }
    } else {
      specoo(_loc2_);
    }
  }
  if (_loc2_.special) {
    if (_loc2_.specol == undefined) {
      _loc2_.specol = _this._loc0_ = random(_this.specol.length);
      _root.specol[_root.lev!][_loc2_.spuz] = _this._loc0_;
    }
    this.speco(_loc2_);
    _loc2_.hp *= 2;
    _loc2_._xscale *= 1.15;
    _loc2_._yscale *= 1.15;
  }
  if (f7 == 38) {
    _this.flox = _loc2_;
  }
  if (f7 == 28) {
    _this.nomag = 0;
  }
  _loc2_.imba = _loc2_.s == 42 || _loc2_.s == 44;
  switch (f7) {
    case 102:
      _loc2_.state = 0;
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      break;
    case 89:
      _loc2_.lar = 0;
      break;
    case 19:
      if (_this.altboss) {
        f1 = 1.3;
        _loc2_.hp *= f1;
        _loc2_.mhp *= f1;
      }
      _loc2_.lar = 0;
      break;
    case 67:
      if (_loc2_.specoz == 23) {
        _this.trg2 = efly(_loc2_);
        _this.trg3 = efly(_loc2_);
        _this.trg4 = efly(_loc2_);
        _this.trg2.wtf *= 4;
        _this.trg3.wtf *= 4;
        _this.trg4.wtf *= 4;
        if (_this.altboss) {
          _this.trg2 = efly(_loc2_);
          _this.trg3 = efly(_loc2_);
          _this.trg4 = efly(_loc2_);
          _this.trg2.wtf *= 4;
          _this.trg3.wtf *= 4;
          _this.trg4.wtf *= 4;
        }
      }
    case 65:
      if (_this.altboss) {
        f1 = 1.3;
        _loc2_.hp *= f1;
        _loc2_.mhp *= f1;
      }
      break;
    case 101:
      _loc2_.d._xscale *= 1.15;
      _loc2_.d._yscale *= 1.15;
      _loc2_.dfr = true;
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      _loc2_.d.gotoAndStop(1);
      _loc2_.stomps = 0;
      break;
    case 100:
      _this.boils = 0;
      if (_this.altboss) {
        f1 = 0.85;
      } else {
        f1 = 0.52;
      }
      _loc2_.hp *= f1;
      _loc2_.mhp *= f1;
      break;
    case 91:
      _loc2_.flyby = true;
      break;
    case 99:
    case 63:
      _loc2_.fire = 0;
      break;
    case 69:
      if (_this.altboss) {
        _loc2_.hp *= 0.5;
        _loc2_.mhp *= 0.5;
        if (!_this.swag) {
          _this.swag = true;
          spaw(_loc2_.xp, _loc2_.yp, 100, 69);
        }
      }
      break;
    case 74:
    case 75:
    case 76:
      if (_loc2_.specoz == 23) {
        _loc2_._yscale *= 1.3;
        _loc2_._xscale = _this._loc0_;
        _loc2_.hp *= 1.5;
        _loc2_.mhp = _this._loc0_;
      }
      _this.sizes[74] = 63;
      break;
    case 71:
    case 72:
    case 73:
    case 67:
      _loc2_.flyby = 2;
      if (_this.altboss) {
        _loc2_.hp *= 1.8;
        _loc2_.mhp *= 1.8;
      }
      break;
    case 79:
      _loc2_.fire = 0;
      break;
    case 97:
      _this.altboss = false;
      _this.trg2 = spaw(_loc2_.xp, _loc2_.yp, 40, 98);
      _loc2_.trg2 = _this.trg2;
      _loc2_.imba = true;
      _loc2_.xbeww = _loc2_.xbew;
      _loc2_.ybeww = _loc2_.ybew;
      break;
    case 92:
      _this.hearts.push(_loc2_);
      break;
    case 93:
      _loc2_.trg2 = _this.masks.length;
      _this.masks.push(_loc2_);
      _loc2_.imba = true;
      _loc2_.xbeww = _loc2_.xbew;
      _loc2_.ybeww = _loc2_.ybew;
      break;
    case 44:
      _loc2_.xp = _this._loc0_ = _this.xenf;
      _loc2_.xppp = _this._loc0_;
      _loc2_.yp = _this._loc0_ = _this.yenf;
      _loc2_.yppp = _this._loc0_;
    case 89:
      f1 = this.ingrid(_loc2_.xp, _loc2_.yp);
      outgrid(f1);
      break;
    case 85:
      if (_this.fra > 20) {
        _loc2_.hp *= 0.65;
        _loc2_.mhp *= 0.65;
      }
    case 94:
      _loc2_.outway = true;
      _loc2_.wait = 0;
      break;
    case 46:
      _loc2_.spl = 30;
      break;
    case 68:
      _root.slugeye = 1;
      if (_loc2_.specoz == 23) {
        _root.slugeye = -3;
        _loc2_.ploo = 0;
      }
      break;
    case 51:
      _loc2_.tier = 0;
      break;
    case 72:
      _loc2_.d.gotoAndStop(7);
      break;
    case 73:
      _loc2_.d.gotoAndStop(10);
      break;
    case 64:
      _loc2_.spl = 30;
      _loc2_.outway = true;
      break;
    case 62:
      if (_this.altboss) {
        _loc2_.hp *= 0.35;
        _loc2_.mhp *= 0.35;
      } else {
        _loc2_.hp *= 1.35;
        _loc2_.mhp *= 1.35;
      }
      _loc2_.dy = _loc2_.d._y;
      _loc2_.worm = 1;
      _loc2_.outway = true;
      break;
    case 78:
      _root.soundy("Mom_Vox_Filtered_Isaac_" + random(3) + ".mp");
      _this.player.xp = 320;
      _this.player.yp = 370;
      _loc2_.d.gotoAndStop(4);
      _loc2_.downbro = 100;
      _loc2_.wave = 0;
      _loc2_.fire = 0;
    case 59:
    case 60:
    case 56:
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      break;
    case 55:
    case 90:
      _loc2_.flyby = true;
    case 31:
    case 23:
    case 21:
      _loc2_.pbh = true;
      break;
    case 45:
      _loc2_.alter = 1;
      if (_root.pilc != 25) {
        _this.player.xp = 320;
        _this.player.yp = 370;
      }
      _loc2_.spl = 0;
      _loc2_.outway = true;
      _loc2_.d.gotoAndStop(1);
      break;
    case 42:
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      _loc2_.til = this.ingrid(_loc2_.xp, _loc2_.yp);
      _this.levz[_loc2_.til] = 3;
      break;
    case 40:
      _loc2_.outway = true;
      break;
    case 38:
      _loc2_.telp = 0;
      _loc2_.flyby = true;
      break;
    case 37:
      _loc2_.bh = false;
      break;
    case 36:
      _loc2_.yp += 25;
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      _this.player.xp = 320;
      _this.player.yp = 400;
      if (_loc2_.specoz == 23) {
        _loc2_._xscale *= 0.85;
        _loc2_._yscale = _this._loc0_;
      }
      break;
    case 32:
      _loc2_.pbh = true;
      _loc2_.rrr = random(4) * 0.06 + 0.9;
      break;
    case 33:
      _loc2_.ggh = true;
      _loc2_.nod = true;
      _loc2_.bh = false;
      break;
    case 30:
      _loc2_.hppp = 0;
      if (_loc2_.specoz == 23) {
        _loc2_.mhp = _this._loc0_ = _this.hps[_loc2_.s];
        _loc2_.hp = _this._loc0_;
      } else if (!_loc5_) {
        _loc2_.hp = _this.hps[_loc2_.s] * Math.random();
      }
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      break;
    case 25:
      _loc2_.flyby = true;
      break;
    case 3:
      _loc2_.lfra = 0;
      break;
    case 28:
      if (_this.altboss == 2) {
        _this.chubber = 0;
        if (_loc2_.specoz != 23) {
          _loc2_.hp *= 0.5;
          _loc2_.mhp *= 0.5;
        }
      }
      _loc2_.fail2 = 0;
      _loc2_.beenx = [_loc2_.xp];
      _loc2_.beeny = [_loc2_.yp];
      break;
    case 4:
      _loc2_.lfra = _this.fra;
      _loc2_.spl = -10;
      break;
    case 16:
      _loc2_.noco = 0;
      break;
    case 5:
      _loc2_.ph = true;
      _loc2_.bh = false;
      _loc2_.d.gotoAndStop(Math.max(1, Math.round(_loc5_ * 100 - 0.499)));
      if (
        (_loc2_.d._currentframe > 10 && _loc2_.d._currentframe < 15) ||
        (_loc2_.d._currentframe > 15 && _loc2_.d._currentframe < 20)
      ) {
        _loc2_.d.prevFrame();
      }
      if (_loc2_.d._currentframe != 7) {
        f1 =
          Math.round(_loc5_ * 1000000000) - Math.round(_loc5_ * 10000000) * 100;
      } else {
        f1 =
          Math.round(_loc5_ * 1000000000) -
          Math.round(_loc2_.d._currentframe * 100000) * 100;
      }
      if (_this.fra > 10) {
        switch (_loc2_.d._currentframe) {
          case 5:
          case 6:
            _root.soundy("Chest_Drop.mp", 100);
        }
      }
      if (_loc2_.d._currentframe == 8 || _loc2_.d._currentframe == 38) {
        if (
          (random(3) == 0 && !_this.firsttime) ||
          _loc2_.d._currentframe == 38 ||
          _root.lev == _root.hide2
        ) {
          _loc2_.col = 41;
        }
      }
      if (_loc2_.d._currentframe == 31) {
        _loc2_.d.gotoAndStop(8);
        _loc2_.col = 1;
      }
      if (_loc2_.d._currentframe == 32 || _loc2_.d._currentframe == 37) {
        _loc2_.d.gotoAndStop(8);
        _loc2_.col = 2;
        if (
          (random(3) == 0 && !_this.firsttime) ||
          _loc2_.d._currentframe == 37
        ) {
          _loc2_.col = 31;
        }
      }
      if (_loc2_.d._currentframe == 33) {
        _loc2_.d.gotoAndStop(8);
        _loc2_.col = 10;
      }
      if (f1 > 0) {
        _loc2_.col = f1;
        if (f1 == 2 && _loc2_.d._currentframe == 5) {
          _loc2_.c2 = true;
        }
      } else {
        if (_loc2_.d._currentframe == 7) {
          _loc2_.col = random(6) + 1;
        }
        if (_loc2_.d._currentframe == 3) {
          _loc2_.col = 1;
          if (random(50) == 1) {
            _loc2_.col = 2;
          }
        }
        if (_loc2_.d._currentframe == 30) {
          _loc2_.d.gotoAndStop(7);
          _loc5_ = 0;
          _loc2_.col = tater();
        }
        if (_loc2_.d._currentframe == 35) {
          _loc2_.d.gotoAndStop(7);
          _loc5_ = 0;
          _loc2_.col = junx();
        }
        if (
          _loc2_.d._currentframe == 36 ||
          ((_loc2_.d._currentframe == 5 ||
            (trixx(61) && _loc2_.d._currentframe == 6)) &&
            (((trixx(61) || random(20) == 0) && !_this.firsttime) ||
              _root.lev == _root.cus ||
              _root.lev == _root.hide2))
        ) {
          _loc2_.d.gotoAndStop(5);
          _loc5_ = 0;
          _loc2_.col = 2;
          _loc2_.c2 = true;
        }
        if (
          _loc2_.d._currentframe == 2 ||
          _loc2_.d._currentframe == 1 ||
          _loc2_.d._currentframe == 4
        ) {
          f1 = [0, 2, 20, 0, 7];
          if (random(f1[_loc2_.d._currentframe]) == 0) {
            _loc2_.col = 2;
          } else {
            _loc2_.col = 1;
          }
          if (_loc2_.d._currentframe == 4 && random(50) == 0) {
            _loc2_.col = 5;
          }
          if (
            _loc2_.d._currentframe == 2 &&
            random(Math.max(50, 100 - _root.luck * 20)) == 0
          ) {
            _loc2_.col = 3;
          }
          if (
            _loc2_.d._currentframe == 1 &&
            random(Math.max(20, 50 - _root.luck * 10)) == 0
          ) {
            _loc2_.col = 4;
          }
          if (_loc2_.d._currentframe == 4 && random(10) == 0) {
            _loc2_.col = 3;
          }
          if (
            _loc2_.d._currentframe == 1 &&
            (random(10) == 0 ||
              (random(16) == 0 && _root.skiner == 5) ||
              (trixx(38) && random(10) == 0) ||
              (_this.ups[173] && random(2) == 0))
          ) {
            _loc2_.col = 3;
          }
          if (_loc2_.d._currentframe == 1 && _root.lev == _root.hide2) {
            if (_root.hid2 == 0) {
              _loc2_.col = 1;
            }
            if (_root.hid2 == 1) {
              _loc2_.col = 4;
            }
          }
        }
      }
      if (_loc2_.d._currentframe != 8) {
        if (_loc2_.c2) {
          _loc2_.d.d.gotoAndStop(7);
        } else {
          _loc2_.d.d.gotoAndStop(3);
        }
      }
      if (_loc2_.d._currentframe == 34) {
        if (_root.heaven && _root.chaps != 11) {
          _loc2_.d.d.gotoAndStop(5);
        } else {
          _loc2_.d.d.gotoAndStop(3);
        }
      }
      _this.it1[4] = false;
      if (Math.round(_loc5_ * 100) >= 15 && Math.round(_loc5_ * 100) < 20) {
        if (_loc5_ > 0.1500000001) {
          _loc2_.d.d.gotoAndStop(Math.round((_loc5_ - 0.1500499) * 1000));
        } else if (_this.satan) {
          if (random(5) == 0) {
            _loc2_.d.d.gotoAndStop(11);
          } else {
            _loc2_.d.d.gotoAndStop(9 + random(2));
          }
        } else {
          f1 = -1;
          while (!_this.it1[f1]) {
            f1 = random(7);
          }
          if (f1 == 4 || f1 == 3) {
            _this.watz = -100;
          } else {
            _this.watz++;
          }
          if (_this.watz > 1 || (_this.watz == 1 && random(3) == 0)) {
            f1 = 3;
            _this.watz = -100;
          }
          _this.it1[f1] = false;
          if (f1 == 4) {
            f1 = 3;
          } else if (f1 > 4) {
            f1 += 6;
          }
          _loc2_.d.d.gotoAndStop(f1 + 1);
          _loc2_.may = true;
          if (_loc2_.d.d._currentframe == 3) {
            _loc2_.col = random(15) + 1;
          }
          if (_loc2_.d.d._currentframe == 13) {
            _loc2_.col = 3;
          }
        }
        if (
          _loc2_.may &&
          random(5) == 0 &&
          !_this.salefail &&
          (_loc2_.d.d._currentframe < 5 ||
            _loc2_.d.d._currentframe == 12 ||
            _loc2_.d.d._currentframe == 13)
        ) {
          _this.salefail = true;
          _loc2_.d.d.gotoAndStop(_loc2_.d.d._currentframe + 4);
        }
        if (_loc2_.d.d._currentframe == 3 || _loc2_.d.d._currentframe == 7) {
          _loc2_.d.d.d.gotoAndStop(_loc2_.col);
        }
        if (_loc2_.d.d._currentframe == 13 || _loc2_.d.d._currentframe == 17) {
          _loc2_.d.d.d.d.d.gotoAndStop(3);
        }
        if (
          _loc2_.d.d._currentframe == 4 ||
          (_loc2_.d.d._currentframe >= 8 && _loc2_.d.d._currentframe < 12)
        ) {
          _root.trg = _loc2_;
          if (_loc5_ >= 0.1504 && _loc5_ < 0.4) {
            _loc2_.it = Math.round(
              (_loc5_ - 0.15 - _loc2_.d.d._currentframe * 0.001) * 1000000
            );
          } else {
            _loc2_.it = giveit();
          }
          _loc2_.d.d.d.gotoAndStop(_loc2_.it);
        }
      } else if (_loc5_ > 0.09 && _loc5_ < 0.2) {
        if (_loc5_ > 0.1 && _loc5_ < 0.4) {
          _loc2_.it = Math.round((_loc5_ - 0.1) * 10000);
        } else {
          _loc2_.it = giveit();
        }
        _loc2_.d.d.d.d.gotoAndStop(_loc2_.it);
      }
      _loc2_.xpp = _loc2_.xp;
      _loc2_.ypp = _loc2_.yp;
      if (_loc2_.d._currentframe == 8 && _loc2_.col != 41) {
        if (_loc2_.col == 10) {
          _loc2_.d.d.gotoAndStop(41);
        } else if (_loc2_.col == 1) {
          _loc2_.d.d.gotoAndStop(32);
        } else if (_loc2_.col > 1) {
          _loc2_.d.d.gotoAndStop(36);
        }
      }
      break;
    case 61:
    case 13:
    case 14:
    case 18:
    case 80:
      _loc2_.flyai = true;
      _loc2_.d.d.d.gotoAndPlay(random(2) + 1);
      _loc2_.ybb = _this._loc0_ = 0;
      _loc2_.xbb = _this._loc0_;
      break;
    case 12:
      break;
    case 7:
    case 8:
      if (f7 == 8) {
        var _loc12_ = new flash.geom.Transform(_loc2_);
        _loc12_.colorTransform = _this.bloc;
      }
      _loc2_.ypp = _loc2_.ybew;
      _loc2_.bh = false;
      _loc2_.d._rotation = random(360);
      _loc2_.fd = 1.3;
      if (f7 == 7) {
        _loc2_.spl = 10;
      } else {
        _loc2_.spl = 0;
      }
      _loc2_.dm = 0 - random(30) + 5;
      _loc2_.dy = _this._loc0_ = -23;
      _this._loc0_;
      75;
      break;
    case 9:
      _loc2_.dy = _this._loc0_ = -23;
      _this._loc0_;
      75;
      _loc2_.shot = true;
      _loc2_.ph = true;
      _loc2_.spl = 0;
      _loc2_.dm = rand() * 0.2;
      break;
    case 2:
      if (
        _this.ups[143] ||
        _this.ups[165] ||
        _this.ups[110] ||
        _this.ups[16] ||
        _this.ups[108] ||
        _this.ups[159] ||
        _this.ups[153] ||
        _this.ups[169] ||
        _this.ups[183] ||
        _this.ups[176] ||
        _this.ups[182] ||
        _this.ups[194] ||
        _root.skiner == 6
      ) {
        var _loc7_ =
          1 -
          (_this.ups[110] + _this.ups[108]) * 0.25 -
          0.17 *
            (_this.ups[153] + _this.ups[16] + _this.ups[159] + _this.ups[169]) +
          _this.ups[143] * 0.2 +
          _this.ups[165] * 0.23 +
          _this.ups[176] * 0.16 +
          (_this.ups[183] + _this.ups[194]) * 0.16 -
          _this.ups[182] * 0.25;
        if (_root.skiner == 6) {
          _loc7_ += 0.31;
        }
        _loc7_ = Math.max(0.6, Math.min(_loc7_, 1.42));
        _loc2_.xbew *= _loc7_;
        _loc2_.ybew *= _loc7_;
      }
      _loc2_.dy = _this._loc0_ = -23;
      _this._loc0_;
      75;
      _loc2_.spl = 10;
      _loc2_.dm = rand() * 0.2;
      if (_this.babymode) {
        _loc2_.ba = _this.babymode;
        _loc2_.dmg = 3.5;
        if (_this.babymode == 10) {
          _loc2_.ics = true;
        } else if (_this.babymode == 6) {
          _loc2_._alpha = 50;
        } else if (_this.babymode == 7) {
          _loc2_.dmg = 4;
          attach(_loc2_, 500);
          _loc2_.d._xscale = 90;
          _loc2_.d._yscale = _loc2_.d._xscale;
          _loc2_.spl = 0;
        } else if (_this.babymode == 5) {
          _loc2_.dmg = 3;
          attach(_loc2_, 500);
          _loc2_.d._xscale = 80;
          if (_root.hardmode) {
            _loc2_.d._xscale = 115;
            _loc2_.dmg = 5;
          }
          _loc2_.d._yscale = _loc2_.d._xscale;
          _loc2_.spl = 0;
          _loc2_.dm = 1.2;
        } else if (_this.babymode == 2) {
          _loc2_.dmg = 5;
          attach(_loc2_, 500);
          _loc2_.d._xscale = 106;
          _loc2_.d._yscale = _loc2_.d._xscale;
          _loc2_.spl = 0;
        } else if (_this.babymode == 3) {
          colorit(_loc2_, 0.95, 0.8, 0.6, -150, -150, -150);
        } else if (_this.babymode == 4 || _this.babymode == 11) {
          colorit(_loc2_, 0.4, 0.15, 0.38, 71, 0, 116);
          if (_this.babymode == 11) {
            _loc2_._alpha = 50;
          }
          _loc2_.dm -= 3;
        }
        _this.babymode = undefined;
      } else {
        _loc2_.dmg = dmgdo();
        if (trixx(30)) {
          if (random(10) == 0) {
            _loc2_.trixer = 1;
          }
        }
        if (trixx(31)) {
          if (random(10) == 0) {
            _loc2_.trixer = 2;
          }
        }
        if (trixx(62)) {
          if (random(10) == 0) {
            _loc2_.trixer = 3;
          }
        }
        if (_this.ups[150] && random(Math.max(1, 10 - _root.luck)) == 0) {
          _loc2_.dmg *= 3.2;
          attach(_loc2_, 499);
          if (_loc2_.xbew < 0) {
            _loc2_.d.d._xscale *= -1;
          }
          if (_loc2_.trixer == 2) {
            colorit(_loc2_, 1.5, 2, 2, 0, 0, 0);
          }
          _loc2_.spl = 0;
          _loc2_.spll = true;
          _loc2_.tooth = true;
          _loc2_.d._xscale = 70;
          _loc2_.d._yscale = _loc2_.d._xscale;
        } else if (_this.ups[182]) {
          colorit(_loc2_, 1.5, 2, 2, 0, 0, 0);
        } else if (
          !_this.ups[149] &&
          (_this.ups[189] ||
            _this.ups[7] ||
            _this.ups[183] ||
            _this.doub ||
            _this.demon > 0 ||
            (_loc2_.dmg > 5.5 &&
              (!_this.ups[169] || _loc2_.dmg > 15) &&
              !_this.ups[69]) ||
            _this.ups[122] ||
            (_this.sob == -1 && _this.ups[155]))
        ) {
          attach(_loc2_, 500);
          _loc2_.d._xscale = 90;
          _loc2_.d._yscale = _loc2_.d._xscale;
          _loc2_.spl = 0;
        } else if (_this.ups[115]) {
          colorit(_loc2_, 1.5, 2, 2, 0, 0, 0);
        } else if (_this.ups[132]) {
          colorit(_loc2_, 0.2, 0.09, 0.065, 0, 0, 0);
        } else if (_this.ups[103]) {
          _loc2_.spl = 30;
          colorit(_loc2_, 0.5, 0.97, 0.5, 0, 0, 0);
        } else if (_this.ups[104]) {
          colorit(_loc2_, 0.9, 0.3, 0.08, 0, 0, 0);
        } else if (_this.ups[90]) {
          colorit(_loc2_, 0.4, 0.4, 0.4, 50, 50, 50);
        } else if (_this.ups[110]) {
          _loc2_.spl = 0;
          colorit(_loc2_, 1.25, 0.05, 0.15, 0, 0, 0);
        } else if (_this.ups[89]) {
          colorit(_loc2_, 2, 2, 2, 50, 50, 50);
        } else if (_this.ups[69]) {
          colorit(_loc2_, 0.33, 0.18, 0.18, 66, 40, 40);
          _loc2_.d._xscale *= 1 + (_this.chal - 1) * 0.05;
        } else if (_this.ups[6]) {
          colorit(_loc2_, 1, 1, 0, 45, 15, 0);
          _loc2_.spl = 20;
          _loc2_.piss = true;
        } else if (_this.ups[3]) {
          colorit(_loc2_, 0.4, 0.15, 0.38, 71, 0, 116);
        }
        if (!(_this.ups[150] && random(Math.max(1, 10 - _root.luck)) == 0)) {
          if (_loc2_.trixer == 3) {
            colorit(_loc2_, 0.95, 0.8, 0.6, -150, -150, -150);
          } else if (_loc2_.trixer == 2) {
            colorit(_loc2_, 1.5, 2, 2, 0, 0, 0);
          } else if (_loc2_.trixer == 1) {
            _loc2_.spl = 30;
            colorit(_loc2_, 0.5, 0.97, 0.5, 0, 0, 0);
          }
        }
        if (_this.ups[132]) {
          _loc2_.gro = 0;
          _loc2_.d._xscale -= 15;
          _loc2_.d._yscale -= 15;
        }
        if (_this.ups[115] || _loc2_.trixer == 2) {
          _loc2_._alpha = 50;
        }
        if (_this.ups[6]) {
          _loc2_.dy += 13;
        } else if (_root.skiner == 2) {
          _loc2_.dy += 6;
        } else if (_root.skiner == 6) {
          _loc2_.dy += 5;
        }
      }
      _loc2_.nuts = 0.2;
      _loc2_.dir = Math.abs(_loc2_.xbew) < Math.abs(_loc2_.ybew);
      _loc2_.hh = [];
      _loc2_.shot = true;
      if (!_loc2_.ba) {
        if (_this.ups[5]) {
          _loc2_.xbew *= 1.4;
          _loc2_.ybew *= 1.4;
        }
        _loc2_.dy -=
          (_this.ups[12] -
            _this.ups[71] +
            _this.ups[30] +
            _this.ups[31] +
            _this.ups[29]) *
          5;
        if (_this.ups[4] || _this.doub || _this.ups[7] || _this.ups[12]) {
          _loc2_.dmg *= 1.15;
        }
        f1 =
          _this.ups[12] +
          _this.ups[30] +
          _this.ups[31] +
          _this.ups[29] +
          _this.ups[71] * 3 +
          _this.ups[101] +
          _this.ups[110] +
          _this.ups[121] +
          _this.ups[182] * 1.5 +
          _this.ups[197] +
          _this.ups[14] +
          _this.ups[189];
        f1 *= 0.5;
        _loc2_.dm -= f1;
        _loc2_.dy -= f1 * 0.5;
        _root.firrr = (0 - _loc2_.dm) * 5 - _loc2_.dy;
      }
      f1 = 0.7 + _loc2_.dmg * 0.04 + Math.sqrt(_loc2_.dmg) * 0.15;
      _loc2_.d._xscale *= f1;
      _loc2_.d._yscale = _loc2_.d._xscale;
      break;
    case 11:
      _loc2_.bnuts = !_loc5_;
      break;
    case 10:
      _loc2_.gonuts = !_loc5_;
      _loc2_.bnuts = random(3) == 0;
      if (_loc2_.specoz == 23 || _loc2_.eternal) {
        _loc2_.bnuts = true;
      }
  }
  if (trixx(53) && _loc2_.hp > 60) {
    _loc2_.hp *= 0.85;
  }
  if (f7 == 45) {
    _loc2_.d.gotoAndStop(1);
  }
  if (
    _this.mheart.eternal ||
    (_loc2_.s == 19 && !_this.altboss && _this.spezz == 23)
  ) {
    _loc2_.hp *= 0.85;
    _loc2_.mhp = _this._loc0_;
  }
  if (_this.mheart.eternal && _loc2_.s == 56) {
    _loc2_.hp *= 0.7;
    _loc2_.mhp = _this._loc0_;
    _loc2_._yscale *= 0.8;
    _loc2_._xscale = _this._loc0_;
  }
  return _loc2_;
}
function specoo(trg) {
  this.speco(trg);
  switch (trg.specoz) {
    case 23:
      if (trg.s != 78) {
        trg._yscale *= 1.2;
        trg._xscale = _this._loc0_;
      } else {
        trg.fra = -100;
      }
      if (_root.chaps == 1) {
        if (trg.s != 19) {
          trg.mhp *= 1.125;
          trg.hp *= 1.125;
        }
      } else {
        trg.mhp *= 1.25;
        trg.hp *= 1.25;
      }
      break;
    case 19:
      if (trg.s == 67) {
        trg._yscale = 80;
        trg._xscale = 70;
      }
      break;
    case 14:
      trg._yscale = _this._loc0_ = 80;
      trg._xscale = _this._loc0_;
      break;
    case 12:
      trg._yscale = _this._loc0_ = 85;
      trg._xscale = _this._loc0_;
      break;
    case 9:
      trg.mhp *= 0.85;
      trg.hp *= 0.85;
      trg._yscale = _this._loc0_ = 85;
      trg._xscale = _this._loc0_;
      break;
    case 5:
      trg.spl = 30;
      break;
    case 3:
      trg.spl = 30;
      break;
    case 1:
      if (!_this.wtfe) {
        _this.i--;
        _this.wtfe = true;
      }
      trg._yscale = _this._loc0_ = 75;
      trg._xscale = _this._loc0_;
      if (trg.s == 20) {
        _this.sizes[20] = 21;
      }
      trg.mhp *= 0.45;
      trg.hp *= 0.45;
      break;
    case 11:
      trg._yscale = _this._loc0_ = 111;
      trg._xscale = _this._loc0_;
      break;
    case 21:
    case 18:
    case 2:
    case 6:
    case 4:
    case 8:
    case 15:
    case 16:
      if (trg.s != 100) {
        trg.mhp *= 1.25;
        trg.hp *= 1.25;
        if (trg.s == 67) {
          trg.mhp *= 1.25;
          trg.hp *= 1.25;
        }
        trg._yscale = _this._loc0_ = 115;
        trg._xscale = _this._loc0_;
      }
      break;
    case 7:
      if (trg.s == 99) {
        trg.mhp *= 0.55;
        trg.hp *= 0.55;
        trg._yscale = _this._loc0_ = 58;
        trg._xscale = _this._loc0_;
        if (!_this.wtfe) {
          _this.i--;
          _this.wtfe = true;
        }
      } else if (trg.s != 63) {
        trg.mhp *= 1.45;
        trg.hp *= 1.45;
        trg._yscale = _this._loc0_ = 115;
        trg._xscale = _this._loc0_;
      }
      break;
    case 22:
      trg.mhp *= 2;
      trg.hp *= 2;
    case 20:
      trg._yscale = _this._loc0_ = 75;
      trg._xscale = _this._loc0_;
  }
}
function parc(f1, f2, f3, f4, f5, f6) {
  _this.dang = true;
  _this.parz++;
  let namer = "p" + _this.parz;
  let f0 = _this.par.length;
  if (f6 == undefined) {
    f6 = _this.parz + 100000;
  }
  if (f1 == "bloo") {
    _this.par[f0] = _this.blorz.attachMovie(f1, namer, f6);
  } else {
    _this.par[f0] = this.attachMovie(f1, namer, f6);
  }
  _this.par[f0]._x = f2;
  _this.par[f0]._y = f3;
  if (f4) {
    _this.par[f0]._rotation = f4;
  }
  if (f5) {
    _this.par[f0]._xscale = _this.par[f0]._yscale = f5;
  }
  _this.par[f0].stop();
  return _this.par[f0];
}
function rotc(f0) {
  return f0;
}
function rand() {
  return Math.random() - 0.5;
}
function rotrund(f1) {
  while (f1 > 180) {
    f1 -= 360;
  }
  while (f1 < -180) {
    f1 += 360;
  }
  return f1;
}
function rotget2(f1, f2) {
  let f0 = (Math.atan((0 - f1) / f2) / 3.141592653589793) * 180 + 90;
  if (f2 >= 0) {
    f0 += 180;
  }
  return f0;
}
function rotget(f1, f2) {
  let f0 = (Math.atan((0 - f1) / f2) / 3.141592653589793) * 180 + 90;
  return f0;
}
function absmax(f1, f2) {
  if (f1 > f2) {
    f1 = f2;
  } else if (f1 < 0 - f2) {
    f1 = 0 - f2;
  }
  return f1;
}
function enfget(f1, f2) {
  f1 = f1 * f1 + f2 * f2;
  if (f1 > 0) {
    f1 = Math.sqrt(f1);
  } else {
    f1 = 0.001;
  }
  return f1;
}
function enfcheckx(f1, f2, f3, f4, siz) {
  _this.xenf = f1 - f3;
  _this.yenf = f2 - f4;
  if (
    Math.abs(_this.xenf) < _this.roxx2 ||
    Math.abs(_this.yenf) < _this.roxx2
  ) {
    let enf = enfget(_this.xenf, _this.yenf);
    if (enf < siz) {
      return enf;
    }
  }
}
function enfcheck(f1, f2, f3, f4, siz) {
  _this.xenf = f1 - f3;
  if (Math.abs(_this.xenf) < siz) {
    _this.yenf = f2 - f4;
    if (Math.abs(_this.yenf) < siz) {
      let enf = enfget(_this.xenf, _this.yenf);
      if (enf < siz) {
        return enf;
      }
    }
  }
}
function t3d(f1, f2) {
  f2 += f1._rotation;
  f2 += 45;
  while (f2 > 360) {
    f2 -= 360;
  }
  while (f2 < 0) {
    f2 += 360;
  }
  f1.gotoAndStop(Math.round((f2 / 360) * 72) + 1);
}
function pff(f1, f2) {
  if (_this.trg.gridder[f1] >= 0 && _this.trg.gridder[f1] < 1) {
    if (_this.trg.gridder[f1] == 0) {
      f2 = f2 - 1;
    } else {
      f2 -= 7;
    }
    _this.trg.gridder[f1] = f2;
    _this.acts2.push(f1);
  }
}
function pff1(f1, f2) {
  if (_this.trg.gridder[f1] + f2 * 3 > _this.v3 && _this.trg.gridder[f1] < 0) {
    _this.v3 = _this.trg.gridder[f1];
    _this.v4 = f1;
  }
}
function pff2(f1) {
  if (levzz(f1) != 0) {
    outgrid(f1);
    if (Math.abs(_this.xenf) > 0 && Math.abs(_this.yenf) > 0) {
      if (
        Math.abs(_this.xenf - _this.trg.xp) < _this.roxx * 0.8 &&
        Math.abs(_this.yenf - _this.trg.yp) < _this.roxx * 0.8
      ) {
        if (_this.xenf < _this.trg.xp) {
          _this.minx = _this.xenf + _this.roxx * 0.8;
        } else {
          _this.maxx = _this.xenf - _this.roxx * 0.8;
        }
        if (_this.yenf < _this.trg.xp) {
          _this.miny = _this.yenf + _this.roxx * 0.8;
        } else {
          _this.maxy = _this.yenf - _this.roxx * 0.8;
        }
      }
    }
  }
}
function momkill() {
  if (_this.momdown != 100) {
    for (let z in _this.ball) {
      _this.momdown = 100;
      if (_root.chaps == 6) {
        _root.soundy("Mom_Vox_Death_" + random(2) + ".mp");
      } else if (_root.chaps != 9) {
        _root.soundy("Mom_Vox_Filtered_Death_1.mp");
      }
      if (_this.trg.s != 78) {
        hurt(_this.ball[z], 100);
      }
      _this.fra = Math.max(_this.fra, 100);
    }
  }
  _this.mheart._visible = false;
}
function hurtcol(trg) {
  var _loc2_ = trg.uncol;
  if (trg.s == 78) {
    _loc2_ = _this.fra + 2;
  }
  speco(trg, true);
  if (trg.spid > 0) {
    if (trg.spida == 2) {
      colorit(trg, 0.45, 0.5, 0.5, 300, -100, -100);
    } else {
      colorit(
        trg,
        trg.colo.redMultiplier * 0.5,
        trg.colo.greenMultiplier * 0.5,
        trg.colo.blueMultiplier * 0.5,
        250 + trg.colo.redOffset * 0.45,
        50 + trg.colo.greenOffset * 0.45,
        50 + trg.colo.blueOffset * 0.45
      );
    }
    _loc2_ = _this.fra + 2;
  } else if (trg.s == 36) {
    colorit(
      trg,
      0.1 + trg.colo.redMultiplier * 0.6,
      0.1 + trg.colo.greenMultiplier * 0.6,
      0.1 + trg.colo.blueMultiplier * 0.6,
      70 + trg.colo.redOffset * 0.7,
      trg.colo.greenOffset * 0.7,
      trg.colo.blueOffset * 0.7
    );
  } else {
    colorit(
      trg,
      trg.colo.redMultiplier * 0.4,
      trg.colo.greenMultiplier * 0.5,
      trg.colo.blueMultiplier * 0.5,
      200 + trg.colo.redOffset * 0.45,
      trg.colo.greenOffset * 0.45,
      trg.colo.blueOffset * 0.45
    );
  }
  trg.uncol = _loc2_;
}
function hurt(trg, f1) {
  if (_root.chaps > 1) {
    f1 *= 1 + (_root.chaps - 1) * 0.0015;
  }
  if (trg != _this.rply) {
    if (trg == _this.mheart) {
      _this.mheart.downbro -= 3;
    }
    if (trg.s == 30 && trg.eternal) {
      if (trg.boss) {
        f1 *= 0.75;
      } else {
        f1 *= 0.45;
      }
    }
    if (trg.s == 60) {
      if (trg.spinny) {
        f1 *= 0.5;
      }
    }
    if (trg.s == 62 && trg.specoz == 23 && _this.altboss) {
      if (f1 > 10) {
        f1 = 10;
      }
    }
    if (trg.s == 41 && trg.eternal) {
      if (f1 > 2) {
        trg.bloo = 20;
      }
    }
    if (trg.s == 19 && trg.specoz == 23) {
      if (_root.chaps > 2) {
        f1 *= Math.random();
      } else {
        f1 *= 0.4 + Math.random() * 0.6;
      }
    }
    if (trg.specoz == 23 || trg.eternal) {
      var _loc4_ = 1;
      if (_this.fra > 1666) {
        _loc4_ = 1 + Math.random() * 0.175;
      } else if (_this.fra > 666) {
        _loc4_ = 1 + Math.random() * 0.125;
      } else if (_this.fra > 430) {
        _loc4_ = 1 + Math.random() * 0.75;
      } else if (_this.fra > 200) {
        _loc4_ = 1 + Math.random() * 0.05;
      }
      if (_this.hitcc < _this.fra) {
        _this.hitc++;
        if (_this.hitcc < _this.fra + 7) {
          _this.hitc++;
        }
        if (_this.hitcc < _this.fra + 14) {
          _this.hitc++;
        }
        _this.hitcc = _this.fra + 7;
      }
      if (_this.hitc > 300) {
        _loc4_ += 0.2;
      } else if (_this.hitc > 150) {
        _loc4_ += 0.15;
      } else if (_this.hitc > 50) {
        _loc4_ += 0.08;
      } else if (_this.hitc > 20) {
        _loc4_ += 0.05;
      } else if (_this.hitc > 10) {
        _loc4_ += 0.03;
      }
      f1 *= _loc4_ + _this.hitc * 0.005;
    }
    if (trg.s == 45) {
      if (f1 > 10 + random(20)) {
        if (_this.trriss + 25 + random(30) <= _this.fra) {
          _this.trriss = _this.fra;
          _root.soundy("Mom_Vox_Hurt_" + random(4) + ".mp");
        }
      }
    }
    if (trg.s == 102 || ((trg.s == 21 || trg.s == 23) && trg.eternal)) {
      trg.hurt = true;
    }
    if (trg == _this.mheart) {
      if (f1 > 10 + random(20)) {
        if (_this.trriss + 25 + random(30) <= _this.fra) {
          _this.trriss = _this.fra;
          _root.soundy("Mom_Vox_Filtered_Hurt_" + random(4) + ".mp");
        }
      }
    }
    if (trg.randd + 2 > _this.fra && random(5) == 0) {
      trg.xpp = trg.xp;
      trg.ypp = trg.yp;
    }
    if (!trg.dones) {
      if (trg.s == 30) {
        trg.hppp = 0;
      }
      if (trg.s == 38) {
        trg.telp = 20;
      }
      if (trg.imba) {
        f1 = 0;
      }
      if (trg.s == 62) {
        if ((trg.worm == 1 && trg.d._currentframe == 8) || _this.altboss) {
          trg = _this.worm[6];
        } else if (trg.worm != 6) {
          f1 = 0;
          _this.lows.dones = false;
        } else {
          f1 *= 5;
        }
      }
      if (trg.s == 27 && trg.alter != 2) {
        trg.fire = Math.min(10, trg.fire + f1);
        if (f1 > 10) {
          trg.d.t._visible = true;
          trg.d.t.t.gotoAndPlay(1);
        }
      }
      if (
        f1 > 0 &&
        trg.mhp > 0 &&
        trg != _this.player &&
        (trg.d.d.open ||
          trg.s != 27 ||
          trg.alter == 2 ||
          _this.lows.meat > 2 ||
          _this.lows.bird)
      ) {
        if (trg.s == 19) {
          if (trg.whop) {
          }
        } else if (trg.s == 21) {
          trg.xpp = undefined;
        }
        if (trg.s == 45) {
          for (let z in _this.mom) {
            _this.mom[z].hp -= f1;
          }
        } else if (trg.s == 28) {
          trg.mags[1].hp -= f1;
          trg.mags[2].hp -= f1;
          trg.mags[3].hp -= f1;
        } else {
          trg.hp -= f1;
        }
        if (trg.hp < 0) {
          if (trg.s == 99 && trg.hp < 0) {
            _root.soundy("Monster_Roar_2.mp", 120);
          }
          if (_this.pacman) {
            if (!_this.paccer) {
              _this._this.player.hp += 0.5;
            }
            _this.paccer = !_this.paccer;
          }
          if (trg.poiss > 0) {
            trg.spl = 30;
          }
          if (trg == _this.mheart) {
            momkill();
          }
          if (trg.s == 84 && trg.pow > 3) {
            momkill();
          }
          if (_this.ups[157]) {
            _this.rage = Math.min(3.3, _this.rage + 0.28);
            _this.rag = _this.rage * 0.32 + 0.68;
          }
          if (trixx(58) && random(15) == 0) {
            _this.rage = Math.min(3.3, _this.rage + 0.5);
            _this.rag = _this.rage * 0.32 + 0.68;
          }
          if (trixx(60) && random(20) == 0) {
            if (!_this.dbird && _this.ashut > 1) {
              _this.dbird = 2;
            }
          }
          if (!trg.flyai && _this.ups[62] && trg.s >= 10) {
            if (_root.vamp++ >= 12 && _this.player.mhp > 0) {
              _root.vamp = 0;
              _this.player.hp += 0.5;
              parc(
                "hearter",
                _this.player.xp,
                _this.player.yp - 20,
                0,
                100,
                _this.player.dpppp + 5000
              );
              _root.soundy("Vamp_Gulp.mp");
            }
          }
          if (trg.s == 62) {
            for (let z in _this.worm) {
              _this.worm[z].dones = true;
            }
          } else if (trg.s == 45) {
            for (let z in _this.mom) {
              _this.mom[z].dones = true;
              _this.mom[z]._visible = false;
            }
            momkill();
          } else if (trg.s == 28) {
            _root.soundy("Monster_Roar_2.mp", 50);
            trg.mags[1].dones = true;
            trg.mags[2].dones = true;
            trg.mags[3].dones = true;
          }
          if (trg.s == 89) {
            trg.trg3.frei = true;
            trg.trg2.frei = true;
            trg.frei = true;
          }
          if (trg.s == 74) {
            trg.d.gotoAndStop(6);
          } else if (trg.s == 75) {
            trg.d.gotoAndStop(9);
          } else if (trg.s == 15 && random(2) == 0 && !(_this.blackout == 2)) {
            trg.gosplash = true;
            trg.s = 17;
            attach(trg, 17);
            trg.hp = _this.hps[trg.s];
            trg.xpp = trg.ypp = 0;
          } else if (
            trg.s == 10 &&
            ((random(2) == 0 && trg.hp > -25) || trg.specoz == 23)
          ) {
            trg.gosplash = true;
            if (trg.eternal && random(5) == 0) {
              attach(trg, 12);
              trg.s = 12;
              trg.mhp *= 2 + _root.chaps * 0.1;
              trg._xscale = trg._yscale *= 1.05;
              this.speco(trg);
              trg.outway = true;
            } else {
              attach(trg, 11);
              trg.s = 11;
              if (trg.specoz == 23) {
                trg.mhp *= 2 + _root.chaps * 0.1;
                trg._xscale = trg._yscale *= 1.05;
                this.speco(trg);
              }
              trg.outway = true;
            }
            trg.hp = trg.mhp;
            splater(trg.xp, trg.yp, random(10) + 1, Math.random() + 0.6);
          } else if (trg.s == 24 && trg.d._currentframe < 3) {
            trg.gosplash = true;
            if (trg.alter == 2) {
              trg.d.gotoAndStop(6);
            } else {
              trg.d.gotoAndStop(5);
            }
            trg.outway = true;
            trg.hp = 10;
            if (trg.eternal) {
              if (trg.rest++ < 5) {
                trg.hp += 15;
              }
            }
            if (trg.special) {
              trg.hp += 2;
            }
            splater(trg.xp, trg.yp, random(10) + 1, Math.random() + 0.6);
          } else if (trg.s == 84) {
            trg.pow = trg.pow + 1;
            if (trg.pow == 4) {
              trg.hp = trg.mhp;
              trg.d.gotoAndStop(8);
              trg.bh = false;
            }
          } else {
            trg.dones = true;
          }
        } else {
          trg.uncol = Math.round(_this.fra + Math.min(6, f1 / 1.5));
          hurtcol(trg);
          if (trg.hbar) {
            _root.hud.bar.bar.gotoAndPlay(1);
          }
          if (trg.s == 62) {
            trg.uncol = Math.round(_this.fra + Math.min(6, f1 / 1.5));
            for (let z in _this.worm) {
              if (_this.worm[z].bh && _this.worm[z] != trg) {
                _this.worm[z].uncol = trg.uncol;
                hurtcol(_this.worm[z]);
              }
            }
          } else if (trg.s == 45) {
            trg.uncol = Math.round(_this.fra + 1);
            for (let z in _this.mom) {
              if (_this.mom[z].bh || _this.mom[z].mom == 3) {
                if (trg != _this.mom[z]) {
                  hurtcol(_this.mom[z]);
                  _this.mom[z].uncol = trg.uncol;
                }
              }
            }
            trg.uncol = Math.round(_this.fra + Math.min(6, f1 / 1.5));
          } else if (trg.s == 28) {
            if (trg.mags[1] != trg) {
              trg.mags[1].uncol = trg.uncol;
              hurtcol(trg.mags[1]);
            }
            if (trg.mags[2] != trg) {
              trg.mags[2].uncol = trg.uncol;
              hurtcol(trg.mags[2]);
            }
            if (trg.mags[3] != trg) {
              trg.mags[3].uncol = trg.uncol;
              hurtcol(trg.mags[3]);
            }
          }
        }
      }
    }
  }
}
function colorit(trg, f1, f2, f3, f4, f5, f6) {
  var _loc1_ = new flash.geom.ColorTransform();
  _loc1_.redMultiplier = f1;
  _loc1_.greenMultiplier = f2;
  _loc1_.blueMultiplier = f3;
  _loc1_.redOffset = f4;
  _loc1_.greenOffset = f5;
  _loc1_.blueOffset = f6;
  var _loc2_ = new flash.geom.Transform(trg);
  trg.colo = _loc1_;
  _loc2_.colorTransform = _loc1_;
}
function pilcol(f1, f2, f3) {
  colorit(_this.player, 0.3, 0.3, 0.3, f1 * 1.3, f2 * 1.3, f3 * 1.3);
  _this.pillef = _this.fra + 30;
  _root.playcol[0] *= 0.4;
  _root.playcol[1] *= 0.4;
  _root.playcol[2] *= 0.4;
  _root.playcol[0] += f1 / 160;
  _root.playcol[1] += f2 / 160;
  _root.playcol[2] += f3 / 160;
}
function playcol(f1) {
  if (_this.pillef > _this.fra) {
    _this.player._alpha = 100;
  } else if (_this.unic > 30 && !_this.pacman) {
    if (_this.unic % 4 == 0 && _this.player.d._currentframe < 4) {
      let v1 = 50;
      let v2 = 70;
      if (roll(6)) {
        colorit(_this.player, 1, 0, 0, v1, v1, v1);
      } else if (this.roll()) {
        colorit(_this.player, 0, 1, 0, v1, v1, v1);
      } else if (this.roll()) {
        colorit(_this.player, 0, 0, 1, v1, v1, v1);
      } else if (this.roll()) {
        colorit(_this.player, 1, 1, 0, v2, v2, v2);
      } else if (this.roll()) {
        colorit(_this.player, 0, 1, 1, v2, v2, v2);
      } else if (this.roll()) {
        colorit(_this.player, 1, 0, 1, v2, v2, v2);
      }
    }
  } else if (f1) {
    _this.player._alpha = 0;
  } else if (!_this.trg.free) {
    _this.player._alpha = 100;
    if (_this.rage != 1) {
      colorit(
        _this.player,
        _root.playcol[0] * _this.rag,
        _root.playcol[1] / _this.rag,
        _root.playcol[2] / _this.rag,
        0,
        0,
        0
      );
    } else {
      colorit(
        _this.player,
        _root.playcol[0],
        _root.playcol[1],
        _root.playcol[2],
        0,
        0,
        0
      );
    }
  }
}
function teller() {
  if (_root.lev != _root.chamb || _root.altch != 2) {
    _this.player.d.gotoAndStop(7);
    _this.telf = _this.fra + _this.player.d.d._totalframes - 3;
    _root.soundy("hell_portal2.wav");
  }
}
function trixx(f111) {
  return _root.trix == f111 || _root.atrix == f111;
}
function playerhurt(f1, f2, f3) {
  _this.player.hp = Math.min(_this.player.hp, _this.player.mhp);
  if (_root.chaps > 6) {
    f1 = Math.max(f1, 1);
  }
  if (_this.ups[108]) {
    f1 = 0.5;
  }
  if (f2 == 45) {
    if (_this.trrisx + 50 + random(130) <= _this.fra) {
      _this.trrisx = _this.fra;
      _root.soundy("Mom_Vox_EvilLaugh.mp");
    }
  }
  if (_root.chaps == 9 && _root.lev == _root.bossl) {
    _this.plh = true;
  }
  if (_this.mhheart) {
    if (_this.trrisx + 50 + random(130) <= _this.fra) {
      _this.trrisx = _this.fra;
      _root.soundy("Mom_Vox_Filtered_EvilLaugh.mp");
    }
  }
  if (
    _this.lasth - _this.fra < 0 &&
    _this.player._visible &&
    _this.telf == undefined &&
    _this.playsave < 0 &&
    _this.unic < 0 &&
    _this.player._currentframe != 6 &&
    _this.horse! <= 0 &&
    _this.dec! <= 0
  ) {
    if (f1 > 0) {
      if (_this.healo) {
        if (_this.healo.hp > 1) {
          _this.healo.hp = Math.min(_this.healo.hp + 40, _this.healo.mhp);
          parc(
            "hearter",
            _this.healo.xp,
            _this.healo.yp - 40,
            0,
            100,
            _this.healo.dpppp + 5000
          );
          _root.soundy("Vamp_Gulp.mp");
        }
      }
      _this.lastk = f2;
      _this.plah = true;
      if (f2 <= 200) {
        _root.nodmg = false;
      }
      if (_root.armor > 0) {
        _root.armor -= f1;
        if (_root.armor <= 0) {
          _root.armor = 0;
        }
      } else {
        if (_root.eta) {
          _root.eta = false;
          _this.player.hp += 0.5;
        }
        _root.armor = 0;
        _this.player.hp -= f1;
        if (_root.devil != 2 && _root.devil != 3 && f2 <= 200) {
          _root.devil = false;
        }
        if (f2 <= 200) {
          _this.bossdmg = false;
        }
      }
      if (_this.ups[148]) {
        _this.bluf += 1 + random(3);
      }
      if (trixx(29)) {
        _this.bluf++;
      }
      if (
        (_this.player.hp == 0 && _root.armor == 0.5) ||
        (_this.player.hp < 1 && _this.player.hp > 0 && _root.armor <= 0)
      ) {
        if (trixx(33)) {
          _this.ups[100] = _this.ups[100] + 1;
        }
        if (_this.ups[142]) {
          _root.armor = _root.armor + 1;
          _this.ups[142] = 0;
        }
      }
      if (_this.holz != undefined) {
        _this.trg3 = this.create(
          _this.player.xp * 0.6 + _this.holz.xp * 0.4,
          _this.player.yp * 0.6 + _this.holz.yp * 0.4,
          0,
          0,
          0,
          0,
          33.1
        );
        colorit(_this.trg3.d.d, 0.45, 0.7, 1, 0, 0, 70);
        _root.soundy("BGascan_pour.wav", 100);
        _this.holz.stopi = true;
        _this.holz.d.gotoAndStop(127);
        _this.holz = undefined;
      }
      if (_this.bluf > 1) {
        _this.blufer = _this.highs;
      }
      if (trixx(40) && random(5) == 0) {
        _this.razor += 3;
      }
      if (trixx(48) && random(20) == 1) {
        _root.over.gotoAndStop(3);
        _root.soundy("Death_Card.mp", 100);
        for (let e in _this.ball) {
          _this.trg2 = _this.ball[e];
          hurt(_this.trg2, 40);
        }
      }
      if (_this.ups[156] && _root.itc != 1) {
        let f0 = _this.itc[_root.it!];
        _root.itc += Math.min(1 / f0, 0.5);
        _root.soundy("batterycharge.mp");
        parc(
          "batter",
          _this.player.xp,
          _this.player.yp - 20,
          0,
          100,
          _this.player.dpppp + 5000
        );
      }
      _this.lasth = _this.fra + f1 * 60;
      if (
        _root.ups[122] &&
        !_this.ups[122] &&
        _this.player.hp > 0 &&
        _this.player.hp < 1
      ) {
        _this.ups[122] = 1.2;
        curs();
        _this.lasth = _this.fra + 90;
      } else if (_this.ups[117]) {
        _this.ups[117] = 0.55;
      }
      if (_this.ups[162] && random(5) == 0) {
        _this.playsave = 200;
      }
      if (_this.demon > 0) {
        _root.soundy("Monster_Grunt_" + random(2) + "_B.mp");
      } else {
        _root.soundy("Isaac_Hurt_Grunt" + random(3) + ".mp");
      }
      if (_this.ups[180]) {
        _this.farter = true;
      }
      if (
        ((_this.player.hp <= 0 && _root.armor <= 0 && !_root.eta) ||
          !(_this.player.mhp > 0 || _root.armor > 0 || _root.eta)) &&
        !f3
      ) {
        _this.player.d.gotoAndStop(6);
        _this.player.d.d.gotoAndStop(_this.sk);
        _this.player.dones = true;
      } else {
        if (f3 && _this.player.hp <= 0) {
          _this.player.hp = 0.5;
        }
        _this.player.d.gotoAndStop(2);
        if (
          _this.player.hp <= 0.5 ||
          !(_this.player.mhp > 0 || _root.armor > 0)
        ) {
          if (trixx(47)) {
            _this.playsave = 150;
          }
          if (
            trixx(43) &&
            _root.lev != _root.bossl &&
            _root.lev != _root.bossl2 &&
            (_root.armor < 0.5 || (_this.trg.mhp < 0 && _root.armor < 1))
          ) {
            teller();
            _this.tar = _root.lastl;
            if (_root.lev! <= 0) {
              _root.lastl = _this.tar = 35;
            }
          }
        }
      }
      return true;
    }
  }
}
function splater(f1, f2, f3, f4) {
  if (f3 >= 1) {
    _this.blood.gotoAndStop(f3);
    let v1 = f4;
    let v2 = 0;
    if (random(2) == 0) {
      v2 = 0 - v1;
    } else {
      v2 = v1;
    }
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.scale(v1, v2);
    _this.maxx.translate(f1 + crand(5), f2 + crand(5) - 5);
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.splat.draw(_this.blood, _this.maxx, _this.bloc);
  }
}
function shadow(f1, f2) {
  _this.poi.x = f1;
  _this.poi.y = f2;
  _this.shad.copyPixels(
    _this.org,
    _this.org.rectangle,
    _this.poi,
    undefined,
    undefined,
    true
  );
  _this.maxx = new flash.geom.Matrix();
  _this.maxx.translate(f1, f2);
  _this.shad.draw(_this.shaz, _this.maxx);
}
function turd(f1, e, cent) {
  if (_this.fra > 10 && levzz(e) < 0.93) {
    _this.levz[e] = 1.5;
    _this.clevc[e] = 1.5;
  }
  if (levzz(e) > 1.1) {
    var _loc6_ = _root.levsav[_root.lev!][_this.savv];
    outgrid(e);
    let f2 = "de" + e * 1;
    if (f1 == "fireblock2") {
      var _loc3_ = attachMovie(f1, "de" + f2, Math.round(e + 501), {
        _x: _this.xenf,
        _y: _this.yenf,
      });
      _loc3_.gotoAndStop(1);
      this[f2] = _loc3_.d;
      _loc3_ = _loc3_.d;
      _this.ref.push(_loc3_);
      _loc3_.fra = 0;
    } else {
      _loc3_ = attachMovie(f1, f2, Math.round(e + 501), {
        _x: _this.xenf,
        _y: _this.yenf,
      });
    }
    if (f1 == "breakblock2" || f1 == "fireblock" || f1 == "fireblock2") {
      _loc3_.fire = true;
    }
    _loc3_.xp = _this.xenf;
    _loc3_.yp = _this.yenf;
    _loc3_.cent = cent;
    _loc3_.savv = _this.savv;
    _loc3_.nam = f1;
    _loc3_.til = e;
    if (_loc6_ > 0 && _loc3_.nam != "breakblock2") {
      _loc3_.gotoAndStop(_loc6_);
      if (levzz(e) == 4) {
        _this.levz[e] = 0;
      } else {
        _this.levz[e] -= 0.13 * (_loc6_ - 1);
      }
    }
    if (_this.fra < 10) {
      _loc3_.p.gotoAndStop(_loc3_.p._totalframes);
    }
    if (_this.fra > 10) {
      _loc3_.gotoAndStop(6);
    }
    if (f1 == "locktile" && _loc6_ > 1) {
      _loc3_.gotoAndStop(3);
    }
    _this.savv++;
    return _loc3_;
  }
}
function upa() {
  _this.ups = _root.ups.slice(0, -1);
  if (_root.ceye) {
    _this.ups[21] = true;
  }
  if (_root.world) {
    _this.ups[21] = _this.ups[54] = true;
  }
  if (_this.ups[69] && _this.ups[52]) {
    _this.ups[69] = 0;
  }
  if (_this.ups[168]) {
    _this.ups[114] = _this.ups[118] = _this.ups[69] = 0;
  }
  if (_this.ups[114]) {
    _this.ups[118] = 0;
  }
  if (_this.ups[191]) {
    let f1 = [1, 2, 3, 5, 6, 46, 53, 110, 115, 143, 150];
    _this.ups[f1[random(f1.length)]] = 1;
  }
  if (_root.ups[122]) {
    if (_this.player.hp < 1) {
      _this.ups[122] = 1;
      _this.sk = 7;
      _this.cus = true;
    } else {
      _this.ups[122] = 0;
    }
  }
  if (trixx(32) && random(4) == 0) {
    let f1 = [21, 71, 120, 121];
    _this.ups[f1[random(f1.length)]] = 1;
  }
}
function curs() {
  _this.sk = 7;
  _root.mmus = _root.soundy("isaacsatanitemget.mp", 100);
  _root.over.gotoAndStop(13);
  _this.player.d.gotoAndStop(11);
  _this.player.it = 122;
}
function cloo() {
  _this.clevc = _this.levz.slice(0, -1);
  let e = 0;
  while (e < _this.levz.length) {
    if (
      _this.clevc[e] == 2 ||
      _this.clevc[e] == 0.99 ||
      _this.clevc[e] == 3.6
    ) {
      _this.clevc[e] = 0;
    }
    if ((_this.clevc[e] >= 1 && _this.clevc[e] < 2) || _this.clevc[e] == 3) {
      _this.clevc[e] = 1;
    } else {
      _this.clevc[e] = 0;
    }
    e++;
  }
  e = 0;
  while (e < _this.levz.length) {
    var _loc2_ = _this.clevc[e] + " " + _this.clevc[e + _this.rowz + 1];
    var _loc1_ = _this.clevc[e + 1] + " " + _this.clevc[e + _this.rowz];
    if (_loc2_ == "0 0" && _loc1_ == "1 1") {
      _this.clevc[e] = 1;
      _this.clevc[e + _this.rowz + 1] = 1;
    }
    if (_loc2_ == "1 1" && _loc1_ == "0 0") {
      _this.clevc[e + 1] = 1;
      _this.clevc[e + _this.rowz] = 1;
    }
    e++;
  }
  for (let e in _this.clevc) {
    if (_this.clevc[e] == 2) {
      _this.clevc[e] = 1;
    }
  }
}
function golev() {
  if (_root.ups[122]) {
    if (_this.player.hp < 1) {
      _this.ups[122] = 1;
      _this.cus = true;
    } else {
      _this.ups[122] = 0;
    }
  }
  if (_root.skiner > 0 && _root.classit) {
    _root.classit = false;
    _this.f10 = [0, 45, 46, 34, 36, 117, 157];
    _this.highs = _this.player;
    _this.player.it = _this.f10[_root.skiner];
    powerlevel();
    if (_root.skiner == 5) {
      _root.ups[122] = 1;
      _root.cols.push(122);
    }
  }
  if (_root.chala != 0) {
    if (!_root.wtfuuz) {
      _root.wtfuuz = true;
      let f1 = [
        [0],
        [0],
        [0],
        [0],
        [81],
        [151, 148],
        [52, 47],
        [73, 73, 73, 73],
        [153, 89],
        [101, 184],
      ];
      let f2 = f1[_root.chala];
      _this.gofind = true;
      for (let e in f2) {
        _this.lastcra = -100;
        _this.player.empty = false;
        _this.highs = _this.player;
        _this.player.it = f2[e];
        powerlevel();
      }
      _this.gofind = undefined;
    }
  }
  if (
    !_root.wtfuuz &&
    _root.locker[38] &&
    _root.skiner == 0 &&
    _root.chala == 0
  ) {
    _this.player.empty = false;
    _this.lastcra = -100;
    _root.wtfuuz = true;
    _this.highs = _this.player;
    _this.player.it = 105;
    powerlevel();
    _root.wiptz += 1;
  }
  _this.player.d.gotoAndStop(1);
  if (_root.shroom) {
    _this.player.d.gotoAndStop(4);
    if (_root.shroom == 4) {
      _this.player.it = 161;
    } else if (_root.shroom == 3) {
      _this.player.it = 127;
    } else if (_root.shroom == 2) {
      _this.player.it = 81;
    } else {
      _this.player.it = 11;
      _root.soundy("1up.wav");
    }
    _root.shroom = false;
  }
  for (let e in _root.bomf[_root.lev!]) {
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(
      _root.bomf[_root.lev!][e][0],
      _root.bomf[_root.lev!][e][1]
    );
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.splat.draw(_this.crater, _this.maxx);
  }
  _this.savv = 0;
  if (_root.levsav[_root.lev!] == undefined) {
    _root.levsav[_root.lev!] = [];
  }
  if (_root.bomf[_root.lev!] == undefined) {
    _root.bomf[_root.lev!] = [];
  }
  if (_root.levblow[_root.lev!] == undefined) {
    _root.levblow[_root.lev!] = [];
  } else {
    for (let e in _root.levblow[_root.lev!]) {
      let f1 = _root.levblow[_root.lev!][e];
      _this.levz[f1] = 0;
    }
  }
  _this.player.xp = _root.playerx;
  _this.player.yp = _root.playery;
  if (
    !_this.nomore &&
    _root.donelev[_root.lev!] &&
    _root.chesttype[_root.lev!] != 4
  ) {
    //TODO: 1 time nomore used ??? bug?
    _root.m.nextFrame();
  }
  _this.qq = _root._quality;
  if (_this.qq != "high") {
    _root._quality = "high";
  }
  if (!_this.error) {
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(_this.b._x, _this.b._y - _this.bggg._y);
    _this.maxx.scale(_this.hdx, _this.hdx); // bug?
    _this.bgg.draw(_this.b, _this.maxx);
    let f1 = 18;
    _this.b.w1.gotoAndStop(f1);
    _this.b.w2.gotoAndStop(f1);
    _this.b.w3.gotoAndStop(f1);
    _this.b.w4.gotoAndStop(f1);
    _this.b.bg.gotoAndStop(f1);
    _this.b._visible = false;
  }
  let v1 = _this.e + _this.a; // why? ??? bug?
  _this.trg = createEmptyMovieClip("dblockx", 489);
  _this.dblock = new flash.display.BitmapData(
    _this.gridxs,
    _this.gridys,
    true,
    0
  );
  _this.maxx = new flash.geom.Matrix();
  _this.maxx.translate(0, 0);
  _this.trg.attachBitmap(_this.dblock, 1);
  _this.trg._yscale = _this.trg._xscale = 100 / _this.hdx;
  let e = 0;
  while (e < _this.levz.length) {
    if (
      (levzz(e) > 0 && levzz(e) <= 1) ||
      levzz(e) == 1.9 ||
      levzz(e) == 1.94 ||
      levzz(e) == 1.93 ||
      levzz(e) == 3
    ) {
      outgrid(e);
      if (levzz(e) == 1.93 || levzz(e) == 1.94) {
        if (levzz(e) == 1.94) {
          _this.webs[e] = random(3) + 1;
          _this.tiles.gotoAndStop(158 + _this.webs[e]);
        } else if (_root.chaps >= 7 && _root.chaps != 9) {
          _this.tiles.gotoAndStop(70);
        } else {
          _this.tiles.gotoAndStop(21);
        }
        _this.levz[e] = 0.99;
      } else if (levzz(e) == 3) {
        let v1 = [
          levzz(e + 1) == 3,
          levzz(e + _this.rowz) == 3,
          levzz(e - 1) == 3,
          levzz(e - _this.rowz) == 3,
        ];
        let v2 = random(2) - 1;
        if (v1[0]) {
          v2 = 1;
        }
        if (v1[1]) {
          v2 = 2;
        }
        if (v1[2]) {
          v2 = 3;
        }
        if (v1[3]) {
          v2 = 4;
        }
        if (v1[2] && v1[0]) {
          v2 = 5;
        }
        if (v1[3] && v1[1]) {
          v2 = 6;
        }
        if (v1[0] && v1[1]) {
          v2 = 7;
        }
        if (v1[1] && v1[2]) {
          v2 = 8;
        }
        if (v1[2] && v1[3]) {
          v2 = 9;
        }
        if (v1[3] && v1[0]) {
          v2 = 10;
        }
        if (v1[0] && v1[1] && v1[2]) {
          v2 = 11;
        }
        if (v1[1] && v1[2] && v1[3]) {
          v2 = 12;
        }
        if (v1[2] && v1[3] && v1[0]) {
          v2 = 13;
        }
        if (v1[3] && v1[0] && v1[1]) {
          v2 = 14;
        }
        if (v1[0] && v1[1] && v1[2] && v1[3]) {
          v2 = 15;
        }
        _this.tiles.gotoAndStop(23 + v2);
      } else if (levzz(e) == 1.9) {
        _this.levz[e] = 1.8;
        _this.tiles.gotoAndStop(random(4) + 11);
      } else if (levzz(e) == 1) {
        if (_root.chaps >= 7 && _root.chaps != 9) {
          _this.tiles.gotoAndStop(80 + random(3));
        } else if (_root.rarer[_root.lev!] == e) {
          _this.tiles.gotoAndStop(15);
        } else {
          _this.tiles.gotoAndStop(random(10) + 1);
        }
      } else {
        _this.tiles.gotoAndStop(94 + random(5) + _root.chaps * 5);
        _this.clevc[e] = _this.levz[e] = 0;
      }
      _this.maxx = new flash.geom.Matrix();
      _this.maxx.translate(_this.xenf, _this.yenf);
      _this.maxx.scale(_this.hdx, _this.hdx);
      _this.dblock.draw(_this.tiles, _this.maxx);
    }
    e++;
  }
  let yyo = 1; //unused ??? bug?
  e = 0;
  for (; e < _this.levz.length; e++) {
    switch (levzz(e)) {
      case 4:
        this.turd("locktile", e);
        continue;
      case 1.3:
        this.turd("egg", e);
        continue;
      case 1.4:
        if (random(40) != 0 || _this.firsttime) {
          this.turd("fireblock", e);
          continue;
        }
      case 1.41:
        _this.levz[e] = 1.4;
        this.turd("fireblock2", e);
        continue;
      case 1.5:
        if (random(40) != 0 || _this.firsttime) {
          this.turd("breakblock", e);
          continue;
        }
      case 1.495:
        if (!(random(20) != 0 || _this.firsttime)) {
          break;
        }
        _this.trg = _this._loc0_ = this.turd("breakblock3", e);
        if (_this._loc0_) {
          if (levzz(e) > 1) {
            efly(_this.trg);
          }
        }
        _this.trg.shit = true;
        continue;
      case 1.4955:
        break;
      case 1.49:
        _this.levz[e] = 1.5;
        this.turd("breakblock2", e);
        continue;
      default:
        continue;
    }
    _this.trg = this.turd("breakblock4", e);
    _this.trg.gold = true;
  }
  if (_this.qq != "high") {
    _root._quality = _this.qq;
  }
  e = 0;
  while (e < 700) {
    _this.levz[this.ingrid(40 + e, 130)] = 1.9;
    e += 10;
  }
  e = 0;
  while (e < 700) {
    _this.levz[this.ingrid(40 + e, 450)] = 1.9;
    e += 10;
  }
  e = 0;
  while (e < 300) {
    _this.levz[this.ingrid(40, 130 + e)] = 1.9;
    e += 10;
  }
  e = 0;
  while (e < 300) {
    _this.levz[this.ingrid(600, 130 + e)] = 1.9;
    e += 10;
  }
  e = 0;
  while (e < _this.levz.length) {
    if (levzz(e) < 0) {
      let f1 = 9 - levzz(e);
      if (
        !_this.firsttime ||
        f1 == 44.2 ||
        f1 == 42.2 ||
        f1 == 44.1 ||
        f1 == 42.1 ||
        f1 == 42
      ) {
        outgrid(e);
        if (f1 < 10) {
          f1 = 5 - levzz(e);
        }
        let f2 = 1;
        if (Math.round(f1) == 62) {
          f2 = 7;
        }
        if (!_root.beenlev2[_root.lev!] || f1 > 6) {
          let i = 0;
          while (i < f2) {
            this.create(_this.xenf, _this.yenf + 10 + i, 0, 0, 0, 0, f1);
            if (_this.spezz == 23 && Math.round(f1) == 62) {
              f2 = 9;
            }
            i++;
          }
        }
        _this.levz[e] = 0;
      }
    }
    if (Math.abs(levzz(e)) <= 0) {
      _this.levz[e] = 0;
    }
    e++;
  }
  if (_this.firsttime) {
    e = 0;
    while (e < _this.levz.length) {
      if (levzz(e) < 0) {
        _this.levz[e] = 0;
      }
      if (Math.abs(levzz(e)) <= 0) {
        _this.levz[e] = 0;
      }
      e++;
    }
  }
  cloo();
  if (_root.lev == _root.boner) {
    _root.treasd = true;
  }
  if (_root.lev == _root.boner2) {
    _root.treasd2 = true;
  }
  if (_root.lev == _root.sac) {
    _root.sacb = true;
  }
  //for(let e in _this.door)
  _this.door.forEach(
    (
      e //quickfix
    ) => {
      _this.trg = _this.door[e];
      _this.trg.gotoAndStop(4);
      if (_this.error) {
        _this.trg._visible = false;
      } else if (
        _root.lev == _root.bossl &&
        !_this.trg._visible &&
        (Math.abs(e - _root.door!) == 2 ||
          e == _root.door! ||
          _root.door! <= 0) &&
        !_this.sat
      ) {
        _this.sat = true;
        _this.trg._visible = true;
        _this.trg.gol = 166;
      } else if (_this.satan) {
        _this.trg._visible = false;
        if (
          (Math.abs(e - _root.door!) == 2 || _root.door! <= 0) &&
          !_this.sat
        ) {
          _this.sat = true;
          _this.trg.gol = _root.lastl;
          if (_this.trg.gol == 166 || _this.trg.gol <= 0) {
            _this.trg.gol = 35;
          }
          _this.trg._visible = true;
        }
      }
      if (_this.trg._visible || _this.trg.govo) {
        _this.trg.blo = this.ingrid(_this.trg._x, _this.trg._y);
        _root.seenlev[_this.trg.gol] = true;
        if (_this.ups[91]) {
          if (_this.trg.gol == _root.sac) {
            _root.sacb = true;
          }
          if (_this.trg.gol == _root.boner) {
            _root.treasd = true;
          }
          if (_this.trg.gol == _root.boner2) {
            _root.treasd2 = true;
          }
          if (_this.trg.gol == _root.hide) {
            hider();
          }
          if (_this.trg.gol == _root.hide2) {
            hider2();
          }
          if (_this.trg.gol == _root.minb) {
            _root.minbb = true;
          }
        }
        if (
          _root.lev == _root.hide &&
          (_root.lastl == undefined || _root.lastl == _root.lev) &&
          _this.trg.gol != _root.bossl &&
          _this.trg.gol != _root.bossl2
        ) {
          _root.lastl = _this.trg.gol;
        }
        if (_this.trg.gol == _root.cus || _root.lev == _root.cus) {
          _root.cusb = true;
          _this.trg.cus = true;
          _this.trg.gotoAndStop(36);
        } else if (
          (_root.lev == _root.hide &&
            (_root.lastl == _this.trg.gol || _this.ups[76])) ||
          (_this.ups[76] &&
            _this.trg.gol == _root.hide &&
            _root.lev != _root.bossl2 &&
            _root.lev != _root.bossl &&
            _root.lev != _root.minb &&
            _root.lev != _root.chamb)
        ) {
          _this.trg._visible = true;
          _this.trg.hide = true;
          _this.trg.gotoAndStop(17);
          _this.levz[_this.trg.blo] = 0;
          if (_this.trg.govo && _this.ups[76]) {
            hider();
          }
        } else if (
          (_root.lev == _root.hide2 &&
            (_root.hide != _this.trg.gol || _this.ps[76])) ||
          (_this.ups[76] &&
            _this.trg.gol == _root.hide2 &&
            _root.lev != _root.bossl2 &&
            _root.lev != _root.bossl &&
            _root.lev != _root.minb)
        ) {
          _this.trg.hide2 = true;
          _this.trg._visible = _this.trg.govo;
          if (_this.trg.govo && _this.ups[76]) {
            hider2();
          }
          _this.trg.gotoAndStop(17);
          _this.levz[_this.trg.blo] = 0;
        } else if (
          (_this.trg.gol == _root.hide || _root.lev == _root.hide) &&
          !_this.satan
        ) {
          _this.trg.hide = true;
          _this.trg._visible = _this.trg.govo;
          _this.trg.gotoAndStop(10);
          _this.levz[_this.trg.blo] = 1.85;
          if (
            _root.lev == _root.bossl ||
            _root.lev == _root.bossl2 ||
            _root.lev == _root.bossl ||
            _root.lev == _root.bossl2 ||
            _root.lev == _root.minb ||
            _root.lev == _root.chamb
          ) {
            _this.levz[_this.trg.blo] = 2;
          }
        } else if (
          (_this.trg.gol == _root.hide2 || _root.lev == _root.hide2) &&
          !_this.satan
        ) {
          _this.trg.hide2 = true;
          _this.trg._visible = true;
          _this.trg.gotoAndStop(10);
          _this.levz[_this.trg.blo] = 1.85;
          if (
            _this.trg.gol == _root.bossl ||
            _this.trg.gol == _root.bossl2 ||
            _root.lev == _root.bossl ||
            _root.lev == _root.bossl2 ||
            _root.lev == _root.minb ||
            _root.lev == _root.chamb
          ) {
            _this.levz[_this.trg.blo] = 2;
          }
        } else if (_this.satan || _this.trg.gol == 166) {
          _this.trg.sat = true;
          _this.trg.gotoAndStop(12);
        } else if (
          _this.trg.gol == _root.bossl ||
          _root.lev == _root.bossl ||
          _this.trg.gol == _root.bossl2 ||
          _root.lev == _root.bossl2
        ) {
          _this.trg.boss = true;
          _root.bossd = true;
          _this.trg.gotoAndStop(16);
        } else if (_this.trg.gol == _root.chamb || _root.lev == _root.chamb) {
          _this.chama = 1;
          _root.chambb = true;
          _this.trg.chamb = true;
          _this.trg.gotoAndStop(27);
        } else if (_this.trg.gol == _root.gamb) {
          _root.gambb = true;
          _this.trg.gamb = true;
          _this.trg.gotoAndStop(20);
        } else if (_this.trg.gol == _root.boner2 || _root.lev == _root.boner2) {
          _root.treasd2 = true;
          _this.trg.boner2 = true;
          if (_root.bona2) {
            _this.trg.gotoAndStop(32);
          } else {
            _this.trg.gotoAndStop(30);
          }
        } else if (_this.trg.gol == _root.boner || _root.lev == _root.boner) {
          _root.treasd = true;
          _this.trg.boner = true;
          if (_root.bona) {
            _this.trg.gotoAndStop(32);
          } else {
            _this.trg.gotoAndStop(30);
          }
        } else if (_this.trg.gol == _root.shopl) {
          _root.shopaz = true;
          _this.trg.shop = true;
          _this.trg.gotoAndStop(9);
        } else if (_this.trg.gol == _root.lib) {
          _root.libb = true;
          _this.trg.lib = true;
          _this.trg.gotoAndStop(9);
        } else {
          _this.levz[_this.trg.blo] = 1.85;
        }
        if (_root.chaps == 11 && !_this.trg.hide && !_this.trg.hide2) {
          _this.levz[_this.trg.blo] = 2;
        }
      }
      let f2 = 28;
      let f1 = ((_this.trg._rotation - 90) / 180) * 3.141592653589793;
      _this.trg.xp = _this.trg._x - Math.sin(f1) * f2;
      _this.trg.yp = _this.trg._y + Math.cos(f1) * f2;
      if (
        _root.levz[_this.trg.gol] == 0 ||
        _root.levz[_this.trg.gol] == undefined
      ) {
        _this.trg._visible = false;
      }
    }
  );
  mapd();
  for (let e in _root.levit[_root.lev!]) {
    this.create(
      _root.levit[_root.lev!][e][1],
      _root.levit[_root.lev!][e][2],
      0,
      0,
      0,
      0,
      5 + _root.levit[_root.lev!][e][0] * 0.01
    );
  }
  if (_this.gopill) {
    //bug? one entrance
    this.create(320, 240, 0, 0, 0, 0, 5.07);
  }
  if (_root.whatstart2) {
    _root.whatstart2 = false;
    e = 0;
    while (e < 10) {
      e++;
    }
    e = 0;
    while (e < 18) {
      e++;
    }
  }
  if (_this.inem) {
    _this.inl.gotoAndStop("empty");
    _this.inl.swapDepths(33901);
  } else {
    gotoAndStop("empty");
  }
  _this.lads.swapDepths(491);
  _root.beenlev2[_root.lev!] = true;
}
function spawnb(f1, f2) {
  if (_this.levz.length <= 1) {
    _this.levz = new Array(200);
  }
  if (f1._alpha < 30) {
    if (f2 < -0.5 || f2 > 0) {
      f2 -= 0.2;
    }
  } else if (f1._alpha < 75) {
    if (f2 == 1) {
      f2 = 1.9;
    } else if (f2 < -0.5 || f2 > 0) {
      f2 -= 0.1;
    }
  }
  var _loc3_ = this.ingrid(f1._x, f1._y);
  _this.levz[_loc3_] = f2;
}
function sideflip(f1, trg2) {
  if (trg2 == undefined) {
    if (_this.trg.sf2 == undefined) {
      trg2 = _this.trg.d;
    } else {
      trg2 = _this.trg.sf2;
    }
  }
  _this.trg.sf2 = trg2;
  _this.trg.sf = true;
  if (f1 * trg2._xscale < -100) {
    trg2._xscale *= -1;
  }
}
function pathfind(trg, f1, f2, f3) {
  if (trg.speed == undefined) {
    trg.speed = 1;
  }
  if (trg.s == 35) {
    f3 *= 1.1;
  }
  if ((trg.xp != f1 || trg.yp != f2) && _this.fra > 5) {
    let v1 = this.ingrid(f1, f2);
    outgrid(v1);
    _this.xpp = _this.xenf;
    _this.ypp = _this.yenf;
    let v2 = this.ingrid(trg.xp, trg.yp);
    outgrid(v2);
    _this.xppp = _this.xenf;
    _this.yppp = _this.yenf;
    trg.tiler = v2;
    trg.tiletimer = 2 / Math.max(0.2, f3);
    if (_this.fra % 3 == 1) {
      v2 = 40 / enfget(trg.xbew, trg.ybew);
      v2 = levzz(this.ingrid(trg.xp + trg.xbew * v2, trg.yp + trg.ybew * v2));
      if (v2 > 0 && v2 < 1) {
        trg.speed = 0.7;
      } else {
        trg.speed = 1;
      }
    }
    v2 = trg.tiler;
    if (levzz(trg.tiler) < 0.99 && trg.s != 16 && trg.s != 47) {
      if (trg.s == 58) {
        _this.levz[trg.tiler] = 0.2;
      } else {
        _this.levz[trg.tiler] = 0.9;
      }
    }
    if (f3 == undefined) {
      f3 = 1;
    }
    f3 *= trg.speed;
    let nogo = true;
    if ((_this.fra + trg.e) % 6 == 1) {
      if (trg.see) {
        trg.lastv = _this.v5 = linecheckxx(
          _this.xppp,
          _this.yppp,
          _this.xpp,
          _this.ypp
        );
      } else {
        trg.lastv = _this.v5 = linecheck(
          _this.xppp,
          _this.yppp,
          _this.xpp,
          _this.ypp
        );
      }
      if (
        trg.lastv &&
        trg.firss + 40 <= _this.fra &&
        random(3) == 0 &&
        _this.gochar
      ) {
        trg.firss = _this.fra;
        _root.soundy("Zombie_Walker_Kid.mp", 100);
      }
    } else {
      _this.v5 = trg.lastv;
    }
    trg.d.h.stop();
    if (!trg.gonuts) {
      f3 *= 0.83;
    }
    if (trg.d.h._currentframe > 2) {
      f3 *= 1.2;
      trg.d.h.nextFrame();
    } else if (trg.gonuts) {
      trg.d.h.gotoAndStop(2);
    }
    if (
      (_this.v5 &&
        (_this.enf = this.enfcheck(trg.xp, trg.yp, f1, f2, 750, true)) > 0) ||
      v1 == v2
    ) {
      if (trg.gonuts) {
        trg.d.h.nextFrame();
        f3 *= 1.1;
      }
      trg.tiletimer -= 5;
      trg.gridtime -= 10;
      _this.xenf = f1;
      _this.yenf = f2;
      nogo = false;
    } else if (levzz(v1) != 1 || true) {
      if ((trg.gridder == undefined || trg.gridtime < 0) && _this.nogridyet) {
        nogo = true;
        _this.nogridyet = false;
        trg.gridder = _this.levz.slice(0, -1);
        trg.gridder[this.ingrid(trg.xp, trg.yp)] = 0;
        trg.gridder[v1] = 0;
        _this.acts = [];
        _this.acts2 = [];
        let z = -1;
        while (z > -100 && trg.gridder[v2] >= 0) {
          if (z == -1) {
            pff(v1, -1);
          } else {
            for (let e in _this.acts) {
              v1 = trg.gridder[_this.acts[e]];
              if (v1 < z) {
                _this.acts2.push(_this.acts[e]);
              } else {
                outgrid(_this.acts[e]);
                pff(this.ingrid(_this.xenf, _this.yenf + _this.roxx), v1);
                pff(this.ingrid(_this.xenf + _this.roxx, _this.yenf), v1);
                pff(this.ingrid(_this.xenf - _this.roxx, _this.yenf), v1);
                pff(this.ingrid(_this.xenf, _this.yenf - _this.roxx), v1);
              }
            }
          }
          _this.acts2[_this.acts2.length] = 0;
          _this.acts = _this.acts2.slice(0, -1);
          _this.acts2 = [];
          z--;
        }
        if (z < -99) {
          trg.gridder = 0;
        }
        trg.gridtime = Math.min(20, 0 - z) + _this.ball.length * 2 + 7;
      }
      trg.gridtime * 0.9;
      trg.gridtime -= f3 * 3;
      if (trg.gridder != undefined && trg.gridder != 0) {
        outgrid(v2);
        _this.v3 = -100;
        _this.testarr = [
          this.ingrid(_this.xenf + _this.roxx, _this.yenf),
          this.ingrid(_this.xenf - _this.roxx, _this.yenf + _this.roxx),
          this.ingrid(_this.xenf - _this.roxx, _this.yenf),
          this.ingrid(_this.xenf - _this.roxx, _this.yenf - _this.roxx),
          this.ingrid(_this.xenf, _this.yenf - _this.roxx),
          this.ingrid(_this.xenf + _this.roxx, _this.yenf - _this.roxx),
          this.ingrid(_this.xenf, _this.yenf + _this.roxx),
          this.ingrid(_this.xenf + _this.roxx, _this.yenf + _this.roxx),
        ];
        //for(let e in _this.testarr)
        _this.testarr.forEach(
          (
            e //quick fix
          ) => {
            if (_this.testarr[e] > 0) {
              f1 = e + 1;
              if (f1 + 1 > _this.testarr.length) {
                f1 = 0;
              }
              if (e == 0 || e == 2 || e == 4 || e == 6) {
                _this.b1 = true;
              } else {
                _this.b1 =
                  _this.levz[_this.testarr[e - 1]] == 0 ||
                  _this.levz[_this.testarr[f1]] == 0;
              }
              if (e == 0 || e == 2 || e == 4 || e == 6) {
                pff1(_this.testarr[e], 0);
              }
            }
          }
        );
        if (_this.v3 < 0) {
          outgrid(_this.v4);
          nogo = false;
        }
      }
    }
    if (!nogo && (_this.enf = enfget(_this.xenf, _this.yenf)) > 0.1) {
      var _loc6_ = _this.xenf - trg.xp;
      var _loc7_ = _this.yenf - trg.yp;
      _this.xenf = _loc6_;
      _this.yenf = _loc7_;
      _this.enf = enfget(_this.xenf, _this.yenf);
      if (_this.enf > 1) {
        _this.enf = (Math.min(_this.enf * 0.1, 2) / _this.enf) * f3;
        trg.xbew *= 0.7;
        trg.ybew *= 0.7;
        trg.xbew += _this.xenf * _this.enf;
        trg.ybew += _this.yenf * _this.enf;
      }
    } else {
      _this.xenf = _this.yenf = 0;
      trg.xbew *= 0.5;
      trg.ybew *= 0.5;
    }
  } else {
    _this.xenf = _this.yenf = 0;
    trg.xbew *= 0.85;
    trg.ybew *= 0.85;
  }
  _this.gochar = false;
}
function mhity(f1, f2) {
  if (f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447) {
    _this.f33 = this.ingrid(f1, f2);
    f1 = levzz(_this.f33);
    if (f1 >= 1 && f1 != 3) {
      return true;
    }
  }
  return true;
}
function mhitx(f1, f2) {
  if (f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447) {
    f1 = levzz(this.ingrid(f1, f2));
    if (f1 > 1.8 && f1 != 3) {
      return true;
    }
  }
  return true;
}
function mhix() {
  let f3 = false;
  for (let i in _this.hardx[_this.v1]) {
    f3 = !f3;
    if (f3) {
      if (
        mhity(
          _this.f1 + _this.hardx[_this.v1][i],
          _this.f2 + _this.hardy[_this.v1][i]
        )
      ) {
        _this.f5 += _this.hardx[_this.v1][i];
        _this.f6 += _this.hardy[_this.v1][i];
      }
    }
  }
  f3 = true;
  if (Math.abs(_this.f5) > 0 || Math.abs(_this.f6) > 0 || _this._this.trg.gh) {
    for (let i in _this.hardx[_this.v1]) {
      f3 = !f3;
      if (f3) {
        if (
          mhity(
            _this.f1 + _this.hardx[_this.v1][i],
            _this.f2 + _this.hardy[_this.v1][i]
          )
        ) {
          _this.f5 += _this.hardx[_this.v1][i];
          _this.f6 += _this.hardy[_this.v1][i];
        }
      }
    }
  }
}
function shit(f1, f2) {
  return _this.blorz.hitTest(f1 + _this._X, f2 + _this._Y, true);
}
function mhit(f1, f2) {
  if (f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447) {
    f1 = levzz(this.ingrid(f1, f2));
    if (f1 >= 1) {
      return true;
    }
  }
  return true;
}
function pff3(f4) {
  f4 = levzz(f4);
  if (f4 != 0.99 && _this.grox != f4) {
    if (f4 >= 1) {
      _this.f5 = -1;
    } else if (f4 > 0.3) {
      _this.f5 -= 0.1;
    }
  }
}
function pff3x1(f4) {
  f4 = levzz(f4);
  if (f4 != 3 && _this.grox != f4) {
    if (f4 >= 1) {
      _this.f5 = -1;
    } else if (f4 > 0.3) {
      _this.f5 -= 0.1;
    }
  }
}
function linecheckxx(f1, f2, f3, f4) {
  var _loc5_ = f1 - f3;
  var _loc6_ = f2 - f4;
  var _loc7_ = enfget(_loc5_, _loc6_);
  var _loc8_ = 2.5;
  _this.grox = this.ingrid(f1, f2);
  if (_loc7_ > 0) {
    _loc5_ /= _loc7_;
    _loc6_ /= _loc7_;
    _loc5_ *= 10;
    _loc6_ *= 10;
    var _loc2_ = 0;
    while (_loc2_ < _loc7_) {
      f1 -= _loc5_;
      f2 -= _loc6_;
      f3 = this.ingrid(f1, f2);
      if (
        levzz(f3) >= 1.8 &&
        levzz(f3) != 1.85 &&
        levzz(f3) != 3 &&
        f3 != _this.gro
      ) {
        _loc8_ = -1;
      }
      _loc2_ += 10;
    }
  }
  _this.grox = undefined;
  return _loc8_ > 0;
}
function linecheckx(f1, f2, f3, f4) {
  var _loc5_ = f1 - f3;
  var _loc6_ = f2 - f4;
  var _loc4_ = enfget(_loc5_, _loc6_);
  _this.f5 = 2.5;
  _this.f6 = 5;
  _this.grox = this.ingrid(f1, f2);
  if (_loc4_ > 0) {
    _loc5_ /= _loc4_;
    _loc6_ /= _loc4_;
    _loc5_ *= 10;
    _loc6_ *= 10;
    var _loc1_ = 0;
    while (_loc1_ < _loc4_) {
      f1 -= _loc5_;
      f2 -= _loc6_;
      pff3(this.ingrid(f1, f2));
      _loc1_ += 10;
    }
  }
  _this.grox = undefined;
  return _this.f5 > 0;
}
function linecheck(f1, f2, f3, f4) {
  _this.grox = this.ingrid(f1, f2);
  var _loc5_ = f1 - f3;
  var _loc6_ = f2 - f4;
  var _loc4_ = enfget(_loc5_, _loc6_);
  _this.f5 = 2.5;
  _this.f6 = 5;
  if (_loc4_ > 0) {
    _loc5_ /= _loc4_;
    _loc6_ /= _loc4_;
    _loc5_ *= 6;
    _loc6_ *= 6;
    var _loc3_ = 0;
    while (_loc3_ < _loc4_) {
      f1 -= _loc5_;
      f2 -= _loc6_;
      pff3(this.ingrid(f1 + _this.f6, f2 + _this.f6));
      pff3(this.ingrid(f1 - _this.f6, f2 + _this.f6));
      pff3(this.ingrid(f1 - _this.f6, f2 - _this.f6));
      pff3(this.ingrid(f1 + _this.f6, f2 - _this.f6));
      _loc3_ += 6;
    }
  }
  _this.grox = undefined;
  return _this.f5 > 0;
}
function linechecky(f1, f2, f3, f4) {
  var _loc5_ = f1 - f3;
  var _loc6_ = f2 - f4;
  var _loc4_ = enfget(_loc5_, _loc6_);
  _this.grox = f3 = this.ingrid(f1, f2);
  _this.f5 = 2.5;
  _this.f6 = 2;
  if (_loc4_ > 0) {
    _loc5_ /= _loc4_;
    _loc6_ /= _loc4_;
    _loc5_ *= 10;
    _loc6_ *= 10;
    var _loc3_ = 0;
    while (_loc3_ < _loc4_) {
      f1 -= _loc5_;
      f2 -= _loc6_;
      pff3x1(this.ingrid(f1 + _this.f6, f2 + _this.f6));
      pff3x1(this.ingrid(f1 - _this.f6, f2 + _this.f6));
      pff3x1(this.ingrid(f1 - _this.f6, f2 - _this.f6));
      pff3x1(this.ingrid(f1 + _this.f6, f2 - _this.f6));
      _loc3_ += 10;
    }
  }
  return _this.f5 > 0;
}
function st11(f1) {
  _root.hud.st1.tex = f1;
  _root.hud.st1.gotoAndPlay(1);
  _root.hud.st1._visible = true;
}
function itn2(f1) {
  if (f1 >= 18 || f1 == 16) {
    return 40;
  }
  return 32;
}
function itn(f1) {
  if (f1 < 55) {
    return 32;
  }
  return 40;
}
function powerlevel() {
  _root.beenlev[_root.lev!] = 2;
  var _loc3_ = _root.fmode;
  if (!_this.highs.empty) {
    if (_this.fra - _this.lastcraf > 30) {
      _this.lastcraf = _this.fra;
      if (!(_root.lev == 35 && _root.chaps == 1 && _this.fra < 15)) {
        if (
          _this.highs.it == 12 ||
          _this.highs.it == 11 ||
          _this.highs.it == 71
        ) {
          _root.soundy("1up.wav");
        } else if (_this.highs.it == 92) {
          _root.soundy("band aid pick up.wav", 50);
        } else if (_root.lev == _root.bossl || _root.lev == _root.minb) {
          _root.soundy("Powerup2.mp", 50);
        } else if (_root.lev == _root.boner || _root.lev == _root.boner2) {
          _root.soundy("Powerup1.mp", 50);
        } else if (_root.lev == _root.shopl) {
          _root.soundy("Powerup3.mp", 50);
        } else {
          _root.soundy("Choir_unlock.wav", 50);
        }
      }
    }
  }
  _this.maxp = true;
  if (!_this.highs.empty && _this.fra - _this.lastcra >= 30) {
    if (_this.chama == 1 && _root.lev == _root.chamb) {
      _this.chama = 2;
    }
    st11(_root.st1[_this.highs.it]);
    st22(_root.st2x[_this.highs.it]);
    if (_this.highs.d._currentframe == 10) {
      var _loc2_ = _this.highs.d.d;
    } else {
      _loc2_ = _this.highs.d;
    }
    _this.highs.empty = true;
    for (let i in _root.ittt9) {
      if (_this.highs.it == _root.ittt9[i]) {
        _root.bookster = true;
      }
    }
    if (
      _this.highs.it == 22 ||
      _this.highs.it == 23 ||
      _this.highs.it == 24 ||
      _this.highs.it == 25 ||
      _this.highs.it == 26
    ) {
      _this.player.hp = _this.player.hp + 1;
    } else if (
      _this.highs.it == 12 ||
      _this.highs.it == 15 ||
      _this.highs.it == 16
    ) {
      _this.player.hp = 1000;
      if (_this.highs.it == 15) {
        hat(25);
      }
    }
    _root.ups[_this.highs.it]++;
    if (_this.highs.it == 54 || _this.highs.it == 21) {
      mapd();
    }
    if (!_this.gofind) {
      _root.colss[_this.highs.it] = true;
    }
    if (_this.highs != _this.player) {
      _this.highs.d.d.d.gotoAndPlay(21);
    }
    _this.player.d.gotoAndStop(4);
    _this.player.it = _this.highs.it;
    _this.player.d.d.d.gotoAndPlay(1);
    if (_this.highs.it == 7) {
      _root.fmode = 8;
      hat(7);
    } else if (_this.highs.it < 8) {
      _root.hmode = _root.fmode = 1 + _this.highs.it;
    }
    if (_this.highs.it == 27) {
      hat(27);
    }
    if (_this.highs.it == 81) {
      if (_root.skiner == 4) {
        _root.armor = 1;
      } else {
        _root.ups[23] += 1 - _this.player.mhp;
        _this.player.hp = 1;
      }
      _this.ups[23] = _root.ups[23];
    }
    if (_this.highs.it == 52) {
      _root.ittt.push(
        125,
        125,
        125,
        125,
        125,
        125,
        106,
        106,
        106,
        106,
        106,
        106
      );
    }
    if (_this.highs.it == 179) {
      eta();
    }
    if (_this.highs.it == 137) {
      if (_root.ups[137] == 1) {
        _root.bombs += 5;
      }
    } else if (_this.highs.it == 189) {
      _root.hmode = 42;
      _root.bmode = 27;
      _this.player.hp = _this.player.hp + 1;
    } else if (_this.highs.it == 190) {
      hat(58);
      _root.bombs = 99;
    } else if (_this.highs.it == 191) {
      _root.hmode = 44;
    } else if (_this.highs.it == 193) {
      hat(55);
      _this.player.hp = _this.player.hp + 1;
    } else if (_this.highs.it == 194) {
      _this.kogs = [5.3];
      hat(60);
    } else if (_this.highs.it == 195) {
      _this.kogs = [5.07, 5.07, 5.07, 5.07];
      hat(59);
    } else if (_this.highs.it == 196) {
      hat(56);
      _this.ogs = [5.010000003, 5.010000003];
    } else if (_this.highs.it == 197) {
      hat(57);
    } else if (_this.highs.it == 198) {
      _root.bmode = 26;
      _this.kogs = [5.35, 5.07, 5.02, 5.010000003, 5.3, 5.03, 5.04];
    } else if (_this.highs.it == 182) {
      _root.ups[3] = _this.ups[3] = 1;
      _root.hmode = 41;
      _root.armor = _root.armor + 1;
      _this.player.hp += 15;
    } else if (_this.highs.it == 183) {
      hat(53);
    } else if (_this.highs.it == 180) {
      _root.bmode = 24;
    } else if (_this.highs.it == 149) {
      if (!_this.ups[2]) {
        _this.ups[2] = _root.ups[2] = 0.5;
      }
    } else if (_this.highs.it == 168) {
      hat(50);
    } else if (_this.highs.it == 139) {
      _root.bmode = 20;
    } else if (_this.highs.it == 169) {
      _root.hmode = 40;
      if (!_this.ups[2]) {
        _this.ups[2] = _root.ups[2] = 0.3;
      }
      _root.fmode = 20;
    } else if (_this.highs.it == 155) {
      hat(47);
    } else if (_this.highs.it == 156) {
      hat(48);
    } else if (_this.highs.it == 161) {
      hat(49);
    } else if (_this.highs.it == 153) {
      hat(46);
      if (!_this.ups[2]) {
        _this.ups[2] = _root.ups[2] = 0.4;
      }
      _root.fmode = 23;
    } else if (_this.highs.it == 165) {
      hat(51);
    } else if (_this.highs.it == 176) {
      hat(52);
      _this.player.hp += 1.5;
    } else if (_this.highs.it == 154) {
      _root.hmode = 38;
    } else if (_this.highs.it == 143) {
      _root.hmode = 35;
    } else if (_this.highs.it == 159) {
      _this.sk = _root.sk = 7;
      _root.hmode = 39;
      _root.bmode = 22;
      _root.ups[115] = _this.ups[115] = 1;
    } else if (_this.highs.it == 157) {
      hat(41);
    } else if (_this.highs.it == 150) {
      _root.fmode = 24;
      hat(44);
    } else if (_this.highs.it == 151) {
      _root.hmode = 37;
      _root.fmode = 21;
    } else if (_this.highs.it == 148) {
      _root.bmode = 21;
      pilcol(40, 100, 40);
    } else if (_this.highs.it == 138) {
      hat(42);
      _this.player.hp = _this.player.hp + 1;
    } else if (_this.highs.it == 140) {
      _root.hmode = 34;
      _root.bombs += 5;
    } else if (_this.highs.it == 141) {
      hat(43);
      _this.cowss = 7;
    } else if (_this.highs.it == 125) {
      _root.bombs += 5;
    } else if (_this.highs.it == 134) {
      _root.bmode = 19;
    } else if (_this.highs.it == 118) {
      _this.sk = _root.sk = 7;
    } else if (_this.highs.it == 114) {
      _root.bmode = 15;
    } else if (_this.highs.it == 122) {
      _this.ups[122] = false;
    } else if (_this.highs.it == 116) {
      _root.itc = 1;
      hat(36);
    } else if (_this.highs.it == 132) {
      hat(39);
    } else if (_this.highs.it == 119) {
      _this.player.hp += 5;
      hat(35);
    } else if (_this.highs.it == 129) {
      _this.player.hp += 0.5;
      _root.bmode = 14;
    } else if (_this.highs.it == 115 || _this.highs.it == 185) {
      _root.hmode = 32;
      _root.ups[115] = _this.ups[115] = 1;
      _root.fmode = 18;
    } else if (_this.highs.it == 110) {
      hat(33);
    } else if (_this.highs.it == 109) {
      hat(34);
    } else if (_this.highs.it == 103) {
      _root.hmode = 26;
      _root.fmode = 15;
    } else if (_this.highs.it == 104) {
      _root.fmode = 16;
      hat(32);
    } else if (_this.highs.it == 106) {
      _root.hmode = 9;
      _root.bombs += 5;
    } else if (_this.highs.it == 101) {
      _this.player.hp = _this.player.hp + 1;
      hat(29);
    } else if (_this.highs.it == 59) {
      _root.hmode = 24;
    } else if (_this.highs.it == 29) {
      _root.bmode = 10;
    } else if (_this.highs.it == 46) {
      _root.bmode = 11;
    } else if (_this.highs.it == 64) {
      hat(26);
    } else if (_this.highs.it == 63) {
      hat(24);
    } else if (_this.highs.it == 92) {
      _root.armor += 2;
      _this.player.hp = _this.player.hp + 1;
      hat(23);
    } else if (_this.highs.it != 86) {
      if (_this.highs.it == 87) {
        hat(22);
      } else if (_this.highs.it != 88) {
        if (_this.highs.it == 89) {
          hat(20);
          _root.fmode = 14;
        } else if (_this.highs.it == 90) {
          hat(21);
        } else if (_this.highs.it == 91) {
          hat(19);
        } else if (_this.highs.it == 81) {
          _this.ups[81] = _root.ups[81] = 8;
          _root.catlives = 1;
        } else if (_this.highs.it == 82) {
          _root.hmode = 22;
          _this.sk = _root.sk = 7;
        } else if (_this.highs.it == 72) {
          _root.armor += 3;
          _root.ittt4.push(33, 33, 33);
          _root.bmode = 6;
        } else if (_this.highs.it == 79) {
          _root.armor += 1;
          hat(17);
        } else if (_this.highs.it == 80) {
          _root.armor += 2;
          _root.bmode = 8;
          _root.hmode = 20;
          _this.sk = _root.sk = 7;
        } else if (_this.highs.it == 20) {
          _root.bmode = 3;
        } else if (_this.highs.it == 13) {
          _root.bmode = 4;
          _root.hmode = 12;
        } else if (_this.highs.it == 14) {
          _root.hmode = 11;
        } else if (_this.highs.it == 59) {
          _root.fmode = 11;
        } else if (_this.highs.it == 31) {
          _root.hmode = 13;
        } else if (_this.highs.it == 30) {
          _root.bmode = 5;
        } else if (_this.highs.it == 21 || _this.highs.it == 54) {
          mapd();
        } else if (_this.highs.it == 9) {
          hat(9);
        } else if (_this.highs.it == 69) {
          _root.hmode = 17;
        } else if (_this.highs.it == 55) {
          _root.hmode = 18;
        } else if (_this.highs.it == 76) {
          hat(13);
        } else if (_this.highs.it == 75) {
          _this.player.hp += 2;
          hat(15);
        } else if (_this.highs.it == 32) {
          hat(16);
        } else if (_this.highs.it == 28) {
          _root.bmode = 7;
        }
      }
    }
    if (_this.highs.it == 48) {
      _root.fmode = 10;
    }
    if (
      (_this.highs.it >= 33 &&
        _this.highs.it != 46 &&
        _this.highs.it != 48 &&
        _this.highs.it < 50) ||
      _this.highs.it == 56 ||
      _this.highs.it == 58 ||
      _this.highs.it == 65 ||
      _this.highs.it == 66 ||
      _this.highs.it == 77 ||
      _this.highs.it == 78 ||
      _this.highs.it == 83 ||
      _this.highs.it == 84 ||
      _this.highs.it == 85 ||
      _this.highs.it == 86 ||
      _this.highs.it == 93 ||
      _this.highs.it == 97 ||
      _this.highs.it == 102 ||
      _this.highs.it == 105 ||
      _this.highs.it == 107 ||
      _this.highs.it == 111 ||
      _this.highs.it == 123 ||
      _this.highs.it == 124 ||
      _this.highs.it == 126 ||
      _this.highs.it == 127 ||
      _this.highs.it == 130 ||
      _this.highs.it == 133 ||
      _this.highs.it == 135 ||
      _this.highs.it == 136 ||
      _this.highs.it == 137 ||
      _this.highs.it == 145 ||
      _this.highs.it == 146 ||
      _this.highs.it == 147 ||
      _this.highs.it == 158 ||
      _this.highs.it == 164 ||
      _this.highs.it == 160 ||
      _this.highs.it == 166 ||
      _this.highs.it == 171 ||
      _this.highs.it == 175 ||
      _this.highs.it == 177 ||
      _this.highs.it == 181 ||
      _this.highs.it == 186 ||
      _this.highs.it == 192 ||
      _this.highs.it == 177
    ) {
      _root.ups[_this.highs.it] = 1;
      _this.itb = 15;
      _root.hud.it.gotoAndStop(8);
      _root.colit = _this.highs.it;
      _root.iter[_root.it!] = _root.itc;
      if (_root.it! > 0) {
        if (_root.it == 90) {
          _this.player.flyby = false;
        }
        _this.highs.d.gotoAndStop(10);
        _loc2_ = _this.highs.d.d;
        _loc2_.d.gotoAndPlay(1);
        _this.f11 = _root.it! + itn2(_root.it);
        _loc2_.d.d.gotoAndStop(_this.f1);
        _root.it = _this.highs.it - itn(_this.highs.it);
        _this.highs.it = _this.f11;
        _this.highs.empty = false;
        _this.highs.done = false;
        _this.highs.dones = false;
        _this.highs.d.d.d.d.gotoAndStop(_this.highs.it);
      } else {
        _root.it = _this.highs.it - itn(_this.highs.it);
      }
      if (_root.it != 11) {
        _root.itc = _root.iter[_root.it];
        if (_this.ups[116]) {
          _root.itc = Math.max(0.334, _root.itc);
        }
      }
    } else {
      if (_this.highs.d._currentframe != 10 && _this.highs.s == 5) {
        _this.highs.d.gotoAndStop(11);
      }
      _root.cols.push(_this.highs.it);
      if (!itzz(_this.highs.it) && !_this.satan) {
        _root.wiptz = _root.wiptz + 1;
      }
      if (
        _this.highs.it == 165 ||
        _this.highs.it == 183 ||
        _this.highs.it == 143 ||
        _this.highs.it == 194
      ) {
        _root.wiptz -= 0.75;
      }
      if (
        _this.highs.it == 114 ||
        _this.highs.it == 168 ||
        _this.highs.it == 182 ||
        _this.highs.it == 52 ||
        _this.highs.it == 118
      ) {
        _root.wiptz += 0.3;
      }
    }
    if (_this.highs.it >= 50 && _this.highs.it < 54) {
      hat(_this.highs.it - 48);
    } else {
      switch (_this.highs.it) {
        case 19:
          _root.bombs += 10;
          hat(30);
          break;
        case 17:
          _root.keys = 99;
          hat(14);
          break;
        case 18:
          _root.coins = 99;
          break;
        case 74:
          _root.coins += 25;
      }
    }
    if (_this.highs.it == 48) {
      hat(6);
    }
    if (_this.highs.it == 70) {
      hat(8);
    }
    if (_this.highs.it == 62) {
      _root.hmode = 15;
    }
    if (_this.highs.it == 69) {
      _root.fmode = 13;
    }
    _this.lastcra = _this.fra;
    if (_this.highs != _this.player) {
      if (_this.highs.d._currentframe == 10) {
        _this.highs.dones = false;
      } else {
        _this.highs.done = true;
      }
    }
    if (
      _root.ups[4] +
        _root.ups[38] +
        _root.ups[42] +
        Math.max(0, _root.ups[81]) >=
      1.1
    ) {
      _root.locker[40] = true;
    }
    if (_root.ups[13] + _root.ups[14] + _root.ups[70] >= 2) {
      _root.locker[37] = true;
    }
    if (
      _root.ups[55] &&
      _root.ups[31] +
        _root.ups[30] +
        _root.ups[39] +
        _root.ups[41] +
        _root.ups[102] +
        _root.ups[114] +
        _root.ups[139] +
        _root.ups[165] >=
        1
    ) {
      _root.locker[47] = true;
    }
  } else {
    _this.highs.dones = false;
  }
  _this.nohit = false;
  if (_root.fmode != _loc3_) {
  }
  _this.ups[_this.highs.it] = _root.ups[_this.highs.it];
  if (_this.highs.it == 54 || _this.highs.it == 21) {
    mapd();
  }
}
function invp() {
  _this.player._visible = false;
  for (let e in _this.ball) {
    _this.trg2 = _this.ball[e];
    if (_this.trg2.s <= 3) {
      _this.trg2._visible = false;
    }
  }
}
function st22(f1) {
  if (f1 != 0) {
    _root.st2._visible = f1 != 0;
    _root.st2.gotoAndPlay(1);
    _root.st2.tex = f1;
    f1 = f1.split("");
    _root.st2._x = 620 - f1.length * 10;
  }
}
function frez(trg) {
  if (trg.frezz < 0 || !trg.frezz) {
    trg.frezz = 70;
    if (trg.s == 102) {
      trg.frezz = 25;
    }
    trg.uncol = Math.round(_this.fra + trg.freez + 1);
    this.speco(trg);
  }
}
function spida(f1, trg) {
  if (f1) {
    trg.spida = 2;
  } else {
    trg.spida = 1;
  }
  if (f1 == undefined) {
    trg.spid = 120;
  } else {
    trg.spid = 60;
  }
  trg.uncol = Math.round(_this.fra + trg.spid);
  this.speco(trg);
}
function spidcol(trg) {
  if (
    _this.ups[110] &&
    !_this.lows.ba &&
    random(5) == 0 &&
    !trg.mom &&
    trg.s != 84
  ) {
    if (trg.mag) {
      for (let z in trg.mags) {
        frez(trg.mags[z]);
      }
    }
    if (trg.worm == 6) {
      for (let z in _this.worm) {
        frez(_this.worm[z]);
      }
    } else if (!trg.worm) {
      frez(trg);
    }
    if (trg.s == 19) {
      let trg2 = trg;
      while (trg2.trg2) {
        trg2 = trg2.trg2;
        frez(trg2);
      }
      trg2 = trg;
      while (trg2.trg3) {
        trg2 = trg2.trg3;
        frez(trg2);
      }
    }
  }
  if (_this.ups[151] || _this.purr) {
    if (
      (!_this.lows.ba && random(6) == 0) ||
      (_this.purr &&
        _this.bluf < 1 &&
        _this.ball.length < 30 &&
        (random(3) == 0 || !_this.ups[152]))
    ) {
      if (Math.random() * _this.ablub < 5 || random(3) == 0) {
        _this.bluf++;
      }
    }
  }
  _this.blufer = trg;
  if (
    (_this.ups[103] && !_this.lows.ba && random(4) == 0) ||
    _this.lows.trixer == 1
  ) {
    if (trg.poiss > 20) {
      trg.poiss += 40;
    } else {
      trg.poiss = 60;
    }
    if (_this.lows.trixer == 1) {
      trg.poisd = 4;
    } else {
      trg.poisd = 2;
    }
    trg.uncol = Math.round(_this.fra + 60);
    this.speco(trg);
  }
  if (
    (_this.ups[89] && random(4) == 0) ||
    (_this.lows.ba == 3 && random(2) == 0) ||
    _this.lows.trixer == 3
  ) {
    spida(_this.lows.ba == 3 || _this.lows.trixer == 3, trg);
  }
}
function eta() {
  _root.soundy("superholy.wav", 100);
  _root.eta = !_root.eta;
  if (!_root.eta) {
    _this.player.hp = _this.player.hp + 1;
    _this.ups[22] = _this.ups[22] + 1;
    _root.eto = _root.eto + 1;
    _root.over.gotoAndStop(16);
    _root.ups[22] = _this.ups[22];
  }
}
function junx() {
  if (_root.junxx.length > 0) {
    if (_this.poli) {
      _this.poli = false;
      return 47;
    }
    if (_this.trg.gold) {
      return 52;
    }
    _this.f1 = random(_root.junxx.length);
    var _loc2_ = _root.junxx[_this.f1] * 1;
    _root.junxx.splice(_this.f1, 1);
    return _loc2_;
  }
  return tater();
}
function tater() {
  if (random(5) != 0) {
    return random(22) + 7;
  }
  return random(5) + 70;
}
function pillc(trg) {
  var _loc3_ = false;
  if (trg > 7) {
    _this.f2 = trg;
  } else if (trg == 4) {
    _this.f2 = random(6) + 1;
  } else if (trg == 3) {
    _this.f2 = tater();
  } else {
    _this.f2 = trg.col;
  }
  let f1: any = _root.pilc! > 0; //which conext? ???
  let f3 = _this.f2 > 28 && _this.f2 < 69;
  if (f3) {
    if (!trixx(_this.f2) && (!trixx(53) || _this.ups[139])) {
      _this.player.pilc = pic(_this.f2);
      //quick fix
      f1 = [
        "Fish Head",
        "Pinky Eye",
        "Push Pin",
        "Liberty Cap",
        "Umbilical Cord",
        "Childs Heart",
        "Curved Horn",
        "Rusted Key",
        "Goat Hoof",
        "Moms Pearl",
        "Cancer",
        "Red Patch",
        "Match Stick",
        "Lucky Toe",
        "Cursed Skull",
        "Safety Cap",
        "Ace of Spades",
        "Isaacs Fork",
        "The Polaroid",
        "A Missing Page",
        "Bloody Penny",
        "Burnt Penny",
        "Flat Penny",
        "Counterfeit Penny",
        "Tick",
        "Isaacs Head",
        "Maggys Faith",
        "Judas' Tongue",
        "???'s Soul",
        "Samsons Lock",
        "Cains Eye",
        "Eves Bird Foot",
        "The Left Hand",
        "Game Squid",
      ];
      f1 = f1[Math.max(0, _this.f2 - 29)];
      st11(f1);
      _root.atrixer = _root.trixer;
      _root.trixer = f1;
      _root.soundy("shellgame" + random(2) + ".wav");
      if (_this.ups[139]) {
        f1 = _root.atrix! > 0;
      } else {
        f1 = _root.trix! > 0;
      }
      if (_this.f2 == 53) {
        hat(61);
      }
    } else {
      _loc3_ = true;
      trg.dones = false;
      trg.fra = _this.fra + 10;
    }
  } else if (_this.f2 < 7) {
    _this.player.pilc = pic(_this.f2);
    st11("Pills here!");
    _root.soundy("shellgame" + random(2) + ".wav");
    _root.colss[43] = true;
  } else {
    _this.player.pilc = pic(_this.f2);
    _root.colss[61] = true;
    this.tart(_this.f2);
    _root.soundy("Book Page Turn 12.wav", 100);
  }
  if (!_loc3_) {
    if (f1) {
      if (!f3) {
        f1 = _root.pilc!;
        _root.pilc = _this.f2;
      } else if (!_this.ups[139]) {
        f1 = _root.trix;
        _root.trix = _this.f2;
      } else {
        f1 = _root.atrix;
        _root.atrix = _root.trix;
        _root.trix = _this.f2;
      }
      if (trg == 3 || trg == 4) {
        trg = spaw(_this.player.xp, _this.player.yp, 0, 5.3);
      }
      trg.d.gotoAndStop(7);
      trg.col = f1;
      trg.dones = false;
      trg.done = false;
      trg.fra = _this.fra + 10;
      trg.d.d.gotoAndStop(3);
      if (_this.highs.yp > 0) {
        trg.ybew -= (0 - Math.min(_this.player.yp - _this.highs.yp, 0)) * 0.5;
      }
    } else {
      if (trg == 3 || trg == 4) {
        _this.pilll = true;
      }
      if (f3) {
        if (_this.ups[139]) {
          _root.atrix = _root.trix;
        }
        _root.trix = _this.f2;
      } else {
        _root.pilc = _this.f2;
      }
      trg.d.d.gotoAndStop(2);
    }
    if (_root.atrix == 53) {
      _root.atrix = _root.trix;
      _root.trix = 53;
      _root.atrixer = _root.trixer;
      _root.trixer = "Tick";
    }
    if (!f3) {
      _root.hud.pilll.gotoAndStop(2);
    } else {
      _root.hud.plix.gotoAndStop(2);
    }
    _this.player.d.gotoAndStop(4);
    _this.player.it = 43;
    _this.player.d.d.d.gotoAndPlay(1);
  }
}
function coincol(trg) {
  if (trg.col == 1) {
    _root.soundy("pennypickup.mp");
    return 1;
  }
  if (trg.col == 2) {
    st22("a Nickel");
    _root.soundy("nickelpickup.mp");
    return 5;
  }
  st22("a Dime");
  _root.soundy("dimepickup.wav");
  return 10;
}
function ader(f1) {
  var _loc2_ = false;
  if (
    _root.chaps > 6 &&
    _this.player.hp < 1 &&
    _root.armor > 0 &&
    _this.player.mhp > 0
  ) {
    _root.armor -= 0.5;
    _this.player.hp += 0.5;
    _loc2_ = true;
  }
  if (_this.player.hp > 0.5 || _root.armor <= 0) {
    let f11 = _root.armor;
    _root.armor = 0;
    playerhurt(0.5, 201, f11 > 0);
    _root.armor = f11;
  } else {
    this.playerhurt(0.5, 201);
  }
  if (_loc2_ && _this.player.hp >= 1) {
    _root.armor += 0.5;
    _this.player.hp -= 0.5;
  }
  _root.so.data.pill = _root.so.data.pill + 1;
  if (_root.so.data.pill > 20) {
    _root.locker[36] = true;
  }
  if (!f1) {
    _root.soundy("bloodbank touched.wav", 90);
  }
}
function coinzz(b1) {
  if (
    _this.lasth - _this.fra < 0 &&
    _this.player._visible &&
    _this.telf == undefined &&
    _this.playsave < 0 &&
    _this.unic < 0 &&
    _this.player._currentframe != 6 &&
    _this.horse! <= 0 &&
    _this.dec! <= 0
  ) {
    if (b1 && random(3) != 0) {
      _this.coinl = 3 + random(2);
    } else {
      _this.coinl = true;
    }
  }
}
function balljunk() {
  if (_this.highs.s == 51) {
    if (_this.lows.s == 51) {
      if (
        _this.lows.tier == _this.highs.tier &&
        !_this.highs.done &&
        !_this.lows.done &&
        _this.lows.tier > 0
      ) {
        if (
          _this.lows.fra < _this.fra - 125 ||
          _this.highs.fra < _this.fra - 125
        ) {
          if (_this.lows.eternal) {
            _this.f1 = _this.highs;
            _this.highs = _this.lows;
            _this.lows = _this.f1;
          }
          if (_this.highs.eternal) {
            if (_this.combis++ < 20) {
              _this.highs.tier--;
              _this.highs.hp += _this.lows.hp + 50;
              _this.highs.xp = (_this.highs.xp + _this.lows.xp) / 2;
              _this.highs.yp = (_this.highs.yp + _this.lows.yp) / 2;
              if (_this.highs.tier == 0) {
                _this.highs.d.gotoAndStop(1);
              } else {
                _this.highs.d.gotoAndStop(4 + _this.highs.tier);
              }
              _this.lows.done = true;
            }
          }
        }
      }
    }
  }
  if ((_this.lows.s == 14 || _this.lows.s == 18) && _this.highs.s == 36) {
    _this.nohit = true;
    _this.lows.xbew += _this.xenf * 0.01;
    _this.lows.ybew += _this.yenf * 0.01;
  }
  if (_this.highs.s == 4) {
    if (_this.lows.fly || _this.lows.ang || _this.lows.meat < 3) {
      _this.nohit = true;
    }
  }
  if (_this.lows.s == 30 && _this.highs.s == 30) {
    _this.highs.dones = true;
    _this.nohit = true;
  }
  if (_this.lows.s == 30 && _this.highs.s == 36) {
    _this.nohit = true;
  }
  if (
    _this.lows.fly ||
    _this.lows.meat ||
    _this.lows.bird ||
    _this.lows.charge ||
    _this.lows.ang
  ) {
    switch (_this.highs.s) {
      case 9:
      case 13:
      case 14:
      case 18:
        _this.highs.dones = true;
        if (_root.hardmode) {
          if (_this.lows.hpo > -1) {
            if (_this.lows.hpo-- < 1) {
              _this.lows.done = true;
              break;
            }
            break;
          }
          break;
        }
    }
  } else if (_this.lows == _this.player && !_this.nohit) {
    _this.dodo = false;
    switch (_this.highs.s) {
      case 53:
        _this.nohit = true;
        break;
      case 33:
        _this.nohit = true;
      case 31:
      case 32:
      case 24:
      case 28:
      case 45:
      case 46:
      case 47:
      case 48:
      case 49:
      case 50:
      case 52:
      case 68:
      case 57:
      case 62:
      case 63:
      case 64:
      case 65:
      case 66:
      case 69:
      case 71:
      case 74:
      case 75:
      case 76:
      case 55:
      case 58:
      case 59:
      case 57:
      case 81:
      case 82:
      case 83:
      case 84:
        if (_this.freez <= 0) {
          _this.dodo = true;
        }
        if (_this.highs.s == 62 && _this.altboss) {
          _this.dodo = false;
        }
        if (_this.highs.s == 62 && _this.highs.dy < -30) {
          _this.nohit = true;
          break;
        }
      case 78:
        if (!_this.highs.eternal && _this.highs.s == 78) {
          break;
        }
      case 10:
      case 11:
      case 12:
      case 15:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 25:
      case 23:
      case 26:
      case 29:
      case 34:
      case 35:
      case 36:
      case 26.5:
      case 38:
      case 39:
      case 40:
      case 41:
      case 43:
      case 44:
      case 51:
      case 54:
      case 56:
      case 60:
      case 61:
      case 67:
      case 72:
      case 73:
      case 75:
      case 76:
      case 77:
      case 79:
      case 80:
      case 96:
      case 86:
      case 85:
      case 94:
      case 87:
      case 88:
      case 93:
      case 89:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
        if (_this.highs.s == 85 || _this.highs.s == 94) {
          _this.highs.xpp = undefined;
          _this.highs.still = _this.fra + 10;
        }
        if (_this.highs.s == 86 || _this.highs.s == 50 || _this.highs.s == 90) {
          coinzz(_this.highs.eternal);
        }
        if (_this.highs.s == 9 && _this.highs.doub) {
          _this.dodo = true;
        }
        if (_this.highs.s == 85 || _this.highs.s == 94) {
          _this.highs.ypp = _this._loc0_ = undefined;
          _this.highs.xpp = _this._loc0_;
          _this.highs.xbew *= 0.6;
          _this.highs.ybew *= 0.6;
        }
        if (_this.highs.s == 99) {
          _this.pub = true;
        }
        _this.dodo =
          _this.dodo ||
          _this.highs.special ||
          _this.trg.specoz == 7 ||
          _this.trg.specoz == 2;
        if (_this.freez <= 0 && _this.horse! <= 0) {
          if (_this.dodo) {
            this.playerhurt(1, _this.highs.s);
          } else {
            this.playerhurt(0.5, _this.highs.s);
          }
        }
        if (
          _this.highs.sss == 100 ||
          (_this.highs.sss == 101 && _this.altboss)
        ) {
          _this.playslow = 20;
        }
        if (_this.highs.die) {
          _this.highs.dones = true;
        }
      case 13:
      case 14:
      case 27:
      case 30:
      case 16:
        if (
          (_this.ups[13] ||
            _this.unic > 0 ||
            _this.demon > 0 ||
            _this.horse! > 0) &&
          _this.highs.aidsdone <= _this.fra
        ) {
          _this.highs.aidsdone = _this.fra + 30;
          if (_this.horse! > 0) {
            _this._this.nohit = true;
          }
          if (_this.ups[13]) {
            _this.highs.poiss = 60;
            _this.highs.poisd = 3.5;
            hurt(_this.highs, 30);
          } else {
            hurt(_this.highs, 40);
          }
        }
    }
  }
  if (_this.highs.s == 4) {
    if (_this.fra - _this.highs.lfra < 4) {
      _this.nohit = true;
      _this.highs.lfra = _this.fra;
    } else {
      _this.highs.xbew += _this.lows.xbew * 0.4;
      _this.highs.ybew += _this.lows.ybew * 0.4;
    }
  }
  if (_this.lows.s == 4 && _this.highs.s != 62) {
    if (!_this.lows.flir) {
      _this.lows.xbew *= 0.5;
      _this.lows.ybew *= 0.5;
    }
    _this.highs.xbew *= 0.2;
    _this.highs.ybew *= 0.2;
    if (_this.highs.s == 85 || _this.highs.s == 94) {
      _this.highs.dones = true;
    }
  }
  if (_this.highs.s == 44 && _this.lows.s != 44) {
    if (_this.highs.s != 69) {
      hurt(_this.lows, 20);
    }
  }
  if (
    _this.highs.s == 66 &&
    _this.highs.horse &&
    _this.lows.s != 66 &&
    _this.lows.s != 27
  ) {
    hurt(_this.lows, 20);
  }
  if (_this.highs.s == 66 && _this.lows.s == 66) {
    if (_this.highs.horse && _this.lows.sic) {
      hurt(_this.lows, 20);
    } else if (_this.lows.horse && _this.highs.sic) {
      hurt(_this.highs, 20);
    }
  }
  if (
    _this.highs.s == 65 &&
    _this.highs.d._currentframe == 8 &&
    _this.lows.s != 65
  ) {
    if (_this.fra - _this.lows.fra > 10) {
      hurt(_this.lows, 20);
      hurt(_this.lows, 20);
    } else {
      _this.nohit = true;
    }
  }
  if (
    _this.highs.s == 45 &&
    _this.lows.s != 45 &&
    _this.fra - _this.lows.fra > 10
  ) {
    hurt(_this.lows, 20);
  }
  if (_this.lows.s == 44 && _this.highs.s != 44) {
    hurt(_this.highs, 20);
  }
  if (_this.highs.s == 63 && _this.highs.d._currentframe == 7) {
    hurt(_this.lows, 20);
  }
  if (_this.highs.s == 99 && _this.highs.d._currentframe > 7) {
    if (_this.lows.s == 14 || _this.lows.s == 85) {
      hurt(_this.lows, 20);
    }
  }
  if (_this.highs.s == 28 && _this.highs.mags[1].mode == 2) {
    if (_this.lows.s == 23 || _this.lows.s == 85) {
      hurt(_this.lows, 20);
    }
    if (_this.highs.mag == 1 && _this.lows.s == 4) {
      _root.soundy("SMB_large_chews_4.wav");
      _this.lows.done = true;
      _this.highs.mode = 4;
      _this.highs.bomb = 0;
      _this.nohit = true;
    }
  }
  if (_this.lows == _this.player && _this.highs.s == 5 && !_this.highs.dones) {
    if (_root.keys >= 1 || _root.kep || _this.highs.d._currentframe != 6) {
      _this.nohit = true;
      if (_root.hardmode) {
        if (random(Math.max(10 + _root.luck, 1)) == 0) {
          if (
            _this.highs.d._currentframe == 4 &&
            (_this.highs.col == 1 || _this.highs.col == 2)
          ) {
            _this.highs.dones = false;
            _this.highs.d.d.d.d.d.gotoAndStop(3);
            if (_this.highs.col == 2) {
              _this.highs._yscale *= 0.75;
              _this.highs._xscale = _this._loc0_;
              _root.bombs += 1;
            }
            _this.highs.col = 3;
            _this.nohit = false;
          }
        }
      }
      if (
        _this.highs.d._currentframe < 7 &&
        ((_this.highs.col != 3 && _this.highs.col != 5) ||
          _this.highs.d._currentframe != 4)
      ) {
        if (_this.highs.c2) {
          _this.highs.d.d.gotoAndStop(6);
        } else {
          _this.highs.d.d.gotoAndStop(2);
        }
      }
      _this.highs.dones = true;
      switch (_this.highs.d._currentframe) {
        case 34:
          if (_root.chaps == 9 && _root.altchap && trixx(47)) {
            if (_this.beamer <= 0) {
              _this.beamer = 1;
              _root.chaps = 11;
            }
          } else if (_root.heaven && _root.chaps != 11) {
            if (_this.beamer <= 0) {
              _root.heaven = 2;
              _this.beamer = 1;
            }
          } else {
            _root.levz = undefined;
            moveon();
            _root.door = undefined;
            if (_root.chaps == 11) {
              _this.f1 = 24;
            } else if (_root.chaps == 9 && _root.altchap) {
              _this.f1 = 23;
            } else {
              _this.f1 = Math.min(9 + _root.so.data.wins, 21);
              if (_this.f1 == 20) {
                _this.f1 = 21;
              }
              if (_root.chaps == 9) {
                _this.f1 = 22;
              }
            }
            _root.gotoAndStop(_this.f1);
            _this.highs.dones = false;
            _this.nohit = false;
          }
          break;
        case 1:
          if (_this.highs.col == 4) {
            eta();
          } else if (_this.highs.col == 3) {
            _root.armor = _root.armor + 1;
          } else if (_this.player.hp < _this.player.mhp) {
            if (_this.highs.col != 2) {
              _this.player.hp = _this.player.hp + 1;
              _this.red = 7;
            } else {
              _this.player.hp += 0.5;
              _this.red = 5;
            }
          } else {
            _this.nohit = false;
            _this.highs.dones = false;
            _this.highs.d.d.gotoAndStop(1);
          }
          if (_this.highs.col == 4) {
            _root.soundy("superholy.wav", 100);
          } else if (_this.highs.col == 3) {
            _root.soundy("Holy.mp", 100);
          } else if (_this.nohit) {
            _root.soundy("boss2_bubbles" + random(2) + ".wav", 100);
          }
          break;
        case 2:
          _root.coins += coincol(_this.highs);
          if (trixx(49) && random(2) == 0) {
            _this.kogs.push(5.010000002);
          }
          if (trixx(50) && random(2) == 0) {
            _this.kogs.push(5.040000001);
          }
          if (trixx(51) && random(2) == 0) {
            _this.kogs.push(5.03);
          }
          if (trixx(52) && random(2) == 0) {
            _root.coins = _root.coins + 1;
          }
          break;
        case 3:
          if (_this.highs.col == 2) {
            _root.kep = true;
            _root.soundy("goldenkey.wav", 100);
          } else {
            _root.keys = _root.keys + 1;
            _root.soundy("KeyPickup_Gauntlet.wav", 85);
          }
          break;
        case 4:
          if (_this.highs.col == 3 || _this.highs.col == 5) {
            _this.nohit = false;
            _this.highs.dones = false;
            if (!_this.highs.troll) {
              _this.highs.troll = true;
              st22("Trolololol");
            }
          } else if (_this.highs.col != 2) {
            _root.bombs = _root.bombs + 1;
          } else {
            _root.bombs += 2;
            st22("1 + 1 free");
          }
          if (_this.nohit) {
            _root.soundy("fetus_feet" + random(2) + ".wav", 100);
          }
          break;
        case 5:
          if (!_this.highs.empty && _this.chestopen == undefined) {
            _root.soundy("Chest_Open.mp", 100);
            _this.chestopen = _this.highs;
          }
          _this.nohit = false;
          _this.highs.dones = false;
          break;
        case 6:
          if (
            (_root.keys >= 1 || _root.kep) &&
            !_this.highs.empty &&
            _this.chestopen == undefined
          ) {
            _root.soundy("Unlock00.wav", 100);
            if (!_root.kep) {
              _root.keys = _root.keys - 1;
            }
            _this.chestopen = _this.highs;
            _root.soundy("Chest_Open.mp", 100);
          }
          _this.nohit = false;
          _this.highs.dones = false;
          break;
        case 7:
          if (_this.fra - _this.highs.fra > 0) {
            pillc(_this.highs);
          } else {
            _this.highs.dones = false;
            _this.highs.fra = _this.fra + 10;
          }
          break;
        case 8:
          if (_this.highs.col == 31) {
            if (!_this.highs.spin && !_this.highs.busted) {
              this.ader();
              _this.highs.d.d.gotoAndStop(37);
              _this.highs.spin = true;
              _this.lastspin = _this.fra + 100;
              _this.highs.wtf = false;
            }
          } else if (_this.highs.col == 1) {
            if (!_this.highs.spin && !_this.highs.busted) {
              this.ader();
              _this.highs.d.d.gotoAndStop(33);
              _this.highs.d.d.d.gotoAndPlay(1);
              _this.highs.spin = true;
              _this.lastspin = _this.fra + 100;
              _this.highs.wtf = false;
            }
          } else {
            if (_this.highs.col == 10) {
              if (_this.highs.spin && _this.highs.d.d.d._currentframe > 110) {
                if (Math.abs(_this.xenf) < 13) {
                  _this.highs.d.d.gotoAndStop(44);
                } else if (_this.highs.xp > _this.lows.xp) {
                  _this.highs.d.d.gotoAndStop(43);
                } else {
                  _this.highs.d.d.gotoAndStop(45);
                }
                _this.highs.wtf = false;
                _this.lastspin = _this.fra + 15;
              }
            }
            if (
              _root.coins >= 1 &&
              !_this.highs.spin &&
              !_this.highs.busted &&
              (_this.highs.col != 10 || _this.highs.yp - _this.lows.yp < 0)
            ) {
              _root.coins = _root.coins - 1;
              if (_this.highs.col == 10) {
                _this.highs.d.d.gotoAndStop(42);
                _this.highs.itt = random(4);
                if (random(13) == 0 && !_this.ups[9]) {
                  _this.highs.itt = 5;
                }
              } else if (_this.highs.col > 1 && _this.highs.col < 10) {
                _this.highs.d.d.gotoAndStop(37);
              } else {
                _root.soundy("Coin_Slot.mp", 100);
                _this.highs.d.d.gotoAndStop(2);
              }
              _this.highs.spin = true;
              _this.lastspin = _this.fra + 100;
            }
          }
          _this.highs.dones = false;
          _this.nohit = false;
          break;
        case 9:
          if (
            _this.highs.d.d._currentframe > 10 &&
            _this.highs.d.d._currentframe < 24 &&
            _this.highs.open
          ) {
            _this.player._visible = false;
            _this.plxxx = _this.highs.xp;
            _this.plyyx = _this.highs.yp;
            _this.highs.d.d.gotoAndPlay(25);
          }
          _this.highs.dones = false;
          break;
        case 15:
          let f1: any = [0, 3, 5, 5, 15, 2, 3, 3, 7, 1, 2, 3, 5, 5, 0, 0, 3, 3];
          f1 = f1[_this.highs.d.d._currentframe];
          if (
            (_root.coins >= f1 && !_this.satan) ||
            (_this.satan &&
              (_root.armor >= 3 || _this.highs.d.d._currentframe != 11))
          ) {
            if (_this.satan) {
              _root.evs = _root.evs + 1;
              if (_root.evs > 1) {
                _root.locker[54] = true;
              }
              if (f1 == 3) {
                _this.lasth = -100;
                _root.armor += 0.5;
                this.playerhurt(3, 200);
                _root.armor -= 0.5;
                _this.player.d.gotoAndStop(4);
              } else {
                _root.armor += 1;
                this.playerhurt(1, 200);
                _root.ups[22] -= f1;
                _this.ups[22] = _root.ups[22];
                _this.lasth = -100;
                _this.player.mhp -= f1;
                _this.player.d.gotoAndStop(4);
                if (_this.player.mhp < 0 && _this.highs.it != 81) {
                  _root.armor = 0;
                  this.playerhurt(100, 200);
                }
              }
              _this.lastcra = -100;
              _root.mmus = _root.soundy("isaacsatanitemget.mp", 100);
              _this.plffff = _this.player.d._currentframe;
            } else {
              _root.coins -= f1;
            }
            _this.highs.done = true;
            switch (_this.highs.d.d._currentframe) {
              case 12:
              case 16:
                _root.keys = _root.keys + 1;
                _root.soundy("KeyPickup_Gauntlet.wav", 85);
                _this.player.d.gotoAndStop(4);
                _this.player.it = 202;
                break;
              case 13:
              case 17:
                _root.armor = _root.armor + 1;
                _root.soundy("Holy.mp", 100);
                _this.player.d.gotoAndStop(4);
                _this.player.it = 203;
                break;
              case 1:
              case 5:
                _root.soundy("boss2_bubbles" + random(2) + ".wav", 100);
                _this.player.hp = _this.player.hp + 1;
                _this.player.d.gotoAndStop(4);
                _this.player.it = 200;
                break;
              case 3:
              case 7:
                pillc(_this.highs);
                break;
              case 2:
              case 6:
                _root.bombs = _root.bombs + 1;
                _root.soundy("fetus_feet" + random(2) + ".wav", 100);
                _this.player.d.gotoAndStop(4);
                _this.player.it = 201;
                break;
              case 4:
              case 8:
              case 9:
              case 10:
              case 11:
                powerlevel();
            }
            if (_this.satan && _this.player.hp <= 0) {
              _this.player.d.gotoAndStop(_this.plffff);
            }
          } else {
            _this.highs.dones = false;
          }
          break;
        case 10:
          powerlevel();
          if (_root.chamb == _root.lev && _this.highs.empty) {
            _this.highs.dones = true;
          }
      }
    }
  }
}
function ballhit(e, a) {
  _this.trg = _this.ball[e];
  _this.trg2 = _this.ball[a];
  if (_this.trg.s != 2 || _this.trg2.s != 2) {
    let f1 = Math.max(e, a);
    let f2 = Math.min(e, a);
    if (_this.tests.getPixel(f1, f2) == 0) {
      _this.tests.setPixel(f1, f2, 1);
      _this.nohit = false;
      if (_this.trg.s > _this.trg2.s) {
        _this.lows = _this.trg2;
        _this.highs = _this.trg;
      } else {
        _this.lows = _this.trg;
        _this.highs = _this.trg2;
      }
      if (_this.highs.s == 28 && _this.lows.s == 28) {
        _this.nohit = true;
      }
      if (_this.lows.s == 5 && _this.highs.s != 5) {
        _this.nohit = true;
      }
      if (_this.highs.s < 4) {
        _this.nohit = true;
      }
      if (_this.highs.s == 5 && _this.lows != _this.player) {
        _this.nohit = true;
      }
      if (
        _this.lows.s == 9 ||
        (_this.highs.s == 9 &&
          ((_this.lows != _this.player &&
            !_this.lows.fly &&
            !_this.lows.meat &&
            !_this.lows.ang &&
            !_this.lows.bird) ||
            _this.lows.ni))
      ) {
        _this.nohit = true;
      }
      if (
        _this.lows.outway ||
        (_this.highs.outway &&
          _this.lows != _this.player &&
          _this.lows.s != 2 &&
          !_this.lows.damger &&
          _this.lows.s != 4)
      ) {
        _this.nohit = true;
      }
      if (
        (_this.lows.s == 44 && _this.highs.outway) ||
        (_this.highs.s == 44 && _this.lows.outway)
      ) {
        _this.nohit = false;
      }
      if (_this.lows.s == 44 && _this.highs.s == 69) {
        _this.nohit = true;
      }
      if (_this.lows.s == 20 && _this.highs.s == 45) {
        _this.nohit = true;
      }
      if (_this.trg.fra == _this.fra || _this.trg2.fra == _this.fra) {
        _this.nohit = true;
      }
      if (
        (_this.lows.fly ||
          _this.lows.meat ||
          _this.lows.ang ||
          _this.lows.bird ||
          _this.lows.ni ||
          _this.lows.bird ||
          _this.lows.bum ||
          _this.lows.ba) &&
        _this.highs.s == 4
      ) {
        _this.nohit = true;
      }
      if (_this.highs.flir || _this.lows.flir) {
        _this.nohit = true;
      }
      if (!_this.nohit && !_this.trg.dones && !_this.trg2.dones) {
        _this.xenf = _this.trg2.xp - _this.trg.xp;
        _this.siz2 = _this.siz =
          _this.sizes[Math.round(_this.trg.s)] +
          _this.sizes[Math.round(_this.trg2.s)];
        if (
          _this.highs.s == 5 &&
          ((_this.highs.col == 10 && _this.highs.d._currentframe == 8) ||
            _this.highs.d._currentframe == 34)
        ) {
          if (_this.highs.d._currentframe == 34) {
            _this.siz2 += 17;
          } else {
            _this.siz2 += 28;
          }
          _this.siz = _this.siz2;
        }
        if (Math.abs(_this.xenf) < _this.siz) {
          _this.yenf = _this.trg2.yp - _this.trg.yp;
          if (Math.abs(_this.yenf) < _this.siz) {
            _this.enf = _this.xenf * _this.xenf + _this.yenf * _this.yenf;
            if (
              _this.enf > 0 &&
              _this.enf < _this.siz * _this.siz &&
              (!_this.lows.hh[_this.highs.e] || _this.lows.s != 2)
            ) {
              balljunk();
              if (!_this.nohit) {
                let v6 = _this.lows.damger;
                if (_this.lows.s == 2 || v6) {
                  if (_this.lows.charge) {
                    _this.nohit = true;
                  }
                  _this.nohit =
                    _this.highs.s == 23 ||
                    _this.highs.s == 41 ||
                    _this.highs.s == 32 ||
                    _this.highs.s == 25 ||
                    _this.highs.s == 55 ||
                    _this.highs.s == 62 ||
                    (_this.highs.s != 4 &&
                      (_this.lows.bluf ||
                        _this.lows.hairb ||
                        _this.lows.meat ||
                        _this.lows.eye ||
                        _this.lows.charge ||
                        _this.ups[48]));
                  if (_this.lows.meat > 2) {
                    _this.nohit = false;
                  }
                  if (!_this.lows.hh[_this.highs.e]) {
                    _this.lows.hh[_this.highs.e] = true;
                    let v1 = _this.lows.dmg;
                    if (_this.lows.d._yscale == 135.5) {
                      v1 += 25;
                    }
                    if (_this.highs.s == 41 && !_this.ups[48]) {
                      if (
                        _this.highs.d.hx.h._currentframe == 1 &&
                        _this.lows.ybew < 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d.hx.h._currentframe == 2 &&
                        _this.lows.xbew < 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d.hx.h._currentframe == 3 &&
                        _this.lows.ybew > 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d.hx.h._currentframe == 4 &&
                        _this.lows.xbew > 0
                      ) {
                        v1 = 0;
                      }
                    }
                    if (_this.highs.s == 97 && !_this.ups[48]) {
                      if (
                        _this.highs.d._currentframe == 1 &&
                        _this.lows.ybew < 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d._currentframe == 6 &&
                        _this.lows.xbew > 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d._currentframe == 5 &&
                        _this.lows.ybew > 0
                      ) {
                        v1 = 0;
                      }
                      if (
                        _this.highs.d._currentframe == 7 &&
                        _this.lows.xbew < 0
                      ) {
                        v1 = 0;
                      }
                    }
                    hurt(_this.highs, v1);
                    if (_this.highs.eternal) {
                      _this.b1 = false;
                      if (_this.highs.s == 62) {
                        if (
                          !(
                            (_this.highs.worm == 1 &&
                              _this.highs.d._currentframe == 8) ||
                            _this.altboss
                          )
                        ) {
                          if (_this.highs.worm != 6) {
                            _this.b1 = true;
                          }
                        }
                      }
                      if (
                        ((_this.highs.s == 41 && v1 == 0) ||
                          (!_this.highs.d.d.open &&
                            _this.highs.alter != 2 &&
                            _this.highs.s == 27) ||
                          _this.highs.s == 93 ||
                          _this.b1 ||
                          _this.highs.refl) &&
                        !_this.lows.meat &&
                        !_this.lows.bird &&
                        !_this.lows.knife &&
                        !_this.lows.fly &&
                        !_this.lows.hairb &&
                        !_this.lows.eye &&
                        !_this.lows.sac &&
                        !_this.lows.bombo
                      ) {
                        _this.lows.done = true;
                        _this.lows.dones = true;
                        if (_this.trg.s == 41) {
                          _this.f9 = 0.95;
                        } else {
                          _this.f9 = 0.8;
                        }
                        _this.refl.push(
                          _this.lows.xp,
                          _this.lows.yp,
                          (0 - _this.lows.xbew) * _this.f9 +
                            _this.highs.xbew * 0.8,
                          (0 - _this.lows.ybew) * _this.f9 +
                            _this.highs.ybew * 0.8
                        );
                        _this.nohit = true;
                        _root.soundy("pennydrop.mp", 15);
                      }
                    }
                    if (_this.lows.s == 2) {
                      spidcol(_this.highs);
                    }
                    if (
                      _this.highs.hp < 0 &&
                      _this.lows.hairb &&
                      _root.hairb < 6 &&
                      random(_root.hairb) == 0
                    ) {
                      _this.lows.d.gotoAndStop(149);
                      _this.lows.d.d.gotoAndStop(1);
                      _root.hairb = _root.hairb + 1;
                    }
                  } else {
                    _this.nohit = true;
                  }
                  if (
                    (_this.ups[48] && !_this.lows.ba) ||
                    _this.lows.ics ||
                    v6 ||
                    _this.lows.knife ||
                    _this.lows.trixer == 2
                  ) {
                    _this.nohit = true;
                  } else if (
                    _this.ups[169] &&
                    !_this.lows.ba &&
                    _this.lows.dmg > 10 &&
                    _this.highs.hp < -6
                  ) {
                    _this.lows.dmg *= 0.5;
                    _this.lows.d._xscale *= 0.75;
                    _this.lows.d._yscale *= 0.75;
                    _this.nohit = true;
                  } else {
                    _this.lows.dones = true;
                    _this.lows.xp += _this.lows.xbew * 0.8;
                    _this.lows.yp += _this.lows.ybew * 0.8;
                  }
                  if (_this.lows.bluf && random(2) == 1) {
                    _this.lows.dones = true;
                    _this.lows.d = _this.lows.d.d;
                  }
                  if (_this.highs.s == 91) {
                    _this.nohit = true;
                  }
                } else if (
                  _this.highs.s != 28 &&
                  (_this.lows != _this.player ||
                    (_this.highs.s != 41 && _this.highs.s != 23))
                ) {
                  _this.trg.gh = 2;
                  _this.trg2.gh = 2;
                }
                if (!_this.nohit) {
                  if (_this.fra2) {
                    if (_this.trg.randy && _this.trg2.s > 10) {
                      f1 = -100;
                      if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                        if (_this.xenf > 0) {
                          _this.trg.xpp = f1;
                          _this.trg.ypp = 0;
                        } else {
                          _this.trg.xpp = 0 - f1;
                          _this.trg.ypp = 0;
                        }
                      } else if (_this.yenf > 0) {
                        _this.trg.ypp = f1;
                        _this.trg.xpp = 0;
                      } else {
                        _this.trg.ypp = 0 - f1;
                        _this.trg.xpp = 0;
                      }
                      _this.trg.xpp += _this.trg.xp;
                      _this.trg.ypp += _this.trg.yp;
                      _this.trg.gogo = false;
                    }
                    if (_this.trg2.randy && _this.trg.s > 10) {
                      f1 = 100;
                      if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                        if (_this.xenf > 0) {
                          _this.trg2.xpp = f1;
                          _this.trg2.ypp = 0;
                        } else {
                          _this.trg2.xpp = 0 - f1;
                          _this.trg2.ypp = 0;
                        }
                      } else if (_this.yenf > 0) {
                        _this.trg2.ypp = f1;
                        _this.trg2.xpp = 0;
                      } else {
                        _this.trg2.ypp = 0 - f1;
                        _this.trg2.xpp = 0;
                      }
                      _this.trg2.xpp += _this.trg2.xp;
                      _this.trg2.ypp += _this.trg2.yp;
                      _this.trg2.gogo = false;
                    }
                  }
                  if (_this.highs.s == 9 && _this.lows == _this.player) {
                    _this.highs.dones = true;
                    if (
                      _this.highs.sss == 50 ||
                      _this.highs.sss == 86 ||
                      _this.highs.sss == 90
                    ) {
                      coinzz(_this.highs.etgreed);
                    }
                    if (_this.highs.d._xscale > 115) {
                      this.playerhurt(1, _this.highs.sss);
                    } else {
                      this.playerhurt(0.5, _this.highs.sss);
                    }
                  }
                  let v = _this.trg.ma / (_this.trg.ma + _this.trg2.ma);
                  let vv = 1 - v;
                  _this.enf = Math.sqrt(_this.enf);
                  f1 = (_this.siz - _this.enf) / _this.enf;
                  if (_this.trg.bhh) {
                    if (_this.trg2.bhh) {
                      if (_this.trg.bhh == 2 || _this.trg2.bhh == 2) {
                        _this.yenf *= 0.1;
                        _this.yenf *= 0.1;
                      }
                    }
                  }
                  if (_this.lows.s != 2 && !_this.lows.dones) {
                    if (_this.highs.s == 4) {
                      f1 *= 0.5;
                      if (_this.lows.ba) {
                        f1 *= 0.5;
                      }
                    }
                    _this.trg.xp -= _this.xenf * vv * f1;
                    _this.trg.yp -= _this.yenf * vv * f1;
                    _this.trg2.xp += _this.xenf * v * f1;
                    _this.trg2.yp += _this.yenf * v * f1;
                  } else {
                    _this.highs.xp += _this.lows.xbew * 0.18;
                    _this.highs.yp += _this.lows.ybew * 0.18;
                  }
                  let xbewenf = _this.trg2.xbew - _this.trg.xbew;
                  let ybewenf = _this.trg2.ybew - _this.trg.ybew;
                  let bewenf = xbewenf * xbewenf + ybewenf * ybewenf;
                  if (bewenf > 0) {
                    bewenf = Math.sqrt(bewenf);
                  } else {
                    bewenf = 0;
                  }
                  _this.enf = bewenf / _this.enf;
                  if (bewenf > 2.5) {
                    this.soundy("bh");
                  }
                  if (_this.maxp) {
                    _this.enf += 0.5;
                  }
                  _this.xenf *= _this.enf;
                  _this.yenf *= _this.enf;
                  _this.trg.xb -= _this.xenf * vv;
                  _this.trg.yb -= _this.yenf * vv;
                  _this.trg2.xb += _this.xenf * v;
                  _this.trg2.yb += _this.yenf * v;
                  if (_this.maxp) {
                    _this.highs.xb *= 0.5;
                    _this.highs.yb *= 0.5;
                  }
                  if (
                    _this.lows.s == 2 &&
                    (_this.highs.s == 18 || _this.highs.s == 14)
                  ) {
                    _this.highs.xbew *= 0.5;
                    _this.highs.ybew *= 0.5;
                    f1 =
                      _this.lows.xbew * _this.lows.xbew +
                      _this.lows.ybew * _this.lows.ybew;
                    if (f1 > 0) {
                      f1 = Math.sqrt(f1) * 0.12 + 0.2;
                      _this.lows.xbew /= f1;
                      _this.lows.xbew /= f1;
                      _this.highs.xbew += _this.lows.xbew;
                      _this.highs.ybew += _this.lows.ybew;
                    }
                  }
                  if (_this.pub) {
                    f1 = _this.trg;
                    _this.trg = _this.player;
                    if (!this.bord()) {
                    }
                    _this.trg = f1;
                    _this.pub = false;
                  }
                }
              }
            }
          } else if (_this.lows == _this.player && !_this.decer) {
            if (_this.highs.s == 9) {
              if (Math.abs(_this.yenf) > _this.siz + 70) {
                _this.highs.noneed = true;
                _this.highs.noned = 8;
              }
            }
          }
        } else if (_this.lows == _this.player && !_this.decer) {
          if (_this.highs.s == 9) {
            if (Math.abs(_this.xenf) > _this.siz + 70) {
              _this.highs.noneed = true;
              _this.highs.noned = 8;
            }
          }
        }
      }
    }
  }
  _this.maxp = false;
}
function nextcha() {
  this.newstart(false);
}
function pull(f1, f2, f3, f4, f5) {
  if (f1 == 0) {
    _this.v = 0.8;
  } else {
    _this.v = 1.2;
  }
  let v = 1; // context? ???
  f1 = _this.ball[f1];
  f2 = _this.ball[f2];
  f5 = _this.leg[f5]; //one entrance ???
  f5._x = f1._x;
  f5._y = f1._y;
  _this.xenf = f1._x - f2._x;
  _this.yenf = f1._y - f2._y;
  f5._rotation =
    (Math.atan((0 - _this.xenf) / _this.yenf) / 3.141592653589793) * 180 + 90;
  if (_this.yenf >= 0) {
    f5._rotation += 180;
  }
  _this.enf = Math.sqrt(_this.xenf * _this.xenf + _this.yenf * _this.yenf);
  f5._xscale = _this.enf;
  f5._yscale = 50;
  _this.xenf = f1._x + f1.xbew - f2._x - f2.xbew;
  _this.yenf = f1._y + f1.ybew - f2._y - f2.ybew;
  _this.enf = Math.sqrt(_this.xenf * _this.xenf + _this.yenf * _this.yenf);
  if (_this.enf != 0) {
    _this.enf = (f3 - _this.enf) / _this.enf;
    _this.xenf *= _this.enf * f4;
    _this.yenf *= _this.enf * f4;
    f1.xbew += _this.xenf * v;
    f1.ybew += _this.yenf * v;
    f2.xbew -= _this.xenf / v;
    f2.ybew -= _this.yenf / v;
  }
}
function trgnextd(trg2, f2) {
  if (trg2 == undefined) {
    trg2 = _this.trg.d.d;
  }
  if (!_this.trg.free || _this.slow <= 0 || _this.fra2) {
    trg2.nextFrame();
  }
  if (trg2._currentframe == trg2._totalframes) {
    var _loc2_ = trg2._parent._currentframe;
    if (!f2) {
      trg2._parent.gotoAndStop(1);
    }
    return _loc2_;
  }
}
function walkframe(f1) {
  _this.trg.wf = true;
  if (f1 <= 0) {
    f1 = 1;
  }
  if (_this.trg.d._currentframe < 3) {
    if (enfget(_this.trg.xbew, _this.trg.ybew) * f1 > 2) {
      _this.trg.d.gotoAndStop(2);
    } else {
      _this.trg.d.gotoAndStop(1);
    }
  }
}
function randrunc() {
  if (_this.trg.xpp == undefined || _this.trg.randd < _this.fra - 10) {
    _this.trg.d.gotoAndStop(1);
    if (_this.trg.wait++ > 13) {
      if (
        linecheck(
          _this.player.xp,
          _this.player.yp,
          _this.trg.xp,
          _this.trg.yp
        ) &&
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          100 + random(100)
        )
      ) {
        _this.trg.xpp = _this.player.xp + _this.player.xbew * 5;
        _this.trg.ypp = _this.player.yp + _this.player.ybew * 5;
      } else {
        let f1 = 70 + random(40);
        if (random(10) == 0) {
          f1 *= 0.2;
        }
        f1 = _this.trg.xp + crand(f1);
        let f2 = _this.trg.yp + this.crand();
        if (random(3) == 0) {
          f1 = Math.min(580, Math.max(60, f1));
          f2 = Math.min(410, Math.max(150, f2));
        } else {
          f1 = Math.min(540, Math.max(120, f1));
          f2 = Math.min(360, Math.max(210, f2));
        }
        let f3 = this.ingrid(f1, f2);
        if (levzz(f3) < 1) {
          let f4 = linecheck(f1, f2, _this.trg.xp, _this.trg.yp);
          if (f4) {
            _this.trg.xpp = f1;
            _this.trg.ypp = f2;
            _this.trg.wait = 15;
          }
        }
      }
    }
  }
  if (_this.trg.xpp != undefined) {
    _this.trg.wait--;
    _this.trg.d.gotoAndStop(2);
    _this.xenf = _this.trg.xp - _this.trg.xpp;
    _this.yenf = _this.trg.yp - _this.trg.ypp;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (
      _this.enf < 14 ||
      (enfget(_this.trg.xbew, _this.trg.ybew) < 3 && _this.trg.wait < 0)
    ) {
      _this.trg.mode = 1;
      _this.trg.xpp = undefined;
      _this.trg.wait = 0;
    }
    _this.enf = 6 / _this.enf;
    _this.trg.xbew -= _this.xenf * _this.enf;
    _this.trg.ybew -= _this.yenf * _this.enf;
    this.sideflip(0 - _this.xenf);
  }
  _this.trg.xbew *= 0.6;
  _this.trg.ybew *= 0.6;
  _this.trg.randd = _this.fra;
}
function randrun() {
  if (_this.trg.xpp == undefined || _this.trg.randd < _this.fra - 10) {
    let f1 = 40;
    if (_this.trg.s == 68) {
      f1 = 80;
    }
    f1 = _this.trg.xp + crand(f1);
    let f2 = _this.trg.yp + this.crand();
    if (_this.trg.s == 68 || random(2) != 0) {
      f1 = Math.min(540, Math.max(120, f1));
      f2 = Math.min(360, Math.max(210, f2));
    }
    f1 = this.ingrid(f1, f2);
    if (levzz(f1) < 1) {
      outgrid(f1);
      _this.trg.xpp = _this.xenf;
      _this.trg.ypp = _this.yenf;
    }
  }
  if (_this.trg.xpp != undefined) {
    if (
      _this.trg.s != 64 &&
      (_this.trg.s != 66 || _this.trg.d._currentframe < 7) &&
      _this.trg.s != 77 &&
      _this.trg.s != 76 &&
      _this.trg.s != 79
    ) {
      _this.trg.d.gotoAndStop(2);
    }
    _this.xenf = _this.trg.xp - _this.trg.xpp;
    _this.yenf = _this.trg.yp - _this.trg.ypp;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (
      _this.enf < 3 ||
      (enfget(_this.trg.xbew, _this.trg.ybew) < 0.2 && random(10) == 0)
    ) {
      _this.trg.mode = 1;
      _this.trg.xpp = undefined;
    }
    _this.enf = 0.5 / _this.enf;
    _this.trg.xbew -= _this.xenf * _this.enf;
    _this.trg.ybew -= _this.yenf * _this.enf;
    if (_this.trg.s != 68) {
      this.sideflip(0 - _this.xenf);
    }
  }
  _this.trg.randd = _this.fra;
}
function randruny() {
  if (_this.trg.d.d._currentframe == 19) {
    _root.soundy("Meat_impacts_" + random(3) + ".wav");
    if (_this.trg.eternal) {
      this.quadf(_this.trg.xp, _this.trg.yp, 9);
      if (_this.trg.alter == 2 && _this.trg.s == 29) {
        _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
        _this.trg2._yscale = _this.trg2._xscale *= 3;
        colorit(_this.trg2, 0, 0, 0, 255, 255, 255);
        _this.spidboss = true;
      }
    }
  }
  if (_this.fra < 60 && _this.trg.eternal) {
    _this.trg.xbew *= 0.8;
    _this.trg.ybew *= 0.8;
  } else if (_this.trg.xpp == undefined) {
    if (_this.trg.s == 86) {
      if (_this.trg.d._currentframe > 2) {
        this.trgnextd();
      }
      firemode(180, 20, true);
      _this.trg.ggh = true;
    }
    if (
      (_this.trg.s != 86 || _this.trg.d._currentframe < 3) &&
      (_this.trg.alter != 2 || _this.trg.wait++ > 15)
    ) {
      _this.trg.d.d.gotoAndStop(1);
      if (_this.trg.alter == 2 || _this.trg.eternal) {
        _this.f1 = random(50) + random(70);
      } else if (_this.trg.s == 54) {
        _this.f1 = random(50);
      } else {
        _this.f1 = 0;
      }
      _this.trg.f1 = _this.f1;
      if (
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp + _this.player.xbew * 2,
          _this.player.yp + _this.player.ybew * 2,
          130 + _this.f1 * 1.3
        )
      ) {
        _this.f2 = _this.player.yp - (_this.yenf * _this.f1) / 200;
        _this.f1 = _this.player.xp - (_this.xenf * _this.f1) / 200;
        if (_this.trg.s == 54) {
          _this.f1 += _this.player.xbew * 5;
          _this.f2 += _this.player.ybew * 5;
        }
      } else {
        if (_this.trg.eternal) {
          enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            10000
          );
          let f0 = random(80) + 100 + _this.f1;
          _this.f1 = _this.trg.xp - (_this.xenf / _this.enf) * f0 + crand(30);
          _this.f2 = _this.trg.yp - (_this.yenf / _this.enf) * f0 + crand(30);
        } else {
          _this.f1 = _this.trg.xp + crand(95 + _this.f1);
          _this.f2 = _this.trg.yp + this.crand();
        }
        if (_this.trg.s == 34) {
          if (_this.trg.xpp == undefined && random(7) == 0) {
            _this.trg.flyby = true;
          }
        }
      }
      if (_this.trg.eternal && random(17) == 0 && _this.trg.s == 34) {
        _this.trg.flyby = true;
      }
      _this.f1 = Math.min(620, Math.max(20, _this.f1));
      _this.f2 = Math.min(447, Math.max(110, _this.f2));
      _this.f1 = this.ingrid(_this.f1, _this.f2);
      if (levzz(_this.f1) < 1) {
        outgrid(_this.f1);
        _this.trg.xpp = _this.xenf + crand(3);
        _this.trg.ypp = _this.yenf + crand(3);
      }
    }
  }
  _this.trg.bhh = 1;
  if (_this.trg.xpp != undefined) {
    _this.trg.wait = 0;
    _this.trg.d.gotoAndStop(2);
    _this.trg.d.d.nextFrame();
    _this.xenf = _this.trg.xp - _this.trg.xpp;
    _this.yenf = _this.trg.yp - _this.trg.ypp;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (_this.trg.s == 54 || (_this.trg.alter == 2 && _this.trg.s == 29)) {
      _this.f1 = _this.enf * 0.22 - _this.trg.d.d._currentframe;
    } else {
      _this.f1 = _this.enf * 0.17 - _this.trg.d.d._currentframe;
    }
    _this.speed = this.enfget(_this.trg.xbew + _this.trg.ybew);
    if (_this.trg.d.d._currentframe + 6 > _this.trg.d.d._totalframes) {
      _this.trg.xbew *= 0.4;
      _this.trg.ybew *= 0.4;
      _this.xenf = 0;
      _this.yenf = 0;
      this.trgnextd();
      if (
        _this.trg.d.d._currentframe + 7 > _this.trg.d.d._totalframes ||
        _this.trg.eternal
      ) {
        _this.trg.xpp = undefined;
      }
    } else if (_this.trg.d.d._currentframe < 5) {
      _this.xenf *= 0.1;
      _this.yenf *= 0.1;
    } else {
      _this.trg.bhh = 2;
      if (_this.speed >= 0.75) {
        if (
          _this.f1 > 10 &&
          _this.trg.d.d._currentframe > 13 &&
          _this.trg.d.d._currentframe + 9 < _this.trg.d.d._totalframes
        ) {
          _this.trg.d.d.prevFrame();
          if (_this.f1 > 25) {
            _this.trg.d.d.prevFrame();
          }
        }
      }
    }
    if (_this.enf < 10 || (_this.speed < 0.75 && random(10) == 0)) {
      if (_this.trg.d.d._currentframe == _this.trg.d.d._totalframes) {
        _this.trg.xpp = undefined;
      }
    }
    _this.enf = Math.min(3 + _this.trg.f1 * 0.075, _this.enf * 0.1) / _this.enf;
    if (_this.trg.f1) {
      _this.f1 = 1 - _this.trg.f1 / 500;
      _this.trg.xbew *= _this.f1;
      _this.trg.ybew *= _this.f1;
    }
    _this.trg.xbew -= _this.xenf * _this.enf;
    _this.trg.ybew -= _this.yenf * _this.enf;
    if (Math.abs(_this.xenf) > 8) {
      this.sideflip(0 - _this.xenf);
    }
  }
}
function markhere(trg) {
  var _loc2_ = this.ingrid(_this.trg.xp, _this.trg.yp);
  if (trg != undefined) {
    trg.til = _loc2_;
  }
  if (trg.mags.length < 2 || trg.s == 28) {
    if (levzz(_loc2_) < 0.99) {
      _this.levz[_loc2_] = 0.9;
    }
  }
}
function borderliner(f0) {
  if (f0 == undefined) {
    f0 = 1;
  }
  let f9 = [0, 1, 1, 0, 0, -1, -1, 0, 0, 1];
  if (_this.trg.dir == undefined) {
    _this.trg.dir = 0;
    let f2 = 0;
    while (f2 < 4) {
      f2++;
      let f1 = _this.trg.dir * 2;
      let f3 = this.ingrid(
        _this.trg.xp + f9[f1] * _this.roxx,
        _this.trg.yp + f9[f1 + 1] * _this.roxx
      );
      if (levzz(f3) < 0.95) {
        _this.trg.dir = _this.trg.dir + 1;
      } else {
        f2 = 10;
      }
    }
    if (f2 != 10) {
      _this.trg.dir = random(4);
    }
  }
  _this.trg.xbew *= 0.6;
  _this.trg.ybew *= 0.6;
  if (_this.trg.xpp == undefined) {
    let f1 = _this.trg.dir * 2;
    let f3 = ingrid(
      _this.trg.xp + _this.trg.xbew + (0 - f9[f1] - f9[f1 + 1]) * _this.roxx,
      _this.trg.yp + _this.trg.ybew + (0 - f9[f1 + 1] + f9[f1]) * _this.roxx,
      true
    );
    let f4 = ingrid(
      _this.trg.xp + _this.trg.xbew - f9[f1 + 1] * _this.roxx,
      _this.trg.yp + _this.trg.ybew + f9[f1] * _this.roxx,
      true
    );
    if (levzz(f3) > 0.95 && levzz(f4) < 0.95 && !_this.trg.lastdd) {
      _this.trg.dir--;
      _this.trg.lastdd = true;
    } else {
      f3 = this.ingrid(
        _this.trg.xp + f9[f1] * _this.roxx,
        _this.trg.yp + f9[f1 + 1] * _this.roxx
      );
      if (levzz(f3) < 0.9) {
        outgrid(f3);
        _this.trg.xpp = _this.xenf;
        _this.trg.ypp = _this.yenf;
        _this.trg.lastdd = false;
      } else {
        _this.trg.dir = _this.trg.dir + 1;
      }
    }
  }
  if (_this.trg.dir > 3) {
    _this.trg.dir -= 4;
  }
  if (_this.trg.dir < 0) {
    _this.trg.dir += 4;
  }
  if (_this.trg.xpp != undefined) {
    enfcheck(
      _this.trg.xp + _this.trg.xbew,
      _this.trg.yp + _this.trg.ybew,
      _this.trg.xpp,
      _this.trg.ypp,
      1000
    );
    if (_this.enf < 7) {
      _this.trg.xpp = undefined;
    } else if (_this.enf < 13) {
      enfcheck(
        _this.trg.xp + _this.trg.xbew * 2,
        _this.trg.yp + _this.trg.ybew * 2,
        _this.trg.xpp,
        _this.trg.ypp,
        1000
      );
      if (_this.enf < 7) {
        _this.trg.xpp = undefined;
      }
    }
    _this.enf = f0 / _this.enf;
    _this.trg.xbew -= _this.xenf * _this.enf;
    _this.trg.ybew -= _this.yenf * _this.enf;
    if (_this.trg.xpp != undefined) {
      if (Math.abs(_this.xenf) < Math.abs(_this.yenf)) {
        _this.trg.xbew *= 0.6;
        _this.trg.xbew += (_this.trg.xpp - _this.trg.xp) * 0.4;
        _this.xenf = 0;
      } else {
        _this.trg.ybew *= 0.6;
        _this.trg.ybew += (_this.trg.ypp - _this.trg.yp) * 0.4;
        _this.yenf = 0;
      }
    }
  }
}
function newxx() {
  let f9 = [0, 1, 1, 0, 0, -1, -1, 0];
  let f10 = 0;
  var _loc1_ =
    _this.trg.s == 41 ||
    _this.trg.s == 44 ||
    _this.trg.s == 93 ||
    _this.trg.s == 97;
  while (_this.trg.xpp == undefined && f10++ < 20) {
    _this.trg.tiler = this.ingrid(_this.trg.xp, _this.trg.yp);
    let f8: number[] = [];
    let a = 0;
    while (a < 4) {
      _this.xenf = f9[a * 2] * _this.roxx;
      _this.yenf = f9[a * 2 + 1] * _this.roxx;
      let f4 = random(12);
      let f1 = _this.trg.xp + _this.xenf * f4;
      let f2 = _this.trg.yp + _this.yenf * f4;
      if (f1 > 620 || f1 < 20) {
        f1 = false;
      }
      if (f2 > 447 || f2 < 110) {
        f1 = false;
      }
      if (f1) {
        let i = 0;
        while (i < f4) {
          f1 = _this.trg.xp + _this.xenf * i;
          f2 = _this.trg.yp + _this.yenf * i;
          let f3 = this.ingrid(f1, f2);
          if (f10 < 9) {
            _this.f5 = 0.2;
          } else {
            _this.f5 = 0.99;
          }
          if (
            levzz(f3) > _this.f5 &&
            f3 != _this.trg.tiler &&
            (!_this.trg.flyby || _this.trg.s == 19 || _this.trg.s == 89)
          ) {
            i--;
            break;
          }
          i++;
        }
        f1 = _this.trg.xp + _this.xenf * i + _this.yenf;
        f2 = _this.trg.yp + _this.yenf * i - _this.xenf;
        _this.f3 = this.ingrid(f1, f2, true);
        f1 = _this.trg.xp + _this.xenf * i - _this.yenf;
        f2 = _this.trg.yp + _this.yenf * i + _this.xenf;
        f4 = ingrid(f1, f2, true);
        f1 = _this.trg.xp + _this.xenf;
        f2 = _this.trg.yp + _this.yenf;
        let f5 = ingrid(f1, f2, true);
        if (
          (_this.trg.flyby && _this.trg.s != 19 && _this.trg.s != 89) ||
          (levzz(f5) < 0.2 &&
            (levzz(_this.f3) < 0.2 || levzz(f4) < 0.2 || random(8) == 0))
        ) {
          f8[a] = i;
        }
      } else {
        f8[a] = -1;
      }
      a++;
    }
    let f7 = 1.8;
    if (_loc1_ || random(10) != 0) {
      f7 = -1;
    }
    let f6 = -1;
    //for(let a in f8) //quickfix
    f8.forEach((a) => {
      if (f8[a] > f7) {
        f7 = f8[a];
        let f1: any = Math.abs(_this.trg.lasta - a);
        let f2 = Math.abs(_this.trg.lastaa - a);
        f1 = (f1 != 2 && f2 != 2) || random(100) == 0;
        if (f1) {
          f6 = a;
        }
      }
    });
    if (f7 < 2 && random(4) != 0) {
      f6 = -1;
    }
    if (f6 > -1) {
      if (f6 != _this.trg.lasta) {
        if (_this.trg.lastaa != _this.trg.lasta) {
          _this.trg.lastaa = _this.trg.lasta;
        }
      }
      _this.trg.lasta = f6;
      _this.xenf = f9[f6 * 2] * _this.roxx;
      _this.yenf = f9[f6 * 2 + 1] * _this.roxx;
      let f3 = Math.abs(_this.xenf) > Math.abs(_this.yenf);
      let f1 = _this.trg.xp + _this.xenf * f7;
      let f2 = _this.trg.yp + _this.yenf * f7;
      f1 = this.ingrid(f1, f2);
      if (levzz(f1) < 1) {
        outgrid(f1);
        _this.trg.xpp = _this.xenf;
        _this.trg.ypp = _this.yenf;
      }
      if (f3) {
        _this.trg.ybew = 0;
      } else {
        _this.trg.xbew = 0;
      }
    }
    _this.trg.fail = 0;
  }
}
function randrunx(f0) {
  if (
    _this.trg.xpp == undefined ||
    random(4) == 0 ||
    (_this.trg.xbew * _this.trg.xbew + _this.trg.ybew * _this.trg.ybew < 1 &&
      !_this.trg.tried)
  ) {
    newxx();
  }
  if (_this.trg.s == 19 || _this.trg.s == 89) {
    _this.trg.tried = false;
    if (_this.trg.knownot) {
      _this.trg.knownot = false;
      if (_this.trg.xpp == undefined) {
        newxx();
      }
      if (!_this.lofo) {
        _this.lofo = true;
        if (_this.trg.xpp == undefined) {
          newxx();
        }
      }
    }
  } else {
    _this.trg.tried = !_this.trg.tried;
  }
  if (_this.trg.xpp != undefined) {
    _this.trg.tried = false;
    _this.trg.knownot = true;
    _this.trg.xpp = Math.min(620, Math.max(20, _this.trg.xpp));
    _this.trg.ypp = Math.min(447, Math.max(110, _this.trg.ypp));
    _this.xenf = _this.trg.xp + _this.trg.xbew - _this.trg.xpp;
    _this.yenf = _this.trg.yp + _this.trg.ybew - _this.trg.ypp;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (_this.enf < 5) {
      _this.trg.mode = 1;
      _this.trg.xp = _this.trg.xpp;
      _this.trg.yp = _this.trg.ypp;
      _this.trg.xpp = undefined;
    } else if (enfget(_this.trg.xbew, _this.trg.ybew) < 0.6) {
      if (_this.trg.fail++ > 10) {
        _this.trg.xpp = undefined;
      }
    }
    _this.enf = f0 / _this.enf;
    _this.xenf *= _this.enf;
    _this.yenf *= _this.enf;
    _this.trg.xbew -= _this.xenf;
    _this.trg.ybew -= _this.yenf;
    if (_this.trg.s == 97 || _this.trg.s == 93) {
      _this.trg.xbeww -= _this.xenf * 3;
      _this.trg.ybeww -= _this.yenf * 3;
    }
    let f1 = enfget(_this.trg.xbew, _this.trg.ybew);
    _this.enf = _this.roxx / f1;
    _this.xenf = _this.trg.xbew * _this.enf;
    _this.yenf = _this.trg.ybew * _this.enf;
    _this.trg.nextl = this.ingrid(
      _this.trg.xp + _this.xenf,
      _this.trg.yp + _this.yenf
    );
    if ((levzz(_this.trg.nextl) > 0.7 && f1 > 3) || f1 < 1) {
      if (_this.trg.fail++ > 2) {
        _this.trg.xpp = undefined;
      }
    }
    if (_this.trg.xpp == undefined) {
      newxx();
    }
  }
}
function cirf(f1, f2, f3, f4, f5) {
  if (f5 == undefined) {
    f5 = Math.random() * 3.141592653589793;
  }
  if (_this.trg.eternal && _this.trg.s == 102) {
    _this.xxenf = f1 - _this.player.xp;
    _this.yyenf = f2 - _this.player.yp;
    //var _loc5_ = true;
    _this._loc5_ = true; //quickfix
  }
  var _loc4_ = (3.141592653589793 / f4) * 2;
  var _loc1_ = 0;
  while (_loc1_ < f4) {
    f5 += _loc4_;
    let f6 = Math.sin(f5) * f3;
    let f7 = Math.cos(f5) * f3;
    if (f6 * _this.xxenf + f7 * _this.yyenf <= 1000 || !_this._loc5_) {
      this.ffmo(f1, f2, 0, f6, f7, 0, 9, _this.trg.s, true);
    }
    _loc1_ = _loc1_ + 1;
  }
}
function quadf(f1, f2, f3, f4) {
  _this.gibb += 10;
  if (f4 != 2) {
    this.ffmo(f1, f2, 0, f3, 0, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, 0 - f3, 0, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, 0, f3, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, 0, 0 - f3, 0, 9, _this.trg.s, true);
  }
  f3 /= 1.4142135623730951;
  if (f4) {
    this.ffmo(f1, f2, 0, f3, f3, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, 0 - f3, f3, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, f3, 0 - f3, 0, 9, _this.trg.s, true);
    this.ffmo(f1, f2, 0, 0 - f3, 0 - f3, 0, 9, _this.trg.s, true);
  }
}
function ffmo(f1, f2, f3, f4, f5, f6, f7, f8) {
  var _loc1_ = create(f1, f2, f3, f4, f5, f6, f7, _this.trg.s);
  if (_this.trg.spid > 0) {
    _loc1_.xbew *= 0.5;
    _loc1_.ybew *= 0.5;
  }
  if (_this.trg.s == 68 && !_this.altboss) {
    colorit(_loc1_, 0.6, 1.2, 0.2, 50, 60, 0);
  }
  _loc1_.ggh = false;
  if (!f8) {
    _loc1_.dm = -3;
    _loc1_.fd = 0.1;
  }
  if (
    (_this.trg.s == 26 && _this.trg.alter == 3) ||
    (_this.trg.s == 65 && _this.altboss) ||
    (_this.trg.s == 102 &&
      (_this.trg.state > 0 ||
        (_this.altboss && random(5) == 0 && !_this.noho))) ||
    (_this.trg.minb == 3 && _this.trg.specoz != 23) ||
    (_this.trg.s == 98 && _this.trg.specoz == 18) ||
    (((_this.trg.s == 57 && _this.trg.alter != 2) || _this.trg.s == 32) &&
      _this.trg.specoz == 23) ||
    ((_this.trg.s == 50 || _this.trg.s == 90) && _this.trg.eternal)
  ) {
    _loc1_.hom = true;
    colorit(_loc1_, 0.8, 1, 2.5, 0, 0, 0);
    _loc1_._xscale *= 1.5;
    _loc1_._yscale *= 1.5;
    if (_this.trg.s == 26 && _this.trg.eternal) {
      _loc1_.longshot = 2;
      _this.trg.hp *= 0.99;
      _loc1_.dm += 1;
    }
    if (_this.trg.s == 50 || _this.trg.s == 90) {
      _loc1_.longshot = true;
      if (_this.trg.s == 90) {
        _loc1_.dm += 3;
      }
    }
  } else if (_this.trg.s == 102) {
    var _loc2_ = new flash.geom.Transform(_loc1_);
    _loc2_.colorTransform = _this.bull;
  }
  if (_this.trg == _this.mheart && _this.trg.eternal) {
    _loc1_._xscale *= 1.3;
    _loc1_._yscale *= 1.3;
  }
  if (_this.v3 && (_this.trg.specoz != 23 || _this.trg.s == 81)) {
    _loc1_.dm -= 1;
    _loc1_.xbew *= 1.2;
    _loc1_.ybew *= 1.2;
    _loc1_.xbew += _this.trg.xbew * 0.4;
    _loc1_.ybew += _this.trg.ybew * 0.4;
  }
  if (_this.trg.s == 79) {
    _loc1_.dm += 3;
    _loc1_.dy -= 15;
    _loc1_.xbew *= 1.2;
    _loc1_.ybew *= 1.2;
  } else if (_this.trg.s == 36) {
    _loc1_.fd *= 0.4;
  } else if (_this.trg.s == 42) {
    _loc1_.dm -= 3;
    _loc1_.dy = -10;
    _loc1_.ggh = true;
    _loc1_.nog = 15;
  }
  if (_this.trg.s == 59) {
    _loc1_.dy += 15;
  }
  if (
    _this.trg.special ||
    _this.trg.s == 59 ||
    (_this.trg.s == 57 && (_this.trg.alter == 2 || !_this.trg.eternal)) ||
    _this.trg.s == 53 ||
    _this.trg.s == 43 ||
    _this.trg.s == 75 ||
    _this.trg.s == 76 ||
    _this.trg.s == 84
  ) {
    _loc1_.doub = true;
    _loc1_.d._xscale = _loc1_.d._yscale = 140;
  }
  if (_this.trg.s == 42 || _this.trg.s == 38 || _this.trg.s == 27) {
    _loc1_.fd -= 0.05;
    _loc1_.xbew *= 1.07;
    _loc1_.ybew *= 1.07;
  }
  if (_this.trg.s == 57) {
    if (_this.trg.eternal) {
      _loc1_.dm -= 2;
    } else {
      _loc1_.dy += 15;
      _loc1_.dm -= 0.2;
    }
  }
  if (_this.trg.s == 90) {
    _loc1_.dy -= 20;
    _loc1_.dm += 2;
  }
  if (_this.trg.s == 84) {
    _loc1_.fd -= 0.07;
  }
  if (_this.trg.s == 65) {
    _loc1_.dy -= 45;
    _loc1_.dm += 7;
  }
  if (_this.trg.s == 62) {
    _loc1_.dy -= 50;
    _loc1_.fd = 0.3;
    _loc1_.xbew -= _this.worm[1].xbew * 0.4;
    _loc1_.ybew -= _this.worm[1].ybew * 0.4;
  }
  if (
    (_this.trg.s == 100 && _this.trg.specoz != 23) ||
    (_this.trg.s == 101 && _this.altboss)
  ) {
    if (_this.trg.specoz == 18) {
      colorit(_loc1_, 0.2, 0.2, 0.2, 0, 0, 0);
    } else {
      colorit(_loc1_, 0.3, 0.8, 0.8, 140, 140, 140);
    }
  }
  if ((_this.trg.s == 14 || _this.trg.s == 26) && _this.trg.eternal) {
    _loc1_.dy -= 16;
  }
  if (_this.trg.s == 14 && _this.trg.alter == 3) {
    _loc1_.dy += 16;
    _loc1_.dm -= 3;
  }
  if (_this.trg.s == 26 && _this.trg.alter == 3) {
    if (_this.trg.eternal) {
      _loc1_.dy += 6;
    }
    _loc1_.dy -= 10;
    _loc1_.dm += 3;
  }
  if (_this.trg.s == 25) {
    if (_this.trg.eternal) {
      _loc1_.dy -= 7;
    }
  }
  if (_this.trg.s == 31) {
    _loc1_.dy = -14;
    _loc1_.fd = 0;
  }
  if (_this.trg.s == 55) {
    if (_this.trg.eternal) {
      _loc1_.dy -= 14;
    }
  }
  if (_this.trg.s == 56) {
    if (_this.trg.eternal) {
      _loc1_.longshot = true;
      _loc1_.xbew *= 1.2;
      _loc1_.ybew *= 1.2;
    }
  }
  if (_this.trg.s == 59) {
    if (_this.trg.eternal) {
      _loc1_.longshot = true;
    }
  }
  if (
    (_this.trg.s == 86 || _this.trg.s == 50 || _this.trg.s == 90) &&
    _this.trg.eternal
  ) {
    _loc1_.etgreed = true;
  }
  if (_this.trg.s == 77) {
    _loc1_.breaker = true;
  }
  return _loc1_;
}
function shots(v1, v2, xenf, yenf, v3) {
  if (_this.trg.s == 38) {
    _root.soundy("Floaty_Baby_Roar_" + random(3) + ".mp", 85);
  }
  if (
    (_this.trg.s == 26 &&
      _this.trg.alter != 2 &&
      _this.trg.alter != 3 &&
      _this.trg.eternal) ||
    ((_this.trg.s == 36 || _this.trg.s == 46) && _this.trg.specoz == 23) ||
    v3 == 23
  ) {
    let f5 = ((0 - (rotget2(xenf, yenf) + 90)) * 3.141592653589793) / 180;
    var _loc6_ = 8;
    if (_this.trg.s == 36) {
      _loc6_ = 16;
    } else if (_this.trg.s == 46) {
      _loc6_ = 12;
    }
    f5 -= _loc6_ * 0.05;
    let f3 = 7;
    if (_this.trg.s >= 49) {
      _this.f7 = 9;
    }
    let z = 0;
    while (z < _loc6_) {
      let f6 = Math.sin(f5) * f3;
      _this.f7 = Math.cos(f5) * f3;
      _this.trg2 = this.ffmo(v1, v2, 0, f6, _this.f7, 0, 9);
      f5 += 0.1;
      if (_this.trg.s >= 49) {
        _this.trg2.dm -= 2;
      }
      if (_this.trg.s == 46) {
        _this.trg2.dy -= 16;
        _this.trg2.dm += 3;
        _this.trg2.longshot = true;
        z++;
        f5 += 0.1;
      }
      z++;
    }
  } else if (_this.trg.s == 12 && _this.trg.eternal) {
    this.ffmo(v1, v2, 0, xenf, yenf, 0, 9);
    this.ffmo(v1, v2, 0, yenf, 0 - xenf, 0, 9);
    this.ffmo(v1, v2, 0, 0 - yenf, xenf, 0, 9);
    this.ffmo(v1, v2, 0, (xenf + yenf) / 1.41, (yenf - xenf) / 1.41, 0, 9);
    this.ffmo(v1, v2, 0, (xenf - yenf) / 1.41, (yenf + xenf) / 1.41, 0, 9);
  } else if (_this.trg.s == 63 && _this.trg.d.d._currentframe == 24) {
    this.ffmo(
      v1,
      v2,
      0,
      xenf * 0.8 - yenf * 0.25,
      yenf * 0.8 + xenf * 0.25,
      0,
      9
    );
    this.ffmo(
      v1,
      v2,
      0,
      xenf * 0.8 + yenf * 0.25,
      yenf * 0.8 - xenf * 0.25,
      0,
      9
    );
  } else if (
    (_this.trg.s == 14 && _this.trg.alter > 1) ||
    _this.trg.s == 86 ||
    ((_this.trg.s == 79 || _this.trg.s == 31) && _this.trg.eternal)
  ) {
    _this.trg3 = this.ffmo(
      v1,
      v2,
      0,
      xenf * 0.8 - yenf * 0.2,
      yenf * 0.8 + xenf * 0.2,
      0,
      9
    );
    _this.trg4 = this.ffmo(
      v1,
      v2,
      0,
      xenf * 0.8 + yenf * 0.2,
      yenf * 0.8 - xenf * 0.2,
      0,
      9
    );
    if (
      (_this.trg.three && _this.trg.s == 14) ||
      _this.trg.s == 31 ||
      (_this.trg.s == 86 && _this.trg.eternal) ||
      _this.trg.s == 79
    ) {
      _this.trg2 = this.ffmo(v1, v2, 0, xenf, yenf, 0, 9);
      if (_this.trg.s == 50) {
        _this.trg3.xbew -= yenf * 3;
        _this.trg3.ybew += xenf * 3;
        _this.trg4.xbew += yenf * 3;
        _this.trg4.ybew -= xenf * 3;
      }
    }
  } else if (v3 == 2) {
    if (_this.trg.s == 50 && _this.trg.eternal) {
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 - yenf * 0.4,
        yenf * 0.9 + xenf * 0.4,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 + yenf * 0.4,
        yenf * 0.9 - xenf * 0.4,
        0,
        9
      );
      this.ffmo(v1, v2, 0, xenf * 0.7 - yenf * 1, yenf * 0.7 + xenf * 1, 0, 9);
      this.ffmo(v1, v2, 0, xenf * 0.7 + yenf * 1, yenf * 0.7 - xenf * 1, 0, 9);
    } else {
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 - yenf * 0.1,
        yenf * 0.9 + xenf * 0.1,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 + yenf * 0.1,
        yenf * 0.9 - xenf * 0.1,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.7 - yenf * 0.3,
        yenf * 0.7 + xenf * 0.3,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.7 + yenf * 0.3,
        yenf * 0.7 - xenf * 0.3,
        0,
        9
      );
    }
  } else {
    _this.trg2 = this.ffmo(v1, v2, 0, xenf, yenf, 0, 9);
    if (v3 || (_this.trg.s == 38 && _this.trg.alter == 2)) {
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.8 - yenf * 0.2,
        yenf * 0.8 + xenf * 0.2,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.8 + yenf * 0.2,
        yenf * 0.8 - xenf * 0.2,
        0,
        9
      );
    }
    if (_this.trg.s == 27 && _this.trg.eternal) {
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 - yenf * 0.1,
        yenf * 0.9 + xenf * 0.1,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.9 + yenf * 0.1,
        yenf * 0.9 - xenf * 0.1,
        0,
        9
      );
    }
    if (
      _this.trg.s == 36 ||
      _this.trg.s == 56 ||
      (_this.trg.s == 27 && _this.trg.alter == 2) ||
      _this.trg.s == 84
    ) {
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.68 - yenf * 0.42,
        yenf * 0.58 + xenf * 0.42,
        0,
        9
      );
      this.ffmo(
        v1,
        v2,
        0,
        xenf * 0.68 + yenf * 0.42,
        yenf * 0.58 - xenf * 0.42,
        0,
        9
      );
      if (!_this.trg.eternal || _this.trg.s != 27) {
        _this.trg2.xbew *= 0.85;
        _this.trg2.ybew *= 0.9;
      }
    }
  }
}
function firemode(siz, f1, f2) {
  if (_this.trg.s == 56 || _this.trg.s == 90) {
    siz += 60;
  } else if (_this.trg.s == 42 || _this.trg.s == 38 || _this.trg.s == 27) {
    if (_this.trg.s == 38 && _this.trg.eternal) {
      siz += 65;
    }
    siz += 40;
  }
  if (_this.trg.s == 56) {
    f1 += 5;
  }
  if (_this.trg.s == 90) {
    f1 += 2 + random(2);
  }
  _this.b1 = false;
  if (_this.trg.eternal && _this.trg.s == 32) {
    _this.b1 = random(3) != 0;
  }
  if (((_this.fra + _this.trg.e) % 7 == 0 || f2) && !_this.b1) {
    if (_this.trg.fire <= 0) {
      if (
        (_this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          siz
        ))
      ) {
        if (
          linechecky(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp
          )
        ) {
          if (_this.trg.s == 42) {
            _this.trg.d.gotoAndStop(2);
          } else {
            if (_this.trg.s == 86) {
              this.sideflip(0 - _this.xenf);
            } else {
              this.sideflip(_this.xenf);
            }
            if (_this.trg.s != 32) {
              if (_this.trg.s == 79) {
                _this.trg.d.gotoAndStop(8);
              } else if (_this.trg.s == 63) {
                _this.trg.d.gotoAndStop(9);
              } else {
                _this.trg.d.gotoAndStop(5);
              }
            }
            if (_this.trg.s == 14 && _this.trg.eternal) {
              _this.trg.rep = 2;
              f1 += 4;
            }
          }
          _this.trg.fire = f1;
          _this.trg.fir = -7;
          if (_this.trg.s == 27) {
            _this.trg.fir = -25;
            _this.trg.fire += 6;
          }
          if (_this.trg.s == 32) {
            _this.trg.fire += 10;
          }
        } else if (_this.trg.s == 14) {
          if (_this.trg.eternal) {
            _this.enf = 0.3 / _this.enf;
          } else {
            _this.enf = 0.1 / _this.enf;
          }
          _this.xenf *= _this.enf;
          _this.yenf *= _this.enf;
          _this.trg.xbb -= _this.xenf;
          _this.trg.ybb -= _this.yenf;
        }
      }
    }
    if (!_this.trg.free || _this.slow <= 0 || _this.fra2) {
      _this.trg.fire--;
    }
  }
  if (_this.trg.s == 14 && _this.trg.eternal) {
    if (
      _this.trg.d.hx.d._currentframe == 11 &&
      _this.trg.d._currentframe == 5
    ) {
      if (_this.trg.rep-- > 0) {
        _this.trg.fir = -7;
        _this.trg.d.hx.d.gotoAndStop(1);
        if (_this.trg.alter == 3) {
          _this.trg.rep--;
        }
      }
    }
  }
  if (_this.trg.s == 38 && _this.trg.eternal && _this.trg.alter == 3) {
    if (_this.trg.d._currentframe == 5) {
      if (
        _this.trg.d.d._currentframe >= 13 &&
        _this.trg.d.d._currentframe < 31
      ) {
        _this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp + _this.player.xbew * 8,
          _this.player.yp + _this.player.ybew * 8,
          10000
        );
        _this.enf = enfget(_this.xenf, _this.yenf);
        _this.enf = -9.2 / _this.enf;
        _this.xenf *= _this.enf;
        _this.yenf *= _this.enf;
        if (_this.trg.d.d._currentframe == 13) {
          _root.soundy("Blood_Laser" + random(2) + ".mp");
        } else {
          _this.xenf *= 0.15;
          _this.yenf *= 0.15;
          _this.xenf += _this.trg.xo * 0.85;
          _this.yenf += _this.trg.yo * 0.85;
        }
        _this.trg.xo = _this.xenf;
        _this.trg.yo = _this.yenf;
        f1 = _this.xenf;
        f2 = _this.fra / 2;
        _this.xenf -= Math.sin(f2) * _this.yenf * 0.1;
        _this.yenf += Math.cos(f2) * f1 * 0.1;
        _this.trg2 = this.ffmo(
          _this.trg.xp - _this.xenf * 0.5,
          _this.trg.yp - _this.yenf * 0.5 + 5,
          0,
          _this.xenf * 1.4,
          _this.yenf * 1.4,
          0,
          9,
          _this.trg.s,
          true
        );
        _this.trg2.dy -= 20;
      }
    }
  } else if (
    (_this.trg.fir++ > 0 &&
      (_this.trg.s != 79 || _this.trg.d.d._currentframe == 17) &&
      (_this.trg.s != 63 ||
        _this.trg.d.d._currentframe == 19 ||
        (_this.trg.d.d._currentframe == 24 && _this.trg.specoz == 23)) &&
      (_this.trg.s != 27 || _this.trg.d._currentframe == 5) &&
      _this.trg.s != 56) ||
    (_this.trg.s == 56 && _this.trg.d.d._currentframe == 33)
  ) {
    if (
      _this.trg.s == 63 ||
      _this.trg.s == 79 ||
      (_this.trg.s == 14 && _this.trg.eternal)
    ) {
      _this.enf = enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.player.xp + _this.player.xbew * 5,
        _this.player.yp + _this.player.ybew * 5,
        1000
      );
    } else {
      _this.enf = enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.player.xp,
        _this.player.yp,
        1000
      );
    }
    if (_this.trg.s == 86) {
      this.sideflip(0 - _this.xenf);
    } else {
      this.sideflip(_this.xenf);
    }
    _this.trg.fir = undefined;
    _this.enf = enfget(_this.xenf, _this.yenf);
    _this.enf = -7 / _this.enf;
    _this.xenf *= _this.enf;
    _this.yenf *= _this.enf;
    if (_this.trg.s == 63) {
      _this.xenf *= 1.3;
      _this.yenf *= 1.3;
    }
    if (_this.trg.s == 42 && _this.trg.alter == 2) {
      _this.trg2 = this.green();
      _this.trg2.dm -= 3;
      _this.trg2.dy = -10;
      _this.trg2.ggh = true;
      _this.trg2.nog = 15;
    } else if (_this.trg.s == 63 && _this.trg.specoz == 7) {
      this.bossfire(10, true);
    } else {
      if (
        _this.trg.s == 63 &&
        _this.trg.specoz == 23 &&
        _this.trg.d.d._currentframe == 19
      ) {
        _this.trg.fir = 2;
      }
      if (_this.trg.s == 32) {
        _this.xenf *= 0.44;
        _this.yenf *= 0.44;
      }
      shots(
        _this.trg.xp,
        _this.trg.yp,
        _this.xenf,
        _this.yenf,
        _this.trg.s == 27 || _this.trg.s == 63 || _this.trg.s == 90
      );
    }
  }
}
function firewalk() {
  if (_this.trg.fire <= 0) {
    var _loc3_ = _this.trg.xp;
    var _loc2_ = _this.trg.yp;
    var _loc4_ = true;
    _this.enf = enfget(_this.trg.xbew, _this.trg.ybew);
    _this.enf = -5 / _this.enf;
    if (_this.trg.s == 19) {
      _this.enf *= 1.5;
      if (
        !linecheckx(
          _this.trg.xp - _this.trg.xbew * 5,
          _this.trg.yp - _this.trg.ybew * 5,
          _this.trg.xp + _this.trg.xbew * 10,
          _this.trg.yp + _this.trg.ybew * 10
        )
      ) {
        _loc4_ = false;
      }
    }
    if (_loc4_) {
      if (_this.trg.s == 11 && _this.trg.specoz == 23) {
        _this.enf *= 2;
      }
      _this.trg.fire = 40 + random(20);
      var _loc1_ = create(
        _loc3_,
        _loc2_,
        0,
        (0 - _this.trg.xbew) * _this.enf,
        (0 - _this.trg.ybew) * _this.enf,
        0,
        9,
        _this.trg.s
      );
      _loc1_.fd = 0.3;
      _loc1_.dm = -5;
      if (_this.trg.s == 19 && _this.altboss) {
        _loc1_ = create(
          _loc3_,
          _loc2_,
          0,
          (0 - _this.trg.xbew - _this.trg.ybew * 0.2) * _this.enf,
          (_this.trg.xbew * 0.2 - _this.trg.ybew) * _this.enf,
          0,
          9,
          _this.trg.s
        );
        _loc1_.fd = 0.3;
        _loc1_.dm = -5;
        _loc1_ = create(
          _loc3_,
          _loc2_,
          0,
          (0 - _this.trg.xbew + _this.trg.ybew * 0.2) * _this.enf,
          ((0 - _this.trg.xbew) * 0.2 - _this.trg.ybew) * _this.enf,
          0,
          9,
          _this.trg.s
        );
        _loc1_.fd = 0.3;
        _loc1_.dm = -5;
      }
    }
  }
  _this.trg.fire--;
}
function angstfind(v1, v2) {
  if (v1 == undefined) {
    v1 = _this.player.xp;
    v2 = _this.player.yp;
  }
  if (_this.trg.failfind <= 0) {
    _this.trg.failfind = 0;
  }
  _this.trg.failfind = Math.min(_this.trg.failfind, 20);
  topz(8);
  if ((_this.trg.e + _this.fra) % 14 == 1) {
    let f13 = linecheckx(_this.trg.xp, _this.trg.yp, v1, v2);
    if (f13) {
      _this.siz = 250;
      if (
        _this.trris + 45 + random(100) <= _this.fra &&
        random(4) == 0 &&
        _this.trg.s < 90
      ) {
        _this.trris = _this.fra;
        _root.soundy("Scared_Whimper_" + random(3) + ".mp", 100);
      }
    } else {
      _this.siz = 170;
    }
    if (enfcheck(_this.trg.xp, _this.trg.yp, v1, v2, _this.siz)) {
      if (_this.trg.needmove <= 0) {
        _this.trg.xpp = _this.trg.ypp = undefined;
      }
      _this.trg.needmove = 3;
    } else {
      _this.trg.needmove--;
    }
  }
  if ((_this.trg.e + _this.fra) % 30 == 0) {
    _this.trg.checked = [];
  }
  if (_this.trg.needmove > 0) {
    if (_this.trg.rpx) {
      _this.trg.rpx = undefined;
      _this.trg.xpp = undefined;
    }
    let f0 = enfcheck(_this.trg.xp, _this.trg.yp, v1, v2, 500);
    if (_this.trg.xpp == undefined || _this.trg.failfind > 20) {
      if (f0 > 0) {
        let f1 = 1.5 / f0;
        _this.trg.xbew += _this.xenf * f1;
        _this.trg.ybew += _this.yenf * f1;
        _this.enf = 30 / f0;
        var _loc4_ = _this.xenf * _this.enf + _this.trg.xp;
        var _loc5_ = _this.yenf * _this.enf + _this.trg.yp;
      } else {
        _loc4_ = _this.trg.xp;
        _loc5_ = _this.trg.yp;
      }
      let i = 0;
      while (_this.trg.xpp == undefined && i < 7 - _this.trg.failfind * 0.3) {
        let f10 = 450 * Math.random() + 30;
        if (random(2) == 0) {
          if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
            _this.yenf = 0;
          } else {
            _this.xenf = 0;
          }
        }
        _this.xenf = _loc4_ + crand(f10);
        _this.yenf = _loc5_ + this.crand() * 0.5;
        let f1 = this.ingrid(_this.xenf, _this.yenf);
        if (_this.trg.checked[f1]) {
          i -= 0.7;
        } else {
          outgrid(f1);
          _this.trg.checked[f1] = true;
          if (!mhit(_this.xenf, _this.yenf)) {
            if (
              linecheckx(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf)
            ) {
              let f13 = !linecheckx(v1, v2, _this.xenf, _this.yenf);
              if (f13 || _this.trg.failfind >= 20) {
                let f7 = _this.xenf;
                let f8 = _this.yenf;
                if (
                  enfcheck(
                    v1,
                    v2,
                    _this.trg.xpp,
                    _this.trg.ypp,
                    100 +
                      f0 +
                      f10 / 3 +
                      _this.trg.failfind -
                      _this.trg.noco * 10
                  )
                ) {
                  _this.trg.noco = _this.trg.noco + 1;
                } else {
                  _this.trg.xpp = f7;
                  _this.trg.ypp = f8;
                  i = 100;
                  if (f13) {
                    _this.trg.failfind /= 2;
                  }
                }
              } else {
                _this.trg.failfind += 0.35;
              }
            }
          }
        }
        i++;
      }
    }
    if (_this.trg.xpp != undefined) {
      if ((_this.trg.e + _this.fra) % 10 == 1) {
        let f13 = enfcheck(v1, v2, _this.trg.xpp, _this.trg.ypp, 200);
        if (
          (linecheckx(v1, v2, _this.trg.xpp, _this.trg.ypp) &&
            _this.trg.failfind < 20) ||
          f13 ||
          Math.abs(_this.xenf) < 20 ||
          Math.abs(_this.yenf) < 20
        ) {
          _this.trg.xpp = _this.trg.ypp = undefined;
        }
      }
      pathfind(_this.trg, _this.trg.xpp, _this.trg.ypp, 1.3);
    }
  } else {
    _this.trg.failfind *= 0.9;
    _this.trg.rpx = true;
    _this.trg.noco = 0;
    randrun();
    _this.trg.xbew *= 0.9;
    _this.trg.ybew *= 0.9;
  }
  tip(8);
}
function pffy(f1, f2) {
  if (_this.trg.s != 54) {
    f1 = this.ingrid(f1, f2);
    let f3 =
      levzz(f1) == 0.99 &&
      !_this.f44 &&
      !_this.webs[f1] &&
      (!_this.trg.flyby || _root.lev == _root.sac || _root.lev == _root.cus) &&
      !_this.trg.flyai;
    if (f3) {
      _this.f55 = f1;
    }
    if ((levzz(f1) > 1 && levzz(f1) < 2) || f3) {
      var _loc4_ = this["de" + f1];
      if ((_loc4_.fire && _this.trg.s != 28) || f3) {
        _this.relf = f3;
        if (_this.trg.s == 27) {
          _this.trg.dones = true;
        }
        outgrid(f1);
        _this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.xenf,
          _this.yenf,
          _this.siz
        );
        if (f3) {
          _this.enf += 20;
        }
        if (_this.trg.s == 29 && _this.trg.alter != 2 && _loc4_.fire) {
          _this.trg.s = 54;
          attach(_this.trg, 54);
          _this.trg.hp += 20;
        }
        if (_this.enf < _this.siz) {
          if (!f3 && _this.trg.firs + 10 <= _this.fra) {
            _this.trg.firs = _this.fra;
            _root.soundy(
              "Firedeath_hiss.wav",
              Math.min(100, 50 + _this.trg.hp * 5)
            );
          }
          _this.siz = _this.enf;
          _this.f4 = _this.xenf;
          _this.f5 = _this.yenf;
          _this.f6 = _this.enf;
          _this.f7 = f3;
          return true;
        }
      }
    }
  }
}
function firecheck(trg) {
  _this.trg3 = 0;
  _this.siz = 38;
  var _loc3_ = 20;
  _this.relf = true;
  var _loc4_ =
    pffy(trg.xp + _loc3_, trg.yp + _loc3_) ||
    pffy(trg.xp - _loc3_, trg.yp + _loc3_) ||
    pffy(trg.xp + _loc3_, trg.yp - _loc3_) ||
    pffy(trg.xp - _loc3_, trg.yp - _loc3_);
  if (_loc4_) {
    if (!_this.f7) {
      _this.xenf = _this.f4;
      _this.yenf = _this.f5;
      _this.enf = _this.f6;
      _this.enf = 4 / _this.enf;
      trg.xbew += _this.xenf * _this.enf;
      trg.ybew += _this.yenf * _this.enf;
    }
  }
  if (_this.dang) {
    if (
      trg == _this.player &&
      (!trg.flyby || _root.lev == _root.sac || _root.lev == _root.cus)
    ) {
      if (shit(trg.xp, trg.yp)) {
        if (_this.blackout == 2 || _this.spidboss) {
          if (trg == _this.player) {
            _this.playslow = 10;
          }
        } else {
          _loc4_ = true;
          _this.relf = 2;
        }
      }
    }
  }
  if (_this.dang2 && !trg.flyby && !trg.flyai) {
    if (trg != _this.player) {
      if (_this.dang2.hitTest(trg.xp, _this.trg.yp, true)) {
        _loc4_ = true;
      }
    }
  }
  return _loc4_;
}
function breakfloor(f1) {
  if (levzz(f1) < 0.99) {
    var _loc1_ = true;
    for (let i in _this.brr) {
      _loc1_ = _loc1_ && f1 != _this.brr[i];
    }
    for (let i in _this.brr2) {
      _loc1_ = _loc1_ && f1 != _this.brr2[i];
    }
    if (_loc1_) {
      let v1 = [
        levzz(f1 + 1) == 3,
        levzz(f1 + _this.rowz) == 3,
        levzz(f1 - 1) == 3,
        levzz(f1 - _this.rowz) == 3,
      ];
      if ((v1[0] && v1[2]) || (v1[1] && v1[3])) {
        _this.brr.push(f1);
      } else {
        _this.brr2.push(f1);
      }
    }
  }
}
function breakall() {
  let f1 = false;
  for (let i in _this.brr) {
    f1 = _this.brr[i];
    outgrid(f1);
    _this.tiles.gotoAndStop(67);
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(_this.xenf, _this.yenf);
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.dblock.draw(_this.tiles, _this.maxx);
  }
}
function pathcheck(trg, v2, v3) {
  let v1 = this.ingrid(trg.xp, trg.yp);
  trg.gridder = _this.levz.slice(0, -1);
  let z = 0;
  //for(z in v3) quick fix
  v3.forEach((z) => {
    trg.gridder[v3[z]] = 1;
  });
  trg.gridder[v2] = 0;
  _this.acts = [];
  _this.acts2 = [];
  z = -1;
  while (z > -100 && trg.gridder[v2] >= 0) {
    if (z == -1) {
      pff(v1, -1);
    } else {
      for (let i in _this.acts) {
        v1 = trg.gridder[_this.acts[i]];
        if (v1 < z) {
          _this.acts2.push(_this.acts[i]);
        } else {
          outgrid(_this.acts[i]);
          pff(this.ingrid(_this.xenf, _this.yenf + _this.roxx), v1);
          pff(this.ingrid(_this.xenf + _this.roxx, _this.yenf), v1);
          pff(this.ingrid(_this.xenf - _this.roxx, _this.yenf), v1);
          pff(this.ingrid(_this.xenf, _this.yenf - _this.roxx), v1);
        }
      }
    }
    _this.acts2[_this.acts2.length] = 0;
    _this.acts = _this.acts2.slice(0, -1);
    _this.acts2 = [];
    z--;
  }
  if (z < -99) {
    trg.gridder = 0;
    return false;
  }
  return z;
}
function bloww(v2, f5, f6) {
  _root.levblow[_root.lev!].push(v2, f5, f6);
  outgrid(v2);
  _this.dblock.fillRect(
    new flash.geom.Rectangle(
      (_this.xenf - _this.roxx2 - 2) * _this.hdx,
      (_this.yenf - _this.roxx2 - 2) * _this.hdx,
      (_this.roxx + 4) * _this.hdx,
      (_this.roxx + 4) * _this.hdx
    ),
    0
  );
  if (_this.levz[v2] == 0.99 && _this.webs[v2]) {
    _this.tiles.gotoAndStop(161 + _this.webs[v2]);
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(_this.xenf, _this.yenf);
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.dblock.draw(_this.tiles, _this.maxx);
    _this.webs[v2] = false;
    _this.levz[v2] = 0;
  } else if (_this.levz[v2] == 1) {
    gibs(_this.xenf, _this.yenf);
    _root.so.data.rocks = _root.so.data.rocks + 1;
    if (_root.so.data.rocks > 49) {
      _root.locker[18] = true;
    }
    if (_root.chaps < 7 || _root.chaps == 9) {
      _root.soundy("Rock_crumble " + random(3) + ".wav", 100);
      _this.tiles.gotoAndStop(60 + random(5));
    } else {
      _root.soundy("Meaty_Deaths_" + random(6) + ".mp", 100);
      _this.tiles.gotoAndStop(85 + random(5));
    }
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.translate(_this.xenf, _this.yenf);
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.dblock.draw(_this.tiles, _this.maxx);
    if (Math.abs(f5) > Math.abs(f6)) {
      f6 = 0;
      if (f5 > 0) {
        f5 = _this.roxx;
      } else {
        f5 = 0 - _this.roxx;
      }
    } else {
      f5 = 0;
      if (f6 > 0) {
        f6 = _this.roxx;
      } else {
        f6 = 0 - _this.roxx;
      }
    }
    let f1 = this.ingrid(_this.xenf + f5, _this.yenf + f6);
    if (_this.levz[f1] == 3) {
      _root.levblow[_root.lev!].push(f1);
      _this.levz[f1] = 0;
      outgrid(f1);
      _this.tiles.gotoAndStop(66);
      _this.maxx = new flash.geom.Matrix();
      _this.maxx.translate(_this.xenf, _this.yenf);
      _this.maxx.scale(_this.hdx, _this.hdx);
      _this.dblock.draw(_this.tiles, _this.maxx);
    }
    if (_root.rarer[_root.lev!] == v2) {
      _this.levz[v2] = 0;
      outgrid(v2);
      _this.chestox = _this.xenf;
      _this.chestoy = _this.yenf;
      _this.chestopen = 2;
      _root.rarer[_root.lev!] = -100;
      if (_root.so.data.rox++ > 30) {
        _root.locker[87] = true;
      }
    }
  }
  _this.levz[v2] = 0;
  cloo();
}
function gosplash() {
  if (_this.trg.s == 24) {
    if (_this.trg.eternal) {
      quadf(_this.trg.xp, _this.trg.yp, 8, 1);
    }
  }
  if (
    _this.trg.s == 4 ||
    ((_this.trg.s == 45 || _this.trg.s == 101 || _this.trg.s == 84) &&
      !_this.trg.dones)
  ) {
    if (!_this.trg.dsound && _this.trg.s != 101) {
      _this.trg.dsound = true;
      _root.soundy("boss1_explosions" + random(3) + ".wav", 100);
    }
    if (_this.trg.pois) {
      _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
      _this.trg2._xscale *= 3;
      _this.trg2._yscale = _this.trg2._xscale;
      splater(
        _this.trg.xp,
        _this.trg.yp,
        _this.trg.spl + 1 + random(10),
        Math.random() + 0.8
      );
      if (_this.trg.pois != 4) {
        if (_this.blackout != 2) {
          colorit(_this.trg2, 0, 2, 0, 0, 40, 0);
        } else {
          colorit(_this.trg2, 0, 0, 0, 0, 0, 0);
        }
      }
    } else {
      _root.bomf[_root.lev!].push(_this.trg.xp, _this.trg.yp);
    }
    let f4 = 60;
    if (_this.trg.dmg > 25 && _this.trg.s != 45 && _this.trg.s != 101) {
      f4 = 90;
    }
    if (_this.trg.dmg >= 45 && _this.trg.s != 45 && _this.trg.s != 101) {
      f4 = 105;
    }
    if (_this.trg.s == 101 || _this.trg.s == 45) {
      f4 = 44;
    }
    _this.f11 = [];
    let z = 0;
    while (z < 150) {
      var _loc2_ = Math.random() * f4;
      let f5 = crand(_loc2_);
      let f6 = this.crand();
      let f1 = _this.trg.xp + f5;
      let f2 = _this.trg.yp + f6;
      let v2 = this.ingrid(f1, f2);
      if (
        _this.levz[v2] >= 1.9 &&
        f4 < 90 &&
        _root.lev != _root.bossl &&
        _root.lev != _root.bossl2
      ) {
        f4 = 90;
      }
      outgrid(v2);
      if (!_this.f11[v2]) {
        _this.f11[v2] = true;
        if (_this.levz[v2] > 0.9) {
          if (linecheckxx(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf)) {
            if (
              _this.levz[v2] == 1 ||
              _this.levz[v2] == 1.85 ||
              _this.webs[v2]
            ) {
              bloww(v2, f5, f6);
            } else {
              killshit(v2, 10);
            }
            if (_loc2_ < 40) {
              breakfloor(v2);
            }
          }
        }
      }
      z++;
    }
    for (let z in _this.ball) {
      _this.trg2 = _this.ball[z];
      _this.siz = 85 + _this.sizes[Math.round(_this.trg2.s)];
      if (_this.trg.s == 45 && _this.trg2 == _this.player) {
        _this.siz = 40;
      }
      if (_this.trg.huge) {
        _this.siz *= 1.75;
      }
      if (_this.trg.s == 101 && _this.trg.d._currentframe != 5) {
        _this.siz = 48.5;
      }
      if (_this.trg.bombo && _this.trg2 == _this.player) {
        _this.siz = 55;
      }
      _this.enf = enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.trg2.xp,
        _this.trg2.yp,
        _this.siz
      );
      if (
        _this.enf < _this.siz &&
        !_this.trg2.dones &&
        (_this.trg.s == 4 ||
          _this.trg.s == 45 ||
          (_this.trg.s == 101 && _this.trg2 != _this.player) ||
          _this.trg2.s == 7) &&
        _this.trg2.bh &&
        !_this.trg2.shot
      ) {
        let f1 = false;
        if (
          _this.trg2.s == 5 &&
          _this.trg2.d._currentframe == 8 &&
          _this.chestopen == undefined
        ) {
          if (_this.trg2.col == 41) {
            _this.trg2.d.d.gotoAndStop(30);
          } else if (_this.trg2.col == 1) {
            _this.trg2.d.d.gotoAndStop(34);
          } else if (_this.trg2.col > 1) {
            _this.trg2.d.d.gotoAndStop(39);
            _this.trg2.dones = true;
            _root.bumkill = true;
          } else {
            _this.trg2.d.d.gotoAndStop(30);
          }
          _this.trg2.spin = false;
          _this.trg2.busted = true;
          _this.chestopen = _this.trg2;
          f1 = true;
        }
        if (_this.trg2.s != 5 || _this.fra - _this.trg2.fra > 30 || f1) {
          _this.enf = Math.min(_this.siz - _this.enf, 15) / _this.enf;
          f1 =
            _this.trg2.s == 7 ||
            _this.trg2.s == 8 ||
            _this.trg2.s == 45 ||
            _this.trg2.s == 101;
          let f2 = true;
          if (!f1) {
            f2 = linecheckxx(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg2.xp,
              _this.trg2.yp
            );
          }
          if (f2) {
            if (_this.enf > 0 && _this.trg2.s != 101) {
              if (f1 || _this.trg2.s > 61) {
                _this.enf *= 0.015;
              }
              if (_this.trg2.s == 59) {
                _this.enf = 0;
              }
              _this.trg2.xbew *= 0.5;
              _this.trg2.ybew *= 0.5;
              _this.trg2.xbew -= _this.xenf * _this.enf;
              _this.trg2.ybew -= _this.yenf * _this.enf;
            }
            if (
              !(
                (((_this.trg2.specoz == 23 && _this.trg.s != 101) ||
                  _this.trg2.s == 46 ||
                  _this.trg2.s == 68 ||
                  (_this.trg2.s == 87 && _this.trg.pois != 10) ||
                  _this.trg2.s == 67 ||
                  (_this.trg2.s == 30 && _this.trg.s != 101) ||
                  _this.trg2.s == 88 ||
                  _this.trg2.s == 59 ||
                  _this.trg2.s == 64 ||
                  _this.trg2.s == 78 ||
                  _this.trg2.s == 82 ||
                  _this.trg2.s == 83 ||
                  _this.trg2.s == 101) &&
                  _this.trg.dfr &&
                  !_this.trg.bombo) ||
                (_this.trg2.s == 45 && _this.trg.s == 45) ||
                (_this.trg2.s == 52 &&
                  !_this.trg.playbomb &&
                  (_this.trg.col == 3 || _this.trg.col == 5))
              )
            ) {
              if (_this.trg2.s == 48 || _this.trg2.bomber) {
                if (_this.trg.man) {
                  hurt(_this.trg2, 10);
                } else {
                  hurt(_this.trg2, 100);
                }
              } else {
                if (
                  _this.trg2.s == 28 ||
                  (_this.trg2.s == 87 && _this.trg.pois == 10)
                ) {
                  hurt(_this.trg2, 18);
                } else if (
                  _this.trg.dmg > 0 ||
                  _this.trg.playbomb ||
                  _this.trg.bombo
                ) {
                  hurt(_this.trg2, 50 + _this.trg.dmg);
                } else {
                  hurt(_this.trg2, 40);
                }
                if (_this.trg.header) {
                  _this.trg2.poiss = _this.trg.header;
                  _this.trg2.poisd = 7;
                  if (_this.trg.bombo) {
                    _this.trg2.poisd = 3;
                  }
                }
              }
            }
            if (_this.trg2 == _this.player && !_this.trg.friend) {
              if (_this.trg.mug) {
                this.playerhurt(0.5, 4);
              } else {
                this.playerhurt(1, 4);
              }
            }
          }
        }
      }
      _this.trg2 = undefined;
    }
    if (_this.trg.s != 45 && _this.trg.s != 84 && _this.trg.s != 101) {
      if (_this.blackout == 2) {
        let z = 0;
        while (z < 5) {
          splater(
            _this.trg.xp + this.crand(),
            _this.trg.yp + crand(random(10)),
            1 + random(10),
            Math.random() + 1
          );
          z++;
        }
      } else {
        if (!_this.trg.pois) {
          _this.maxx = new flash.geom.Matrix();
          if (f4 > 100) {
            _this.maxx.scale(1.5, 1.5);
          }
          if (_this.trg.huge) {
            _this.maxx.scale(2.75, 2.75);
          }
          _this.maxx.translate(_this.trg.xp, _this.trg.yp);
          _this.maxx.scale(_this.hdx, _this.hdx);
          _this.splat.draw(_this.crater, _this.maxx);
        }
        if (_this.trg.header) {
          this.gibs();
          let z = 0;
          while (z < 20) {
            let f1 = z * 3;
            splater(
              _this.trg.xp + crand(f1),
              _this.trg.yp + crand(f1),
              31 + random(10),
              Math.random() * 0.5 + 1.2 - z / 20
            );
            z++;
          }
        }
      }
    }
  }
  let big = 0;
  if (
    _this.trg.s != 13 &&
    _this.trg.s != 14 &&
    _this.trg.s != 5 &&
    _this.trg.s != 18 &&
    _this.trg.s != 45 &&
    _this.trg.s != 80 &&
    _this.trg.s != 4.5 &&
    _this.trg.s != 85 &&
    _this.trg.s != 101 &&
    !_this.trg.fart
  ) {
    this.gibs();
  }
  if (_this.trg.frezz > 0) {
    _root.soundy("Rock_crumble " + random(3) + ".wav", 100);
  } else if (_this.trg.s == 38 || _this.trg.s == 59 || _this.trg.s == 77) {
    _root.soundy("goodeath" + random(3) + ".wav", 180);
  } else {
    switch (big) {
      case 0:
        if (!_this.trg.flyai && _this.trg.s != 85) {
          break;
        }
      case 1:
        _root.soundy("Death_Burst_Small_" + random(3) + ".mp", 100);
        break;
      case 2:
      case 3:
        if (_this.trg.lasts || !_this.trg.aboss) {
          _root.soundy(
            "Death_Burst_Large_" + random(2) + ".mp",
            80 + random(40)
          );
        } else {
          _root.soundy("Rocket_Blast_Death_1.wav");
        }
    }
  }
}
function flya() {
  if (_this.trg.specoz == 23) {
    _this.f1 = [14.1, 18, 18, 18];
  } else {
    _this.f1 = [13, 13, 13, 13, 13, 13, 13, 14, 18, 18, 18];
  }
  let i = 0;
  while (i < 4 / (1 + _this.ashut * 0.2)) {
    let f0 = Math.random() * 6;
    this.create(
      _this.trg.xp + crand(f0),
      _this.trg.yp + crand(f0),
      0,
      0,
      0,
      0,
      _this.f1[random(_this.f1.length)]
    );
    if (_this.trg.s == 67) {
      i -= 0.5;
    }
    if (_this.trg.specoz == 23) {
      i -= 0.25;
    }
    i++;
  }
  _this.f1 = 8;
}
function gibs(v1, v2) {
  let big = 1;
  let f10 = 0;
  let f1 = 10;
  if (
    (_this.trg.s == 25 && !_this.trg.nobomb) ||
    (_this.trg.s == 55 && _this.trg.alter != 1)
  ) {
    if (_this.trg.eternal) {
      _this.bomf.push([_this.trg.xp, _this.trg.yp, 6]);
    } else {
      _this.bomf.push([_this.trg.xp, _this.trg.yp]);
    }
  }
  if (_this.trg.s == 4 || _this.trg.s == 45 || _this.trg.s == 84) {
    _this.f2 = 7;
    f1 = -1;
  } else {
    _this.f2 = 8;
  }
  if (v1 > 0 && v2 > 0) {
    f1 = 5;
  }
  if (v1 <= 0 || v2 <= 0) {
    v1 = _this.trg.xp;
    v2 = _this.trg.yp;
  }
  f1 /= 1 + _this.gibb * 0.1;
  let i = 0;
  while (i < f1) {
    _this.gibb++;
    f10 = Math.random() * 4;
    let f11 =
      _this.trg.s == 100 ||
      _this.trg.s == 97 ||
      _this.trg.s == 98 ||
      _this.trg.s == 99 ||
      _this.trg.s == 20 ||
      _this.trg.s == 43 ||
      _this.trg.s == 36 ||
      _this.trg.s == 28 ||
      _this.trg.s == 49 ||
      (_this.trg.s >= 62 &&
        !_this.trg.sic &&
        _this.trg.s != 73 &&
        _this.trg.s != 71 &&
        _this.trg.s != 77 &&
        _this.trg.s != 74 &&
        _this.trg.s < 85) ||
      _this.trg.s == 57 ||
      _this.trg.special ||
      _this.trg.minb;
    if (f11) {
      f10 *= 1.7;
      big = 2;
    }
    if (
      _this.trg.s == 36 ||
      _this.trg.s == 19 ||
      _this.trg.s == 71 ||
      _this.trg.s == 74 ||
      _this.trg.s > 100
    ) {
      big = 3;
      f10 *= 1.3;
    }
    var _loc1_ = this.create(
      v1,
      v2,
      0,
      crand(f10),
      crand(f10) * 0.5,
      0,
      _this.f2
    );
    if (f11 || _this.trg.s == 19) {
      _loc1_.ybew *= 1.4;
      _loc1_.d._xscale = _loc1_.d._yscale = 100 + random(70);
    } else if (_this.trg.s == 36 || _this.trg.s == 71 || _this.trg.s == 74) {
      _loc1_.d._xscale = _loc1_.d._yscale = 140 + random(80);
    }
    if (_this.trg.frezz > 0) {
      colorit(_loc1_, 0.18, 0.22, 0.22, 60, 60, 60);
    } else if (_this.trg.poiss > 0 || _this.trg.spl == 30) {
      colorit(_loc1_, 0.2, 1, 0.2, 0, 70, 17);
      _loc1_.spl = 30;
    } else if (_this.trg.specol) {
      f1 = _this.trg.specol;
      colorit(
        _loc1_,
        _this.specol[f1][0],
        _this.specol[f1][1],
        _this.specol[f1][2],
        0,
        0,
        0
      );
    }
    i++;
  }
}
function bombfail(f1, f2, f3, f4) {
  var _loc1_ = this.create(f1, f2, 0, 0, 0, 0, 4);
  _loc1_.pois = f4;
  _loc1_.dones = true;
  if (f3 == 6) {
    _loc1_.dmg = 60;
    _loc1_._xscale = _loc1_._yscale = 200;
    _loc1_.d.gotoAndStop(2);
    _loc1_.huge = true;
  } else if (f3 == 5) {
    _this.trg.mager = true;
  } else if (f3 == 4) {
    _loc1_.dmg = 30;
    _loc1_._xscale = _loc1_._yscale = 113;
    _loc1_.d.gotoAndStop(2);
  } else if (f3) {
    _loc1_.dfr = true;
    if (f4 == 4) {
      _loc1_.d.gotoAndStop(6);
    } else {
      _loc1_.d.gotoAndStop(5);
    }
    if (_this.blackout == 2) {
      colorit(_loc1_, 0, 0, 0, 0, 0, 0);
    }
  } else {
    _loc1_.d.gotoAndStop(2);
  }
  return _loc1_;
}
function bomb(f1) {
  if (_this.fra - _this.lastbo >= 30 || f1) {
    if (f1) {
      if (f1 != 2) {
      }
    } else {
      if (_root.bombs <= 0) {
        return false;
      }
      _root.bombs = _root.bombs - 1;
    }
    _this.lastbo = _this.fra;
    _root.soundy("Fetus_Land_" + random(2) + ".wav", 100);
    _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 4);
    _this.trg2.dmg = 10;
    if (f1 == 4) {
      _this.trg2.d.gotoAndStop(7);
      _this.trg2.dec = true;
    }
    if ((f1 && f1 != 2) || _this.ups[106]) {
      _this.trg2.dmg += 50;
      _this.trg2._xscale = _this.trg2._yscale = 123;
      _this.trg2.col = 4;
      if (!_this.ups[140]) {
      }
    }
    if (_this.ups[140]) {
      _this.trg2.header = 130;
      _this.trg2.col = 6;
    }
    _root.so.data.bomb = _root.so.data.bomb + 1;
    return _this.trg2;
  }
}
function killshit(v2, v3) {
  if (_this.levz[v2] > 1 && _this.levz[v2] < 1.8) {
    _this.trg2 = this["de" + v2];
    if (!_this.trg2.gold || random(3) == 0) {
      _this.levz[v2] -= 0.13;
      if (_this.trg2._currentframe == 6) {
        _this.trg2.gotoAndStop(2);
      } else {
        _this.trg2.nextFrame();
      }
      if (v3 && _this.levz[v2] > 1 && !_this.trg2.gold) {
        _this.levz[v2] -= 0.13;
        _this.trg2.nextFrame();
      }
      if ((random(3) == 0 || v3 > 5) && !_this.trg2.gold) {
        _this.levz[v2] -= 0.13;
        _this.trg2.nextFrame();
      }
      if ((_this.trg2.nam == "breakblock" && random(3) == 0) || v3 > 7) {
        _this.levz[v2] -= 0.13;
        _this.trg2.nextFrame();
      }
      if (_this.trg2._currentframe == 6 && _this.levz[v2] < 1.1) {
        _this.trg2.gotoAndStop(5);
      }
      if (_this.levz[v2] <= 1) {
        _this.trg2.dones = true;
        switch (_this.trg2.nam) {
          case "locktile":
            _this.trg2.gotoAndStop(2);
            break;
          case "breakblock":
          case "breakblock2":
          case "breakblock3":
            if (!_this.trg2.cent) {
              _root.so.data.shits = _root.so.data.shits + 1;
              if (_root.so.data.shits > 50) {
                _root.locker[46] = true;
              }
            }
            _root.soundy("plop.wav", 100);
            _this.trg2.gotoAndStop(5);
            break;
          case "fireblock":
          case "fireblock2":
            _root.soundy("steam_halfsec.wav", 85);
            _this.trg2.gotoAndStop(5);
        }
        if (_this.trg2.xp == undefined) {
          _this.trg2.xp = _this.trg2._x;
          _this.trg2.yp = _this.trg2._y;
        }
        if (_this.trg2.gold) {
          _this.chestopen = _this.trg2;
        } else if (_this.trg2.nam == "breakblock2") {
          _this.trg2.fra = _this.fra + 120;
          _this.shiz.push(_this.trg2);
        } else if (
          Math.random() < 0.1 &&
          (!_this.trg2.cent || random(5) == 0) &&
          !_this.trg2.egg &&
          !v3
        ) {
          if (Math.random() < 0.25 || _this.trg2.cent) {
            _this.f0 = 5;
          } else {
            _this.f0 = 5.02;
          }
          this.create(_this.trg2.xp, _this.trg2.yp, 0, 0, 0, 0, _this.f0);
        }
        _this.levz[v2] = 0.9;
        _this.clevc[v2] = 0;
        if (_this.trg2.egg) {
          _this.bomf.push([_this.trg2.xp, _this.trg2.yp]);
        }
        cloo();
      }
      _root.levsav[_root.lev!][_this.trg2.savv] = _this.trg2._currentframe;
      cloo();
      return true;
    }
  }
  return false;
}
//Flash method:
function moveon() {
  if (_root.chaps == 11 && _root.lev == _root.bossl) {
  }
  _root.aloc();
  _root.lastl = _root.lev;
  _root.mapa._visible = false;
  _root.hud._visible = false;
  this.onEnterFrame = undefined;
}
function getf() {
  if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
    if (_this.xenf > 0) {
      _this.f1 = 2;
    } else {
      _this.f1 = 1;
    }
  } else if (_this.yenf < 0) {
    _this.f1 = 4;
  } else {
    _this.f1 = 3;
  }
  if (_this.altboss && _this.trg.s == 19) {
    _this.f1 += 4;
  }
}
function bosssp() {
  if (!_this.trg.firsttx && !_this.nobob) {
    _this.nobob = true;
    _this.trg.firsttx = true;
    if (_root.chaps == 6 && _root.lev != _root.bossl2) {
      sams();
      if (_root.samer > 1) {
        _root.locker[88] = true;
      }
    }
    if (
      (_root.chaps < 8 ||
        (_root.chaps == 8 && _root.double && _root.lev == _root.bossl2)) &&
      (_root.chaps != 6 ||
        (_root.locker[4] && (_root.chala > 4 || _root.chala == 0)))
    ) {
      if (_root.lev != _root.bossl2) {
        this.create(320, 200, 0, 0, 0, 0, 5.09);
      }
      this.create(320, 360, 0, 0, 0, 0, 5.1);
      let f1 = this.ingrid(320, 200);
      this.bloww(f1);
      f1 = this.ingrid(320, 360);
      this.bloww(f1);
    } else {
      if (_root.chaps == 9 || _root.chala < 9) {
        let f1 = _root.lox[_root.chala];
        if (f1 > 0) {
          _root.locker[f1] = true;
        }
      }
      if (_root.chaps != 6) {
        if (_root.chaps == 11) {
          let f10 = [91, 92, 96, 93, 97, 94, 95];
          _root.locker[f10[_root.skiner]] = true;
          _root.locker[75] = true;
          if (_root.hardmode) {
            _root.locker[103] = true;
            f10 = [106, 108, 109, 107, 112, 110, 111];
            _root.locker[f10[_root.skiner]] = true;
            if (
              _root.locker[106] &&
              _root.locker[107] &&
              _root.locker[108] &&
              _root.locker[109] &&
              _root.locker[110] &&
              _root.locker[111] &&
              _root.locker[112]
            ) {
              _root.locker[104] = true;
            }
          }
        } else if (_root.chaps == 9) {
          if (_root.altchap) {
            let f10 = [65, 66, 67, 68, 70, 69, 72];
            _root.locker[f10[_root.skiner]] = true;
            if (_root.so.data.icer++ >= 5) {
              _root.locker[74] = true;
            }
            if (!trixx(47)) {
            }
            if (_root.hardmode) {
              _root.locker[101] = true;
            }
          } else {
            if (_root.hardmode) {
              _root.locker[100] = true;
            }
            let f10 = [55, 59, 60, 63, 62, 61, 73];
            _root.locker[f10[_root.skiner]] = true;
          }
        } else if (_root.lev != _root.bossl2) {
          if (_root.hardmode) {
            _root.locker[102] = true;
          }
          _root.locker[3] = true;
          if (_root.skiner == 5) {
            _root.locker[58] = true;
          } else if (_root.skiner == 4) {
            _root.locker[38] = true;
          } else if (_root.skiner == 6) {
            _root.locker[71] = true;
          } else if (_root.skiner >= 1) {
            _root.locker[25 + _root.skiner] = true;
          }
        }
        if (_root.lev != _root.bossl2) {
          _root.so.data.wins = _root.so.data.wins + 1;
          if (_root.so.data.wins > 10 && _root.chaps < 9) {
            if (_root.chala == 9) {
              this.create(320, 280, 0, 0, 0, 0, 5.09);
            } else if (_root.chala == 10) {
              this.create(320, 280, 0, 0, 0, 0, 5.34);
            } else {
              this.create(280, 280, 0, 0, 0, 0, 5.09);
              this.create(360, 280, 0, 0, 0, 0, 5.34);
            }
          } else {
            this.create(320, 280, 0, 0, 0, 0, 5.34);
          }
          if (_root.so.data.wins > 15) {
            _root.locker[89] = true;
          }
        }
      }
    }
    if (_root.lev == _root.bossl) {
      if (
        _root.chaps == 2 ||
        _root.chaps == 4 ||
        _root.chaps == 6 ||
        _root.chaps == 8
      ) {
        if (_root.nodmg) {
          _root.locker[48 + _root.chaps / 2] = true;
        }
        _root.nodmg = true;
        if (_root.chaps == 6 && _root.locker[74]) {
          _this.poli = true;
          this.create(200, 300, 0, 0, 0, 0, 5.35);
        }
      }
    }
    _root.lcomp[_root.chaps]++;
    _root.bossk[_root.bosss] = true;
    if ((_root.bosss >= 9 && _root.bosss <= 12) || _root.bosss == 22) {
      _root.horsedown = _root.horsedown + 1;
    }
    if (
      _root.bossk[1] &&
      _root.bossk[2] &&
      _root.bossk[13] &&
      _root.bossk[17]
    ) {
      _root.locker[19] = true;
    }
    if (
      _root.bossk[3] &&
      _root.bossk[4] &&
      _root.bossk[14] &&
      _root.bossk[18]
    ) {
      _root.locker[20] = true;
    }
    if (_root.bossk[5] && _root.bossk[6] && _root.bossk[15]) {
      _root.locker[21] = true;
    }
    if (
      _root.bossk[9] &&
      _root.bossk[10] &&
      _root.bossk[11] &&
      _root.bossk[12] &&
      _root.horsedown >= 4
    ) {
      _root.locker[25] = true;
    }
    if (_root.chaps == 2) {
      _root.locker[13] = true;
    }
    if (_root.chaps == 4) {
      _root.locker[14] = true;
    }
    if (_root.lcomp[2] >= 25) {
      _root.locker[22] = true;
    }
    if (_root.lcomp[4] >= 20) {
      _root.locker[23] = true;
    }
    if (_root.lcomp[6] >= 15) {
      _root.locker[24] = true;
    }
  }
}
function firr(trg) {
  var _loc3_ =
    _this.ups[6] * 1.5 +
    (_this.ups[32] + _this.ups[80] + _this.ups[1] + _this.ups[120]) * 0.7 +
    (_this.ups[196] + _this.ups[59] - _this.ups[182] * 2.3) * 0.4 +
    (_this.ups[101] + _this.ups[90] + _this.ups[189]) * 0.2;
  if (_this.ups[120]) {
    _loc3_ = _loc3_ + 1;
  }
  if (_root.skiner == 6) {
    _loc3_ -= 0.25;
  }
  let f1 = Math.sqrt(Math.max(0, 1 + _loc3_ * 1.3));
  trg.fire = Math.max(5, 16 - f1 * 6 - Math.min(_loc3_, 0) * 6);
  if (_this.ups[69]) {
    trg.fire *= 0.8;
  }
  if (_this.ups[2]) {
    trg.fire *= 2.1;
    trg.fire += 3;
  }
  if (trixx(39)) {
    trg.fire -= 2;
  }
  if (trg == _this.player) {
    _root.firra = trg.fire;
  }
}
function bossfire(f10, f9, f11, f12, f13) {
  let f1 = _this.trg.xp;
  let f2 = _this.trg.yp;
  let f3 = 10;
  if (f11 <= 0) {
    f11 = 0;
  }
  if (_this.helpss > 1 && _this.trg.s == 20) {
    f10 *= 0.6;
  }
  if (_this.helpss > 2 && _this.trg.s == 20) {
    f10 *= 0.8;
  }
  if (_this.trg.specoz == 23 && _this.trg.s == 20) {
    f10 *= 0.7;
  }
  let i = 0;
  while (i < f10) {
    if (f9) {
      _this.xenf = _this.yenf = 0;
      if (f12 != 0 || f12 == undefined) {
        _this.xenf = _this.trg.xp - _this.player.xp;
      }
      if (f13 != 0 || f13 == undefined) {
        _this.yenf = _this.trg.yp - _this.player.yp;
      }
      if (f13) {
        if (f13 * _this.yenf > 0) {
          _this.yenf = 0;
        }
        _this.yenf *= Math.abs(f13);
      }
      if (f12) {
        if (f12 * _this.xenf > 0) {
          _this.xenf = 0;
        }
        _this.xenf *= Math.abs(f12);
      }
      _this.enf = enfget(_this.xenf, _this.yenf);
      _this.enf = -7 / _this.enf;
      _this.xenf *= _this.enf;
      _this.yenf *= _this.enf;
      let f14 = Math.random() * 3.5;
      if (_this.trg.worm && f10 == 1) {
        f14 *= 3;
      }
      _this.xenf += crand(f14);
      _this.yenf += this.crand();
    } else {
      _this.xenf = crand(7);
      _this.yenf = this.crand();
    }
    _this.f0 = Math.random() * 6;
    _this.trg2 = create(
      _this.trg.xp,
      _this.trg.yp,
      0,
      _this.xenf,
      _this.yenf,
      0,
      9,
      _this.trg.s
    );
    _this.trg2.fd = 0.32 + f11 * 0.1;
    _this.trg2.dm = (0 - random(30)) * 0.8 + 5 - f11;
    _this.trg2.d._xscale = _this.trg2.d._yscale =
      90 + random(2) * 40 + Math.random() * 5;
    if (_this.trg.s == 62) {
      _this.trg2.dy -= 50;
    }
    if (_this.trg.s == 102) {
      if (_this.trg.state == 2) {
        _this.trg2.dy -= 40;
      }
    }
    if (_this.trg.s == 102 || _this.trg.minb == 3) {
      if ((random(10) == 0 && _this.altboss) || _this.trg.minb == 3) {
        _this.trg2.hom = true;
        colorit(_this.trg2, 0.8, 1, 2.5, 0, 0, 0);
        _this.trg2._xscale *= 1.2;
        _this.trg2._yscale *= 1.2;
        if (_this.trg.minb == 3) {
          _this.trg.fd -= 1;
        }
        if (_this.trg.s == 46 && _this.trg.specoz == 23) {
          _this.trg2.longshot = true;
          _this.trg2.fd = 0.32;
          _this.trg2.dm = -4;
        }
      } else {
        var _loc3_ = new flash.geom.Transform(_this.trg2);
        _loc3_.colorTransform = _this.bull;
      }
    }
    i++;
  }
  return _this.trg2;
}
function newstart(f1, f22) {
  if (f1) {
    _root.hp = 100;
    newstats();
    _root.newstartt = true;
  } else {
    _root.getup = true;
    if (_root.chaps != 11) {
      _root.chaps = _root.chaps + 1;
    }
    if (!f22) {
      _root.cuts = true;
    }
  }
  _root.levz = undefined;
  _root.door = -1;
  _root.playerx = _root.playery = 0;
  moveon();
  _root.gotoAndStop("reset");
}
function plff() {
  _this.plox = Math.max(7, _this.plox);
  if (
    _this.ups[69] ||
    (_this.ups[118] && (_this.xenf != 0 || _this.yenf != 0))
  ) {
    _this.chax = _this.xenf;
    _this.chay = _this.yenf;
    if (_this.chaf == undefined) {
      _this.chaf = _this.fra + Math.max(0, _root.firra - 10) * 4;
      _this.lchaf = _this.chaf;
    }
  }
  if (_this.xenf != 0 || _this.yenf != 0) {
    _this.xxenf = _this.xenf;
    _this.yyenf = _this.yenf;
  }
  if (_this.ups[152]) {
    _this.trg.xpp = _this.xenf;
    _this.trg.ypp = _this.yenf;
    _this.b1 = _this.fra % 3 == 0;
    lasershow(_this.trg, 5, _this.b1);
    if (_this.b1) {
      _this.trg.lass = _this.lass;
      _this.trg.lfrr = _this.fra;
      _this.llss = true;
      _this.xenf = _this.trg.xpp;
      _this.yenf = _this.trg.ypp;
      _this.secol *= 0.8;
      _this.secol += 0.2;
    }
  }
  if (
    _this.ups[152] &&
    (_this.sob == -1 || _root.hat[11]) &&
    _this.trg.fire < 0
  ) {
    _this.secol += 1;
    firr(_this.trg);
    _this.sob = 1;
  }
  if (
    _this.trg.fire < 0 &&
    ((!_this.ups[69] && !_this.ups[118]) || _this.chaz || _root.bombnext) &&
    _this.unic <= 0 &&
    (_this.xenf != 0 || _this.yenf != 0)
  ) {
    firr(_this.trg);
    if (_this.ups[118] && !_root.bombnext) {
      _this.trg.fire = 20;
      _this.f11 = true;
      _this.trg.xpp = _this.xenf;
      _this.trg.ypp = _this.yenf;
      _this.trg.xbew *= 0.7;
      _this.trg.ybew *= 0.7;
    } else if (
      (_this.f11 = _this.ups[68] && !_root.bombnext && !_this.ups[52])
    ) {
      _this.trg.xpp = _this.xenf;
      _this.trg.ypp = _this.yenf;
      _this.trg.d.d.d.d.d.gotoAndStop(this.plo);
      this.lasershow(_this.trg, true);
      _root.soundy("RedLightning_Zap_" + random(3) + ".mp", 60);
      _this.llss = true;
      _this.xenf = _this.trg.xpp;
      _this.yenf = _this.trg.ypp;
    } else {
      _this.llss = false;
    }
    _this.enf = enfget(_this.xenf, _this.yenf);
    _this.enf = 10 / _this.enf;
    _this.xenf *= _this.enf;
    _this.yenf *= _this.enf;
    _this.xxenf = _this.xenf;
    _this.yyenf = _this.yenf;
    _this.xenf += _this.trg.xbew * 0.6;
    _this.yenf += _this.trg.ybew * 0.6;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (_this.enf < 10) {
      _this.enf = 10 / _this.enf;
      _this.xenf *= _this.enf;
      _this.yenf *= _this.enf;
    }
    if (_this.sob == 1 && !_root.hat[11]) {
      _this.sob = -1;
    } else {
      _this.sob = 1;
    }
    let v1 = 0.3 + Math.random() * 0.2;
    if (_this.ups[2]) {
      v1 = 0.8;
      _this.sob = 1;
    }
    let f1 = _this.trg.xp - _this.yenf * _this.sob * v1;
    let f2 = _this.trg.yp + _this.xenf * _this.sob * v1;
    if (!_this.llss) {
      _root.soundy("Tears_Fire_" + random(3) + ".mp");
    }
    if (
      (_this.ups[55] && (random(2) == 0 || _this.ups[2])) ||
      (_this.ups[87] && random(8) == 0)
    ) {
      var _loc4_ = _this.trg.xp;
      var _loc3_ = _this.trg.yp;
      this.create(_loc4_, _loc3_, 0, 0 - _this.xxenf, 0 - _this.yyenf, 0, 2);
      if (_this.ups[87]) {
        this.create(_loc4_, _loc3_, 0, 0 - _this.yyenf, _this.xxenf, 0, 2);
        this.create(_loc4_, _loc3_, 0, _this.yyenf, 0 - _this.xxenf, 0, 2);
      }
    }
    if (_this.ups[168] && !_root.bombnext) {
      _this.trg.fire = -1;
      if (_this.bombdrop <= 0) {
        _this.bombdrop = 30;
        _this.drop = this.create(
          _this.player.xp,
          _this.player.yp,
          0,
          0,
          0,
          0,
          37
        );
        _this.drop.d.gotoAndStop(70);
      }
    } else if (!_this.f11) {
      var _loc2_ = this.create(f1, f2, 0, _this.xenf, _this.yenf, 0, 2);
      if (_this.ups[52] && !_root.bombnext) {
        _this.trg.fire *= 3;
        _this.trg.fire += 10;
        _this.enf = 14 / enfget(_loc2_.xbew, _loc2_.ybew);
        _loc2_.xbew *= _this.enf;
        _loc2_.ybew *= _this.enf;
        _loc2_.s = 4;
        attach(_loc2_, 4);
        _loc2_.d.d.gotoAndPlay(30);
        _loc2_.lfra = _this.fra;
        _loc2_.spl = -10;
        _loc2_.flyby = false;
        _loc2_.dmg *= 4;
        _loc2_.playbomb = true;
        if (_this.ups[106]) {
          _loc2_.dmg += 50;
          _loc2_._xscale = _loc2_._yscale = 123;
          if (_this.ups[106]) {
            _loc2_.col = 5;
          }
        }
        _loc2_.dmg -= 40;
      } else if (_root.bombnext) {
        if (_loc2_ != _this.player) {
          if (_root.bombnext == 2) {
            _loc2_.flir = true;
            attach(_loc2_, 497);
            _this.enf = 14 / enfget(_loc2_.xbew, _loc2_.ybew);
            _loc2_.xbew *= _this.enf;
            _loc2_.ybew *= _this.enf;
            _loc2_.s = 4;
            _loc2_.spl = -10;
            _loc2_.flyby = false;
            colorit(_loc2_, 1, 1, 1, 0, 0, 0);
          } else {
            _loc2_.bomb = true;
            attach(_loc2_, 2);
            colorit(_loc2_, 1, 1, 1, 0, 0, 0);
            _loc2_.d.gotoAndStop("head");
            _loc2_.dy -= 10;
            _loc2_.dm += 1.2;
            _this.trg.d.d.d.gotoAndStop(29);
          }
          _root.bombnext = false;
          _root.itc = false;
        }
      } else if (_this.ups[2] || _this.ups[149]) {
        if (
          (_this.ups[169] && _this.ups[2] != 1 && !_this.ups[153]) ||
          _this.ups[149]
        ) {
          _loc2_.xp = _this.player.xp;
          _loc2_.yp = _this.player.yp;
          if (_this.ups[149]) {
            _this.trg.fire * 2;
            _this.trg.fire += 10;
            _loc2_.bomb = true;
            _loc2_.bombo = true;
            _loc2_.d._xscale = _loc2_.d._yscale = 160;
            f1 = Math.random() * 0.2 + 0.7;
            _loc2_.xbew *= f1;
            _loc2_.ybew *= f1;
            _loc2_.fd = 0.6;
            _loc2_.dm *= 0.7;
            _loc2_.dm -= 13;
            _loc2_.dmg *= 2.5;
            _loc2_.dmg -= 35;
            colorit(_loc2_, 0.5, 0.9, 0.4, 0, 0, 0);
            if (_this.ups[115]) {
              _loc2_._alpha = 50;
            }
          }
        } else {
          if (_this.ups[153]) {
            _this.v2 = 0.07;
          } else {
            _this.v2 = 0.05;
          }
          _loc2_.xbew -= _this.yenf * _this.v2;
          _loc2_.ybew += _this.xenf * _this.v2;
          f1 = _this.trg.xp + _this.yenf * _this.sob * v1;
          f2 = _this.trg.yp - _this.xenf * _this.sob * v1;
          trg3 = this.create(
            f1,
            f2,
            0,
            _this.xenf + _this.yenf * _this.v2,
            _this.yenf - _this.xenf * _this.v2,
            0,
            2
          );
          trg3.sot = _loc2_;
          f1 = _this.trg.xp + _this.xenf;
          f2 = _this.trg.yp + _this.yenf;
          if (_this.ups[153]) {
            _this.v1 = 0.02;
            _this.v2 = 0.32;
            trg3 = this.create(
              f1 + _this.yenf * _this.v2 * 1.5,
              f2 - _this.xenf * _this.v2,
              0,
              _this.xenf + _this.yenf * v1,
              _this.yenf - _this.xenf * v1,
              0,
              2
            );
            trg3.sot = _loc2_;
            trg3 = this.create(
              f1 - _this.yenf * _this.v2 * 1.5,
              f2 + _this.xenf * _this.v2,
              0,
              _this.xenf - _this.yenf * v1,
              _this.yenf + _this.xenf * v1,
              0,
              2
            );
            trg3.sot = _loc2_;
          } else {
            trg3 = this.create(f1, f2, 0, _this.xenf, _this.yenf, 0, 2);
            trg3.sot = _loc2_;
          }
        }
      }
    }
    _this.plox = 7 + _this.trg.fire * 0.45;
    if (_this.ups[118]) {
      if (_loc2_.bomb) {
        _this.plo = 1;
        _this.plox = 1;
        _this.trg.d.d.d.d.gotoAndStop(1);
      } else {
        _this.plox = 24;
      }
    }
    _this.chaz = _this.chaf = undefined;
  } else if (_this.trg.fire1 < 0) {
    _this.trg.fire1 = 10;
    _this.xenf = _this.xxenf;
    _this.yenf = _this.yyenf;
    _this.enf = enfget(_this.xenf, _this.yenf);
    _this.enf = 10 / _this.enf;
    _this.xenf *= _this.enf;
    _this.yenf *= _this.enf;
    _this.xxenf = _this.xenf;
    _this.yyenf = _this.yenf;
    _this.xenf += _this.trg.xbew * 0.6;
    _this.yenf += _this.trg.ybew * 0.6;
    _this.enf = enfget(_this.xenf, _this.yenf);
    if (_this.enf < 10) {
      _this.enf = 10 / _this.enf;
      _this.xenf *= _this.enf;
      _this.yenf *= _this.enf;
    }
    _this.v1 = 0.3 + Math.random() * 0.2;
    if (_this.ups[2]) {
      _this.v1 = 0.8;
      _this.sob = 1;
    }
    let f1 = _this.trg.xp;
    let f2 = _this.trg.yp;
    let e = 0;
    while (e < _this.folz.length) {
      _loc2_ = _this.folz[e];
      if (
        _this.fra - _loc2_.lfra > _this.trg.fire1 + 3 &&
        !_loc2_.cat &&
        !_loc2_.mon &&
        !_loc2_.hol &&
        !_loc2_.ni &&
        !_loc2_.bum
      ) {
        if (_loc2_.maga) {
          _loc2_.outway = false;
          _loc2_.charge = true;
          _loc2_.xbew = _this.xenf;
          _loc2_.ybew = _this.yenf;
          _loc2_.xp = _this.player.xp;
          _loc2_.yp = _this.player.yp;
          if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
            sideflip(_this.xenf, _loc2_.d);
            _loc2_.d.gotoAndStop(35);
          } else if (_this.yenf < 0) {
            _loc2_.d.gotoAndStop(36);
          } else {
            _loc2_.d.gotoAndStop(37);
          }
          _loc2_.lfra = _this.fra + 80;
          _loc2_.dmg = 3.5;
        } else if (_loc2_.baa != 5) {
          _loc2_.d.gotoAndStop(_this.plo + 4);
          _loc2_.lfra = _this.fra;
          if (_loc2_.laser) {
            _loc2_.d.gotoAndStop(_this.plo + 45);
            f1 = 1 / enfget(_this.xenf, _this.yenf);
            _loc2_.xpp = _this.xenf * f1;
            _loc2_.ypp = _this.yenf * f1;
            _this.lassd = 3;
            this.lasershow(_loc2_, 2);
            _root.soundy("RedLightning_Zap_" + random(3) + ".mp", 60);
          } else {
            if (!_this.llss) {
              _root.soundy("Tears_Fire_" + random(3) + ".mp");
            }
            if (_loc2_.dou) {
              _this.babymode = 2;
            } else if (_loc2_.baa > 1) {
              _this.babymode = _loc2_.baa;
            } else {
              _this.babymode = 1;
            }
            if (_this.babymode == 8) {
              f1 = [1, 2, 3, 4, 5, 6, 7];
              _this.babymode = f1[random(f1.length)];
            }
            f1 = _loc2_.xp;
            f2 = _loc2_.yp;
            let f10 = _this.doub;
            _this.doub = _loc2_.dou;
            if (_this.babymode == 7) {
              let f3 = 0.2;
              var trg3 = this.create(
                f1,
                f2,
                0,
                _this.xenf + _this.yenf * f3,
                _this.yenf - _this.xenf * f3,
                0,
                2
              );
              trg3.d._xscale *= 0.8;
              trg3.d._yscale *= 0.8;
              _this.babymode = 7;
              f3 = 0 - f3;
              trg3 = this.create(
                f1,
                f2,
                0,
                _this.xenf + _this.yenf * f3,
                _this.yenf - _this.xenf * f3,
                0,
                2
              );
              trg3.d._xscale *= 0.8;
              trg3.d._yscale *= 0.8;
            } else {
              var trg3 = this.create(f1, f2, 0, _this.xenf, _this.yenf, 0, 2);
              trg3.d._xscale *= 0.8;
              trg3.d._yscale *= 0.8;
              if (_loc2_.baa == 9) {
                trg3.xbew *= -1;
                trg3.ybew *= -1;
              }
            }
            if (_loc2_.baa == 11) {
              _loc2_.d.gotoAndStop(_this.plo + 156);
            } else if (_loc2_.baa == 10) {
              _loc2_.d.gotoAndStop(_this.plo + 165);
            } else if (_loc2_.baa == 9) {
              _loc2_.d.gotoAndStop(_this.plo + 142);
            } else if (_loc2_.baa == 8) {
              _loc2_.d.gotoAndStop(_this.plo + 120);
            } else if (_loc2_.baa == 7) {
              _loc2_.d.gotoAndStop(_this.plo + 111);
            } else if (_loc2_.baa == 6) {
              _loc2_.d.gotoAndStop(_this.plo + 102);
            } else if (_loc2_.baa == 4) {
              _loc2_.d.gotoAndStop(_this.plo + 68);
            } else if (_loc2_.baa == 3) {
              _loc2_.d.gotoAndStop(_this.plo + 59);
            } else if (_loc2_.meat) {
              _loc2_.d.gotoAndStop(_this.plo + 27);
            } else if (_loc2_.dou) {
              _loc2_.d.gotoAndStop(_this.plo + 13);
            }
            _this.doub = f10;
          }
          if (!_this.ups[52]) {
            e++;
          }
        }
      }
      e++;
    }
    _this.plox1 = 7 + _this.trg.fire1 * 0.45;
  }
  if (
    _this.plox > 8 ||
    (_root.fmode == 7 && !_this.ups[68] && !_this.ups[118])
  ) {
    if (_this.ups[68] && _this.ups[59]) {
      _this.trg.d.d.d.d.gotoAndStop(_this.plo + 8);
    } else {
      _this.trg.d.d.d.d.gotoAndStop(_this.plo + 4);
    }
  } else {
    _this.trg.d.d.d.d.gotoAndStop(_this.plo);
  }
}
function chaxx() {
  let f1 = 1;
  if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
    _this.yenf = 0;
    if (_this.xenf < 0) {
      _this.xenf = f1;
    } else {
      _this.xenf = 0 - f1;
    }
  } else {
    _this.xenf = 0;
    if (_this.yenf < 0) {
      _this.yenf = f1;
    } else {
      _this.yenf = 0 - f1;
    }
  }
  _this.trg.xpp = _this.xenf;
  _this.trg.ypp = _this.yenf;
  return true;
}
function chaxy() {
  outgrid(_this.trg.til);
  _this.f3 = _this.xenf;
  _this.f4 = _this.yenf;
  _this.f5 = random(8);
  _this.f1 = _this.player.xp + _this.player.xbew * _this.f5;
  _this.f2 = _this.player.yp + _this.player.ybew * _this.f5;
}
function chaa(f9) {
  chaxy();
  if (enfcheckx(_this.f3, _this.f4, _this.f1, _this.f2, 200)) {
    if (f9 == 2) {
      _this.f3 = true;
    } else if (!f9) {
      _this.f3 = linecheck(_this.f3, _this.f4, _this.f1, _this.f2);
    } else {
      _this.f3 = linecheckxx(_this.f3, _this.f4, _this.f1, _this.f2);
    }
    if (_this.f3) {
      return chaxx();
    }
  }
}
function eyefly() {
  _this.trg.xbew *= 0.7;
  _this.trg.ybew *= 0.7;
  let v1 = 1;
  if (_this.trg.xbew > 0) {
    _this.trg.xbew += v1;
  } else {
    _this.trg.xbew -= v1;
  }
  if (_this.trg.ybew > 0) {
    _this.trg.ybew += v1;
  } else {
    _this.trg.ybew -= v1;
  }
  v1 = 3;
  if (_this.trg.xp > 580) {
    _this.trg.xbew -= v1;
  }
  if (_this.trg.xp < 60) {
    _this.trg.xbew += v1;
  }
  if (_this.trg.yp > 410) {
    _this.trg.ybew -= v1;
  }
  if (_this.trg.yp < 170) {
    _this.trg.ybew += v1;
  }
}
function friends() {
  _this.trg.damger =
    _this.trg.s == 3 &&
    ((_this.trg.alt && _this.trg.fly) ||
      _this.trg.meat ||
      _this.trg.charge ||
      _this.trg.ang ||
      _this.trg.bird ||
      _this.trg.bluf ||
      _this.trg.eye ||
      _this.trg.ni ||
      _this.trg.hairb ||
      _this.trg.dad);
  _this.trg.ggh = true;
  colorit(_this.trg, 1, 1, 1, 0, 0, 0);
  _this.trg.dou = false;
  if (_this.trg.meat && _this.trg.meat != 5) {
    if (_this.trg.me2) {
      _this.trg.meat = Math.min(4, _this.ups[73] - 4);
    } else {
      _this.trg.meat = Math.min(4, _this.ups[73]);
    }
  }
  if (!_this.trg.stopi) {
    if (_this.trg.hairb) {
      enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.player.xp,
        _this.player.yp,
        10000
      );
      let f1 = 15 + _root.hairb * 2;
      _this.enf = (Math.min(1.4, f1 - _this.enf) / _this.enf) * 0.07;
      _this.trg.xbew += _this.xenf * _this.enf;
      _this.trg.ybew += _this.yenf * _this.enf;
      f1 = 0.87 + _root.hairb * 0.01;
      if (
        _this.trg.d._currentframe != 149 ||
        _this.trg.d.d._currentframe == _this.trg.d.d._totalframes
      ) {
        _this.trg.d.gotoAndStop(148);
        _this.trg.d.d.gotoAndStop(_root.hairb);
      } else {
        _this.trg.d.d.nextFrame();
        _this.trg.d.d.d.gotoAndStop(_root.hairb);
      }
      _this.trg.xbew *= f1;
      _this.trg.ybew *= f1;
      _this.trg.dmg = 3 + _root.hairb * 2;
      if (_this.fra % 14 == 0) {
        _this.trg.hh = [];
      }
    } else if (_this.trg.eye) {
      if (random(4) == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          _this.trg.spl + 1 + random(10),
          Math.random() * 0.3 + 0.1
        );
      }
      _this.trg.dmg = 8;
      if (_this.fra % 14 == 0) {
        _this.trg.hh = [];
      }
      _this.trg.d.gotoAndStop(130);
      eyefly();
    } else if (
      _this.trg.meat > 2 ||
      _this.trg.bird ||
      _this.trg.bluf ||
      (_this.trg.bum && _this.ashut == 0) ||
      _this.trg.dad
    ) {
      if (_this.trg.bluf && _this.trg.trg2 == undefined) {
        _this.trg.trg2 = _this.player;
      }
      if (
        random(4) == 0 &&
        !_this.trg.bird &&
        !_this.trg.bluf &&
        !_this.trg.bum &&
        !_this.trg.dad
      ) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          _this.trg.spl + 1 + random(10),
          Math.random() * 0.3 + 0.1
        );
      }
      _this.trg.ggh = false;
      if (_this.fra % 14 == 0) {
        _this.trg.hh = [];
      }
      if (_this.trg.bird || _this.trg.meat > 2) {
        if (_this.trg.trg2 == _this.player) {
          if (_this.ablufer && random(3) == 0) {
            _this.trg.trg2 = _this.ablufer;
          }
        }
      }
      if (_this.trg.bum) {
        if (_this.trg.d._currentframe != 135) {
          _this.trg.d.gotoAndStop(134);
        }
      } else if (_this.trg.bluf) {
        _this.trg.ggh = true;
        if (_this.fra10 || _this.trg.bluf != 2) {
          _this.trg.bluf = 2;
          _this.trg.dmg = 1.2 * dmgdo() + 3;
        }
        let f12 = _this.fra * 0.03;
        if (_this.ups[112]) {
          f12 *= 2;
        }
        f11 =
          (f12 + (_this.blub / Math.max(1, _this.ablub)) * 2) *
          3.141592653589793;
        if (_this.trg.trg2.xp <= -100 || _this.trg2.s < 10) {
          _this.trg.trg2 = _this.player;
        }
        if (_this.trg.trg2 == _this.player && f11 > -100) {
          if (_this.fra2) {
            let f1 = 1;
            if (_this.ablub > 4) {
              f1 = 1 + (_this.ablub - 4) * 0.1;
            }
            _this.trg.xpp = _this.player.xp + Math.sin(f11) * 35 * f1;
            _this.trg.ypp = _this.player.yp + Math.cos(f11) * 30 * f1;
          }
          if (_this.ablufer && random(3) == 0) {
            _this.trg.trg2 = _this.ablufer;
          }
        } else if (_this.trg.trg2 != undefined) {
          _this.trg2 = _this.trg.trg2;
          _this.trg.xpp = _this.trg2.xp;
          _this.trg.ypp = _this.trg2.yp;
        } else {
          _this.trg.xpp = _this.trg.xp;
          _this.trg.ypp = _this.trg.yp;
        }
        if (_this.trg.trg2 == undefined) {
          _this.trg.trg2 = _this.player;
        }
        _this.blub++;
        _this.blufb++;
        _this.trg.d.gotoAndStop(128);
      } else if (_this.trg.dad) {
        _this.trg.ggh = true;
        _this.trg.dmg = 20;
        _this.trg.d.gotoAndStop(151);
        if (_this.trg.d.d._currentframe != 1) {
          _this.trg.d.d.nextFrame();
        }
        if (_this.trg.d.d._currentframe >= 37) {
          _this.trg.d.d.gotoAndStop(1);
        }
        if (
          (_this.trg.bh =
            _this.trg.d.d._currentframe > 10 &&
            _this.trg.d.d._currentframe < 33)
        ) {
          _this.trg.fire = 100;
        }
      } else if (_this.trg.bird) {
        _this.trg.ggh = true;
        _this.trg.dmg = 2;
        if (_this.trg.bird == 2) {
          _this.trg.d.gotoAndStop(171);
        } else {
          _this.trg.d.gotoAndStop(83);
        }
      } else if (_this.trg.meat == 5) {
        _this.trg.dmg = 7;
        if (_this.sk == 5) {
          _this.trg.d.gotoAndStop(80);
        } else if (_this.sk == 7) {
          _this.trg.d.gotoAndStop(81);
        } else {
          _this.trg.d.gotoAndStop(79);
        }
        _this.trg.sp = _root.playsp * 2;
      } else if (_this.trg.meat > 3) {
        _this.trg._xscale = _this.trg._yscale = 143;
        _this.trg.dmg = 5.5;
        _this.trg.sp = 2.2;
        _this.trg.d.gotoAndStop(54);
      } else {
        _this.trg.dmg = 3.5;
        _this.trg.sp = 1.8;
        _this.trg.d.gotoAndStop(54);
      }
      _this.trg.outway = false;
      if (_this.trg.trg2.dones) {
        _this.trg.trg2 = _this.player;
        _this.trg.fire = 50 - _this.trg.dmg * 5;
      }
      if (
        _this.trg.trg2 == undefined ||
        (_this.trg.trg2 == _this.mheart && !_this.trg.trg2.bh)
      ) {
        _this.trg.trg2 = _this.player;
        _this.trg.fire = 5;
      }
      _this.trg2 = _this.trg.trg2;
      if (_this.trg2 == _this.player) {
        _this.f1 = 80;
      } else {
        _this.f1 = 20;
      }
      _this.trg.fire--;
      if (_this.trg.bluf) {
        _this.trg.bh = _this.fra3;
        if (_this.fra2) {
          if (_this.trg.bluf) {
            _this.xenf = _this.trg.xpp - _this.trg.xp;
            _this.yenf = _this.trg.ypp - _this.trg.yp;
          }
          _this.enf = enfget(_this.xenf, _this.yenf);
          _this.enf = (Math.min(2, _this.enf * 0.15) / _this.enf) * 2;
          _this.xenf *= _this.enf;
          _this.yenf *= _this.enf;
          _this.trg.xbew += _this.xenf;
          _this.trg.ybew += _this.yenf;
        }
      } else {
        if (_this.fra % 3 == 0 || _this.trg.whaf == undefined) {
          _this.trg.whaf =
            !enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg2.xp,
              _this.trg2.yp,
              _this.f1
            ) && _this.trg.fire <= 0;
        }
        if (_this.trg.whaf) {
          if (_this.trg.bird || _this.trg.bum || _this.trg.dad) {
            _this.xenf = _this.trg2.xp - _this.trg.xp;
            _this.yenf = _this.trg2.yp - _this.trg.yp;
            _this.enf = enfget(_this.xenf, _this.yenf);
            if (_this.trg.dad && _this.enf < 30 && _this.trg2 != _this.player) {
              if (_this.trg.d.d._currentframe == 1) {
                _this.trg.d.d.nextFrame();
                _this.trg.stomps = random(3) + 1;
              }
            }
            if (_this.trg.dad) {
              _this.xenf += _this.trg2.xbew * 5 - _this.trg.xbew * 5;
              _this.yenf += _this.trg2.ybew * 5 - _this.trg.ybew * 5;
              _this.enf = enfget(_this.xenf, _this.yenf);
            }
            _this.enf = 1 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
            _this.trg.xbew += _this.xenf;
            _this.trg.ybew += _this.yenf;
          } else {
            pathfind(_this.trg, _this.trg2.xp, _this.trg2.yp, _this.trg.sp);
          }
        }
      }
      if (
        !_this.trg.bluf &&
        !_this.trg.dad &&
        _this.trg.d._currentframe != 135
      ) {
        if (enfget(_this.trg.xbew, _this.trg.ybew) > 2) {
          _this.trg.d.d.gotoAndStop(2);
          sideflip(_this.trg.xbew, _this.trg);
          _this.trg.d.d.he.gotoAndStop(5);
        } else {
          _this.trg.d.d.he.gotoAndStop(1);
          _this.trg.d.d.gotoAndStop(1);
        }
      }
      if (_this.trg.d._currentframe == 135) {
        _this.trg.d.d.nextFrame();
        if (_this.trg.d.d._currentframe == 10) {
          this.emo();
          _root.ups[144] -= 3 + random(2);
          let f2 = 5.1022 + random(5) * 0.0001;
          if (random(2) == 0) {
            if (random(3) == 0) {
              f2 = 5;
            } else {
              f2 = 5.03 + random(2) * 0.01;
            }
          } else if (random(3) != 0) {
            if (random(2) == 0) {
              f2 = 5.07;
            } else {
              f2 = 5.3;
            }
          } else {
            f2 = 5.35;
          }
          spaw(
            _this.trg.xp * 0.5 + _this.player.xp * 0.5,
            _this.trg.yp * 0.5 + _this.player.yp * 0.5,
            0,
            f2
          );
        }
        if (_this.trg.d.d._currentframe == _this.trg.d.d._totalframes) {
          _this.trg.d.gotoAndStop(134);
        }
      }
      if (_this.trg.bum) {
        if (_this.fra5) {
          let f13 = 200;
          let f6 = _this.trg.xp;
          let f7 = _this.trg.yp;
          let f2: any = 0;
          for (let z in _this.ball) {
            _this.trg2 = _this.ball[z];
            if (_this.trg2.s == 5) {
              if (!_this.trg2.dones && _this.trg2.d._currentframe == 2) {
                let f12 = enfcheck(_this.trg2.xp, _this.trg2.yp, f6, f7, f13);
                if (f12 < f13) {
                  f13 = f12;
                  f2 = _this.trg2;
                }
              }
            }
          }
          if (f13 == 200 || f2.s != 5) {
            _this.trg.trg2 = _this.player;
          }
          if (f2 && _this.trg.trg2 != f2) {
            _this.trg.fire = 5;
            _this.trg.trg2 = f2;
          }
          if (f13 < 30 && _this.trg2 != _this.trg) {
            _this.trg2 = _this.trg.trg2;
            _root.ups[144] += coincol(_this.trg2);
            _this.trg2.d.d.gotoAndStop(2);
            _this.trg2.dones = true;
          }
          if (_this.trg2 == _this.player) {
            let f12 = enfcheck(_this.trg2.xp, _this.trg2.yp, f6, f7, 100);
            if (f12 < 80) {
              if (_root.ups[144] > 5) {
                _this.trg.d.gotoAndStop(135);
              }
            }
          }
        }
      } else if (_this.fra10 || (!_this.trg.bluf && _this.fra2)) {
        if (
          _this.ashut > 0 &&
          (_this.trg2 == _this.player || _this.trg.fire < 200) &&
          (_this.fra + _this.trg.e) % 13 == 0
        ) {
          let f2 = false;
          if (random(2) == 0) {
            _this.f6 = _this.player.xp;
            _this.f7 = _this.player.yp;
          } else {
            _this.f6 = _this.trg.xp;
            _this.f7 = _this.trg.yp;
          }
          let f13 = 225 + _this.trg.dmg * 25;
          if (_this.trg.bluf) {
            f13 = 300;
          }
          for (let z in _this.ball) {
            _this.trg2 = _this.ball[z];
            if (_this.trg2.s > 9 && !_this.trg2.dones) {
              if (
                enfcheck(_this.trg2.xp, _this.trg2.yp, _this.f6, _this.f7, f13)
              ) {
                if (_this.trg2.pow >= 3 || _this.trg2.bh) {
                  _this.blufer = f2 = _this.trg2;
                }
              }
            }
          }
          if (f2 && _this.trg.trg2 != f2) {
            _this.trg.fire = 5;
            _this.trg.trg2 = f2;
          }
        }
      }
      if (_this.trg.dad && _this.trg.bh) {
        _this.trg.xbew *= 0.5;
        _this.trg.ybew *= 0.5;
      } else if (_this.trg.bird || _this.trg.dad) {
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
      }
    } else if (_this.trg.maga && _this.trg.charge) {
      if (
        mhity(_this.trg.xp + _this.trg.xbew, _this.trg.yp + _this.trg.ybew) ||
        _this.trg.charge > 1
      ) {
        this.killshit(this.ingrid(_this.trg.xp, _this.trg.yp));
        if (_this.trg.charge > 1) {
          _this.trg.charge = _this.trg.charge + 1;
        } else {
          _this.trg.charge = 2;
        }
        _this.trg.xbew *= 0.5;
        _this.trg.ybew *= 0.5;
        if (_this.trg.charge > 10) {
          _this.trg.charge = false;
        }
      }
    } else if (
      _this.trg.fly ||
      _this.trg.meat ||
      _this.trg.ang ||
      _this.trg.ni
    ) {
      let f1 = _this.player.xp - 2;
      let f2 = _this.player.yp - 4;
      if (_this.trg.alt) {
        if (_this.fra2) {
          _this.trg.hh = [];
        }
        if (_this.trg.alt == 2) {
          _this.trg.d.gotoAndStop(128);
          _this.trg.dmg = 2;
          f11 = _this.fra * 0.013 * 3.141592653589793;
          if (_this.ups[112]) {
            f11 *= 1.5;
          }
          _this.trg.xp = f1 + Math.sin(f11) * 110;
          _this.trg.yp = f2 + Math.cos(f11) * 90;
        } else {
          _this.trg.d.gotoAndStop(21);
          _this.trg.dmg = 5;
          f11 = (0 - _this.fra) * 0.02 * 3.141592653589793;
          if (_this.ups[112]) {
            f11 *= 1.5;
          }
          _this.trg.xp = f1 + Math.sin(f11) * 60;
          _this.trg.yp = f2 + Math.cos(f11) * 45;
        }
      } else {
        if (_this.trg.ni) {
          _this.trg.d.gotoAndStop(132);
          _this.trg.dmg = 15;
          if (_this.fra % 6 == 0) {
            _this.trg.hh = [];
          }
        } else if (_this.trg.ang) {
          _this.trg.dmg = 7;
          if (_this.fra % 18 == 0) {
            _this.trg.hh = [];
          }
          _this.trg.d.gotoAndStop(97);
        } else if (_this.trg.meat) {
          _this.trg.dmg = 7;
          if (_this.fra % 18 == 0) {
            _this.trg.hh = [];
          }
          if (_this.trg.meat <= 1) {
            _this.trg.d.gotoAndStop(22);
          } else {
            f11 += 11;
            _this.trg.dou = true;
            if (_this.trg.lfra + 4 < _this.fra) {
              _this.trg.d.gotoAndStop(_this.plo + 23);
            }
            _this.folz.push(_this.trg);
          }
        } else {
          _this.trg.d.gotoAndStop(20);
        }
        _this.flys.push(_this.e);
        let f12 = _this.fra * 0.03;
        if (_this.ups[112]) {
          f12 *= 2;
        }
        f11 = (f12 + _this.ffly * _this.fll) * 3.141592653589793;
        _this.trg.xp = f1 + Math.sin(f11) * 25;
        _this.trg.yp = f2 + Math.cos(f11) * 20;
        if (_this.trg.fly) {
          _this.lff = _this.trg;
        }
        if (!_this.trg.bluf) {
          _this.ffly++;
          if (_this.ffly > 3) {
            _this.lff.done = true;
          }
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
    } else {
      _this.trg.outway = true;
      let f1 =
        (_this.follow == _this.player ||
          _this.follow.maga ||
          _this.follow.dou ||
          _this.follow.ba ||
          _this.follow.hol ||
          _this.follow.ggho) &&
        !_this.trg.maga &&
        !_this.trg.bum &&
        !_this.trg.hol &&
        !_this.trg.cat &&
        !_this.trg.mon;
      _this.trg.baa = 0;
      if (f1) {
        _this.trg.baa = 0;
        var f11 = _this.lastbb;
        if (
          _this.trg.ggho &&
          _this.trg.ggho != 2 &&
          _this.lastbbb != 11 &&
          _this.lastbb != 11
        ) {
          _this.lastbb = _this.trg.baa = 11;
        } else if (
          _this.trg.ggho == 2 &&
          _this.trg.ggho != true &&
          _this.lastbbb != 10 &&
          _this.lastbb != 10
        ) {
          _this.lastbb = _this.trg.baa = 10;
        } else if (_this.ups[188] && _this.lastbbb != 9 && _this.lastbb != 9) {
          _this.lastbb = _this.trg.baa = 9;
        } else if (_this.ups[95] && _this.lastbbb != 2 && _this.lastbb != 2) {
          _this.lastbb = _this.trg.baa = 2;
        } else if (_this.ups[67] && _this.lastbbb != 1 && _this.lastbb != 1) {
          _this.lastbb = _this.trg.baa = 1;
        } else if (_this.ups[163] && _this.lastbbb != 6 && _this.lastbb != 6) {
          _this.lastbb = _this.trg.baa = 6;
        } else if (_this.ups[167] && _this.lastbbb != 7 && _this.lastbb != 7) {
          _this.lastbb = _this.trg.baa = 7;
        } else if (_this.ups[174] && _this.lastbbb != 8 && _this.lastbb != 8) {
          _this.lastbb = _this.trg.baa = 8;
        } else if (_this.ups[99] && _this.lastbbb != 3 && _this.lastbb != 3) {
          _this.lastbb = _this.trg.baa = 3;
        } else if (_this.ups[113] && _this.lastbbb != 5 && _this.lastbb != 5) {
          _this.lastbb = _this.trg.baa = 5;
        } else if (_this.ups[100] && _this.lastbbb != 4 && _this.lastbb != 4) {
          _this.lastbb = _this.trg.baa = 4;
        }
        _this.lastbbb = f11;
      }
      _this.trg.laser = _this.trg.baa == 2;
      _this.trg.dou = _this.trg.baa == 1;
      f1 = _this.follow.xp;
      let f2 = _this.follow.yp;
      if (_this.trg.baa == 9) {
        f1 = 640 - _this.player.xp;
        f2 = 580 - _this.player.yp;
      }
      if (_this.trg.baa == 11) {
        eyefly();
      } else {
        enfcheck(_this.trg.xp, _this.trg.yp, f1, f2, 100000);
        f1 = 20;
        f2 = _this.enf < 75;
        if (_this.enf > f1) {
          _this.enf = ((_this.enf - f1) / _this.enf) * 0.1;
          _this.trg.xp -= _this.xenf * _this.enf;
          _this.trg.yp -= _this.yenf * _this.enf;
        }
      }
      if (!_this.trg.maga || f2) {
        _this.folz.push(_this.trg);
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
      }
      if (_this.trg.baa != 9) {
        _this.trg2 = _this.follow;
        _this.follow = _this.trg;
      }
      if (_this.trg.bum) {
        if (_this.trg.d._currentframe != 135) {
          _this.trg.d.gotoAndStop(134);
        }
        this.sideflip(_this.trg2.xp - _this.trg.xp);
      } else if (_this.trg.hol) {
        _this.trg.d.gotoAndStop(126);
      } else if (_this.trg.maga) {
        _this.trg.d.gotoAndStop(34);
      } else if (_this.trg.cat) {
        if (_this.trg.cat == 2) {
          _this.trg.d.gotoAndStop(77);
        } else {
          _this.trg.d.gotoAndStop(33);
        }
      } else if (_this.trg.mon) {
        if (_this.trg.mon == 4) {
          _this.trg.d.gotoAndStop(95);
        } else if (_this.trg.mon == 3) {
          _this.trg.d.gotoAndStop(75);
        } else if (_this.trg.mon == 2) {
          _this.trg.d.gotoAndStop(52);
        } else {
          _this.trg.d.gotoAndStop(40);
        }
        if (_this.trg.d.d._currentframe > 1 || _root.monbb >= 1) {
          _this.trg.d.d.nextFrame();
          if (_this.trg.d.d._currentframe == 4) {
            _root.monbb = 0;
            switch (_this.trg.mon) {
              case 4:
                f1 = 5.04;
                break;
              case 3:
                f1 = 5.010000003;
                break;
              case 2:
                f1 = 5.010000002;
                _root.soundy("kiss_lips1.wav");
                break;
              case 1:
                f1 = 5.02;
            }
            _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 0, f1);
            if (_this.trg.mon > 1 && _this.trg.mon < 4) {
              _this.trg2.col = _this.trg.mon;
            }
          }
        }
      } else {
        _this.trg.ba = true;
        if (_this.trg.lfra + 4 < _this.fra) {
          if (_this.trg.baa == 5) {
            if (_this.trg.plo == undefined) {
              _this.trg.plo = 1;
            }
            _this.trg.d.gotoAndStop(_this.trg.plo + 84);
            if (_this.fra % 10 == 0) {
              f2 = false;
              for (let z in _this.ball) {
                _this.trg2 = _this.ball[z];
                if (_this.trg2.s > 9 && !_this.trg2.dones) {
                  if (
                    enfcheck(
                      _this.trg2.xp,
                      _this.trg2.yp,
                      _this.trg.xp,
                      _this.trg.yp,
                      150
                    )
                  ) {
                    if (
                      linecheckx(
                        _this.trg.xp,
                        _this.trg.yp,
                        _this.trg2.xp,
                        _this.trg2.yp
                      )
                    ) {
                      if (_this.trg2.bh) {
                        f2 = _this.trg2;
                      }
                    }
                  }
                }
              }
              if (f2 && _this.trg.trg2 != f2) {
                _this.trg2 = _this.trg.trg2 = f2;
              } else {
                _this.trg2 = _this.trg.trg2;
              }
              if (_this.trg2 == _this.player || _this.trg2.dones) {
                _this.trg2 = _this.trg.trg2 = undefined;
              }
              if (!f2) {
                if (
                  !linecheckx(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.trg2.xp,
                    _this.trg2.yp
                  )
                ) {
                  _this.trg2 = _this.trg.trg2 = undefined;
                }
              }
              if (_this.trg2) {
                _this.xenf = _this.trg.xp - _this.trg2.xp;
                _this.yenf = _this.trg.yp - _this.trg2.yp;
                _this.enf = enfget(_this.xenf, _this.yenf);
                _this.enf = 8 / _this.enf;
                _this.xenf *= _this.enf;
                _this.yenf *= _this.enf;
                _this.babymode = 5;
                if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                  if (_this.xenf < 0) {
                    _this.trg.plo = 2;
                  } else {
                    _this.trg.plo = 4;
                  }
                } else if (_this.yenf > 0) {
                  _this.trg.plo = 3;
                } else {
                  _this.trg.plo = 1;
                }
                _this.trg.d.gotoAndStop(_this.trg.plo + 88);
                _this.trg2 = this.create(
                  _this.trg.xp,
                  _this.trg.yp,
                  0,
                  0 - _this.xenf,
                  0 - _this.yenf,
                  0,
                  2
                );
              } else {
                _this.trg.plo = 1;
              }
            }
          } else if (_this.trg.baa == 11) {
            _this.trg.d.gotoAndStop(_this.plo + 152);
          } else if (_this.trg.baa == 10) {
            _this.trg.d.gotoAndStop(_this.plo + 161);
          } else if (_this.trg.baa == 9) {
            _this.trg.d.gotoAndStop(_this.plo + 138);
          } else if (_this.trg.baa == 8) {
            _this.trg.d.gotoAndStop(_this.plo + 116);
          } else if (_this.trg.baa == 7) {
            _this.trg.d.gotoAndStop(_this.plo + 107);
          } else if (_this.trg.baa == 6) {
            _this.trg.d.gotoAndStop(_this.plo + 98);
          } else if (_this.trg.baa == 4) {
            _this.trg.d.gotoAndStop(_this.plo + 64);
          } else if (_this.trg.baa == 3) {
            _this.trg.d.gotoAndStop(_this.plo + 55);
          } else if (_this.trg.laser) {
            _this.trg.d.gotoAndStop(_this.plo + 41);
          } else if (_this.trg.dou) {
            _this.trg.d.gotoAndStop(_this.plo + 9);
          } else {
            _this.trg.d.gotoAndStop(_this.plo);
          }
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
    }
  }
}
function slotf() {
  var _loc1_ = 0;
  if (_this.ups[46]) {
    _loc1_ = 3 + random(18);
  } else {
    _loc1_ = 3 + random(21);
  }
  if (_loc1_ >= 9 && (random(10) != 0 || _this.sloto)) {
    _loc1_ = _loc1_ + 1;
  }
  if (_loc1_ == 7 && random(3) == 0) {
    _loc1_ = 10;
  }
  return _loc1_;
}
function sloty(f1) {
  switch (f1) {
    case 3:
      if (random(3) == 0) {
        _root.ups[10] += 0.5;
        _this.ups[10] = _root.ups[10];
        st22("Pretty Fly");
        this.emo();
      } else {
        _this.f2 = 13;
        emo(true);
      }
      break;
    case 4:
      _this.f2 = 5.04;
      break;
    case 5:
    case 6:
      _this.f2 = 5;
      break;
    case 10:
    case 11:
    case 12:
      _this.f2 = 5.02;
      _this.f12 = Math.max(1, random(3));
      break;
    case 7:
      _this.f2 = 5.03;
      break;
    case 8:
      _this.f2 = 5.07;
      break;
    case 9:
      _this.enf = enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.player.xp,
        _this.player.yp,
        f1
      );
      if (_this.enf < f1) {
        _this.enf = ((f1 - _this.enf) / _this.enf) * 0.4;
        _this.player.xbew -= _this.xenf * _this.enf;
        _this.player.ybew -= _this.yenf * _this.enf;
      }
      _this.f2 = 5.1;
      _this.trg.done = true;
      _root.soundy("boss1_explosions" + random(3) + ".wav", 80);
      break;
    default:
      if (_this.sloto) {
        emo(true);
      }
  }
}
function actions2() {
  let f2 = 0;
  let f3 = _this.fra % 3;
  if (f3 == 0) {
    _this.f1 = 0.45;
  } else if (f3 == 1) {
    _this.f1 = 1;
  } else {
    _this.f1 = 1.85;
  }
  if (_this.blackout == 2) {
    if (_this.f1 == 1) {
      f2 = 30;
    }
    _this.f1 *= 0.7;
    _this.f1 -= 0.5;
  }
  let bull = new flash.geom.ColorTransform();
  bull.redMultiplier = _this.f1;
  bull.greenMultiplier = _this.f1;
  bull.blueMultiplier = _this.f1;
  bull.redOffset = f2;
  bull.greenOffset = f2;
  bull.blueOffset = f2;
  if (_this.isaaaac) {
    _this.f1 = (_this.f1 - 1) * 0.1;
    bull.redMultiplier = _this.f1 + 0.8;
    bull.greenMultiplier = _this.f1 + 6;
    bull.blueMultiplier = _this.f1 + 7.4;
    bull.redOffset = f2 + 20;
    bull.greenOffset = f2 + 20;
    bull.blueOffset = f2 + 20;
  }
  let bull2 = new flash.geom.ColorTransform();
  if (_this.fra2) {
    f3 = (_this.fra % 6) / 2;
    if (f3 == 0) {
      _this.f1 = 0.45;
    } else if (f3 == 1) {
      _this.f1 = 1;
    } else {
      _this.f1 = 1.85;
    }
    _this.f1 = _this.f1 * 0.2 + 0.85;
    if (_this.blackout == 2) {
      _this.f1 = 1;
    }
    bull2.redMultiplier = _this.f1;
    bull2.greenMultiplier = _this.f1;
    bull2.blueMultiplier = _this.f1;
    bull2.redOffset = f2;
    bull2.greenOffset = f2;
    bull2.blueOffset = f2;
  }
  var _loc2_ = new flash.geom.Transform(_this.blorz);
  _loc2_.colorTransform = bull2;
  _this.wormet = _this.momet = _this.magget = 0;
  if (_this.fra % 3 == 0) {
    for (let e in _this.levz) {
      if (_this.levz[e] > 0 && _this.levz[e] < 0.99) {
        _this.levz[e] -= 0.1;
        if (_this.levz[e] < 0) {
          _this.levz[e] = 0;
        }
      }
    }
  }
  if (_this.fra > 10) {
    _root.levit[_root.lev!] = [];
  }
  _this.ashut = _this.shutdoor;
  _this.shutdoor = 0;
  if (_this.fra > 10) {
    _root.levcol[_root.lev!] = 0;
  }
  _this.follow = _this.player;
  _this.folz = [];
  _this.ffly = 0;
  _this.ablub = _this.blub;
  _this.blub = 0;
  _root.bluf = Math.min(_this.blufb, 10);
  _this.blufb = 0;
  if (_this.fra > 40) {
    for (let e in _this.ref) {
      _this.trg = _this.ref[e];
      if (_this.trg._currentframe < 5) {
        if (_this.trg._parent._currentframe == 1) {
          if (random(5) == 0) {
            if (
              (_this.enf = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                160
              ))
            ) {
              let f1 = 20 / _this.enf;
              if (
                linechecky(
                  _this.trg.xp - _this.xenf * f1,
                  _this.trg.yp - _this.yenf * f1,
                  _this.player.xp,
                  _this.player.yp
                )
              ) {
                if (_this.fiz++ > 5) {
                  if (random(5) == 0) {
                    _this.trg._parent.nextFrame();
                    _this.fiz = 0;
                  }
                }
              }
            }
          }
        } else {
          _this.trg._parent.nextFrame();
        }
        if (_this.trg._parent._currentframe == _this.trg._parent._totalframes) {
          _this.trg._parent.gotoAndStop(1);
        }
      } else {
        _this.trg._parent.gotoAndStop(1);
      }
      if (_this.trg._parent._currentframe == 3) {
        _this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          1000
        );
        _this.enf = enfget(_this.xenf, _this.yenf);
        _this.enf = -5 / _this.enf;
        _this.xenf *= _this.enf;
        _this.yenf *= _this.enf;
        this.create(
          _this.trg.xp + _this.xenf * 5,
          _this.trg.yp + _this.yenf * 5,
          0,
          _this.xenf,
          _this.yenf,
          0,
          9
        );
      }
    }
  }
  if (_this.anarch-- > 0) {
    if (_this.anarch % 5 == 0) {
      _this.trg2 = spaw(320, 280, random(300), 5.04);
      _this.trg2.col = 3;
      if (_this.analt == 5) {
        _this.trg2.col = 5;
        _this.trg2.dmg = 0;
      } else if (_this.analt) {
        attach(_this.trg2, 502);
        _this.trg2.s = 4;
        _this.trg2.bolt = true;
        _this.trg2.bh = false;
        if (_this.analt >= 2) {
          _this.trg2.friend = true;
          if (random(2) == 0 && _this.analt == 2) {
            _this.trg3 = _this.ball[random(_this.ball.length)];
            if (_this.trg3.s > 10) {
              _this.trg2.xp = _this.trg3.xp;
              _this.trg2.yp = _this.trg3.yp;
            }
          }
        }
      }
    }
  } else {
    _this.analt = false;
  }
  if (_this.killa) {
    for (let z in _this.levz) {
      if (this.killshit(z)) {
        this.killshit(z);
        this.killshit(z);
        this.killshit(z);
        this.killshit(z);
      }
    }
    _this.killa = false;
  }
  let splaz = false;
  if (_this.beamer++ > 0) {
    f2 = Math.max(0, 20 - _this.beamer) / 20;
    f3 = (1 - f2) * 255;
    colorit(_root, f2, f2, f2, f3, f3, f3);
    if (_this.beamer > 25) {
      _root.fade = true;
      colorit(_root, 1, 1, 1, 0, 0, 0);
      newstart(false, true);
    }
  }
  if (_this.momdown-- > 0) {
    if (_root.chaps == 6) {
      let f1 = Math.max(0, 1 - Math.abs(_this.momdown - 50) / 40);
      f2 = 1 - f1;
      f3 = 150 * f1;
      colorit(_root, f2, f2, f2, f3, 0, 0);
      if (
        _this.momdown == 50 &&
        (!_root.locker[4] || (_root.chala > 0 && _root.chala < 5)) &&
        _root.chaps != 7
      ) {
        _root.locker[4] = true;
        _root.locker[5] = true;
        _root.locker[6] = true;
        colorit(_root, 1, 1, 1, 0, 0, 0);
        _root.levz = undefined;
        moveon();
        _root.door = undefined;
        _root.gotoAndStop(9);
      }
      if (_root.hardmode) {
        _root.locker[99] = true;
      }
    }
    splaz = true;
  }
  if (_this.sacri-- > 0) {
    splaz = true;
  }
  if (splaz) {
    while (random(2) != 0) {
      let f10 = random(15) + 2;
      _this.xenf = crand(f10);
      _this.yenf = crand(f10);
      _this.trg2 = this.create(
        320 - _this.xenf * 100,
        280 - _this.yenf * 100,
        0,
        _this.xenf,
        _this.yenf,
        0,
        8
      );
      _this.trg2.d._xscale = _this.trg2.d._yscale = 140 + random(80);
      _this.trg2.md -= random(20);
      _this.trg2.fd += 0.5;
    }
  }
  _this.helpss = _this.helps;
  _this.helps = 0;
  _this.help = 0;
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    _this.b1 =
      ((_this.trg.minb || _this.trg.minboh) && _this.trg.eternal) ||
      _this.trg.bossheart;
    if ((_this.trg.bosser || _this.b1) && _this.trg.dones) {
      if (!_this.b1) {
        _this.trg.bosser = false;
        _this.bosser--;
      }
      if (
        (_this.bosser == 0 || _this.b1) &&
        (!_this.bossheart || _this.trg.minb == 3) &&
        !_this.trg.boso
      ) {
        _this.trg.boso = true;
        _this.trg.minboh = false;
        _this.bossheart = true;
        let f0 = 5.01;
        if (_this.trg.s == 45 || _this.trg.s == 78) {
          _this.f1 = 320;
          f2 = 280;
        } else {
          _this.f1 = _this.trg.xp;
          f2 = _this.trg.yp;
        }
        if (_root.bossl == _root.lev || (_this.b1 && _this.trg.s != 51)) {
          this.create(_this.f1, f2, 0, crand(7), crand(7), 0, f0);
          if (_root.so.data.wins < 6 && !_this.b1) {
            this.create(_this.f1, f2, 0, crand(7), crand(7), 0, f0);
          }
        }
        if (_this.spezz || _this.b1) {
          _this.trg2 = this.create(
            _this.f1,
            f2,
            0,
            crand(7),
            crand(7),
            0,
            5.01
          );
          if (_this.spezz == 4 || _this.spezz == 7) {
            _this.trg2.col = 3;
          }
          if ((_this.spezz == 23 || _this.b1) && _this.etux++ < 2) {
            _this.trg2.col = 4;
          }
        }
      }
    }
  }
  _this.bosser = 0;
  _this.lastbbb = _this.lastbb = -1;
  topz(1);
  if (_this.decer.s == 4) {
    _this.rply = _this.player;
    _this.player = _this.decer;
  }
}
function deathscripts() {
  if (
    (((_this.hps[_this.trg.s] / _this.mux > 199 &&
      !_this.trg.goner &&
      _this.trg.s != 62 &&
      _this.trg.s != 96 &&
      _this.trg.s != 18 &&
      _this.trg.pow != 5) ||
      _this.trg.s == 19 ||
      _this.trg.s == 20 ||
      (_this.trg.s == 79 && (!_this.trg.alt || _this.altboss != 2)) ||
      _this.trg.s == 82 ||
      _this.trg.s == 83 ||
      _this.trg.minb ||
      _this.trg.worm == 6 ||
      _this.trg.s == 67 ||
      (_this.trg.s >= 71 && _this.trg.s <= 77)) &&
      _this.trg.s > 0 &&
      !_this.trg.dones &&
      !_this.trg.nobar &&
      !_this.trg.sic &&
      !_this.trg.horse &&
      !_this.trg.weap &&
      !_this.mheart) ||
    _this.trg == _this.mheart ||
    _this.trg.s == 97 ||
    _this.trg.s == 98 ||
    _this.trg.showbar
  ) {
    _this.bosser++;
    _this.trg.aboss = _this.trg.bosser = !_this.trg.minb;
    if (_this.trg.hp > _this.trg.mhp) {
      _this.trg.mhp = _this.trg.hp;
    }
    _this.help += _this.trg.hp / _this.trg.mhp;
    _this.helps++;
    let f1 = 0;
    if (_this.trg.s == 74) {
      f1 = 10;
    }
    if (_this.trg.s == 75) {
      f1 = 4;
    }
    if (_this.trg.s == 76) {
      f1 = 1;
    }
    if (_this.trg.s == 71 && _this.altboss) {
      f1 = 18;
    } else if (_this.trg.s == 71) {
      f1 = 12;
    }
    if (_this.trg.s == 72) {
      f1 = 2;
    }
    _this.help += f1;
    _this.helps += f1;
    _this.bosser += f1;
    _this.trg.hbar = true;
    _this.mins =
      _this.trg.minb ||
      (_root.lev != _root.bossl &&
        _root.lev != _root.bossl2 &&
        _root.lev != 166);
  }
  if (
    (_this.trg.flyai || (_this.trg.s == 25 && !_this.trg.alt)) &&
    !_this.trg.dones
  ) {
    _this.flyshut++;
  }
  if (_this.trg.gosplash) {
    gosplash();
    _this.trg.gosplash = false;
  }
  if (
    (_this.trg.s == 61 ||
      (_this.trg.s == 26 && _this.trg.alter == 2) ||
      (_this.trg.s == 92 && _this.trg.eternal) ||
      (_this.trg.s == 22 && _this.trg.eternal == 2)) &&
    _this.trg.dones &&
    !_this.trg.wtfsto
  ) {
    _this.trg.wtfsto = true;
    if (_this.trg.alter == 2 && _this.trg.s == 61) {
      this.green();
      if (_this.trg.eternal) {
        green(false, true);
        green(false, true);
        green(false, true);
      }
    } else {
      quadf(
        _this.trg.xp,
        _this.trg.yp,
        8,
        (_this.trg.s == 26 && _this.trg.alter == 2 && _this.trg.eternal) ||
          ((_this.trg.s == 61 || _this.trg.s == 22) && _this.trg.eternal)
      );
      if (_this.trg.s == 22) {
        this.boil();
        this.boil();
        boil(false, 2);
        boil(false, 2);
        boil(false, 2);
      }
    }
  }
  if (_this.trg.s == 81 && _this.trg.alter == 2) {
    if (_this.trg.dones) {
      _this.trg.alter = 0;
      _root.locker[64] = true;
      let f0 = 5.1132;
      spaw(_this.trg.xp, _this.trg.yp, 0, f0);
    }
  }
  if (
    _this.trg.s == 98 &&
    _this.trg.eternal &&
    !_this.trg.sploooz &&
    _this.trg.dones
  ) {
    _this.trg.sploooz = true;
    _this.trg2 = this.create(_this.trg.xp, _this.trg.yp - 20, 0, 0, 0, 0, 92);
    _this.trg3 = this.create(_this.trg.xp, _this.trg.yp - 20, 0, 0, 0, 0, 92);
    _this.trg2.specoz = 23;
    _this.trg3.specoz = 23;
    _this.trg2._xscale = _this.trg2._yscale *= 1.3;
    _this.trg3._xscale = _this.trg3._yscale *= 1.3;
    this.speco(_this.trg3);
    this.speco(_this.trg2);
  }
  if (_this.trg.minb) {
    if (!_this.fonter) {
      _this.fonter = true;
      let f4 = ["Isaac", "Magdalene", "Cain", "Judas", "???", "Eve", "Samson"];
      let f2 = [
        "Sloth",
        "Lust",
        "Wrath",
        "Gluttony",
        "Greed",
        "Envy",
        "Pride",
        "Krampus",
      ];
      let f0 = _this.trg.s - 46;
      let f1 = " vs ";
      if (_this.trg.eternal || _this.flox.eternal) {
        f1 += "Eternal ";
      }
      if (_this.trg.alter == 3) {
        f1 += "Ultra Pride";
      } else if (_this.trg.alter == 2) {
        f1 += "Super " + f2[f0];
      } else {
        f1 += f2[f0];
      }
      st11(f4[_root.skiner] + f1);
    }
    if (
      _this.trg.dones &&
      _this.helpss == 0 &&
      !_this.minsber &&
      _root.lev != _root.chamb
    ) {
      _this.minsber = true;
      if (_this.trg.minb == 2) {
        _this.f1 = 74;
        if (!_root.locker[10]) {
          _this.f1 = 64;
        }
        _this.f1 = [
          5.3,
          140,
          5.07,
          45,
          5.04,
          106,
          5.01,
          129,
          5.02,
          _this.f1,
          5.04,
          128,
          5.3,
          81,
        ];
      } else {
        _this.f1 = [
          5.3, 42, 5.07, 13, 5.04, 37, 5.01, 15, 5.02, 64, 5.04, 49, 5.3, 65,
        ];
      }
      if (_this.trg.bomber) {
        _this.trg.s = 48;
      }
      let f0 = _this.trg.s - 46;
      _root.minwin[f0] = true;
      if (
        _root.minwin[0] &&
        _root.minwin[1] &&
        _root.minwin[2] &&
        _root.minwin[3] &&
        _root.minwin[4] &&
        _root.minwin[5] &&
        _root.minwin[6]
      ) {
        _root.locker[29] = true;
      }
      if (_this.trg.minb == 3) {
        f0 = 5.07;
        _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, f0);
        if (_this.trg == _this.flox) {
          _this.trg2.col = 62;
        } else {
          _this.trg2.col = 61;
        }
        _root.locker[98] = true;
      } else {
        f0 *= 2;
        let f2 = false;
        if (random(4) == 0 || (_this.trg.minb == 2 && random(7) == 0)) {
          f2 = true;
        }
        if (f2 && !_root.ups[_this.f1[f0 + 1]]) {
          f0 = _this.f1[f0 + 1];
          f0 = 5.1 + f0 / 10000;
        } else {
          f0 = _this.f1[f0];
        }
        if (f0 == 5.04 && _this.trg.s == 51) {
          _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, f0);
          _this.trg2.col = 3;
        } else if (f0 == 5.02) {
          let f3 = 4 + random(5);
          let z = 0;
          while (z < f3) {
            let f4 = random(5) + 2;
            this.create(
              _this.trg.xp,
              _this.trg.yp,
              0,
              crand(f4),
              crand(f4),
              0,
              f0
            );
            z++;
          }
        } else if (f0 == 5.01 || f0 == 5.04) {
          let f1 = crand(5);
          let f2 = this.crand();
          this.create(_this.trg.xp, _this.trg.yp, 0, f1, f2, 0, f0);
          this.create(_this.trg.xp, _this.trg.yp, 0, 0 - f1, 0 - f2, 0, f0);
        } else {
          spaw(_this.trg.xp, _this.trg.yp, 0, f0);
        }
      }
      _this.trg.minb = false;
      _this.trg.minboh = true;
    }
  } else if (_this.trg.special || _this.trg.hallo || _this.trg.etdrop) {
    if (_this.trg.dones && !_root.dropo[_root.lev!][_this.trg.trg.spuz]) {
      _root.dropo[_root.lev!][_this.trg.trg.spuz] = true;
      _this.trg.special = false;
      _this.trg.hallo = false;
      if (_this.trg.etdrop) {
        _this.f1 = 7 + random(3);
        _this.trg.etdrop = false;
      } else {
        _this.f1 = 10;
      }
      if (!_root.hardmode || random(Math.max(_this.f1 - _root.luck, 1)) < 3) {
        _this.f1 = Math.random();
        if (_this.f1 < 0.4) {
          _this.f0 = 5.02;
        } else if (_this.f1 < 0.6) {
          _this.f0 = 5.01;
        } else if (_this.f1 < 0.76 - _root.chaps * 0.01) {
          _this.f0 = 5.03;
        } else if (_this.f1 < 0.8) {
          if (random(2) == 0) {
            _this.f0 = 5.3;
          } else {
            _this.f0 = 5.07;
          }
        } else if (_this.f1 < 0.95) {
          _this.f0 = 5.04;
        } else {
          _this.f0 = 5.05;
        }
        spaw(_this.trg.xp, _this.trg.yp, 0, _this.f0);
      }
    }
  }
  if (
    _this.trg.s == 51 &&
    _this.trg.tier <= 2 &&
    _this.trg.dones &&
    !_this.trg.wtfst
  ) {
    _this.helpss++;
    _this.helps = 1;
    _this.trg.wtfst = true;
    let f1 = crand(10);
    let f2 = this.crand();
    _this.trg2 = [];
    let f3 = _this.trg.s;
    if (_this.trg.alter == 2) {
      f3 += 0.1;
    }
    _this.trg2.push(
      this.create(
        _this.trg.xp + f1,
        _this.trg.yp + f2,
        0,
        f1 * 0.4,
        f2 * 0.4,
        0,
        f3
      )
    );
    _this.trg2.push(
      this.create(
        _this.trg.xp - f1,
        _this.trg.yp - f2,
        0,
        (0 - f1) * 0.4,
        (0 - f2) * 0.4,
        0,
        f3
      )
    );
    if (
      _this.trg.alter == 2 &&
      _this.trg.tier < 1 + random(2) &&
      (!_this.trg.eternal || !_this.trg.cop)
    ) {
      _this.trg2.push(
        this.create(
          _this.trg.xp - f1,
          _this.trg.yp - f2,
          0,
          (0 - f2) * 0.4,
          f1 * 0.4,
          0,
          f3
        )
      );
    }
    for (let z in _this.trg2) {
      _this.trg2[z].fra = _this.fra - 100;
      _this.trg2[z].tier = _this.trg.tier + 1;
      _this.trg2[z].hp /= _this.trg.tier + 2;
      _this.trg2[z].cop = true;
      if (_this.trg.eternal) {
        _this.trg2[z]._xscale = _this.trg2[z]._yscale = 130;
      } else {
        _this.trg2[z]._xscale = _this.trg2[z]._yscale = 100;
      }
      _this.trg2[z].d.gotoAndStop(5 + _this.trg.tier);
      _this.trg2[z].specoz = _this.trg.specoz;
      _this.trg2[z].specol = _this.trg.specol;
      _this.trg2[z].specozz = _this.trg.specozz;
      _this.trg2[z].eternal = _this.trg.eternal;
      this.speco(_this.trg2[z]);
    }
    if (_this.trg.eternal) {
      quadf(_this.trg.xp, _this.trg.yp, 10, _this.trg.alter == 2);
    }
  }
  if (_this.trg.s == 76 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    if (_this.trg.eternal && random(3) == 0) {
      _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 38.1);
    } else {
      var _loc2_ = _this.allets;
      _this.allets = false;
      _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 77);
      _this.allets = _loc2_;
      _this.trg2.fra = -100;
    }
    if (_this.trg.eternal) {
      _this.trg2.specoz = 23;
      this.speco(_this.trg2);
    }
  }
  if (
    _this.trg.s == 77 &&
    _this.trg.dones &&
    !_this.trg.wtfst &&
    _this.trg.eternal &&
    Math.abs(_this.trg._xscale) > 30
  ) {
    _this.trg.wtfst = true;
    _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 77);
    _this.trg3 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 77);
    _this.sizes[77] = 13;
    _this.trg3.mhp = _this.trg2.mhp = _this.trg.mhp * 0.75;
    _this.trg3.hp = _this.trg2.hp = _this.trg2.mhp * 0.75;
    _this.trg2._xscale =
      _this.trg2._yscale =
      _this.trg3._xscale =
      _this.trg3._yscale =
        Math.abs(_this.trg._xscale) * 0.6;
    _this.trg2.d.gotoAndStop(13);
    _this.trg3.d.gotoAndStop(13);
    _this.trg2.eternal = true;
    _this.trg3.eternal = true;
    _this.trg3.specoz = _this.trg2.specoz = 23;
    this.speco(_this.trg2);
    this.speco(_this.trg3);
  }
  if (_this.trg.s == 71 || _this.trg.s == 72 || _this.trg.s == 73) {
    if (_this.trg.dones && !_this.trg.wtfsss) {
      _this.trg.wtfsss = true;
      if (_this.trg.specoz == 23) {
        if (_this.altboss) {
          boil(false, 2);
          boil(false, 2);
        } else {
          quadf(_this.trg.xp, _this.trg.yp, 8.5, 1);
        }
      }
    }
  }
  if (_this.trg.s == 73 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    _this.f33 = this.ingrid(_this.trg.xp, _this.trg.yp);
    let f1 = levzz(_this.f33);
    if (_this.altboss || f1 != 3) {
      f1 = 23;
      if (_this.trg.specoz == 15) {
        f1 = 25;
      }
      if (_this.trg.specoz == 23 && !_this.altboss) {
        f1 = 31;
      }
      if (_this.altboss) {
        this.boil(true);
        this.boil(false);
        if (_this.trg.specoz == 23 && random(3) == 0) {
          _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 94);
        }
      } else {
        _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, f1);
        if (f1 == 31) {
          _this.trg2.specoz = 23;
          this.speco(_this.trg2);
          _this.trg2.eternal = true;
          _this.trg2.hp += 20;
        }
      }
      _root.soundy("summonsound.wav", 80);
      _this.trg2.hp *= 0.75;
    }
  }
  if (
    (_this.trg.s == 71 || _this.trg.s == 72) &&
    _this.trg.dones &&
    !_this.trg.wtfst
  ) {
    _this.trg.wtfst = true;
    let f1 = crand(20);
    let f2 = this.crand();
    _this.trg2 = [];
    let f3 = _this.trg.s + 1;
    _this.trg2.push(
      this.create(
        _this.trg.xp + f1,
        _this.trg.yp + f2,
        0,
        f1 * 0.2,
        f2 * 0.2,
        0,
        f3
      )
    );
    _this.trg2.push(
      this.create(
        _this.trg.xp - f1,
        _this.trg.yp - f2,
        0,
        (0 - f1) * 0.2,
        (0 - f2) * 0.2,
        0,
        f3
      )
    );
    if (_this.trg.s == 71) {
      if (_this.trg.specoz == 15 || _this.altboss) {
        _this.trg2.push(
          this.create(_this.trg.xp + f2, _this.trg.yp - f1, 0, 0, 0, 0, f3)
        );
      } else {
        _this.trg2.push(
          this.create(
            _this.trg.xp + f2,
            _this.trg.yp - f1,
            0,
            f2 * 0.2,
            (0 - f1) * 0.2,
            0,
            f3
          )
        );
        _this.trg2.push(
          this.create(
            _this.trg.xp - f2,
            _this.trg.yp + f1,
            0,
            (0 - f2) * 0.2,
            f1 * 0.2,
            0,
            f3
          )
        );
      }
    }
    for (let z in _this.trg2) {
      _this.trg2[z].fra = -100;
      _this.trg2[z].d.gotoAndStop(2 + (f3 - 71) * 3);
      if (_this.trg.specoz == 23) {
        _this.trg2[z].specoz = 23;
        this.speco(_this.trg2[z]);
      }
      if (random(2) == 0) {
        _this.trg2[z].d._xscale *= -1;
      }
    }
  }
  if (_this.trg.s == 57 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    let f1 = crand(10);
    let f2 = this.crand();
    if (_this.trg.alter == 2) {
      _this.f3 = 40;
    } else {
      _this.f3 = 32;
    }
    _this.trg2 = [];
    if (_this.trg.eternal) {
      f1 *= 3;
      f2 *= 3;
    }
    _this.trg2.push(
      this.create(_this.trg.xp + f1, _this.trg.yp + f2, 0, 0, 0, 0, _this.f3)
    );
    _this.trg2.push(
      this.create(_this.trg.xp - f1, _this.trg.yp - f2, 0, 0, 0, 0, _this.f3)
    );
    if (_this.trg.eternal) {
      if (_this.trg.alter == 2) {
        _this.f3 = 15;
      } else {
        _this.trg2.push(
          this.create(
            _this.trg.xp - f2,
            _this.trg.yp + f1,
            0,
            0,
            0,
            0,
            _this.f3
          )
        );
      }
      _this.trg2.push(
        this.create(_this.trg.xp + f2, _this.trg.yp - f1, 0, 0, 0, 0, _this.f3)
      );
      if (_this.trg.alter == 2) {
        _this.trg2[2].hp *= 3;
      }
    }
    for (let z in _this.trg2) {
      _this.trg2[z].specoz = _this.trg.specoz;
      this.speco(_this.trg2[z]);
      if (_this.trg.eternal) {
        if (_this.trg2[z].s == 40) {
          _this.trg2[z].mhp = _this.trg2[z].hp *= 2.3;
        } else {
          _this.trg2[z].mhp = _this.trg2[z].hp *= 4.2;
          _this.trg2[z]._xscale = _this.trg2[z]._yscale *= 1.2;
        }
        _this.trg2[z].eternal = true;
      }
    }
  }
  if (
    _this.trg.s == 79 &&
    _this.altboss &&
    !_this.trg.wtfst &&
    _this.trg.dones
  ) {
    _this.trg.wtfst = true;
    quadf(_this.trg.xp, _this.trg.yp, 10, true);
  }
  if (
    (_this.trg.s == 80 || _this.trg.s == 94) &&
    !_this.trg.wtfst &&
    _this.trg.dones &&
    _this.trg.hp > -20
  ) {
    _this.trg.wtfst = true;
    let f1 = _this.player.yp - _this.trg.yp;
    let f2 = _this.trg.xp - _this.player.xp;
    _this.enf = enfget(f1, f2);
    if (_this.enf > 0) {
      _this.enf = 10 / _this.enf;
      f1 *= _this.enf;
      f2 *= _this.enf;
    } else {
      f1 = crand(10);
      f2 = crand(10);
    }
    if (_this.trg.s == 94) {
      _this.f3 = 85;
    } else {
      _this.f3 = 18;
    }
    _this.trg2 = this.create(
      _this.trg.xp + f1,
      _this.trg.yp + f2,
      0,
      f1,
      f2,
      0,
      _this.f3
    );
    _this.trg3 = this.create(
      _this.trg.xp - f1,
      _this.trg.yp - f2,
      0,
      0 - f1,
      0 - f2,
      0,
      _this.f3
    );
    _this.trg2.fra = -10;
    _this.trg3.fra = -10;
    if (_this.trg.specoz == 23 && _this.trg.s == 94) {
      _this.trg2.specoz = 23;
      this.speco(_this.trg2);
      _this.trg3.specoz = 23;
      this.speco(_this.trg3);
      this.boil();
      this.boil();
      this.boil();
      this.boil();
      this.boil();
      this.boil();
      this.boil();
      this.boil();
    }
    if (_this.trg.specoz == 23 && _this.trg.s == 80) {
      _this.trg2.mhp = _this.trg2.hp *= 1.5;
      _this.trg3.mhp = _this.trg3.hp *= 1.5;
      _this.trg2.specoz = 23;
      this.speco(_this.trg2);
      _this.trg3.specoz = 23;
      this.speco(_this.trg3);
      _this.trg2 = this.create(
        _this.trg.xp - f2,
        _this.trg.yp + f1,
        0,
        (0 - f2) * 0.5,
        f1 * 0.5,
        0,
        _this.f3
      );
      _this.trg3 = this.create(
        _this.trg.xp + f2,
        _this.trg.yp - f1,
        0,
        f2,
        0 - f1,
        0,
        _this.f3
      );
      _this.trg2.mhp = _this.trg2.hp *= 1.5;
      _this.trg3.mhp = _this.trg3.hp *= 1.5;
      _this.trg2.fra = -10;
      _this.trg3.fra = -10;
      _this.trg2.specoz = 23;
      this.speco(_this.trg2);
      _this.trg3.specoz = 23;
      this.speco(_this.trg3);
    }
  }
}
function deathscripts2() {
  if (_this.trg.s == 2 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    if (_this.ups[104] && !_this.trg.ba) {
      if (_this.slugsp <= _this.fra) {
        _this.slugsp = _this.fra + 5;
        _this.xenf = _this.trg.ybb;
        _this.yenf = 0 - _this.trg.xbb;
        _this.enf = enfget(_this.xenf, _this.yenf);
        let f1 = _this.trg.xp;
        let f2 = _this.trg.yp;
        if (mhity(f1, f2)) {
          _this.trg.xp = f1 = _this.trg.xpp;
          _this.trg.yp = f2 = _this.trg.ypp;
        }
        if (_this.enf > 0) {
          _this.enf = 8.5 / _this.enf;
          _this.xenf *= _this.enf;
          _this.yenf *= _this.enf;
          _this.trg2 = this.create(f1, f2, 0, _this.xenf, _this.yenf, 0, 2);
          _this.trg3 = this.create(
            f1,
            f2,
            0,
            0 - _this.xenf,
            0 - _this.yenf,
            0,
            2
          );
          _this.trg2.wtfst = true;
          _this.trg3.wtfst = true;
          _this.trg2.bh = false;
          _this.trg3.bh = false;
          _this.trg3.dy = _this.trg.dy;
          _this.trg2.dy = _this.trg.dy;
          _this.trg3.dm = 1.2;
          _this.trg2.dm = 1.2;
          _this.trg3.d._xscale = _this.trg2.d._xscale = _this.trg.d._xscale;
          _this.trg3.d._yscale = _this.trg2.d._yscale = _this.trg.d._yscale;
          _this.trg3.dmg = _this.trg2.dmg = _this.trg.dmg;
          var _loc1_ = 0;
          while (_loc1_ < _this.ballz) {
            if (_this.trg.hh[_loc1_]) {
              _this.trg2.hh[_loc1_] = true;
              _this.trg3.hh[_loc1_] = true;
            } else {
              _this.trg2.hh[_loc1_] = false;
              _this.trg3.hh[_loc1_] = false;
            }
            _loc1_ = _loc1_ + 1;
          }
          _this.trg3.sot = _this.trg2;
          if (_this.ups[132]) {
            _this.trg3.gro = _this.trg2.gro = _this.trg.gro;
          }
        }
      }
    }
  } else if (_this.trg.s == 2 && !_this.trg.dones) {
    _this.trg.xbb = _this.trg.xbew;
    _this.trg.ybb = _this.trg.ybew;
    _this.trg.xpp = _this.trg.xp;
    _this.trg.ypp = _this.trg.yp;
  }
  if (
    _this.trg.s == 25 &&
    _this.trg.alter == 2 &&
    !_this.trg.wtfst &&
    _this.trg.dones
  ) {
    _this.trg.wtfst = true;
    if (_this.trg.eternal) {
      _this.f1 = 20;
    } else {
      _this.f1 = 6;
    }
    this.cirf(_this.trg.xp, _this.trg.yp, 8, _this.f1);
  }
  if (
    _this.trg.s == 55 &&
    _this.trg.eternal &&
    _this.trg.dones &&
    !_this.trg.dobol
  ) {
    _this.trg.dobol = true;
    quadf(_this.trg.xp, _this.trg.yp, 8, true);
  }
  if (
    (_this.trg.s == 16 || _this.trg.s == 22 || _this.trg.s == 67) &&
    _this.trg.dones &&
    !_this.trg.wtfst
  ) {
    if (_this.trg.s == 22 && _this.trg.specoz == 23) {
      boil(false, 2);
    }
    _this.trg.wtfst = true;
    if (_this.trg.alter == 3) {
      _this.trg = this.bombfail(_this.trg.xp, _this.trg.yp);
      _this.trg.mug = true;
    } else if (_this.trg.alter == 2) {
      quadf(_this.trg.xp, _this.trg.yp, 8, 2);
      _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 0, 5.04);
      _this.trg2.col = 3;
    } else if (_this.trg.hp > -20) {
      flya();
    }
    if (
      _this.trg.s == 67 &&
      _this.altboss &&
      _this.trg.specoz &&
      _this.trg.specoz != 23
    ) {
      if (_this.trg.specoz == 16) {
        _this.f1 = 25;
      } else if (_this.trg.specoz) {
        _this.f1 = 25.1;
      }
      spaw(_this.trg.xp, _this.trg.yp, 20, _this.f1);
      spaw(_this.trg.xp, _this.trg.yp, 20, _this.f1);
    }
  }
  if (
    _this.trg.s == 19 &&
    _this.altboss &&
    _this.trg.specoz &&
    !_this.trg.wtfst &&
    _this.trg.dones
  ) {
    _this.trg.wtfst = true;
    if (_this.trg.specoz == 23) {
      flya();
    } else {
      if (_this.trg.specoz == 3) {
        _this.f1 = 23;
      } else if (_this.trg.specoz == 16) {
        _this.f1 = 25;
      } else {
        _this.f1 = 5.02;
      }
      spaw(_this.trg.xp, _this.trg.yp, 0, _this.f1);
    }
  }
  if (
    _this.trg.s == 100 &&
    _this.altboss &&
    _this.trg.dones &&
    !_this.trg.wtfst
  ) {
    _this.trg.wtfst = true;
    this.boil();
    this.boil();
    this.boil();
  }
  if (_this.trg.s == 101 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    _this.trg.done = true;
    _this.momdown = 100;
  }
  if (_this.trg.s == 91 && _this.trg.dones && !_this.trg.wtfst) {
    _this.trg.wtfst = true;
    if (_this.trg.eternal) {
      let f1 = crand(_this.f1);
      let f2 = this.crand();
      let f3 = 0.3;
      _this.trg2 = this.create(
        _this.trg.xp + f1,
        _this.trg.yp + f2,
        0,
        f1 * f3,
        f2 * f3,
        0,
        91
      );
      _this.trg3 = this.create(
        _this.trg.xp - f1,
        _this.trg.yp - f2,
        0,
        (0 - f1) * f3,
        (0 - f2) * f3,
        0,
        91
      );
      f1 = crand(f1);
      f2 = this.crand();
      f3 = 0.3;
      _this.trg4 = this.create(
        _this.trg.xp - f1,
        _this.trg.yp - f2,
        0,
        (0 - f1) * f3,
        (0 - f2) * f3,
        0,
        91
      );
      _this.trg2.fra = -100;
      _this.trg3.fra = -100;
      _this.trg4.fra = -100;
      _this.trg2.specoz = _this.trg3.specoz = _this.trg4.specoz = 23;
      this.speco(_this.trg2);
      this.speco(_this.trg3);
      this.speco(_this.trg4);
    } else {
      _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 0, 25);
    }
  }
  if (_this.trg.frezz > 0) {
    _this.trg.frezz--;
    _this.trg.free = true;
  } else if (_this.trg.frezz < 1) {
    _this.trg.free = false;
  }
  if (_this.trg.poiss > 0) {
    _this.trg.poiss--;
    if (_this.trg.poiss % 20 == 1) {
      if (_this.trg.s != 28 || _this.altboss != 2) {
        hurt(_this.trg, _this.trg.poisd);
      }
    }
  }
}
function alive() {
  if (
    _this.fra - _this.trg.fra < 10 &&
    !_this.trg.dones &&
    _this.trg.s != 84 &&
    _this.trg.s != 101
  ) {
    _this.trg.d.gotoAndStop(4);
  }
  if (firecheck(_this.trg)) {
    if (_this.fra - _this.trg.lastfir >= 10) {
      _this.trg.lastfir = _this.fra;
      hurt(_this.trg, 8);
    }
  }
  if (
    _this.trg.s != 42 &&
    _this.trg.s != 44 &&
    !_this.trg.dones &&
    _this.trg.s != 33 &&
    _this.trg.s != 37 &&
    !_this.trg.weap &&
    !_this.trg.goner &&
    _this.trg.s != 96 &&
    !_this.trg.efly &&
    (((_root.lev == _root.chamb || _this.trg.s != 18) && _this.trg.s != 85) ||
      _this.justnow < 10)
  ) {
    _this.shutdoor++;
  }
  if (_this.trg.d._currentframe == 4 && !_this.trg.apf && !_this.trg.dones) {
    _this.trg.xbew *= 0.45;
    _this.trg.ybew *= 0.45;
    this.trgnextd();
    if (_this.trg.s == 10) {
      if (_this.trg.gonuts) {
        _this.trg.d.d.h.gotoAndStop(2);
      }
    }
    if (_this.trg.s == 30) {
      let f1 = _this.trg.hp / _this.hps[_this.trg.s];
      _this.trg.d.d.h.d.gotoAndStop(Math.max(1, 14 - Math.round(f1 * 13)));
    }
    if (_this.trg.s == 11) {
      if (_this.trg.specoz == 23 || _this.trg.eternal) {
        _this.trg.bnuts = true;
      }
      if (!_this.trg.bnuts) {
        _this.trg.d.bb._visible = false;
        _this.trg.d.d.bb._visible = false;
      }
    }
  }
  if (_this.trg.s == 30) {
    _this.trg.xp = _this.trg.xpp;
    _this.trg.yp = _this.trg.ypp;
  }
  if (_this.fra < 5) {
    if (_this.trg.s > 9) {
      this.speco(_this.trg);
    }
  }
  if ((_this.trg.d._currentframe != 4 || _this.trg.apf) && !_this.trg.dones) {
    if (
      _this.freez > 0 ||
      _this.trg.frezz > 0 ||
      (_this.trg.s < 4 && _this.sloww)
    ) {
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      _this.trg.free = true;
    } else if (_this.trg.flyai) {
      switch (_this.trg.s) {
        case 14:
          this.bord();
          if (this.trgnextd(_this.trg.d.hx.d)) {
            _this.trg.d.gotoAndStop(1);
          }
          if (!_this.ups[9]) {
            this.firemode(200, 4);
          }
          if (_this.trg.fire > 0) {
            _this.trg.xbew *= 0.8;
            _this.trg.ybew *= 0.8;
            _this.trg.xbb *= 0.7;
            _this.trg.ybb *= 0.7;
          }
        case 80:
        case 18:
          if (_this.trg.duke) {
            _this.dukes++;
            if (_this.duke.dones || _this.duke.send) {
              _this.trg.duke = false;
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.duke.xp,
                  _this.duke.yp,
                  260
                )
              ) {
                let f1 = 18 / _this.enf;
                _this.trg.xbew += _this.xenf * f1;
                _this.trg.ybew += _this.yenf * f1;
              }
            } else if (_this.fra % 3 == 1) {
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.duke.xp,
                  _this.duke.yp,
                  260
                )
              ) {
                let f3 = _this.duked;
                let f1 = (absmax(_this.enf - f3, 5) / _this.enf) * 0.5;
                let f2 = 0.2 / (2 + Math.abs(f3 - _this.enf));
                _this.trg.xbew -= _this.xenf * f1;
                _this.trg.ybew -= _this.yenf * f1;
                _this.trg.xbew += _this.yenf * f2;
                _this.trg.ybew -= _this.xenf * f2;
                _this.trg.xbew += _this.duke.xbew * 0.4;
                _this.trg.ybew += _this.duke.ybew * 0.4;
              }
            }
          }
        case 13:
        case 61:
          if (_this.trg.eternal && _this.trg.s == 61) {
            if (_this.fra % 20 == 0) {
              if (_this.trg.alter == 2) {
                _this.f1 = 2;
              } else {
                _this.f1 = 0;
              }
              quadf(_this.trg.xp, _this.trg.yp, 8, _this.f1);
            }
          }
          _this.trg.outway = _this.fra2;
          if (_this.fra % 3 == 0) {
            if (_this.ups[9] && _this.trg.s == 18 && !_this.trg.duke) {
              _this.trg.s = 13;
              attach(_this.trg, 13);
              _this.trg.ggh = true;
            }
            if (_this.ups[9] && _this.trg.s == 80) {
              _this.trg.s = 13;
            }
            if (!_this.trg.duke) {
              if (
                _this.trg.s == 18 ||
                _this.trg.s == 61 ||
                _this.ups[9] ||
                _this.trg.s == 80
              ) {
                _this.trg.goshit = 1;
              } else {
                let f1 =
                  _this.trg.xp + crand(Math.random() * Math.random() * 240);
                let f2 = _this.trg.yp + this.crand();
                let f3 = this.ingrid(f1, f2);
                let v1 = levzz(f3);
                if (v1 > 1 && v1 < 1.8) {
                  _this.trg.goshit = f3;
                }
              }
            }
          }
          if (_this.trg.goshit > 0 && _this.fra2) {
            outgrid(_this.trg.goshit);
            let v1 = 30;
            if (
              _this.trg.s == 18 ||
              _this.trg.s == 61 ||
              _this.trg.s == 80 ||
              _this.ups[9] ||
              (_this.trg.s == 14 && _this.trg.eternal)
            ) {
              _this.xenf = _this.player.xp;
              _this.yenf = _this.player.yp;
              v1 = 25;
            }
            if (_this.trg.s == 61 || _this.trg.d._xscale > 110) {
              v1 = 15;
            }
            _this.xenf = _this.trg.xp - _this.xenf;
            _this.yenf = (_this.trg.yp - _this.yenf) / 2;
            _this.enf = enfget(_this.xenf, _this.yenf);
            if (_this.enf > v1) {
              v1 = Math.min(0.6, (_this.enf - v1) * 0.04) * 2;
            } else {
              if (random(1000) == 0) {
                if (this.killshit(_this.trg.goshit)) {
                  _this.trg.s = 14;
                  _this.trg.alter = 1;
                  if (random(3) == 0) {
                    _this.trg.alter = 2;
                  }
                  attach(_this.trg, 14);
                }
              }
              v1 = 0;
            }
            _this.enf = v1 / _this.enf;
            if (_this.trg.s != 18 && _this.trg.s != 61 && _this.trg.s != 80) {
              _this.trg.xbb *= 0.7;
              _this.trg.ybb *= 0.7;
            }
            if (_this.trg.die) {
              _this.trg.xbew *= 0.9;
              _this.trg.ybew *= 0.9;
            }
            _this.trg.xbew -= _this.xenf * _this.enf;
            _this.trg.ybew -= _this.yenf * _this.enf;
          }
          if (_this.trg.s == 18) {
            _this.f0 = 0.3;
          } else {
            _this.f0 = 0.17;
          }
          if (_this.fra % 4 == 1) {
            _this.trg.xbb += crand(_this.f0 * 2);
            _this.trg.ybb += this.crand();
            _this.trg.xbb *= 0.8;
            _this.trg.ybb *= 0.8;
            let f1 = levzz(this.ingrid(_this.trg.xp, _this.trg.yp));
            f1 = f1 >= 1 && f1 != 3;
            let f2 = levzz(
              this.ingrid(
                _this.trg.xp + _this.trg.xbb * 16,
                _this.trg.yp + _this.trg.ybb * 16
              )
            );
            f2 = f2 >= 1 && f2 != 3;
            if ((f1 || f2) && !(f1 && f2)) {
              _this.trg.xbb *= 0.5;
              _this.trg.ybb *= 0.5;
            } else if (f1 && !f2) {
              _this.trg.xbb *= 1.3;
              _this.trg.ybb *= 1.3;
            }
          }
          _this.trg.ph = _this._loc0_ = _this.fra % 3 == 2;
          if (_this._loc0_) {
            if (!_this.trg.duke) {
              let v1 = 0.06;
              if (_this.trg.yp < 210) {
                _this.trg.ybb += v1;
              }
              if (_this.trg.yp > 420) {
                _this.trg.ybb -= v1;
              }
              if (_this.trg.xp > 540) {
                _this.trg.xbb -= v1;
              }
              if (_this.trg.xp < 80) {
                _this.trg.xbb += v1;
              }
            }
            _this.trg.xbew += _this.trg.xbb * 2;
            _this.trg.ybew += _this.trg.ybb * 2;
            _this.trg.xbew *= 0.6;
            _this.trg.ybew *= 0.6;
          }
      }
    } else {
      smarts();
    }
  }
  if (_this.trg.s == 30) {
    if (_this.trg.d._currentframe == 4) {
      let f1 = _this.trg.hp / _this.hps[_this.trg.s];
      _this.trg.d.d.hx.d.gotoAndStop(Math.max(1, 14 - Math.round(f1 * 13)));
    }
  }
}
function aicol() {
  if (
    _this.trg.d.d.d._currentframe == 25 &&
    _this.trg.d.d._currentframe == 3 &&
    _this.fra > 35
  ) {
    switch (_this.trg.d._currentframe) {
      case 1:
        _root.soundy("Meat_Feet_slow0.wav");
        break;
      case 2:
        if (_this.trg.col == 3) {
          _root.soundy("dimedrop.wav");
        } else if (_this.trg.col == 1) {
          _root.soundy("pennydrop.mp");
        } else {
          _root.soundy("nickeldrop.mp");
        }
        break;
      case 3:
        _root.soundy("Key_drop0.wav");
        break;
      case 7:
        if (_this.trg.col < 7) {
          _root.soundy("Fetus_Jump_" + random(2) + ".wav");
        } else {
          _root.soundy("scamper" + random(2) + ".wav");
        }
    }
  }
  if (_this.fra % 30 == 0) {
    if (_this.trg.d._currentframe == 8) {
      for (let a in _this.ball) {
        _this.trg2 = _this.ball[a];
        if (
          _this.trg != _this.trg2 &&
          _this.trg2.s == 5 &&
          _this.trg2.d._currentframe < 8
        ) {
          if (
            (_this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg2.xp,
              _this.trg2.yp,
              40
            ))
          ) {
            if (enfget(_this.trg2.xbew, _this.trg2.ybew) < 0.2) {
              if (_this.enf == 0) {
                _this.xenf = crand(1);
                _this.yenf = crand(1);
                _this.enf = 1;
              }
              _this.enf = 2 / _this.enf;
              _this.trg2.xbew -= _this.xenf * _this.enf;
              _this.trg2.ybew -= _this.yenf * _this.enf;
            }
          }
        }
      }
    }
  }
  if (_this.trg.col == 10 && _this.trg.d._currentframe == 8) {
    _this.trg.xbew = 0;
    _this.trg.ybew = 0;
  }
  if (_this.trg.d._currentframe == 15) {
    if (
      _this.ups[64] &&
      (_this.trg.d.d._currentframe < 5 ||
        _this.trg.d.d._currentframe == 12 ||
        _this.trg.d.d._currentframe == 13)
    ) {
      let f1 = _this.trg.d.d.d._currentframe;
      _this.trg.d.d.gotoAndStop(_this.trg.d.d._currentframe + 4);
      _this.trg.d.d.d.gotoAndStop(f1);
    }
  }
  if (_this.trg.spin) {
    if (
      _this.trg.d.d._currentframe == 2 &&
      _this.trg.d.d.d._currentframe == 17
    ) {
      _root.soundy("slot touched.wav");
    }
    if (
      _this.trg.d.d._currentframe == 42 &&
      _this.trg.d.d.d._currentframe == 35
    ) {
      _root.soundy("shellgame" + random(2) + ".wav");
    }
    if (
      _this.trg.d.d._currentframe == 42 &&
      _this.trg.d.d.d._currentframe == 35
    ) {
      _root.soundy("shellgame" + random(2) + ".wav");
    }
    if (
      _this.trg.d.d._currentframe >= 42 &&
      _this.trg.d.d.d._currentframe == 65
    ) {
      _root.soundy("shell game.wav");
    }
    if (
      _this.trg.d.d._currentframe == 40 &&
      _this.trg.d.d.d._currentframe == 20
    ) {
      _root.soundy("bum shoot off.wav");
    }
    let f1 = trgnextd(_this.trg.d.d.d, true);
    if (_this.trg.d.d._currentframe == 42) {
      _this.trg.d.d.d.it.gotoAndStop(_this.trg.itt + 1);
    }
    if (f1 == 43 || f1 == 44 || f1 == 45) {
      _this.trg.spin = false;
    } else if (f1 == 42) {
      _this.lastspin = _this.fra + 50;
      _this.trg.wtf = false;
    } else if (f1 == 37) {
      if (_this.trg.col == 31) {
        if (random(4 - _this.ups[46]) == 0) {
          _this.trg.d.d.gotoAndStop(38);
        } else {
          _this.trg.d.d.gotoAndStop(36);
          _this.trg.spin = false;
        }
        _this.trg.wtf = false;
      } else {
        if (_this.trg.col++ > random(2) + random(4) + random(4)) {
          if (_this.ups[46]) {
            _this.trg.col = _this.trg.col + 1;
          }
          _this.trg.col = 2 + random(2);
          _this.trg.d.d.gotoAndStop(38);
        } else {
          _this.trg.d.d.gotoAndStop(36);
          _this.trg.spin = false;
        }
        _this.trg.col = Math.min(9, _this.trg.col);
        _this.trg.wtf = false;
      }
    } else if (f1 == 2) {
      if (random(50) == 0 && _this.chestopen == undefined) {
        _this.chestopen = _this.trg;
        _this.trg.d.d.gotoAndStop(30);
        _this.trg.spin = false;
        _this.trg.busted = true;
        _root.soundy("boss1_explosions" + random(3) + ".wav", 80);
      } else {
        _this.trg.d.d.gotoAndStop(slotf());
        _this.trg.wtf = false;
      }
    } else if (f1 > 2 && (_this.trg.col == 41 || _this.trg.col <= 1)) {
      _this.trg.spin = false;
    }
    if (
      _this.trg.d.d.d._currentframe > 15 &&
      _this.trg.d.d._currentframe > 2 &&
      !_this.trg.wtf
    ) {
      if (_this.trg.col != 1 || _this.trg.d.d.d._currentframe > 36) {
        _this.lastspin = _this.fra + 12;
        _this.trg.wtf = true;
        f1 = _this.trg.d.d._currentframe;
        let f2 = 0;
        let f12 = 1;
        if (_this.trg.col == 41 && f1 > 2 && f1 < 24) {
          f1 = 0.65 - _this.ups[46];
          if (Math.random() < f1) {
            f1 = [
              "Look to la Luna",
              "Don't Leave The House Today",
              "We will all die one day",
              "You are throwing your life away",
              "Go outside!",
              "Give Up!",
              "You will die alone",
              "Ask again later",
              "WAKE UP",
              "you are worshiping a sun god",
              "Stay asleep",
              "Marry and Reproduce",
              "Question authority",
              "think for yourself",
              "Steven lives",
              "Bring him the photo",
            ];
            st11(f1[random(f1.length)]);
          } else if (random(20) == 0) {
            _this.chestopen = _this.trg;
            _this.trg.d.d.gotoAndStop(30);
            _this.trg.spin = false;
            _this.trg.busted = true;
            _root.soundy("boss1_explosions" + random(3) + ".wav", 80);
          } else if (random(30) == 0) {
            f2 = 5.1;
          } else if (random(3) == 0) {
            f2 = 5.3;
          } else if (random(3) == 0) {
            f2 = 5.010000003;
          } else {
            f2 = 5.35;
          }
        } else {
          sloty(f1);
          switch (f1) {
            case 43:
            case 44:
            case 45:
              if (random(3) == 0 || (random(3) == 0 && _this.ups[46])) {
                f2 = 5.01 + _this.trg.itt * 0.01;
                if (f2 == 5.02) {
                  f12 = 2 + random(2);
                } else {
                  f12 = Math.max(random(3), 2);
                }
                if (_this.trg.itt == 5) {
                  f2 = 5.1009;
                }
              } else {
                f2 = 18;
                _root.soundy("boss2intro_errorbuzz.wav");
              }
              break;
            case 42:
              break;
            case 38:
              if (_this.trg == _this.flox && _this.trg.minb != 3) {
                _this.flox = undefined;
              }
              _this.trg.spin = false;
              if (_this.trg.col == 31) {
                if (random(2) == 0) {
                  if (random(2) == 0) {
                    f2 = 5.07;
                  } else {
                    f2 = 5.3;
                  }
                } else if (random(4) == 0) {
                  f2 = 5.35;
                } else {
                  f2 = 5.1;
                }
              } else {
                f2 = 5.1022 + random(5) * 0.0001;
                if (random(2) == 0) {
                  if (random(3) == 0) {
                    f2 = 5;
                  } else {
                    f2 = 5.03 + random(2) * 0.01;
                  }
                } else if (random(2) == 0) {
                  if (random(2) == 0) {
                    f2 = 5.1022 + random(5) * 0.0001;
                  } else {
                    f2 = 5.3;
                  }
                } else {
                  f2 = 5.1;
                }
              }
              _this.trg.d.d.gotoAndStop(36);
              break;
            case 33:
              if (random(15) == 0) {
                f2 = 5.1;
                _this.trg.done = true;
                _root.soundy("boss1_explosions" + random(3) + ".wav", 80);
              } else {
                f2 = 5.02;
                f12 = Math.max(1, random(3));
                if (_this.ups[75]) {
                  f12++;
                }
                _root.soundy("bloodbank spawn" + random(2) + ".wav", 90);
              }
              break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 10:
            case 11:
            case 12:
            case 7:
            case 8:
            case 9:
            case 37:
              break;
            default:
              emo(true);
          }
        }
        if (f2 > 0) {
          if (f1 < 33) {
            _this.emosound = false;
          }
          if (f2 < 7 && f1 != 33) {
            this.emo();
          }
          _this.emosound = true;
          if (f1 < 33) {
            _root.soundy("slotspawn" + random(3) + ".wav");
          }
          if (
            f2 >= 5.1 &&
            _this.trg.col > 1 &&
            _this.trg.col != 41 &&
            f2 < 5.3
          ) {
            _this.bummer = true;
            if (_this.trg.col == 31) {
              _this.bummer = 2;
            }
            _this.trg2 = spaw(_this.trg.xp, _this.trg.yp + 80, 0, f2);
            if (_this.trg.col == 41) {
              _this.trg.empty = true;
              _this.trg.d.d.gotoAndStop(30);
              _this.trg2.it = 158;
            } else {
              _this.trg.empty = true;
              _this.trg.dones = true;
              _this.trg.d.d.gotoAndStop(40);
            }
          } else {
            let i = 0;
            while (i < f12) {
              let f13 = 0;
              while (f13++ < 10) {
                if (f1 >= 43 && f1 <= 45) {
                  _this.yenf = 4 + crand(2);
                  _this.xenf = (f1 - 44) * 4 + crand(2);
                  _this.f14 = _this.xenf * 5;
                  _this.f15 = 5;
                } else {
                  _this.xenf = crand(5);
                  _this.yenf = crand(5) * 0.2 + 3;
                  _this.f14 = 0;
                  _this.f15 = 0;
                }
                if (
                  linecheckx(
                    _this.trg.xp + _this.f14,
                    _this.trg.yp + _this.f15,
                    _this.trg.xp + _this.xenf * 7,
                    _this.trg.yp + _this.yenf * 7
                  )
                ) {
                  f13 = 1000;
                }
              }
              var trg2 = this.create(
                _this.trg.xp + _this.f14,
                _this.trg.yp,
                0,
                _this.xenf,
                _this.yenf,
                0,
                f2
              );
              trg2.alt = 2;
              if (f2 == 18) {
                trg2.fra = -10;
                trg2.xp += _this.xenf * 4;
              }
              if (f2 == 5.1) {
                if (_this.trg.col == 41) {
                  trg2.d.col = 41;
                  trg2.it = 158;
                  _this.trg.done = true;
                } else if (_this.trg.col == 1) {
                  trg2.it = 119;
                  if (random(2) == 0 && !_this.ups[135]) {
                    trg2.it = 135;
                  }
                  trg2.alt = 3;
                } else {
                  trg2.it = 18;
                }
                trg2.fra -= 15;
                trg2.d.d.gotoAndStop(44);
              }
              i++;
            }
          }
        }
      }
    }
  }
  if (_this.trg.alt) {
    if (_this.trg.alt > 4) {
      _this.trg.d.d.al.gotoAndStop(_this.trg.alt);
    } else if (_this.trg.alt == 3) {
      _this.trg.d.d.al.gotoAndStop(4);
    } else if (_this.trg.alt == 2) {
      _this.trg.d.d.al.gotoAndStop(3);
    } else {
      _this.trg.d.d.al.gotoAndStop(2);
    }
  }
  if (_this.fra - _this.trg.fra > 25) {
    _this.trg.bh = true;
  }
  if (_this.trg.it > 0) {
    _this.f1 = _this.trg.it / 100;
  } else {
    _this.f1 = 0;
  }
  if (_this.trg.d._currentframe == 4) {
    if (_this.trg.fail == undefined) {
      _this.trg.fail = 0;
    }
    if ((_this.trg.col == 3 || _this.trg.col == 5) && _this.trg.fail++ > 60) {
      _this.trg.done = true;
      _this.trg2 = this.bombfail(_this.trg.xp, _this.trg.yp);
      _this.trg2.col = _this.trg.col;
    }
  }
  if (_this.trg.d._currentframe == 9) {
    _this.trg.nod = true;
    _this.trg.swapDepths(300 + _this.e);
    if (
      enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.player.xp,
        _this.player.yp,
        50
      ) &&
      !_this.trg.open
    ) {
      _this.trg.d.d.gotoAndStop(1);
    } else {
      _this.trg.open = true;
      if (_this.trg.d.d._currentframe != 23) {
        _this.trg.d.d.nextFrame();
      }
    }
  } else if (_this.trg.d._currentframe == 10) {
    _this.trg.d.d.nextFrame();
    _this.trg.d.d.d.d.gotoAndStop(_this.trg.it);
    if (_this.trg.empty) {
      _this.trg.d.d.d.gotoAndStop(21);
    }
  } else if (_this.trg.d._currentframe == 15) {
    _this.f1 = _this.trg.d.d._currentframe / 10 + _this.f1 / 100;
    _this.trg.d.d.d.gotoAndStop(_this.trg.it);
  }
  if (_this.trg.col) {
    _this.f1 += _this.trg.col / 10000000;
  }
  _this.f1 = _this.trg.d._currentframe + _this.f1;
  if (!_this.trg.empty || _this.trg.spin) {
    _root.levit[_root.lev!].push(_this.f1, _this.trg.xp, _this.trg.yp);
  }
  if (_this.trg.d._currentframe >= 5 && _this.trg.d._curretnframe != 7) {
    _this.trg.xbew *= 0.8;
    _this.trg.ybew *= 0.8;
  }
  if (
    _this.trg.d._currentframe >= 8 &&
    !_this.trg.busted &&
    (_this.trg.d._currentframe != 10 || !_this.trg.alt)
  ) {
    if (_this.trg.d._currentframe == 10) {
      if (
        enfcheck(_this.trg.xp, _this.trg.yp, _this.trg.xpp, _this.trg.ypp, 30)
      ) {
        _this.trg.xp = _this.trg.xp * 0.3 + _this.trg.xpp * 0.7;
        _this.trg.yp = _this.trg.yp * 0.3 + _this.trg.ypp * 0.7;
        if (levzz(this.ingrid(_this.trg.xp, _this.trg.yp)) < 1) {
          _this.trg.xpp = _this.trg.xp;
          _this.trg.ypp = _this.trg.yp;
        }
      }
    }
    _this.trg.xp = _this.trg.xpp;
    _this.trg.yp = _this.trg.ypp;
  }
  _this.trg.xbew *= 0.965;
  _this.trg.ybew *= 0.965;
  if (!_this.trg.empty) {
    let f1 = _this.trg.d._currentframe;
    if (f1 == 7) {
      if (_this.trg.col < 7) {
        f1 = 8;
      }
    } else if (f1 == 8) {
      f1 = 9;
    } else if (f1 == 9) {
      f1 = 0;
    }
    let f2 = _root.levcol[_root.lev!];
    if (f1 == 1 && f2 < 5) {
      f2 = 0;
    }
    if (f2 == 1 && f1 < 5) {
      f1 = 0;
    }
    _root.levcol[_root.lev!] = Math.max(f2, f1);
  }
}
function aistuff() {
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    deathscripts();
    deathscripts2();
    if (_this.trg.uncol < _this.fra) {
      this.speco(_this.trg);
    }
    if (_this.trg.s <= 9) {
      if (!_this.trg.dones) {
        switch (_this.trg.s) {
          case 3:
            friends();
            break;
          case 2:
            if (_this.ups[48] && !_this.trg.ba) {
              if (_this.fra % 30 == 0) {
                _this.trg.hh = [];
              }
            }
            if (_this.trg.fra + 2 < _this.fra) {
              _this.trg.bh = true;
            }
            if (_this.trg.bombo) {
              _this.trg.bh = _this.trg.dy > -68;
              _this.trg.ggh = _this.trg.dy <= -50;
              if (
                _this.trg.yp < 150 ||
                _this.trg.yp > 420 ||
                _this.trg.xp > 580 ||
                _this.trg.xp < 60
              ) {
                _this.trg.ggh = false;
                _this.trg.death = true;
              } else {
                _this.trg.death = false;
              }
            }
            if (_this.ups[5] && !_this.trg.ba) {
              if (_this.fra - _this.trg.fra > _root.firrr / 3 - 4) {
                _this.trg2 = _this.player;
                _this.enf = enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.trg2.xp,
                  _this.trg2.yp,
                  500
                );
                _this.enf = 0.6 / _this.enf;
                _this.trg.xbew -= _this.xenf * _this.enf;
                _this.trg.ybew -= _this.yenf * _this.enf;
                _this.trg.xbew *= 0.98;
                _this.trg.ybew *= 0.98;
                if (!_this.ups[149]) {
                  _this.trg.fd = -0.045;
                }
              }
            }
            if (_this.ups[132] && !_this.trg.ba && !_this.ups[114]) {
              if (_this.trg.gro++ < 150) {
                _this.trg.dmg += 0.14;
                _this.trg.d._xscale += 1;
                _this.trg.d._yscale += 1;
              }
            }
            if (
              (_this.ups[3] && !_this.trg.ba) ||
              _this.trg.ba == 4 ||
              _this.trg.ba == 11
            ) {
              if (
                _this.trg.trg2 == undefined ||
                _this.trg.trg2.dones ||
                _this.trg.trg2.xp <= 0 ||
                !_this.trg.trg2._visible
              ) {
                if ((_this.fra + _this.trg.e) % 6 == 0) {
                  let f1 = _this.trg.xp + _this.trg.xbew * 4;
                  let f2 = _this.trg.yp + _this.trg.ybew * 4;
                  _this.siz = 150;
                  for (let i in _this.ball) {
                    _this.trg2 = _this.ball[i];
                    if (
                      _this.trg2.s > 9 &&
                      !_this.trg2.dones &&
                      !_this.trg.hh[_this.trg2.e]
                    ) {
                      if (
                        (_this.enf = enfcheck(
                          f1,
                          f2,
                          _this.trg2.xp,
                          _this.trg2.yp,
                          _this.siz
                        ))
                      ) {
                        let f3 =
                          _this.xenf * _this.trg.xbew +
                          _this.yenf * _this.trg.ybew;
                        if (
                          _this.trg2.pos >= 3 &&
                          _this.trg2.bh &&
                          _this.f3 < 0
                        ) {
                          _this.siz = _this.enf;
                          _this.trg.trg2 = _this.trg2;
                        }
                      }
                    }
                  }
                  if (_this.trg.trg2 != undefined) {
                    _this.trg2 = _this.trg.trg2;
                    if (
                      linecheckx(
                        _this.trg.xp,
                        _this.trg.yp,
                        _this.trg2.xp,
                        _this.trg2.yp
                      )
                    ) {
                      _this.trg.gonuts = true;
                    } else {
                      _this.trg.trg2 = undefined;
                    }
                  }
                }
              } else if (_this.trg.trg2 != undefined) {
                _this.trg2 = _this.trg.trg2;
                if ((_this.fra + _this.trg.e) % 5 == 0) {
                  if (
                    linecheckx(
                      _this.trg.xp,
                      _this.trg.yp,
                      _this.trg2.xp,
                      _this.trg2.yp
                    )
                  ) {
                    _this.trg.gonuts = true;
                  }
                }
                if (_this.trg2.dones || _this.trg.hh[_this.trg.trg2.e]) {
                  _this.trg.trg2 = undefined;
                  _this.trg.gonuts = false;
                } else if (_this.trg.gonuts && random(2) == 0) {
                  let f1 = _this.trg2.xp;
                  let f2 = _this.trg2.yp;
                  if (_this.trg.xbew > -100) {
                    f1 += _this.trg.xbew * 3;
                  }
                  if (_this.trg.ybew > -100) {
                    f2 += _this.trg.ybew * 3;
                  }
                  _this.enf = enfcheck(_this.trg.xp, _this.trg.yp, f1, f2, 200);
                  if (_this.enf > 0) {
                    _this.trg.dm *= 0.75;
                    _this.enf = 3 / _this.enf;
                    _this.trg.xbew -= _this.xenf * _this.enf;
                    _this.trg.ybew -= _this.yenf * _this.enf;
                    if (_this.ups[182] && !_this.trg.ba) {
                      _this.trg.xbew *= 0.65;
                      _this.trg.ybew *= 0.65;
                    } else {
                      _this.trg.xbew *= 0.8;
                      _this.trg.ybew *= 0.8;
                    }
                  }
                }
              }
            }
            if (_this.ups[59] && _this.trg.trg2 == undefined && !_this.trg.ba) {
              if (_this.trg.sot) {
                _this.trg.xppx = _this.trg.sot.xppx;
                _this.trg.yppx = _this.trg.sot.yppx;
              } else if (_this.fra5) {
                let f1 = enfget(_this.trg.xbew, _this.trg.ybew);
                if (f1) {
                  f1 = (Math.sin(_this.fra / 3 + _this.trg.fra * 3) * 2.5) / f1;
                  _this.trg.xppx = _this.trg.ybew * f1;
                  _this.trg.yppx = (0 - _this.trg.xbew) * f1;
                }
              }
              if (_this.trg.xppx) {
                _this.trg.xp += _this.trg.xppx;
                _this.trg.yp += _this.trg.yppx;
              }
            }
          case 9:
            if (
              _this.trg.s == 9 &&
              (!_this.trg.bomb || _this.blackout == 2) &&
              _this.trg.sss != 68 &&
              !_this.trg.hom &&
              _this.trg.sss != 100 &&
              (_this.trg.sss != 101 || !_this.altboss)
            ) {
              var _loc2_ = new flash.geom.Transform(_this.trg);
              _loc2_.colorTransform = _this.bull;
              if (_this.isaaaac) {
                _this.trg.colo = _this.bull;
                _this.trg.spl = 10;
              }
            }
            if (random(16) == 0 || _this.trg.spll) {
              splater(
                _this.trg.xp,
                _this.trg.yp,
                _this.trg.spl + 1 + random(10),
                Math.random() * 0.3 + 0.1
              );
            }
            if (_this.trg.hom) {
              let f1 = 100;
              if (
                _this.trg.sss == 57 ||
                _this.trg.sss == 32 ||
                _this.trg.sss == 50 ||
                _this.trg.hom == 2 ||
                _this.trg.hom == 3
              ) {
                f1 = 1000;
              }
              _this.enf = enfcheck(
                _this.trg.xp + _this.trg.xbew * 5,
                _this.trg.yp + _this.trg.ybew * 5,
                _this.player.xp,
                _this.player.yp,
                f1
              );
              if (_this.enf > 0) {
                _this.enf = enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  1000 + f1
                );
                _this.enf += _this.enf * _this.enf * 0.001;
                _this.enf = 1.4 / _this.enf;
                if (_this.trg.sss == 32) {
                  _this.enf *= 1.2;
                }
                if (_this.trg.sss == 50) {
                  _this.enf *= 0.75;
                }
                if (_this.trg.hom == 3) {
                  _this.enf *= 0.6;
                }
                _this.trg.xbew -= _this.xenf * _this.enf;
                _this.trg.ybew -= _this.yenf * _this.enf;
                if (_this.enf > 300) {
                  _this.trg.xbew *= 0.97;
                  _this.trg.ybew *= 0.97;
                } else {
                  _this.trg.xbew *= 0.92;
                  _this.trg.ybew *= 0.92;
                }
              }
            }
          case 8:
            if (_this.trg.s == 8) {
              if (random(3) == 0) {
                splater(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.trg.spl + 1 + random(10),
                  ((Math.random() * 0.3 + 0.1) * _this.trg.d._xscale) / 100
                );
              }
            }
          case 7:
            if (!_this.trg.knife) {
              if (_this.trg.longshot == 2) {
                _this.trg.dm *= 0.95;
                _this.trg.dm += 0.05;
                if (_this.trg.fd) {
                  _this.trg.dm += _this.trg.fd * 0.5;
                }
                _this.trg.dy += _this.trg.dm * 0.5;
              } else if (_this.trg.longshot) {
                _this.trg.dm *= 0.975;
                _this.trg.dm += 0.025;
                if (_this.trg.fd) {
                  _this.trg.dm += _this.trg.fd * 0.25;
                }
                _this.trg.dy += _this.trg.dm * 0.25;
              } else {
                _this.trg.dm *= 0.9;
                _this.trg.dm += 0.1;
                if (_this.trg.fd) {
                  _this.trg.dm += _this.trg.fd;
                }
                _this.trg.dy += _this.trg.dm;
              }
              _this.trg.d._y = _this.trg.dy;
              if (_this.trg.dy > -5) {
                if (_this.trg.s == 2) {
                  _this.trg.wtfst = true;
                }
                if (
                  (_this.trg.s == 8 || _this.trg.s == 7) &&
                  !mhit(_this.trg.xp, _this.trg.yp)
                ) {
                  _this.maxx = new flash.geom.Matrix();
                  _this.maxx.translate(_this.trg.xp, _this.trg.yp);
                  _this.maxx.scale(_this.hdx, _this.hdx);
                  if (_this.trg.colo) {
                    _this.gut.draw(_this.trg, _this.maxx, _this.trg.colo);
                  } else if (_this.trg.s == 8) {
                    _this.gut.draw(_this.trg, _this.maxx, _this.bloc);
                  } else {
                    _this.gut.draw(_this.trg, _this.maxx);
                  }
                  _this.trg._visible = false;
                }
                if (random(2) == 0) {
                  _root.soundy("splatter0" + random(3) + ".wav");
                }
                _this.trg.d.gotoAndStop("groundhit");
                _this.trg.dones = true;
              }
            }
            if (_this.trg.s == 9) {
              if (_this.trg.nog-- <= 0) {
                if (_this.trg.dy < -50) {
                  _this.trg.bh = false;
                  _this.trg.ggh = true;
                } else {
                  _this.trg.ggh = false;
                  _this.trg.bh = true;
                }
              }
            }
            break;
          case 5:
            aicol();
            break;
          case 4:
            if (_this.trg.bolt) {
              if (trgnextd(_this.trg.d, true)) {
                _this.trg.done = true;
              }
              if (
                _this.trg.d._currentframe > 12 &&
                _this.trg.d._currentframe < 35
              ) {
                if (_this.fra % 3 == _this.trg.e % 3) {
                  for (let a in _this.ball) {
                    _this.trg2 = _this.ball[a];
                    if (_this.trg2.s == 1 || _this.trg2.s > 10) {
                      if (
                        enfcheck(
                          _this.trg.xp,
                          _this.trg.yp,
                          _this.trg2.xp,
                          _this.trg2.yp,
                          30
                        )
                      ) {
                        if (_this.trg2 == _this.player) {
                          if (!_this.trg.friend) {
                            this.playerhurt(1, 65);
                          }
                        } else if (_this.trg2.s != 102) {
                          if (_this.trg.friend) {
                            hurt(_this.trg2, 20);
                          } else {
                            hurt(_this.trg2, 2);
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else if (_this.trg.flir) {
              if (trgnextd(_this.trg.d, false)) {
                _this.trg.done = true;
              } else {
                _this.nofun = true;
                for (let a in _this.ball) {
                  _this.trg2 = _this.ball[a];
                  if (
                    (_this.fra + _this.trg2.e) % 5 == 0 &&
                    _this.trg2.s > 8 &&
                    _this.trg2.bh
                  ) {
                    if (
                      enfcheck(
                        _this.trg.xp,
                        _this.trg.yp,
                        _this.trg2.xp,
                        _this.trg2.yp,
                        43
                      )
                    ) {
                      hurt(_this.trg2, 23);
                      if (!_this.f3 && _this.trg2.firs + 10 <= _this.fra) {
                        _this.trg2.firs = _this.fra;
                        _root.soundy(
                          "Firedeath_hiss.wav",
                          Math.min(100, 50 + _this.trg.hp * 5)
                        );
                      }
                    }
                  }
                }
              }
              _this.trg.xbew *= 0.95;
              _this.trg.ybew *= 0.95;
            } else {
              if (_this.trg.dec) {
                _this.dec = undefined;
                if (_this.trg.d._currentframe != 7) {
                  _this.trg.dones = true;
                }
              }
              if (_root.it == 97) {
                if (_this.trg.d._currentframe == 1) {
                  if (_this.trg.d.d._currentframe == 10) {
                    _this.trg.d.d.gotoAndStop(1);
                  }
                }
              }
              if (_this.ups[125] || (_this.ups[52] && _this.ups[3])) {
                if (
                  _this.trg.trg2 == undefined ||
                  _this.trg.trg2.dones ||
                  _this.trg.trg2.xp <= 0
                ) {
                  if (_this.fra % 3 == 0) {
                    let f1 = _this.trg.xp + _this.trg.xbew * 5;
                    let f2 = _this.trg.yp + _this.trg.ybew * 5;
                    _this.siz = 150;
                    for (let i in _this.ball) {
                      _this.trg2 = _this.ball[i];
                      if (
                        _this.trg2.s > 9 &&
                        !_this.trg2.dones &&
                        !_this.trg.hh[_this.trg2.e]
                      ) {
                        if (
                          (_this.enf = enfcheck(
                            f1,
                            f2,
                            _this.trg2.xp,
                            _this.trg2.yp,
                            _this.siz
                          ))
                        ) {
                          _this.siz = _this.enf;
                          _this.trg.trg2 = _this.trg2;
                        }
                      }
                    }
                    if (_this.trg.trg2 != undefined) {
                      _this.trg2 = _this.trg.trg2;
                      if (
                        linecheckx(
                          _this.trg.xp,
                          _this.trg.yp,
                          _this.trg2.xp,
                          _this.trg2.yp
                        )
                      ) {
                        _this.trg.gonuts = true;
                      }
                    }
                  }
                } else if (_this.trg.trg2 != undefined) {
                  _this.trg2 = _this.trg.trg2;
                  if ((_this.fra + _this.trg.e) % 5 == 0) {
                    if (
                      linecheckx(
                        _this.trg.xp,
                        _this.trg.yp,
                        _this.trg2.xp,
                        _this.trg2.yp
                      )
                    ) {
                      _this.trg.gonuts = true;
                    }
                  }
                  if (!!_this.trg2.dones || _this.trg.hh[_this.trg.trg2.e]) {
                    _this.trg.trg2 = undefined;
                    _this.trg.gonuts = false;
                  } else if (_this.trg.gonuts) {
                    _this.enf = enfcheck(
                      _this.trg.xp,
                      _this.trg.yp,
                      _this.trg2.xp,
                      _this.trg2.yp,
                      100
                    );
                    if (_this.enf > 0) {
                      _this.enf = 0.5 / _this.enf;
                      _this.trg.xbew -= _this.xenf * _this.enf;
                      _this.trg.ybew -= _this.yenf * _this.enf;
                      _this.trg.xbew *= 0.95;
                      _this.trg.ybew *= 0.95;
                    }
                  }
                }
              }
              if (_this.trg.d._currentframe == 1) {
                _this.trg.d.d.nextFrame();
              }
              if (_this.fra - _this.trg.fra > 30) {
                _this.trg.ph = false;
              }
              if (_this.fra - _this.trg.fra > 15) {
                _this.trg.bh = true;
              }
              if (_this.fra - _this.trg.lfra > 3 && !_this.trg.nex) {
                _this.trg.nex = true;
                _this.nextbo = true;
              }
              if (!_this.trg.empty) {
                _root.levit[_root.lev!].push(-100, _this.trg.xp, _this.trg.yp);
              }
              _this.trg.xbew *= 0.95;
              _this.trg.ybew *= 0.95;
              _this.trg.d.d.p.gotoAndStop(_this.trg.col);
            }
        }
      }
    } else {
      alive();
    }
  }
}
function actions1() {
  actions2();
  aistuff();
  while (_this.refl.length > 0) {
    _this.trg2 = create(
      _this.refl.pop(),
      _this.refl.pop(),
      0,
      _this.refl.pop(),
      _this.refl.pop(),
      0,
      9,
      27
    );
    _this.trg2.dy = -20;
  }
  _this.refl = [];
  if (_this.rply) {
    _this.player = _this.rply;
    _this.rply = undefined;
  }
  tip(1);
  if (_this.helps >= 1) {
    _this.mhelps = Math.max(_this.helps, _this.mhelps);
    if (_this.sati.pow == 1 || _this.sati.pow == 2) {
      _this.mhelps--;
      _this.help -= 1;
    }
    _this.help /= _this.mhelps;
    _root.hud.bar.bar._xscale = _this.help * 98 + 2;
    _root.hud.bar._visible = true;
    if (_this.mins) {
      _root.hud.bar.gotoAndStop(3);
      _root.hud.bar.bar._xscale = 87 * _this.help + 13;
      _root.hud.bar.bar._xscale *= 0.56;
    } else {
      _root.hud.bar.gotoAndStop(1);
    }
    if (_this.gurdy) {
      _root.hud.bar._y = 70;
    }
  } else {
    _root.hud.bar.gotoAndStop(2);
    _root.hud.bar._visible = false;
  }
}
function green(f11, f12) {
  _this.trg2 = this.bossfire(1, !f12, 10);
  _this.trg2.bomb = true;
  _this.trg2.d._xscale = _this.trg2.d._yscale = 160;
  if (_this.trg.s != 43) {
    _this.trg2.xbew *= 0.55;
    _this.trg2.ybew *= 0.55;
  }
  if (f12) {
    let f1 = Math.random() + 0.6;
    _this.trg2.xbew *= f1;
    _this.trg2.ybew *= f1;
  }
  _this.trg2.fd -= 0.3;
  _this.trg2.dm *= 0.7;
  _this.trg2.dm -= 13;
  if (_this.trg.s == 87) {
    _this.trg2.fd -= 0.3;
    _this.trg2.dm += 10;
  }
  if (_this.trg.s == 64 || _this.trg.s == 43 || _this.trg.s == 82) {
    _this.trg2.xp -= _this.trg.d._xscale * 0.2;
    _this.trg2.pois = true;
    _this.trg2.spl = 30;
    if (_this.trg.d._currentframe < 7 || _this.trg.s == 82) {
      _this.trg2.dy -= 27;
    }
  }
  if (
    _this.trg.s == 82 ||
    _this.trg.s == 78 ||
    (_this.trg.specoz == 23 &&
      _this.trg.s != 64 &&
      _this.trg.s != 88 &&
      _this.trg.s != 30 &&
      _this.trg.s != 43 &&
      _this.trg.s != 46 &&
      _this.trg.s != 61 &&
      _this.trg.s != 87)
  ) {
    _this.trg2.pois = 4;
    _this.trg2.spl = 0;
  } else if (f11 == 2) {
    colorit(_this.trg2, 0.2, 0.2, 0.2, 0, 0, 0);
  } else if (!f11) {
    colorit(_this.trg2, 0.4, 2, 0.5, 0, 0, 0);
  }
  if (_this.trg.s == 62) {
    _this.trg2.dy -= 40;
  }
  if (_this.trg.s == 46 && _this.trg.minb != 3 && _this.trg.eternal) {
    let f1 = Math.random() * 2 + 0.4;
    _this.trg2.xbew *= f1;
    _this.trg2.ybew *= f1;
  }
  return _this.trg2;
}
function boiler(f1, f2) {
  if (f1) {
    if ((!_this.trg.boss && !(_this.trg.s == 88)) || random(50) == 0) {
      if (
        (enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          230
        ) ||
          random(4) == 0) &&
        (_this.trg.alter != 3 ||
          (_this.ashut < 10 && random(_this.ashut) == 0) ||
          _this.trg.eternal)
      ) {
        _this.trg.d.gotoAndStop(5);
      } else {
        _this.trg.d.gotoAndStop(2);
      }
    } else {
      _this.trg.d.d.gotoAndStop(1);
    }
    _this.trg.fire = 0;
  } else if (f2) {
    if (_this.trg.fire++ == 10) {
      if (
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          250 - Math.random() * 20
        ) &&
        !_this.trg.boss
      ) {
        this.boil(true);
      } else {
        this.boil(false);
      }
      if (_this.trg.specoz == 23 && (_this.trg.alter != 3 || _root.chaps > 2)) {
        this.boil(_this.trg.alter == 2);
        if (_this.trg.alter != 3) {
          this.boil(_this.trg.alter == 2);
        }
      }
    }
  }
}
function boil(f1, f2) {
  if (
    ((_this.trg.alter == 3 ||
      _this.trg.c2 ||
      _this.trg.col == 31 ||
      _this.trg.s == 67 ||
      _this.trg.s == 73 ||
      _this.trg.s == 28 ||
      _this.trg.s == 64 ||
      _this.trg.s >= 100 ||
      _this.trg.s == 46 ||
      _this.trg.s == 94) &&
      _this.trg.s != 15 &&
      f2 != 1 &&
      f2 != 0) ||
    f2 == 2
  ) {
    if (_this.trg.s == 88 || _this.trg.s == 30) {
      _root.soundy("boil hatch.wav");
    }
    if (_this.bigone) {
      _this.f8 = 94;
    } else {
      _this.f8 = 85;
    }
    _this.spispaw = true;
    if (_this.trg.s == 28) {
      _this.trg2 = spaw(_this.xenf, _this.yenf, 10, _this.f8);
    } else if (!f1) {
      _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 100, _this.f8);
    } else {
      _this.trg2 = spaw(
        _this.player.xp * 0.5 + _this.trg.xp * 0.5,
        _this.player.yp * 0.5 + _this.trg.yp * 0.5,
        70,
        _this.f8
      );
    }
    _this.spispaw = undefined;
    _this.trg2.xpp = _this.trg2.xp;
    _this.trg2.ypp = _this.trg2.yp;
    _this.trg2.xp = _this.trg.xp;
    _this.trg2.yp = _this.trg.yp;
    _this.xenf = _this.trg2.xpp - _this.trg2.xp;
    _this.yenf = _this.trg2.ypp - _this.trg2.yp;
    f1 = enfget(_this.xenf, _this.yenf);
    f1 = f2 / f1;
    f1 = 0.04;
    _this.trg2.f1 = _this.trg2.xbew = _this.xenf * f1;
    _this.trg2.f2 = _this.trg2.ybew = _this.yenf * f1;
    _this.trg2.fra = 0;
    _this.trg2.d.gotoAndStop(5);
    _this.trg2.apf = false;
    _this.trg2.df = -8;
    _this.trg2.bh = false;
    _this.trg.fire = -100;
    if (_this.trg.specoz == 23 && _this.trg.s == 100) {
      _this.trg2.hp -= 3;
      _this.trg.hp -= 5;
    }
    if (_this.trg.specoz == 23 && _this.trg.s == 94) {
      _this.trg2.specoz = 23;
      this.speco(_this.trg2);
    }
  } else if (
    ((_this.trg.alter == 2 || f2 == 1) && _this.trg.s != 15 && f2 != 0) ||
    f2 == 1
  ) {
    _this.trg.fire = -50;
    green(false, f1);
    _root.soundy("heartout.wav", 70);
  } else {
    this.bossfire(3 + random(2), f1, 10);
  }
}
function braz() {
  for (let z in _this.ball) {
    _this.trg2 = _this.ball[z];
    if (_this.trg2.s > 10 && _this.trg2 != _this.trg) {
      if (
        enfcheck(_this.trg.xp, _this.trg.yp, _this.trg2.xp, _this.trg2.yp, 60)
      ) {
        hurt(_this.trg2, 100);
      }
    }
  }
}

function spih() {
  var _loc1_ = spaw(_this.player.xp, _this.player.yp, 50, 29.3);
  _loc1_.fra = 0;
  _loc1_.xpp = _loc1_.xp;
  _loc1_.ypp = _loc1_.yp;
  _loc1_.xp = _this.trg.xp;
  _loc1_.yp = _this.trg.yp;
  _loc1_.d.gotoAndStop(2);
  _loc1_.d.d.gotoAndStop(5);
  _this.trg2.apf = true; // tgr2? bug?
  _loc1_.f1 = 100;
}
function bawssmart2() {
  switch (_this.trg.s) {
    case 94:
    case 85:
      this.bord();
      let f1: number | boolean =
        _this.trg.d._currentframe == 5 && _this.trg.s != 94;
      _this.trg.bh = !f1;
      _this.trg.ggh = f1;
      if (f1) {
        _this.trg.xbew = _this.trg.f1;
        _this.trg.ybew = _this.trg.f2;
        _this.trg.df += 0.7;
        _this.trg.d.d._y += _this.trg.df;
        if (_this.trg.d.d._y > -13 && _this.trg.xpp != undefined) {
          _this.trg.d.gotoAndStop(1);
          _this.trg.xp = _this.trg.xpp;
          _this.trg.yp = _this.trg.ypp;
          _this.trg.xpp = undefined;
        }
      } else if (_this.trg.still > _this.fra) {
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
        _this.trg.d.gotoAndStop(1);
      } else {
        randrunc();
      }
      break;
    case 96:
      _this.trg2 = _this.trg.trg2;
      if (_this.trg2 == undefined || _this.trg2.dones) {
        _this.trg.s = 18;
        _this.trg.trg2 = undefined;
        _this.trg.mhp = _this._loc0_ = 20;
        _this.trg.hp = _this._loc0_;
        _this.trg.flyai = true;
        _this.trg.ybb = _this._loc0_ = 0;
        _this.trg.xbb = _this._loc0_;
        _this.trg.imba = false;
        _this.trg.d._yscale = _this._loc0_ = 118;
        _this.trg.d._xscale = _this._loc0_;
      } else if (_this.trg2.xp > 10) {
        if (_this.trg2.s == 90 || _this.trg2.shit || _this.trg2.s == 67) {
          _this.f11 =
            (0 - _this.fra * 0.02) * 3.141592653589793 + _this.trg.wtf / 2;
          if (_this.trg.wtf % 2 == 0) {
            _this.f11 *= -1;
          }
          _this.trg.xpp = _this.trg2.xp + Math.sin(_this.f11) * 60;
          _this.trg.ypp = _this.trg2.yp + Math.cos(_this.f11) * 50;
        } else {
          if (_this.trg.wtf % 2 == 0) {
            _this.f11 *= -1;
          }
          _this.f11 = _this.fra * 0.04 * 3.141592653589793 + _this.trg.wtf / 2;
          let f1 = 1;
          if (_this.trg2.s == 26 && _this.trg2.eternal) {
            f1 = 1.1;
          } else if (_this.trg2.s == 22 && _this.trg2.eternal) {
            f1 = 1.6;
          }
          _this.trg.xpp = _this.trg2.xp + Math.sin(_this.f11) * 25 * f1;
          _this.trg.ypp = _this.trg2.yp + Math.cos(_this.f11) * 20 * f1;
        }
        _this.trg.imba = true;
        _this.trg.xp += _this.trg.xpp;
        _this.trg.yp += _this.trg.ypp;
        _this.trg.xp *= 0.5;
        _this.trg.yp *= 0.5;
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
      }
      break;
    case 74:
    case 75:
    case 76:
      if (_this.trris + 45 + random(100) <= _this.fra && random(100) == 0) {
        _this.trris = _this.fra;
        _root.soundy("boss2_bubbles" + random(2) + ".wav", 100);
      }
    case 77:
      f1 = _this.trg.s - 74;
      let f2: any = [5, 17, 16, 15];
      let f3: any = [1, 7, 10, 13];
      f2 = f2[f1];
      f3 = f3[f1];
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      if (_this.fra - _this.trg.fra < 10) {
        _this.trg.d.gotoAndStop(f2);
      }
      if (_this.trg.d._currentframe == f2) {
        _this.trg.xbew *= 0.45;
        _this.trg.ybew *= 0.45;
      }
      this.trgnextd();
      if (_this.trg.d._currentframe == 1) {
        _this.trg.d.gotoAndStop(f3);
      }
      if (
        _this.trg.d._currentframe == 13 &&
        _this.trg.d.d._currentframe == 17
      ) {
        if (_this.trg.eternal && Math.abs(_this.trg._xscale) > 120) {
          _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 80);
          this.cirf(
            _this.trg.xp,
            _this.trg.yp + 20,
            8,
            Math.round(4 + Math.abs(_this.trg._xscale) / 40)
          );
        } else if (_this.trriss + 5 + random(20) <= _this.fra) {
          _this.trriss = _this.fra;
          _root.soundy("gooattach0" + random(2) + ".wav", 40 + random(30));
        }
      }
      if (
        _this.trg.d._currentframe == 10 &&
        _this.trg.d.d._currentframe == 18
      ) {
        _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 60);
      }
      if (
        (_this.trg.d._currentframe == 2 ||
          _this.trg.d._currentframe == 7 ||
          _this.trg.d._currentframe == 8) &&
        _this.trg.d.d._currentframe == 22
      ) {
        _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 80);
      }
      if (_this.trg.d._currentframe == 3 && _this.trg.d.d._currentframe == 24) {
        _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
      }
      if (_this.trg.d._currentframe == 5 && _this.trg.d.d._currentframe == 22) {
        _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 120);
      }
      _this.trg.bh =
        (_this.trg.d._currentframe != 4 || _this.trg.d.d._currentframe < 11) &&
        (_this.trg.d._currentframe != 5 || _this.trg.d.d._currentframe > 21);
      switch (_this.trg.d._currentframe) {
        case 10:
          if (_this.trg.d.d._currentframe == 1) {
            if (random(2) == 0) {
              _this.trg.d.gotoAndStop(11);
            } else {
              _this.trg.xpp = undefined;
            }
          } else {
            randrun();
          }
          if (_this.trg.d.d._currentframe > 19) {
            _this.trg.xbew *= 0.6;
            _this.trg.ybew *= 0.6;
          }
          break;
        case 11:
          if (_this.trg.d.d._currentframe == 21) {
            this.quadf(_this.trg.xp, _this.trg.yp, 8);
            _root.soundy("heartout.wav");
          }
          break;
        case 7:
          if (_this.trg.d.d._currentframe == 1) {
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1500
            );
            f1 = 0;
            if (_this.enf < 250) {
              if (random(2) == 0) {
                _this.trg.d.gotoAndStop(8);
                f1 = 0.4;
              } else {
                f1 = 1.5;
              }
            } else {
              f1 = 1.5;
              _this.xenf = crand(10);
              _this.yenf = this.crand();
              _this.enf = 10;
            }
            f1 /= _this.enf;
            _this.trg.xpp = (0 - _this.xenf) * f1;
            _this.trg.ypp = (0 - _this.yenf) * f1;
          }
        case 8:
          if (
            _this.trg.d.d._currentframe < 23 &&
            _this.trg.d.d._currentframe > 4
          ) {
            if (_this.trg.xpp != undefined) {
              _this.trg.xbew += _this.trg.xpp;
              _this.trg.ybew += _this.trg.ypp;
            }
          } else {
            _this.trg.xbew *= 0.9;
            _this.trg.ybew *= 0.9;
          }
          if (
            _this.trg.d.d._currentframe == 23 &&
            _this.trg.d._currentframe == 8
          ) {
            quadf(_this.trg.xp, _this.trg.yp, 10, random(2) * 2);
          }
          break;
        case 1:
          if (_this.trg.s == 74) {
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1500
            );
            f1 = 0;
            if (_this.enf < 250) {
              if (random(2) == 0) {
                _this.trg.d.gotoAndStop(3);
                f1 = 0.4;
              } else {
                _this.trg.d.gotoAndStop(2);
                f1 = 1.5;
              }
            } else {
              f1 = 3;
              _this.trg.d.gotoAndStop(4);
            }
            f1 /= _this.enf;
            _this.trg.xpp = (0 - _this.xenf) * f1;
            _this.trg.ypp = (0 - _this.yenf) * f1;
          }
          break;
        case 5:
          if (_this.trg.eternal) {
            if (
              (_this.trg.d.d._currentframe == 26 ||
                _this.trg.d.d._currentframe == 29) &&
              _this.fra > 60
            ) {
              quadf(_this.trg.xp, _this.trg.yp + 25, 10, true);
            }
          }
        case 3:
          if (_this.trg.d.d._currentframe == 23 && _this.fra > 60) {
            if (_this.trg.d._currentframe == 5) {
              quadf(_this.trg.xp, _this.trg.yp + 25, 10, true);
            } else {
              this.bossfire(8, false);
              if (_this.trg.eternal) {
                this.bossfire(16, false);
              }
            }
          }
        case 2:
          if (
            _this.trg.d.d._currentframe < 23 &&
            _this.trg.d.d._currentframe > 4
          ) {
            if (_this.trg.xpp != undefined) {
              _this.trg.xbew += _this.trg.xpp;
              _this.trg.ybew += _this.trg.ypp;
            }
          } else {
            _this.trg.xbew *= 0.9;
            _this.trg.ybew *= 0.9;
          }
          break;
        case 6:
        case 9:
          if (
            (_this.trg.s == 75 && _this.trg.d.d._currentframe == 19) ||
            (_this.trg.s == 74 && _this.trg.d.d._currentframe == 30)
          ) {
            if (_this.trg.s == 74) {
              f1 = 30;
            } else {
              f1 = 20;
            }
            f1 = crand(f1);
            f2 = this.crand();
            f3 = 0.3;
            _this.trg2 = this.create(
              _this.trg.xp + f1,
              _this.trg.yp + f2,
              0,
              f1 * f3,
              f2 * f3,
              0,
              _this.trg.s + 1
            );
            _this.trg3 = this.create(
              _this.trg.xp - f1,
              _this.trg.yp - f2,
              0,
              (0 - f1) * f3,
              (0 - f2) * f3,
              0,
              _this.trg.s + 1
            );
            _this.trg2.fra = -100;
            _this.trg3.fra = -100;
            if (_this.trg.eternal) {
              _this.trg4 = this.create(
                _this.trg.xp + f2,
                _this.trg.yp - f1,
                0,
                f2 * f3,
                (0 - f1) * f3,
                0,
                _this.trg.s + 1
              );
              _this.trg4.fra = -100;
              _this.trg4.specoz = _this._loc0_ = 23;
              _this.trg3.specoz = _this._loc0_;
              _this.trg2.specoz = _this._loc0_;
              _this.trg4.eternal = _this._loc0_ = true;
              _this.trg3.eternal = _this._loc0_;
              _this.trg2.eternal = _this._loc0_;
              this.speco(_this.trg2);
              this.speco(_this.trg3);
              this.speco(_this.trg4);
              if (_this.trg.s == 74) {
                f1 = 1.3;
              } else {
                f1 = 1.2;
              }
              _this.trg4._yscale *= f1;
              _this.trg4._xscale = _this._loc0_;
              _this.trg3._yscale = _this._loc0_;
              _this.trg3._xscale = _this._loc0_;
              _this.trg2._yscale = _this._loc0_;
              _this.trg2._xscale = _this._loc0_;
            }
            _this.trg.dones = true;
            _this.trg.dfr = true;
          }
          break;
        case 13:
          randrun();
          if (_this.trg.d.d._currentframe == 1) {
            _this.trg.xpp = undefined;
          }
          if (_this.trg.d.d._currentframe > 19) {
            _this.trg.xbew *= 0.6;
            _this.trg.ybew *= 0.6;
          }
      }
      break;
    case 73:
      _this.trg.outway = true;
    case 72:
    case 71:
      if (_this.fra < 30 && _this.altboss) {
        this.speco(_this.trg);
      }
      if (_this.trg.specoz == 15) {
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
      }
      f1 = _this.trg.s - 71;
      if (_this.fra - _this.trg.fra < 10) {
        _this.trg.d.gotoAndStop(4 + f1 * 3);
      }
      if (_this.trg.d._currentframe == 4 + f1 * 3) {
        this.trgnextd();
        _this.trg.xbew *= 0.45;
        _this.trg.ybew *= 0.45;
      }
      if (_this.trg.d._currentframe != 4 + f1 * 3) {
        _this.trg.d.gotoAndStop(2 + f1 * 3);
        f2 = 0.2 + f1 * 0.18;
        if (_this.trg.xbew > 0) {
          _this.xenf = f2;
        } else {
          _this.xenf = 0 - f2;
        }
        if (_this.trg.ybew > 0) {
          _this.yenf = f2;
        } else {
          _this.yenf = 0 - f2;
        }
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
        _this.trg.xbew += _this.xenf;
        _this.trg.ybew += _this.yenf;
      }
      break;
    case 57:
      if (_this.trg.d._currentframe == 5) {
        if (_this.trg.d.d._currentframe == 26) {
          _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 80);
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          randrun();
          if (random(30) == 0) {
            _this.trg.d.gotoAndStop(5);
          }
          break;
        case 5:
          if (_this.trg.eternal && _this.trg.alter == 2) {
            if (_this.trg.d.d._currentframe == 4) {
              _this.trg.reps = 2;
            }
            if (_this.trg.d.d._currentframe == 33) {
              if (_this.trg.reps-- > 0) {
                _this.trg.d.d.gotoAndStop(16);
              }
            }
          }
          if (_this.trg.d.d._currentframe == 30) {
            quadf(_this.trg.xp, _this.trg.yp, 10, true);
          }
      }
      this.sideflip(100);
  }
}
function splush() {
  if (_this.trg.firee <= 0) {
    _this.trg.firee = 0;
  }
  _this.trg.firee += 0.45;
  let f1 = 10.5;
  _this.xenf = Math.sin(_this.trg.firee) * f1;
  _this.yenf = Math.cos(_this.trg.firee) * f1;
  _this.noho = true;
  _this.xxenf = _this.trg.xp - _this.player.xp;
  _this.yyenf = _this.trg.yp - _this.player.yp;
  var _loc1_ = 0;
  while (_loc1_ < 4) {
    var _loc2_ = _this.xenf;
    _this.xenf = _this.yenf;
    _this.yenf = 0 - _loc2_;
    if (_this.xenf * _this.xxenf + _this.yenf * _this.yyenf <= 1000) {
      _this.trg2 = this.ffmo(
        _this.trg.xp + _this.xenf * 2,
        _this.trg.yp + _this.yenf * 2,
        0,
        _this.xenf + _this.trg.xbew,
        _this.yenf * 0.8 + _this.trg.ybew,
        0,
        9,
        _this.trg.s,
        true
      );
      _this.trg2.dm -= 1.3;
    }
    _loc1_ = _loc1_ + 1;
  }
  _this.noho = false;
}
function bawssmart() {
  switch (_this.trg.s) {
    case 32:
      this.bord();
      if (_this.trg.eternal) {
        this.firemode(300, 5);
      }
      if (_this.fra % 3 == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp + 8,
          1 + random(10),
          Math.random() * 0.5 + 0.2
        );
      }
      markhere(_this.trg);
      if (!_this.trg.gogo) {
        randrunx(0.75);
        _this.trg.xbew *= 0.85;
        _this.trg.ybew *= 0.8;
        if ((_this.fra + _this.trg.e) % 7 == 0) {
          _this.trg.gogo = this.chaa();
        }
      } else if (_this.trg.gh) {
        _this.trg.gogo = false;
        _this.trg.ypp = _this._loc0_ = undefined;
        _this.trg.xpp = _this._loc0_;
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        _this.trg.xbew += _this.trg.xpp;
        _this.trg.ybew += _this.trg.ypp;
        outgrid(_this.trg.til);
        if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
          _this.trg.yp *= 0.9;
          _this.trg.yp += _this.yenf * 0.1;
        } else {
          _this.trg.xp *= 0.9;
          _this.trg.xp += _this.xenf * 0.1;
        }
      }
      if (_this.ashut < 5) {
        _this.f11 = (_this.fra + _this.trg.e) % 12 == 0;
        _this.f2 = (_this.fra + _this.trg.e) % 12 == 6;
      } else if (_this.ashut < 10) {
        _this.f11 = (_this.fra + _this.trg.e) % 18 == 0;
        _this.f2 = (_this.fra + _this.trg.e) % 18 == 9;
      } else {
        _this.f11 = (_this.fra + _this.trg.e) % 24 == 0;
        _this.f2 = (_this.fra + _this.trg.e) % 24 == 12;
      }
      if (
        _this.f11 ||
        (enfget(_this.trg.xbew, _this.trg.ybew) > 3 && _this.f2)
      ) {
        _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp, 0, 123);
        if (_this.trg.special) {
          _this.trg2.specol = _this.trg.specol;
          _this.trg2.special = true;
          this.speco(_this.trg2);
        } else {
          colorit(
            _this.trg2,
            _this.trg.rrr,
            _this.trg.rrr,
            _this.trg.rrr,
            0,
            0,
            0
          );
        }
      }
      break;
    case 88:
      _this.trg.xbew *= 0.75;
      _this.trg.ybew *= 0.75;
      if (_this.trg.d._currentframe < 3) {
        randrun();
        walkframe(2);
        this.sideflip(_this.trg.xbew);
        this.boiler(true);
      } else {
        this.trgnextd();
        boiler(false, true);
      }
      break;
    case 30:
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      let f1: any = _this.trg.hp / _this.hps[_this.trg.s];
      if (f1 >= 1) {
        this.trgnextd();
        boiler(_this.trg.d._currentframe == 1, _this.trg.d._currentframe == 5);
        if (f1 < 1.2) {
          _this.trg.hp += 0.06 / (1 + _this.fra * 0.001);
        }
      } else {
        _this.trg.fire = 0;
        _this.trg.hp += _this.trg.hppp * 1.2;
        if (_this.trg.boss) {
          _this.trg.hppp += 0.01;
        } else {
          _this.trg.hppp += 0.02;
        }
        if (_this.trg.alter == 3) {
          _this.trg.hppp *= 0.8;
        }
        _this.trg.hppp *= 0.9;
        _this.trg.d.gotoAndStop(1);
        _this.trg.d.hx.gotoAndStop(_this.trg.alter);
        _this.trg.d.hx.d.gotoAndStop(Math.max(1, 14 - Math.round(f1 * 13)));
      }
      break;
    case 91:
      if (_this.trg.hpp == undefined) {
        _this.trg.hpp = 0;
        _this.trg.hppp = 0;
      }
      if (_this.trg.specoz == 23) {
        _this.trg.xbew *= 0.85;
        _this.trg.ybew *= 0.85;
      } else {
        _this.trg.xbew *= 0.77;
        _this.trg.ybew *= 0.77;
      }
      if (_this.fra5) {
        let v1 = (1 - _this.trg.hp / _this.trg.mhp) * 10;
        if (_this.trg.hpp < v1) {
          _this.trg.hpp = _this.trg.hpp + 1;
          _this.trg.d.b.sh._yscale = _this.trg.d.b.d._yscale + 30;
          _this.trg.d.b.sh._xscale = _this.trg.d.b.d._yscale * 2.5 + 50;
          this.sideflip(_this.player.xp - _this.trg.xp);
          _this.trg.d.d.play();
          if (_this.trg.d.d._currentframe == 1) {
            _root.soundy("Wheezy_Cough_" + random(3) + ".mp", 100);
          }
        }
        if (_this.trg.eternal) {
          v1 -= 7;
        }
        _this.trg.d.b.d._xscale = _this._loc0_ = 100 - v1 * 4;
        _this.trg.d.b.d._yscale = _this._loc0_;
      } else if (
        _this.trg.d.d._currentframe == 1 &&
        _this.trg.d._currentframe == 1
      ) {
        this.sideflip(_this.trg.xbew * 5);
      } else if (
        _this.trg.d.d._currentframe == 9 &&
        _this.trg.d._currentframe == 1
      ) {
        while (_this.trg.hpp > _this.trg.hppp) {
          _this.trg.hppp += 1 + Math.random();
          if (_this.ashut < 7) {
            _this.ashut++;
            _this.xenf = (_this.player.xp - _this.trg.xp) * 0.1 + crand(10);
            _this.yenf = (_this.player.yp - _this.trg.yp) * 0.1 + crand(10);
            this.create(
              _this.trg.xp,
              _this.trg.yp,
              0,
              _this.xenf,
              _this.yenf,
              0,
              14
            );
          }
        }
      }
      if (
        (random(100) == 0 ||
          (_this.trg.eternal && random(30) == 0 && _this.ashut < 5)) &&
        _this.ashut < 10
      ) {
        _this.xenf = crand(10);
        _this.yenf = crand(10);
        if (_this.ashut < 10) {
          _this.trg2 = this.create(
            _this.trg.xp,
            _this.trg.yp,
            0,
            _this.xenf,
            _this.yenf,
            0,
            18
          );
          if (_this.trg.specoz == 23) {
            _this.trg2.hp = 20;
            attach(_this.trg2, 96);
          }
        }
      }
    case 25:
      if (_this.trg.duke) {
        _this.dukes++;
      }
      if (_this.trg.alt) {
        _this.trg.nobomb = true;
        _this.trg.d.gotoAndStop(9);
        splater(
          _this.trg.xp,
          _this.trg.yp,
          1 + random(10),
          Math.random() * 0.3 + 0.3
        );
        if (_this.trg.alt != 2) {
          if (_this.helpss <= 0 || _this.slug == undefined) {
            _this.trg.dones = true;
          }
        }
      }
      if (_this.trg.alter == 2) {
        _this.trg.nobomb = true;
      }
      if (_this.ups[9]) {
        f1 = 0.25;
      } else {
        f1 = 0.45;
      }
      if (_this.trg.ybew > 0) {
        _this.f2 = f1;
      } else {
        _this.f2 = 0 - f1;
      }
      if (_this.trg.xbew > 0) {
        f1 = f1;
      } else {
        f1 = 0 - f1;
      }
      _this.trg.xbew *= 0.9;
      _this.trg.ybew *= 0.9;
      _this.trg.xbew += f1;
      _this.trg.ybew += _this.f2;
      break;
    case 102:
      if (_this.trg.eternal) {
        bord(560, 80, 390, 190);
        _this.trg.xpp = undefined;
        _this.trg.hp += 400 / (800 + _this.fra * 4);
        _this.trg._xscale = _this.trg._xscale * 0.7 + 39;
        _this.trg._yscale = _this.trg._xscale * 0.5 + 65;
        if (random(40) == 0) {
          if (_this.trrisp + 25 + random(100) <= _this.fra) {
            _this.trrisp = _this.fra;
            let f0 = 0;
            while (_this.trg.xpp == undefined && f0 < 100) {
              this.telpx();
              f0++;
            }
            if (_this.trg.xpp > 0) {
              parc(
                "bloodsplash-teleport",
                _this.trg.xp,
                _this.trg.yp,
                0,
                200,
                _this.trg.dpppp + 123
              );
              _this.trg.xp = _this.trg.xpp;
              _this.trg.yp = _this.trg.ypp;
              _this.trg._xscale = 30;
              _this.trg._yscale = 60;
              _this.trg.xpp = undefined;
              _root.soundy("hell_portal2.wav");
            }
          }
        }
      }
      if (
        _this.trris + 45 + random(100) <= _this.fra &&
        random(20) == 0 &&
        _this.trg.state == 0
      ) {
        _this.trris = _this.fra;
        _root.soundy("Scared_Whimper_" + random(3) + ".mp", 100);
      }
      _this.isaaaac = true;
      f1 = Math.round(
        ((_this.trg.mhp - _this.trg.hp) / _this.trg.mhp) * 3 - 0.5
      );
      if (trgnextd(undefined, true)) {
        if (_this.trg.d._currentframe == 4) {
          _this.trg.d.gotoAndStop(7);
        } else {
          _this.trg.d.gotoAndStop(1);
        }
      }
      if (_this.trg.d._currentframe == 1) {
        if (_this.trg.state < f1) {
          _this.trg.state = f1;
          let f2 = [0, 10, 7, 3];
          _this.trg.d.gotoAndStop(f2[f1]);
        } else {
          let f2 = [1, 5, 8];
          _this.trg.d.gotoAndStop(f2[f1]);
        }
      }
      if (!_this.trg.eternal) {
        _this.trg.xp = _this.trg.xpp;
        _this.trg.yp = _this.trg.ypp;
      }
      _this.trg.xbew *= 0.6;
      _this.trg.ybew *= 0.6;
      if (_this.trg.hurt && _this.trg.state != 2) {
        _this.trg.hurt = false;
        this.bossfire(1, true);
      }
      if (_this.trg.eternal) {
        if (!_this.altboss) {
          if (random(20) == 0) {
            this.bossfire(1, true);
            if (random(3) == 0) {
              this.bossfire(1, true);
            }
          }
        }
      }
      if (_this.altboss && random(60) == 0 && _this.ashut < 20) {
        _this.trg2 = this.create(
          _this.trg.xp,
          _this.trg.yp,
          0,
          crand(10),
          crand(10),
          0,
          18
        );
        _this.trg2.die = true;
        _this.trg2.outway = true;
        _this.trg2.fra = -20;
      }
      if (_this.trg.state == 2) {
        if (_this.trg.fire-- < 0) {
          if (random(10) == 0) {
            _this.anarch = 10;
            _this.analt = true;
            _this.trg.fire = 40;
          } else if (random(10) == 0 && _this.ashut < 4) {
            _this.trg.fire = 320;
            _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 100, 38.1);
            _this.trg2.hp *= 0.5;
            if (_this.ashut < 2 || (_this.trg.eternal && random(3) == 0)) {
              _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 100, 38.1);
              _this.trg2.hp *= 0.5;
            }
          }
        }
      }
      switch (_this.trg.d._currentframe) {
        case 7:
          if (_this.trg.d.d._currentframe == 17) {
            _root.soundy("superholy.wav");
          }
          break;
        case 10:
          if (_this.trg.d.d._currentframe == 20) {
            _root.soundy("Holy.mp");
          }
          break;
        case 1:
        case 5:
        case 8:
          if (random(60) == 0) {
            let f2 = [2, 6, 9];
            _this.trg.fire = 40;
            _this.trg.d.gotoAndStop(f2[_this.trg.state]);
          }
          break;
        case 2:
          if (_this.trg.eternal && _this.altboss) {
            if (
              _this.trg.d.d._currentframe >= 3 &&
              _this.trg.d.d._currentframe < 6
            ) {
              splush();
            }
          }
          if (_this.trg.d.d._currentframe == 3) {
            if (!_this.trg.eternal || !_this.altboss) {
              this.cirf(_this.trg.xp, _this.trg.yp + 20, 10, 12);
            }
            _root.soundy("thumbs down.wav", 50);
          }
          break;
        case 6:
          if (_this.trg.eternal && _this.altboss) {
            if (
              _this.trg.d.d._currentframe >= 6 &&
              _this.trg.d.d._currentframe < 9
            ) {
              splush();
            }
          }
          if (_this.trg.d.d._currentframe == 6) {
            if (!_this.trg.eternal || !_this.altboss) {
              this.cirf(
                _this.trg.xp,
                _this.trg.yp,
                10,
                _this.trg.d._currentframe * 0.666
              );
            }
            _root.soundy("thumbsup.wav");
          }
          break;
        case 9:
          if (_this.trg.eternal && _this.altboss) {
            if (
              _this.trg.d.d._currentframe >= 19 &&
              _this.trg.d.d._currentframe <= 22
            ) {
              splush();
            }
          }
          if (_this.trg.d.d._currentframe == 17) {
            _root.soundy("Powerup2.mp3");
          }
          if (_this.trg.d.d._currentframe == 19) {
            if (!_this.trg.eternal || !_this.altboss) {
              this.cirf(
                _this.trg.xp,
                _this.trg.yp,
                10,
                _this.trg.d._currentframe * 0.666
              );
            }
          }
      }
      if (_this.trg.eternal) {
        _this.trg.d.s._visible = false;
        _this.trg.d.d.s._visible = false;
        _this.trg.d.d.d.s._visible = false;
      }
      break;
    case 101:
      if (_this.altboss) {
        _this.spidboss = true;
        if (_this.trg.eternal) {
          _this.trg.hp -= 0.02;
        }
      }
      if (trgnextd(undefined, true) || _this.trg.d._currentframe < 3) {
        let f4 = 3;
        if (_this.altboss) {
          f4--;
        }
        if (_this.trg.d._currentframe == 7) {
          if (_this.trg.goner) {
            _this.trg.done = true;
          } else if (_this.trg.stomps++ < f4 || random(7) == 0) {
            _this.trg.d.d.gotoAndStop(1);
          } else {
            _this.trg.d.gotoAndStop(5);
          }
        } else if (_this.trg.d._currentframe == 4) {
          _this.trg.d.gotoAndStop(7);
        } else {
          _this.trg.d.gotoAndStop(1);
        }
      }
      _this.trg.bh =
        (_this.trg.d._currentframe != 4 || _this.trg.d.d._currentframe < 21) &&
        (_this.trg.d._currentframe != 5 || _this.trg.d.d._currentframe > 6) &&
        (_this.trg.d._currentframe != 7 ||
          (_this.trg.d.d._currentframe > 16 &&
            _this.trg.d.d._currentframe < 37)) &&
        (_this.trg.d._currentframe != 6 ||
          (_this.trg.d.d._currentframe < 6 &&
            _this.trg.d.d._currentframe > 73));
      if (
        (_this.trg.d._currentframe == 5 && _this.trg.d.d._currentframe == 9) ||
        (_this.trg.d._currentframe == 7 && _this.trg.d.d._currentframe == 15)
      ) {
        _this.trg.dmg = 300;
        gosplash();
        if (_this.trg.d._currentframe == 5) {
          _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav", 70);
        } else {
          _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
        }
        if (
          _this.trg.d._currentframe == 5 ||
          (_this.trg.eternal && !_this.altboss)
        ) {
          if (_this.trg.goner) {
            _this.f0 = 6;
          } else {
            _this.f0 = 10;
          }
          quadf(_this.trg.xp, _this.trg.yp, _this.f0, true);
        }
        if (_this.altboss) {
          _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
          _this.trg2._xscale *= 2;
          _this.trg2._yscale = _this.trg2._xscale;
          colorit(_this.trg2, 0, 0, 0, 255, 255, 255);
        }
        if (_this.trg.eternal) {
          if (_this.egggs > 0) {
            if (_this.fra > 300) {
              _this.egggs *= 0.92;
            } else {
              _this.egggs *= 0.85;
            }
            _this.egggs -= 0.01;
          } else {
            _this.egggs = 0;
          }
        }
        if (
          _this.trg.eternal &&
          ((_this.ashut < 7 && _this.egggs < 0.3 + random(2)) ||
            _this.trg.d._currentframe == 5) &&
          _this.altboss
        ) {
          _this.egggs++;
          _this.trg2 = this.create(
            _this.trg.xp,
            _this.trg.yp - 10,
            0,
            0,
            0,
            0,
            30.2
          );
          if (_this.trg.d._currentframe == 5) {
            _this.trg2.eternal = true;
            _this.trg2.specoz = 23;
            _this.trg2._yscale *= 1.4;
            _this.trg2._xscale = _this._loc0_;
            this.speco(_this.trg2);
            _this.trg2.hp *= 1.3;
            _this.trg2.mhp = _this._loc0_;
          }
          _this.trg2.outway = true;
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      switch (_this.trg.d._currentframe) {
        case 3:
          if (_this.trg.d.d._currentframe == 18) {
            if (_this.altboss) {
              spih();
            }
          }
          if (_this.trg.d.d._currentframe == 20) {
            _this.trg.yp += 15;
            if (!_this.altboss) {
              this.boil();
              this.boil();
              if (random(2) == 0) {
                this.boil();
              }
              if (_this.trg.eternal) {
                this.boil();
                this.boil();
                this.boil();
              }
            }
            _root.soundy("Boss_Spit_Blob_Barf.mp", 100);
            _this.trg.yp -= 15;
          }
          break;
        case 1:
          if (random(20) == 0) {
            let f2 = [4, 6, 6];
            if (_this.ashut < 4) {
              f2.push(3, 3);
            }
            f1 = f2[random(f2.length)];
            _this.trg.stomps = 0;
            _this.trg.d.gotoAndStop(f1);
          }
          break;
        case 6:
          f1 = _this.trg.d.d._currentframe;
          let f2 = f1 - 16;
          let f3 = 10;
          f2 %= f3;
          if (f2 == 0 && f1 < f3 * 4) {
            if (_this.trg.stomps != 3 || !_this.altboss) {
              _this.trg2 = spaw(
                _this.trg.xp,
                _this.trg.yp,
                random(300) + 60,
                101
              );
              _this.trg2.goner = true;
              _this.trg2.d.gotoAndStop(7);
              _this.trg2.stomps = _this.trg.stomps++;
            }
          }
          break;
        case 5:
          if (_this.altboss) {
            f1 = _this.trg.d.d._currentframe;
            if (f1 > 5 && f1 < 29) {
              f2 = 50 + 2 * f1;
              _this.trg2 = this.parc(
                "bloo",
                _this.trg.xp + crand(f2),
                _this.trg.yp + crand(f2)
              );
              _this.trg2._xscale *= 1 + f1 * 0.05;
              _this.trg2._yscale = _this.trg2._xscale;
              colorit(_this.trg2, 0, 0, 0, 255, 255, 255);
            }
          }
          if (_this.trg.d.d._currentframe == 1) {
            _this.trg.xp = _this.player.xp;
            _this.trg.yp = _this.trg.ypp;
            _this.sizes[101] = 30;
          }
          break;
        case 7:
          if (_this.trg.d.d._currentframe == 1) {
            _this.trg.xp = _this.player.xp;
            _this.trg.yp = _this.player.yp;
            _this.sizes[101] = 15;
          }
      }
      break;
    case 100:
      if (_this.altboss && _this.trg.eternal) {
        _this.trg.hp += 10 / (50 + _this.fra);
      }
      _this.spidboss = true;
      _this.trg.outway = true;
      this.trgnextd();
      if (
        _this.trg.specoz == 20 &&
        _this.fra2 &&
        (_this.trg.d.d._currentframe != 9 || _this.trg.d._currentframe != 7)
      ) {
        this.trgnextd();
      }
      f1 = 0.8;
      if (f1 != 1) {
        _this.trg.xbew *= f1;
        _this.trg.ybew *= f1;
      }
      _this.trg.bh = true;
      _this.trg.ggh = false;
      switch (_this.trg.d._currentframe) {
        case 5:
          if (_this.trg.d.d._currentframe == 7) {
            _root.soundy("Boss_Lite_Roar.mp", 100);
          }
          if (
            _this.trg.d.d._currentframe > 5 &&
            _this.trg.d.d._currentframe < 23
          ) {
            _this.trg.bh = false;
            _this.trg.xbew += _this.trg.xpp;
            _this.trg.ybew += _this.trg.ypp;
          }
          if (_this.trg.d.d._currentframe == 23) {
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
            braz();
            if (_this.trg.specoz == 23) {
              if (_this.altboss) {
                f1 = true;
              } else {
                f1 = 2;
              }
              quadf(
                _this.trg.xp + _this.trg.xbew * 2,
                _this.trg.yp + _this.trg.ybew * 2,
                10,
                f1
              );
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                1000
              );
              if (_this.enf > 110 && _this.trg.fire-- > 0) {
                _this.enf = 3 / _this.enf;
                _this.trg.xbew *= 0.7;
                _this.trg.ybew *= 0.7;
                _this.trg.xpp = (0 - _this.xenf) * _this.enf;
                _this.trg.ypp = (0 - _this.yenf) * _this.enf;
                _this.trg.d.d.gotoAndStop(2);
              }
            }
          }
          _this.trg.xbew *= 0.9;
          _this.trg.ybew *= 0.9;
          break;
        case 1:
          f1 = random(2);
          _this.trg.fire = _this.trg.fire + 1;
          enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          if (
            (random(3) == 0 && _this.enf > 100) ||
            (!_this.altboss && _this.ashut > 5) ||
            _this.trg.nextjump
          ) {
            f1 = 5;
            _this.trg.nextjump = false;
            _this.enf = 4 / _this.enf;
            _this.trg.xbew *= 0.7;
            _this.trg.ybew *= 0.7;
            _this.trg.xpp = (0 - _this.xenf) * _this.enf;
            _this.trg.ypp = (0 - _this.yenf) * _this.enf;
            _this.trg.runs = 0;
            if (_this.trg.specoz == 23) {
              _this.trg.fire = 4;
            }
          } else {
            if (_this.altboss) {
              _this.f2 = [2, 6];
              if (_this.ashut < 6) {
                _this.f2.push(7);
              }
            } else if (_this.trg.specoz == 23) {
              if (_this.ashut < 4 + random(4)) {
                _this.f2 = [2, 6, 7];
              } else {
                _this.f2 = [2, 6];
              }
            } else {
              _this.f2 = [2, 6, 7];
            }
            f1 = _this.f2[random(_this.f2.length)];
          }
          _this.trg.d.gotoAndStop(f1);
          break;
        case 7:
          if (_this.trg.d.d._currentframe == 3) {
            _root.soundy("Wheezy_Cough_" + random(3) + ".mp", 160);
          }
          if (_this.trg.d.d._currentframe == 9) {
            if (_this.altboss) {
              if (random(3) == 0) {
                spih();
              } else if (random(2) == 0 && _this.ashut < 5) {
                this.boil();
                this.boil();
                if (_this.trg.eternal && _this.ashut < 9) {
                  this.boil();
                  if (random(2) == 0) {
                    this.boil();
                  }
                }
              } else {
                _this.bigone = true;
                this.boil();
                _this.bigone = undefined;
                if (_this.trg.eternal) {
                  this.boil();
                  if (random(2) == 0) {
                    this.boil();
                  }
                }
              }
            } else if (_this.trg.specoz == 20) {
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                1000
              );
              _this.enf = -13 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              _this.trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                _this.xenf + _this.yenf * 0.4,
                _this.yenf + _this.xenf * 0.4,
                0,
                18
              );
              _this.trg3 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                _this.xenf - _this.yenf * 0.4,
                _this.yenf - _this.xenf * 0.4,
                0,
                18
              );
              _this.trg2.fra -= 20;
              _this.trg2.die = true;
              _this.trg2.pbh = true;
              _this.trg3.fra -= 20;
              _this.trg3.die = true;
              _this.trg3.pbh = true;
            } else if (_this.trg.specoz < 20) {
              this.cirf(_this.trg.xp, _this.trg.yp - 15, 8, 6);
            } else {
              this.boil();
              if (_this.trg.specoz == 23) {
                this.boil();
                this.boil();
              }
            }
          }
          break;
        case 6:
          f1 = _this.trg.d.d._currentframe - 18;
          if (f1 > 0 && f1 < 17 && (_this.altboss || f1 < 8)) {
            _this.trg2 = this.parc(
              "bloo",
              _this.trg.xp + crand(f1 * 3),
              _this.trg.yp + crand(f1 * 3)
            );
            _this.trg2._xscale *= 1 + f1 * 0.2;
            _this.trg2._yscale = _this.trg2._xscale;
            if (_this.trg.specoz < 20) {
              colorit(_this.trg2, 0, 0, 0, 0, 0, 0);
            } else {
              colorit(_this.trg2, 0, 0, 0, 255, 255, 255);
            }
            if (_this.fra2) {
              _root.soundy("boss2_bubbles" + random(2) + ".wav", 150);
            }
          }
          if (_this.altboss) {
            if (_this.trg.d.d._currentframe == 18) {
              quadf(_this.trg.xp, _this.trg.yp, 10, true);
            }
          } else {
            if (_this.boils < 2) {
              if (_this.trg.d.d._currentframe == 18) {
                if (_this.trg.specoz == 20) {
                  f1 = 30;
                } else if (_this.trg.specoz < 20) {
                  f1 = 94;
                } else {
                  f1 = 30.3;
                }
                _this.trg.trg2 = this.create(
                  _this.trg.xp,
                  _this.trg.yp + 30,
                  0,
                  0,
                  0,
                  0,
                  f1
                );
                if (f1 != 94) {
                  _this.boils++;
                }
                _this.trg.nextjump = true;
                _this.trg.trg2.hp = 10;
              }
            }
            if (_this.trg.d.d._currentframe == 25) {
              _this.trg.trg2.d.d.hx.gotoAndStop(3);
              _this.trg.trg2.d.d.hx.d.gotoAndStop(8);
            }
          }
      }
      break;
    case 99:
      if (_this.trg.eternal) {
        f1 = 100 / (200 + _this.fra);
        if (_this.trg.hp < _this.trg.mhp && _root.chaps > 2) {
          _this.trg.hp += f1;
        }
        breakdance(_this.trg.s);
      }
      if ((_this.fra + _this.trg.e) % 5 == 0 && _this.fra > 10) {
        f1 = Math.random() * 2;
        let f2 = 20 - f1 * 10;
        splater(
          _this.trg.xp + crand(f2),
          _this.trg.yp + crand(f1),
          1 + random(10),
          ((f1 + 0.4) * _this.trg._xscale) / 100
        );
      }
      if (trgnextd(undefined, true)) {
        if (_this.trg.d._currentframe == 8) {
          if (
            enfget(_this.trg.xbew, _this.trg.ybew) > 2 &&
            _this.trg.runs++ < 10
          ) {
            _this.trg.d.d.gotoAndStop(1);
          } else {
            _this.trg.d.nextFrame();
          }
        } else if (_this.trg.d._currentframe == 7) {
          _this.trg.d.nextFrame();
        } else {
          _this.trg.d.gotoAndStop(1);
        }
      }
      f1 = 1;
      if (_this.trg.d._currentframe < 7) {
        f1 = 0.8;
      } else if (_this.fra5) {
        f1 = 0.97;
      }
      if (f1 != 1) {
        _this.trg.xbew *= f1;
        _this.trg.ybew *= f1;
      }
      switch (_this.trg.d._currentframe) {
        case 8:
          if (_this.trg.eternal) {
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1000
            );
            _this.enf = 0.4 / _this.enf;
            _this.trg.xbew *= 0.96;
            _this.trg.ybew *= 0.96;
            _this.trg.xbew -= _this.xenf * _this.enf;
            _this.trg.ybew -= _this.yenf * _this.enf;
          }
          break;
        case 7:
          if (_this.trg.d.d._currentframe == 3) {
            _root.soundy("Monster_Roar_1.mp", 100);
          }
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
          _this.trg.xbew += _this.trg.xpp;
          _this.trg.ybew += _this.trg.ypp;
          break;
        case 1:
          f1 = random(2);
          _this.trg.fire = _this.trg.fire + 1;
          if (_this.trg.fire >= 3 || _this.trg.hp < 100) {
            f1 = 7;
            _this.trg.fire = 0;
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1000
            );
            _this.enf = 4 / _this.enf;
            _this.trg.xbew *= 0.7;
            _this.trg.ybew *= 0.7;
            if (_this.trg.specoz == 7) {
              _this.enf *= 0.7;
            }
            _this.trg.xpp = (0 - _this.xenf) * _this.enf;
            _this.trg.ypp = (0 - _this.yenf) * _this.enf;
            _this.trg.runs = 0;
          } else {
            let f2 = [2, 6];
            if (_this.ashut < 6) {
              f2.push(5);
            }
            if (_this.trg.specoz == 21) {
              f2.splice(1, 1);
            }
            f1 = f2[random(f2.length)];
            if (_this.trg.specoz == 7) {
              f1 = 1;
            }
          }
          _this.trg.d.gotoAndStop(f1);
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 13) {
            _root.soundy("summonsound.wav", 110);
            f1 = 14;
            if (_this.trg.specoz == 21) {
              f1 += 0.1;
            }
            _this.trg2 = this.create(
              _this.trg.xp - 30,
              _this.trg.yp - 30,
              0,
              0,
              -10,
              0,
              f1
            );
            if (_this.trg.eternal) {
              _this.trg2.eternal = true;
              _this.trg2.specoz = 23;
              this.speco(_this.trg2);
              _this.trg2._yscale *= 1.4;
              _this.trg2._xscale = _this._loc0_;
              _this.trg2.mhp *= 2;
              _this.trg2.hp = _this._loc0_;
            }
            _this.trg2.fra = 0;
            _this.trg2.outway = true;
          }
          break;
        case 6:
          if (_this.trg.d.d._currentframe == 7) {
            _root.soundy("Boss_Lite_Roar.mp", 100);
          }
          if (_this.trg.d.d._currentframe == 18) {
            if (_this.trg.eternal) {
              this.cirf(
                _this.trg.xp,
                _this.trg.yp - _this.trg._yscale * 0.2,
                11,
                12
              );
            } else {
              quadf(_this.trg.xp, _this.trg.yp, 10, true);
            }
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
          }
      }
  }
}
function smarts3() {
  switch (_this.trg.s) {
    case 43:
    case 20:
      if (_this.altboss && _this.trg.s == 43) {
        _this.blackout = 2;
      }
      if (_this.trg.specoz == 23 && _this.trg.s == 20) {
        if (
          (_this.trg.hp < _this.trg.mhp * 0.25 && _this.trg._yscale > 70) ||
          (_this.trg.hp < _this.trg.mhp * 0.5 && _this.trg._yscale >= 110)
        ) {
          _this.sizes[20] = 24;
          _this.xenf = 20;
          _this.trg2 = this.create(
            _this.trg.xp,
            _this.trg.yp - 20,
            0,
            0,
            0,
            0,
            20
          );
          _this.trg3 = this.create(
            _this.trg.xp,
            _this.trg.yp - 20,
            0,
            0,
            0,
            0,
            20
          );
          _this.trg2._yscale = _this._loc0_ = _this.trg._yscale * 0.66;
          _this.trg2._xscale = _this._loc0_;
          _this.trg3._yscale = _this._loc0_ = _this.trg._yscale * 0.66;
          _this.trg3._xscale = _this._loc0_;
          _this.trg3.splity = _this._loc0_ = true;
          _this.trg2.splity = _this._loc0_;
          if (_this.trg._yscale < 110) {
            _this.trg2.hp *= 0.35;
            _this.trg3.hp *= 0.35;
          } else {
            _this.trg2.hp *= 0.5;
            _this.trg3.hp *= 0.5;
          }
          _root.soundy("summonsound.wav", _this.trg._yscale);
          _this.trg.done = true;
        }
      }
      _this.trg.bh =
        (_this.trg.d._currentframe != 6 ||
          _this.trg.d.d._currentframe > 22 ||
          _this.trg.d.d._currentframe < 8) &&
        (_this.trg.d._currentframe != 2 || _this.trg.d.d._currentframe < 8) &&
        (_this.trg.d._currentframe != 3 || _this.trg.d.d._currentframe > 33) &&
        _this.trg.d._currentframe != 5;
      _this.whuf =
        ((_this.trg.s == 43 && _this.fra2 && _this.trg.specoz == 14) ||
          (_this.trg.specoz == 23 &&
            _this.trg.s == 20 &&
            _this.fra2 &&
            _this.trg.d.currentframe != 4 &&
            !_this.trg.splity)) &&
        !_this.trg.weap;
      if (_this.trg.weap) {
        this.trgnextd();
        if (_this.whuf) {
          this.trgnextd();
        }
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        switch (_this.trg.d._currentframe) {
          case 2:
            if (_this.trg.d.d._currentframe == 16) {
              _this.trg.done = true;
            }
            break;
          case 3:
            if (!_this.trg.bh) {
              _this.trg2 = _this.trg.trg2;
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.trg2.xp,
                  _this.trg2.yp,
                  1000
                ) > 0
              ) {
                _this.trg.xbew -= _this.xenf * 0.01;
                _this.trg.ybew -= _this.yenf * 0.01;
              }
            }
            if (_this.trg.d.d._currentframe == 32) {
              _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 80);
              if (
                _this.trg.specoz == 23 &&
                !_this.altboss &&
                _this.trg.s == 43
              ) {
                quadf(_this.trg.xp, _this.trg.yp, 10, random(1) * 2);
              }
              for (let z in _this.ball) {
                _this.trg2 = _this.ball[z];
                if (_this.trg2.s > 9 && _this.trg != _this.trg2) {
                  if (
                    enfcheck(
                      _this.trg2.xp,
                      _this.trg2.yp,
                      _this.trg.xp,
                      _this.trg.yp,
                      80
                    )
                  ) {
                    hurt(_this.trg2, 120);
                  }
                }
              }
            } else if (_this.trg.d.d._currentframe == 72) {
              _this.trg.d.gotoAndStop(2);
            }
        }
      } else {
        _this.trg.ggh = !_this.trg.bh;
        _this.trg.flyby = !_this.trg.bh;
        if ((_this.fra + _this.trg.e) % 5 == 0 && _this.fra > 10) {
          splater(
            _this.trg.xp,
            _this.trg.yp,
            1 + random(10),
            ((Math.random() + 1) * _this.trg._xscale) / 100
          );
        }
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
        switch (_this.trg.mode) {
          case 10:
            _this.trg.d.gotoAndStop(7);
            if (_this.whuf) {
              this.trgnextd();
            }
            this.trgnextd();
            if (_this.trg.d._currentframe == 1) {
              _this.trg.mode = undefined;
            }
            break;
          case 1:
            this.trgnextd();
            if (_this.trg.d._currentframe == 1 && _this.trg.modedone) {
              _this.trg.mode = undefined;
            } else {
              if (_this.altboss && _this.trg.s == 43) {
                _this.trg.d.gotoAndStop(8);
                this.sideflip(_this.trg.xp - _this.player.xp);
              } else {
                _this.trg.d.gotoAndStop(4);
              }
              if (_this.trg.s == 43) {
                if (
                  _this.trg.d.d._currentframe > 27 &&
                  _this.trg.d.d._currentframe < 60
                ) {
                  if (_this.altboss) {
                    if (_this.trg.d.d._currentframe == 29) {
                      this.green(true);
                      _root.soundy("Boss_Spit_Blob_Barf.mp", 100);
                      if (_this.trg.specoz == 23) {
                        this.green(true);
                        this.green(false);
                      }
                    }
                    _this.trg.modedone = true;
                  } else {
                    _this.trg.ypp = 0;
                    _this.trg.xpp = 0 - _this.trg.d._xscale;
                    this.lasershow(_this.trg);
                    _this.trg.modedone = true;
                    if (_this.trg.specoz == 23) {
                      if (_this.trg.d.d._currentframe % 10 == 0) {
                        let f10 = 20;
                        if (_this.trg.alter == 2) {
                          f10 *= 2;
                        }
                        let z = 0;
                        while (z < f10) {
                          let f0 = Math.random() * 5;
                          if (_this.trg.alter == 2) {
                            if (random(2) == 0) {
                              f0 = 0 - f0;
                            }
                          }
                          let f1 =
                            _this.trg.xp + _this.trg.xpp * f0 + crand(10);
                          let f2 =
                            _this.trg.yp + _this.trg.ypp * f0 + crand(10);
                          if (f1 > 60 && f1 < 580) {
                            if (f2 > 150 && f2 < 410) {
                              _this.trg2 = this.parc("bloo", f1, f2, 0, 123);
                              colorit(_this.trg2, 4, 4, 4, 0, 0, 0);
                              _this.trg2.longstay = 130;
                            }
                          }
                          z++;
                        }
                      }
                    }
                  }
                }
              } else if (
                _this.trg.specoz == 23 &&
                !_this.trg.splity &&
                _this.trg.s == 20
              ) {
                if (
                  _this.trg.d.d._currentframe > 23 &&
                  _this.trg.d.d._currentframe < 45
                ) {
                  let f1 = 1;
                  if (!_this.trg.modedone) {
                    _root.soundy("Boss_Spit_Blob_Barf.mp", 100);
                    f1 = 5;
                  }
                  this.bossfire(f1, true);
                  _this.trg.modedone = true;
                }
              } else if (
                _this.trg.d.d._currentframe > 23 &&
                !_this.trg.modedone
              ) {
                _root.soundy("Boss_Spit_Blob_Barf.mp", 100);
                this.bossfire(13, true);
                _this.trg.modedone = true;
              }
            }
            break;
          case 0:
            _this.trg.d.gotoAndStop(6);
            this.trgnextd();
            if (_this.whuf) {
              this.trgnextd();
            }
            if (_this.trg.xpp == undefined) {
              let f1 = _this.player.xp;
              let f2 = _this.player.yp;
              f1 = this.ingrid(f1, f2);
              if (levzz(f1) < 1) {
                outgrid(f1);
                _this.trg.xpp = _this.xenf;
                _this.trg.ypp = _this.yenf;
              }
            }
            if (_this.trg.d.d._currentframe == 23) {
              _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 50);
              if (_this.trg.s == 43) {
                if (_this.trg.specoz == 23 && !_this.altboss) {
                  quadf(_this.trg.xp, _this.trg.yp, 10, false);
                }
                let f1 = _this.trg.xp;
                let f2 = _this.trg.yp;
                for (let a in _this.ball) {
                  _this.trg2 = _this.ball[a];
                  if (_this.trg2.flyai) {
                    if (enfcheck(f1, f2, _this.trg2.xp, _this.trg2.yp, 60)) {
                      hurt(_this.trg2, 30);
                    }
                  }
                }
              }
            }
            if (_this.trg.xpp != undefined && _this.trg.d._currentframe == 1) {
              if (random(2) == 0) {
                _this.trg.mode = _this.trg.xpp = undefined;
              } else {
                _root.soundy("Boss_Lite_Roar.mp", 40);
                _this.trg.xpp = undefined;
              }
            } else if (
              _this.trg.xpp != undefined &&
              _this.trg.d.d._currentframe < 24
            ) {
              _this.xenf = _this.trg.xp - _this.trg.xpp;
              _this.yenf = _this.trg.yp - _this.trg.ypp;
              _this.enf = enfget(_this.xenf, _this.yenf);
              _this.enf = 1.2 / _this.enf;
              if (_this.trg.specoz == 14) {
                _this.enf *= 1.5;
              }
              _this.trg.xbew -= _this.xenf * _this.enf;
              _this.trg.ybew -= _this.yenf * _this.enf;
              _this.trg.xbew *= 0.9;
              _this.trg.ybew *= 0.9;
              this.sideflip(_this.xenf);
            } else {
              _this.trg.xbew *= 0.8;
              _this.trg.ybew *= 0.8;
            }
            break;
          case 2:
            _this.trg.d.gotoAndStop(2);
            this.trgnextd();
            if (_this.whuf) {
              this.trgnextd();
            }
            if (_this.trg.d._currentframe == 1) {
              _this.trg.d.gotoAndStop(3);
              _this.trg.mode = 3;
              _this.trg.modedone = false;
              _this.trg.xpp = undefined;
            }
            break;
          case 3:
            if (_this.whuf) {
              this.trgnextd();
            }
            this.trgnextd();
            if (_this.trg.d._currentframe == 1) {
              _this.bossrep = !_this.bossrep;
              if (!_this.bossrep || _this.trg.s != 43) {
                _this.trg.mode = undefined;
                _this.trg.xpp = undefined;
              } else {
                _this.trg.mode = 2;
                _this.trg.xpp = undefined;
              }
            }
            if (_this.trg.xpp == undefined) {
              let f1 = _this.player.xp;
              let f2 = _this.player.yp;
              f1 = this.ingrid(f1, f2);
              if (levzz(f1) < 1) {
                outgrid(f1);
                _this.trg.xpp = _this.xenf;
                _this.trg.ypp = _this.yenf;
              }
            }
            if (
              _this.trg.d.d._currentframe == 33 ||
              (_this.trg.d.d._currentframe == 34 && _this.whuf)
            ) {
              let f3 = 5;
              if (_this.trg.s == 43) {
                let f1 = _this.trg.xp;
                let f2 = _this.trg.yp;
                f3 = 20;
                for (let a in _this.ball) {
                  _this.trg2 = _this.ball[a];
                  if (_this.trg2.flyai) {
                    if (enfcheck(f1, f2, _this.trg2.xp, _this.trg2.yp, 70)) {
                      hurt(_this.trg2, 30);
                    }
                  }
                }
                if (
                  _this.bossrep ||
                  (_this.trg.specoz == 23 && _this.altboss)
                ) {
                  if (_this.altboss) {
                    if (_this.ashut < 4) {
                      _this.trg2 = [];
                      _this.trg2[0] = this.create(f1, f2, 0, f3, 0, 0, 15);
                      if (_this.trg.specoz != 23) {
                        _this.trg2[0].hp -= 20;
                      } else {
                        _this.trg2[0].specoz = 23;
                        this.speco(_this.trg2[0]);
                      }
                      if (_this.ashut < 2) {
                        _this.trg2[1] = this.create(
                          f1,
                          f2,
                          0,
                          0 - f3,
                          0,
                          0,
                          15
                        );
                        if (_this.trg.specoz != 23) {
                          _this.trg2[1].hp -= 20;
                        } else {
                          _this.trg2[1].specoz = 23;
                          this.speco(_this.trg2[1]);
                        }
                        _root.soundy("summonsound.wav", 150);
                      } else {
                        _root.soundy("summonsound.wav", 100);
                      }
                    }
                    if (_this.trg.specoz == 23) {
                      _this.trg2 = this.parc(
                        "bloo",
                        _this.trg.xp,
                        _this.trg.yp
                      );
                      _this.trg2._xscale *= 3;
                      _this.trg2._yscale = _this.trg2._xscale;
                      colorit(_this.trg2, 0, 0, 0, 0, 0, 0);
                    }
                  } else {
                    _this.trg2 = [];
                    _this.noet = true;
                    _this.trg2[0] = this.create(f1, f2, 0, f3, 0, 0, 61);
                    _this.trg2[2] = this.create(f1, f2, 0, 0, f3, 0, 61);
                    _this.trg2[0].die = true;
                    _this.trg2[2].die = true;
                    if (_this.trg.specoz != 14) {
                      _this.trg2[1] = this.create(f1, f2, 0, 0 - f3, 0, 0, 61);
                      _this.trg2[3] = this.create(f1, f2, 0, 0, 0 - f3, 0, 61);
                      _this.trg2[1].die = true;
                      _this.trg2[3].die = true;
                      _root.soundy("summonsound.wav", 150);
                    } else {
                      _root.soundy("summonsound.wav", 100);
                    }
                    quadf(_this.trg.xp, _this.trg.yp, 10, true);
                    _this.noet = false;
                  }
                } else if (_this.altboss) {
                  _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
                  _this.trg2._xscale *= 3;
                  _this.trg2._yscale = _this.trg2._xscale;
                  if (_this.trg.specoz != 23) {
                    _this.trg2.perm = true;
                  }
                  colorit(_this.trg2, 0, 0, 0, 0, 0, 0);
                } else {
                  quadf(_this.trg.xp, _this.trg.yp, 10, true);
                }
              } else {
                this.bossfire(18);
              }
              _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
            }
            if (
              _this.trg.xpp != undefined &&
              _this.trg.d.d._currentframe < 32
            ) {
              _this.xenf = _this.trg.xp - _this.trg.xpp;
              _this.yenf = _this.trg.yp - _this.trg.ypp;
              _this.enf = enfget(_this.xenf, _this.yenf);
              _this.enf = (0.3 + _this.enf * 0.006) / _this.enf;
              _this.trg.xbew -= _this.xenf * _this.enf;
              _this.trg.ybew -= _this.yenf * _this.enf;
            } else {
              _this.trg.xbew *= 0.8;
              _this.trg.ybew *= 0.8;
            }
            break;
          default:
            if (_this.trg.fra + 10 > _this.fra) {
              _this.trg.mode = 10;
              _this.trg.d.gotoAndStop(7);
            } else {
              _this.trg.modedone = false;
              _this.trg.xpp = undefined;
              _this.trg.d.gotoAndStop(1);
              if (_this.trg.s == 43 && !_this.altboss) {
                _this.yenf = _this.trg.yp - _this.player.yp;
                if (Math.abs(_this.yenf) < 20 + Math.random() * 50) {
                  _this.trg.mode = 1;
                } else if (random(2) == 0) {
                  _this.trg.mode = 2;
                } else {
                  _this.trg.mode = 0;
                }
              } else {
                _this.trg.mode = random(3);
                if (
                  (_this.trg.specoz == 2 ||
                    (_this.trg.specoz == 23 && _this.trg._yscale < 70)) &&
                  _this.trg.mode == 2 &&
                  _this.trg.s == 20
                ) {
                  _this.trg.mode = 1;
                }
              }
              if (_this.trg.mode == 2) {
                _root.soundy("Boss_Lite_Roar.mp", 100);
              }
              if (_this.trg.mode == 0) {
                _root.soundy("Boss_Lite_Roar.mp", 50);
              }
              if (_this.trg.mode == 1) {
                this.sideflip(_this.trg.xp - _this.player.xp);
                _this.trg.xpp = _this.trg.xp - _this.player.xp;
              }
            }
        }
      }
  }
}
function smarts4() {
  switch (_this.trg.s) {
    case 98:
    case 92:
      if (_this.trg.d._currentframe < 3) {
        this.angstfind();
        walkframe(2);
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        if (_this.fra % 3 == 0) {
          if (
            enfcheckx(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              100
            ) ||
            (_this.trg.specoz == 23 && random(70) == 0)
          ) {
            _this.trg.d.gotoAndStop(5);
          }
        }
      } else {
        _this.trg.xbew *= 0.7;
        _this.trg.ybew *= 0.7;
        this.trgnextd();
        if (_this.trg.s == 98) {
          if (_this.trg.d._currentframe == 5) {
            if (_this.trg.d.d._currentframe < 5 && _this.trg.specoz == 23) {
              _this.trg.rep = 2;
            }
            if (_this.trg.d.d._currentframe == 19) {
              let f1 = true;
              if (_this.trg.specoz == 18) {
                f1 = false;
              }
              quadf(_this.trg.xp, _this.trg.yp, 8, f1);
              splater(
                _this.trg.xp,
                _this.trg.yp + 12,
                1 + random(10),
                Math.random() + 0.6
              );
              splater(
                _this.trg.xp + crand(10),
                _this.trg.yp + 12 + crand(10),
                1 + random(10),
                Math.random() * 0.5 + 0.6
              );
            }
            if (_this.trg.d.d._currentframe == 30 && _this.trg.specoz == 23) {
              if (_this.trg.rep-- > 0) {
                _this.trg.d.d.gotoAndStop(13);
              }
            }
          }
        } else if (_this.trg.d._currentframe == 5) {
          if (_this.trg.d.d._currentframe < 4 && _this.trg.specoz == 23) {
            _this.trg.rep = 2;
          }
          if (_this.trg.d.d._currentframe == 22 && _this.trg.specoz == 23) {
            if (_this.trg.rep-- > 0) {
              _this.trg.d.d.gotoAndStop(5);
            }
          }
          if (_this.trg.d.d._currentframe == 13) {
            quadf(_this.trg.xp, _this.trg.yp, 8, _this.trg.eternal);
          }
        }
      }
      break;
    case 93:
      if (_this.trg.eternal || _this.trg.specoz == 23) {
        _this.trg.flyby = true;
      }
      _this.trg.randy = true;
      if (!_this.trg.finder) {
        _this.trg.finder = true;
        _this.trg.trg2 = _this.hearts[_this.trg.trg2];
      }
      _this.trg2 = _this.trg.trg2;
      if (_this.trg2.specoz == 23) {
        if (_this.trg.specoz != 23) {
          _this.trg.specoz = 23;
          this.speco(_this.trg);
          _this.trg._yscale *= 1.1;
          _this.trg._yscale = _this._loc0_;
          _this.trg.eternal = true;
          _this.trg.help = 0.75;
        }
        if (!_this.trg2.dones) {
          if (_this.trg2.hp < _this.trg2.mhp * _this.trg.help) {
            _this.xenf = _this.trg2.xp - _this.player.xp;
            _this.yenf = _this.trg2.yp - _this.player.yp;
            _this.enf = enfget(_this.xenf, _this.yenf);
            if (_this.enf > 0) {
              _this.xenf /= 0 - _this.enf;
              _this.yenf /= 0 - _this.enf;
              parc(
                "bloodsplash-teleport",
                _this.trg.xp,
                _this.trg.yp,
                0,
                100,
                _this.trg.dpppp + 123
              );
              _this.trg.xp = _this.trg2.xp + _this.xenf * 20;
              _this.trg.yp = _this.trg2.yp + _this.yenf * 20;
              if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                _this.yenf = 0;
              } else {
                _this.xenf = 0;
              }
              _this.xenf = 0 - _this.xenf;
              _this.yenf = 0 - _this.yenf;
              _this.trg.xbew = _this._loc0_ = _this.xenf * 3;
              _this.trg.xbeww = _this._loc0_;
              _this.trg.ybew = _this._loc0_ = _this.yenf * 3;
              _this.trg.ybeww = _this._loc0_;
              _this.trg.help -= 0.3;
              _root.soundy("hell_portal2.wav");
              chaxx();
              _this.trg.gogo = true;
              _this.trg.xpp *= 2;
              _this.trg.ypp *= 2;
              _this.trg.outway = true;
              break;
            }
          }
        }
      }
    case 97:
      let f2 = false;
      if (_this.trg.trg2.hp <= 0) {
        if (_this.trg.s == 97) {
          if (!_this.altboss) {
            _this.altboss = true;
            _this.trg.imba = false;
            _this.trg.hp = _this.trg.mhp;
            _this.trg.d.gotoAndStop(1);
            f2 = true;
          }
        } else {
          _this.trg.dones = true;
        }
      }
      if (_this.trg.s == 97) {
        if (!_this.altboss) {
          let f1 = _this.trg.trg2.hp;
          if (f1 != _this.trg.mhp && f1 < _this.trg.hp) {
            _this.trg.hp = f1;
            f2 = true;
          }
        }
        if (f2 && random(2) == 0) {
          chaxy();
          _this.enf = enfcheck(_this.f3, _this.f4, _this.f1, f2, 1000);
          chaxx();
          _this.trg.gogo = 2;
          _this.f1 = 1.6;
          _this.trg.xpp *= _this.f1;
          _this.trg.ypp *= _this.f1;
        }
      }
      _this.trg.ggh = _this.fra2;
      markhere(_this.trg);
      if (Math.abs(_this.trg.xbeww) > Math.abs(_this.trg.ybeww)) {
        if (_this.trg.xbeww > 0) {
          _this.f1 = 7;
        } else {
          _this.f1 = 6;
        }
      } else if (_this.trg.ybeww > 0) {
        _this.f1 = 1;
      } else {
        _this.f1 = 5;
      }
      _this.trg.xbeww += _this.trg.xbew;
      _this.trg.ybeww += _this.trg.ybew;
      _this.trg.xbeww *= 0.35;
      _this.trg.ybeww *= 0.35;
      if (_this.trg.xpp != undefined) {
        _this.trg.d.gotoAndStop(_this.f1);
      }
      if (!_this.trg.gogo || _this.trg.gogo == 2) {
        if ((_this.fra + _this.trg.e) % 4 == 0) {
          if (this.chaa()) {
            if (
              _this.trris2 + 20 <= _this.fra &&
              _this.trg.s != 93 &&
              _this.trg.s != 97
            ) {
              _this.trris2 = _this.fra;
              _root.soundy("maggotcharge" + random(2) + ".wav");
            }
            _this.trg.xpp *= 2;
            _this.trg.ypp *= 2;
            _this.trg.gogo = true;
          }
        }
      }
      if (!_this.trg.gogo) {
        if (_this.altboss && _this.trg.s == 97) {
          randrunx(1.5);
        } else {
          randrunx(0.85);
        }
        _this.trg.xbew *= 0.85;
        _this.trg.ybew *= 0.78;
      } else if (_this.trg.gh) {
        _this.trg.gogo = false;
        _this.trg.ypp = _this._loc0_ = undefined;
        _this.trg.xpp = _this._loc0_;
      } else {
        _this.trg.xbew *= 0.82;
        _this.trg.ybew *= 0.82;
        _this.trg.xbew += _this.trg.xpp;
        _this.trg.ybew += _this.trg.ypp;
        _this.trg.xbeww += _this.trg.xpp * 3;
        _this.trg.ybeww += _this.trg.ypp * 3;
        outgrid(_this.trg.til);
        if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
          _this.trg.yp *= 0.9;
          _this.trg.yp += _this.yenf * 0.1;
        } else {
          _this.trg.xp *= 0.9;
          _this.trg.xp += _this.xenf * 0.1;
        }
        _this.trg.d.gotoAndStop(_this.f1);
      }
      break;
    case 55:
      if (
        _this.trg.hp < _this.trg.mhp * 0.65 &&
        !_this.trg.eyeout &&
        _this.trg.eternal
      ) {
        _this.trg.eyeout = true;
        _this.trg.alter = 1;
        _root.soundy("plop.wav");
        _this.trg2 = this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 25);
        _this.trg2.alt = 2;
        _this.trg2.hp *= 3;
        _this.trg2.fra = -100;
        _this.trg2.d.gotoAndStop(9);
      }
      if (_this.trg.eternal) {
        if (_this.trg.firer <= 0) {
          _this.trg.firer = 1;
        }
        let f1 = _this.trg.xbew;
        let f2 = _this.trg.ybew;
        let f3 = Math.sqrt(f1 * f1 + f2 * f2);
        _this.trg.firer += f3 + 0.1;
        if (_this.trg.firer > 45) {
          _this.trg.firer = 0;
          f3 = 7 / f3;
          f1 *= f3;
          f2 *= f3;
          this.ffmo(
            _this.trg.xp,
            _this.trg.yp,
            0,
            (0 - f2) * 0.6 - f1 * 0.5,
            f1 * 0.8 - f2 * 0.5,
            0,
            9,
            _this.trg.s,
            true,
            false
          );
          this.ffmo(
            _this.trg.xp,
            _this.trg.yp,
            0,
            f2 * 0.6 - f1 * 0.5,
            (0 - f1) * 0.8 - f2 * 0.5,
            0,
            9,
            _this.trg.s,
            true,
            false
          );
        }
      }
    case 31:
    case 23:
    case 21:
      if (_this.trg.s == 21 || _this.trg.s == 23) {
        if (_this.trg.eternal) {
          if (!(_this.trg.d._currentframe != 9) && _this.trg.coon <= 0) {
            if (_this.fra % 4 == 0 || (_this.fra % 2 == 0 && _this.trg.gogo)) {
              _this.trg2 = this.parc(
                "bloo",
                _this.trg.xp + this.crand(),
                _this.trg.yp + crand(Math.random() * 8)
              );
              _this.trg2._yscale *= 0.7;
              _this.trg2._xscale = _this._loc0_;
              colorit(_this.trg2, 0, 0, 0, 0, 50, 0);
            }
            if (random(100) == 0 && !_this.trg.gogo) {
              _this.trg.coon = 1;
              _this.trg.ggh = true;
              _this.trg.hurt = false;
            }
          }
        }
      }
      if (
        (_this.trg.s == 23 || _this.trg.s == 21) &&
        (_this.trg.d._currentframe == 9 || _this.trg.coon > 0)
      ) {
        this.bord();
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        if (_this.trg.coon++ > 15) {
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              100
            ) <= 0
          ) {
            _this.trg.d.gotoAndStop(9);
            _this.trg.fire = 0;
            _this.trg.specoz = 0;
            this.speco(_this.trg);
            _this.trg.s = 23;
          }
          _this.trg.coon = undefined;
        } else if (_this.trg.fire++ > 80) {
          _this.trg.s = 14;
          _this.trg.fire = 0;
          attach(_this.trg, 14);
          _this.trg.specoz = 23;
          _this.trg.mhp *= 1.3;
          _this.trg.hp = _this._loc0_;
          _this.trg.alter = 2;
          _this.trg.three = true;
          _this.trg._yscale = _this._loc0_ = 160;
          _this.trg._xscale = _this._loc0_;
          _this.trg.d.gotoAndStop(4);
          _this.trg.fra = _this.fra;
          _this.trg.ybb = _this._loc0_ = 0;
          _this.trg.xbb = _this._loc0_;
          _this.trg.flyai = true;
          this.speco(_this.trg);
          _root.soundy("boil hatch.wav");
          _this.trg.ggh = false;
        }
        if (_this.trg.hurt && _this.trg.fire > 5) {
          _this.trg.hurt = false;
          _this.trg.fire -= 45;
        }
        _this.trg.hp += 0.02;
      } else {
        _this.trg.ggh = _this.fra2;
        _this.trg.gonuts = _this.trg.s == 23 || _this.trg.s == 55;
        markhere(_this.trg);
        if (_this.trg.fire-- > 0) {
          _this.trg.xbew *= 0.85;
          _this.trg.ybew *= 0.85;
          _this.trg.d.d.nextFrame();
          if (_this.trg.d.d._currentframe == _this.trg.d.d._totalframes) {
            _this.trg.fire = 0;
          }
          if (_this.trg.d.d._currentframe == 8) {
            let f1 = 8;
            if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
              _this.trg.ypp = 0;
              if (_this.trg.xpp > 0) {
                _this.trg.xpp = f1;
              } else {
                _this.trg.xpp = 0 - f1;
              }
            } else {
              _this.trg.xpp = 0;
              if (_this.trg.ypp > 0) {
                _this.trg.ypp = f1;
              } else {
                _this.trg.ypp = 0 - f1;
              }
            }
            if (!_this.trg.eternal) {
              _this.trg2 = create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                _this.trg.xpp,
                _this.trg.ypp,
                0,
                9,
                _this.trg.s
              );
              _this.trg2.dy = -14;
              _this.trg2.fd = -0.08;
            } else {
              shots(
                _this.trg.xp + _this.trg.xpp,
                _this.trg.yp + _this.trg.ypp,
                _this.trg.xpp,
                _this.trg.ypp,
                false
              );
            }
            _this.trg.xpp = undefined;
          }
        } else if (!_this.trg.gogo) {
          if (_this.trg.s == 21) {
            randrunx(0.75);
          } else if (_this.trg.s == 55) {
            randrunx(0.85);
          } else if (_this.trg.s == 31) {
            if (_this.trg.specoz == 23) {
              randrunx(1);
            } else {
              randrunx(0.72);
            }
          } else {
            randrunx(0.6);
          }
          _this.trg.xbew *= 0.85;
          _this.trg.ybew *= 0.7;
          if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
            _this.f1 = 1;
            this.sideflip(0 - _this.trg.xbew);
          } else if (_this.trg.ybew > 0) {
            _this.f1 = 2;
          } else {
            _this.f1 = 5;
          }
          _this.trg.d.gotoAndStop(_this.f1);
          if (_this.trg.gonuts && (_this.fra + _this.trg.e) % 4 == 0) {
            _this.trg.gogo = _this._loc0_ = chaa(_this.trg.s == 55);
            if (_this._loc0_) {
              if (_this.trg.s == 55) {
                if (_this.trris + 20 <= _this.fra) {
                  _this.trris = _this.fra;
                  _root.soundy("leech" + random(3) + ".wav");
                }
                _this.trg.xpp *= 1.55;
                _this.trg.ypp *= 1.55;
              } else {
                if (_this.trris2 + 20 <= _this.fra) {
                  _this.trris2 = _this.fra;
                  _root.soundy("maggotcharge" + random(2) + ".wav");
                }
                _this.trg.xpp *= 1.3;
                _this.trg.ypp *= 1.3;
              }
            }
          } else if (random(35) == 0 && _this.trg.s == 31) {
            if (
              _this.trg.xbew * _this.trg.xbew +
                _this.trg.ybew * _this.trg.ybew >
              0.5
            ) {
              _this.trg.d.gotoAndStop(_this.trg.d._currentframe + 5);
              _this.trg.xpp = _this.trg.xbew;
              _this.trg.ypp = _this.trg.ybew;
              this.sideflip((0 - _this.trg.xbew) * 10);
              _this.trg.fire = 50;
            }
          }
        } else if (_this.trg.gh) {
          _this.trg.gogo = false;
          _this.trg.ypp = _this._loc0_ = undefined;
          _this.trg.xpp = _this._loc0_;
        } else {
          if (_this.trg.s == 23) {
            _this.trg.xbew *= 0.8;
            _this.trg.ybew *= 0.8;
          } else {
            _this.trg.xbew *= 0.9;
            _this.trg.ybew *= 0.9;
          }
          _this.trg.xbew += _this.trg.xpp;
          _this.trg.ybew += _this.trg.ypp;
          outgrid(_this.trg.til);
          if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
            _this.f1 = 7;
            this.sideflip(0 - _this.trg.xbew);
            _this.trg.yp *= 0.9;
            _this.trg.yp += _this.yenf * 0.1;
          } else {
            if (_this.trg.ybew > 0) {
              _this.f1 = 6;
            } else {
              _this.f1 = 8;
            }
            _this.trg.xp *= 0.9;
            _this.trg.xp += _this.xenf * 0.1;
          }
          if (_this.trg.s == 55) {
            if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
              _this.f1 = 1;
            } else if (_this.trg.ybew > 0) {
              _this.f1 = 2;
            } else {
              _this.f1 = 5;
            }
          }
          _this.trg.d.gotoAndStop(_this.f1);
        }
      }
      tip(0);
  }
}
function smarts5() {
  switch (_this.trg.s) {
    case 34:
      if (random(7) == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          _this.trg.spl + 1 + random(10),
          Math.random() * 0.12
        );
      }
    case 54:
    case 29:
    case 86:
      if (_this.trg.flyby) {
        if (_this.trg.d._currentframe < 5) {
          this.trgnextd();
          _this.trg.d.gotoAndStop(5);
          _this.trg.xpp = _this.player.xp;
          _this.trg.ypp = _this.player.yp;
          _this.trg.f1 = 0;
        } else {
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
          if (
            (_this.trg.d._currentframe == 5 &&
              _this.trg.d.d._currentframe > 6) ||
            (_this.trg.d._currentframe == 6 && _this.trg.d.d._currentframe < 18)
          ) {
            _this.trg.f1 += 0.02;
            _this.trg.xp =
              _this.trg.xpp * _this.trg.f1 + _this.trg.xp * (1 - _this.trg.f1);
            _this.trg.yp =
              _this.trg.ypp * _this.trg.f1 + _this.trg.yp * (1 - _this.trg.f1);
            _this.trg.bh = false;
          } else {
            _this.trg.bh = true;
          }
          if (_this.trg.d._currentframe == 5) {
            this.trgnextd();
            if (_this.trg.d._currentframe == 1) {
              _this.trg.d.gotoAndStop(6);
            }
          } else {
            this.trgnextd();
            if (_this.trg.d.d._currentframe == 19) {
              _root.soundy("Meat_impacts_" + random(3) + ".wav", 200);
              if (_this.trg.s == 34 && _this.trg.eternal) {
                quadf(_this.trg.xp, _this.trg.yp, 9, 1);
              } else {
                this.quadf(_this.trg.xp, _this.trg.yp, 9);
              }
            }
            if (_this.trg.d._currentframe == 1) {
              _this.trg.flyby = false;
              _this.trg.xpp = undefined;
            }
          }
        }
      } else {
        randruny();
        _this.trg.xbew *= 0.7;
        _this.trg.ybew *= 0.7;
      }
      break;
    case 28:
      if (
        _this.trg.specoz == 23 &&
        _this.altboss == 1 &&
        _this.trg.hp > _this.trg.mhp * 0.4
      ) {
        _this.trg.hp += 20 / (100 + _this.fra);
      }
      if (_this.altboss && _this.altboss != 2) {
        let f1 = _this.trg.hp / _this.hps[_this.trg.s];
        _this.trg._yscale = _this._loc0_ = 70 + f1 * 35;
        _this.trg._xscale = _this._loc0_;
        _this.trg.xbew *= 1.1 - f1 * 0.14;
      }
      _this.magget++;
      _this.trg.mag = _this.magget;
      if (_this.trg.mag == 3) {
        _this.magss--;
      }
      _this.mags[_this.magget] = _this.trg;
      if (!_this.firstmag) {
        _this.firstmag = true;
      } else {
        if (_this.magget >= 4) {
          _this.trg.mag -= 3;
          _this.trg.mags = [0, _this.mags[4], _this.mags[5], _this.mags[6]];
        } else {
          _this.trg.mags = [0, _this.mags[1], _this.mags[2], _this.mags[3]];
        }
        if (_this.fra - 20 < _this.trg.fra) {
          _this.trg.d.gotoAndStop(_this.trg.mag + 9);
        }
        if (_this.altboss == 2) {
          if (_this.trg.mag < 3) {
            _this.trg.imba = true;
            if (_this.trg.eternal) {
              _this.trg.refl = true;
            }
          }
        }
        if (_this.trg.d._currentframe >= 10) {
          this.trgnextd();
          _this.trg.xbew = 0;
          _this.trg.ybew = 0;
          if (_this.trg.mag == 3 && !_this.trg.wtfu) {
            _this.trg.wtfu = true;
            _this.trg.xp *= 0.65;
            _this.trg.yp *= 0.65;
            _this.trg.xp += _this.trg.mags[2].xp * 0.35;
            _this.trg.yp += _this.trg.mags[2].yp * 0.35;
          }
        }
        if (_this.trg.d._currentframe < 10) {
          _this.trg.d.gotoAndStop(_this.trg.mag);
          if (
            Math.abs(_this.trg.xbew) > 0.2 ||
            Math.abs(_this.trg.ybew) > 0.2
          ) {
            markhere(_this.trg);
          }
          if (_this.trg.mag != 1) {
            _this.trg2 = _this.trg.mags[_this.trg.mag - 1];
            if (_this.trg2.beenx.length > 0) {
              let f10 = true;
              while (f10) {
                let f2 = 2;
                if (_this.trg.specoz == 9) {
                  _this.f1 = 15;
                } else if (_this.trg.specoz == 23) {
                  _this.f1 = 20;
                } else if (_this.trg.specoz > 18) {
                  _this.f1 = 16;
                } else {
                  _this.f1 = 17;
                }
                _this.f1 -= _this.trg.mag * f2;
                let f0 = Math.min(_this.f1, _this.trg2.beenx.length - 1);
                _this.enf = enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.trg2.beenx[f0],
                  _this.trg2.beeny[f0],
                  1000
                );
                f2 = 10;
                if (_this.enf < f2 && f0 == _this.f1) {
                  _this.trg.xp = _this.trg2.beenx[f0];
                  _this.trg.yp = _this.trg2.beeny[f0];
                  f10 = false;
                } else {
                  _this.enf = f2 / _this.enf;
                  _this.xenf *= _this.enf;
                  _this.yenf *= _this.enf;
                  _this.trg.xp -= _this.xenf;
                  _this.trg.yp -= _this.yenf;
                  _this.trg2.beenx.push(_this.trg2.beenx[f0] + _this.xenf);
                  _this.trg2.beeny.push(_this.trg2.beeny[f0] + _this.yenf);
                }
              }
            }
          } else {
            _this.trg.d.gotoAndStop(1);
            this.killshit(_this.trg.nextl);
            switch (_this.trg.mode) {
              case 4:
                let f2 = 12;
                _this.trg.bomb = _this.trg.bomb + 1;
                if (_this.trg.bomb == 3) {
                }
                if (_this.trg.bomb > 35) {
                  _this.trg.bomb = undefined;
                  _this.trg.mode = 0;
                  _this.trg.d.d.gotoAndStop(1);
                  hurt(_this.trg, 20);
                  this.bombfail(_this.trg.xp, _this.trg.yp, 5);
                  _this.trg.xpp = undefined;
                  f2 = 0;
                  _root.soundy("Monster_Roar_2.mp", 50);
                }
                break;
              case 2:
                if (_this.trg.gh) {
                  _this.trg.mode = 1;
                  _this.trg.ypp = _this._loc0_ = undefined;
                  _this.trg.xpp = _this._loc0_;
                } else {
                  _this.trg.xbew *= 0.9;
                  _this.trg.ybew *= 0.9;
                  _this.trg.xbew += _this.trg.xpp * 3.7;
                  _this.trg.ybew += _this.trg.ypp * 3.7;
                }
                f2 = 6;
                break;
              case 3:
                if (_this.f1 < 0) {
                  f2 = 9;
                } else {
                  f2 = 3;
                }
                if (_this.magss < -20) {
                  _this.trg.mode = 1;
                }
                break;
              default:
                if (
                  _this.altboss == 2 &&
                  _this.trg.hp / _this.trg.mhp < 0.3 &&
                  !_this.trg.specoz
                ) {
                  if (_this.trg.xbew > 0) {
                    _this.xenf = 1;
                  } else {
                    _this.xenf = -1;
                  }
                  if (_this.trg.ybew >= 0.1) {
                    _this.yenf = 1;
                  } else {
                    _this.yenf = -1;
                  }
                  _this.trg.xbew += _this.xenf * 2;
                  _this.trg.ybew += _this.yenf * 2;
                } else {
                  randrunx(1.5);
                  if (_this.trg.charf + 50 <= _this.fra) {
                    if (this.chaa()) {
                      _this.trg.charf = _this.fra;
                      _this.trg.mode = 2;
                      _root.soundy("Monster_Roar_0.mp", 100);
                    }
                  }
                  let f1 =
                    _this.altboss == 2 &&
                    (!_this.trg.specoz || _this.trg.specoz == 23);
                  if (_this.trg.specoz == 23) {
                    f2 = 6 + random(4);
                  } else {
                    f2 = 5;
                  }
                  if (
                    _this.trg.mode != 2 &&
                    random(100 - _this.nomag) == 0 &&
                    ((_this.ashut < f2 && !f1) ||
                      (f1 &&
                        _this.chubber < 5 &&
                        _this.fra >= _this.lastpoop)) &&
                    (_this.trg.specoz != 8 || _this.ashut < 4 || random(4) == 0)
                  ) {
                    _root.soundy("Monster_Roar_1.mp", 100);
                    _this.lastpoop = _this.fra + 100;
                    _this.trg.mode = 3;
                    _this.magss = 10;
                    _this.nomag = 0;
                  }
                  _this.nomag++;
                  _this.nomag *= 0.99;
                }
                f2 = 0;
            }
            if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
              this.sideflip(0 - _this.trg.xbew);
              _this.f1 = 2;
            } else if (_this.trg.ybew > 0) {
              _this.f1 = 1;
            } else {
              _this.f1 = 3;
            }
            if (_this.trg.d.d._currentframe <= 12) {
              _this.trg.d.d.gotoAndStop(_this.f1 + _this.f2);
            }
          }
          _this.enf = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.trg.beenx[0],
            _this.trg.beeny[0],
            1000
          );
          while (_this.enf > 2) {
            _this.enf = 2 / _this.enf;
            _this.trg.beenx.unshift(
              _this.trg.beenx[0] + _this.xenf * _this.enf
            );
            _this.trg.beeny.unshift(
              _this.trg.beeny[0] + _this.yenf * _this.enf
            );
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg.beenx[0],
              _this.trg.beeny[0],
              1000
            );
          }
          if (_this.trg.beenx.length > 40) {
            let f2: number[] = [];
            let f3: number[] = [];
            let a = 0;
            while (a < 30) {
              f2[a] = _this.trg.beenx[a];
              f3[a] = _this.trg.beeny[a];
              a++;
            }
            _this.trg.beenx = new Array(30);
            _this.trg.beeny = new Array(30);
            a = 0;
            while (a < 30) {
              _this.trg.beenx[a] = f2[a];
              _this.trg.beeny[a] = f3[a];
              a++;
            }
          }
          if (_this.trg.specoz == 8) {
            _this.trg.xbew *= 0.75;
            _this.trg.ybew *= 0.75;
          } else if (_this.trg.specoz == 9) {
            _this.trg.xbew *= 0.86;
            _this.trg.ybew *= 0.86;
          } else {
            _this.trg.xbew *= 0.8;
            _this.trg.ybew *= 0.8;
          }
          if (
            _this.trg.mag == 3 &&
            (_this.trg.specoz == 22 || _this.trg.specoz == 23)
          ) {
            _this.hearts.forEach((i) =>
              //for(let i in _this.hearts) // quick fix
              {
                _this.trg2 = _this.hearts[i];
                if (_this.trg2.hp <= -10 || _this.trg2.dones) {
                  _root.soundy("Monster_Roar_2.mp", 50);
                  hurt(_this.trg, 40);
                  _this.hearts.splice(i, 1);
                }
              }
            );
          }
          if (_this.fra > 8 && _this.magss == 0 && _this.trg.mag == 3) {
            let f1 = 5;
            let f2 = this.ingrid(_this.trg.beenx[f1], _this.trg.beeny[f1]);
            outgrid(f2);
            if (_this.altboss == 2) {
              if (_this.trg.specoz) {
                _this.trg2 = this.create(
                  _this.trg.xp + crand(1),
                  _this.trg.yp + crand(1),
                  0,
                  0,
                  0,
                  0,
                  92
                );
                if (_this.trg.specoz == 23) {
                  _this.trg2.hp *= 1.3;
                  _this.trg2.specoz = 23;
                  _this.trg2.eternal = true;
                  this.speco(_this.trg2);
                } else {
                  _this.trg2._xscale = _this.trg2._yscale = 50;
                  _this.trg2.hp *= 0.7;
                }
              } else {
                turd("breakblock2", f2, true);
                _this.chubber++;
              }
            } else {
              if (_this.altboss) {
                f1 = 61;
              } else if (_this.trg.specoz == 8) {
                f1 = 30;
              } else if (_this.trg.specoz == 9) {
                f1 = 31;
              } else {
                f1 = 23;
              }
              if (f1 != 30) {
                _this.trg3 = this.create(
                  _this.trg.xp + crand(30),
                  _this.trg.yp + crand(30),
                  0,
                  0,
                  0,
                  0,
                  f1
                );
                _root.soundy("summonsound.wav", 100);
              } else {
                _root.soundy("summonsound.wav", 70);
              }
              _this.trg2 = this.create(
                _this.trg.xp + crand(1),
                _this.trg.yp + crand(1),
                0,
                0,
                0,
                0,
                f1
              );
              if (_this.trg.specoz == 23) {
                if (_this.altboss) {
                  quadf(_this.trg.xp, _this.trg.yp, 8, true);
                } else if (
                  random(3) == 0 &&
                  _this.etols < 3 + Math.min(4, _this.fra * 0.001)
                ) {
                  _this.etols++;
                  _this.trg2.eternal = true;
                  _this.trg2.specoz = 23;
                  _this.trg2._xscale = _this.trg2._yscale *= 1.2;
                  this.speco(_this.trg2);
                  if (_this.mheart) {
                    _this.trg3.eternal = false;
                    _this.trg3.specoz = undefined;
                    this.speco(_this.trg3);
                  }
                } else if (_this.mheart) {
                  _this.trg2.eternal = false;
                  _this.trg2.specoz = undefined;
                  this.speco(_this.trg2);
                  _this.trg3.eternal = false;
                  _this.trg3.specoz = undefined;
                  this.speco(_this.trg3);
                }
              }
            }
            if (f1 > 0) {
              if (f1 == 30) {
                _this.trg2.spl = 30;
                _this.trg2.specoz = 10;
                _this.trg2.outway = true;
                this.speco(_this.trg2);
              }
              _this.xenf -= _this.trg.xp;
              _this.yenf -= _this.trg.yp;
              _this.trg2.xbew += _this.xenf * 0.1;
              _this.trg2.ybew += _this.yenf * 0.1;
              _this.trg2.d.d.gotoAndStop(1);
              f1 = 0;
              if (enfget(_this.trg.xbew, _this.trg.ybew) > 2) {
                if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                  this.sideflip(_this.xenf);
                  f1 = 2;
                } else if (_this.yenf > 0) {
                  f1 = 3;
                } else {
                  f1 = 4;
                }
                _this.trg.d.d.gotoAndStop(f1);
              }
            }
          }
        }
      }
  }
}
function smartsx() {
  bawssmart();
  bawssmart2();
  smarts3();
  smarts4();
  smarts5();
}
function breakdance(f0) {
  if (enfget(_this.trg.xbew, _this.trg.ybew) > 1 || f0 == 79) {
    _this.trg.s = 4;
    let f3 = Math.random() * 15;
    var _loc1_ = 3;
    if (f0 == 79) {
      _loc1_ = 3;
      f3 *= 1.35;
    }
    if (f0 == 99) {
      _loc1_ = 6;
      f3 *= 3;
    }
    f3 = this.ingrid(
      Math.max(
        60,
        Math.min(560, _this.trg.xp + _this.trg.xbew * _loc1_ + crand(f3))
      ),
      Math.max(
        170,
        Math.min(410, _this.trg.yp + _this.trg.ybew * _loc1_ + crand(f3))
      )
    );
    outgrid(f3);
    if (levzz(f3) >= 1 && levzz(f3) < 2) {
      bloww(f3, _this.trg.xbew, _this.trg.ybew);
    } else {
      this.killshit(f3);
    }
    _this.trg.s = f0;
  }
}
function ssmarts() {
  switch (_this.trg.s) {
    case 45:
      if (_this.trg.d._currentframe == 5) {
        if (_this.trg.d.d._currentframe == 5) {
          _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 150);
          if (_root.hardmode) {
            quadf(_this.trg.xp * 0.8 + 80, _this.trg.yp * 0.8 + 64, 10, true);
          }
        }
      }
      if (_this.trg.specoz == 19) {
        if (_this.trg.d._currentframe == 5) {
          if (_this.trg.d.d._currentframe == 20) {
            _this.trg.d.d.gotoAndStop(38);
          }
        }
        if (_this.trg.d._currentframe == 2) {
          if (_this.trg.d.d._currentframe == 3 && _this.fra > 60) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              10000
            );
            _this.enf = -10 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
            shots(
              _this.trg.xp + _this.xenf,
              _this.trg.yp + _this.yenf,
              _this.xenf,
              _this.yenf,
              true
            );
          }
        }
        if (_this.trg.d._currentframe == 20) {
          if (_this.trg.d.d._currentframe == 48) {
            _this.trg.d.d.gotoAndStop(58);
          }
          if (
            _this.trg.d.d._currentframe < 20 ||
            _this.trg.d.d._currentframe > 65
          ) {
            _this.trg.d.d.nextFrame();
          }
        }
      }
      _this.trg.bh =
        (_this.trg.d._currentframe == 20 &&
          _this.trg.d.d._currentframe > 27 &&
          _this.trg.d.d._currentframe < 62) ||
        _this.trg.d._currentframe == 19;
      if (
        (_this.trg.d._currentframe == 20 &&
          _this.trg.d.d._currentframe == 26) ||
        _this.trg.whu == 3
      ) {
        _this.trg.whu = 0;
        _this.trg.dmg = 300;
        gosplash();
        _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav");
      }
      if (_this.trg.weap) {
        if (_this.trg.d._currentframe == 20) {
          if (_this.trg.d.d._currentframe < 24) {
            _this.trg2 = _this.trg.trg2;
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.trg2.xp,
                _this.trg2.yp,
                1000
              ) > 0
            ) {
              _this.trg.xbew -= _this.xenf * 0.03;
              _this.trg.ybew -= _this.yenf * 0.03;
            }
          }
          if (_this.trg.d.d._currentframe == 74) {
            _this.trg.done = true;
          }
        }
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
      } else {
        _this.mom[_this.momet] = _this.trg;
        _this.momet++;
        _this.trg.mom = _this.momet;
        if (_this.trg.xpp > 0) {
          _this.trg.xp = _this.trg.xpp;
          _this.trg.yp = _this.trg.ypp;
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
        }
        if (_this.fra < 20) {
          if (_this.trg.mom == _this.mome) {
            _this.trg.d.gotoAndStop(2);
          } else {
            _this.trg.d.gotoAndStop(1);
          }
          if (_this.mome == undefined && _this.trg.mom == 5) {
            momlo();
          }
          _this.oldm = 3;
        }
        if (_this.trg.d._currentframe != 19) {
          this.trgnextd();
        }
        if (_this.trg.mom == 3) {
          if (_this.moml - _this.fra < 0) {
            let f1 = random(3);
            if (_this.fra < 50) {
              f1 = 0;
            }
            _this.mome = -1;
            if (_this.trg.specoz == 19) {
              f1 = 0;
              if (random(4) == 0 && _this.oldm != 2) {
                f1 = 2;
              }
              _this.oldm = -1;
            }
            if (_this.oldm != f1) {
              switch (f1) {
                case 0:
                  _root.soundy("Mom_Vox_Grunt_" + random(4) + ".mp");
                  _this.moml = _this.fra + 80;
                  if (_this.trg.specoz == 19) {
                    _this.moml -= 30;
                  }
                  _this.mom.forEach((i) =>
                    //for(let i in _this.mom) // quick fix
                    {
                      if (i.mom != 2) {
                        //mom?
                        _this.trg2 = _this.mom[i.mom]; // mom?
                        if (
                          enfcheckx(
                            _this.trg2.xp,
                            _this.trg2.yp,
                            _this.player.xp,
                            _this.player.yp,
                            100
                          ) ||
                          enfcheck(
                            _this.trg2.xp,
                            _this.trg2.yp,
                            _this.player.xp,
                            _this.player.yp,
                            75
                          )
                        ) {
                          _this.mome = i;
                        }
                      }
                    }
                  );
                  if (_this.mome > -1 && _this.fra > 50) {
                    if (random(2) == 0) {
                      _this.mom[_this.mome].d.gotoAndStop(5);
                    } else {
                      _this.mom[_this.mome].d.gotoAndStop(3);
                    }
                  } else {
                    _this.trg.d.gotoAndStop(20);
                    _this.trg.d.d.gotoAndStop(1);
                    _this.trg._visible = true;
                    if (_this.fra < 50) {
                      _this.trg.xpp = _this.trg.xp;
                      _this.trg.ypp = _this.trg.yp;
                    } else {
                      _this.trg.xpp = _this.player.xp;
                      _this.trg.ypp = _this.player.yp;
                    }
                  }
                  break;
                case 1:
                  if (_this.ashut < 8) {
                    _this.moml = _this.fra + 45;
                    let z = 0;
                    while (z < random(3) + 2 && _this.ashut < 8 + random(2)) {
                      let i = random(5);
                      if (i != 2) {
                        z++;
                        _this.ashut++;
                        _this.mom[i].d.gotoAndStop(random(2) + 3);
                      }
                      undefined;
                    }
                  }
                  break;
                case 2:
                  momlo();
              }
              _this.oldm = f1;
            }
          }
          if (_this.trg.d._currentframe < 20) {
            _this.trg._visible = false;
          }
        } else {
          if (
            _this.trg.d._currentframe == 3 ||
            _this.trg.d._currentframe == 4
          ) {
            if (_this.trg.d.d._currentframe == 3) {
              let f0 = false;
              if (_this.trg.specoz == 23) {
                if (randrom(3) == 0) {
                  _this.f1 = [85, -16, -14, 38, -12];
                } else {
                  _this.f1 = [10, 12, 14, 15, 16, 18, 20, 21, 23, 24, 25.5, 26];
                }
              } else if (_this.trg.specoz) {
                _this.f1 = [85, 94, 89, 86, 29.1];
              } else {
                _this.f1 = [10, 11, 12, 14, 15, 16, 18, 21, 23, 24, 25.5, 26];
              }
              _this.xenf = _this.trg.xp - 320;
              _this.yenf = _this.trg.yp - 280;
              _this.enf = enfget(_this.xenf, _this.yenf);
              _this.enf = 18 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              let f2 = random(_this.f1.length);
              _this.f1 = _this.f1[f2];
              if (_this.f1 < 0) {
                _this.f1 = 0 - _this.f1;
                f0 = true;
              }
              if (_this.f1 == 85) {
                boil(false, 2);
              } else {
                _this.trg2 = this.create(
                  _this.trg.xp - _this.xenf,
                  _this.trg.yp - _this.yenf,
                  0,
                  0 - _this.xenf,
                  0 - _this.yenf,
                  0,
                  _this.f1
                );
                if (f0) {
                  _this.trg2.specoz = 23;
                  _this.trg2.eternal = true;
                  this.speco(_this.trg2);
                  _this.trg2._xscale = _this.trg2._yscale *= 1.1;
                  if (_this.f1 == 14) {
                    _this.trg2._xscale = _this.trg2._yscale *= 2;
                    _this.trg2.hp *= 2;
                  }
                }
                if (_this.f1 == 20) {
                  _this.trg2._xscale = _this.trg2._yscale = 50;
                  _this.trg2.splity = true;
                  _this.sizes[20] = 24;
                  _this.trg2.xbew *= 0.2;
                  _this.trg2.ybew *= 0.2;
                  _this.trg2.hp *= 0.3;
                  _this.trg2.nobar = true;
                }
              }
              _root.soundy("summonsound.wav", f2 * 5 + 80);
            }
          }
          if (_this.trg.d._currentframe == 5) {
            _this.trg2 = _this.mom[2];
            if (_this.trg.d.d._currentframe > 45) {
              _this.trg2.d.gotoAndStop(18);
            } else if (_this.trg.d.d._currentframe > 3) {
              _this.trg2.whu = _this.trg.d.d._currentframe;
              _this.trg2.d.gotoAndStop(19);
              _this.xenf = _this.trg.xp - 320;
              _this.yenf = _this.trg.yp - 280;
              _this.enf = enfget(_this.xenf, _this.yenf);
              _this.enf = 60 / _this.enf;
              _this.trg2.xp = _this.trg2.xpp =
                _this.trg.xp - _this.xenf * _this.enf;
              _this.trg2.yp = _this.trg2.ypp =
                _this.trg.yp - _this.yenf * _this.enf;
            }
          }
          _this.trg.bh = _this.trg.d._currentframe != 1;
          if (_this.trg.xpp <= 0) {
            for (let a in _this.door) {
              _this.trg2 = _this.door[a];
              if (
                enfcheck(
                  _this.trg2._x,
                  _this.trg2._y,
                  _this.trg.xp,
                  _this.trg.yp,
                  50
                )
              ) {
                _this.trg.xpp = _this.trg2._x;
                _this.trg.ypp = _this.trg2._y;
                _this.trg.d._rotation = _this.trg2._rotation + 90;
                _this.trg2._visible = false;
              }
            }
          }
        }
      }
      break;
    case 33:
      _this.trg.d.nextFrame();
      if (!_this.trg.holi) {
      }
      _this.dang2 = _this.trg;
      break;
    case 41:
      _this.trg.randy = true;
      if (_this.trg.eternal) {
        if (_this.trg.bloo-- > 0) {
          if (_this.fra2) {
            _this.trg2 = this.parc(
              "bloo",
              _this.trg.xp + crand(10),
              _this.trg.yp + crand(10)
            );
          }
        }
      }
      sideflip(_this.trg.xbew, _this.trg.d.d);
      if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
        if (_this.trg.xbew > 0) {
          _this.f1 = 2;
        } else {
          _this.f1 = 4;
        }
        _this.trg.d.d.gotoAndStop(2);
      } else {
        if (_this.trg.ybew > 0) {
          _this.f1 = 1;
        } else {
          _this.f1 = 3;
        }
        _this.trg.d.d.gotoAndStop(1);
      }
      _this.trg.d.hx.h.gotoAndStop(_this.f1);
    case 44:
      if (
        _this.trg.s == 44 &&
        _this.ashut == 0 &&
        _this.fra > 80 &&
        _this.trg.alter != 2
      ) {
        _this.trg.dones = true;
      }
      markhere(_this.trg);
      if (!_this.trg.gogo) {
        let f2 = true;
        if (_this.trg.s == 44) {
          if (_this.trg.alter == 1) {
            randrunx(1);
          } else {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg.xppp,
              _this.trg.yppp,
              1000
            );
            let f1 = Math.min(_this.enf / 10, 1.8);
            f2 = f1 < 0.4;
            f1 /= _this.enf;
            _this.trg.xbew -= _this.xenf * f1;
            _this.trg.ybew -= _this.yenf * f1;
          }
        } else {
          randrunx(0.75 + _this.trg.alter * 0.25);
        }
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        if ((_this.fra + _this.trg.e) % 3 == 0 && f2) {
          _this.trg.gogo = this.chaa();
          if (_this.trg.alter == 2 && _this.trg.gogo) {
            _this.trg.xpp *= 1.65;
            _this.trg.ypp *= 1.65;
          }
          if (_this.trg.alter == 2 && _this.trg.s == 44 && _this.trg.gogo) {
            _this.trg.xpp *= 1.65;
            _this.trg.ypp *= 1.65;
          }
        }
      }
      if (_this.trg.gogo) {
        if (_this.trg.gh) {
          _this.trg.gogo = false;
          _this.trg.xpp = _this.trg.ypp = undefined;
        } else {
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
          _this.trg.xbew += _this.trg.xpp;
          _this.trg.ybew += _this.trg.ypp;
          outgrid(_this.trg.til);
          if (_this.trg.s == 44) {
            let f1 = 5;
            if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
              _this.trg.yp *= 0.5;
              _this.trg.yp += _this.yenf * 0.5;
              if (_this.trg.s == 44) {
                _this.trg.ybew *= 0.5;
              }
            } else {
              _this.trg.xp *= 0.5;
              _this.trg.xp += _this.xenf * 0.5;
              if (_this.trg.s == 44) {
                _this.trg.xbew *= 0.5;
              }
            }
          } else if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
            _this.trg.yp *= 0.9;
            _this.trg.yp += _this.yenf * 0.1;
          } else {
            _this.trg.xp *= 0.9;
            _this.trg.xp += _this.xenf * 0.1;
          }
        }
      }
      break;
    case 40:
      if (_this.trg.eternal) {
        borderliner(5);
      } else {
        borderliner(3);
      }
      _this.trg.d.d._rotation += enfget(_this.trg.xbew, _this.trg.ybew) * 4;
      _this.trg.d.sh.d._rotation = _this.trg.d.d._rotation;
      if ((_this.fra + _this.trg.e) % 5 == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp + 5,
          1 + random(10),
          Math.random() * 0.7
        );
      }
      if (_this.trg.eternal) {
        _this.trg.fire += Math.random();
        if (_this.trg.fire > 40) {
          _this.trg.fire = 0;
          quadf(
            _this.trg.xp + _this.trg.xbew * 3,
            _this.trg.yp + _this.trg.ybew * 3,
            10,
            true
          );
        }
      }
      break;
    case 47:
      if (_this.trg.alter == 2) {
        if (_this.trg.bomber) {
          _this.trg.xbew *= 0.9;
          _this.trg.ybew *= 0.9;
        }
        if (_this.fra % 7 == 0) {
          if (_this.trg.bomber) {
            if (
              enfcheckx(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                300
              )
            ) {
              _this.trg.d.gotoAndStop(7);
              _this.enf = -10 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, true);
            }
            if ((_this.trg.bobo = !_this.trg.bobo)) {
              if (random(2) == 0) {
                _this.trg2 = this.create(
                  _this.trg.xp,
                  _this.trg.yp,
                  0,
                  0,
                  0,
                  0,
                  4
                );
                _this.trg2.man = true;
                _this.trg2.outway = true;
              }
            }
          } else {
            _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp, 0, 123);
          }
        }
        _this.trg.xbew *= 0.95;
        _this.trg.ybew *= 0.95;
      } else {
        _this.trg.xbew *= 0.95;
        _this.trg.ybew *= 0.95;
      }
      this.sideflip(_this.trg.xbew);
      if (_this.trg.d._currentframe < 3 || !_this.trg.bomber) {
        this.walkframe();
      } else {
        this.trgnextd();
      }
      if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
        _this.trg.d.bo.gotoAndStop(2);
      } else {
        _this.trg.d.bo.gotoAndStop(3);
      }
      if (_this.trg.nohead) {
        firewalk();
      } else {
        if (_this.trg.alter != 2) {
          if (_this.trg.eternal) {
            if (_this.trg.hp < _this.trg.mhp / 2) {
              _this.trg.nohead = true;
              _this.trg.gosplash = true;
              _this.trg.hp = _this.trg.mhp;
              attach(_this.trg, 11);
              _this.trg.fast = true;
              _this.trg.outway = true;
              splater(
                _this.trg.xp,
                _this.trg.yp,
                random(10) + 1,
                Math.random() + 0.6
              );
              _this.trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                0,
                -5,
                0,
                26
              );
              _this.trg2.alter = undefined;
              _this.trg2.specoz = 23;
              this.speco(_this.trg2);
              _this.trg2.mhp = _this.trg2.hp *= 2;
              _this.trg2._xscale = _this.trg2._yscale *= 1.35;
              _this.trg2.eternal = true;
              _this.trg2.minb = true;
            }
          }
        }
        if (_this.trg.eternal) {
          breakdance(_this.trg.s);
        }
      }
      if (_this.trg.alter == 2) {
        if (_this.trg.eternal && !_this.trg.bomber) {
          _this.trg.hp -= 0.1;
          if (_this.trg.fire == undefined) {
            _this.trg.fire = 0;
          }
          if (_this.trg.fire++ > 70) {
            _this.trg.xbew *= 0.2;
            _this.trg.ybew *= 0.2;
            _this.trg.fire = 0;
            if (_this.ashut > 5) {
              _this.f0 = 1;
            } else {
              _this.f0 = 1 + random(3);
            }
            while (_this.f0-- > 0) {
              let f1 = 18;
              var trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                crand(25),
                crand(25),
                0,
                f1
              );
              trg2.fra -= 20;
              trg2.die = true;
              trg2.pbh = true;
            }
            _root.soundy("Boss_Lite_HIss.mp", 100);
          }
        }
      }
      if (
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp + _this.player.xbew * 5,
          _this.player.yp + _this.player.ybew * 5,
          10000
        )
      ) {
        if (
          linecheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp
          )
        ) {
          _this.enf = 0.65 / _this.enf;
          _this.trg.xbew -= _this.xenf * _this.enf;
          _this.trg.ybew -= _this.yenf * _this.enf;
        } else {
          pathfind(_this.trg, _this.playx, _this.playy, 1.2);
        }
      }
      _this.trg.tiletimer -= 30;
      _this.trg.gridimer -= 30;
      break;
    case 46:
      _this.trg.xbew *= 0.75;
      _this.trg.ybew *= 0.75;
      this.walkframe();
      this.trgnextd();
      if (_this.trg.d._currentframe < 3) {
        this.sideflip(_this.trg.xbew);
        randrunx(1);
        if (random(50) == 0) {
          if (
            (random(2) == 0 && _this.ashut < 4) ||
            (Math.abs(_this.trg.yp - _this.player.yp) > 60 &&
              _this.trg.minb == 3)
          ) {
            _this.trg.d.gotoAndStop(6);
            if (
              _this.trg.eternal &&
              _this.trg.minb != 3 &&
              _this.trg.alter == 2
            ) {
              _this.trg.repss = 1;
            }
          } else {
            _this.trg.d.gotoAndStop(5);
            if (_this.trg.eternal && _this.trg.minb != 3) {
              if (_this.trg.alter == 2) {
                _this.trg.repss = 1;
              } else {
                _this.trg.repss = 2;
              }
            }
          }
        }
      } else {
        if (_this.trg.d.d._currentframe < 5) {
          this.sideflip(_this.player.xp - _this.trg.xp);
        }
        if (_this.trg.alter == 3) {
          if (
            _this.trg.d.d._currentframe > 5 &&
            _this.trg.d.d._currentframe < 15 &&
            _this.trg.d._currentframe != 6
          ) {
            let z = _this.trg.d.d._currentframe - 5;
            _this.trg2 = this.parc(
              "bloo",
              _this.trg.xp + (_this.trg.d._xscale * z) / 4,
              _this.trg.yp
            );
            _this.trg2._xscale *= 1.6 + z * 0.07;
            _this.trg2._yscale = _this.trg2._xscale;
            colorit(_this.trg2, 0, 2, 0, 0, 40, 0);
          }
        }
        if (_this.trg.d.d._currentframe == 16) {
          if (_this.trg.repss-- > 0) {
            _this.trg.d.d.gotoAndStop(3);
            if (_this.trg.d.d._currentframe < 3) {
              this.sideflip(_this.player.xp - _this.trg.xp);
            }
          }
        }
        if (_this.trg.d.d._currentframe == 5) {
          if (_this.trg.d._currentframe == 6) {
            if (_this.trg.alter == 3) {
              this.bossfire(3, true, 10);
              _root.soundy("heartout.wav", 70);
            } else if (_this.trg.alter == 2) {
              if (_this.trg.specoz != 23 || random(2) == 0) {
                this.boil(true);
                this.boil(true);
                _root.soundy("Boss_Lite_Roar.mp", 100);
              } else {
                _this.xenf = _this.trg.xp - _this.player.xp;
                _this.yenf = _this.trg.yp - _this.player.yp;
                _this.enf = enfget(_this.xenf, _this.yenf);
                this.sideflip(0 - _this.xenf);
                _this.enf = -25 / _this.enf;
                _this.xenf *= _this.enf;
                _this.yenf *= _this.enf;
                let f0 = 3 + random(2);
                while (f0-- > 0) {
                  var trg2 = this.create(
                    _this.trg.xp,
                    _this.trg.yp,
                    0,
                    _this.xenf,
                    _this.yenf,
                    0,
                    18
                  );
                  trg2.fra -= 20;
                  trg2.die = true;
                  trg2.pbh = true;
                  if (f0 != 0) {
                    trg2.xbew += crand(5);
                    trg2.ybew += crand(5);
                  }
                }
                _root.soundy("Boss_Lite_HIss.mp", 100);
              }
            } else {
              _this.trg2 = this.create(
                _this.trg.xp + _this.trg.d._xscale * 0.3,
                _this.trg.yp,
                0,
                0,
                0,
                0,
                23
              );
              _root.soundy("summonsound.wav", 80);
              _root.soundy("Monster_Grunt_2_" + abr() + ".mp", 100);
              _this.trg2.apf = true;
              _this.trg2.gogo = true;
              _this.trg2.xpp = _this.trg.d._xscale / 100;
              _this.trg2.ypp = 0;
              _this.trg.outway = true;
              if (_this.trg.eternal) {
                _this.trg2.eternal = true;
                _this.trg2.specoz = 23;
                this.speco(_this.trg2);
                _this.trg2.mhp = _this.trg2.hp *= 1 + _root.chaps * 0.15;
              }
            }
          } else {
            if (_this.trg.alter != 3) {
              if (_this.trg.specoz == 23 && _this.trg.alter == 2) {
                _this.xenf = _this.trg.xp - _this.player.xp;
                _this.yenf = _this.trg.yp - _this.player.yp;
                _this.enf = enfget(_this.xenf, _this.yenf);
                this.sideflip(0 - _this.xenf);
                _this.enf = -10 / _this.enf;
                _this.xenf *= _this.enf;
                _this.yenf *= _this.enf;
                shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, true);
              } else {
                this.green();
                if (_this.trg.alter == 2) {
                  this.green();
                }
              }
            }
            _root.soundy("heartout.wav", 70);
          }
        }
      }
      break;
    case 53:
      _this.trg.alt =
        Math.abs(_this.player.xp - 320) >
        Math.abs(_this.player.yp - 280) * 0.65;
      _this.trg.xbew *= 0.75;
      _this.trg.ybew *= 0.75;
      if (_this.trg.alter == 2) {
        _this.trg.flyby = true;
      }
      if (enfget(_this.trg.xbew, _this.trg.ybew) > 2) {
        if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
          if (_this.trg.alter == 2) {
            _this.trg.d.hx.bo.gotoAndStop(1);
          } else {
            _this.trg.d.hx.bo.gotoAndStop(2);
          }
        } else if (_this.trg.alter == 2) {
          _this.trg.d.hx.bo.gotoAndStop(2);
        } else {
          _this.trg.d.hx.bo.gotoAndStop(3);
        }
      } else {
        _this.trg.d.hx.bo.gotoAndStop(1);
      }
      let f1 = _this.plo;
      let f2 = f1 == 3 || f1 == 1;
      if ((!_this.trg.alt && f2) || (_this.trg.alt && !f2)) {
        f1 += 2;
        if (f1 > 4) {
          f1 -= 4;
        }
      }
      _this.trg.fire--;
      if (_this.player.fire > _this.lpf) {
        if (_this.trg.fire <= 0) {
          let f3 = 10;
          _this.xenf = _this.yenf = 0;
          switch (f1) {
            case 1:
              _this.xenf = 0;
              _this.yenf = f3;
              break;
            case 3:
              _this.xenf = 0;
              _this.yenf = 0 - f3;
              break;
            case 2:
              _this.xenf = f3;
              _this.yenf = 0;
              break;
            case 4:
              _this.xenf = 0 - f3;
              _this.yenf = 0;
          }
          if (_this.trg.alter == 2) {
            _this.trg.fire = 30;
            shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, true);
          } else {
            this.shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf);
          }
        }
      }
      _this.lpf = _this.player.fire;
      if (_this.plox > 8) {
        f1 += 4;
      }
      _this.trg.d.hx.h.gotoAndStop(f1);
      if (_this.trg.d.hx.bo != undefined) {
        sideflip(_this.trg.xbew, _this.trg.d.hx.bo);
      }
      this.trgnextd();
      _this.trg.xpp = _this.trg.xp;
      _this.trg.ypp = _this.trg.yp;
      _this.trg.xp = 640 - _this.player.xp;
      _this.trg.yp = 580 - _this.player.yp;
      _this.trg.xbew = 0 - _this.player.xbew;
      _this.trg.ybew = 0 - _this.player.ybew;
      break;
    case 51:
      f1 = 0.25 + _this.trg.tier * 0.1;
      if (_this.tier == 3) {
        f1 = 0.35;
      }
      if (_this.trg.ybew > 0) {
        _this.f2 = f1;
      } else {
        _this.f2 = 0 - f1;
      }
      if (_this.trg.xbew > 0) {
        f1 = f1;
      } else {
        f1 = 0 - f1;
      }
      _this.trg.xbew *= 0.9;
      _this.trg.ybew *= 0.9;
      _this.trg.xbew += f1;
      _this.trg.ybew += _this.f2;
      if (_this.trg.eternal && _this.trg.tier == 0) {
        if (_this.fra5) {
          if (_this.trg.fire <= 0) {
            _this.trg.fire = 0;
          }
          _this.trg.fire += 0.5;
          f1 = 7;
          _this.xenf = Math.sin(_this.trg.fire) * f1;
          _this.yenf = Math.cos(_this.trg.fire) * f1;
          _this.trg2 = this.ffmo(
            _this.trg.xp,
            _this.trg.yp,
            0,
            _this.xenf + _this.trg.xbew,
            _this.yenf * 0.8 + _this.trg.ybew,
            0,
            9,
            _this.trg.s,
            true
          );
          if (_this.trg.alter == 2) {
            _this.trg2.dm -= 3.5;
          } else {
            _this.trg2.dm -= 1;
          }
          this.sideflip(_this.xenf);
        }
      } else {
        this.sideflip(_this.trg.xbew);
      }
      break;
    case 52:
      _this.trg.xbew *= 0.75;
      _this.trg.ybew *= 0.75;
      if (enfget(_this.trg.xbew, _this.trg.ybew) < 1) {
        _this.trg.d.bo.gotoAndStop(1);
      } else if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
        _this.trg.d.bo.gotoAndStop(2);
      } else {
        _this.trg.d.bo.gotoAndStop(3);
      }
      this.sideflip(0 - _this.trg.xbew);
      this.trgnextd();
      if (_this.trg.d._currentframe < 3) {
        randrunx(1);
        if (random(50) == 0) {
          if (random(2) == 0) {
            _this.trg.d.gotoAndStop(6);
          } else {
            _this.trg.d.gotoAndStop(5);
          }
        }
      } else {
        if (_this.trg.d._currentframe == 5) {
          if (
            _this.trg.d.d._currentframe >= 20 &&
            _this.trg.d.d._currentframe <= 37
          ) {
            lasershowx((0.25 + 0.5 * (_this.fra % 4)) * 3.141592653589793);
          }
          if (_this.trg.eternal) {
            if (
              _this.trg.d.d._currentframe >= 20 &&
              _this.trg.d.d._currentframe <= 37
            ) {
              if (_this.trg.fire <= 0) {
                _this.trg.fire = 0;
              }
              _this.trg.fire += 0.5;
              if (_this.trg.alter == 2) {
                f1 = 9;
              } else {
                f1 = 7;
              }
              _this.xenf = Math.sin(_this.trg.fire) * f1;
              _this.yenf = Math.cos(_this.trg.fire) * f1;
              _this.trg2 = this.ffmo(
                _this.trg.xp,
                _this.trg.yp,
                0,
                _this.xenf + _this.trg.xbew,
                _this.yenf * 0.8 + _this.trg.ybew,
                0,
                9,
                _this.trg.s,
                true
              );
              _this.trg3 = this.ffmo(
                _this.trg.xp,
                _this.trg.yp,
                0,
                0 - _this.xenf + _this.trg.xbew,
                (0 - _this.yenf) * 0.8 + _this.trg.ybew,
                0,
                9,
                _this.trg.s,
                true
              );
              if (_this.trg.alter == 2) {
                _this.trg2.dm -= 3.5;
                _this.trg3.dm -= 3.5;
              } else {
                _this.trg2.dm -= 1;
                _this.trg3.dm -= 1;
              }
            }
          } else if (
            _this.trg.alter == 2 &&
            _this.trg.d.d._currentframe == 20
          ) {
            this.cirf(
              _this.trg.xp,
              _this.trg.yp - _this.trg._yscale * 0.2,
              8,
              6
            );
          }
        }
        if (_this.trg.d.d._currentframe == 5) {
          if (_this.trg.d._currentframe == 6) {
            _this.anarch = 20;
            if (_this.trg.alter == 2) {
              _this.anarch = 10;
              _this.analt = 5;
            }
          }
        }
      }
      break;
    case 50:
      _this.trg.f3 = 1;
      _this.trg.xbew *= 0.75;
      _this.trg.ybew *= 0.75;
      this.walkframe();
      if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
        _this.trg.d.bo.gotoAndStop(1);
      } else {
        _this.trg.d.bo.gotoAndStop(2);
      }
      this.sideflip(0 - _this.trg.xbew);
      this.trgnextd();
      if (_this.trg.d._currentframe < 3) {
        randrunx(1);
        if (random(50) == 0) {
          if (random(3) == 0 && _this.ashut < 3) {
            _this.trg.d.gotoAndStop(6);
          } else {
            _this.trg.d.gotoAndStop(5);
          }
        }
      } else {
        if (_this.trg.d._currentframe == 5) {
          this.sideflip(100);
          f1 = 10;
          _this.xenf = _this.trg.xp - _this.player.xp;
          _this.yenf = _this.trg.yp - _this.player.yp;
          if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
            _this.yenf = 0;
            if (_this.xenf > 0) {
              _this.xenf = f1;
              _this.f3 = 2;
            } else {
              _this.xenf = 0 - f1;
              _this.f3 = 4;
            }
          } else {
            _this.xenf = 0;
            if (_this.yenf > 0) {
              _this.f3 = 3;
              _this.yenf = f1;
            } else {
              _this.f3 = 1;
              _this.yenf = 0 - f1;
            }
          }
          if (_this.trg.d.d._currentframe < 6) {
            _this.trg.d.d.h.gotoAndStop(_this.f3);
            _this.trg.f3 = _this.f3;
          } else {
            _this.trg.d.d.h.gotoAndStop(_this.f3 + 4);
            _this.trg.f3 = _this.f3 + 4;
          }
        }
        if (_this.trg.d.d._currentframe == 5) {
          if (_this.trg.d._currentframe == 6) {
            f1 = 29;
            if (_this.trg.alter == 2) {
              f1 = 86;
            }
            if (_this.ashut == 1) {
              _this.trg2 = spaw(_this.trg.xp - 50, _this.trg.yp, 0, f1);
              _this.trg3 = spaw(_this.trg.xp + 50, _this.trg.yp, 0, f1);
            } else {
              _this.trg2 = spaw(_this.trg.xp, _this.trg.yp - 50, 0, f1);
              _this.trg3 = spaw(_this.trg.xp, _this.trg.yp + 50, 0, f1);
            }
            _root.soundy("summonsound.wav", 120);
          } else if (_this.trg.alter == 1) {
            shots(
              _this.trg.xp,
              _this.trg.yp,
              0 - _this.xenf,
              0 - _this.yenf,
              true
            );
          } else {
            shots(
              _this.trg.xp,
              _this.trg.yp,
              0 - _this.xenf,
              0 - _this.yenf,
              2
            );
          }
        }
      }
      break;
    case 48:
      if (_this.trg.eternal && _this.trg.alter == 2) {
        _this.trg.s = 47;
        _this.trg.bomber = true;
        break;
      }
      _this.trg.xbew *= 0.85;
      _this.trg.ybew *= 0.85;
      this.walkframe();
      if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
        _this.trg.d.bo.gotoAndStop(1);
      } else {
        _this.trg.d.bo.gotoAndStop(2);
      }
      this.sideflip(_this.trg.xbew);
      this.trgnextd();
      if (_this.trg.d._currentframe < 3) {
        if (_this.trg.gogo) {
          if (_this.trg.gh) {
            _this.trg.gogo = false;
            _this.trg.ypp = _this._loc0_ = undefined;
            _this.trg.xpp = _this._loc0_;
          } else {
            _this.trg.xbew *= 0.8;
            _this.trg.ybew *= 0.8;
            _this.trg.xbew += _this.trg.xpp * 1.5;
            _this.trg.ybew += _this.trg.ypp * 1.5;
            outgrid(_this.trg.til);
            if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
              _this.trg.yp *= 0.9;
              _this.trg.yp += _this.yenf * 0.1;
            } else {
              _this.trg.xp *= 0.9;
              _this.trg.xp += _this.xenf * 0.1;
            }
          }
        } else if (_this.trg.trg2.s > 0) {
          _this.trg2 = _this.trg.trg2;
          if (_this.trg2.dones) {
            _this.trg.trg2 = undefined;
            _this.trg.xpp = undefined;
          }
          _this.siz = 130;
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg2.xp,
              _this.trg2.yp,
              _this.siz
            )
          ) {
            _this.enf = (Math.min(1, _this.siz - _this.enf) / _this.enf) * 0;
            _this.trg.xbew += _this.xenf * _this.enf;
            _this.trg.ybew += _this.yenf * _this.enf;
            randrunx(1);
            _this.trg2 = _this.trg.trg2;
            let f1 =
              (_this.trg.xp - _this.trg.xpp) * (_this.trg.xp - _this.trg2.xp);
            let f2 =
              (_this.trg.yp - _this.trg.ypp) * (_this.trg.yp - _this.trg2.yp);
            if (f1 > 50 || f2 > 50) {
              _this.trg.xbew *= 0.5;
              _this.trg.ybew *= 0.5;
              _this.trg.xpp = undefined;
            }
          }
        } else {
          randrunx(1);
          if (
            random(
              Math.max(
                60,
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  10000
                )
              )
            ) == 0
          ) {
            _this.trg.d.gotoAndStop(5);
            _this.trg.xpp = 0;
            _this.trg.ypp = 0;
          } else {
            _this.trg.til = this.ingrid(_this.trg.xp, _this.trg.yp);
            if (this.chaa()) {
              if (
                levzz(
                  this.ingrid(
                    _this.trg.xp + _this.trg.xpp * 3,
                    _this.trg.yp + _this.trg.ypp * 3
                  )
                ) < 0.9
              ) {
                if (random(2) == 0) {
                  _this.trg.d.gotoAndStop(5);
                  if (_this.trg.eternal && _this.trg.alter != 2) {
                    _this.trg.reps = 1 + random(3);
                  }
                } else {
                  if (_this.trg.eternal) {
                    _this.trg.xpp *= 1.85;
                    _this.trg.ypp *= 1.85;
                  }
                  _this.trg.gogo = true;
                }
              }
            }
          }
          if (_this.trg.d._currentframe == 5) {
            _this.trg.xppp = _this.trg.xpp;
            _this.trg.yppp = _this.trg.ypp;
          }
        }
      } else {
        if (_this.trg.reps > 0) {
          if (
            _this.trg.d._currentframe == 5 &&
            _this.trg.d.d._currentframe == 10
          ) {
            _this.trg.d.d.gotoAndStop(1);
            _this.trg.reps--;
          }
        }
        if (
          _this.trg.d._currentframe == 5 &&
          _this.trg.d.d._currentframe == 5
        ) {
          outgrid(this.ingrid(_this.trg.xp, _this.trg.yp));
          f1 = 4;
          if (_this.trg.alter == 2) {
            f1 = 5.040000005;
          }
          let f2 = 1;
          if (_this.trg.trg2 != undefined) {
            f2 = _this.trg.trg2.d.d._currentframe + 6;
            if (f2 > 50) {
              f2 = 1;
            }
          }
          _this.trg.trg2 = this.create(
            _this.trg.xp,
            _this.trg.yp,
            0,
            _this.trg.xppp * 10,
            _this.trg.yppp * 10,
            0,
            f1
          );
          _this.trg.trg2.d.d.gotoAndStop(f2);
          if (_this.trg.xpp != 0 || _this.trg.ypp != 0) {
            _this.trg.trg2.ph = true;
          } else {
            _this.trg.trg2.bh = false;
          }
          _this.trg.xpp = undefined;
          _this.trg.trg2.man = true;
          _this.trg.trg2.outway = true;
        }
      }
      break;
    case 222:
      _this.trg.fra = _this.trg.fra + 1;
      _this.trg._visible = true;
      f1 = 1 - _this.trg.fra / 21;
      _this.trg.xbew = _this.trg.xppp * f1;
      _this.trg.ybew = _this.trg.yppp * f1;
      if (_this.trg.fra > 42) {
        _this.trg.done = true;
      }
      if (
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          20
        )
      ) {
        this.playerhurt(1, 39);
      }
      if (_this.trg.f222) {
        _this.trg.d.gotoAndStop(1);
        if (_this.trg.xbew * _this.trg.d._xscale < 0) {
          _this.trg.d._xscale *= -1;
        }
      } else if (_this.trg.ybew < 0) {
        _this.trg.d.gotoAndStop(2);
      } else {
        _this.trg.d.gotoAndStop(3);
      }
  }
  smux();
}
function smux() {
  switch (_this.trg.s) {
    case 39:
      if ((_this.fra + _this.trg.e) % 5 == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp + 5,
          1 + random(10),
          Math.random() * 0.7
        );
      }
    case 49:
      markhere(_this.trg);
      if (_this.trg.d._currentframe < 3) {
        if (_this.trg.pathy) {
          pathfind(_this.trg, _this.playx, _this.playy, 1.3);
          if (_this.fra5) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                60
              ) > 0
            ) {
              _this.trg.pathy = false;
            }
          }
        } else {
          randrunx(0.7);
        }
        this.walkframe();
        this.sideflip(_this.trg.xbew);
        if ((_this.fra + _this.trg.e) % 3 == 0) {
          let f1 = true;
          if (_this.trg.s == 49) {
            f1 = random(10) == 0;
            if (random(7) == 0) {
              f1 = true;
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  70 + random(130)
                )
              ) {
                f1 = false;
                _this.trg.d.gotoAndStop(11);
                this.sideflip(0 - _this.xenf);
              }
            }
          }
          if (f1) {
            if (!_this.trg.eternal || _this.trg.s != 49 || random(3) == 0) {
              if (
                enfcheckx(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  400
                )
              ) {
                if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
                  this.sideflip(0 - _this.xenf);
                  _this.f1 = 5;
                } else if (_this.yenf > 0) {
                  _this.f1 = 7;
                } else {
                  _this.f1 = 6;
                }
                _this.trg.f1 = f1;
                _this.f1 += _this.trg.alter * 3 - 3;
                _this.trg.d.gotoAndStop(f1);
                _this.trg.xpp = 0 - _this.xenf;
                _this.trg.ypp = 0 - _this.yenf;
              }
            }
          }
        }
        if (_this.trg.eternal && _this.trg.s == 49) {
          if (_this.fra5) {
            if (random(3) == 0) {
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  70 + random(130)
                ) <= 0
              ) {
                _this.trg.pathy = true;
              }
            }
          }
        }
      } else {
        this.trgnextd();
        if (_this.trg.d._currentframe == 11 && _this.trg.s != 39) {
          _this.trg.d.d.d.gotoAndStop(1);
          if (_this.trg.d.d._currentframe == 14) {
            if (_this.trg.eternal) {
              _this.enf = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp + _this.player.xbew * 5,
                _this.player.yp + _this.player.ybew * 5,
                1000
              );
              _this.enf = -8.2 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, 23);
            } else {
              quadf(_this.trg.xp, _this.trg.yp, 8, true);
            }
            if (_this.trg.alter == 2) {
              this.bossfire(5, true);
            }
          }
        } else if (_this.trg.alter == 3) {
          if (_this.trg.d.d._currentframe == 18) {
            let f2 = (_this._loc0_ =
              Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp));
            if (_this._loc0_) {
              _this.trg.ypp = 0;
            } else {
              _this.trg.xpp = 0;
            }
            let f1 = 16 / enfget(_this.trg.xpp, _this.trg.ypp);
            _this.xenf = _this.trg.xpp * f1 * 1.4;
            _this.yenf = _this.trg.ypp * f1;
            _this.trg2 = _this._loc0_ = create(
              _this.trg.xp,
              _this.trg.yp,
              0,
              _this.xenf,
              _this.yenf,
              0,
              222,
              _this.trg.s
            );
            _this.trg.trg2 = _this._loc0_;
            _this.trg2.chu = true;
            _this.trg2.bh = false;
            _this.trg2.ggh = true;
            _this.trg2.apf = true;
            _this.trg2.fra = -1;
            _this.trg2.f222 = f2;
            _this.trg2.trg2 = _this.trg;
            _this.trg2.xppp = _this.xenf;
            _this.trg2.yppp = _this.yenf;
            _this.trg2._visible = true;
            if (_this.trg.eternal) {
              _this.trg2.specoz = 23;
              _this.trg2._yscale = _this._loc0_ = _this.trg._yscale;
              _this.trg2._xscale = _this._loc0_;
              this.speco(_this.trg2);
            }
          }
          if (_this.trg.trg2 != null && _this.trg.eternal) {
            _this.trg2 = this.parc(
              "bloo",
              _this.trg.trg2.xp + crand(10),
              _this.trg.trg2.yp + crand(10),
              0,
              123
            );
          }
        } else if (
          _this.trg.d.d._currentframe > 29 &&
          _this.trg.d.d._currentframe < 70
        ) {
          if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
            if (_this.trg.xpp > 0) {
              _this.trg.xpp = 1000;
              _this.trg.ypp = 0;
            } else {
              _this.trg.xpp = -1000;
              _this.trg.ypp = 0;
            }
          } else if (_this.trg.ypp > 0) {
            _this.trg.xpp = 0;
            _this.trg.ypp = 1000;
          } else {
            _this.trg.xpp = 0;
            _this.trg.ypp = -1000;
          }
          if (_this.trg.eternal) {
            if (_this.trg.d.d._currentframe % 10 == 0) {
              let f10 = 20;
              if (_this.trg.alter == 2) {
                f10 *= 2;
              }
              let z = 0;
              while (z < f10) {
                let f0 = Math.random() * 0.5;
                if (_this.trg.alter == 2) {
                  if (random(2) == 0) {
                    f0 = 0 - f0;
                  }
                }
                let f1 = _this.trg.xp + _this.trg.xpp * f0 + crand(10);
                let f2 = _this.trg.yp + _this.trg.ypp * f0 + crand(10);
                if (f1 > 60 && f1 < 580) {
                  if (f2 > 150 && f2 < 410) {
                    _this.trg2 = this.parc("bloo", f1, f2, 0, 123);
                    if (_this.trg.s == 49) {
                      if (_this.trg.alter == 2) {
                        _this.trg2.longstay = 170;
                      } else {
                        _this.trg2.longstay = 450;
                      }
                    }
                  }
                }
                z++;
              }
            }
          }
          this.lasershow(_this.trg);
        }
        if (_this.trg.alter == 2) {
          _this.trg.xpp = 0 - _this.trg.xpp;
          _this.trg.ypp = 0 - _this.trg.ypp;
        }
        if (_this.trg.d._currentframe < 3) {
          _this.trg.xpp = undefined;
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      break;
    case 36:
      _this.gurdy = true;
      for (let a in _this.ball) {
        _this.trg2 = _this.ball[a];
        if (_this.trg2.flyai) {
          _this.siz = 80;
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg2.xp,
              _this.trg2.yp,
              _this.siz
            )
          ) {
            _this.enf = ((0 - (_this.siz - _this.enf)) * 0.03) / _this.enf;
            _this.trg2.xbew += _this.xenf * _this.enf;
            _this.trg2.ybew += _this.yenf * _this.enf;
          }
        }
      }
      this.trgnextd();
      if (_this.trg.d._currentframe == 1) {
        _this.trg.idle = !_this.trg.idle;
        if (_this.trg.idle) {
          if (_this.plah) {
            _this.trg.d.gotoAndStop(5);
            _this.plah = false;
          } else {
            _this.trg.d.gotoAndStop(6 + random(2));
          }
        } else if (
          random(3) != 0 &&
          _this.player.yp > 200 &&
          _this.ashut < 8 &&
          _this.trg.specoz != 11
        ) {
          enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            10000
          );
          if (Math.abs(_this.xenf) > Math.abs(_this.yenf) || _this.yenf > 0) {
            if (_this.xenf > 0) {
              _this.f1 = 10;
            } else {
              _this.f1 = 11;
            }
          } else {
            _this.f1 = 9;
          }
          _this.trg.d.gotoAndStop(_this.f1);
        } else if (_this.ashut < 14) {
          let f1 = [8, 12, 13];
          _this.trg.d.gotoAndStop(f1[random(f1.length)]);
          if (_this.ashut > 15) {
            _this.trg.d.gotoAndStop(13);
          }
          if (
            Math.abs(_this.trg.xp - _this.player.xp) < 70 &&
            _this.player.yp < _this.trg.yp
          ) {
            _this.trg.d.gotoAndStop(12);
          }
        } else {
          _this.trg.idle = true;
        }
      }
      if (_this.trg.d.d.now) {
        switch (_this.trg.d._currentframe) {
          case 8:
            this.create(_this.trg.xp + 60, _this.trg.yp - 25, 0, 10, 0, 0, 14);
            _root.soundy("summonsound.wav", 70);
            _root.soundy("Boss_Bug_Hiss.mp", 100);
            break;
          case 12:
            _this.trg2 = this.create(
              _this.trg.xp + 40,
              _this.trg.yp - 65,
              0,
              0,
              -20,
              0,
              18
            );
            _this.trg3 = this.create(
              _this.trg.xp - 40,
              _this.trg.yp - 65,
              0,
              0,
              -20,
              0,
              18
            );
            _root.soundy("summonsound.wav", 100);
            _root.soundy("Boss_Lite_HIss.mp", 100);
            _this.trg2.die = true;
            _this.trg3.die = true;
            _this.trg2.hp -= 2;
            _this.trg3.hp -= 2;
            if (
              Math.abs(_this.trg.xp - _this.player.xp) < 70 &&
              _this.player.yp < _this.trg.yp
            ) {
              _this.trg2 = this.create(
                _this.trg.xp + 40,
                _this.trg.yp - 90,
                0,
                0,
                -20,
                0,
                18
              );
              _this.trg3 = this.create(
                _this.trg.xp - 40,
                _this.trg.yp - 90,
                0,
                0,
                -20,
                0,
                18
              );
              _root.soundy("summonsound.wav", 100);
              _root.soundy("Boss_Lite_HIss.mp", 100);
              _this.trg2.die = true;
              _this.trg3.die = true;
              _this.trg2.hp -= 2;
              _this.trg3.hp -= 2;
            }
            break;
          case 13:
            _this.trg2 = this.create(
              _this.trg.xp + 42,
              _this.trg.yp + 45,
              0,
              0,
              0,
              0,
              30
            );
            _this.trg3 = this.create(
              _this.trg.xp - 42,
              _this.trg.yp + 45,
              0,
              0,
              0,
              0,
              30
            );
            _root.soundy("summonsound.wav", 120);
            _this.trg2.boss = true;
            _this.trg3.boss = true;
            if (_this.trg.specoz == 23) {
              _this.trg2.hp = _this.trg2.mhp;
              _this.trg3.hp = _this.trg3.mhp;
              _this.trg2.specoz = 23;
              _this.trg3.specoz = 23;
              this.speco(_this.trg2);
              this.speco(_this.trg3);
              _this.trg2._yscale *= 1.3;
              _this.trg2._xscale = _this._loc0_;
              _this.trg3._yscale *= 1.3;
              _this.trg3._xscale = _this._loc0_;
              _this.trg2.eternal = true;
              _this.trg3.eternal = true;
            }
            break;
          case 9:
            shots(
              _this.trg.xp + rand() * 30,
              _this.trg.yp - 20,
              rand() * 3,
              10,
              true
            );
            _root.soundy("Boss_Lite_Gurgle.mp", 100);
            break;
          case 10:
            shots(
              _this.trg.xp + 13,
              _this.trg.yp - 18 - rand() * 30,
              -10,
              1 + rand() * 3,
              true
            );
            _root.soundy("Boss_Gurgle_Roar.mp", 100);
            break;
          case 11:
            shots(
              _this.trg.xp - 13,
              _this.trg.yp - 18 - rand() * 30,
              10,
              1 + rand() * 3,
              true
            );
            _root.soundy("Boss_Gurgle_Roar.mp", 100);
        }
        _this.trg.d.d.now = false;
      }
      _this.trg.xp = _this.trg.xpp;
      _this.trg.yp = _this.trg.ypp;
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
  }
}
function telpx(f3) {
  if (f3 == 2) {
    _this.f2 = 120 + Math.random() * 120;
  } else {
    _this.f2 = 220 * Math.random() + 120;
  }
  let f1 = _this.trg.xp + crand(_this.f2);
  _this.f2 = _this.trg.yp + this.crand();
  if (f3 == 2) {
    f3 = enfcheck(f1, _this.f2, _this.player.xp, _this.player.yp, 700);
    if (f3) {
      f3 = f3 > 180;
    }
  } else if (!f3) {
    if (_this.trg.alter != 2 || _this.trg.s != 38) {
      f3 =
        !enfcheckx(f1, _this.f2, _this.player.xp, _this.player.yp, 400) &&
        enfcheck(f1, _this.f2, _this.player.xp, _this.player.yp, 10000) > 200;
    } else {
      f3 = enfcheck(f1, _this.f2, _this.player.xp, _this.player.yp, 10000);
      _this.f4 = f3;
      f3 = f3 > 100 && f3 < 230;
    }
  } else {
    f3 = enfcheck(f1, _this.f2, _this.player.xp, _this.player.yp, 10000);
    f3 = f3 > 130 && f3 < 1000;
  }
  if (f3) {
    f3 = this.ingrid(f1, _this.f2);
    if (levzz(f3) < 0.5) {
      outgrid(f3);
      _this.trg.xpp = _this.xenf;
      _this.trg.ypp = _this.yenf;
    }
  }
}
function smartd() {
  //var _loc00_: number | null = null; _this._loc00_ ???
  if ((_this._loc00_ = _this.trg.s) === 79) {
    _this.trg.xbew *= 0.8;
    _this.trg.ybew *= 0.8;
    if (_this.trg.specoz) {
      _this.trg.xbew *= 0.92;
      _this.trg.ybew *= 0.92;
      if (!_this.trg.alt) {
      }
    }
    if (_this.trg.alt) {
      _this.trg.ggh = true;
      _this.trg2 = _this.trg.trg2;
      let i = 0;
      while (i < _this.ball.length) {
        _this.trg3 = _this.ball[i];
        if (
          _this.trg.s == _this.trg3.s &&
          _this.trg3.alt &&
          !_this.trg3.dones
        ) {
          if (_this.trg3 != _this.trg && _this.trg3) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg3.xp,
              _this.trg3.yp,
              100
            );
            if (_this.enf > 0) {
              _this.enf = ((100 - _this.enf) / _this.enf) * 0.01;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              _this.trg.xbew += _this.xenf;
              _this.trg.ybew += _this.yenf;
              _this.trg3.xbew -= _this.xenf;
              _this.trg3.ybew -= _this.yenf;
            }
          }
        }
        i++;
      }
      _this.trg3 = _this.trg2.trg3;
      _this.trg.xbew += crand(0.01);
      _this.trg.ybew += crand(0.01);
      if (_this.altboss == 2) {
        if (_this.trg2.s != 79) {
          _this.trg.dones = true;
        }
        _this.trg.imba = true;
        bord(580, 60, 410, 170);
        if (_this.trg.d._currentframe == 12) {
          if (this.trgnextd()) {
            _this.trg.d.gotoAndStop(7);
            _this.trg.fire = 60;
            _this.trg.ypp = _this._loc00_ = 0;
            _this.trg.xpp = _this._loc00_;
          }
          if (
            _this.trg.d.d._currentframe > 15 &&
            _this.trg.d.d._currentframe < 50
          ) {
            this.lasershow(_this.trg);
          }
        } else {
          if (_this.trg.fire > -100) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                300
              )
            ) {
              _this.enf = 0.65 / _this.enf;
              _this.trg.xbew += _this.xenf * _this.enf;
              _this.trg.ybew += _this.yenf * _this.enf * 0.9;
            }
          } else {
            let f1 = _this.player.yp - _this.trg.yp;
            _this.trg.ybew += absmax(f1 * 0.01, 0.2);
          }
          _this.trg.fire--;
          if (_this.trg.fire < 0) {
            if (random(30) == 0 && _this.trg.fire > -100) {
              _this.trg.fire = -101;
              _this.trg.ypp = _this._loc00_ = 0;
              _this.trg.xpp = _this._loc00_;
            }
          } else if (random(40) == 0 && _this.trg.fire < -180) {
            _this.trg.fire = 60;
          }
          _this.trg.d.gotoAndStop(7);
          _this.trg.onown = true;
          this.sideflip(0 - _this.trg.xbew);
          markhere(_this.trg);
          if (random(10) == 0 && _this.trg.fire < 0) {
            chaa(2);
            if (_this.trg.xpp != 0 && _this.trg.ypp == 0) {
              _this.trg.d.gotoAndStop(12);
              this.sideflip((0 - _this.trg.xpp) * 10);
            }
          }
        }
      } else if (
        _this.trg2.dones ||
        (_this.altboss && _this.trg2.trg3 != _this.trg && _this.trg2.hp < 60) ||
        _this.trg.onown
      ) {
        bord(580, 60, 410, 170);
        if (!_this.trg.onown) {
          _this.trg.onown = true;
          _root.soundy("Cute_Grunt_" + random(3) + ".mp", 100);
        }
        if (_this.trg2.trg3 == _this.trg) {
          _this.f0 = 1;
        } else {
          _this.f0 = 0;
        }
        i = 0;
        while (i < 19) {
          _this.trg3 = _this.trg2["n" + i + " " + _this.f0];
          _this.trg3._visible = false;
          i++;
        }
        if (_this.trg.d._currentframe <= 9) {
          _this.trg.d.gotoAndStop(9);
          _this.trg.ma = 8;
        }
        _this.trg.xbew /= 0.85;
        _this.trg.ybew /= 0.85;
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          1000
        );
        _this.enf = 0.5 / _this.enf;
        if (_this.trg.eternal) {
          _this.enf *= 1.5;
        }
        _this.trg.xbew -= _this.xenf * _this.enf;
        _this.trg.ybew -= _this.yenf * _this.enf;
        this.sideflip(0 - _this.trg.xbew);
      } else {
        enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          1000
        );
        _this.enf = 0.25 / _this.enf;
        _this.trg.xbew -= _this.xenf * _this.enf;
        _this.trg.ybew -= _this.yenf * _this.enf;
        this.trgnextd();
        if (_this.trg.d._currentframe <= 6) {
          _this.trg.d.gotoAndStop(7);
        }
        this.firemode(300, 5);
      }
    } else {
      _this.b1 = false;
      if (_this.trg.eternal) {
        breakdance(_this.trg.s);
        if (_this.trg.sp > 0) {
          _this.enf = _this._loc00_ = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp + _this.player.xbew * 5,
            _this.player.yp + _this.player.ybew * 5,
            10000
          );
          if (_this._loc00_) {
            if (
              linecheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp
              )
            ) {
              _this.enf = _this.trg.sp / _this.enf;
              _this.trg.xbew *= 0.94;
              _this.trg.ybew *= 0.94;
              _this.trg.xbew -= _this.xenf * _this.enf;
              _this.trg.ybew -= _this.yenf * _this.enf;
              _this.b1 = true;
              _this.trg.gridtime -= 20;
            }
          }
        }
      }
      if (_this.trg.trg2 == undefined && !_this.trg.gemsp) {
        _this.trg.gemsp = true;
        _this.trg.fire = 0;
        let f0 = 1;
        if (_this.trg.specoz == 23) {
          f0 = 2;
        }
        while (f0 > 0) {
          f0--;
          _this.trg2 = this.create(
            _this.trg.xp + f0 * 10,
            _this.trg.yp - 8,
            0,
            0,
            0,
            0,
            _this.trg.s
          );
          if (f0 == 0) {
            _this.trg.trg2 = _this.trg2;
          } else {
            _this.trg.trg3 = _this.trg2;
          }
          _this.trg2.fra = -100;
          _this.trg2.alt = true;
          _this.trg2.outway = true;
          _this.trg2.specoz = _this.trg.specoz;
          this.speco(_this.trg2);
          _this.trg2.trg2 = _this.trg;
          if (!_this.altboss && _this.trg.specoz != 3) {
            let i = 0;
            while (i < 17) {
              _this.trg3 = _this.trg.attachMovie(
                "necksegment2",
                "n" + i + " " + f0,
                i + 2001312 + f0 * 20
              );
              _this.trg3.ballz = _this.ballz;
              i++;
            }
          }
        }
      }
      if (_this.trg.fire == 0) {
        _this.trg.sp = 1.4;
        if (random(60) == 0 && (_this.altboss != 2 || random(4) == 0)) {
          _this.trg.fire = _this.trg.fire + 1;
          _root.soundy("Monster_Yell_B_" + random(2) + ".mp", 100);
        }
        _this.trg.d.gotoAndStop(1);
      } else {
        _this.trg.fire = _this.trg.fire + 1;
        if (_this.trg.fire > 0) {
          _this.trg.d.gotoAndStop(2);
          _this.trg.sp += 0.04;
          _this.trg.sp *= 0.98;
          if (_this.trg.fire > 100) {
            _this.trg.fire = -100;
          }
        } else if (_this.altboss == 2) {
          _this.trg.d.gotoAndStop(1);
          _this.trg.fire = 0;
        } else {
          _this.trg.d.gotoAndStop(5);
          _this.trg.sp = 0;
        }
      }
      if (_this.altboss == 2) {
        _this.trg.sp += 0.2;
        if (_this.fra % 7 == 0) {
          _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp, 0, 123);
        }
      }
      if (!_this.b1) {
        pathfind(_this.trg, _this.playx, _this.playy, _this.trg.sp);
      }
      if (_this.altboss == 2) {
        _this.trg.sp -= 0.2;
      }
      let f1 = 0;
      if (_this.altboss == 2) {
        f1 = 6;
      } else if (_this.altboss) {
        f1 = 3;
      }
      if (enfget(_this.trg.xbew, _this.trg.ybew) > 3) {
        if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
          _this.trg.d.bo.gotoAndStop(3 + f1);
        } else {
          _this.trg.d.bo.gotoAndStop(2 + f1);
        }
        this.sideflip(_this.trg.xbew);
      } else {
        _this.trg.d.bo.gotoAndStop(1 + f1);
      }
    }
  }
  smux2();
}
function gem(trg2, f0) {
  if (_this.trg.s == trg2.s && _this.trg.specoz != 3 && !trg2.dones) {
    if (_this.trg.eternal) {
      let f1 = 20 / (240 + _this.fra);
      if (_this.trg.hp < _this.trg.mhp) {
        _this.trg.hp += f1;
      }
      if (trg2.hp < trg2.mhp) {
        trg2.hp += f1 * 2;
      }
    }
    _this.enf = enfcheck(_this.trg.xp, _this.trg.yp, trg2.xp, trg2.yp, 1000);
    if (_this.xenf != 0) {
    }
    let f3 = 76;
    if (_this.altboss) {
      if (_this.enf > 0 && !trg2.onown) {
        let f2 = ((_this.enf - 20) / _this.enf) * 0.1;
        trg2.xbew += _this.xenf * f2;
        trg2.ybew += _this.yenf * f2;
      }
    } else if (_this.enf > f3) {
      let f2 = ((_this.enf - f3) / _this.enf) * 0.01;
      trg2.xbew += _this.xenf * f2;
      trg2.ybew += _this.yenf * f2;
    }
    f3 += 120;
    let i = 0;
    while (i < 19) {
      var _loc2_ = _this.trg["n" + i + " " + f0];
      let f1 = (16 - i) / 17;
      _loc2_._x = (0 - _this.xenf) * f1 - 6;
      let f2 = Math.abs(i - 9) * 0.5;
      f2 = 16 - f2 * f2;
      f2 *= Math.max(0, f3 - _this.enf) / f3;
      _loc2_._y = (0 - _this.yenf) * f1 - 35 + f2 * 1.5 + i * 0.8;
      _loc2_._x /= Math.abs(_this.trg._xscale / 100);
      _loc2_._y /= Math.abs(_this.trg._yscale / 100);
      _loc2_._visible = true;
      if (_this.yenf < 0) {
        _loc2_.swapDepths(80 - i - f0 * 20);
      } else {
        _loc2_.swapDepths(3 + i + f0 * 20);
      }
      if (i == 18) {
        _loc2_._visible = false;
      }
      i++;
    }
  } else {
    let i = 0;
    while (i < 19) {
      _loc2_ = _this.trg["n" + i + " " + f0];
      _loc2_._visible = false;
      i++;
    }
  }
}
function smux2() {
  switch (_this.trg.s) {
    case 78:
      if (_this.trg.eternal) {
        if (_this.lars < 5) {
          _this.lars = 5;
        }
        if (_this.trg.hp < _this.trg.mhp && _this.fra > 10) {
          let f1 = 0.5;
          if (_root.locker[45]) {
            f1 = 0.75;
          }
          _this.trg.hp +=
            ((300 + (_this.trg.mhp - _this.trg.hp) * f1) / (_this.fra + 330)) *
            0.5;
          _this.trg.hp = Math.min(_this.trg.mhp, _this.trg.hp);
        }
      }
      _this.mheart = _this.trg;
      _this.trg.outway = true;
      _this.trg.ggh = true;
      if (_this.trg.eternal) {
        _this.sizes[_this.trg.s] = 20;
        if (
          _this.trg.d._currentframe == 4 &&
          _this.trg.d.d._currentframe > 19
        ) {
          _this.trg.d.gotoAndStop(1);
        }
        if (!_root.locker[45]) {
          if (
            _this.trg.d._currentframe == 2 &&
            _this.trg.d.d._currentframe == 7
          ) {
          }
        }
        if (_this.trg.d._currentframe < 4 && _this.fra > 30) {
          _this.enf = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            100000
          );
          _this.enf = -0.5 / _this.enf;
          _this.xenf *= _this.enf;
          _this.yenf *= _this.enf;
          _this.trg.xbew += _this.xenf;
          _this.trg.ybew += _this.yenf;
        }
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        _this.trg.xp = _this.trg.xpp;
        _this.trg.yp = _this.trg.ypp;
      }
      let f3 = Math.min(
        3,
        4 - Math.round((_this.trg.hp / _this.trg.mhp) * 3 + 0.45)
      );
      if (_this.momstate == 3) {
        splater(
          _this.trg.xp + this.crand() * 2,
          _this.trg.yp + crand(Math.random() * Math.random() * 200) + 8,
          1 + random(10),
          Math.random() * 0.5 + 0.2
        );
      }
      if (_this.momstate != f3) {
        _this.momstate = f3;
      }
      if (
        _this.trg.d._currentframe != 5 &&
        (_this.trg.d._currentframe != 4 || _this.trg.d.d._currentframe > 30)
      ) {
        _this.trg.d.gotoAndStop(_this.momstate);
        if (_this.trg.downbro-- < 0 && _this.momstate != 3) {
          if (!_this.trg.eternal) {
            _this.trg.d.gotoAndStop(5);
            _root.soundy("heartin.wav");
          }
        }
      } else if (_this.trg.d._currentframe == 5) {
        if (_this.trg.fire < 40 || _this.momstate == 3) {
          _this.trg.downbro = 100;
          _this.trg.d.gotoAndStop(4);
          _root.soundy("heartout.wav");
          _root.soundy("Mom_Vox_Filtered_Isaac_" + random(3) + ".mp");
        }
      }
      _this.trg.bh =
        _this.trg.d._currentframe != 5 &&
        (_this.trg.d._currentframe != 4 || _this.trg.d.d._currentframe > 5);
      if (_this.ashut < 2) {
        _this.trg.fire--;
      }
      if (_this.trg.eternal && _this.ashut < 4 && !_root.locker[45]) {
        _this.trg.fire -= 0.05;
      }
      if (_this.trg.eternal && _this.ashut < 7) {
        _this.trg.fire -= 0.04;
      }
      if ((_this._loc00_ = _this.momstate) === 3) {
        if (random(2) == 0 && _this.fra % 23 == 0) {
          green(true, true);
        }
      }
      if (_this.trg.fire < 0) {
        if (_this.lmo != _this.momstate) {
          _this.trg.wave = 0;
        }
        let f5 = _root.locker[45];
        if (f5) {
          switch (_this.momstate) {
            case 1:
              _this.f2 = [60, 55, 20, 19];
              if (_this.trg.eternal) {
                _this.f2[1] = 56;
              }
              break;
            case 2:
              _this.f2 = [41, 59, 67, 28];
              break;
            case 3:
              _this.f2 = [61, 24, 14, 23];
          }
        } else {
          switch (_this.momstate) {
            case 1:
              _this.f2 = [60, 59, 24];
              break;
            case 2:
              _this.f2 = [55, 24, 27.4];
              if (_this.trg.eternal) {
                _this.f2[0] = 56;
              }
              break;
            case 3:
              _this.f2 = [25.5, 61, 14];
          }
        }
        _this.f2 = _this.f2[_this.trg.wave];
        if (_this.f2 == 60 && _this.fra < 100) {
          _this.f1 = 180;
        } else {
          _this.f1 = 40;
        }
        _this.trg.fire = 75;
        _this.trg.wave = _this.trg.wave + 1;
        _this.lmo = _this.momstate;
        _root.soundy("summonsound.wav", 100 + _this.momstate * 10);
        this.create(
          _this.trg.xp + _this.f1,
          _this.trg.yp,
          0,
          0,
          0,
          0,
          _this.f2
        );
        if (
          _this.f2 != 20 &&
          _this.f2 != 67 &&
          (_this.f2 != 59 || !_this.trg.eternal)
        ) {
          this.create(
            _this.trg.xp - _this.f1,
            _this.trg.yp,
            0,
            0,
            0,
            0,
            _this.f2
          );
          if (_this.f2 == 19) {
            this.create(
              _this.trg.xp + _this.f1,
              _this.trg.yp + 30,
              0,
              0,
              0,
              0,
              _this.f2
            );
            this.create(
              _this.trg.xp - _this.f1,
              _this.trg.yp + 30,
              0,
              0,
              0,
              0,
              _this.f2
            );
            this.create(
              _this.trg.xp + _this.f1,
              _this.trg.yp + 60,
              0,
              0,
              0,
              0,
              _this.f2
            );
            this.create(
              _this.trg.xp - _this.f1,
              _this.trg.yp + 60,
              0,
              0,
              0,
              0,
              _this.f2
            );
          } else if (
            _this.f2 != 60 &&
            _this.f2 != 59 &&
            _this.f2 != 24 &&
            _this.f2 != 27.4 &&
            _this.f2 != 25.5 &&
            _this.f2 != 56
          ) {
            _this.f1 *= 0.8;
            if (_this.f2 != 28) {
              this.create(
                _this.trg.xp,
                _this.trg.yp + _this.f1,
                0,
                0,
                0,
                0,
                _this.f2
              );
            }
            this.create(
              _this.trg.xp,
              _this.trg.yp - _this.f1,
              0,
              0,
              0,
              0,
              _this.f2
            );
          }
        }
        if ((_this.trg.wave > 2 && !f5) || (_this.trg.wave > 3 && f5)) {
          _this.trg.wave = 0;
        }
      }
      if (_this.trg.eternal) {
        if (_this.trg.d._currentframe > 3) {
          _this.trg.d.d._yscale = _this._loc00_ = 73.75;
          _this.trg.d.d._xscale = _this._loc00_;
        } else {
          _this.trg.d.d._yscale = _this._loc00_ = 59;
          _this.trg.d.d._xscale = _this._loc00_;
        }
      }
      break;
    case 69:
      if (_this.trg.specoz == 23) {
        _this.healo = _this.trg;
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          randrun();
          if (
            random(40) == 0 &&
            enfcheckx(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              300
            )
          ) {
            _this.trg.d.gotoAndStop(5);
          } else if (random(140) == 0) {
            _this.trg.d.gotoAndStop(9);
          } else if (random(100) == 0) {
            _this.trg.d.gotoAndStop(7);
          } else if (
            ((random(50) == 0 && _this.trg.specoz == 23) || random(50) == 0) &&
            _this.ashut < 3 + random(2) &&
            (random(3) == 0 || !_this.altboss)
          ) {
            _this.trg.d.gotoAndStop(8);
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == _this.trg.d.d._totalframes - 1) {
            _this.trg.d.gotoAndStop(6);
            if (_this.trg.xpp > 0) {
              _this.trg.xp = _this.trg.xpp;
              _this.trg.yp = _this.trg.ypp;
            }
          } else {
            this.telpx();
          }
          break;
        case 8:
          if (_this.trg.d.d._currentframe == 22) {
            if (_this.trg.specoz == 23) {
              if (random(10) == 0) {
                _this.f1 = 37.9;
              } else {
                _this.f1 = 38;
              }
            } else {
              _this.f1 = 25;
            }
            _this.noet = true;
            _this.trg2 = this.create(
              _this.trg.xp,
              _this.trg.yp,
              0,
              0,
              0,
              0,
              _this.f1
            );
            _this.noet = false;
            _root.soundy("summonsound.wav");
            _this.trg2.outway = true;
            if (_this.altboss && !_this.trg.eternal) {
              _this.trg2.alter = 2;
            }
            if (_this.trg.specoz == 23) {
              _this.trg2.specoz = 23;
              this.speco(_this.trg2);
            }
          }
          break;
        case 9:
          if (_this.trg.d.d._currentframe == 26) {
            quadf(_this.trg.xp, _this.trg.yp, 10, true);
          }
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 3) {
              _this.trg.fire = 3;
            }
            if (_this.trg.d.d._currentframe == 46) {
              if (_this.trg.fire-- > 0) {
                _this.trg.d.d.gotoAndStop(55);
              }
            }
            if (_this.trg.d.d._currentframe == 60) {
              if (_this.trg.fire > 0) {
                _this.trg.d.d.gotoAndStop(16);
              }
            }
          }
          break;
        case 7:
          if (_this.trg.d.d._currentframe == 28) {
            this.quadf(_this.trg.xp, _this.trg.yp, 10);
          }
          if (_this.trg.d.d._currentframe == 51) {
            quadf(_this.trg.xp, _this.trg.yp, 10, 2);
          }
          if (_this.trg.d.d._currentframe == 77) {
            this.quadf(_this.trg.xp, _this.trg.yp, 10);
          }
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 3) {
              _this.trg.fire = 2;
            }
            if (_this.trg.d.d._currentframe == 90) {
              if (_this.trg.fire-- > 0) {
                _this.trg.d.d.gotoAndStop(28);
              }
            }
            if (
              (_this.trg.d.d._currentframe > 36 &&
                _this.trg.d.d._currentframe < 49) ||
              (_this.trg.d.d._currentframe > 60 &&
                _this.trg.d.d._currentframe < 75)
            ) {
              _this.trg.d.d.nextFrame();
              _this.trg.d.d.nextFrame();
            }
          }
      }
      if (_this.altboss) {
        this.sideflip((0.5 - (_this.trg.e % 2)) * 10);
      }
      break;
    case 68:
      this.trgnextd();
      _this.slug = _this.trg;
      if (_this.trg.specoz == 12 && _this.fra % 13 == 0) {
        _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
        _this.trg2._xscale *= 1.6;
        _this.trg2._yscale = _this.trg2._xscale;
        colorit(_this.trg2, 0.6, 1.5, 0.2, 100, 120, 0);
      }
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          randrun();
          if (_this.trg.specoz != 12 || random(3) == 0) {
            if (random(23) == 0) {
              _this.trg.d.gotoAndStop(10);
            }
            if (random(20) == 0) {
              _this.trg.d.gotoAndStop(5 + random(2));
            }
            if (_this.altboss) {
              if (
                Math.abs(
                  _this.trg.yp - 20 - _this.player.yp - _this.player.ybew * 5
                ) < 20
              ) {
                _this.trg.d.gotoAndStop(12);
              }
              if (
                Math.abs(
                  _this.trg.xp - _this.player.xp - _this.player.xbew * 5
                ) < 40 &&
                _this.trg.yp < _this.player.yp
              ) {
                _this.trg.d.gotoAndStop(13);
              }
            }
          }
          break;
        case 13:
          if (
            _this.trg.d.d._currentframe > 10 &&
            _this.trg.d.d._currentframe < 50
          ) {
            if (_this.trg.d.d._currentframe == 12) {
              _this.trg.ploo = _this.trg.ploo + 1;
            }
            let f8 = 15 - random(2) * 30;
            _this.trg.yp -= 20;
            _this.trg.xp -= f8;
            this.lasershow(_this.trg);
            _this.trg.yp += 20;
            _this.trg.xp += f8;
            _this.trg.xpp = 0;
            _this.trg.ypp = 1;
          }
          break;
        case 12:
          if (
            _this.trg.d.d._currentframe > 10 &&
            _this.trg.d.d._currentframe < 50
          ) {
            if (_this.trg.d.d._currentframe == 12) {
              _this.trg.ploo = _this.trg.ploo + 1;
            }
            _this.trg.yp -= 20;
            this.lasershow(_this.trg);
            _this.trg.yp += 20;
            _this.trg.xpp = 1 - random(2) * 2;
            _this.trg.ypp = 0;
          }
          break;
        case 11:
          if (_this.trg.d.d._currentframe == 28) {
            if (_this.altboss) {
              let z = 0;
              while (z < 10) {
                let f1 = crand(random(100));
                let f2 = this.crand();
                _this.trg2 = this.parc(
                  "bloo",
                  _this.trg.xp + f1,
                  _this.trg.yp + f2
                );
                _this.trg2._xscale *= 2;
                _this.trg2._yscale = _this.trg2._xscale;
                z++;
              }
              if (_this.trg.specoz) {
                green(false, false);
                green(false, true);
                green(false, true);
                _this.trg.ploo = _this.trg.ploo + 1;
              } else {
                quadf(_this.trg.xp, _this.trg.yp, 10, 1);
              }
            } else {
              this.cirf(_this.trg.xp, _this.trg.yp, 10, 12);
            }
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 100);
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 38) {
            if (_this.altboss) {
              if (_this.trg.specoz) {
                green(false, true);
                green(false, true);
                _this.trg.ploo = _this.trg.ploo + 1;
              } else {
                quadf(_this.trg.xp, _this.trg.yp, 10, 1);
              }
            } else {
              this.cirf(_this.trg.xp, _this.trg.yp, 10, 8);
            }
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav", 80);
          }
          break;
        case 6:
          if (
            _this.trg.d.d._currentframe > 30 &&
            _this.trg.d.d._currentframe < 40
          ) {
            if (_this.trg.d.d._currentframe == 31) {
              _root.soundy("Sink Drain Gurgle.wav", 100);
              if (_this.trg.specoz == 3) {
                spaw(_this.trg.xp, _this.trg.yp, 50, 23);
                spaw(_this.trg.xp, _this.trg.yp, 50, 23);
              }
            }
            let f1 = crand(random(100));
            let f2 = this.crand();
            if (_this.altboss) {
              f1 *= 1.5;
              f2 *= 1.5;
            }
            _this.trg2 = this.parc(
              "bloo",
              _this.trg.xp + f1,
              _this.trg.yp + f2
            );
            _this.trg2._xscale *= 2;
            _this.trg2._yscale = _this.trg2._xscale;
            if (!_this.altboss) {
              colorit(_this.trg2, 0.6, 1.5, 0.2, 100, 120, 0);
            } else {
              _this.trg2._xscale *= 1.3;
              _this.trg2._yscale *= 1.3;
            }
          }
          break;
        case 10:
          if (_this.trg.d.d._currentframe == 30) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              10000
            );
            if (_this.enf > 0) {
              _this.enf = 0.03333333333333333;
              _this.trg.xbew = (0 - _this.xenf) * _this.enf;
              _this.trg.ybew = (0 - _this.yenf) * _this.enf;
            }
          }
      }
      _this.trg.bh = _this._loc00_ =
        (_this.trg.d._currentframe != 10 || _this.trg.d.d._currentframe < 29) &&
        (_this.trg.d._currentframe != 11 || _this.trg.d.d._currentframe > 27);
      if (_this._loc00_) {
        if (_this.trg.specoz == 12) {
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
        } else {
          _this.trg.xbew *= 0.6;
          _this.trg.ybew *= 0.6;
        }
      }
      _this.trg.flyby = !_this.trg.bh;
      f3 = Math.min(
        3,
        4 - Math.round((_this.trg.hp / _this.hps[_this.trg.s]) * 3 + 0.45)
      );
      if (_this.trg.specoz == 23) {
        f3 = Math.min(
          3,
          4 - Math.round((_this.trg.hp / _this.hps[_this.trg.s]) * 5 + 0.45)
        );
        if (_this.altboss) {
          if (_this.ashut < 5 && _root.slugeye > 2) {
            _root.slugeye = _root.slugeye - 1;
            _this.trg.ploo--;
          }
          f3 = -3 + _this.trg.ploo;
        }
      }
      if (_this.altboss) {
        _this.f1 = random(10);
      } else {
        _this.f1 = 21 + random(10);
      }
      splater(
        _this.trg.xp + this.crand() * 2,
        _this.trg.yp + crand(random(20)) + 8,
        _this.f1,
        Math.random() * 0.5 + 0.2
      );
      if (
        ((_root.slugeye < f3 &&
          _this.fra > 30 &&
          _this.trg.specoz != 13 &&
          (!_this.altboss || _this.trg.specoz == 23)) ||
          _this.trg.specoz == 13 ||
          (_this.altboss && _this.trg.specoz != 23)) &&
        _root.slugeye < 3
      ) {
        _root.slugeye = _root.slugeye + 1;
        _this.f1 = crand(30);
        _this.f2 = this.crand();
        _root.soundy("plop.wav");
        _this.noet = true;
        _this.trg2 = this.create(
          _this.trg.xp + _this.f1,
          _this.trg.yp + _this.f2,
          0,
          _this.f1 * 0.4,
          _this.f2 * 0.4,
          0,
          25
        );
        _this.noet = false;
        _this.trg2.alt = true;
        _this.trg2.fra = -100;
        _this.trg2.d.gotoAndStop(9);
        if (_this.trg.specoz == 23) {
          _this.trg2.hp *= 5;
        } else {
          _this.trg2.imba = true;
        }
      }
      if (_this.altboss) {
        let z = 0;
        while (z < 15) {
          _this.trg2 = _this.trg.d.d["s" + z];
          colorit(_this.trg2, 0.7, 0.1, 0.1, 30, 0, 0);
          z++;
        }
      }
      break;
    case 67:
      _this.trg.ggh = true;
      _this.duked = 65 + Math.sin(_this.fra * 0.02) * 5;
      _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
      if (_this.trg.xp == 580) {
        _this.trg.xbew = -1;
      }
      if (_this.trg.xp == 60) {
        _this.trg.xbew = 1;
      }
      _this.trg.yp = Math.min(410, Math.max(180, _this.trg.yp));
      if (_this.trg.yp == 410) {
        _this.trg.ybew = -1;
      }
      if (_this.trg.yp == 180) {
        _this.trg.ybew = 1;
      }
      _this.duke = _this.trg;
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (_this.trg.xbew > 0) {
        _this.xenf = 1;
      } else {
        _this.xenf = -1;
      }
      if (_this.trg.ybew >= 0.1) {
        _this.yenf = 1;
      } else {
        _this.yenf = -1;
      }
      if (_this.altboss) {
        _this.f1 = 0.8;
        if (_this.trg.specoz == 19) {
          _this.f1 = 1.1;
        } else if (_this.trg.specoz) {
          _this.f1 = 0.5;
        } else {
          _this.f1 = 0.8;
        }
      } else {
        _this.f1 = 0.4;
      }
      _this.trg.xbew += _this.xenf * _this.f1;
      _this.trg.ybew += _this.yenf * _this.f1;
      if (_this.trg.specoz == 6) {
        _this.trg.xbew *= 0.9;
        _this.trg.ybew *= 0.9;
      }
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          if (
            random(40) == 0 &&
            _this.dukes + _this.ashut < 9 &&
            _this.trg.specoz != 19
          ) {
            _this.trg.d.gotoAndStop(5);
          } else if (
            random(70) == 0 &&
            _this.ashut - _this.dukes * 0.5 < 5 &&
            _this.trg.specoz != 19
          ) {
            _this.trg.d.gotoAndStop(6);
          } else if (
            (random(45) == 0 &&
              _this.dukes > 4 &&
              _this.ashut - _this.dukes < 5 &&
              _this.trg.specoz != 5) ||
            ((_this.trg.specoz == 5 || _this.altboss) && random(70) == 0) ||
            (_this.trg.specoz == 19 && random(20) == 0)
          ) {
            _this.trg.d.gotoAndStop(7);
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 20) {
            _root.soundy("Monster_Grunt_2_" + abr() + ".mp", 100);
            _this.trg2 = [];
            let f1 = 5;
            if (_this.trg.specoz == 16) {
              _this.trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp + 20,
                0,
                0,
                0,
                0,
                25
              );
              _this.trg2.duke = true;
            } else {
              _this.trg2.push(
                this.create(
                  _this.trg.xp + f1 * 2,
                  _this.trg.yp + 20,
                  0,
                  0,
                  0,
                  0,
                  18
                )
              );
              _this.trg2.push(
                this.create(_this.trg.xp, _this.trg.yp + 20, 0, 0, 0, 0, 18)
              );
              if (_this.altboss) {
                if (random(2) == 0) {
                  this.boil(true);
                }
              } else {
                _this.trg2.push(
                  this.create(
                    _this.trg.xp - f1 * 2,
                    _this.trg.yp + 20,
                    0,
                    0,
                    0,
                    0,
                    18
                  )
                );
              }
              for (let z in _this.trg2) {
                _this.trg2[z].die = true;
                _this.trg2[z].duke = true;
                _this.trg2[z].fra = -20;
              }
            }
          }
          break;
        case 6:
          if (_this.trg.d.d._currentframe == 18) {
            _root.soundy("Monster_Grunt_1_" + abr() + ".mp", 100);
            _this.trg2 = [];
            _this.f5 = 5;
            if (_this.altboss) {
              this.bossfire(10, true);
            } else {
              if (_this.trg.specoz == 6) {
                _this.trg2.push(
                  this.create(_this.trg.xp, _this.trg.yp + 20, 0, 0, 0, 0, 61)
                );
              } else if (_this.trg.specoz == 5) {
                _this.trg2.push(
                  this.create(_this.trg.xp, _this.trg.yp + 20, 0, 0, 0, 0, 80)
                );
              } else {
                _this.trg2.push(
                  this.create(_this.trg.xp, _this.trg.yp + 20, 0, 0, 0, 0, 18)
                );
              }
              for (let z in _this.trg2) {
                _this.trg2[z].fra = -20;
                _this.trg2[z].die = true;
                if (!_this.trg.specoz) {
                  _this.trg2[z].d._xscale = _this.trg2[z].d._yscale = 125;
                  _this.trg2[z].hp *= 1.8;
                }
              }
            }
          }
          break;
        case 7:
          if ((_this.trg.send = _this.trg.d.d._currentframe == 17)) {
            if (_this.trg.specoz == 5) {
              this.cirf(_this.trg.xp, _this.trg.yp, 7, 8);
              _this.trg.send = false;
            } else if (_this.altboss) {
              this.cirf(_this.trg.xp, _this.trg.yp, 8, 8);
            }
            _root.soundy("Monster_Grunt_4_" + abr() + ".mp", 100);
          }
      }
      _this.dukes = 0;
  }
}
function devl() {
  _this.trg._visible = _this.trg.d._currentframe != 1;
  if (_this.trg.d._currentframe < 8) {
    _this.trg.d.gotoAndStop(9);
    _this.trg.xp = _this.player.xp;
    _this.trg.yp = _this.player.yp;
    _this.trg2 = _this.trg.trg2;
    _this.siz = 111;
    if (
      enfcheck(
        _this.trg.xp,
        _this.trg.yp,
        _this.trg2.xp,
        _this.trg2.yp,
        _this.siz
      )
    ) {
      _this.enf = (_this.siz - _this.enf) / _this.enf;
      _this.xenf *= _this.enf;
      _this.yenf *= _this.enf;
      _this.trg.xp += _this.xenf;
      _this.trg.yp += _this.yenf;
    }
    if (_this.ashut < 4 && random(2) == 0) {
      let f1 = 55.1;
      if (_this.trg.eternal) {
        if (_this.lars++ > 2) {
          _this.lars = 0;
          f1 = 81;
        }
      }
      _this.trg2 = spaw(_this.player.xp, _this.player.yp, 200, f1);
      if (_this.trg.eternal && f1 == 81) {
        _this.trg2._xscale = _this.trg2._yscale = 70;
        _this.trg2.mhp = _this.trg2.hp *= 0.3;
        _this.trg2.nobar = true;
      }
    }
    if (random(2) == 0) {
      _root.soundy("satan stomp " + random(3) + ".mp3");
    }
  }
  if (_this.trg.trg3 != undefined) {
    if (_this.trg.hp < _this.trg.mhp) {
      _this.trg.trg3.hp -= _this.trg.mhp - _this.trg.hp;
      _this.trg.hp = _this.trg.mhp;
      if (_this.trg.trg3.hp < 0) {
        _this.trg.trg3.done = true;
        _this.trg.done = true;
        momkill();
      }
    }
  }
  _this.trg.bh =
    _this.trg.d._currentframe == 9 &&
    _this.trg.d.d._currentframe > 27 &&
    _this.trg.d.d._currentframe < 62;
  if (_this.trg.d._currentframe == 9 && _this.trg.d.d._currentframe == 26) {
    _this.trg.dmg = 300;
    gosplash();
    _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav");
  }
}
function smarties() {
  switch (_this.trg.s) {
    case 84:
      if (!_this.trg.eternal) {
      }
      if (!_this.trg.app) {
        _this.trg.app = true;
        _root.soundy("satan appear.mp");
      }
      if (_this.trg.d._currentframe == 3 && _this.trg.d.d._currentframe == 17) {
        _root.soundy("satan blast.mp", 50);
      }
      if (_this.trg.d._currentframe == 8 && _this.trg.d.d._currentframe == 83) {
        _root.soundy("satan grow.mp", 50);
      }
      _this.trg.ybew *= 0.8;
      _this.trg.xbew *= 0.8;
      this.trgnextd();
      _this.trg.alter = 2;
      if (_this.trg.pow == 5) {
        devl();
      } else {
        if (_this.trg.pow == undefined) {
          _this.trg.pow = 1;
          _this.trg.fire = 0;
          if (_this.trg.pow < 3) {
            _this.trg.bh = false;
            _this.trg.d.gotoAndStop(1);
            _this.trg.til = this.ingrid(_this.trg.xp, _this.trg.yp + 80);
            _this.levz[_this.trg.til] = 1;
          }
        }
        _this.sati = _this.trg;
        switch (_this.trg.pow) {
          case 1:
            _this.levz[_this.trg.til] = 2;
            if (_this.trg.fire++ > 130) {
              _this.trg.fire = 0;
              _this.trg.pow = _this.trg.pow + 1;
              _this.xenf = 50;
              _this.yenf = 110;
              this.create(
                _this.trg.xp,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                81
              );
              this.create(
                _this.trg.xp + _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                55.1
              );
              this.create(
                _this.trg.xp - _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                55.1
              );
              _root.soundy("satan blast.mp");
              _root.soundy("summonsound.wav", 200);
            }
            if (_this.plh) {
              _this.plh = false;
              _this.trg.d.gotoAndStop(2);
            }
            break;
          case 2:
            if (_this.helps == 1) {
              if (_this.trg.fire++ > 25) {
                if (_this.trg.d._currentframe != 3) {
                  _root.soundy("satan rise up.mp");
                  _this.trg.d.gotoAndStop(3);
                }
                if (_this.trg.d.d._currentframe > 54) {
                  _this.trg.pow = _this.trg.pow + 1;
                }
              }
            }
            _this.levz[_this.trg.til] = 1;
            break;
          case 3:
            _this.mhelps = 1;
            _this.trg.bh = true;
            _this.levz[_this.trg.til] = 0;
            if (_this.trg.d._currentframe < 4) {
              _this.trg.d.gotoAndStop(4);
            }
            _this.trg.yp = Math.max(165, _this.trg.yp);
            switch (_this.trg.d._currentframe) {
              case 4:
                _this.yenf =
                  Math.max(305, _this.player.yp * 0.93) - _this.trg.yp - 140;
                _this.xenf = _this.player.xp - _this.trg.xp;
                let xenf1 =
                  _this.player.xp + _this.player.xbew * 25 - _this.trg.xp;
                if (
                  (_this.xenf * xenf1 < 0 &&
                    _this.yenf > -70 &&
                    (_this.trg.llo != 6 || random(10) == 0)) ||
                  (_this.trg.llo == 7 &&
                    Math.abs(_this.xenf) < 40 &&
                    random(3) == 0)
                ) {
                  _this.trg.d.gotoAndStop(6);
                  _root.soundy("satan charge up.mp");
                  _this.trg.llo = 6;
                } else if (
                  random(15) == 0 ||
                  (random(3) == 0 && (_this.trg.llo == 7 || _this.trg.llo == 6))
                ) {
                  _this.trg.d.gotoAndStop(5);
                  _this.trg.llo = 5;
                } else if (Math.abs(_this.xenf) > 100 || _this.yenf < 0) {
                  _this.trg.xbew += absmax(_this.xenf, 15) * 0.1;
                  _this.trg.ybew += absmax(_this.yenf, 7) * 0.1;
                } else if (
                  Math.abs(_this.xenf) > 40 &&
                  Math.abs(xenf1) < 200 &&
                  _this.yenf >= 0
                ) {
                  _this.trg.d.gotoAndStop(7);
                  _root.soundy("satan charge up.mp", 50);
                  _this.trg.llo = 7;
                }
                break;
              case 5:
                if (_this.trg.eternal) {
                  _this.yenf =
                    Math.max(305, _this.player.yp * 0.93) - _this.trg.yp - 140;
                  _this.xenf = _this.player.xp - _this.trg.xp;
                  _this.trg.xbew += absmax(_this.xenf, 15) * 0.03;
                  _this.trg.ybew += absmax(_this.yenf, 7) * 0.03;
                }
                if (_this.trg.d.d._currentframe == 56) {
                  _this.enf = enfcheck(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.player.xp + _this.player.xbew * 5,
                    _this.player.yp + _this.player.ybew * 5,
                    1000
                  );
                  if (_this.enf > 300 && random(3) != 0) {
                    _this.trg.d.d.gotoAndStop(12);
                  }
                }
                if (
                  _this.trg.d.d._currentframe == 15 ||
                  _this.trg.d.d._currentframe == 36
                ) {
                  _this.enf = enfcheck(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.player.xp + _this.player.xbew * 5,
                    _this.player.yp + _this.player.ybew * 5,
                    1000
                  );
                  if (_this.trg.d.d._currentframe == 15) {
                    _this.f1 = true;
                    _root.soundy("satan spit.mp", 100);
                  } else {
                    _this.f1 = 2;
                    _root.soundy("satan spit 2.mp", 100);
                  }
                  if (_this.enf > 300) {
                    _this.enf = -10 / _this.enf;
                  } else {
                    _this.enf = -8.2 / _this.enf;
                  }
                  _this.xenf *= _this.enf;
                  _this.yenf *= _this.enf;
                  shots(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.xenf,
                    _this.yenf,
                    _this.f1
                  );
                }
                break;
              case 6:
                if (
                  _this.trg.d.d._currentframe > 20 &&
                  _this.trg.d.d._currentframe < 48
                ) {
                  _this.trg.xpp = 0;
                  _this.trg.ypp = 1;
                  let v1 = 20;
                  this.lasershow(_this.trg);
                  _this.trg.xp -= v1;
                  this.lasershow(_this.trg);
                  _this.trg.xp += v1 + v1;
                  this.lasershow(_this.trg);
                  _this.trg.xp -= v1;
                }
                break;
              case 7:
                if (
                  _this.trg.d.d._currentframe > 18 &&
                  _this.trg.d.d._currentframe < 46
                ) {
                  _this.trg.xpp = 0;
                  _this.trg.ypp = 1;
                  let v1 = 85;
                  _this.trg.xp -= v1;
                  this.lasershow(_this.trg);
                  _this.trg.xp += v1 + v1;
                  this.lasershow(_this.trg);
                  _this.trg.xp -= v1;
                }
            }
            break;
          case 4:
            if (_this.trg.app != 2) {
              _this.trg.app = 2;
              _root.soundy("satan hurt.mp");
            }
            devl();
            if (
              _this.trg.trg2 == undefined &&
              _this.trg.d.d._currentframe == 50 &&
              _this.trg.d._currentframe == 9
            ) {
              _this.trg.trg2 = _this._loc00_ = this.create(
                _this.player.xp,
                _this.player.yp,
                0,
                0,
                0,
                0,
                84
              );
              _this.trg2 = _this._loc00_;
              _this.trg2.pow = 5;
              _this.trg2._visible = false;
              _this.trg2.trg3 = _this._loc00_ = _this.trg;
              _this.trg2.trg2 = _this._loc00_;
            }
        }
      }
      break;
    case 83:
      if (
        _this.fra % 3 == 0 &&
        _this.trg.specoz == 23 &&
        (_this.trg.greeny || _this.trg.hp < _this.trg.mhp * 0.5) &&
        random(4) != 0
      ) {
        _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
        _this.trg2._xscale *= 1.2;
        _this.trg2._yscale = _this.trg2._xscale;
        _this.trg2.gotoAndStop(20);
        if (_this.trg.greeny) {
          colorit(_this.trg2, 0, 2, 0, 0, 40, 0);
        } else {
          _this.trg2.gotoAndStop(90);
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (_this.trg.specoz == 23 && !_this.trg.greeny) {
        _this.trg.hp += 0.03 / (1 + _this.fra * 0.001);
      }
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
          randrun();
          this.sideflip(_this.trg.xbew);
          let f1 = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          if (
            (random(30) == 0 && f1 < 200) ||
            (_this.trg.specoz == 23 && !_this.trg.greeny && random(50) == 0)
          ) {
            _this.trg.d.gotoAndStop(7);
            if (_this.trg.specoz == 23 && !_this.trg.greeny) {
              _this.trg.xo = 0;
              _this.trg.yo = 0;
            }
          } else if (
            random(120) == 0 ||
            (Math.abs(_this.yenf) < 20 && random(80) == 0)
          ) {
            _root.soundy("Monster_Yell_A_" + random(3) + ".mp", 100);
            this.sideflip(_this.player.xp - _this.trg.xp);
            _this.trg.d.gotoAndStop(5);
            _this.trg.xpp = _this.trg.xp;
            _this.trg.ypp = _this.trg.yp;
            _this.trg.gogo = 3;
            _this.trg.bh = _this._loc00_ = true;
            _this.trg._visible = _this._loc00_;
          }
          break;
        case 7:
          if (_this.trg.specoz == 23 && !_this.trg.greeny) {
            if (
              _this.trg.d.d._currentframe >= 13 &&
              _this.trg.d.d._currentframe < 31
            ) {
              _this.enf = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp + _this.player.xbew * 8,
                _this.player.yp + _this.player.ybew * 8,
                10000
              );
              f1 = true;
              _this.enf = enfget(_this.xenf, _this.yenf);
              _this.enf = -9.2 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              if (_this.trg.d.d._currentframe == 13) {
                _root.soundy("Blood_Laser" + random(2) + ".mp");
              } else {
                _this.xenf *= 0.3;
                _this.yenf *= 0.3;
                _this.xenf += _this.trg.xo * 0.7;
                _this.yenf += _this.trg.yo * 0.7;
              }
              _this.trg.xo = _this.xenf;
              _this.trg.yo = _this.yenf;
              this.ffmo(
                _this.trg.xp,
                _this.trg.yp + 5,
                0,
                _this.xenf * 1.4,
                _this.yenf * 1.4,
                0,
                9,
                _this.trg.s,
                true
              );
            }
          } else if (_this.trg.d.d._currentframe == 13) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp + _this.player.xbew * 5,
              _this.player.yp + _this.player.ybew * 5,
              1000
            );
            f1 = true;
            _root.soundy("Monster_Grunt_2_" + abr() + ".mp", 100);
            _this.enf = enfget(_this.xenf, _this.yenf);
            _this.enf = -9.2 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
            shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, f1);
          }
          break;
        case 6:
          _this.trg.xbew = _this.trg.d._xscale * 0.18;
          if (_this.trg.specoz == 23 && !_this.trg.greeny && random(100) == 0) {
            _this.trg.gogo--;
          }
          if (_this.trg.gogo > 0) {
            f1 = false;
            if (_this.trg.xp > 619) {
              _this.trg.xp = 10;
              f1 = true;
            } else if (_this.trg.xp < 21) {
              _this.trg.xp = 630;
              f1 = true;
            }
            if (f1) {
              f1 = 95;
              _this.trg.yp += f1;
              if (_this.trg.yp > 430) {
                _this.trg.yp -= f1 * 3;
              }
              _this.trg.gogo--;
            }
          } else if ((_this.trg.xp - _this.trg.ypp) * _this.trg.xbew > 0) {
            _this.trg.d.gotoAndStop(1);
          }
      }
      break;
    case 82:
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          randrunx(1);
          this.sideflip(_this.trg.xbew);
          walkframe(3);
          if (random(40) == 0) {
            _this.trg.d.gotoAndStop(5);
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 9) {
            this.green();
            _root.soundy("heartout.wav", 100);
          }
      }
      break;
    case 64:
      _this.b1 = _this.allets;
      _this.allets = false;
      _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
      if (_this.trg.specoz == 17) {
        _this.spidboss = true;
      }
      if (_this.trg.specoz == 23 && !_this.trg.whut) {
        _this.trg.hp += 50 / (100 + _this.fra);
      }
      if (_this.fra % 3 == 0 && _this.trg.specoz != 17) {
        splater(
          _this.trg.xp + this.crand(),
          _this.trg.yp + crand(random(20)),
          _this.trg.spl + 1 + random(10),
          Math.random() * 0.5 + 0.4
        );
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (_this.trg.specoz == 23) {
        _this.f1 = 0.65;
      } else {
        _this.f1 = 0.5;
      }
      if (
        (_this.trg.whut || _this.trg.hp / _this.trg.mhp < _this.f1) &&
        _this.trg.d._currentframe < 7
      ) {
        if (!_this.trg.whut) {
          _this.trg.gosplash = true;
          _this.trg.whut = true;
          if (_this.trg.specoz == 23) {
            _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 0, 83);
            _this.trg2.specoz = 23;
            _this.trg2.greeny = true;
            _this.trg2.hp = _this.trg.hp * 0.65;
            _this.trg2.mhp = _this.trg.mhp;
            this.speco(_this.trg2);
          }
        }
        _this.trg.d.gotoAndStop(7);
      }
      if (_this.fra % 7 == 0) {
        _this.trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp);
        _this.trg2._xscale *= 2;
        _this.trg2._yscale = _this.trg2._xscale;
        if (_this.trg.specoz == 17) {
          colorit(_this.trg2, 0, 0, 0, 235, 235, 235);
        } else {
          colorit(_this.trg2, 0, 2, 0, 0, 40, 0);
        }
      }
      _this.trg.f10 = false;
      switch (_this.trg.d._currentframe) {
        case 7:
          _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
          randrun();
          if (random(40) == 0 && _this.ashut < 4) {
            _this.trg.d.gotoAndStop(9);
          } else if (random(20) == 0) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                230
              )
            ) {
              this.sideflip(_this.player.xp - _this.trg.xp);
              _this.trg.d.gotoAndStop(8);
            }
          }
          break;
        case 1:
        case 2:
          randrunx(1);
          this.sideflip(_this.trg.xbew);
          walkframe(3);
          if (random(40) == 0 && _this.ashut < 4) {
            _this.trg.d.gotoAndStop(6);
          } else if (random(20) == 0) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                230
              )
            ) {
              this.sideflip(_this.player.xp - _this.trg.xp);
              _this.trg.d.gotoAndStop(5);
            }
          }
          break;
        case 6:
          if (_this.trg.d.d._currentframe == 25) {
            _root.soundy("Monster_Grunt_5.mp", 100);
            _this.xenf = crand(10);
            _this.yenf = this.crand();
            if (_this.trg.specoz == 17) {
              this.create(
                _this.trg.xp + _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                29.1
              );
            } else {
              _this.trg2 = this.create(
                _this.trg.xp + _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                23 + random(2) * 8
              );
              _this.trg3 = this.create(
                _this.trg.xp - _this.xenf,
                _this.trg.yp - _this.yenf,
                0,
                0,
                0,
                0,
                23 + random(2) * 8
              );
              if (_this.trg.specoz == 23) {
              }
            }
            _root.soundy("summonsound.wav", 120);
          }
          break;
        case 9:
          if (_this.trg.specoz == 17) {
            if (_this.trg.d.d._currentframe == 19) {
              this.boil();
              _root.soundy("Wheezy_Cough_" + random(3) + ".mp", 100);
            }
          } else if (_this.trg.d.d._currentframe == 25) {
            _root.soundy("Wheezy_Cough_" + random(3) + ".mp", 100);
            _this.xenf = crand(10);
            _this.yenf = this.crand();
            _this.trg2 = this.create(
              _this.trg.xp + _this.trg.d._xscale * 0.4 + _this.xenf,
              _this.trg.yp + _this.yenf,
              0,
              0,
              0,
              0,
              18
            );
            _this.trg3 = this.create(
              _this.trg.xp + _this.trg.d._xscale * 0.4 - _this.xenf,
              _this.trg.yp - _this.yenf,
              0,
              0,
              0,
              0,
              18
            );
            _this.trg3.die = _this._loc00_ = true;
            _this.trg2.die = _this._loc00_;
            _this.trg3.fra = _this._loc00_ = -20;
            _this.trg2.fra = _this._loc00_;
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 22) {
            _this.trg.f10 = true;
          }
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 30) {
              if (_this.trg.firee-- > 0) {
                _this.trg.d.d.gotoAndStop(16);
              }
            }
            if (_this.trg.d.d._currentframe == 3) {
              _this.trg.firee = 4;
            }
          }
          break;
        case 8:
          if (_this.trg.d.d._currentframe == 9) {
            _this.trg.f10 = true;
          }
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 23) {
              if (_this.trg.firee-- > 0) {
                _this.trg.d.d.gotoAndStop(7);
              }
            }
            if (_this.trg.d.d._currentframe == 3) {
              _this.trg.firee = 1;
            }
          }
      }
      if (_this.trg.f10) {
        if (_this.trg.specoz == 17) {
          _this.trg.s = 11;
          this.cirf(_this.trg.xp, _this.trg.yp - 50, 8, 6);
          _this.trg.s = 64;
        } else {
          this.green();
        }
      }
      _this.allets = _this.b1;
      break;
    case 63:
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (
        (_this.trg.whut || _this.trg.hp / _this.trg.mhp < 0.3) &&
        _this.trg.d._currentframe < 8
      ) {
        if (!_this.trg.whut) {
          _this.trg.gosplash = true;
          _this.trg.whut = true;
          _this.trg.fire = 0;
        }
        _this.trg.d.gotoAndStop(8);
      }
      switch (_this.trg.d._currentframe) {
        case 8:
        case 9:
          this.firemode(300, 8);
          splater(
            _this.trg.xp,
            _this.trg.yp,
            _this.trg.spl + 1 + random(10),
            Math.random() * 0.6 + 0.6
          );
          if (_this.trg.fire <= 0) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1000
            );
            _this.enf = 0.5 / _this.enf;
            _this.trg.xbew -= _this.xenf * _this.enf;
            _this.trg.ybew -= _this.yenf * _this.enf;
          }
          break;
        case 1:
        case 2:
          randrun();
          if (
            (random(40) == 0 ||
              (Math.abs(_this.trg.yp - _this.player.yp) < 20 &&
                _this.ashut < 3 &&
                _this.trg.specoz == 23)) &&
            (_this.ashut < 3 || _this.trg.specoz)
          ) {
            _this.trg.d.gotoAndStop(5);
          } else if (
            ((Math.abs(_this.trg.yp - _this.player.yp) < 20 &&
              (Math.abs(_this.trg.xp - _this.player.xp) > 100 ||
                _this.trg.specoz != 23)) ||
              (_this.trg.specoz == 7 && random(4) == 0)) &&
            random(5) == 0 &&
            _this.trg.speczo != 23
          ) {
            _root.soundy("Monster_Yell_A_" + random(3) + ".mp", 100);
            this.sideflip(_this.player.xp - _this.trg.xp);
            _this.trg.d.gotoAndStop(6);
            if (_this.trg.specoz == 23) {
              _this.trg.xpp = _this.player.xp;
              _this.trg.ypp = _this.player.yp;
              if (_this.player.xp < _this.trg.xp) {
                _this.trg.xpp -= 100;
              } else {
                _this.trg.xpp += 100;
              }
              _this.trg.xpp = Math.min(480, Math.max(200, _this.trg.xpp));
              _this.trg.gogo = true;
            } else {
              _this.trg.xpp = _this.trg.xp;
              _this.trg.ypp = _this.trg.yp;
              _this.trg.gogo = true;
            }
          }
          break;
        case 5:
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 5) {
              _this.trg.fire = 0;
              if (_this.ashut > 1 + random(2)) {
                _this.trg.fire = 1 + random(30);
              }
            }
            if (
              _this.trg.d.d._currentframe == 25 ||
              ((_this.trg.d.d._currentframe == 27 ||
                _this.trg.d.d._currentframe == 29) &&
                _this.trg.fire != 0)
            ) {
              _root.soundy("Monster_Grunt_5.mp", 100);
              if (_this.trg.fire != 0) {
                _this.trg.s = 11;
                cirf(
                  _this.trg.xp,
                  _this.trg.yp - 33,
                  8,
                  3,
                  (_this.trg.fire + _this.trg.d.d._currentframe) * 0.2
                );
                _this.trg.s = 63;
              } else {
                _this.xenf = crand(50);
                _this.yenf = this.crand();
                _this.b1 = _this.allets;
                _this.allets = false;
                _this.trg2 = this.create(
                  _this.trg.xp + _this.xenf,
                  _this.trg.yp + _this.yenf,
                  0,
                  _this.xenf * 0.2,
                  _this.yenf * 0.2,
                  0,
                  14
                );
                _this.trg2.fra -= 20;
                _this.trg2.specoz = 23;
                this.speco(_this.trg2);
                _this.trg2.hp -= 3;
                _this.trg3 = this.create(
                  _this.trg.xp + _this.yenf,
                  _this.trg.yp - _this.xenf,
                  0,
                  _this.yenf * 0.2,
                  (0 - _this.xenf) * 0.2,
                  0,
                  14.1
                );
                _this.trg3.fra -= 20;
                _this.trg3.specoz = 23;
                _this.trg3.hp -= 3;
                this.speco(_this.trg3);
                if (_this.ashut < 3) {
                  _this.trg4 = this.create(
                    _this.trg.xp - _this.xenf,
                    _this.trg.yp - _this.yenf,
                    0,
                    (0 - _this.xenf) * 0.2,
                    (0 - _this.yenf) * 0.2,
                    0,
                    14
                  );
                  _this.trg4.fra -= 20;
                  _this.trg4.specoz = 23;
                  this.speco(_this.trg4);
                  _this.trg4.hp -= 3;
                  if (_this.ashut < 2) {
                    _this.trg5 = this.create(
                      _this.trg.xp - _this.yenf,
                      _this.trg.yp + _this.xenf,
                      0,
                      (0 - _this.yenf) * 0.2,
                      _this.xenf * 0.2,
                      0,
                      14 + random(2) * 0.1
                    );
                    _this.trg5.fra -= 20;
                    _this.trg5.specoz = 23;
                    this.speco(_this.trg5);
                    _this.trg5.hp -= 3;
                  }
                }
                _this.allets = _this.b1;
                _root.soundy("summonsound.wav", 80);
              }
            }
          } else if (_this.trg.d.d._currentframe == 25) {
            _root.soundy("Monster_Grunt_5.mp", 100);
            if (_this.trg.specoz == 7) {
              _this.trg.s = 11;
              this.cirf(_this.trg.xp, _this.trg.yp - 33, 8, 6);
              _this.trg.s = 63;
            } else {
              _this.xenf = crand(50);
              _this.yenf = this.crand();
              this.create(
                _this.trg.xp + _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                14
              );
              _root.soundy("summonsound.wav", 80);
            }
          }
          break;
        case 7:
          if (_this.trg.specoz) {
            _this.trg.ybew -= absmax(
              (_this.trg.yp - _this.player.yp) / 100,
              0.4
            );
          }
          _this.trg.xbew = _this.trg.d._xscale * 0.18;
          if (!_this.trg.gogo || _this.trg.specoz == 23) {
            if ((_this.trg.xp - _this.trg.xpp) * _this.trg.xbew > 0) {
              if (_this.trg.xp < 520 && _this.trg.xp > 150) {
                if (_this.trg.specoz == 23) {
                  _this.trg.d.gotoAndStop(5);
                  _this.trg.d.d.gotoAndStop(19);
                  _this.trg.fire = random(50) + 1;
                } else {
                  _this.trg.d.gotoAndStop(1);
                }
              } else if (_this.trg.fire-- < 0) {
                _this.trg.fire = 10;
                _this.trg.gogo = true;
                _this.trg.xpp = 300;
              }
            }
          }
          if (_this.trg.gogo) {
            if (_this.trg.xp > 619) {
              _this.trg.xp = 0;
              _this.trg.gogo = false;
            } else if (_this.trg.xp < 21) {
              _this.trg.xp = 640;
              _this.trg.gogo = false;
            }
          }
      }
      break;
    case 62:
      let f14 = 33;
      if (_this.altboss) {
        if (_this.trg.d._currentframe == 6 || _this.trg.d._currentframe == 10) {
          _this.trg.d._yscale = _this._loc00_ = 85;
          _this.trg.d._xscale = _this._loc00_;
        } else {
          _this.trg.d._yscale = _this._loc00_ = 65;
          _this.trg.d._xscale = _this._loc00_;
        }
        f14 = 26;
      }
      _this.wormet++;
      _this.trg.worm = _this.wormet;
      _this.worm[_this.wormet] = _this.trg;
      if (_this.trg.worm == 1) {
        if (_this.trg.d._currentframe == 8 || _this.trg.d._currentframe == 9) {
          _this.trg.xppp = 0;
          this.trgnextd();
          _this.trg.bh = true;
          if (
            (_this.trg.d._currentframe == 8 &&
              _this.trg.d.d._currentframe > 88) ||
            (_this.trg.d._currentframe == 9 && _this.trg.d.d._currentframe > 55)
          ) {
            _this.trg.bh = false;
          }
          _this.trg._visible = true;
          _this.trg.ybew = _this._loc00_ = 0;
          _this.trg.xbew = _this._loc00_;
          _this.trg.dy = 0;
          if (_this.trg.d._currentframe == 1) {
            _this.trg.gogo = 3;
            _this.trg._visible = false;
          }
          if (
            _this.trg.d.d._currentframe == 46 &&
            _this.trg.d._currentframe == 8
          ) {
            _root.soundy("Boss_Lite_HIss.mp", 100);
            this.bossfire(15, true);
          } else if (_this.trg.d._currentframe == 9) {
            if (_this.trg.d.d._currentframe == 23) {
              if (!_this.altboss) {
                _root.soundy("Monster_Roar_2.mp", 100);
              } else {
                _root.soundy("Cute_Grunt_2.mp", 80);
              }
            }
            if (
              _this.trg.d.d._currentframe == 23 ||
              (((_this.trg.d.d._currentframe == 24 && _this.trg.specoz != 23) ||
                _this.trg.d.d._currentframe == 25) &&
                !_this.altboss)
            ) {
              if (_this.trg.specoz == 16) {
                this.cirf(_this.trg.xp, _this.trg.yp - 20, 8, 6);
              } else if (_this.trg.specoz == 23) {
                if (_this.trg.d.d._currentframe == 25 || _this.altboss) {
                  if (_this.trg.fire == undefined) {
                    _this.trg.fire = 0;
                  }
                  _this.trg.fire = _this.trg.fire + 1;
                  if (_this.altboss) {
                    _this.f1 = 5;
                  } else {
                    _this.f1 = 2;
                  }
                  if (_this.trg.fire < _this.f1) {
                    _this.trg.d.d.gotoAndStop(18);
                  } else {
                    _this.trg.fire = 0;
                  }
                }
                green(true, true);
              } else {
                this.green();
              }
            }
          }
        } else {
          if (!_this.trg.whut) {
            _this.trg.beenx = [_this.trg.xp];
            _this.trg.beeny = [_this.trg.yp];
            _this.trg.beenf = [35];
            _this.trg.xpp = 320 - _this.trg.xp;
            _this.trg.ypp = 280 - _this.trg.yp;
            _this.trg.gogo = true;
            _this.trg.whut = true;
          }
          if (_this.trg.ybew < -0.5) {
            _this.trg.d.gotoAndStop(2);
          } else {
            _this.trg.d.gotoAndStop(1);
          }
          if (
            !enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.trg.beenx[0],
              _this.trg.beeny[0],
              3
            ) ||
            _this.trg.dy > 10
          ) {
            _this.trg.beenx.unshift(_this.trg.xp);
            _this.trg.beeny.unshift(_this.trg.yp);
            _this.trg.beenf.unshift(_this.trg.dy);
          }
          if (_this.trg.beenx.length > 80) {
            let f2: number[] = [];
            let f3: number[] = [];
            let f4: number[] = [];
            let a = 0;
            while (a < 50) {
              f2[a] = _this.trg.beenx[a];
              f3[a] = _this.trg.beeny[a];
              f4[a] = _this.trg.beenf[a];
              a++;
            }
            _this.trg.beenx = new Array(50);
            _this.trg.beeny = new Array(50);
            _this.trg.beenf = new Array(50);
            a = 0;
            while (a < 50) {
              _this.trg.beenx[a] = f2[a];
              _this.trg.beeny[a] = f3[a];
              _this.trg.beenf[a] = f4[a];
              a++;
            }
          }
          if (_this.trg.gogo && _this.trg.gogo != 2) {
            if (
              random(2) == 0 &&
              _this.fra > 100 &&
              _this.trg.gogo != 3 &&
              (!_this.altboss || random(2) == 0)
            ) {
              _this.trg.gogo = false;
              if (random(2) == 0 && !_this.altboss) {
                _this.trg.d.gotoAndStop(8);
              } else {
                _this.trg.d.gotoAndStop(9);
              }
            } else {
              _this.enf = enfget(_this.trg.xpp, _this.trg.ypp);
              _this.trg.zp = -2 - _this.enf * 0.02;
              _this.enf = 8 / _this.enf;
              _this.trg.xpp *= _this.enf;
              _this.trg.ypp *= _this.enf;
              _this.trg.xppp = _this.trg.xp;
              _this.trg.yppp = _this.trg.yp;
              _this.trg.lasx = _this.fra;
              _this.trg.dy = 10;
              _this.trg.gogo = false;
              _this.trg.rem = true;
              _this.trg.xbew = _this.trg.xpp;
              _this.trg.ybew = _this.trg.ypp;
              let f1 = 100;
              if (_this.altboss) {
                f1 = 70;
              }
              _root.soundy("Maggot_Burst_Out_" + random(2) + ".wav", f1);
            }
          }
          _this.trg.dy += _this.trg.zp;
          _this.trg.zp += 0.4;
          if (_this.trg.dy < f14) {
            _this.trg.bh = true;
            if (_this.trg.dy > 10 && _this.trg.rem && _this.trg.zp > 0) {
              _this.trg.rem = false;
              _this.trg.xppp = _this.trg.xp;
              _this.trg.yppp = _this.trg.yp;
              _this.trg.lasx = _this.fra + 5;
              let f1 = 100;
              if (_this.altboss) {
                f1 = 70;
              }
              _root.soundy("Maggot_Enter_Ground_" + random(2) + ".wav", f1);
            }
            _this.trg.gogo = 2;
            _this.trg._visible = _this.trg.dy < 23;
          } else {
            _this.trg._visible = false;
            _this.trg.bh = false;
            _this.trg.dy = f14;
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              10000
            );
            let f1 = _this.enf;
            _this.trg.xbew *= 0.95;
            _this.trg.ybew *= 0.95;
            _this.enf = ((250 - _this.enf) / _this.enf) * 0.003;
            _this.trg.xbew += _this.xenf * _this.enf;
            _this.trg.ybew += _this.yenf * _this.enf;
            enfcheck(_this.trg.xp, _this.trg.yp, 320, 280, 10000);
            _this.enf = (Math.min(200, _this.enf) / _this.enf) * 0.002;
            _this.trg.xbew -= _this.xenf * _this.enf;
            _this.trg.ybew -= _this.yenf * _this.enf;
            if (
              _this.trg.zp - f1 / 20 > 15 &&
              _this.trg.gogo == 2 &&
              f1 > 100
            ) {
              _this.trg.xpp = _this.player.xp;
              _this.trg.ypp = _this.player.yp;
              _this.trg.xpp -= _this.trg.xp;
              _this.trg.ypp -= _this.trg.yp;
              _this.trg.gogo = true;
            }
          }
        }
      } else if (
        (_this.trg.worm == 7 && _this.trg.specoz != 23) ||
        (_this.trg.specoz == 23 && _this.trg.worm == 9)
      ) {
        _this.trg.bh = false;
        let f1 = _this.worm[1].xppp;
        if (f1 > 0) {
          _this.trg.ybew = _this._loc00_ = 0;
          _this.trg.xbew = _this._loc00_;
          _this.trg2 = _this.worm[1];
          if (_this.trg2.lasx + 15 > _this.fra) {
            _this.trg.d.gotoAndStop(6);
          } else {
            _this.trg.d.gotoAndStop(10);
          }
          _this.trg.xp = _this.trg2.xppp;
          _this.trg.yp = _this.trg2.yppp;
          _this.trg._visible = true;
        } else {
          _this.trg._visible = false;
        }
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        let f1: any = [0, 0, 4, 2, 4, 4, 5];
        if (_this.altboss) {
          if (_this.trg.specoz == 23) {
            f1 = [0, 0, 2, 2, 2, 2, 2, 2, 2, 2];
          } else {
            f1 = [0, 0, 2, 2, 2, 2, 2, 2];
          }
        }
        _this.trg.d.gotoAndStop(f1[_this.trg.worm]);
        if (_this.altboss) {
          if (_this.trg.specoz == 23) {
            f1 = 100;
            f1 = [
              0,
              f1,
              f1,
              f1 * 1.1,
              f1 * 1.2,
              f1 * 1.2,
              f1 * 1.1,
              f1,
              f1 * 0.85,
            ];
            _this.f2 = [0, 0, 2, 5, 8, 11, 14, 17, 20];
          } else {
            f1 = 100;
            f1 = [0, f1, f1, f1, f1, f1, f1];
            _this.f2 = [0, 0, 2, 5, 8, 11, 14];
          }
        } else {
          f1 = [0, 0, 100, 100, 92, 85, 100];
          _this.f2 = [0, 0, 3, 7, 11, 15, 18];
        }
        _this.trg.d.d._yscale = _this._loc00_ = f1[_this.trg.worm];
        _this.trg.d.d._xscale = _this._loc00_;
        _this.trg2 = _this.worm[1];
        _this.f2 = Math.min(
          _this.trg2.beenx.length - 1,
          _this.f2[_this.trg.worm]
        );
        if (_this.f2 > 0) {
          _this.trg.xp = _this.trg2.beenx[_this.f2];
          _this.trg.yp = _this.trg2.beeny[_this.f2];
          _this.trg.dy = _this.trg2.beenf[_this.f2];
          if (_this.trg.dy < f14) {
            _this.trg.bh = true;
            _this.trg._visible = _this.trg.dy < f14 - 8;
            if (_this.altboss) {
              if (_this.trg.specoz == 23) {
                if (_this.fra % 7 == 0 && _this.trg.worm == 4) {
                  f1 =
                    _this.trg2.beenx[_this.f2] - _this.trg2.beenx[_this.f2 - 1];
                  _this.f2 =
                    _this.trg2.beeny[_this.f2] - _this.trg2.beeny[_this.f2 - 1];
                  let f3 = 7 / Math.sqrt(f1 * f1 + _this.f2 * _this.f2);
                  f1 *= f3;
                  _this.f2 *= f3;
                  this.ffmo(
                    _this.trg.xp,
                    _this.trg.yp,
                    0,
                    (0 - _this.f2) * 0.6 - f1 * 0.5,
                    f1 * 0.8 - _this.f2 * 0.5,
                    0,
                    9,
                    _this.trg.s,
                    true,
                    false
                  );
                  this.ffmo(
                    _this.trg.xp,
                    _this.trg.yp,
                    0,
                    _this.f2 * 0.6 - f1 * 0.5,
                    (0 - f1) * 0.8 - _this.f2 * 0.5,
                    0,
                    9,
                    _this.trg.s,
                    true,
                    false
                  );
                }
              } else if (_this.wormet == 6) {
                if (
                  random(2) == 0 &&
                  _this.trg.dy < -30 &&
                  _this.wormfo <= _this.fra
                ) {
                  _this.wormfo = _this.fra + 30;
                  quadf(_this.trg.xp, _this.trg.yp, 5, 2);
                }
              }
            }
          } else {
            _this.trg._visible = false;
            _this.trg.bh = false;
            _this.trg.dy = 33;
          }
        } else {
          _this.trg._visible = false;
          _this.trg.bh = false;
        }
      }
      _this.trg.d.sh._y = 0 - _this.trg.dy;
      _this.trg.d._y = _this.trg.dy;
      if (_this.altboss) {
        _this.trg.d._y = _this.trg.dy * 0.8 - 14;
      }
  }
}
function smartb() {
  smartd();
  smarties();
  switch (_this.trg.s) {
    case 66:
      _this.blackout = _this.trg.specoz != 23; // bug? ??? _this.blackout = _this.trg.specoz != 23;
      if (!_this.trg.sic) {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
      }
      this.trgnextd();
      if (_this.trg.sic) {
        if (!_this.trg.whut) {
          this.sideflip(_this.player.xp - _this.trg.xp);
          _this.trg.whut = true;
          if (_this.trg.specoz == 23) {
            _this.trg.d.gotoAndStop(12);
          } else {
            _this.trg.d.gotoAndStop(13);
          }
          _this.trg.ffa =
            _this.fra -
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1000
            ) *
              0.1 +
            80;
        } else if (_this.trg.d._currentframe < 11) {
          _this.trg.d.gotoAndStop(13);
        }
      } else if (_this.trg.horse) {
        _this.trg.d.gotoAndStop(8);
        if (_this.trg.hp + 40 > _this.death.hp) {
          _this.trg.hp--;
        }
      } else if (
        (_this.trg.whut || _this.trg.hp / _this.hps[_this.trg.s] < 0.5) &&
        _this.trg.d._currentframe < 7
      ) {
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
        _this.death = _this.trg;
        if (!_this.trg.whut) {
          this.sideflip(_this.player.xp - _this.trg.xp);
          _this.trg.whut = true;
          _this.trg.d.gotoAndStop(7);
          if (_this.trg.specoz == 23) {
          }
        } else {
          _this.trg.d.gotoAndStop(9);
        }
      }
      switch (_this.trg.d._currentframe) {
        case 13:
          _this.trg.xbew *= 0.975;
          _this.trg.ybew *= 0.975;
          if (_this.trg.alt) {
            if (_this.trg.ffa < _this.fra - 180) {
              _this.trg.done = true;
            }
            if (_this.trg.ffa > _this.fra) {
              _this.yenf = _this._loc00_ = 0;
              _this.xenf = _this._loc00_;
              _this.trg.d.d.gotoAndStop(1);
            } else if (!_this.trg.whuzz) {
              _this.trg.whuzz = true;
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                1000
              );
              _this.enf = 0.75 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              _this.trg.xpp = _this.xenf;
              _this.trg.ypp = _this.yenf;
            } else {
              _this.xenf = _this.trg.xpp;
              _this.yenf = _this.trg.ypp;
            }
          } else {
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              1000
            );
            _this.enf = 0.5 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
          }
          _this.trg.xbew -= _this.xenf;
          _this.trg.ybew -= _this.yenf;
          break;
        case 10:
          if (_this.trg.d.d._currentframe == 16) {
            _this.xenf = crand(10);
            _this.yenf = this.crand();
            if (_this.trg.specoz == 23) {
              _this.trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                0,
                0,
                0,
                66
              );
              _this.trg2.sic = true;
              _this.trg2.apf = true;
              _this.trg2.d.gotoAndStop(12);
              _this.trg2.hp = 60;
              _this.trg2._yscale = _this._loc00_ = 150;
              _this.trg2._xscale = _this._loc00_;
              _this.trg2.outway = true;
              _this.trg.outway = true;
              _this.trg2.specoz = 23;
              this.speco(_this.trg2);
            } else {
              if (_this.trg.specoz) {
                _this.f1 = 26.1;
              } else {
                _this.f1 = 41;
              }
              this.create(
                _this.trg.xp + _this.xenf,
                _this.trg.yp + _this.yenf,
                0,
                0,
                0,
                0,
                _this.f1
              );
              this.create(
                _this.trg.xp - _this.xenf,
                _this.trg.yp - _this.yenf,
                0,
                0,
                0,
                0,
                _this.f1
              );
            }
            _root.soundy("summonsound.wav", 120);
            _root.soundy("Monster_Grunt_5.mp", 100);
          }
          break;
        case 9:
          randrun();
          if (
            random(90) == 0 &&
            ((_this.ashut < 3 && _this.trg.specoz != 23) ||
              ((_this.ashut < 3 || !_this.trg.nogrow) &&
                _this.trg.specoz == 23))
          ) {
            _this.trg.nogrow = true;
            _this.trg.d.gotoAndStop(10);
          }
          break;
        case 1:
        case 2:
          randrun();
          let f1 = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          if (
            random(90) == 0 &&
            ((_this.ashut < 2 + random(2) && _this.trg.specoz != 23) ||
              (_this.ashut < 7 &&
                _this.trg.specoz == 23 &&
                _this.trg.lastdd != 5))
          ) {
            _this.trg.d.gotoAndStop(5);
            _this.trg.lastdd = 5;
          } else if (
            random(180) == 0 &&
            _this.sloww <= -100 &&
            _this.trg.specoz != 18
          ) {
            _this.trg.d.gotoAndStop(6);
            _this.trg.lastdd = 6;
          } else if (
            random(100) == 0 &&
            ((_this.ashut < 5 && _this.trg.specoz != 23) ||
              (_this.ashut < 7 &&
                _this.trg.specoz == 23 &&
                _this.trg.lastdd != 14))
          ) {
            _this.trg.d.gotoAndStop(14);
            _this.trg.lastdd = 14;
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 20) {
            _root.soundy("Monster_Grunt_5.mp", 100);
            _root.soundy("summonsound.wav", 120);
            if (_this.trg.specoz == 18) {
              _this.xenf = crand(50);
              _this.yenf = this.crand();
              _this.trg2 = this.create(
                _this.trg.xp + _this.xenf * 1.5,
                _this.trg.yp + _this.yenf * 1.5,
                0,
                0,
                0,
                0,
                55.1
              );
              _this.trg3 = this.create(
                _this.trg.xp - _this.xenf * 1.5,
                _this.trg.yp - _this.yenf * 1.5,
                0,
                0,
                0,
                0,
                55.1
              );
            } else if (_this.trg.specoz == 23) {
              let i = 0;
              while (i < 3) {
                _this.trg2 = this.create(
                  _this.trg.xp,
                  _this.trg.yp,
                  0,
                  0,
                  0,
                  0,
                  66
                );
                if (i > 2) {
                  _this.trg2.xp += 20;
                } else {
                  _this.trg2.xp -= 20;
                }
                if (i == 1 || i == 3) {
                  _this.trg2.yp += 20;
                } else {
                  _this.trg2.yp -= 20;
                }
                _this.trg2.sic = true;
                _this.trg2.apf = true;
                _this.trg2.d.gotoAndStop(12);
                _this.trg2.hp = 15;
                _this.trg.outway = true;
                _this.trg2.specoz = 23;
                this.speco(_this.trg2);
                i++;
              }
            } else {
              let i = 0;
              while (i < 1.9) {
                _this.trg2 = spaw(
                  _this.trg.xp,
                  _this.trg.yp,
                  250 + random(100),
                  66
                );
                if (
                  enfcheck(
                    _this.trg2.xp,
                    _this.trg2.yp,
                    _this.player.xp,
                    _this.player.yp,
                    150
                  )
                ) {
                  _this.trg2.done = true;
                  _this.trg2.sic = true;
                  _this.trg2._visible = false;
                  _this.trg2.bh = false;
                  _this.trg.outway = true;
                  i -= 0.95;
                } else {
                  _this.trg2.sic = true;
                  _this.trg2.apf = true;
                  _this.trg2.d.gotoAndStop(12);
                  _this.trg2.hp = 15;
                }
                _this.trg.outway = true;
                i++;
              }
            }
          }
          break;
        case 6:
          if (_this.trg.d.d._currentframe == 22) {
            _this.sloww = 100;
            _root.over.gotoAndStop(7);
          }
          break;
        case 14:
          if (_this.trg.d.d._currentframe == 18) {
            if (_this.trg.specoz == 23) {
              _this.enf = _this._loc00_ = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                1000
              );
              if (_this._loc00_) {
                _this.xenf *= 40 / _this.enf;
                _this.yenf *= 40 / _this.enf;
                _this.trg2 = this.create(
                  _this.trg.xp - _this.xenf,
                  _this.trg.yp - _this.yenf,
                  0,
                  0,
                  0,
                  0,
                  27
                );
                _this.trg2.hp += 13;
              }
            } else {
              _this.trg2 = [];
              _this.trg2.push(this.create(20, _this.trg.yp, 0, 0, 0, 0, 66));
              _this.trg2.push(this.create(620, _this.trg.yp, 0, 0, 0, 0, 66));
              _this.trg2.push(this.create(_this.trg.xp, 120, 0, 0, 0, 0, 66));
              _this.trg2.push(this.create(_this.trg.xp, 460, 0, 0, 0, 0, 66));
              _root.soundy("summonsound.wav", 150);
              _root.soundy("Monster_Grunt_0_" + abr() + ".mp", 100);
              for (let z in _this.trg2) {
                _this.trg2[z].sic = true;
                _this.trg2[z].apf = true;
                _this.trg2[z].d.gotoAndStop(12);
                _this.trg2[z].hp = 15;
                _this.trg2[z].outway = true;
                _this.trg2[z].alt = true;
                if (
                  enfcheck(
                    _this.trg2[z].xp,
                    _this.trg2[z].yp,
                    _this.player.xp,
                    _this.player.yp,
                    80
                  )
                ) {
                  _this.trg2[z].dones = true;
                  _this.trg2[z].done = true;
                }
              }
            }
          }
          break;
        case 11:
          if (!_this.trg.whuuu) {
            _root.soundy("Monster_Yell_A_" + random(3) + ".mp", 100);
            _this.trg.whuuu = true;
            _this.trg2 = this.create(
              _this.trg.xp,
              _this.trg.yp,
              0,
              0,
              0,
              0,
              66
            );
            _root.soundy("summonsound.wav", 150);
            _this.trg2.d.gotoAndStop(8);
            _this.trg2.horse = true;
            _this.trg2.gogo = true;
            if (_this.trg.specoz == 23) {
              _this.trg2.specoz = 23;
              this.speco(_this.trg2);
            }
            _this.trg2.d._xscale = _this.trg.d._xscale;
            _this.trg2.d._yscale = _this.trg.d._yscale;
            _this.trg2.apf = true;
            _this.trg.outway = true;
          }
          break;
        case 8:
          _this.trg.xbew = _this.trg.d._xscale * 0.18;
          if (_this.trg.gogo) {
            f1 = false;
            if (_this.trg.xp > 750) {
              _this.trg.xp = 10;
              f1 = true;
            } else if (_this.trg.xp < -150) {
              _this.trg.xp = 630;
              f1 = true;
            }
            if (f1) {
              f1 = 95;
              _this.trg.yp += f1;
              if (_this.trg.yp > 430) {
                _this.trg.yp -= f1 * 3;
              }
            }
          }
      }
      break;
    case 65:
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (_this.trg.specoz == 23) {
        _this.f1 = 0.25;
      } else {
        _this.f1 = 0.5;
      }
      if (
        (_this.trg.whut || _this.trg.hp / _this.trg.mhp < _this.f1) &&
        _this.trg.d._currentframe < 9 &&
        !_this.altboss
      ) {
        this.bord();
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
        _this.trg._visible = _this.trg.bh = true;
        if (!_this.trg.whut) {
          _this.trg.gosplash = true;
          _this.trg.whut = true;
          _this.trg.d.gotoAndStop(10);
        } else {
          _this.trg.d.gotoAndStop(9);
        }
      }
      switch (_this.trg.d._currentframe) {
        case 9:
          _this.trg.sp += 0.1;
          _this.trg.sp *= 0.955;
          let f1 = 1 + _this.trg.sp * 0.1;
          _this.trg.xbew *= f1;
          _this.trg.ybew *= f1;
          pathfind(
            _this.trg,
            _this.playx,
            _this.playy,
            _this.trg.sp * 0.55 + 0.5
          );
          _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
          _this.trg.yp = Math.min(410, Math.max(180, _this.trg.yp));
          if (mhit(_this.trg.xp, _this.trg.yp)) {
            _this.trg.xp += crand(5);
            _this.trg.yp += crand(5);
          }
          this.sideflip(_this.trg.xbew);
          if (_this.trg.ffra + 10 > _this.fra) {
            _this.trg.hpp = _this.trg.hp;
          }
          if (_this.trg.hp + 85 - _this.trg.sp * 5 < _this.trg.hpp) {
            _this.trg.d.gotoAndStop(10);
            _this.trg.bh = _this._loc00_ = true;
            _this.trg._visible = _this._loc00_;
          }
          if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
            _this.trg.d.bo.gotoAndStop(3);
          } else {
            _this.trg.d.bo.gotoAndStop(2);
          }
          break;
        case 10:
          if (_this.trg.d.d._currentframe == 3 && _this.trg.specoz == 16) {
            this.cirf(_this.trg.xp, _this.trg.yp - 50, 8, 6);
          }
          _this.trg.ffra = _this.fra;
          _this.trg.hpp = _this.trg.hp;
          _this.trg.sp = 0.5;
          break;
        case 1:
        case 2:
          randrun();
          f1 = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          if (random(90) == 0 && f1 < 200) {
            _this.trg.d.gotoAndStop(5);
          } else if (
            (f1 > 150 && random(200) == 0) ||
            (Math.abs(_this.yenf) < 20 && random(30) == 0)
          ) {
            _root.soundy("Monster_Yell_A_" + random(3) + ".mp", 100);
            this.sideflip(_this.player.xp - _this.trg.xp);
            _this.trg.d.gotoAndStop(7);
            _this.trg.xpp = _this.trg.xp;
            _this.trg.ypp = _this.trg.yp;
            _this.trg.gogo = 3;
            _this.trg.bh = _this._loc00_ = true;
            _this.trg._visible = _this._loc00_;
          } else if (
            random(180) == 0 ||
            (_this.ashut > 5 && _this.trg.specoz == 23 && random(30) == 0)
          ) {
            _this.trg.d.gotoAndStop(6);
            _root.soundy("Monster_Roar_" + random(4) + ".mp");
          }
          break;
        case 5:
          if (_this.trg.d.d._currentframe == 5) {
            quadf(_this.trg.xp, _this.trg.yp, 10, !_this.altboss);
          }
          break;
        case 6:
          if (_this.trg.d.d._currentframe == 30) {
            _this.trg.bh = false;
            _this.anarch = 25;
            _this.analt = _this._loc00_ = _this.altboss;
            if (_this._loc00_) {
              _this.anarch = 50;
            }
            if (_this.trg.specoz == 16) {
              _this.anarch = 10;
              _this.analt = 5;
            }
          } else if (!_this.trg.bh && _this.anarch < -80) {
            _this.trg.bh = true;
            _this.trg.d.gotoAndStop(8);
            _this.trg.xpp = _this.trg.xp;
            _this.trg.ypp = _this.trg.yp;
            if (_this.player.xp > 320) {
              _this.trg.xp = 10;
              this.sideflip(100);
            } else {
              this.sideflip(-100);
              _this.trg.xp = 630;
            }
            _this.trg._visible = true;
          }
          if (_this.trg.d.d._currentframe == 33) {
            _this.trg._visible = false;
          }
          break;
        case 8:
          if (_this.trg.specoz) {
            _this.noet = true;
            if (
              (_this.fra % 45 == 0 ||
                (_this.fra % 15 == 0 &&
                  _this.trg.specoz == 23 &&
                  !_this.altboss)) &&
              ((_this.anarch <= -80 &&
                _this.trg.loap &&
                _this.trg.specoz != 23) ||
                (_this.trg.specoz == 23 && _this.trg.loap))
            ) {
              if (_this.trg.specoz == 23) {
                if (_this.altboss || true) {
                  if (_this.ashut < 7) {
                    if (_this.altboss) {
                      f1 = 24.1;
                    } else {
                      f1 = 24;
                    }
                    _this.trg2 = this.create(
                      _this.trg.xp,
                      _this.trg.yp,
                      0,
                      0,
                      0,
                      0,
                      f1
                    );
                    _this.trg.hp -= 5;
                  } else {
                    _this.trg.loap = false;
                  }
                } else {
                  _this.trg.loap = false;
                  _this.trg2 = this.create(
                    _this.trg.xp,
                    _this.trg.yp,
                    0,
                    0,
                    0,
                    0,
                    5.04
                  );
                  _this.trg2.col = 3;
                }
              }
            }
            _this.noet = false;
          }
          if (
            _this.altboss &&
            _this.trg.gogo < 3 &&
            _this.trg.gogo > 1 &&
            !_this.trg.goner &&
            _this.fra % 8 == 0
          ) {
            _this.trg.gogo -= 0.4;
            _this.noet = true;
            _this.trg2 = this.create(
              _this.trg.xpp,
              random(300) + 150,
              0,
              _this.trg.xbew,
              0,
              0,
              65
            );
            _this.noet = false;
            _root.soundy("Monster_Yell_A_" + random(3) + ".mp3", 60);
            _this.trg2.goner = true;
            _this.trg2.fra = 0;
            _this.trg2.d._xscale = _this.trg.d._xscale;
            _this.trg2.d.gotoAndStop(_this.trg.d._currentframe);
            if (_this.trg.specoz) {
              _this.trg2.specoz = _this.trg.specoz;
              this.speco(_this.trg2);
            }
          }
          _this.trg.xbew = _this.trg.d._xscale * 0.18;
          if (_this.trg.gogo > 0) {
            let f1 = false;
            if (_this.trg.xp > 619) {
              _this.trg.xp = _this._loc00_ = 10;
              _this.trg.xpp = _this._loc00_;
              f1 = true;
            } else if (_this.trg.xp < 21) {
              _this.trg.xp = _this._loc00_ = 630;
              _this.trg.xpp = _this._loc00_;
              f1 = true;
            }
            if (f1) {
              _this.trg.loap = true;
              if (_this.altboss) {
                if (_this.trg.goner) {
                  _this.trg.done = true;
                }
              } else {
                let f1 = 95;
                _this.trg.yp += f1;
                if (_this.trg.yp > 430) {
                  _this.trg.yp -= f1 * 3;
                }
              }
              _this.trg.gogo--;
            }
          } else if ((_this.trg.xp - _this.trg.ypp) * _this.trg.xbew > 0) {
            _this.trg.d.gotoAndStop(1);
          }
      }
      break;
    case 81:
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      this.trgnextd();
      if (
        (_this.trg.whut || _this.trg.hp / _this.hps[_this.trg.s] < 0.5) &&
        _this.trg._xscale > 90 &&
        _this.trg.alter == 1
      ) {
        if (!_this.trg.whut) {
          _this.trg.gosplash = true;
          _this.trg.whut = true;
          _root.soundy("Monster_Roar_2.mp", 100);
        }
        _this.trg.d.gotoAndStop(9);
      }
      switch (_this.trg.d._currentframe) {
        case 1:
        case 2:
          randrunx(1);
          this.sideflip(_this.trg.xbew);
          walkframe(3);
          if (random(3) == 0 || _this.trg._xscale > 90) {
            if (
              random(140 - _this.trg.alter * 60) == 0 &&
              (_this.trg.alter == 1 ||
                enfcheckx(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  400
                ))
            ) {
              if (_this.trg.alter == 1) {
                _this.trg.d.gotoAndStop(7);
              } else {
                _this.trg.d.gotoAndStop(6);
              }
              _root.soundy("Monster_Yell_B_0.mp3", 100);
            } else if (random(20) == 0) {
              if (
                enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  230
                )
              ) {
                this.sideflip(_this.player.xp - _this.trg.xp);
                _this.trg.d.gotoAndStop(5);
              }
            }
          }
          break;
        case 9:
          _this.trg.bh = false;
          if (_this.trg.d.d._currentframe == 25) {
            _root.soundy("summonsound.wav", 200);
            _this.xenf = 30;
            _this.trg2 = this.create(
              _this.trg.xp,
              _this.trg.yp - 20,
              0,
              0,
              0,
              0,
              81
            );
            _this.trg3 = this.create(
              _this.trg.xp,
              _this.trg.yp - 20,
              0,
              0,
              0,
              0,
              81
            );
            if (_this.trg.specoz == 23) {
              _this.trg4 = this.create(
                _this.trg.xp,
                _this.trg.yp + 10,
                0,
                0,
                0,
                0,
                81
              );
              _this.trg4.hp *= 0.7;
              _this.trg4.mhp = _this._loc00_;
              _this.trg4._yscale = _this._loc00_ = 85;
              _this.trg4._xscale = _this._loc00_;
              _this.trg3._yscale = _this._loc00_ = 70;
              _this.trg2._xscale = _this._loc00_;
              _this.trg2._yscale = _this._loc00_ = 70;
              _this.trg3._xscale = _this._loc00_;
            } else {
              _this.trg3._yscale = _this._loc00_ = 75;
              _this.trg2._xscale = _this._loc00_;
              _this.trg2._yscale = _this._loc00_ = 75;
              _this.trg3._xscale = _this._loc00_;
            }
            _this.trg2.hp *= 0.5;
            _this.trg2.mhp = _this._loc00_;
            _this.trg3.hp *= 0.5;
            _this.trg2.mhp = _this._loc00_;
          }
          if (_this.trg.d.d._currentframe == 65) {
            _this.trg.done = true;
          }
          break;
        case 5:
          if (
            _this.trg.d.d._currentframe == 20 ||
            _this.trg.d.d._currentframe == 34
          ) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp + _this.player.xbew * 5,
              _this.player.yp + _this.player.ybew * 5,
              1000
            );
            if (_this.trg.d.d._currentframe == 20) {
              _this.f1 = true;
              _root.soundy("Monster_Grunt_2_" + abr() + ".mp", 100);
            } else {
              _this.f1 = 2;
              _root.soundy("Monster_Grunt_1_" + abr() + ".mp", 100);
            }
            _this.enf = enfget(_this.xenf, _this.yenf);
            _this.enf = -8.2 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
            shots(_this.trg.xp, _this.trg.yp, _this.xenf, _this.yenf, _this.f1);
          }
          if (_this.trg.specoz == 23) {
            if (_this.trg.d.d._currentframe == 44) {
              if (_this.trg.fire-- > 0) {
                if (Math.abs(_this.trg._xscale) > 80) {
                  _this.trg.d.d.gotoAndStop(16);
                  this.sideflip(_this.player.xp - _this.trg.xp);
                }
              }
            }
            if (_this.trg.d.d._currentframe == 3) {
              if (Math.abs(_this.trg._xscale) > 100) {
                _this.trg.fire = 3;
              } else {
                _this.trg.fire = 1;
              }
            }
          }
          break;
        case 7:
          if (_this.trg.d.d._currentframe < 7) {
            break;
          }
          _this.trg.whup = _this.trg.hp;
        case 8:
          _this.enf = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp + _this.player.xbew * 5,
            _this.player.yp + _this.player.ybew * 5,
            1000
          );
          if (_this.trg.specoz == 23) {
            if (_this.enf < 90 && random(20) == 0) {
              if (random(2) == 0) {
                _this.trg.d.gotoAndStop(6);
              } else {
                this.sideflip(_this.player.xp - _this.trg.xp);
                _this.trg.d.gotoAndStop(5);
              }
            }
          }
          _this.enf = 1.4 / _this.enf;
          _this.xenf *= _this.enf;
          _this.yenf *= _this.enf;
          _this.trg.xbew -= _this.xenf;
          _this.trg.ybew -= _this.yenf;
          this.sideflip(_this.player.xp - _this.trg.xp);
          if (_this.trg.whup > _this.trg.hp + _this.trg.mhp / 8) {
            _this.trg.d.gotoAndStop(6);
          }
          break;
        case 6:
          if (
            _this.trg.d.d._currentframe > 20 &&
            _this.trg.d.d._currentframe < 50
          ) {
            _this.trg.ypp = 0;
            _this.trg.xpp = random(2) - 0.5;
            this.lasershow(_this.trg);
            _this.trg.xpp = 0;
            _this.trg.ypp = random(2) - 0.5;
            this.lasershow(_this.trg);
            _this.trg.ypp = _this._loc00_ = undefined;
            _this.trg.xpp = _this._loc00_;
          }
      }
  }
}
function bord(f1, f2, f3, f4) {
  if (f1 == undefined) {
    f1 = 575;
    f2 = 60;
    f3 = 410;
    f4 = 150;
  }
  _this.trg.xp = Math.min(f1, Math.max(f2, _this.trg.xp));
  _this.trg.yp = Math.min(f3, Math.max(f4, _this.trg.yp));
  let f5 = _this.trg.xp == f1 || _this.trg.xp == f2;
  let f6 = _this.trg.yp == f3 || _this.trg.yp == f4;
  if (_this.trg.s == 19 && _this.altboss) {
    if (f5) {
      _this.trg.xbew *= -1;
    }
    if (f6) {
      _this.trg.ybew *= -1;
    }
  }
  f5 = f5 || f6;
  return f5;
}
function cetf() {
  _this.trg.dx = _this.trg._rotation * 0.3;
}
function smarts() {
  smartsx();
  ssmarts();
  smartb();
  switch (_this.trg.s) {
    case 89:
    case 19:
      if (_this.trg.eternal && _this.trg.s == 89) {
        if (_this.fra10) {
          trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp, 0, 123);
        }
      }
      trg2 = undefined;
      if (_this.trg.specoz == 7) {
        _this.trg.xbew *= 0.96;
        _this.trg.ybew *= 0.96;
      }
      _this.trg.outway = true;
      _this.trg.ggh = true;
      this.markhere();
      if (levzz(_this.trg.til) > 1.8) {
      }
      if (!_this.altboss) {
        this.bord();
      }
      if (_this.trg.specoz == 23 && _this.trg.s == 19) {
        if (_this.trg.trg2 && _this.trg.whop) {
          _this.trg._yscale = _this._loc0_ = 162;
          _this.trg._xscale = _this._loc0_;
        } else if (!_this.trg.whop && _this.trg.trg2) {
          _this.trg._yscale = _this._loc0_ = 130;
          _this.trg._xscale = _this._loc0_;
        } else {
          _this.trg._yscale = _this._loc0_ = 155;
          _this.trg._xscale = _this._loc0_;
        }
        if (!_this.altboss) {
          _this.trg._yscale += 20;
          _this.trg._yscale *= 0.65;
          _this.trg._xscale = _this._loc0_;
        }
      }
      if (!_this.trg.donelook) {
        _this.trg.d.gotoAndStop(7);
        _this.trg.fail2 = 0;
        _this.trg.donelook = true;
        for (let a in _this.ball) {
          trg2 = _this.ball[a];
          if (trg2.s == 19 || trg2.s == 89) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                trg2.xp,
                trg2.yp,
                _this.roxx + 2
              ) &&
              trg2.trg2 != _this.trg &&
              trg2 != _this.trg
            ) {
              while (trg2.whop) {
                if (trg2.dones || trg2.hp < 0) {
                  break;
                }
                trg2 = trg2.trg3;
              }
              if (
                _this.trg.trg3 != trg2 &&
                _this.trg.trg3.trg3 != trg2 &&
                _this.trg.trg3.trg3.trg3 != trg2 &&
                _this.trg.trg3.trg3.trg3.trg3 != trg2 &&
                _this.trg.trg3.trg3.trg3.trg3.trg3 != trg2
              ) {
                _this.trg.trg2 = trg2;
                _this.trg.lar = trg2.lar + 1;
                trg2.trg3 = _this.trg;
                trg2.whop = true;
                trg2 = _this.trg.trg3;
                if (_this.trg.s != 89) {
                  if (!trg2.specoz) {
                    _this.trg.specoz = _this.trg.trg2.specoz;
                    specoo(_this.trg);
                  }
                  if (_this.trg.specoz) {
                    while (!trg2.specoz && trg2) {
                      trg2.specoz = _this.trg.specoz;
                      trg2 = trg2.trg2;
                      specoo(trg2);
                    }
                  }
                }
                break;
              }
            }
          }
        }
        _this.trg.beenx = [];
        _this.trg.beeny = [];
        _this.trg.beenf = [];
        _this.f1 = 1;
      } else if (_this.fra - _this.trg.fra < 25) {
        if (_this.trg.trg2.s == 19) {
          _this.trg.d.gotoAndStop(4);
        } else {
          _this.trg.d.gotoAndStop(9);
        }
      } else {
        if (_this.trg.trg2.s == 19 || _this.trg.trg2.s == 89) {
          _this.trg.flyby = true;
          _this.trg.ggh = true;
          if (_this.trg.s == 89 && _this.trg.eternal) {
            _this.trg.hp += _this.trg.mhp * 0.005;
            _this.trg.hp *= 0.995;
          }
          trg2 = _this.trg.trg2;
          while (trg2.trg3 != undefined && trg2.trg3 != _this.trg) {
            trg2 = trg2.trg3;
          }
          trg2.trg3 = _this.trg;
          _this.trg.lar = trg2.lar + 1;
          if (_this.trg.specoz == 7) {
            if (Math.abs(trg2.hp - _this.trg.hp) > 1) {
              _this.f1 = (trg2.hp - _this.trg.hp) / 2;
              trg2.hp -= _this.f1;
              _this.trg.hp += _this.f1;
            }
          }
          if (_this.trg.s == 19) {
            _this.trg.d.gotoAndStop(7);
          }
          if (trg2.dones && _this.trg.s == 19) {
            _this.trg.trg2 = undefined;
          } else if (
            (trg2.dones ||
              trg2.frei ||
              _this.trg.frei ||
              _this.trg.trg3.frei) &&
            _this.trg.s != 19
          ) {
            _this.trg.trg3.frei = true;
            _this.trg.trg2 = undefined;
            if (_this.trg.s == 89) {
              _this.trg.frei = true;
            }
            _this.f1 = -1;
          } else if (trg2.beenx.length > 0) {
            if (_this.trg.specoz == 7) {
              _this.f0 = 6;
            } else {
              _this.f0 = 4;
            }
            if (_this.trg.s == 89) {
              _this.f0--;
            }
            if (_this.trg.s == 89 && trg2.trg2 == undefined) {
              _this.f0--;
            }
            if (_this.altboss && _this.trg.s == 19) {
              _this.f0--;
            }
            if (trg2.eternal) {
              if (trg2.s == 89) {
                _this.f0 += 2;
              }
            }
            if (_this.trg.eternal) {
              if (_this.trg.s == 89) {
                _this.f0 += 2;
              } else if (_this.trg.whop) {
                _this.f0++;
              }
            }
            _this.f0 = Math.min(_this.f0, trg2.beenx.length - 1);
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              trg2.beenx[_this.f0],
              trg2.beeny[_this.f0],
              1000
            );
            let f2 = 10;
            if (_this.enf < f2) {
              let f3 = trg2.beenx[_this.f0];
              let f4 = trg2.beeny[_this.f0];
              if (_this.altboss && _this.trg.s == 19) {
                if (f4 != _this.trg.yp || f3 != _this.trg.xp) {
                  if (f3 > _this.trg.xp) {
                    _this.f1 = 1;
                  } else {
                    _this.f1 = -1;
                  }
                  if (f4 > _this.trg.yp) {
                    f2 = 1;
                  } else {
                    f2 = -1;
                  }
                  _this.trg._rotation = 15 * f2 * _this.f1;
                  cetf();
                }
              }
              _this.trg.xp = f3;
              _this.trg.yp = f4;
              _this.f1 = trg2.beenf[_this.f0];
            } else {
              _this.enf = f2 / _this.enf;
              _this.xenf *= _this.enf;
              _this.yenf *= _this.enf;
              _this.trg.xp -= _this.xenf;
              _this.trg.yp -= _this.yenf;
              getf();
              trg2.beenx.push(trg2.beenx[_this.f0] + _this.xenf);
              trg2.beeny.push(trg2.beeny[_this.f0] + _this.yenf);
              trg2.beenf.push(_this.f1);
            }
            trg2.whop = true;
          }
        } else {
          if (_this.trg.s != 19 || !_this.altboss) {
            _this.trg.flyby = false;
            _this.trg.ggh = false;
          }
          let f1 = this.ingrid(_this.trg.xp, _this.trg.yp);
          if (levzz(f1) > 1) {
            _this.trg.xbew += crand(2);
            _this.trg.ybew += crand(2);
          }
          _this.trg.lar = 0;
          if (!_this.trg.whop && _this.trg.s != 89 && _this.trg.specoz != 23) {
            getf();
            if (_this.trg.fail2++ > 10) {
              _this.trg.dones = true;
            }
          } else if (!_this.trg.hpu) {
            _this.trg.hpu = true;
            if (_this.trg.specoz != 7) {
              if (_this.trg.s != 89) {
                _this.trg.hp += 25;
                if (_this.trg.specoz == 23 && _this.trg.s == 19) {
                }
              }
            }
          } else if (_this.trg.fire <= 30) {
            if (_this.trg.s == 19) {
              _this.trg.d.gotoAndStop(1);
            }
            if (_this.altboss && _this.trg.s == 19) {
              if (enfget(_this.trg.xbew, _this.trg.ybew) < 0.4) {
                _this.trg.xbew += crand(0.1);
                _this.trg.ybew += crand(0.1);
              }
              if (_this.trg.xbew > 0) {
                f1 = 1;
              } else {
                f1 = -1;
              }
              if (_this.trg.ybew > 0) {
                _this.f2 = 1;
              } else {
                _this.f2 = -1;
              }
              if (Math.abs(_this.trg.ybew) > Math.abs(_this.trg.xbew)) {
                _this.trg._rotation = 0;
              } else {
                _this.trg._rotation = 15 * _this.f2 * f1;
              }
              cetf();
              if (_this.trg.specoz == 23) {
                if (this.bord()) {
                  _this.trg.xbew *= 0.5;
                  _this.trg.ybew *= 0.5;
                }
                if (
                  (_this.enf = enfcheck(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.player.xp,
                    _this.player.yp,
                    300
                  ))
                ) {
                  if (
                    linecheck(
                      _this.trg.xp,
                      _this.trg.yp,
                      _this.player.xp,
                      _this.player.yp
                    )
                  ) {
                    _this.trg.xbew *= 0.92;
                    _this.trg.ybew *= 0.92;
                    if (_this.enf > 0) {
                      if (_this.enf < 130) {
                        _this.enf *= 0.8;
                      }
                      _this.enf *= 2.5;
                      _this.trg.xbew -= _this.xenf / _this.enf;
                      _this.trg.ybew -= _this.yenf / _this.enf;
                      if (_this.trg.whop) {
                        if (
                          (_this.enf = enfcheck(
                            _this.trg.xp,
                            _this.trg.yp,
                            _this.lastlarx,
                            _this.lastlary,
                            100
                          ))
                        ) {
                          trg2 = _this.lastlar;
                          _this.trg.xbew += _this.xenf / _this.enf;
                          _this.trg.ybew += _this.yenf / _this.enf;
                          trg2.xbew -= _this.xenf / _this.enf;
                          trg2.ybew -= _this.yenf / _this.enf;
                        }
                        _this.lastlarx = _this.trg.xp;
                        _this.lastlary = _this.trg.yp;
                        _this.lastlar = _this.trg;
                      }
                    }
                  }
                }
                f1 = Math.sqrt(
                  _this.trg.xbew * _this.trg.xbew +
                    _this.trg.ybew * _this.trg.ybew * 0.6
                );
                f1 = Math.min(10, f1 + 2) / f1;
                _this.trg.xbew *= f1;
                _this.trg.ybew *= f1;
                if (!_this.trg.whop) {
                  _this.trg.xbew *= 0.6;
                  _this.trg.ybew *= 0.6;
                  if (_this.fra10) {
                    trg2 = this.parc(
                      "bloo",
                      _this.trg.xp,
                      _this.trg.yp,
                      0,
                      123
                    );
                  }
                }
              } else {
                _this.trg.xbew *= 0.85;
                _this.trg.ybew *= 0.85;
                if (_this.trg.gor) {
                  _this.trg.xbew += f1 * 3;
                  _this.trg.ybew += _this.f2 * 1.6;
                } else {
                  _this.trg.xbew += f1 * 1.8;
                  _this.trg.ybew += _this.f2 * 3;
                }
                if (this.bord() && random(10) == 0) {
                  _this.trg.gor = random(2) == 0;
                }
              }
            } else {
              if (_this.trg.s == 89 && _this.trg.eternal) {
                pathfind(_this.trg, _this.playx, _this.playy, 1.7);
              } else {
                randrunx(2);
              }
              _this.trg.ggh = false;
            }
            this.killshit(_this.trg.nextl);
            _this.xenf = _this.trg.xbew;
            _this.yenf = _this.trg.ybew;
            getf();
            if (_this.trg.specoz == 3 && random(3) == 0) {
              firewalk();
            }
            if (!_this.trg.whop && _this.trg.s == 19) {
              _this.trg.xbew *= 0.8;
              _this.trg.ybew *= 0.8;
              if (_this.fra10) {
                trg2 = this.parc("bloo", _this.trg.xp, _this.trg.yp, 0, 123);
              }
            }
          } else {
            _this.trg.fire--;
            f1 = -1;
          }
        }
        if (
          !enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.trg.beenx[0],
            _this.trg.beeny[0],
            3
          )
        ) {
          _this.trg.beenx.unshift(_this.trg.xp);
          _this.trg.beeny.unshift(_this.trg.yp);
          _this.trg.beenf.unshift(_this.f1);
        }
      }
      if (_this.trg.s == 19) {
        if (_this.trg.trg2.s != 19 || trg2.dones) {
        }
        if (_this.f1 > 0) {
          _this.trg.d.d.d.gotoAndStop(_this.f1);
        }
      } else {
        if (trg2.s == 89) {
          enfcheck(trg2.xp, trg2.yp, _this.trg.xp, _this.trg.yp, 1000);
          getf();
        }
        let f2 = [0, 2, 6, 1, 5];
        _this.trg.d.gotoAndStop(f2[_this.f1]);
      }
      if (_this.trg.beenx.length > 12) {
        let f2: number[] = [];
        let f3: number[] = [];
        let f4: number[] = [];
        let a = 0;
        while (a < 9) {
          f2[a] = _this.trg.beenx[a];
          f3[a] = _this.trg.beeny[a];
          f4[a] = _this.trg.beenf[a];
          a++;
        }
        _this.trg.beenx = new Array(9);
        _this.trg.beeny = new Array(9);
        _this.trg.beenf = new Array(9);
        a = 0;
        while (a < 9) {
          _this.trg.beenx[a] = f2[a];
          _this.trg.beeny[a] = f3[a];
          _this.trg.beenf[a] = f4[a];
          a++;
        }
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      if (random(16) == 0 && _this.trg.s == 19) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          _this.trg.spl + 1 + random(10),
          Math.random() * 0.6 + 0.6
        );
      }
      if (_this.trg.s == 19 && !_this.altboss) {
        if (_this.trg.whop <= 0) {
          if (
            (_root.lev != _root.chamb || _this.trg.eternal) &&
            _this.fra > 20 &&
            (random(100) == 0 || (random(20) == 0 && _this.trg.whop < 0))
          ) {
            let f1 = 5;
            let f2 = this.ingrid(_this.trg.beenx[f1], _this.trg.beeny[f1]);
            if (!_this.trg.trg3) {
              // ???
              f1 = 1 + Math.round(_this.ashut * 0.2 - 0.2);
              if (_this.trg.specoz == 23) {
                if (random(Math.round(f1 + _this.lars)) == 0) {
                  if (_this.lars++ < 7 + _root.chaps * 0.5) {
                    trg2 = this.create(
                      _this.trg.xp,
                      _this.trg.yp,
                      0,
                      0,
                      0,
                      0,
                      19
                    );
                    trg2.specoz = 23;
                    this.speco(trg2);
                    trg2.donelook = true;
                    _root.soundy("summonsound.wav", 80);
                    trg2.fra = -100;
                    trg2.d.gotoAndStop(7);
                    trg2.fail2 = 0;
                    _this.trg3 = _this.trg;
                    trg2.trg2 = _this.trg3;
                    _this.trg3.trg3 = trg2;
                    _this.trg3.whop = true;
                    trg2.beenx = [];
                    trg2.beeny = [];
                    trg2.beenf = [];
                    trg2.lar = _this.trg3.lar + 1;
                    trg2.hp *= 0.5;
                    _this.trg.hp *= 0.5;
                  }
                }
              } else if (_this.trg.specoz != 7) {
                turd("breakblock", f2, true);
              }
            }
          }
        }
      }
      _this.trg.whop = false;
      break;
    case 22:
      _this.trg.pbh = _this.fra2;
      if (_this.trg.d._currentframe < 3) {
        this.angstfind();
        this.sideflip(_this.trg.xbew);
        walkframe(2);
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
      } else {
        this.trgnextd();
      }
      if (
        _this.trg.needmove > 0 &&
        _this.trg.fire-- <= 0 &&
        _this.ashut < random(5) + 4
      ) {
        if (
          (_this.enf = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            300
          ))
        ) {
          if (
            linecheckxx(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp
            )
          ) {
            _root.soundy("Wheezy_Cough_" + random(3) + ".mp", 100);
            _this.trg.fire = 75;
            _this.trg.d.gotoAndStop(5);
            this.sideflip(0 - _this.xenf);
            let f1 = _this.trg.xp;
            let f2 = _this.trg.yp;
            _this.enf = -7 / _this.enf;
            _this.xenf *= _this.enf;
            _this.yenf *= _this.enf;
            if (_this.trg.specoz == 23 && _this.trg.eternal != 2) {
              _this.f0 = 2;
            } else {
              _this.f0 = 1;
            }
            while (_this.f0-- > 0) {
              var trg2 = this.create(f1, f2, 0, _this.xenf, _this.yenf, 0, 18);
              trg2.fra -= 20;
              trg2.die = true;
              trg2.pbh = true;
              if (_this.f0 != 0) {
                trg2.xbew += crand(5);
                trg2.ybew += crand(5);
              }
              if (_this.trg.eternal == 2) {
                attach(trg2, 96);
                trg2.hp += 20;
              }
            }
          } else {
            _this.trg.fire = 7;
          }
        } else {
          _this.trg.fire = 3;
        }
      }
      break;
    case 16:
      _this.trg.pbh = _this.fra2;
      if (_this.trg.d._currentframe < 3) {
        if (_this.trg.alter == 3) {
          pathfind(_this.trg, _this.playx, _this.playy, 1.2);
          if (_this.fra5 && !_this.trg.eternal) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                40
              )
            ) {
              _this.trg.dones = true;
            }
          }
          _this.trg.xbew *= 0.9;
          _this.trg.ybew *= 0.9;
        } else {
          this.angstfind();
          _this.trg.xbew *= 0.8;
          _this.trg.ybew *= 0.8;
        }
        this.sideflip(_this.trg.xbew);
        walkframe(2);
        if (_this.trg.needmove > 0) {
          _this.trg.d.hx.gotoAndStop(2);
          _this.trg.d.d.hx.gotoAndStop(2);
        } else {
          _this.trg.d.hx.gotoAndStop(1);
          _this.trg.d.d.hx.gotoAndStop(1);
        }
        if (_this.trg.eternal) {
          if (
            enfcheckx(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              400
            ) &&
            _this.trg.alter == 1
          ) {
            _this.trg.d.gotoAndStop(6);
          }
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              100
            ) &&
            _this.trg.alter == 3
          ) {
            _this.trg.d.gotoAndStop(6);
          }
          if (
            (enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              100
            ) ||
              random(100) == 0) &&
            _this.trg.alter == 2 &&
            _this.ashut < 6
          ) {
            _this.trg.d.gotoAndStop(6);
          }
        } else if (_this.trg.gh && random(300) == 0) {
          if (_this.trg.alter != 3) {
            _this.trg.d.gotoAndStop(5);
          }
        }
      } else {
        _this.trg.xbew *= 0.8;
        _this.trg.ybew *= 0.8;
        this.trgnextd();
        if (
          _this.trg.d.d._currentframe > 20 &&
          _this.trg.d._currentframe == 5
        ) {
          _this.trg.dones = true;
          if (_this.trg.alter != 3) {
            this.quadf(_this.trg.xp, _this.trg.yp, 7);
          }
        }
        if (_this.trg.d._currentframe == 6) {
          if (_this.trg.d.d._currentframe == 14) {
            if (_this.trg.alter == 3) {
              boil(false, 1);
              boil(true, 1);
            } else if (_this.trg.alter == 2) {
              boil(false, 2);
              if (_this.ashut < 6 && _root.chaps > 2) {
                boil(false, 2);
              }
            } else {
              this.quadf(_this.trg.xp, _this.trg.yp, 13.5);
            }
          }
        }
      }
      break;
    case 17:
      randrun();
      if ((_this.fra + _this.trg.e) % 3 == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          1 + random(10),
          Math.random() * 0.9 + 0.5
        );
      }
      _this.trg.xbew *= 0.6;
      _this.trg.ybew *= 0.6;
      break;
    case 15:
      _this.trg.pbh = _this.fra2;
      this.trgnextd();
      if (_this.trg.alter == 2) {
        _this.blackout = 2;
      }
      if ((_this.fra + _this.trg.e) % 5 == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          1 + random(10),
          Math.random() * 0.7 + 0.5
        );
      }
      _this.trg.xbew *= 0.9;
      _this.trg.ybew *= 0.9;
      switch (_this.trg.mode) {
        case 1:
          if (
            (_this.trg.d._currentframe == 1 && _this.trg.modedone) ||
            (random(30) == 0 && _this.fra - _this.trg.mof > 30)
          ) {
            _this.trg.mode = 2;
            _this.trg.modedone = false;
          } else {
            if (_this.trg.eternal) {
              _this.trg.d.gotoAndStop(6);
            } else {
              _this.trg.d.gotoAndStop(5);
            }
            if (
              (_this.trg.d.d._currentframe > 10 && !_this.trg.modedone) ||
              (_this.trg.d._currentframe == 6 &&
                (_this.trg.d.d._currentframe == 11 ||
                  _this.trg.d.d._currentframe == 18 ||
                  _this.trg.d.d._currentframe == 27))
            ) {
              if (_this.trg.alter == 3) {
                quadf(_this.trg.xp, _this.trg.yp, 7, true);
              } else if (_this.trg.alter == 2) {
                quadf(_this.trg.xp, _this.trg.yp, 7, 2);
              } else {
                this.quadf(_this.trg.xp, _this.trg.yp, 7);
              }
              if (_this.trg.eternal) {
                this.boil();
                if (_this.trg.hp < _this.trg.mhp + 10) {
                  _this.trg.hp = _this.trg.hp + 1;
                }
              }
              _this.trg.modedone = true;
              _root.soundy("animal_squish" + random(3) + ".wav", 100);
            }
          }
          break;
        case 2:
          if (_this.trg.eternal) {
            _this.trg.rep = 2;
          }
          _this.trg.mof = _this.fra;
          if (_this.trg.eternal) {
            pathfind(_this.trg, _this.playx, _this.playy, 0.7);
            _this.trg.d.gotoAndStop(2);
            this.sideflip(_this.trg.xbew * 3);
            if (random(40) == 0) {
              _this.trg.modedone = false;
              _this.trg.mode = 1;
            }
          } else {
            randrun();
          }
          break;
        default:
          _this.trg.modedone = false;
          _this.trg.mode = random(2) + 1;
          _this.trg.mof = _this.fra;
          if (_this.trg.eternal) {
            _this.trg.rep = 2;
          }
      }
      break;
    case 38:
      this.bord();
      markhere(_this.trg);
      _this.trg.xbew *= 0.7;
      _this.trg.ybew *= 0.7;
      if (
        _this.trg.d._currentframe <= 5 ||
        (_this.trg.d._currentframe == 5 &&
          _this.trg.d.d._currentframe > 17 &&
          _this.trg.eternal)
      ) {
        if (random(10) == 0) {
          splater(
            _this.trg.xp,
            _this.trg.yp,
            random(10),
            Math.random() * 0.3 + 0.2
          );
        }
        this.trgnextd();
        this.firemode(200, 5);
        if (
          enfcheckx(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            400
          ) ||
          _this.trg.telp > 20
        ) {
          _this.trg.telp = _this.trg.telp + 1;
        }
        _this.trg.telp += Math.random() * 0.1;
        if (_this.trg.telp > 20) {
          let z = 0;
          while (z < 10) {
            if (_this.trg.xpp != undefined) {
              break;
            }
            this.telpx();
            z++;
          }
          if (
            (_this.trg.d._currentframe == 1 ||
              (_this.trg.d._currentframe == 5 &&
                _this.trg.d.d._currentframe > 17 &&
                _this.trg.eternal)) &&
            (_this.trg.telp > 40 ||
              (_this.trg.eternal && _this.trg.telp > 28)) &&
            _this.trg.xpp != undefined
          ) {
            _this.trg.d.gotoAndStop(6);
          }
        }
        _this.trg.bh = true;
      } else {
        _this.trg.bh = false;
        this.trgnextd();
        if (_this.trg.eternal) {
          if (
            _this.trg.d._currentframe == 6 &&
            _this.trg.d.d._currentframe == 5
          ) {
            quadf(_this.trg.xp, _this.trg.yp + 10, 7, _this.trg.alter - 1);
            _root.soundy("bloodshoot" + random(3) + ".wav");
          }
        }
        if (_this.trg.d._currentframe == 1 && _this.trg.xpp != undefined) {
          _this.trg.d.gotoAndStop(7);
          if (
            this.enfcheck(
              _this.trg,
              _this.xpp,
              _this.trg.ypp,
              _this.player.xp,
              _this.player.yp,
              810000
            ) <= 80
          ) {
            // bug? _this.xpp instead of _this.trg.xpp
            _this.trg.xpp = undefined;
            let z = 0;
            while (z < 100) {
              if (_this.trg.xpp != undefined) {
                break;
              }
              this.telpx();
              z++;
            }
          }
          if (_this.trg.xpp > 0 && _this.trg.ypp > 0) {
            _this.trg.xp = _this.trg.xpp;
            _this.trg.yp = _this.trg.ypp;
          }
          _this.trg.xpp = undefined;
          _this.trg.telp = 0;
        }
      }
      if (_this.trg.fire <= 0) {
        _this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          1000
        );
        _this.enf = 0.33 / _this.enf;
        _this.trg.xbew -= _this.xenf * _this.enf;
        _this.trg.ybew -= _this.yenf * _this.enf;
      }
      break;
    case 59:
      markhere(_this.trg);
      _this.trg.xbew *= 0.65;
      _this.trg.ybew *= 0.65;
      let f1: number | boolean = false;
      let f2 = this.trgnextd();
      if (f2 == 2 || f2 == 5) {
        _this.trg.d.gotoAndStop(6);
      }
      if (
        ((_this.trg.d._currentframe == 2 || _this.trg.d._currentframe == 5) &&
          _this.trg.d.d._currentframe == 29) ||
        (_this.trg.d._currentframe == 6 && _this.trg.d.d._currentframe == 5)
      ) {
        _root.soundy("Meat_jumps" + random(5) + ".wav");
      }
      if (_this.trg.d._currentframe == 1) {
        f1 = true;
        if (random(30) == 0) {
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              200
            )
          ) {
            _this.trg.d.gotoAndStop(8);
          }
        }
        if (random(20) == 0) {
          enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          _this.enf = 100 / _this.enf;
          this.posw(
            _this.trg.xp - _this.xenf * _this.enf,
            _this.trg.yp - _this.yenf * _this.enf,
            0
          );
          _this.trg.xpp = _this.xenf;
          _this.trg.ypp = _this.yenf;
          if (_this.trg.yp > _this.trg.ypp) {
            _this.trg.d.gotoAndStop(2);
          } else {
            _this.trg.d.gotoAndStop(5);
          }
          _this.trg.f1 = 0;
          f1 = false;
        }
      } else if (
        _this.trg.d._currentframe == 2 ||
        _this.trg.d._currentframe == 5
      ) {
        if (_this.trg.d.d._currentframe > 4) {
          _this.trg.bh = _this.trg.d.d._currentframe < 27;
          if (_this.trg.d.d._currentframe > 27) {
            if (_this.trg.d.d._currentframe == 29) {
              _this.f1 = 2;
              if (_this.trg.eternal) {
                _this.f1 = true;
              }
              quadf(_this.trg.xp, _this.trg.yp + 10, 7, _this.f1);
              _root.soundy("meatheadshoot" + (_this.fra % 3) + ".wav");
            }
            telpx(true);
          } else {
            _this.trg.f1 = Math.min(1, _this.trg.f1 * 1.07 + 0.005);
            _this.trg.xp =
              _this.trg.xpp * _this.trg.f1 + _this.trg.xp * (1 - _this.trg.f1);
            _this.trg.yp =
              _this.trg.ypp * _this.trg.f1 + _this.trg.yp * (1 - _this.trg.f1);
          }
        }
        f1 = false;
      } else if (_this.trg.d._currentframe == 6) {
        f1 = true;
      } else if (_this.trg.d._currentframe == 8) {
        if (_this.trg.d.d._currentframe == 9) {
          _root.soundy("heartout.wav", 70);
          trg2 = this.green();
          if (_this.trg.eternal) {
            trg2.hom = 3;
            colorit(trg2, 0.8, 1, 2.5, 0, 0, 0);
            trg2.longshot = 2;
            trg2.dm = -26;
            trg2.d._yscale = _this._loc0_ = 240;
            trg2.d._xscale = _this._loc0_;
          }
        }
        f1 = true;
      }
      if (f1) {
        _this.trg.bh =
          (_this.trg.d._currentframe != 2 && _this.trg.d._currentframe != 5) ||
          _this.trg.d.d._currentframe < 30;
        _this.trg.xp = _this.trg.xpp;
        _this.trg.yp = _this.trg.ypp;
      }
      break;
    case 60:
      if (_this.trg.d._currentframe != 5) {
        _this.trg.d.gotoAndStop(1);
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
      _this.trg.xp = _this.trg.xpp;
      _this.trg.yp = _this.trg.ypp;
      if (_this.trg.d._currentframe == 1) {
        if (_this.trg.spinny > 0) {
          if (_this.trg.spinny++ > 250) {
            _this.trg.spinny = undefined;
          } else {
            if (_this.trg.spinny > 125) {
              _this.f1 = 25 - _this.trg.spinny * 0.1;
            } else {
              _this.f1 = _this.trg.spinny * 0.1;
            }
            _this.f1 += 1;
            _this.f1 = Math.min(15, _this.f1) * 1.4;
            _this.trg.firer += Math.min(6, 2 + _this.f1 * 0.3);
            if (_this.trg.revers) {
              _this.f1 = 0 - _this.f1;
            }
            _this.trg.rp += _this.f1;
            if (_this.trg.firer > 10) {
              _this.trg.firer = 0;
              f2 = ((0 - _this.trg.rp) / 180) * 3.141592653589793;
              _this.f1 = 8;
              _this.xenf = Math.sin(f2) * _this.f1;
              _this.yenf = Math.cos(f2) * _this.f1;
              trg2 = this.ffmo(
                _this.trg.xp + _this.xenf * 3,
                _this.trg.yp + _this.yenf * 3,
                0,
                _this.xenf,
                _this.yenf,
                0,
                9,
                _this.trg.s,
                true
              );
              if (_this.trg.alter == 2) {
                trg2.dm -= 3.5;
              } else {
                trg2.dm -= 1;
              }
            }
          }
        } else {
          let f1 =
            rotget2(
              _this.trg.xp - _this.player.xp - _this.player.xbew * 1,
              _this.trg.yp - _this.player.yp - _this.player.xbew * 1
            ) - 90;
          f1 -= _this.trg.rp;
          enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            1000
          );
          f2 = 3 + _this.trg.alter * 3 - _this.enf / 330;
          f1 = absmax(rotrund(f1), f2);
          if (Math.abs(f1) < f2 / 2) {
            if (random(10) == 0) {
              _this.trg.d.gotoAndStop(5);
            }
          } else if (_this.trg.eternal) {
            if (random(50) == 0) {
              if (!_this.mheart || random(5) == 0) {
                _this.trg.spinny = 1;
                _this.trg.revers = f1 < 0;
                _this.trg.firer = -10;
              }
            }
          }
          _this.trg.rp += f1;
        }
      } else if (_this.trg.d._currentframe == 5) {
        if (this.trgnextd(_this.trg.d.d.d)) {
          _this.trg.d.gotoAndStop(1);
        }
        if (_this.trg.d.d.d.doit) {
          _this.trg.d.d.d.doit = false;
          lasershowx(_this.trg.rp * _this.p180);
        }
        _this.trg.d.d.d._rotation = _this.trg.rp;
      }
      _this.trg.d.hx._rotation = _this.trg.rp;
      break;
    case 90:
      bord(580, 60, 410, 170);
      if (_this.fra % 3 == 0) {
        let i = 0;
        while (i < _this.ball.length) {
          _this.trg3 = _this.ball[i];
          if (_this.trg.s == _this.trg3.s && !_this.trg3.dones) {
            if (_this.trg3 != _this.trg && _this.trg3) {
              _this.enf = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.trg3.xp,
                _this.trg3.yp,
                100
              );
              if (_this.enf > 0) {
                _this.enf = ((100 - _this.enf) / _this.enf) * 0.0003;
                _this.xenf *= _this.enf;
                _this.yenf *= _this.enf;
                _this.trg.xbew += _this.xenf;
                _this.trg.ybew += _this.yenf;
                _this.trg3.xbew -= _this.xenf;
                _this.trg3.ybew -= _this.yenf;
              }
            }
          }
          i++;
        }
      }
    case 26:
      if (_this.trg.s == 26) {
        bord(580, 60, 410, 170);
      }
      _this.trg.outway = false;
      if (random(10) == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          random(10),
          Math.random() * 0.5 + 0.4
        );
      }
      if (
        _this.trg.fire <= 0 ||
        (_this.trg.s == 90 && _this.trg.d._currentframe < 3)
      ) {
        _this.enf = enfcheck(
          _this.trg.xp,
          _this.trg.yp,
          _this.player.xp,
          _this.player.yp,
          1000
        );
        _this.enf = 0.13 / _this.enf;
        if (_this.trg.alter == 2 && _this.trg.s == 26) {
          _this.enf *= 3;
        }
        _this.trg.xbew -= _this.xenf * _this.enf;
        _this.trg.ybew -= _this.yenf * _this.enf;
      }
      _this.trg.xbew *= 0.93;
      _this.trg.ybew *= 0.93;
    case 56:
    case 12:
    case 27:
    case 42:
      if (_this.trg.s == 27) {
        if (
          (_this.trg.d._currentframe == 5 || _this.trg.d._currentframe == 6) &&
          (_this.trg.d.d._currentframe == 9 ||
            _this.trg.d.d._currentframe == 55)
        ) {
          _root.soundy("animal_squish" + random(3) + ".wav", 100);
        }
        if (_this.trg.eternal) {
          if (_this.trg.d._currentframe < 3) {
            if (random(100) == 0) {
              _this.trg.d.gotoAndStop(6);
            }
          }
          if (
            _this.trg.d._currentframe == 6 &&
            _this.trg.d.d._currentframe == 17
          ) {
            _this.trg.d.d.gotoAndStop(52);
          }
          if (
            _this.trg.d._currentframe == 6 &&
            _this.trg.d.d._currentframe == 55
          ) {
            quadf(_this.trg.xp, _this.trg.yp, 8, 1);
          }
          if (
            _this.trg.d._currentframe == 5 &&
            _this.trg.d.d._currentframe == 11
          ) {
            _this.trg.reps = 2;
          }
          if (
            _this.trg.d._currentframe == 5 &&
            _this.trg.d.d._currentframe == 41 &&
            _this.trg.alter == 2
          ) {
            if (_this.trg.reps-- > 0) {
              _this.trg.d.d.gotoAndStop(23);
              _this.trg.fir = -1;
            } else {
              _this.trg.fir = undefined;
            }
          }
          if (
            _this.trg.d._currentframe == 5 &&
            _this.trg.d.d._currentframe == 39
          ) {
          }
        }
      }
      f1 = 4;
      if (_this.trg.s == 42) {
        _this.trg.xp = _this.trg.xpp;
        _this.trg.yp = _this.trg.ypp;
        f1 = 12;
        _this.levz[_this.trg.til] = 3;
      }
      if (_this.justnow > 30 && _this.trg.s == 42) {
        _this.trg.d.gotoAndStop(3);
      } else {
        if (_this.trg.s != 26 && _this.trg.s != 90) {
          _this.trg.xbew *= 0.7;
          _this.trg.ybew *= 0.7;
        }
        if (
          _this.trg.s != 56 ||
          _this.trg.d.d._currentframe != 22 ||
          _this.trg.fire > 0
        ) {
          this.trgnextd();
        } else if (random(50) == 0) {
          _this.trg.d.gotoAndStop(5);
          _this.trg.d.d.gotoAndStop(49);
        }
        if (_this.trg.alter == 2 && _this.trg.s == 26) {
          if (_this.trg.eternal) {
            if (_this.fra % 4 == 0) {
              trg2 = this.parc(
                "bloo",
                _this.trg.xp + this.crand(),
                _this.trg.yp + crand(Math.random() * 8)
              );
            }
          }
        } else if (_this.trg.s != 27 || _this.trg.d._currentframe != 6) {
          this.firemode(200, f1);
        }
      }
      if (_this.trg.s == 56) {
        markhere(_this.trg);
        if (_this.trg.whuz) {
          if (_this.trg.d._currentframe < 3) {
            _this.trg.d.gotoAndStop(2);
            _this.trg.bh = false;
            this.telpx();
            if (random(20) == 0) {
              _this.trg.d.gotoAndStop(5);
            }
          } else {
            _this.trg.bh = true;
          }
        } else {
          _this.trg.whuz = true;
          _this.trg.d.gotoAndStop(5);
          _this.trg.d.d.gotoAndStop(21);
        }
        _this.trg.bh =
          _this.trg.d._currentframe != 5 ||
          (_this.trg.d.d._currentframe > 11 &&
            _this.trg.d.d._currentframe < 54);
        if (
          _this.trg.d._currentframe == 5 &&
          (_this.trg.d.d._currentframe == 11 ||
            _this.trg.d.d._currentframe == 54)
        ) {
          _root.soundy("Meat_jumps" + random(5) + ".wav");
        }
        if (
          _this.trg.d._currentframe == 5 &&
          _this.trg.eternal &&
          _this.trg.d.d._currentframe == 3
        ) {
          _this.trg.reps = 2;
        }
        if (
          _this.trg.d._currentframe == 5 &&
          _this.trg.eternal &&
          _this.trg.d.d._currentframe == 43
        ) {
          if (_this.trg.reps-- > 0) {
            _this.trg.d.d.gotoAndStop(31);
          }
        }
      }
      if (_this.trg.s == 56) {
        _this.trg.xp = _this.trg.xpp;
        _this.trg.yp = _this.trg.ypp;
      }
      if (_this.trg.s == 42) {
        _this.levz[_this.trg.til] = 2;
      }
      break;
    case 26.5:
      _this.trg.s = 26;
      _this.trg._visible = true;
      _this.trg.bh = true;
      if (random(10) == 0 && _this.trg._visible) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          random(10),
          Math.random() * 0.5 + 0.2
        );
      }
      break;
    case 11:
      if (_this.trg.specoz == 23) {
        if (_this.trg.fast) {
          f1 = 1.1;
        } else {
          f1 = 0.6;
        }
        pathfind(_this.trg, _this.playx, _this.playy, f1);
        firewalk();
        _this.trg.fire--;
      } else {
        if (!_this.trg.bnuts) {
          _this.trg.d.bb._visible = false;
        } else {
          firewalk();
        }
        _this.trg.xbew *= 0.75;
        _this.trg.ybew *= 0.75;
        randrun();
      }
      if (random(10) == 0) {
        splater(
          _this.trg.xp,
          _this.trg.yp,
          random(10),
          Math.random() * 0.5 + 0.4
        );
      }
      walkframe(2);
      this.sideflip(_this.trg.xbew);
      break;
    case 35:
      _this.trg.phb = true;
      if (_this.trg.trg2 == undefined) {
        _this.trg.trg2 = _this._loc0_ = this.create(
          _this.trg.xp,
          _this.trg.yp,
          0,
          0,
          0,
          0,
          26
        );
        trg2 = _this._loc0_;
        _this.trg.trg2.outway = true;
        trg2.trg2 = _this.trg;
        if (trg2.eternal) {
          _this.trg.eternal = true;
          _this.trg.specoz = 23;
          _this.trg._yscale = _this._loc0_ = trg2._yscale;
          _this.trg._xscale = _this._loc0_;
          _this.trg.hp += 20;
          this.speco(_this.trg);
        }
      } else {
        trg2 = _this.trg.trg2;
        if (trg2.hp <= 0 || random(1000) == 0) {
          _this.trg.gosplash = true;
          attach(_this.trg, 11);
          _this.trg.s = 11;
          _this.trg.see = false;
          _this.trg.outway = true;
          _this.trg.hp = _this.hps[_this.trg.s];
          splater(
            _this.trg.xp,
            _this.trg.yp,
            random(10) + 1,
            Math.random() + 0.6
          );
          if (_this.trg.eternal) {
            _this.trg.hp += 15;
          }
        } else {
          trg2.d._xscale = _this.trg.d._xscale;
          trg2.d.gotoAndStop(6);
          trg2.fra = -100;
          trg2.s = 26.5;
          trg2.pbh = true;
          trg2.alter = 1;
          _this.trg.fire--;
          if (_this.trg.d._currentframe < 3) {
            trg2.xp = _this.trg.xp;
            trg2.yp = _this.trg.yp;
            trg2.ybew = _this._loc0_ = 0;
            trg2.xbew = _this._loc0_;
            trg2._visible = false;
            trg2.bh = false;
            if (_this.fra % 4 == 0) {
              _this.enf = _this._loc0_ = enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp + _this.player.xbew * 1.5,
                _this.player.yp + _this.player.ybew * 1.5,
                130
              );
              if (_this._loc0_) {
                _this.trg.see = true;
                if (_this.trg.lastv) {
                  _this.enf = 14 / _this.enf;
                  trg2.xbew = (0 - _this.xenf) * _this.enf;
                  trg2.ybew = (0 - _this.yenf) * _this.enf;
                  _this.trg.d.gotoAndStop(6);
                  _this.trg.fire = 30;
                  _root.soundy("meatheadshoot" + random(3) + ".wav");
                  if (_this.trg.eternal) {
                    quadf(_this.trg.xp, _this.trg.yp, 9, 1);
                  }
                }
              } else {
                _this.trg.see = false;
              }
            }
          }
          if (_this.trg.d._currentframe >= 3) {
            _this.enf = enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              trg2.xp,
              trg2.yp,
              30000
            );
            if (_this.enf < 5 && _this.trg.fire < 15) {
              _this.trg.d.gotoAndStop(1);
            } else {
              if (_this.trg.d._xscale < 0) {
                _this.xenf = 0 - _this.xenf;
              }
              let i = 0;
              while (i < 9) {
                _this.trg3 = _this.trg.d["n" + i];
                f1 = (7 - i) / 8;
                _this.trg3._x = (0 - _this.xenf) * f1;
                f2 = Math.abs(i - 4);
                f2 = 16 - f2 * f2;
                let f3 = 100;
                f2 *= Math.max(0, f3 - _this.enf) / f3;
                _this.trg3._y = (0 - _this.yenf) * f1 - 25 + f2 + i - 6;
                _this.trg3._visible = true;
                i++;
              }
              if (_this.trg.d._xscale < 0) {
                _this.xenf = 0 - _this.xenf;
              }
              _this.enf = 0.7 / _this.enf;
              trg2.xbew += _this.xenf * _this.enf;
              trg2.ybew += _this.yenf * _this.enf;
              f1 = 0.9 + _this.trg.fire * 0.0028;
              trg2.xbew *= f1;
              trg2.ybew *= f1;
              trg2._visible = true;
              trg2.bh = true;
            }
          }
        }
      }
    case 87:
    case 58:
    case 24:
    case 10:
      if (_this.trg.s == 87 && _this.trg.eternal) {
        if (_this.fra10 && random(3) != 0) {
          trg2 = this.parc(
            "bloo",
            _this.trg.xp + crand(4),
            _this.trg.yp + crand(4)
          );
          trg2._xscale *= 1.2;
          trg2._yscale = trg2._xscale;
          if (random(3) == 0) {
            splater(
              _this.trg.xp + crand(4),
              _this.trg.yp + crand(4),
              31 + random(10),
              Math.random() + 0.2
            );
          }
          colorit(trg2, 0, 2, 0, 0, 40, 0);
        }
      }
      if (_this.trg.s == 24 && _this.trg.eternal) {
        if (_this.trg.d._currentframe != 5) {
          if (
            (enfcheckx(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              300
            ) &&
              random(100) == 0) ||
            (enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              80
            ) > 0 &&
              random(1000) == 0)
          ) {
            _this.trg.gosplash = true;
            if (_this.trg.alter == 2) {
              _this.trg.d.gotoAndStop(6);
            } else {
              _this.trg.d.gotoAndStop(5);
            }
            _this.trg.outway = true;
            _this.trg.hp = Math.max(20, _this.trg.hp + 5);
            splater(
              _this.trg.xp,
              _this.trg.yp,
              random(10) + 1,
              Math.random() + 0.6
            );
          }
        }
      }
      _this.gochar = _this.trg.s != 58;
      if (_this.trg.s != 35) {
        f1 = this.trgnextd();
        if (_this.trg.d._currentframe == 6 && _this.trg.s == 58) {
          telpx(true);
        }
        if (f1 == 6 && _this.trg.s == 58) {
          let i = 0;
          while (i < 100 && _this.trg.xpp == undefined) {
            telpx(true);
            i++;
          }
          if (_this.trg.xpp != undefined) {
            _this.trg.xp = _this.trg.xpp;
            _this.trg.yp = _this.trg.ypp;
          }
          _this.trg.d.gotoAndStop(5);
          _this.trg.xpp = undefined;
        }
      }
      if (_this.trg.s == 58) {
        _this.trg.bh =
          (_this.trg.d._currentframe != 5 || _this.trg.d.d._currentframe > 3) &&
          (_this.trg.d._currentframe != 6 || _this.trg.d.d._currentframe < 7);
        if (
          (_this.trg.d._currentframe == 5 &&
            _this.trg.d.d._currentframe == 3) ||
          (_this.trg.d._currentframe == 6 && _this.trg.d.d._currentframe == 7)
        ) {
          _root.soundy("Meat_jumps" + random(5) + ".wav");
        }
      }
      if (_this.trg.d._currentframe < 3) {
        if (random(10) == 0 && _this.trg.s != 10) {
          if (_this.trg.s == 87) {
            splater(
              _this.trg.xp,
              _this.trg.yp,
              random(10) + 31,
              Math.random() * 0.5 + 0.2
            );
          } else {
            splater(
              _this.trg.xp,
              _this.trg.yp,
              random(10),
              Math.random() * 0.5 + 0.2
            );
          }
        }
        this.walkframe();
        if (_this.trg.s == 58) {
          if (!_this.trg.eternal) {
            pathfind(_this.trg, _this.playx, _this.playy, 0.8);
          } else {
            _this.trg.xbew *= 0.7;
            _this.trg.ybew *= 0.7;
            _this.trg.spoo = _this.trg.spoo + 1;
            if (_this.trg.spoo > 0) {
              if (
                _this.trg.spoo == 10 ||
                (_this.trg.spoo == 20 && _this.fra < 5000) ||
                (_this.trg.spoo == 30 && _this.fra < 2500)
              ) {
                _this.b1 = _this.allets;
                _this.allets = false;
                _this.enf = enfcheck(
                  _this.trg.xp,
                  _this.trg.yp,
                  _this.player.xp,
                  _this.player.yp,
                  1000
                );
                _this.enf = -15 / _this.enf;
                _this.xenf *= _this.enf;
                _this.yenf *= _this.enf;
                _this.trg.hp -= 4;
                trg2 = this.create(
                  _this.trg.xp + _this.xenf,
                  _this.trg.yp + _this.yenf,
                  0,
                  0,
                  0,
                  0,
                  58
                );
                trg2.specoz = 23;
                trg2.fra = -100;
                trg2.hp *= 0.666;
                trg2._yscale *= 0.82;
                trg2._xscale = _this._loc0_;
                this.speco(trg2);
                _root.soundy("summonsound.wav", 80);
                this.sideflip(_this.xenf);
                _this.allets = _this.b1;
              }
              if (_this.trg.spoo > 50) {
                _this.trg.spoo = -100;
              }
            } else if (_this.trg.spoo == 0) {
              _this.trg.spoo = undefined;
            } else {
              if (
                linecheck(
                  _this.player.xp,
                  _this.player.yp,
                  _this.trg.xp,
                  _this.trg.yp
                )
              ) {
                if (
                  enfcheck(
                    _this.trg.xp,
                    _this.trg.yp,
                    _this.player.xp,
                    _this.player.yp,
                    130
                  )
                ) {
                  if (_this.ashut < 5) {
                    _this.trg.spoo = 1;
                  }
                }
              }
              this.sideflip(0 - _this.trg.xp + _this.player.xp);
            }
          }
        } else if (_this.trg.s == 24) {
          pathfind(
            _this.trg,
            _this.playx,
            _this.playy,
            0.4 + _this.trg.alter * 0.35
          );
        } else {
          pathfind(_this.trg, _this.playx, _this.playy, 0.6);
        }
        this.sideflip(_this.trg.xbew);
        if (_this.trg.s == 87) {
          if (random(60) == 0) {
            if (
              enfcheck(
                _this.trg.xp,
                _this.trg.yp,
                _this.player.xp,
                _this.player.yp,
                130
              )
            ) {
              _this.trg.d.gotoAndStop(5);
              this.sideflip(0 - _this.xenf);
            }
          }
        }
        if (_this.trg.s == 58) {
          if (random(30) == 0 && !_this.trg.lastv && _this.trg.spoo <= 0) {
            _this.trg.d.gotoAndStop(6);
          }
        }
      } else {
        if (
          _this.trg.s == 87 &&
          _this.trg.d._currentframe == 5 &&
          _this.trg.d.d._currentframe == 5
        ) {
          trg2 = this.green();
          _root.soundy("heartout.wav", 70);
          if (_this.trg.eternal) {
            trg2.hom = 3;
            colorit(trg2, 0.8, 1, 2.5, 0, 0, 0);
            trg2.longshot = 2;
            trg2.dm = -26;
            trg2.d._yscale = _this._loc0_ = 240;
            trg2.d._xscale = _this._loc0_;
            trg2.pois = 10;
          }
        }
        if (_this.trg.alter == 2 && _this.trg.s != 35) {
          if (
            enfcheck(
              _this.trg.xp,
              _this.trg.yp,
              _this.player.xp,
              _this.player.yp,
              200
            )
          ) {
            _this.enf = 0.5 / _this.enf;
            _this.trg.xbew += _this.xenf * _this.enf;
            _this.trg.ybew += _this.yenf * _this.enf;
          }
          _this.trg.xbew *= 0.83;
          _this.trg.ybew *= 0.83;
        } else {
          _this.trg.xbew *= 0.7;
          _this.trg.ybew *= 0.7;
        }
      }
  }
}
function physix() {
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    let f1 = 1;
    if (_this.trg.s < 5) {
      if (_this.sloww > -40) {
        f1 = Math.max(0.75, 0.5 - _this.sloww / 80);
        if (_this.sloww > 0) {
          _this.trg.free = true;
        }
      } else {
        f1 = 1;
      }
    } else if (_this.slow > -40) {
      f1 = Math.max(0.5, 0.5 - _this.slow / 80);
      if (_this.slow > 0) {
        _this.trg.free = true;
      }
    } else if (_this.trg.spid > 0) {
      _this.trg.spid--;
      _this.trg.xbew *= 0.7;
      _this.trg.ybew *= 0.7;
    }
    if (_this.trg.s == 7 || _this.trg.s == 8) {
      if (Math.abs(_this.trg.ybew) <= 0) {
        _this.trg.ybew = _this.trg.ypp * 0.7;
      }
    }
    if (_this.trg.frezz <= 0 || _this.scare > 0) {
      if (f1 == 1) {
        _this.trg.xp += _this.trg.xbew;
        _this.trg.yp += _this.trg.ybew;
      } else {
        _this.trg.xp += _this.trg.xbew * f1;
        _this.trg.yp += _this.trg.ybew * f1;
      }
    }
    _this.trg.xb = _this.trg.yb = _this.trg.rr = 0;
  }
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    if (_this.trg.dones) {
      _this.trg.xbew = _this.trg.ybew = 0;
      _this.trg2 = undefined;
      if (_this.trg.s == 9) {
        if (_this.trg.bomb) {
          _this.bomf.push([_this.trg.xp, _this.trg.yp, true, _this.trg.pois]);
        } else {
          _this.trg2 = parc(
            "bloodsplash",
            _this.trg.xp,
            _this.trg.yp + _this.trg.d._y,
            random(360),
            _this.trg.d._xscale,
            _this.trg.dpppp + 123
          );
          if (_this.trg.colo) {
            var _loc3_ = new flash.geom.Transform(_this.trg2);
            _loc3_.colorTransform = _this.trg.colo;
          }
          if (_this.blackout == 2) {
            colorit(_this.trg2, 0, 0, 0, 0, 0, 0);
          }
        }
        _this.trg.done = true;
      }
      switch (_this.trg.s) {
        case 1:
          break;
        case 43:
        case 20:
          _this.trg.d.gotoAndStop(5);
          _this.trg2 = _this.trg.d.d;
          if (_this.trg2._currentframe < 66 && _this.fra % 10 == 0) {
            _this.trg.lasts = _this.trg2._currentframe < 55;
            gosplash();
          }
          break;
        case 5:
          _this.trg2 = _this.trg.d.d.d;
          break;
        case 2:
          if (_this.trg.bomb) {
            _this.trg.spl = 30;
            if (_this.trg.bombo) {
              _this.trg.header = 100;
            } else {
              _this.trg.header = 300;
            }
            _this.trg.dfr = true;
            _this.trg.s = 4;
            attach(_this.trg, 4);
            _this.trg.d.gotoAndStop(5);
            _this.trg2 = undefined;
            break;
          }
        case 9:
          if (!_this.trg.dsound) {
            _this.trg.dsound = true;
            _root.soundy("TearImpacts" + random(3) + ".mp", 85);
          }
        case 7:
        case 8:
          if (_this.trg.s != 4) {
            if (
              (random(30) == 0 || _this.trg.spll) &&
              (!_this.trg.firstt || !_this.trg.tooth)
            ) {
              splater(
                _this.trg.xp,
                _this.trg.yp,
                _this.trg.spl + 1 + random(10),
                Math.random() * 0.8 + 0.1
              );
            }
            if (!_this.trg.firstt) {
              _this.trg.firstt = true;
              if (_this.trg.tooth) {
                _this.trg.d._rotation = random(60) - 30;
                if (random(2) == 0) {
                  _this.trg.d._xscale *= -1;
                }
              } else {
                _this.trg.d._rotation = random(360);
              }
            }
            _this.trg2 = _this.trg.d;
          }
          break;
        case 19:
          if (_root.levz[_root.lev!] <= 0) {
            let f1 = true;
            for (let a in _this.ball) {
              _this.trg2 = _this.ball[a];
              if (_this.trg2.s == 19 && !_this.trg2.dones) {
                f1 = false;
              }
            }
            if (f1) {
              _this.trg.bossd = true;
            }
          }
        default:
          if (_this.trg.s == 77) {
            _this.trg.d.gotoAndStop(14);
          } else if (_this.trg.s == 76) {
            _this.trg.d.gotoAndStop(12);
          } else if (_this.trg.s == 73) {
            _this.trg.d.gotoAndStop(9);
          } else if (_this.trg.s == 72) {
            _this.trg.d.gotoAndStop(6);
          } else if (_this.trg.s == 28) {
            _this.trg.d.gotoAndStop(_this.trg.mag + 6);
          } else if (!_this.trg.dfr) {
            _this.trg.d.gotoAndStop(3);
          }
          _this.trg2 = _this.trg.d.d;
          if (_this.trg.s == 102) {
            if (_this.trg2._currentframe == 17) {
              _root.soundy("superholy.wav", 200);
            }
          } else if (_this.trg.s == 100) {
            if (
              _this.trg2._currentframe == 66 ||
              _this.trg2._currentframe == 15 ||
              _this.trg2._currentframe == 18 ||
              _this.trg2._currentframe == 21 ||
              _this.trg2._currentframe == 24 ||
              _this.trg2._currentframe == 28 ||
              _this.trg2._currentframe == 32 ||
              _this.trg2._currentframe == 38 ||
              _this.trg2._currentframe == 44 ||
              _this.trg2._currentframe == 51 ||
              _this.trg2._currentframe == 75
            ) {
              _this.trg.lasts = _this.trg2._currentframe < 70;
              splater(
                _this.trg.xp,
                _this.trg.yp,
                random(10) + 1 + _this.trg.spl,
                1 + Math.random() * 2
              );
              gosplash();
            }
          } else if (_this.trg.s == 99) {
            if (
              _this.trg2._currentframe == 66 ||
              _this.trg2._currentframe == 3 ||
              _this.trg2._currentframe == 6 ||
              _this.trg2._currentframe == 9 ||
              _this.trg2._currentframe == 12 ||
              _this.trg2._currentframe == 15 ||
              _this.trg2._currentframe == 19 ||
              _this.trg2._currentframe == 35
            ) {
              _this.trg.lasts = _this.trg2._currentframe < 60;
              splater(
                _this.trg.xp,
                _this.trg.yp,
                random(10) + 1 + _this.trg.spl,
                1 + Math.random() * 2
              );
              gosplash();
            }
          } else if (_this.trg.s == 28) {
            if (
              _this.trg2._currentframe > 70 - _this.trg.mag * 18 &&
              _this.trg2._currentframe < 84 - _this.trg.mag * 21 &&
              _this.fra5
            ) {
              splater(
                _this.trg.xp,
                _this.trg.yp,
                random(10) + 1 + _this.trg.spl,
                1 + Math.random() * 2
              );
              gosplash();
            }
          } else if (_this.trg.s == 36) {
            if (_this.trg2._currentframe < 80 && _this.fra % 7 == 0) {
              splater(
                _this.trg.xp,
                _this.trg.yp,
                random(10) + 1 + _this.trg.spl,
                1 + Math.random() * 3.5
              );
              gosplash();
            }
          } else if (!_this.trg.firsttx) {
            _this.trg.firsttx = true;
            gosplash();
          }
          let f1 = Math.random() * 0.7 + 0.4;
          if (_this.trg.s == 14) {
            f1 *= 0.7;
          }
          if (_this.trg2._currentframe <= 3) {
            splater(
              _this.trg.xp,
              _this.trg.yp,
              random(10) + 1 + _this.trg.spl,
              f1
            );
          }
      }
      if (
        _this.trg2._currentframe == _this.trg2._totalframes &&
        _this.trg2._alpha
      ) {
        _this.trg.done = true;
      } else {
        _this.trg2.nextFrame();
      }
      _this.trg.sh._visible = false;
    }
  }
  let e = 0;
  while (e < _this.ball.length) {
    _this.trg = _this.ball[e];
    if (_this.trg.d.done || _this.trg.done || _this.trg.s <= -10) {
      if (_this.trg.s == 4) {
        if (_root.so.data.bomb > 100) {
          _root.locker[35] = true;
        }
      }
      if (_this.trg.s == 30) {
        _this.boils--;
      }
      _this.ball.splice(e, 1);
      removeMovieClip(_this.trg);
      _this.trg.swapDepths(87);
    }
    e++;
  }
  e = 0;
  while (e < _this.ball.length) {
    _this.trg = _this.ball[e];
    _this.trg.gh = false;
    e++;
  }
  topz(3);
  grid.fillRect(grid.rectangle, 0);
  grid2.fillRect(grid2.rectangle, 0);
  tests.fillRect(tests.rectangle, 0);
  e = 0;
  _this.bollocks = [];
  _this.bollocks2 = [];
  while (e < _this.ball.length) {
    _this.trg = _this.ball[e];
    if (_this.trg == _this.player) {
      _this.ea = e;
    }
    e++;
    if (_this.trg.s > 3 && !_this.trg.noneed) {
      if (
        (_this.trg.pbh || _this.trg.outway) &&
        _this.trg.bh &&
        !_this.trg.dones
      ) {
        let f1 = gridp(_this.trg.xp, _this.trg.yp, -0.5, -0.5);
        gridput2([int(f1[0] + _this.gridmax), int(f1[1])], e);
        gridput2([int(f1[0] + _this.gridmax), int(f1[1] + 1)], e);
        gridput2([int(f1[0]), int(f1[1])], e);
        gridput2([int(f1[0]), int(f1[1] + 1)], e);
      } else if (_this.trg.ph && _this.trg.bh && !_this.trg.dones) {
        _this.bollocks.push(e - 1);
      } else if (_this.trg.bh && !_this.trg.dones) {
        let f1 = gridp(_this.trg.xp, _this.trg.yp, -0.5, -0.5);
        gridput([int(f1[0] + _this.gridmax), int(f1[1])], e);
        gridput([int(f1[0] + _this.gridmax), int(f1[1] + 1)], e);
        gridput([int(f1[0]), int(f1[1])], e);
        gridput([int(f1[0]), int(f1[1] + 1)], e);
      }
    } else if (_this.trg.noneed) {
      if (_this.trg.noned-- < 0) {
        _this.trg.noneed = false;
      }
    }
  }
  let i = 1;
  while (i < 300) {
    tests.setPixel(i, i, 1);
    i++;
  }
  let gxee = _this.gxe * _this.gridmax;
  i = 1;
  while (i < gxee) {
    let o = 1;
    while (o < _this.gye) {
      let z = 0;
      while (z < _this.gridmax && grid.getPixel(i + z, o) != 0) {
        e = grid.getPixel(i + z, o) - 1;
        let c = z + 1;
        while (c < _this.gridmax && grid.getPixel(i + c, o) != 0) {
          let a = grid.getPixel(i + c, o) - 1;
          ballhit(e, a);
          c++;
        }
        z++;
      }
      o++;
    }
    i += _this.gridmax;
  }
  _this.bollocks3 = [];
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    if (_this.trg.bh && !_this.trg.outway) {
      if (_this.trg.s < 5 || _this.trg.s == 44 || _this.trg.s == 28) {
        let f1 = this.gridp(_this.trg.xp, _this.trg.yp);
        i = f1[0];
        let o = f1[1];
        let z = 0;
        while (z < _this.gridmax && grid2.getPixel(i + z, o) != 0) {
          let a = grid2.getPixel(i + z, o) - 1;
          ballhit(e, a);
          z++;
        }
        if (_this.trg.s < 5) {
          z = 0;
          while (z < _this.gridmax && grid.getPixel(i + z, o) != 0) {
            let a = grid.getPixel(i + z, o) - 1;
            ballhit(e, a);
            z++;
          }
        }
      }
    }
  }
  for (let i in _this.bollocks) {
    let a = _this.bollocks[i];
    let e = _this.ea;
    ballhit(e, a);
    for (let z in _this.flys) {
      e = _this.flys[z];
      ballhit(e, a);
    }
  }
  tip(3);
  if (_this.flys.length > 2) {
    _this.fll = 0.6666666666666666;
  } else {
    _this.fll = 1;
  }
  _this.flys = [];
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    _this.trg.xbew += _this.trg.xb;
    _this.trg.ybew += _this.trg.yb;
    _this.trg.xb = _this.trg.yb = _this.trg.rr = 0;
  }
  topz(4);
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    if (!_this.trg.ggh && !_this.trg.dones) {
      let f1 = _this.trg.s > 2;
      if (
        _this.trg == _this.player ||
        _this.trg.s == 23 ||
        _this.trg.s == 55 ||
        _this.trg.s == 32 ||
        _this.trg.s == 44
      ) {
        f1 =
          !enfcheckx(_this.trg.xp, _this.trg.yp, 320, 280, 1000) ||
          _this.hhorse > 0;
      }
      if (_this.trg.s == 84) {
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
      } else if ((_this.trg.s < 67 && _this.trg.s > 62) || _this.trg.s == 83) {
        _this.trg.yp = Math.min(410, Math.max(170, _this.trg.yp));
      } else if (_this.trg.flyai) {
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
        _this.trg.yp = Math.min(410, Math.max(180, _this.trg.yp));
      } else if (
        f1 &&
        !_this.trg.sic &&
        !_this.trg.horse &&
        _this.trg.s != 9 &&
        !(_this.trg.s >= 63 && _this.trg.s <= 66)
      ) {
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
        _this.trg.yp = Math.min(420, Math.max(150, _this.trg.yp));
        if (_this.trg == _this.player) {
          if (
            _this.trg.xp == 580 ||
            _this.trg.xp == 60 ||
            _this.trg.yp == 420 ||
            _this.trg.yp == 150
          ) {
            if (_this.horse! < 90) {
              _this.horse = undefined;
              _this.trg.xbew *= 0.6;
              _this.trg.ybew *= 0.6;
            }
            f1 = this.ingrid(_this.trg.xp, _this.trg.yp);
            if (levzz(f1) > 1 && _this.hhorse <= 0) {
              _this.turdb = f1;
            }
          }
        }
      }
      if (_this.trg == _this.player) {
        if (_this.turdb) {
          outgrid(_this.turdb);
          if (
            enfcheck(_this.xenf, _this.yenf, _this.trg.xp, _this.trg.yp, 35)
          ) {
            _this.turdz = _this.levz[_this.turdb];
            _this.levz[_this.turdb] = 0;
          } else {
            _this.turdb = undefined;
          }
        }
      }
      f1 = _this.trg.xp;
      let f2 = _this.trg.yp;
      let f5 = 0,
        f6 = 0;
      _this.siz = _this.sizes[_this.trg.s] + 2;
      let v1 = _this.trg.s;
      if (_this.trg == _this.player) {
        if (_this.ladder != undefined) {
          if (_this.levz[_this.ladder] == 3) {
            _this.levz[_this.ladder] = 0;
          }
        }
      }
      if (_this.trg.shot) {
        if (
          (_this.trg._alpha > 50 && _this.trg.sss != 84 && !_this.trg.knife) ||
          _this.trg.death
        ) {
          if (mhity(f1, f2)) {
            mhix();
          } else if (levzz(_this.f33) == 0.99) {
            if (_this.webs[_this.f33] && !_this.trg.slowed) {
              _this.trg.slowed = true;
              _this.trg.xbew *= 0.64;
              _this.trg.ybew *= 0.64;
            }
          }
        } else if (
          random(Math.max(7 - _root.luck, 1)) == 0 ||
          _this.trg.knife
        ) {
          this.killshit(this.ingrid(_this.trg.xp, _this.trg.yp));
        }
      } else if (_this.trg.flyby == 2) {
        mhix();
      } else if (_this.trg.flyby) {
        let f3 = false;
        for (let i in _this.hardx[v1]) {
          f3 = !f3;
          if (f3) {
            if (mhitx(f1 + _this.hardx[v1][i], f2 + _this.hardy[v1][i])) {
              f5 += _this.hardx[v1][i];
              f6 += _this.hardy[v1][i];
            }
          }
        }
        f3 = true;
        if (Math.abs(f5) > 0 || Math.abs(f6) > 0 || _this.trg.gh) {
          for (let i in _this.hardx[v1]) {
            f3 = !f3;
            if (f3) {
              if (mhitx(f1 + _this.hardx[v1][i], f2 + _this.hardy[v1][i])) {
                f5 += _this.hardx[v1][i];
                f6 += _this.hardy[v1][i];
              }
            }
          }
        }
      } else {
        let f3 = false;
        for (let i in _this.hardx[v1]) {
          f3 = !f3;
          if (f3) {
            if (mhit(f1 + _this.hardx[v1][i], f2 + _this.hardy[v1][i])) {
              f5 += _this.hardx[v1][i];
              f6 += _this.hardy[v1][i];
            }
          }
        }
        f3 = true;
        if (Math.abs(f5) > 0 || Math.abs(f6) > 0 || _this.trg.gh) {
          for (let i in _this.hardx[v1]) {
            f3 = !f3;
            if (f3) {
              if (mhit(f1 + _this.hardx[v1][i], f2 + _this.hardy[v1][i])) {
                f5 += _this.hardx[v1][i];
                f6 += _this.hardy[v1][i];
              }
            }
          }
        }
      }
      if (Math.abs(f5) > 0 || Math.abs(f6) > 0) {
        if (_this.trg.s == 9) {
          _this.trg.dones = true;
        }
        if (_this.trg.breaker) {
          f1 = this.ingrid(_this.trg.xp, _this.trg.yp);
          var _loc2_ = true;
          i = 0;
          while (i < _this.door.length) {
            _this.trg = _this.door[i];
            if (_this.trg.blo == f1) {
              _loc2_ = false;
            }
            i++;
          }
          if (_loc2_) {
            bloww(f1, _this.trg.xbew, _this.trg.ybew);
          }
        }
        if (_this.trg == _this.player && _this.fra > 20) {
          if (_this.horse! < 90) {
            _this.horse = undefined;
            _this.trg.xbew *= 0.6;
            _this.trg.ybew *= 0.6;
          }
          let f1 = f6 * _this.trg.ybew + f5 * _this.trg.xbew;
          _this.trg.xbew *= 0.88;
          _this.trg.ybew *= 0.88;
          if (f1 > 0 || _this.lastf1 > _this.fra) {
            if (f1 > 0) {
              _this.lastf1 = _this.fra + 4;
            }
            _this.trg.ghhh = true;
            if (_this.lastf2 <= _this.fra) {
              _this.lastf2 = _this.fra + 10;
              if (Math.abs(f5) > Math.abs(f6)) {
                _this.lastxx = 0;
                _this.lastxy = 1;
              } else {
                _this.lastxy = 0;
                _this.lastxx = 1;
              }
            }
          }
        }
        if (_this.trg.s == 2 && !_this.trg.dones) {
          _this.trg.dones = true;
          let v2 = 10 / enfget(_this.trg.xbew, _this.trg.ybew);
          v2 = this.ingrid(
            _this.trg.xp + _this.trg.xbew * v2,
            _this.trg.yp + _this.trg.ybew * v2
          );
          v1 = _this.trg.dmg > 5;
          if (!killshit(v2, v1)) {
            if (!killshit(this.ingrid(_this.trg.xp + 10, _this.trg.yp), v1)) {
              if (!killshit(this.ingrid(_this.trg.xp, _this.trg.yp + 10), v1)) {
                if (
                  !killshit(this.ingrid(_this.trg.xp - 10, _this.trg.yp), v1)
                ) {
                  this.killshit(
                    this.ingrid(_this.trg.xp, _this.trg.yp - 10, v1)
                  );
                }
              }
            }
          }
        }
        _this.roty = (_this.sizes[_this.trg.s] * 3.141592653589793) / 180; // bug? ???  _this.trg.roty?
        let f7 = Math.sqrt(f5 * f5 + f6 * f6);
        f5 /= f7;
        f6 /= f7;
        if (_this.trg.rotn != undefined) {
          _this.trg.roty = (Math.atan((0 - f5) / f6) / 3.141592653589793) * 180;
          if (f6 >= 0) {
            _this.trg.roty += 180;
          }
          _this.trg.rotn = 3;
        }
        let f8 = (0 - f5) * _this.trg.xbew - f6 * _this.trg.ybew;
        if (f8 < 0) {
          _this.trg.rr = _this.trg.rr + 1;
          _this.trg.gh = true;
          if (_this.trg.s == 99 && _this.trg.fraz <= _this.fra) {
            _this.trg.fraz = _this.fra + 5;
            _root.soundy("Death_Burst_Large_1.mp", f8 * 5);
          }
          let f9 = f8 * 1.8 - 0.1;
          if (f9 < -10) {
            this.soundy("mh");
          }
          if (_this.trg.s == 99) {
            f9 *= 1.4;
          }
          _this.trg.xbew += f5 * f9;
          _this.trg.ybew += f6 * f9;
          _this.siz = Math.sqrt(
            _this.trg.xbew * _this.trg.xbew + _this.trg.ybew * _this.trg.ybew
          );
          _this.siz2 = _this.sizes[_this.trg.s];
          if (_this.siz > 0 && f8 < 0) {
            let f1 = _this.trg.xp;
            _this.f2 = _this.trg.yp;
            if (_this.trg.shot) {
              if (_this.trg.s == 14 || _this.trg.s == 13) {
                _this.siz2 = 5;
              }
              let v2 = _this.siz2 - 10;
              while (
                !mhity(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                _this.v2 < _this.siz2 + 10
              ) {
                _this.v2 += 4;
              }
              _this.v2 -= 4;
              while (
                !mhity(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                v2 < _this.siz2 + 10
              ) {
                _this.v2 += 0.5;
              }
            } else if (_this.trg.flyby) {
              _this.v2 = _this.siz2 - 10;
              while (
                !mhitx(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                _this.v2 < _this.siz2 + 10
              ) {
                _this.v2 += 4;
              }
              _this.v2 -= 4;
              while (
                !mhitx(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                _this.v2 < _this.siz2 + 10
              ) {
                _this.v2 += 0.5;
              }
            } else {
              _this.v2 = _this.siz2 - 10;
              while (
                !mhit(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                _this.v2 < _this.siz2 + 10
              ) {
                _this.v2 += 4;
              }
              _this.v2 -= 4;
              while (
                !mhit(f1 + f5 * _this.v2, f2 + f6 * _this.v2) &&
                _this.v2 < _this.siz2 + 10
              ) {
                _this.v2 += 0.5;
              }
            }
            _this.v2 -= _this.siz2;
            if (_this.v2 > 0) {
              _this.v2 = 0;
            } else {
              _this.v2 *= Math.max(0.2 - _this.v2 * 0.05, 1);
            }
            _this.trg.xp += f5 * _this.v2;
            _this.trg.yp += f6 * _this.v2;
            f8 = (0 - f8) / _this.siz;
            f8 = 1 - f8 * 0.5;
            _this.trg.xbew *= f8;
            _this.trg.ybew *= f8;
          }
        }
      }
      if (_this.turdz) {
        _this.levz[_this.turdb] = _this.turdz;
        _this.turdz = undefined;
      }
      if (_this.trg.rr > 0) {
        _this.trg.xbew += _this.trg.xb / _this.trg.rr;
        _this.trg.ybew += _this.trg.yb / _this.trg.rr;
      }
      if (_this.trg == _this.player) {
        if (_this.ladder != undefined) {
          if (_this.levz[_this.ladder] == 0) {
            _this.levz[_this.ladder] = 3;
          }
        }
      }
    }
  }
  e = 0;
  while (e < _this.ball.length) {
    _this.trg = _this.ball[e];
    if (_this.trg.laser) {
      _this.trg2 = _this.trg.d.l;
      if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
        _this.f1 = _this.lass;
      } else {
        _this.f1 = _this.lass;
      }
      _this.trg2._yscale = _this.f1;
      _this.trg2._xscale = _this.lassd * 30;
    }
    if (_this.trg == _this.player) {
      if (
        _this.ashut > 0 ||
        (Math.abs(_this.trg.xp - 320) > 25 && Math.abs(_this.trg.yp - 280) > 25)
      ) {
        if (
          _this.levz[
            this.ingrid(
              _this.trg.xp + _this.trg.xbew,
              _this.trg.yp + _this.trg.ybew
            )
          ] > 1
        ) {
          bord(568, 60, 410, 150);
        }
      }
    }
    _this.trg._x = _this.trg.xp;
    _this.trg._y = _this.trg.yp;
    if (_this.trg.s == 79) {
      if (!_this.trg.dones) {
        if (!_this.trg.alt) {
          _this.trg2 = _this.trg.trg2;
          _this.trg3 = _this.trg.trg3;
          if (_this.trg2) {
            gem(_this.trg2, 0);
          }
          if (_this.trg3) {
            gem(_this.trg3, 1);
          }
        }
      }
    }
    if (_this.mheart == _this.trg) {
      _this.trg.d.veins._x = 0 - _this.trg._x + 320;
      _this.trg.d.veins._y = 0 - _this.trg._y + 100;
    }
    if (_this.trg.s == 19) {
      if (_this.trg.dx) {
        _this.trg._x -= _this.trg.dx;
      }
    }
    if (!(_this.trg.s == 19 && !_this.altboss && false)) {
      if (_this.trg.s == 26.5) {
      }
      if (_this.trg.worm) {
        if (_this.trg.d._y > 10) {
          _this.trg2 = _this.worm[1];
          _this.trg._y = Math.min(_this.trg._y, _this.trg2.yppp);
        }
      }
      if (_this.trg.s == 2) {
        trgdy(!_this.trg.piss && !_this.ups[149]);
      } else if (_this.trg.s == 7 || _this.trg.s == 8 || _this.trg.s == 9) {
        this.trgdy();
      }
      if (!_this.trg.nod) {
        _this.trg.dpppp = Math.max(
          e,
          Math.round(_this.trg.yp) * 100 + 10030 + e
        );
        if (_this.trg.s == 28) {
          _this.trg.dpppp += 2500 - _this.trg.mag * 1000;
        }
        if (_this.trg.s == 19 || _this.trg.s == 89) {
          if (_this.trg.lar > 0) {
            _this.trg.dpppp -= _this.trg.lar * 100;
          }
        }
        if (_this.trg.s == 5 && _this.trg.d._currentframe == 9) {
          _this.trg.dpppp -= 2500;
        }
        if (_this.trg.s == 26.5) {
          _this.trg.dpppp += 2500;
        }
        if (_this.trg.worm) {
          if (_this.trg.worm == _this.wormet) {
            _this.trg.dpppp += 1000;
          } else {
            _this.trg.dpppp -= Math.max(-30, _this.trg.d._y) * 200;
          }
        }
        if (_this.trg.s == 1 && _this.trg.dones) {
          _this.trg.dpppp += 100000000;
        }
        if (_this.trg.flyai && _this.gurdy) {
          _this.trg.dpppp += 6000;
        }
        _this.trg.swapDepths(_this.trg.dpppp);
      }
      if (_this.trg.col) {
        let f1 = _this.trg.col;
        if (_this.trg.s == 5 && _this.trg.d._currentframe == 7) {
          f1 = pic(f1);
        }
        _this.trg.d.d.d.d.d.p.gotoAndStop(f1);
        _this.trg.d.d.d.d.p.gotoAndStop(f1);
        _this.trg.d.d.d.p.gotoAndStop(f1);
        _this.trg.d.d.p.gotoAndStop(f1);
      }
      if (_this.trg.s == 5) {
        if (
          _this.trg.d.d._currentframe > 35 &&
          _this.trg.d.d._currentframe < 41
        ) {
          if (_this.trg.col == 31) {
            _this.f1 = 2;
          } else {
            _this.f1 = 1;
          }
          _this.trg2 = _this.trg.d.d.d;
          _this.trg2.p.gotoAndStop(_this.f1);
          _this.trg2.p0.gotoAndStop(_this.f1);
          _this.trg2.p1.gotoAndStop(_this.f1);
          _this.trg2.p2.gotoAndStop(_this.f1);
          _this.trg2.p3.gotoAndStop(_this.f1);
          _this.trg2.p4.gotoAndStop(_this.f1);
        }
      }
    }
    e++;
  }
  tip(4);
}
function emo(f1) {
  if (f1) {
    if (_this.emosound) {
      _root.soundy("thumbs down.wav");
    }
    _this.player.d.gotoAndStop(10);
  } else {
    if (_this.emosound) {
      _root.soundy("thumbsup.wav");
    }
    _this.player.d.gotoAndStop(9);
  }
}
function lsou() {
  if (_this.trg.ris + 27 <= _this.fra) {
    if (_this.trg.s == 84) {
      _root.soundy("hand lasers.mp");
    } else if (_this.trg.s == 1 || _this.trg.s == 43 || _this.trg.s == 49) {
      _root.soundy("Blood_Laser_Large.mp");
    } else if (_this.trg.s == 60) {
      _root.soundy("RedLightning_Zap_" + random(3) + ".mp");
    } else {
      _root.soundy("Blood_Laser" + random(2) + ".mp");
    }
  }
  _this.trg.ris = _this.fra;
}
function linearcut(f1, f2, f3, f4, f5, f6) {
  return (f1 * f6 - f2 * f5) / (f3 * f6 - f5 * f4);
}
function lasershowx(f1) {
  lsou();
  _this.xenf = Math.cos(f1);
  _this.yenf = Math.sin(f1);
  for (let a in _this.ball) {
    _this.trg2 = _this.ball[a];
    if (
      _this.trg2.s != _this.trg.s &&
      !_this.trg2.dones &&
      (_this.trg2.bh || _this.trg2.s == 19) &&
      _this.trg2.s != 78 &&
      !_this.trg2.shot
    ) {
      let f4 = _this.trg.xp - _this.trg2.xp;
      let f5 = _this.trg.yp - _this.trg2.yp;
      if (_this.trg.s == 52) {
        f5 -= (_this.trg._yscale - 100) * 0.2;
      }
      let f2 = linearcut(
        f4,
        f5,
        _this.xenf,
        _this.yenf,
        0 - _this.yenf,
        _this.xenf
      );
      if (Math.abs(f2) < _this.sizes[_this.trg2.s] + 5) {
        if (
          linearcut(
            f4,
            f5,
            0 - _this.yenf,
            _this.xenf,
            _this.xenf,
            _this.yenf
          ) < 0
        ) {
          if (_this.trg2 == _this.player) {
            this.playerhurt(1, _this.trg.s);
          } else if (_this.trg == _this.player || !_this.trg2.bosser) {
            hurt(_this.trg2, 22);
          }
        }
      }
    }
  }
}
function lasershow(trg, f50, b2) {
  if (!f50) {
    lsou();
  }
  var _loc7_: boolean | undefined = undefined;
  if (
    (_this.fra + trg.e) % 2 == 0 ||
    (trg == _this.player && _this.ups[118]) ||
    f50
  ) {
    if (f50) {
      let f1 = trg.xp;
      let f2 = trg.yp;
      _this.lass = 700;
      var _loc4_ = 0;
      if ((_loc7_ = Math.abs(trg.ypp) > Math.abs(trg.xpp))) {
        _loc4_ = ((f2 + 20) % _this.roxx) - 20;
        if (trg.ypp < 0) {
          _loc4_ = 0 - _loc4_;
        }
      } else {
        _loc4_ = ((f1 + 20) % _this.roxx) - 20;
        if (trg.xpp < 0) {
          _loc4_ = 0 - _loc4_;
        }
      }
      var _loc5_ = !_this.ups[115];
      let i = 1;
      while (i < 700) {
        f1 += trg.xpp * _this.roxx;
        f2 += trg.ypp * _this.roxx;
        let f3 = levzz(this.ingrid(f1, f2));
        if (
          (f3 >= 1 && f3 != 3 && _loc5_) ||
          f2 < 140 ||
          f2 > 440 ||
          f1 > 615 ||
          f1 < 40
        ) {
          _this.lass = i;
          i = 1000;
        }
        i += _this.roxx;
      }
      _this.lass -= _loc4_ - 7;
      _this.lasx = trg.xp;
      _this.lasy = trg.yp;
    }
    if (f50 != 2) {
      _this.lassd = dmgdo();
      if (_this.ups[2]) {
        _this.lassd *= 3;
      }
      if (_this.ups[132]) {
        _this.lassd += 2;
      }
      if (_this.brim) {
        _this.lass = 10000;
        _this.lassd *= 3;
        if (_this.ups[69]) {
          let v111 = Math.max(0.1, Math.min(1, (_this.fra - _this.lchaf) / 60));
          _this.lassd *= v111;
        }
      }
      _root.firrb = _this.lassd;
    }
    if (b2 || b2 == undefined) {
      if (f50 == 5) {
        _this.lassd *= _this.secol * 0.2;
      }
      for (let a in _this.ball) {
        _this.trg2 = _this.ball[a];
        if (
          _this.trg2.s != trg.s &&
          (trg.s != 3 || _this.trg2 != _this.player) &&
          !_this.trg2.dones &&
          _this.trg2.bh &&
          !_this.trg2.shot
        ) {
          if (_this.hps[_this.trg2.s] > 0) {
            let f1 = false;
            _this.xenf = trg.xp - _this.trg2.xp;
            _this.yenf = trg.yp - _this.trg2.yp;
            if (f50) {
              _this.f2 = 5;
            } else {
              _this.f2 = 25;
            }
            if (_this.trg2 == _this.player) {
              _this.f2 = 10;
            }
            _this.f2 += _this.sizes[_this.trg2.s];
            if (Math.abs(trg.xpp) > Math.abs(trg.ypp)) {
              if (Math.abs(_this.yenf) < _this.f2) {
                if (_this.xenf * trg.xpp < 0) {
                  f1 = true;
                }
              }
            } else if (Math.abs(_this.xenf) < _this.f2) {
              if (_this.yenf * trg.ypp < 0) {
                f1 = true;
              }
            }
            if (f1) {
              if (_this.trg2 == _this.player) {
                this.playerhurt(0.5, trg.s);
              } else if (
                f50 ||
                (!f50 && trg == _this.player && _this.ups[118])
              ) {
                if (enfget(_this.xenf, _this.yenf) - 20 < _this.lass) {
                  hurt(_this.trg2, _this.lassd);
                  spidcol(_this.trg2);
                }
              } else if (
                trg.s != 39 &&
                (_this.trg2.s != 84 || trg == _this.player)
              ) {
                hurt(_this.trg2, 22);
              }
            }
          }
        }
      }
      let f1 = 1000;
      if (f50) {
        f1 = _this.lass + random(31);
      }
      let a = 0;
      while (a < f1) {
        killshit(
          this.ingrid(trg.xp + trg.xpp * a, trg.yp + trg.ypp * a),
          f50 && _this.lassd > 5
        );
        a += 10;
      }
    }
  }
}
function laps() {
  _this.keyhole = false;
  if (_this.keypoww > 0) {
    _this.keypoww -= 0.2;
  }
  if (
    _root.keys > 0 ||
    _root.kep ||
    _this.ups[60] ||
    _this.demon > 0 ||
    _root.coins > 0 ||
    _this.unic > 0 ||
    _root.notch
  ) {
    let f1 = _this.roxx / enfget(_this.player.xbew, _this.player.ybew);
    let f3 = this.ingrid(
      _this.player.xp + _this.player.xbew * f1,
      _this.player.yp + _this.player.ybew * f1
    );
    outgrid(f3);
    _this.trg.s = 4;
    let f10 = false;
    if (_this.levz[f3] == 1 && (_this.demon > 0 || _root.notch)) {
      bloww(f3, _this.trg.xbew, _this.trg.ybew);
      f10 = true;
    } else if (_this.demon > 0 || _this.unic > 0 || _root.notch) {
      if (killshit(f3, _this.demon > 0 || _root.notch)) {
        if (_root.notch) {
          killshit(f3, true);
          killshit(f3, true);
        }
        f10 = true;
      }
    }
    if (_root.notch && f10) {
      _root.notch = false;
      _root.itc = 0;
      _this.player.d.gotoAndStop(11);
      _this.player.it = 147;
      _this.player.d.d.d.it.d.gotoAndStop(_this.player.it);
      _this.player.d.d.d.it.d.p.gotoAndStop(_this.player.pilc);
    }
    _this.trg.s = 1;
    if (_root.keys > 0 || _root.kep || _root.coins > 0) {
      _this.keyhole = f3;
    }
    if (levzz(f3) == 4 && (_root.kep || _root.keys > 0)) {
      if (f3 != _this.keypow) {
        _this.keypow = f3;
        _this.keypoww = 0;
      } else if (_this.keypoww++ > 2.8 && !_this.player.flyby) {
        _root.soundy("Unlock00.wav", 100);
        if (!_root.kep) {
          _root.keys = _root.keys - 1;
        }
        _this.levz[f3] = 1.01;
        this.killshit(f3);
        _root.soundy("metal_blockbreak" + random(2) + ".wav", 100);
      }
    }
    if (levzz(f3) == 3 && _this.ups[60]) {
      if (_this.ladder != this.ingrid(_this.player.xp, _this.player.yp)) {
        if (Math.abs(_this.trg.xbew) < Math.abs(_this.trg.ybew)) {
          if (f3 != _this.alad) {
            if (_this.trg.ybew < 0) {
              _this.lads._rotation = 0;
            } else {
              _this.lads._rotation = 180;
            }
          }
          if (levzz(f3 + _this.rowz) == 3 || levzz(f3 - _this.rowz) == 3) {
            f3 = 0;
          }
        } else {
          if (f3 != _this.alad) {
            if (_this.trg.xbew > 0) {
              _this.lads._rotation = 90;
            } else {
              _this.lads._rotation = -90;
            }
          }
          if (levzz(f3 + 1) == 3 || levzz(f3 - 1) == 3) {
            f3 = 0;
          }
        }
        if (f3 > 0) {
          _this.ladder = f3;
          _this.alad = _this.ladder;
          outgrid(_this.ladder);
          _this.lads._x = _this.xenf;
          _this.lads._y = _this.yenf;
          _this.lads._visible = true;
        }
      }
    }
  }
  if (_this.ladder != undefined) {
    outgrid(_this.ladder);
    if (
      !enfcheck(_this.xenf, _this.yenf, _this.player.xp, _this.player.yp, 100)
    ) {
      _this.ladder = undefined;
      _this.lads._x = -10000;
      _this.lads._visible = false;
    } else {
      outgrid(_this.ladder);
      _this.lads._x = _this.xenf;
      _this.lads._y = _this.yenf;
      _this.lads._visible = true;
    }
  }
}
function roll(f1) {
  if (f1) {
    _this.roller = f1 - 1;
  }
  _this.roller--;
  return random(_this.roller + 1) == 0;
}
function tart(f1, f3) {
  var _loc1_: any = [
    "X Wheel of fortune",
    "XV The Devil",
    "XIII Death",
    "XI Strength",
    "0 The Fool",
    "I The Magician",
    "IX The hermit",
    "XVIII The Moon",
    "XII The hanged Man",
    "XX Judgement",
    "VII The Chariot",
    "VI The Lovers",
    "XXI The World",
    "VIII Justice",
    "XVI Temperance",
    "IV The Emperor",
    "XVI The Tower",
    "V The Hierophant",
    "II The High Priestess",
    "III The Empress",
    "XIX The Sun",
    "XVII The Stars",
  ];
  _loc1_[63] = "2 of Spades";
  _loc1_[64] = "2 of Clubs";
  _loc1_[65] = "2 of Hearts";
  _loc1_[66] = "2 of Diamonds";
  _loc1_[67] = "The Joker";
  _loc1_ = _loc1_[f1 - 7];
  if (!f3) {
    st11(_loc1_);
  }
  return _loc1_;
}
function goodpill() {
  _root.soundy("Powerup_spewer.wav", 100);
}
function fart() {
  var _loc2_ = this.create(_this.player.xp, _this.player.yp, 0, 0, 0, 0, 4);
  _loc2_.dones = true;
  _loc2_._xscale = _loc2_._yscale = 70;
  _loc2_.d.gotoAndStop(5);
  _loc2_.fart = true;
  _loc2_.s = 4.5;
  _loc2_.dfr = true;
  _this.showit = false;
  for (let z in _this.ball) {
    _loc2_ = _this.ball[z];
    _this.siz = 85 + _this.sizes[Math.round(_loc2_.s)];
    _this.enf = enfcheck(
      _this.player.xp,
      _this.player.yp,
      _loc2_.xp,
      _loc2_.yp,
      _this.siz
    );
    if (
      _this.enf < _this.siz &&
      !_loc2_.dones &&
      _loc2_.s > 9 &&
      _loc2_.bh &&
      !_loc2_.shot
    ) {
      _loc2_.poiss = 200;
      _loc2_.poisd = 3.5;
      hurt(_loc2_, 5);
    }
  }
  _root.soundy("fart.mp");
}
function horss(f1) {
  if (_this.horse == 100 || _this.hfff == _this.fra) {
    if (f1) {
      _this.xenf = 0 - _this.xenf;
      _this.yenf = 0 - _this.yenf;
    }
    if (_this.xenf != 0 || _this.yenf != 0) {
      _this.horsx = _this.xenf;
      _this.horsy = _this.yenf;
      if (_this.xenf != 0 && _this.yenf != 0) {
        if (Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew)) {
          _this.horsy = 0;
        } else {
          _this.horsx = 0;
        }
      }
      _this.horse = 99;
      _this.hfff = _this.fra;
    }
    if (f1) {
      _this.xenf = 0 - _this.xenf;
      _this.yenf = 0 - _this.yenf;
    }
  }
}
function piller() {
  let f10 = !_this.ups[46] && !_this.ups[75];
  let f1: any = _root.piller[_root.pilc!];
  while (f1 == undefined) {
    if (
      f1 == undefined ||
      (f1 == 3 && _this.ups[75]) ||
      (f1 == 6 && (!f10 || _this.player.hp < 1))
    ) {
      if (
        (_this.player.hp < _this.player.mhp ||
          (_root.skiner == 4 && _root.armor < 3)) &&
        random(10) == 0
      ) {
        f1 = 1;
      } else if (random(13) == 0) {
        f1 = 12;
      } else if (random(17) == 0) {
        f1 = 13;
      } else if (random(17) == 0) {
        f1 = 14 + random(2) * 0.2;
      } else if (random(15) == 0 && !_this.ups[75]) {
        f1 = 2;
      } else if (random(15) == 0 && !_this.ups[75]) {
        f1 = 3;
      } else if (random(10) == 0) {
        f1 = 4;
      } else if (random(20) == 0) {
        f1 = 5;
      } else if (random(9) == 0 && _this.player.hp + _root.armor > 1 && f10) {
        f1 = 6;
      } else if (random(7) == 0) {
        f1 = 7 + random(2) * 0.2;
      } else if (random(6) == 0 && (_root.bombs > 0 || _root.keys > 0)) {
        f1 = 8;
      } else if (random(5) == 0 || (random(4) == 0 && _this.ups)) {
        f1 = 9 + random(2) * 0.2;
      } else if (random(3) == 0) {
        f1 = 10 + random(2) * 0.2;
      } else if (random(3) == 0 || _this.ups[75]) {
        f1 = 11 + random(2) * 0.2;
      } else if (random(3) == 0) {
        f1 = 17 + random(2) * 0.2;
      } else {
        f1 = 126;
      }
      for (let z in _root.piller) {
        if (f1 == _root.piller[z]) {
          f1 = undefined;
        }
      }
      _root.piller[_root.pilc!] = f1;
    }
  }
  f1 = Math.round(_root.piller[_root.pilc!]);
  if (f1 != _root.piller[_root.pilc!]) {
    _this.f2 = true;
  } else {
    _this.f2 = false;
  }
  if (!f10) {
    _this.f2 = true;
  }
}
function toot(f1) {
  return Math.max(f1 * 2, 2);
}
function spaceitem() {
  _this.nospo--;
  if (
    _this.spac &&
    _this.fra > 10 &&
    _this.player._visible &&
    _this.nospo <= 0
  ) {
    if (!_this.nosp) {
      _this.nosp = true;
      if (_root.it! > 0 && _root.itc >= 1) {
        _this.doit = true;
        _this.showit = true;
        _this.pacman = false;
        if (_root.it == 84) {
          _this.f1 = [
            2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 16, 17, 18, 25, 26, 37, 38, 43, 44,
            45, 46, 53, 57, 62, 67,
          ];
          if (_this.f1.length > 0) {
            _this.f1 = _this.f1[random(_this.f1.length)];
            _root.it = _this.f1;
            _this.f1 += itn2(_this.f1);
            st22(_root.st1[_this.f1]);
          }
          _root.over.gotoAndStop(14);
          _this.goper = true;
        }
        switch (_root.it) {
          case 152:
            _this.ups[3] = _this.ups[3] + 1;
            if (random(2) == 0) {
            }
            _this.ups[1] += 0.75;
            break;
          case 146:
            this.ader();
            _this.lasth = 0;
            if (_root.chaps < 7) {
              ader(true);
            }
            if (_this.player.hp < 0.5) {
              _this.showit = false;
            }
            _root.soundy("Death_Card.mp", 100);
            for (let e in _this.ball) {
              _this.trg2 = _this.ball[e];
              hurt(_this.trg2, 40);
            }
            _this.sacri = 20;
            break;
          case 120:
            _this.anarch = 30;
            _this.analt = 2;
            break;
          case 124:
            _root.bombnext = 2;
            break;
          case 135:
            _this.keyd = true;
            break;
          case 126:
            for (let e in _this.ball) {
              _this.trg2 = _this.ball[e];
              if (_this.trg2.s == 5) {
                if (_this.trg2.d._currentframe < 8) {
                  _this.trg2.done = true;
                  _this.f1 = 5.01 + random(6) * 0.01;
                  if (_this.f1 == 5.06 && random(2) == 0) {
                    _this.f1 = 5.01;
                  }
                  if (_this.f1 == 5.05 && random(3) == 0) {
                    _this.f1 = 5.02;
                  }
                  if (random(10) == 0) {
                    _this.f1 = 5.03 + random(2) * 0.01;
                  }
                  if (random(15) == 0) {
                    _this.f1 = 5.3;
                  }
                  if (random(15) == 0) {
                    _this.f1 = 5.07;
                  }
                  if (random(20) == 0) {
                    _this.f1 = 5.35;
                  }
                  this.create(
                    _this.trg2.xp,
                    _this.trg2.yp,
                    0,
                    0,
                    0,
                    0,
                    _this.f1
                  );
                }
              }
            }
            break;
          case 131:
            _root.soundy("Death_Card.mp", 100);
            for (let e in _this.ball) {
              _this.trg2 = _this.ball[e];
              hurt(_this.trg2, 10);
              spida(undefined, _this.trg2);
            }
            break;
          case 137:
            if (_root.coins > 0 && _this.sloto == undefined) {
              _root.coins = _root.coins - 1;
              _this.sloto = 25;
            } else {
              _this.showit = false;
            }
            break;
          case 107:
            _root.notch = !_root.notch;
            _this.doit = false;
            _this.showit = false;
            break;
          case 118:
            _this.ups[21] = _this.ups[54] = true;
            _root.world = true;
            _root.darks = false;
            mapd();
            if (random(2) == 0) {
              spaw(_this.trg.xp, _this.trg.yp, 40, 5.3);
            } else {
              _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 40, 5.01);
              _this.trg2.col = 3;
            }
            break;
          case 105:
            _this.bluf += 2 + random(3);
            break;
          case 96:
            _this.dec = 0;
            break;
          case 106:
            eta();
            break;
          case 97:
            for (let e in _this.ball) {
              _this.trg = _this.ball[e];
              if (_this.trg.s == 4) {
                _this.trg.d.gotoAndStop(3);
                _this.trg.dones = true;
              }
            }
            break;
          case 95:
            this.ader();
            let f12 = Math.max(1, random(3));
            if (_this.ups[75]) {
              f12++;
            }
            let f11 = 0;
            while (f11 < f12) {
              spaw(_this.trg.xp, _this.trg.yp, 40, 5.02);
              f11++;
            }
            _this.showit = _this.player.hp > 0;
            break;
          case 93:
            if (_this.player.mhp > 0) {
              if (_root.hardmode) {
                _root.armor += 2;
              } else {
                _root.armor += 3;
              }
              _root.ups[22]--;
              _this.player.hp = Math.max(_this.player.hp - 1, 0.5);
              _this.ups[22]--;
              _root.soundy("Vamp_Gulp.mp");
            } else {
              _this.showit = false;
            }
            break;
          case 141:
            _this.anarch = 20;
            _this.analt = 3;
          case 90:
            _this.showit = false;
            _this.horse = 100;
            break;
          case 83:
            _root.soundy("satan grow.mp", 70);
            _this.f1 = [8, 73, 10, 57, 67, 88, 95, 99, 100, 112, 113, 128];
            //for(let e in f1)
            _this.f1.forEach(
              (
                e // quick fix
              ) => {
                if (_this.ups[_this.f1[e]]) {
                  _this.f1.splice(e, 1);
                }
              }
            );
            if (_this.f1.length > 0) {
              _this.f1 = _this.f1[random(_this.f1.length)];
              _this.ups[_this.f1] = 1;
            }
            if (_this.f1 == 73) {
              _this.ups[_this.f1] = random(2) + 2;
            }
            st22(_root.st1[_this.f1]);
            _root.over.gotoAndStop(12);
            break;
          case 84:
            break;
          case 87:
            _root.beenlev[_root.lev!] = false;
            _root.shroom = 3;
            _root.it = 0;
            _root.door = undefined;
            _root.playerx = 320;
            _root.playery = 400;
            _root.getup = true;
            _root.swww = _root.chaps;
            _root.chaps = _root.chaps - 1;
            if (_root.double) {
              _root.chaps = _root.chaps - 1;
            }
            _root.switchero = false;
            this.newstart(false);
            _root.gotoAndStop("reset");
            break;
          case 86:
            _this.razor += 2;
            if (_this.player.hp > 0.5 || _root.armor <= 0) {
              let f11 = _root.armor;
              _root.armor = 0;
              this.playerhurt(0.5, 202);
              _root.armor = f11;
            } else {
              this.playerhurt(0.5, 202);
            }
            _this.lasth = 0;
            if (_this.player.hp > 0.5 || _root.armor <= 0) {
              let f11 = _root.armor;
              _root.armor = 0;
              this.playerhurt(0.5, 202);
              _root.armor = f11;
            } else {
              this.playerhurt(0.5, 202);
            }
            _this.showit = false;
            break;
          case 71:
            fart();
            break;
          case 67:
            _this.ups[20] = _this.ups[20] + 1;
            _this.bodd = true;
            _root.soundy("bloodbank spawn1.wav", 300);
            break;
          case 65:
            for (let a in _this.ball) {
              _this.trg2 = _this.ball[a];
              if (_this.trg2.s == 5 && _this.trg2.it && !_this.trg2.empty) {
                if (
                  _root.hardmode &&
                  random(Math.max(2, 5 + _root.luck)) == 0
                ) {
                  _this.trg2.empty = true;
                  if (_root.chamb == _root.lev) {
                    _this.trg2.done = true;
                  }
                  _this.trg2.it = 199;
                  if (_this.trg2.d._currentframe == 10) {
                    _this.trg2.d.d.gotoAndPlay(1);
                  }
                  if (_this.trg2.d._currentframe == 15) {
                    _this.trg2.done = true;
                  }
                } else {
                  _this.trg2.it = giveit();
                  if (_this.trg2.d._currentframe == 10) {
                    _this.trg2.d.d.gotoAndPlay(1);
                  }
                }
              }
            }
            break;
          case 62:
            pillc(4);
            _this.showit = false;
            break;
          case 57:
            _this.f1 = [
              5.010000001, 5.010000003, 5.040000001, 5.03, 5.07, 5.3, 5.02,
            ];
            _this.f1 = _this.f1[random(_this.f1.length)];
            spaw(_this.trg.xp, _this.trg.yp, 40, _this.f1);
            break;
          case 38:
            if (
              _root.horsem &&
              _root.lev != _root.bossl &&
              _root.chaps < 8 &&
              _root.chaps != 6 &&
              !_root.double
            ) {
              _root.horse = true;
              _root.horsem = false;
              _this.f1 = Math.round(_root.chaps / 2);
              _root.bosss = _this.f1 + 8;
              if (random(10) == 0 && !_root.nohead) {
                _root.nohead = true;
                _this.f1 = 5;
                _root.bosss = 22;
              }
              _root.levz[_root.bossl] = "h" + _this.f1;
            }
            _root.armor = _root.armor + 1;
            break;
          case 43:
            _this.demon = 200;
            _root.soundy("Monster_Yell_A_0.mp");
            _root.armor = _root.armor + 1;
            break;
          case 44:
            if (_root.chaps < 9) {
              spaw(_this.trg.xp, _this.trg.yp, 0, 5.09);
            } else {
              _this.showit = false;
              _this.doit = false;
            }
            break;
          case 45:
            pillc(3);
            _this.showit = false;
            break;
          case 53:
            _root.mmus = _root.soundy("isaacunicorn.mp", 100);
            _this.unic = 200;
            _this.pacman = true;
            _this.scare = 180;
            for (let z in _this.ball) {
              _this.trg2 = _this.ball[z];
              _this.trg2.uncol = _this.fra + 2;
            }
            break;
          case 46:
            let f1: any = 0;
            let f2 = 4;
            for (let z in _this.ball) {
              _this.trg2 = _this.ball[z];
              if (_this.trg2.s > 9 && _this.trg2.s != 20) {
                if (_this.trg2.hp > f2) {
                  if (
                    !enfcheck(
                      _this.trg2.xp,
                      _this.trg2.yp,
                      _this.player.xp,
                      _this.player.yp,
                      40
                    )
                  ) {
                    f2 = _this.trg2.hp;
                    f1 = z;
                  }
                }
              }
            }
            if (f1 > 0) {
              _this.trg3 = _this.ball[f1];
              _this.trg2 = this.create(
                _this.trg3.xp,
                _this.trg3.yp,
                0,
                0,
                0,
                0,
                20
              );
              _this.trg2.weap = true;
              _this.trg2.ggh = true;
              _this.trg2.d.gotoAndStop(3);
              _this.trg2.trg2 = _this.trg3;
              _this.trg2.bh = false;
              _this.trg2.fra = -100;
            } else {
              _this.showit = false;
              _this.doit = false;
            }
            break;
          case 1:
            if (_root.chaps == 9 && _root.lev == _root.bossl) {
              _root.armor = 0;
              this.playerhurt(1000, 200);
            } else if (
              (_this.mom.length > 3 || _this.mheart != undefined) &&
              !_this.bibs &&
              (_root.chaps == 6 || _root.chaps == 8) &&
              _root.lev == _root.bossl
            ) {
              _this.bibs = true;
              _this.mheart.dones = true;
              for (let z in _this.mom) {
                _this.mom[z].dones = true;
                _this.mom[z]._visible = false;
              }
              momkill();
              _root.locker[34] = true;
            }
            _this.bible = true;
            _root.over.gotoAndStop(8);
            _root.soundy("Book Page Turn 12.wav", 100);
            break;
          case 37:
            _this.unic = 180;
            _root.mmus = _root.soundy("isaacunicorn.mp", 100);
            break;
          case 18:
            _this.playsave = 300;
            break;
          case 16:
            this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 33);
            _root.soundy("BGascan_pour.wav", 100);
            break;
          case 2:
            _this.doub = true;
            _root.over.gotoAndStop(2);
            _root.soundy("Devil_Card.mp", 100);
            break;
          case 3:
            _root.over.gotoAndStop(3);
            _root.soundy("Death_Card.mp", 100);
            for (let e in _this.ball) {
              _this.trg2 = _this.ball[e];
              hurt(_this.trg2, 40);
            }
            break;
          case 4:
            _this.showit = false;
            _this.f1 = this.ingrid(_this.trg.xp, _this.trg.yp);
            this.outgrid(_this.f1);
            this.turd("breakblock", _this.f1);
            _root.soundy("fart.mp");
            _this.turdb = _this.f1;
            break;
          case 11:
            _this.doit = false;
            _this.showit = false;
            break;
          case 10:
            _this.doit = false;
            _root.bombnext = true;
            break;
          case 15:
            if (_this.bombdrop <= 0) {
              _this.bombdrop = 100;
              _this.drop = this.create(
                _this.player.xp,
                _this.player.yp,
                0,
                0,
                0,
                0,
                37
              );
            } else {
              _this.doit = false;
            }
            break;
          case 7:
            _root.over.gotoAndStop(4);
            _this.freez = 220;
            _this.bra = true;
            break;
          case 9:
            _root.over.gotoAndStop(5);
            _this.scare = 180;
            _this.freez = 160;
            break;
          case 8:
            _this.showit = false;
            if (_this.fra - _this.lastbo >= 30) {
              _this.lasth = 0;
              _this.lastbo = _this.fra;
              this.bombfail(_this.trg.xp, _this.trg.yp);
            }
            break;
          case 5:
            _this.showit = false;
            bomb(true);
            break;
          case 6:
            let e = 0;
            while (e < 10) {
              _this.trg2 = this.create(
                _this.trg.xp,
                _this.trg.yp,
                0,
                Math.sin((e / 5) * 3.141592653589793) * 10,
                Math.cos((e / 5) * 3.141592653589793) * 10,
                0,
                2
              );
              _this.trg2.d._yscale = _this.trg2.d._xscale = 135.5;
              e++;
            }
            break;
          case 12:
            _this.showit = false;
            f1 = random(15);
            if (_root.chaps < 9) {
              if (f1 == 0) {
                _this.tar = 169;
              } else if (f1 == 0 && _root.chaps != 1) {
                _this.tar = 166;
              }
            }
            teller();
            break;
          case 13:
            _this.player.hp = _this.player.hp + 1;
            _root.soundy("Vamp_Gulp.mp");
            break;
          case 17:
            _this.showit = false;
            _this.laser = 1;
            break;
          case 25:
            _root.over.gotoAndStop(6);
            _root.soundy("Book Page Turn 12.wav", 100);
            _this.anarch = 30;
            break;
          case 26:
            _root.over.gotoAndStop(7);
            _this.slow = 230;
        }
        if (_this.showit) {
          _this.player.d.gotoAndStop(11);
          _this.player.it = _root.colit;
          _this.player.d.d.d.it.d.gotoAndStop(_this.player.it);
          _this.player.d.d.d.it.d.p.gotoAndStop(_this.player.pilc);
        }
        if (_this.itc[_root.it!] > 0 && _this.doit) {
          if (_this.ups[116]) {
            _root.itc = 0.334;
          } else {
            _root.itc = 0;
          }
          _this.nocharge = 10;
        }
        if (_this.goper) {
          _this.goper = false;
          _root.it = 84;
        }
      }
    }
  } else {
    _this.nosp = false;
  }
}
function playc() {
  _this.trg = _this.player;
  let f2 = _this.trg.xp;
  let f3 = _this.trg.yp;
  if (_this.decer.s == 4) {
    f2 = _this.decer.xp;
    f3 = _this.decer.yp;
  }
  let f1 = levzz(this.ingrid(f2, f3));
  if (f1 < 1) {
    _this.playx = f2;
    _this.playy = f3;
  }
  if (
    _this.fra < 10 &&
    ((_this.player.hp < 1 && _root.skiner != 4) ||
      (_root.armor < 1 && _root.skiner == 4))
  ) {
    if (_root.skiner == 5) {
      splater(
        _this.trg.xp,
        _this.trg.yp,
        random(10) + 1,
        0.3 + Math.random() * 0.5
      );
    } else {
      splater(
        _this.trg.xp,
        _this.trg.yp,
        random(10) + 20,
        0.3 + Math.random() * 0.5
      );
    }
  }
  if (_this.coinl) {
    if (_this.coinl == 3 && _root.keys > 0) {
      f1 = 5.03;
      _this.f6 = _root.keys;
    } else if (_this.coinl == 4 && _root.bombs > 0) {
      f1 = 5.04;
      _this.f6 = _root.bombs;
    } else {
      f1 = 5.02;
      _this.f6 = _root.coins;
      _this.coinl = 1;
    }
    let f5 = 0;
    if (_this.f6 > 0) {
      f5++;
      f3 = Math.min(_this.f6 - 1, random(4) + 1);
      var _loc3_ = 0;
      while (_loc3_ < f3) {
        f5++;
        let f4 = random(5) + 2;
        _this.trg2 = this.create(
          _this.player.xp,
          _this.player.yp,
          0,
          crand(f4),
          crand(f4),
          0,
          f1
        );
        _this.trg2.col = 1;
        _loc3_ = _loc3_ + 1;
      }
    }
    if (_this.coinl == 4) {
      _root.bombs -= f5;
    } else if (_this.coinl == 3) {
      _root.keys -= f5;
    } else {
      _root.coins -= f5;
    }
    _this.coinl = false;
  }
  if (_this.bombdrop-- > 0) {
    _this.drop.d.gotoAndStop(Math.max(1, Math.round(100 - _this.bombdrop)));
    if (_this.bombdrop == 2) {
      _this.bomf.push([_this.drop.xp, _this.drop.yp, 4]);
      _this.drop.done = true;
    }
    if (_this.ups[168]) {
      _this.player.fire = 10;
    }
  }
  _this.trg2 = _this.player;
  if (random(4) == 0 && _this.ups[189]) {
    splater(
      _this.trg2.xp,
      _this.trg2.yp + 5,
      1 + random(10),
      Math.random() * 0.5 + 0.3
    );
  }
  for (let a in _this.ball) {
    _this.trg = _this.ball[a];
    _this.siz = 270;
    if (_this.trg.s == 5) {
      if (
        _this.ups[53] ||
        (_this.trg.d._currentframe == 4 && _this.trg.col == 5)
      ) {
        if (
          !_this.trg.empty &&
          _this.trg.d._currentframe <= 4 &&
          _this.trg.bh &&
          (_this.trg.d._currentframe != 1 ||
            _this.trg.col == 3 ||
            _this.player.hp < _this.player.mhp)
        ) {
          if (
            enfcheck(
              _this.trg2.xp,
              _this.trg2.yp,
              _this.trg.xp,
              _this.trg.yp,
              _this.siz
            )
          ) {
            _this.enf = 0.5 / _this.enf;
            if (_this.trg.d._currentframe == 4 && _this.trg.col == 5) {
              _this.enf *= 3;
            }
            _this.trg.xbew += _this.xenf * _this.enf;
            _this.trg.ybew += _this.yenf * _this.enf;
            _this.trg.xbew *= 0.8;
            _this.trg.ybew *= 0.8;
            _this.trg.ggh = true;
          }
        } else {
          _this.trg.ggh = false;
        }
      }
    }
  }
  if (_this.scare > 0) {
    for (let a in _this.ball) {
      _this.trg = _this.ball[a];
      _this.siz = 270;
      if (_this.trg.s > 9 && (!_this.trg.flyai || _this.trg.s == 18)) {
        _this.trg.xp = Math.min(580, Math.max(60, _this.trg.xp));
        _this.trg.yp = Math.min(410, Math.max(170, _this.trg.yp));
        if (
          enfcheck(
            _this.trg2.xp,
            _this.trg2.yp,
            _this.trg.xp,
            _this.trg.yp,
            _this.siz
          )
        ) {
          _this.enf = ((_this.siz - _this.enf) / _this.enf) * 0.007;
          _this.trg.xbew -= _this.xenf * _this.enf;
          _this.trg.ybew -= _this.yenf * _this.enf;
          _this.trg.xbew *= 0.85;
          _this.trg.ybew *= 0.85;
          if (_this.trg.sf) {
            this.sideflip(_this.trg.xbew);
          }
          if (_this.trg.wf) {
            this.walkframe();
          }
        }
      }
    }
  } else if (_this.slow > 0 || _this.sloww > 0) {
    for (let a in _this.ball) {
      _this.trg = _this.ball[a];
      if (_this.trg.free) {
        colorit(_this.trg, 1, 1, 1.3, 40, 40, 40);
      }
    }
  } else if (_this.freez > 0) {
    for (let a in _this.ball) {
      _this.trg = _this.ball[a];
      if (_this.trg.free) {
        _this.trg.frezz = _this.freez + 1;
        colorit(_this.trg, 0.22, 0.22, 0.22, 40, 40, 40);
      }
    }
  } else if (_this.freez == 0 || _this.slow == 0 || _this.sloww == 0) {
    for (let a in _this.ball) {
      _this.trg = _this.ball[a];
      if (_this.trg.free) {
        _this.trg.free = undefined;
        this.speco(_this.trg);
      }
    }
  }
  _this.trg = _this.player;
  if (_this.playslow-- > 0) {
    _this.trg.xbew *= 0.7;
    _this.trg.ybew *= 0.7;
  }
  _this.trg = _this.player;
  _this.trg = _this.player;
  if (_this.trg.dones) {
    _this.unpause = false;
    _this.trg.xbew *= 0.8;
    _this.trg.ybew *= 0.8;
    this.playcol();
  } else {
    _this.f55 = 0;
    _this.f44 = false;
    if (firecheck(_this.player)) {
      if (!_this.relf) {
        this.playerhurt(0.5, 6);
      } else if (_this.relf == 2) {
        this.playerhurt(1, 5);
      } else {
        for (let i in _this.door) {
          _this.trg = _this.door[i];
          if (_this.f55 == _this.trg.blo) {
            _this.f55 = 1.1;
          }
        }
        if (
          _root.lev == _root.sac &&
          !_root.sacer &&
          _this.lasth - _this.fra < 0
        ) {
          if (random(5) == 0 || (_this.player.hp < 2 && _root.armor <= 0)) {
            _root.sacer = true;
            this.create(320, 340, 0, 0, 0, 0, 5.05 + random(2) * 0.01);
          }
        }
        if (_this.f55 == 1.1) {
          this.playerhurt(0.5, 7);
        } else {
          this.playerhurt(1, 7);
        }
      }
    }
    f1 = this.ingrid(_this.trg.xp, _this.trg.yp);
    if (levzz(f1) == 0.99) {
      if (_this.webs[f1]) {
        _this.playslow = 4;
      }
    }
    f1 = _this.lasth - _this.fra;
    _root.lasth = f1 > 6;
    if (f1 > 6 || (_this.unic > 0 && (!_this.pacman || _this.unic < 30))) {
      if (f1 % 3 == 0 || _this.unic > 0) {
        if (f1 % 2 == 0) {
          playcol(true);
        } else {
          this.playcol();
        }
      }
    } else {
      this.playcol();
    }
    _this.door.forEach((e) =>
      //for(let e in _this.door) //quick fix
      {
        _this.trg = _this.door[e];
        if (
          _this.trg._visible &&
          _this.player._visible &&
          _this.lastspin <= _this.fra &&
          !(_this.hhorse > 0 && _this.ashut > 0) &&
          (_this.trg.blown || _this.ashut <= 0)
        ) {
          let v1 = enfcheck(
            _this.trg.xp,
            _this.trg.yp,
            _this.player.xp,
            _this.player.yp,
            35
          );
          if (v1 < 25 && _this.trg.nod && _this.fra > 30) {
            if (_this.shutdoor != 0) {
              _root.beenlev[_root.lev!] = false;
            }
            _root.door = e;
            if (e == 0 || e == 2) {
              _root.playerx = 610 - _this.trg._x * 0.9;
              _root.playery = 280;
            } else {
              _root.playerx = 320;
              _root.playery = 530 - _this.trg._y * 0.9;
            }
            invp();
            _root.old.fillRect(_root.old.rectangle, 0);
            _root.old.draw(this);
            _root.olda._x = 0;
            _root.olda._y = 0;
            _root.olda._visible = true;
            moveon();
            _root.lev = _this.trg.gol;
            _root.gotoAndStop("reset");
          }
          if (!v1) {
            _this.trg.nod = true;
          }
        }
      }
    );
    _this.trg = _this.player;
    if (_root.bombnext || _root.notch) {
      if (_this.trg.d._currentframe == 11) {
        if (_this.trg.d.d.d._currentframe > 9) {
          _this.trg.d.d.d.gotoAndStop(10);
        }
      } else {
        _this.trg.d.gotoAndStop(11);
        if (_root.bombnext == 2) {
          _this.trg.it = 164;
        } else if (_root.notch) {
          _this.trg.it = 147;
        } else {
          _this.trg.it = 42;
        }
      }
    }
    if (_this.farter) {
      _this.farter = false;
      fart();
    }
    _this.spac = Key.isDown(32) || (Key.isDown(90) && !_root.so.data.frog);
    if (_this.spac) {
      if (_root.notch || _root.bombnext) {
        if (!_this.nosp) {
          _this.nosp = true;
          _root.notch = false;
          _root.bombnext = false;
        }
      }
    } else {
      _this.nosp = false;
    }
    if (_this.trg.d._currentframe >= 3) {
      if (!_root.bombnext) {
        _this.trg.fire = 5;
      }
      _this.trg.xbew *= 0.8;
      _this.trg.ybew *= 0.8;
    } else {
      if (Key.isDown(69)) {
        this.bomb();
      }
      _this.bomberfail -= 0.024;
      if (_this.bomberfail > 0 && _this.nextbo) {
        _this.bomberfail--;
        _this.lastbo = 0;
        bomb(2);
        _this.nextbo = false;
      }
      if (
        ((Key.isDown(81) && !_root.so.data.frog) ||
          (Key.isDown(65) && _root.so.data.frog)) &&
        _this.fra > 30 &&
        _root.pilc != undefined
      ) {
        _root.hud.pilll.gotoAndStop(3);
        _this.player.d.gotoAndStop(11);
        _this.player.it = 43;
        _this.player.d.d.d.it.d.gotoAndStop(_this.player.it);
        _this.player.d.d.d.it.d.p.gotoAndStop(pic(_root.pilc));
        if (_root.pilc >= 7) {
          this.tart(_root.pilc);
          switch (_root.pilc) {
            case 70:
              _root.keys = toot(_root.keys);
              break;
            case 71:
              _root.bombs = toot(_root.bombs);
              break;
            case 72:
              _this.player.hp = toot(_this.player.hp);
              break;
            case 73:
              _root.coins = toot(_root.coins);
              break;
            case 74:
              _this.tar = 166;
              teller();
              break;
            case 28:
              teller();
              _this.tar = _root.boner;
              _root.bona = true;
              break;
            case 27:
              _root.over.gotoAndStop(15);
              if (_root.hardmode) {
                _this.player.hp += 7;
              } else {
                _this.player.hp = 1000;
              }
              _this.ups[54] = _this._loc0_ = true;
              _this.ups[21] = _this._loc0_;
              _root.world = true;
              _root.darks = false;
              mapd();
              for (let e in _this.ball) {
                _this.trg2 = _this.ball[e];
                hurt(_this.trg2, 100);
              }
              break;
            case 26:
              curs();
              _this.ups[122] = 1.5;
              break;
            case 25:
              f1 = 0;
              f2 = 4;
              for (let _loc3_ in _this.ball) { //what context? local or _this?
                _this.trg2 = _this.ball[_loc3_];
                if (
                  (_this.trg2.s > 9 && _this.trg2.s != 45) ||
                  _this.trg2 == _this.player
                ) {
                  if (
                    _this.trg2.hp > f2 &&
                    _this.trg2.pow != 1 &&
                    _this.trg2.pow != 2
                  ) {
                    f2 = _this.trg2.hp;
                    f1 = _loc3_;
                  }
                }
              }
              _this.trg3 = _this.ball[f1];
              _this.trg2 = this.create(
                _this.trg3.xp,
                _this.trg3.yp,
                0,
                0,
                0,
                0,
                45
              );
              _this.trg2.weap = true;
              _this.trg2.ggh = true;
              _this.trg2.d.gotoAndStop(20);
              _this.trg2.trg2 = _this.trg3;
              _this.trg2.bh = false;
              _this.trg2.fra = -100;
              _this.trg2.specoz = undefined;
              _this.trg2.eternal = false;
              _this.trg2.boso = true;
              this.speco(_this.trg2);
              break;
            case 20:
              spaw(_this.player.xp, _this.player.yp, 45, 5.01);
              spaw(_this.player.xp, _this.player.yp, 45, 5.02);
              spaw(_this.player.xp, _this.player.yp, 45, 5.03);
              spaw(_this.player.xp, _this.player.yp, 45, 5.04);
              break;
            case 19:
              _this.ups[21] = _this.ups[54] = true;
              _root.world = true;
              _root.darks = false;
              mapd();
              break;
            case 18:
              f1 = 40;
              _this.trg2 = spaw(_this.player.xp + f1, _this.player.yp, 0, 5.01);
              _this.trg3 = spaw(_this.player.xp - f1, _this.player.yp, 0, 5.01);
              _this.trg2.col = 1;
              _this.trg3.col = 1;
              break;
            case 24:
              f1 = 40;
              _this.trg2 = spaw(_this.player.xp + f1, _this.player.yp, 0, 5.01);
              _this.trg3 = spaw(_this.player.xp - f1, _this.player.yp, 0, 5.01);
              _this.trg2.col = 3;
              _this.trg3.col = 3;
              break;
            case 17:
              _this.player.it = 77;
              _this.unic = 180;
              _root.mmus = _root.soundy("isaacunicorn.mp", 100);
              break;
            case 23:
              _this.anarch = 30;
              break;
            case 21:
              spaw(_this.player.xp, _this.player.yp, 45, 5.31);
              _root.soundy("summonsound.wav", 120);
              break;
            case 22:
              teller();
              _this.tar = _root.bossl;
              break;
            case 16:
              spaw(_this.player.xp, _this.player.yp, 45, 5.32);
              _root.soundy("summonsound.wav", 120);
              break;
            case 7:
              spaw(_this.player.xp, _this.player.yp, 45, 5.08);
              _root.soundy("summonsound.wav", 120);
              break;
            case 8:
              _this.doub = true;
              _root.over.gotoAndStop(2);
              _root.soundy("Devil_Card.mp", 100);
              break;
            case 9:
              _root.over.gotoAndStop(11);
              _root.soundy("Death_Card.mp", 100);
              for (let e in _this.ball) {
                _this.trg2 = _this.ball[e];
                hurt(_this.trg2, 60);
              }
              _root.so.data.dde = _root.so.data.dde + 1;
              if (_root.so.data.dde > 4) {
                _root.locker[48] = true;
              }
              break;
            case 10:
              _this.player.hp = _this.player.hp + 1;
              _this.ups[12] = _this.ups[12] + 1;
              break;
            case 11:
              teller();
              _this.tar = 35;
              break;
            case 12:
              _this.ups[3] = _this.ups[3] + 1;
              if (random(2) == 0) {
              }
              _this.ups[1] += 0.75;
              break;
            case 13:
              teller();
              _this.tar = _root.shopl;
              _root.shopa = true;
              break;
            case 14:
              teller();
              _this.tar = _root.hide;
              break;
            case 15:
              _this.ups[20] = _this.ups[20] + 1;
          }
        } else {
          piller();
          switch (Math.round(f1)) {
            case 14:
              if (f2) {
                _root.luck = _root.luck + 1;
                st22("Luck Up");
                goodpill();
                this.emo();
                pilcol(50, 100, 50);
              } else {
                st22("Luck Down");
                _root.luck = _root.luck - 1;
                emo(true);
              }
              break;
            case 13:
              _this.bluf += 3;
              st22("Friends till the end!");
              break;
            case 6:
              if (_this.player.hp + _root.armor > 1) {
                _this.lasth = 0;
                this.playerhurt(1, 201);
                st22("Bad Trip!");
                break;
              }
            case 1:
              if (_root.skiner == 4) {
                if (_root.armor < 3) {
                  _root.armor = 3;
                }
              } else if (_this.player.mhp > 0) {
                if (_root.hardmode) {
                  _this.player.hp += 5;
                } else {
                  _this.player.hp = _this.player.mhp;
                }
              }
              if (_root.hardmode) {
                st22("Full Health?");
              } else {
                st22("Full Health");
              }
              goodpill();
              this.emo();
              break;
            case 2:
              if (random(2) == 0) {
                hat(54);
                st11("Puberty");
              } else {
                _root.hmode = 16;
                st11("I found Pills");
                st22("And ate them!");
                _root.soundy("derp.mp");
              }
              break;
            case 3:
              _this.bomberfail = 5.5;
              st22("Oh no!");
              emo(true);
              _root.soundy("fart.mp");
              break;
            case 4:
              _root.armor += 2;
              st22("Balls of Steel");
              goodpill();
              this.emo();
              break;
            case 5:
              _root.ups[10] += 0.5;
              _this.ups[10] = _root.ups[10];
              st22("Pretty Fly");
              goodpill();
              this.emo();
              break;
            case 7:
              if (_root.skiner != 4) {
                _this.f13 = _this.player.mhp;
              } else {
                _this.f13 = _root.armor;
              }
              if (_this.f13 <= 1 || f2) {
                st22("Health Up");
                if (_root.skiner == 4) {
                  _root.armor = _root.armor + 1;
                } else {
                  _root.ups[15] = _root.ups[15] + 1;
                }
                pilcol(100, 50, 50);
                goodpill();
                this.emo();
              } else {
                if (_root.skiner == 4) {
                  _root.armor = _root.armor - 1;
                } else {
                  _root.ups[15]--;
                }
                st22("Health Down");
                emo(true);
              }
              _this.ups[15] = _root.ups[15];
              break;
            case 8:
              f1 = _root.bombs;
              _root.bombs = _root.keys;
              _root.keys = f1;
              st22("Bombs are Key");
              this.emo();
              break;
            case 9:
              if (f2) {
                _root.ups[32] += 0.5;
                st22("Tears Up");
                pilcol(80, 80, 100);
                goodpill();
                this.emo();
              } else {
                _root.ups[32] -= 0.4;
                st22("Tears Down");
                emo(true);
              }
              _this.ups[32] = _root.ups[32];
              break;
            case 10:
              if (f2 || (_this.ups[6] && _root.chaps < 8)) {
                _root.ups[31] += 0.5;
                st22("Range Up");
                pilcol(50, 100, 100);
                this.emo();
                goodpill();
              } else {
                _root.ups[31] -= 0.4;
                st22("Range Down");
                emo(true);
              }
              _this.ups[31] = _root.ups[31];
              break;
            case 11:
              if (f2) {
                _root.ups[27] = _root.ups[27] + 1;
                st22("Speed Up");
                pilcol(100, 100, 50);
                goodpill();
                this.emo();
              } else {
                _root.ups[27] -= 0.8;
                st22("Speed Down");
                emo(true);
              }
              _this.ups[27] = _root.ups[27];
              break;
            case 17:
              if (f2) {
                _root.ups[165] = _root.ups[165] + 1;
                st22("Shot Speed Up");
                goodpill();
                this.emo();
              } else {
                pilcol(50, 50, 50);
                _root.ups[165] -= 1.4;
                st22("Shot Speed Down");
                emo(true);
              }
              _this.ups[165] = _root.ups[165];
              break;
            case 12:
              fart();
              st22("Bad Gas");
              break;
            case 126:
              f1 = random(15);
              if (_root.chaps < 9) {
                if (f1 == 0) {
                  _this.tar = 169;
                } else if (f1 == 0 && _root.chaps != 1) {
                  _this.tar = 166;
                }
              }
              st22("TelePills");
              teller();
          }
        }
        _this.player.pilc = _root.pilc;
        _root.pilc = undefined;
      }
      spaceitem();
    }
    f1 = _root.bmode;
    if (_this.demon > 0 || _this.ups[122]) {
      _this.sk = 7;
    } else {
      _this.sk = _root.sk;
    }
    if (_this.ups[20]) {
      f1 = 3;
      _this.trg.flyby = true;
    }
    if (_this.ups[82]) {
      f1 = 9;
      _this.trg.flyby = true;
    }
    if (_this.bible || _root.etol || _this.ups[179] || _this.ups[184]) {
      f1 = 12;
      _this.trg.flyby = true;
    }
    if (_this.ups[185]) {
      f1 = 23;
      _this.trg.flyby = true;
    }
    if (_this.sk == 7) {
      if (_this.trg.flyby) {
        f1 = 9;
      } else {
        f1 = 8;
      }
    } else if (_this.sk == 5) {
      _root.hmode = 25;
      _root.bmode = 13;
    }
    if (_root.it == 8 && !_this.ups[20]) {
      f1 = 2;
    }
    if (_this.ups[159]) {
      f1 = 22;
      _this.trg.flyby = true;
    }
    if (_root.it == 90 || _root.it == 141) {
      f1 = 16;
      _this.trg.flyby = true;
      if (_this.sk == 7) {
        f1 = 18;
      } else if (_this.sk == 5) {
        f1 = 17;
      }
    }
    if (_this.razor > 0 || _this.ups[189]) {
      if (_this.trg.flyby) {
        f1 = 3;
      } else {
        f1 = 27;
      }
    }
    if (_this.purr) {
      f1 = 25;
      _this.trg.flyby = true;
    }
    _this.trg.d.bo.gotoAndStop(f1);
    if (enfget(_this.trg.xbew, _this.trg.ybew) < 2) {
      if (_root.it != 90 || _this.fra < 3) {
        _this.trg.d.bo.d.gotoAndStop(1);
      }
    } else {
      f1 = Math.abs(_this.trg.xbew) > Math.abs(_this.trg.ybew);
      if (_root.it == 9) {
        f1 = Math.abs(_this.trg.xbew) * 0.5 > Math.abs(_this.trg.ybew);
      }
      if (f1) {
        _this.trg.d.bo.d.gotoAndStop(3);
        if (_this.trg.xbew * _this.trg.d.bo._xscale < -100) {
          _this.trg.d.bo._xscale *= -1;
        }
      } else {
        if (_root.it == 90 || _root.it == 141) {
          if (_this.trg.ybew > 0) {
            _this.trg.d.bo.d.gotoAndStop(1);
          } else {
            _this.trg.d.bo.d.gotoAndStop(2);
          }
        } else {
          _this.trg.d.bo.d.gotoAndStop(2);
        }
        if (_root.it == 90 || _root.it == 141) {
          if (_this.trg.xbew * _this.trg.d.bo._xscale < -100) {
            _this.trg.d.bo._xscale *= -1;
          }
        }
      }
    }
    if (_root.eto >= 7) {
      _root.etol = true;
      _root.locker[113] = true;
      _root.playcol[0] = 5;
      _root.playcol[1] = 5;
      _root.playcol[2] = 5;
    }
    dirkey(true);
    horss(true);
    if (_this.xenf == 0) {
      _this.lastx = _this.fra;
    }
    if (_this.yenf == 0) {
      _this.lasty = _this.fra;
    }
    if (_this.md) {
      _this.xenf = _this._xmouse - _this.trg.xp;
      _this.yenf = _this._ymouse - _this.trg.yp + 10;
      if (Math.abs(_this.xenf) < Math.abs(_this.yenf)) {
        _this.xenf = 0;
      } else {
        _this.yenf = 0;
      }
    }
    if (_this.ups[114]) {
      _this.xxenf = _this.xenf;
      _this.yyenf = _this.yenf;
    }
    if (_this.nomove && !_root.bombnext && !_this.chaf) {
      _this.yenf = _this._loc0_ = 0;
      _this.xenf = _this._loc0_;
    }
    if (_this.bombdrop > 0) {
      _this.drop.xbew *= 0.5;
      _this.drop.ybew *= 0.5;
      if (!_this.md) {
        _this.drop.xbew += _this.xenf * 8;
        _this.drop.ybew += _this.yenf * 8;
      } else {
        enfcheck(
          _this.drop.xp,
          _this.drop.yp,
          _this._xmouse,
          _this._ymouse,
          10000
        );
        _this.enf = (Math.min(_this.enf / 3, 4) / _this.enf) * 2;
        _this.drop.xbew -= _this.xenf * _this.enf;
        _this.drop.ybew -= _this.yenf * _this.enf;
      }
      _this.yenf = _this._loc0_ = 0;
      _this.xenf = _this._loc0_;
    } else if (_this.xenf != 0 && _this.yenf != 0) {
      if (_this.lasty > _this.lastx) {
        _this.xenf = 0;
      } else {
        _this.yenf = 0;
      }
    }
    let v1 = _this.plo;
    if (_this.laser! <= 1) {
      if (_this.xenf != 0 || _this.yenf != 0) {
        if (
          _this.plox <= 8 &&
          (!_this.ups[118] ||
            _this.trg.fire <= 0 ||
            _this.chaf == undefined ||
            _root.bombnext)
        ) {
          if (Math.abs(_this.xenf) > Math.abs(_this.yenf)) {
            _this.yenf = 0;
            if (_this.xenf > 0) {
              _this.xenf = 1;
              _this.plo = 2;
            } else {
              _this.plo = 4;
              _this.xenf = -1;
            }
          } else {
            _this.xenf = 0;
            if (_this.yenf < 0) {
              _this.plo = 3;
              _this.yenf = -1;
            } else {
              _this.yenf = 1;
              _this.plo = 1;
            }
          }
        }
        if (_this.laser == 1) {
          _this.trg.xpp = _this.xenf;
          _this.trg.ypp = _this.yenf;
          _this.yenf = _this._loc0_ = 0;
          _this.xenf = _this._loc0_;
        }
        _this.laser!++;
      }
    }
    if (_this.ups[68] && _this.plox > 8) {
      _this.plo = v1;
    }
    if (_this.laser! > 1) {
      _this.trg.d.gotoAndStop(1);
      _this.laser!++;
      _this.trg.xbew *= 0.9;
      _this.trg.ybew *= 0.9;
      if (_this.laser! > 21 && _this.laser! < 32 && _this.fra % 3 != 0) {
        this.lasershow(_this.trg);
      }
      if (_this.laser! > 40) {
        _this.laser = undefined;
      }
      _this.yenf = _this._loc0_ = 0;
      _this.xenf = _this._loc0_;
    }
    if (_this.ups[114] && !_root.bombnext) {
      if (_this.knil == undefined) {
        _this.knil = 23;
        _this.knill = 0;
        _this.knife.xppp = _this.trg.xp;
        _this.knife.yppp = _this.trg.yp;
        _this.knife.xbew = _this.trg.xbew;
        _this.knife.ybew = _this.trg.ybew;
      }
      if (_root.knif == undefined) {
        _root.knif = 0;
      }
      if (_this.ups[114]) {
        f1 = _this.xxenf;
        f2 = _this.yyenf;
        _this.xxenf = _this.xenf;
        _this.yyenf = _this.yenf;
        _this.xenf = f1;
        _this.yenf = f2;
      } else {
        _this.xxenf = _this.xenf;
        _this.yyenf = _this.yenf;
      }
      if (_this.xenf != 0 || _this.yenf != 0) {
        f1 = rotget2(_this.xenf, _this.yenf) + 180;
        _root.knir = f1;
      } else {
        f1 = _root.knir;
      }
      _this.knife.dmg = dmgdo() * (2 + Math.min(Math.max(_this.knill, 0), 4));
      _this.knil += _this.knill;
      _this.knill -= 1.4;
      f1 -= _this.knife.d.z._rotation;
      f1 = absmax(rotrund(f1), Math.max(0, 40 - _this.knil));
      _this.knife.d.z._rotation += f1 * 0.7;
      _root.knif *= 0.98;
      if (_this.knil < 23) {
        _this.knil = 23;
        if ((_this.xenf != 0 || _this.yenf != 0) && Math.abs(f1) < 5) {
          firr(_this.trg);
          _root.knif += Math.max(
            0.2,
            Math.min(0.35, (0.2 / _this.trg.fire) * 10)
          );
        }
        if (
          _root.knif > 0.35 &&
          _this.xenf == 0 &&
          _this.yenf == 0 &&
          !_this.kkk
        ) {
          _this.knill = Math.min(
            20,
            Math.max(10, _root.firrr * 0.51) * (0.3 + _root.knif * 0.2)
          );
          _root.knif = 0;
        }
        _this.knife.xppp = _this.trg.xp;
        _this.knife.yppp = _this.trg.yp;
        _this.knife.xbew = _this.trg.xbew;
        _this.knife.ybew = _this.trg.ybew;
      } else if (_this.knill < 0) {
        _this.knife.xppp *= 0.5;
        _this.knife.yppp *= 0.5;
        _this.knife.xppp += _this.trg.xp * 0.5;
        _this.knife.yppp += _this.trg.yp * 0.5;
      } else {
        _this.knife.xppp *= 0.8;
        _this.knife.yppp *= 0.8;
        _this.knife.xppp += _this.trg.xp * 0.2;
        _this.knife.yppp += _this.trg.yp * 0.2;
      }
      f1 = (_this.knife.d.z._rotation / 180) * 3.141592653589793;
      if (_this.knife.d.z._rotation < -90 || _this.knife.d.z._rotation > 90) {
        _this.knife.d.z._yscale = -100;
      } else {
        _this.knife.d.z._yscale = 100;
      }
      if (_this.fra > 3) {
        _this.knife.xp = _this.knife.xppp + Math.cos(f1) * _this.knil;
        _this.knife.yp =
          _this.knife.yppp + Math.sin(f1) * _this.knil * 0.8 - Math.cos(f1) * 3;
        _this.knife.xppp += _this.knife.xbew;
        _this.knife.yppp += _this.knife.ybew;
        _this.knife.xbew *= 0.8;
        _this.knife.ybew *= 0.8;
      }
      if (_this.fra % 3 == 0) {
        _this.knife.hh = [];
      }
      _this.yenf = _this._loc0_ = 0;
      _this.xenf = _this._loc0_;
    }
    if (_this.ups[118] && _this.trg.d.d.d.d._currentframe > 4) {
      _this.trg.d.d.d.d.z.nextFrame();
      if (
        _this.trg.d.d.d.d.z._currentframe == 4 ||
        _this.trg.d.d.d.d.z._currentframe == 11
      ) {
        _this.brim = true;
        this.lasershow(_this.trg);
        _this.yenf = _this._loc0_ = 0;
        _this.xenf = _this._loc0_;
        _this.brim = false;
      }
    }
    f1 = _root.fmode;
    f2 = _root.hmode;
    _this.nohat = false;
    if (_this.doub) {
      f1 = 8;
      f2 = 8;
    }
    if (_this.ups[3] && !_root.ups[3]) {
      f1 = 4;
      f2 = 4;
    }
    if (_this.sk != 5 && _this.ups[69]) {
      f2 = 17;
    }
    if (_this.ups[122]) {
      f2 = 30;
    } else if (_this.sk == 7) {
      if (_this.ups[159]) {
        f2 = 39;
      } else if (_this.ups[80]) {
        f2 = 20;
      } else {
        f2 = 22;
      }
    }
    if (_this.ups[149]) {
      f2 = 36;
    }
    if (_this.razor > 0) {
      f2 = 29;
    }
    if (_this.ups[189]) {
      f2 = 42;
    }
    if (_this.purr) {
      f2 = 43;
    }
    if (_this.demon > 0) {
      f2 = 21;
    }
    if (_this.ups[68]) {
      if (_this.sk == 5) {
        f2 = 28;
      } else if (_this.sk == 7) {
        f2 = 27;
      } else {
        f2 = 10;
      }
      f1 = 12;
    }
    if (_this.ups[118]) {
      f2 = 31;
    }
    if (_this.laser) {
      f2 = 14;
    }
    if (_this.unic > 0) {
      if (_this.pacman) {
        f2 = 23;
      } else {
        f2 = 19;
      }
      _this.nohat = true;
    }
    _this.facer = f2;
    if (_this.trg.d._currentframe == 1 || _root.bombnext) {
      _root.hud.weap.gotoAndStop(f1);
      if (
        Math.abs(_this.xenf) < 0.5 &&
        Math.abs(_this.yenf) < 0.5 &&
        !_this.kkk &&
        (_this.ups[69] || _this.ups[118]) &&
        !_root.bombnext
      ) {
        if (
          _this.chaf! > -1000 &&
          Math.abs(_this.chax) + Math.abs(_this.chay) > 0
        ) {
          if (_this.chaaf > 4.7 || _this.ups[69]) {
            _this.chaz = true;
            _this.xenf = _this.chax;
            _this.yenf = _this.chay;
          } else {
            _this.chay = _this._loc0_ = 0;
            _this.chax = _this._loc0_;
            _this.chaf = undefined;
            _this.plo = 1;
          }
        }
      }
      if (_this.pacman) {
        if (_this.trg.d.d.d.d._xscale * _this.trg.xbew < -300) {
          _this.trg.d.d.d.d._xscale *= -1;
          if (_this.trg.d.d.d.d._xscale < 0) {
            _this.trg.d.d.d.d._x = 40.7;
          } else {
            _this.trg.d.d.d.d._x = 0;
          }
        }
      } else {
        if (_this.pacoo) {
          _this.pacoo = false;
          _this.trg.d.d.d.d._xscale = 100;
          _this.trg.d.d.d.d._x = _this.plxx;
        } else {
          _this.plxx = _this.trg.d.d.d.d._x;
        }
        if (
          Math.abs(_this.xenf) > 0.5 ||
          Math.abs(_this.yenf) > 0.5 ||
          (_this.ups[114] && (_this.xxenf != 0 || _this.yyenf != 0))
        ) {
          plff();
        } else {
          if (_this.plox < 0 && _this.laser! <= 1 && !_this.ups[118]) {
            _this.plo = 1;
          }
          if (!_this.ups[118] || _this.trg.fire < 4) {
            _this.trg.d.d.d.d.gotoAndStop(_this.plo);
          }
        }
      }
      if (_this.trg.d._currentframe == 1) {
        if (_this.laser! > 1) {
          _this.trg.d.d.d.d.d.gotoAndStop(_this.laser);
        }
        if (_this.chaaf > 0) {
          _this.trg.d.d.d.d.gotoAndStop(_this.plo);
          if (_this.trg.d.d.d.d._currentframe < 5) {
            _this.trg.d.d.d.d.d.gotoAndStop(_this.chaaf);
          }
        } else if (_root.hmode == 17 || _this.ups[118]) {
          if (_this.plox > 8) {
            _this.trg.d.d.d.d.gotoAndStop(_this.plo + 4);
          }
        }
        if (_this.ups[68]) {
          _this.ups[103] = _root.ups[103];
          if (trixx(30)) {
            if (random(10) == 0) {
              _this.ups[103] = 0;
            }
          }
          _this.trg2 = _this.player.d.d.d.d.l;
          if (_this.ups[115]) {
            colorit(_this.trg2, 1.5, 2, 2, 0, 0, 0);
            _this.trg2._alpha = 50;
          } else if (_this.ups[103]) {
            colorit(_this.trg2, 0.4, 0.97, 0.5, 0, 150, 0);
          } else if (_this.ups[104]) {
            colorit(_this.trg2, 1, 0.4, 0.13, 30, 0, 0);
          } else if (_this.ups[89]) {
            colorit(_this.trg2, 3, 3, 3, 150, 150, 150);
          } else if (_this.ups[90]) {
            colorit(_this.trg2, 0.4, 0.4, 0.4, 100, 100, 100);
          } else if (_this.ups[69]) {
            colorit(_this.trg2, 0.33, 0.18, 0.18, 66, 40, 40);
          } else if (_this.ups[6]) {
            colorit(_this.trg2, 0.2, 1, 0, 255, 255, 0);
          } else if (_this.ups[3]) {
            colorit(_this.trg2, 0.4, 0.15, 0.38, 90, 0, 180);
          }
          if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
            f1 =
              (_this.lass / _this.trg.d.d._xscale / _this.trg._xscale) * 10000 +
              (_this.trg2._x - 6) * _this.trg.xpp;
          } else {
            f1 =
              (_this.lass / _this.trg.d.d._xscale / _this.trg._xscale) * 10000 +
              (_this.trg2._y + 20) * _this.trg.ypp;
          }
          _this.trg2._yscale = f1;
          _this.trg2._xscale = _this.lassd * 30;
          _this.trg2._x -= _this.trg.xp - _this.lasx;
          _this.trg2._y -= _this.trg.yp - _this.lasy;
          _this.lasx = _this.trg.xp;
          _this.lasy = _this.trg.yp;
        }
      }
    }
    _this.chaaf = 0;
    _this.plox--;
    _this.plox1--;
    _this.trg.fire--;
    _this.trg.fire1--;
    dirkey(false);
    if (_this.horse! > 0) {
      if (_this.horse == 100) {
        this.horss();
      } else {
        _this.horse!--;
        _this.xenf = _this.horsx * 4.5;
        _this.yenf = _this.horsy * 4.5;
        _this.trg.xbew *= 0.7;
        _this.trg.ybew *= 0.7;
        if (_this.horse! % 6 < 3) {
          colorit(_this.player, 1.2, 1.2, 1.2, 55, 55, 55);
        }
      }
      _this.hhorse = 10;
    } else if (_this.horse == undefined) {
      _this.hhorse--;
    } else {
      _this.horse = undefined;
    }
    f1 = 100 + (_this.ups[12] - _this.ups[71] + _this.ups[122]) * 25;
    if (_this.demon > 0) {
      f1 += 25;
    }
    if (_this.ups[157]) {
      f1 += (_this.rag - 1) * 14;
    }
    _this.trg._yscale = _this._loc0_ = f1;
    _this.trg._xscale = _this._loc0_;
    if (_this.trg.d._currentframe == 1) {
      f1 = 100 + (_this.ups[121] - _this.ups[120]) * 20;
      _this.trg.d.d._yscale = _this._loc0_ = f1;
      _this.trg.d.d._xscale = _this._loc0_;
    }
    let f10 = [0, -0.15, 0.3, 0, 0.1, 0.23, 0.1];
    f1 = 1;
    _root.playsp =
      1 +
      Math.min(
        1,
        (_this.ups[119] +
          _this.ups[27] +
          _this.ups[28] +
          _this.ups[12] +
          _this.ups[71] +
          _this.ups[101] +
          _this.ups[122] +
          _this.ups[120] +
          _this.ups[143] +
          _this.ups[189]) *
          0.3 +
          Math.min(1, _this.ups[14]) * 0.6 -
          Math.min(1, _this.ups[13] + _this.ups[121]) * 0.1 +
          f10[_root.skiner] +
          _this.ups[70] * 0.4 +
          _this.ups[79] * 0.2 +
          _this.ups[82] * 0.3
      ) -
      (_this.ups[90] + _this.ups[129] + _this.ups[118] + _this.ups[182]) * 0.2;
    if (_root.it == 16) {
      _root.playersp += 0.4;
    }
    if (_this.unic > 0) {
      _root.playsp += 0.28;
    }
    if (trixx(37)) {
      _root.playsp += 0.15;
    }
    if (_this.demon > 0) {
      _root.playsp -= 0.18;
    }
    if (_root.it == 90 || _root.it == 141) {
      _root.playsp = Math.max(1.5, _root.playsp);
    }
    f1 = _root.playsp;
    _this.xenf *= 0.75 + f1 * 0.25;
    _this.yenf *= 0.75 + f1 * 0.25;
    _this.nomove =
      (_this.trg.d._currentframe >= 3 &&
        _this.trg.d._currentframe < 9 &&
        (_this.trg.d._currentframe != 4 ||
          _this.trg.d.d.d._currentframe < 38)) ||
      _this.fra < 20;
    if (_this.trg.d._currentframe == 4) {
      if (_this.xenf != 0 || _this.yenf != 0) {
        if (
          _this.trg.d.d.d._currentframe > 11 &&
          _this.trg.d.d.d._currentframe < 35
        ) {
          _this.trg.d.d.d.gotoAndPlay(35);
        }
      }
    }
    if (_this.trg.d._currentframe == 9 || _this.trg.d._currentframe == 10) {
      if (_this.xenf != 0 || _this.yenf != 0) {
        _this.trg.d.d.d.gotoAndPlay(_this.trg.d.d.d._totalframes - 1);
      }
    }
    if (_this.nomove) {
      _this.yenf = _this._loc0_ = 0;
      _this.xenf = _this._loc0_;
    }
    if (_this.xenf == 0) {
      _this.lastxx = _this.fra;
    }
    if (_this.yenf == 0) {
      _this.lastxy = _this.fra;
    }
    if (_this.trg.ghhh) {
      if (_this.xenf != 0 && _this.yenf != 0) {
        if (_this.lastxy > _this.lastxx) {
          _this.xenf = 0;
        } else {
          _this.yenf = 0;
        }
      }
    } else if (_this.xenf != 0 && _this.yenf != 0) {
      _this.xenf /= 1.4142135623730951;
      _this.yenf /= 1.4142135623730951;
    }
    _this.trg.ghhh = false;
    v1 = 0;
    if (_this.xenf != 0 && _this.yenf == 0) {
      v1 = Math.abs(_this.trg.ybew);
      _this.trg.ybew *= 0.5;
    } else if (_this.yenf != 0 && _this.xenf == 0) {
      v1 = Math.abs(_this.trg.xbew);
      _this.trg.xbew *= 0.5;
    }
    v1 *= 0.3;
    let v2 = _this.xenf * _this.trg.xbew + _this.trg.ybew * _this.yenf;
    v1 = v1 * 0.1 + Math.max(0, v2 * 0.2);
    v1 = 3 + v1 / _root.playsp;
    v1 *= 0.8;
    _this.trg.xbew -= _this.xenf * v1;
    _this.trg.ybew -= _this.yenf * v1;
    _this.trg.xbew *= 0.7 + _root.playsp * 0.075;
    _this.trg.ybew *= 0.7 + _root.playsp * 0.075;
  }
  laps();
}
function posw(f1, f2, f3, b2) {
  var _loc1_ = -100;
  var _loc2_ = -100;
  var _loc7_ = true;
  while (mhit(_loc1_, _loc2_) || levzz(this.ingrid(_loc1_, _loc2_)) >= 0.2) {
    _loc7_ = true;
    if (f3 > 500) {
      f3 = 0;
    }
    f3 += 5;
    _loc1_ = f1 + crand(f3);
    _loc2_ = f2 + this.crand();
    if (_this.trg.s == 101 || b2) {
      var _loc3_ = 0;
      while (_loc3_ < _this.ball.length) {
        var _loc5_ = _this.ball[_loc3_];
        var _loc6_ = 50;
        if (_loc5_ == _this.player && b2) {
          _loc6_ = 150;
        }
        if (enfcheck(_loc1_, _loc2_, _loc5_.xp, _loc5_.yp, _loc6_) > 0) {
          _loc7_ = false;
          _loc1_ = -100;
          _loc2_ = -100;
        }
        _loc3_ = _loc3_ + 1;
      }
    }
    if (_loc7_) {
      outgrid(this.ingrid(_loc1_, _loc2_));
      _loc1_ = _this.xenf;
      _loc2_ = _this.yenf;
      if (random(100) != 0) {
        for (let z in _this.ball) {
          var _loc4_ = _this.ball[z];
          if (_loc4_.s == 5) {
            if (Math.abs(_loc4_.xp - _loc1_) < 20) {
              if (Math.abs(_loc4_.yp - _loc2_) < 20) {
                _loc1_ = -100;
              }
            }
          }
        }
      }
    }
  }
}
function spaw(f1, f2, f3, f0) {
  posw(f1, f2, f3, f0 > 9 && _root.lev == _root.chamb);
  _this.levz[this.ingrid(_this.xenf, _this.yenf)] = 0.9;
  if (_this.spispaw) {
    _this.xenf += crand(random(10));
    _this.yenf += this.crand();
  }
  return this.create(_this.xenf, _this.yenf, 0, 0, 0, 0, f0);
}
function scerf() {
  if (_this.bgg2 == undefined) {
    _this.trg = createEmptyMovieClip("bggg2", 35670000); // call from _this.bggg2 ? ???
    _this.bgg2 = new flash.display.BitmapData(
      _this.gridxs,
      _this.gridys - _this.f1,
      true,
      0
    );
    _this.trg.attachBitmap(_this.bgg2, 1);
    _this.trg._yscale = _this.trg._xscale = 100 / _this.hdx;
    _this.maxx = new flash.geom.Matrix();
    _this.maxx.scale(_this.hdx, _this.hdx);
    _this.bgg2.draw(this, _this.maxx);
  }
}
function dirkey(f1) {
  _this.xenf = _this.yenf = _this.enf = 0;
  _this.kkk = false;
  if (_root.so.data.left) {
    f1 = !f1;
  }
  if (!f1) {
    if (_root.so.data.frog) {
      if (Key.isDown(81)) {
        _this.kkk = true;
        _this.xenf++;
      }
      if (Key.isDown(90)) {
        _this.kkk = true;
        _this.yenf++;
      }
    } else {
      if (Key.isDown(65)) {
        _this.kkk = true;
        _this.xenf++;
      }
      if (Key.isDown(87)) {
        _this.kkk = true;
        _this.yenf++;
      }
    }
    if (Key.isDown(68)) {
      _this.kkk = true;
      _this.xenf--;
    }
    if (Key.isDown(83)) {
      _this.kkk = true;
      _this.yenf--;
    }
  } else {
    if (Key.isDown(39)) {
      _this.kkk = true;
      _this.xenf++;
    }
    if (Key.isDown(37)) {
      _this.kkk = true;
      _this.xenf--;
    }
    if (Key.isDown(38)) {
      _this.kkk = true;
      _this.yenf--;
    }
    if (Key.isDown(40)) {
      _this.kkk = true;
      _this.yenf++;
    }
  }
  if (_root.so.data.left) {
    _this.xenf *= -1;
    _this.yenf *= -1;
  }
}
function xox(f3) {
  return random(7) == 0 || (f3 && random(2) == 0);
}
function trixies(f3) {
  if (trixx(34) || trixx(36) || trixx(41) || trixx(44) || trixx(45)) {
    if (xox(f3) && trixx(45)) {
      _this.f2 = 5.3;
    } else if (xox(f3) && trixx(44)) {
      _this.f2 = 5.07;
    } else if (xox(f3) && trixx(41)) {
      _this.f2 = 5.04;
    } else if ((xox(f3) || (random(17) == 0 && !f3)) && trixx(36)) {
      if (random(2) == 0) {
        _this.f2 = 5.06;
      } else {
        _this.f2 = 5.03;
      }
    } else if (xox(f3) && trixx(34)) {
      _this.f2 = 5.01;
    }
  }
}
function picc(f2) {
  if (random(2) == 0) {
    _root.picers[random(6)] = f2;
  }
}
function pic(f1) {
  if (f1 < 7) {
    f1 = _root.picers[f1 - 1];
  }
  return f1;
}
function cspawn(f0, f12) {
  let i = 0;
  while (i < f12) {
    let f13 = 0;
    while (f13++ < 10) {
      _this.xenf = crand(5);
      _this.yenf = crand(5);
      if (_root.lev == _root.chamb) {
        _this.xenf *= 0.4;
        _this.yenf *= 0.4;
      }
      if (
        linecheckx(
          _this.chestox,
          _this.chestoy,
          _this.trg.xp + _this.xenf * 7,
          _this.trg.yp + _this.yenf * 7
        )
      ) {
        f13 = 1000;
      }
    }
    if (f0 == 5.05 || f0 == 5.06) {
      _this.xenf = 0;
      _this.yenf = 0;
      if (_this.trg != 2) {
        _this.chestoy += 10;
      }
    }
    var _loc2_ = this.create(
      _this.chestox,
      _this.chestoy,
      0,
      _this.xenf,
      _this.yenf,
      0,
      f0
    );
    _loc2_.alt = true;
    if (f0 == 5.1) {
      _loc2_.fra -= 15;
      _this.trg.done = true;
      if (_this.trg == 2 && _root.locker[18] && !_this.ups[90]) {
        _loc2_.alt = false;
        _loc2_.it = 90;
      }
    }
    if (f0 == 5 && _this.trg == 2) {
      _loc2_.col = 3;
    }
    if (f0 == 5.05 || f0 == 5.06) {
      if (_this.trg != 2) {
        _loc2_._xscale = _this.trg._xscale * 0.8;
        _loc2_._yscale = _loc2_._xscale;
      }
    }
    if (_this.f10 < 0) {
      break;
    }
    i++;
  }
}
function onEnterFrame() {
  _root.tex = "";
  _this.shiz.forEach((e) =>
    //for(let e in _this.shiz) //quick fix
    {
      _this.trg = _this.shiz[e];
      if (_this.trg.fra < _this.fra) {
        _this.trg.gotoAndStop(6);
        _this.levz[_this.trg.til] = 1.5;
        _this.shiz.splice(e, 1);
      }
    }
  );
  if (_this.bluf == undefined) {
    _this.bluf = _root.bluf;
  }
  if (_this.fra == 14 && _this.curss) {
    st11(_this.curss);
  }
  if (_this.ups[114]) {
    _this.ups[69] = _this.ups[118] = 0;
  }
  if (_this.playfirst) {
    _this.player.d.gotoAndStop(1);
    _this.playfirst = false;
  }
  _root.chaf = _this.chaf != undefined;
  if (_this.player.dones) {
    if (_this.gameover == 2) {
      _root.so.data.deads = _root.so.data.deads + 1;
      if (_root.so.data.deads >= 100) {
        _root.locker[39] = true;
      }
    }
    if (_this.gameover > 1) {
      if (!_root.ups[11] && _root.ups[81] <= 0 && !_root.ups[161]) {
        if (!_root.dmusic) {
          _root.dmusic = true;
          _root.fade = true;
        }
      }
      if (_root.prsk) {
        _root.sk = _root.prsk;
        _root.skiner = _root.prsk2;
        _root.prsk = undefined;
        _root.prsk2 = undefined;
      }
    }
    if (_this.gameover++ > 50) {
      if (_root.ups[11] || _root.ups[81] > 0 || _root.ups[161]) {
        _root.armor = 0;
        if (_this.ashut > 0) {
          _root.beenlev[_root.lev!] = false;
        } else if (_root.bossl == _root.lev || _root.bossl2 == _root.lev) {
          if (!_this.nobob) {
            bosssp();
            _this.killa = true;
            if (_root.lev == _root.bossl2 && _root.double) {
              _root.bosss = _root.bosss2;
            }
          }
        }
        _root.shroom = true;
        if (!_root.ups[11]) {
          if (_root.skiner == 4) {
            _root.armor = 1;
            _root.ups[23] += 0 - _this.player.mhp;
          } else {
            _root.ups[23] += 1 - _this.player.mhp;
          }
          if (!_root.ups[161]) {
            _root.shroom = 2;
            _root.ups[81]--;
          } else {
            _root.shroom = 4;
            _root.ups[161] = 0;
            if (_root.skiner != 4) {
              _root.ups[23]--;
              hat(31);
              _root.prsk = _root.sk;
              _root.prsk2 = _root.skiner;
              _root.skiner = 4;
              _root.sk = 5;
            }
            _root.armor = 3;
          }
        } else if (_root.skiner == 4) {
          _root.armor = 3;
        }
        _root.ups[11] = 0;
        _root.door = _root.door! * 1 + 2;
        if (_root.door >= 4) {
          _root.door -= 4;
        }
        _root.playerx = 320;
        _root.playery = 400;
        invp();
        _root.old.fillRect(_root.old.rectangle, 0);
        _root.old.draw(this);
        _root.olda._x = 0;
        _root.olda._y = 0;
        _root.olda._visible = true;
        _root.lev = _root.lastl;
        if (_root.lev! <= 0) {
          _root.lastl = _root.lev = 35;
        }
        _root.hp = 1000;
        _root.getup = true;
        moveon();
        _root.gotoAndStop("reset");
      } else {
        _root.map.fillRect(_root.map.rectangle, 0);
        _root.hud.paus.gotoAndStop(3);
        if (_this.lastk <= 0) {
          _this.lastk = 1;
        }
        _root.hud.paus.kill.gotoAndStop(Math.round(_this.lastk));
        _root.hud.paus.nam.gotoAndStop(Math.max(1, _root.skiner));
        _root.hud.paus.loco.gotoAndStop(Math.max(1, _root.chaps));
        //onEnterFrame = undefined; TODO: ???
      }
    }
  }
  if (
    _root.catlives +
      _this.ups[145] +
      _this.ups[134] +
      _this.ups[133] +
      _this.ups[187] >
    2
  ) {
    _root.locker[85] = true;
    _this.purr = true;
  }
  _this.player.d.bub2._visible =
    _this.ups[108] ||
    _this.ups[162] ||
    _this.ups[173] ||
    _this.ups[142] ||
    _this.ups[184];
  if (_this.ups[184]) {
    _this.player.d.bub2.gotoAndStop(5);
  } else if (_this.ups[142]) {
    _this.player.d.bub2.gotoAndStop(2);
  } else if (_this.ups[173]) {
    _this.player.d.bub2.gotoAndStop(3);
  } else if (_this.ups[108]) {
    _this.player.d.bub2.gotoAndStop(1);
  } else {
    _this.player.d.bub2.gotoAndStop(4);
  }
  if ((_this.player.d.bub._visible = _this.playsave > 0)) {
    if (_this.playsave < 50) {
      if (_this.playsave % 5 == 0) {
        if ((_this.co = !_this.co)) {
          _this.player.d.bub._alpha = 100;
        } else {
          _this.player.d.bub._alpha = 0;
        }
      }
    }
  }
  if (_this.fra == _this.telf) {
    _root.door = undefined;
    _root.soundy("hell_portal1.wav");
    if (_this.shutdoor != 0) {
      _root.beenlev[_root.lev!] = false;
    }
    invp();
    _root.old.fillRect(_root.old.rectangle, 0);
    _root.old.draw(this);
    _root.olda._x = 0;
    _root.olda._y = 0;
    _root.olda._visible = true;
    moveon();
    if (
      _this.tar &&
      ((_this.tar != 166 && _this.tar != 169) || _root.chaps < 9)
    ) {
      _root.lev = _this.tar;
    } else {
      while (
        _root.lev == _root.lastl ||
        !_root.levz[_root.lev!] ||
        _root.lev! > 150
      ) {
        _root.lev = random(_root.levz.length) + 1;
      }
    }
    if (
      _root.lev == _root.bossl &&
      _root.double &&
      _root.bosss != _root.bosss2
    ) {
      _root.lev = _root.bossl2;
    }
    _root.tell = true;
    _root.door = undefined;
    _root.lastl = undefined;
    _root.gotoAndStop("reset");
  }
  if (_this.fra % 3 == 0) {
    for (let e in _this.bomf) {
      bombfail(
        _this.bomf[e][0],
        _this.bomf[e][1],
        _this.bomf[e][2],
        _this.bomf[e][3]
      );
    }
    _this.bomf = [];
  }
  if (_this.ups[144] && !_this.bumz) {
    _this.bumz = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.bum = true;
    _this.trg2.flyby = true;
  }
  if (
    _this.ups[114] &&
    _this.knife == undefined &&
    _this.player.d._currentframe < 3
  ) {
    _this.knife = _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      2
    );
    attach(_this.trg, 501);
    _this.trg.dy = undefined;
    _this.trg.knife = true;
  }
  if (_this.ups[81] && !_this.cats && _this.player.d._currentframe < 3) {
    _this.cats = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.cat = true;
  }
  if (_this.ups[11] && !_this.catss && _this.player.d._currentframe < 3) {
    _this.catss = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.cat = 2;
  }
  if (_this.ups[94] && !_this.monb && _this.player.d._currentframe < 3) {
    _this.monb = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.mon = 1;
  }
  if (_this.ups[96] && !_this.monb2 && _this.player.d._currentframe < 3) {
    _this.monb2 = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.mon = 2;
  }
  if (_this.ups[98] && !_this.monb3 && _this.player.d._currentframe < 3) {
    _this.monb3 = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.mon = 3;
  }
  if (_this.ups[131] && !_this.monb4 && _this.player.d._currentframe < 3) {
    _this.monb4 = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.mon = 4;
  }
  if (_this.ups[73] && !_this.meats && _this.player.d._currentframe < 3) {
    _this.meats = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.meat = true;
    if (_this.ups[73] < 3) {
      _this.trg.hpo = 5;
    }
  }
  if (_this.ups[73] > 4 && !_this.meats2 && _this.player.d._currentframe < 3) {
    _this.meats2 = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.meat = true;
    _this.trg.me2 = true;
  }
  if (
    Math.min(2, _this.ups[112]) > _this.flyby4 &&
    _this.player.d._currentframe < 3
  ) {
    _this.flyby4++;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.ang = true;
    _this.trg2.hpo = 20;
  }
  while (
    Math.min(
      3,
      _this.ups[8] +
        _this.ups[67] +
        _this.ups[95] +
        _this.ups[99] +
        _this.ups[100] +
        _this.ups[113] +
        _this.ups[163] +
        _this.ups[167] +
        _this.ups[174] +
        _this.ups[188]
    ) > _this.minions &&
    _this.player.d._currentframe < 3
  ) {
    _this.minions++;
    this.create(_this.player.xp, _this.player.yp - 10, 0, 0, 0, 0, 3);
  }
  if (_this.ups[155] && _this.player.d._currentframe < 3 && !_this.eyepie) {
    _this.eyepie = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      crand(10),
      crand(10),
      0,
      3
    );
    _this.trg2.eye = true;
  }
  if (_this.ups[187] && _this.player.d._currentframe < 3 && !_this.hairb) {
    _this.hairb = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      crand(10),
      crand(10),
      0,
      3
    );
    _this.trg2.hairb = true;
  }
  if (_this.ups[178] && _this.player.d._currentframe < 3 && !_this.holp) {
    _this.holp = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      crand(10),
      crand(10),
      0,
      3
    );
    _this.trg2.hol = true;
    _this.holz = _this.trg2;
  }
  if (_this.ups[172] && _this.player.d._currentframe < 3 && !_this.knip) {
    _this.knip = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      crand(10),
      crand(10),
      0,
      3
    );
    _this.trg2.ni = true;
  }
  if (_this.ups[117] == 0.55) {
    _this.ups[117] = 0;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.bird = true;
  }
  if (_this.dbird == 2) {
    _this.dbird = 1;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.bird = 2;
  }
  if (
    trixx(57) &&
    _this.ggho == undefined &&
    _this.player.d._currentframe < 3
  ) {
    _this.ggho = _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.ggho = true;
  }
  if (!trixx(57) && _this.ggho) {
    _this.ggho.done = true;
    _this.ggho = undefined;
  }
  if (
    trixx(54) &&
    _this.ggho2 == undefined &&
    _this.player.d._currentframe < 3
  ) {
    _this.ggho2 = _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.ggho = 2;
  }
  if (!trixx(54) && _this.ggho2) {
    _this.ggho2.done = true;
    _this.ggho2 = undefined;
  }
  if (_this.ups[170] && !_this.dad) {
    _this.dad = true;
    _this.trg2 = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg2.dad = true;
    _this.trg2.d.gotoAndStop(151);
    _this.trg2.d.d.gotoAndStop(1);
  }
  if (_this.bodd && _this.player.d._currentframe < 3) {
    _this.bodd = false;
    _this.trg2 = spaw(_this.trg.xp, _this.trg.yp, 0, 3);
    _this.trg2.meat = 5;
    colorit(
      _this.trg2,
      _root.playcol[0],
      _root.playcol[1],
      _root.playcol[2],
      0,
      0,
      0
    );
  }
  if (
    Math.min(3, _this.ups[10] * 2) > _this.flyby &&
    _this.player.d._currentframe < 3
  ) {
    _this.flyby++;
    _this.trg = this.create(_this.player.xp, _this.player.yp, 0, 0, 0, 0, 3);
    _this.trg.fly = true;
    _this.trg.hpo = 2 + _this.ups[9] * 5;
  }
  if (
    Math.min(1, _this.ups[57]) > _this.flyby2 &&
    _this.player.d._currentframe < 3
  ) {
    _this.flyby2++;
    _this.trg = this.create(_this.player.xp, _this.player.yp, 0, 0, 0, 0, 3);
    _this.trg.fly = true;
    _this.trg.alt = true;
  }
  if (
    Math.min(1, _this.ups[128]) > _this.flyby3 &&
    _this.player.d._currentframe < 3
  ) {
    _this.flyby3++;
    _this.trg = this.create(_this.player.xp, _this.player.yp, 0, 0, 0, 0, 3);
    _this.trg.fly = true;
    _this.trg.alt = 2;
  }
  if (_this.ups[88] && !_this.magsss && _this.player.d._currentframe < 3) {
    _this.magsss = true;
    _this.trg = this.create(
      _this.player.xp,
      _this.player.yp - 10,
      0,
      0,
      0,
      0,
      3
    );
    _this.trg.maga = true;
  }
  if (_this.bluf > 0) {
    if (_this.player.d._currentframe < 3) {
      _this.bluf--;
      _this.trg2 = this.create(
        _this.player.xp,
        _this.player.yp - 10,
        0,
        0,
        0,
        0,
        3
      );
      _this.trg2.bluf = true;
      _this.trg2.fly = true;
      if (_this.blufer != undefined) {
        _this.trg2.trg2 = _this.blufer;
        _this.trg2.xbew += crand(10);
        _this.trg2.ybew += crand(10);
      }
    }
  } else {
    _this.bluf = 0;
  }
  _this.ablufer = _this.blufer;
  _this.blufer = undefined;
  _this.gibb += _this.ball.length * 0.1 - 0.4;
  _this.gibb *= 0.9;
  for (let e in _this.door) {
    _this.trg = _this.door[e];
    if (
      (_this.trg._visible || _this.trg.govo) &&
      _this.levz[_this.trg.blo] == 0 &&
      (_this.justnow < 10 || _this.trg.hide || _this.trg.hide2)
    ) {
      _this.trg.blown = true;
      _this.trg._visible = true;
      if (_this.trg.hide || _this.trg.hide2) {
        if (_this.trg.hide2) {
          hider2();
        } else {
          hider();
        }
        _this.trg.gotoAndStop(17);
        mapd();
      } else if (!_this.keyo) {
        if (_this.mom.length > 4 || _root.lev == _root.minb) {
          _this.levz[_this.trg.blo] = 1;
          _this.trg.blown = false;
        } else {
          _this.trg.gotoAndStop(5);
        }
      }
    }
    if (_this.trg.blown && _this.levz[_this.trg.blo] < 1) {
      _this.levz[_this.trg.blo] = 0.9;
    }
  }
  if (_this.ups[75] && random(150) == 0) {
    piller();
  }
  _this.f1 = _root.it;
  if (_this.f1 < 1) {
    _this.f1 = "empty";
    _root.itc = 1;
    _root.hud.it.gotoAndStop(7);
    _root.hud.it.d.gotoAndStop(20);
  }
  _this.f10 = [3, 4, 2, 1, 3, 2, 1];
  if (_root.hardmode) {
    _this.f11 = 16;
  } else {
    _this.f11 = 12;
  }
  if (_root.skiner == 4) {
    _this.f11 = 0;
  }
  _this.player.mhp =
    _this.f10[_root.skiner] +
    _this.ups[22] +
    _this.ups[23] +
    _this.ups[121] +
    _this.ups[24] +
    _this.ups[25] +
    _this.ups[26] +
    _this.ups[12] +
    _this.ups[101] +
    _this.ups[15] +
    _this.ups[92] +
    _this.ups[119] +
    _this.ups[16] * 2 +
    _this.ups[129] * 2 +
    _this.ups[176] +
    _this.ups[184] +
    _this.ups[193] +
    _this.ups[189] +
    _this.ups[138];
  if (_this.player.mhp > _this.f11) {
    if (_this.ups[22] == _root.ups[22]) {
      _root.ups[22]--;
      _this.ups[22] = _root.ups[22];
      _root.armor = _root.armor + 1;
    }
    _this.player.mhp = _this.f11;
  }
  if (_this.player.mhp >= 7) {
    _root.locker[1] = true;
  }
  if (_this.player.hp > _this.mhpp) {
    if (_this.fra > 10) {
      if (_this.player.hp - _this.mhpp > 0.55) {
        _this.red = 7;
      } else {
        _this.red = 4;
      }
    }
  }
  _this.mhpp = _this.player.hp;
  if (_root.armor > _this.ahpp) {
    if (_this.fra > 10) {
      _this.blue = 7;
    }
  }
  if (_this.player.hp > 0) {
    _this.player.hp = Math.max(
      0.5,
      Math.min(_this.player.mhp, _this.player.hp)
    );
  }
  if (_root.itc >= 0.9) {
    _root.itc = 1;
    if (_root.hud.it._currentframe <= 14) {
      _root.hud.it.nextFrame();
    } else if (_this.itb-- < 0) {
      _root.hud.it.gotoAndStop(15);
    }
  } else if (_this.itb-- > 0) {
    _root.hud.it.gotoAndStop(16);
  } else {
    _this.hudder = _root.hud.it._currentframe;
    _root.hud.it.gotoAndStop(Math.round(_root.itc * 6 - 0.5) + 1);
  }
  if ((_root.hud.extra2._visible = _root.trix != undefined)) {
    _root.hud.extra2.d.gotoAndStop(11);
    _root.hud.extra2.d.p.gotoAndStop(_root.trix);
    _root.hud.tex2 = _root.trixer;
    _this.f11 = _root.hud.tex2.split("");
    _root.hud.black._xscale = _this.f11.length * 7 + 20;
    _root.hud.extra2.d._alpha = 100;
    if (_root.hud.plix._currentframe > 2) {
      _root.hud.plix.gotoAndStop(1);
    }
  } else {
    if (_root.hud.plix._currentframe < 3) {
      _root.hud.plix.gotoAndStop(4);
    }
    _root.hud.extra2.d._alpha = 0;
    _root.hud.tex2 = "";
    _root.hud.black._xscale = 0.1;
  }
  if ((_root.hud.extra3._visible = _root.atrix != undefined)) {
    _root.hud.extra3.d.gotoAndStop(11);
    _root.hud.extra3.d.p.gotoAndStop(_root.atrix);
    _root.hud.tex3 = _root.atrixer;
    _this.f11 = _root.hud.tex3.split("");
    _root.hud.black2._xscale = _this.f11.length * 7 + 20;
    _root.hud.extra3.d._alpha = 100;
    if (_root.hud.plix2._currentframe > 2) {
      _root.hud.plix2.gotoAndStop(1);
    }
  } else {
    if (_root.hud.plix2._currentframe < 3) {
      _root.hud.plix2.gotoAndStop(4);
    }
    _root.hud.extra3.d._alpha = 0;
    _root.hud.tex3 = "";
    _root.hud.black2._xscale = 0.1;
  }
  if ((_root.hud.extra._visible = _root.pilc != undefined)) {
    _this.f1 = _root.it;
    _root.hud.extra.d.gotoAndStop(11);
    _root.hud.extra.d.p.gotoAndStop(pic(_root.pilc));
    if (_root.pilc > 6) {
      _root.hud.pilll.tex = tart(_root.pilc, true);
    } else {
      let f10 = !_this.ups[46] && !_this.ups[75];
      _this.f11 = Math.round(_root.piller[_root.pilc]);
      if (_this.f11 != _root.piller[_root.pilc]) {
        _this.f2 = true;
      } else {
        _this.f2 = false;
      }
      if (!f10) {
        _this.f2 = true;
      }
      if (!_root.piller[_root.pilc]) {
        _this.f11 = "???";
      } else {
        switch (Math.round(_this.f11)) {
          case 14:
            if (_this.f2) {
              _this.f11 = "Luck Up";
            } else {
              _this.f11 = "Luck Down";
            }
            break;
          case 13:
            _this.f11 = "Friends till the end!";
            break;
          case 6:
            if (_this.player.hp + _root.armor > 1) {
              _this.f11 = "Bad Trip!";
              break;
            }
          case 1:
            if (_root.hardmode) {
              _this.f11 = "Full Health?";
            } else {
              _this.f11 = "Full Health";
            }
            break;
          case 2:
            _this.f11 = "I found Pills";
            break;
          case 3:
            _this.f11 = "Explosive Diarrhea!";
            break;
          case 4:
            _this.f11 = "Balls of Steel";
            break;
          case 5:
            _this.f11 = "Pretty Fly";
            break;
          case 7:
            if (_root.skiner != 4) {
              _this.f13 = _this.player.mhp;
            } else {
              _this.f13 = _root.armor;
            }
            if (_this.f13 <= 1 || _this.f2) {
              _this.f11 = "Health Up";
            } else {
              _this.f11 = "Health Down";
            }
            break;
          case 8:
            _this.f11 = "Bombs are Key";
            break;
          case 9:
            if (_this.f2) {
              _this.f11 = "Tears Up";
            } else {
              _this.f11 = "Tears Down";
            }
            break;
          case 10:
            if (_this.f2 || (_this.ups[6] && _root.chaps < 8)) {
              _this.f11 = "Range Up";
            } else {
              _this.f11 = "Range Down";
            }
            break;
          case 11:
            if (_this.f2) {
              _this.f11 = "Speed Up";
            } else {
              _this.f11 = "Speed Down";
            }
            break;
          case 17:
            if (_this.f2) {
              _this.f11 = "Shot Speed Up";
            } else {
              _this.f11 = "Shot Speed Down";
            }
            break;
          case 12:
            _this.f11 = "Bad Gas";
            break;
          case 126:
            _this.f11 = "TelePills";
        }
      }
      _root.hud.pilll.tex = _this.f11;
    }
    _this.f11 = _root.hud.pilll.tex.split("");
    _root.hud.pilll.black._xscale = _this.f11.length * 7 + 20;
    _root.hud.extra.d._alpha = 100;
    if (_root.hud.pilll._currentframe > 2) {
      _root.hud.pilll.gotoAndStop(1);
    }
  } else {
    if (_root.hud.pilll._currentframe < 3) {
      _root.hud.pilll.gotoAndStop(4);
    }
    _root.hud.it.d._alpha = 100;
  }
  if (_root.kep) {
    _root.hud.kep.gotoAndStop(2);
  } else {
    _root.hud.kep.gotoAndStop(1);
  }
  if (_this.f1 > 0 || _this.f1 == "empty") {
    _root.hud.it.d.gotoAndStop(_this.f1);
  }
  _root.keys = Math.min(99, _root.keys);
  _root.coins = Math.min(99, _root.coins);
  _root.bombs = Math.min(99, _root.bombs);
  if (_root.coins >= 55) {
    _root.locker[2] = true;
  }
  _root.hud.coins = _root.coins;
  _root.hud.bombs = _root.bombs;
  _root.hud.keys = _root.keys;
  _this.f1 = 1;
  if (_this.ups[11]) {
    _this.f1++;
  }
  if (_this.ups[81]) {
    _this.f1 += _this.ups[81];
  }
  if (_this.f1 > 1) {
    _root.hud.ups = "x" + _this.f1;
  } else {
    _root.hud.ups = "";
  }
  _root.hud.chaps = _this.levn[_root.chaps];
  if (_root.altchap) {
    _root.hud.chaps = _this.levn2[_root.chaps];
  }
  if (_root.double) {
    _root.hud.chaps = _root.hud.chaps.split(" 2").join("");
    _root.hud.chaps += " XL";
  }
  _this.f11 = _root.hud.chaps.split("");
  _root.hud.boxx._xscale = _this.f11.length * 8.6 + 15.3;
  if (_root.hud.keys < 10) {
    _root.hud.keys = "0" + _root.hud.keys;
  }
  if (_root.hud.bombs < 10) {
    _root.hud.bombs = "0" + _root.hud.bombs;
  }
  if (_root.hud.coins < 10) {
    _root.hud.coins = "0" + _root.hud.coins;
  }
  _root.mhp = _this.player.mhp;
  _root.hp = _this.player.hp;
  if (_this.fra % 7 == 0) {
    if (_this.blackout == 2) {
      _this.bloc = new flash.geom.ColorTransform();
      _this.bloc.redMultiplier = 0;
      _this.bloc.greenMultiplier = 0;
      _this.bloc.blueMultiplier = 0;
    } else if (_this.blackout) {
      _this.bloc = new flash.geom.ColorTransform();
      _this.bloc.redMultiplier = 0.15 + Math.random() * 0.15;
      _this.bloc.greenMultiplier = 0.15 + Math.random() * 0.15;
      _this.bloc.blueMultiplier = 0.15 + Math.random() * 0.15;
    } else {
      _this.bloc = new flash.geom.ColorTransform();
      _this.bloc.redMultiplier = 0.85 + Math.random() * 0.15;
      _this.bloc.greenMultiplier = 0.85 + Math.random() * 0.15;
      _this.bloc.blueMultiplier = 0.85 + Math.random() * 0.15;
    }
  }
  _this.trg = _root.hud.lif;
  _this.f1 = _root.armor;
  _this.f2 = _this.red-- > 0;
  _this.f3 = _this.blue-- > 0;
  _this.ahpp = _root.armor;
  if (_root.eta) {
    _this.f1++;
    _this.ahpp++;
    _this.f4 = true;
  } else {
    _this.f4 = false;
  }
  _this.f0 = _this.player.mhp + _this.f1;
  if (_this.f0 < 12.5) {
    _this.f0 = 12;
    _this.trg.gotoAndStop(1);
  } else if (_this.f0 < 24.5) {
    _this.f0 = 24;
    _this.trg.gotoAndStop(2);
  } else {
    _this.f0 = 48;
    _this.trg.gotoAndStop(3);
  }
  let e = 0;
  while (e < _this.f0) {
    _this.trg2 = _this.trg["h" + e];
    if (e > 2) {
      _this.trg2.cacheAsBitmap = true;
    }
    if (e >= _this.player.mhp) {
      if (_this.f1-- > 0) {
        _this.trg2._visible = true;
        if (_this.f4) {
          _this.f4 = false;
          _this.trg2.gotoAndStop(8);
        } else if (_this.f1 > -0.5) {
          _this.trg2.gotoAndStop(5);
        } else {
          _this.trg2.gotoAndStop(6);
        }
        if (_this.f3) {
          colorit(_this.trg2, 1.6, 1.6, 2, 20, 20, 60);
        } else {
          colorit(_this.trg2, 1, 1, 1, 0, 0, 0);
        }
      } else {
        _this.trg2._visible = false;
      }
    } else {
      _this.trg2._visible = true;
      _this.trg2.gotoAndStop(
        Math.max(1, Math.min(3, (e - _this.player.hp) * 2 + 3))
      );
      if (_this.f2 && _this.trg2._currentframe != 3) {
        colorit(_this.trg2, 2, 1.6, 1.6, 100, 0, 0);
      } else {
        colorit(_this.trg2, 1, 1, 1, 0, 0, 0);
      }
    }
    e++;
  }
  _this.trg2 = _this.trg.h0;
  if (!_this.f2) {
    if (_this.player.hp < 1 && _this.player.mhp >= 1) {
      if (_this.fra % 10 == 0) {
        if (_this.fra % 20 == 0) {
          colorit(_this.trg2, 2, 1.6, 1.6, 100, 0, 0);
        } else {
          colorit(_this.trg2, 1, 1, 1, 0, 0, 0);
        }
      }
    } else {
      colorit(_this.trg2, 1, 1, 1, 0, 0, 0);
    }
  }
  if (enfget(_this._X, _this._Y) < 2) {
    _root.olda._visible = false;
    _this._Y = _this._loc0_ = 0;
    _this._X = _this._loc0_;
  } else if (_root.door != undefined) {
    let v1 = 0.5 + Math.min(enfget(_this._X, _this._Y) * 0.004, 0.22);
    _this._X = _this._X * v1;
    _this._Y = _this._Y * v1;
    _root.olda._x = _this._X - _this.olfx;
    _root.olda._y = _this._Y - _this.olfy;
    _root.olda._visible = true;
  }
  _this.f1 = 40;
  if (_this.olfy > 0) {
    _root.olda._y += _this.f1;
  } else if (_this.olfy < 0) {
    _root.olda._y -= _this.f1;
  }
  if (Key.isDown(82)) {
    if (_this.resee++ > 30) {
      _root.fade = true;
      this.newstart(true);
    }
  } else {
    _this.resee = 0;
  }
  if (!Key.isDown(78)) {
  }
  if (Key.isDown(79)) {
    _this.unpause = false;
    _root.hud.paus.gotoAndStop(5);
  }
  if (!Key.isDown(73)) {
  }
  _this.nogridyet = true;
  if (!_this.sadfa) {
    _this.sadfa = true;
    if (_root.lev == 80) {
      _this.boss.swapDepths(1002088);
      for (let e in _this.levz) {
        outgrid(e);
        if (_this.xenf > 440) {
          _this.levz[e] = 1;
        }
      }
    }
    golev();
    _root.black.prevFrame();
    mapd();
  } else {
    _root.fullhp = _this.player.hp + _root.armor >= _this.player.mhp;
    if (_this.chama) {
      _this.f1 =
        ((_root.chama ||
          (((_root.fullhp && !_root.altch) ||
            (_root.altch && _this.player.hp < 1.5) ||
            _root.altch == 2 ||
            _root.lev == _root.chamb) &&
            _this.chama == 1)) &&
          _this.shutdoor == 0) ||
        _this.keyd;
      for (let e in _this.door) {
        _this.trg = _this.door[e];
        if (_this.trg.chamb) {
          if (!_this.f1) {
            let v1 = _this.trg.blo;
            _this.levz[v1] = 2;
            _this.clevc[v1] = 2;
            _this.trg.gotoAndStop(26);
          } else {
            let v1 = _this.trg.blo;
            _this.levz[v1] = 0;
            _this.clevc[v1] = 0;
            if (
              _this.trg._currentframe != 27 &&
              _this.trg._currentframe != 25
            ) {
              _this.trg.gotoAndStop(25);
            }
          }
        }
      }
      if (_this.chama > 1 && !_root.chama) {
        if (!_root.amusic) {
          _root.amusic = true;
          _root.fade = true;
          _root.mmus.dones = true;
        }
        if (_this.shutdoor == 0) {
          if (_this.chamb == 3) {
            if (_root.altch == 2) {
              if (!_this.souldrop) {
                _this.souldrop = true;
                _this.f1 = 40;
                _this.trg2 = spaw(
                  _this.player.xp + _this.f1,
                  _this.player.yp,
                  0,
                  5.01
                );
                _this.trg3 = spaw(
                  _this.player.xp - _this.f1,
                  _this.player.yp,
                  0,
                  5.01
                );
                _this.trg2.col = 3;
                if (_root.chaps > 4) {
                  _this.trg2 = spaw(_this.player.xp, _this.player.yp, 40, 5.01);
                  _this.trg2.col = 1;
                }
              }
            }
          }
          if (_this.chamb++ > 50) {
            _this.mhelps = 0;
            _this.f1 = _root.switchero;
            if (_root.chaps % 2 == 1) {
              _this.f1 = !_this.f1;
            }
            if (_root.altch) {
              if (_root.altch == 2) {
                _this.hitc = 0;
                _this.bossheart = false;
                _this.allets = true;
                if (_root.chaps < 3) {
                  if (_this.f1) {
                    _this.f0 = [62.1, 1, 63, 1, 38.3, 2];
                  } else {
                    _this.f0 = [20, 1, 79, 1, 16.3, 3];
                  }
                } else if (_root.chaps < 5) {
                  if (
                    (random(3) == 0 && _this.chama == 1 && _root.noff != -1) ||
                    _root.noff == _root.chaps
                  ) {
                    _root.noff = _root.chaps;
                    _this.f0 = [71, 1, 49, 2];
                  } else if (_this.f1) {
                    _this.f0 = [23, 4, 68, 1, 26, 3];
                    _root.noff = -1;
                  } else {
                    _this.f0 = [31, 5, 64, 1, 27, 3];
                    _root.noff = -1;
                  }
                } else if (_root.chaps < 7) {
                  if (
                    (_root.chaps == 6 && random(3) != 0 && _root.noff2 != -1) ||
                    _root.noff2 == _root.chaps
                  ) {
                    _root.noff2 = _root.chaps;
                    _this.f0 = [58, 2, 49, 1, 98, 2];
                  } else if (_this.f1) {
                    _this.f0 = [65, 1, 39, 5];
                    _root.noff2 = -1;
                  } else {
                    _this.f0 = [69, 1, 43, 1];
                    _root.noff2 = -1;
                  }
                } else if (
                  (_root.chaps == 8 && random(3) != 0 && _root.noff3 != -1) ||
                  _root.noff3 == _root.chaps
                ) {
                  _root.noff3 = _root.chaps;
                  _this.f0 = [48.1, 1, 99.1, 1, 38, 7];
                } else if (_this.f1) {
                  _this.f0 = [19, 3, 68.1, 1, 40, 3];
                  _root.noff3 = -1;
                } else {
                  _this.f0 = [57, 1, 51, 2, 41, 4];
                  _root.noff3 = -1;
                }
              } else if (_root.chaps < 5) {
                _this.f0 = [20, 1, 19, 3];
              } else if (_root.chaps < 7) {
                _this.f0 = [28, 4, 68, 1];
              } else {
                _this.f0 = [69, 1, 43, 1];
              }
            } else if (_root.chaps < 3) {
              if (_this.f1) {
                _this.f0 = [18, 5, 14, 5, 10, 4];
              } else {
                _this.f0 = [29, 3, 12, 3, 15, 2];
              }
            } else if (_root.chaps < 5) {
              if (_this.f1) {
                _this.f0 = [23, 5, 24, 4, 26, 4];
              } else {
                _this.f0 = [31, 5, 22, 3, 27, 3];
              }
            } else if (_root.chaps < 7) {
              if (_this.f1) {
                _this.f0 = [38, 4, 29, 5, 41, 4];
              } else {
                _this.f0 = [39, 3, 34, 4, 24.4, 4];
              }
            } else if (_this.f1) {
              _this.f0 = [19, 3, 28, 4, 20, 2];
            } else {
              _this.f0 = [71, 1, 69, 1, 28, 1];
            }
            _this.f1 = _this.f0[(_this.chama - 2) * 2];
            _this.f2 = _this.f0[(_this.chama - 2) * 2 + 1];
            let f3 = 0;
            let f6 = (3.141592653589793 / _this.f2) * 2;
            e = 0;
            while (e < _this.f2) {
              _this.f4 = Math.sin(f3) * 200 + 320;
              let f5 = Math.cos(f3) * 180 + 250;
              if (
                enfcheck(_this.f4, f5, _this.player.xp, _this.player.yp, 100)
              ) {
                f3 += f6 / 12;
                e--;
              } else {
                f3 += f6;
                _root.soundy("summonsound.wav", 150);
                if (_this.f1 == 62.1) {
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                  spaw(_this.f4, f5, 0, _this.f1);
                } else if (_this.f1 == 19 || _this.f1 == 28) {
                  _this.trg = spaw(_this.f4 + 10, f5, 0, _this.f1);
                  _this.trg2 = spaw(_this.f4, f5, 0, _this.f1);
                  if (_this.f1 == 28 || _root.altch) {
                    _this.trg3 = spaw(_this.f4 - 10, f5, 0, _this.f1);
                  }
                  _this.trg.xp = _this.trg2.xp + 20;
                  _this.trg3.xp = _this.trg2.xp - 20;
                  _this.trg.yp = _this.trg2.yp;
                  _this.trg3.yp = _this.trg2.yp;
                  if (_this.f1 == 28 && _this.f2 > 2) {
                    _this.f1 = 23;
                  }
                } else {
                  spaw(_this.f4, f5, 0, _this.f1);
                }
              }
              e++;
            }
            _this.chama++;
            if (_this.chama > 4) {
              _this.justnow = 7;
              _root._this.chama = true;
            }
            _this.chamb = 10;
          }
        }
      }
    }
    if (((_this.keyd && !_this.keyo) || _this.shutdoor == 0) && _this.unpause) {
      if (_this.shutdoor == 0) {
        _this.justnow++;
      }
      if (_this.justnow == 10 || (_this.keyd && !_this.keyo)) {
        _this.keyo = true;
        if (_this.fra > 20) {
          _root.soundy("Door_Heavy_Open.mp");
        }
        for (let e in _this.door) {
          _this.trg = _this.door[e];
          _this.nohit = false;
          if (!_this.trg.blown) {
            if (_this.trg.cus) {
              _this.trg.gotoAndStop(37);
            } else if (_this.trg.hide || _this.trg.hide2) {
              _this.nohit = true;
            } else if (_this.trg.boner2) {
              if (_root.bona2) {
                _this.trg.gotoAndStop(33);
              } else {
                _this.nohit = true;
              }
            } else if (_this.trg.boner) {
              if (_root.bona) {
                _this.trg.gotoAndStop(33);
              } else {
                _this.nohit = true;
              }
            } else if (_this.trg.shop || _this.trg.lib) {
              if (
                (_root.shopa && _this.trg.shop) ||
                (_root.liba && _this.trg.lib)
              ) {
                _this.trg.gotoAndStop(1);
              } else {
                _this.nohit = true;
              }
            } else if (_this.trg.gamb) {
              if (_root.gama) {
                _this.trg.gotoAndStop(21);
              } else {
                _this.nohit = true;
              }
            } else if (_this.trg.chamb) {
              if (_this.fra < 15) {
                _this.trg.gotoAndStop(27);
              }
            } else if (_this.trg.sat) {
              if (_this.satan) {
                if (_root.altsat) {
                  _this.trg.gotoAndStop(41);
                } else {
                  _this.trg.gotoAndStop(19);
                }
              } else {
                _this.f1 = Math.min(0.3, _this.ups[51] * 0.2) + 0.01;
                if (_root.it == 2) {
                  _this.f1 += 0.25;
                }
                if (_root.it == 38) {
                  _this.f1 += 0.35;
                }
                if (_root.bumkill) {
                  _this.f1 += 0.35;
                }
                if (_this.bossdmg) {
                  _this.f1 += 0.35;
                }
                if (_root.devil) {
                  _this.f1 += 0.99;
                }
                if (_root.lastdev! + 3 > _root.chaps) {
                  _this.f1 *= 0.5;
                }
                if (_root.lastdev! + 2 > _root.chaps) {
                  _this.f1 *= 0.5;
                }
                if (
                  (Math.random() < _this.f1 || _this.satan) &&
                  _root.devil != 3 &&
                  _root.chaps != 1 &&
                  _root.chaps < 9
                ) {
                  _root.devil = 2;
                  _root.lastdev = _root.chaps;
                  if (_root.demonz == 0) {
                    _root.demonz = 1;
                  }
                  if (_root.altsat) {
                    if (_this.fra < 30) {
                      _this.trg.gotoAndStop(41);
                    } else {
                      _this.trg.gotoAndStop(40);
                    }
                    _root.mmus = _root.soundy("isaacxpholyroomreveal.mp3", 100);
                  } else if (_this.fra < 30) {
                    _this.trg.gotoAndStop(19);
                  } else {
                    _this.trg.gotoAndStop(18);
                  }
                } else {
                  _root.devil = 3;
                  _this.nohit = true;
                }
              }
            } else if (_this.trg.boss) {
              if (_this.fra < 30) {
                _this.trg.gotoAndStop(13);
              } else {
                _this.trg.gotoAndStop(15);
              }
            } else {
              _this.trg.gotoAndStop(3);
              if (_this.fra < 30) {
                _this.trg.p.gotoAndStop(_this.trg.p._totalframes);
              }
            }
            if (_this.trg._visible && !_this.nohit) {
              let v1 = _this.trg.blo;
              _this.levz[v1] = 0;
              _this.clevc[v1] = 0;
              if (_this.trg.cus) {
                _this.levz[v1] = 0.99;
              }
            }
          }
        }
        if (_this.fra > 7 && _this.shutdoor == 0) {
          if (_root.hardmode) {
            _root.eterns += Math.max(
              0.1,
              0.2 - _root.luck * 0.01 + _root.chaps * 0.02
            );
            _root.eterns *= 0.999;
          }
          if (
            _this.ups[94] ||
            _this.ups[96] ||
            _this.ups[98] ||
            _this.ups[131]
          ) {
            _this.f1 =
              _this.ups[94] +
              (_this.ups[96] + _this.ups[98] * 2 + _this.ups[131]) * 1.1;
            _root.monbb += 0.5 / _this.f1;
          }
          _this.f1 = _this.itc[_root.it!];
          if (_root.itc < 1) {
            _root.itc += 1 / _this.f1;
            _this.itb = 5;
            if (_root.itc < 1) {
              _root.soundy("beep.wav");
            } else {
              _root.soundy("itemrecharge.wav");
            }
          }
          if (_root.bossl == _root.lev || _root.bossl2 == _root.lev) {
            bosssp();
            _this.killa = true;
            if (_root.lev == _root.bossl2 && _root.double) {
              _root.bosss = _root.bosss2;
            }
          } else {
            if (_root.amusic && !_this.cock) {
              _this.cock = true;
              _root.musc.done = true;
              _root.bossmusic = true;
            }
            _this.f1 = Math.random();
            if (_this.ups[46]) {
              _this.f1 = _this.f1 * 0.9 + 0.1;
            }
            if (_root.luck > 0) {
              _this.f1 = _this.f1 * 0.9 + 0.1;
            }
            if (_root.luck < 0) {
              _this.f1 += _root.luck * 0.1;
            }
            _this.f2 = 0;
            trixies(false);
            if (trixx(42)) {
              if (_this.ups[46] && _root.luck > 0) {
                _this.f1 = _this.f1 * 0.98 + 0.02;
              } else {
                _this.f1 = _this.f1 * 0.9 + 0.1;
              }
            }
            if (_this.ups[134]) {
              if (random(3) == 0) {
                _this.f1 = 1;
                _this.f2 = 5.05 + random(2) * 0.01;
              } else if (random(3) == 0) {
                _this.f1 = 0;
              }
            }
            if (trixx(46)) {
              if (random(10) == 0) {
                if (_this.player.mhp > 0) {
                  _this.player.hp += 0.5;
                  parc(
                    "hearter",
                    _this.player.xp,
                    _this.player.yp - 20,
                    0,
                    100,
                    _this.player.dpppp + 5000
                  );
                  _root.soundy("Vamp_Gulp.mp");
                }
              }
            }
            if (_root.hardmode) {
              if (random(Math.max(1, 6 + _root.luck)) == 0) {
                _this.f1 = 0;
              }
              if (
                random(Math.max(1, 6 - _root.luck)) == 0 &&
                _this.player.mhp > 0
              ) {
                _this.f1 = 0.59;
              }
            }
            if (_this.f1 > 0.22) {
              if (_this.f1 < 0.3) {
                if (random(3) == 0) {
                  _this.f0 = 5.3;
                } else if (random(2) == 0) {
                  _this.f0 = 5.35;
                } else {
                  _this.f0 = 5.07;
                }
              } else if (_this.f1 < 0.45 + _root.chaps * 0.03 * _root.luck) {
                _this.f0 = 5.02;
              } else if (
                _this.f1 < 0.58 ||
                (random(30 - _root.luck * 2) == 0 &&
                  _this.player.hp < _this.player.mhp - 1)
              ) {
                _this.f0 = 5.01;
                if (
                  (_root.luck > 0 && random(30 - _root.luck * 2) == 0) ||
                  (_this.player.mhp < 1 &&
                    random(Math.max(20, 40 - _root.luck * 5)) == 0 &&
                    _root.hardmode)
                ) {
                  _this.f0 = 5.010000003;
                }
              } else if (
                _this.f1 <
                0.76 -
                  _root.chaps * 0.007 +
                  _root.luck * 0.02 -
                  Math.min(10, _root.keys) * 0.01
              ) {
                _this.f0 = 5.03;
              } else if (_this.f1 < 0.95) {
                _this.f0 = 5.04;
              } else {
                _this.f0 = 5.05;
              }
              if (_this.f2 > 0) {
                _this.f0 = _this.f2;
              }
              spaw(320, 280, 0, _this.f0);
            }
          }
        }
      }
      _this.openss = true;
    } else if (!_this.openss) {
      _this.justnow = 0;
    }
  }
  for (let e in _this.drawer) {
    _this.drawer[e].clear();
  }
  if (!Key.isDown(80) && !Key.isDown(27)) {
    _this.unspace = true;
  }
  if (_root.unl._currentframe != 1 || _root.over._currentframe != 1) {
    _this.unlo = true;
    _this.unpause = false;
  }
  _this.flyshut = 0;
  if (Key.isDown(32) && !_this.apau) {
    _this.nospo = 15;
  }
  _this.apau = _this.unpause;
  if (!_this.unpause) {
    if (_this.unlo) {
      _this.unpause = true;
      _this.unlo = false;
      if (
        (_this.player.d._currentframe != 4 ||
          _this.player.d.d.d._currentframe > 9) &&
        (_this.player.d._currentframe != 11 ||
          _this.player.d.d.d._currentframe > 9)
      ) {
        scerf();
      }
    } else if (_this.gameover == 0 && _root.hud.paus._currentframe == 1) {
      _root.hud.paus.gotoAndStop(2);
      scerf();
    }
    if (Key.isDown(80) && _this.unspace) {
      _this.unpause = true;
      _this.unspace = false;
    }
    _root.hud.paus.st0.gotoAndStop(
      Math.min(1 + Math.max(1, Math.round((_root.playsp - 0.8) * 4)), 8)
    );
    _root.hud.paus.st1.gotoAndStop(
      Math.min(Math.max(1, Math.round(12 - _root.firra)), 8)
    );
    _root.hud.paus.st2.gotoAndStop(
      Math.max(1, Math.min(1 + Math.round((_root.firrb - 2.4) * 1.1), 8))
    );
    _root.hud.paus.st3.gotoAndStop(
      Math.max(1, Math.min(1 + Math.round((_root.firrr - 20) / 4), 8))
    );
  } else {
    if (_this.bgg2 != undefined) {
      _this.bgg2 = undefined;
      _this.bggg2.swapDepths(100);
      removeMovieClip(_this.bggg2);
    }
    topz(0);
    _this.freez--;
    _this.slow--;
    _this.sloww--;
    _this.scare--;
    _this.playsave--;
    _this.unic--;
    if (_this.unic < -1) {
      _this.pacman = false;
    }
    if (_root.it == 124 || (_root.it == 71 && _this.fra2)) {
      if (_this.nofun) {
        _this.nofun = false;
      } else {
        _root.itc += 0.01;
      }
    }
    if (
      _this.ups[63] &&
      _this.shutdoor != 0 &&
      _root.itc - 0.5 < _this.tictic &&
      _root.itc < 1 &&
      _root.lev != _root.gamb
    ) {
      _this.tictic = Math.min(_root.itc, _this.tictic);
      _root.itc += 0.0005;
      if (
        _this.hudder != _root.hud.it._currentframe &&
        _root.hud.it._currentframe < 15
      ) {
        if (_root.itc < 1) {
        }
        _root.soundy("batterycharge.mp");
        parc(
          "batter",
          _this.player.xp,
          _this.player.yp - 20,
          0,
          100,
          _this.player.dpppp + 5000
        );
      }
    }
    _root.hud.paus.gotoAndStop(1);
    _this.fra++;
    if (_this.etogo) {
      _this.etogo--;
      if (_this.etogo < 1) {
        _root.over.gotoAndStop(16);
        _this.etogo = undefined;
      }
    }
    _this.fra2 = _this.fra % 2 == 0;
    _this.fra3 = _this.fra % 3 == 0;
    _this.fra5 = _this.fra % 5 == 0;
    _this.fra10 = _this.fra5 && _this.fra2;
    _this.lofo = false;
    _this.lastlarx = _this.lastlary = undefined;
    if (_this.fra10) {
      if (
        _root.locker[90] &&
        _root.locker[99] &&
        _root.locker[100] &&
        _root.locker[101] &&
        _root.locker[102] &&
        _root.locker[103] &&
        _root.locker[104] &&
        _root.locker[106] &&
        _root.locker[107] &&
        _root.locker[108] &&
        _root.locker[109] &&
        _root.locker[110] &&
        _root.locker[111] &&
        _root.locker[112] &&
        _root.locker[113]
      ) {
        _root.locker[105] = true;
      }
    }
    if (_this.justnow > 10) {
      for (let e in _this.door) {
        _this.trg = _this.door[e];
        if (
          (_root.kep || _root.keys > 0) &&
          enfcheck(
            _this.trg._x,
            _this.trg._y,
            _this.player.xp + _this.player.xbew * 2,
            _this.player.yp + _this.player.ybew * 2,
            40
          ) &&
          _this.keyhole == _this.trg.blo
        ) {
          if (
            _this.trg.shop ||
            _this.trg.boner2 ||
            _this.trg.boner ||
            _this.trg.lib
          ) {
            let v1 = _this.trg.blo;
            _this.levz[v1] = 0;
            _this.clevc[v1] = 0;
            if (
              _this.player.xbew * _this.player.xbew +
                _this.player.ybew * _this.player.ybew >
              1
            ) {
              if (!_root.liba && _this.trg.lib) {
                _this.trg.gotoAndStop(8);
                if (!_root.kep) {
                  _root.keys = _root.keys - 1;
                }
                _root.liba = true;
                _root.soundy("Unlock00.wav", 100);
              }
              if (!_root.shopa && _this.trg.shop) {
                _this.trg.gotoAndStop(8);
                if (!_root.kep) {
                  _root.keys = _root.keys - 1;
                }
                _root.shopa = true;
                _root.soundy("Unlock00.wav", 100);
              }
              if (!_root.bona && _this.trg.boner) {
                _this.trg.gotoAndStop(31);
                if (!_root.kep) {
                  _root.keys = _root.keys - 1;
                }
                _root.bona = true;
                _root.soundy("Unlock00.wav", 100);
              }
              if (!_root.bona2 && _this.trg.boner2) {
                _this.trg.gotoAndStop(31);
                if (!_root.kep) {
                  _root.keys = _root.keys - 1;
                }
                _root.bona2 = true;
                _root.soundy("Unlock00.wav", 100);
              }
            }
          }
        }
        if (
          _this.trg.gamb &&
          _root.coins > 0 &&
          enfcheck(
            _this.trg._x,
            _this.trg._y,
            _this.player.xp,
            _this.player.yp,
            40
          ) &&
          _this.keyhole == _this.trg.blo
        ) {
          let v1 = _this.trg.blo;
          _this.levz[v1] = 0;
          _this.clevc[v1] = 0;
          if (!_root.gama) {
            _this.trg.gotoAndStop(22);
            _root.coins = _root.coins - 1;
            _root.gama = true;
            _root.soundy("Coin_Slot.mp", 100);
          }
        }
      }
    }
    _root.p.gotoAndStop(1);
    if ((Key.isDown(27) || Key.isDown(80)) && _this.unspace) {
      _root.p.gotoAndStop(_root.pinfo);
      _this.unpause = false;
      _this.unspace = false;
    }
    topz(1);
    _this.f0 = (_this.fra % 2) + 1;
    for (let e in _this.par) {
      _this.trg = _this.par[e];
      if (_this.trg.done) {
        removeMovieClip(_this.par[e]);
        _this.par.splice(e, 1);
      } else {
        if (_this.trg.longstay) {
          if (_this.ashut > 0) {
            _this.trg.longstay--;
            _this.trg.prevFrame();
          }
        }
        if (_this.trg.perm && _this.ashut > 0) {
          _this.trg.stop();
        } else {
          _this.trg.nextFrame();
        }
      }
    }
    actions1();
    if (_this.brr.length > 0) {
      breakall();
      _this.brr = [];
      _this.brr2 = [];
    }
    topz(2);
    physix();
    tip(2);
    let v = 0.7;
    if (_this.fra % 1000 == 999) {
      _this.f1 = new Array();
      for (let e in _this.levz) {
        _this.f1[e] = _this.levz[e];
      }
      _this.levz = new Array(_this.f1.length);
      for (let e in _this.f1) {
        _this.levz[e] = _this.f1[e];
      }
    }
    let v1 = _root.tex;
    _root.tex = " ";
    e = 0;
    while (e < _this.alltimer.length) {
      _this.alltimer[e] *= 0.96;
      e++;
    }
    _this.f1 = 9112;
    if (_this.fra > 35 || _root.lev != 35) {
      _this.wtfps *= 0.9;
      _this.wtfps += Math.max(1, (1000 / (_this.f1 - _this.wtfps2)) * 0.1);
    }
    let qqua = _root.so.data.qqal == "AUTO" || _root.so.data.qqal == undefined;
    if (qqua) {
      if (_this.wtfps < 14) {
        if (_this._quality == "MEDIUM") {
          _this._quality = "LOW";
        }
      }
      if (_this.wtfps < 26) {
        if (_this._quality == "HIGH") {
          _this._quality = "MEDIUM";
        }
      }
      if (
        (_this.wtfps > 29.4 && _this._quality == "MEDIUM") ||
        (_this.wtfps > 25 && _this._quality == "LOW")
      ) {
        if (_this.wtff++ > 100) {
          _this.wtff = 0;
          if (_this._quality == "MEDIUM") {
            _this._quality = "HIGH";
          } else if (_this._quality == "LOW") {
            _this._quality = "MEDIUM";
          }
        }
      } else {
        _this.wtff = 0;
      }
    }
    _this.wtfps2 = _this.f1;
    if (_this.chestopen != undefined) {
      _this.trg = _this.chestopen;
      _this.chestopen = undefined;
      if (_this.trg != 2) {
        _this.chestox = _this.trg.xp;
        _this.chestoy = _this.trg.yp;
      }
      if (!_this.trg.empty) {
        if (_this.chama == 1 && _root.lev == _root.chamb) {
          _this.chama = 2;
        }
        _this.trg.empty = true;
        if (_this.trg.col == 31) {
          this.boil(false);
          this.boil(true);
        } else if (_this.trg.c2) {
          _this.f10 = 2;
          _this.f1 = [81, 134, 133, 145];
          if (_root.locker[79]) {
            _this.f1.push(134);
          }
          _this.f1 = _this.f1[random(_this.f1.length)];
          if (!_this.ups[_this.f1] && random(10) == 0) {
            var trg2 = this.create(
              _this.chestox,
              _this.chestoy,
              0,
              0,
              0,
              0,
              5.1
            );
            trg2.alt = true;
            trg2.fra -= 15;
            _this.trg.done = true;
            trg2.alt = 5;
            trg2.it = _this.f1;
            _this.f1 = 70;
            _this.enf = enfcheck(
              _this.chestox,
              _this.chestoy,
              _this.player.xp,
              _this.player.yp,
              _this.f1
            );
            if (_this.enf < _this.f1) {
              _this.enf = ((_this.f1 - _this.enf) / _this.enf) * 0.4;
              _this.player.xbew -= _this.xenf * _this.enf;
              _this.player.ybew -= _this.yenf * _this.enf;
            }
          } else if (random(18) == 0) {
            _this.tar = 166;
            teller();
          } else if (random(5) == 0) {
            this.boil(false);
            this.boil(true);
          } else if (random(5) == 0) {
            spaw(_this.trg.xp, _this.trg.yp, 20, 5.040000005);
          } else if (random(5) == 0) {
            _this.bluf += 3;
          } else {
            _this.f1 = [5.010000003, 5.040000003, 5.07];
            _this.f1 = _this.f1[random(_this.f1.length)];
            if (_this.f1 == 5.010000003 && random(2) == 0) {
              cspawn(_this.f1, 1);
            } else {
              cspawn(_this.f1, 2);
            }
          }
        } else {
          if (_this.trg.d._currentframe == 8 && _this.trg.col == 1) {
            _this.f10 = 1 + random(2);
          } else if (_this.trg.d._currentframe == 6) {
            _this.f10 = Math.max(2, random(8) - 1);
          } else {
            _this.f10 = Math.max(2, random(4) - 1);
          }
          _this.f2 = 0;
          if (random(3) != 0) {
            trixies(true);
            if (trixx(42) || _this.f2 > 0) {
              _this.f10++;
            }
          }
          if (_this.trg.gold) {
            if (random(3) == 0 && _root.locker[84] && !_root.shitpenny) {
              _root.shitpenny = true;
              this.create(_this.trg.xp, _this.trg.yp, 0, 0, 0, 0, 5.35);
            } else {
              cspawn(5.02, 5 + random(3));
            }
          } else {
            let z = 0;
            while (z < _this.f10 && !_this.trg.done) {
              let f12 = 1;
              _this.f1 = Math.random();
              if (_this.f2 > 0) {
                _this.f0 = _this.f2;
                _this.f2 = 0;
              } else if (
                (((_root.locker[18] && random(10) == 0 && _this.trg == 2) ||
                  (random(5) == 0 && _this.trg.d._currentframe == 6)) &&
                  z == 0 &&
                  (_this.trg != 2 || !_this.ups[90])) ||
                _root.chaps == 11
              ) {
                _this.f1 = 70;
                _this.enf = enfcheck(
                  _this.chestox,
                  _this.chestoy,
                  _this.player.xp,
                  _this.player.yp,
                  _this.f1
                );
                if (_this.enf < _this.f1) {
                  _this.enf = ((_this.f1 - _this.enf) / _this.enf) * 0.4;
                  _this.player.xbew -= _this.xenf * _this.enf;
                  _this.player.ybew -= _this.yenf * _this.enf;
                }
                _this.f0 = 5.1;
                _this.trg.done = true;
                _this.treas = true;
              } else if (random(5) == 0 && z == 0 && _this.trg != 2) {
                _this.f1 = 70;
                _this.enf = enfcheck(
                  _this.chestox,
                  _this.chestoy,
                  _this.player.xp,
                  _this.player.yp,
                  _this.f1
                );
                if (_this.enf < _this.f1) {
                  _this.enf = ((_this.f1 - _this.enf) / _this.enf) * 0.4;
                  _this.player.xbew -= _this.xenf * _this.enf;
                  _this.player.ybew -= _this.yenf * _this.enf;
                }
                if (_this.trg.d._currentframe == 6) {
                  _this.f0 = 5.3;
                } else {
                  _this.f0 = 5.07;
                }
                if (random(2) == 0) {
                  _this.f0 = 5.35;
                }
                _this.f10 = -100;
              } else if (_this.f1 < 0.35 && _this.trg != 2) {
                _this.f0 = 5.02;
                f12 = random(3) + 1;
              } else if (
                _this.f1 < 0.55 ||
                (_this.f1 < 0.6 && _this.trg == 2)
              ) {
                _this.f0 = 5;
                if (random(2) == 0) {
                  _this.f10--;
                }
              } else if (_this.f1 < 0.7) {
                _this.f0 = 5.03;
                if (_this.trg == 2) {
                  _this.f10 = -100;
                }
              } else if (_this.f1 < 0.71 && z == 0) {
                _this.f0 = 5.05;
                _this.f10 = -100;
              } else if (
                (_this.f1 < 0.72 || (_this.trg == 2 && _this.f1 < 0.9)) &&
                z == 0
              ) {
                _this.f0 = 5.06;
                _this.f10 = -100;
              } else {
                _this.f0 = 5.04;
              }
              if (_this.trg.d._currentframe == 8 && _this.trg.col == 1) {
                if (random(2) == 0) {
                  _this.f0 = 5.02;
                  f12 = random(4) + 1;
                } else {
                  _this.f0 = 5;
                }
              }
              cspawn(_this.f0, f12);
              z++;
            }
          }
        }
        _this.treas = false;
      }
    }
    tip(0);
  }
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    if (_this.trg.s == 4) {
      if (_this.trg.d._currentframe == 3 && _this.ups[140]) {
        _this.trg.dfr = true;
        _this.trg.d.gotoAndStop(5);
      }
    }
    if (_this.trg.alter) {
      _this.f1 = _this.trg.alter;
      if (_this.trg.s == 16) {
        _this.trg.d.hx.d.gotoAndStop(_this.f1);
        _this.trg.d.d.hx.d.gotoAndStop(_this.f1);
        _this.trg.d.d.d.hx.d.gotoAndStop(_this.f1);
        _this.trg.d.d.hxx.gotoAndStop(_this.f1);
        _this.trg.d.d.d.hxx.gotoAndStop(_this.f1);
      } else {
        if (_this.trg.s == 46 && _this.trg.alter == 3 && _this.trg.minb == 3) {
          _this.trg.d.he.gotoAndStop(_this.f1);
          _this.trg.d.d.he.gotoAndStop(_this.f1);
          _this.trg.d.d.d.he.gotoAndStop(_this.f1);
        }
        _this.trg.d.hx.gotoAndStop(_this.f1);
        _this.trg.d.d.hx.gotoAndStop(_this.f1);
        _this.trg.d.d.d.hx.gotoAndStop(_this.f1);
        _this.trg.d.d.d.d.hx.gotoAndStop(_this.f1);
        if (_this.trg.s == 50) {
          _this.trg.d.d.hx.h.gotoAndStop(_this.trg.f3);
        }
        if (_this.trg.s == 60) {
          if (_this.trg.d._currentframe == 5) {
            _this.trg.d.d.gotoAndStop(_this.f1);
          }
          _this.trg.d.hxx.gotoAndStop(_this.f1);
          _this.trg.d.d.hxx.gotoAndStop(_this.f1);
          _this.trg.d.d.d.hxx.gotoAndStop(_this.f1);
        }
      }
    }
  }
  if (_this.fra % 50 == 0) {
    _this.f1 = [];
    _this.f2 = [];
    let a = 0;
    while (a < _this.ball.length) {
      _this.f1[a] = _this.ball[a];
      a++;
    }
    a = 0;
    while (a < _this.par.length) {
      _this.f2[a] = _this.par[a];
      a++;
    }
    _this.ball = new Array(_this.f1.length);
    _this.par = new Array(_this.f2.length);
    a = 0;
    while (a < _this.ball.length) {
      _this.ball[a] = _this.f1[a];
      a++;
    }
    a = 0;
    while (a < _this.par.length) {
      _this.par[a] = _this.f2[a];
      a++;
    }
  }
  if (_this.wtftex) {
    _root.tex = _this.wtftex;
  }
  _this.trg = _this.player;
  if (_this.trg.d._currentframe != 1) {
    if (_this.trg.d._currentframe == 7 || _this.trg.d._currentframe == 8) {
      this.trgnextd();
    } else {
      _this.trg.d.d.gotoAndStop(_this.sk);
      if (_this.bgg2 == undefined) {
        if (trgnextd(_this.trg.d.d.d, true) && _this.trg.d._currentframe != 6) {
          _this.playfirst = true;
        }
      }
      if (
        _this.trg.d.d.d._currentframe == 32 &&
        _this.trg.d._currentframe == 6
      ) {
        _root.soundy("isaacdies.wav");
        if (_this.gameover <= 0) {
          _this.gameover = 1;
        }
      }
    }
  } else if (_this.demon > 0) {
    _this.sk = 7;
  }
  _this.trg.d.d.d.it.d.gotoAndStop(_this.trg.it);
  _this.trg.d.d.d.it.d.p.gotoAndStop(_this.player.pilc);
  _this.trg.d.d.d.it.d._xscale = _this.trg.d.d.d.it.d._yscale =
    10000 / _this.player._xscale;
  _this.trg.d.hs._visible =
    (_this.trg.d.bo._currentframe == 16 ||
      _this.trg.d.bo._currentframe == 17 ||
      _this.trg.d.bo._currentframe == 18) &&
    _this.trg.d.bo.d._currentframe != 2;
  if (_this.trg.d.hs._visible) {
    if (_this.trg.d.bo.d._currentframe == 1) {
      _this.trg.d.hs.gotoAndStop(1);
    } else {
      _this.trg.d.hs.gotoAndStop(2);
    }
    _this.trg.d.hs._xscale = _this.trg.d.bo._xscale;
  }
  if (_this.fra > 2 && _this.fra < 15) {
    _this.player._visible = true;
  }
  if (_this.plxxx > 0) {
    _this.player.fire = 1000;
    _this.player.xp = _this.plxxx;
    _this.player.yp = _this.plyyx;
    _this.player.xbew = 0;
    _this.player.ybew = 0;
  }
  for (let e in _this.ball) {
    _this.trg = _this.ball[e];
    if (_this.trg.s == 42) {
      _this.trg.xp = _this.trg.xpp;
      _this.trg.yp = _this.trg.ypp;
      _this.trg.xbew = 0;
      _this.trg.ybew = 0;
    }
  }
  _this.trg = _this.player;
  if (_this.unpause) {
    playc();
  }
  _this.dec!++;
  if (_this.dec == 15) {
    _this.decer = bomb(4);
    _this.decer.dmg += 100;
  }
  if (_this.cowss > 0) {
    _this.cowss--;
    spaw(_this.player.xp, _this.player.yp, 40, 5.02);
  }
  if (_this.kogs.length > 0) {
    spaw(_this.player.xp, _this.player.yp, 40, _this.kogs.pop());
  }
  if (_this.sloto != undefined) {
    _this.sloto!--;
    if (_this.sloto! < 0) {
      _this.f2 = 0;
      let f12 = 1;
      sloty(slotf());
      if (_this.f2 > 0) {
        if (_this.f2 < 7) {
          this.emo();
        }
        if (_this.f1 < 33) {
          _root.soundy("slotspawn" + random(3) + ".wav");
        }
        let i = 0;
        while (i < f12) {
          var trg2 = spaw(_this.player.xp, _this.player.yp, 40, _this.f2);
          i++;
        }
      }
      _this.sloto = undefined;
    }
  }
  if (_this.trg.d._currentframe == 1 || _root.bombnext) {
    _this.f2 = _this.facer;
    if (_this.trg.d._currentframe == 1) {
      _this.trg.d.d.d.gotoAndStop(_this.f2);
      if (_this.f2 == 17 || _this.f2 == 31) {
        _this.f0 = Math.round((_this.fra - _this.chaf!) / 8);
        if (_this.plox <= 8 && _this.chaf == undefined) {
          _this.f0 = 0;
          if (_this.f2 == 31) {
            _this.trg.d.d.d.gotoAndStop(33);
          } else {
            _this.trg.d.d.d.gotoAndStop(1);
          }
          _this.plo = 1;
        } else {
          _this.chaaf = Math.max(1, Math.min(6, _this.f0));
        }
      }
      let z = 0;
      while (z < 6) {
        _this.f4 = false;
        trg2 = _this.trg.d.d.d["hat" + z];
        let f3 = _root.hatmode[z];
        if (_root.colit == 86 && z == 0) {
          f3 = 18;
        }
        if (_root.ups[161] && z == 0) {
        }
        if (z == 4) {
          if (_this.ups[117]) {
            f3 = 38;
          }
          if (_this.bra && _this.freez > 0) {
            f3 = 28;
          }
        }
        if (_root.ups[152] && z == 4) {
          f3 = 45;
          _this.f4 = true;
          trg2.d.gotoAndStop(9);
        }
        if (f3 > 0 && !_this.nohat) {
          trg2.gotoAndStop(f3);
          trg2.d.stop();
          if (z != 0) {
            trg2._x = _this.trg.d.d.d.hat0._x;
            trg2._y = _this.trg.d.d.d.hat0._y;
          }
          if (trg2.d._totalframes > 4 && _this.plox > 8) {
            trg2.d.gotoAndStop(_this.plo + 4);
          } else {
            trg2.d.gotoAndStop(_this.plo);
          }
        } else {
          trg2.gotoAndStop(1);
        }
        if (_this.f4) {
          trg2 = trg2.d.l;
          if (Math.abs(_this.trg.xpp) > Math.abs(_this.trg.ypp)) {
            _this.f1 =
              (_this.lass / _this.trg.d.d._xscale / _this.trg._xscale) * 10000 +
              (trg2._x - 6) * _this.trg.xpp -
              13;
          } else {
            _this.f1 =
              (_this.lass / _this.trg.d.d._xscale / _this.trg._xscale) * 10000 +
              (trg2._y + 20) * _this.trg.ypp;
          }
          if (_this.trg.lfrr - _this.fra > -3) {
            trg2.gotoAndStop((_this.fra % 3) + 1);
            trg2._yscale = _this.f1;
            trg2 = undefined;
          } else {
            trg2._visible = false;
          }
        }
        z++;
      }
    }
  }
}
