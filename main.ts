import "@/types";
import "@/foos";
import "@/flash";
import {createEmptyMovieClip, gotoAndStop} from "@/flash";
import {
    selectBossForFloor,
    getRandomEndRoom,
    toggleHolyMantle,
    playSecretRoomSound,
    playSuperSecretRoomSound,
    drawMap,
    moveToNextArea,
    countOccupiedAdjacentTiles,
    checkAllAdjacentTiles,
    initializePlayerStats,
    addPathTile,
    updateTreasureRoomCount,
    checkItemOwned,
    updatePlayerAnimation,
    createProjectile,
} from "@/foos";

llev = [
    2, 117, 57, 186, 2, 113, 61, 173, 2, 101, 53, 152, 2, 90, 46, 135, 2, 80, 0,
    0, 6, 34,
];
llev2 = [
    2, 117, 57, 183, 2, 115, 60, 171, 2, 103, 53, 153, 2, 91, 46, 135, 2, 90, 0,
    0, 6, 34,
];
specol = [
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
specol2 = [
    0,
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
levn = [
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
levn2 = [
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
    altboss = _root.altboss2;
}
if (_root.lev == _root.bossl) {
    altboss = _root.altboss;
    if (_root.chaps == 8 || (_root.chaps == 6 && !_root.locker[3])) {
        _root.unl.gotoAndStop(1);
        _root.unl.nogo = true;
    }
}
gridx = 0;
gridy = 0;
if (_root._xscale < 110) {
    gridxs = 640;
    gridys = 480;
    hdx = 1;
} else if (_root._xscale < 135) {
    gridxs = 800;
    gridys = 620;
    hdd = true;
    hdx = 1.25;
} else {
    gridxs = 1100;
    gridys = 800;
    hdd = true;
    hdx = 1.667;
}
if (_root.nozinc) {
    hdx = 4;
    gridxs = 640 * hdx;
    gridys = 480 * hdx;
}
gridv = 100;
gridmax = 10;
tiles._visible = false;
razor = 0;
etols = 0;
rage = 1;
if (_root.chaps < 3) {
    lars = 4;
} else {
    lars = 0;
}
combis = 0;
lusts = 0;
rag = 1;
thistern = 0;
if (_root.levz.length <= 1) {
    _root.chaps = Math.max(1, _root.chaps);
    f1 = getTimer() % 100;
    e = 0;
    while (e < f1) {
        f2 = random(random(10)) * Math.random();
        e++;
    }
    _root.darky(120);
    if (_root.newstartt || _root.it == undefined) {
        _root.newstartt = false;
        initializePlayerStats();
        _root.eta = false;
    }
    _root.big = false;
    _root.darks = false;
    f1 = 80;
    if (_root.locker[4]) {
        f1 = 60;
    }
    if (_root.locker[42]) {
        f1 = 25;
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
        f1 = 15;
    }
    updateTreasureRoomCount();
    _root.altm =
        random(f1) == 0 && _root.chaps != 1 && (_root.chaps != 2 || !_root.double);
    _root.big = false;
    _root.double = false;
    _root.darks = false;
    if (_root.chaps != 11) {
        if (random(f1) == 0 && _root.chaps % 2 == 1 && _root.chaps < 8) {
            _root.double = true;
        } else {
            _root.double = false;
            if (random(f1 * 2) == 0) {
                _root.big = true;
            } else if (random(f1 * 2) == 0) {
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
        curss = "Curse of the Labyrinth";
    } else if (_root.big) {
        curss = "Curse of the Lost";
    } else if (_root.darks) {
        curss = "Curse of Darkness";
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
    f6 = Math.min(20, random(2) + 5 + _root.chaps * 2.6);
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
    _root.altsat = random(2) == 0 && _root.evs == 0 && _root.lastdev > 0;
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
    if (checkItemOwned(59) && random(4) == 0) {
        _root.ceye = ups[21] = true;
    }
    _root.altchap = 0;
    if ((random(2) == 0 && _root.chaps < 9) || _root.heaven == 2) {
        _root.altchap = 9;
    }
    fuckup = 0;
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
        f6 *= 1.8;
        f6 = Math.min(30, f6);
    } else {
        if (_root.big) {
            f6 += 4;
        }
        if (random(12) == 0) {
        }
        f6 = Math.min(30, f6);
    }
    while (
        (_root.mapsize * 1.25 < f6 ||
            _root.levz.length <= 1 ||
            _root.bossl == 45 ||
            (_root.hide == undefined && _root.chaps < 3) ||
            _root.bossl == 25 ||
            _root.bossl == 36 ||
            _root.bossl == 34) &&
        fuckup++ < 1000
        ) {
        endrooms = [];
        _root.levz = new Array(80);
        e = 0;
        while (e < 80) {
            _root.levz[e] = 0;
            e++;
        }
        acts = [];
        acts2 = [];
        addPathTile(35);
        f3 = random(4);
        f5 = 0;
        if (_root.double) {
            f6 -= 1;
        }
        v3 = 0;
        e = 0;
        while (e < 300) {
            acts2[acts2.length] = 0;
            acts = acts2.slice(0, -1);
            acts2 = [];
            if (f6 > 15) {
                addPathTile(35);
            }
            for (a in acts) {
                v1 = acts[a];
                if (v1 > 0) {
                    v3 = v1;
                }
                f8 = 0;
                f2 = 2;
                if (
                    e > 3 + random(3 - fuckup) &&
                    f5 + random(2) < f6 &&
                    fuckup > 4 + random(4)
                ) {
                    f2 = 1;
                }
                if (random(f2) == 0 && v1 % 10 < 9) {
                    addPathTile(v1 + 1);
                }
                if (random(f2) == 0 && v1 % 10 > 1) {
                    addPathTile(v1 - 1);
                }
                if (random(f2) == 0 && v1 < 70) {
                    addPathTile(v1 + 10);
                }
                if (random(f2) == 0 && v1 > 10) {
                    addPathTile(v1 - 10);
                }
                if (f8 == 0 && v1 != 35) {
                    endrooms.push(v1);
                }
            }
            if (acts2.length < 2) {
                e -= 0.5;
            }
            e++;
        }
        if (_root.double) {
            f6 += 1;
        }
        _root.lastl = _root.lev;
        _root.lastl = _root.lev = 35;
        _root.mapsize = f5;
        _root.boner = _root.shopl = _root.bossl = endrooms[endrooms.length - 1];
        endrooms.splice(endrooms.length - 1, 1);
        if (_root.double) {
            f1 = -1;
            if (countOccupiedAdjacentTiles(_root.bossl + 1) == 1 && _root.bossl % 10 < 9) {
                f1 = _root.bossl + 1;
            }
            if (countOccupiedAdjacentTiles(_root.bossl - 1) == 1 && _root.bossl % 10 > 1) {
                f1 = _root.bossl - 1;
            }
            if (countOccupiedAdjacentTiles(_root.bossl + 10) == 1 && _root.bosslv1 < 70) {
                f1 = _root.bossl + 10;
            }
            if (countOccupiedAdjacentTiles(_root.bossl - 10) == 1 && _root.bossl > 10) {
                f1 = _root.bossl - 10;
            }
            if (f1 > 0) {
                _root.bossl2 = _root.bossl;
                _root.bossl = f1;
            } else {
                _root.bossl = 34;
            }
        } else {
            _root.bossl2 = undefined;
        }
        _root.hide = undefined;
        _root.hide2 = undefined;
        _root.beenlev = [];
        _root.hide2 = getRandomEndRoom();
        if (_root.mapsize * 2 > f6 && _root.bossl != 34) {
            if (_root.double) {
                endrooms.splice(0, Math.max(0, endrooms.length - 6));
            }
            e = 0;
            while (e < 3000) {
                f1 = random(_root.levz.length);
                f2 = f1 % 10;
                if (!_root.levz[f1] && f2 < 9 && f2 > 1) {
                    f2 = countOccupiedAdjacentTiles(f1);
                    f4 = true;
                    if (f2 > 0) {
                        f3 = checkAllAdjacentTiles(f1);
                        if (!_root.double) {
                        }
                    } else {
                        f3 = false;
                    }
                    if (
                        ((f2 > 2 && f3) ||
                            ((f2 > 2 || (f2 > 1.9 && (e > 600 || f3))) && e > 300 && f4)) &&
                        _root.hide == undefined
                    ) {
                        _root.levz[f1] = "hide" + random(5);
                        _root.hide = f1;
                    } else if (
                        _root.mapsize < f6 + random(10) + _root.chaps * 2 &&
                        _root.double &&
                        f1 != _root.hide &&
                        f1 != _root.hide2
                    ) {
                        if (
                            f3 &&
                            (f2 > 1 || (f2 == 1 && random(2) == 0)) &&
                            f1 + 10 != _root.hide &&
                            f1 - 10 != _root.hide &&
                            f1 - 1 != _root.hide &&
                            f1 + 1 != _root.hide &&
                            f1 + 10 != _root.hide2 &&
                            f1 - 10 != _root.hide2 &&
                            f1 - 1 != _root.hide2 &&
                            f1 + 1 != _root.hide2
                        ) {
                            _root.levz[f1] = 0.75;
                            _root.mapsize = _root.mapsize + 1;
                        }
                    } else if (_root.hide != undefined) {
                        e += 100000;
                    }
                }
                e++;
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
            (endrooms.length >= 4 || (_root.chaps == 1 && endrooms.length >= 3)) &&
            _root.bossl != _root.lev &&
            _root.bossl > 0
        ) {
            _root.shopl = getRandomEndRoom();
            if (_root.chaps != 11) {
                if (_root.chala < 5 && (_root.chala != 2 || random(3) != 1)) {
                    _root.boner = getRandomEndRoom();
                }
                if (_root.double && _root.chala < 5) {
                    _root.boner2 = getRandomEndRoom();
                }
                if (
                    endrooms.length > 0 &&
                    (random(7) == 0 || (random(4) == 0 && _root.fullhp))
                ) {
                    _root.sac = getRandomEndRoom();
                }
                if (
                    endrooms.length > 0 &&
                    (random(20) == 0 || (_root.bookster && random(4) == 0))
                ) {
                    _root.lib = getRandomEndRoom();
                }
                if (
                    endrooms.length > 0 &&
                    (random(2) == 0 || (_root.lastdev && random(4) == 0))
                ) {
                    _root.cus = getRandomEndRoom();
                }
                if (
                    endrooms.length > 0 &&
                    (random(4) == 0 || (_root.chaps == 1 && random(3) == 0)) &&
                    _root.minz.length > 0
                ) {
                    _root.minb = getRandomEndRoom();
                }
                if (
                    endrooms.length > 0 &&
                    _root.fullhp &&
                    _root.chaps > 1 &&
                    (random(2) == 0 || _root.chaps > 2)
                ) {
                    _root.chamb = getRandomEndRoom();
                }
                if (endrooms.length > 0 && _root.coins >= 5 && _root.chaps % 2 == 0) {
                    _root.gamb = getRandomEndRoom();
                }
            }
        } else {
            _root.levz = [];
            _root.mapsize = 0;
        }
        if (_root.chaps > 6) {
            _root.boner = undefined;
            _root.boner2 = undefined;
            if (random(5) != 0 || (!ups[64] && random(5) != 0)) {
                _root.shopl = undefined;
            }
        }
    }
    if (fuckup >= 399) {
        _root.levz = undefined;
        if (_root.double) {
            _root.chaps--;
        }
        _root.cuts = true;
        moveToNextArea();
        _root.gotoAndStop("reset");
    }
    if (!_root.altchap) {
        f13 = Math.min(llev.length - 2, _root.chaps * 2 - 2);
        f15 = Math.min(llev.length - 2, _root.chaps * 2 - 4);
    } else {
        f13 = Math.min(llev2.length - 2, _root.chaps * 2 - 2);
        f15 = Math.min(llev2.length - 2, _root.chaps * 2 - 4);
    }
    f14 = true;
    for (e of _root.levz) {
        if (random(2) == 0 && _root.double) {
            f14 = f15;
        } else {
            f14 = f13;
        }
        if (_root.levz[e] > 0) {
            if (_root.altchap) {
                _root.levz[e] = random(llev2[f14 + 1] - llev2[f14]) + llev2[f14] + 2;
            } else {
                _root.levz[e] = random(llev[f14 + 1] - llev[f14]) + llev[f14] + 2;
            }
            _root.rarer[e] = random(115) + 65;
        }
    }
    if (_root.double) {
        _root.chaps--;
    }
    selectBossForFloor();
    if (_root.double) {
        _root.levz[_root.bossl2] = f1;
        _root.bosss2 = _root.bosss;
        _root.altboss2 = _root.altboss;
        _root.chaps = _root.chaps + 1;
        while (_root.bosss2 == _root.bosss) {
            selectBossForFloor();
        }
        _root.levz[_root.bossl] = f1;
        f1 = _root.bosss2;
        _root.bosss2 = _root.bosss;
        _root.bosss = f1;
    } else {
        _root.levz[_root.bossl] = f1;
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
    _root.levz[_root.shopl] = "shop" + (random(6) + 1) * 1;
    _root.levz[_root.sac] = "sac";
    _root.levz[_root.lib] = "lib";
    _root.levz[_root.cus] = "c";
    _root.levz[_root.hide2] = "hi" + _root.hid2;
    if (random(3) == 0) {
        _root.levz[_root.cus] = "c" + random(2);
        if (random(4) == 0) {
            _root.levz[_root.cus] = "c2";
        }
    }
    _root.levz[_root.boner] = "t" + random(6);
    _root.levz[_root.boner2] = "t" + random(6);
    f1 = random(_root.minz.length);
    f2 = "min";
    if (_root.altm) {
        f2 = "mi";
    }
    f3 = f2;
    f2 += _root.minz[f1];
    if (_root.chaps > 2 && !_root.us && random(10) == 0) {
        f2 = "us";
        _root.us = true;
    }
    _root.levz[_root.minb] = f2;
    _root.levz[_root.gamb] = "gam" + random(6);
    _root.levz[_root.chamb] = "cha" + random(6);
    if (_root.chaps == 11) {
        _root.levz[35] = 5;
    }
    if (_root.altch) {
        _root.levz[_root.chamb] = "cha5";
    }
    if (_root.chaps > 3 && _root.minb == undefined) {
        if (_root.chaps > 4) {
            if (random(3) == 0 && _root.chaps - 1 > _root.lastkeeps) {
                _root.levz[_root.hide] = f3 + 4;
                _root.minb = _root.hide;
            }
        }
        if (_root.levz[_root.hide] == f3 + 4) {
            _root.lastkeeps = _root.chaps;
        }
        if (
            random(6 - Math.min(_root.chaps, 5)) == 0 &&
            _root.chaps - 1 > _root.lastkeeps
        ) {
            _root.minb = _root.shopl;
            _root.levz[_root.shopl] = f3 + 4;
            _root.lastkeeps = _root.chaps;
        }
    }
    _root.minz.splice(f1, 1);
    if (_root.eta) {
        etogo = 4;
        _root.eta = false;
        _root.hp = _root.hp + 1;
        ups[22] = ups[22] + 1;
        _root.ups[22] = _root.ups[22] + 1;
        _root.eto = _root.eto + 1;
    }
    if (checkItemOwned(55)) {
        toggleHolyMantle();
    }
}
_root.amusic = false;
if (!_root.beenlev[_root.lev]) {
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
firsttime = _root.beenlev[_root.lev];
if (firsttime != 2) {
    _root.beenlev[_root.lev] = true;
}
if (_root.lev == _root.hide) {
    playSecretRoomSound();
}
if (_root.lev == _root.hide2) {
    playSuperSecretRoomSound();
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
_root.seenlev[_root.lev] = true;
door = [d1, d2, d3, d4];
v1 = _root.lev;
if (v1 % 10 < 9) {
    door[2].gol = v1 + 1;
}
if (v1 % 10 > 1) {
    door[0].gol = v1 - 1;
}
if (v1 < 70) {
    door[1].gol = v1 + 10;
}
if (v1 > 10) {
    door[3].gol = v1 - 10;
}
for (e of door) {
    trg = door[e];
    trg.swapDepths(291 + e);
    trg.govo = false;
    if (trg.gol > -1 && _root.levz[trg.gol] != 0) {
        if (
            trg.gol == _root.hide ||
            trg.gol == _root.hide2 ||
            _root.lev == _root.hide ||
            _root.lev == _root.hide2
        ) {
            trg.govo = true;
            trg.visible = false;
        }
    } else {
        trg._visible = false;
    }
}
rowz = 16;
roxx = 40;
roxx2 = roxx / 2;
f1 = _root.levz[_root.lev];
if (f1 == 2) {
    gotoAndStop(2);
} else if (f1 * 1 > 1) {
    if (_root.chaps == 11) {
        f15 = 15;
    } else {
        f15 = Math.round(_root.chaps / 2 + _root.altchap);
    }
    gotoAndStop("levs" + f15);
    inl.gotoAndStop(f1 - 2);
} else {
    gotoAndStop("levs6");
    inl.gotoAndStop(f1);
    inl.shop.swapDepths(33901);
    inem = true;
}
_this.error = false;
if (_root.lev == _root.chamb) {
    f1 = 19;
    if (_root.altch == 2) {
        f1 = 26;
    }
} else if (_root.lev == _root.gamb) {
    f1 = 15;
} else if (_root.lev == 166 || _root.lev == _root.cus) {
    f1 = 19;
    if (_root.lev == 166) {
        _this.satan = true;
        _root.devil = 2;
        if (_root.door <= -1) {
            _root.door = random(4);
        }
        if (_root.altsat) {
            f1 = 26;
        }
    }
} else if (_root.lev == 169) {
    _this.error = true;
    f1 = 40;
} else if (_root.chaps > 8) {
    if (_root.altchap) {
        f1 = 26;
    } else {
        f1 = 45;
    }
} else {
    altgo = true;
    f1 = 1 + Math.round(_root.chaps / 2 - 1) * 3;
}
if (_root.shopl == _root.lev) {
    f1 = 2;
} else if (
    (_root.bossl == _root.lev || _root.bossl2 == _root.lev) &&
    _root.chaps != 9
) {
    f1 += 2;
} else if (_root.hide == _root.lev) {
    f1 = 20;
} else if (_root.hide2 == _root.lev) {
    f1 = [10, 26, 19, 23, 21];
    f1 = f1[_root.hid2];
} else if (
    altgo &&
    _root.altchap != 0 &&
    _root.chaps != 7 &&
    _root.chaps != 8
) {
    f1 = 21 + Math.round(_root.chaps / 2 - 1);
}
f2 = f1;
if (_root.lev == 35 && !_this.satan && _root.chaps == 1) {
    f2 = 50;
}
if (_root.lev == _root.sac) {
    f2 = f1 = 24;
}
if (_root.lev == _root.lib) {
    f2 = f1 = 25;
}
if (_root.chaps == 11) {
    f2 = f1 = 27;
}
b.w1.gotoAndStop(f1);
b.w2.gotoAndStop(f1);
b.w3.gotoAndStop(f1);
b.w4.gotoAndStop(f1);
b.bg.gotoAndStop(f2);
b.bg.d.gotoAndStop(
    ((_root.rax00 +
            _root.lev +
            _root.lev * _root.lev * (_root.rax20 + _root.lev) +
            (_root.rax10 + _root.lev) * _root.lev * _root.lev) %
        b.bg.d._totalframes) +
    1
);
b.w1.d.gotoAndStop(
    ((_root.rax01 +
            _root.lev +
            _root.lev * _root.lev * (_root.rax21 + _root.lev) +
            (_root.rax11 + _root.lev) * _root.lev * _root.lev) %
        b.w1.d._totalframes) +
    1
);
b.w2.d.gotoAndStop(
    ((_root.rax02 +
            _root.lev +
            _root.lev * _root.lev * (_root.rax22 + _root.lev) +
            (_root.rax12 + _root.lev) * _root.lev * _root.lev) %
        b.w2.d._totalframes) +
    1
);
b.w3.d.gotoAndStop(
    ((_root.rax03 +
            _root.lev +
            _root.lev * _root.lev * (_root.rax23 + _root.lev) +
            (_root.rax13 + _root.lev) * _root.lev * _root.lev) %
        b.w3.d._totalframes) +
    1
);
b.w4.d.gotoAndStop(
    ((_root.rax04 +
            _root.lev +
            _root.lev * _root.lev * (_root.rax24 + _root.lev) +
            (_root.rax14 + _root.lev) * _root.lev * _root.lev) %
        b.w4.d._totalframes) +
    1
);
xenf = Math.round((gridxs - gridx) / gridv + 1.5);
yenf = Math.round((gridys - gridy) / gridv + 1.5);
gxe = xenf;
gye = yenf;
xenf *= gridmax;
grid = new flash.display.BitmapData(xenf, yenf, false, 0); // remove var before grid
grid2 = new flash.display.BitmapData(xenf, yenf, false, 0); // remove var before grid2
var tests = new flash.display.BitmapData(300, 300, false, 0);
_root.g.gotoAndPlay(60);
timer = [];
alltimer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
globalProjectileCounter = 0;
projectileClips = [];
if (_root.chaps >= 5) {
    mux = 1.25;
} else {
    mux = 1;
}
v1 = 13;
v2 = 60 + 15 * Math.min(10, _root.chaps);
v2 /= mux;
p180 = 0.017453292519943295;
p10 = 0.5235987755982988;
v3 = 17;
sizes = [
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
masses = [
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
hps = [
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
hard = [
    1.5707963267948966,
    0.15707963267948966,
    p10 * 5,
    p10,
    p10,
    p10 * 2,
    0,
    0,
    0,
    p10 * 5,
    p10,
    p10,
    p10,
    0,
    0,
    p10,
    p10,
    p10,
    0,
    0,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    0,
    p10,
    p10,
    0,
    p10,
    p10,
    p10,
    0,
    0,
    p10,
    p10,
    0,
    p10,
    p10,
    p10,
    p10,
    0,
    p10,
    p10,
    0,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    0,
    p10,
    0,
    0,
    0,
    0,
    p10,
    p10,
    p10,
    0,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    0,
    p10,
    0,
    0,
    0,
    0,
    0,
    0,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    p10,
    0,
    p10,
    p10,
    p10,
    p10,
    p10,
];
hard[85] = p10;
hard[54] = 0;
hps[88] = 20;
hps[62] *= 1.5;
hps[43] *= 1.15;
hps[65] *= 1.25;
hps[57] *= 1.55;
hps[45] *= 1.22;
hps[36] *= 0.85;
hps[89] = 20;
hps[85] *= 0.65;
hps[86] *= 0.475;
hps[102] *= 2;
hps[92] *= 0.7;
if (_root.hardmode) {
    hps[78] *= 1.45;
}
if (_root.chaps < 3) {
    hps[83] *= 0.75;
    hps[82] *= 0.75;
}
masses[21] = masses[23];
if (_root.locker[45]) {
    hps[78] *= 1.25;
}
for (e of hops) {
    hps[e] *= mux;
}
wb = [];
sizes[61] = v3;
sizes[80] = v3;
hardx = [];
hardy = [];
for (e of hard) {
    v1 = hard[e];
    siz = sizes[e];
    if (e == 14 || e == 13) {
        siz = 5;
    }
    if (v1 > 0) {
        hardx[e] = [];
        hardy[e] = [];
        a = 0;
        while (a < 6.283185307179586) {
            hardx[e][hardx[e].length] = Math.sin(a) * siz;
            hardy[e][hardy[e].length] = Math.cos(a) * siz;
            a += v1;
        }
    }
}
sizes[28] = 18;
it1 = [
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
watz = 0;
flyer = 0;
hearts = [];
masks = [];
if (_root.chaps != 9 && (_root.chala <= 0 || _root.chala == 10)) {
    _root.heaven = _root.so.data.wins >= 10;
} else {
    _root.heaven = false;
}
noetern = false;
spuz = 0;
if (
    _root.specol[_root.lev] &&
    _root.lev != _root.chamb &&
    (_root.lev != _root.bossl || (_root.chaps != 6 && _root.chaps < 8))
) {
    gospo = true;
    if (!_root.beenlev2[_root.lev]) {
        _root.specol[_root.lev] = [];
        _root.alto[_root.lev] = [];
    }
} else {
    _root.specol[_root.lev] = [];
    _root.alto[_root.lev] = [];
}
parz = 0;
par = [];
createEmptyMovieClip("blorz", 297);
hitc = 0;
hitcc = 0;
lasth = 0;
bossdmg = true;
org = new flash.display.BitmapData(40, 40, true, 13421772);
v3 = 1;
v2 = 20;
v1.scale(v3, v3);
v1.translate(v2, v2);
org.draw(shaz, v1);
f1 = 75;
trg = createEmptyMovieClip("bggg", 290);
bgg = new flash.display.BitmapData(gridxs, gridys - f1, true, 0);
trg.attachBitmap(bgg, 1);
trg._yscale = trg._xscale = 100 / hdx;
trg._y = f1;
trg = createEmptyMovieClip("splala", 296);
splat = new flash.display.BitmapData(gridxs, gridys, true, 0);
trg.attachBitmap(splat, 1);
trg._yscale = trg._xscale = 100 / hdx;
trg._alpha = 70;
trg = createEmptyMovieClip("guta", 298);
gut = new flash.display.BitmapData(gridxs, gridys, true, 0);
trg.attachBitmap(gut, 1);
trg._yscale = trg._xscale = 100 / hdx;
poi = new flash.geom.Point(0, 0);
ref = [];
drawMap();
sk = _root.sk;
webs = [];
updatePlayerAnimation();
drawMap();
if (levz.length <= 1) {
    levz = new Array(200);
    if (_root.whatstart) {
        _root.whatstart = false;
    }
}
kogs = [];
itb = 0;
lastcraf = -30;
if (_root.playerx <= 0 || _root.newstartt) {
    _root.playerx = 320;
    _root.playery = 400;
}
trg = player = createProjectile(_root.playerx, _root.playery, 0, 0, 0, 0, 1);
if (_root.eto >= 7) {
    _root.etol = true;
    _root.playcol[0] = 5;
    _root.playcol[1] = 5;
    _root.playcol[2] = 5;
    _root.locker[113] = true;
}
if (_root.getup) {
    _root.getup = false;
    player.d.gotoAndStop(5);
}
if (_root.tell) {
    _root.tell = false;
    player.d.gotoAndStop(8);
}
player.mhp = _root.mhp;
player.hp = _root.hp;
if (_root.lev == _root.bossl && !firsttime) {
    if (checkItemOwned(53)) {
        player.hp = player.hp + 1;
    }
}
Mouse.removeListener();
if (mouseListener == undefined) {
    mouseListener = new Object();
    mouseListener.onMouseDown = function () {
        md = true;
    };
    mouseListener.onMouseUp = function () {
        md = false;
    };
}
Mouse.addListener(mouseListener);
unpause = true;
_root.pinfo = 2;
fra = 0;
player.fire = 0;
player.fire1 = 0;
axenf = ayenf = 0;
sob = 1;
_root.hud.st1._visible = _root.st2._visible = false;
olfx = olfy = 0;
f1 = 440;
switch (_root.door * 1) {
    case 0:
        olfx = -640;
        break;
    case 2:
        olfx = 640;
        break;
    case 1:
        olfy = f1;
        break;
    case 3:
        olfy = -f1;
}
_X = olfx;
_Y = olfy;
shutdoor = 1;
brr = [];
brr2 = [];
gibb = 0;
if (_root.tex != undefined) {
    wtftex = _root.tex;
}
gameover = 0;
justnow = 9;
itc = [
    0, 6, 3, 6, 1, 2, 1, 3, 0, 3, 3, 0, 2, 4, 0, 3, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 6, 6, 6, 3, 0, 0, 0, 0, 0,
    0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 6, 0, 0, 3, 0, 6, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4,
];
itc[96] = 3;
itc[106] = 6;
itc[105] = 1;
itc[107] = 1;
itc[118] = 6;
itc[131] = 2;
itc[126] = 6;
itc[120] = 4;
itc[135] = 2;
itc[141] = 6;
itc[152] = 2;
wtfps2 = getTimer();
wtfps = 35;
wtfpsh = true;
wtff = 60;
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
secol = 0;
minions = 0;
flyby = 0;
mom = _loc0_ = [];
worm = _loc0_;
mags = _loc0_;
mhelps = 0;
if (random(2) == 0) {
}
ffly = 0;
fiz = 0;
etux = 0;
_root.hud.hardon._visible = _root.hardmode;
_root.hud.hardon.cacheAsBitmap = true;
_root.hud.weap.cacheAsBitmap = true;
_root.hud.cacher.cacheAsBitmap = true;
f;
nextbo = true;
emosound = true;
if (_root.lasth) {
    lasth = 50;
}
nospo = -10;
flyby2 = _loc0_ = 0;
flyby3 = _loc0_;
flyby4 = _loc0_;
playsave = _loc0_ = -1;
unic = _loc0_;
demon = _loc0_;
plo = 1;
lastxy = _loc0_ = 0;
lastxx = _loc0_;
if (_root.chaf) {
    player.fire = -10;
    chaf = -20;
}
tictic = _root.itc;
nocharge = 0;
chamb = 0;
mhpp = _loc0_ = 0;
ahpp = _loc0_;
red = _loc0_ = 0;
blue = _loc0_;
shiz = [];
if (_root.ups[122] && player.hp < 1) {
    player._visible = false;
}
