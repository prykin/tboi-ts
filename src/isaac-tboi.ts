function levzz(f1)
{
   if(trg.s > 10)
   {
      if((door[0].blo == f1 || door[1].blo == f1 || door[2].blo == f1 || door[3].blo == f1) && f1 > 0)
      {
         return 2;
      }
      return levz[f1];
   }
   return levz[f1];
}
function horsch(trg)
{
   if(_root.it == 141)
   {
      trg.gotoAndStop(2);
   }
   else
   {
      trg.gotoAndStop(1);
   }
}
function sloter(trg)
{
   trg.gotoAndStop(1);
   trg2 = trg._parent._parent._parent;
   if(trg2.s != 5)
   {
      trg2 = trg._parent._parent._parent._parent;
   }
   if(trg2.col == 41)
   {
      trg.gotoAndStop(2);
   }
}
function pffx(f1)
{
   var _loc3_ = _root.levz[f1 + 1] + _root.levz[f1 - 1] + _root.levz[f1 + 10] + _root.levz[f1 - 10];
   if(_root.levz[f1] == 0 && _loc3_ < 2 && f5 < f6 || f1 == 35)
   {
      _root.levz[f1] = 1;
      acts2.push(f1);
      f8++;
      if(f1 != 35)
      {
         f5++;
      }
   }
}
function hat(f1)
{
   var _loc2_ = 0;
   _root.hat[f1] = true;
   switch(f1)
   {
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
function gish(trg, f1)
{
   if(f1 == 2)
   {
      if(trg._parent._parent == player || trg._parent._parent._parent == player || trg._parent._parent._parent._parent == player || trg._parent._parent._parent._parent._parent == player)
      {
         f1 = 3;
      }
   }
   if(f1 == 3)
   {
      trg.gotoAndStop(1);
   }
   else if(f1)
   {
      if(altboss == 2)
      {
         trg.gotoAndStop(2);
      }
      else
      {
         trg.gotoAndStop(1);
      }
   }
   else if(altboss == 2)
   {
      trg.gotoAndStop(3);
   }
   else if(altboss)
   {
      trg.gotoAndStop(2);
   }
   else
   {
      trg.gotoAndStop(1);
   }
}
function dmgdo()
{
   var _loc2_ = 0;
   if(doub)
   {
      _loc2_ += 0.75;
   }
   if(ups[7])
   {
      _loc2_ = _loc2_ + 1;
   }
   if(_root.etol)
   {
      _loc2_ += 3;
   }
   if(ups[90])
   {
      _loc2_ = _loc2_ + 1;
   }
   if(ups[109])
   {
      _loc2_ += _root.coins * 0.04;
   }
   if(ups[122] > 0)
   {
      _loc2_ += ups[122] * ups[122] * 1.5;
   }
   _loc2_ += ups[50] + ups[51] + ups[70] + ups[79] + (ups[80] + ups[4] + ups[197]) * 0.5 + (ups[12] + ups[101] + ups[121] + ups[138] + ups[193] + ups[189]) * 0.3 + (ups[176] + ups[184] + ups[165]) * 0.08;
   if(ups[120])
   {
      _loc2_ *= 0.95;
      _loc2_ -= 0.4;
   }
   if(demon > 0)
   {
      _loc2_ += 0.7;
   }
   if(rage != 1)
   {
      _loc2_ += rage - 1;
   }
   if(ups[154])
   {
      if(sob == -1 || _root.hat[11] && random(2) == 0)
      {
         _loc2_ += 2;
      }
   }
   if(ups[69] && !ups[118] && chaf > 0)
   {
      chal = Math.max(1,Math.min(5,1 + (fra - chaf) / 10) * 1.8 - 2);
      _loc2_ += (chal - 1) * 1.3;
   }
   _loc2_ += razor * 0.6;
   _loc2_ = 3.5 * Math.sqrt(1 + _loc2_ * 1.2);
   if(ups[169])
   {
      if(ups[2] == 1 || ups[153] || ups[182] || true)
      {
         _loc2_ += 6.6;
      }
      else
      {
         _loc2_ += 4;
         _loc2_ *= 2;
      }
   }
   var _loc3_ = [0,0,0.2,0.35,0.05,-0.23,0];
   if(ups[122])
   {
      _loc3_[5] = -0.1;
   }
   _loc2_ *= 1 + _loc3_[_root.skiner];
   _root.firrb = _loc2_;
   if(trixx(35))
   {
      _loc2_ += 2;
   }
   if(trixx(62))
   {
      _loc2_ += 1;
   }
   if(ups[182])
   {
      _loc2_ *= 1.3;
      _loc2_ += 4;
   }
   if(ups[152])
   {
      _loc2_ *= 0.65;
   }
   if(_root.it == 83)
   {
      _loc2_ += 0.5;
   }
   if(_root.hardmode)
   {
      var _loc5_ = _loc2_;
      var _loc4_ = 1 + Math.max(0,12 - _root.firra) * 0.1;
      _loc2_ *= _loc4_;
      if(_loc2_ > 5)
      {
         _loc2_ = 5 + (_loc2_ - 5) * 0.95;
      }
      if(_loc2_ > 10)
      {
         _loc2_ = 10 + (_loc2_ - 10) * 0.85;
      }
      if(_loc2_ > 15)
      {
         _loc2_ = 15 + (_loc2_ - 15) * 0.85;
      }
      if(_loc2_ > 20)
      {
         _loc2_ = 20 + (_loc2_ - 20) * 0.85;
      }
      if(_loc2_ > 30)
      {
         _loc2_ = 25 + (_loc2_ - 25) * 0.85;
      }
      _loc2_ /= _loc4_;
   }
   return _loc2_;
}
function omgz(f1)
{
   if(random(3) != 0)
   {
      _root.ittt.push(f1);
   }
   else
   {
      _root.ittt7.push(f1);
   }
}
function itemzz()
{
   _root.junxx = [30,31,32,33,34,36,37,38,39,40,41,43,44,45,46,48,51,53];
   if(_root.locker[68])
   {
      _root.junxx.push(35);
   }
   if(_root.locker[74])
   {
      _root.junxx.push(47);
   }
   if(_root.locker[72])
   {
      _root.junxx.push(49);
   }
   if(_root.locker[77])
   {
      _root.junxx.push(50);
   }
   if(_root.locker[78])
   {
      _root.junxx.push(42);
   }
   if(_root.locker[81])
   {
      _root.junxx.push(29);
   }
   if(!_root.locker[84])
   {
   }
   if(_root.locker[91])
   {
      _root.junxx.push(54);
   }
   if(_root.locker[92])
   {
      _root.junxx.push(55);
   }
   if(_root.locker[93])
   {
      _root.junxx.push(56);
   }
   if(_root.locker[94])
   {
      _root.junxx.push(57);
   }
   if(_root.locker[95])
   {
      _root.junxx.push(58);
   }
   if(_root.locker[96])
   {
      _root.junxx.push(59);
   }
   if(_root.locker[97])
   {
      _root.junxx.push(60);
   }
   if(_root.locker[98])
   {
      _root.junxx.push(61);
   }
   if(random(4) == 0)
   {
      _root.junxx.push(62);
   }
   _root.ittt = [1,1,2,3,4,5,6,7,8,8,10,12,13,14,15,19,19,21,22,23,24,25,26,27,28,29,30,31,32,37,38,39,40,41,44,47,48,49,50,51,53,54,55,56,57,58,59,60,62,65,66,67,69,70,71,72,75,76,77,85,115,120,121,124,125,128,129];
   _root.ittt.push(136,137,138,140,142,143,144,147,148,149,150,151,152,153,154,155,157,160,163,167,169,173,177,178,180,183,191,192);
   _root.ittt2 = [22,23,24,25,26,27 + random(2),29 + random(3),29 + random(3),32,51,141,165,176,193,194,195,196,197,198];
   _root.ittt3 = [11,16,42,77,161];
   _root.ittt4 = [54,54,60,60,64,21,21,139,156,147,195];
   _root.ittt6 = [38,27 + random(2),29 + random(3),26,1,50];
   _root.ittt7 = [8,67,79,80,81,115,133,159];
   _root.ittt8 = [26,17,19,21,44,70,14,13];
   _root.ittt9 = [58,65,192];
   _root.ittt10 = [7,33,101,146,142,173,182,184,185];
   if(random(4) == 0 || !_root.hardmode)
   {
      _root.ittt7.push(118);
   }
   if(random(2) == 0)
   {
      _root.ittt3.push(11,77);
   }
   if(random(2) == 0)
   {
      _root.ittt10.push(184);
      _root.ittt4.push(144);
   }
   else
   {
      _root.ittt4.push(177);
   }
   if(random(2) == 0)
   {
      _root.ittt6.push(179);
      _root.ittt3.push(190);
   }
   if(_root.locker[65])
   {
      _root.ittt.push(166);
   }
   if(_root.locker[66])
   {
      _root.ittt.push(162);
   }
   if(_root.locker[67])
   {
      _root.ittt.push(188);
   }
   if(_root.locker[69])
   {
      _root.ittt.push(172);
   }
   if(_root.locker[70])
   {
      _root.ittt.push(174);
   }
   if(_root.locker[71])
   {
      _root.ittt7.push(157);
   }
   if(_root.locker[73])
   {
      _root.ittt.push(186);
   }
   if(_root.locker[75])
   {
      _root.ittt3.push(175);
   }
   if(_root.locker[76])
   {
      _root.ittt4.push(164);
   }
   if(random(5) != 0 || !_root.locker[79])
   {
      _root.ittt7.push(145);
      if(_root.locker[79] && random(10) != 0)
      {
         _root.ittt7.push(134);
      }
   }
   else if(_root.locker[79])
   {
      _root.ittt7.push(134);
   }
   if(_root.locker[80] && (!_root.hardmode || random(3) == 0))
   {
      _root.ittt3.push(168);
   }
   if(_root.locker[82])
   {
      _root.ittt.push(189);
   }
   if(_root.locker[83])
   {
      _root.ittt.push(171);
   }
   if(_root.locker[86])
   {
      _root.ittt.push(170);
   }
   if(_root.locker[85])
   {
      _root.ittt.push(187);
   }
   if(random(2) == 0)
   {
      _root.ittt.push(17);
   }
   if(random(3) != 0 && _root.locker[48])
   {
      if(random(3) == 0)
      {
         _root.ittt7.push(35);
      }
      else
      {
         _root.ittt.push(35);
      }
      _root.ittt9.push(35);
   }
   if(random(2) == 0)
   {
      _root.ittt4.push(116);
   }
   if(random(2) == 0)
   {
      _root.ittt4.push(63);
   }
   if(random(5) == 0)
   {
      _root.ittt7.push(68);
   }
   else
   {
      _root.ittt.push(68);
   }
   if(random(3) == 0)
   {
      _root.ittt7.push(82);
   }
   if(random(3) == 0)
   {
      _root.ittt7.push(84);
   }
   else if(random(2) == 0)
   {
      _root.ittt3.push(84);
   }
   if(_root.locker[3] && _root.skiner != 3)
   {
      if(random(3) == 0)
      {
         _root.ittt.push(34);
      }
      else if(random(2) == 0)
      {
         _root.ittt3.push(34);
      }
      else
      {
         _root.ittt7.push(34);
      }
      _root.ittt9.push(34);
   }
   if(_root.locker[1])
   {
      _root.ittt.push(45);
   }
   if(_root.locker[2])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(46);
      }
      else
      {
         _root.ittt7.push(46);
      }
   }
   if(_root.locker[7])
   {
      _root.ittt4.push(78);
      _root.ittt9.push(78);
   }
   if(_root.locker[8] && random(3) != 0)
   {
      _root.ittt3.push(20);
   }
   if(_root.locker[9] && random(3) != 0)
   {
      _root.ittt7.push(83);
   }
   if(_root.locker[10])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(74);
      }
      else
      {
         _root.ittt7.push(74);
      }
   }
   if(_root.locker[11] && (!_root.hardmode || random(3) != 0))
   {
      _root.ittt.push(52);
   }
   if(_root.locker[12])
   {
      _root.ittt.push(36);
   }
   if(_root.locker[13])
   {
      _root.ittt3.push(89);
   }
   if(_root.locker[14])
   {
      _root.ittt.push(91);
   }
   if(!_root.locker[18])
   {
   }
   if(_root.locker[19])
   {
      _root.ittt.push(86);
   }
   if(_root.locker[20])
   {
      _root.ittt.push(87);
   }
   if(_root.locker[21])
   {
      _root.ittt.push(88);
   }
   if(_root.locker[25] && random(3) != 0)
   {
      _root.ittt2.push(92);
   }
   if(_root.locker[26])
   {
      _root.ittt.push(98);
      _root.ittt10.push(98);
   }
   if(_root.locker[27])
   {
      _root.ittt.push(94);
   }
   if(_root.locker[28])
   {
      _root.ittt.push(95);
   }
   if(_root.locker[33])
   {
      _root.ittt.push(93);
   }
   if(_root.locker[29])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(97);
      }
      else
      {
         _root.ittt7.push(97);
      }
      _root.ittt9.push(97);
   }
   if(_root.locker[30])
   {
      _root.ittt.push(99);
   }
   if(_root.locker[31])
   {
      _root.ittt.push(100);
   }
   if(_root.locker[32])
   {
      _root.ittt.push(96);
   }
   if(_root.locker[34])
   {
      _root.ittt.push(101);
   }
   if(_root.locker[36])
   {
      _root.ittt.push(102);
   }
   if(_root.locker[37])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(103);
      }
      else
      {
         _root.ittt7.push(103);
      }
   }
   if(_root.locker[40])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(104);
      }
      else
      {
         _root.ittt7.push(104);
      }
   }
   if(_root.locker[38])
   {
      _root.ittt.push(105);
   }
   if(_root.locker[35])
   {
      _root.ittt.push(106);
   }
   if(_root.locker[39])
   {
      _root.ittt.push(107);
   }
   if(_root.locker[43])
   {
      _root.ittt.push(108);
   }
   if(_root.locker[44])
   {
      if(random(3) != 0)
      {
         _root.ittt.push(109);
      }
      else
      {
         _root.ittt7.push(109);
      }
   }
   if(_root.locker[47])
   {
      _root.ittt.push(110);
   }
   if(_root.locker[46])
   {
      _root.ittt.push(111);
   }
   if(_root.locker[55])
   {
      omgz(114);
   }
   if(_root.locker[56])
   {
      _root.ittt.push(117);
   }
   if(_root.locker[57] && _root.skiner != 5)
   {
      omgz(122);
   }
   if(_root.locker[58])
   {
      omgz(126);
   }
   if(_root.locker[59])
   {
      _root.ittt.push(112);
      _root.ittt10.push(112);
   }
   if(_root.locker[60])
   {
      _root.ittt.push(131);
   }
   if(_root.locker[61])
   {
      omgz(113);
   }
   if(_root.locker[62])
   {
      omgz(127);
   }
   if(_root.locker[63])
   {
      omgz(123);
      _root.ittt9.push(123);
   }
   for(z in _root.ittt2)
   {
      i = 0;
      while(i < _root.ittt.length)
      {
         if(_root.ittt2[z] == _root.ittt[i])
         {
            _root.ittt.splice(i,1);
            break;
         }
         i++;
      }
   }
   for(z in _root.ittt4)
   {
      i = 0;
      while(i < _root.ittt.length)
      {
         if(_root.ittt4[z] == _root.ittt[i])
         {
            _root.ittt.splice(i,1);
            break;
         }
         i++;
      }
   }
   for(z in _root.ittt6)
   {
      i = 0;
      while(i < _root.ittt.length)
      {
         if(_root.ittt6[z] == _root.ittt[i])
         {
            _root.ittt.splice(i,1);
            break;
         }
         i++;
      }
   }
}
function picc(f2)
{
   if(random(2) == 0)
   {
      _root.picers[random(6)] = f2;
   }
}
function newstats()
{
   _root.picers = [1,2,3,4,5,6];
   picc(101);
   picc(102);
   picc(103);
   _root.noff = false;
   _root.noff2 = false;
   _root.noff3 = false;
   _root.alof = random(3);
   _root.darky(120);
   _root.door = undefined;
   _root.playcol = [1,1,1];
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
   if(_root.chaps > 2)
   {
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
   _root.hatmode = [1,1,1,1,1];
   _root.wtfuuz = false;
   _root.hat = [];
   if(_root.skiner > 0 && _root.skiner < 4)
   {
      hat(_root.skiner + 9);
      _root.classit = true;
   }
   _root.coins = _root.bombs = _root.keys = 0;
   _root.lastdev = undefined;
   _root.minz = [0,1,2,3,5,6];
   _root.sk = _root.skiner + 1;
   _root.eto = 0;
   _root.etol = false;
   switch(_root.skiner)
   {
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
   if(_root.skiner == 6)
   {
      _root.wiptz = -1.5;
   }
   if(_root.skiner == 5)
   {
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
   if(_root.hardmode)
   {
      _root.eterns = 3;
   }
   if(_root.chala == 2)
   {
      _root.luck = -4;
   }
   _root.altb3 = false;
   if(_root.skiner == 2)
   {
      _root.firrr -= 5;
   }
   if(_root.skiner == 2)
   {
      _root.firrr -= 5;
      _root.firra -= 2;
   }
   var _loc2_ = [0,0,0.2,0.35,0.05,-0.25,0];
   v1 = 1 + _loc2_[_root.skiner];
   _root.firrb = 3.5 * v1;
   _root.ups = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   _root.samer = 0;
   _root.catlives = 0;
   _root.shitpenny = false;
   _root.us = false;
   _root.whatstart = true;
   _root.whatstart2 = true;
   itemzz();
   if(_root.chaps > 1)
   {
      _root.bombs += _root.chaps;
      _root.keys += _root.chaps;
      _root.ups[50] = _loc0_ = (_root.chaps - 1) * 0.8;
      ups[50] = _loc0_;
      _root.ups[1] = _loc0_ = (_root.chaps - 1) * 0.8;
      ups[1] = _loc0_;
      _root.ups[15] = _loc0_ = Math.round((_root.chaps - 1) * 1.4);
      ups[15] = _loc0_;
      if(_root.hardmode)
      {
         _root.eterns += 0.4 * _root.chaps;
      }
   }
}
function ender()
{
   var _loc1_ = random(endrooms.length);
   f2 = endrooms[_loc1_];
   endrooms.splice(_loc1_,1);
   return f2;
}
function nch(f5)
{
   if(_root.levz[f5])
   {
      f12 = true;
   }
   else
   {
      f12 = 2;
      f4 = false;
   }
   if(f5 == _root.bossl || f5 == _root.bossl2 || f5 == _root.hide2)
   {
      f12 = false;
      f4 = false;
   }
   if(f12 && f12 != 2)
   {
      for(z in endrooms)
      {
         if(endrooms[z] == f5)
         {
            f12 = false;
         }
      }
   }
   if(f5 == _root.hide)
   {
      f12 = false;
      f4 = false;
   }
   return f12;
}
function ncheck1(f5)
{
   return nch(f5 + 1) && nch(f5 - 1) && nch(f5 + 10) && nch(f5 - 10);
}
function nxx(f1)
{
   if(_root.levz[f1] > 0)
   {
      return 1;
   }
   return 0;
}
function ncheck(f5)
{
   return nxx(f5 + 1) + nxx(f5 - 1) + nxx(f5 + 10) + nxx(f5 - 10);
}
function bosschoose()
{
   if(_root.chaps % 2 == 0)
   {
      _root.altb3 = true;
   }
   if(_root.chaps % 2 == 1)
   {
      _root.horsem = _root.locker[5];
      _root.altb = true;
      _root.altb2 = _root.chaps < 4;
      _root.switchero = _root.chaps < 4 && random(2);
      _root.swww = _root.chaps + 1;
   }
   f1 = "b" + Math.min(8,_root.chaps) + "-" + random(5);
   _root.bosss = _root.chaps;
   _root.horse = false;
   _root.altboss = false;
   altb = [0,34,37,29,26,30 + random(2) * 5,30,31,8];
   if(_root.chaps != 6 && _root.chaps != 8)
   {
      if(_root.chaps == 11)
      {
         _root.bosss = 40;
      }
      else if(_root.bosss <= 25)
      {
         if(_root.chaps > 8)
         {
            _root.chaps = 9;
            if(_root.altchap)
            {
               _root.bosss = 39;
            }
            else
            {
               _root.bosss = 24;
               f1 = "stan";
            }
         }
         else if(_root.horsem && random(5) == 0)
         {
            _root.horse = true;
            _root.horsem = false;
            f1 = Math.round(_root.chaps / 2);
            _root.bosss = f1 + 8;
            if(random(10) == 0)
            {
               f1 = 5;
               _root.bosss = 22;
            }
            f1 = "h" + f1;
         }
         else if(_root.locker[88] && _root.chaps == 7 && random(3) == 0)
         {
            if(random(2) == 0)
            {
               _root.bosss = 38;
            }
            else
            {
               _root.bosss = 41;
            }
         }
         else if(_root.demonz == 1 && random(10) == 0)
         {
            _root.demonz = 2;
            _root.bosss = 23;
            f1 = "demon";
         }
         else if(_root.chaps == 7 && random(3) == 0)
         {
            f1 = [30,33];
            _root.bosss = f1[random(f1.length)];
         }
         else if(_root.altb3 && _root.altchap && random(4) == 0 && _root.chaps < 6)
         {
            _root.altb3 = false;
            f1 = Math.round(_root.chaps / 2 - 1.5);
            if(random(2) == 0)
            {
               f2 = [28,36];
            }
            else
            {
               f2 = [32,27];
            }
            _root.bosss = f2[f1];
         }
         else if(_root.altb && random(5) == 0)
         {
            _root.altb = false;
            f1 = Math.round(_root.chaps / 2);
            _root.bosss = f1 + 12;
            f1 = "a" + f1 + "-" + random(3);
            if(_root.altchap && _root.chaps == 1)
            {
            }
         }
         else if(_root.altb2 && random(4) == 0 && (_root.chap > 2 || !_root.altchap))
         {
            _root.altb2 = false;
            f1 = Math.round(_root.chaps / 2) + 4;
            _root.bosss = f1 + 12;
            f1 = "a" + f1 + "-" + random(3);
         }
         else if(_root.switchero)
         {
            f1 = _root.swww;
            _root.bosss = f1;
            if(_root.altchap)
            {
               _root.bosss = altb[_root.bosss];
            }
            f1 = "b" + Math.min(8,f1) + "-" + random(5);
         }
         else
         {
            _root.bosss = _root.chaps;
            if(_root.altchap)
            {
               _root.bosss = altb[_root.bosss];
            }
            f1 = "b" + Math.min(8,_root.bosss) + "-" + random(5);
         }
      }
   }
   if(_root.bosss > 25)
   {
      f6 = [26,27,29,30,31,32,33,36,37,38,40,42];
      f7 = [2,3,13,14,15,17,18,34,7,11,39,41];
      f1 = "b" + _root.bosss + "-" + random(4);
      for(e in f6)
      {
         if(_root.bosss == f6[e])
         {
            _root.altboss = true;
            if(_root.bosss == 32 || _root.bosss == 27)
            {
               _root.altboss = 2;
            }
            if(_root.bosss == 38)
            {
               f1 = "h3";
            }
         }
      }
   }
   if(random(2) == 0)
   {
      if(_root.bosss == 17 && _root.locker[22] || _root.bosss == 3 && _root.locker[23] || _root.bosss == 5 && _root.locker[24] || _root.bosss == 41 && _root.locker[89])
      {
         _root.altboss = true;
         switch(_root.bosss)
         {
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
   if(_root.bosss == 8 && _root.locker[45])
   {
      _root.bosss = 25;
   }
   _root.swww = _root.chaps;
}
function sams()
{
   if(_root.beenlev[_root.boner] != 2 && _root.chaps != 1 && _root.boner != undefined)
   {
      _root.samer = _root.samer + 1;
   }
   if(_root.beenlev[_root.boner2] != 2 && _root.double && _root.chaps != 1 && _root.boner2 != undefined)
   {
      _root.samer = _root.samer + 1;
   }
}
function hider()
{
   if(!_root.hider)
   {
      _root.mmus = _root.soundy("secret room find.mp",100);
      _root.hider = true;
   }
}
function hider2()
{
   if(!_root.hider2)
   {
      _root.mmus = _root.soundy("isaacxpsecretroomreveal2.mp3",100);
      _root.hider2 = true;
   }
}
function itmc()
{
   if(_root.levcol[e] > 0)
   {
      mpiece.itmc.gotoAndStop(_root.levcol[e]);
   }
   else
   {
      mpiece.itmc.gotoAndStop("empty");
   }
}
function mapd()
{
   qq = _root._quality;
   if(qq != "high")
   {
      _root._quality = "high";
   }
   _root.map.fillRect(_root.map.rectangle,0);
   maxxx = undefined;
   if(_this.satan || _this.error || _root.darks)
   {
      e = 35;
      f1 = e % 10 * 25 + 15;
      f2 = Math.round(e / 10 - 0.5) * 10 + 7;
      maxx = new flash.geom.Matrix();
      maxx.translate(f1,f2);
      maxx.scale(_root._xscale / 100,_root._yscale / 100);
      mpiece.gotoAndStop(7);
      _root.map.draw(mpiece,maxx);
      minx = f1;
      maxxx = f1;
      miny = f2;
      maxy = f2;
   }
   else
   {
      for(e in _root.levz)
      {
         if(e < 110)
         {
            if(_root.levz[e] != 0 && (_root.seenlev[e] || ups[54]) && (_root.hide != e && _root.hide2 != e || _root.beenlev[e] && (e != _root.chamb || _root.chama)))
            {
               maxx = new flash.geom.Matrix();
               f1 = e % 10 * 25 + 15;
               f2 = Math.round(e / 10 - 0.5) * 10 + 7;
               if(f1 > 0)
               {
                  if(maxxx == undefined)
                  {
                     minx = maxxx = f1;
                     miny = maxy = f2;
                  }
                  else
                  {
                     minx = Math.min(f1,minx);
                     maxxx = Math.max(f1,maxxx);
                     miny = Math.min(f2,miny);
                     maxy = Math.max(f2,maxy);
                  }
                  maxx.translate(f1,f2);
                  if(_root.lev == e)
                  {
                     mpiece.gotoAndStop(3);
                  }
                  else if(_root.beenlev[e])
                  {
                     mpiece.gotoAndStop(2);
                  }
                  else
                  {
                     mpiece.gotoAndStop(1);
                  }
                  itmc();
                  maxx.scale(_root._xscale / 100,_root._yscale / 100);
                  _root.map.draw(mpiece,maxx);
               }
            }
         }
      }
      e = 0;
      while(e < _root.levz.length)
      {
         if(_root.levz[e] != 0 && e < 110)
         {
            maxx = new flash.geom.Matrix();
            f1 = e % 10 * 25 + 15;
            f2 = Math.round(e / 10 - 0.5) * 10 + 7;
            maxx.translate(f1,f2);
            maxx.scale(_root._xscale / 100,_root._yscale / 100);
            mpiece.gotoAndStop(1);
            if(_root.shopl == e && (_root.shopaz || ups[21]))
            {
               mpiece.gotoAndStop(4);
            }
            else if(_root.boner == e && (ups[21] || _root.treasd) || _root.boner2 == e && (ups[21] || _root.treasd2))
            {
               mpiece.gotoAndStop(5);
            }
            else if((_root.bossl == e && (!_root.double || _root.bosss == _root.bosss2) || _root.bossl2 == e && _root.bosss != _root.bosss2) && (ups[21] || _root.bossd || ups[194]))
            {
               mpiece.gotoAndStop(6);
            }
            else if(_root.hide == e && (ups[54] || _root.hider || _root.hiderr))
            {
               mpiece.gotoAndStop(7);
            }
            else if(_root.hide2 == e && (_root.hider2 || _root.hiderr2))
            {
               mpiece.gotoAndStop(16);
            }
            else if(_root.minb == e && (ups[21] || _root.minbb))
            {
               mpiece.gotoAndStop(8);
            }
            else if(_root.gamb == e && (ups[21] || _root.gambb))
            {
               mpiece.gotoAndStop(9);
            }
            else if(_root.cus == e && (ups[21] || _root.cusb))
            {
               mpiece.gotoAndStop(14);
            }
            else if(_root.chamb == e && (ups[21] || _root.chambb))
            {
               if(_root.altch == 2)
               {
                  mpiece.gotoAndStop(17);
               }
               else if(_root.altch)
               {
                  mpiece.gotoAndStop(11);
               }
               else
               {
                  mpiece.gotoAndStop(10);
               }
            }
            else if(_root.lib == e && (ups[21] || _root.libb))
            {
               mpiece.gotoAndStop(12);
            }
            else if(_root.sac == e && (ups[21] || _root.sacb))
            {
               mpiece.gotoAndStop(13);
            }
            if(mpiece._currentframe > 1)
            {
               itmc();
               _root.map.draw(mpiece,maxx);
               minx = Math.min(f1,minx);
               maxxx = Math.max(f1,maxxx);
               miny = Math.min(f2,miny);
               maxy = Math.max(f2,maxy);
            }
         }
         e++;
      }
   }
   _root.mapa._xscale = _root.mapa._yscale = 10000 / _root._xscale;
   _root.mapa._x = 130 - (maxxx + minx) / 2;
   _root.mapa._y = 40 - (maxy + miny) / 2;
   if(qq != "high")
   {
      _root._quality = qq;
   }
}
function outgrid(f1)
{
   var _loc1_ = f1 % rowz;
   var _loc2_ = Math.round(f1 / rowz - 0.5);
   xenf = _loc1_ * roxx;
   yenf = _loc2_ * roxx;
}
function ingrid(f1, f2, f3)
{
   if(f3)
   {
      f1 = Math.min(560,Math.max(80,f1));
      f2 = Math.min(400,Math.max(160,f2));
   }
   else
   {
      f1 = Math.min(620,Math.max(20,f1));
      f2 = Math.min(447,Math.max(110,f2));
   }
   f1 /= roxx;
   f2 /= roxx;
   f1 = Math.round(f1);
   f2 = Math.round(f2);
   f1 = Math.max(0,Math.min(rowz - 1,f1));
   f2 = Math.max(0,f2);
   return f1 + rowz * f2;
}
function gridp(f1, f2, f3, f4)
{
   f1 -= gridx;
   f2 -= gridy;
   if(f3 == undefined)
   {
      return [int(f1 / gridv + 1) * gridmax + 1,int(f2 / gridv) + 1];
   }
   return [int(f1 / gridv + 1 + f3) * gridmax + 1,int(f2 / gridv + f4) + 1];
}
function gridput(f5, f6)
{
   a = 0;
   while(grid.getPixel(f5[0],f5[1]) != 0 && a < gridmax)
   {
      f5[0] = f5[0] + 1;
      a++;
   }
   grid.setPixel(f5[0],f5[1],f6);
}
function gridput2(f5, f6)
{
   a = 0;
   while(grid2.getPixel(f5[0],f5[1]) != 0 && a < gridmax)
   {
      f5[0] = f5[0] + 1;
      a++;
   }
   grid2.setPixel(f5[0],f5[1],f6);
}
function topz(cap)
{
   timer[cap] = getTimer();
}
function tip(cap)
{
   alltimer[cap] += (getTimer() - timer[cap]) / 25;
}
function crand(f1)
{
   if(cra1 == undefined)
   {
      cra1 = Math.random() * 3.141592653589793 * 2;
      cra2 = f1;
      return Math.cos(cra1) * f1;
   }
   f1 = cra1;
   cra1 = undefined;
   return Math.sin(f1) * cra2;
}
function itzz(f1)
{
   var _loc2_ = f1 != 114 && f1 != 118 && f1 != 138 && f1 != 150 && f1 != 151 && f1 != 152 && f1 != 153 && f1 != 154 && f1 != 157 && f1 != 159 && f1 != 168 && f1 != 169 && f1 != 182 && f1 != 184 && f1 != 185 && f1 != 189 && f1 != 190 && f1 != 191 && f1 != 193 && f1 != 196 && f1 != 197;
   return f1 > 7 && f1 != 12 && f1 != 16 && f1 != 48 && f1 != 50 && f1 != 51 && f1 != 52 && f1 != 68 && f1 != 70 && f1 != 79 && f1 != 80 && f1 != 88 && f1 != 89 && f1 != 90 && f1 != 99 && f1 != 101 && f1 != 103 && f1 != 108 && f1 != 109 && f1 != 110 && _loc2_ || f1 == 5;
}
function itz(f1)
{
   if((f1 == 79 || f1 == 80 || f1 == 82 || f1 == 83 || f1 == 81 || f1 == 113 || f1 == 122 || f1 == 118 || f1 == 157 || f1 == 159 || f1 == 145) && _this.satan && !trixx(56))
   {
      _root.trg.d.d.gotoAndStop(10);
   }
   else if(_this.satan && _root.trg.d.d._currentframe == 10)
   {
      _root.trg.d.d.gotoAndStop(9);
   }
   if(_root.skiner == 4 && _this.satan)
   {
      _root.trg.d.d.gotoAndStop(11);
   }
   var _loc2_ = [8,67,95,99,100,113,163,167,174,188];
   var _loc4_ = false;
   for(o in _loc2_)
   {
      if(_loc2_[o] == f1)
      {
         _loc4_ = true;
      }
   }
   var _loc5_ = 0;
   if(_loc4_)
   {
      for(o in _loc2_)
      {
         _loc5_ += _root.ups[_loc2_[o]];
      }
   }
   wtftex = _root.wiptz;
   var _loc6_ = 1.2 + _root.wiptz * 3;
   if(_root.hardmode && _root.wiptz > 0)
   {
      _loc6_ *= 0.6;
      _loc6_ += _root.wiptz * _root.wiptz * 0.2;
   }
   if(_loc4_ && _loc5_ > 2)
   {
      return 0;
   }
   if(_root.ups[f1] || _root.colss[f1] && random(5) == 0)
   {
      return 0;
   }
   if(itzz(f1))
   {
      return f1;
   }
   if(1 / Math.max(0.2,_loc6_) > Math.random())
   {
      return f1;
   }
   return 0;
}
function giveit()
{
   var _loc2_ = 0;
   var _loc4_ = 0;
   while(_loc2_ == 0)
   {
      _loc4_ = _loc4_ + 1;
      if(_loc4_ > 100)
      {
         var _loc3_ = random(_root.ittt.length);
         _loc2_ = itz(_root.ittt[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt.splice(_loc3_,1);
         }
         if(_root.ittt.length <= 5)
         {
            itemzz();
         }
      }
      else if(_root.lev == _root.lib)
      {
         _loc3_ = random(_root.ittt9.length);
         _loc2_ = itz(_root.ittt9[_loc3_]);
         if(_loc2_ > 0)
         {
            if(lib == _loc3_)
            {
               _loc2_ = -1;
               lib = _loc3_;
            }
         }
      }
      else if(_root.ittt8.length > 0 && _root.lev == _root.chamb && !_root.altch)
      {
         _loc3_ = random(_root.ittt8.length);
         _loc2_ = itz(_root.ittt8[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt8.splice(_loc3_,1);
         }
      }
      else if((_root.ittt7.length > 0 && !_root.altsat || _root.ittt10.length > 0 && _root.altsat) && (_this.satan || _this.bummer == 2 || _root.lev == _root.cus) || _root.lev == _root.chamb && _root.altch == 2 && _root.ittt10.length > 0)
      {
         _this.bummer = false;
         if(_root.altsat || _root.lev == _root.chamb)
         {
            _loc3_ = random(_root.ittt10.length);
            _loc2_ = itz(_root.ittt10[_loc3_]);
         }
         else
         {
            _loc3_ = random(_root.ittt7.length);
            _loc2_ = itz(_root.ittt7[_loc3_]);
            if(_loc2_ > 0)
            {
               _root.ittt7.splice(_loc3_,1);
            }
         }
      }
      else if(_root.ittt6.length > 0 && treas && _root.chaps != 11)
      {
         _loc3_ = random(_root.ittt6.length);
         _loc2_ = itz(_root.ittt6[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt6.splice(_loc3_,1);
         }
      }
      else if((_root.lev == _root.shopl || _this.bummer) && _root.ittt4.length > 1)
      {
         _this.bummer = false;
         _loc3_ = random(_root.ittt4.length);
         _loc2_ = itz(_root.ittt4[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt4.splice(_loc3_,1);
         }
      }
      else if((_root.lev == _root.boner || _root.lev == _root.boner2) && random(2) == 0 && _root.ittt5.length > 1)
      {
         _loc3_ = random(_root.ittt5.length);
         _loc2_ = itz(_root.ittt5[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt5.splice(_loc3_,1);
         }
      }
      else if(_root.lev == _root.hide)
      {
         _loc3_ = random(_root.ittt3.length);
         _loc2_ = itz(_root.ittt3[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt3.splice(_loc3_,1);
         }
      }
      else if(_root.lev == _root.chamb && _root.altch)
      {
         _loc3_ = random(_root.ittt2.length);
         _loc2_ = itz(_root.ittt2[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt2.splice(_loc3_,1);
         }
      }
      else if(_root.lev == _root.bossl || _root.lev == _root.bossl2)
      {
         if(_root.chaps == 6 && _root.locker[74] && random(3) != 0 && !ups[139])
         {
            _loc2_ = 139;
         }
         else if(_root.bosss == 23 && _root.ittt7.length > 0)
         {
            e = 0;
            while(e < 100)
            {
               _loc3_ = _root.ittt7[random(_root.ittt7.length)];
               if(!ups[_loc3_])
               {
                  _loc2_ = _loc3_;
                  e = 1000;
               }
               e++;
            }
         }
         else if(_root.bosss == 38 && !ups[181])
         {
            _loc2_ = 181;
         }
         else if(_root.bosss == 22 && !ups[130])
         {
            _root.locker[32] = true;
            _loc2_ = 130;
         }
         else if(_root.bosss == 21 && !ups[96])
         {
            _root.locker[32] = true;
            _loc2_ = 96;
         }
         else if(_root.bosss == 19 && !ups[99])
         {
            _root.locker[30] = true;
            _loc2_ = 99;
         }
         else if(_root.bosss == 20 && (!ups[100] || !ups[50]))
         {
            _root.locker[31] = true;
            if(ups[100] || random(6) == 0)
            {
               _loc2_ = 50;
            }
            else
            {
               _loc2_ = 100;
            }
         }
         else if(_root.bosss > 8 && _root.bosss < 13)
         {
            _root.locker[7] = true;
            _loc2_ = 73;
         }
         else
         {
            _loc3_ = random(_root.ittt2.length);
            _loc2_ = itz(_root.ittt2[_loc3_]);
            if(_loc2_ > 0)
            {
               _root.ittt2.splice(_loc3_,1);
            }
         }
      }
      else
      {
         _loc3_ = random(_root.ittt.length);
         _loc2_ = itz(_root.ittt[_loc3_]);
         if(_loc2_ > 0)
         {
            _root.ittt.splice(_loc3_,1);
         }
      }
   }
   return _loc2_;
}
function speco(trg, b1)
{
   trg.uncol = 200 + fra;
   if(trg.specoz)
   {
      var _loc2_ = trg.specoz;
      if(trg.specoz == 23)
      {
         switch(trg.s)
         {
            case 94:
            case 85:
            case 80:
            case 18:
               colorit(trg,1,1,1,0,0,0);
               break;
            case 81:
            case 10:
            case 54:
            case 101:
               colorit(trg,15,15,15,0,0,0);
               break;
            case 46:
            case 55:
               colorit(trg,15,15,15,0,0,0);
               break;
            case 78:
               colorit(trg,7,7,7,0,0,0);
               break;
            case 36:
            case 74:
            case 75:
            case 76:
               colorit(trg,5.5,5.5,5.5,0,0,0);
               break;
            case 99:
               colorit(trg,5.2,5.2,5.2,0,0,0);
               break;
            case 45:
            case 52:
               colorit(trg,2,2,2,0,0,0);
               break;
            case 25:
               colorit(trg,5,5,5,0,0,0);
               break;
            case 61:
               colorit(trg,7,7,7,0,0,0);
               break;
            case 65:
            case 24:
               colorit(trg,5,8,8,0,0,0);
               break;
            case 69:
               colorit(trg,5,15,15,0,0,0);
               break;
            case 15:
               if(trg.alter == 2)
               {
                  colorit(trg,5.5,5.5,5.5,0,0,0);
               }
               else
               {
                  colorit(trg,3,6,6,0,0,0);
               }
               break;
            case 100:
               if(altboss)
               {
                  colorit(trg,7.5,7.5,7.5,0,0,0);
               }
               else
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               break;
            case 64:
               colorit(trg,5,3,5,0,0,0);
               break;
            case 27:
               if(trg.alter == 2)
               {
                  colorit(trg,6,6,6,0,0,0);
               }
               else
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               break;
            case 28:
               if(altboss == 1)
               {
                  colorit(trg,65,65,65,0,0,0);
               }
               else
               {
                  colorit(trg,1.5,1.5,1.5,0,0,0);
               }
               break;
            case 30:
            case 88:
               if(trg.alter == 2 || trg.alter == 3)
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               else
               {
                  colorit(trg,6,6,6,0,0,0);
               }
               break;
            case 71:
            case 72:
            case 73:
               if(altboss)
               {
                  colorit(trg,10,10,10,0,0,0);
               }
               else
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               break;
            case 43:
               colorit(trg,7,7,7,0,0,0);
               break;
            case 87:
            case 84:
               colorit(trg,4.5,4.5,4.5,0,0,0);
               break;
            case 62:
               if(altboss)
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               else
               {
                  colorit(trg,3,4.5,4.5,0,0,0);
               }
               break;
            case 79:
               if(altboss == 1)
               {
                  colorit(trg,3,3,3,160,160,160);
               }
               else
               {
                  colorit(trg,3,3,3,0,0,0);
               }
               break;
            case 102:
               colorit(trg,2,2,2,0,0,0);
               break;
            default:
               colorit(trg,3,3,3,0,0,0);
         }
      }
      else if(specol2[_loc2_].length > 4)
      {
         colorit(trg,specol2[_loc2_][0],specol2[_loc2_][1],specol2[_loc2_][2],specol2[_loc2_][3],specol2[_loc2_][4],specol2[_loc2_][5]);
      }
      else
      {
         colorit(trg,specol2[_loc2_][0],specol2[_loc2_][1],specol2[_loc2_][2],0,0,0);
      }
   }
   else if(trg.special || trg.specozz)
   {
      _loc2_ = trg.specol;
      colorit(trg,specol[_loc2_][0],specol[_loc2_][1],specol[_loc2_][2],0,0,0);
   }
   else
   {
      colorit(trg,1,1,1,0,0,0);
   }
   if(!b1)
   {
      if(pacman)
      {
         trg.uncol = unic + fra + 1;
         colorit(trg,trg.colo.redMultiplier * 0.6,trg.colo.greenMultiplier * 0.7,trg.colo.blueMultiplier * 1.3,trg.colo.redOffset * 0.6,trg.colo.greenOffset * 0.6,trg.colo.blueOffset * 0.6);
      }
      else if(trg.frezz > 0)
      {
         trg.uncol = trg.frezz + fra + 2;
         colorit(trg,trg.colo.redMultiplier * 0.52,trg.colo.greenMultiplier * 0.52,trg.colo.blueMultiplier * 0.52,60 + trg.colo.redOffset * 0.6,60 + trg.colo.greenOffset * 0.6,60 + trg.colo.blueOffset * 0.6);
      }
      else if(trg.poiss > 0 && trg.s != 64 && trg.s != 46)
      {
         _loc2_ = Math.max(0.6,(200 - trg.poiss) / 200 - 0.1);
         if(trg.specoz == 23)
         {
            trg.colo.blueMultiplier *= _loc2_;
            trg.colo.redMultiplier *= _loc2_;
         }
         colorit(trg,trg.colo.redMultiplier * (_loc2_ * 0.25 + 0.75),trg.colo.greenMultiplier * 0.9 + 0.2 * (1 - _loc2_),trg.colo.blueMultiplier * (_loc2_ * 0.25 + 0.75),trg.colo.redOffset * 0.6,trg.colo.greenOffset * 0.6 + 20 + (1 - _loc2_) * 90,trg.colo.blueOffset * 0.6);
      }
      else if(trg.alter == 2 && trg.s == 42)
      {
         colorit(trg,0.66,1,0.74,0,0,0);
      }
      else if(trg.spid > 0)
      {
         if(trg.spida == 2)
         {
            colorit(trg,0.5,0.5,0.5,-100,-100,-100);
         }
         else
         {
            colorit(trg,trg.colo.redMultiplier * 0.5,trg.colo.greenMultiplier * 0.5,trg.colo.blueMultiplier * 0.5,150 + trg.colo.redOffset * 0.45,150 + trg.colo.greenOffset * 0.45,150 + trg.colo.blueOffset * 0.45);
         }
         trg.uncol = fra + 10;
      }
   }
}
function momlo()
{
   if(trrisss + 45 + random(120) <= fra)
   {
      trrisss = fra;
      _root.soundy("Mom_Vox_Isaac_" + random(3) + ".mp");
   }
   mome = random(4);
   if(mome >= 2)
   {
      mome++;
   }
   moml = fra + 30;
   mom[mome].d.gotoAndStop(2);
}
function atta(f7)
{
   return (f7 >= 7 || f7 <= 2 || f7 == 4 || f7 == 5 || f7 == 3) && f7 != 37 && f7 != 33;
}
function trgdy(f1)
{
   if(f1)
   {
      var _loc1_ = Math.max(0,8.5 + trg.dy);
      trg.d._y = trg.dy * 0.5 - 15 + _loc1_ * _loc1_;
      if(trg.ba)
      {
         trg.d._y += 5;
      }
   }
   else
   {
      trg.d._y = trg.dy;
   }
   if(trg.d._xscale == 100)
   {
      trg.d.sh._y = - trg.d._y;
   }
   else
   {
      trg.d.sh._y = (- trg.d._y) / trg.d._xscale * 100;
   }
}
function attach(trg, f7)
{
   if(atta(f7))
   {
      trg.gotoAndStop(1);
      if(f7 == 72 || f7 == 73)
      {
         f7 = 71;
      }
      if(f7 == 75 || f7 == 76 || f7 == 77)
      {
         f7 = 74;
      }
      if(f7 == 7 && _root.chaps > 6 && _root.chaps != 9)
      {
         f7 = "gibs-red";
      }
      else
      {
         f7 = "b" + f7;
      }
      trg.attachMovie(f7,"d",30);
   }
   else
   {
      trg.gotoAndStop(f7);
   }
}
function abr()
{
   if(fra2)
   {
      return "A";
   }
   return "B";
}
function efly(trg)
{
   var _loc1_ = create(trg.xp + 0.2,trg.yp + 0.2,0,0,0,0,96);
   _loc1_.efly = true;
   _loc1_.trg2 = trg;
   _loc1_.outway = true;
   _loc1_.wtf = flyer++;
   return _loc1_;
}
function create(f1, f2, f3, f4, f5, f6, f7, f9)
{
   var _loc5_ = f7;
   ballz++;
   var _loc13_ = "b" + ballz;
   var _loc11_ = ball.length;
   var _loc8_ = 0;
   if(_loc11_ == 0)
   {
      _loc8_ = ballz + 20000;
   }
   else
   {
      _loc8_ = ballz + 10000;
   }
   f18 = false;
   if(f7 == 33.1)
   {
      f7 == 33;
      f18 = true;
      _loc8_ = 323;
   }
   else if(f7 == 33)
   {
      _loc8_ = 322;
   }
   f7 = Math.round(f7);
   _loc5_ -= f7;
   var _loc10_ = atta(f7);
   namer2 = "ball";
   if(f7 == 9)
   {
      namer2 = "bullet1";
      _loc10_ = false;
   }
   if(_loc10_)
   {
      namer2 = "emptyz";
   }
   ball[_loc11_] = attachMovie(namer2,_loc13_,_loc8_);
   var _loc2_ = ball[_loc11_];
   if(f18)
   {
      _loc2_.holi = true;
   }
   if(f7 > 9 && f7 != 33)
   {
      spuz++;
      _loc2_.spuz = spuz;
   }
   _loc2_.mhp = _loc2_.hp = hps[f7];
   if(f7 == 5 && _loc5_ > 0.04)
   {
      while(enfcheckx(f1,f2,320,280,1000) && !enfcheck(f1 * 0.5 + 160,f2,320,280,100))
      {
         posw(f1,f2,20);
         f1 = xenf;
         f2 = yenf;
      }
   }
   _loc2_.e = ballz;
   _loc2_.xp = f1;
   _loc2_.yp = f2;
   _loc2_.rp = f3;
   _loc2_.ma = masses[f7];
   _loc2_.sss = f9;
   switch(f9)
   {
      case 42:
         _root.soundy("stoneshoot" + random(3) + ".wav");
         break;
      case 12:
      case 26:
         if(_loc2_.alter != 3)
         {
            _root.soundy("Shakey_Kid_Roar_" + random(3) + ".mp",100);
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
         _root.soundy("meatheadshoot" + fra % 3 + ".wav");
         break;
      case 69:
         _root.soundy("Cute_Grunt_" + random(3) + ".mp",100);
         break;
      case 63:
      case 64:
      case 65:
      case 66:
         _root.soundy("Monster_Grunt_0_" + abr() + ".mp",100);
         break;
      case 38:
   }
   _loc2_.xbew = _loc0_ = f4 + Math.random() * 0.01;
   _loc2_.xb = _loc0_;
   _loc2_.ybew = _loc0_ = f5 + Math.random() * 0.01;
   _loc2_.xb = _loc0_;
   _loc2_.s = f7;
   _loc2_.e = ballz;
   if(_loc10_)
   {
      attach(_loc2_,Math.round(f7));
   }
   else
   {
      _loc2_.gotoAndStop(f7);
      if(_loc2_.holi)
      {
         _loc2_.gotoAndStop(32);
      }
   }
   _loc2_.sca = 1;
   _loc2_.fra = fra;
   refl = [];
   _loc2_.spl = 0;
   _loc2_.bh = true;
   _loc2_.rr = 1;
   if(_loc2_.s == 49)
   {
      _loc2_.alter = 1;
   }
   _loc2_.apf = _loc2_.s <= 5 || _loc2_.s == 19 || _loc2_.s == 20 || _loc2_.s == 33 || _loc2_.s == 36 || _loc2_.s == 43 || _loc2_.s == 28 || _loc2_.s == 45 || _loc2_.s == 53 || _loc2_.s == 62 || _loc2_.s >= 72 && _loc2_.s <= 77 || _loc2_.s == 78 || _loc2_.s == 84 || _loc2_.s == 101;
   _loc2_.minb = _loc2_.s > 45 && _loc2_.s < 53;
   if(_root.specol[_root.lev][_loc2_.spuz] < 23 && _root.specol[_root.lev][_loc2_.spuz] > -1)
   {
      _loc2_.special = _root.specol[_root.lev][_loc2_.spuz];
      _loc2_.specol = _root.specol[_root.lev][_loc2_.spuz];
   }
   if(!_root.beenlev2[_root.lev] && !gospo)
   {
      if(f7 > 9 && f7 != 13 && f7 != 18 && f7 != 20 && f7 != 28 && f7 != 33 && f7 != 35 && f7 != 36 && f7 != 37 && f7 != 42 && f7 != 19 && f7 != 43 && f7 != 44 && f7 != 45 && fra < 10 && !_loc2_.minb && f7 < 62)
      {
         _loc2_.special = _loc0_ = random(20) == 0;
         _root.specol[_root.lev][_loc2_.spuz] = _loc0_;
      }
   }
   var _loc9_ = _loc2_.minb;
   f2 = f7 == 15 || f7 == 29 || f7 == 61 || f7 == 38 || f7 == 35 || f7 == 88 || f7 == 44 || f7 == 39 || f7 == 57 || f7 == 42 || f7 == 30 || _loc9_;
   f1 = f7 == 41 || f7 == 55 || f7 == 60 || f7 == 53;
   if(_loc5_ && f7 == 28)
   {
      altboss = 2;
   }
   if(_loc5_ && (f7 == 100 || f7 == 67 || f7 == 68 || f7 == 62 || f7 == 19))
   {
      altboss = 1;
   }
   if(_root.alto[_root.lev][_loc2_.spuz] == 2)
   {
      _loc5_ = 0.1;
   }
   else if(_root.alto[_root.lev][_loc2_.spuz] == 3)
   {
      _loc5_ = 0.2;
   }
   if(f7 == 16 || f7 == 27 || f7 == 25 || f7 == 26 || f7 == 24 || f7 == 14 || f2 || f1)
   {
      if((_loc5_ > 0.15 || random(100) == 0 && !gospo) && (f7 == 26 || f7 == 15 || f7 == 30 || f7 == 88 || f7 == 16 || f7 == 39 || f7 == 55))
      {
         _loc2_.alter = 3;
         if(f7 == 26 || f7 == 55)
         {
            trg2 = efly(_loc2_);
         }
      }
      else if((_loc5_ || random(21) == 0 && !gospo && !f1 || random(25) == 0 && !f2 || random(100) == 0 && !_loc9_) && f7 != 15)
      {
         if(f7 == 46 && flox.s == 38)
         {
            flox.minb = 3;
            _loc2_.minb = 3;
            flox.alter = 3;
            _loc2_.alter = 3;
            _loc2_._xscale *= 1.6;
            _loc2_._yscale *= 1.6;
            if(flox.special)
            {
               flox._xscale = 133;
               flox._yscale = 133;
               flox.special = undefined;
               speco(flox);
            }
            else
            {
               flox._xscale *= 1.33;
               flox._yscale *= 1.33;
            }
            _loc2_.hp *= 2;
            _loc2_.mhp = _loc2_.hp;
            flox.hp *= 1.5;
            if(flox.eternal)
            {
               flox.hp *= 0.6;
            }
            flox.mhp = flox.hp;
         }
         else
         {
            _loc2_.alter = 2;
            if(_loc9_)
            {
               _loc2_.minb = 2;
               _loc2_._xscale *= 1.25;
               _loc2_._yscale *= 1.25;
               f1 = 1.5;
               switch(_loc2_.s)
               {
                  case 48:
                     f1 = 1.3;
                     break;
                  case 49:
                     f1 = 1.6;
                     break;
                  case 51:
                     if(fra < 30)
                     {
                        _loc2_.specol = 8;
                        _loc2_.specozz = true;
                        speco(_loc2_);
                     }
                     f1 = 1;
                     break;
                  case 52:
                     _loc2_.specol = 9;
                     _loc2_.specozz = true;
                     speco(_loc2_);
                     f1 = 1;
               }
               _loc2_.hp *= f1;
               _loc2_.mhp = _loc2_.hp;
            }
         }
      }
      else
      {
         _loc2_.alter = 1;
      }
      if((f7 == 38 || f7 == 14) && _loc2_.alter == 2)
      {
         _loc2_.hp *= 1.5;
         _loc2_.mhp = _loc2_.hp;
      }
      if(f7 == 57 && _loc2_.alter == 2 || _loc2_.s == 55 && _loc2_.alter == 3)
      {
         _loc2_.hp *= 1.25;
         _loc2_.mhp = _loc2_.hp;
      }
      if(f7 == 29 && _loc2_.alter == 2)
      {
         _loc2_.hp *= 1.5;
         _loc2_.mhp = _loc2_.hp;
         _loc2_.wait = 0;
      }
      if(f1 && _loc2_.alter == 2)
      {
         _loc2_.hp *= 1.25;
         _loc2_.mhp = _loc2_.hp;
         if(_root.chaps < 9)
         {
            _loc2_.hallo = true;
         }
      }
   }
   _root.alto[_root.lev][_loc2_.spuz] = _loc2_.alter;
   if(f7 == 90)
   {
      _loc2_.alter = random(4) + 1;
      efly(_loc2_);
   }
   if(f7 == 15 && _loc2_.alter != 3)
   {
      if(altboss == 2 || _loc5_ > 0.15)
      {
         _loc2_.alter = 3;
      }
      else if(altboss || _loc5_)
      {
         _loc2_.alter = 2;
      }
      else
      {
         _loc2_.alter = 1;
      }
   }
   if(f7 == 81)
   {
      if(_loc5_)
      {
         _loc2_.alter = 2;
         _loc2_.hp *= 1.1;
         _loc2_.mhp = _loc2_.hp;
         f4 = ["Isaac","Magdalene","Cain","Judas","???","Eve","Samson"];
         st11(f4[_root.skiner] + " vs " + "Krampus");
      }
      else
      {
         _loc2_.alter = 1;
      }
   }
   if((fra < 30 || _root.lev == _root.chamb) && _root.lev != _root.bossl && _root.lev != _root.bossl2 && !gospo || mheart && spezz == 23 || allets || _root.specol[_root.lev][_loc2_.spuz] == 23 || _root.specol[_root.lev][_loc2_.spuz] == 23.1)
   {
      if(f7 == 10 || f7 == 11 || f7 == 14 || f7 == 12 || f7 == 15 || f7 == 16 || f7 == 21 || f7 == 22 || f7 == 23 || f7 == 24 || f7 == 25 || f7 == 26 || f7 == 27 || f7 == 29 || f7 == 31 || f7 == 30 || f7 == 32 || f7 == 34 || f7 == 38 || f7 == 39 || f7 == 40 || f7 == 41 || f7 == 46 || f7 == 47 || f7 == 48 || f7 == 49 || f7 == 50 || f7 == 51 || f7 == 52 || f7 == 54 || f7 == 55 && _loc2_.alter == 2 || f7 == 56 || f7 == 57 || f7 == 58 || f7 == 59 || f7 == 60 || f7 == 61 || f7 == 80 || f7 == 86 || f7 == 87 || f7 == 88 || f7 == 89 || f7 == 90 || f7 == 91 || f7 == 92 || f7 == 94 || f7 == 77 && fra < 20)
      {
         f1 = 0;
         if(f7 == 80 || f7 == 30 || f7 == 57)
         {
            f1 = 1;
         }
         if((random(4) + random(4) + f1 < _root.eterns * 0.48 - thistern && spezz != 23 || mheart && spezz == 23 || allets || _root.specol[_root.lev][_loc2_.spuz] == 23 || _root.specol[_root.lev][_loc2_.spuz] == 23.1) && !noet && (_loc2_.s != 77 || random(30) == 0))
         {
            if(f7 == 14 || f7 == 80 || f7 == 12 || f7 == 31 || f7 == 40 || f7 == 56 || f7 == 61 || f7 == 89)
            {
               f1 = 0.25;
            }
            else
            {
               f1 = 0.5;
            }
            if(f7 == 26 && _loc2_.alter == 3)
            {
               trg3 = efly(_loc2_);
               trg4 = efly(_loc2_);
               trg2.wtf *= 1.5;
               trg3.wtf *= 1.5;
               trg4.wtf *= 1.5;
            }
            if(f7 == 60)
            {
               if(_loc2_.alter > 1)
               {
                  _loc2_.alter = 1;
               }
               _loc2_.hp *= 1.1;
            }
            if(!gospo)
            {
               if(_root.lev != _root.chamb || _root.altch != 2)
               {
                  _root.eterns -= f1;
               }
               if(f7 == 30 || f7 == 57)
               {
                  f1 *= 2.2;
               }
               thistern += f1 * 4;
            }
            if(f7 == 40)
            {
               _loc2_.fire = 10;
            }
            b1 = random(5) == 0 && f7 == 22;
            if(b1 && _root.specol[_root.lev][_loc2_.spuz] != 23 || _root.specol[_root.lev][_loc2_.spuz] == 23.1)
            {
               _root.specol[_root.lev][_loc2_.spuz] == 23.1;
               _loc2_.specoz = 23;
               _loc2_.eternal = 2;
               _loc2_.bossheart = true;
               _loc2_.showbar = true;
            }
            else
            {
               _loc2_.specoz = _loc0_ = 23;
               _root.specol[_root.lev][_loc2_.spuz] = _loc0_;
               _loc2_.eternal = true;
            }
            _loc2_.etdrop = !mheart && (_root.lev != _root.chamb || _root.altch != 2);
            speco(_loc2_);
            if(_root.chaps < 3)
            {
               _loc2_.hp += 3.25;
               _loc2_.hp *= 1.275;
               _loc2_.mhp = _loc0_;
            }
            else
            {
               _loc2_.hp += 2;
               _loc2_.hp *= 2.1;
               _loc2_.mhp = _loc0_;
            }
            if(_loc2_.minb)
            {
               if(_root.chaps < 3)
               {
                  _loc2_.hp *= 0.75;
                  _loc2_.mhp = _loc0_;
               }
               _loc2_.specol = undefined;
               _loc2_.specozz = undefined;
               speco(_loc2_);
               if(_loc2_.alter == 2)
               {
                  _loc2_._yscale *= 1.3;
                  _loc2_._xscale = _loc0_;
               }
               else
               {
                  _loc2_._yscale *= 1.2;
                  _loc2_._xscale = _loc0_;
               }
               if(_loc2_.minb == 3)
               {
                  _loc2_.hp *= 0.4;
                  _loc2_.mhp = _loc0_;
               }
            }
            switch(f7)
            {
               case 80:
                  attach(_loc2_,"80-");
                  _loc2_.etdrop = false;
                  break;
               case 25:
                  _loc2_._yscale *= 1.4;
                  _loc2_._xscale = _loc0_;
                  break;
               case 27:
                  if(_loc2_.alter != 2)
                  {
                     _loc2_._yscale *= 0.8;
                     _loc2_._xscale = _loc0_;
                     _loc2_.hp *= 0.6;
                     _loc2_.mhp = _loc0_;
                  }
                  break;
               case 34:
               case 29:
               case 54:
                  _loc2_.hp *= 1.4;
                  _loc2_.mhp = _loc0_;
                  break;
               case 16:
                  _loc2_.hp *= 2;
                  _loc2_.mhp = _loc0_;
                  break;
               case 94:
                  attach(_loc2_,"94-");
                  _loc2_._yscale *= 1.7;
                  _loc2_._xscale = _loc0_;
                  break;
               case 10:
                  _loc2_._yscale *= 0.9;
                  _loc2_._xscale = _loc0_;
                  break;
               case 14:
                  if(_loc2_.alter == 2)
                  {
                     _loc2_._yscale *= 1.3;
                     _loc2_._xscale = _loc0_;
                  }
                  else
                  {
                     _loc2_._yscale *= 1.4;
                     _loc2_._xscale = _loc0_;
                  }
                  _loc2_.hp *= 2.2;
                  _loc2_.mhp = _loc0_;
                  break;
               case 58:
                  _loc2_._yscale *= 1.4;
                  _loc2_._xscale = _loc0_;
                  _loc2_.hp *= 2.2;
                  _loc2_.mhp = _loc0_;
                  break;
               case 77:
                  _loc2_.bossheart = true;
                  sizes[_loc2_.s] = 18;
                  _loc2_._yscale *= 3;
                  _loc2_._xscale = _loc0_;
                  _loc2_.hp *= 1.8;
                  _loc2_.mhp = _loc0_;
                  break;
               case 24:
                  _loc2_.rest = 0;
                  break;
               case 56:
                  _loc2_._yscale *= 1.15;
                  _loc2_._xscale = _loc0_;
                  break;
               case 89:
                  _loc2_.mhp = _loc2_.hp * 5;
                  _loc2_._yscale *= 1.3;
                  _loc2_._xscale = _loc0_;
                  break;
               case 22:
                  if(_loc2_.eternal == 2)
                  {
                     _loc2_.hp *= 1.7;
                     _loc2_.mhp = _loc0_;
                     _loc2_._yscale *= 1.3;
                     _loc2_._xscale = _loc0_;
                     trg2 = efly(_loc2_);
                     trg3 = efly(_loc2_);
                     trg2.wtf *= 6;
                     trg3.wtf *= 6;
                  }
                  else
                  {
                     _loc2_._yscale *= 0.9;
                     _loc2_._xscale = _loc0_;
                  }
                  break;
               case 61:
                  _loc2_.hp *= 0.4;
                  _loc2_.mhp = _loc0_;
               case 15:
               case 16:
               case 30:
               case 55:
                  _loc2_._yscale *= 1.3;
                  _loc2_._xscale = _loc0_;
            }
         }
      }
   }
   if(f7 == 54)
   {
      _loc2_.alter = 1;
   }
   f1 = [];
   if(_root.locker[3] || _root.lev % 4 == 0 || _root.hardmode)
   {
      if(altboss)
      {
         switch(f7)
         {
            case 67:
               f1 = [16,19];
               break;
            case 19:
               if(f155 == undefined)
               {
                  f155 = random(3) == 0;
               }
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [16,3];
                  if(f155)
                  {
                     f1 = [21];
                  }
               }
               break;
            case 28:
               if((!wtfe || spezz) && altboss == 2)
               {
                  wtfe = true;
                  f1 = [22];
               }
               break;
            case 68:
               f1 = [3];
               break;
            case 62:
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [16];
               }
         }
      }
      else
      {
         switch(f7)
         {
            case 98:
               f1 = [18];
               break;
            case 99:
               f1 = [21,7];
               break;
            case 100:
               f1 = [18,20];
               break;
            case 45:
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [19,7];
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
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [18];
               }
               break;
            case 71:
            case 72:
            case 73:
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [15];
               }
               break;
            case 43:
               if(!altboss)
               {
                  f1 = [14];
               }
               break;
            case 68:
               f1 = [12,13];
               break;
            case 36:
               f1 = [11];
               break;
            case 28:
               if((!wtfe || spezz) && !altboss)
               {
                  wtfe = true;
                  f1 = [8,9];
               }
               break;
            case 19:
               if(!wtfe || spezz)
               {
                  wtfe = true;
                  f1 = [3,7];
               }
               break;
            case 67:
               f1 = [5,6];
               break;
            case 79:
               if((i == 0 || spezz) && !altboss)
               {
                  f1 = [3,4];
               }
               break;
            case 20:
               f1 = [1,2];
         }
      }
      gobo = false;
      if(((spezz == 23 || !noetern && !spezz && _root.hardmode) && (!gospo || fra > 10) || allets) && (_root.hardmode || _root.locker[42]))
      {
         if(_loc2_.s == 81 || _loc2_.s == 82 || _loc2_.s == 83 || _loc2_.s == 69 || _loc2_.s == 64 || _loc2_.s == 65 || _loc2_.s == 66 || _loc2_.s == 63 || _loc2_.s == 100 || _loc2_.s == 20 || _loc2_.s == 68 || _loc2_.s == 67 || _loc2_.s == 97 || _loc2_.s == 98 || f7 == 71 || f7 == 19 || f7 == 28 || f7 == 36 || f7 == 43 || f7 == 45 || f7 == 62 || f7 == 74 || f7 == 78 || f7 == 84 || f7 == 79 || f7 == 99 || f7 > 99)
         {
            gobo = true;
            if((random(6) + random(2) < _root.eterns * 0.7 && (random(3) != 0 || _root.lev == _root.bossl || _root.lev == _root.bossl2) || f7 == 45) && fra < 10 || spezz == 23 || (_root.chaps == 6 || _root.chaps > 7) && _root.lev == _root.bossl || allets)
            {
               if(spezz != 23)
               {
                  if(!gospo)
                  {
                     if(_root.lev != _root.chamb || _root.altch != 2)
                     {
                        _root.eterns = _root.eterns - 1;
                     }
                     thistern += 3;
                  }
               }
               f1.unshift(23);
               spezz = 23;
               _loc2_.eternal = true;
            }
            noetern = true;
         }
         if(f7 == 28 && spezz != 23)
         {
            noetern = true;
         }
      }
      if(f1.length > 0 && (fra < 40 || spezz) && !gospo)
      {
         if(spezz)
         {
            if(f1[0] == spezz || f1[1] == spezz || f1[2] == spezz || f1[3] == spezz || f1[4] == spezz)
            {
               _loc2_.specoz = spezz;
            }
         }
         else if(i == 0)
         {
            if(_root.locker[42])
            {
               f2 = random(5);
            }
            else
            {
               f2 = random(10);
            }
            if(_loc2_.s == 19)
            {
               f2 += random(5);
            }
            if(f2 <= f1.length)
            {
               _loc2_.specoz = _loc0_ = f1[f2];
               spezz = _loc0_;
            }
         }
      }
      if(!gospo)
      {
         if(gobo)
         {
            _root.specol[_root.lev][_loc2_.spuz] = - _loc2_.specoz;
         }
      }
      else if(!gobo)
      {
         if(_root.specol[_root.lev][_loc2_.spuz] < 0)
         {
            _loc2_.specoz = - _root.specol[_root.lev][_loc2_.spuz];
            if(spezz == undefined)
            {
               spezz = _loc2_.specoz;
            }
         }
      }
   }
   if(f7 == 102 && _loc2_.specoz == 23)
   {
      _loc2_._yscale *= 1.1;
      _loc2_._xscale = _loc0_;
   }
   if(_loc2_.s == 84 && _loc2_.specoz == 23 && !groso)
   {
      groso = true;
      hps[84] *= 2.5;
      _loc2_.hp = _loc0_ = hps[84];
      _loc2_.mhp = _loc0_;
   }
   if(_loc2_.s == 99 && _loc2_.specoz == 23 && _root.chaps < 3)
   {
      hps[99] *= 0.8;
      _loc2_.hp = _loc0_ = hps[99];
      _loc2_.mhp = _loc0_;
   }
   if(_loc2_.s == 42)
   {
      speco(_loc2_);
   }
   if(_loc2_.specoz)
   {
      speco(_loc2_);
      _loc2_.special = false;
      if(_loc2_.s == 45)
      {
         if(_loc2_.specoz == 7)
         {
            _loc2_.mhp *= 0.85;
            _loc2_.hp *= 0.85;
         }
      }
      else
      {
         specoo(_loc2_);
      }
   }
   if(_loc2_.special)
   {
      if(_loc2_.specol == undefined)
      {
         _loc2_.specol = _loc0_ = random(specol.length);
         _root.specol[_root.lev][_loc2_.spuz] = _loc0_;
      }
      speco(_loc2_);
      _loc2_.hp *= 2;
      _loc2_._xscale *= 1.15;
      _loc2_._yscale *= 1.15;
   }
   if(f7 == 38)
   {
      flox = _loc2_;
   }
   if(f7 == 28)
   {
      nomag = 0;
   }
   _loc2_.imba = _loc2_.s == 42 || _loc2_.s == 44;
   switch(f7)
   {
      case 102:
         _loc2_.state = 0;
         _loc2_.xpp = _loc2_.xp;
         _loc2_.ypp = _loc2_.yp;
         break;
      case 89:
         _loc2_.lar = 0;
         break;
      case 19:
         if(altboss)
         {
            f1 = 1.3;
            _loc2_.hp *= f1;
            _loc2_.mhp *= f1;
         }
         _loc2_.lar = 0;
         break;
      case 67:
         if(_loc2_.specoz == 23)
         {
            trg2 = efly(_loc2_);
            trg3 = efly(_loc2_);
            trg4 = efly(_loc2_);
            trg2.wtf *= 4;
            trg3.wtf *= 4;
            trg4.wtf *= 4;
            if(altboss)
            {
               trg2 = efly(_loc2_);
               trg3 = efly(_loc2_);
               trg4 = efly(_loc2_);
               trg2.wtf *= 4;
               trg3.wtf *= 4;
               trg4.wtf *= 4;
            }
         }
      case 65:
         if(altboss)
         {
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
         boils = 0;
         if(altboss)
         {
            f1 = 0.85;
         }
         else
         {
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
         if(altboss)
         {
            _loc2_.hp *= 0.5;
            _loc2_.mhp *= 0.5;
            if(!swag)
            {
               swag = true;
               spaw(_loc2_.xp,_loc2_.yp,100,69);
            }
         }
         break;
      case 74:
      case 75:
      case 76:
         if(_loc2_.specoz == 23)
         {
            _loc2_._yscale *= 1.3;
            _loc2_._xscale = _loc0_;
            _loc2_.hp *= 1.5;
            _loc2_.mhp = _loc0_;
         }
         sizes[74] = 63;
         break;
      case 71:
      case 72:
      case 73:
      case 67:
         _loc2_.flyby = 2;
         if(altboss)
         {
            _loc2_.hp *= 1.8;
            _loc2_.mhp *= 1.8;
         }
         break;
      case 79:
         _loc2_.fire = 0;
         break;
      case 97:
         altboss = false;
         trg2 = spaw(_loc2_.xp,_loc2_.yp,40,98);
         _loc2_.trg2 = trg2;
         _loc2_.imba = true;
         _loc2_.xbeww = _loc2_.xbew;
         _loc2_.ybeww = _loc2_.ybew;
         break;
      case 92:
         hearts.push(_loc2_);
         break;
      case 93:
         _loc2_.trg2 = masks.length;
         masks.push(_loc2_);
         _loc2_.imba = true;
         _loc2_.xbeww = _loc2_.xbew;
         _loc2_.ybeww = _loc2_.ybew;
         break;
      case 44:
         _loc2_.xp = _loc0_ = xenf;
         _loc2_.xppp = _loc0_;
         _loc2_.yp = _loc0_ = yenf;
         _loc2_.yppp = _loc0_;
      case 89:
         f1 = ingrid(_loc2_.xp,_loc2_.yp);
         outgrid(f1);
         break;
      case 85:
         if(fra > 20)
         {
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
         if(_loc2_.specoz == 23)
         {
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
         if(altboss)
         {
            _loc2_.hp *= 0.35;
            _loc2_.mhp *= 0.35;
         }
         else
         {
            _loc2_.hp *= 1.35;
            _loc2_.mhp *= 1.35;
         }
         _loc2_.dy = _loc2_.d._y;
         _loc2_.worm = 1;
         _loc2_.outway = true;
         break;
      case 78:
         _root.soundy("Mom_Vox_Filtered_Isaac_" + random(3) + ".mp");
         player.xp = 320;
         player.yp = 370;
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
         if(_root.pilc != 25)
         {
            player.xp = 320;
            player.yp = 370;
         }
         _loc2_.spl = 0;
         _loc2_.outway = true;
         _loc2_.d.gotoAndStop(1);
         break;
      case 42:
         _loc2_.xpp = _loc2_.xp;
         _loc2_.ypp = _loc2_.yp;
         _loc2_.til = ingrid(_loc2_.xp,_loc2_.yp);
         levz[_loc2_.til] = 3;
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
         player.xp = 320;
         player.yp = 400;
         if(_loc2_.specoz == 23)
         {
            _loc2_._xscale *= 0.85;
            _loc2_._yscale = _loc0_;
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
         if(_loc2_.specoz == 23)
         {
            _loc2_.mhp = _loc0_ = hps[_loc2_.s];
            _loc2_.hp = _loc0_;
         }
         else if(!_loc5_)
         {
            _loc2_.hp = hps[_loc2_.s] * Math.random();
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
         if(altboss == 2)
         {
            chubber = 0;
            if(_loc2_.specoz != 23)
            {
               _loc2_.hp *= 0.5;
               _loc2_.mhp *= 0.5;
            }
         }
         _loc2_.fail2 = 0;
         _loc2_.beenx = [_loc2_.xp];
         _loc2_.beeny = [_loc2_.yp];
         break;
      case 4:
         _loc2_.lfra = fra;
         _loc2_.spl = -10;
         break;
      case 16:
         _loc2_.noco = 0;
         break;
      case 5:
         _loc2_.ph = true;
         _loc2_.bh = false;
         _loc2_.d.gotoAndStop(Math.max(1,Math.round(_loc5_ * 100 - 0.499)));
         if(_loc2_.d._currentframe > 10 && _loc2_.d._currentframe < 15 || _loc2_.d._currentframe > 15 && _loc2_.d._currentframe < 20)
         {
            _loc2_.d.prevFrame();
         }
         if(_loc2_.d._currentframe != 7)
         {
            f1 = Math.round(_loc5_ * 1000000000) - Math.round(_loc5_ * 10000000) * 100;
         }
         else
         {
            f1 = Math.round(_loc5_ * 1000000000) - Math.round(_loc2_.d._currentframe * 100000) * 100;
         }
         if(fra > 10)
         {
            switch(_loc2_.d._currentframe)
            {
               case 5:
               case 6:
                  _root.soundy("Chest_Drop.mp",100);
            }
         }
         if(_loc2_.d._currentframe == 8 || _loc2_.d._currentframe == 38)
         {
            if(random(3) == 0 && !firsttime || _loc2_.d._currentframe == 38 || _root.lev == _root.hide2)
            {
               _loc2_.col = 41;
            }
         }
         if(_loc2_.d._currentframe == 31)
         {
            _loc2_.d.gotoAndStop(8);
            _loc2_.col = 1;
         }
         if(_loc2_.d._currentframe == 32 || _loc2_.d._currentframe == 37)
         {
            _loc2_.d.gotoAndStop(8);
            _loc2_.col = 2;
            if(random(3) == 0 && !firsttime || _loc2_.d._currentframe == 37)
            {
               _loc2_.col = 31;
            }
         }
         if(_loc2_.d._currentframe == 33)
         {
            _loc2_.d.gotoAndStop(8);
            _loc2_.col = 10;
         }
         if(f1 > 0)
         {
            _loc2_.col = f1;
            if(f1 == 2 && _loc2_.d._currentframe == 5)
            {
               _loc2_.c2 = true;
            }
         }
         else
         {
            if(_loc2_.d._currentframe == 7)
            {
               _loc2_.col = random(6) + 1;
            }
            if(_loc2_.d._currentframe == 3)
            {
               _loc2_.col = 1;
               if(random(50) == 1)
               {
                  _loc2_.col = 2;
               }
            }
            if(_loc2_.d._currentframe == 30)
            {
               _loc2_.d.gotoAndStop(7);
               _loc5_ = 0;
               _loc2_.col = tater();
            }
            if(_loc2_.d._currentframe == 35)
            {
               _loc2_.d.gotoAndStop(7);
               _loc5_ = 0;
               _loc2_.col = junx();
            }
            if(_loc2_.d._currentframe == 36 || (_loc2_.d._currentframe == 5 || trixx(61) && _loc2_.d._currentframe == 6) && ((trixx(61) || random(20) == 0) && !firsttime || _root.lev == _root.cus || _root.lev == _root.hide2))
            {
               _loc2_.d.gotoAndStop(5);
               _loc5_ = 0;
               _loc2_.col = 2;
               _loc2_.c2 = true;
            }
            if(_loc2_.d._currentframe == 2 || _loc2_.d._currentframe == 1 || _loc2_.d._currentframe == 4)
            {
               f1 = [0,2,20,0,7];
               if(random(f1[_loc2_.d._currentframe]) == 0)
               {
                  _loc2_.col = 2;
               }
               else
               {
                  _loc2_.col = 1;
               }
               if(_loc2_.d._currentframe == 4 && random(50) == 0)
               {
                  _loc2_.col = 5;
               }
               if(_loc2_.d._currentframe == 2 && random(Math.max(50,100 - _root.luck * 20)) == 0)
               {
                  _loc2_.col = 3;
               }
               if(_loc2_.d._currentframe == 1 && random(Math.max(20,50 - _root.luck * 10)) == 0)
               {
                  _loc2_.col = 4;
               }
               if(_loc2_.d._currentframe == 4 && random(10) == 0)
               {
                  _loc2_.col = 3;
               }
               if(_loc2_.d._currentframe == 1 && (random(10) == 0 || random(16) == 0 && _root.skiner == 5 || trixx(38) && random(10) == 0 || ups[173] && random(2) == 0))
               {
                  _loc2_.col = 3;
               }
               if(_loc2_.d._currentframe == 1 && _root.lev == _root.hide2)
               {
                  if(_root.hid2 == 0)
                  {
                     _loc2_.col = 1;
                  }
                  if(_root.hid2 == 1)
                  {
                     _loc2_.col = 4;
                  }
               }
            }
         }
         if(_loc2_.d._currentframe != 8)
         {
            if(_loc2_.c2)
            {
               _loc2_.d.d.gotoAndStop(7);
            }
            else
            {
               _loc2_.d.d.gotoAndStop(3);
            }
         }
         if(_loc2_.d._currentframe == 34)
         {
            if(_root.heaven && _root.chaps != 11)
            {
               _loc2_.d.d.gotoAndStop(5);
            }
            else
            {
               _loc2_.d.d.gotoAndStop(3);
            }
         }
         it1[4] = false;
         if(Math.round(_loc5_ * 100) >= 15 && Math.round(_loc5_ * 100) < 20)
         {
            if(_loc5_ > 0.1500000001)
            {
               _loc2_.d.d.gotoAndStop(Math.round((_loc5_ - 0.1500499) * 1000));
            }
            else if(_this.satan)
            {
               if(random(5) == 0)
               {
                  _loc2_.d.d.gotoAndStop(11);
               }
               else
               {
                  _loc2_.d.d.gotoAndStop(9 + random(2));
               }
            }
            else
            {
               f1 = -1;
               while(!it1[f1])
               {
                  f1 = random(7);
               }
               if(f1 == 4 || f1 == 3)
               {
                  watz = -100;
               }
               else
               {
                  watz++;
               }
               if(watz > 1 || watz == 1 && random(3) == 0)
               {
                  f1 = 3;
                  watz = -100;
               }
               it1[f1] = false;
               if(f1 == 4)
               {
                  f1 = 3;
               }
               else if(f1 > 4)
               {
                  f1 += 6;
               }
               _loc2_.d.d.gotoAndStop(f1 + 1);
               _loc2_.may = true;
               if(_loc2_.d.d._currentframe == 3)
               {
                  _loc2_.col = random(15) + 1;
               }
               if(_loc2_.d.d._currentframe == 13)
               {
                  _loc2_.col = 3;
               }
            }
            if(_loc2_.may && random(5) == 0 && !salefail && (_loc2_.d.d._currentframe < 5 || _loc2_.d.d._currentframe == 12 || _loc2_.d.d._currentframe == 13))
            {
               salefail = true;
               _loc2_.d.d.gotoAndStop(_loc2_.d.d._currentframe + 4);
            }
            if(_loc2_.d.d._currentframe == 3 || _loc2_.d.d._currentframe == 7)
            {
               _loc2_.d.d.d.gotoAndStop(_loc2_.col);
            }
            if(_loc2_.d.d._currentframe == 13 || _loc2_.d.d._currentframe == 17)
            {
               _loc2_.d.d.d.d.d.gotoAndStop(3);
            }
            if(_loc2_.d.d._currentframe == 4 || _loc2_.d.d._currentframe >= 8 && _loc2_.d.d._currentframe < 12)
            {
               _root.trg = _loc2_;
               if(_loc5_ >= 0.1504 && _loc5_ < 0.4)
               {
                  _loc2_.it = Math.round((_loc5_ - 0.15 - _loc2_.d.d._currentframe * 0.001) * 1000000);
               }
               else
               {
                  _loc2_.it = giveit();
               }
               _loc2_.d.d.d.gotoAndStop(_loc2_.it);
            }
         }
         else if(_loc5_ > 0.09 && _loc5_ < 0.2)
         {
            if(_loc5_ > 0.1 && _loc5_ < 0.4)
            {
               _loc2_.it = Math.round((_loc5_ - 0.1) * 10000);
            }
            else
            {
               _loc2_.it = giveit();
            }
            _loc2_.d.d.d.d.gotoAndStop(_loc2_.it);
         }
         _loc2_.xpp = _loc2_.xp;
         _loc2_.ypp = _loc2_.yp;
         if(_loc2_.d._currentframe == 8 && _loc2_.col != 41)
         {
            if(_loc2_.col == 10)
            {
               _loc2_.d.d.gotoAndStop(41);
            }
            else if(_loc2_.col == 1)
            {
               _loc2_.d.d.gotoAndStop(32);
            }
            else if(_loc2_.col > 1)
            {
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
         _loc2_.ybb = _loc0_ = 0;
         _loc2_.xbb = _loc0_;
         break;
      case 12:
         break;
      case 7:
      case 8:
         if(f7 == 8)
         {
            var _loc12_ = new flash.geom.Transform(_loc2_);
            _loc12_.colorTransform = bloc;
         }
         _loc2_.ypp = _loc2_.ybew;
         _loc2_.bh = false;
         _loc2_.d._rotation = random(360);
         _loc2_.fd = 1.3;
         if(f7 == 7)
         {
            _loc2_.spl = 10;
         }
         else
         {
            _loc2_.spl = 0;
         }
         _loc2_.dm = - random(30) + 5;
         _loc2_.dy = _loc0_ = -23;
         _loc0_;
         75;
         break;
      case 9:
         _loc2_.dy = _loc0_ = -23;
         _loc0_;
         75;
         _loc2_.shot = true;
         _loc2_.ph = true;
         _loc2_.spl = 0;
         _loc2_.dm = rand() * 0.2;
         break;
      case 2:
         if(ups[143] || ups[165] || ups[110] || ups[16] || ups[108] || ups[159] || ups[153] || ups[169] || ups[183] || ups[176] || ups[182] || ups[194] || _root.skiner == 6)
         {
            var _loc7_ = 1 - (ups[110] + ups[108]) * 0.25 - 0.17 * (ups[153] + ups[16] + ups[159] + ups[169]) + ups[143] * 0.2 + ups[165] * 0.23 + ups[176] * 0.16 + (ups[183] + ups[194]) * 0.16 - ups[182] * 0.25;
            if(_root.skiner == 6)
            {
               _loc7_ += 0.31;
            }
            _loc7_ = Math.max(0.6,Math.min(_loc7_,1.42));
            _loc2_.xbew *= _loc7_;
            _loc2_.ybew *= _loc7_;
         }
         _loc2_.dy = _loc0_ = -23;
         _loc0_;
         75;
         _loc2_.spl = 10;
         _loc2_.dm = rand() * 0.2;
         if(babymode)
         {
            _loc2_.ba = babymode;
            _loc2_.dmg = 3.5;
            if(babymode == 10)
            {
               _loc2_.ics = true;
            }
            else if(babymode == 6)
            {
               _loc2_._alpha = 50;
            }
            else if(babymode == 7)
            {
               _loc2_.dmg = 4;
               attach(_loc2_,500);
               _loc2_.d._xscale = 90;
               _loc2_.d._yscale = _loc2_.d._xscale;
               _loc2_.spl = 0;
            }
            else if(babymode == 5)
            {
               _loc2_.dmg = 3;
               attach(_loc2_,500);
               _loc2_.d._xscale = 80;
               if(_root.hardmode)
               {
                  _loc2_.d._xscale = 115;
                  _loc2_.dmg = 5;
               }
               _loc2_.d._yscale = _loc2_.d._xscale;
               _loc2_.spl = 0;
               _loc2_.dm = 1.2;
            }
            else if(babymode == 2)
            {
               _loc2_.dmg = 5;
               attach(_loc2_,500);
               _loc2_.d._xscale = 106;
               _loc2_.d._yscale = _loc2_.d._xscale;
               _loc2_.spl = 0;
            }
            else if(babymode == 3)
            {
               colorit(_loc2_,0.95,0.8,0.6,-150,-150,-150);
            }
            else if(babymode == 4 || babymode == 11)
            {
               colorit(_loc2_,0.4,0.15,0.38,71,0,116);
               if(babymode == 11)
               {
                  _loc2_._alpha = 50;
               }
               _loc2_.dm -= 3;
            }
            babymode = undefined;
         }
         else
         {
            _loc2_.dmg = dmgdo();
            if(trixx(30))
            {
               if(random(10) == 0)
               {
                  _loc2_.trixer = 1;
               }
            }
            if(trixx(31))
            {
               if(random(10) == 0)
               {
                  _loc2_.trixer = 2;
               }
            }
            if(trixx(62))
            {
               if(random(10) == 0)
               {
                  _loc2_.trixer = 3;
               }
            }
            if(ups[150] && random(Math.max(1,10 - _root.luck)) == 0)
            {
               _loc2_.dmg *= 3.2;
               attach(_loc2_,499);
               if(_loc2_.xbew < 0)
               {
                  _loc2_.d.d._xscale *= -1;
               }
               if(_loc2_.trixer == 2)
               {
                  colorit(_loc2_,1.5,2,2,0,0,0);
               }
               _loc2_.spl = 0;
               _loc2_.spll = true;
               _loc2_.tooth = true;
               _loc2_.d._xscale = 70;
               _loc2_.d._yscale = _loc2_.d._xscale;
            }
            else if(ups[182])
            {
               colorit(_loc2_,1.5,2,2,0,0,0);
            }
            else if(!ups[149] && (ups[189] || ups[7] || ups[183] || doub || demon > 0 || _loc2_.dmg > 5.5 && (!ups[169] || _loc2_.dmg > 15) && !ups[69] || ups[122] || sob == -1 && ups[155]))
            {
               attach(_loc2_,500);
               _loc2_.d._xscale = 90;
               _loc2_.d._yscale = _loc2_.d._xscale;
               _loc2_.spl = 0;
            }
            else if(ups[115])
            {
               colorit(_loc2_,1.5,2,2,0,0,0);
            }
            else if(ups[132])
            {
               colorit(_loc2_,0.2,0.09,0.065,0,0,0);
            }
            else if(ups[103])
            {
               _loc2_.spl = 30;
               colorit(_loc2_,0.5,0.97,0.5,0,0,0);
            }
            else if(ups[104])
            {
               colorit(_loc2_,0.9,0.3,0.08,0,0,0);
            }
            else if(ups[90])
            {
               colorit(_loc2_,0.4,0.4,0.4,50,50,50);
            }
            else if(ups[110])
            {
               _loc2_.spl = 0;
               colorit(_loc2_,1.25,0.05,0.15,0,0,0);
            }
            else if(ups[89])
            {
               colorit(_loc2_,2,2,2,50,50,50);
            }
            else if(ups[69])
            {
               colorit(_loc2_,0.33,0.18,0.18,66,40,40);
               _loc2_.d._xscale *= 1 + (chal - 1) * 0.05;
            }
            else if(ups[6])
            {
               colorit(_loc2_,1,1,0,45,15,0);
               _loc2_.spl = 20;
               _loc2_.piss = true;
            }
            else if(ups[3])
            {
               colorit(_loc2_,0.4,0.15,0.38,71,0,116);
            }
            if(!(ups[150] && random(Math.max(1,10 - _root.luck)) == 0))
            {
               if(_loc2_.trixer == 3)
               {
                  colorit(_loc2_,0.95,0.8,0.6,-150,-150,-150);
               }
               else if(_loc2_.trixer == 2)
               {
                  colorit(_loc2_,1.5,2,2,0,0,0);
               }
               else if(_loc2_.trixer == 1)
               {
                  _loc2_.spl = 30;
                  colorit(_loc2_,0.5,0.97,0.5,0,0,0);
               }
            }
            if(ups[132])
            {
               _loc2_.gro = 0;
               _loc2_.d._xscale -= 15;
               _loc2_.d._yscale -= 15;
            }
            if(ups[115] || _loc2_.trixer == 2)
            {
               _loc2_._alpha = 50;
            }
            if(ups[6])
            {
               _loc2_.dy += 13;
            }
            else if(_root.skiner == 2)
            {
               _loc2_.dy += 6;
            }
            else if(_root.skiner == 6)
            {
               _loc2_.dy += 5;
            }
         }
         _loc2_.nuts = 0.2;
         _loc2_.dir = Math.abs(_loc2_.xbew) < Math.abs(_loc2_.ybew);
         _loc2_.hh = [];
         _loc2_.shot = true;
         if(!_loc2_.ba)
         {
            if(ups[5])
            {
               _loc2_.xbew *= 1.4;
               _loc2_.ybew *= 1.4;
            }
            _loc2_.dy -= (ups[12] - ups[71] + ups[30] + ups[31] + ups[29]) * 5;
            if(ups[4] || doub || ups[7] || ups[12])
            {
               _loc2_.dmg *= 1.15;
            }
            f1 = ups[12] + ups[30] + ups[31] + ups[29] + ups[71] * 3 + ups[101] + ups[110] + ups[121] + ups[182] * 1.5 + ups[197] + ups[14] + ups[189];
            f1 *= 0.5;
            _loc2_.dm -= f1;
            _loc2_.dy -= f1 * 0.5;
            _root.firrr = (- _loc2_.dm) * 5 - _loc2_.dy;
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
         if(_loc2_.specoz == 23 || _loc2_.eternal)
         {
            _loc2_.bnuts = true;
         }
   }
   if(trixx(53) && _loc2_.hp > 60)
   {
      _loc2_.hp *= 0.85;
   }
   if(f7 == 45)
   {
      _loc2_.d.gotoAndStop(1);
   }
   if(mheart.eternal || _loc2_.s == 19 && !altboss && spezz == 23)
   {
      _loc2_.hp *= 0.85;
      _loc2_.mhp = _loc0_;
   }
   if(mheart.eternal && _loc2_.s == 56)
   {
      _loc2_.hp *= 0.7;
      _loc2_.mhp = _loc0_;
      _loc2_._yscale *= 0.8;
      _loc2_._xscale = _loc0_;
   }
   return _loc2_;
}
function specoo(trg)
{
   speco(trg);
   switch(trg.specoz)
   {
      case 23:
         if(trg.s != 78)
         {
            trg._yscale *= 1.2;
            trg._xscale = _loc0_;
         }
         else
         {
            trg.fra = -100;
         }
         if(_root.chaps == 1)
         {
            if(trg.s != 19)
            {
               trg.mhp *= 1.125;
               trg.hp *= 1.125;
            }
         }
         else
         {
            trg.mhp *= 1.25;
            trg.hp *= 1.25;
         }
         break;
      case 19:
         if(trg.s == 67)
         {
            trg._yscale = 80;
            trg._xscale = 70;
         }
         break;
      case 14:
         trg._yscale = _loc0_ = 80;
         trg._xscale = _loc0_;
         break;
      case 12:
         trg._yscale = _loc0_ = 85;
         trg._xscale = _loc0_;
         break;
      case 9:
         trg.mhp *= 0.85;
         trg.hp *= 0.85;
         trg._yscale = _loc0_ = 85;
         trg._xscale = _loc0_;
         break;
      case 5:
         trg.spl = 30;
         break;
      case 3:
         trg.spl = 30;
         break;
      case 1:
         if(!wtfe)
         {
            i--;
            wtfe = true;
         }
         trg._yscale = _loc0_ = 75;
         trg._xscale = _loc0_;
         if(trg.s == 20)
         {
            sizes[20] = 21;
         }
         trg.mhp *= 0.45;
         trg.hp *= 0.45;
         break;
      case 11:
         trg._yscale = _loc0_ = 111;
         trg._xscale = _loc0_;
         break;
      case 21:
      case 18:
      case 2:
      case 6:
      case 4:
      case 8:
      case 15:
      case 16:
         if(trg.s != 100)
         {
            trg.mhp *= 1.25;
            trg.hp *= 1.25;
            if(trg.s == 67)
            {
               trg.mhp *= 1.25;
               trg.hp *= 1.25;
            }
            trg._yscale = _loc0_ = 115;
            trg._xscale = _loc0_;
         }
         break;
      case 7:
         if(trg.s == 99)
         {
            trg.mhp *= 0.55;
            trg.hp *= 0.55;
            trg._yscale = _loc0_ = 58;
            trg._xscale = _loc0_;
            if(!wtfe)
            {
               i--;
               wtfe = true;
            }
         }
         else if(trg.s != 63)
         {
            trg.mhp *= 1.45;
            trg.hp *= 1.45;
            trg._yscale = _loc0_ = 115;
            trg._xscale = _loc0_;
         }
         break;
      case 22:
         trg.mhp *= 2;
         trg.hp *= 2;
      case 20:
         trg._yscale = _loc0_ = 75;
         trg._xscale = _loc0_;
   }
}
function parc(f1, f2, f3, f4, f5, f6)
{
   dang = true;
   parz++;
   namer = "p" + parz;
   f0 = par.length;
   if(f6 == undefined)
   {
      f6 = parz + 100000;
   }
   if(f1 == "bloo")
   {
      par[f0] = blorz.attachMovie(f1,namer,f6);
   }
   else
   {
      par[f0] = attachMovie(f1,namer,f6);
   }
   par[f0]._x = f2;
   par[f0]._y = f3;
   if(f4)
   {
      par[f0]._rotation = f4;
   }
   if(f5)
   {
      par[f0]._xscale = par[f0]._yscale = f5;
   }
   par[f0].stop();
   return par[f0];
}
function rotc(f0)
{
   return f0;
}
function rand()
{
   return Math.random() - 0.5;
}
function rotrund(f1)
{
   while(f1 > 180)
   {
      f1 -= 360;
   }
   while(f1 < -180)
   {
      f1 += 360;
   }
   return f1;
}
function rotget2(f1, f2)
{
   f0 = Math.atan((- f1) / f2) / 3.141592653589793 * 180 + 90;
   if(f2 >= 0)
   {
      f0 += 180;
   }
   return f0;
}
function rotget(f1, f2)
{
   f0 = Math.atan((- f1) / f2) / 3.141592653589793 * 180 + 90;
   return f0;
}
function absmax(f1, f2)
{
   if(f1 > f2)
   {
      f1 = f2;
   }
   else if(f1 < - f2)
   {
      f1 = - f2;
   }
   return f1;
}
function enfget(f1, f2)
{
   f1 = f1 * f1 + f2 * f2;
   if(f1 > 0)
   {
      f1 = Math.sqrt(f1);
   }
   else
   {
      f1 = 0.001;
   }
   return f1;
}
function enfcheckx(f1, f2, f3, f4, siz)
{
   xenf = f1 - f3;
   yenf = f2 - f4;
   if(Math.abs(xenf) < roxx2 || Math.abs(yenf) < roxx2)
   {
      enf = enfget(xenf,yenf);
      if(enf < siz)
      {
         return enf;
      }
   }
}
function enfcheck(f1, f2, f3, f4, siz)
{
   xenf = f1 - f3;
   if(Math.abs(xenf) < siz)
   {
      yenf = f2 - f4;
      if(Math.abs(yenf) < siz)
      {
         enf = enfget(xenf,yenf);
         if(enf < siz)
         {
            return enf;
         }
      }
   }
}
function t3d(f1, f2)
{
   f2 += f1._rotation;
   f2 += 45;
   while(f2 > 360)
   {
      f2 -= 360;
   }
   while(f2 < 0)
   {
      f2 += 360;
   }
   f1.gotoAndStop(Math.round(f2 / 360 * 72) + 1);
}
function pff(f1, f2)
{
   if(trg.gridder[f1] >= 0 && trg.gridder[f1] < 1)
   {
      if(trg.gridder[f1] == 0)
      {
         f2 = f2 - 1;
      }
      else
      {
         f2 -= 7;
      }
      trg.gridder[f1] = f2;
      acts2.push(f1);
   }
}
function pff1(f1, f2)
{
   if(trg.gridder[f1] + f2 * 3 > v3 && trg.gridder[f1] < 0)
   {
      v3 = trg.gridder[f1];
      v4 = f1;
   }
}
function pff2(f1)
{
   if(levzz(f1) != 0)
   {
      outgrid(f1);
      if(Math.abs(xenf) > 0 && Math.abs(yenf) > 0)
      {
         if(Math.abs(xenf - trg.xp) < roxx * 0.8 && Math.abs(yenf - trg.yp) < roxx * 0.8)
         {
            if(xenf < trg.xp)
            {
               minx = xenf + roxx * 0.8;
            }
            else
            {
               maxx = xenf - roxx * 0.8;
            }
            if(yenf < trg.xp)
            {
               miny = yenf + roxx * 0.8;
            }
            else
            {
               maxy = yenf - roxx * 0.8;
            }
         }
      }
   }
}
function momkill()
{
   if(momdown != 100)
   {
      for(z in ball)
      {
         momdown = 100;
         if(_root.chaps == 6)
         {
            _root.soundy("Mom_Vox_Death_" + random(2) + ".mp");
         }
         else if(_root.chaps != 9)
         {
            _root.soundy("Mom_Vox_Filtered_Death_1.mp");
         }
         if(trg.s != 78)
         {
            hurt(ball[z],100);
         }
         fra = Math.max(fra,100);
      }
   }
   mheart._visible = false;
}
function hurtcol(trg)
{
   var _loc2_ = trg.uncol;
   if(trg.s == 78)
   {
      _loc2_ = fra + 2;
   }
   speco(trg,true);
   if(trg.spid > 0)
   {
      if(trg.spida == 2)
      {
         colorit(trg,0.45,0.5,0.5,300,-100,-100);
      }
      else
      {
         colorit(trg,trg.colo.redMultiplier * 0.5,trg.colo.greenMultiplier * 0.5,trg.colo.blueMultiplier * 0.5,250 + trg.colo.redOffset * 0.45,50 + trg.colo.greenOffset * 0.45,50 + trg.colo.blueOffset * 0.45);
      }
      _loc2_ = fra + 2;
   }
   else if(trg.s == 36)
   {
      colorit(trg,0.1 + trg.colo.redMultiplier * 0.6,0.1 + trg.colo.greenMultiplier * 0.6,0.1 + trg.colo.blueMultiplier * 0.6,70 + trg.colo.redOffset * 0.7,trg.colo.greenOffset * 0.7,trg.colo.blueOffset * 0.7);
   }
   else
   {
      colorit(trg,trg.colo.redMultiplier * 0.4,trg.colo.greenMultiplier * 0.5,trg.colo.blueMultiplier * 0.5,200 + trg.colo.redOffset * 0.45,trg.colo.greenOffset * 0.45,trg.colo.blueOffset * 0.45);
   }
   trg.uncol = _loc2_;
}
function hurt(trg, f1)
{
   if(_root.chaps > 1)
   {
      f1 *= 1 + (_root.chaps - 1) * 0.0015;
   }
   if(trg != rply)
   {
      if(trg == mheart)
      {
         mheart.downbro -= 3;
      }
      if(trg.s == 30 && trg.eternal)
      {
         if(trg.boss)
         {
            f1 *= 0.75;
         }
         else
         {
            f1 *= 0.45;
         }
      }
      if(trg.s == 60)
      {
         if(trg.spinny)
         {
            f1 *= 0.5;
         }
      }
      if(trg.s == 62 && trg.specoz == 23 && altboss)
      {
         if(f1 > 10)
         {
            f1 = 10;
         }
      }
      if(trg.s == 41 && trg.eternal)
      {
         if(f1 > 2)
         {
            trg.bloo = 20;
         }
      }
      if(trg.s == 19 && trg.specoz == 23)
      {
         if(_root.chaps > 2)
         {
            f1 *= Math.random();
         }
         else
         {
            f1 *= 0.4 + Math.random() * 0.6;
         }
      }
      if(trg.specoz == 23 || trg.eternal)
      {
         var _loc4_ = 1;
         if(fra > 1666)
         {
            _loc4_ = 1 + Math.random() * 0.175;
         }
         else if(fra > 666)
         {
            _loc4_ = 1 + Math.random() * 0.125;
         }
         else if(fra > 430)
         {
            _loc4_ = 1 + Math.random() * 0.75;
         }
         else if(fra > 200)
         {
            _loc4_ = 1 + Math.random() * 0.05;
         }
         if(hitcc < fra)
         {
            hitc++;
            if(hitcc < fra + 7)
            {
               hitc++;
            }
            if(hitcc < fra + 14)
            {
               hitc++;
            }
            hitcc = fra + 7;
         }
         if(hitc > 300)
         {
            _loc4_ += 0.2;
         }
         else if(hitc > 150)
         {
            _loc4_ += 0.15;
         }
         else if(hitc > 50)
         {
            _loc4_ += 0.08;
         }
         else if(hitc > 20)
         {
            _loc4_ += 0.05;
         }
         else if(hitc > 10)
         {
            _loc4_ += 0.03;
         }
         f1 *= _loc4_ + hitc * 0.005;
      }
      if(trg.s == 45)
      {
         if(f1 > 10 + random(20))
         {
            if(trriss + 25 + random(30) <= fra)
            {
               trriss = fra;
               _root.soundy("Mom_Vox_Hurt_" + random(4) + ".mp");
            }
         }
      }
      if(trg.s == 102 || (trg.s == 21 || trg.s == 23) && trg.eternal)
      {
         trg.hurt = true;
      }
      if(trg == mheart)
      {
         if(f1 > 10 + random(20))
         {
            if(trriss + 25 + random(30) <= fra)
            {
               trriss = fra;
               _root.soundy("Mom_Vox_Filtered_Hurt_" + random(4) + ".mp");
            }
         }
      }
      if(trg.randd + 2 > fra && random(5) == 0)
      {
         trg.xpp = trg.xp;
         trg.ypp = trg.yp;
      }
      if(!trg.dones)
      {
         if(trg.s == 30)
         {
            trg.hppp = 0;
         }
         if(trg.s == 38)
         {
            trg.telp = 20;
         }
         if(trg.imba)
         {
            f1 = 0;
         }
         if(trg.s == 62)
         {
            if(trg.worm == 1 && trg.d._currentframe == 8 || altboss)
            {
               trg = worm[6];
            }
            else if(trg.worm != 6)
            {
               f1 = 0;
               lows.dones = false;
            }
            else
            {
               f1 *= 5;
            }
         }
         if(trg.s == 27 && trg.alter != 2)
         {
            trg.fire = Math.min(10,trg.fire + f1);
            if(f1 > 10)
            {
               trg.d.t._visible = true;
               trg.d.t.t.gotoAndPlay(1);
            }
         }
         if(f1 > 0 && trg.mhp > 0 && trg != player && (trg.d.d.open || trg.s != 27 || trg.alter == 2 || lows.meat > 2 || lows.bird))
         {
            if(trg.s == 19)
            {
               if(trg.whop)
               {
               }
            }
            else if(trg.s == 21)
            {
               trg.xpp = undefined;
            }
            if(trg.s == 45)
            {
               for(z in mom)
               {
                  mom[z].hp -= f1;
               }
            }
            else if(trg.s == 28)
            {
               trg.mags[1].hp -= f1;
               trg.mags[2].hp -= f1;
               trg.mags[3].hp -= f1;
            }
            else
            {
               trg.hp -= f1;
            }
            if(trg.hp < 0)
            {
               if(trg.s == 99 && trg.hp < 0)
               {
                  _root.soundy("Monster_Roar_2.mp",120);
               }
               if(pacman)
               {
                  if(!paccer)
                  {
                     player.hp += 0.5;
                  }
                  paccer = !paccer;
               }
               if(trg.poiss > 0)
               {
                  trg.spl = 30;
               }
               if(trg == mheart)
               {
                  momkill();
               }
               if(trg.s == 84 && trg.pow > 3)
               {
                  momkill();
               }
               if(ups[157])
               {
                  rage = Math.min(3.3,rage + 0.28);
                  rag = rage * 0.32 + 0.68;
               }
               if(trixx(58) && random(15) == 0)
               {
                  rage = Math.min(3.3,rage + 0.5);
                  rag = rage * 0.32 + 0.68;
               }
               if(trixx(60) && random(20) == 0)
               {
                  if(!dbird && ashut > 1)
                  {
                     dbird = 2;
                  }
               }
               if(!trg.flyai && ups[62] && trg.s >= 10)
               {
                  if(_root.vamp++ >= 12 && player.mhp > 0)
                  {
                     _root.vamp = 0;
                     player.hp += 0.5;
                     parc("hearter",player.xp,player.yp - 20,0,100,player.dpppp + 5000);
                     _root.soundy("Vamp_Gulp.mp");
                  }
               }
               if(trg.s == 62)
               {
                  for(z in worm)
                  {
                     worm[z].dones = true;
                  }
               }
               else if(trg.s == 45)
               {
                  for(z in mom)
                  {
                     mom[z].dones = true;
                     mom[z]._visible = false;
                  }
                  momkill();
               }
               else if(trg.s == 28)
               {
                  _root.soundy("Monster_Roar_2.mp",50);
                  trg.mags[1].dones = true;
                  trg.mags[2].dones = true;
                  trg.mags[3].dones = true;
               }
               if(trg.s == 89)
               {
                  trg.trg3.frei = true;
                  trg.trg2.frei = true;
                  trg.frei = true;
               }
               if(trg.s == 74)
               {
                  trg.d.gotoAndStop(6);
               }
               else if(trg.s == 75)
               {
                  trg.d.gotoAndStop(9);
               }
               else if(trg.s == 15 && random(2) == 0 && !blackout == 2)
               {
                  trg.gosplash = true;
                  trg.s = 17;
                  attach(trg,17);
                  trg.hp = hps[trg.s];
                  trg.xpp = trg.ypp = 0;
               }
               else if(trg.s == 10 && (random(2) == 0 && trg.hp > -25 || trg.specoz == 23))
               {
                  trg.gosplash = true;
                  if(trg.eternal && random(5) == 0)
                  {
                     attach(trg,12);
                     trg.s = 12;
                     trg.mhp *= 2 + _root.chaps * 0.1;
                     trg._xscale = trg._yscale *= 1.05;
                     speco(trg);
                     trg.outway = true;
                  }
                  else
                  {
                     attach(trg,11);
                     trg.s = 11;
                     if(trg.specoz == 23)
                     {
                        trg.mhp *= 2 + _root.chaps * 0.1;
                        trg._xscale = trg._yscale *= 1.05;
                        speco(trg);
                     }
                     trg.outway = true;
                  }
                  trg.hp = trg.mhp;
                  splater(trg.xp,trg.yp,random(10) + 1,Math.random() + 0.6);
               }
               else if(trg.s == 24 && trg.d._currentframe < 3)
               {
                  trg.gosplash = true;
                  if(trg.alter == 2)
                  {
                     trg.d.gotoAndStop(6);
                  }
                  else
                  {
                     trg.d.gotoAndStop(5);
                  }
                  trg.outway = true;
                  trg.hp = 10;
                  if(trg.eternal)
                  {
                     if(trg.rest++ < 5)
                     {
                        trg.hp += 15;
                     }
                  }
                  if(trg.special)
                  {
                     trg.hp += 2;
                  }
                  splater(trg.xp,trg.yp,random(10) + 1,Math.random() + 0.6);
               }
               else if(trg.s == 84)
               {
                  trg.pow = trg.pow + 1;
                  if(trg.pow == 4)
                  {
                     trg.hp = trg.mhp;
                     trg.d.gotoAndStop(8);
                     trg.bh = false;
                  }
               }
               else
               {
                  trg.dones = true;
               }
            }
            else
            {
               trg.uncol = Math.round(fra + Math.min(6,f1 / 1.5));
               hurtcol(trg);
               if(trg.hbar)
               {
                  _root.hud.bar.bar.gotoAndPlay(1);
               }
               if(trg.s == 62)
               {
                  trg.uncol = Math.round(fra + Math.min(6,f1 / 1.5));
                  for(z in worm)
                  {
                     if(worm[z].bh && worm[z] != trg)
                     {
                        worm[z].uncol = trg.uncol;
                        hurtcol(worm[z]);
                     }
                  }
               }
               else if(trg.s == 45)
               {
                  trg.uncol = Math.round(fra + 1);
                  for(z in mom)
                  {
                     if(mom[z].bh || mom[z].mom == 3)
                     {
                        if(trg != mom[z])
                        {
                           hurtcol(mom[z]);
                           mom[z].uncol = trg.uncol;
                        }
                     }
                  }
                  trg.uncol = Math.round(fra + Math.min(6,f1 / 1.5));
               }
               else if(trg.s == 28)
               {
                  if(trg.mags[1] != trg)
                  {
                     trg.mags[1].uncol = trg.uncol;
                     hurtcol(trg.mags[1]);
                  }
                  if(trg.mags[2] != trg)
                  {
                     trg.mags[2].uncol = trg.uncol;
                     hurtcol(trg.mags[2]);
                  }
                  if(trg.mags[3] != trg)
                  {
                     trg.mags[3].uncol = trg.uncol;
                     hurtcol(trg.mags[3]);
                  }
               }
            }
         }
      }
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
   trg.colo = _loc1_;
   _loc2_.colorTransform = _loc1_;
}
function pilcol(f1, f2, f3)
{
   colorit(player,0.3,0.3,0.3,f1 * 1.3,f2 * 1.3,f3 * 1.3);
   pillef = fra + 30;
   _root.playcol[0] *= 0.4;
   _root.playcol[1] *= 0.4;
   _root.playcol[2] *= 0.4;
   _root.playcol[0] += f1 / 160;
   _root.playcol[1] += f2 / 160;
   _root.playcol[2] += f3 / 160;
}
function playcol(f1)
{
   if(pillef > fra)
   {
      player._alpha = 100;
   }
   else if(unic > 30 && !pacman)
   {
      if(unic % 4 == 0 && player.d._currentframe < 4)
      {
         v1 = 50;
         v2 = 70;
         if(roll(6))
         {
            colorit(player,1,0,0,v1,v1,v1);
         }
         else if(roll())
         {
            colorit(player,0,1,0,v1,v1,v1);
         }
         else if(roll())
         {
            colorit(player,0,0,1,v1,v1,v1);
         }
         else if(roll())
         {
            colorit(player,1,1,0,v2,v2,v2);
         }
         else if(roll())
         {
            colorit(player,0,1,1,v2,v2,v2);
         }
         else if(roll())
         {
            colorit(player,1,0,1,v2,v2,v2);
         }
      }
   }
   else if(f1)
   {
      player._alpha = 0;
   }
   else if(!trg.free)
   {
      player._alpha = 100;
      if(rage != 1)
      {
         colorit(player,_root.playcol[0] * rag,_root.playcol[1] / rag,_root.playcol[2] / rag,0,0,0);
      }
      else
      {
         colorit(player,_root.playcol[0],_root.playcol[1],_root.playcol[2],0,0,0);
      }
   }
}
function teller()
{
   if(_root.lev != _root.chamb || _root.altch != 2)
   {
      player.d.gotoAndStop(7);
      telf = fra + player.d.d._totalframes - 3;
      _root.soundy("hell_portal2.wav");
   }
}
function trixx(f111)
{
   return _root.trix == f111 || _root.atrix == f111;
}
function playerhurt(f1, f2, f3)
{
   player.hp = Math.min(player.hp,player.mhp);
   if(_root.chaps > 6)
   {
      f1 = Math.max(f1,1);
   }
   if(ups[108])
   {
      f1 = 0.5;
   }
   if(f2 == 45)
   {
      if(trrisx + 50 + random(130) <= fra)
      {
         trrisx = fra;
         _root.soundy("Mom_Vox_EvilLaugh.mp");
      }
   }
   if(_root.chaps == 9 && _root.lev == _root.bossl)
   {
      plh = true;
   }
   if(mhheart)
   {
      if(trrisx + 50 + random(130) <= fra)
      {
         trrisx = fra;
         _root.soundy("Mom_Vox_Filtered_EvilLaugh.mp");
      }
   }
   if(lasth - fra < 0 && player._visible && telf == undefined && playsave < 0 && unic < 0 && player._currentframe != 6 && horse <= 0 && dec <= 0)
   {
      if(f1 > 0)
      {
         if(healo)
         {
            if(healo.hp > 1)
            {
               healo.hp = Math.min(healo.hp + 40,healo.mhp);
               parc("hearter",healo.xp,healo.yp - 40,0,100,healo.dpppp + 5000);
               _root.soundy("Vamp_Gulp.mp");
            }
         }
         lastk = f2;
         plah = true;
         if(f2 <= 200)
         {
            _root.nodmg = false;
         }
         if(_root.armor > 0)
         {
            _root.armor -= f1;
            if(_root.armor <= 0)
            {
               _root.armor = 0;
            }
         }
         else
         {
            if(_root.eta)
            {
               _root.eta = false;
               player.hp += 0.5;
            }
            _root.armor = 0;
            player.hp -= f1;
            if(_root.devil != 2 && _root.devil != 3 && f2 <= 200)
            {
               _root.devil = false;
            }
            if(f2 <= 200)
            {
               bossdmg = false;
            }
         }
         if(ups[148])
         {
            bluf += 1 + random(3);
         }
         if(trixx(29))
         {
            bluf++;
         }
         if(player.hp == 0 && _root.armor == 0.5 || player.hp < 1 && player.hp > 0 && _root.armor <= 0)
         {
            if(trixx(33))
            {
               ups[100] = ups[100] + 1;
            }
            if(ups[142])
            {
               _root.armor = _root.armor + 1;
               ups[142] = 0;
            }
         }
         if(holz != undefined)
         {
            trg3 = create(player.xp * 0.6 + holz.xp * 0.4,player.yp * 0.6 + holz.yp * 0.4,0,0,0,0,33.1);
            colorit(trg3.d.d,0.45,0.7,1,0,0,70);
            _root.soundy("BGascan_pour.wav",100);
            holz.stopi = true;
            holz.d.gotoAndStop(127);
            holz = undefined;
         }
         if(bluf > 1)
         {
            blufer = highs;
         }
         if(trixx(40) && random(5) == 0)
         {
            razor += 3;
         }
         if(trixx(48) && random(20) == 1)
         {
            _root.over.gotoAndStop(3);
            _root.soundy("Death_Card.mp",100);
            for(e in ball)
            {
               trg2 = ball[e];
               hurt(trg2,40);
            }
         }
         if(ups[156] && _root.itc != 1)
         {
            f0 = itc[_root.it];
            _root.itc += Math.min(1 / f0,0.5);
            _root.soundy("batterycharge.mp");
            parc("batter",player.xp,player.yp - 20,0,100,player.dpppp + 5000);
         }
         lasth = fra + f1 * 60;
         if(_root.ups[122] && !ups[122] && player.hp > 0 && player.hp < 1)
         {
            ups[122] = 1.2;
            curs();
            lasth = fra + 90;
         }
         else if(ups[117])
         {
            ups[117] = 0.55;
         }
         if(ups[162] && random(5) == 0)
         {
            playsave = 200;
         }
         if(demon > 0)
         {
            _root.soundy("Monster_Grunt_" + random(2) + "_B.mp");
         }
         else
         {
            _root.soundy("Isaac_Hurt_Grunt" + random(3) + ".mp");
         }
         if(ups[180])
         {
            farter = true;
         }
         if((player.hp <= 0 && _root.armor <= 0 && !_root.eta || !(player.mhp > 0 || _root.armor > 0 || _root.eta)) && !f3)
         {
            player.d.gotoAndStop(6);
            player.d.d.gotoAndStop(sk);
            player.dones = true;
         }
         else
         {
            if(f3 && player.hp <= 0)
            {
               player.hp = 0.5;
            }
            player.d.gotoAndStop(2);
            if(player.hp <= 0.5 || !(player.mhp > 0 || _root.armor > 0))
            {
               if(trixx(47))
               {
                  playsave = 150;
               }
               if(trixx(43) && _root.lev != _root.bossl && _root.lev != _root.bossl2 && (_root.armor < 0.5 || trg.mhp < 0 && _root.armor < 1))
               {
                  teller();
                  tar = _root.lastl;
                  if(_root.lev <= 0)
                  {
                     _root.lastl = tar = 35;
                  }
               }
            }
         }
         return true;
      }
   }
}
function splater(f1, f2, f3, f4)
{
   if(f3 >= 1)
   {
      blood.gotoAndStop(f3);
      v1 = f4;
      if(random(2) == 0)
      {
         v2 = - v1;
      }
      else
      {
         v2 = v1;
      }
      maxx = new flash.geom.Matrix();
      maxx.scale(v1,v2);
      maxx.translate(f1 + crand(5),f2 + crand(5) - 5);
      maxx.scale(hdx,hdx);
      splat.draw(blood,maxx,bloc);
   }
}
function shadow(f1, f2)
{
   poi.x = f1;
   poi.y = f2;
   shad.copyPixels(org,org.rectangle,poi,undefined,undefined,true);
   maxx = new flash.geom.Matrix();
   maxx.translate(f1,f2);
   shad.draw(shaz,maxx);
}
function turd(f1, e, cent)
{
   if(fra > 10 && levzz(e) < 0.93)
   {
      levz[e] = 1.5;
      clevc[e] = 1.5;
   }
   if(levzz(e) > 1.1)
   {
      var _loc6_ = _root.levsav[_root.lev][savv];
      outgrid(e);
      f2 = "de" + e * 1;
      if(f1 == "fireblock2")
      {
         var _loc3_ = attachMovie(f1,"de" + f2,Math.round(e + 501),{_x:xenf,_y:yenf});
         _loc3_.gotoAndStop(1);
         this[f2] = _loc3_.d;
         _loc3_ = _loc3_.d;
         ref.push(_loc3_);
         _loc3_.fra = 0;
      }
      else
      {
         _loc3_ = attachMovie(f1,f2,Math.round(e + 501),{_x:xenf,_y:yenf});
      }
      if(f1 == "breakblock2" || f1 == "fireblock" || f1 == "fireblock2")
      {
         _loc3_.fire = true;
      }
      _loc3_.xp = xenf;
      _loc3_.yp = yenf;
      _loc3_.cent = cent;
      _loc3_.savv = savv;
      _loc3_.nam = f1;
      _loc3_.til = e;
      if(_loc6_ > 0 && _loc3_.nam != "breakblock2")
      {
         _loc3_.gotoAndStop(_loc6_);
         if(levzz(e) == 4)
         {
            levz[e] = 0;
         }
         else
         {
            levz[e] -= 0.13 * (_loc6_ - 1);
         }
      }
      if(fra < 10)
      {
         _loc3_.p.gotoAndStop(_loc3_.p._totalframes);
      }
      if(fra > 10)
      {
         _loc3_.gotoAndStop(6);
      }
      if(f1 == "locktile" && _loc6_ > 1)
      {
         _loc3_.gotoAndStop(3);
      }
      savv++;
      return _loc3_;
   }
}
function upa()
{
   ups = _root.ups.slice(0,-1);
   if(_root.ceye)
   {
      ups[21] = true;
   }
   if(_root.world)
   {
      ups[21] = ups[54] = true;
   }
   if(ups[69] && ups[52])
   {
      ups[69] = 0;
   }
   if(ups[168])
   {
      ups[114] = ups[118] = ups[69] = 0;
   }
   if(ups[114])
   {
      ups[118] = 0;
   }
   if(ups[191])
   {
      f1 = [1,2,3,5,6,46,53,110,115,143,150];
      ups[f1[random(f1.length)]] = 1;
   }
   if(_root.ups[122])
   {
      if(player.hp < 1)
      {
         ups[122] = 1;
         sk = 7;
         cus = true;
      }
      else
      {
         ups[122] = 0;
      }
   }
   if(trixx(32) && random(4) == 0)
   {
      f1 = [21,71,120,121];
      ups[f1[random(f1.length)]] = 1;
   }
}
function curs()
{
   sk = 7;
   _root.mmus = _root.soundy("isaacsatanitemget.mp",100);
   _root.over.gotoAndStop(13);
   player.d.gotoAndStop(11);
   player.it = 122;
}
function cloo()
{
   clevc = levz.slice(0,-1);
   e = 0;
   while(e < levz.length)
   {
      if(clevc[e] == 2 || clevc[e] == 0.99 || clevc[e] == 3.6)
      {
         clevc[e] = 0;
      }
      if(clevc[e] >= 1 && clevc[e] < 2 || clevc[e] == 3)
      {
         clevc[e] = 1;
      }
      else
      {
         clevc[e] = 0;
      }
      e++;
   }
   e = 0;
   while(e < levz.length)
   {
      var _loc2_ = clevc[e] + " " + clevc[e + rowz + 1];
      var _loc1_ = clevc[e + 1] + " " + clevc[e + rowz];
      if(_loc2_ == "0 0" && _loc1_ == "1 1")
      {
         clevc[e] = 1;
         clevc[e + rowz + 1] = 1;
      }
      if(_loc2_ == "1 1" && _loc1_ == "0 0")
      {
         clevc[e + 1] = 1;
         clevc[e + rowz] = 1;
      }
      e++;
   }
   for(e in clevc)
   {
      if(clevc[e] == 2)
      {
         clevc[e] = 1;
      }
   }
}
function golev()
{
   if(_root.ups[122])
   {
      if(player.hp < 1)
      {
         ups[122] = 1;
         cus = true;
      }
      else
      {
         ups[122] = 0;
      }
   }
   if(_root.skiner > 0 && _root.classit)
   {
      _root.classit = false;
      f10 = [0,45,46,34,36,117,157];
      highs = player;
      player.it = f10[_root.skiner];
      powerlevel();
      if(_root.skiner == 5)
      {
         _root.ups[122] = 1;
         _root.cols.push(122);
      }
   }
   if(_root.chala != 0)
   {
      if(!_root.wtfuuz)
      {
         _root.wtfuuz = true;
         f1 = [0,0,0,0,[81],[151,148],[52,47],[73,73,73,73],[153,89],[101,184]];
         f2 = f1[_root.chala];
         gofind = true;
         for(e in f2)
         {
            lastcra = -100;
            player.empty = false;
            highs = player;
            player.it = f2[e];
            powerlevel();
         }
         gofind = undefined;
      }
   }
   if(!_root.wtfuuz && _root.locker[38] && _root.skiner == 0 && _root.chala == 0)
   {
      player.empty = false;
      lastcra = -100;
      _root.wtfuuz = true;
      highs = player;
      player.it = 105;
      powerlevel();
      _root.wiptz += 1;
   }
   player.d.gotoAndStop(1);
   if(_root.shroom)
   {
      player.d.gotoAndStop(4);
      if(_root.shroom == 4)
      {
         player.it = 161;
      }
      else if(_root.shroom == 3)
      {
         player.it = 127;
      }
      else if(_root.shroom == 2)
      {
         player.it = 81;
      }
      else
      {
         player.it = 11;
         _root.soundy("1up.wav");
      }
      _root.shroom = false;
   }
   for(e in _root.bomf[_root.lev])
   {
      maxx = new flash.geom.Matrix();
      maxx.translate(_root.bomf[_root.lev][e][0],_root.bomf[_root.lev][e][1]);
      maxx.scale(hdx,hdx);
      splat.draw(crater,maxx);
   }
   savv = 0;
   if(_root.levsav[_root.lev] == undefined)
   {
      _root.levsav[_root.lev] = [];
   }
   if(_root.bomf[_root.lev] == undefined)
   {
      _root.bomf[_root.lev] = [];
   }
   if(_root.levblow[_root.lev] == undefined)
   {
      _root.levblow[_root.lev] = [];
   }
   else
   {
      for(e in _root.levblow[_root.lev])
      {
         f1 = _root.levblow[_root.lev][e];
         levz[f1] = 0;
      }
   }
   player.xp = _root.playerx;
   player.yp = _root.playery;
   if(!nomore && _root.donelev[_root.lev] && _root.chesttype[_root.lev] != 4)
   {
      _root.m.nextFrame();
   }
   qq = _root._quality;
   if(qq != "high")
   {
      _root._quality = "high";
   }
   if(!_this.error)
   {
      maxx = new flash.geom.Matrix();
      maxx.translate(b._x,b._y - bggg._y);
      maxx.scale(hdx,hdx);
      bgg.draw(b,maxx);
      f1 = 18;
      b.w1.gotoAndStop(f1);
      b.w2.gotoAndStop(f1);
      b.w3.gotoAndStop(f1);
      b.w4.gotoAndStop(f1);
      b.bg.gotoAndStop(f1);
      b._visible = false;
   }
   v1 = e + a;
   trg = createEmptyMovieClip("dblockx",489);
   dblock = new flash.display.BitmapData(gridxs,gridys,true,0);
   maxx = new flash.geom.Matrix();
   maxx.translate(0,0);
   trg.attachBitmap(dblock,1);
   trg._yscale = trg._xscale = 100 / hdx;
   e = 0;
   while(e < levz.length)
   {
      if(levzz(e) > 0 && levzz(e) <= 1 || levzz(e) == 1.9 || levzz(e) == 1.94 || levzz(e) == 1.93 || levzz(e) == 3)
      {
         outgrid(e);
         if(levzz(e) == 1.93 || levzz(e) == 1.94)
         {
            if(levzz(e) == 1.94)
            {
               webs[e] = random(3) + 1;
               tiles.gotoAndStop(158 + webs[e]);
            }
            else if(_root.chaps >= 7 && _root.chaps != 9)
            {
               tiles.gotoAndStop(70);
            }
            else
            {
               tiles.gotoAndStop(21);
            }
            levz[e] = 0.99;
         }
         else if(levzz(e) == 3)
         {
            v1 = [levzz(e + 1) == 3,levzz(e + rowz) == 3,levzz(e - 1) == 3,levzz(e - rowz) == 3];
            v2 = random(2) - 1;
            if(v1[0])
            {
               v2 = 1;
            }
            if(v1[1])
            {
               v2 = 2;
            }
            if(v1[2])
            {
               v2 = 3;
            }
            if(v1[3])
            {
               v2 = 4;
            }
            if(v1[2] && v1[0])
            {
               v2 = 5;
            }
            if(v1[3] && v1[1])
            {
               v2 = 6;
            }
            if(v1[0] && v1[1])
            {
               v2 = 7;
            }
            if(v1[1] && v1[2])
            {
               v2 = 8;
            }
            if(v1[2] && v1[3])
            {
               v2 = 9;
            }
            if(v1[3] && v1[0])
            {
               v2 = 10;
            }
            if(v1[0] && v1[1] && v1[2])
            {
               v2 = 11;
            }
            if(v1[1] && v1[2] && v1[3])
            {
               v2 = 12;
            }
            if(v1[2] && v1[3] && v1[0])
            {
               v2 = 13;
            }
            if(v1[3] && v1[0] && v1[1])
            {
               v2 = 14;
            }
            if(v1[0] && v1[1] && v1[2] && v1[3])
            {
               v2 = 15;
            }
            tiles.gotoAndStop(23 + v2);
         }
         else if(levzz(e) == 1.9)
         {
            levz[e] = 1.8;
            tiles.gotoAndStop(random(4) + 11);
         }
         else if(levzz(e) == 1)
         {
            if(_root.chaps >= 7 && _root.chaps != 9)
            {
               tiles.gotoAndStop(80 + random(3));
            }
            else if(_root.rarer[_root.lev] == e)
            {
               tiles.gotoAndStop(15);
            }
            else
            {
               tiles.gotoAndStop(random(10) + 1);
            }
         }
         else
         {
            tiles.gotoAndStop(94 + random(5) + _root.chaps * 5);
            clevc[e] = levz[e] = 0;
         }
         maxx = new flash.geom.Matrix();
         maxx.translate(xenf,yenf);
         maxx.scale(hdx,hdx);
         dblock.draw(tiles,maxx);
      }
      e++;
   }
   yyo = 1;
   e = 0;
   for(; e < levz.length; e++)
   {
      switch(levzz(e))
      {
         case 4:
            turd("locktile",e);
            continue;
         case 1.3:
            turd("egg",e);
            continue;
         case 1.4:
            if(random(40) != 0 || firsttime)
            {
               turd("fireblock",e);
               continue;
            }
         case 1.41:
            levz[e] = 1.4;
            turd("fireblock2",e);
            continue;
         case 1.5:
            if(random(40) != 0 || firsttime)
            {
               turd("breakblock",e);
               continue;
            }
         case 1.495:
            if(!(random(20) != 0 || firsttime))
            {
               break;
            }
            trg = _loc0_ = turd("breakblock3",e);
            if(_loc0_)
            {
               if(levzz(e) > 1)
               {
                  efly(trg);
               }
            }
            trg.shit = true;
            continue;
         case 1.4955:
            break;
         case 1.49:
            levz[e] = 1.5;
            turd("breakblock2",e);
            continue;
         default:
            continue;
      }
      trg = turd("breakblock4",e);
      trg.gold = true;
   }
   if(qq != "high")
   {
      _root._quality = qq;
   }
   e = 0;
   while(e < 700)
   {
      levz[ingrid(40 + e,130)] = 1.9;
      e += 10;
   }
   e = 0;
   while(e < 700)
   {
      levz[ingrid(40 + e,450)] = 1.9;
      e += 10;
   }
   e = 0;
   while(e < 300)
   {
      levz[ingrid(40,130 + e)] = 1.9;
      e += 10;
   }
   e = 0;
   while(e < 300)
   {
      levz[ingrid(600,130 + e)] = 1.9;
      e += 10;
   }
   e = 0;
   while(e < levz.length)
   {
      if(levzz(e) < 0)
      {
         f1 = 9 - levzz(e);
         if(!firsttime || f1 == 44.2 || f1 == 42.2 || f1 == 44.1 || f1 == 42.1 || f1 == 42)
         {
            outgrid(e);
            if(f1 < 10)
            {
               f1 = 5 - levzz(e);
            }
            f2 = 1;
            if(Math.round(f1) == 62)
            {
               f2 = 7;
            }
            if(!_root.beenlev2[_root.lev] || f1 > 6)
            {
               i = 0;
               while(i < f2)
               {
                  create(xenf,yenf + 10 + i,0,0,0,0,f1);
                  if(spezz == 23 && Math.round(f1) == 62)
                  {
                     f2 = 9;
                  }
                  i++;
               }
            }
            levz[e] = 0;
         }
      }
      if(Math.abs(levzz(e)) <= 0)
      {
         levz[e] = 0;
      }
      e++;
   }
   if(firsttime)
   {
      e = 0;
      while(e < levz.length)
      {
         if(levzz(e) < 0)
         {
            levz[e] = 0;
         }
         if(Math.abs(levzz(e)) <= 0)
         {
            levz[e] = 0;
         }
         e++;
      }
   }
   cloo();
   if(_root.lev == _root.boner)
   {
      _root.treasd = true;
   }
   if(_root.lev == _root.boner2)
   {
      _root.treasd2 = true;
   }
   if(_root.lev == _root.sac)
   {
      _root.sacb = true;
   }
   for(e in door)
   {
      trg = door[e];
      trg.gotoAndStop(4);
      if(_this.error)
      {
         trg._visible = false;
      }
      else if(_root.lev == _root.bossl && !trg._visible && (Math.abs(e - _root.door) == 2 || e == _root.door || _root.door <= 0) && !sat)
      {
         sat = true;
         trg._visible = true;
         trg.gol = 166;
      }
      else if(_this.satan)
      {
         trg._visible = false;
         if((Math.abs(e - _root.door) == 2 || _root.door <= 0) && !sat)
         {
            sat = true;
            trg.gol = _root.lastl;
            if(trg.gol == 166 || trg.gol <= 0)
            {
               trg.gol = 35;
            }
            trg._visible = true;
         }
      }
      if(trg._visible || trg.govo)
      {
         trg.blo = ingrid(trg._x,trg._y);
         _root.seenlev[trg.gol] = true;
         if(ups[91])
         {
            if(trg.gol == _root.sac)
            {
               _root.sacb = true;
            }
            if(trg.gol == _root.boner)
            {
               _root.treasd = true;
            }
            if(trg.gol == _root.boner2)
            {
               _root.treasd2 = true;
            }
            if(trg.gol == _root.hide)
            {
               hider();
            }
            if(trg.gol == _root.hide2)
            {
               hider2();
            }
            if(trg.gol == _root.minb)
            {
               _root.minbb = true;
            }
         }
         if(_root.lev == _root.hide && (_root.lastl == undefined || _root.lastl == _root.lev) && trg.gol != _root.bossl && trg.gol != _root.bossl2)
         {
            _root.lastl = trg.gol;
         }
         if(trg.gol == _root.cus || _root.lev == _root.cus)
         {
            _root.cusb = true;
            trg.cus = true;
            trg.gotoAndStop(36);
         }
         else if(_root.lev == _root.hide && (_root.lastl == trg.gol || ups[76]) || ups[76] && trg.gol == _root.hide && _root.lev != _root.bossl2 && _root.lev != _root.bossl && _root.lev != _root.minb && _root.lev != _root.chamb)
         {
            trg._visible = true;
            trg.hide = true;
            trg.gotoAndStop(17);
            levz[trg.blo] = 0;
            if(trg.govo && ups[76])
            {
               hider();
            }
         }
         else if(_root.lev == _root.hide2 && (_root.hide != trg.gol || ups[76]) || ups[76] && trg.gol == _root.hide2 && _root.lev != _root.bossl2 && _root.lev != _root.bossl && _root.lev != _root.minb)
         {
            trg.hide2 = true;
            trg._visible = trg.govo;
            if(trg.govo && ups[76])
            {
               hider2();
            }
            trg.gotoAndStop(17);
            levz[trg.blo] = 0;
         }
         else if((trg.gol == _root.hide || _root.lev == _root.hide) && !_this.satan)
         {
            trg.hide = true;
            trg._visible = trg.govo;
            trg.gotoAndStop(10);
            levz[trg.blo] = 1.85;
            if(_root.lev == _root.bossl || _root.lev == _root.bossl2 || _root.lev == _root.bossl || _root.lev == _root.bossl2 || _root.lev == _root.minb || _root.lev == _root.chamb)
            {
               levz[trg.blo] = 2;
            }
         }
         else if((trg.gol == _root.hide2 || _root.lev == _root.hide2) && !_this.satan)
         {
            trg.hide2 = true;
            trg._visible = true;
            trg.gotoAndStop(10);
            levz[trg.blo] = 1.85;
            if(trg.gol == _root.bossl || trg.gol == _root.bossl2 || _root.lev == _root.bossl || _root.lev == _root.bossl2 || _root.lev == _root.minb || _root.lev == _root.chamb)
            {
               levz[trg.blo] = 2;
            }
         }
         else if(_this.satan || trg.gol == 166)
         {
            trg.sat = true;
            trg.gotoAndStop(12);
         }
         else if(trg.gol == _root.bossl || _root.lev == _root.bossl || trg.gol == _root.bossl2 || _root.lev == _root.bossl2)
         {
            trg.boss = true;
            _root.bossd = true;
            trg.gotoAndStop(16);
         }
         else if(trg.gol == _root.chamb || _root.lev == _root.chamb)
         {
            chama = 1;
            _root.chambb = true;
            trg.chamb = true;
            trg.gotoAndStop(27);
         }
         else if(trg.gol == _root.gamb)
         {
            _root.gambb = true;
            trg.gamb = true;
            trg.gotoAndStop(20);
         }
         else if(trg.gol == _root.boner2 || _root.lev == _root.boner2)
         {
            _root.treasd2 = true;
            trg.boner2 = true;
            if(_root.bona2)
            {
               trg.gotoAndStop(32);
            }
            else
            {
               trg.gotoAndStop(30);
            }
         }
         else if(trg.gol == _root.boner || _root.lev == _root.boner)
         {
            _root.treasd = true;
            trg.boner = true;
            if(_root.bona)
            {
               trg.gotoAndStop(32);
            }
            else
            {
               trg.gotoAndStop(30);
            }
         }
         else if(trg.gol == _root.shopl)
         {
            _root.shopaz = true;
            trg.shop = true;
            trg.gotoAndStop(9);
         }
         else if(trg.gol == _root.lib)
         {
            _root.libb = true;
            trg.lib = true;
            trg.gotoAndStop(9);
         }
         else
         {
            levz[trg.blo] = 1.85;
         }
         if(_root.chaps == 11 && !trg.hide && !trg.hide2)
         {
            levz[trg.blo] = 2;
         }
      }
      f2 = 28;
      f1 = (trg._rotation - 90) / 180 * 3.141592653589793;
      trg.xp = trg._x - Math.sin(f1) * f2;
      trg.yp = trg._y + Math.cos(f1) * f2;
      if(_root.levz[trg.gol] == 0 || _root.levz[trg.gol] == undefined)
      {
         trg._visible = false;
      }
   }
   mapd();
   for(e in _root.levit[_root.lev])
   {
      create(_root.levit[_root.lev][e][1],_root.levit[_root.lev][e][2],0,0,0,0,5 + _root.levit[_root.lev][e][0] * 0.01);
   }
   if(gopill)
   {
      create(320,240,0,0,0,0,5.07);
   }
   if(_root.whatstart2)
   {
      _root.whatstart2 = false;
      e = 0;
      while(e < 10)
      {
         e++;
      }
      e = 0;
      while(e < 18)
      {
         e++;
      }
   }
   if(inem)
   {
      inl.gotoAndStop("empty");
      inl.swapDepths(33901);
   }
   else
   {
      gotoAndStop("empty");
   }
   lads.swapDepths(491);
   _root.beenlev2[_root.lev] = true;
}
function spawnb(f1, f2)
{
   if(levz.length <= 1)
   {
      levz = new Array(200);
   }
   if(f1._alpha < 30)
   {
      if(f2 < -0.5 || f2 > 0)
      {
         f2 -= 0.2;
      }
   }
   else if(f1._alpha < 75)
   {
      if(f2 == 1)
      {
         f2 = 1.9;
      }
      else if(f2 < -0.5 || f2 > 0)
      {
         f2 -= 0.1;
      }
   }
   var _loc3_ = ingrid(f1._x,f1._y);
   levz[_loc3_] = f2;
}
function sideflip(f1, trg2)
{
   if(trg2 == undefined)
   {
      if(trg.sf2 == undefined)
      {
         trg2 = trg.d;
      }
      else
      {
         trg2 = trg.sf2;
      }
   }
   trg.sf2 = trg2;
   trg.sf = true;
   if(f1 * trg2._xscale < -100)
   {
      trg2._xscale *= -1;
   }
}
function pathfind(trg, f1, f2, f3)
{
   if(trg.speed == undefined)
   {
      trg.speed = 1;
   }
   if(trg.s == 35)
   {
      f3 *= 1.1;
   }
   if((trg.xp != f1 || trg.yp != f2) && fra > 5)
   {
      v1 = ingrid(f1,f2);
      outgrid(v1);
      xpp = xenf;
      ypp = yenf;
      v2 = ingrid(trg.xp,trg.yp);
      outgrid(v2);
      xppp = xenf;
      yppp = yenf;
      trg.tiler = v2;
      trg.tiletimer = 2 / Math.max(0.2,f3);
      if(fra % 3 == 1)
      {
         v2 = 40 / enfget(trg.xbew,trg.ybew);
         v2 = levzz(ingrid(trg.xp + trg.xbew * v2,trg.yp + trg.ybew * v2));
         if(v2 > 0 && v2 < 1)
         {
            trg.speed = 0.7;
         }
         else
         {
            trg.speed = 1;
         }
      }
      v2 = trg.tiler;
      if(levzz(trg.tiler) < 0.99 && trg.s != 16 && trg.s != 47)
      {
         if(trg.s == 58)
         {
            levz[trg.tiler] = 0.2;
         }
         else
         {
            levz[trg.tiler] = 0.9;
         }
      }
      if(f3 == undefined)
      {
         f3 = 1;
      }
      f3 *= trg.speed;
      nogo = true;
      if((fra + trg.e) % 6 == 1)
      {
         if(trg.see)
         {
            trg.lastv = v5 = linecheckxx(xppp,yppp,xpp,ypp);
         }
         else
         {
            trg.lastv = v5 = linecheck(xppp,yppp,xpp,ypp);
         }
         if(trg.lastv && trg.firss + 40 <= fra && random(3) == 0 && gochar)
         {
            trg.firss = fra;
            _root.soundy("Zombie_Walker_Kid.mp",100);
         }
      }
      else
      {
         v5 = trg.lastv;
      }
      trg.d.h.stop();
      if(!trg.gonuts)
      {
         f3 *= 0.83;
      }
      if(trg.d.h._currentframe > 2)
      {
         f3 *= 1.2;
         trg.d.h.nextFrame();
      }
      else if(trg.gonuts)
      {
         trg.d.h.gotoAndStop(2);
      }
      if(v5 && (enf = enfcheck(trg.xp,trg.yp,f1,f2,750,true)) > 0 || v1 == v2)
      {
         if(trg.gonuts)
         {
            trg.d.h.nextFrame();
            f3 *= 1.1;
         }
         trg.tiletimer -= 5;
         trg.gridtime -= 10;
         xenf = f1;
         yenf = f2;
         nogo = false;
      }
      else if(levzz(v1) != 1 || true)
      {
         if((trg.gridder == undefined || trg.gridtime < 0) && nogridyet)
         {
            nogo = true;
            nogridyet = false;
            trg.gridder = levz.slice(0,-1);
            trg.gridder[ingrid(trg.xp,trg.yp)] = 0;
            trg.gridder[v1] = 0;
            acts = [];
            acts2 = [];
            z = -1;
            while(z > -100 && trg.gridder[v2] >= 0)
            {
               if(z == -1)
               {
                  pff(v1,-1);
               }
               else
               {
                  for(e in acts)
                  {
                     v1 = trg.gridder[acts[e]];
                     if(v1 < z)
                     {
                        acts2.push(acts[e]);
                     }
                     else
                     {
                        outgrid(acts[e]);
                        pff(ingrid(xenf,yenf + roxx),v1);
                        pff(ingrid(xenf + roxx,yenf),v1);
                        pff(ingrid(xenf - roxx,yenf),v1);
                        pff(ingrid(xenf,yenf - roxx),v1);
                     }
                  }
               }
               acts2[acts2.length] = 0;
               acts = acts2.slice(0,-1);
               acts2 = [];
               z--;
            }
            if(z < -99)
            {
               trg.gridder = 0;
            }
            trg.gridtime = Math.min(20,- z) + ball.length * 2 + 7;
         }
         trg.gridtime * 0.9;
         trg.gridtime -= f3 * 3;
         if(trg.gridder != undefined && trg.gridder != 0)
         {
            outgrid(v2);
            v3 = -100;
            testarr = [ingrid(xenf + roxx,yenf),ingrid(xenf - roxx,yenf + roxx),ingrid(xenf - roxx,yenf),ingrid(xenf - roxx,yenf - roxx),ingrid(xenf,yenf - roxx),ingrid(xenf + roxx,yenf - roxx),ingrid(xenf,yenf + roxx),ingrid(xenf + roxx,yenf + roxx)];
            for(e in testarr)
            {
               if(testarr[e] > 0)
               {
                  f1 = e + 1;
                  if(f1 + 1 > testarr.length)
                  {
                     f1 = 0;
                  }
                  if(e == 0 || e == 2 || e == 4 || e == 6)
                  {
                     b1 = true;
                  }
                  else
                  {
                     b1 = levz[testarr[e - 1]] == 0 || levz[testarr[f1]] == 0;
                  }
                  if(e == 0 || e == 2 || e == 4 || e == 6)
                  {
                     pff1(testarr[e],0);
                  }
               }
            }
            if(v3 < 0)
            {
               outgrid(v4);
               nogo = false;
            }
         }
      }
      if(!nogo && (enf = enfget(xenf,yenf)) > 0.1)
      {
         var _loc6_ = xenf - trg.xp;
         var _loc7_ = yenf - trg.yp;
         xenf = _loc6_;
         yenf = _loc7_;
         enf = enfget(xenf,yenf);
         if(enf > 1)
         {
            enf = Math.min(enf * 0.1,2) / enf * f3;
            trg.xbew *= 0.7;
            trg.ybew *= 0.7;
            trg.xbew += xenf * enf;
            trg.ybew += yenf * enf;
         }
      }
      else
      {
         xenf = yenf = 0;
         trg.xbew *= 0.5;
         trg.ybew *= 0.5;
      }
   }
   else
   {
      xenf = yenf = 0;
      trg.xbew *= 0.85;
      trg.ybew *= 0.85;
   }
   gochar = false;
}
function mhity(f1, f2)
{
   if(f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447)
   {
      f33 = ingrid(f1,f2);
      f1 = levzz(f33);
      if(f1 >= 1 && f1 != 3)
      {
         return true;
      }
   }
   return true;
}
function mhitx(f1, f2)
{
   if(f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447)
   {
      f1 = levzz(ingrid(f1,f2));
      if(f1 > 1.8 && f1 != 3)
      {
         return true;
      }
   }
   return true;
}
function mhix()
{
   f3 = false;
   for(i in hardx[v1])
   {
      f3 = !f3;
      if(f3)
      {
         if(mhity(f1 + hardx[v1][i],f2 + hardy[v1][i]))
         {
            f5 += hardx[v1][i];
            f6 += hardy[v1][i];
         }
      }
   }
   f3 = true;
   if(Math.abs(f5) > 0 || Math.abs(f6) > 0 || trg.gh)
   {
      for(i in hardx[v1])
      {
         f3 = !f3;
         if(f3)
         {
            if(mhity(f1 + hardx[v1][i],f2 + hardy[v1][i]))
            {
               f5 += hardx[v1][i];
               f6 += hardy[v1][i];
            }
         }
      }
   }
}
function shit(f1, f2)
{
   return blorz.hitTest(f1 + _X,f2 + _Y,true);
}
function mhit(f1, f2)
{
   if(f1 > 20 && f1 < 620 && f2 > 110 && f2 < 447)
   {
      f1 = levzz(ingrid(f1,f2));
      if(f1 >= 1)
      {
         return true;
      }
   }
   return true;
}
function pff3(f4)
{
   f4 = levzz(f4);
   if(f4 != 0.99 && grox != f4)
   {
      if(f4 >= 1)
      {
         f5 = -1;
      }
      else if(f4 > 0.3)
      {
         f5 -= 0.1;
      }
   }
}
function pff3x1(f4)
{
   f4 = levzz(f4);
   if(f4 != 3 && grox != f4)
   {
      if(f4 >= 1)
      {
         f5 = -1;
      }
      else if(f4 > 0.3)
      {
         f5 -= 0.1;
      }
   }
}
function linecheckxx(f1, f2, f3, f4)
{
   var _loc5_ = f1 - f3;
   var _loc6_ = f2 - f4;
   var _loc7_ = enfget(_loc5_,_loc6_);
   var _loc8_ = 2.5;
   grox = ingrid(f1,f2);
   if(_loc7_ > 0)
   {
      _loc5_ /= _loc7_;
      _loc6_ /= _loc7_;
      _loc5_ *= 10;
      _loc6_ *= 10;
      var _loc2_ = 0;
      while(_loc2_ < _loc7_)
      {
         f1 -= _loc5_;
         f2 -= _loc6_;
         f3 = ingrid(f1,f2);
         if(levzz(f3) >= 1.8 && levzz(f3) != 1.85 && levzz(f3) != 3 && f3 != gro)
         {
            _loc8_ = -1;
         }
         _loc2_ += 10;
      }
   }
   grox = undefined;
   return _loc8_ > 0;
}
function linecheckx(f1, f2, f3, f4)
{
   var _loc5_ = f1 - f3;
   var _loc6_ = f2 - f4;
   var _loc4_ = enfget(_loc5_,_loc6_);
   f5 = 2.5;
   f6 = 5;
   grox = ingrid(f1,f2);
   if(_loc4_ > 0)
   {
      _loc5_ /= _loc4_;
      _loc6_ /= _loc4_;
      _loc5_ *= 10;
      _loc6_ *= 10;
      var _loc1_ = 0;
      while(_loc1_ < _loc4_)
      {
         f1 -= _loc5_;
         f2 -= _loc6_;
         pff3(ingrid(f1,f2));
         _loc1_ += 10;
      }
   }
   grox = undefined;
   return f5 > 0;
}
function linecheck(f1, f2, f3, f4)
{
   grox = ingrid(f1,f2);
   var _loc5_ = f1 - f3;
   var _loc6_ = f2 - f4;
   var _loc4_ = enfget(_loc5_,_loc6_);
   f5 = 2.5;
   f6 = 5;
   if(_loc4_ > 0)
   {
      _loc5_ /= _loc4_;
      _loc6_ /= _loc4_;
      _loc5_ *= 6;
      _loc6_ *= 6;
      var _loc3_ = 0;
      while(_loc3_ < _loc4_)
      {
         f1 -= _loc5_;
         f2 -= _loc6_;
         pff3(ingrid(f1 + f6,f2 + f6));
         pff3(ingrid(f1 - f6,f2 + f6));
         pff3(ingrid(f1 - f6,f2 - f6));
         pff3(ingrid(f1 + f6,f2 - f6));
         _loc3_ += 6;
      }
   }
   grox = undefined;
   return f5 > 0;
}
function linechecky(f1, f2, f3, f4)
{
   var _loc5_ = f1 - f3;
   var _loc6_ = f2 - f4;
   var _loc4_ = enfget(_loc5_,_loc6_);
   grox = f3 = ingrid(f1,f2);
   f5 = 2.5;
   f6 = 2;
   if(_loc4_ > 0)
   {
      _loc5_ /= _loc4_;
      _loc6_ /= _loc4_;
      _loc5_ *= 10;
      _loc6_ *= 10;
      var _loc3_ = 0;
      while(_loc3_ < _loc4_)
      {
         f1 -= _loc5_;
         f2 -= _loc6_;
         pff3x1(ingrid(f1 + f6,f2 + f6));
         pff3x1(ingrid(f1 - f6,f2 + f6));
         pff3x1(ingrid(f1 - f6,f2 - f6));
         pff3x1(ingrid(f1 + f6,f2 - f6));
         _loc3_ += 10;
      }
   }
   return f5 > 0;
}
function st11(f1)
{
   _root.hud.st1.tex = f1;
   _root.hud.st1.gotoAndPlay(1);
   _root.hud.st1._visible = true;
}
function itn2(f1)
{
   if(f1 >= 18 || f1 == 16)
   {
      return 40;
   }
   return 32;
}
function itn(f1)
{
   if(f1 < 55)
   {
      return 32;
   }
   return 40;
}
function powerlevel()
{
   _root.beenlev[_root.lev] = 2;
   var _loc3_ = _root.fmode;
   if(!highs.empty)
   {
      if(fra - lastcraf > 30)
      {
         lastcraf = fra;
         if(!(_root.lev == 35 && _root.chaps == 1 && fra < 15))
         {
            if(highs.it == 12 || highs.it == 11 || highs.it == 71)
            {
               _root.soundy("1up.wav");
            }
            else if(highs.it == 92)
            {
               _root.soundy("band aid pick up.wav",50);
            }
            else if(_root.lev == _root.bossl || _root.lev == _root.minb)
            {
               _root.soundy("Powerup2.mp",50);
            }
            else if(_root.lev == _root.boner || _root.lev == _root.boner2)
            {
               _root.soundy("Powerup1.mp",50);
            }
            else if(_root.lev == _root.shopl)
            {
               _root.soundy("Powerup3.mp",50);
            }
            else
            {
               _root.soundy("Choir_unlock.wav",50);
            }
         }
      }
   }
   maxp = true;
   if(!highs.empty && fra - lastcra >= 30)
   {
      if(chama == 1 && _root.lev == _root.chamb)
      {
         chama = 2;
      }
      st11(_root.st1[highs.it]);
      st22(_root.st2x[highs.it]);
      if(highs.d._currentframe == 10)
      {
         var _loc2_ = highs.d.d;
      }
      else
      {
         _loc2_ = highs.d;
      }
      highs.empty = true;
      for(i in _root.ittt9)
      {
         if(highs.it == _root.ittt9[i])
         {
            _root.bookster = true;
         }
      }
      if(highs.it == 22 || highs.it == 23 || highs.it == 24 || highs.it == 25 || highs.it == 26)
      {
         player.hp = player.hp + 1;
      }
      else if(highs.it == 12 || highs.it == 15 || highs.it == 16)
      {
         player.hp = 1000;
         if(highs.it == 15)
         {
            hat(25);
         }
      }
      _root.ups[highs.it]++;
      if(highs.it == 54 || highs.it == 21)
      {
         mapd();
      }
      if(!gofind)
      {
         _root.colss[highs.it] = true;
      }
      if(highs != player)
      {
         highs.d.d.d.gotoAndPlay(21);
      }
      player.d.gotoAndStop(4);
      player.it = highs.it;
      player.d.d.d.gotoAndPlay(1);
      if(highs.it == 7)
      {
         _root.fmode = 8;
         hat(7);
      }
      else if(highs.it < 8)
      {
         _root.hmode = _root.fmode = 1 + highs.it;
      }
      if(highs.it == 27)
      {
         hat(27);
      }
      if(highs.it == 81)
      {
         if(_root.skiner == 4)
         {
            _root.armor = 1;
         }
         else
         {
            _root.ups[23] += 1 - player.mhp;
            player.hp = 1;
         }
         ups[23] = _root.ups[23];
      }
      if(highs.it == 52)
      {
         _root.ittt.push(125,125,125,125,125,125,106,106,106,106,106,106);
      }
      if(highs.it == 179)
      {
         eta();
      }
      if(highs.it == 137)
      {
         if(_root.ups[137] == 1)
         {
            _root.bombs += 5;
         }
      }
      else if(highs.it == 189)
      {
         _root.hmode = 42;
         _root.bmode = 27;
         player.hp = player.hp + 1;
      }
      else if(highs.it == 190)
      {
         hat(58);
         _root.bombs = 99;
      }
      else if(highs.it == 191)
      {
         _root.hmode = 44;
      }
      else if(highs.it == 193)
      {
         hat(55);
         player.hp = player.hp + 1;
      }
      else if(highs.it == 194)
      {
         kogs = [5.3];
         hat(60);
      }
      else if(highs.it == 195)
      {
         kogs = [5.07,5.07,5.07,5.07];
         hat(59);
      }
      else if(highs.it == 196)
      {
         hat(56);
         kogs = [5.010000003,5.010000003];
      }
      else if(highs.it == 197)
      {
         hat(57);
      }
      else if(highs.it == 198)
      {
         _root.bmode = 26;
         kogs = [5.35,5.07,5.02,5.010000003,5.3,5.03,5.04];
      }
      else if(highs.it == 182)
      {
         _root.ups[3] = ups[3] = 1;
         _root.hmode = 41;
         _root.armor = _root.armor + 1;
         player.hp += 15;
      }
      else if(highs.it == 183)
      {
         hat(53);
      }
      else if(highs.it == 180)
      {
         _root.bmode = 24;
      }
      else if(highs.it == 149)
      {
         if(!ups[2])
         {
            ups[2] = _root.ups[2] = 0.5;
         }
      }
      else if(highs.it == 168)
      {
         hat(50);
      }
      else if(highs.it == 139)
      {
         _root.bmode = 20;
      }
      else if(highs.it == 169)
      {
         _root.hmode = 40;
         if(!ups[2])
         {
            ups[2] = _root.ups[2] = 0.3;
         }
         _root.fmode = 20;
      }
      else if(highs.it == 155)
      {
         hat(47);
      }
      else if(highs.it == 156)
      {
         hat(48);
      }
      else if(highs.it == 161)
      {
         hat(49);
      }
      else if(highs.it == 153)
      {
         hat(46);
         if(!ups[2])
         {
            ups[2] = _root.ups[2] = 0.4;
         }
         _root.fmode = 23;
      }
      else if(highs.it == 165)
      {
         hat(51);
      }
      else if(highs.it == 176)
      {
         hat(52);
         player.hp += 1.5;
      }
      else if(highs.it == 154)
      {
         _root.hmode = 38;
      }
      else if(highs.it == 143)
      {
         _root.hmode = 35;
      }
      else if(highs.it == 159)
      {
         sk = _root.sk = 7;
         _root.hmode = 39;
         _root.bmode = 22;
         _root.ups[115] = ups[115] = 1;
      }
      else if(highs.it == 157)
      {
         hat(41);
      }
      else if(highs.it == 150)
      {
         _root.fmode = 24;
         hat(44);
      }
      else if(highs.it == 151)
      {
         _root.hmode = 37;
         _root.fmode = 21;
      }
      else if(highs.it == 148)
      {
         _root.bmode = 21;
         pilcol(40,100,40);
      }
      else if(highs.it == 138)
      {
         hat(42);
         player.hp = player.hp + 1;
      }
      else if(highs.it == 140)
      {
         _root.hmode = 34;
         _root.bombs += 5;
      }
      else if(highs.it == 141)
      {
         hat(43);
         cowss = 7;
      }
      else if(highs.it == 125)
      {
         _root.bombs += 5;
      }
      else if(highs.it == 134)
      {
         _root.bmode = 19;
      }
      else if(highs.it == 118)
      {
         sk = _root.sk = 7;
      }
      else if(highs.it == 114)
      {
         _root.bmode = 15;
      }
      else if(highs.it == 122)
      {
         ups[122] = false;
      }
      else if(highs.it == 116)
      {
         _root.itc = 1;
         hat(36);
      }
      else if(highs.it == 132)
      {
         hat(39);
      }
      else if(highs.it == 119)
      {
         player.hp += 5;
         hat(35);
      }
      else if(highs.it == 129)
      {
         player.hp += 0.5;
         _root.bmode = 14;
      }
      else if(highs.it == 115 || highs.it == 185)
      {
         _root.hmode = 32;
         _root.ups[115] = ups[115] = 1;
         _root.fmode = 18;
      }
      else if(highs.it == 110)
      {
         hat(33);
      }
      else if(highs.it == 109)
      {
         hat(34);
      }
      else if(highs.it == 103)
      {
         _root.hmode = 26;
         _root.fmode = 15;
      }
      else if(highs.it == 104)
      {
         _root.fmode = 16;
         hat(32);
      }
      else if(highs.it == 106)
      {
         _root.hmode = 9;
         _root.bombs += 5;
      }
      else if(highs.it == 101)
      {
         player.hp = player.hp + 1;
         hat(29);
      }
      else if(highs.it == 59)
      {
         _root.hmode = 24;
      }
      else if(highs.it == 29)
      {
         _root.bmode = 10;
      }
      else if(highs.it == 46)
      {
         _root.bmode = 11;
      }
      else if(highs.it == 64)
      {
         hat(26);
      }
      else if(highs.it == 63)
      {
         hat(24);
      }
      else if(highs.it == 92)
      {
         _root.armor += 2;
         player.hp = player.hp + 1;
         hat(23);
      }
      else if(highs.it != 86)
      {
         if(highs.it == 87)
         {
            hat(22);
         }
         else if(highs.it != 88)
         {
            if(highs.it == 89)
            {
               hat(20);
               _root.fmode = 14;
            }
            else if(highs.it == 90)
            {
               hat(21);
            }
            else if(highs.it == 91)
            {
               hat(19);
            }
            else if(highs.it == 81)
            {
               ups[81] = _root.ups[81] = 8;
               _root.catlives = 1;
            }
            else if(highs.it == 82)
            {
               _root.hmode = 22;
               sk = _root.sk = 7;
            }
            else if(highs.it == 72)
            {
               _root.armor += 3;
               _root.ittt4.push(33,33,33);
               _root.bmode = 6;
            }
            else if(highs.it == 79)
            {
               _root.armor += 1;
               hat(17);
            }
            else if(highs.it == 80)
            {
               _root.armor += 2;
               _root.bmode = 8;
               _root.hmode = 20;
               sk = _root.sk = 7;
            }
            else if(highs.it == 20)
            {
               _root.bmode = 3;
            }
            else if(highs.it == 13)
            {
               _root.bmode = 4;
               _root.hmode = 12;
            }
            else if(highs.it == 14)
            {
               _root.hmode = 11;
            }
            else if(highs.it == 59)
            {
               _root.fmode = 11;
            }
            else if(highs.it == 31)
            {
               _root.hmode = 13;
            }
            else if(highs.it == 30)
            {
               _root.bmode = 5;
            }
            else if(highs.it == 21 || highs.it == 54)
            {
               mapd();
            }
            else if(highs.it == 9)
            {
               hat(9);
            }
            else if(highs.it == 69)
            {
               _root.hmode = 17;
            }
            else if(highs.it == 55)
            {
               _root.hmode = 18;
            }
            else if(highs.it == 76)
            {
               hat(13);
            }
            else if(highs.it == 75)
            {
               player.hp += 2;
               hat(15);
            }
            else if(highs.it == 32)
            {
               hat(16);
            }
            else if(highs.it == 28)
            {
               _root.bmode = 7;
            }
         }
      }
      if(highs.it == 48)
      {
         _root.fmode = 10;
      }
      if(highs.it >= 33 && highs.it != 46 && highs.it != 48 && highs.it < 50 || highs.it == 56 || highs.it == 58 || highs.it == 65 || highs.it == 66 || highs.it == 77 || highs.it == 78 || highs.it == 83 || highs.it == 84 || highs.it == 85 || highs.it == 86 || highs.it == 93 || highs.it == 97 || highs.it == 102 || highs.it == 105 || highs.it == 107 || highs.it == 111 || highs.it == 123 || highs.it == 124 || highs.it == 126 || highs.it == 127 || highs.it == 130 || highs.it == 133 || highs.it == 135 || highs.it == 136 || highs.it == 137 || highs.it == 145 || highs.it == 146 || highs.it == 147 || highs.it == 158 || highs.it == 164 || highs.it == 160 || highs.it == 166 || highs.it == 171 || highs.it == 175 || highs.it == 177 || highs.it == 181 || highs.it == 186 || highs.it == 192 || highs.it == 177)
      {
         _root.ups[highs.it] = 1;
         itb = 15;
         _root.hud.it.gotoAndStop(8);
         _root.colit = highs.it;
         _root.iter[_root.it] = _root.itc;
         if(_root.it > 0)
         {
            if(_root.it == 90)
            {
               player.flyby = false;
            }
            highs.d.gotoAndStop(10);
            _loc2_ = highs.d.d;
            _loc2_.d.gotoAndPlay(1);
            f11 = _root.it + itn2(_root.it);
            _loc2_.d.d.gotoAndStop(f1);
            _root.it = highs.it - itn(highs.it);
            highs.it = f11;
            highs.empty = false;
            highs.done = false;
            highs.dones = false;
            highs.d.d.d.d.gotoAndStop(highs.it);
         }
         else
         {
            _root.it = highs.it - itn(highs.it);
         }
         if(_root.it != 11)
         {
            _root.itc = _root.iter[_root.it];
            if(ups[116])
            {
               _root.itc = Math.max(0.334,_root.itc);
            }
         }
      }
      else
      {
         if(highs.d._currentframe != 10 && highs.s == 5)
         {
            highs.d.gotoAndStop(11);
         }
         _root.cols.push(highs.it);
         if(!itzz(highs.it) && !_this.satan)
         {
            _root.wiptz = _root.wiptz + 1;
         }
         if(highs.it == 165 || highs.it == 183 || highs.it == 143 || highs.it == 194)
         {
            _root.wiptz -= 0.75;
         }
         if(highs.it == 114 || highs.it == 168 || highs.it == 182 || highs.it == 52 || highs.it == 118)
         {
            _root.wiptz += 0.3;
         }
      }
      if(highs.it >= 50 && highs.it < 54)
      {
         hat(highs.it - 48);
      }
      else
      {
         switch(highs.it)
         {
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
      if(highs.it == 48)
      {
         hat(6);
      }
      if(highs.it == 70)
      {
         hat(8);
      }
      if(highs.it == 62)
      {
         _root.hmode = 15;
      }
      if(highs.it == 69)
      {
         _root.fmode = 13;
      }
      lastcra = fra;
      if(highs != player)
      {
         if(highs.d._currentframe == 10)
         {
            highs.dones = false;
         }
         else
         {
            highs.done = true;
         }
      }
      if(_root.ups[4] + _root.ups[38] + _root.ups[42] + Math.max(0,_root.ups[81]) >= 1.1)
      {
         _root.locker[40] = true;
      }
      if(_root.ups[13] + _root.ups[14] + _root.ups[70] >= 2)
      {
         _root.locker[37] = true;
      }
      if(_root.ups[55] && _root.ups[31] + _root.ups[30] + _root.ups[39] + _root.ups[41] + _root.ups[102] + _root.ups[114] + _root.ups[139] + _root.ups[165] >= 1)
      {
         _root.locker[47] = true;
      }
   }
   else
   {
      highs.dones = false;
   }
   nohit = false;
   if(_root.fmode != _loc3_)
   {
   }
   ups[highs.it] = _root.ups[highs.it];
   if(highs.it == 54 || highs.it == 21)
   {
      mapd();
   }
}
function invp()
{
   player._visible = false;
   for(e in ball)
   {
      trg2 = ball[e];
      if(trg2.s <= 3)
      {
         trg2._visible = false;
      }
   }
}
function st22(f1)
{
   if(f1 != 0)
   {
      _root.st2._visible = f1 != 0;
      _root.st2.gotoAndPlay(1);
      _root.st2.tex = f1;
      f1 = f1.split("");
      _root.st2._x = 620 - f1.length * 10;
   }
}
function frez(trg)
{
   if(trg.frezz < 0 || !trg.frezz)
   {
      trg.frezz = 70;
      if(trg.s == 102)
      {
         trg.frezz = 25;
      }
      trg.uncol = Math.round(fra + trg.freez + 1);
      speco(trg);
   }
}
function spida(f1, trg)
{
   if(f1)
   {
      trg.spida = 2;
   }
   else
   {
      trg.spida = 1;
   }
   if(f1 == undefined)
   {
      trg.spid = 120;
   }
   else
   {
      trg.spid = 60;
   }
   trg.uncol = Math.round(fra + trg.spid);
   speco(trg);
}
function spidcol(trg)
{
   if(ups[110] && !lows.ba && random(5) == 0 && !trg.mom && trg.s != 84)
   {
      if(trg.mag)
      {
         for(z in trg.mags)
         {
            frez(trg.mags[z]);
         }
      }
      if(trg.worm == 6)
      {
         for(z in worm)
         {
            frez(worm[z]);
         }
      }
      else if(!trg.worm)
      {
         frez(trg);
      }
      if(trg.s == 19)
      {
         trg2 = trg;
         while(trg2.trg2)
         {
            trg2 = trg2.trg2;
            frez(trg2);
         }
         trg2 = trg;
         while(trg2.trg3)
         {
            trg2 = trg2.trg3;
            frez(trg2);
         }
      }
   }
   if(ups[151] || purr)
   {
      if(!lows.ba && random(6) == 0 || purr && bluf < 1 && ball.length < 30 && (random(3) == 0 || !ups[152]))
      {
         if(Math.random() * ablub < 5 || random(3) == 0)
         {
            bluf++;
         }
      }
   }
   blufer = trg;
   if(ups[103] && !lows.ba && random(4) == 0 || lows.trixer == 1)
   {
      if(trg.poiss > 20)
      {
         trg.poiss += 40;
      }
      else
      {
         trg.poiss = 60;
      }
      if(lows.trixer == 1)
      {
         trg.poisd = 4;
      }
      else
      {
         trg.poisd = 2;
      }
      trg.uncol = Math.round(fra + 60);
      speco(trg);
   }
   if(ups[89] && random(4) == 0 || lows.ba == 3 && random(2) == 0 || lows.trixer == 3)
   {
      spida(lows.ba == 3 || lows.trixer == 3,trg);
   }
}
function eta()
{
   _root.soundy("superholy.wav",100);
   _root.eta = !_root.eta;
   if(!_root.eta)
   {
      player.hp = player.hp + 1;
      ups[22] = ups[22] + 1;
      _root.eto = _root.eto + 1;
      _root.over.gotoAndStop(16);
      _root.ups[22] = ups[22];
   }
}
function junx()
{
   if(_root.junxx.length > 0)
   {
      if(poli)
      {
         poli = false;
         return 47;
      }
      if(trg.gold)
      {
         return 52;
      }
      f1 = random(_root.junxx.length);
      var _loc2_ = _root.junxx[f1] * 1;
      _root.junxx.splice(f1,1);
      return _loc2_;
   }
   return tater();
}
function tater()
{
   if(random(5) != 0)
   {
      return random(22) + 7;
   }
   return random(5) + 70;
}
function pillc(trg)
{
   var _loc3_ = false;
   if(trg > 7)
   {
      f2 = trg;
   }
   else if(trg == 4)
   {
      f2 = random(6) + 1;
   }
   else if(trg == 3)
   {
      f2 = tater();
   }
   else
   {
      f2 = trg.col;
   }
   f1 = _root.pilc > 0;
   f3 = f2 > 28 && f2 < 69;
   if(f3)
   {
      if(!trixx(f2) && (!trixx(53) || ups[139]))
      {
         player.pilc = pic(f2);
         f1 = ["Fish Head","Pinky Eye","Push Pin","Liberty Cap","Umbilical Cord","Childs Heart","Curved Horn","Rusted Key","Goat Hoof","Moms Pearl","Cancer","Red Patch","Match Stick","Lucky Toe","Cursed Skull","Safety Cap","Ace of Spades","Isaacs Fork","The Polaroid","A Missing Page","Bloody Penny","Burnt Penny","Flat Penny","Counterfeit Penny","Tick","Isaacs Head","Maggys Faith","Judas\' Tongue","???\'s Soul","Samsons Lock","Cains Eye","Eves Bird Foot","The Left Hand","Game Squid"];
         f1 = f1[Math.max(0,f2 - 29)];
         st11(f1);
         _root.atrixer = _root.trixer;
         _root.trixer = f1;
         _root.soundy("shellgame" + random(2) + ".wav");
         if(ups[139])
         {
            f1 = _root.atrix > 0;
         }
         else
         {
            f1 = _root.trix > 0;
         }
         if(f2 == 53)
         {
            hat(61);
         }
      }
      else
      {
         _loc3_ = true;
         trg.dones = false;
         trg.fra = fra + 10;
      }
   }
   else if(f2 < 7)
   {
      player.pilc = pic(f2);
      st11("Pills here!");
      _root.soundy("shellgame" + random(2) + ".wav");
      _root.colss[43] = true;
   }
   else
   {
      player.pilc = pic(f2);
      _root.colss[61] = true;
      tart(f2);
      _root.soundy("Book Page Turn 12.wav",100);
   }
   if(!_loc3_)
   {
      if(f1)
      {
         if(!f3)
         {
            f1 = _root.pilc;
            _root.pilc = f2;
         }
         else if(!ups[139])
         {
            f1 = _root.trix;
            _root.trix = f2;
         }
         else
         {
            f1 = _root.atrix;
            _root.atrix = _root.trix;
            _root.trix = f2;
         }
         if(trg == 3 || trg == 4)
         {
            trg = spaw(player.xp,player.yp,0,5.3);
         }
         trg.d.gotoAndStop(7);
         trg.col = f1;
         trg.dones = false;
         trg.done = false;
         trg.fra = fra + 10;
         trg.d.d.gotoAndStop(3);
         if(highs.yp > 0)
         {
            trg.ybew -= (- Math.min(player.yp - highs.yp,0)) * 0.5;
         }
      }
      else
      {
         if(trg == 3 || trg == 4)
         {
            pilll = true;
         }
         if(f3)
         {
            if(ups[139])
            {
               _root.atrix = _root.trix;
            }
            _root.trix = f2;
         }
         else
         {
            _root.pilc = f2;
         }
         trg.d.d.gotoAndStop(2);
      }
      if(_root.atrix == 53)
      {
         _root.atrix = _root.trix;
         _root.trix = 53;
         _root.atrixer = _root.trixer;
         _root.trixer = "Tick";
      }
      if(!f3)
      {
         _root.hud.pilll.gotoAndStop(2);
      }
      else
      {
         _root.hud.plix.gotoAndStop(2);
      }
      player.d.gotoAndStop(4);
      player.it = 43;
      player.d.d.d.gotoAndPlay(1);
   }
}
function coincol(trg)
{
   if(trg.col == 1)
   {
      _root.soundy("pennypickup.mp");
      return 1;
   }
   if(trg.col == 2)
   {
      st22("a Nickel");
      _root.soundy("nickelpickup.mp");
      return 5;
   }
   st22("a Dime");
   _root.soundy("dimepickup.wav");
   return 10;
}
function ader(f1)
{
   var _loc2_ = false;
   if(_root.chaps > 6 && player.hp < 1 && _root.armor > 0 && player.mhp > 0)
   {
      _root.armor -= 0.5;
      player.hp += 0.5;
      _loc2_ = true;
   }
   if(player.hp > 0.5 || _root.armor <= 0)
   {
      f11 = _root.armor;
      _root.armor = 0;
      playerhurt(0.5,201,f11 > 0);
      _root.armor = f11;
   }
   else
   {
      playerhurt(0.5,201);
   }
   if(_loc2_ && player.hp >= 1)
   {
      _root.armor += 0.5;
      player.hp -= 0.5;
   }
   _root.so.data.pill = _root.so.data.pill + 1;
   if(_root.so.data.pill > 20)
   {
      _root.locker[36] = true;
   }
   if(!f1)
   {
      _root.soundy("bloodbank touched.wav",90);
   }
}
function coinzz(b1)
{
   if(lasth - fra < 0 && player._visible && telf == undefined && playsave < 0 && unic < 0 && player._currentframe != 6 && horse <= 0 && dec <= 0)
   {
      if(b1 && random(3) != 0)
      {
         coinl = 3 + random(2);
      }
      else
      {
         coinl = true;
      }
   }
}
function balljunk()
{
   if(highs.s == 51)
   {
      if(lows.s == 51)
      {
         if(lows.tier == highs.tier && !highs.done && !lows.done && lows.tier > 0)
         {
            if(lows.fra < fra - 125 || highs.fra < fra - 125)
            {
               if(lows.eternal)
               {
                  f1 = highs;
                  highs = lows;
                  lows = f1;
               }
               if(highs.eternal)
               {
                  if(combis++ < 20)
                  {
                     highs.tier--;
                     highs.hp += lows.hp + 50;
                     highs.xp = (highs.xp + lows.xp) / 2;
                     highs.yp = (highs.yp + lows.yp) / 2;
                     if(highs.tier == 0)
                     {
                        highs.d.gotoAndStop(1);
                     }
                     else
                     {
                        highs.d.gotoAndStop(4 + highs.tier);
                     }
                     lows.done = true;
                  }
               }
            }
         }
      }
   }
   if((lows.s == 14 || lows.s == 18) && highs.s == 36)
   {
      nohit = true;
      lows.xbew += xenf * 0.01;
      lows.ybew += yenf * 0.01;
   }
   if(highs.s == 4)
   {
      if(lows.fly || lows.ang || lows.meat < 3)
      {
         nohit = true;
      }
   }
   if(lows.s == 30 && highs.s == 30)
   {
      highs.dones = true;
      nohit = true;
   }
   if(lows.s == 30 && highs.s == 36)
   {
      nohit = true;
   }
   if(lows.fly || lows.meat || lows.bird || lows.charge || lows.ang)
   {
      switch(highs.s)
      {
         case 9:
         case 13:
         case 14:
         case 18:
            highs.dones = true;
            if(_root.hardmode)
            {
               if(lows.hpo > -1)
               {
                  if(lows.hpo-- < 1)
                  {
                     lows.done = true;
                     break;
                  }
                  break;
               }
               break;
            }
      }
   }
   else if(lows == player && !nohit)
   {
      dodo = false;
      switch(highs.s)
      {
         case 53:
            nohit = true;
            break;
         case 33:
            nohit = true;
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
            if(freez <= 0)
            {
               dodo = true;
            }
            if(highs.s == 62 && altboss)
            {
               dodo = false;
            }
            if(highs.s == 62 && highs.dy < -30)
            {
               nohit = true;
               break;
            }
         case 78:
            if(!highs.eternal && highs.s == 78)
            {
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
            if(highs.s == 85 || highs.s == 94)
            {
               highs.xpp = undefined;
               highs.still = fra + 10;
            }
            if(highs.s == 86 || highs.s == 50 || highs.s == 90)
            {
               coinzz(highs.eternal);
            }
            if(highs.s == 9 && highs.doub)
            {
               dodo = true;
            }
            if(highs.s == 85 || highs.s == 94)
            {
               highs.ypp = _loc0_ = undefined;
               highs.xpp = _loc0_;
               highs.xbew *= 0.6;
               highs.ybew *= 0.6;
            }
            if(highs.s == 99)
            {
               pub = true;
            }
            dodo = dodo || highs.special || trg.specoz == 7 || trg.specoz == 2;
            if(freez <= 0 && horse <= 0)
            {
               if(dodo)
               {
                  playerhurt(1,highs.s);
               }
               else
               {
                  playerhurt(0.5,highs.s);
               }
            }
            if(highs.sss == 100 || highs.sss == 101 && altboss)
            {
               playslow = 20;
            }
            if(highs.die)
            {
               highs.dones = true;
            }
         case 13:
         case 14:
         case 27:
         case 30:
         case 16:
            if((ups[13] || unic > 0 || demon > 0 || horse > 0) && highs.aidsdone <= fra)
            {
               highs.aidsdone = fra + 30;
               if(horse > 0)
               {
                  nohit = true;
               }
               if(ups[13])
               {
                  highs.poiss = 60;
                  highs.poisd = 3.5;
                  hurt(highs,30);
               }
               else
               {
                  hurt(highs,40);
               }
            }
      }
   }
   if(highs.s == 4)
   {
      if(fra - highs.lfra < 4)
      {
         nohit = true;
         highs.lfra = fra;
      }
      else
      {
         highs.xbew += lows.xbew * 0.4;
         highs.ybew += lows.ybew * 0.4;
      }
   }
   if(lows.s == 4 && highs.s != 62)
   {
      if(!lows.flir)
      {
         lows.xbew *= 0.5;
         lows.ybew *= 0.5;
      }
      highs.xbew *= 0.2;
      highs.ybew *= 0.2;
      if(highs.s == 85 || highs.s == 94)
      {
         highs.dones = true;
      }
   }
   if(highs.s == 44 && lows.s != 44)
   {
      if(highs.s != 69)
      {
         hurt(lows,20);
      }
   }
   if(highs.s == 66 && highs.horse && lows.s != 66 && lows.s != 27)
   {
      hurt(lows,20);
   }
   if(highs.s == 66 && lows.s == 66)
   {
      if(highs.horse && lows.sic)
      {
         hurt(lows,20);
      }
      else if(lows.horse && highs.sic)
      {
         hurt(highs,20);
      }
   }
   if(highs.s == 65 && highs.d._currentframe == 8 && lows.s != 65)
   {
      if(fra - lows.fra > 10)
      {
         hurt(lows,20);
         hurt(lows,20);
      }
      else
      {
         nohit = true;
      }
   }
   if(highs.s == 45 && lows.s != 45 && fra - lows.fra > 10)
   {
      hurt(lows,20);
   }
   if(lows.s == 44 && highs.s != 44)
   {
      hurt(highs,20);
   }
   if(highs.s == 63 && highs.d._currentframe == 7)
   {
      hurt(lows,20);
   }
   if(highs.s == 99 && highs.d._currentframe > 7)
   {
      if(lows.s == 14 || lows.s == 85)
      {
         hurt(lows,20);
      }
   }
   if(highs.s == 28 && highs.mags[1].mode == 2)
   {
      if(lows.s == 23 || lows.s == 85)
      {
         hurt(lows,20);
      }
      if(highs.mag == 1 && lows.s == 4)
      {
         _root.soundy("SMB_large_chews_4.wav");
         lows.done = true;
         highs.mode = 4;
         highs.bomb = 0;
         nohit = true;
      }
   }
   if(lows == player && highs.s == 5 && !highs.dones)
   {
      if(_root.keys >= 1 || _root.kep || highs.d._currentframe != 6)
      {
         nohit = true;
         if(_root.hardmode)
         {
            if(random(Math.max(10 + _root.luck,1)) == 0)
            {
               if(highs.d._currentframe == 4 && (highs.col == 1 || highs.col == 2))
               {
                  highs.dones = false;
                  highs.d.d.d.d.d.gotoAndStop(3);
                  if(highs.col == 2)
                  {
                     highs._yscale *= 0.75;
                     highs._xscale = _loc0_;
                     _root.bombs += 1;
                  }
                  highs.col = 3;
                  nohit = false;
               }
            }
         }
         if(highs.d._currentframe < 7 && (highs.col != 3 && highs.col != 5 || highs.d._currentframe != 4))
         {
            if(highs.c2)
            {
               highs.d.d.gotoAndStop(6);
            }
            else
            {
               highs.d.d.gotoAndStop(2);
            }
         }
         highs.dones = true;
         switch(highs.d._currentframe)
         {
            case 34:
               if(_root.chaps == 9 && _root.altchap && trixx(47))
               {
                  if(beamer <= 0)
                  {
                     beamer = 1;
                     _root.chaps = 11;
                  }
               }
               else if(_root.heaven && _root.chaps != 11)
               {
                  if(beamer <= 0)
                  {
                     _root.heaven = 2;
                     beamer = 1;
                  }
               }
               else
               {
                  _root.levz = undefined;
                  moveon();
                  _root.door = undefined;
                  if(_root.chaps == 11)
                  {
                     f1 = 24;
                  }
                  else if(_root.chaps == 9 && _root.altchap)
                  {
                     f1 = 23;
                  }
                  else
                  {
                     f1 = Math.min(9 + _root.so.data.wins,21);
                     if(f1 == 20)
                     {
                        f1 = 21;
                     }
                     if(_root.chaps == 9)
                     {
                        f1 = 22;
                     }
                  }
                  _root.gotoAndStop(f1);
                  highs.dones = false;
                  nohit = false;
               }
               break;
            case 1:
               if(highs.col == 4)
               {
                  eta();
               }
               else if(highs.col == 3)
               {
                  _root.armor = _root.armor + 1;
               }
               else if(player.hp < player.mhp)
               {
                  if(highs.col != 2)
                  {
                     player.hp = player.hp + 1;
                     red = 7;
                  }
                  else
                  {
                     player.hp += 0.5;
                     red = 5;
                  }
               }
               else
               {
                  nohit = false;
                  highs.dones = false;
                  highs.d.d.gotoAndStop(1);
               }
               if(highs.col == 4)
               {
                  _root.soundy("superholy.wav",100);
               }
               else if(highs.col == 3)
               {
                  _root.soundy("Holy.mp",100);
               }
               else if(nohit)
               {
                  _root.soundy("boss2_bubbles" + random(2) + ".wav",100);
               }
               break;
            case 2:
               _root.coins += coincol(highs);
               if(trixx(49) && random(2) == 0)
               {
                  kogs.push(5.010000002);
               }
               if(trixx(50) && random(2) == 0)
               {
                  kogs.push(5.040000001);
               }
               if(trixx(51) && random(2) == 0)
               {
                  kogs.push(5.03);
               }
               if(trixx(52) && random(2) == 0)
               {
                  _root.coins = _root.coins + 1;
               }
               break;
            case 3:
               if(highs.col == 2)
               {
                  _root.kep = true;
                  _root.soundy("goldenkey.wav",100);
               }
               else
               {
                  _root.keys = _root.keys + 1;
                  _root.soundy("KeyPickup_Gauntlet.wav",85);
               }
               break;
            case 4:
               if(highs.col == 3 || highs.col == 5)
               {
                  nohit = false;
                  highs.dones = false;
                  if(!highs.troll)
                  {
                     highs.troll = true;
                     st22("Trolololol");
                  }
               }
               else if(highs.col != 2)
               {
                  _root.bombs = _root.bombs + 1;
               }
               else
               {
                  _root.bombs += 2;
                  st22("1 + 1 free");
               }
               if(nohit)
               {
                  _root.soundy("fetus_feet" + random(2) + ".wav",100);
               }
               break;
            case 5:
               if(!highs.empty && chestopen == undefined)
               {
                  _root.soundy("Chest_Open.mp",100);
                  chestopen = highs;
               }
               nohit = false;
               highs.dones = false;
               break;
            case 6:
               if((_root.keys >= 1 || _root.kep) && !highs.empty && chestopen == undefined)
               {
                  _root.soundy("Unlock00.wav",100);
                  if(!_root.kep)
                  {
                     _root.keys = _root.keys - 1;
                  }
                  chestopen = highs;
                  _root.soundy("Chest_Open.mp",100);
               }
               nohit = false;
               highs.dones = false;
               break;
            case 7:
               if(fra - highs.fra > 0)
               {
                  pillc(highs);
               }
               else
               {
                  highs.dones = false;
                  highs.fra = fra + 10;
               }
               break;
            case 8:
               if(highs.col == 31)
               {
                  if(!highs.spin && !highs.busted)
                  {
                     ader();
                     highs.d.d.gotoAndStop(37);
                     highs.spin = true;
                     lastspin = fra + 100;
                     highs.wtf = false;
                  }
               }
               else if(highs.col == 1)
               {
                  if(!highs.spin && !highs.busted)
                  {
                     ader();
                     highs.d.d.gotoAndStop(33);
                     highs.d.d.d.gotoAndPlay(1);
                     highs.spin = true;
                     lastspin = fra + 100;
                     highs.wtf = false;
                  }
               }
               else
               {
                  if(highs.col == 10)
                  {
                     if(highs.spin && highs.d.d.d._currentframe > 110)
                     {
                        if(Math.abs(xenf) < 13)
                        {
                           highs.d.d.gotoAndStop(44);
                        }
                        else if(highs.xp > lows.xp)
                        {
                           highs.d.d.gotoAndStop(43);
                        }
                        else
                        {
                           highs.d.d.gotoAndStop(45);
                        }
                        highs.wtf = false;
                        lastspin = fra + 15;
                     }
                  }
                  if(_root.coins >= 1 && !highs.spin && !highs.busted && (highs.col != 10 || highs.yp - lows.yp < 0))
                  {
                     _root.coins = _root.coins - 1;
                     if(highs.col == 10)
                     {
                        highs.d.d.gotoAndStop(42);
                        highs.itt = random(4);
                        if(random(13) == 0 && !ups[9])
                        {
                           highs.itt = 5;
                        }
                     }
                     else if(highs.col > 1 && highs.col < 10)
                     {
                        highs.d.d.gotoAndStop(37);
                     }
                     else
                     {
                        _root.soundy("Coin_Slot.mp",100);
                        highs.d.d.gotoAndStop(2);
                     }
                     highs.spin = true;
                     lastspin = fra + 100;
                  }
               }
               highs.dones = false;
               nohit = false;
               break;
            case 9:
               if(highs.d.d._currentframe > 10 && highs.d.d._currentframe < 24 && highs.open)
               {
                  player._visible = false;
                  plxxx = highs.xp;
                  plyyx = highs.yp;
                  highs.d.d.gotoAndPlay(25);
               }
               highs.dones = false;
               break;
            case 15:
               f1 = [0,3,5,5,15,2,3,3,7,1,2,3,5,5,0,0,3,3];
               f1 = f1[highs.d.d._currentframe];
               if(_root.coins >= f1 && !_this.satan || _this.satan && (_root.armor >= 3 || highs.d.d._currentframe != 11))
               {
                  if(_this.satan)
                  {
                     _root.evs = _root.evs + 1;
                     if(_root.evs > 1)
                     {
                        _root.locker[54] = true;
                     }
                     if(f1 == 3)
                     {
                        lasth = -100;
                        _root.armor += 0.5;
                        playerhurt(3,200);
                        _root.armor -= 0.5;
                        player.d.gotoAndStop(4);
                     }
                     else
                     {
                        _root.armor += 1;
                        playerhurt(1,200);
                        _root.ups[22] -= f1;
                        ups[22] = _root.ups[22];
                        lasth = -100;
                        player.mhp -= f1;
                        player.d.gotoAndStop(4);
                        if(player.mhp < 0 && highs.it != 81)
                        {
                           _root.armor = 0;
                           playerhurt(100,200);
                        }
                     }
                     lastcra = -100;
                     _root.mmus = _root.soundy("isaacsatanitemget.mp",100);
                     plffff = player.d._currentframe;
                  }
                  else
                  {
                     _root.coins -= f1;
                  }
                  highs.done = true;
                  switch(highs.d.d._currentframe)
                  {
                     case 12:
                     case 16:
                        _root.keys = _root.keys + 1;
                        _root.soundy("KeyPickup_Gauntlet.wav",85);
                        player.d.gotoAndStop(4);
                        player.it = 202;
                        break;
                     case 13:
                     case 17:
                        _root.armor = _root.armor + 1;
                        _root.soundy("Holy.mp",100);
                        player.d.gotoAndStop(4);
                        player.it = 203;
                        break;
                     case 1:
                     case 5:
                        _root.soundy("boss2_bubbles" + random(2) + ".wav",100);
                        player.hp = player.hp + 1;
                        player.d.gotoAndStop(4);
                        player.it = 200;
                        break;
                     case 3:
                     case 7:
                        pillc(highs);
                        break;
                     case 2:
                     case 6:
                        _root.bombs = _root.bombs + 1;
                        _root.soundy("fetus_feet" + random(2) + ".wav",100);
                        player.d.gotoAndStop(4);
                        player.it = 201;
                        break;
                     case 4:
                     case 8:
                     case 9:
                     case 10:
                     case 11:
                        powerlevel();
                  }
                  if(_this.satan && player.hp <= 0)
                  {
                     player.d.gotoAndStop(plffff);
                  }
               }
               else
               {
                  highs.dones = false;
               }
               break;
            case 10:
               powerlevel();
               if(_root.chamb == _root.lev && highs.empty)
               {
                  highs.dones = true;
               }
         }
      }
   }
}
function ballhit(e, a)
{
   trg = ball[e];
   trg2 = ball[a];
   if(trg.s != 2 || trg2.s != 2)
   {
      f1 = Math.max(e,a);
      f2 = Math.min(e,a);
      if(tests.getPixel(f1,f2) == 0)
      {
         tests.setPixel(f1,f2,1);
         nohit = false;
         if(trg.s > trg2.s)
         {
            lows = trg2;
            highs = trg;
         }
         else
         {
            lows = trg;
            highs = trg2;
         }
         if(highs.s == 28 && lows.s == 28)
         {
            nohit = true;
         }
         if(lows.s == 5 && highs.s != 5)
         {
            nohit = true;
         }
         if(highs.s < 4)
         {
            nohit = true;
         }
         if(highs.s == 5 && lows != player)
         {
            nohit = true;
         }
         if(lows.s == 9 || highs.s == 9 && (lows != player && !lows.fly && !lows.meat && !lows.ang && !lows.bird || lows.ni))
         {
            nohit = true;
         }
         if(lows.outway || highs.outway && lows != player && lows.s != 2 && !lows.damger && lows.s != 4)
         {
            nohit = true;
         }
         if(lows.s == 44 && highs.outway || highs.s == 44 && lows.outway)
         {
            nohit = false;
         }
         if(lows.s == 44 && highs.s == 69)
         {
            nohit = true;
         }
         if(lows.s == 20 && highs.s == 45)
         {
            nohit = true;
         }
         if(trg.fra == fra || trg2.fra == fra)
         {
            nohit = true;
         }
         if((lows.fly || lows.meat || lows.ang || lows.bird || lows.ni || lows.bird || lows.bum || lows.ba) && highs.s == 4)
         {
            nohit = true;
         }
         if(highs.flir || lows.flir)
         {
            nohit = true;
         }
         if(!nohit && !trg.dones && !trg2.dones)
         {
            xenf = trg2.xp - trg.xp;
            siz2 = siz = sizes[Math.round(trg.s)] + sizes[Math.round(trg2.s)];
            if(highs.s == 5 && (highs.col == 10 && highs.d._currentframe == 8 || highs.d._currentframe == 34))
            {
               if(highs.d._currentframe == 34)
               {
                  siz2 += 17;
               }
               else
               {
                  siz2 += 28;
               }
               siz = siz2;
            }
            if(Math.abs(xenf) < siz)
            {
               yenf = trg2.yp - trg.yp;
               if(Math.abs(yenf) < siz)
               {
                  enf = xenf * xenf + yenf * yenf;
                  if(enf > 0 && enf < siz * siz && (!lows.hh[highs.e] || lows.s != 2))
                  {
                     balljunk();
                     if(!nohit)
                     {
                        v6 = lows.damger;
                        if(lows.s == 2 || v6)
                        {
                           if(lows.charge)
                           {
                              nohit = true;
                           }
                           nohit = highs.s == 23 || highs.s == 41 || highs.s == 32 || highs.s == 25 || highs.s == 55 || highs.s == 62 || highs.s != 4 && (lows.bluf || lows.hairb || lows.meat || lows.eye || lows.charge || ups[48]);
                           if(lows.meat > 2)
                           {
                              nohit = false;
                           }
                           if(!lows.hh[highs.e])
                           {
                              lows.hh[highs.e] = true;
                              v1 = lows.dmg;
                              if(lows.d._yscale == 135.5)
                              {
                                 v1 += 25;
                              }
                              if(highs.s == 41 && !ups[48])
                              {
                                 if(highs.d.hx.h._currentframe == 1 && lows.ybew < 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d.hx.h._currentframe == 2 && lows.xbew < 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d.hx.h._currentframe == 3 && lows.ybew > 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d.hx.h._currentframe == 4 && lows.xbew > 0)
                                 {
                                    v1 = 0;
                                 }
                              }
                              if(highs.s == 97 && !ups[48])
                              {
                                 if(highs.d._currentframe == 1 && lows.ybew < 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d._currentframe == 6 && lows.xbew > 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d._currentframe == 5 && lows.ybew > 0)
                                 {
                                    v1 = 0;
                                 }
                                 if(highs.d._currentframe == 7 && lows.xbew < 0)
                                 {
                                    v1 = 0;
                                 }
                              }
                              hurt(highs,v1);
                              if(highs.eternal)
                              {
                                 b1 = false;
                                 if(highs.s == 62)
                                 {
                                    if(!(highs.worm == 1 && highs.d._currentframe == 8 || altboss))
                                    {
                                       if(highs.worm != 6)
                                       {
                                          b1 = true;
                                       }
                                    }
                                 }
                                 if((highs.s == 41 && v1 == 0 || !highs.d.d.open && highs.alter != 2 && highs.s == 27 || highs.s == 93 || b1 || highs.refl) && !lows.meat && !lows.bird && !lows.knife && !lows.fly && !lows.hairb && !lows.eye && !lows.sac && !lows.bombo)
                                 {
                                    lows.done = true;
                                    lows.dones = true;
                                    if(trg.s == 41)
                                    {
                                       f9 = 0.95;
                                    }
                                    else
                                    {
                                       f9 = 0.8;
                                    }
                                    refl.push(lows.xp,lows.yp,(- lows.xbew) * f9 + highs.xbew * 0.8,(- lows.ybew) * f9 + highs.ybew * 0.8);
                                    nohit = true;
                                    _root.soundy("pennydrop.mp",15);
                                 }
                              }
                              if(lows.s == 2)
                              {
                                 spidcol(highs);
                              }
                              if(highs.hp < 0 && lows.hairb && _root.hairb < 6 && random(_root.hairb) == 0)
                              {
                                 lows.d.gotoAndStop(149);
                                 lows.d.d.gotoAndStop(1);
                                 _root.hairb = _root.hairb + 1;
                              }
                           }
                           else
                           {
                              nohit = true;
                           }
                           if(ups[48] && !lows.ba || lows.ics || v6 || lows.knife || lows.trixer == 2)
                           {
                              nohit = true;
                           }
                           else if(ups[169] && !lows.ba && lows.dmg > 10 && highs.hp < -6)
                           {
                              lows.dmg *= 0.5;
                              lows.d._xscale *= 0.75;
                              lows.d._yscale *= 0.75;
                              nohit = true;
                           }
                           else
                           {
                              lows.dones = true;
                              lows.xp += lows.xbew * 0.8;
                              lows.yp += lows.ybew * 0.8;
                           }
                           if(lows.bluf && random(2) == 1)
                           {
                              lows.dones = true;
                              lows.d = lows.d.d;
                           }
                           if(highs.s == 91)
                           {
                              nohit = true;
                           }
                        }
                        else if(highs.s != 28 && (lows != player || highs.s != 41 && highs.s != 23))
                        {
                           trg.gh = 2;
                           trg2.gh = 2;
                        }
                        if(!nohit)
                        {
                           if(fra2)
                           {
                              if(trg.randy && trg2.s > 10)
                              {
                                 f1 = -100;
                                 if(Math.abs(xenf) > Math.abs(yenf))
                                 {
                                    if(xenf > 0)
                                    {
                                       trg.xpp = f1;
                                       trg.ypp = 0;
                                    }
                                    else
                                    {
                                       trg.xpp = - f1;
                                       trg.ypp = 0;
                                    }
                                 }
                                 else if(yenf > 0)
                                 {
                                    trg.ypp = f1;
                                    trg.xpp = 0;
                                 }
                                 else
                                 {
                                    trg.ypp = - f1;
                                    trg.xpp = 0;
                                 }
                                 trg.xpp += trg.xp;
                                 trg.ypp += trg.yp;
                                 trg.gogo = false;
                              }
                              if(trg2.randy && trg.s > 10)
                              {
                                 f1 = 100;
                                 if(Math.abs(xenf) > Math.abs(yenf))
                                 {
                                    if(xenf > 0)
                                    {
                                       trg2.xpp = f1;
                                       trg2.ypp = 0;
                                    }
                                    else
                                    {
                                       trg2.xpp = - f1;
                                       trg2.ypp = 0;
                                    }
                                 }
                                 else if(yenf > 0)
                                 {
                                    trg2.ypp = f1;
                                    trg2.xpp = 0;
                                 }
                                 else
                                 {
                                    trg2.ypp = - f1;
                                    trg2.xpp = 0;
                                 }
                                 trg2.xpp += trg2.xp;
                                 trg2.ypp += trg2.yp;
                                 trg2.gogo = false;
                              }
                           }
                           if(highs.s == 9 && lows == player)
                           {
                              highs.dones = true;
                              if(highs.sss == 50 || highs.sss == 86 || highs.sss == 90)
                              {
                                 coinzz(highs.etgreed);
                              }
                              if(highs.d._xscale > 115)
                              {
                                 playerhurt(1,highs.sss);
                              }
                              else
                              {
                                 playerhurt(0.5,highs.sss);
                              }
                           }
                           v = trg.ma / (trg.ma + trg2.ma);
                           vv = 1 - v;
                           enf = Math.sqrt(enf);
                           f1 = (siz - enf) / enf;
                           if(trg.bhh)
                           {
                              if(trg2.bhh)
                              {
                                 if(trg.bhh == 2 || trg2.bhh == 2)
                                 {
                                    yenf *= 0.1;
                                    yenf *= 0.1;
                                 }
                              }
                           }
                           if(lows.s != 2 && !lows.dones)
                           {
                              if(highs.s == 4)
                              {
                                 f1 *= 0.5;
                                 if(lows.ba)
                                 {
                                    f1 *= 0.5;
                                 }
                              }
                              trg.xp -= xenf * vv * f1;
                              trg.yp -= yenf * vv * f1;
                              trg2.xp += xenf * v * f1;
                              trg2.yp += yenf * v * f1;
                           }
                           else
                           {
                              highs.xp += lows.xbew * 0.18;
                              highs.yp += lows.ybew * 0.18;
                           }
                           xbewenf = trg2.xbew - trg.xbew;
                           ybewenf = trg2.ybew - trg.ybew;
                           bewenf = xbewenf * xbewenf + ybewenf * ybewenf;
                           if(bewenf > 0)
                           {
                              bewenf = Math.sqrt(bewenf);
                           }
                           else
                           {
                              bewenf = 0;
                           }
                           enf = bewenf / enf;
                           if(bewenf > 2.5)
                           {
                              soundy("bh");
                           }
                           if(maxp)
                           {
                              enf += 0.5;
                           }
                           xenf *= enf;
                           yenf *= enf;
                           trg.xb -= xenf * vv;
                           trg.yb -= yenf * vv;
                           trg2.xb += xenf * v;
                           trg2.yb += yenf * v;
                           if(maxp)
                           {
                              highs.xb *= 0.5;
                              highs.yb *= 0.5;
                           }
                           if(lows.s == 2 && (highs.s == 18 || highs.s == 14))
                           {
                              highs.xbew *= 0.5;
                              highs.ybew *= 0.5;
                              f1 = lows.xbew * lows.xbew + lows.ybew * lows.ybew;
                              if(f1 > 0)
                              {
                                 f1 = Math.sqrt(f1) * 0.12 + 0.2;
                                 lows.xbew /= f1;
                                 lows.xbew /= f1;
                                 highs.xbew += lows.xbew;
                                 highs.ybew += lows.ybew;
                              }
                           }
                           if(pub)
                           {
                              f1 = trg;
                              trg = player;
                              if(!bord())
                              {
                              }
                              trg = f1;
                              pub = false;
                           }
                        }
                     }
                  }
               }
               else if(lows == player && !decer)
               {
                  if(highs.s == 9)
                  {
                     if(Math.abs(yenf) > siz + 70)
                     {
                        highs.noneed = true;
                        highs.noned = 8;
                     }
                  }
               }
            }
            else if(lows == player && !decer)
            {
               if(highs.s == 9)
               {
                  if(Math.abs(xenf) > siz + 70)
                  {
                     highs.noneed = true;
                     highs.noned = 8;
                  }
               }
            }
         }
      }
   }
   maxp = false;
}
function nextcha()
{
   newstart(false);
}
function pull(f1, f2, f3, f4, f5)
{
   if(f1 == 0)
   {
      v = 0.8;
   }
   else
   {
      v = 1.2;
   }
   v = 1;
   f1 = ball[f1];
   f2 = ball[f2];
   f5 = leg[f5];
   f5._x = f1._x;
   f5._y = f1._y;
   xenf = f1._x - f2._x;
   yenf = f1._y - f2._y;
   f5._rotation = Math.atan((- xenf) / yenf) / 3.141592653589793 * 180 + 90;
   if(yenf >= 0)
   {
      f5._rotation += 180;
   }
   enf = Math.sqrt(xenf * xenf + yenf * yenf);
   f5._xscale = enf;
   f5._yscale = 50;
   xenf = f1._x + f1.xbew - f2._x - f2.xbew;
   yenf = f1._y + f1.ybew - f2._y - f2.ybew;
   enf = Math.sqrt(xenf * xenf + yenf * yenf);
   if(enf != 0)
   {
      enf = (f3 - enf) / enf;
      xenf *= enf * f4;
      yenf *= enf * f4;
      f1.xbew += xenf * v;
      f1.ybew += yenf * v;
      f2.xbew -= xenf / v;
      f2.ybew -= yenf / v;
   }
}
function trgnextd(trg2, f2)
{
   if(trg2 == undefined)
   {
      trg2 = trg.d.d;
   }
   if(!trg.free || slow <= 0 || fra2)
   {
      trg2.nextFrame();
   }
   if(trg2._currentframe == trg2._totalframes)
   {
      var _loc2_ = trg2._parent._currentframe;
      if(!f2)
      {
         trg2._parent.gotoAndStop(1);
      }
      return _loc2_;
   }
}
function walkframe(f1)
{
   trg.wf = true;
   if(f1 <= 0)
   {
      f1 = 1;
   }
   if(trg.d._currentframe < 3)
   {
      if(enfget(trg.xbew,trg.ybew) * f1 > 2)
      {
         trg.d.gotoAndStop(2);
      }
      else
      {
         trg.d.gotoAndStop(1);
      }
   }
}
function randrunc()
{
   if(trg.xpp == undefined || trg.randd < fra - 10)
   {
      trg.d.gotoAndStop(1);
      if(trg.wait++ > 13)
      {
         if(linecheck(player.xp,player.yp,trg.xp,trg.yp) && enfcheck(trg.xp,trg.yp,player.xp,player.yp,100 + random(100)))
         {
            trg.xpp = player.xp + player.xbew * 5;
            trg.ypp = player.yp + player.ybew * 5;
         }
         else
         {
            f1 = 70 + random(40);
            if(random(10) == 0)
            {
               f1 *= 0.2;
            }
            f1 = trg.xp + crand(f1);
            f2 = trg.yp + crand();
            if(random(3) == 0)
            {
               f1 = Math.min(580,Math.max(60,f1));
               f2 = Math.min(410,Math.max(150,f2));
            }
            else
            {
               f1 = Math.min(540,Math.max(120,f1));
               f2 = Math.min(360,Math.max(210,f2));
            }
            f3 = ingrid(f1,f2);
            if(levzz(f3) < 1)
            {
               f4 = linecheck(f1,f2,trg.xp,trg.yp);
               if(f4)
               {
                  trg.xpp = f1;
                  trg.ypp = f2;
                  trg.wait = 15;
               }
            }
         }
      }
   }
   if(trg.xpp != undefined)
   {
      trg.wait--;
      trg.d.gotoAndStop(2);
      xenf = trg.xp - trg.xpp;
      yenf = trg.yp - trg.ypp;
      enf = enfget(xenf,yenf);
      if(enf < 14 || enfget(trg.xbew,trg.ybew) < 3 && trg.wait < 0)
      {
         trg.mode = 1;
         trg.xpp = undefined;
         trg.wait = 0;
      }
      enf = 6 / enf;
      trg.xbew -= xenf * enf;
      trg.ybew -= yenf * enf;
      sideflip(- xenf);
   }
   trg.xbew *= 0.6;
   trg.ybew *= 0.6;
   trg.randd = fra;
}
function randrun()
{
   if(trg.xpp == undefined || trg.randd < fra - 10)
   {
      f1 = 40;
      if(trg.s == 68)
      {
         f1 = 80;
      }
      f1 = trg.xp + crand(f1);
      f2 = trg.yp + crand();
      if(trg.s == 68 || random(2) != 0)
      {
         f1 = Math.min(540,Math.max(120,f1));
         f2 = Math.min(360,Math.max(210,f2));
      }
      f1 = ingrid(f1,f2);
      if(levzz(f1) < 1)
      {
         outgrid(f1);
         trg.xpp = xenf;
         trg.ypp = yenf;
      }
   }
   if(trg.xpp != undefined)
   {
      if(trg.s != 64 && (trg.s != 66 || trg.d._currentframe < 7) && trg.s != 77 && trg.s != 76 && trg.s != 79)
      {
         trg.d.gotoAndStop(2);
      }
      xenf = trg.xp - trg.xpp;
      yenf = trg.yp - trg.ypp;
      enf = enfget(xenf,yenf);
      if(enf < 3 || enfget(trg.xbew,trg.ybew) < 0.2 && random(10) == 0)
      {
         trg.mode = 1;
         trg.xpp = undefined;
      }
      enf = 0.5 / enf;
      trg.xbew -= xenf * enf;
      trg.ybew -= yenf * enf;
      if(trg.s != 68)
      {
         sideflip(- xenf);
      }
   }
   trg.randd = fra;
}
function randruny()
{
   if(trg.d.d._currentframe == 19)
   {
      _root.soundy("Meat_impacts_" + random(3) + ".wav");
      if(trg.eternal)
      {
         quadf(trg.xp,trg.yp,9);
         if(trg.alter == 2 && trg.s == 29)
         {
            trg2 = parc("bloo",trg.xp,trg.yp);
            trg2._yscale = trg2._xscale *= 3;
            colorit(trg2,0,0,0,255,255,255);
            spidboss = true;
         }
      }
   }
   if(fra < 60 && trg.eternal)
   {
      trg.xbew *= 0.8;
      trg.ybew *= 0.8;
   }
   else if(trg.xpp == undefined)
   {
      if(trg.s == 86)
      {
         if(trg.d._currentframe > 2)
         {
            trgnextd();
         }
         firemode(180,20,true);
         trg.ggh = true;
      }
      if((trg.s != 86 || trg.d._currentframe < 3) && (trg.alter != 2 || trg.wait++ > 15))
      {
         trg.d.d.gotoAndStop(1);
         if(trg.alter == 2 || trg.eternal)
         {
            f1 = random(50) + random(70);
         }
         else if(trg.s == 54)
         {
            f1 = random(50);
         }
         else
         {
            f1 = 0;
         }
         trg.f1 = f1;
         if(enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 2,player.yp + player.ybew * 2,130 + f1 * 1.3))
         {
            f2 = player.yp - yenf * f1 / 200;
            f1 = player.xp - xenf * f1 / 200;
            if(trg.s == 54)
            {
               f1 += player.xbew * 5;
               f2 += player.ybew * 5;
            }
         }
         else
         {
            if(trg.eternal)
            {
               enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
               f0 = random(80) + 100 + f1;
               f1 = trg.xp - xenf / enf * f0 + crand(30);
               f2 = trg.yp - yenf / enf * f0 + crand(30);
            }
            else
            {
               f1 = trg.xp + crand(95 + f1);
               f2 = trg.yp + crand();
            }
            if(trg.s == 34)
            {
               if(trg.xpp == undefined && random(7) == 0)
               {
                  trg.flyby = true;
               }
            }
         }
         if(trg.eternal && random(17) == 0 && trg.s == 34)
         {
            trg.flyby = true;
         }
         f1 = Math.min(620,Math.max(20,f1));
         f2 = Math.min(447,Math.max(110,f2));
         f1 = ingrid(f1,f2);
         if(levzz(f1) < 1)
         {
            outgrid(f1);
            trg.xpp = xenf + crand(3);
            trg.ypp = yenf + crand(3);
         }
      }
   }
   trg.bhh = 1;
   if(trg.xpp != undefined)
   {
      trg.wait = 0;
      trg.d.gotoAndStop(2);
      trg.d.d.nextFrame();
      xenf = trg.xp - trg.xpp;
      yenf = trg.yp - trg.ypp;
      enf = enfget(xenf,yenf);
      if(trg.s == 54 || trg.alter == 2 && trg.s == 29)
      {
         f1 = enf * 0.22 - trg.d.d._currentframe;
      }
      else
      {
         f1 = enf * 0.17 - trg.d.d._currentframe;
      }
      speed = enfget(trg.xbew + trg.ybew);
      if(trg.d.d._currentframe + 6 > trg.d.d._totalframes)
      {
         trg.xbew *= 0.4;
         trg.ybew *= 0.4;
         xenf = 0;
         yenf = 0;
         trgnextd();
         if(trg.d.d._currentframe + 7 > trg.d.d._totalframes || trg.eternal)
         {
            trg.xpp = undefined;
         }
      }
      else if(trg.d.d._currentframe < 5)
      {
         xenf *= 0.1;
         yenf *= 0.1;
      }
      else
      {
         trg.bhh = 2;
         if(speed >= 0.75)
         {
            if(f1 > 10 && trg.d.d._currentframe > 13 && trg.d.d._currentframe + 9 < trg.d.d._totalframes)
            {
               trg.d.d.prevFrame();
               if(f1 > 25)
               {
                  trg.d.d.prevFrame();
               }
            }
         }
      }
      if(enf < 10 || speed < 0.75 && random(10) == 0)
      {
         if(trg.d.d._currentframe == trg.d.d._totalframes)
         {
            trg.xpp = undefined;
         }
      }
      enf = Math.min(3 + trg.f1 * 0.075,enf * 0.1) / enf;
      if(trg.f1)
      {
         f1 = 1 - trg.f1 / 500;
         trg.xbew *= f1;
         trg.ybew *= f1;
      }
      trg.xbew -= xenf * enf;
      trg.ybew -= yenf * enf;
      if(Math.abs(xenf) > 8)
      {
         sideflip(- xenf);
      }
   }
}
function markhere(trg)
{
   var _loc2_ = ingrid(trg.xp,trg.yp);
   if(trg != undefined)
   {
      trg.til = _loc2_;
   }
   if(trg.mags.length < 2 || trg.s == 28)
   {
      if(levzz(_loc2_) < 0.99)
      {
         levz[_loc2_] = 0.9;
      }
   }
}
function borderliner(f0)
{
   if(f0 == undefined)
   {
      f0 = 1;
   }
   f9 = [0,1,1,0,0,-1,-1,0,0,1];
   if(trg.dir == undefined)
   {
      trg.dir = 0;
      f2 = 0;
      while(f2 < 4)
      {
         f2++;
         f1 = trg.dir * 2;
         f3 = ingrid(trg.xp + f9[f1] * roxx,trg.yp + f9[f1 + 1] * roxx);
         if(levzz(f3) < 0.95)
         {
            trg.dir = trg.dir + 1;
         }
         else
         {
            f2 = 10;
         }
      }
      if(f2 != 10)
      {
         trg.dir = random(4);
      }
   }
   trg.xbew *= 0.6;
   trg.ybew *= 0.6;
   if(trg.xpp == undefined)
   {
      f1 = trg.dir * 2;
      f3 = ingrid(trg.xp + trg.xbew + (- f9[f1] - f9[f1 + 1]) * roxx,trg.yp + trg.ybew + (- f9[f1 + 1] + f9[f1]) * roxx,true);
      f4 = ingrid(trg.xp + trg.xbew - f9[f1 + 1] * roxx,trg.yp + trg.ybew + f9[f1] * roxx,true);
      if(levzz(f3) > 0.95 && levzz(f4) < 0.95 && !trg.lastdd)
      {
         trg.dir--;
         trg.lastdd = true;
      }
      else
      {
         f3 = ingrid(trg.xp + f9[f1] * roxx,trg.yp + f9[f1 + 1] * roxx);
         if(levzz(f3) < 0.9)
         {
            outgrid(f3);
            trg.xpp = xenf;
            trg.ypp = yenf;
            trg.lastdd = false;
         }
         else
         {
            trg.dir = trg.dir + 1;
         }
      }
   }
   if(trg.dir > 3)
   {
      trg.dir -= 4;
   }
   if(trg.dir < 0)
   {
      trg.dir += 4;
   }
   if(trg.xpp != undefined)
   {
      enfcheck(trg.xp + trg.xbew,trg.yp + trg.ybew,trg.xpp,trg.ypp,1000);
      if(enf < 7)
      {
         trg.xpp = undefined;
      }
      else if(enf < 13)
      {
         enfcheck(trg.xp + trg.xbew * 2,trg.yp + trg.ybew * 2,trg.xpp,trg.ypp,1000);
         if(enf < 7)
         {
            trg.xpp = undefined;
         }
      }
      enf = f0 / enf;
      trg.xbew -= xenf * enf;
      trg.ybew -= yenf * enf;
      if(trg.xpp != undefined)
      {
         if(Math.abs(xenf) < Math.abs(yenf))
         {
            trg.xbew *= 0.6;
            trg.xbew += (trg.xpp - trg.xp) * 0.4;
            xenf = 0;
         }
         else
         {
            trg.ybew *= 0.6;
            trg.ybew += (trg.ypp - trg.yp) * 0.4;
            yenf = 0;
         }
      }
   }
}
function newxx()
{
   f9 = [0,1,1,0,0,-1,-1,0];
   f10 = 0;
   var _loc1_ = trg.s == 41 || trg.s == 44 || trg.s == 93 || trg.s == 97;
   while(trg.xpp == undefined && f10++ < 20)
   {
      trg.tiler = ingrid(trg.xp,trg.yp);
      f8 = [];
      a = 0;
      while(a < 4)
      {
         xenf = f9[a * 2] * roxx;
         yenf = f9[a * 2 + 1] * roxx;
         f4 = random(12);
         f1 = trg.xp + xenf * f4;
         f2 = trg.yp + yenf * f4;
         if(f1 > 620 || f1 < 20)
         {
            f1 = false;
         }
         if(f2 > 447 || f2 < 110)
         {
            f1 = false;
         }
         if(f1)
         {
            i = 0;
            while(i < f4)
            {
               f1 = trg.xp + xenf * i;
               f2 = trg.yp + yenf * i;
               f3 = ingrid(f1,f2);
               if(f10 < 9)
               {
                  f5 = 0.2;
               }
               else
               {
                  f5 = 0.99;
               }
               if(levzz(f3) > f5 && f3 != trg.tiler && (!trg.flyby || trg.s == 19 || trg.s == 89))
               {
                  i--;
                  break;
               }
               i++;
            }
            f1 = trg.xp + xenf * i + yenf;
            f2 = trg.yp + yenf * i - xenf;
            f3 = ingrid(f1,f2,true);
            f1 = trg.xp + xenf * i - yenf;
            f2 = trg.yp + yenf * i + xenf;
            f4 = ingrid(f1,f2,true);
            f1 = trg.xp + xenf;
            f2 = trg.yp + yenf;
            f5 = ingrid(f1,f2,true);
            if(trg.flyby && trg.s != 19 && trg.s != 89 || levzz(f5) < 0.2 && (levzz(f3) < 0.2 || levzz(f4) < 0.2 || random(8) == 0))
            {
               f8[a] = i;
            }
         }
         else
         {
            f8[a] = -1;
         }
         a++;
      }
      f7 = 1.8;
      if(_loc1_ || random(10) != 0)
      {
         f7 = -1;
      }
      f6 = -1;
      for(a in f8)
      {
         if(f8[a] > f7)
         {
            f7 = f8[a];
            f1 = Math.abs(trg.lasta - a);
            f2 = Math.abs(trg.lastaa - a);
            f1 = f1 != 2 && f2 != 2 || random(100) == 0;
            if(f1)
            {
               f6 = a;
            }
         }
      }
      if(f7 < 2 && random(4) != 0)
      {
         f6 = -1;
      }
      if(f6 > -1)
      {
         if(f6 != trg.lasta)
         {
            if(trg.lastaa != trg.lasta)
            {
               trg.lastaa = trg.lasta;
            }
         }
         trg.lasta = f6;
         xenf = f9[f6 * 2] * roxx;
         yenf = f9[f6 * 2 + 1] * roxx;
         f3 = Math.abs(xenf) > Math.abs(yenf);
         f1 = trg.xp + xenf * f7;
         f2 = trg.yp + yenf * f7;
         f1 = ingrid(f1,f2);
         if(levzz(f1) < 1)
         {
            outgrid(f1);
            trg.xpp = xenf;
            trg.ypp = yenf;
         }
         if(f3)
         {
            trg.ybew = 0;
         }
         else
         {
            trg.xbew = 0;
         }
      }
      trg.fail = 0;
   }
}
function randrunx(f0)
{
   if(trg.xpp == undefined || random(4) == 0 || trg.xbew * trg.xbew + trg.ybew * trg.ybew < 1 && !trg.tried)
   {
      newxx();
   }
   if(trg.s == 19 || trg.s == 89)
   {
      trg.tried = false;
      if(trg.knownot)
      {
         trg.knownot = false;
         if(trg.xpp == undefined)
         {
            newxx();
         }
         if(!lofo)
         {
            lofo = true;
            if(trg.xpp == undefined)
            {
               newxx();
            }
         }
      }
   }
   else
   {
      trg.tried = !trg.tried;
   }
   if(trg.xpp != undefined)
   {
      trg.tried = false;
      trg.knownot = true;
      trg.xpp = Math.min(620,Math.max(20,trg.xpp));
      trg.ypp = Math.min(447,Math.max(110,trg.ypp));
      xenf = trg.xp + trg.xbew - trg.xpp;
      yenf = trg.yp + trg.ybew - trg.ypp;
      enf = enfget(xenf,yenf);
      if(enf < 5)
      {
         trg.mode = 1;
         trg.xp = trg.xpp;
         trg.yp = trg.ypp;
         trg.xpp = undefined;
      }
      else if(enfget(trg.xbew,trg.ybew) < 0.6)
      {
         if(trg.fail++ > 10)
         {
            trg.xpp = undefined;
         }
      }
      enf = f0 / enf;
      xenf *= enf;
      yenf *= enf;
      trg.xbew -= xenf;
      trg.ybew -= yenf;
      if(trg.s == 97 || trg.s == 93)
      {
         trg.xbeww -= xenf * 3;
         trg.ybeww -= yenf * 3;
      }
      f1 = enfget(trg.xbew,trg.ybew);
      enf = roxx / f1;
      xenf = trg.xbew * enf;
      yenf = trg.ybew * enf;
      trg.nextl = ingrid(trg.xp + xenf,trg.yp + yenf);
      if(levzz(trg.nextl) > 0.7 && f1 > 3 || f1 < 1)
      {
         if(trg.fail++ > 2)
         {
            trg.xpp = undefined;
         }
      }
      if(trg.xpp == undefined)
      {
         newxx();
      }
   }
}
function cirf(f1, f2, f3, f4, f5)
{
   if(f5 == undefined)
   {
      f5 = Math.random() * 3.141592653589793;
   }
   if(trg.eternal && trg.s == 102)
   {
      xxenf = f1 - player.xp;
      yyenf = f2 - player.yp;
      var _loc5_ = true;
   }
   var _loc4_ = 3.141592653589793 / f4 * 2;
   var _loc1_ = 0;
   while(_loc1_ < f4)
   {
      f5 += _loc4_;
      f6 = Math.sin(f5) * f3;
      f7 = Math.cos(f5) * f3;
      if(f6 * xxenf + f7 * yyenf <= 1000 || !_loc5_)
      {
         ffmo(f1,f2,0,f6,f7,0,9,trg.s,true);
      }
      _loc1_ = _loc1_ + 1;
   }
}
function quadf(f1, f2, f3, f4)
{
   gibb += 10;
   if(f4 != 2)
   {
      ffmo(f1,f2,0,f3,0,0,9,trg.s,true);
      ffmo(f1,f2,0,- f3,0,0,9,trg.s,true);
      ffmo(f1,f2,0,0,f3,0,9,trg.s,true);
      ffmo(f1,f2,0,0,- f3,0,9,trg.s,true);
   }
   f3 /= 1.4142135623730951;
   if(f4)
   {
      ffmo(f1,f2,0,f3,f3,0,9,trg.s,true);
      ffmo(f1,f2,0,- f3,f3,0,9,trg.s,true);
      ffmo(f1,f2,0,f3,- f3,0,9,trg.s,true);
      ffmo(f1,f2,0,- f3,- f3,0,9,trg.s,true);
   }
}
function ffmo(f1, f2, f3, f4, f5, f6, f7, f8)
{
   var _loc1_ = create(f1,f2,f3,f4,f5,f6,f7,trg.s);
   if(trg.spid > 0)
   {
      _loc1_.xbew *= 0.5;
      _loc1_.ybew *= 0.5;
   }
   if(trg.s == 68 && !altboss)
   {
      colorit(_loc1_,0.6,1.2,0.2,50,60,0);
   }
   _loc1_.ggh = false;
   if(!f8)
   {
      _loc1_.dm = -3;
      _loc1_.fd = 0.1;
   }
   if(trg.s == 26 && trg.alter == 3 || trg.s == 65 && altboss || trg.s == 102 && (trg.state > 0 || altboss && random(5) == 0 && !noho) || trg.minb == 3 && trg.specoz != 23 || trg.s == 98 && trg.specoz == 18 || (trg.s == 57 && trg.alter != 2 || trg.s == 32) && trg.specoz == 23 || (trg.s == 50 || trg.s == 90) && trg.eternal)
   {
      _loc1_.hom = true;
      colorit(_loc1_,0.8,1,2.5,0,0,0);
      _loc1_._xscale *= 1.5;
      _loc1_._yscale *= 1.5;
      if(trg.s == 26 && trg.eternal)
      {
         _loc1_.longshot = 2;
         trg.hp *= 0.99;
         _loc1_.dm += 1;
      }
      if(trg.s == 50 || trg.s == 90)
      {
         _loc1_.longshot = true;
         if(trg.s == 90)
         {
            _loc1_.dm += 3;
         }
      }
   }
   else if(trg.s == 102)
   {
      var _loc2_ = new flash.geom.Transform(_loc1_);
      _loc2_.colorTransform = bull;
   }
   if(trg == mheart && trg.eternal)
   {
      _loc1_._xscale *= 1.3;
      _loc1_._yscale *= 1.3;
   }
   if(v3 && (trg.specoz != 23 || trg.s == 81))
   {
      _loc1_.dm -= 1;
      _loc1_.xbew *= 1.2;
      _loc1_.ybew *= 1.2;
      _loc1_.xbew += trg.xbew * 0.4;
      _loc1_.ybew += trg.ybew * 0.4;
   }
   if(trg.s == 79)
   {
      _loc1_.dm += 3;
      _loc1_.dy -= 15;
      _loc1_.xbew *= 1.2;
      _loc1_.ybew *= 1.2;
   }
   else if(trg.s == 36)
   {
      _loc1_.fd *= 0.4;
   }
   else if(trg.s == 42)
   {
      _loc1_.dm -= 3;
      _loc1_.dy = -10;
      _loc1_.ggh = true;
      _loc1_.nog = 15;
   }
   if(trg.s == 59)
   {
      _loc1_.dy += 15;
   }
   if(trg.special || trg.s == 59 || trg.s == 57 && (trg.alter == 2 || !trg.eternal) || trg.s == 53 || trg.s == 43 || trg.s == 75 || trg.s == 76 || trg.s == 84)
   {
      _loc1_.doub = true;
      _loc1_.d._xscale = _loc1_.d._yscale = 140;
   }
   if(trg.s == 42 || trg.s == 38 || trg.s == 27)
   {
      _loc1_.fd -= 0.05;
      _loc1_.xbew *= 1.07;
      _loc1_.ybew *= 1.07;
   }
   if(trg.s == 57)
   {
      if(trg.eternal)
      {
         _loc1_.dm -= 2;
      }
      else
      {
         _loc1_.dy += 15;
         _loc1_.dm -= 0.2;
      }
   }
   if(trg.s == 90)
   {
      _loc1_.dy -= 20;
      _loc1_.dm += 2;
   }
   if(trg.s == 84)
   {
      _loc1_.fd -= 0.07;
   }
   if(trg.s == 65)
   {
      _loc1_.dy -= 45;
      _loc1_.dm += 7;
   }
   if(trg.s == 62)
   {
      _loc1_.dy -= 50;
      _loc1_.fd = 0.3;
      _loc1_.xbew -= worm[1].xbew * 0.4;
      _loc1_.ybew -= worm[1].ybew * 0.4;
   }
   if(trg.s == 100 && trg.specoz != 23 || trg.s == 101 && altboss)
   {
      if(trg.specoz == 18)
      {
         colorit(_loc1_,0.2,0.2,0.2,0,0,0);
      }
      else
      {
         colorit(_loc1_,0.3,0.8,0.8,140,140,140);
      }
   }
   if((trg.s == 14 || trg.s == 26) && trg.eternal)
   {
      _loc1_.dy -= 16;
   }
   if(trg.s == 14 && trg.alter == 3)
   {
      _loc1_.dy += 16;
      _loc1_.dm -= 3;
   }
   if(trg.s == 26 && trg.alter == 3)
   {
      if(trg.eternal)
      {
         _loc1_.dy += 6;
      }
      _loc1_.dy -= 10;
      _loc1_.dm += 3;
   }
   if(trg.s == 25)
   {
      if(trg.eternal)
      {
         _loc1_.dy -= 7;
      }
   }
   if(trg.s == 31)
   {
      _loc1_.dy = -14;
      _loc1_.fd = 0;
   }
   if(trg.s == 55)
   {
      if(trg.eternal)
      {
         _loc1_.dy -= 14;
      }
   }
   if(trg.s == 56)
   {
      if(trg.eternal)
      {
         _loc1_.longshot = true;
         _loc1_.xbew *= 1.2;
         _loc1_.ybew *= 1.2;
      }
   }
   if(trg.s == 59)
   {
      if(trg.eternal)
      {
         _loc1_.longshot = true;
      }
   }
   if((trg.s == 86 || trg.s == 50 || trg.s == 90) && trg.eternal)
   {
      _loc1_.etgreed = true;
   }
   if(trg.s == 77)
   {
      _loc1_.breaker = true;
   }
   return _loc1_;
}
function shots(v1, v2, xenf, yenf, v3)
{
   if(trg.s == 38)
   {
      _root.soundy("Floaty_Baby_Roar_" + random(3) + ".mp",85);
   }
   if(trg.s == 26 && trg.alter != 2 && trg.alter != 3 && trg.eternal || (trg.s == 36 || trg.s == 46) && trg.specoz == 23 || v3 == 23)
   {
      f5 = (- (rotget2(xenf,yenf) + 90)) * 3.141592653589793 / 180;
      var _loc6_ = 8;
      if(trg.s == 36)
      {
         _loc6_ = 16;
      }
      else if(trg.s == 46)
      {
         _loc6_ = 12;
      }
      f5 -= _loc6_ * 0.05;
      f3 = 7;
      if(trg.s >= 49)
      {
         f7 = 9;
      }
      z = 0;
      while(z < _loc6_)
      {
         f6 = Math.sin(f5) * f3;
         f7 = Math.cos(f5) * f3;
         trg2 = ffmo(v1,v2,0,f6,f7,0,9);
         f5 += 0.1;
         if(trg.s >= 49)
         {
            trg2.dm -= 2;
         }
         if(trg.s == 46)
         {
            trg2.dy -= 16;
            trg2.dm += 3;
            trg2.longshot = true;
            z++;
            f5 += 0.1;
         }
         z++;
      }
   }
   else if(trg.s == 12 && trg.eternal)
   {
      ffmo(v1,v2,0,xenf,yenf,0,9);
      ffmo(v1,v2,0,yenf,- xenf,0,9);
      ffmo(v1,v2,0,- yenf,xenf,0,9);
      ffmo(v1,v2,0,(xenf + yenf) / 1.41,(yenf - xenf) / 1.41,0,9);
      ffmo(v1,v2,0,(xenf - yenf) / 1.41,(yenf + xenf) / 1.41,0,9);
   }
   else if(trg.s == 63 && trg.d.d._currentframe == 24)
   {
      ffmo(v1,v2,0,xenf * 0.8 - yenf * 0.25,yenf * 0.8 + xenf * 0.25,0,9);
      ffmo(v1,v2,0,xenf * 0.8 + yenf * 0.25,yenf * 0.8 - xenf * 0.25,0,9);
   }
   else if(trg.s == 14 && trg.alter > 1 || trg.s == 86 || (trg.s == 79 || trg.s == 31) && trg.eternal)
   {
      trg3 = ffmo(v1,v2,0,xenf * 0.8 - yenf * 0.2,yenf * 0.8 + xenf * 0.2,0,9);
      trg4 = ffmo(v1,v2,0,xenf * 0.8 + yenf * 0.2,yenf * 0.8 - xenf * 0.2,0,9);
      if(trg.three && trg.s == 14 || trg.s == 31 || trg.s == 86 && trg.eternal || trg.s == 79)
      {
         trg2 = ffmo(v1,v2,0,xenf,yenf,0,9);
         if(trg.s == 50)
         {
            trg3.xbew -= yenf * 3;
            trg3.ybew += xenf * 3;
            trg4.xbew += yenf * 3;
            trg4.ybew -= xenf * 3;
         }
      }
   }
   else if(v3 == 2)
   {
      if(trg.s == 50 && trg.eternal)
      {
         ffmo(v1,v2,0,xenf * 0.9 - yenf * 0.4,yenf * 0.9 + xenf * 0.4,0,9);
         ffmo(v1,v2,0,xenf * 0.9 + yenf * 0.4,yenf * 0.9 - xenf * 0.4,0,9);
         ffmo(v1,v2,0,xenf * 0.7 - yenf * 1,yenf * 0.7 + xenf * 1,0,9);
         ffmo(v1,v2,0,xenf * 0.7 + yenf * 1,yenf * 0.7 - xenf * 1,0,9);
      }
      else
      {
         ffmo(v1,v2,0,xenf * 0.9 - yenf * 0.1,yenf * 0.9 + xenf * 0.1,0,9);
         ffmo(v1,v2,0,xenf * 0.9 + yenf * 0.1,yenf * 0.9 - xenf * 0.1,0,9);
         ffmo(v1,v2,0,xenf * 0.7 - yenf * 0.3,yenf * 0.7 + xenf * 0.3,0,9);
         ffmo(v1,v2,0,xenf * 0.7 + yenf * 0.3,yenf * 0.7 - xenf * 0.3,0,9);
      }
   }
   else
   {
      trg2 = ffmo(v1,v2,0,xenf,yenf,0,9);
      if(v3 || trg.s == 38 && trg.alter == 2)
      {
         ffmo(v1,v2,0,xenf * 0.8 - yenf * 0.2,yenf * 0.8 + xenf * 0.2,0,9);
         ffmo(v1,v2,0,xenf * 0.8 + yenf * 0.2,yenf * 0.8 - xenf * 0.2,0,9);
      }
      if(trg.s == 27 && trg.eternal)
      {
         ffmo(v1,v2,0,xenf * 0.9 - yenf * 0.1,yenf * 0.9 + xenf * 0.1,0,9);
         ffmo(v1,v2,0,xenf * 0.9 + yenf * 0.1,yenf * 0.9 - xenf * 0.1,0,9);
      }
      if(trg.s == 36 || trg.s == 56 || trg.s == 27 && trg.alter == 2 || trg.s == 84)
      {
         ffmo(v1,v2,0,xenf * 0.68 - yenf * 0.42,yenf * 0.58 + xenf * 0.42,0,9);
         ffmo(v1,v2,0,xenf * 0.68 + yenf * 0.42,yenf * 0.58 - xenf * 0.42,0,9);
         if(!trg.eternal || trg.s != 27)
         {
            trg2.xbew *= 0.85;
            trg2.ybew *= 0.9;
         }
      }
   }
}
function firemode(siz, f1, f2)
{
   if(trg.s == 56 || trg.s == 90)
   {
      siz += 60;
   }
   else if(trg.s == 42 || trg.s == 38 || trg.s == 27)
   {
      if(trg.s == 38 && trg.eternal)
      {
         siz += 65;
      }
      siz += 40;
   }
   if(trg.s == 56)
   {
      f1 += 5;
   }
   if(trg.s == 90)
   {
      f1 += 2 + random(2);
   }
   b1 = false;
   if(trg.eternal && trg.s == 32)
   {
      b1 = random(3) != 0;
   }
   if(((fra + trg.e) % 7 == 0 || f2) && !b1)
   {
      if(trg.fire <= 0)
      {
         if(enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,siz))
         {
            if(linechecky(trg.xp,trg.yp,player.xp,player.yp))
            {
               if(trg.s == 42)
               {
                  trg.d.gotoAndStop(2);
               }
               else
               {
                  if(trg.s == 86)
                  {
                     sideflip(- xenf);
                  }
                  else
                  {
                     sideflip(xenf);
                  }
                  if(trg.s != 32)
                  {
                     if(trg.s == 79)
                     {
                        trg.d.gotoAndStop(8);
                     }
                     else if(trg.s == 63)
                     {
                        trg.d.gotoAndStop(9);
                     }
                     else
                     {
                        trg.d.gotoAndStop(5);
                     }
                  }
                  if(trg.s == 14 && trg.eternal)
                  {
                     trg.rep = 2;
                     f1 += 4;
                  }
               }
               trg.fire = f1;
               trg.fir = -7;
               if(trg.s == 27)
               {
                  trg.fir = -25;
                  trg.fire += 6;
               }
               if(trg.s == 32)
               {
                  trg.fire += 10;
               }
            }
            else if(trg.s == 14)
            {
               if(trg.eternal)
               {
                  enf = 0.3 / enf;
               }
               else
               {
                  enf = 0.1 / enf;
               }
               xenf *= enf;
               yenf *= enf;
               trg.xbb -= xenf;
               trg.ybb -= yenf;
            }
         }
      }
      if(!trg.free || slow <= 0 || fra2)
      {
         trg.fire--;
      }
   }
   if(trg.s == 14 && trg.eternal)
   {
      if(trg.d.hx.d._currentframe == 11 && trg.d._currentframe == 5)
      {
         if(trg.rep-- > 0)
         {
            trg.fir = -7;
            trg.d.hx.d.gotoAndStop(1);
            if(trg.alter == 3)
            {
               trg.rep--;
            }
         }
      }
   }
   if(trg.s == 38 && trg.eternal && trg.alter == 3)
   {
      if(trg.d._currentframe == 5)
      {
         if(trg.d.d._currentframe >= 13 && trg.d.d._currentframe < 31)
         {
            enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 8,player.yp + player.ybew * 8,10000);
            enf = enfget(xenf,yenf);
            enf = -9.2 / enf;
            xenf *= enf;
            yenf *= enf;
            if(trg.d.d._currentframe == 13)
            {
               _root.soundy("Blood_Laser" + random(2) + ".mp");
            }
            else
            {
               xenf *= 0.15;
               yenf *= 0.15;
               xenf += trg.xo * 0.85;
               yenf += trg.yo * 0.85;
            }
            trg.xo = xenf;
            trg.yo = yenf;
            f1 = xenf;
            f2 = fra / 2;
            xenf -= Math.sin(f2) * yenf * 0.1;
            yenf += Math.cos(f2) * f1 * 0.1;
            trg2 = ffmo(trg.xp - xenf * 0.5,trg.yp - yenf * 0.5 + 5,0,xenf * 1.4,yenf * 1.4,0,9,trg.s,true);
            trg2.dy -= 20;
         }
      }
   }
   else if(trg.fir++ > 0 && (trg.s != 79 || trg.d.d._currentframe == 17) && (trg.s != 63 || trg.d.d._currentframe == 19 || trg.d.d._currentframe == 24 && trg.specoz == 23) && (trg.s != 27 || trg.d._currentframe == 5) && trg.s != 56 || trg.s == 56 && trg.d.d._currentframe == 33)
   {
      if(trg.s == 63 || trg.s == 79 || trg.s == 14 && trg.eternal)
      {
         enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
      }
      else
      {
         enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
      }
      if(trg.s == 86)
      {
         sideflip(- xenf);
      }
      else
      {
         sideflip(xenf);
      }
      trg.fir = undefined;
      enf = enfget(xenf,yenf);
      enf = -7 / enf;
      xenf *= enf;
      yenf *= enf;
      if(trg.s == 63)
      {
         xenf *= 1.3;
         yenf *= 1.3;
      }
      if(trg.s == 42 && trg.alter == 2)
      {
         trg2 = green();
         trg2.dm -= 3;
         trg2.dy = -10;
         trg2.ggh = true;
         trg2.nog = 15;
      }
      else if(trg.s == 63 && trg.specoz == 7)
      {
         bossfire(10,true);
      }
      else
      {
         if(trg.s == 63 && trg.specoz == 23 && trg.d.d._currentframe == 19)
         {
            trg.fir = 2;
         }
         if(trg.s == 32)
         {
            xenf *= 0.44;
            yenf *= 0.44;
         }
         shots(trg.xp,trg.yp,xenf,yenf,trg.s == 27 || trg.s == 63 || trg.s == 90);
      }
   }
}
function firewalk()
{
   if(trg.fire <= 0)
   {
      var _loc3_ = trg.xp;
      var _loc2_ = trg.yp;
      var _loc4_ = true;
      enf = enfget(trg.xbew,trg.ybew);
      enf = -5 / enf;
      if(trg.s == 19)
      {
         enf *= 1.5;
         if(!linecheckx(trg.xp - trg.xbew * 5,trg.yp - trg.ybew * 5,trg.xp + trg.xbew * 10,trg.yp + trg.ybew * 10))
         {
            _loc4_ = false;
         }
      }
      if(_loc4_)
      {
         if(trg.s == 11 && trg.specoz == 23)
         {
            enf *= 2;
         }
         trg.fire = 40 + random(20);
         var _loc1_ = create(_loc3_,_loc2_,0,(- trg.xbew) * enf,(- trg.ybew) * enf,0,9,trg.s);
         _loc1_.fd = 0.3;
         _loc1_.dm = -5;
         if(trg.s == 19 && altboss)
         {
            _loc1_ = create(_loc3_,_loc2_,0,(- trg.xbew - trg.ybew * 0.2) * enf,(trg.xbew * 0.2 - trg.ybew) * enf,0,9,trg.s);
            _loc1_.fd = 0.3;
            _loc1_.dm = -5;
            _loc1_ = create(_loc3_,_loc2_,0,(- trg.xbew + trg.ybew * 0.2) * enf,((- trg.xbew) * 0.2 - trg.ybew) * enf,0,9,trg.s);
            _loc1_.fd = 0.3;
            _loc1_.dm = -5;
         }
      }
   }
   trg.fire--;
}
function angstfind(v1, v2)
{
   if(v1 == undefined)
   {
      v1 = player.xp;
      v2 = player.yp;
   }
   if(trg.failfind <= 0)
   {
      trg.failfind = 0;
   }
   trg.failfind = Math.min(trg.failfind,20);
   topz(8);
   if((trg.e + fra) % 14 == 1)
   {
      f13 = linecheckx(trg.xp,trg.yp,v1,v2);
      if(f13)
      {
         siz = 250;
         if(trris + 45 + random(100) <= fra && random(4) == 0 && trg.s < 90)
         {
            trris = fra;
            _root.soundy("Scared_Whimper_" + random(3) + ".mp",100);
         }
      }
      else
      {
         siz = 170;
      }
      if(enfcheck(trg.xp,trg.yp,v1,v2,siz))
      {
         if(trg.needmove <= 0)
         {
            trg.xpp = trg.ypp = undefined;
         }
         trg.needmove = 3;
      }
      else
      {
         trg.needmove--;
      }
   }
   if((trg.e + fra) % 30 == 0)
   {
      trg.checked = [];
   }
   if(trg.needmove > 0)
   {
      if(trg.rpx)
      {
         trg.rpx = undefined;
         trg.xpp = undefined;
      }
      f0 = enfcheck(trg.xp,trg.yp,v1,v2,500);
      if(trg.xpp == undefined || trg.failfind > 20)
      {
         if(f0 > 0)
         {
            f1 = 1.5 / f0;
            trg.xbew += xenf * f1;
            trg.ybew += yenf * f1;
            enf = 30 / f0;
            var _loc4_ = xenf * enf + trg.xp;
            var _loc5_ = yenf * enf + trg.yp;
         }
         else
         {
            _loc4_ = trg.xp;
            _loc5_ = trg.yp;
         }
         i = 0;
         while(trg.xpp == undefined && i < 7 - trg.failfind * 0.3)
         {
            f10 = 450 * Math.random() + 30;
            if(random(2) == 0)
            {
               if(Math.abs(xenf) > Math.abs(yenf))
               {
                  yenf = 0;
               }
               else
               {
                  xenf = 0;
               }
            }
            xenf = _loc4_ + crand(f10);
            yenf = _loc5_ + crand() * 0.5;
            f1 = ingrid(xenf,yenf);
            if(trg.checked[f1])
            {
               i -= 0.7;
            }
            else
            {
               outgrid(f1);
               trg.checked[f1] = true;
               if(!mhit(xenf,yenf))
               {
                  if(linecheckx(trg.xp,trg.yp,xenf,yenf))
                  {
                     f13 = !linecheckx(v1,v2,xenf,yenf);
                     if(f13 || trg.failfind >= 20)
                     {
                        f7 = xenf;
                        f8 = yenf;
                        if(enfcheck(v1,v2,trg.xpp,trg.ypp,100 + f0 + f10 / 3 + trg.failfind - trg.noco * 10))
                        {
                           trg.noco = trg.noco + 1;
                        }
                        else
                        {
                           trg.xpp = f7;
                           trg.ypp = f8;
                           i = 100;
                           if(f13)
                           {
                              trg.failfind /= 2;
                           }
                        }
                     }
                     else
                     {
                        trg.failfind += 0.35;
                     }
                  }
               }
            }
            i++;
         }
      }
      if(trg.xpp != undefined)
      {
         if((trg.e + fra) % 10 == 1)
         {
            f13 = enfcheck(v1,v2,trg.xpp,trg.ypp,200);
            if(linecheckx(v1,v2,trg.xpp,trg.ypp) && trg.failfind < 20 || f13 || Math.abs(xenf) < 20 || Math.abs(yenf) < 20)
            {
               trg.xpp = trg.ypp = undefined;
            }
         }
         pathfind(trg,trg.xpp,trg.ypp,1.3);
      }
   }
   else
   {
      trg.failfind *= 0.9;
      trg.rpx = true;
      trg.noco = 0;
      randrun();
      trg.xbew *= 0.9;
      trg.ybew *= 0.9;
   }
   tip(8);
}
function pffy(f1, f2)
{
   if(trg.s != 54)
   {
      f1 = ingrid(f1,f2);
      f3 = levzz(f1) == 0.99 && (!f44 && !webs[f1]) && (!trg.flyby || _root.lev == _root.sac || _root.lev == _root.cus) && !trg.flyai;
      if(f3)
      {
         f55 = f1;
      }
      if(levzz(f1) > 1 && levzz(f1) < 2 || f3)
      {
         var _loc4_ = this["de" + f1];
         if(_loc4_.fire && trg.s != 28 || f3)
         {
            relf = f3;
            if(trg.s == 27)
            {
               trg.dones = true;
            }
            outgrid(f1);
            enf = enfcheck(trg.xp,trg.yp,xenf,yenf,siz);
            if(f3)
            {
               enf += 20;
            }
            if(trg.s == 29 && trg.alter != 2 && _loc4_.fire)
            {
               trg.s = 54;
               attach(trg,54);
               trg.hp += 20;
            }
            if(enf < siz)
            {
               if(!f3 && trg.firs + 10 <= fra)
               {
                  trg.firs = fra;
                  _root.soundy("Firedeath_hiss.wav",Math.min(100,50 + trg.hp * 5));
               }
               siz = enf;
               f4 = xenf;
               f5 = yenf;
               f6 = enf;
               f7 = f3;
               return true;
            }
         }
      }
   }
}
function firecheck(trg)
{
   trg3 = 0;
   siz = 38;
   var _loc3_ = 20;
   relf = true;
   var _loc4_ = pffy(trg.xp + _loc3_,trg.yp + _loc3_) || pffy(trg.xp - _loc3_,trg.yp + _loc3_) || pffy(trg.xp + _loc3_,trg.yp - _loc3_) || pffy(trg.xp - _loc3_,trg.yp - _loc3_);
   if(_loc4_)
   {
      if(!f7)
      {
         xenf = f4;
         yenf = f5;
         enf = f6;
         enf = 4 / enf;
         trg.xbew += xenf * enf;
         trg.ybew += yenf * enf;
      }
   }
   if(dang)
   {
      if(trg == player && (!trg.flyby || _root.lev == _root.sac || _root.lev == _root.cus))
      {
         if(shit(trg.xp,trg.yp))
         {
            if(blackout == 2 || spidboss)
            {
               if(trg == player)
               {
                  playslow = 10;
               }
            }
            else
            {
               _loc4_ = true;
               relf = 2;
            }
         }
      }
   }
   if(dang2 && !trg.flyby && !trg.flyai)
   {
      if(trg != player)
      {
         if(dang2.hitTest(trg.xp,trg.yp,true))
         {
            _loc4_ = true;
         }
      }
   }
   return _loc4_;
}
function breakfloor(f1)
{
   if(levzz(f1) < 0.99)
   {
      var _loc1_ = true;
      for(i in brr)
      {
         _loc1_ = _loc1_ && f1 != brr[i];
      }
      for(i in brr2)
      {
         _loc1_ = _loc1_ && f1 != brr2[i];
      }
      if(_loc1_)
      {
         v1 = [levzz(f1 + 1) == 3,levzz(f1 + rowz) == 3,levzz(f1 - 1) == 3,levzz(f1 - rowz) == 3];
         if(v1[0] && v1[2] || v1[1] && v1[3])
         {
            brr.push(f1);
         }
         else
         {
            brr2.push(f1);
         }
      }
   }
}
function breakall()
{
   f1 = false;
   for(i in brr)
   {
      f1 = brr[i];
      outgrid(f1);
      tiles.gotoAndStop(67);
      maxx = new flash.geom.Matrix();
      maxx.translate(xenf,yenf);
      maxx.scale(hdx,hdx);
      dblock.draw(tiles,maxx);
   }
}
function pathcheck(trg, v2, v3)
{
   v1 = ingrid(trg.xp,trg.yp);
   trg.gridder = levz.slice(0,-1);
   z = 0;
   for(z in v3)
   {
      trg.gridder[v3[z]] = 1;
   }
   trg.gridder[v2] = 0;
   acts = [];
   acts2 = [];
   z = -1;
   while(z > -100 && trg.gridder[v2] >= 0)
   {
      if(z == -1)
      {
         pff(v1,-1);
      }
      else
      {
         for(i in acts)
         {
            v1 = trg.gridder[acts[i]];
            if(v1 < z)
            {
               acts2.push(acts[i]);
            }
            else
            {
               outgrid(acts[i]);
               pff(ingrid(xenf,yenf + roxx),v1);
               pff(ingrid(xenf + roxx,yenf),v1);
               pff(ingrid(xenf - roxx,yenf),v1);
               pff(ingrid(xenf,yenf - roxx),v1);
            }
         }
      }
      acts2[acts2.length] = 0;
      acts = acts2.slice(0,-1);
      acts2 = [];
      z--;
   }
   if(z < -99)
   {
      trg.gridder = 0;
      return false;
   }
   return z;
}
function bloww(v2, f5, f6)
{
   _root.levblow[_root.lev].push(v2,f5,f6);
   outgrid(v2);
   dblock.fillRect(new flash.geom.Rectangle((xenf - roxx2 - 2) * hdx,(yenf - roxx2 - 2) * hdx,(roxx + 4) * hdx,(roxx + 4) * hdx),0);
   if(levz[v2] == 0.99 && webs[v2])
   {
      tiles.gotoAndStop(161 + webs[v2]);
      maxx = new flash.geom.Matrix();
      maxx.translate(xenf,yenf);
      maxx.scale(hdx,hdx);
      dblock.draw(tiles,maxx);
      webs[v2] = false;
      levz[v2] = 0;
   }
   else if(levz[v2] == 1)
   {
      gibs(xenf,yenf);
      _root.so.data.rocks = _root.so.data.rocks + 1;
      if(_root.so.data.rocks > 49)
      {
         _root.locker[18] = true;
      }
      if(_root.chaps < 7 || _root.chaps == 9)
      {
         _root.soundy("Rock_crumble " + random(3) + ".wav",100);
         tiles.gotoAndStop(60 + random(5));
      }
      else
      {
         _root.soundy("Meaty_Deaths_" + random(6) + ".mp",100);
         tiles.gotoAndStop(85 + random(5));
      }
      maxx = new flash.geom.Matrix();
      maxx.translate(xenf,yenf);
      maxx.scale(hdx,hdx);
      dblock.draw(tiles,maxx);
      if(Math.abs(f5) > Math.abs(f6))
      {
         f6 = 0;
         if(f5 > 0)
         {
            f5 = roxx;
         }
         else
         {
            f5 = - roxx;
         }
      }
      else
      {
         f5 = 0;
         if(f6 > 0)
         {
            f6 = roxx;
         }
         else
         {
            f6 = - roxx;
         }
      }
      f1 = ingrid(xenf + f5,yenf + f6);
      if(levz[f1] == 3)
      {
         _root.levblow[_root.lev].push(f1);
         levz[f1] = 0;
         outgrid(f1);
         tiles.gotoAndStop(66);
         maxx = new flash.geom.Matrix();
         maxx.translate(xenf,yenf);
         maxx.scale(hdx,hdx);
         dblock.draw(tiles,maxx);
      }
      if(_root.rarer[_root.lev] == v2)
      {
         levz[v2] = 0;
         outgrid(v2);
         chestox = xenf;
         chestoy = yenf;
         chestopen = 2;
         _root.rarer[_root.lev] = -100;
         if(_root.so.data.rox++ > 30)
         {
            _root.locker[87] = true;
         }
      }
   }
   levz[v2] = 0;
   cloo();
}
function gosplash()
{
   if(trg.s == 24)
   {
      if(trg.eternal)
      {
         quadf(trg.xp,trg.yp,8,1);
      }
   }
   if(trg.s == 4 || (trg.s == 45 || trg.s == 101 || trg.s == 84) && !trg.dones)
   {
      if(!trg.dsound && trg.s != 101)
      {
         trg.dsound = true;
         _root.soundy("boss1_explosions" + random(3) + ".wav",100);
      }
      if(trg.pois)
      {
         trg2 = parc("bloo",trg.xp,trg.yp);
         trg2._xscale *= 3;
         trg2._yscale = trg2._xscale;
         splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() + 0.8);
         if(trg.pois != 4)
         {
            if(blackout != 2)
            {
               colorit(trg2,0,2,0,0,40,0);
            }
            else
            {
               colorit(trg2,0,0,0,0,0,0);
            }
         }
      }
      else
      {
         _root.bomf[_root.lev].push([trg.xp,trg.yp]);
      }
      f4 = 60;
      if(trg.dmg > 25 && trg.s != 45 && trg.s != 101)
      {
         f4 = 90;
      }
      if(trg.dmg >= 45 && trg.s != 45 && trg.s != 101)
      {
         f4 = 105;
      }
      if(trg.s == 101 || trg.s == 45)
      {
         f4 = 44;
      }
      f11 = [];
      z = 0;
      while(z < 150)
      {
         var _loc2_ = Math.random() * f4;
         f5 = crand(_loc2_);
         f6 = crand();
         f1 = trg.xp + f5;
         f2 = trg.yp + f6;
         v2 = ingrid(f1,f2);
         if(levz[v2] >= 1.9 && f4 < 90 && _root.lev != _root.bossl && _root.lev != _root.bossl2)
         {
            f4 = 90;
         }
         outgrid(v2);
         if(!f11[v2])
         {
            f11[v2] = true;
            if(levz[v2] > 0.9)
            {
               if(linecheckxx(trg.xp,trg.yp,xenf,yenf))
               {
                  if(levz[v2] == 1 || levz[v2] == 1.85 || webs[v2])
                  {
                     bloww(v2,f5,f6);
                  }
                  else
                  {
                     killshit(v2,10);
                  }
                  if(_loc2_ < 40)
                  {
                     breakfloor(v2);
                  }
               }
            }
         }
         z++;
      }
      for(z in ball)
      {
         trg2 = ball[z];
         siz = 85 + sizes[Math.round(trg2.s)];
         if(trg.s == 45 && trg2 == player)
         {
            siz = 40;
         }
         if(trg.huge)
         {
            siz *= 1.75;
         }
         if(trg.s == 101 && trg.d._currentframe != 5)
         {
            siz = 48.5;
         }
         if(trg.bombo && trg2 == player)
         {
            siz = 55;
         }
         enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,siz);
         if(enf < siz && !trg2.dones && (trg.s == 4 || trg.s == 45 || trg.s == 101 && trg2 != player || trg2.s == 7) && trg2.bh && !trg2.shot)
         {
            f1 = false;
            if(trg2.s == 5 && trg2.d._currentframe == 8 && chestopen == undefined)
            {
               if(trg2.col == 41)
               {
                  trg2.d.d.gotoAndStop(30);
               }
               else if(trg2.col == 1)
               {
                  trg2.d.d.gotoAndStop(34);
               }
               else if(trg2.col > 1)
               {
                  trg2.d.d.gotoAndStop(39);
                  trg2.dones = true;
                  _root.bumkill = true;
               }
               else
               {
                  trg2.d.d.gotoAndStop(30);
               }
               trg2.spin = false;
               trg2.busted = true;
               chestopen = trg2;
               f1 = true;
            }
            if(trg2.s != 5 || fra - trg2.fra > 30 || f1)
            {
               enf = Math.min(siz - enf,15) / enf;
               f1 = trg2.s == 7 || trg2.s == 8 || trg2.s == 45 || trg2.s == 101;
               f2 = true;
               if(!f1)
               {
                  f2 = linecheckxx(trg.xp,trg.yp,trg2.xp,trg2.yp);
               }
               if(f2)
               {
                  if(enf > 0 && trg2.s != 101)
                  {
                     if(f1 || trg2.s > 61)
                     {
                        enf *= 0.015;
                     }
                     if(trg2.s == 59)
                     {
                        enf = 0;
                     }
                     trg2.xbew *= 0.5;
                     trg2.ybew *= 0.5;
                     trg2.xbew -= xenf * enf;
                     trg2.ybew -= yenf * enf;
                  }
                  if(!((trg2.specoz == 23 && trg.s != 101 || trg2.s == 46 || trg2.s == 68 || trg2.s == 87 && trg.pois != 10 || trg2.s == 67 || trg2.s == 30 && trg.s != 101 || trg2.s == 88 || trg2.s == 59 || trg2.s == 64 || trg2.s == 78 || trg2.s == 82 || trg2.s == 83 || trg2.s == 101) && trg.dfr && !trg.bombo || trg2.s == 45 && trg.s == 45 || trg2.s == 52 && !trg.playbomb && (trg.col == 3 || trg.col == 5)))
                  {
                     if(trg2.s == 48 || trg2.bomber)
                     {
                        if(trg.man)
                        {
                           hurt(trg2,10);
                        }
                        else
                        {
                           hurt(trg2,100);
                        }
                     }
                     else
                     {
                        if(trg2.s == 28 || trg2.s == 87 && trg.pois == 10)
                        {
                           hurt(trg2,18);
                        }
                        else if(trg.dmg > 0 || trg.playbomb || trg.bombo)
                        {
                           hurt(trg2,50 + trg.dmg);
                        }
                        else
                        {
                           hurt(trg2,40);
                        }
                        if(trg.header)
                        {
                           trg2.poiss = trg.header;
                           trg2.poisd = 7;
                           if(trg.bombo)
                           {
                              trg2.poisd = 3;
                           }
                        }
                     }
                  }
                  if(trg2 == player && !trg.friend)
                  {
                     if(trg.mug)
                     {
                        playerhurt(0.5,4);
                     }
                     else
                     {
                        playerhurt(1,4);
                     }
                  }
               }
            }
         }
         trg2 = undefined;
      }
      if(trg.s != 45 && trg.s != 84 && trg.s != 101)
      {
         if(blackout == 2)
         {
            z = 0;
            while(z < 5)
            {
               splater(trg.xp + crand(),trg.yp + crand(random(10)),1 + random(10),Math.random() + 1);
               z++;
            }
         }
         else
         {
            if(!trg.pois)
            {
               maxx = new flash.geom.Matrix();
               if(f4 > 100)
               {
                  maxx.scale(1.5,1.5);
               }
               if(trg.huge)
               {
                  maxx.scale(2.75,2.75);
               }
               maxx.translate(trg.xp,trg.yp);
               maxx.scale(hdx,hdx);
               splat.draw(crater,maxx);
            }
            if(trg.header)
            {
               gibs();
               z = 0;
               while(z < 20)
               {
                  f1 = z * 3;
                  splater(trg.xp + crand(f1),trg.yp + crand(f1),31 + random(10),Math.random() * 0.5 + 1.2 - z / 20);
                  z++;
               }
            }
         }
      }
   }
   big = 0;
   if(trg.s != 13 && trg.s != 14 && trg.s != 5 && trg.s != 18 && trg.s != 45 && trg.s != 80 && trg.s != 4.5 && trg.s != 85 && trg.s != 101 && !trg.fart)
   {
      gibs();
   }
   if(trg.frezz > 0)
   {
      _root.soundy("Rock_crumble " + random(3) + ".wav",100);
   }
   else if(trg.s == 38 || trg.s == 59 || trg.s == 77)
   {
      _root.soundy("goodeath" + random(3) + ".wav",180);
   }
   else
   {
      switch(big)
      {
         case 0:
            if(!trg.flyai && trg.s != 85)
            {
               break;
            }
         case 1:
            _root.soundy("Death_Burst_Small_" + random(3) + ".mp",100);
            break;
         case 2:
         case 3:
            if(trg.lasts || !trg.aboss)
            {
               _root.soundy("Death_Burst_Large_" + random(2) + ".mp",80 + random(40));
            }
            else
            {
               _root.soundy("Rocket_Blast_Death_1.wav");
            }
      }
   }
}
function flya()
{
   if(trg.specoz == 23)
   {
      f1 = [14.1,18,18,18];
   }
   else
   {
      f1 = [13,13,13,13,13,13,13,14,18,18,18];
   }
   i = 0;
   while(i < 4 / (1 + ashut * 0.2))
   {
      f0 = Math.random() * 6;
      create(trg.xp + crand(f0),trg.yp + crand(f0),0,0,0,0,f1[random(f1.length)]);
      if(trg.s == 67)
      {
         i -= 0.5;
      }
      if(trg.specoz == 23)
      {
         i -= 0.25;
      }
      i++;
   }
   f1 = 8;
}
function gibs(v1, v2)
{
   big = 1;
   f10 = 0;
   f1 = 10;
   if(trg.s == 25 && !trg.nobomb || trg.s == 55 && trg.alter != 1)
   {
      if(trg.eternal)
      {
         bomf.push([trg.xp,trg.yp,6]);
      }
      else
      {
         bomf.push([trg.xp,trg.yp]);
      }
   }
   if(trg.s == 4 || trg.s == 45 || trg.s == 84)
   {
      f2 = 7;
      f1 = -1;
   }
   else
   {
      f2 = 8;
   }
   if(v1 > 0 && v2 > 0)
   {
      f1 = 5;
   }
   if(v1 <= 0 || v2 <= 0)
   {
      v1 = trg.xp;
      v2 = trg.yp;
   }
   f1 /= 1 + gibb * 0.1;
   i = 0;
   while(i < f1)
   {
      gibb++;
      f10 = Math.random() * 4;
      f11 = trg.s == 100 || trg.s == 97 || trg.s == 98 || trg.s == 99 || trg.s == 20 || trg.s == 43 || trg.s == 36 || trg.s == 28 || trg.s == 49 || trg.s >= 62 && !trg.sic && trg.s != 73 && trg.s != 71 && trg.s != 77 && trg.s != 74 && trg.s < 85 || trg.s == 57 || trg.special || trg.minb;
      if(f11)
      {
         f10 *= 1.7;
         big = 2;
      }
      if(trg.s == 36 || trg.s == 19 || trg.s == 71 || trg.s == 74 || trg.s > 100)
      {
         big = 3;
         f10 *= 1.3;
      }
      var _loc1_ = create(v1,v2,0,crand(f10),crand(f10) * 0.5,0,f2);
      if(f11 || trg.s == 19)
      {
         _loc1_.ybew *= 1.4;
         _loc1_.d._xscale = _loc1_.d._yscale = 100 + random(70);
      }
      else if(trg.s == 36 || trg.s == 71 || trg.s == 74)
      {
         _loc1_.d._xscale = _loc1_.d._yscale = 140 + random(80);
      }
      if(trg.frezz > 0)
      {
         colorit(_loc1_,0.18,0.22,0.22,60,60,60);
      }
      else if(trg.poiss > 0 || trg.spl == 30)
      {
         colorit(_loc1_,0.2,1,0.2,0,70,17);
         _loc1_.spl = 30;
      }
      else if(trg.specol)
      {
         f1 = trg.specol;
         colorit(_loc1_,specol[f1][0],specol[f1][1],specol[f1][2],0,0,0);
      }
      i++;
   }
}
function bombfail(f1, f2, f3, f4)
{
   var _loc1_ = create(f1,f2,0,0,0,0,4);
   _loc1_.pois = f4;
   _loc1_.dones = true;
   if(f3 == 6)
   {
      _loc1_.dmg = 60;
      _loc1_._xscale = _loc1_._yscale = 200;
      _loc1_.d.gotoAndStop(2);
      _loc1_.huge = true;
   }
   else if(f3 == 5)
   {
      trg.mager = true;
   }
   else if(f3 == 4)
   {
      _loc1_.dmg = 30;
      _loc1_._xscale = _loc1_._yscale = 113;
      _loc1_.d.gotoAndStop(2);
   }
   else if(f3)
   {
      _loc1_.dfr = true;
      if(f4 == 4)
      {
         _loc1_.d.gotoAndStop(6);
      }
      else
      {
         _loc1_.d.gotoAndStop(5);
      }
      if(blackout == 2)
      {
         colorit(_loc1_,0,0,0,0,0,0);
      }
   }
   else
   {
      _loc1_.d.gotoAndStop(2);
   }
   return _loc1_;
}
function bomb(f1)
{
   if(fra - lastbo >= 30 || f1)
   {
      if(f1)
      {
         if(f1 != 2)
         {
         }
      }
      else
      {
         if(_root.bombs <= 0)
         {
            return false;
         }
         _root.bombs = _root.bombs - 1;
      }
      lastbo = fra;
      _root.soundy("Fetus_Land_" + random(2) + ".wav",100);
      trg2 = create(trg.xp,trg.yp,0,0,0,0,4);
      trg2.dmg = 10;
      if(f1 == 4)
      {
         trg2.d.gotoAndStop(7);
         trg2.dec = true;
      }
      if(f1 && f1 != 2 || ups[106])
      {
         trg2.dmg += 50;
         trg2._xscale = trg2._yscale = 123;
         trg2.col = 4;
         if(!ups[140])
         {
         }
      }
      if(ups[140])
      {
         trg2.header = 130;
         trg2.col = 6;
      }
      _root.so.data.bomb = _root.so.data.bomb + 1;
      return trg2;
   }
}
function killshit(v2, v3)
{
   if(levz[v2] > 1 && levz[v2] < 1.8)
   {
      trg2 = this["de" + v2];
      if(!trg2.gold || random(3) == 0)
      {
         levz[v2] -= 0.13;
         if(trg2._currentframe == 6)
         {
            trg2.gotoAndStop(2);
         }
         else
         {
            trg2.nextFrame();
         }
         if(v3 && levz[v2] > 1 && !trg2.gold)
         {
            levz[v2] -= 0.13;
            trg2.nextFrame();
         }
         if((random(3) == 0 || v3 > 5) && !trg2.gold)
         {
            levz[v2] -= 0.13;
            trg2.nextFrame();
         }
         if(trg2.nam == "breakblock" && random(3) == 0 || v3 > 7)
         {
            levz[v2] -= 0.13;
            trg2.nextFrame();
         }
         if(trg2._currentframe == 6 && levz[v2] < 1.1)
         {
            trg2.gotoAndStop(5);
         }
         if(levz[v2] <= 1)
         {
            trg2.dones = true;
            switch(trg2.nam)
            {
               case "locktile":
                  trg2.gotoAndStop(2);
                  break;
               case "breakblock":
               case "breakblock2":
               case "breakblock3":
                  if(!trg2.cent)
                  {
                     _root.so.data.shits = _root.so.data.shits + 1;
                     if(_root.so.data.shits > 50)
                     {
                        _root.locker[46] = true;
                     }
                  }
                  _root.soundy("plop.wav",100);
                  trg2.gotoAndStop(5);
                  break;
               case "fireblock":
               case "fireblock2":
                  _root.soundy("steam_halfsec.wav",85);
                  trg2.gotoAndStop(5);
            }
            if(trg2.xp == undefined)
            {
               trg2.xp = trg2._x;
               trg2.yp = trg2._y;
            }
            if(trg2.gold)
            {
               chestopen = trg2;
            }
            else if(trg2.nam == "breakblock2")
            {
               trg2.fra = fra + 120;
               shiz.push(trg2);
            }
            else if(Math.random() < 0.1 && (!trg2.cent || random(5) == 0) && !trg2.egg && !v3)
            {
               if(Math.random() < 0.25 || trg2.cent)
               {
                  f0 = 5;
               }
               else
               {
                  f0 = 5.02;
               }
               create(trg2.xp,trg2.yp,0,0,0,0,f0);
            }
            levz[v2] = 0.9;
            clevc[v2] = 0;
            if(trg2.egg)
            {
               bomf.push([trg2.xp,trg2.yp]);
            }
            cloo();
         }
         _root.levsav[_root.lev][trg2.savv] = trg2._currentframe;
         cloo();
         return true;
      }
   }
   return false;
}
function moveon()
{
   if(_root.chaps == 11 && _root.lev == _root.bossl)
   {
   }
   _root.aloc();
   _root.lastl = _root.lev;
   _root.mapa._visible = false;
   _root.hud._visible = false;
   onEnterFrame = undefined;
}
function getf()
{
   if(Math.abs(xenf) > Math.abs(yenf))
   {
      if(xenf > 0)
      {
         f1 = 2;
      }
      else
      {
         f1 = 1;
      }
   }
   else if(yenf < 0)
   {
      f1 = 4;
   }
   else
   {
      f1 = 3;
   }
   if(altboss && trg.s == 19)
   {
      f1 += 4;
   }
}
function bosssp()
{
   if(!trg.firsttx && !nobob)
   {
      nobob = true;
      trg.firsttx = true;
      if(_root.chaps == 6 && _root.lev != _root.bossl2)
      {
         sams();
         if(_root.samer > 1)
         {
            _root.locker[88] = true;
         }
      }
      if((_root.chaps < 8 || _root.chaps == 8 && _root.double && _root.lev == _root.bossl2) && (_root.chaps != 6 || _root.locker[4] && (_root.chala > 4 || _root.chala == 0)))
      {
         if(_root.lev != _root.bossl2)
         {
            create(320,200,0,0,0,0,5.09);
         }
         create(320,360,0,0,0,0,5.1);
         f1 = ingrid(320,200);
         bloww(f1);
         f1 = ingrid(320,360);
         bloww(f1);
      }
      else
      {
         if(_root.chaps == 9 || _root.chala < 9)
         {
            f1 = _root.lox[_root.chala];
            if(f1 > 0)
            {
               _root.locker[f1] = true;
            }
         }
         if(_root.chaps != 6)
         {
            if(_root.chaps == 11)
            {
               f10 = [91,92,96,93,97,94,95];
               _root.locker[f10[_root.skiner]] = true;
               _root.locker[75] = true;
               if(_root.hardmode)
               {
                  _root.locker[103] = true;
                  f10 = [106,108,109,107,112,110,111];
                  _root.locker[f10[_root.skiner]] = true;
                  if(_root.locker[106] && _root.locker[107] && _root.locker[108] && _root.locker[109] && _root.locker[110] && _root.locker[111] && _root.locker[112])
                  {
                     _root.locker[104] = true;
                  }
               }
            }
            else if(_root.chaps == 9)
            {
               if(_root.altchap)
               {
                  f10 = [65,66,67,68,70,69,72];
                  _root.locker[f10[_root.skiner]] = true;
                  if(_root.so.data.icer++ >= 5)
                  {
                     _root.locker[74] = true;
                  }
                  if(!trixx(47))
                  {
                  }
                  if(_root.hardmode)
                  {
                     _root.locker[101] = true;
                  }
               }
               else
               {
                  if(_root.hardmode)
                  {
                     _root.locker[100] = true;
                  }
                  f10 = [55,59,60,63,62,61,73];
                  _root.locker[f10[_root.skiner]] = true;
               }
            }
            else if(_root.lev != _root.bossl2)
            {
               if(_root.hardmode)
               {
                  _root.locker[102] = true;
               }
               _root.locker[3] = true;
               if(_root.skiner == 5)
               {
                  _root.locker[58] = true;
               }
               else if(_root.skiner == 4)
               {
                  _root.locker[38] = true;
               }
               else if(_root.skiner == 6)
               {
                  _root.locker[71] = true;
               }
               else if(_root.skiner >= 1)
               {
                  _root.locker[25 + _root.skiner] = true;
               }
            }
            if(_root.lev != _root.bossl2)
            {
               _root.so.data.wins = _root.so.data.wins + 1;
               if(_root.so.data.wins > 10 && _root.chaps < 9)
               {
                  if(_root.chala == 9)
                  {
                     create(320,280,0,0,0,0,5.09);
                  }
                  else if(_root.chala == 10)
                  {
                     create(320,280,0,0,0,0,5.34);
                  }
                  else
                  {
                     create(280,280,0,0,0,0,5.09);
                     create(360,280,0,0,0,0,5.34);
                  }
               }
               else
               {
                  create(320,280,0,0,0,0,5.34);
               }
               if(_root.so.data.wins > 15)
               {
                  _root.locker[89] = true;
               }
            }
         }
      }
      if(_root.lev == _root.bossl)
      {
         if(_root.chaps == 2 || _root.chaps == 4 || _root.chaps == 6 || _root.chaps == 8)
         {
            if(_root.nodmg)
            {
               _root.locker[48 + _root.chaps / 2] = true;
            }
            _root.nodmg = true;
            if(_root.chaps == 6 && _root.locker[74])
            {
               poli = true;
               create(200,300,0,0,0,0,5.35);
            }
         }
      }
      _root.lcomp[_root.chaps]++;
      _root.bossk[_root.bosss] = true;
      if(_root.bosss >= 9 && _root.bosss <= 12 || _root.bosss == 22)
      {
         _root.horsedown = _root.horsedown + 1;
      }
      if(_root.bossk[1] && _root.bossk[2] && _root.bossk[13] && _root.bossk[17])
      {
         _root.locker[19] = true;
      }
      if(_root.bossk[3] && _root.bossk[4] && _root.bossk[14] && _root.bossk[18])
      {
         _root.locker[20] = true;
      }
      if(_root.bossk[5] && _root.bossk[6] && _root.bossk[15])
      {
         _root.locker[21] = true;
      }
      if(_root.bossk[9] && _root.bossk[10] && _root.bossk[11] && _root.bossk[12] && _root.horsedown >= 4)
      {
         _root.locker[25] = true;
      }
      if(_root.chaps == 2)
      {
         _root.locker[13] = true;
      }
      if(_root.chaps == 4)
      {
         _root.locker[14] = true;
      }
      if(_root.lcomp[2] >= 25)
      {
         _root.locker[22] = true;
      }
      if(_root.lcomp[4] >= 20)
      {
         _root.locker[23] = true;
      }
      if(_root.lcomp[6] >= 15)
      {
         _root.locker[24] = true;
      }
   }
}
function firr(trg)
{
   var _loc3_ = ups[6] * 1.5 + (ups[32] + ups[80] + ups[1] + ups[120]) * 0.7 + (ups[196] + ups[59] - ups[182] * 2.3) * 0.4 + (ups[101] + ups[90] + ups[189]) * 0.2;
   if(ups[120])
   {
      _loc3_ = _loc3_ + 1;
   }
   if(_root.skiner == 6)
   {
      _loc3_ -= 0.25;
   }
   f1 = Math.sqrt(Math.max(0,1 + _loc3_ * 1.3));
   trg.fire = Math.max(5,16 - f1 * 6 - Math.min(_loc3_,0) * 6);
   if(ups[69])
   {
      trg.fire *= 0.8;
   }
   if(ups[2])
   {
      trg.fire *= 2.1;
      trg.fire += 3;
   }
   if(trixx(39))
   {
      trg.fire -= 2;
   }
   if(trg == player)
   {
      _root.firra = trg.fire;
   }
}
function bossfire(f10, f9, f11, f12, f13)
{
   f1 = trg.xp;
   f2 = trg.yp;
   f3 = 10;
   if(f11 <= 0)
   {
      f11 = 0;
   }
   if(helpss > 1 && trg.s == 20)
   {
      f10 *= 0.6;
   }
   if(helpss > 2 && trg.s == 20)
   {
      f10 *= 0.8;
   }
   if(trg.specoz == 23 && trg.s == 20)
   {
      f10 *= 0.7;
   }
   i = 0;
   while(i < f10)
   {
      if(f9)
      {
         xenf = yenf = 0;
         if(f12 != 0 || f12 == undefined)
         {
            xenf = trg.xp - player.xp;
         }
         if(f13 != 0 || f13 == undefined)
         {
            yenf = trg.yp - player.yp;
         }
         if(f13)
         {
            if(f13 * yenf > 0)
            {
               yenf = 0;
            }
            yenf *= Math.abs(f13);
         }
         if(f12)
         {
            if(f12 * xenf > 0)
            {
               xenf = 0;
            }
            xenf *= Math.abs(f12);
         }
         enf = enfget(xenf,yenf);
         enf = -7 / enf;
         xenf *= enf;
         yenf *= enf;
         f14 = Math.random() * 3.5;
         if(trg.worm && f10 == 1)
         {
            f14 *= 3;
         }
         xenf += crand(f14);
         yenf += crand();
      }
      else
      {
         xenf = crand(7);
         yenf = crand();
      }
      f0 = Math.random() * 6;
      trg2 = create(trg.xp,trg.yp,0,xenf,yenf,0,9,trg.s);
      trg2.fd = 0.32 + f11 * 0.1;
      trg2.dm = (- random(30)) * 0.8 + 5 - f11;
      trg2.d._xscale = trg2.d._yscale = 90 + random(2) * 40 + Math.random() * 5;
      if(trg.s == 62)
      {
         trg2.dy -= 50;
      }
      if(trg.s == 102)
      {
         if(trg.state == 2)
         {
            trg2.dy -= 40;
         }
      }
      if(trg.s == 102 || trg.minb == 3)
      {
         if(random(10) == 0 && altboss || trg.minb == 3)
         {
            trg2.hom = true;
            colorit(trg2,0.8,1,2.5,0,0,0);
            trg2._xscale *= 1.2;
            trg2._yscale *= 1.2;
            if(trg.minb == 3)
            {
               trg.fd -= 1;
            }
            if(trg.s == 46 && trg.specoz == 23)
            {
               trg2.longshot = true;
               trg2.fd = 0.32;
               trg2.dm = -4;
            }
         }
         else
         {
            var _loc3_ = new flash.geom.Transform(trg2);
            _loc3_.colorTransform = bull;
         }
      }
      i++;
   }
   return trg2;
}
function newstart(f1, f22)
{
   if(f1)
   {
      _root.hp = 100;
      newstats();
      _root.newstartt = true;
   }
   else
   {
      _root.getup = true;
      if(_root.chaps != 11)
      {
         _root.chaps = _root.chaps + 1;
      }
      if(!f22)
      {
         _root.cuts = true;
      }
   }
   _root.levz = undefined;
   _root.door = -1;
   _root.playerx = _root.playery = 0;
   moveon();
   _root.gotoAndStop("reset");
}
function plff()
{
   plox = Math.max(7,plox);
   if(ups[69] || ups[118] && (xenf != 0 || yenf != 0))
   {
      chax = xenf;
      chay = yenf;
      if(chaf == undefined)
      {
         chaf = fra + Math.max(0,_root.firra - 10) * 4;
         lchaf = chaf;
      }
   }
   if(xenf != 0 || yenf != 0)
   {
      xxenf = xenf;
      yyenf = yenf;
   }
   if(ups[152])
   {
      trg.xpp = xenf;
      trg.ypp = yenf;
      b1 = fra % 3 == 0;
      lasershow(trg,5,b1);
      if(b1)
      {
         trg.lass = lass;
         trg.lfrr = fra;
         llss = true;
         xenf = trg.xpp;
         yenf = trg.ypp;
         secol *= 0.8;
         secol += 0.2;
      }
   }
   if(ups[152] && (sob == -1 || _root.hat[11]) && trg.fire < 0)
   {
      secol += 1;
      firr(trg);
      sob = 1;
   }
   if(trg.fire < 0 && (!ups[69] && !ups[118] || chaz || _root.bombnext) && unic <= 0 && (xenf != 0 || yenf != 0))
   {
      firr(trg);
      if(ups[118] && !_root.bombnext)
      {
         trg.fire = 20;
         f11 = true;
         trg.xpp = xenf;
         trg.ypp = yenf;
         trg.xbew *= 0.7;
         trg.ybew *= 0.7;
      }
      else if(f11 = ups[68] && !_root.bombnext && !ups[52])
      {
         trg.xpp = xenf;
         trg.ypp = yenf;
         trg.d.d.d.d.d.gotoAndStop(plo);
         lasershow(trg,true);
         _root.soundy("RedLightning_Zap_" + random(3) + ".mp",60);
         llss = true;
         xenf = trg.xpp;
         yenf = trg.ypp;
      }
      else
      {
         llss = false;
      }
      enf = enfget(xenf,yenf);
      enf = 10 / enf;
      xenf *= enf;
      yenf *= enf;
      xxenf = xenf;
      yyenf = yenf;
      xenf += trg.xbew * 0.6;
      yenf += trg.ybew * 0.6;
      enf = enfget(xenf,yenf);
      if(enf < 10)
      {
         enf = 10 / enf;
         xenf *= enf;
         yenf *= enf;
      }
      if(sob == 1 && !_root.hat[11])
      {
         sob = -1;
      }
      else
      {
         sob = 1;
      }
      v1 = 0.3 + Math.random() * 0.2;
      if(ups[2])
      {
         v1 = 0.8;
         sob = 1;
      }
      f1 = trg.xp - yenf * sob * v1;
      f2 = trg.yp + xenf * sob * v1;
      if(!llss)
      {
         _root.soundy("Tears_Fire_" + random(3) + ".mp");
      }
      if(ups[55] && (random(2) == 0 || ups[2]) || ups[87] && random(8) == 0)
      {
         var _loc4_ = trg.xp;
         var _loc3_ = trg.yp;
         create(_loc4_,_loc3_,0,- xxenf,- yyenf,0,2);
         if(ups[87])
         {
            create(_loc4_,_loc3_,0,- yyenf,xxenf,0,2);
            create(_loc4_,_loc3_,0,yyenf,- xxenf,0,2);
         }
      }
      if(ups[168] && !_root.bombnext)
      {
         trg.fire = -1;
         if(bombdrop <= 0)
         {
            bombdrop = 30;
            drop = create(player.xp,player.yp,0,0,0,0,37);
            drop.d.gotoAndStop(70);
         }
      }
      else if(!f11)
      {
         var _loc2_ = create(f1,f2,0,xenf,yenf,0,2);
         if(ups[52] && !_root.bombnext)
         {
            trg.fire *= 3;
            trg.fire += 10;
            enf = 14 / enfget(_loc2_.xbew,_loc2_.ybew);
            _loc2_.xbew *= enf;
            _loc2_.ybew *= enf;
            _loc2_.s = 4;
            attach(_loc2_,4);
            _loc2_.d.d.gotoAndPlay(30);
            _loc2_.lfra = fra;
            _loc2_.spl = -10;
            _loc2_.flyby = false;
            _loc2_.dmg *= 4;
            _loc2_.playbomb = true;
            if(ups[106])
            {
               _loc2_.dmg += 50;
               _loc2_._xscale = _loc2_._yscale = 123;
               if(ups[106])
               {
                  _loc2_.col = 5;
               }
            }
            _loc2_.dmg -= 40;
         }
         else if(_root.bombnext)
         {
            if(_loc2_ != player)
            {
               if(_root.bombnext == 2)
               {
                  _loc2_.flir = true;
                  attach(_loc2_,497);
                  enf = 14 / enfget(_loc2_.xbew,_loc2_.ybew);
                  _loc2_.xbew *= enf;
                  _loc2_.ybew *= enf;
                  _loc2_.s = 4;
                  _loc2_.spl = -10;
                  _loc2_.flyby = false;
                  colorit(_loc2_,1,1,1,0,0,0);
               }
               else
               {
                  _loc2_.bomb = true;
                  attach(_loc2_,2);
                  colorit(_loc2_,1,1,1,0,0,0);
                  _loc2_.d.gotoAndStop("head");
                  _loc2_.dy -= 10;
                  _loc2_.dm += 1.2;
                  trg.d.d.d.gotoAndStop(29);
               }
               _root.bombnext = false;
               _root.itc = false;
            }
         }
         else if(ups[2] || ups[149])
         {
            if(ups[169] && ups[2] != 1 && !ups[153] || ups[149])
            {
               _loc2_.xp = player.xp;
               _loc2_.yp = player.yp;
               if(ups[149])
               {
                  trg.fire * 2;
                  trg.fire += 10;
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
                  colorit(_loc2_,0.5,0.9,0.4,0,0,0);
                  if(ups[115])
                  {
                     _loc2_._alpha = 50;
                  }
               }
            }
            else
            {
               if(ups[153])
               {
                  v2 = 0.07;
               }
               else
               {
                  v2 = 0.05;
               }
               _loc2_.xbew -= yenf * v2;
               _loc2_.ybew += xenf * v2;
               f1 = trg.xp + yenf * sob * v1;
               f2 = trg.yp - xenf * sob * v1;
               trg3 = create(f1,f2,0,xenf + yenf * v2,yenf - xenf * v2,0,2);
               trg3.sot = _loc2_;
               f1 = trg.xp + xenf;
               f2 = trg.yp + yenf;
               if(ups[153])
               {
                  v1 = 0.02;
                  v2 = 0.32;
                  trg3 = create(f1 + yenf * v2 * 1.5,f2 - xenf * v2,0,xenf + yenf * v1,yenf - xenf * v1,0,2);
                  trg3.sot = _loc2_;
                  trg3 = create(f1 - yenf * v2 * 1.5,f2 + xenf * v2,0,xenf - yenf * v1,yenf + xenf * v1,0,2);
                  trg3.sot = _loc2_;
               }
               else
               {
                  trg3 = create(f1,f2,0,xenf,yenf,0,2);
                  trg3.sot = _loc2_;
               }
            }
         }
      }
      plox = 7 + trg.fire * 0.45;
      if(ups[118])
      {
         if(_loc2_.bomb)
         {
            plo = 1;
            plox = 1;
            trg.d.d.d.d.gotoAndStop(1);
         }
         else
         {
            plox = 24;
         }
      }
      chaz = chaf = undefined;
   }
   else if(trg.fire1 < 0)
   {
      trg.fire1 = 10;
      xenf = xxenf;
      yenf = yyenf;
      enf = enfget(xenf,yenf);
      enf = 10 / enf;
      xenf *= enf;
      yenf *= enf;
      xxenf = xenf;
      yyenf = yenf;
      xenf += trg.xbew * 0.6;
      yenf += trg.ybew * 0.6;
      enf = enfget(xenf,yenf);
      if(enf < 10)
      {
         enf = 10 / enf;
         xenf *= enf;
         yenf *= enf;
      }
      v1 = 0.3 + Math.random() * 0.2;
      if(ups[2])
      {
         v1 = 0.8;
         sob = 1;
      }
      f1 = trg.xp;
      f2 = trg.yp;
      e = 0;
      while(e < folz.length)
      {
         _loc2_ = folz[e];
         if(fra - _loc2_.lfra > trg.fire1 + 3 && !_loc2_.cat && !_loc2_.mon && !_loc2_.hol && !_loc2_.ni && !_loc2_.bum)
         {
            if(_loc2_.maga)
            {
               _loc2_.outway = false;
               _loc2_.charge = true;
               _loc2_.xbew = xenf;
               _loc2_.ybew = yenf;
               _loc2_.xp = player.xp;
               _loc2_.yp = player.yp;
               if(Math.abs(xenf) > Math.abs(yenf))
               {
                  sideflip(xenf,_loc2_.d);
                  _loc2_.d.gotoAndStop(35);
               }
               else if(yenf < 0)
               {
                  _loc2_.d.gotoAndStop(36);
               }
               else
               {
                  _loc2_.d.gotoAndStop(37);
               }
               _loc2_.lfra = fra + 80;
               _loc2_.dmg = 3.5;
            }
            else if(_loc2_.baa != 5)
            {
               _loc2_.d.gotoAndStop(plo + 4);
               _loc2_.lfra = fra;
               if(_loc2_.laser)
               {
                  _loc2_.d.gotoAndStop(plo + 45);
                  f1 = 1 / enfget(xenf,yenf);
                  _loc2_.xpp = xenf * f1;
                  _loc2_.ypp = yenf * f1;
                  lassd = 3;
                  lasershow(_loc2_,2);
                  _root.soundy("RedLightning_Zap_" + random(3) + ".mp",60);
               }
               else
               {
                  if(!llss)
                  {
                     _root.soundy("Tears_Fire_" + random(3) + ".mp");
                  }
                  if(_loc2_.dou)
                  {
                     babymode = 2;
                  }
                  else if(_loc2_.baa > 1)
                  {
                     babymode = _loc2_.baa;
                  }
                  else
                  {
                     babymode = 1;
                  }
                  if(babymode == 8)
                  {
                     f1 = [1,2,3,4,5,6,7];
                     babymode = f1[random(f1.length)];
                  }
                  f1 = _loc2_.xp;
                  f2 = _loc2_.yp;
                  f10 = doub;
                  doub = _loc2_.dou;
                  if(babymode == 7)
                  {
                     f3 = 0.2;
                     var trg3 = create(f1,f2,0,xenf + yenf * f3,yenf - xenf * f3,0,2);
                     trg3.d._xscale *= 0.8;
                     trg3.d._yscale *= 0.8;
                     babymode = 7;
                     f3 = - f3;
                     trg3 = create(f1,f2,0,xenf + yenf * f3,yenf - xenf * f3,0,2);
                     trg3.d._xscale *= 0.8;
                     trg3.d._yscale *= 0.8;
                  }
                  else
                  {
                     var trg3 = create(f1,f2,0,xenf,yenf,0,2);
                     trg3.d._xscale *= 0.8;
                     trg3.d._yscale *= 0.8;
                     if(_loc2_.baa == 9)
                     {
                        trg3.xbew *= -1;
                        trg3.ybew *= -1;
                     }
                  }
                  if(_loc2_.baa == 11)
                  {
                     _loc2_.d.gotoAndStop(plo + 156);
                  }
                  else if(_loc2_.baa == 10)
                  {
                     _loc2_.d.gotoAndStop(plo + 165);
                  }
                  else if(_loc2_.baa == 9)
                  {
                     _loc2_.d.gotoAndStop(plo + 142);
                  }
                  else if(_loc2_.baa == 8)
                  {
                     _loc2_.d.gotoAndStop(plo + 120);
                  }
                  else if(_loc2_.baa == 7)
                  {
                     _loc2_.d.gotoAndStop(plo + 111);
                  }
                  else if(_loc2_.baa == 6)
                  {
                     _loc2_.d.gotoAndStop(plo + 102);
                  }
                  else if(_loc2_.baa == 4)
                  {
                     _loc2_.d.gotoAndStop(plo + 68);
                  }
                  else if(_loc2_.baa == 3)
                  {
                     _loc2_.d.gotoAndStop(plo + 59);
                  }
                  else if(_loc2_.meat)
                  {
                     _loc2_.d.gotoAndStop(plo + 27);
                  }
                  else if(_loc2_.dou)
                  {
                     _loc2_.d.gotoAndStop(plo + 13);
                  }
                  doub = f10;
               }
               if(!ups[52])
               {
                  e++;
               }
            }
         }
         e++;
      }
      plox1 = 7 + trg.fire1 * 0.45;
   }
   if(plox > 8 || _root.fmode == 7 && !ups[68] && !ups[118])
   {
      if(ups[68] && ups[59])
      {
         trg.d.d.d.d.gotoAndStop(plo + 8);
      }
      else
      {
         trg.d.d.d.d.gotoAndStop(plo + 4);
      }
   }
   else
   {
      trg.d.d.d.d.gotoAndStop(plo);
   }
}
function chaxx()
{
   f1 = 1;
   if(Math.abs(xenf) > Math.abs(yenf))
   {
      yenf = 0;
      if(xenf < 0)
      {
         xenf = f1;
      }
      else
      {
         xenf = - f1;
      }
   }
   else
   {
      xenf = 0;
      if(yenf < 0)
      {
         yenf = f1;
      }
      else
      {
         yenf = - f1;
      }
   }
   trg.xpp = xenf;
   trg.ypp = yenf;
   return true;
}
function chaxy()
{
   outgrid(trg.til);
   f3 = xenf;
   f4 = yenf;
   f5 = random(8);
   f1 = player.xp + player.xbew * f5;
   f2 = player.yp + player.ybew * f5;
}
function chaa(f9)
{
   chaxy();
   if(enfcheckx(f3,f4,f1,f2,200))
   {
      if(f9 == 2)
      {
         f3 = true;
      }
      else if(!f9)
      {
         f3 = linecheck(f3,f4,f1,f2);
      }
      else
      {
         f3 = linecheckxx(f3,f4,f1,f2);
      }
      if(f3)
      {
         return chaxx();
      }
   }
}
function eyefly()
{
   trg.xbew *= 0.7;
   trg.ybew *= 0.7;
   v1 = 1;
   if(trg.xbew > 0)
   {
      trg.xbew += v1;
   }
   else
   {
      trg.xbew -= v1;
   }
   if(trg.ybew > 0)
   {
      trg.ybew += v1;
   }
   else
   {
      trg.ybew -= v1;
   }
   v1 = 3;
   if(trg.xp > 580)
   {
      trg.xbew -= v1;
   }
   if(trg.xp < 60)
   {
      trg.xbew += v1;
   }
   if(trg.yp > 410)
   {
      trg.ybew -= v1;
   }
   if(trg.yp < 170)
   {
      trg.ybew += v1;
   }
}
function friends()
{
   trg.damger = trg.s == 3 && (trg.alt && trg.fly || trg.meat || trg.charge || trg.ang || trg.bird || trg.bluf || trg.eye || trg.ni || trg.hairb || trg.dad);
   trg.ggh = true;
   colorit(trg,1,1,1,0,0,0);
   trg.dou = false;
   if(trg.meat && trg.meat != 5)
   {
      if(trg.me2)
      {
         trg.meat = Math.min(4,ups[73] - 4);
      }
      else
      {
         trg.meat = Math.min(4,ups[73]);
      }
   }
   if(!trg.stopi)
   {
      if(trg.hairb)
      {
         enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
         f1 = 15 + _root.hairb * 2;
         enf = Math.min(1.4,f1 - enf) / enf * 0.07;
         trg.xbew += xenf * enf;
         trg.ybew += yenf * enf;
         f1 = 0.87 + _root.hairb * 0.01;
         if(trg.d._currentframe != 149 || trg.d.d._currentframe == trg.d.d._totalframes)
         {
            trg.d.gotoAndStop(148);
            trg.d.d.gotoAndStop(_root.hairb);
         }
         else
         {
            trg.d.d.nextFrame();
            trg.d.d.d.gotoAndStop(_root.hairb);
         }
         trg.xbew *= f1;
         trg.ybew *= f1;
         trg.dmg = 3 + _root.hairb * 2;
         if(fra % 14 == 0)
         {
            trg.hh = [];
         }
      }
      else if(trg.eye)
      {
         if(random(4) == 0)
         {
            splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.3 + 0.1);
         }
         trg.dmg = 8;
         if(fra % 14 == 0)
         {
            trg.hh = [];
         }
         trg.d.gotoAndStop(130);
         eyefly();
      }
      else if(trg.meat > 2 || trg.bird || trg.bluf || trg.bum && ashut == 0 || trg.dad)
      {
         if(trg.bluf && trg.trg2 == undefined)
         {
            trg.trg2 = player;
         }
         if(random(4) == 0 && !trg.bird && !trg.bluf && !trg.bum && !trg.dad)
         {
            splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.3 + 0.1);
         }
         trg.ggh = false;
         if(fra % 14 == 0)
         {
            trg.hh = [];
         }
         if(trg.bird || trg.meat > 2)
         {
            if(trg.trg2 == player)
            {
               if(ablufer && random(3) == 0)
               {
                  trg.trg2 = ablufer;
               }
            }
         }
         if(trg.bum)
         {
            if(trg.d._currentframe != 135)
            {
               trg.d.gotoAndStop(134);
            }
         }
         else if(trg.bluf)
         {
            trg.ggh = true;
            if(fra10 || trg.bluf != 2)
            {
               trg.bluf = 2;
               trg.dmg = 1.2 * dmgdo() + 3;
            }
            f12 = fra * 0.03;
            if(ups[112])
            {
               f12 *= 2;
            }
            f11 = (f12 + blub / Math.max(1,ablub) * 2) * 3.141592653589793;
            if(trg.trg2.xp <= -100 || trg2.s < 10)
            {
               trg.trg2 = player;
            }
            if(trg.trg2 == player && f11 > -100)
            {
               if(fra2)
               {
                  f1 = 1;
                  if(ablub > 4)
                  {
                     f1 = 1 + (ablub - 4) * 0.1;
                  }
                  trg.xpp = player.xp + Math.sin(f11) * 35 * f1;
                  trg.ypp = player.yp + Math.cos(f11) * 30 * f1;
               }
               if(ablufer && random(3) == 0)
               {
                  trg.trg2 = ablufer;
               }
            }
            else if(trg.trg2 != undefined)
            {
               trg2 = trg.trg2;
               trg.xpp = trg2.xp;
               trg.ypp = trg2.yp;
            }
            else
            {
               trg.xpp = trg.xp;
               trg.ypp = trg.yp;
            }
            if(trg.trg2 == undefined)
            {
               trg.trg2 = player;
            }
            blub++;
            blufb++;
            trg.d.gotoAndStop(128);
         }
         else if(trg.dad)
         {
            trg.ggh = true;
            trg.dmg = 20;
            trg.d.gotoAndStop(151);
            if(trg.d.d._currentframe != 1)
            {
               trg.d.d.nextFrame();
            }
            if(trg.d.d._currentframe >= 37)
            {
               trg.d.d.gotoAndStop(1);
            }
            if(trg.bh = trg.d.d._currentframe > 10 && trg.d.d._currentframe < 33)
            {
               trg.fire = 100;
            }
         }
         else if(trg.bird)
         {
            trg.ggh = true;
            trg.dmg = 2;
            if(trg.bird == 2)
            {
               trg.d.gotoAndStop(171);
            }
            else
            {
               trg.d.gotoAndStop(83);
            }
         }
         else if(trg.meat == 5)
         {
            trg.dmg = 7;
            if(sk == 5)
            {
               trg.d.gotoAndStop(80);
            }
            else if(sk == 7)
            {
               trg.d.gotoAndStop(81);
            }
            else
            {
               trg.d.gotoAndStop(79);
            }
            trg.sp = _root.playsp * 2;
         }
         else if(trg.meat > 3)
         {
            trg._xscale = trg._yscale = 143;
            trg.dmg = 5.5;
            trg.sp = 2.2;
            trg.d.gotoAndStop(54);
         }
         else
         {
            trg.dmg = 3.5;
            trg.sp = 1.8;
            trg.d.gotoAndStop(54);
         }
         trg.outway = false;
         if(trg.trg2.dones)
         {
            trg.trg2 = player;
            trg.fire = 50 - trg.dmg * 5;
         }
         if(trg.trg2 == undefined || trg.trg2 == mheart && !trg.trg2.bh)
         {
            trg.trg2 = player;
            trg.fire = 5;
         }
         trg2 = trg.trg2;
         if(trg2 == player)
         {
            f1 = 80;
         }
         else
         {
            f1 = 20;
         }
         trg.fire--;
         if(trg.bluf)
         {
            trg.bh = fra3;
            if(fra2)
            {
               if(trg.bluf)
               {
                  xenf = trg.xpp - trg.xp;
                  yenf = trg.ypp - trg.yp;
               }
               enf = enfget(xenf,yenf);
               enf = Math.min(2,enf * 0.15) / enf * 2;
               xenf *= enf;
               yenf *= enf;
               trg.xbew += xenf;
               trg.ybew += yenf;
            }
         }
         else
         {
            if(fra % 3 == 0 || trg.whaf == undefined)
            {
               trg.whaf = !enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,f1) && trg.fire <= 0;
            }
            if(trg.whaf)
            {
               if(trg.bird || trg.bum || trg.dad)
               {
                  xenf = trg2.xp - trg.xp;
                  yenf = trg2.yp - trg.yp;
                  enf = enfget(xenf,yenf);
                  if(trg.dad && enf < 30 && trg2 != player)
                  {
                     if(trg.d.d._currentframe == 1)
                     {
                        trg.d.d.nextFrame();
                        trg.stomps = random(3) + 1;
                     }
                  }
                  if(trg.dad)
                  {
                     xenf += trg2.xbew * 5 - trg.xbew * 5;
                     yenf += trg2.ybew * 5 - trg.ybew * 5;
                     enf = enfget(xenf,yenf);
                  }
                  enf = 1 / enf;
                  xenf *= enf;
                  yenf *= enf;
                  trg.xbew += xenf;
                  trg.ybew += yenf;
               }
               else
               {
                  pathfind(trg,trg2.xp,trg2.yp,trg.sp);
               }
            }
         }
         if(!trg.bluf && !trg.dad && trg.d._currentframe != 135)
         {
            if(enfget(trg.xbew,trg.ybew) > 2)
            {
               trg.d.d.gotoAndStop(2);
               sideflip(trg.xbew,trg);
               trg.d.d.he.gotoAndStop(5);
            }
            else
            {
               trg.d.d.he.gotoAndStop(1);
               trg.d.d.gotoAndStop(1);
            }
         }
         if(trg.d._currentframe == 135)
         {
            trg.d.d.nextFrame();
            if(trg.d.d._currentframe == 10)
            {
               emo();
               _root.ups[144] -= 3 + random(2);
               f2 = 5.1022 + random(5) * 0.0001;
               if(random(2) == 0)
               {
                  if(random(3) == 0)
                  {
                     f2 = 5;
                  }
                  else
                  {
                     f2 = 5.03 + random(2) * 0.01;
                  }
               }
               else if(random(3) != 0)
               {
                  if(random(2) == 0)
                  {
                     f2 = 5.07;
                  }
                  else
                  {
                     f2 = 5.3;
                  }
               }
               else
               {
                  f2 = 5.35;
               }
               spaw(trg.xp * 0.5 + player.xp * 0.5,trg.yp * 0.5 + player.yp * 0.5,0,f2);
            }
            if(trg.d.d._currentframe == trg.d.d._totalframes)
            {
               trg.d.gotoAndStop(134);
            }
         }
         if(trg.bum)
         {
            if(fra5)
            {
               f13 = 200;
               f6 = trg.xp;
               f7 = trg.yp;
               f2 = 0;
               for(z in ball)
               {
                  trg2 = ball[z];
                  if(trg2.s == 5)
                  {
                     if(!trg2.dones && trg2.d._currentframe == 2)
                     {
                        f12 = enfcheck(trg2.xp,trg2.yp,f6,f7,f13);
                        if(f12 < f13)
                        {
                           f13 = f12;
                           f2 = trg2;
                        }
                     }
                  }
               }
               if(f13 == 200 || f2.s != 5)
               {
                  trg.trg2 = player;
               }
               if(f2 && trg.trg2 != f2)
               {
                  trg.fire = 5;
                  trg.trg2 = f2;
               }
               if(f13 < 30 && trg2 != trg)
               {
                  trg2 = trg.trg2;
                  _root.ups[144] += coincol(trg2);
                  trg2.d.d.gotoAndStop(2);
                  trg2.dones = true;
               }
               if(trg2 == player)
               {
                  f12 = enfcheck(trg2.xp,trg2.yp,f6,f7,100);
                  if(f12 < 80)
                  {
                     if(_root.ups[144] > 5)
                     {
                        trg.d.gotoAndStop(135);
                     }
                  }
               }
            }
         }
         else if(fra10 || !trg.bluf && fra2)
         {
            if(ashut > 0 && (trg2 == player || trg.fire < 200) && (fra + trg.e) % 13 == 0)
            {
               f2 = false;
               if(random(2) == 0)
               {
                  f6 = player.xp;
                  f7 = player.yp;
               }
               else
               {
                  f6 = trg.xp;
                  f7 = trg.yp;
               }
               f13 = 225 + trg.dmg * 25;
               if(trg.bluf)
               {
                  f13 = 300;
               }
               for(z in ball)
               {
                  trg2 = ball[z];
                  if(trg2.s > 9 && !trg2.dones)
                  {
                     if(enfcheck(trg2.xp,trg2.yp,f6,f7,f13))
                     {
                        if(trg2.pow >= 3 || trg2.bh)
                        {
                           blufer = f2 = trg2;
                        }
                     }
                  }
               }
               if(f2 && trg.trg2 != f2)
               {
                  trg.fire = 5;
                  trg.trg2 = f2;
               }
            }
         }
         if(trg.dad && trg.bh)
         {
            trg.xbew *= 0.5;
            trg.ybew *= 0.5;
         }
         else if(trg.bird || trg.dad)
         {
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
         }
      }
      else if(trg.maga && trg.charge)
      {
         if(mhity(trg.xp + trg.xbew,trg.yp + trg.ybew) || trg.charge > 1)
         {
            killshit(ingrid(trg.xp,trg.yp));
            if(trg.charge > 1)
            {
               trg.charge = trg.charge + 1;
            }
            else
            {
               trg.charge = 2;
            }
            trg.xbew *= 0.5;
            trg.ybew *= 0.5;
            if(trg.charge > 10)
            {
               trg.charge = false;
            }
         }
      }
      else if(trg.fly || trg.meat || trg.ang || trg.ni)
      {
         f1 = player.xp - 2;
         f2 = player.yp - 4;
         if(trg.alt)
         {
            if(fra2)
            {
               trg.hh = [];
            }
            if(trg.alt == 2)
            {
               trg.d.gotoAndStop(128);
               trg.dmg = 2;
               f11 = fra * 0.013 * 3.141592653589793;
               if(ups[112])
               {
                  f11 *= 1.5;
               }
               trg.xp = f1 + Math.sin(f11) * 110;
               trg.yp = f2 + Math.cos(f11) * 90;
            }
            else
            {
               trg.d.gotoAndStop(21);
               trg.dmg = 5;
               f11 = (- fra) * 0.02 * 3.141592653589793;
               if(ups[112])
               {
                  f11 *= 1.5;
               }
               trg.xp = f1 + Math.sin(f11) * 60;
               trg.yp = f2 + Math.cos(f11) * 45;
            }
         }
         else
         {
            if(trg.ni)
            {
               trg.d.gotoAndStop(132);
               trg.dmg = 15;
               if(fra % 6 == 0)
               {
                  trg.hh = [];
               }
            }
            else if(trg.ang)
            {
               trg.dmg = 7;
               if(fra % 18 == 0)
               {
                  trg.hh = [];
               }
               trg.d.gotoAndStop(97);
            }
            else if(trg.meat)
            {
               trg.dmg = 7;
               if(fra % 18 == 0)
               {
                  trg.hh = [];
               }
               if(trg.meat <= 1)
               {
                  trg.d.gotoAndStop(22);
               }
               else
               {
                  f11 += 11;
                  trg.dou = true;
                  if(trg.lfra + 4 < fra)
                  {
                     trg.d.gotoAndStop(plo + 23);
                  }
                  folz.push(trg);
               }
            }
            else
            {
               trg.d.gotoAndStop(20);
            }
            flys.push(e);
            f12 = fra * 0.03;
            if(ups[112])
            {
               f12 *= 2;
            }
            f11 = (f12 + ffly * fll) * 3.141592653589793;
            trg.xp = f1 + Math.sin(f11) * 25;
            trg.yp = f2 + Math.cos(f11) * 20;
            if(trg.fly)
            {
               lff = trg;
            }
            if(!trg.bluf)
            {
               ffly++;
               if(ffly > 3)
               {
                  lff.done = true;
               }
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
      }
      else
      {
         trg.outway = true;
         f1 = (follow == player || follow.maga || follow.dou || follow.ba || follow.hol || follow.ggho) && !trg.maga && !trg.bum && !trg.hol && !trg.cat && !trg.mon;
         trg.baa = 0;
         if(f1)
         {
            trg.baa = 0;
            var f11 = lastbb;
            if(trg.ggho && trg.ggho != 2 && lastbbb != 11 && lastbb != 11)
            {
               lastbb = trg.baa = 11;
            }
            else if(trg.ggho == 2 && trg.ggho != true && lastbbb != 10 && lastbb != 10)
            {
               lastbb = trg.baa = 10;
            }
            else if(ups[188] && lastbbb != 9 && lastbb != 9)
            {
               lastbb = trg.baa = 9;
            }
            else if(ups[95] && lastbbb != 2 && lastbb != 2)
            {
               lastbb = trg.baa = 2;
            }
            else if(ups[67] && lastbbb != 1 && lastbb != 1)
            {
               lastbb = trg.baa = 1;
            }
            else if(ups[163] && lastbbb != 6 && lastbb != 6)
            {
               lastbb = trg.baa = 6;
            }
            else if(ups[167] && lastbbb != 7 && lastbb != 7)
            {
               lastbb = trg.baa = 7;
            }
            else if(ups[174] && lastbbb != 8 && lastbb != 8)
            {
               lastbb = trg.baa = 8;
            }
            else if(ups[99] && lastbbb != 3 && lastbb != 3)
            {
               lastbb = trg.baa = 3;
            }
            else if(ups[113] && lastbbb != 5 && lastbb != 5)
            {
               lastbb = trg.baa = 5;
            }
            else if(ups[100] && lastbbb != 4 && lastbb != 4)
            {
               lastbb = trg.baa = 4;
            }
            lastbbb = f11;
         }
         trg.laser = trg.baa == 2;
         trg.dou = trg.baa == 1;
         f1 = follow.xp;
         f2 = follow.yp;
         if(trg.baa == 9)
         {
            f1 = 640 - player.xp;
            f2 = 580 - player.yp;
         }
         if(trg.baa == 11)
         {
            eyefly();
         }
         else
         {
            enfcheck(trg.xp,trg.yp,f1,f2,100000);
            f1 = 20;
            f2 = enf < 75;
            if(enf > f1)
            {
               enf = (enf - f1) / enf * 0.1;
               trg.xp -= xenf * enf;
               trg.yp -= yenf * enf;
            }
         }
         if(!trg.maga || f2)
         {
            folz.push(trg);
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
         }
         if(trg.baa != 9)
         {
            trg2 = follow;
            follow = trg;
         }
         if(trg.bum)
         {
            if(trg.d._currentframe != 135)
            {
               trg.d.gotoAndStop(134);
            }
            sideflip(trg2.xp - trg.xp);
         }
         else if(trg.hol)
         {
            trg.d.gotoAndStop(126);
         }
         else if(trg.maga)
         {
            trg.d.gotoAndStop(34);
         }
         else if(trg.cat)
         {
            if(trg.cat == 2)
            {
               trg.d.gotoAndStop(77);
            }
            else
            {
               trg.d.gotoAndStop(33);
            }
         }
         else if(trg.mon)
         {
            if(trg.mon == 4)
            {
               trg.d.gotoAndStop(95);
            }
            else if(trg.mon == 3)
            {
               trg.d.gotoAndStop(75);
            }
            else if(trg.mon == 2)
            {
               trg.d.gotoAndStop(52);
            }
            else
            {
               trg.d.gotoAndStop(40);
            }
            if(trg.d.d._currentframe > 1 || _root.monbb >= 1)
            {
               trg.d.d.nextFrame();
               if(trg.d.d._currentframe == 4)
               {
                  _root.monbb = 0;
                  switch(trg.mon)
                  {
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
                  trg2 = spaw(trg.xp,trg.yp,0,f1);
                  if(trg.mon > 1 && trg.mon < 4)
                  {
                     trg2.col = trg.mon;
                  }
               }
            }
         }
         else
         {
            trg.ba = true;
            if(trg.lfra + 4 < fra)
            {
               if(trg.baa == 5)
               {
                  if(trg.plo == undefined)
                  {
                     trg.plo = 1;
                  }
                  trg.d.gotoAndStop(trg.plo + 84);
                  if(fra % 10 == 0)
                  {
                     f2 = false;
                     for(z in ball)
                     {
                        trg2 = ball[z];
                        if(trg2.s > 9 && !trg2.dones)
                        {
                           if(enfcheck(trg2.xp,trg2.yp,trg.xp,trg.yp,150))
                           {
                              if(linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                              {
                                 if(trg2.bh)
                                 {
                                    f2 = trg2;
                                 }
                              }
                           }
                        }
                     }
                     if(f2 && trg.trg2 != f2)
                     {
                        trg2 = trg.trg2 = f2;
                     }
                     else
                     {
                        trg2 = trg.trg2;
                     }
                     if(trg2 == player || trg2.dones)
                     {
                        trg2 = trg.trg2 = undefined;
                     }
                     if(!f2)
                     {
                        if(!linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                        {
                           trg2 = trg.trg2 = undefined;
                        }
                     }
                     if(trg2)
                     {
                        xenf = trg.xp - trg2.xp;
                        yenf = trg.yp - trg2.yp;
                        enf = enfget(xenf,yenf);
                        enf = 8 / enf;
                        xenf *= enf;
                        yenf *= enf;
                        babymode = 5;
                        if(Math.abs(xenf) > Math.abs(yenf))
                        {
                           if(xenf < 0)
                           {
                              trg.plo = 2;
                           }
                           else
                           {
                              trg.plo = 4;
                           }
                        }
                        else if(yenf > 0)
                        {
                           trg.plo = 3;
                        }
                        else
                        {
                           trg.plo = 1;
                        }
                        trg.d.gotoAndStop(trg.plo + 88);
                        trg2 = create(trg.xp,trg.yp,0,- xenf,- yenf,0,2);
                     }
                     else
                     {
                        trg.plo = 1;
                     }
                  }
               }
               else if(trg.baa == 11)
               {
                  trg.d.gotoAndStop(plo + 152);
               }
               else if(trg.baa == 10)
               {
                  trg.d.gotoAndStop(plo + 161);
               }
               else if(trg.baa == 9)
               {
                  trg.d.gotoAndStop(plo + 138);
               }
               else if(trg.baa == 8)
               {
                  trg.d.gotoAndStop(plo + 116);
               }
               else if(trg.baa == 7)
               {
                  trg.d.gotoAndStop(plo + 107);
               }
               else if(trg.baa == 6)
               {
                  trg.d.gotoAndStop(plo + 98);
               }
               else if(trg.baa == 4)
               {
                  trg.d.gotoAndStop(plo + 64);
               }
               else if(trg.baa == 3)
               {
                  trg.d.gotoAndStop(plo + 55);
               }
               else if(trg.laser)
               {
                  trg.d.gotoAndStop(plo + 41);
               }
               else if(trg.dou)
               {
                  trg.d.gotoAndStop(plo + 9);
               }
               else
               {
                  trg.d.gotoAndStop(plo);
               }
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
      }
   }
}
function slotf()
{
   var _loc1_ = 0;
   if(ups[46])
   {
      _loc1_ = 3 + random(18);
   }
   else
   {
      _loc1_ = 3 + random(21);
   }
   if(_loc1_ >= 9 && (random(10) != 0 || sloto))
   {
      _loc1_ = _loc1_ + 1;
   }
   if(_loc1_ == 7 && random(3) == 0)
   {
      _loc1_ = 10;
   }
   return _loc1_;
}
function sloty(f1)
{
   switch(f1)
   {
      case 3:
         if(random(3) == 0)
         {
            _root.ups[10] += 0.5;
            ups[10] = _root.ups[10];
            st22("Pretty Fly");
            emo();
         }
         else
         {
            f2 = 13;
            emo(true);
         }
         break;
      case 4:
         f2 = 5.04;
         break;
      case 5:
      case 6:
         f2 = 5;
         break;
      case 10:
      case 11:
      case 12:
         f2 = 5.02;
         f12 = Math.max(1,random(3));
         break;
      case 7:
         f2 = 5.03;
         break;
      case 8:
         f2 = 5.07;
         break;
      case 9:
         enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,f1);
         if(enf < f1)
         {
            enf = (f1 - enf) / enf * 0.4;
            player.xbew -= xenf * enf;
            player.ybew -= yenf * enf;
         }
         f2 = 5.1;
         trg.done = true;
         _root.soundy("boss1_explosions" + random(3) + ".wav",80);
         break;
      default:
         if(sloto)
         {
            emo(true);
         }
   }
}
function actions2()
{
   f2 = 0;
   f3 = fra % 3;
   if(f3 == 0)
   {
      f1 = 0.45;
   }
   else if(f3 == 1)
   {
      f1 = 1;
   }
   else
   {
      f1 = 1.85;
   }
   if(blackout == 2)
   {
      if(f1 == 1)
      {
         f2 = 30;
      }
      f1 *= 0.7;
      f1 -= 0.5;
   }
   bull = new flash.geom.ColorTransform();
   bull.redMultiplier = f1;
   bull.greenMultiplier = f1;
   bull.blueMultiplier = f1;
   bull.redOffset = f2;
   bull.greenOffset = f2;
   bull.blueOffset = f2;
   if(isaaaac)
   {
      f1 = (f1 - 1) * 0.1;
      bull.redMultiplier = f1 + 0.8;
      bull.greenMultiplier = f1 + 6;
      bull.blueMultiplier = f1 + 7.4;
      bull.redOffset = f2 + 20;
      bull.greenOffset = f2 + 20;
      bull.blueOffset = f2 + 20;
   }
   bull2 = new flash.geom.ColorTransform();
   if(fra2)
   {
      f3 = fra % 6 / 2;
      if(f3 == 0)
      {
         f1 = 0.45;
      }
      else if(f3 == 1)
      {
         f1 = 1;
      }
      else
      {
         f1 = 1.85;
      }
      f1 = f1 * 0.2 + 0.85;
      if(blackout == 2)
      {
         f1 = 1;
      }
      bull2.redMultiplier = f1;
      bull2.greenMultiplier = f1;
      bull2.blueMultiplier = f1;
      bull2.redOffset = f2;
      bull2.greenOffset = f2;
      bull2.blueOffset = f2;
   }
   var _loc2_ = new flash.geom.Transform(blorz);
   _loc2_.colorTransform = bull2;
   wormet = momet = magget = 0;
   if(fra % 3 == 0)
   {
      for(e in levz)
      {
         if(levz[e] > 0 && levz[e] < 0.99)
         {
            levz[e] -= 0.1;
            if(levz[e] < 0)
            {
               levz[e] = 0;
            }
         }
      }
   }
   if(fra > 10)
   {
      _root.levit[_root.lev] = [];
   }
   ashut = shutdoor;
   shutdoor = 0;
   if(fra > 10)
   {
      _root.levcol[_root.lev] = 0;
   }
   follow = player;
   folz = [];
   ffly = 0;
   ablub = blub;
   blub = 0;
   _root.bluf = Math.min(blufb,10);
   blufb = 0;
   if(fra > 40)
   {
      for(e in ref)
      {
         trg = ref[e];
         if(trg._currentframe < 5)
         {
            if(trg._parent._currentframe == 1)
            {
               if(random(5) == 0)
               {
                  if(enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,160))
                  {
                     f1 = 20 / enf;
                     if(linechecky(trg.xp - xenf * f1,trg.yp - yenf * f1,player.xp,player.yp))
                     {
                        if(fiz++ > 5)
                        {
                           if(random(5) == 0)
                           {
                              trg._parent.nextFrame();
                              fiz = 0;
                           }
                        }
                     }
                  }
               }
            }
            else
            {
               trg._parent.nextFrame();
            }
            if(trg._parent._currentframe == trg._parent._totalframes)
            {
               trg._parent.gotoAndStop(1);
            }
         }
         else
         {
            trg._parent.gotoAndStop(1);
         }
         if(trg._parent._currentframe == 3)
         {
            enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
            enf = enfget(xenf,yenf);
            enf = -5 / enf;
            xenf *= enf;
            yenf *= enf;
            create(trg.xp + xenf * 5,trg.yp + yenf * 5,0,xenf,yenf,0,9);
         }
      }
   }
   if(anarch-- > 0)
   {
      if(anarch % 5 == 0)
      {
         trg2 = spaw(320,280,random(300),5.04);
         trg2.col = 3;
         if(analt == 5)
         {
            trg2.col = 5;
            trg2.dmg = 0;
         }
         else if(analt)
         {
            attach(trg2,502);
            trg2.s = 4;
            trg2.bolt = true;
            trg2.bh = false;
            if(analt >= 2)
            {
               trg2.friend = true;
               if(random(2) == 0 && analt == 2)
               {
                  trg3 = ball[random(ball.length)];
                  if(trg3.s > 10)
                  {
                     trg2.xp = trg3.xp;
                     trg2.yp = trg3.yp;
                  }
               }
            }
         }
      }
   }
   else
   {
      analt = false;
   }
   if(killa)
   {
      for(z in levz)
      {
         if(killshit(z))
         {
            killshit(z);
            killshit(z);
            killshit(z);
            killshit(z);
         }
      }
      killa = false;
   }
   splaz = false;
   if(beamer++ > 0)
   {
      f2 = Math.max(0,20 - beamer) / 20;
      f3 = (1 - f2) * 255;
      colorit(_root,f2,f2,f2,f3,f3,f3);
      if(beamer > 25)
      {
         _root.fade = true;
         colorit(_root,1,1,1,0,0,0);
         newstart(false,true);
      }
   }
   if(momdown-- > 0)
   {
      if(_root.chaps == 6)
      {
         f1 = Math.max(0,1 - Math.abs(momdown - 50) / 40);
         f2 = 1 - f1;
         f3 = 150 * f1;
         colorit(_root,f2,f2,f2,f3,0,0);
         if(momdown == 50 && (!_root.locker[4] || _root.chala > 0 && _root.chala < 5) && _root.chaps != 7)
         {
            _root.locker[4] = true;
            _root.locker[5] = true;
            _root.locker[6] = true;
            colorit(_root,1,1,1,0,0,0);
            _root.levz = undefined;
            moveon();
            _root.door = undefined;
            _root.gotoAndStop(9);
         }
         if(_root.hardmode)
         {
            _root.locker[99] = true;
         }
      }
      splaz = true;
   }
   if(sacri-- > 0)
   {
      splaz = true;
   }
   if(splaz)
   {
      while(random(2) != 0)
      {
         f10 = random(15) + 2;
         xenf = crand(f10);
         yenf = crand(f10);
         trg2 = create(320 - xenf * 100,280 - yenf * 100,0,xenf,yenf,0,8);
         trg2.d._xscale = trg2.d._yscale = 140 + random(80);
         trg2.md -= random(20);
         trg2.fd += 0.5;
      }
   }
   helpss = helps;
   helps = 0;
   help = 0;
   for(e in ball)
   {
      trg = ball[e];
      b1 = (trg.minb || trg.minboh) && trg.eternal || trg.bossheart;
      if((trg.bosser || b1) && trg.dones)
      {
         if(!b1)
         {
            trg.bosser = false;
            bosser--;
         }
         if((bosser == 0 || b1) && (!bossheart || trg.minb == 3) && !trg.boso)
         {
            trg.boso = true;
            trg.minboh = false;
            bossheart = true;
            f0 = 5.01;
            if(trg.s == 45 || trg.s == 78)
            {
               f1 = 320;
               f2 = 280;
            }
            else
            {
               f1 = trg.xp;
               f2 = trg.yp;
            }
            if(_root.bossl == _root.lev || b1 && trg.s != 51)
            {
               create(f1,f2,0,crand(7),crand(7),0,f0);
               if(_root.so.data.wins < 6 && !b1)
               {
                  create(f1,f2,0,crand(7),crand(7),0,f0);
               }
            }
            if(spezz || b1)
            {
               trg2 = create(f1,f2,0,crand(7),crand(7),0,5.01);
               if(spezz == 4 || spezz == 7)
               {
                  trg2.col = 3;
               }
               if((spezz == 23 || b1) && etux++ < 2)
               {
                  trg2.col = 4;
               }
            }
         }
      }
   }
   bosser = 0;
   lastbbb = lastbb = -1;
   topz(1);
   if(decer.s == 4)
   {
      rply = player;
      player = decer;
   }
}
function deathscripts()
{
   if((hps[trg.s] / mux > 199 && !trg.goner && trg.s != 62 && trg.s != 96 && trg.s != 18 && trg.pow != 5 || trg.s == 19 || trg.s == 20 || trg.s == 79 && (!trg.alt || altboss != 2) || trg.s == 82 || trg.s == 83 || trg.minb || trg.worm == 6 || trg.s == 67 || trg.s >= 71 && trg.s <= 77) && trg.s > 0 && !trg.dones && !trg.nobar && !trg.sic && !trg.horse && !trg.weap && !mheart || trg == mheart || trg.s == 97 || trg.s == 98 || trg.showbar)
   {
      bosser++;
      trg.aboss = trg.bosser = !trg.minb;
      if(trg.hp > trg.mhp)
      {
         trg.mhp = trg.hp;
      }
      help += trg.hp / trg.mhp;
      helps++;
      f1 = 0;
      if(trg.s == 74)
      {
         f1 = 10;
      }
      if(trg.s == 75)
      {
         f1 = 4;
      }
      if(trg.s == 76)
      {
         f1 = 1;
      }
      if(trg.s == 71 && altboss)
      {
         f1 = 18;
      }
      else if(trg.s == 71)
      {
         f1 = 12;
      }
      if(trg.s == 72)
      {
         f1 = 2;
      }
      help += f1;
      helps += f1;
      bosser += f1;
      trg.hbar = true;
      mins = trg.minb || _root.lev != _root.bossl && _root.lev != _root.bossl2 && _root.lev != 166;
   }
   if((trg.flyai || trg.s == 25 && !trg.alt) && !trg.dones)
   {
      flyshut++;
   }
   if(trg.gosplash)
   {
      gosplash();
      trg.gosplash = false;
   }
   if((trg.s == 61 || trg.s == 26 && trg.alter == 2 || trg.s == 92 && trg.eternal || trg.s == 22 && trg.eternal == 2) && trg.dones && !trg.wtfsto)
   {
      trg.wtfsto = true;
      if(trg.alter == 2 && trg.s == 61)
      {
         green();
         if(trg.eternal)
         {
            green(false,true);
            green(false,true);
            green(false,true);
         }
      }
      else
      {
         quadf(trg.xp,trg.yp,8,trg.s == 26 && trg.alter == 2 && trg.eternal || (trg.s == 61 || trg.s == 22) && trg.eternal);
         if(trg.s == 22)
         {
            boil();
            boil();
            boil(false,2);
            boil(false,2);
            boil(false,2);
         }
      }
   }
   if(trg.s == 81 && trg.alter == 2)
   {
      if(trg.dones)
      {
         trg.alter = 0;
         _root.locker[64] = true;
         f0 = 5.1132;
         spaw(trg.xp,trg.yp,0,f0);
      }
   }
   if(trg.s == 98 && trg.eternal && !trg.sploooz && trg.dones)
   {
      trg.sploooz = true;
      trg2 = create(trg.xp,trg.yp - 20,0,0,0,0,92);
      trg3 = create(trg.xp,trg.yp - 20,0,0,0,0,92);
      trg2.specoz = 23;
      trg3.specoz = 23;
      trg2._xscale = trg2._yscale *= 1.3;
      trg3._xscale = trg3._yscale *= 1.3;
      speco(trg3);
      speco(trg2);
   }
   if(trg.minb)
   {
      if(!fonter)
      {
         fonter = true;
         f4 = ["Isaac","Magdalene","Cain","Judas","???","Eve","Samson"];
         f2 = ["Sloth","Lust","Wrath","Gluttony","Greed","Envy","Pride","Krampus"];
         f0 = trg.s - 46;
         f1 = " vs ";
         if(trg.eternal || flox.eternal)
         {
            f1 += "Eternal ";
         }
         if(trg.alter == 3)
         {
            f1 += "Ultra Pride";
         }
         else if(trg.alter == 2)
         {
            f1 += "Super " + f2[f0];
         }
         else
         {
            f1 += f2[f0];
         }
         st11(f4[_root.skiner] + f1);
      }
      if(trg.dones && helpss == 0 && !minsber && _root.lev != _root.chamb)
      {
         minsber = true;
         if(trg.minb == 2)
         {
            f1 = 74;
            if(!_root.locker[10])
            {
               f1 = 64;
            }
            f1 = [5.3,140,5.07,45,5.04,106,5.01,129,5.02,f1,5.04,128,5.3,81];
         }
         else
         {
            f1 = [5.3,42,5.07,13,5.04,37,5.01,15,5.02,64,5.04,49,5.3,65];
         }
         if(trg.bomber)
         {
            trg.s = 48;
         }
         f0 = trg.s - 46;
         _root.minwin[f0] = true;
         if(_root.minwin[0] && _root.minwin[1] && _root.minwin[2] && _root.minwin[3] && _root.minwin[4] && _root.minwin[5] && _root.minwin[6])
         {
            _root.locker[29] = true;
         }
         if(trg.minb == 3)
         {
            f0 = 5.07;
            trg2 = create(trg.xp,trg.yp,0,0,0,0,f0);
            if(trg == flox)
            {
               trg2.col = 62;
            }
            else
            {
               trg2.col = 61;
            }
            _root.locker[98] = true;
         }
         else
         {
            f0 *= 2;
            f2 = false;
            if(random(4) == 0 || trg.minb == 2 && random(7) == 0)
            {
               f2 = true;
            }
            if(f2 && !_root.ups[f1[f0 + 1]])
            {
               f0 = f1[f0 + 1];
               f0 = 5.1 + f0 / 10000;
            }
            else
            {
               f0 = f1[f0];
            }
            if(f0 == 5.04 && trg.s == 51)
            {
               trg2 = create(trg.xp,trg.yp,0,0,0,0,f0);
               trg2.col = 3;
            }
            else if(f0 == 5.02)
            {
               f3 = 4 + random(5);
               z = 0;
               while(z < f3)
               {
                  f4 = random(5) + 2;
                  create(trg.xp,trg.yp,0,crand(f4),crand(f4),0,f0);
                  z++;
               }
            }
            else if(f0 == 5.01 || f0 == 5.04)
            {
               f1 = crand(5);
               f2 = crand();
               create(trg.xp,trg.yp,0,f1,f2,0,f0);
               create(trg.xp,trg.yp,0,- f1,- f2,0,f0);
            }
            else
            {
               spaw(trg.xp,trg.yp,0,f0);
            }
         }
         trg.minb = false;
         trg.minboh = true;
      }
   }
   else if(trg.special || trg.hallo || trg.etdrop)
   {
      if(trg.dones && !_root.dropo[_root.lev][trg.trg.spuz])
      {
         _root.dropo[_root.lev][trg.trg.spuz] = true;
         trg.special = false;
         trg.hallo = false;
         if(trg.etdrop)
         {
            f1 = 7 + random(3);
            trg.etdrop = false;
         }
         else
         {
            f1 = 10;
         }
         if(!_root.hardmode || random(Math.max(f1 - _root.luck,1)) < 3)
         {
            f1 = Math.random();
            if(f1 < 0.4)
            {
               f0 = 5.02;
            }
            else if(f1 < 0.6)
            {
               f0 = 5.01;
            }
            else if(f1 < 0.76 - _root.chaps * 0.01)
            {
               f0 = 5.03;
            }
            else if(f1 < 0.8)
            {
               if(random(2) == 0)
               {
                  f0 = 5.3;
               }
               else
               {
                  f0 = 5.07;
               }
            }
            else if(f1 < 0.95)
            {
               f0 = 5.04;
            }
            else
            {
               f0 = 5.05;
            }
            spaw(trg.xp,trg.yp,0,f0);
         }
      }
   }
   if(trg.s == 51 && trg.tier <= 2 && trg.dones && !trg.wtfst)
   {
      helpss++;
      helps = 1;
      trg.wtfst = true;
      f1 = crand(10);
      f2 = crand();
      trg2 = [];
      f3 = trg.s;
      if(trg.alter == 2)
      {
         f3 += 0.1;
      }
      trg2.push(create(trg.xp + f1,trg.yp + f2,0,f1 * 0.4,f2 * 0.4,0,f3));
      trg2.push(create(trg.xp - f1,trg.yp - f2,0,(- f1) * 0.4,(- f2) * 0.4,0,f3));
      if(trg.alter == 2 && trg.tier < 1 + random(2) && (!trg.eternal || !trg.cop))
      {
         trg2.push(create(trg.xp - f1,trg.yp - f2,0,(- f2) * 0.4,f1 * 0.4,0,f3));
      }
      for(z in trg2)
      {
         trg2[z].fra = fra - 100;
         trg2[z].tier = trg.tier + 1;
         trg2[z].hp /= trg.tier + 2;
         trg2[z].cop = true;
         if(trg.eternal)
         {
            trg2[z]._xscale = trg2[z]._yscale = 130;
         }
         else
         {
            trg2[z]._xscale = trg2[z]._yscale = 100;
         }
         trg2[z].d.gotoAndStop(5 + trg.tier);
         trg2[z].specoz = trg.specoz;
         trg2[z].specol = trg.specol;
         trg2[z].specozz = trg.specozz;
         trg2[z].eternal = trg.eternal;
         speco(trg2[z]);
      }
      if(trg.eternal)
      {
         quadf(trg.xp,trg.yp,10,trg.alter == 2);
      }
   }
   if(trg.s == 76 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      if(trg.eternal && random(3) == 0)
      {
         trg2 = create(trg.xp,trg.yp,0,0,0,0,38.1);
      }
      else
      {
         var _loc2_ = allets;
         allets = false;
         trg2 = create(trg.xp,trg.yp,0,0,0,0,77);
         allets = _loc2_;
         trg2.fra = -100;
      }
      if(trg.eternal)
      {
         trg2.specoz = 23;
         speco(trg2);
      }
   }
   if(trg.s == 77 && trg.dones && !trg.wtfst && trg.eternal && Math.abs(trg._xscale) > 30)
   {
      trg.wtfst = true;
      trg2 = create(trg.xp,trg.yp,0,0,0,0,77);
      trg3 = create(trg.xp,trg.yp,0,0,0,0,77);
      sizes[77] = 13;
      trg3.mhp = trg2.mhp = trg.mhp * 0.75;
      trg3.hp = trg2.hp = trg2.mhp * 0.75;
      trg2._xscale = trg2._yscale = trg3._xscale = trg3._yscale = Math.abs(trg._xscale) * 0.6;
      trg2.d.gotoAndStop(13);
      trg3.d.gotoAndStop(13);
      trg2.eternal = true;
      trg3.eternal = true;
      trg3.specoz = trg2.specoz = 23;
      speco(trg2);
      speco(trg3);
   }
   if(trg.s == 71 || trg.s == 72 || trg.s == 73)
   {
      if(trg.dones && !trg.wtfsss)
      {
         trg.wtfsss = true;
         if(trg.specoz == 23)
         {
            if(altboss)
            {
               boil(false,2);
               boil(false,2);
            }
            else
            {
               quadf(trg.xp,trg.yp,8.5,1);
            }
         }
      }
   }
   if(trg.s == 73 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      f33 = ingrid(trg.xp,trg.yp);
      f1 = levzz(f33);
      if(altboss || f1 != 3)
      {
         f1 = 23;
         if(trg.specoz == 15)
         {
            f1 = 25;
         }
         if(trg.specoz == 23 && !altboss)
         {
            f1 = 31;
         }
         if(altboss)
         {
            boil(true);
            boil(false);
            if(trg.specoz == 23 && random(3) == 0)
            {
               trg2 = create(trg.xp,trg.yp,0,0,0,0,94);
            }
         }
         else
         {
            trg2 = create(trg.xp,trg.yp,0,0,0,0,f1);
            if(f1 == 31)
            {
               trg2.specoz = 23;
               speco(trg2);
               trg2.eternal = true;
               trg2.hp += 20;
            }
         }
         _root.soundy("summonsound.wav",80);
         trg2.hp *= 0.75;
      }
   }
   if((trg.s == 71 || trg.s == 72) && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      f1 = crand(20);
      f2 = crand();
      trg2 = [];
      f3 = trg.s + 1;
      trg2.push(create(trg.xp + f1,trg.yp + f2,0,f1 * 0.2,f2 * 0.2,0,f3));
      trg2.push(create(trg.xp - f1,trg.yp - f2,0,(- f1) * 0.2,(- f2) * 0.2,0,f3));
      if(trg.s == 71)
      {
         if(trg.specoz == 15 || altboss)
         {
            trg2.push(create(trg.xp + f2,trg.yp - f1,0,0,0,0,f3));
         }
         else
         {
            trg2.push(create(trg.xp + f2,trg.yp - f1,0,f2 * 0.2,(- f1) * 0.2,0,f3));
            trg2.push(create(trg.xp - f2,trg.yp + f1,0,(- f2) * 0.2,f1 * 0.2,0,f3));
         }
      }
      for(z in trg2)
      {
         trg2[z].fra = -100;
         trg2[z].d.gotoAndStop(2 + (f3 - 71) * 3);
         if(trg.specoz == 23)
         {
            trg2[z].specoz = 23;
            speco(trg2[z]);
         }
         if(random(2) == 0)
         {
            trg2[z].d._xscale *= -1;
         }
      }
   }
   if(trg.s == 57 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      f1 = crand(10);
      f2 = crand();
      if(trg.alter == 2)
      {
         f3 = 40;
      }
      else
      {
         f3 = 32;
      }
      trg2 = [];
      if(trg.eternal)
      {
         f1 *= 3;
         f2 *= 3;
      }
      trg2.push(create(trg.xp + f1,trg.yp + f2,0,0,0,0,f3));
      trg2.push(create(trg.xp - f1,trg.yp - f2,0,0,0,0,f3));
      if(trg.eternal)
      {
         if(trg.alter == 2)
         {
            f3 = 15;
         }
         else
         {
            trg2.push(create(trg.xp - f2,trg.yp + f1,0,0,0,0,f3));
         }
         trg2.push(create(trg.xp + f2,trg.yp - f1,0,0,0,0,f3));
         if(trg.alter == 2)
         {
            trg2[2].hp *= 3;
         }
      }
      for(z in trg2)
      {
         trg2[z].specoz = trg.specoz;
         speco(trg2[z]);
         if(trg.eternal)
         {
            if(trg2[z].s == 40)
            {
               trg2[z].mhp = trg2[z].hp *= 2.3;
            }
            else
            {
               trg2[z].mhp = trg2[z].hp *= 4.2;
               trg2[z]._xscale = trg2[z]._yscale *= 1.2;
            }
            trg2[z].eternal = true;
         }
      }
   }
   if(trg.s == 79 && altboss && !trg.wtfst && trg.dones)
   {
      trg.wtfst = true;
      quadf(trg.xp,trg.yp,10,true);
   }
   if((trg.s == 80 || trg.s == 94) && !trg.wtfst && trg.dones && trg.hp > -20)
   {
      trg.wtfst = true;
      f1 = player.yp - trg.yp;
      f2 = trg.xp - player.xp;
      enf = enfget(f1,f2);
      if(enf > 0)
      {
         enf = 10 / enf;
         f1 *= enf;
         f2 *= enf;
      }
      else
      {
         f1 = crand(10);
         f2 = crand(10);
      }
      if(trg.s == 94)
      {
         f3 = 85;
      }
      else
      {
         f3 = 18;
      }
      trg2 = create(trg.xp + f1,trg.yp + f2,0,f1,f2,0,f3);
      trg3 = create(trg.xp - f1,trg.yp - f2,0,- f1,- f2,0,f3);
      trg2.fra = -10;
      trg3.fra = -10;
      if(trg.specoz == 23 && trg.s == 94)
      {
         trg2.specoz = 23;
         speco(trg2);
         trg3.specoz = 23;
         speco(trg3);
         boil();
         boil();
         boil();
         boil();
         boil();
         boil();
         boil();
         boil();
      }
      if(trg.specoz == 23 && trg.s == 80)
      {
         trg2.mhp = trg2.hp *= 1.5;
         trg3.mhp = trg3.hp *= 1.5;
         trg2.specoz = 23;
         speco(trg2);
         trg3.specoz = 23;
         speco(trg3);
         trg2 = create(trg.xp - f2,trg.yp + f1,0,(- f2) * 0.5,f1 * 0.5,0,f3);
         trg3 = create(trg.xp + f2,trg.yp - f1,0,f2,- f1,0,f3);
         trg2.mhp = trg2.hp *= 1.5;
         trg3.mhp = trg3.hp *= 1.5;
         trg2.fra = -10;
         trg3.fra = -10;
         trg2.specoz = 23;
         speco(trg2);
         trg3.specoz = 23;
         speco(trg3);
      }
   }
}
function deathscripts2()
{
   if(trg.s == 2 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      if(ups[104] && !trg.ba)
      {
         if(slugsp <= fra)
         {
            slugsp = fra + 5;
            xenf = trg.ybb;
            yenf = - trg.xbb;
            enf = enfget(xenf,yenf);
            f1 = trg.xp;
            f2 = trg.yp;
            if(mhity(f1,f2))
            {
               trg.xp = f1 = trg.xpp;
               trg.yp = f2 = trg.ypp;
            }
            if(enf > 0)
            {
               enf = 8.5 / enf;
               xenf *= enf;
               yenf *= enf;
               trg2 = create(f1,f2,0,xenf,yenf,0,2);
               trg3 = create(f1,f2,0,- xenf,- yenf,0,2);
               trg2.wtfst = true;
               trg3.wtfst = true;
               trg2.bh = false;
               trg3.bh = false;
               trg3.dy = trg.dy;
               trg2.dy = trg.dy;
               trg3.dm = 1.2;
               trg2.dm = 1.2;
               trg3.d._xscale = trg2.d._xscale = trg.d._xscale;
               trg3.d._yscale = trg2.d._yscale = trg.d._yscale;
               trg3.dmg = trg2.dmg = trg.dmg;
               var _loc1_ = 0;
               while(_loc1_ < ballz)
               {
                  if(trg.hh[_loc1_])
                  {
                     trg2.hh[_loc1_] = true;
                     trg3.hh[_loc1_] = true;
                  }
                  else
                  {
                     trg2.hh[_loc1_] = false;
                     trg3.hh[_loc1_] = false;
                  }
                  _loc1_ = _loc1_ + 1;
               }
               trg3.sot = trg2;
               if(ups[132])
               {
                  trg3.gro = trg2.gro = trg.gro;
               }
            }
         }
      }
   }
   else if(trg.s == 2 && !trg.dones)
   {
      trg.xbb = trg.xbew;
      trg.ybb = trg.ybew;
      trg.xpp = trg.xp;
      trg.ypp = trg.yp;
   }
   if(trg.s == 25 && trg.alter == 2 && !trg.wtfst && trg.dones)
   {
      trg.wtfst = true;
      if(trg.eternal)
      {
         f1 = 20;
      }
      else
      {
         f1 = 6;
      }
      cirf(trg.xp,trg.yp,8,f1);
   }
   if(trg.s == 55 && trg.eternal && trg.dones && !trg.dobol)
   {
      trg.dobol = true;
      quadf(trg.xp,trg.yp,8,true);
   }
   if((trg.s == 16 || trg.s == 22 || trg.s == 67) && trg.dones && !trg.wtfst)
   {
      if(trg.s == 22 && trg.specoz == 23)
      {
         boil(false,2);
      }
      trg.wtfst = true;
      if(trg.alter == 3)
      {
         trg = bombfail(trg.xp,trg.yp);
         trg.mug = true;
      }
      else if(trg.alter == 2)
      {
         quadf(trg.xp,trg.yp,8,2);
         trg2 = spaw(trg.xp,trg.yp,0,5.04);
         trg2.col = 3;
      }
      else if(trg.hp > -20)
      {
         flya();
      }
      if(trg.s == 67 && altboss && trg.specoz && trg.specoz != 23)
      {
         if(trg.specoz == 16)
         {
            f1 = 25;
         }
         else if(trg.specoz)
         {
            f1 = 25.1;
         }
         spaw(trg.xp,trg.yp,20,f1);
         spaw(trg.xp,trg.yp,20,f1);
      }
   }
   if(trg.s == 19 && altboss && trg.specoz && !trg.wtfst && trg.dones)
   {
      trg.wtfst = true;
      if(trg.specoz == 23)
      {
         flya();
      }
      else
      {
         if(trg.specoz == 3)
         {
            f1 = 23;
         }
         else if(trg.specoz == 16)
         {
            f1 = 25;
         }
         else
         {
            f1 = 5.02;
         }
         spaw(trg.xp,trg.yp,0,f1);
      }
   }
   if(trg.s == 100 && altboss && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      boil();
      boil();
      boil();
   }
   if(trg.s == 101 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      trg.done = true;
      momdown = 100;
   }
   if(trg.s == 91 && trg.dones && !trg.wtfst)
   {
      trg.wtfst = true;
      if(trg.eternal)
      {
         f1 = crand(f1);
         f2 = crand();
         f3 = 0.3;
         trg2 = create(trg.xp + f1,trg.yp + f2,0,f1 * f3,f2 * f3,0,91);
         trg3 = create(trg.xp - f1,trg.yp - f2,0,(- f1) * f3,(- f2) * f3,0,91);
         f1 = crand(f1);
         f2 = crand();
         f3 = 0.3;
         trg4 = create(trg.xp - f1,trg.yp - f2,0,(- f1) * f3,(- f2) * f3,0,91);
         trg2.fra = -100;
         trg3.fra = -100;
         trg4.fra = -100;
         trg2.specoz = trg3.specoz = trg4.specoz = 23;
         speco(trg2);
         speco(trg3);
         speco(trg4);
      }
      else
      {
         trg2 = spaw(trg.xp,trg.yp,0,25);
      }
   }
   if(trg.frezz > 0)
   {
      trg.frezz--;
      trg.free = true;
   }
   else if(trg.frezz < 1)
   {
      trg.free = false;
   }
   if(trg.poiss > 0)
   {
      trg.poiss--;
      if(trg.poiss % 20 == 1)
      {
         if(trg.s != 28 || altboss != 2)
         {
            hurt(trg,trg.poisd);
         }
      }
   }
}
function alive()
{
   if(fra - trg.fra < 10 && !trg.dones && trg.s != 84 && trg.s != 101)
   {
      trg.d.gotoAndStop(4);
   }
   if(firecheck(trg))
   {
      if(fra - trg.lastfir >= 10)
      {
         trg.lastfir = fra;
         hurt(trg,8);
      }
   }
   if(trg.s != 42 && trg.s != 44 && !trg.dones && trg.s != 33 && trg.s != 37 && !trg.weap && !trg.goner && trg.s != 96 && !trg.efly && ((_root.lev == _root.chamb || trg.s != 18) && trg.s != 85 || justnow < 10))
   {
      shutdoor++;
   }
   if(trg.d._currentframe == 4 && !trg.apf && !trg.dones)
   {
      trg.xbew *= 0.45;
      trg.ybew *= 0.45;
      trgnextd();
      if(trg.s == 10)
      {
         if(trg.gonuts)
         {
            trg.d.d.h.gotoAndStop(2);
         }
      }
      if(trg.s == 30)
      {
         f1 = trg.hp / hps[trg.s];
         trg.d.d.h.d.gotoAndStop(Math.max(1,14 - Math.round(f1 * 13)));
      }
      if(trg.s == 11)
      {
         if(trg.specoz == 23 || trg.eternal)
         {
            trg.bnuts = true;
         }
         if(!trg.bnuts)
         {
            trg.d.bb._visible = false;
            trg.d.d.bb._visible = false;
         }
      }
   }
   if(trg.s == 30)
   {
      trg.xp = trg.xpp;
      trg.yp = trg.ypp;
   }
   if(fra < 5)
   {
      if(trg.s > 9)
      {
         speco(trg);
      }
   }
   if((trg.d._currentframe != 4 || trg.apf) && !trg.dones)
   {
      if(freez > 0 || trg.frezz > 0 || trg.s < 4 && sloww)
      {
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trg.free = true;
      }
      else if(trg.flyai)
      {
         switch(trg.s)
         {
            case 14:
               bord();
               if(trgnextd(trg.d.hx.d))
               {
                  trg.d.gotoAndStop(1);
               }
               if(!ups[9])
               {
                  firemode(200,4);
               }
               if(trg.fire > 0)
               {
                  trg.xbew *= 0.8;
                  trg.ybew *= 0.8;
                  trg.xbb *= 0.7;
                  trg.ybb *= 0.7;
               }
            case 80:
            case 18:
               if(trg.duke)
               {
                  dukes++;
                  if(duke.dones || duke.send)
                  {
                     trg.duke = false;
                     if(enfcheck(trg.xp,trg.yp,duke.xp,duke.yp,260))
                     {
                        f1 = 18 / enf;
                        trg.xbew += xenf * f1;
                        trg.ybew += yenf * f1;
                     }
                  }
                  else if(fra % 3 == 1)
                  {
                     if(enfcheck(trg.xp,trg.yp,duke.xp,duke.yp,260))
                     {
                        f3 = duked;
                        f1 = absmax(enf - f3,5) / enf * 0.5;
                        f2 = 0.2 / (2 + Math.abs(f3 - enf));
                        trg.xbew -= xenf * f1;
                        trg.ybew -= yenf * f1;
                        trg.xbew += yenf * f2;
                        trg.ybew -= xenf * f2;
                        trg.xbew += duke.xbew * 0.4;
                        trg.ybew += duke.ybew * 0.4;
                     }
                  }
               }
            case 13:
            case 61:
               if(trg.eternal && trg.s == 61)
               {
                  if(fra % 20 == 0)
                  {
                     if(trg.alter == 2)
                     {
                        f1 = 2;
                     }
                     else
                     {
                        f1 = 0;
                     }
                     quadf(trg.xp,trg.yp,8,f1);
                  }
               }
               trg.outway = fra2;
               if(fra % 3 == 0)
               {
                  if(ups[9] && trg.s == 18 && !trg.duke)
                  {
                     trg.s = 13;
                     attach(trg,13);
                     trg.ggh = true;
                  }
                  if(ups[9] && trg.s == 80)
                  {
                     trg.s = 13;
                  }
                  if(!trg.duke)
                  {
                     if(trg.s == 18 || trg.s == 61 || ups[9] || trg.s == 80)
                     {
                        trg.goshit = 1;
                     }
                     else
                     {
                        f1 = trg.xp + crand(Math.random() * Math.random() * 240);
                        f2 = trg.yp + crand();
                        f3 = ingrid(f1,f2);
                        v1 = levzz(f3);
                        if(v1 > 1 && v1 < 1.8)
                        {
                           trg.goshit = f3;
                        }
                     }
                  }
               }
               if(trg.goshit > 0 && fra2)
               {
                  outgrid(trg.goshit);
                  v1 = 30;
                  if(trg.s == 18 || trg.s == 61 || trg.s == 80 || ups[9] || trg.s == 14 && trg.eternal)
                  {
                     xenf = player.xp;
                     yenf = player.yp;
                     v1 = 25;
                  }
                  if(trg.s == 61 || trg.d._xscale > 110)
                  {
                     v1 = 15;
                  }
                  xenf = trg.xp - xenf;
                  yenf = (trg.yp - yenf) / 2;
                  enf = enfget(xenf,yenf);
                  if(enf > v1)
                  {
                     v1 = Math.min(0.6,(enf - v1) * 0.04) * 2;
                  }
                  else
                  {
                     if(random(1000) == 0)
                     {
                        if(killshit(trg.goshit))
                        {
                           trg.s = 14;
                           trg.alter = 1;
                           if(random(3) == 0)
                           {
                              trg.alter = 2;
                           }
                           attach(trg,14);
                        }
                     }
                     v1 = 0;
                  }
                  enf = v1 / enf;
                  if(trg.s != 18 && trg.s != 61 && trg.s != 80)
                  {
                     trg.xbb *= 0.7;
                     trg.ybb *= 0.7;
                  }
                  if(trg.die)
                  {
                     trg.xbew *= 0.9;
                     trg.ybew *= 0.9;
                  }
                  trg.xbew -= xenf * enf;
                  trg.ybew -= yenf * enf;
               }
               if(trg.s == 18)
               {
                  f0 = 0.3;
               }
               else
               {
                  f0 = 0.17;
               }
               if(fra % 4 == 1)
               {
                  trg.xbb += crand(f0 * 2);
                  trg.ybb += crand();
                  trg.xbb *= 0.8;
                  trg.ybb *= 0.8;
                  f1 = levzz(ingrid(trg.xp,trg.yp));
                  f1 = f1 >= 1 && f1 != 3;
                  f2 = levzz(ingrid(trg.xp + trg.xbb * 16,trg.yp + trg.ybb * 16));
                  f2 = f2 >= 1 && f2 != 3;
                  if((f1 || f2) && !(f1 && f2))
                  {
                     trg.xbb *= 0.5;
                     trg.ybb *= 0.5;
                  }
                  else if(f1 && !f2)
                  {
                     trg.xbb *= 1.3;
                     trg.ybb *= 1.3;
                  }
               }
               trg.ph = _loc0_ = fra % 3 == 2;
               if(_loc0_)
               {
                  if(!trg.duke)
                  {
                     v1 = 0.06;
                     if(trg.yp < 210)
                     {
                        trg.ybb += v1;
                     }
                     if(trg.yp > 420)
                     {
                        trg.ybb -= v1;
                     }
                     if(trg.xp > 540)
                     {
                        trg.xbb -= v1;
                     }
                     if(trg.xp < 80)
                     {
                        trg.xbb += v1;
                     }
                  }
                  trg.xbew += trg.xbb * 2;
                  trg.ybew += trg.ybb * 2;
                  trg.xbew *= 0.6;
                  trg.ybew *= 0.6;
               }
         }
      }
      else
      {
         smarts();
      }
   }
   if(trg.s == 30)
   {
      if(trg.d._currentframe == 4)
      {
         f1 = trg.hp / hps[trg.s];
         trg.d.d.hx.d.gotoAndStop(Math.max(1,14 - Math.round(f1 * 13)));
      }
   }
}
function aicol()
{
   if(trg.d.d.d._currentframe == 25 && trg.d.d._currentframe == 3 && fra > 35)
   {
      switch(trg.d._currentframe)
      {
         case 1:
            _root.soundy("Meat_Feet_slow0.wav");
            break;
         case 2:
            if(trg.col == 3)
            {
               _root.soundy("dimedrop.wav");
            }
            else if(trg.col == 1)
            {
               _root.soundy("pennydrop.mp");
            }
            else
            {
               _root.soundy("nickeldrop.mp");
            }
            break;
         case 3:
            _root.soundy("Key_drop0.wav");
            break;
         case 7:
            if(trg.col < 7)
            {
               _root.soundy("Fetus_Jump_" + random(2) + ".wav");
            }
            else
            {
               _root.soundy("scamper" + random(2) + ".wav");
            }
      }
   }
   if(fra % 30 == 0)
   {
      if(trg.d._currentframe == 8)
      {
         for(a in ball)
         {
            trg2 = ball[a];
            if(trg != trg2 && trg2.s == 5 && trg2.d._currentframe < 8)
            {
               if(enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,40))
               {
                  if(enfget(trg2.xbew,trg2.ybew) < 0.2)
                  {
                     if(enf == 0)
                     {
                        xenf = crand(1);
                        yenf = crand(1);
                        enf = 1;
                     }
                     enf = 2 / enf;
                     trg2.xbew -= xenf * enf;
                     trg2.ybew -= yenf * enf;
                  }
               }
            }
         }
      }
   }
   if(trg.col == 10 && trg.d._currentframe == 8)
   {
      trg.xbew = 0;
      trg.ybew = 0;
   }
   if(trg.d._currentframe == 15)
   {
      if(ups[64] && (trg.d.d._currentframe < 5 || trg.d.d._currentframe == 12 || trg.d.d._currentframe == 13))
      {
         f1 = trg.d.d.d._currentframe;
         trg.d.d.gotoAndStop(trg.d.d._currentframe + 4);
         trg.d.d.d.gotoAndStop(f1);
      }
   }
   if(trg.spin)
   {
      if(trg.d.d._currentframe == 2 && trg.d.d.d._currentframe == 17)
      {
         _root.soundy("slot touched.wav");
      }
      if(trg.d.d._currentframe == 42 && trg.d.d.d._currentframe == 35)
      {
         _root.soundy("shellgame" + random(2) + ".wav");
      }
      if(trg.d.d._currentframe == 42 && trg.d.d.d._currentframe == 35)
      {
         _root.soundy("shellgame" + random(2) + ".wav");
      }
      if(trg.d.d._currentframe >= 42 && trg.d.d.d._currentframe == 65)
      {
         _root.soundy("shell game.wav");
      }
      if(trg.d.d._currentframe == 40 && trg.d.d.d._currentframe == 20)
      {
         _root.soundy("bum shoot off.wav");
      }
      f1 = trgnextd(trg.d.d.d,true);
      if(trg.d.d._currentframe == 42)
      {
         trg.d.d.d.it.gotoAndStop(trg.itt + 1);
      }
      if(f1 == 43 || f1 == 44 || f1 == 45)
      {
         trg.spin = false;
      }
      else if(f1 == 42)
      {
         lastspin = fra + 50;
         trg.wtf = false;
      }
      else if(f1 == 37)
      {
         if(trg.col == 31)
         {
            if(random(4 - ups[46]) == 0)
            {
               trg.d.d.gotoAndStop(38);
            }
            else
            {
               trg.d.d.gotoAndStop(36);
               trg.spin = false;
            }
            trg.wtf = false;
         }
         else
         {
            if(trg.col++ > random(2) + random(4) + random(4))
            {
               if(ups[46])
               {
                  trg.col = trg.col + 1;
               }
               trg.col = 2 + random(2);
               trg.d.d.gotoAndStop(38);
            }
            else
            {
               trg.d.d.gotoAndStop(36);
               trg.spin = false;
            }
            trg.col = Math.min(9,trg.col);
            trg.wtf = false;
         }
      }
      else if(f1 == 2)
      {
         if(random(50) == 0 && chestopen == undefined)
         {
            chestopen = trg;
            trg.d.d.gotoAndStop(30);
            trg.spin = false;
            trg.busted = true;
            _root.soundy("boss1_explosions" + random(3) + ".wav",80);
         }
         else
         {
            trg.d.d.gotoAndStop(slotf());
            trg.wtf = false;
         }
      }
      else if(f1 > 2 && (trg.col == 41 || trg.col <= 1))
      {
         trg.spin = false;
      }
      if(trg.d.d.d._currentframe > 15 && trg.d.d._currentframe > 2 && !trg.wtf)
      {
         if(trg.col != 1 || trg.d.d.d._currentframe > 36)
         {
            lastspin = fra + 12;
            trg.wtf = true;
            f1 = trg.d.d._currentframe;
            f2 = 0;
            f12 = 1;
            if(trg.col == 41 && f1 > 2 && f1 < 24)
            {
               f1 = 0.65 - ups[46];
               if(Math.random() < f1)
               {
                  f1 = ["Look to la Luna","Don\'t Leave The House Today","We will all die one day","You are throwing your life away","Go outside!","Give Up!","You will die alone","Ask again later","WAKE UP","you are worshiping a sun god","Stay asleep","Marry and Reproduce","Question authority","think for yourself","Steven lives","Bring him the photo"];
                  st11(f1[random(f1.length)]);
               }
               else if(random(20) == 0)
               {
                  chestopen = trg;
                  trg.d.d.gotoAndStop(30);
                  trg.spin = false;
                  trg.busted = true;
                  _root.soundy("boss1_explosions" + random(3) + ".wav",80);
               }
               else if(random(30) == 0)
               {
                  f2 = 5.1;
               }
               else if(random(3) == 0)
               {
                  f2 = 5.3;
               }
               else if(random(3) == 0)
               {
                  f2 = 5.010000003;
               }
               else
               {
                  f2 = 5.35;
               }
            }
            else
            {
               sloty(f1);
               switch(f1)
               {
                  case 43:
                  case 44:
                  case 45:
                     if(random(3) == 0 || random(3) == 0 && ups[46])
                     {
                        f2 = 5.01 + trg.itt * 0.01;
                        if(f2 == 5.02)
                        {
                           f12 = 2 + random(2);
                        }
                        else
                        {
                           f12 = Math.max(random(3),2);
                        }
                        if(trg.itt == 5)
                        {
                           f2 = 5.1009;
                        }
                     }
                     else
                     {
                        f2 = 18;
                        _root.soundy("boss2intro_errorbuzz.wav");
                     }
                     break;
                  case 42:
                     break;
                  case 38:
                     if(trg == flox && trg.minb != 3)
                     {
                        flox = undefined;
                     }
                     trg.spin = false;
                     if(trg.col == 31)
                     {
                        if(random(2) == 0)
                        {
                           if(random(2) == 0)
                           {
                              f2 = 5.07;
                           }
                           else
                           {
                              f2 = 5.3;
                           }
                        }
                        else if(random(4) == 0)
                        {
                           f2 = 5.35;
                        }
                        else
                        {
                           f2 = 5.1;
                        }
                     }
                     else
                     {
                        f2 = 5.1022 + random(5) * 0.0001;
                        if(random(2) == 0)
                        {
                           if(random(3) == 0)
                           {
                              f2 = 5;
                           }
                           else
                           {
                              f2 = 5.03 + random(2) * 0.01;
                           }
                        }
                        else if(random(2) == 0)
                        {
                           if(random(2) == 0)
                           {
                              f2 = 5.1022 + random(5) * 0.0001;
                           }
                           else
                           {
                              f2 = 5.3;
                           }
                        }
                        else
                        {
                           f2 = 5.1;
                        }
                     }
                     trg.d.d.gotoAndStop(36);
                     break;
                  case 33:
                     if(random(15) == 0)
                     {
                        f2 = 5.1;
                        trg.done = true;
                        _root.soundy("boss1_explosions" + random(3) + ".wav",80);
                     }
                     else
                     {
                        f2 = 5.02;
                        f12 = Math.max(1,random(3));
                        if(ups[75])
                        {
                           f12++;
                        }
                        _root.soundy("bloodbank spawn" + random(2) + ".wav",90);
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
            if(f2 > 0)
            {
               if(f1 < 33)
               {
                  emosound = false;
               }
               if(f2 < 7 && f1 != 33)
               {
                  emo();
               }
               emosound = true;
               if(f1 < 33)
               {
                  _root.soundy("slotspawn" + random(3) + ".wav");
               }
               if(f2 >= 5.1 && trg.col > 1 && trg.col != 41 && f2 < 5.3)
               {
                  _this.bummer = true;
                  if(trg.col == 31)
                  {
                     _this.bummer = 2;
                  }
                  trg2 = spaw(trg.xp,trg.yp + 80,0,f2);
                  if(trg.col == 41)
                  {
                     trg.empty = true;
                     trg.d.d.gotoAndStop(30);
                     trg2.it = 158;
                  }
                  else
                  {
                     trg.empty = true;
                     trg.dones = true;
                     trg.d.d.gotoAndStop(40);
                  }
               }
               else
               {
                  i = 0;
                  while(i < f12)
                  {
                     f13 = 0;
                     while(f13++ < 10)
                     {
                        if(f1 >= 43 && f1 <= 45)
                        {
                           yenf = 4 + crand(2);
                           xenf = (f1 - 44) * 4 + crand(2);
                           f14 = xenf * 5;
                           f15 = 5;
                        }
                        else
                        {
                           xenf = crand(5);
                           yenf = crand(5) * 0.2 + 3;
                           f14 = 0;
                           f15 = 0;
                        }
                        if(linecheckx(trg.xp + f14,trg.yp + f15,trg.xp + xenf * 7,trg.yp + yenf * 7))
                        {
                           f13 = 1000;
                        }
                     }
                     var trg2 = create(trg.xp + f14,trg.yp,0,xenf,yenf,0,f2);
                     trg2.alt = 2;
                     if(f2 == 18)
                     {
                        trg2.fra = -10;
                        trg2.xp += xenf * 4;
                     }
                     if(f2 == 5.1)
                     {
                        if(trg.col == 41)
                        {
                           trg2.d.col = 41;
                           trg2.it = 158;
                           trg.done = true;
                        }
                        else if(trg.col == 1)
                        {
                           trg2.it = 119;
                           if(random(2) == 0 && !ups[135])
                           {
                              trg2.it = 135;
                           }
                           trg2.alt = 3;
                        }
                        else
                        {
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
   if(trg.alt)
   {
      if(trg.alt > 4)
      {
         trg.d.d.al.gotoAndStop(trg.alt);
      }
      else if(trg.alt == 3)
      {
         trg.d.d.al.gotoAndStop(4);
      }
      else if(trg.alt == 2)
      {
         trg.d.d.al.gotoAndStop(3);
      }
      else
      {
         trg.d.d.al.gotoAndStop(2);
      }
   }
   if(fra - trg.fra > 25)
   {
      trg.bh = true;
   }
   if(trg.it > 0)
   {
      f1 = trg.it / 100;
   }
   else
   {
      f1 = 0;
   }
   if(trg.d._currentframe == 4)
   {
      if(trg.fail == undefined)
      {
         trg.fail = 0;
      }
      if((trg.col == 3 || trg.col == 5) && trg.fail++ > 60)
      {
         trg.done = true;
         trg2 = bombfail(trg.xp,trg.yp);
         trg2.col = trg.col;
      }
   }
   if(trg.d._currentframe == 9)
   {
      trg.nod = true;
      trg.swapDepths(300 + e);
      if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,50) && !trg.open)
      {
         trg.d.d.gotoAndStop(1);
      }
      else
      {
         trg.open = true;
         if(trg.d.d._currentframe != 23)
         {
            trg.d.d.nextFrame();
         }
      }
   }
   else if(trg.d._currentframe == 10)
   {
      trg.d.d.nextFrame();
      trg.d.d.d.d.gotoAndStop(trg.it);
      if(trg.empty)
      {
         trg.d.d.d.gotoAndStop(21);
      }
   }
   else if(trg.d._currentframe == 15)
   {
      f1 = trg.d.d._currentframe / 10 + f1 / 100;
      trg.d.d.d.gotoAndStop(trg.it);
   }
   if(trg.col)
   {
      f1 += trg.col / 10000000;
   }
   f1 = trg.d._currentframe + f1;
   if(!trg.empty || trg.spin)
   {
      _root.levit[_root.lev].push([f1,trg.xp,trg.yp]);
   }
   if(trg.d._currentframe >= 5 && trg.d._curretnframe != 7)
   {
      trg.xbew *= 0.8;
      trg.ybew *= 0.8;
   }
   if(trg.d._currentframe >= 8 && !trg.busted && (trg.d._currentframe != 10 || !trg.alt))
   {
      if(trg.d._currentframe == 10)
      {
         if(enfcheck(trg.xp,trg.yp,trg.xpp,trg.ypp,30))
         {
            trg.xp = trg.xp * 0.3 + trg.xpp * 0.7;
            trg.yp = trg.yp * 0.3 + trg.ypp * 0.7;
            if(levzz(ingrid(trg.xp,trg.yp)) < 1)
            {
               trg.xpp = trg.xp;
               trg.ypp = trg.yp;
            }
         }
      }
      trg.xp = trg.xpp;
      trg.yp = trg.ypp;
   }
   trg.xbew *= 0.965;
   trg.ybew *= 0.965;
   if(!trg.empty)
   {
      f1 = trg.d._currentframe;
      if(f1 == 7)
      {
         if(trg.col < 7)
         {
            f1 = 8;
         }
      }
      else if(f1 == 8)
      {
         f1 = 9;
      }
      else if(f1 == 9)
      {
         f1 = 0;
      }
      f2 = _root.levcol[_root.lev];
      if(f1 == 1 && f2 < 5)
      {
         f2 = 0;
      }
      if(f2 == 1 && f1 < 5)
      {
         f1 = 0;
      }
      _root.levcol[_root.lev] = Math.max(f2,f1);
   }
}
function aistuff()
{
   for(e in ball)
   {
      trg = ball[e];
      deathscripts();
      deathscripts2();
      if(trg.uncol < fra)
      {
         speco(trg);
      }
      if(trg.s <= 9)
      {
         if(!trg.dones)
         {
            switch(trg.s)
            {
               case 3:
                  friends();
                  break;
               case 2:
                  if(ups[48] && !trg.ba)
                  {
                     if(fra % 30 == 0)
                     {
                        trg.hh = [];
                     }
                  }
                  if(trg.fra + 2 < fra)
                  {
                     trg.bh = true;
                  }
                  if(trg.bombo)
                  {
                     trg.bh = trg.dy > -68;
                     trg.ggh = trg.dy <= -50;
                     if(trg.yp < 150 || trg.yp > 420 || trg.xp > 580 || trg.xp < 60)
                     {
                        trg.ggh = false;
                        trg.death = true;
                     }
                     else
                     {
                        trg.death = false;
                     }
                  }
                  if(ups[5] && !trg.ba)
                  {
                     if(fra - trg.fra > _root.firrr / 3 - 4)
                     {
                        trg2 = player;
                        enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,500);
                        enf = 0.6 / enf;
                        trg.xbew -= xenf * enf;
                        trg.ybew -= yenf * enf;
                        trg.xbew *= 0.98;
                        trg.ybew *= 0.98;
                        if(!ups[149])
                        {
                           trg.fd = -0.045;
                        }
                     }
                  }
                  if(ups[132] && !trg.ba && !ups[114])
                  {
                     if(trg.gro++ < 150)
                     {
                        trg.dmg += 0.14;
                        trg.d._xscale += 1;
                        trg.d._yscale += 1;
                     }
                  }
                  if(ups[3] && !trg.ba || trg.ba == 4 || trg.ba == 11)
                  {
                     if(trg.trg2 == undefined || trg.trg2.dones || trg.trg2.xp <= 0 || !trg.trg2._visible)
                     {
                        if((fra + trg.e) % 6 == 0)
                        {
                           f1 = trg.xp + trg.xbew * 4;
                           f2 = trg.yp + trg.ybew * 4;
                           siz = 150;
                           for(i in ball)
                           {
                              trg2 = ball[i];
                              if(trg2.s > 9 && !trg2.dones && !trg.hh[trg2.e])
                              {
                                 if(enf = enfcheck(f1,f2,trg2.xp,trg2.yp,siz))
                                 {
                                    f3 = xenf * trg.xbew + yenf * trg.ybew;
                                    if(trg2.pos >= 3 && trg2.bh && f3 < 0)
                                    {
                                       siz = enf;
                                       trg.trg2 = trg2;
                                    }
                                 }
                              }
                           }
                           if(trg.trg2 != undefined)
                           {
                              trg2 = trg.trg2;
                              if(linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                              {
                                 trg.gonuts = true;
                              }
                              else
                              {
                                 trg.trg2 = undefined;
                              }
                           }
                        }
                     }
                     else if(trg.trg2 != undefined)
                     {
                        trg2 = trg.trg2;
                        if((fra + trg.e) % 5 == 0)
                        {
                           if(linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                           {
                              trg.gonuts = true;
                           }
                        }
                        if(trg2.dones || trg.hh[trg.trg2.e])
                        {
                           trg.trg2 = undefined;
                           trg.gonuts = false;
                        }
                        else if(trg.gonuts && random(2) == 0)
                        {
                           f1 = trg2.xp;
                           f2 = trg2.yp;
                           if(trg.xbew > -100)
                           {
                              f1 += trg.xbew * 3;
                           }
                           if(trg.ybew > -100)
                           {
                              f2 += trg.ybew * 3;
                           }
                           enf = enfcheck(trg.xp,trg.yp,f1,f2,200);
                           if(enf > 0)
                           {
                              trg.dm *= 0.75;
                              enf = 3 / enf;
                              trg.xbew -= xenf * enf;
                              trg.ybew -= yenf * enf;
                              if(ups[182] && !trg.ba)
                              {
                                 trg.xbew *= 0.65;
                                 trg.ybew *= 0.65;
                              }
                              else
                              {
                                 trg.xbew *= 0.8;
                                 trg.ybew *= 0.8;
                              }
                           }
                        }
                     }
                  }
                  if(ups[59] && trg.trg2 == undefined && !trg.ba)
                  {
                     if(trg.sot)
                     {
                        trg.xppx = trg.sot.xppx;
                        trg.yppx = trg.sot.yppx;
                     }
                     else if(fra5)
                     {
                        f1 = enfget(trg.xbew,trg.ybew);
                        if(f1)
                        {
                           f1 = Math.sin(fra / 3 + trg.fra * 3) * 2.5 / f1;
                           trg.xppx = trg.ybew * f1;
                           trg.yppx = (- trg.xbew) * f1;
                        }
                     }
                     if(trg.xppx)
                     {
                        trg.xp += trg.xppx;
                        trg.yp += trg.yppx;
                     }
                  }
               case 9:
                  if(trg.s == 9 && (!trg.bomb || blackout == 2) && trg.sss != 68 && !trg.hom && trg.sss != 100 && (trg.sss != 101 || !altboss))
                  {
                     var _loc2_ = new flash.geom.Transform(trg);
                     _loc2_.colorTransform = bull;
                     if(isaaaac)
                     {
                        trg.colo = bull;
                        trg.spl = 10;
                     }
                  }
                  if(random(16) == 0 || trg.spll)
                  {
                     splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.3 + 0.1);
                  }
                  if(trg.hom)
                  {
                     f1 = 100;
                     if(trg.sss == 57 || trg.sss == 32 || trg.sss == 50 || trg.hom == 2 || trg.hom == 3)
                     {
                        f1 = 1000;
                     }
                     enf = enfcheck(trg.xp + trg.xbew * 5,trg.yp + trg.ybew * 5,player.xp,player.yp,f1);
                     if(enf > 0)
                     {
                        enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000 + f1);
                        enf += enf * enf * 0.001;
                        enf = 1.4 / enf;
                        if(trg.sss == 32)
                        {
                           enf *= 1.2;
                        }
                        if(trg.sss == 50)
                        {
                           enf *= 0.75;
                        }
                        if(trg.hom == 3)
                        {
                           enf *= 0.6;
                        }
                        trg.xbew -= xenf * enf;
                        trg.ybew -= yenf * enf;
                        if(enf > 300)
                        {
                           trg.xbew *= 0.97;
                           trg.ybew *= 0.97;
                        }
                        else
                        {
                           trg.xbew *= 0.92;
                           trg.ybew *= 0.92;
                        }
                     }
                  }
               case 8:
                  if(trg.s == 8)
                  {
                     if(random(3) == 0)
                     {
                        splater(trg.xp,trg.yp,trg.spl + 1 + random(10),(Math.random() * 0.3 + 0.1) * trg.d._xscale / 100);
                     }
                  }
               case 7:
                  if(!trg.knife)
                  {
                     if(trg.longshot == 2)
                     {
                        trg.dm *= 0.95;
                        trg.dm += 0.05;
                        if(trg.fd)
                        {
                           trg.dm += trg.fd * 0.5;
                        }
                        trg.dy += trg.dm * 0.5;
                     }
                     else if(trg.longshot)
                     {
                        trg.dm *= 0.975;
                        trg.dm += 0.025;
                        if(trg.fd)
                        {
                           trg.dm += trg.fd * 0.25;
                        }
                        trg.dy += trg.dm * 0.25;
                     }
                     else
                     {
                        trg.dm *= 0.9;
                        trg.dm += 0.1;
                        if(trg.fd)
                        {
                           trg.dm += trg.fd;
                        }
                        trg.dy += trg.dm;
                     }
                     trg.d._y = trg.dy;
                     if(trg.dy > -5)
                     {
                        if(trg.s == 2)
                        {
                           trg.wtfst = true;
                        }
                        if((trg.s == 8 || trg.s == 7) && !mhit(trg.xp,trg.yp))
                        {
                           maxx = new flash.geom.Matrix();
                           maxx.translate(trg.xp,trg.yp);
                           maxx.scale(hdx,hdx);
                           if(trg.colo)
                           {
                              gut.draw(trg,maxx,trg.colo);
                           }
                           else if(trg.s == 8)
                           {
                              gut.draw(trg,maxx,bloc);
                           }
                           else
                           {
                              gut.draw(trg,maxx);
                           }
                           trg._visible = false;
                        }
                        if(random(2) == 0)
                        {
                           _root.soundy("splatter0" + random(3) + ".wav");
                        }
                        trg.d.gotoAndStop("groundhit");
                        trg.dones = true;
                     }
                  }
                  if(trg.s == 9)
                  {
                     if(trg.nog-- <= 0)
                     {
                        if(trg.dy < -50)
                        {
                           trg.bh = false;
                           trg.ggh = true;
                        }
                        else
                        {
                           trg.ggh = false;
                           trg.bh = true;
                        }
                     }
                  }
                  break;
               case 5:
                  aicol();
                  break;
               case 4:
                  if(trg.bolt)
                  {
                     if(trgnextd(trg.d,true))
                     {
                        trg.done = true;
                     }
                     if(trg.d._currentframe > 12 && trg.d._currentframe < 35)
                     {
                        if(fra % 3 == trg.e % 3)
                        {
                           for(a in ball)
                           {
                              trg2 = ball[a];
                              if(trg2.s == 1 || trg2.s > 10)
                              {
                                 if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,30))
                                 {
                                    if(trg2 == player)
                                    {
                                       if(!trg.friend)
                                       {
                                          playerhurt(1,65);
                                       }
                                    }
                                    else if(trg2.s != 102)
                                    {
                                       if(trg.friend)
                                       {
                                          hurt(trg2,20);
                                       }
                                       else
                                       {
                                          hurt(trg2,2);
                                       }
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
                  else if(trg.flir)
                  {
                     if(trgnextd(trg.d,false))
                     {
                        trg.done = true;
                     }
                     else
                     {
                        nofun = true;
                        for(a in ball)
                        {
                           trg2 = ball[a];
                           if((fra + trg2.e) % 5 == 0 && trg2.s > 8 && trg2.bh)
                           {
                              if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,43))
                              {
                                 hurt(trg2,23);
                                 if(!f3 && trg2.firs + 10 <= fra)
                                 {
                                    trg2.firs = fra;
                                    _root.soundy("Firedeath_hiss.wav",Math.min(100,50 + trg.hp * 5));
                                 }
                              }
                           }
                        }
                     }
                     trg.xbew *= 0.95;
                     trg.ybew *= 0.95;
                  }
                  else
                  {
                     if(trg.dec)
                     {
                        dec = undefined;
                        if(trg.d._currentframe != 7)
                        {
                           trg.dones = true;
                        }
                     }
                     if(_root.it == 97)
                     {
                        if(trg.d._currentframe == 1)
                        {
                           if(trg.d.d._currentframe == 10)
                           {
                              trg.d.d.gotoAndStop(1);
                           }
                        }
                     }
                     if(ups[125] || ups[52] && ups[3])
                     {
                        if(trg.trg2 == undefined || trg.trg2.dones || trg.trg2.xp <= 0)
                        {
                           if(fra % 3 == 0)
                           {
                              f1 = trg.xp + trg.xbew * 5;
                              f2 = trg.yp + trg.ybew * 5;
                              siz = 150;
                              for(i in ball)
                              {
                                 trg2 = ball[i];
                                 if(trg2.s > 9 && !trg2.dones && !trg.hh[trg2.e])
                                 {
                                    if(enf = enfcheck(f1,f2,trg2.xp,trg2.yp,siz))
                                    {
                                       siz = enf;
                                       trg.trg2 = trg2;
                                    }
                                 }
                              }
                              if(trg.trg2 != undefined)
                              {
                                 trg2 = trg.trg2;
                                 if(linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                                 {
                                    trg.gonuts = true;
                                 }
                              }
                           }
                        }
                        else if(trg.trg2 != undefined)
                        {
                           trg2 = trg.trg2;
                           if((fra + trg.e) % 5 == 0)
                           {
                              if(linecheckx(trg.xp,trg.yp,trg2.xp,trg2.yp))
                              {
                                 trg.gonuts = true;
                              }
                           }
                           if(!!trg2.dones || trg.hh[trg.trg2.e])
                           {
                              trg.trg2 = undefined;
                              trg.gonuts = false;
                           }
                           else if(trg.gonuts)
                           {
                              enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,100);
                              if(enf > 0)
                              {
                                 enf = 0.5 / enf;
                                 trg.xbew -= xenf * enf;
                                 trg.ybew -= yenf * enf;
                                 trg.xbew *= 0.95;
                                 trg.ybew *= 0.95;
                              }
                           }
                        }
                     }
                     if(trg.d._currentframe == 1)
                     {
                        trg.d.d.nextFrame();
                     }
                     if(fra - trg.fra > 30)
                     {
                        trg.ph = false;
                     }
                     if(fra - trg.fra > 15)
                     {
                        trg.bh = true;
                     }
                     if(fra - trg.lfra > 3 && !trg.nex)
                     {
                        trg.nex = true;
                        nextbo = true;
                     }
                     if(!trg.empty)
                     {
                        _root.levit[_root.lev].push([-100,trg.xp,trg.yp]);
                     }
                     trg.xbew *= 0.95;
                     trg.ybew *= 0.95;
                     trg.d.d.p.gotoAndStop(trg.col);
                  }
            }
         }
      }
      else
      {
         alive();
      }
   }
}
function actions1()
{
   actions2();
   aistuff();
   while(refl.length > 0)
   {
      trg2 = create(refl.pop(),refl.pop(),0,refl.pop(),refl.pop(),0,9,27);
      trg2.dy = -20;
   }
   refl = [];
   if(rply)
   {
      player = rply;
      rply = undefined;
   }
   tip(1);
   if(helps >= 1)
   {
      mhelps = Math.max(helps,mhelps);
      if(sati.pow == 1 || sati.pow == 2)
      {
         mhelps--;
         help -= 1;
      }
      help /= mhelps;
      _root.hud.bar.bar._xscale = help * 98 + 2;
      _root.hud.bar._visible = true;
      if(mins)
      {
         _root.hud.bar.gotoAndStop(3);
         _root.hud.bar.bar._xscale = 87 * help + 13;
         _root.hud.bar.bar._xscale *= 0.56;
      }
      else
      {
         _root.hud.bar.gotoAndStop(1);
      }
      if(gurdy)
      {
         _root.hud.bar._y = 70;
      }
   }
   else
   {
      _root.hud.bar.gotoAndStop(2);
      _root.hud.bar._visible = false;
   }
}
function green(f11, f12)
{
   trg2 = bossfire(1,!f12,10);
   trg2.bomb = true;
   trg2.d._xscale = trg2.d._yscale = 160;
   if(trg.s != 43)
   {
      trg2.xbew *= 0.55;
      trg2.ybew *= 0.55;
   }
   if(f12)
   {
      f1 = Math.random() + 0.6;
      trg2.xbew *= f1;
      trg2.ybew *= f1;
   }
   trg2.fd -= 0.3;
   trg2.dm *= 0.7;
   trg2.dm -= 13;
   if(trg.s == 87)
   {
      trg2.fd -= 0.3;
      trg2.dm += 10;
   }
   if(trg.s == 64 || trg.s == 43 || trg.s == 82)
   {
      trg2.xp -= trg.d._xscale * 0.2;
      trg2.pois = true;
      trg2.spl = 30;
      if(trg.d._currentframe < 7 || trg.s == 82)
      {
         trg2.dy -= 27;
      }
   }
   if(trg.s == 82 || trg.s == 78 || trg.specoz == 23 && trg.s != 64 && trg.s != 88 && trg.s != 30 && trg.s != 43 && trg.s != 46 && trg.s != 61 && trg.s != 87)
   {
      trg2.pois = 4;
      trg2.spl = 0;
   }
   else if(f11 == 2)
   {
      colorit(trg2,0.2,0.2,0.2,0,0,0);
   }
   else if(!f11)
   {
      colorit(trg2,0.4,2,0.5,0,0,0);
   }
   if(trg.s == 62)
   {
      trg2.dy -= 40;
   }
   if(trg.s == 46 && trg.minb != 3 && trg.eternal)
   {
      f1 = Math.random() * 2 + 0.4;
      trg2.xbew *= f1;
      trg2.ybew *= f1;
   }
   return trg2;
}
function boiler(f1, f2)
{
   if(f1)
   {
      if(!trg.boss && !trg.s == 88 || random(50) == 0)
      {
         if((enfcheck(trg.xp,trg.yp,player.xp,player.yp,230) || random(4) == 0) && (trg.alter != 3 || ashut < 10 && random(ashut) == 0 || trg.eternal))
         {
            trg.d.gotoAndStop(5);
         }
         else
         {
            trg.d.gotoAndStop(2);
         }
      }
      else
      {
         trg.d.d.gotoAndStop(1);
      }
      trg.fire = 0;
   }
   else if(f2)
   {
      if(trg.fire++ == 10)
      {
         if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,250 - Math.random() * 20) && !trg.boss)
         {
            boil(true);
         }
         else
         {
            boil(false);
         }
         if(trg.specoz == 23 && (trg.alter != 3 || _root.chaps > 2))
         {
            boil(trg.alter == 2);
            if(trg.alter != 3)
            {
               boil(trg.alter == 2);
            }
         }
      }
   }
}
function boil(f1, f2)
{
   if((trg.alter == 3 || trg.c2 || trg.col == 31 || trg.s == 67 || trg.s == 73 || trg.s == 28 || trg.s == 64 || trg.s >= 100 || trg.s == 46 || trg.s == 94) && trg.s != 15 && f2 != 1 && f2 != 0 || f2 == 2)
   {
      if(trg.s == 88 || trg.s == 30)
      {
         _root.soundy("boil hatch.wav");
      }
      if(bigone)
      {
         f8 = 94;
      }
      else
      {
         f8 = 85;
      }
      spispaw = true;
      if(trg.s == 28)
      {
         trg2 = spaw(xenf,yenf,10,f8);
      }
      else if(!f1)
      {
         trg2 = spaw(trg.xp,trg.yp,100,f8);
      }
      else
      {
         trg2 = spaw(player.xp * 0.5 + trg.xp * 0.5,player.yp * 0.5 + trg.yp * 0.5,70,f8);
      }
      spispaw = undefined;
      trg2.xpp = trg2.xp;
      trg2.ypp = trg2.yp;
      trg2.xp = trg.xp;
      trg2.yp = trg.yp;
      xenf = trg2.xpp - trg2.xp;
      yenf = trg2.ypp - trg2.yp;
      f1 = enfget(xenf,yenf);
      f1 = f2 / f1;
      f1 = 0.04;
      trg2.f1 = trg2.xbew = xenf * f1;
      trg2.f2 = trg2.ybew = yenf * f1;
      trg2.fra = 0;
      trg2.d.gotoAndStop(5);
      trg2.apf = false;
      trg2.df = -8;
      trg2.bh = false;
      trg.fire = -100;
      if(trg.specoz == 23 && trg.s == 100)
      {
         trg2.hp -= 3;
         trg.hp -= 5;
      }
      if(trg.specoz == 23 && trg.s == 94)
      {
         trg2.specoz = 23;
         speco(trg2);
      }
   }
   else if((trg.alter == 2 || f2 == 1) && trg.s != 15 && f2 != 0 || f2 == 1)
   {
      trg.fire = -50;
      green(false,f1);
      _root.soundy("heartout.wav",70);
   }
   else
   {
      bossfire(3 + random(2),f1,10);
   }
}
function braz()
{
   for(z in ball)
   {
      trg2 = ball[z];
      if(trg2.s > 10 && trg2 != trg)
      {
         if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,60))
         {
            hurt(trg2,100);
         }
      }
   }
}
function spih()
{
   var _loc1_ = spaw(player.xp,player.yp,50,29.3);
   _loc1_.fra = 0;
   _loc1_.xpp = _loc1_.xp;
   _loc1_.ypp = _loc1_.yp;
   _loc1_.xp = trg.xp;
   _loc1_.yp = trg.yp;
   _loc1_.d.gotoAndStop(2);
   _loc1_.d.d.gotoAndStop(5);
   tgr2.apf = true;
   _loc1_.f1 = 100;
}
function bawssmart2()
{
   switch(trg.s)
   {
      case 94:
      case 85:
         bord();
         f1 = trg.d._currentframe == 5 && trg.s != 94;
         trg.bh = !f1;
         trg.ggh = f1;
         if(f1)
         {
            trg.xbew = trg.f1;
            trg.ybew = trg.f2;
            trg.df += 0.7;
            trg.d.d._y += trg.df;
            if(trg.d.d._y > -13 && trg.xpp != undefined)
            {
               trg.d.gotoAndStop(1);
               trg.xp = trg.xpp;
               trg.yp = trg.ypp;
               trg.xpp = undefined;
            }
         }
         else if(trg.still > fra)
         {
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
            trg.d.gotoAndStop(1);
         }
         else
         {
            randrunc();
         }
         break;
      case 96:
         trg2 = trg.trg2;
         if(trg2 == undefined || trg2.dones)
         {
            trg.s = 18;
            trg.trg2 = undefined;
            trg.mhp = _loc0_ = 20;
            trg.hp = _loc0_;
            trg.flyai = true;
            trg.ybb = _loc0_ = 0;
            trg.xbb = _loc0_;
            trg.imba = false;
            trg.d._yscale = _loc0_ = 118;
            trg.d._xscale = _loc0_;
         }
         else if(trg2.xp > 10)
         {
            if(trg2.s == 90 || trg2.shit || trg2.s == 67)
            {
               f11 = (- fra * 0.02) * 3.141592653589793 + trg.wtf / 2;
               if(trg.wtf % 2 == 0)
               {
                  f11 *= -1;
               }
               trg.xpp = trg2.xp + Math.sin(f11) * 60;
               trg.ypp = trg2.yp + Math.cos(f11) * 50;
            }
            else
            {
               if(trg.wtf % 2 == 0)
               {
                  f11 *= -1;
               }
               f11 = fra * 0.04 * 3.141592653589793 + trg.wtf / 2;
               f1 = 1;
               if(trg2.s == 26 && trg2.eternal)
               {
                  f1 = 1.1;
               }
               else if(trg2.s == 22 && trg2.eternal)
               {
                  f1 = 1.6;
               }
               trg.xpp = trg2.xp + Math.sin(f11) * 25 * f1;
               trg.ypp = trg2.yp + Math.cos(f11) * 20 * f1;
            }
            trg.imba = true;
            trg.xp += trg.xpp;
            trg.yp += trg.ypp;
            trg.xp *= 0.5;
            trg.yp *= 0.5;
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
         }
         break;
      case 74:
      case 75:
      case 76:
         if(trris + 45 + random(100) <= fra && random(100) == 0)
         {
            trris = fra;
            _root.soundy("boss2_bubbles" + random(2) + ".wav",100);
         }
      case 77:
         f1 = trg.s - 74;
         f2 = [5,17,16,15];
         f3 = [1,7,10,13];
         f2 = f2[f1];
         f3 = f3[f1];
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         if(fra - trg.fra < 10)
         {
            trg.d.gotoAndStop(f2);
         }
         if(trg.d._currentframe == f2)
         {
            trg.xbew *= 0.45;
            trg.ybew *= 0.45;
         }
         trgnextd();
         if(trg.d._currentframe == 1)
         {
            trg.d.gotoAndStop(f3);
         }
         if(trg.d._currentframe == 13 && trg.d.d._currentframe == 17)
         {
            if(trg.eternal && Math.abs(trg._xscale) > 120)
            {
               _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",80);
               cirf(trg.xp,trg.yp + 20,8,Math.round(4 + Math.abs(trg._xscale) / 40));
            }
            else if(trriss + 5 + random(20) <= fra)
            {
               trriss = fra;
               _root.soundy("gooattach0" + random(2) + ".wav",40 + random(30));
            }
         }
         if(trg.d._currentframe == 10 && trg.d.d._currentframe == 18)
         {
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",60);
         }
         if((trg.d._currentframe == 2 || trg.d._currentframe == 7 || trg.d._currentframe == 8) && trg.d.d._currentframe == 22)
         {
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",80);
         }
         if(trg.d._currentframe == 3 && trg.d.d._currentframe == 24)
         {
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
         }
         if(trg.d._currentframe == 5 && trg.d.d._currentframe == 22)
         {
            _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",120);
         }
         trg.bh = (trg.d._currentframe != 4 || trg.d.d._currentframe < 11) && (trg.d._currentframe != 5 || trg.d.d._currentframe > 21);
         switch(trg.d._currentframe)
         {
            case 10:
               if(trg.d.d._currentframe == 1)
               {
                  if(random(2) == 0)
                  {
                     trg.d.gotoAndStop(11);
                  }
                  else
                  {
                     trg.xpp = undefined;
                  }
               }
               else
               {
                  randrun();
               }
               if(trg.d.d._currentframe > 19)
               {
                  trg.xbew *= 0.6;
                  trg.ybew *= 0.6;
               }
               break;
            case 11:
               if(trg.d.d._currentframe == 21)
               {
                  quadf(trg.xp,trg.yp,8);
                  _root.soundy("heartout.wav");
               }
               break;
            case 7:
               if(trg.d.d._currentframe == 1)
               {
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,1500);
                  f1 = 0;
                  if(enf < 250)
                  {
                     if(random(2) == 0)
                     {
                        trg.d.gotoAndStop(8);
                        f1 = 0.4;
                     }
                     else
                     {
                        f1 = 1.5;
                     }
                  }
                  else
                  {
                     f1 = 1.5;
                     xenf = crand(10);
                     yenf = crand();
                     enf = 10;
                  }
                  f1 /= enf;
                  trg.xpp = (- xenf) * f1;
                  trg.ypp = (- yenf) * f1;
               }
            case 8:
               if(trg.d.d._currentframe < 23 && trg.d.d._currentframe > 4)
               {
                  if(trg.xpp != undefined)
                  {
                     trg.xbew += trg.xpp;
                     trg.ybew += trg.ypp;
                  }
               }
               else
               {
                  trg.xbew *= 0.9;
                  trg.ybew *= 0.9;
               }
               if(trg.d.d._currentframe == 23 && trg.d._currentframe == 8)
               {
                  quadf(trg.xp,trg.yp,10,random(2) * 2);
               }
               break;
            case 1:
               if(trg.s == 74)
               {
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,1500);
                  f1 = 0;
                  if(enf < 250)
                  {
                     if(random(2) == 0)
                     {
                        trg.d.gotoAndStop(3);
                        f1 = 0.4;
                     }
                     else
                     {
                        trg.d.gotoAndStop(2);
                        f1 = 1.5;
                     }
                  }
                  else
                  {
                     f1 = 3;
                     trg.d.gotoAndStop(4);
                  }
                  f1 /= enf;
                  trg.xpp = (- xenf) * f1;
                  trg.ypp = (- yenf) * f1;
               }
               break;
            case 5:
               if(trg.eternal)
               {
                  if((trg.d.d._currentframe == 26 || trg.d.d._currentframe == 29) && fra > 60)
                  {
                     quadf(trg.xp,trg.yp + 25,10,true);
                  }
               }
            case 3:
               if(trg.d.d._currentframe == 23 && fra > 60)
               {
                  if(trg.d._currentframe == 5)
                  {
                     quadf(trg.xp,trg.yp + 25,10,true);
                  }
                  else
                  {
                     bossfire(8,false);
                     if(trg.eternal)
                     {
                        bossfire(16,false);
                     }
                  }
               }
            case 2:
               if(trg.d.d._currentframe < 23 && trg.d.d._currentframe > 4)
               {
                  if(trg.xpp != undefined)
                  {
                     trg.xbew += trg.xpp;
                     trg.ybew += trg.ypp;
                  }
               }
               else
               {
                  trg.xbew *= 0.9;
                  trg.ybew *= 0.9;
               }
               break;
            case 6:
            case 9:
               if(trg.s == 75 && trg.d.d._currentframe == 19 || trg.s == 74 && trg.d.d._currentframe == 30)
               {
                  if(trg.s == 74)
                  {
                     f1 = 30;
                  }
                  else
                  {
                     f1 = 20;
                  }
                  f1 = crand(f1);
                  f2 = crand();
                  f3 = 0.3;
                  trg2 = create(trg.xp + f1,trg.yp + f2,0,f1 * f3,f2 * f3,0,trg.s + 1);
                  trg3 = create(trg.xp - f1,trg.yp - f2,0,(- f1) * f3,(- f2) * f3,0,trg.s + 1);
                  trg2.fra = -100;
                  trg3.fra = -100;
                  if(trg.eternal)
                  {
                     trg4 = create(trg.xp + f2,trg.yp - f1,0,f2 * f3,(- f1) * f3,0,trg.s + 1);
                     trg4.fra = -100;
                     trg4.specoz = _loc0_ = 23;
                     trg3.specoz = _loc0_;
                     trg2.specoz = _loc0_;
                     trg4.eternal = _loc0_ = true;
                     trg3.eternal = _loc0_;
                     trg2.eternal = _loc0_;
                     speco(trg2);
                     speco(trg3);
                     speco(trg4);
                     if(trg.s == 74)
                     {
                        f1 = 1.3;
                     }
                     else
                     {
                        f1 = 1.2;
                     }
                     trg4._yscale *= f1;
                     trg4._xscale = _loc0_;
                     trg3._yscale = _loc0_;
                     trg3._xscale = _loc0_;
                     trg2._yscale = _loc0_;
                     trg2._xscale = _loc0_;
                  }
                  trg.dones = true;
                  trg.dfr = true;
               }
               break;
            case 13:
               randrun();
               if(trg.d.d._currentframe == 1)
               {
                  trg.xpp = undefined;
               }
               if(trg.d.d._currentframe > 19)
               {
                  trg.xbew *= 0.6;
                  trg.ybew *= 0.6;
               }
         }
         break;
      case 73:
         trg.outway = true;
      case 72:
      case 71:
         if(fra < 30 && altboss)
         {
            speco(trg);
         }
         if(trg.specoz == 15)
         {
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
         }
         f1 = trg.s - 71;
         if(fra - trg.fra < 10)
         {
            trg.d.gotoAndStop(4 + f1 * 3);
         }
         if(trg.d._currentframe == 4 + f1 * 3)
         {
            trgnextd();
            trg.xbew *= 0.45;
            trg.ybew *= 0.45;
         }
         if(trg.d._currentframe != 4 + f1 * 3)
         {
            trg.d.gotoAndStop(2 + f1 * 3);
            f2 = 0.2 + f1 * 0.18;
            if(trg.xbew > 0)
            {
               xenf = f2;
            }
            else
            {
               xenf = - f2;
            }
            if(trg.ybew > 0)
            {
               yenf = f2;
            }
            else
            {
               yenf = - f2;
            }
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
            trg.xbew += xenf;
            trg.ybew += yenf;
         }
         break;
      case 57:
         if(trg.d._currentframe == 5)
         {
            if(trg.d.d._currentframe == 26)
            {
               _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",80);
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               randrun();
               if(random(30) == 0)
               {
                  trg.d.gotoAndStop(5);
               }
               break;
            case 5:
               if(trg.eternal && trg.alter == 2)
               {
                  if(trg.d.d._currentframe == 4)
                  {
                     trg.reps = 2;
                  }
                  if(trg.d.d._currentframe == 33)
                  {
                     if(trg.reps-- > 0)
                     {
                        trg.d.d.gotoAndStop(16);
                     }
                  }
               }
               if(trg.d.d._currentframe == 30)
               {
                  quadf(trg.xp,trg.yp,10,true);
               }
         }
         sideflip(100);
   }
}
function splush()
{
   if(trg.firee <= 0)
   {
      trg.firee = 0;
   }
   trg.firee += 0.45;
   f1 = 10.5;
   xenf = Math.sin(trg.firee) * f1;
   yenf = Math.cos(trg.firee) * f1;
   noho = true;
   xxenf = trg.xp - player.xp;
   yyenf = trg.yp - player.yp;
   var _loc1_ = 0;
   while(_loc1_ < 4)
   {
      var _loc2_ = xenf;
      xenf = yenf;
      yenf = - _loc2_;
      if(xenf * xxenf + yenf * yyenf <= 1000)
      {
         trg2 = ffmo(trg.xp + xenf * 2,trg.yp + yenf * 2,0,xenf + trg.xbew,yenf * 0.8 + trg.ybew,0,9,trg.s,true);
         trg2.dm -= 1.3;
      }
      _loc1_ = _loc1_ + 1;
   }
   noho = false;
}
function bawssmart()
{
   switch(trg.s)
   {
      case 32:
         bord();
         if(trg.eternal)
         {
            firemode(300,5);
         }
         if(fra % 3 == 0)
         {
            splater(trg.xp,trg.yp + 8,1 + random(10),Math.random() * 0.5 + 0.2);
         }
         markhere(trg);
         if(!trg.gogo)
         {
            randrunx(0.75);
            trg.xbew *= 0.85;
            trg.ybew *= 0.8;
            if((fra + trg.e) % 7 == 0)
            {
               trg.gogo = chaa();
            }
         }
         else if(trg.gh)
         {
            trg.gogo = false;
            trg.ypp = _loc0_ = undefined;
            trg.xpp = _loc0_;
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            trg.xbew += trg.xpp;
            trg.ybew += trg.ypp;
            outgrid(trg.til);
            if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
            {
               trg.yp *= 0.9;
               trg.yp += yenf * 0.1;
            }
            else
            {
               trg.xp *= 0.9;
               trg.xp += xenf * 0.1;
            }
         }
         if(ashut < 5)
         {
            f11 = (fra + trg.e) % 12 == 0;
            f2 = (fra + trg.e) % 12 == 6;
         }
         else if(ashut < 10)
         {
            f11 = (fra + trg.e) % 18 == 0;
            f2 = (fra + trg.e) % 18 == 9;
         }
         else
         {
            f11 = (fra + trg.e) % 24 == 0;
            f2 = (fra + trg.e) % 24 == 12;
         }
         if(f11 || enfget(trg.xbew,trg.ybew) > 3 && f2)
         {
            trg2 = parc("bloo",trg.xp,trg.yp,0,123);
            if(trg.special)
            {
               trg2.specol = trg.specol;
               trg2.special = true;
               speco(trg2);
            }
            else
            {
               colorit(trg2,trg.rrr,trg.rrr,trg.rrr,0,0,0);
            }
         }
         break;
      case 88:
         trg.xbew *= 0.75;
         trg.ybew *= 0.75;
         if(trg.d._currentframe < 3)
         {
            randrun();
            walkframe(2);
            sideflip(trg.xbew);
            boiler(true);
         }
         else
         {
            trgnextd();
            boiler(false,true);
         }
         break;
      case 30:
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         f1 = trg.hp / hps[trg.s];
         if(f1 >= 1)
         {
            trgnextd();
            boiler(trg.d._currentframe == 1,trg.d._currentframe == 5);
            if(f1 < 1.2)
            {
               trg.hp += 0.06 / (1 + fra * 0.001);
            }
         }
         else
         {
            trg.fire = 0;
            trg.hp += trg.hppp * 1.2;
            if(trg.boss)
            {
               trg.hppp += 0.01;
            }
            else
            {
               trg.hppp += 0.02;
            }
            if(trg.alter == 3)
            {
               trg.hppp *= 0.8;
            }
            trg.hppp *= 0.9;
            trg.d.gotoAndStop(1);
            trg.d.hx.gotoAndStop(trg.alter);
            trg.d.hx.d.gotoAndStop(Math.max(1,14 - Math.round(f1 * 13)));
         }
         break;
      case 91:
         if(trg.hpp == undefined)
         {
            trg.hpp = 0;
            trg.hppp = 0;
         }
         if(trg.specoz == 23)
         {
            trg.xbew *= 0.85;
            trg.ybew *= 0.85;
         }
         else
         {
            trg.xbew *= 0.77;
            trg.ybew *= 0.77;
         }
         if(fra5)
         {
            v1 = (1 - trg.hp / trg.mhp) * 10;
            if(trg.hpp < v1)
            {
               trg.hpp = trg.hpp + 1;
               trg.d.b.sh._yscale = trg.d.b.d._yscale + 30;
               trg.d.b.sh._xscale = trg.d.b.d._yscale * 2.5 + 50;
               sideflip(player.xp - trg.xp);
               trg.d.d.play();
               if(trg.d.d._currentframe == 1)
               {
                  _root.soundy("Wheezy_Cough_" + random(3) + ".mp",100);
               }
            }
            if(trg.eternal)
            {
               v1 -= 7;
            }
            trg.d.b.d._xscale = _loc0_ = 100 - v1 * 4;
            trg.d.b.d._yscale = _loc0_;
         }
         else if(trg.d.d._currentframe == 1 && trg.d._currentframe == 1)
         {
            sideflip(trg.xbew * 5);
         }
         else if(trg.d.d._currentframe == 9 && trg.d._currentframe == 1)
         {
            while(trg.hpp > trg.hppp)
            {
               trg.hppp += 1 + Math.random();
               if(ashut < 7)
               {
                  ashut++;
                  xenf = (player.xp - trg.xp) * 0.1 + crand(10);
                  yenf = (player.yp - trg.yp) * 0.1 + crand(10);
                  create(trg.xp,trg.yp,0,xenf,yenf,0,14);
               }
            }
         }
         if((random(100) == 0 || trg.eternal && random(30) == 0 && ashut < 5) && ashut < 10)
         {
            xenf = crand(10);
            yenf = crand(10);
            if(ashut < 10)
            {
               trg2 = create(trg.xp,trg.yp,0,xenf,yenf,0,18);
               if(trg.specoz == 23)
               {
                  trg2.hp = 20;
                  attach(trg2,96);
               }
            }
         }
      case 25:
         if(trg.duke)
         {
            dukes++;
         }
         if(trg.alt)
         {
            trg.nobomb = true;
            trg.d.gotoAndStop(9);
            splater(trg.xp,trg.yp,1 + random(10),Math.random() * 0.3 + 0.3);
            if(trg.alt != 2)
            {
               if(helpss <= 0 || slug == undefined)
               {
                  trg.dones = true;
               }
            }
         }
         if(trg.alter == 2)
         {
            trg.nobomb = true;
         }
         if(ups[9])
         {
            f1 = 0.25;
         }
         else
         {
            f1 = 0.45;
         }
         if(trg.ybew > 0)
         {
            f2 = f1;
         }
         else
         {
            f2 = - f1;
         }
         if(trg.xbew > 0)
         {
            f1 = f1;
         }
         else
         {
            f1 = - f1;
         }
         trg.xbew *= 0.9;
         trg.ybew *= 0.9;
         trg.xbew += f1;
         trg.ybew += f2;
         break;
      case 102:
         if(trg.eternal)
         {
            bord(560,80,390,190);
            trg.xpp = undefined;
            trg.hp += 400 / (800 + fra * 4);
            trg._xscale = trg._xscale * 0.7 + 39;
            trg._yscale = trg._xscale * 0.5 + 65;
            if(random(40) == 0)
            {
               if(trrisp + 25 + random(100) <= fra)
               {
                  trrisp = fra;
                  f0 = 0;
                  while(trg.xpp == undefined && f0 < 100)
                  {
                     telpx();
                     f0++;
                  }
                  if(trg.xpp > 0)
                  {
                     parc("bloodsplash-teleport",trg.xp,trg.yp,0,200,trg.dpppp + 123);
                     trg.xp = trg.xpp;
                     trg.yp = trg.ypp;
                     trg._xscale = 30;
                     trg._yscale = 60;
                     trg.xpp = undefined;
                     _root.soundy("hell_portal2.wav");
                  }
               }
            }
         }
         if(trris + 45 + random(100) <= fra && random(20) == 0 && trg.state == 0)
         {
            trris = fra;
            _root.soundy("Scared_Whimper_" + random(3) + ".mp",100);
         }
         isaaaac = true;
         f1 = Math.round((trg.mhp - trg.hp) / trg.mhp * 3 - 0.5);
         if(trgnextd(undefined,true))
         {
            if(trg.d._currentframe == 4)
            {
               trg.d.gotoAndStop(7);
            }
            else
            {
               trg.d.gotoAndStop(1);
            }
         }
         if(trg.d._currentframe == 1)
         {
            if(trg.state < f1)
            {
               trg.state = f1;
               f2 = [0,10,7,3];
               trg.d.gotoAndStop(f2[f1]);
            }
            else
            {
               f2 = [1,5,8];
               trg.d.gotoAndStop(f2[f1]);
            }
         }
         if(!trg.eternal)
         {
            trg.xp = trg.xpp;
            trg.yp = trg.ypp;
         }
         trg.xbew *= 0.6;
         trg.ybew *= 0.6;
         if(trg.hurt && trg.state != 2)
         {
            trg.hurt = false;
            bossfire(1,true);
         }
         if(trg.eternal)
         {
            if(!altboss)
            {
               if(random(20) == 0)
               {
                  bossfire(1,true);
                  if(random(3) == 0)
                  {
                     bossfire(1,true);
                  }
               }
            }
         }
         if(altboss && random(60) == 0 && ashut < 20)
         {
            trg2 = create(trg.xp,trg.yp,0,crand(10),crand(10),0,18);
            trg2.die = true;
            trg2.outway = true;
            trg2.fra = -20;
         }
         if(trg.state == 2)
         {
            if(trg.fire-- < 0)
            {
               if(random(10) == 0)
               {
                  anarch = 10;
                  analt = true;
                  trg.fire = 40;
               }
               else if(random(10) == 0 && ashut < 4)
               {
                  trg.fire = 320;
                  trg2 = spaw(trg.xp,trg.yp,100,38.1);
                  trg2.hp *= 0.5;
                  if(ashut < 2 || trg.eternal && random(3) == 0)
                  {
                     trg2 = spaw(trg.xp,trg.yp,100,38.1);
                     trg2.hp *= 0.5;
                  }
               }
            }
         }
         switch(trg.d._currentframe)
         {
            case 7:
               if(trg.d.d._currentframe == 17)
               {
                  _root.soundy("superholy.wav");
               }
               break;
            case 10:
               if(trg.d.d._currentframe == 20)
               {
                  _root.soundy("Holy.mp");
               }
               break;
            case 1:
            case 5:
            case 8:
               if(random(60) == 0)
               {
                  f2 = [2,6,9];
                  trg.fire = 40;
                  trg.d.gotoAndStop(f2[trg.state]);
               }
               break;
            case 2:
               if(trg.eternal && altboss)
               {
                  if(trg.d.d._currentframe >= 3 && trg.d.d._currentframe < 6)
                  {
                     splush();
                  }
               }
               if(trg.d.d._currentframe == 3)
               {
                  if(!trg.eternal || !altboss)
                  {
                     cirf(trg.xp,trg.yp + 20,10,12);
                  }
                  _root.soundy("thumbs down.wav",50);
               }
               break;
            case 6:
               if(trg.eternal && altboss)
               {
                  if(trg.d.d._currentframe >= 6 && trg.d.d._currentframe < 9)
                  {
                     splush();
                  }
               }
               if(trg.d.d._currentframe == 6)
               {
                  if(!trg.eternal || !altboss)
                  {
                     cirf(trg.xp,trg.yp,10,trg.d._currentframe * 0.666);
                  }
                  _root.soundy("thumbsup.wav");
               }
               break;
            case 9:
               if(trg.eternal && altboss)
               {
                  if(trg.d.d._currentframe >= 19 && trg.d.d._currentframe <= 22)
                  {
                     splush();
                  }
               }
               if(trg.d.d._currentframe == 17)
               {
                  _root.soundy("Powerup2.mp3");
               }
               if(trg.d.d._currentframe == 19)
               {
                  if(!trg.eternal || !altboss)
                  {
                     cirf(trg.xp,trg.yp,10,trg.d._currentframe * 0.666);
                  }
               }
         }
         if(trg.eternal)
         {
            trg.d.s._visible = false;
            trg.d.d.s._visible = false;
            trg.d.d.d.s._visible = false;
         }
         break;
      case 101:
         if(altboss)
         {
            spidboss = true;
            if(trg.eternal)
            {
               trg.hp -= 0.02;
            }
         }
         if(trgnextd(undefined,true) || trg.d._currentframe < 3)
         {
            f4 = 3;
            if(altboss)
            {
               f4--;
            }
            if(trg.d._currentframe == 7)
            {
               if(trg.goner)
               {
                  trg.done = true;
               }
               else if(trg.stomps++ < f4 || random(7) == 0)
               {
                  trg.d.d.gotoAndStop(1);
               }
               else
               {
                  trg.d.gotoAndStop(5);
               }
            }
            else if(trg.d._currentframe == 4)
            {
               trg.d.gotoAndStop(7);
            }
            else
            {
               trg.d.gotoAndStop(1);
            }
         }
         trg.bh = (trg.d._currentframe != 4 || trg.d.d._currentframe < 21) && (trg.d._currentframe != 5 || trg.d.d._currentframe > 6) && (trg.d._currentframe != 7 || trg.d.d._currentframe > 16 && trg.d.d._currentframe < 37) && (trg.d._currentframe != 6 || trg.d.d._currentframe < 6 && trg.d.d._currentframe > 73);
         if(trg.d._currentframe == 5 && trg.d.d._currentframe == 9 || trg.d._currentframe == 7 && trg.d.d._currentframe == 15)
         {
            trg.dmg = 300;
            gosplash();
            if(trg.d._currentframe == 5)
            {
               _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav",70);
            }
            else
            {
               _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
            }
            if(trg.d._currentframe == 5 || trg.eternal && !altboss)
            {
               if(trg.goner)
               {
                  f0 = 6;
               }
               else
               {
                  f0 = 10;
               }
               quadf(trg.xp,trg.yp,f0,true);
            }
            if(altboss)
            {
               trg2 = parc("bloo",trg.xp,trg.yp);
               trg2._xscale *= 2;
               trg2._yscale = trg2._xscale;
               colorit(trg2,0,0,0,255,255,255);
            }
            if(trg.eternal)
            {
               if(egggs > 0)
               {
                  if(fra > 300)
                  {
                     egggs *= 0.92;
                  }
                  else
                  {
                     egggs *= 0.85;
                  }
                  egggs -= 0.01;
               }
               else
               {
                  egggs = 0;
               }
            }
            if(trg.eternal && (ashut < 7 && egggs < 0.3 + random(2) || trg.d._currentframe == 5) && altboss)
            {
               egggs++;
               trg2 = create(trg.xp,trg.yp - 10,0,0,0,0,30.2);
               if(trg.d._currentframe == 5)
               {
                  trg2.eternal = true;
                  trg2.specoz = 23;
                  trg2._yscale *= 1.4;
                  trg2._xscale = _loc0_;
                  speco(trg2);
                  trg2.hp *= 1.3;
                  trg2.mhp = _loc0_;
               }
               trg2.outway = true;
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         switch(trg.d._currentframe)
         {
            case 3:
               if(trg.d.d._currentframe == 18)
               {
                  if(altboss)
                  {
                     spih();
                  }
               }
               if(trg.d.d._currentframe == 20)
               {
                  trg.yp += 15;
                  if(!altboss)
                  {
                     boil();
                     boil();
                     if(random(2) == 0)
                     {
                        boil();
                     }
                     if(trg.eternal)
                     {
                        boil();
                        boil();
                        boil();
                     }
                  }
                  _root.soundy("Boss_Spit_Blob_Barf.mp",100);
                  trg.yp -= 15;
               }
               break;
            case 1:
               if(random(20) == 0)
               {
                  f2 = [4,6,6];
                  if(ashut < 4)
                  {
                     f2.push(3,3);
                  }
                  f1 = f2[random(f2.length)];
                  trg.stomps = 0;
                  trg.d.gotoAndStop(f1);
               }
               break;
            case 6:
               f1 = trg.d.d._currentframe;
               f2 = f1 - 16;
               f3 = 10;
               f2 %= f3;
               if(f2 == 0 && f1 < f3 * 4)
               {
                  if(trg.stomps != 3 || !altboss)
                  {
                     trg2 = spaw(trg.xp,trg.yp,random(300) + 60,101);
                     trg2.goner = true;
                     trg2.d.gotoAndStop(7);
                     trg2.stomps = trg.stomps++;
                  }
               }
               break;
            case 5:
               if(altboss)
               {
                  f1 = trg.d.d._currentframe;
                  if(f1 > 5 && f1 < 29)
                  {
                     f2 = 50 + 2 * f1;
                     trg2 = parc("bloo",trg.xp + crand(f2),trg.yp + crand(f2));
                     trg2._xscale *= 1 + f1 * 0.05;
                     trg2._yscale = trg2._xscale;
                     colorit(trg2,0,0,0,255,255,255);
                  }
               }
               if(trg.d.d._currentframe == 1)
               {
                  trg.xp = player.xp;
                  trg.yp = trg.ypp;
                  sizes[101] = 30;
               }
               break;
            case 7:
               if(trg.d.d._currentframe == 1)
               {
                  trg.xp = player.xp;
                  trg.yp = player.yp;
                  sizes[101] = 15;
               }
         }
         break;
      case 100:
         if(altboss && trg.eternal)
         {
            trg.hp += 10 / (50 + fra);
         }
         spidboss = true;
         trg.outway = true;
         trgnextd();
         if(trg.specoz == 20 && fra2 && (trg.d.d._currentframe != 9 || trg.d._currentframe != 7))
         {
            trgnextd();
         }
         f1 = 0.8;
         if(f1 != 1)
         {
            trg.xbew *= f1;
            trg.ybew *= f1;
         }
         trg.bh = true;
         trg.ggh = false;
         switch(trg.d._currentframe)
         {
            case 5:
               if(trg.d.d._currentframe == 7)
               {
                  _root.soundy("Boss_Lite_Roar.mp",100);
               }
               if(trg.d.d._currentframe > 5 && trg.d.d._currentframe < 23)
               {
                  trg.bh = false;
                  trg.xbew += trg.xpp;
                  trg.ybew += trg.ypp;
               }
               if(trg.d.d._currentframe == 23)
               {
                  _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
                  braz();
                  if(trg.specoz == 23)
                  {
                     if(altboss)
                     {
                        f1 = true;
                     }
                     else
                     {
                        f1 = 2;
                     }
                     quadf(trg.xp + trg.xbew * 2,trg.yp + trg.ybew * 2,10,f1);
                     enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                     if(enf > 110 && trg.fire-- > 0)
                     {
                        enf = 3 / enf;
                        trg.xbew *= 0.7;
                        trg.ybew *= 0.7;
                        trg.xpp = (- xenf) * enf;
                        trg.ypp = (- yenf) * enf;
                        trg.d.d.gotoAndStop(2);
                     }
                  }
               }
               trg.xbew *= 0.9;
               trg.ybew *= 0.9;
               break;
            case 1:
               f1 = random(2);
               trg.fire = trg.fire + 1;
               enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               if(random(3) == 0 && enf > 100 || !altboss && ashut > 5 || trg.nextjump)
               {
                  f1 = 5;
                  trg.nextjump = false;
                  enf = 4 / enf;
                  trg.xbew *= 0.7;
                  trg.ybew *= 0.7;
                  trg.xpp = (- xenf) * enf;
                  trg.ypp = (- yenf) * enf;
                  trg.runs = 0;
                  if(trg.specoz == 23)
                  {
                     trg.fire = 4;
                  }
               }
               else
               {
                  if(altboss)
                  {
                     f2 = [2,6];
                     if(ashut < 6)
                     {
                        f2.push(7);
                     }
                  }
                  else if(trg.specoz == 23)
                  {
                     if(ashut < 4 + random(4))
                     {
                        f2 = [2,6,7];
                     }
                     else
                     {
                        f2 = [2,6];
                     }
                  }
                  else
                  {
                     f2 = [2,6,7];
                  }
                  f1 = f2[random(f2.length)];
               }
               trg.d.gotoAndStop(f1);
               break;
            case 7:
               if(trg.d.d._currentframe == 3)
               {
                  _root.soundy("Wheezy_Cough_" + random(3) + ".mp",160);
               }
               if(trg.d.d._currentframe == 9)
               {
                  if(altboss)
                  {
                     if(random(3) == 0)
                     {
                        spih();
                     }
                     else if(random(2) == 0 && ashut < 5)
                     {
                        boil();
                        boil();
                        if(trg.eternal && ashut < 9)
                        {
                           boil();
                           if(random(2) == 0)
                           {
                              boil();
                           }
                        }
                     }
                     else
                     {
                        bigone = true;
                        boil();
                        bigone = undefined;
                        if(trg.eternal)
                        {
                           boil();
                           if(random(2) == 0)
                           {
                              boil();
                           }
                        }
                     }
                  }
                  else if(trg.specoz == 20)
                  {
                     enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                     enf = -13 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     trg2 = create(trg.xp,trg.yp,0,xenf + yenf * 0.4,yenf + xenf * 0.4,0,18);
                     trg3 = create(trg.xp,trg.yp,0,xenf - yenf * 0.4,yenf - xenf * 0.4,0,18);
                     trg2.fra -= 20;
                     trg2.die = true;
                     trg2.pbh = true;
                     trg3.fra -= 20;
                     trg3.die = true;
                     trg3.pbh = true;
                  }
                  else if(trg.specoz < 20)
                  {
                     cirf(trg.xp,trg.yp - 15,8,6);
                  }
                  else
                  {
                     boil();
                     if(trg.specoz == 23)
                     {
                        boil();
                        boil();
                     }
                  }
               }
               break;
            case 6:
               f1 = trg.d.d._currentframe - 18;
               if(f1 > 0 && f1 < 17 && (altboss || f1 < 8))
               {
                  trg2 = parc("bloo",trg.xp + crand(f1 * 3),trg.yp + crand(f1 * 3));
                  trg2._xscale *= 1 + f1 * 0.2;
                  trg2._yscale = trg2._xscale;
                  if(trg.specoz < 20)
                  {
                     colorit(trg2,0,0,0,0,0,0);
                  }
                  else
                  {
                     colorit(trg2,0,0,0,255,255,255);
                  }
                  if(fra2)
                  {
                     _root.soundy("boss2_bubbles" + random(2) + ".wav",150);
                  }
               }
               if(altboss)
               {
                  if(trg.d.d._currentframe == 18)
                  {
                     quadf(trg.xp,trg.yp,10,true);
                  }
               }
               else
               {
                  if(boils < 2)
                  {
                     if(trg.d.d._currentframe == 18)
                     {
                        if(trg.specoz == 20)
                        {
                           f1 = 30;
                        }
                        else if(trg.specoz < 20)
                        {
                           f1 = 94;
                        }
                        else
                        {
                           f1 = 30.3;
                        }
                        trg.trg2 = create(trg.xp,trg.yp + 30,0,0,0,0,f1);
                        if(f1 != 94)
                        {
                           boils++;
                        }
                        trg.nextjump = true;
                        trg.trg2.hp = 10;
                     }
                  }
                  if(trg.d.d._currentframe == 25)
                  {
                     trg.trg2.d.d.hx.gotoAndStop(3);
                     trg.trg2.d.d.hx.d.gotoAndStop(8);
                  }
               }
         }
         break;
      case 99:
         if(trg.eternal)
         {
            f1 = 100 / (200 + fra);
            if(trg.hp < trg.mhp && _root.chaps > 2)
            {
               trg.hp += f1;
            }
            breakdance(trg.s);
         }
         if((fra + trg.e) % 5 == 0 && fra > 10)
         {
            f1 = Math.random() * 2;
            f2 = 20 - f1 * 10;
            splater(trg.xp + crand(f2),trg.yp + crand(f1),1 + random(10),(f1 + 0.4) * trg._xscale / 100);
         }
         if(trgnextd(undefined,true))
         {
            if(trg.d._currentframe == 8)
            {
               if(enfget(trg.xbew,trg.ybew) > 2 && trg.runs++ < 10)
               {
                  trg.d.d.gotoAndStop(1);
               }
               else
               {
                  trg.d.nextFrame();
               }
            }
            else if(trg.d._currentframe == 7)
            {
               trg.d.nextFrame();
            }
            else
            {
               trg.d.gotoAndStop(1);
            }
         }
         f1 = 1;
         if(trg.d._currentframe < 7)
         {
            f1 = 0.8;
         }
         else if(fra5)
         {
            f1 = 0.97;
         }
         if(f1 != 1)
         {
            trg.xbew *= f1;
            trg.ybew *= f1;
         }
         switch(trg.d._currentframe)
         {
            case 8:
               if(trg.eternal)
               {
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                  enf = 0.4 / enf;
                  trg.xbew *= 0.96;
                  trg.ybew *= 0.96;
                  trg.xbew -= xenf * enf;
                  trg.ybew -= yenf * enf;
               }
               break;
            case 7:
               if(trg.d.d._currentframe == 3)
               {
                  _root.soundy("Monster_Roar_1.mp",100);
               }
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
               trg.xbew += trg.xpp;
               trg.ybew += trg.ypp;
               break;
            case 1:
               f1 = random(2);
               trg.fire = trg.fire + 1;
               if(trg.fire >= 3 || trg.hp < 100)
               {
                  f1 = 7;
                  trg.fire = 0;
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                  enf = 4 / enf;
                  trg.xbew *= 0.7;
                  trg.ybew *= 0.7;
                  if(trg.specoz == 7)
                  {
                     enf *= 0.7;
                  }
                  trg.xpp = (- xenf) * enf;
                  trg.ypp = (- yenf) * enf;
                  trg.runs = 0;
               }
               else
               {
                  f2 = [2,6];
                  if(ashut < 6)
                  {
                     f2.push(5);
                  }
                  if(trg.specoz == 21)
                  {
                     f2.splice(1,1);
                  }
                  f1 = f2[random(f2.length)];
                  if(trg.specoz == 7)
                  {
                     f1 = 1;
                  }
               }
               trg.d.gotoAndStop(f1);
               break;
            case 5:
               if(trg.d.d._currentframe == 13)
               {
                  _root.soundy("summonsound.wav",110);
                  f1 = 14;
                  if(trg.specoz == 21)
                  {
                     f1 += 0.1;
                  }
                  trg2 = create(trg.xp - 30,trg.yp - 30,0,0,-10,0,f1);
                  if(trg.eternal)
                  {
                     trg2.eternal = true;
                     trg2.specoz = 23;
                     speco(trg2);
                     trg2._yscale *= 1.4;
                     trg2._xscale = _loc0_;
                     trg2.mhp *= 2;
                     trg2.hp = _loc0_;
                  }
                  trg2.fra = 0;
                  trg2.outway = true;
               }
               break;
            case 6:
               if(trg.d.d._currentframe == 7)
               {
                  _root.soundy("Boss_Lite_Roar.mp",100);
               }
               if(trg.d.d._currentframe == 18)
               {
                  if(trg.eternal)
                  {
                     cirf(trg.xp,trg.yp - trg._yscale * 0.2,11,12);
                  }
                  else
                  {
                     quadf(trg.xp,trg.yp,10,true);
                  }
                  _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
               }
         }
   }
}
function smarts3()
{
   switch(trg.s)
   {
      case 43:
      case 20:
         if(altboss && trg.s == 43)
         {
            blackout = 2;
         }
         if(trg.specoz == 23 && trg.s == 20)
         {
            if(trg.hp < trg.mhp * 0.25 && trg._yscale > 70 || trg.hp < trg.mhp * 0.5 && trg._yscale >= 110)
            {
               sizes[20] = 24;
               xenf = 20;
               trg2 = create(trg.xp,trg.yp - 20,0,0,0,0,20);
               trg3 = create(trg.xp,trg.yp - 20,0,0,0,0,20);
               trg2._yscale = _loc0_ = trg._yscale * 0.66;
               trg2._xscale = _loc0_;
               trg3._yscale = _loc0_ = trg._yscale * 0.66;
               trg3._xscale = _loc0_;
               trg3.splity = _loc0_ = true;
               trg2.splity = _loc0_;
               if(trg._yscale < 110)
               {
                  trg2.hp *= 0.35;
                  trg3.hp *= 0.35;
               }
               else
               {
                  trg2.hp *= 0.5;
                  trg3.hp *= 0.5;
               }
               _root.soundy("summonsound.wav",trg._yscale);
               trg.done = true;
            }
         }
         trg.bh = (trg.d._currentframe != 6 || trg.d.d._currentframe > 22 || trg.d.d._currentframe < 8) && (trg.d._currentframe != 2 || trg.d.d._currentframe < 8) && (trg.d._currentframe != 3 || trg.d.d._currentframe > 33) && trg.d._currentframe != 5;
         whuf = (trg.s == 43 && fra2 && trg.specoz == 14 || trg.specoz == 23 && trg.s == 20 && fra2 && trg.d.currentframe != 4 && !trg.splity) && !trg.weap;
         if(trg.weap)
         {
            trgnextd();
            if(whuf)
            {
               trgnextd();
            }
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            switch(trg.d._currentframe)
            {
               case 2:
                  if(trg.d.d._currentframe == 16)
                  {
                     trg.done = true;
                  }
                  break;
               case 3:
                  if(!trg.bh)
                  {
                     trg2 = trg.trg2;
                     if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,1000) > 0)
                     {
                        trg.xbew -= xenf * 0.01;
                        trg.ybew -= yenf * 0.01;
                     }
                  }
                  if(trg.d.d._currentframe == 32)
                  {
                     _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",80);
                     if(trg.specoz == 23 && !altboss && trg.s == 43)
                     {
                        quadf(trg.xp,trg.yp,10,random(1) * 2);
                     }
                     for(z in ball)
                     {
                        trg2 = ball[z];
                        if(trg2.s > 9 && trg != trg2)
                        {
                           if(enfcheck(trg2.xp,trg2.yp,trg.xp,trg.yp,80))
                           {
                              hurt(trg2,120);
                           }
                        }
                     }
                  }
                  else if(trg.d.d._currentframe == 72)
                  {
                     trg.d.gotoAndStop(2);
                  }
            }
         }
         else
         {
            trg.ggh = !trg.bh;
            trg.flyby = !trg.bh;
            if((fra + trg.e) % 5 == 0 && fra > 10)
            {
               splater(trg.xp,trg.yp,1 + random(10),(Math.random() + 1) * trg._xscale / 100);
            }
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
            switch(trg.mode)
            {
               case 10:
                  trg.d.gotoAndStop(7);
                  if(whuf)
                  {
                     trgnextd();
                  }
                  trgnextd();
                  if(trg.d._currentframe == 1)
                  {
                     trg.mode = undefined;
                  }
                  break;
               case 1:
                  trgnextd();
                  if(trg.d._currentframe == 1 && trg.modedone)
                  {
                     trg.mode = undefined;
                  }
                  else
                  {
                     if(altboss && trg.s == 43)
                     {
                        trg.d.gotoAndStop(8);
                        sideflip(trg.xp - player.xp);
                     }
                     else
                     {
                        trg.d.gotoAndStop(4);
                     }
                     if(trg.s == 43)
                     {
                        if(trg.d.d._currentframe > 27 && trg.d.d._currentframe < 60)
                        {
                           if(altboss)
                           {
                              if(trg.d.d._currentframe == 29)
                              {
                                 green(true);
                                 _root.soundy("Boss_Spit_Blob_Barf.mp",100);
                                 if(trg.specoz == 23)
                                 {
                                    green(true);
                                    green(false);
                                 }
                              }
                              trg.modedone = true;
                           }
                           else
                           {
                              trg.ypp = 0;
                              trg.xpp = - trg.d._xscale;
                              lasershow(trg);
                              trg.modedone = true;
                              if(trg.specoz == 23)
                              {
                                 if(trg.d.d._currentframe % 10 == 0)
                                 {
                                    f10 = 20;
                                    if(trg.alter == 2)
                                    {
                                       f10 *= 2;
                                    }
                                    z = 0;
                                    while(z < f10)
                                    {
                                       f0 = Math.random() * 5;
                                       if(trg.alter == 2)
                                       {
                                          if(random(2) == 0)
                                          {
                                             f0 = - f0;
                                          }
                                       }
                                       f1 = trg.xp + trg.xpp * f0 + crand(10);
                                       f2 = trg.yp + trg.ypp * f0 + crand(10);
                                       if(f1 > 60 && f1 < 580)
                                       {
                                          if(f2 > 150 && f2 < 410)
                                          {
                                             trg2 = parc("bloo",f1,f2,0,123);
                                             colorit(trg2,4,4,4,0,0,0);
                                             trg2.longstay = 130;
                                          }
                                       }
                                       z++;
                                    }
                                 }
                              }
                           }
                        }
                     }
                     else if(trg.specoz == 23 && !trg.splity && trg.s == 20)
                     {
                        if(trg.d.d._currentframe > 23 && trg.d.d._currentframe < 45)
                        {
                           f1 = 1;
                           if(!trg.modedone)
                           {
                              _root.soundy("Boss_Spit_Blob_Barf.mp",100);
                              f1 = 5;
                           }
                           bossfire(f1,true);
                           trg.modedone = true;
                        }
                     }
                     else if(trg.d.d._currentframe > 23 && !trg.modedone)
                     {
                        _root.soundy("Boss_Spit_Blob_Barf.mp",100);
                        bossfire(13,true);
                        trg.modedone = true;
                     }
                  }
                  break;
               case 0:
                  trg.d.gotoAndStop(6);
                  trgnextd();
                  if(whuf)
                  {
                     trgnextd();
                  }
                  if(trg.xpp == undefined)
                  {
                     f1 = player.xp;
                     f2 = player.yp;
                     f1 = ingrid(f1,f2);
                     if(levzz(f1) < 1)
                     {
                        outgrid(f1);
                        trg.xpp = xenf;
                        trg.ypp = yenf;
                     }
                  }
                  if(trg.d.d._currentframe == 23)
                  {
                     _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",50);
                     if(trg.s == 43)
                     {
                        if(trg.specoz == 23 && !altboss)
                        {
                           quadf(trg.xp,trg.yp,10,false);
                        }
                        f1 = trg.xp;
                        f2 = trg.yp;
                        for(a in ball)
                        {
                           trg2 = ball[a];
                           if(trg2.flyai)
                           {
                              if(enfcheck(f1,f2,trg2.xp,trg2.yp,60))
                              {
                                 hurt(trg2,30);
                              }
                           }
                        }
                     }
                  }
                  if(trg.xpp != undefined && trg.d._currentframe == 1)
                  {
                     if(random(2) == 0)
                     {
                        trg.mode = trg.xpp = undefined;
                     }
                     else
                     {
                        _root.soundy("Boss_Lite_Roar.mp",40);
                        trg.xpp = undefined;
                     }
                  }
                  else if(trg.xpp != undefined && trg.d.d._currentframe < 24)
                  {
                     xenf = trg.xp - trg.xpp;
                     yenf = trg.yp - trg.ypp;
                     enf = enfget(xenf,yenf);
                     enf = 1.2 / enf;
                     if(trg.specoz == 14)
                     {
                        enf *= 1.5;
                     }
                     trg.xbew -= xenf * enf;
                     trg.ybew -= yenf * enf;
                     trg.xbew *= 0.9;
                     trg.ybew *= 0.9;
                     sideflip(xenf);
                  }
                  else
                  {
                     trg.xbew *= 0.8;
                     trg.ybew *= 0.8;
                  }
                  break;
               case 2:
                  trg.d.gotoAndStop(2);
                  trgnextd();
                  if(whuf)
                  {
                     trgnextd();
                  }
                  if(trg.d._currentframe == 1)
                  {
                     trg.d.gotoAndStop(3);
                     trg.mode = 3;
                     trg.modedone = false;
                     trg.xpp = undefined;
                  }
                  break;
               case 3:
                  if(whuf)
                  {
                     trgnextd();
                  }
                  trgnextd();
                  if(trg.d._currentframe == 1)
                  {
                     bossrep = !bossrep;
                     if(!bossrep || trg.s != 43)
                     {
                        trg.mode = undefined;
                        trg.xpp = undefined;
                     }
                     else
                     {
                        trg.mode = 2;
                        trg.xpp = undefined;
                     }
                  }
                  if(trg.xpp == undefined)
                  {
                     f1 = player.xp;
                     f2 = player.yp;
                     f1 = ingrid(f1,f2);
                     if(levzz(f1) < 1)
                     {
                        outgrid(f1);
                        trg.xpp = xenf;
                        trg.ypp = yenf;
                     }
                  }
                  if(trg.d.d._currentframe == 33 || trg.d.d._currentframe == 34 && whuf)
                  {
                     f3 = 5;
                     if(trg.s == 43)
                     {
                        f1 = trg.xp;
                        f2 = trg.yp;
                        f3 = 20;
                        for(a in ball)
                        {
                           trg2 = ball[a];
                           if(trg2.flyai)
                           {
                              if(enfcheck(f1,f2,trg2.xp,trg2.yp,70))
                              {
                                 hurt(trg2,30);
                              }
                           }
                        }
                        if(bossrep || trg.specoz == 23 && altboss)
                        {
                           if(altboss)
                           {
                              if(ashut < 4)
                              {
                                 trg2 = [];
                                 trg2[0] = create(f1,f2,0,f3,0,0,15);
                                 if(trg.specoz != 23)
                                 {
                                    trg2[0].hp -= 20;
                                 }
                                 else
                                 {
                                    trg2[0].specoz = 23;
                                    speco(trg2[0]);
                                 }
                                 if(ashut < 2)
                                 {
                                    trg2[1] = create(f1,f2,0,- f3,0,0,15);
                                    if(trg.specoz != 23)
                                    {
                                       trg2[1].hp -= 20;
                                    }
                                    else
                                    {
                                       trg2[1].specoz = 23;
                                       speco(trg2[1]);
                                    }
                                    _root.soundy("summonsound.wav",150);
                                 }
                                 else
                                 {
                                    _root.soundy("summonsound.wav",100);
                                 }
                              }
                              if(trg.specoz == 23)
                              {
                                 trg2 = parc("bloo",trg.xp,trg.yp);
                                 trg2._xscale *= 3;
                                 trg2._yscale = trg2._xscale;
                                 colorit(trg2,0,0,0,0,0,0);
                              }
                           }
                           else
                           {
                              trg2 = [];
                              noet = true;
                              trg2[0] = create(f1,f2,0,f3,0,0,61);
                              trg2[2] = create(f1,f2,0,0,f3,0,61);
                              trg2[0].die = true;
                              trg2[2].die = true;
                              if(trg.specoz != 14)
                              {
                                 trg2[1] = create(f1,f2,0,- f3,0,0,61);
                                 trg2[3] = create(f1,f2,0,0,- f3,0,61);
                                 trg2[1].die = true;
                                 trg2[3].die = true;
                                 _root.soundy("summonsound.wav",150);
                              }
                              else
                              {
                                 _root.soundy("summonsound.wav",100);
                              }
                              quadf(trg.xp,trg.yp,10,true);
                              noet = false;
                           }
                        }
                        else if(altboss)
                        {
                           trg2 = parc("bloo",trg.xp,trg.yp);
                           trg2._xscale *= 3;
                           trg2._yscale = trg2._xscale;
                           if(trg.specoz != 23)
                           {
                              trg2.perm = true;
                           }
                           colorit(trg2,0,0,0,0,0,0);
                        }
                        else
                        {
                           quadf(trg.xp,trg.yp,10,true);
                        }
                     }
                     else
                     {
                        bossfire(18);
                     }
                     _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
                  }
                  if(trg.xpp != undefined && trg.d.d._currentframe < 32)
                  {
                     xenf = trg.xp - trg.xpp;
                     yenf = trg.yp - trg.ypp;
                     enf = enfget(xenf,yenf);
                     enf = (0.3 + enf * 0.006) / enf;
                     trg.xbew -= xenf * enf;
                     trg.ybew -= yenf * enf;
                  }
                  else
                  {
                     trg.xbew *= 0.8;
                     trg.ybew *= 0.8;
                  }
                  break;
               default:
                  if(trg.fra + 10 > fra)
                  {
                     trg.mode = 10;
                     trg.d.gotoAndStop(7);
                  }
                  else
                  {
                     trg.modedone = false;
                     trg.xpp = undefined;
                     trg.d.gotoAndStop(1);
                     if(trg.s == 43 && !altboss)
                     {
                        yenf = trg.yp - player.yp;
                        if(Math.abs(yenf) < 20 + Math.random() * 50)
                        {
                           trg.mode = 1;
                        }
                        else if(random(2) == 0)
                        {
                           trg.mode = 2;
                        }
                        else
                        {
                           trg.mode = 0;
                        }
                     }
                     else
                     {
                        trg.mode = random(3);
                        if((trg.specoz == 2 || trg.specoz == 23 && trg._yscale < 70) && trg.mode == 2 && trg.s == 20)
                        {
                           trg.mode = 1;
                        }
                     }
                     if(trg.mode == 2)
                     {
                        _root.soundy("Boss_Lite_Roar.mp",100);
                     }
                     if(trg.mode == 0)
                     {
                        _root.soundy("Boss_Lite_Roar.mp",50);
                     }
                     if(trg.mode == 1)
                     {
                        sideflip(trg.xp - player.xp);
                        trg.xpp = trg.xp - player.xp;
                     }
                  }
            }
         }
   }
}
function smarts4()
{
   switch(trg.s)
   {
      case 98:
      case 92:
         if(trg.d._currentframe < 3)
         {
            angstfind();
            walkframe(2);
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            if(fra % 3 == 0)
            {
               if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,100) || trg.specoz == 23 && random(70) == 0)
               {
                  trg.d.gotoAndStop(5);
               }
            }
         }
         else
         {
            trg.xbew *= 0.7;
            trg.ybew *= 0.7;
            trgnextd();
            if(trg.s == 98)
            {
               if(trg.d._currentframe == 5)
               {
                  if(trg.d.d._currentframe < 5 && trg.specoz == 23)
                  {
                     trg.rep = 2;
                  }
                  if(trg.d.d._currentframe == 19)
                  {
                     f1 = true;
                     if(trg.specoz == 18)
                     {
                        f1 = false;
                     }
                     quadf(trg.xp,trg.yp,8,f1);
                     splater(trg.xp,trg.yp + 12,1 + random(10),Math.random() + 0.6);
                     splater(trg.xp + crand(10),trg.yp + 12 + crand(10),1 + random(10),Math.random() * 0.5 + 0.6);
                  }
                  if(trg.d.d._currentframe == 30 && trg.specoz == 23)
                  {
                     if(trg.rep-- > 0)
                     {
                        trg.d.d.gotoAndStop(13);
                     }
                  }
               }
            }
            else if(trg.d._currentframe == 5)
            {
               if(trg.d.d._currentframe < 4 && trg.specoz == 23)
               {
                  trg.rep = 2;
               }
               if(trg.d.d._currentframe == 22 && trg.specoz == 23)
               {
                  if(trg.rep-- > 0)
                  {
                     trg.d.d.gotoAndStop(5);
                  }
               }
               if(trg.d.d._currentframe == 13)
               {
                  quadf(trg.xp,trg.yp,8,trg.eternal);
               }
            }
         }
         break;
      case 93:
         if(trg.eternal || trg.specoz == 23)
         {
            trg.flyby = true;
         }
         trg.randy = true;
         if(!trg.finder)
         {
            trg.finder = true;
            trg.trg2 = hearts[trg.trg2];
         }
         trg2 = trg.trg2;
         if(trg2.specoz == 23)
         {
            if(trg.specoz != 23)
            {
               trg.specoz = 23;
               speco(trg);
               trg._yscale *= 1.1;
               trg._yscale = _loc0_;
               trg.eternal = true;
               trg.help = 0.75;
            }
            if(!trg2.dones)
            {
               if(trg2.hp < trg2.mhp * trg.help)
               {
                  xenf = trg2.xp - player.xp;
                  yenf = trg2.yp - player.yp;
                  enf = enfget(xenf,yenf);
                  if(enf > 0)
                  {
                     xenf /= - enf;
                     yenf /= - enf;
                     parc("bloodsplash-teleport",trg.xp,trg.yp,0,100,trg.dpppp + 123);
                     trg.xp = trg2.xp + xenf * 20;
                     trg.yp = trg2.yp + yenf * 20;
                     if(Math.abs(xenf) > Math.abs(yenf))
                     {
                        yenf = 0;
                     }
                     else
                     {
                        xenf = 0;
                     }
                     xenf = - xenf;
                     yenf = - yenf;
                     trg.xbew = _loc0_ = xenf * 3;
                     trg.xbeww = _loc0_;
                     trg.ybew = _loc0_ = yenf * 3;
                     trg.ybeww = _loc0_;
                     trg.help -= 0.3;
                     _root.soundy("hell_portal2.wav");
                     chaxx();
                     trg.gogo = true;
                     trg.xpp *= 2;
                     trg.ypp *= 2;
                     trg.outway = true;
                     break;
                  }
               }
            }
         }
      case 97:
         f2 = false;
         if(trg.trg2.hp <= 0)
         {
            if(trg.s == 97)
            {
               if(!altboss)
               {
                  altboss = true;
                  trg.imba = false;
                  trg.hp = trg.mhp;
                  trg.d.gotoAndStop(1);
                  f2 = true;
               }
            }
            else
            {
               trg.dones = true;
            }
         }
         if(trg.s == 97)
         {
            if(!altboss)
            {
               f1 = trg.trg2.hp;
               if(f1 != trg.mhp && f1 < trg.hp)
               {
                  trg.hp = f1;
                  f2 = true;
               }
            }
            if(f2 && random(2) == 0)
            {
               chaxy();
               enf = enfcheck(f3,f4,f1,f2,1000);
               chaxx();
               trg.gogo = 2;
               f1 = 1.6;
               trg.xpp *= f1;
               trg.ypp *= f1;
            }
         }
         trg.ggh = fra2;
         markhere(trg);
         if(Math.abs(trg.xbeww) > Math.abs(trg.ybeww))
         {
            if(trg.xbeww > 0)
            {
               f1 = 7;
            }
            else
            {
               f1 = 6;
            }
         }
         else if(trg.ybeww > 0)
         {
            f1 = 1;
         }
         else
         {
            f1 = 5;
         }
         trg.xbeww += trg.xbew;
         trg.ybeww += trg.ybew;
         trg.xbeww *= 0.35;
         trg.ybeww *= 0.35;
         if(trg.xpp != undefined)
         {
            trg.d.gotoAndStop(f1);
         }
         if(!trg.gogo || trg.gogo == 2)
         {
            if((fra + trg.e) % 4 == 0)
            {
               if(chaa())
               {
                  if(trris2 + 20 <= fra && trg.s != 93 && trg.s != 97)
                  {
                     trris2 = fra;
                     _root.soundy("maggotcharge" + random(2) + ".wav");
                  }
                  trg.xpp *= 2;
                  trg.ypp *= 2;
                  trg.gogo = true;
               }
            }
         }
         if(!trg.gogo)
         {
            if(altboss && trg.s == 97)
            {
               randrunx(1.5);
            }
            else
            {
               randrunx(0.85);
            }
            trg.xbew *= 0.85;
            trg.ybew *= 0.78;
         }
         else if(trg.gh)
         {
            trg.gogo = false;
            trg.ypp = _loc0_ = undefined;
            trg.xpp = _loc0_;
         }
         else
         {
            trg.xbew *= 0.82;
            trg.ybew *= 0.82;
            trg.xbew += trg.xpp;
            trg.ybew += trg.ypp;
            trg.xbeww += trg.xpp * 3;
            trg.ybeww += trg.ypp * 3;
            outgrid(trg.til);
            if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
            {
               trg.yp *= 0.9;
               trg.yp += yenf * 0.1;
            }
            else
            {
               trg.xp *= 0.9;
               trg.xp += xenf * 0.1;
            }
            trg.d.gotoAndStop(f1);
         }
         break;
      case 55:
         if(trg.hp < trg.mhp * 0.65 && !trg.eyeout && trg.eternal)
         {
            trg.eyeout = true;
            trg.alter = 1;
            _root.soundy("plop.wav");
            trg2 = create(trg.xp,trg.yp,0,0,0,0,25);
            trg2.alt = 2;
            trg2.hp *= 3;
            trg2.fra = -100;
            trg2.d.gotoAndStop(9);
         }
         if(trg.eternal)
         {
            if(trg.firer <= 0)
            {
               trg.firer = 1;
            }
            f1 = trg.xbew;
            f2 = trg.ybew;
            f3 = Math.sqrt(f1 * f1 + f2 * f2);
            trg.firer += f3 + 0.1;
            if(trg.firer > 45)
            {
               trg.firer = 0;
               f3 = 7 / f3;
               f1 *= f3;
               f2 *= f3;
               ffmo(trg.xp,trg.yp,0,(- f2) * 0.6 - f1 * 0.5,f1 * 0.8 - f2 * 0.5,0,9,trg.s,true,false);
               ffmo(trg.xp,trg.yp,0,f2 * 0.6 - f1 * 0.5,(- f1) * 0.8 - f2 * 0.5,0,9,trg.s,true,false);
            }
         }
      case 31:
      case 23:
      case 21:
         if(trg.s == 21 || trg.s == 23)
         {
            if(trg.eternal)
            {
               if(!trg.d._currentframe != 9 && trg.coon <= 0)
               {
                  if(fra % 4 == 0 || fra % 2 == 0 && trg.gogo)
                  {
                     trg2 = parc("bloo",trg.xp + crand(),trg.yp + crand(Math.random() * 8));
                     trg2._yscale *= 0.7;
                     trg2._xscale = _loc0_;
                     colorit(trg2,0,0,0,0,50,0);
                  }
                  if(random(100) == 0 && !trg.gogo)
                  {
                     trg.coon = 1;
                     trg.ggh = true;
                     trg.hurt = false;
                  }
               }
            }
         }
         if((trg.s == 23 || trg.s == 21) && (trg.d._currentframe == 9 || trg.coon > 0))
         {
            bord();
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            if(trg.coon++ > 15)
            {
               if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,100) <= 0)
               {
                  trg.d.gotoAndStop(9);
                  trg.fire = 0;
                  trg.specoz = 0;
                  speco(trg);
                  trg.s = 23;
               }
               trg.coon = undefined;
            }
            else if(trg.fire++ > 80)
            {
               trg.s = 14;
               trg.fire = 0;
               attach(trg,14);
               trg.specoz = 23;
               trg.mhp *= 1.3;
               trg.hp = _loc0_;
               trg.alter = 2;
               trg.three = true;
               trg._yscale = _loc0_ = 160;
               trg._xscale = _loc0_;
               trg.d.gotoAndStop(4);
               trg.fra = fra;
               trg.ybb = _loc0_ = 0;
               trg.xbb = _loc0_;
               trg.flyai = true;
               speco(trg);
               _root.soundy("boil hatch.wav");
               trg.ggh = false;
            }
            if(trg.hurt && trg.fire > 5)
            {
               trg.hurt = false;
               trg.fire -= 45;
            }
            trg.hp += 0.02;
         }
         else
         {
            trg.ggh = fra2;
            trg.gonuts = trg.s == 23 || trg.s == 55;
            markhere(trg);
            if(trg.fire-- > 0)
            {
               trg.xbew *= 0.85;
               trg.ybew *= 0.85;
               trg.d.d.nextFrame();
               if(trg.d.d._currentframe == trg.d.d._totalframes)
               {
                  trg.fire = 0;
               }
               if(trg.d.d._currentframe == 8)
               {
                  f1 = 8;
                  if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
                  {
                     trg.ypp = 0;
                     if(trg.xpp > 0)
                     {
                        trg.xpp = f1;
                     }
                     else
                     {
                        trg.xpp = - f1;
                     }
                  }
                  else
                  {
                     trg.xpp = 0;
                     if(trg.ypp > 0)
                     {
                        trg.ypp = f1;
                     }
                     else
                     {
                        trg.ypp = - f1;
                     }
                  }
                  if(!trg.eternal)
                  {
                     trg2 = create(trg.xp,trg.yp,0,trg.xpp,trg.ypp,0,9,trg.s);
                     trg2.dy = -14;
                     trg2.fd = -0.08;
                  }
                  else
                  {
                     shots(trg.xp + trg.xpp,trg.yp + trg.ypp,trg.xpp,trg.ypp,false);
                  }
                  trg.xpp = undefined;
               }
            }
            else if(!trg.gogo)
            {
               if(trg.s == 21)
               {
                  randrunx(0.75);
               }
               else if(trg.s == 55)
               {
                  randrunx(0.85);
               }
               else if(trg.s == 31)
               {
                  if(trg.specoz == 23)
                  {
                     randrunx(1);
                  }
                  else
                  {
                     randrunx(0.72);
                  }
               }
               else
               {
                  randrunx(0.6);
               }
               trg.xbew *= 0.85;
               trg.ybew *= 0.7;
               if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
               {
                  f1 = 1;
                  sideflip(- trg.xbew);
               }
               else if(trg.ybew > 0)
               {
                  f1 = 2;
               }
               else
               {
                  f1 = 5;
               }
               trg.d.gotoAndStop(f1);
               if(trg.gonuts && (fra + trg.e) % 4 == 0)
               {
                  trg.gogo = _loc0_ = chaa(trg.s == 55);
                  if(_loc0_)
                  {
                     if(trg.s == 55)
                     {
                        if(trris + 20 <= fra)
                        {
                           trris = fra;
                           _root.soundy("leech" + random(3) + ".wav");
                        }
                        trg.xpp *= 1.55;
                        trg.ypp *= 1.55;
                     }
                     else
                     {
                        if(trris2 + 20 <= fra)
                        {
                           trris2 = fra;
                           _root.soundy("maggotcharge" + random(2) + ".wav");
                        }
                        trg.xpp *= 1.3;
                        trg.ypp *= 1.3;
                     }
                  }
               }
               else if(random(35) == 0 && trg.s == 31)
               {
                  if(trg.xbew * trg.xbew + trg.ybew * trg.ybew > 0.5)
                  {
                     trg.d.gotoAndStop(trg.d._currentframe + 5);
                     trg.xpp = trg.xbew;
                     trg.ypp = trg.ybew;
                     sideflip((- trg.xbew) * 10);
                     trg.fire = 50;
                  }
               }
            }
            else if(trg.gh)
            {
               trg.gogo = false;
               trg.ypp = _loc0_ = undefined;
               trg.xpp = _loc0_;
            }
            else
            {
               if(trg.s == 23)
               {
                  trg.xbew *= 0.8;
                  trg.ybew *= 0.8;
               }
               else
               {
                  trg.xbew *= 0.9;
                  trg.ybew *= 0.9;
               }
               trg.xbew += trg.xpp;
               trg.ybew += trg.ypp;
               outgrid(trg.til);
               if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
               {
                  f1 = 7;
                  sideflip(- trg.xbew);
                  trg.yp *= 0.9;
                  trg.yp += yenf * 0.1;
               }
               else
               {
                  if(trg.ybew > 0)
                  {
                     f1 = 6;
                  }
                  else
                  {
                     f1 = 8;
                  }
                  trg.xp *= 0.9;
                  trg.xp += xenf * 0.1;
               }
               if(trg.s == 55)
               {
                  if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
                  {
                     f1 = 1;
                  }
                  else if(trg.ybew > 0)
                  {
                     f1 = 2;
                  }
                  else
                  {
                     f1 = 5;
                  }
               }
               trg.d.gotoAndStop(f1);
            }
         }
         tip(0);
   }
}
function smarts5()
{
   switch(trg.s)
   {
      case 34:
         if(random(7) == 0)
         {
            splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.12);
         }
      case 54:
      case 29:
      case 86:
         if(trg.flyby)
         {
            if(trg.d._currentframe < 5)
            {
               trgnextd();
               trg.d.gotoAndStop(5);
               trg.xpp = player.xp;
               trg.ypp = player.yp;
               trg.f1 = 0;
            }
            else
            {
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
               if(trg.d._currentframe == 5 && trg.d.d._currentframe > 6 || trg.d._currentframe == 6 && trg.d.d._currentframe < 18)
               {
                  trg.f1 += 0.02;
                  trg.xp = trg.xpp * trg.f1 + trg.xp * (1 - trg.f1);
                  trg.yp = trg.ypp * trg.f1 + trg.yp * (1 - trg.f1);
                  trg.bh = false;
               }
               else
               {
                  trg.bh = true;
               }
               if(trg.d._currentframe == 5)
               {
                  trgnextd();
                  if(trg.d._currentframe == 1)
                  {
                     trg.d.gotoAndStop(6);
                  }
               }
               else
               {
                  trgnextd();
                  if(trg.d.d._currentframe == 19)
                  {
                     _root.soundy("Meat_impacts_" + random(3) + ".wav",200);
                     if(trg.s == 34 && trg.eternal)
                     {
                        quadf(trg.xp,trg.yp,9,1);
                     }
                     else
                     {
                        quadf(trg.xp,trg.yp,9);
                     }
                  }
                  if(trg.d._currentframe == 1)
                  {
                     trg.flyby = false;
                     trg.xpp = undefined;
                  }
               }
            }
         }
         else
         {
            randruny();
            trg.xbew *= 0.7;
            trg.ybew *= 0.7;
         }
         break;
      case 28:
         if(trg.specoz == 23 && altboss == 1 && trg.hp > trg.mhp * 0.4)
         {
            trg.hp += 20 / (100 + fra);
         }
         if(altboss && altboss != 2)
         {
            f1 = trg.hp / hps[trg.s];
            trg._yscale = _loc0_ = 70 + f1 * 35;
            trg._xscale = _loc0_;
            trg.xbew *= 1.1 - f1 * 0.14;
         }
         magget++;
         trg.mag = magget;
         if(trg.mag == 3)
         {
            magss--;
         }
         mags[magget] = trg;
         if(!firstmag)
         {
            firstmag = true;
         }
         else
         {
            if(magget >= 4)
            {
               trg.mag -= 3;
               trg.mags = [0,mags[4],mags[5],mags[6]];
            }
            else
            {
               trg.mags = [0,mags[1],mags[2],mags[3]];
            }
            if(fra - 20 < trg.fra)
            {
               trg.d.gotoAndStop(trg.mag + 9);
            }
            if(altboss == 2)
            {
               if(trg.mag < 3)
               {
                  trg.imba = true;
                  if(trg.eternal)
                  {
                     trg.refl = true;
                  }
               }
            }
            if(trg.d._currentframe >= 10)
            {
               trgnextd();
               trg.xbew = 0;
               trg.ybew = 0;
               if(trg.mag == 3 && !trg.wtfu)
               {
                  trg.wtfu = true;
                  trg.xp *= 0.65;
                  trg.yp *= 0.65;
                  trg.xp += trg.mags[2].xp * 0.35;
                  trg.yp += trg.mags[2].yp * 0.35;
               }
            }
            if(trg.d._currentframe < 10)
            {
               trg.d.gotoAndStop(trg.mag);
               if(Math.abs(trg.xbew) > 0.2 || Math.abs(trg.ybew) > 0.2)
               {
                  markhere(trg);
               }
               if(trg.mag != 1)
               {
                  trg2 = trg.mags[trg.mag - 1];
                  if(trg2.beenx.length > 0)
                  {
                     f10 = true;
                     while(f10)
                     {
                        f2 = 2;
                        if(trg.specoz == 9)
                        {
                           f1 = 15;
                        }
                        else if(trg.specoz == 23)
                        {
                           f1 = 20;
                        }
                        else if(trg.specoz > 18)
                        {
                           f1 = 16;
                        }
                        else
                        {
                           f1 = 17;
                        }
                        f1 -= trg.mag * f2;
                        f0 = Math.min(f1,trg2.beenx.length - 1);
                        enf = enfcheck(trg.xp,trg.yp,trg2.beenx[f0],trg2.beeny[f0],1000);
                        f2 = 10;
                        if(enf < f2 && f0 == f1)
                        {
                           trg.xp = trg2.beenx[f0];
                           trg.yp = trg2.beeny[f0];
                           f10 = false;
                        }
                        else
                        {
                           enf = f2 / enf;
                           xenf *= enf;
                           yenf *= enf;
                           trg.xp -= xenf;
                           trg.yp -= yenf;
                           trg2.beenx.push(trg2.beenx[f0] + xenf);
                           trg2.beeny.push(trg2.beeny[f0] + yenf);
                        }
                     }
                  }
               }
               else
               {
                  trg.d.gotoAndStop(1);
                  killshit(trg.nextl);
                  switch(trg.mode)
                  {
                     case 4:
                        f2 = 12;
                        trg.bomb = trg.bomb + 1;
                        if(trg.bomb == 3)
                        {
                        }
                        if(trg.bomb > 35)
                        {
                           trg.bomb = undefined;
                           trg.mode = 0;
                           trg.d.d.gotoAndStop(1);
                           hurt(trg,20);
                           bombfail(trg.xp,trg.yp,5);
                           trg.xpp = undefined;
                           f2 = 0;
                           _root.soundy("Monster_Roar_2.mp",50);
                        }
                        break;
                     case 2:
                        if(trg.gh)
                        {
                           trg.mode = 1;
                           trg.ypp = _loc0_ = undefined;
                           trg.xpp = _loc0_;
                        }
                        else
                        {
                           trg.xbew *= 0.9;
                           trg.ybew *= 0.9;
                           trg.xbew += trg.xpp * 3.7;
                           trg.ybew += trg.ypp * 3.7;
                        }
                        f2 = 6;
                        break;
                     case 3:
                        if(f1 < 0)
                        {
                           f2 = 9;
                        }
                        else
                        {
                           f2 = 3;
                        }
                        if(magss < -20)
                        {
                           trg.mode = 1;
                        }
                        break;
                     default:
                        if(altboss == 2 && trg.hp / trg.mhp < 0.3 && !trg.specoz)
                        {
                           if(trg.xbew > 0)
                           {
                              xenf = 1;
                           }
                           else
                           {
                              xenf = -1;
                           }
                           if(trg.ybew >= 0.1)
                           {
                              yenf = 1;
                           }
                           else
                           {
                              yenf = -1;
                           }
                           trg.xbew += xenf * 2;
                           trg.ybew += yenf * 2;
                        }
                        else
                        {
                           randrunx(1.5);
                           if(trg.charf + 50 <= fra)
                           {
                              if(chaa())
                              {
                                 trg.charf = fra;
                                 trg.mode = 2;
                                 _root.soundy("Monster_Roar_0.mp",100);
                              }
                           }
                           f1 = altboss == 2 && (!trg.specoz || trg.specoz == 23);
                           if(trg.specoz == 23)
                           {
                              f2 = 6 + random(4);
                           }
                           else
                           {
                              f2 = 5;
                           }
                           if(trg.mode != 2 && random(100 - nomag) == 0 && (ashut < f2 && !f1 || f1 && chubber < 5 && fra >= lastpoop) && (trg.specoz != 8 || ashut < 4 || random(4) == 0))
                           {
                              _root.soundy("Monster_Roar_1.mp",100);
                              lastpoop = fra + 100;
                              trg.mode = 3;
                              magss = 10;
                              nomag = 0;
                           }
                           nomag++;
                           nomag *= 0.99;
                        }
                        f2 = 0;
                  }
                  if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
                  {
                     sideflip(- trg.xbew);
                     f1 = 2;
                  }
                  else if(trg.ybew > 0)
                  {
                     f1 = 1;
                  }
                  else
                  {
                     f1 = 3;
                  }
                  if(trg.d.d._currentframe <= 12)
                  {
                     trg.d.d.gotoAndStop(f1 + f2);
                  }
               }
               enf = enfcheck(trg.xp,trg.yp,trg.beenx[0],trg.beeny[0],1000);
               while(enf > 2)
               {
                  enf = 2 / enf;
                  trg.beenx.unshift(trg.beenx[0] + xenf * enf);
                  trg.beeny.unshift(trg.beeny[0] + yenf * enf);
                  enf = enfcheck(trg.xp,trg.yp,trg.beenx[0],trg.beeny[0],1000);
               }
               if(trg.beenx.length > 40)
               {
                  f2 = [];
                  f3 = [];
                  a = 0;
                  while(a < 30)
                  {
                     f2[a] = trg.beenx[a];
                     f3[a] = trg.beeny[a];
                     a++;
                  }
                  trg.beenx = new Array(30);
                  trg.beeny = new Array(30);
                  a = 0;
                  while(a < 30)
                  {
                     trg.beenx[a] = f2[a];
                     trg.beeny[a] = f3[a];
                     a++;
                  }
               }
               if(trg.specoz == 8)
               {
                  trg.xbew *= 0.75;
                  trg.ybew *= 0.75;
               }
               else if(trg.specoz == 9)
               {
                  trg.xbew *= 0.86;
                  trg.ybew *= 0.86;
               }
               else
               {
                  trg.xbew *= 0.8;
                  trg.ybew *= 0.8;
               }
               if(trg.mag == 3 && (trg.specoz == 22 || trg.specoz == 23))
               {
                  for(i in hearts)
                  {
                     trg2 = hearts[i];
                     if(trg2.hp <= -10 || trg2.dones)
                     {
                        _root.soundy("Monster_Roar_2.mp",50);
                        hurt(trg,40);
                        hearts.splice(i,1);
                     }
                  }
               }
               if(fra > 8 && magss == 0 && trg.mag == 3)
               {
                  f1 = 5;
                  f2 = ingrid(trg.beenx[f1],trg.beeny[f1]);
                  outgrid(f2);
                  if(altboss == 2)
                  {
                     if(trg.specoz)
                     {
                        trg2 = create(trg.xp + crand(1),trg.yp + crand(1),0,0,0,0,92);
                        if(trg.specoz == 23)
                        {
                           trg2.hp *= 1.3;
                           trg2.specoz = 23;
                           trg2.eternal = true;
                           speco(trg2);
                        }
                        else
                        {
                           trg2._xscale = trg2._yscale = 50;
                           trg2.hp *= 0.7;
                        }
                     }
                     else
                     {
                        turd("breakblock2",f2,true);
                        chubber++;
                     }
                  }
                  else
                  {
                     if(altboss)
                     {
                        f1 = 61;
                     }
                     else if(trg.specoz == 8)
                     {
                        f1 = 30;
                     }
                     else if(trg.specoz == 9)
                     {
                        f1 = 31;
                     }
                     else
                     {
                        f1 = 23;
                     }
                     if(f1 != 30)
                     {
                        trg3 = create(trg.xp + crand(30),trg.yp + crand(30),0,0,0,0,f1);
                        _root.soundy("summonsound.wav",100);
                     }
                     else
                     {
                        _root.soundy("summonsound.wav",70);
                     }
                     trg2 = create(trg.xp + crand(1),trg.yp + crand(1),0,0,0,0,f1);
                     if(trg.specoz == 23)
                     {
                        if(altboss)
                        {
                           quadf(trg.xp,trg.yp,8,true);
                        }
                        else if(random(3) == 0 && etols < 3 + Math.min(4,fra * 0.001))
                        {
                           etols++;
                           trg2.eternal = true;
                           trg2.specoz = 23;
                           trg2._xscale = trg2._yscale *= 1.2;
                           speco(trg2);
                           if(mheart)
                           {
                              trg3.eternal = false;
                              trg3.specoz = undefined;
                              speco(trg3);
                           }
                        }
                        else if(mheart)
                        {
                           trg2.eternal = false;
                           trg2.specoz = undefined;
                           speco(trg2);
                           trg3.eternal = false;
                           trg3.specoz = undefined;
                           speco(trg3);
                        }
                     }
                  }
                  if(f1 > 0)
                  {
                     if(f1 == 30)
                     {
                        trg2.spl = 30;
                        trg2.specoz = 10;
                        trg2.outway = true;
                        speco(trg2);
                     }
                     xenf -= trg.xp;
                     yenf -= trg.yp;
                     trg2.xbew += xenf * 0.1;
                     trg2.ybew += yenf * 0.1;
                     trg2.d.d.gotoAndStop(1);
                     f1 = 0;
                     if(enfget(trg.xbew,trg.ybew) > 2)
                     {
                        if(Math.abs(xenf) > Math.abs(yenf))
                        {
                           sideflip(xenf);
                           f1 = 2;
                        }
                        else if(yenf > 0)
                        {
                           f1 = 3;
                        }
                        else
                        {
                           f1 = 4;
                        }
                        trg.d.d.gotoAndStop(f1);
                     }
                  }
               }
            }
         }
   }
}
function smartsx()
{
   bawssmart();
   bawssmart2();
   smarts3();
   smarts4();
   smarts5();
}
function breakdance(f0)
{
   if(enfget(trg.xbew,trg.ybew) > 1 || f0 == 79)
   {
      trg.s = 4;
      f3 = Math.random() * 15;
      var _loc1_ = 3;
      if(f0 == 79)
      {
         _loc1_ = 3;
         f3 *= 1.35;
      }
      if(f0 == 99)
      {
         _loc1_ = 6;
         f3 *= 3;
      }
      f3 = ingrid(Math.max(60,Math.min(560,trg.xp + trg.xbew * _loc1_ + crand(f3))),Math.max(170,Math.min(410,trg.yp + trg.ybew * _loc1_ + crand(f3))));
      outgrid(f3);
      if(levzz(f3) >= 1 && levzz(f3) < 2)
      {
         bloww(f3,trg.xbew,trg.ybew);
      }
      else
      {
         killshit(f3);
      }
      trg.s = f0;
   }
}
function ssmarts()
{
   switch(trg.s)
   {
      case 45:
         if(trg.d._currentframe == 5)
         {
            if(trg.d.d._currentframe == 5)
            {
               _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",150);
               if(_root.hardmode)
               {
                  quadf(trg.xp * 0.8 + 80,trg.yp * 0.8 + 64,10,true);
               }
            }
         }
         if(trg.specoz == 19)
         {
            if(trg.d._currentframe == 5)
            {
               if(trg.d.d._currentframe == 20)
               {
                  trg.d.d.gotoAndStop(38);
               }
            }
            if(trg.d._currentframe == 2)
            {
               if(trg.d.d._currentframe == 3 && fra > 60)
               {
                  enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
                  enf = -10 / enf;
                  xenf *= enf;
                  yenf *= enf;
                  shots(trg.xp + xenf,trg.yp + yenf,xenf,yenf,true);
               }
            }
            if(trg.d._currentframe == 20)
            {
               if(trg.d.d._currentframe == 48)
               {
                  trg.d.d.gotoAndStop(58);
               }
               if(trg.d.d._currentframe < 20 || trg.d.d._currentframe > 65)
               {
                  trg.d.d.nextFrame();
               }
            }
         }
         trg.bh = trg.d._currentframe == 20 && trg.d.d._currentframe > 27 && trg.d.d._currentframe < 62 || trg.d._currentframe == 19;
         if(trg.d._currentframe == 20 && trg.d.d._currentframe == 26 || trg.whu == 3)
         {
            trg.whu = 0;
            trg.dmg = 300;
            gosplash();
            _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav");
         }
         if(trg.weap)
         {
            if(trg.d._currentframe == 20)
            {
               if(trg.d.d._currentframe < 24)
               {
                  trg2 = trg.trg2;
                  if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,1000) > 0)
                  {
                     trg.xbew -= xenf * 0.03;
                     trg.ybew -= yenf * 0.03;
                  }
               }
               if(trg.d.d._currentframe == 74)
               {
                  trg.done = true;
               }
            }
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
         }
         else
         {
            mom[momet] = trg;
            momet++;
            trg.mom = momet;
            if(trg.xpp > 0)
            {
               trg.xp = trg.xpp;
               trg.yp = trg.ypp;
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
            }
            if(fra < 20)
            {
               if(trg.mom == mome)
               {
                  trg.d.gotoAndStop(2);
               }
               else
               {
                  trg.d.gotoAndStop(1);
               }
               if(mome == undefined && trg.mom == 5)
               {
                  momlo();
               }
               oldm = 3;
            }
            if(trg.d._currentframe != 19)
            {
               trgnextd();
            }
            if(trg.mom == 3)
            {
               if(moml - fra < 0)
               {
                  f1 = random(3);
                  if(fra < 50)
                  {
                     f1 = 0;
                  }
                  mome = -1;
                  if(trg.specoz == 19)
                  {
                     f1 = 0;
                     if(random(4) == 0 && oldm != 2)
                     {
                        f1 = 2;
                     }
                     oldm = -1;
                  }
                  if(oldm != f1)
                  {
                     switch(f1)
                     {
                        case 0:
                           _root.soundy("Mom_Vox_Grunt_" + random(4) + ".mp");
                           moml = fra + 80;
                           if(trg.specoz == 19)
                           {
                              moml -= 30;
                           }
                           for(i in mom)
                           {
                              if(i != 2)
                              {
                                 trg2 = mom[i];
                                 if(enfcheckx(trg2.xp,trg2.yp,player.xp,player.yp,100) || enfcheck(trg2.xp,trg2.yp,player.xp,player.yp,75))
                                 {
                                    mome = i;
                                 }
                              }
                           }
                           if(mome > -1 && fra > 50)
                           {
                              if(random(2) == 0)
                              {
                                 mom[mome].d.gotoAndStop(5);
                              }
                              else
                              {
                                 mom[mome].d.gotoAndStop(3);
                              }
                           }
                           else
                           {
                              trg.d.gotoAndStop(20);
                              trg.d.d.gotoAndStop(1);
                              trg._visible = true;
                              if(fra < 50)
                              {
                                 trg.xpp = trg.xp;
                                 trg.ypp = trg.yp;
                              }
                              else
                              {
                                 trg.xpp = player.xp;
                                 trg.ypp = player.yp;
                              }
                           }
                           break;
                        case 1:
                           if(ashut < 8)
                           {
                              moml = fra + 45;
                              z = 0;
                              while(z < random(3) + 2 && ashut < 8 + random(2))
                              {
                                 i = random(5);
                                 if(i != 2)
                                 {
                                    z++;
                                    ashut++;
                                    mom[i].d.gotoAndStop(random(2) + 3);
                                 }
                                 undefined;
                              }
                           }
                           break;
                        case 2:
                           momlo();
                     }
                     oldm = f1;
                  }
               }
               if(trg.d._currentframe < 20)
               {
                  trg._visible = false;
               }
            }
            else
            {
               if(trg.d._currentframe == 3 || trg.d._currentframe == 4)
               {
                  if(trg.d.d._currentframe == 3)
                  {
                     f0 = false;
                     if(trg.specoz == 23)
                     {
                        if(randrom(3) == 0)
                        {
                           f1 = [85,-16,-14,38,-12];
                        }
                        else
                        {
                           f1 = [10,12,14,15,16,18,20,21,23,24,25.5,26];
                        }
                     }
                     else if(trg.specoz)
                     {
                        f1 = [85,94,89,86,29.1];
                     }
                     else
                     {
                        f1 = [10,11,12,14,15,16,18,21,23,24,25.5,26];
                     }
                     xenf = trg.xp - 320;
                     yenf = trg.yp - 280;
                     enf = enfget(xenf,yenf);
                     enf = 18 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     f2 = random(f1.length);
                     f1 = f1[f2];
                     if(f1 < 0)
                     {
                        f1 = - f1;
                        f0 = true;
                     }
                     if(f1 == 85)
                     {
                        boil(false,2);
                     }
                     else
                     {
                        trg2 = create(trg.xp - xenf,trg.yp - yenf,0,- xenf,- yenf,0,f1);
                        if(f0)
                        {
                           trg2.specoz = 23;
                           trg2.eternal = true;
                           speco(trg2);
                           trg2._xscale = trg2._yscale *= 1.1;
                           if(f1 == 14)
                           {
                              trg2._xscale = trg2._yscale *= 2;
                              trg2.hp *= 2;
                           }
                        }
                        if(f1 == 20)
                        {
                           trg2._xscale = trg2._yscale = 50;
                           trg2.splity = true;
                           sizes[20] = 24;
                           trg2.xbew *= 0.2;
                           trg2.ybew *= 0.2;
                           trg2.hp *= 0.3;
                           trg2.nobar = true;
                        }
                     }
                     _root.soundy("summonsound.wav",f2 * 5 + 80);
                  }
               }
               if(trg.d._currentframe == 5)
               {
                  trg2 = mom[2];
                  if(trg.d.d._currentframe > 45)
                  {
                     trg2.d.gotoAndStop(18);
                  }
                  else if(trg.d.d._currentframe > 3)
                  {
                     trg2.whu = trg.d.d._currentframe;
                     trg2.d.gotoAndStop(19);
                     xenf = trg.xp - 320;
                     yenf = trg.yp - 280;
                     enf = enfget(xenf,yenf);
                     enf = 60 / enf;
                     trg2.xp = trg2.xpp = trg.xp - xenf * enf;
                     trg2.yp = trg2.ypp = trg.yp - yenf * enf;
                  }
               }
               trg.bh = trg.d._currentframe != 1;
               if(trg.xpp <= 0)
               {
                  for(a in door)
                  {
                     trg2 = door[a];
                     if(enfcheck(trg2._x,trg2._y,trg.xp,trg.yp,50))
                     {
                        trg.xpp = trg2._x;
                        trg.ypp = trg2._y;
                        trg.d._rotation = trg2._rotation + 90;
                        trg2._visible = false;
                     }
                  }
               }
            }
         }
         break;
      case 33:
         trg.d.nextFrame();
         if(!trg.holi)
         {
         }
         dang2 = trg;
         break;
      case 41:
         trg.randy = true;
         if(trg.eternal)
         {
            if(trg.bloo-- > 0)
            {
               if(fra2)
               {
                  trg2 = parc("bloo",trg.xp + crand(10),trg.yp + crand(10));
               }
            }
         }
         sideflip(trg.xbew,trg.d.d);
         if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
         {
            if(trg.xbew > 0)
            {
               f1 = 2;
            }
            else
            {
               f1 = 4;
            }
            trg.d.d.gotoAndStop(2);
         }
         else
         {
            if(trg.ybew > 0)
            {
               f1 = 1;
            }
            else
            {
               f1 = 3;
            }
            trg.d.d.gotoAndStop(1);
         }
         trg.d.hx.h.gotoAndStop(f1);
      case 44:
         if(trg.s == 44 && ashut == 0 && fra > 80 && trg.alter != 2)
         {
            trg.dones = true;
         }
         markhere(trg);
         if(!trg.gogo)
         {
            f2 = true;
            if(trg.s == 44)
            {
               if(trg.alter == 1)
               {
                  randrunx(1);
               }
               else
               {
                  enf = enfcheck(trg.xp,trg.yp,trg.xppp,trg.yppp,1000);
                  f1 = Math.min(enf / 10,1.8);
                  f2 = f1 < 0.4;
                  f1 /= enf;
                  trg.xbew -= xenf * f1;
                  trg.ybew -= yenf * f1;
               }
            }
            else
            {
               randrunx(0.75 + trg.alter * 0.25);
            }
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            if((fra + trg.e) % 3 == 0 && f2)
            {
               trg.gogo = chaa();
               if(trg.alter == 2 && trg.gogo)
               {
                  trg.xpp *= 1.65;
                  trg.ypp *= 1.65;
               }
               if(trg.alter == 2 && trg.s == 44 && trg.gogo)
               {
                  trg.xpp *= 1.65;
                  trg.ypp *= 1.65;
               }
            }
         }
         if(trg.gogo)
         {
            if(trg.gh)
            {
               trg.gogo = false;
               trg.xpp = trg.ypp = undefined;
            }
            else
            {
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
               trg.xbew += trg.xpp;
               trg.ybew += trg.ypp;
               outgrid(trg.til);
               if(trg.s == 44)
               {
                  f1 = 5;
                  if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
                  {
                     trg.yp *= 0.5;
                     trg.yp += yenf * 0.5;
                     if(trg.s == 44)
                     {
                        trg.ybew *= 0.5;
                     }
                  }
                  else
                  {
                     trg.xp *= 0.5;
                     trg.xp += xenf * 0.5;
                     if(trg.s == 44)
                     {
                        trg.xbew *= 0.5;
                     }
                  }
               }
               else if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
               {
                  trg.yp *= 0.9;
                  trg.yp += yenf * 0.1;
               }
               else
               {
                  trg.xp *= 0.9;
                  trg.xp += xenf * 0.1;
               }
            }
         }
         break;
      case 40:
         if(trg.eternal)
         {
            borderliner(5);
         }
         else
         {
            borderliner(3);
         }
         trg.d.d._rotation += enfget(trg.xbew,trg.ybew) * 4;
         trg.d.sh.d._rotation = trg.d.d._rotation;
         if((fra + trg.e) % 5 == 0)
         {
            splater(trg.xp,trg.yp + 5,1 + random(10),Math.random() * 0.7);
         }
         if(trg.eternal)
         {
            trg.fire += Math.random();
            if(trg.fire > 40)
            {
               trg.fire = 0;
               quadf(trg.xp + trg.xbew * 3,trg.yp + trg.ybew * 3,10,true);
            }
         }
         break;
      case 47:
         if(trg.alter == 2)
         {
            if(trg.bomber)
            {
               trg.xbew *= 0.9;
               trg.ybew *= 0.9;
            }
            if(fra % 7 == 0)
            {
               if(trg.bomber)
               {
                  if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,300))
                  {
                     trg.d.gotoAndStop(7);
                     enf = -10 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     shots(trg.xp,trg.yp,xenf,yenf,true);
                  }
                  if(trg.bobo = !trg.bobo)
                  {
                     if(random(2) == 0)
                     {
                        trg2 = create(trg.xp,trg.yp,0,0,0,0,4);
                        trg2.man = true;
                        trg2.outway = true;
                     }
                  }
               }
               else
               {
                  trg2 = parc("bloo",trg.xp,trg.yp,0,123);
               }
            }
            trg.xbew *= 0.95;
            trg.ybew *= 0.95;
         }
         else
         {
            trg.xbew *= 0.95;
            trg.ybew *= 0.95;
         }
         sideflip(trg.xbew);
         if(trg.d._currentframe < 3 || !trg.bomber)
         {
            walkframe();
         }
         else
         {
            trgnextd();
         }
         if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
         {
            trg.d.bo.gotoAndStop(2);
         }
         else
         {
            trg.d.bo.gotoAndStop(3);
         }
         if(trg.nohead)
         {
            firewalk();
         }
         else
         {
            if(trg.alter != 2)
            {
               if(trg.eternal)
               {
                  if(trg.hp < trg.mhp / 2)
                  {
                     trg.nohead = true;
                     trg.gosplash = true;
                     trg.hp = trg.mhp;
                     attach(trg,11);
                     trg.fast = true;
                     trg.outway = true;
                     splater(trg.xp,trg.yp,random(10) + 1,Math.random() + 0.6);
                     trg2 = create(trg.xp,trg.yp,0,0,-5,0,26);
                     trg2.alter = undefined;
                     trg2.specoz = 23;
                     speco(trg2);
                     trg2.mhp = trg2.hp *= 2;
                     trg2._xscale = trg2._yscale *= 1.35;
                     trg2.eternal = true;
                     trg2.minb = true;
                  }
               }
            }
            if(trg.eternal)
            {
               breakdance(trg.s);
            }
         }
         if(trg.alter == 2)
         {
            if(trg.eternal && !trg.bomber)
            {
               trg.hp -= 0.1;
               if(trg.fire == undefined)
               {
                  trg.fire = 0;
               }
               if(trg.fire++ > 70)
               {
                  trg.xbew *= 0.2;
                  trg.ybew *= 0.2;
                  trg.fire = 0;
                  if(ashut > 5)
                  {
                     f0 = 1;
                  }
                  else
                  {
                     f0 = 1 + random(3);
                  }
                  while(f0-- > 0)
                  {
                     f1 = 18;
                     var trg2 = create(trg.xp,trg.yp,0,crand(25),crand(25),0,f1);
                     trg2.fra -= 20;
                     trg2.die = true;
                     trg2.pbh = true;
                  }
                  _root.soundy("Boss_Lite_HIss.mp",100);
               }
            }
         }
         if(enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,10000))
         {
            if(linecheck(trg.xp,trg.yp,player.xp,player.yp))
            {
               enf = 0.65 / enf;
               trg.xbew -= xenf * enf;
               trg.ybew -= yenf * enf;
            }
            else
            {
               pathfind(trg,playx,playy,1.2);
            }
         }
         trg.tiletimer -= 30;
         trg.gridimer -= 30;
         break;
      case 46:
         trg.xbew *= 0.75;
         trg.ybew *= 0.75;
         walkframe();
         trgnextd();
         if(trg.d._currentframe < 3)
         {
            sideflip(trg.xbew);
            randrunx(1);
            if(random(50) == 0)
            {
               if(random(2) == 0 && ashut < 4 || Math.abs(trg.yp - player.yp) > 60 && trg.minb == 3)
               {
                  trg.d.gotoAndStop(6);
                  if(trg.eternal && trg.minb != 3 && trg.alter == 2)
                  {
                     trg.repss = 1;
                  }
               }
               else
               {
                  trg.d.gotoAndStop(5);
                  if(trg.eternal && trg.minb != 3)
                  {
                     if(trg.alter == 2)
                     {
                        trg.repss = 1;
                     }
                     else
                     {
                        trg.repss = 2;
                     }
                  }
               }
            }
         }
         else
         {
            if(trg.d.d._currentframe < 5)
            {
               sideflip(player.xp - trg.xp);
            }
            if(trg.alter == 3)
            {
               if(trg.d.d._currentframe > 5 && trg.d.d._currentframe < 15 && trg.d._currentframe != 6)
               {
                  z = trg.d.d._currentframe - 5;
                  trg2 = parc("bloo",trg.xp + trg.d._xscale * z / 4,trg.yp);
                  trg2._xscale *= 1.6 + z * 0.07;
                  trg2._yscale = trg2._xscale;
                  colorit(trg2,0,2,0,0,40,0);
               }
            }
            if(trg.d.d._currentframe == 16)
            {
               if(trg.repss-- > 0)
               {
                  trg.d.d.gotoAndStop(3);
                  if(trg.d.d._currentframe < 3)
                  {
                     sideflip(player.xp - trg.xp);
                  }
               }
            }
            if(trg.d.d._currentframe == 5)
            {
               if(trg.d._currentframe == 6)
               {
                  if(trg.alter == 3)
                  {
                     bossfire(3,true,10);
                     _root.soundy("heartout.wav",70);
                  }
                  else if(trg.alter == 2)
                  {
                     if(trg.specoz != 23 || random(2) == 0)
                     {
                        boil(true);
                        boil(true);
                        _root.soundy("Boss_Lite_Roar.mp",100);
                     }
                     else
                     {
                        xenf = trg.xp - player.xp;
                        yenf = trg.yp - player.yp;
                        enf = enfget(xenf,yenf);
                        sideflip(- xenf);
                        enf = -25 / enf;
                        xenf *= enf;
                        yenf *= enf;
                        f0 = 3 + random(2);
                        while(f0-- > 0)
                        {
                           var trg2 = create(trg.xp,trg.yp,0,xenf,yenf,0,18);
                           trg2.fra -= 20;
                           trg2.die = true;
                           trg2.pbh = true;
                           if(f0 != 0)
                           {
                              trg2.xbew += crand(5);
                              trg2.ybew += crand(5);
                           }
                        }
                        _root.soundy("Boss_Lite_HIss.mp",100);
                     }
                  }
                  else
                  {
                     trg2 = create(trg.xp + trg.d._xscale * 0.3,trg.yp,0,0,0,0,23);
                     _root.soundy("summonsound.wav",80);
                     _root.soundy("Monster_Grunt_2_" + abr() + ".mp",100);
                     trg2.apf = true;
                     trg2.gogo = true;
                     trg2.xpp = trg.d._xscale / 100;
                     trg2.ypp = 0;
                     trg.outway = true;
                     if(trg.eternal)
                     {
                        trg2.eternal = true;
                        trg2.specoz = 23;
                        speco(trg2);
                        trg2.mhp = trg2.hp *= 1 + _root.chaps * 0.15;
                     }
                  }
               }
               else
               {
                  if(trg.alter != 3)
                  {
                     if(trg.specoz == 23 && trg.alter == 2)
                     {
                        xenf = trg.xp - player.xp;
                        yenf = trg.yp - player.yp;
                        enf = enfget(xenf,yenf);
                        sideflip(- xenf);
                        enf = -10 / enf;
                        xenf *= enf;
                        yenf *= enf;
                        shots(trg.xp,trg.yp,xenf,yenf,true);
                     }
                     else
                     {
                        green();
                        if(trg.alter == 2)
                        {
                           green();
                        }
                     }
                  }
                  _root.soundy("heartout.wav",70);
               }
            }
         }
         break;
      case 53:
         trg.alt = Math.abs(player.xp - 320) > Math.abs(player.yp - 280) * 0.65;
         trg.xbew *= 0.75;
         trg.ybew *= 0.75;
         if(trg.alter == 2)
         {
            trg.flyby = true;
         }
         if(enfget(trg.xbew,trg.ybew) > 2)
         {
            if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
            {
               if(trg.alter == 2)
               {
                  trg.d.hx.bo.gotoAndStop(1);
               }
               else
               {
                  trg.d.hx.bo.gotoAndStop(2);
               }
            }
            else if(trg.alter == 2)
            {
               trg.d.hx.bo.gotoAndStop(2);
            }
            else
            {
               trg.d.hx.bo.gotoAndStop(3);
            }
         }
         else
         {
            trg.d.hx.bo.gotoAndStop(1);
         }
         f1 = plo;
         f2 = f1 == 3 || f1 == 1;
         if(!trg.alt && f2 || trg.alt && !f2)
         {
            f1 += 2;
            if(f1 > 4)
            {
               f1 -= 4;
            }
         }
         trg.fire--;
         if(player.fire > lpf)
         {
            if(trg.fire <= 0)
            {
               f3 = 10;
               xenf = yenf = 0;
               switch(f1)
               {
                  case 1:
                     xenf = 0;
                     yenf = f3;
                     break;
                  case 3:
                     xenf = 0;
                     yenf = - f3;
                     break;
                  case 2:
                     xenf = f3;
                     yenf = 0;
                     break;
                  case 4:
                     xenf = - f3;
                     yenf = 0;
               }
               if(trg.alter == 2)
               {
                  trg.fire = 30;
                  shots(trg.xp,trg.yp,xenf,yenf,true);
               }
               else
               {
                  shots(trg.xp,trg.yp,xenf,yenf);
               }
            }
         }
         lpf = player.fire;
         if(plox > 8)
         {
            f1 += 4;
         }
         trg.d.hx.h.gotoAndStop(f1);
         if(trg.d.hx.bo != undefined)
         {
            sideflip(trg.xbew,trg.d.hx.bo);
         }
         trgnextd();
         trg.xpp = trg.xp;
         trg.ypp = trg.yp;
         trg.xp = 640 - player.xp;
         trg.yp = 580 - player.yp;
         trg.xbew = - player.xbew;
         trg.ybew = - player.ybew;
         break;
      case 51:
         f1 = 0.25 + trg.tier * 0.1;
         if(tier == 3)
         {
            f1 = 0.35;
         }
         if(trg.ybew > 0)
         {
            f2 = f1;
         }
         else
         {
            f2 = - f1;
         }
         if(trg.xbew > 0)
         {
            f1 = f1;
         }
         else
         {
            f1 = - f1;
         }
         trg.xbew *= 0.9;
         trg.ybew *= 0.9;
         trg.xbew += f1;
         trg.ybew += f2;
         if(trg.eternal && trg.tier == 0)
         {
            if(fra5)
            {
               if(trg.fire <= 0)
               {
                  trg.fire = 0;
               }
               trg.fire += 0.5;
               f1 = 7;
               xenf = Math.sin(trg.fire) * f1;
               yenf = Math.cos(trg.fire) * f1;
               trg2 = ffmo(trg.xp,trg.yp,0,xenf + trg.xbew,yenf * 0.8 + trg.ybew,0,9,trg.s,true);
               if(trg.alter == 2)
               {
                  trg2.dm -= 3.5;
               }
               else
               {
                  trg2.dm -= 1;
               }
               sideflip(xenf);
            }
         }
         else
         {
            sideflip(trg.xbew);
         }
         break;
      case 52:
         trg.xbew *= 0.75;
         trg.ybew *= 0.75;
         if(enfget(trg.xbew,trg.ybew) < 1)
         {
            trg.d.bo.gotoAndStop(1);
         }
         else if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
         {
            trg.d.bo.gotoAndStop(2);
         }
         else
         {
            trg.d.bo.gotoAndStop(3);
         }
         sideflip(- trg.xbew);
         trgnextd();
         if(trg.d._currentframe < 3)
         {
            randrunx(1);
            if(random(50) == 0)
            {
               if(random(2) == 0)
               {
                  trg.d.gotoAndStop(6);
               }
               else
               {
                  trg.d.gotoAndStop(5);
               }
            }
         }
         else
         {
            if(trg.d._currentframe == 5)
            {
               if(trg.d.d._currentframe >= 20 && trg.d.d._currentframe <= 37)
               {
                  lasershowx((0.25 + 0.5 * (fra % 4)) * 3.141592653589793);
               }
               if(trg.eternal)
               {
                  if(trg.d.d._currentframe >= 20 && trg.d.d._currentframe <= 37)
                  {
                     if(trg.fire <= 0)
                     {
                        trg.fire = 0;
                     }
                     trg.fire += 0.5;
                     if(trg.alter == 2)
                     {
                        f1 = 9;
                     }
                     else
                     {
                        f1 = 7;
                     }
                     xenf = Math.sin(trg.fire) * f1;
                     yenf = Math.cos(trg.fire) * f1;
                     trg2 = ffmo(trg.xp,trg.yp,0,xenf + trg.xbew,yenf * 0.8 + trg.ybew,0,9,trg.s,true);
                     trg3 = ffmo(trg.xp,trg.yp,0,- xenf + trg.xbew,(- yenf) * 0.8 + trg.ybew,0,9,trg.s,true);
                     if(trg.alter == 2)
                     {
                        trg2.dm -= 3.5;
                        trg3.dm -= 3.5;
                     }
                     else
                     {
                        trg2.dm -= 1;
                        trg3.dm -= 1;
                     }
                  }
               }
               else if(trg.alter == 2 && trg.d.d._currentframe == 20)
               {
                  cirf(trg.xp,trg.yp - trg._yscale * 0.2,8,6);
               }
            }
            if(trg.d.d._currentframe == 5)
            {
               if(trg.d._currentframe == 6)
               {
                  anarch = 20;
                  if(trg.alter == 2)
                  {
                     anarch = 10;
                     analt = 5;
                  }
               }
            }
         }
         break;
      case 50:
         trg.f3 = 1;
         trg.xbew *= 0.75;
         trg.ybew *= 0.75;
         walkframe();
         if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
         {
            trg.d.bo.gotoAndStop(1);
         }
         else
         {
            trg.d.bo.gotoAndStop(2);
         }
         sideflip(- trg.xbew);
         trgnextd();
         if(trg.d._currentframe < 3)
         {
            randrunx(1);
            if(random(50) == 0)
            {
               if(random(3) == 0 && ashut < 3)
               {
                  trg.d.gotoAndStop(6);
               }
               else
               {
                  trg.d.gotoAndStop(5);
               }
            }
         }
         else
         {
            if(trg.d._currentframe == 5)
            {
               sideflip(100);
               f1 = 10;
               xenf = trg.xp - player.xp;
               yenf = trg.yp - player.yp;
               if(Math.abs(xenf) > Math.abs(yenf))
               {
                  yenf = 0;
                  if(xenf > 0)
                  {
                     xenf = f1;
                     f3 = 2;
                  }
                  else
                  {
                     xenf = - f1;
                     f3 = 4;
                  }
               }
               else
               {
                  xenf = 0;
                  if(yenf > 0)
                  {
                     f3 = 3;
                     yenf = f1;
                  }
                  else
                  {
                     f3 = 1;
                     yenf = - f1;
                  }
               }
               if(trg.d.d._currentframe < 6)
               {
                  trg.d.d.h.gotoAndStop(f3);
                  trg.f3 = f3;
               }
               else
               {
                  trg.d.d.h.gotoAndStop(f3 + 4);
                  trg.f3 = f3 + 4;
               }
            }
            if(trg.d.d._currentframe == 5)
            {
               if(trg.d._currentframe == 6)
               {
                  f1 = 29;
                  if(trg.alter == 2)
                  {
                     f1 = 86;
                  }
                  if(ashut == 1)
                  {
                     trg2 = spaw(trg.xp - 50,trg.yp,0,f1);
                     trg3 = spaw(trg.xp + 50,trg.yp,0,f1);
                  }
                  else
                  {
                     trg2 = spaw(trg.xp,trg.yp - 50,0,f1);
                     trg3 = spaw(trg.xp,trg.yp + 50,0,f1);
                  }
                  _root.soundy("summonsound.wav",120);
               }
               else if(trg.alter == 1)
               {
                  shots(trg.xp,trg.yp,- xenf,- yenf,true);
               }
               else
               {
                  shots(trg.xp,trg.yp,- xenf,- yenf,2);
               }
            }
         }
         break;
      case 48:
         if(trg.eternal && trg.alter == 2)
         {
            trg.s = 47;
            trg.bomber = true;
            break;
         }
         trg.xbew *= 0.85;
         trg.ybew *= 0.85;
         walkframe();
         if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
         {
            trg.d.bo.gotoAndStop(1);
         }
         else
         {
            trg.d.bo.gotoAndStop(2);
         }
         sideflip(trg.xbew);
         trgnextd();
         if(trg.d._currentframe < 3)
         {
            if(trg.gogo)
            {
               if(trg.gh)
               {
                  trg.gogo = false;
                  trg.ypp = _loc0_ = undefined;
                  trg.xpp = _loc0_;
               }
               else
               {
                  trg.xbew *= 0.8;
                  trg.ybew *= 0.8;
                  trg.xbew += trg.xpp * 1.5;
                  trg.ybew += trg.ypp * 1.5;
                  outgrid(trg.til);
                  if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
                  {
                     trg.yp *= 0.9;
                     trg.yp += yenf * 0.1;
                  }
                  else
                  {
                     trg.xp *= 0.9;
                     trg.xp += xenf * 0.1;
                  }
               }
            }
            else if(trg.trg2.s > 0)
            {
               trg2 = trg.trg2;
               if(trg2.dones)
               {
                  trg.trg2 = undefined;
                  trg.xpp = undefined;
               }
               siz = 130;
               if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,siz))
               {
                  enf = Math.min(1,siz - enf) / enf * 0;
                  trg.xbew += xenf * enf;
                  trg.ybew += yenf * enf;
                  randrunx(1);
                  trg2 = trg.trg2;
                  f1 = (trg.xp - trg.xpp) * (trg.xp - trg2.xp);
                  f2 = (trg.yp - trg.ypp) * (trg.yp - trg2.yp);
                  if(f1 > 50 || f2 > 50)
                  {
                     trg.xbew *= 0.5;
                     trg.ybew *= 0.5;
                     trg.xpp = undefined;
                  }
               }
            }
            else
            {
               randrunx(1);
               if(random(Math.max(60,enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000))) == 0)
               {
                  trg.d.gotoAndStop(5);
                  trg.xpp = 0;
                  trg.ypp = 0;
               }
               else
               {
                  trg.til = ingrid(trg.xp,trg.yp);
                  if(chaa())
                  {
                     if(levzz(ingrid(trg.xp + trg.xpp * 3,trg.yp + trg.ypp * 3)) < 0.9)
                     {
                        if(random(2) == 0)
                        {
                           trg.d.gotoAndStop(5);
                           if(trg.eternal && trg.alter != 2)
                           {
                              trg.reps = 1 + random(3);
                           }
                        }
                        else
                        {
                           if(trg.eternal)
                           {
                              trg.xpp *= 1.85;
                              trg.ypp *= 1.85;
                           }
                           trg.gogo = true;
                        }
                     }
                  }
               }
               if(trg.d._currentframe == 5)
               {
                  trg.xppp = trg.xpp;
                  trg.yppp = trg.ypp;
               }
            }
         }
         else
         {
            if(trg.reps > 0)
            {
               if(trg.d._currentframe == 5 && trg.d.d._currentframe == 10)
               {
                  trg.d.d.gotoAndStop(1);
                  trg.reps--;
               }
            }
            if(trg.d._currentframe == 5 && trg.d.d._currentframe == 5)
            {
               outgrid(ingrid(trg.xp,trg.yp));
               f1 = 4;
               if(trg.alter == 2)
               {
                  f1 = 5.040000005;
               }
               f2 = 1;
               if(trg.trg2 != undefined)
               {
                  f2 = trg.trg2.d.d._currentframe + 6;
                  if(f2 > 50)
                  {
                     f2 = 1;
                  }
               }
               trg.trg2 = create(trg.xp,trg.yp,0,trg.xppp * 10,trg.yppp * 10,0,f1);
               trg.trg2.d.d.gotoAndStop(f2);
               if(trg.xpp != 0 || trg.ypp != 0)
               {
                  trg.trg2.ph = true;
               }
               else
               {
                  trg.trg2.bh = false;
               }
               trg.xpp = undefined;
               trg.trg2.man = true;
               trg.trg2.outway = true;
            }
         }
         break;
      case 222:
         trg.fra = trg.fra + 1;
         trg._visible = true;
         f1 = 1 - trg.fra / 21;
         trg.xbew = trg.xppp * f1;
         trg.ybew = trg.yppp * f1;
         if(trg.fra > 42)
         {
            trg.done = true;
         }
         if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,20))
         {
            playerhurt(1,39);
         }
         if(trg.f222)
         {
            trg.d.gotoAndStop(1);
            if(trg.xbew * trg.d._xscale < 0)
            {
               trg.d._xscale *= -1;
            }
         }
         else if(trg.ybew < 0)
         {
            trg.d.gotoAndStop(2);
         }
         else
         {
            trg.d.gotoAndStop(3);
         }
   }
   smux();
}
function smux()
{
   switch(trg.s)
   {
      case 39:
         if((fra + trg.e) % 5 == 0)
         {
            splater(trg.xp,trg.yp + 5,1 + random(10),Math.random() * 0.7);
         }
      case 49:
         markhere(trg);
         if(trg.d._currentframe < 3)
         {
            if(trg.pathy)
            {
               pathfind(trg,playx,playy,1.3);
               if(fra5)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,60) > 0)
                  {
                     trg.pathy = false;
                  }
               }
            }
            else
            {
               randrunx(0.7);
            }
            walkframe();
            sideflip(trg.xbew);
            if((fra + trg.e) % 3 == 0)
            {
               f1 = true;
               if(trg.s == 49)
               {
                  f1 = random(10) == 0;
                  if(random(7) == 0)
                  {
                     f1 = true;
                     if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,70 + random(130)))
                     {
                        f1 = false;
                        trg.d.gotoAndStop(11);
                        sideflip(- xenf);
                     }
                  }
               }
               if(f1)
               {
                  if(!trg.eternal || trg.s != 49 || random(3) == 0)
                  {
                     if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,400))
                     {
                        if(Math.abs(xenf) > Math.abs(yenf))
                        {
                           sideflip(- xenf);
                           f1 = 5;
                        }
                        else if(yenf > 0)
                        {
                           f1 = 7;
                        }
                        else
                        {
                           f1 = 6;
                        }
                        trg.f1 = f1;
                        f1 += trg.alter * 3 - 3;
                        trg.d.gotoAndStop(f1);
                        trg.xpp = - xenf;
                        trg.ypp = - yenf;
                     }
                  }
               }
            }
            if(trg.eternal && trg.s == 49)
            {
               if(fra5)
               {
                  if(random(3) == 0)
                  {
                     if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,70 + random(130)) <= 0)
                     {
                        trg.pathy = true;
                     }
                  }
               }
            }
         }
         else
         {
            trgnextd();
            if(trg.d._currentframe == 11 && trg.s != 39)
            {
               trg.d.d.d.gotoAndStop(1);
               if(trg.d.d._currentframe == 14)
               {
                  if(trg.eternal)
                  {
                     enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
                     enf = -8.2 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     shots(trg.xp,trg.yp,xenf,yenf,23);
                  }
                  else
                  {
                     quadf(trg.xp,trg.yp,8,true);
                  }
                  if(trg.alter == 2)
                  {
                     bossfire(5,true);
                  }
               }
            }
            else if(trg.alter == 3)
            {
               if(trg.d.d._currentframe == 18)
               {
                  f2 = _loc0_ = Math.abs(trg.xpp) > Math.abs(trg.ypp);
                  if(_loc0_)
                  {
                     trg.ypp = 0;
                  }
                  else
                  {
                     trg.xpp = 0;
                  }
                  f1 = 16 / enfget(trg.xpp,trg.ypp);
                  xenf = trg.xpp * f1 * 1.4;
                  yenf = trg.ypp * f1;
                  trg2 = _loc0_ = create(trg.xp,trg.yp,0,xenf,yenf,0,222,trg.s);
                  trg.trg2 = _loc0_;
                  trg2.chu = true;
                  trg2.bh = false;
                  trg2.ggh = true;
                  trg2.apf = true;
                  trg2.fra = -1;
                  trg2.f222 = f2;
                  trg2.trg2 = trg;
                  trg2.xppp = xenf;
                  trg2.yppp = yenf;
                  trg2._visible = true;
                  if(trg.eternal)
                  {
                     trg2.specoz = 23;
                     trg2._yscale = _loc0_ = trg._yscale;
                     trg2._xscale = _loc0_;
                     speco(trg2);
                  }
               }
               if(trg.trg2 != null && trg.eternal)
               {
                  trg2 = parc("bloo",trg.trg2.xp + crand(10),trg.trg2.yp + crand(10),0,123);
               }
            }
            else if(trg.d.d._currentframe > 29 && trg.d.d._currentframe < 70)
            {
               if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
               {
                  if(trg.xpp > 0)
                  {
                     trg.xpp = 1000;
                     trg.ypp = 0;
                  }
                  else
                  {
                     trg.xpp = -1000;
                     trg.ypp = 0;
                  }
               }
               else if(trg.ypp > 0)
               {
                  trg.xpp = 0;
                  trg.ypp = 1000;
               }
               else
               {
                  trg.xpp = 0;
                  trg.ypp = -1000;
               }
               if(trg.eternal)
               {
                  if(trg.d.d._currentframe % 10 == 0)
                  {
                     f10 = 20;
                     if(trg.alter == 2)
                     {
                        f10 *= 2;
                     }
                     z = 0;
                     while(z < f10)
                     {
                        f0 = Math.random() * 0.5;
                        if(trg.alter == 2)
                        {
                           if(random(2) == 0)
                           {
                              f0 = - f0;
                           }
                        }
                        f1 = trg.xp + trg.xpp * f0 + crand(10);
                        f2 = trg.yp + trg.ypp * f0 + crand(10);
                        if(f1 > 60 && f1 < 580)
                        {
                           if(f2 > 150 && f2 < 410)
                           {
                              trg2 = parc("bloo",f1,f2,0,123);
                              if(trg.s == 49)
                              {
                                 if(trg.alter == 2)
                                 {
                                    trg2.longstay = 170;
                                 }
                                 else
                                 {
                                    trg2.longstay = 450;
                                 }
                              }
                           }
                        }
                        z++;
                     }
                  }
               }
               lasershow(trg);
            }
            if(trg.alter == 2)
            {
               trg.xpp = - trg.xpp;
               trg.ypp = - trg.ypp;
            }
            if(trg.d._currentframe < 3)
            {
               trg.xpp = undefined;
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         break;
      case 36:
         gurdy = true;
         for(a in ball)
         {
            trg2 = ball[a];
            if(trg2.flyai)
            {
               siz = 80;
               if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,siz))
               {
                  enf = (- (siz - enf)) * 0.03 / enf;
                  trg2.xbew += xenf * enf;
                  trg2.ybew += yenf * enf;
               }
            }
         }
         trgnextd();
         if(trg.d._currentframe == 1)
         {
            trg.idle = !trg.idle;
            if(trg.idle)
            {
               if(plah)
               {
                  trg.d.gotoAndStop(5);
                  plah = false;
               }
               else
               {
                  trg.d.gotoAndStop(6 + random(2));
               }
            }
            else if(random(3) != 0 && player.yp > 200 && ashut < 8 && trg.specoz != 11)
            {
               enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
               if(Math.abs(xenf) > Math.abs(yenf) || yenf > 0)
               {
                  if(xenf > 0)
                  {
                     f1 = 10;
                  }
                  else
                  {
                     f1 = 11;
                  }
               }
               else
               {
                  f1 = 9;
               }
               trg.d.gotoAndStop(f1);
            }
            else if(ashut < 14)
            {
               f1 = [8,12,13];
               trg.d.gotoAndStop(f1[random(f1.length)]);
               if(ashut > 15)
               {
                  trg.d.gotoAndStop(13);
               }
               if(Math.abs(trg.xp - player.xp) < 70 && player.yp < trg.yp)
               {
                  trg.d.gotoAndStop(12);
               }
            }
            else
            {
               trg.idle = true;
            }
         }
         if(trg.d.d.now)
         {
            switch(trg.d._currentframe)
            {
               case 8:
                  create(trg.xp + 60,trg.yp - 25,0,10,0,0,14);
                  _root.soundy("summonsound.wav",70);
                  _root.soundy("Boss_Bug_Hiss.mp",100);
                  break;
               case 12:
                  trg2 = create(trg.xp + 40,trg.yp - 65,0,0,-20,0,18);
                  trg3 = create(trg.xp - 40,trg.yp - 65,0,0,-20,0,18);
                  _root.soundy("summonsound.wav",100);
                  _root.soundy("Boss_Lite_HIss.mp",100);
                  trg2.die = true;
                  trg3.die = true;
                  trg2.hp -= 2;
                  trg3.hp -= 2;
                  if(Math.abs(trg.xp - player.xp) < 70 && player.yp < trg.yp)
                  {
                     trg2 = create(trg.xp + 40,trg.yp - 90,0,0,-20,0,18);
                     trg3 = create(trg.xp - 40,trg.yp - 90,0,0,-20,0,18);
                     _root.soundy("summonsound.wav",100);
                     _root.soundy("Boss_Lite_HIss.mp",100);
                     trg2.die = true;
                     trg3.die = true;
                     trg2.hp -= 2;
                     trg3.hp -= 2;
                  }
                  break;
               case 13:
                  trg2 = create(trg.xp + 42,trg.yp + 45,0,0,0,0,30);
                  trg3 = create(trg.xp - 42,trg.yp + 45,0,0,0,0,30);
                  _root.soundy("summonsound.wav",120);
                  trg2.boss = true;
                  trg3.boss = true;
                  if(trg.specoz == 23)
                  {
                     trg2.hp = trg2.mhp;
                     trg3.hp = trg3.mhp;
                     trg2.specoz = 23;
                     trg3.specoz = 23;
                     speco(trg2);
                     speco(trg3);
                     trg2._yscale *= 1.3;
                     trg2._xscale = _loc0_;
                     trg3._yscale *= 1.3;
                     trg3._xscale = _loc0_;
                     trg2.eternal = true;
                     trg3.eternal = true;
                  }
                  break;
               case 9:
                  shots(trg.xp + rand() * 30,trg.yp - 20,rand() * 3,10,true);
                  _root.soundy("Boss_Lite_Gurgle.mp",100);
                  break;
               case 10:
                  shots(trg.xp + 13,trg.yp - 18 - rand() * 30,-10,1 + rand() * 3,true);
                  _root.soundy("Boss_Gurgle_Roar.mp",100);
                  break;
               case 11:
                  shots(trg.xp - 13,trg.yp - 18 - rand() * 30,10,1 + rand() * 3,true);
                  _root.soundy("Boss_Gurgle_Roar.mp",100);
            }
            trg.d.d.now = false;
         }
         trg.xp = trg.xpp;
         trg.yp = trg.ypp;
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
   }
}
function telpx(f3)
{
   if(f3 == 2)
   {
      f2 = 120 + Math.random() * 120;
   }
   else
   {
      f2 = 220 * Math.random() + 120;
   }
   f1 = trg.xp + crand(f2);
   f2 = trg.yp + crand();
   if(f3 == 2)
   {
      f3 = enfcheck(f1,f2,player.xp,player.yp,700);
      if(f3)
      {
         f3 = f3 > 180;
      }
   }
   else if(!f3)
   {
      if(trg.alter != 2 || trg.s != 38)
      {
         f3 = !enfcheckx(f1,f2,player.xp,player.yp,400) && enfcheck(f1,f2,player.xp,player.yp,10000) > 200;
      }
      else
      {
         f3 = enfcheck(f1,f2,player.xp,player.yp,10000);
         f4 = f3;
         f3 = f3 > 100 && f3 < 230;
      }
   }
   else
   {
      f3 = enfcheck(f1,f2,player.xp,player.yp,10000);
      f3 = f3 > 130 && f3 < 1000;
   }
   if(f3)
   {
      f3 = ingrid(f1,f2);
      if(levzz(f3) < 0.5)
      {
         outgrid(f3);
         trg.xpp = xenf;
         trg.ypp = yenf;
      }
   }
}
function smartd()
{
   var _loc0_ = null;
   if((_loc0_ = trg.s) === 79)
   {
      trg.xbew *= 0.8;
      trg.ybew *= 0.8;
      if(trg.specoz)
      {
         trg.xbew *= 0.92;
         trg.ybew *= 0.92;
         if(!trg.alt)
         {
         }
      }
      if(trg.alt)
      {
         trg.ggh = true;
         trg2 = trg.trg2;
         i = 0;
         while(i < ball.length)
         {
            trg3 = ball[i];
            if(trg.s == trg3.s && trg3.alt && !trg3.dones)
            {
               if(trg3 != trg && trg3)
               {
                  enf = enfcheck(trg.xp,trg.yp,trg3.xp,trg3.yp,100);
                  if(enf > 0)
                  {
                     enf = (100 - enf) / enf * 0.01;
                     xenf *= enf;
                     yenf *= enf;
                     trg.xbew += xenf;
                     trg.ybew += yenf;
                     trg3.xbew -= xenf;
                     trg3.ybew -= yenf;
                  }
               }
            }
            i++;
         }
         trg3 = trg2.trg3;
         trg.xbew += crand(0.01);
         trg.ybew += crand(0.01);
         if(altboss == 2)
         {
            if(trg2.s != 79)
            {
               trg.dones = true;
            }
            trg.imba = true;
            bord(580,60,410,170);
            if(trg.d._currentframe == 12)
            {
               if(trgnextd())
               {
                  trg.d.gotoAndStop(7);
                  trg.fire = 60;
                  trg.ypp = _loc0_ = 0;
                  trg.xpp = _loc0_;
               }
               if(trg.d.d._currentframe > 15 && trg.d.d._currentframe < 50)
               {
                  lasershow(trg);
               }
            }
            else
            {
               if(trg.fire > -100)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,300))
                  {
                     enf = 0.65 / enf;
                     trg.xbew += xenf * enf;
                     trg.ybew += yenf * enf * 0.9;
                  }
               }
               else
               {
                  f1 = player.yp - trg.yp;
                  trg.ybew += absmax(f1 * 0.01,0.2);
               }
               trg.fire--;
               if(trg.fire < 0)
               {
                  if(random(30) == 0 && trg.fire > -100)
                  {
                     trg.fire = -101;
                     trg.ypp = _loc0_ = 0;
                     trg.xpp = _loc0_;
                  }
               }
               else if(random(40) == 0 && trg.fire < -180)
               {
                  trg.fire = 60;
               }
               trg.d.gotoAndStop(7);
               trg.onown = true;
               sideflip(- trg.xbew);
               markhere(trg);
               if(random(10) == 0 && trg.fire < 0)
               {
                  chaa(2);
                  if(trg.xpp != 0 && trg.ypp == 0)
                  {
                     trg.d.gotoAndStop(12);
                     sideflip((- trg.xpp) * 10);
                  }
               }
            }
         }
         else if(trg2.dones || altboss && trg2.trg3 != trg && trg2.hp < 60 || trg.onown)
         {
            bord(580,60,410,170);
            if(!trg.onown)
            {
               trg.onown = true;
               _root.soundy("Cute_Grunt_" + random(3) + ".mp",100);
            }
            if(trg2.trg3 == trg)
            {
               f0 = 1;
            }
            else
            {
               f0 = 0;
            }
            i = 0;
            while(i < 19)
            {
               trg3 = trg2["n" + i + " " + f0];
               trg3._visible = false;
               i++;
            }
            if(trg.d._currentframe <= 9)
            {
               trg.d.gotoAndStop(9);
               trg.ma = 8;
            }
            trg.xbew /= 0.85;
            trg.ybew /= 0.85;
            enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
            enf = 0.5 / enf;
            if(trg.eternal)
            {
               enf *= 1.5;
            }
            trg.xbew -= xenf * enf;
            trg.ybew -= yenf * enf;
            sideflip(- trg.xbew);
         }
         else
         {
            enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
            enf = 0.25 / enf;
            trg.xbew -= xenf * enf;
            trg.ybew -= yenf * enf;
            trgnextd();
            if(trg.d._currentframe <= 6)
            {
               trg.d.gotoAndStop(7);
            }
            firemode(300,5);
         }
      }
      else
      {
         b1 = false;
         if(trg.eternal)
         {
            breakdance(trg.s);
            if(trg.sp > 0)
            {
               enf = _loc0_ = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,10000);
               if(_loc0_)
               {
                  if(linecheck(trg.xp,trg.yp,player.xp,player.yp))
                  {
                     enf = trg.sp / enf;
                     trg.xbew *= 0.94;
                     trg.ybew *= 0.94;
                     trg.xbew -= xenf * enf;
                     trg.ybew -= yenf * enf;
                     b1 = true;
                     trg.gridtime -= 20;
                  }
               }
            }
         }
         if(trg.trg2 == undefined && !trg.gemsp)
         {
            trg.gemsp = true;
            trg.fire = 0;
            f0 = 1;
            if(trg.specoz == 23)
            {
               f0 = 2;
            }
            while(f0 > 0)
            {
               f0--;
               trg2 = create(trg.xp + f0 * 10,trg.yp - 8,0,0,0,0,trg.s);
               if(f0 == 0)
               {
                  trg.trg2 = trg2;
               }
               else
               {
                  trg.trg3 = trg2;
               }
               trg2.fra = -100;
               trg2.alt = true;
               trg2.outway = true;
               trg2.specoz = trg.specoz;
               speco(trg2);
               trg2.trg2 = trg;
               if(!altboss && trg.specoz != 3)
               {
                  i = 0;
                  while(i < 17)
                  {
                     trg3 = trg.attachMovie("necksegment2","n" + i + " " + f0,i + 2001312 + f0 * 20);
                     trg3.ballz = ballz;
                     i++;
                  }
               }
            }
         }
         if(trg.fire == 0)
         {
            trg.sp = 1.4;
            if(random(60) == 0 && (altboss != 2 || random(4) == 0))
            {
               trg.fire = trg.fire + 1;
               _root.soundy("Monster_Yell_B_" + random(2) + ".mp",100);
            }
            trg.d.gotoAndStop(1);
         }
         else
         {
            trg.fire = trg.fire + 1;
            if(trg.fire > 0)
            {
               trg.d.gotoAndStop(2);
               trg.sp += 0.04;
               trg.sp *= 0.98;
               if(trg.fire > 100)
               {
                  trg.fire = -100;
               }
            }
            else if(altboss == 2)
            {
               trg.d.gotoAndStop(1);
               trg.fire = 0;
            }
            else
            {
               trg.d.gotoAndStop(5);
               trg.sp = 0;
            }
         }
         if(altboss == 2)
         {
            trg.sp += 0.2;
            if(fra % 7 == 0)
            {
               trg2 = parc("bloo",trg.xp,trg.yp,0,123);
            }
         }
         if(!b1)
         {
            pathfind(trg,playx,playy,trg.sp);
         }
         if(altboss == 2)
         {
            trg.sp -= 0.2;
         }
         f1 = 0;
         if(altboss == 2)
         {
            f1 = 6;
         }
         else if(altboss)
         {
            f1 = 3;
         }
         if(enfget(trg.xbew,trg.ybew) > 3)
         {
            if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
            {
               trg.d.bo.gotoAndStop(3 + f1);
            }
            else
            {
               trg.d.bo.gotoAndStop(2 + f1);
            }
            sideflip(trg.xbew);
         }
         else
         {
            trg.d.bo.gotoAndStop(1 + f1);
         }
      }
   }
   smux2();
}
function gem(trg2, f0)
{
   if(trg.s == trg2.s && trg.specoz != 3 && !trg2.dones)
   {
      if(trg.eternal)
      {
         f1 = 20 / (240 + fra);
         if(trg.hp < trg.mhp)
         {
            trg.hp += f1;
         }
         if(trg2.hp < trg2.mhp)
         {
            trg2.hp += f1 * 2;
         }
      }
      enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,1000);
      if(xenf != 0)
      {
      }
      f3 = 76;
      if(altboss)
      {
         if(enf > 0 && !trg2.onown)
         {
            f2 = (enf - 20) / enf * 0.1;
            trg2.xbew += xenf * f2;
            trg2.ybew += yenf * f2;
         }
      }
      else if(enf > f3)
      {
         f2 = (enf - f3) / enf * 0.01;
         trg2.xbew += xenf * f2;
         trg2.ybew += yenf * f2;
      }
      f3 += 120;
      i = 0;
      while(i < 19)
      {
         var _loc2_ = trg["n" + i + " " + f0];
         f1 = (16 - i) / 17;
         _loc2_._x = (- xenf) * f1 - 6;
         f2 = Math.abs(i - 9) * 0.5;
         f2 = 16 - f2 * f2;
         f2 *= Math.max(0,f3 - enf) / f3;
         _loc2_._y = (- yenf) * f1 - 35 + f2 * 1.5 + i * 0.8;
         _loc2_._x /= Math.abs(trg._xscale / 100);
         _loc2_._y /= Math.abs(trg._yscale / 100);
         _loc2_._visible = true;
         if(yenf < 0)
         {
            _loc2_.swapDepths(80 - i - f0 * 20);
         }
         else
         {
            _loc2_.swapDepths(3 + i + f0 * 20);
         }
         if(i == 18)
         {
            _loc2_._visible = false;
         }
         i++;
      }
   }
   else
   {
      i = 0;
      while(i < 19)
      {
         _loc2_ = trg["n" + i + " " + f0];
         _loc2_._visible = false;
         i++;
      }
   }
}
function smux2()
{
   switch(trg.s)
   {
      case 78:
         if(trg.eternal)
         {
            if(lars < 5)
            {
               lars = 5;
            }
            if(trg.hp < trg.mhp && fra > 10)
            {
               f1 = 0.5;
               if(_root.locker[45])
               {
                  f1 = 0.75;
               }
               trg.hp += (300 + (trg.mhp - trg.hp) * f1) / (fra + 330) * 0.5;
               trg.hp = Math.min(trg.mhp,trg.hp);
            }
         }
         mheart = trg;
         trg.outway = true;
         trg.ggh = true;
         if(trg.eternal)
         {
            sizes[trg.s] = 20;
            if(trg.d._currentframe == 4 && trg.d.d._currentframe > 19)
            {
               trg.d.gotoAndStop(1);
            }
            if(!_root.locker[45])
            {
               if(trg.d._currentframe == 2 && trg.d.d._currentframe == 7)
               {
               }
            }
            if(trg.d._currentframe < 4 && fra > 30)
            {
               enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,100000);
               enf = -0.5 / enf;
               xenf *= enf;
               yenf *= enf;
               trg.xbew += xenf;
               trg.ybew += yenf;
            }
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            trg.xp = trg.xpp;
            trg.yp = trg.ypp;
         }
         f3 = Math.min(3,4 - Math.round(trg.hp / trg.mhp * 3 + 0.45));
         if(momstate == 3)
         {
            splater(trg.xp + crand() * 2,trg.yp + crand(Math.random() * Math.random() * 200) + 8,1 + random(10),Math.random() * 0.5 + 0.2);
         }
         if(momstate != f3)
         {
            momstate = f3;
         }
         if(trg.d._currentframe != 5 && (trg.d._currentframe != 4 || trg.d.d._currentframe > 30))
         {
            trg.d.gotoAndStop(momstate);
            if(trg.downbro-- < 0 && momstate != 3)
            {
               if(!trg.eternal)
               {
                  trg.d.gotoAndStop(5);
                  _root.soundy("heartin.wav");
               }
            }
         }
         else if(trg.d._currentframe == 5)
         {
            if(trg.fire < 40 || momstate == 3)
            {
               trg.downbro = 100;
               trg.d.gotoAndStop(4);
               _root.soundy("heartout.wav");
               _root.soundy("Mom_Vox_Filtered_Isaac_" + random(3) + ".mp");
            }
         }
         trg.bh = trg.d._currentframe != 5 && (trg.d._currentframe != 4 || trg.d.d._currentframe > 5);
         if(ashut < 2)
         {
            trg.fire--;
         }
         if(trg.eternal && ashut < 4 && !_root.locker[45])
         {
            trg.fire -= 0.05;
         }
         if(trg.eternal && ashut < 7)
         {
            trg.fire -= 0.04;
         }
         if((_loc0_ = momstate) === 3)
         {
            if(random(2) == 0 && fra % 23 == 0)
            {
               green(true,true);
            }
         }
         if(trg.fire < 0)
         {
            if(lmo != momstate)
            {
               trg.wave = 0;
            }
            f5 = _root.locker[45];
            if(f5)
            {
               switch(momstate)
               {
                  case 1:
                     f2 = [60,55,20,19];
                     if(trg.eternal)
                     {
                        f2[1] = 56;
                     }
                     break;
                  case 2:
                     f2 = [41,59,67,28];
                     break;
                  case 3:
                     f2 = [61,24,14,23];
               }
            }
            else
            {
               switch(momstate)
               {
                  case 1:
                     f2 = [60,59,24];
                     break;
                  case 2:
                     f2 = [55,24,27.4];
                     if(trg.eternal)
                     {
                        f2[0] = 56;
                     }
                     break;
                  case 3:
                     f2 = [25.5,61,14];
               }
            }
            f2 = f2[trg.wave];
            if(f2 == 60 && fra < 100)
            {
               f1 = 180;
            }
            else
            {
               f1 = 40;
            }
            trg.fire = 75;
            trg.wave = trg.wave + 1;
            lmo = momstate;
            _root.soundy("summonsound.wav",100 + momstate * 10);
            create(trg.xp + f1,trg.yp,0,0,0,0,f2);
            if(f2 != 20 && f2 != 67 && (f2 != 59 || !trg.eternal))
            {
               create(trg.xp - f1,trg.yp,0,0,0,0,f2);
               if(f2 == 19)
               {
                  create(trg.xp + f1,trg.yp + 30,0,0,0,0,f2);
                  create(trg.xp - f1,trg.yp + 30,0,0,0,0,f2);
                  create(trg.xp + f1,trg.yp + 60,0,0,0,0,f2);
                  create(trg.xp - f1,trg.yp + 60,0,0,0,0,f2);
               }
               else if(f2 != 60 && f2 != 59 && f2 != 24 && f2 != 27.4 && f2 != 25.5 && f2 != 56)
               {
                  f1 *= 0.8;
                  if(f2 != 28)
                  {
                     create(trg.xp,trg.yp + f1,0,0,0,0,f2);
                  }
                  create(trg.xp,trg.yp - f1,0,0,0,0,f2);
               }
            }
            if(trg.wave > 2 && !f5 || trg.wave > 3 && f5)
            {
               trg.wave = 0;
            }
         }
         if(trg.eternal)
         {
            if(trg.d._currentframe > 3)
            {
               trg.d.d._yscale = _loc0_ = 73.75;
               trg.d.d._xscale = _loc0_;
            }
            else
            {
               trg.d.d._yscale = _loc0_ = 59;
               trg.d.d._xscale = _loc0_;
            }
         }
         break;
      case 69:
         if(trg.specoz == 23)
         {
            healo = trg;
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               randrun();
               if(random(40) == 0 && enfcheckx(trg.xp,trg.yp,player.xp,player.yp,300))
               {
                  trg.d.gotoAndStop(5);
               }
               else if(random(140) == 0)
               {
                  trg.d.gotoAndStop(9);
               }
               else if(random(100) == 0)
               {
                  trg.d.gotoAndStop(7);
               }
               else if((random(50) == 0 && trg.specoz == 23 || random(50) == 0) && ashut < 3 + random(2) && (random(3) == 0 || !altboss))
               {
                  trg.d.gotoAndStop(8);
               }
               break;
            case 5:
               if(trg.d.d._currentframe == trg.d.d._totalframes - 1)
               {
                  trg.d.gotoAndStop(6);
                  if(trg.xpp > 0)
                  {
                     trg.xp = trg.xpp;
                     trg.yp = trg.ypp;
                  }
               }
               else
               {
                  telpx();
               }
               break;
            case 8:
               if(trg.d.d._currentframe == 22)
               {
                  if(trg.specoz == 23)
                  {
                     if(random(10) == 0)
                     {
                        f1 = 37.9;
                     }
                     else
                     {
                        f1 = 38;
                     }
                  }
                  else
                  {
                     f1 = 25;
                  }
                  noet = true;
                  trg2 = create(trg.xp,trg.yp,0,0,0,0,f1);
                  noet = false;
                  _root.soundy("summonsound.wav");
                  trg2.outway = true;
                  if(altboss && !trg.eternal)
                  {
                     trg2.alter = 2;
                  }
                  if(trg.specoz == 23)
                  {
                     trg2.specoz = 23;
                     speco(trg2);
                  }
               }
               break;
            case 9:
               if(trg.d.d._currentframe == 26)
               {
                  quadf(trg.xp,trg.yp,10,true);
               }
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 3)
                  {
                     trg.fire = 3;
                  }
                  if(trg.d.d._currentframe == 46)
                  {
                     if(trg.fire-- > 0)
                     {
                        trg.d.d.gotoAndStop(55);
                     }
                  }
                  if(trg.d.d._currentframe == 60)
                  {
                     if(trg.fire > 0)
                     {
                        trg.d.d.gotoAndStop(16);
                     }
                  }
               }
               break;
            case 7:
               if(trg.d.d._currentframe == 28)
               {
                  quadf(trg.xp,trg.yp,10);
               }
               if(trg.d.d._currentframe == 51)
               {
                  quadf(trg.xp,trg.yp,10,2);
               }
               if(trg.d.d._currentframe == 77)
               {
                  quadf(trg.xp,trg.yp,10);
               }
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 3)
                  {
                     trg.fire = 2;
                  }
                  if(trg.d.d._currentframe == 90)
                  {
                     if(trg.fire-- > 0)
                     {
                        trg.d.d.gotoAndStop(28);
                     }
                  }
                  if(trg.d.d._currentframe > 36 && trg.d.d._currentframe < 49 || trg.d.d._currentframe > 60 && trg.d.d._currentframe < 75)
                  {
                     trg.d.d.nextFrame();
                     trg.d.d.nextFrame();
                  }
               }
         }
         if(altboss)
         {
            sideflip((0.5 - trg.e % 2) * 10);
         }
         break;
      case 68:
         trgnextd();
         slug = trg;
         if(trg.specoz == 12 && fra % 13 == 0)
         {
            trg2 = parc("bloo",trg.xp,trg.yp);
            trg2._xscale *= 1.6;
            trg2._yscale = trg2._xscale;
            colorit(trg2,0.6,1.5,0.2,100,120,0);
         }
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               randrun();
               if(trg.specoz != 12 || random(3) == 0)
               {
                  if(random(23) == 0)
                  {
                     trg.d.gotoAndStop(10);
                  }
                  if(random(20) == 0)
                  {
                     trg.d.gotoAndStop(5 + random(2));
                  }
                  if(altboss)
                  {
                     if(Math.abs(trg.yp - 20 - player.yp - player.ybew * 5) < 20)
                     {
                        trg.d.gotoAndStop(12);
                     }
                     if(Math.abs(trg.xp - player.xp - player.xbew * 5) < 40 && trg.yp < player.yp)
                     {
                        trg.d.gotoAndStop(13);
                     }
                  }
               }
               break;
            case 13:
               if(trg.d.d._currentframe > 10 && trg.d.d._currentframe < 50)
               {
                  if(trg.d.d._currentframe == 12)
                  {
                     trg.ploo = trg.ploo + 1;
                  }
                  f8 = 15 - random(2) * 30;
                  trg.yp -= 20;
                  trg.xp -= f8;
                  lasershow(trg);
                  trg.yp += 20;
                  trg.xp += f8;
                  trg.xpp = 0;
                  trg.ypp = 1;
               }
               break;
            case 12:
               if(trg.d.d._currentframe > 10 && trg.d.d._currentframe < 50)
               {
                  if(trg.d.d._currentframe == 12)
                  {
                     trg.ploo = trg.ploo + 1;
                  }
                  trg.yp -= 20;
                  lasershow(trg);
                  trg.yp += 20;
                  trg.xpp = 1 - random(2) * 2;
                  trg.ypp = 0;
               }
               break;
            case 11:
               if(trg.d.d._currentframe == 28)
               {
                  if(altboss)
                  {
                     z = 0;
                     while(z < 10)
                     {
                        f1 = crand(random(100));
                        f2 = crand();
                        trg2 = parc("bloo",trg.xp + f1,trg.yp + f2);
                        trg2._xscale *= 2;
                        trg2._yscale = trg2._xscale;
                        z++;
                     }
                     if(trg.specoz)
                     {
                        green(false,false);
                        green(false,true);
                        green(false,true);
                        trg.ploo = trg.ploo + 1;
                     }
                     else
                     {
                        quadf(trg.xp,trg.yp,10,1);
                     }
                  }
                  else
                  {
                     cirf(trg.xp,trg.yp,10,12);
                  }
                  _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",100);
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 38)
               {
                  if(altboss)
                  {
                     if(trg.specoz)
                     {
                        green(false,true);
                        green(false,true);
                        trg.ploo = trg.ploo + 1;
                     }
                     else
                     {
                        quadf(trg.xp,trg.yp,10,1);
                     }
                  }
                  else
                  {
                     cirf(trg.xp,trg.yp,10,8);
                  }
                  _root.soundy("ForestBoss_Stomps" + random(3) + ".wav",80);
               }
               break;
            case 6:
               if(trg.d.d._currentframe > 30 && trg.d.d._currentframe < 40)
               {
                  if(trg.d.d._currentframe == 31)
                  {
                     _root.soundy("Sink Drain Gurgle.wav",100);
                     if(trg.specoz == 3)
                     {
                        spaw(trg.xp,trg.yp,50,23);
                        spaw(trg.xp,trg.yp,50,23);
                     }
                  }
                  f1 = crand(random(100));
                  f2 = crand();
                  if(altboss)
                  {
                     f1 *= 1.5;
                     f2 *= 1.5;
                  }
                  trg2 = parc("bloo",trg.xp + f1,trg.yp + f2);
                  trg2._xscale *= 2;
                  trg2._yscale = trg2._xscale;
                  if(!altboss)
                  {
                     colorit(trg2,0.6,1.5,0.2,100,120,0);
                  }
                  else
                  {
                     trg2._xscale *= 1.3;
                     trg2._yscale *= 1.3;
                  }
               }
               break;
            case 10:
               if(trg.d.d._currentframe == 30)
               {
                  enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
                  if(enf > 0)
                  {
                     enf = 0.03333333333333333;
                     trg.xbew = (- xenf) * enf;
                     trg.ybew = (- yenf) * enf;
                  }
               }
         }
         trg.bh = _loc0_ = (trg.d._currentframe != 10 || trg.d.d._currentframe < 29) && (trg.d._currentframe != 11 || trg.d.d._currentframe > 27);
         if(_loc0_)
         {
            if(trg.specoz == 12)
            {
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
            }
            else
            {
               trg.xbew *= 0.6;
               trg.ybew *= 0.6;
            }
         }
         trg.flyby = !trg.bh;
         f3 = Math.min(3,4 - Math.round(trg.hp / hps[trg.s] * 3 + 0.45));
         if(trg.specoz == 23)
         {
            f3 = Math.min(3,4 - Math.round(trg.hp / hps[trg.s] * 5 + 0.45));
            if(altboss)
            {
               if(ashut < 5 && _root.slugeye > 2)
               {
                  _root.slugeye = _root.slugeye - 1;
                  trg.ploo--;
               }
               f3 = -3 + trg.ploo;
            }
         }
         if(altboss)
         {
            f1 = random(10);
         }
         else
         {
            f1 = 21 + random(10);
         }
         splater(trg.xp + crand() * 2,trg.yp + crand(random(20)) + 8,f1,Math.random() * 0.5 + 0.2);
         if((_root.slugeye < f3 && fra > 30 && trg.specoz != 13 && (!altboss || trg.specoz == 23) || (trg.specoz == 13 || altboss && trg.specoz != 23)) && _root.slugeye < 3)
         {
            _root.slugeye = _root.slugeye + 1;
            f1 = crand(30);
            f2 = crand();
            _root.soundy("plop.wav");
            noet = true;
            trg2 = create(trg.xp + f1,trg.yp + f2,0,f1 * 0.4,f2 * 0.4,0,25);
            noet = false;
            trg2.alt = true;
            trg2.fra = -100;
            trg2.d.gotoAndStop(9);
            if(trg.specoz == 23)
            {
               trg2.hp *= 5;
            }
            else
            {
               trg2.imba = true;
            }
         }
         if(altboss)
         {
            z = 0;
            while(z < 15)
            {
               trg2 = trg.d.d["s" + z];
               colorit(trg2,0.7,0.1,0.1,30,0,0);
               z++;
            }
         }
         break;
      case 67:
         trg.ggh = true;
         duked = 65 + Math.sin(fra * 0.02) * 5;
         trg.xp = Math.min(580,Math.max(60,trg.xp));
         if(trg.xp == 580)
         {
            trg.xbew = -1;
         }
         if(trg.xp == 60)
         {
            trg.xbew = 1;
         }
         trg.yp = Math.min(410,Math.max(180,trg.yp));
         if(trg.yp == 410)
         {
            trg.ybew = -1;
         }
         if(trg.yp == 180)
         {
            trg.ybew = 1;
         }
         duke = trg;
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if(trg.xbew > 0)
         {
            xenf = 1;
         }
         else
         {
            xenf = -1;
         }
         if(trg.ybew >= 0.1)
         {
            yenf = 1;
         }
         else
         {
            yenf = -1;
         }
         if(altboss)
         {
            f1 = 0.8;
            if(trg.specoz == 19)
            {
               f1 = 1.1;
            }
            else if(trg.specoz)
            {
               f1 = 0.5;
            }
            else
            {
               f1 = 0.8;
            }
         }
         else
         {
            f1 = 0.4;
         }
         trg.xbew += xenf * f1;
         trg.ybew += yenf * f1;
         if(trg.specoz == 6)
         {
            trg.xbew *= 0.9;
            trg.ybew *= 0.9;
         }
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               if(random(40) == 0 && dukes + ashut < 9 && trg.specoz != 19)
               {
                  trg.d.gotoAndStop(5);
               }
               else if(random(70) == 0 && ashut - dukes * 0.5 < 5 && trg.specoz != 19)
               {
                  trg.d.gotoAndStop(6);
               }
               else if(random(45) == 0 && dukes > 4 && ashut - dukes < 5 && trg.specoz != 5 || (trg.specoz == 5 || altboss) && random(70) == 0 || trg.specoz == 19 && random(20) == 0)
               {
                  trg.d.gotoAndStop(7);
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 20)
               {
                  _root.soundy("Monster_Grunt_2_" + abr() + ".mp",100);
                  trg2 = [];
                  f1 = 5;
                  if(trg.specoz == 16)
                  {
                     trg2 = create(trg.xp,trg.yp + 20,0,0,0,0,25);
                     trg2.duke = true;
                  }
                  else
                  {
                     trg2.push(create(trg.xp + f1 * 2,trg.yp + 20,0,0,0,0,18));
                     trg2.push(create(trg.xp,trg.yp + 20,0,0,0,0,18));
                     if(altboss)
                     {
                        if(random(2) == 0)
                        {
                           boil(true);
                        }
                     }
                     else
                     {
                        trg2.push(create(trg.xp - f1 * 2,trg.yp + 20,0,0,0,0,18));
                     }
                     for(z in trg2)
                     {
                        trg2[z].die = true;
                        trg2[z].duke = true;
                        trg2[z].fra = -20;
                     }
                  }
               }
               break;
            case 6:
               if(trg.d.d._currentframe == 18)
               {
                  _root.soundy("Monster_Grunt_1_" + abr() + ".mp",100);
                  trg2 = [];
                  f5 = 5;
                  if(altboss)
                  {
                     bossfire(10,true);
                  }
                  else
                  {
                     if(trg.specoz == 6)
                     {
                        trg2.push(create(trg.xp,trg.yp + 20,0,0,0,0,61));
                     }
                     else if(trg.specoz == 5)
                     {
                        trg2.push(create(trg.xp,trg.yp + 20,0,0,0,0,80));
                     }
                     else
                     {
                        trg2.push(create(trg.xp,trg.yp + 20,0,0,0,0,18));
                     }
                     for(z in trg2)
                     {
                        trg2[z].fra = -20;
                        trg2[z].die = true;
                        if(!trg.specoz)
                        {
                           trg2[z].d._xscale = trg2[z].d._yscale = 125;
                           trg2[z].hp *= 1.8;
                        }
                     }
                  }
               }
               break;
            case 7:
               if(trg.send = trg.d.d._currentframe == 17)
               {
                  if(trg.specoz == 5)
                  {
                     cirf(trg.xp,trg.yp,7,8);
                     trg.send = false;
                  }
                  else if(altboss)
                  {
                     cirf(trg.xp,trg.yp,8,8);
                  }
                  _root.soundy("Monster_Grunt_4_" + abr() + ".mp",100);
               }
         }
         dukes = 0;
   }
}
function devl()
{
   trg._visible = trg.d._currentframe != 1;
   if(trg.d._currentframe < 8)
   {
      trg.d.gotoAndStop(9);
      trg.xp = player.xp;
      trg.yp = player.yp;
      trg2 = trg.trg2;
      siz = 111;
      if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,siz))
      {
         enf = (siz - enf) / enf;
         xenf *= enf;
         yenf *= enf;
         trg.xp += xenf;
         trg.yp += yenf;
      }
      if(ashut < 4 && random(2) == 0)
      {
         f1 = 55.1;
         if(trg.eternal)
         {
            if(lars++ > 2)
            {
               lars = 0;
               f1 = 81;
            }
         }
         trg2 = spaw(player.xp,player.yp,200,f1);
         if(trg.eternal && f1 == 81)
         {
            trg2._xscale = trg2._yscale = 70;
            trg2.mhp = trg2.hp *= 0.3;
            trg2.nobar = true;
         }
      }
      if(random(2) == 0)
      {
         _root.soundy("satan stomp " + random(3) + ".mp3");
      }
   }
   if(trg.trg3 != undefined)
   {
      if(trg.hp < trg.mhp)
      {
         trg.trg3.hp -= trg.mhp - trg.hp;
         trg.hp = trg.mhp;
         if(trg.trg3.hp < 0)
         {
            trg.trg3.done = true;
            trg.done = true;
            momkill();
         }
      }
   }
   trg.bh = trg.d._currentframe == 9 && trg.d.d._currentframe > 27 && trg.d.d._currentframe < 62;
   if(trg.d._currentframe == 9 && trg.d.d._currentframe == 26)
   {
      trg.dmg = 300;
      gosplash();
      _root.soundy("Hellboss_Groundpound_" + random(2) + ".wav");
   }
}
function smarties()
{
   switch(trg.s)
   {
      case 84:
         if(!trg.eternal)
         {
         }
         if(!trg.app)
         {
            trg.app = true;
            _root.soundy("satan appear.mp");
         }
         if(trg.d._currentframe == 3 && trg.d.d._currentframe == 17)
         {
            _root.soundy("satan blast.mp",50);
         }
         if(trg.d._currentframe == 8 && trg.d.d._currentframe == 83)
         {
            _root.soundy("satan grow.mp",50);
         }
         trg.ybew *= 0.8;
         trg.xbew *= 0.8;
         trgnextd();
         trg.alter = 2;
         if(trg.pow == 5)
         {
            devl();
         }
         else
         {
            if(trg.pow == undefined)
            {
               trg.pow = 1;
               trg.fire = 0;
               if(trg.pow < 3)
               {
                  trg.bh = false;
                  trg.d.gotoAndStop(1);
                  trg.til = ingrid(trg.xp,trg.yp + 80);
                  levz[trg.til] = 1;
               }
            }
            sati = trg;
            switch(trg.pow)
            {
               case 1:
                  levz[trg.til] = 2;
                  if(trg.fire++ > 130)
                  {
                     trg.fire = 0;
                     trg.pow = trg.pow + 1;
                     xenf = 50;
                     yenf = 110;
                     create(trg.xp,trg.yp + yenf,0,0,0,0,81);
                     create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,55.1);
                     create(trg.xp - xenf,trg.yp + yenf,0,0,0,0,55.1);
                     _root.soundy("satan blast.mp");
                     _root.soundy("summonsound.wav",200);
                  }
                  if(plh)
                  {
                     plh = false;
                     trg.d.gotoAndStop(2);
                  }
                  break;
               case 2:
                  if(helps == 1)
                  {
                     if(trg.fire++ > 25)
                     {
                        if(trg.d._currentframe != 3)
                        {
                           _root.soundy("satan rise up.mp");
                           trg.d.gotoAndStop(3);
                        }
                        if(trg.d.d._currentframe > 54)
                        {
                           trg.pow = trg.pow + 1;
                        }
                     }
                  }
                  levz[trg.til] = 1;
                  break;
               case 3:
                  mhelps = 1;
                  trg.bh = true;
                  levz[trg.til] = 0;
                  if(trg.d._currentframe < 4)
                  {
                     trg.d.gotoAndStop(4);
                  }
                  trg.yp = Math.max(165,trg.yp);
                  switch(trg.d._currentframe)
                  {
                     case 4:
                        yenf = Math.max(305,player.yp * 0.93) - trg.yp - 140;
                        xenf = player.xp - trg.xp;
                        xenf1 = player.xp + player.xbew * 25 - trg.xp;
                        if(xenf * xenf1 < 0 && yenf > -70 && (trg.llo != 6 || random(10) == 0) || trg.llo == 7 && Math.abs(xenf) < 40 && random(3) == 0)
                        {
                           trg.d.gotoAndStop(6);
                           _root.soundy("satan charge up.mp");
                           trg.llo = 6;
                        }
                        else if(random(15) == 0 || random(3) == 0 && (trg.llo == 7 || trg.llo == 6))
                        {
                           trg.d.gotoAndStop(5);
                           trg.llo = 5;
                        }
                        else if(Math.abs(xenf) > 100 || yenf < 0)
                        {
                           trg.xbew += absmax(xenf,15) * 0.1;
                           trg.ybew += absmax(yenf,7) * 0.1;
                        }
                        else if(Math.abs(xenf) > 40 && Math.abs(xenf1) < 200 && yenf >= 0)
                        {
                           trg.d.gotoAndStop(7);
                           _root.soundy("satan charge up.mp",50);
                           trg.llo = 7;
                        }
                        break;
                     case 5:
                        if(trg.eternal)
                        {
                           yenf = Math.max(305,player.yp * 0.93) - trg.yp - 140;
                           xenf = player.xp - trg.xp;
                           trg.xbew += absmax(xenf,15) * 0.03;
                           trg.ybew += absmax(yenf,7) * 0.03;
                        }
                        if(trg.d.d._currentframe == 56)
                        {
                           enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
                           if(enf > 300 && random(3) != 0)
                           {
                              trg.d.d.gotoAndStop(12);
                           }
                        }
                        if(trg.d.d._currentframe == 15 || trg.d.d._currentframe == 36)
                        {
                           enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
                           if(trg.d.d._currentframe == 15)
                           {
                              f1 = true;
                              _root.soundy("satan spit.mp",100);
                           }
                           else
                           {
                              f1 = 2;
                              _root.soundy("satan spit 2.mp",100);
                           }
                           if(enf > 300)
                           {
                              enf = -10 / enf;
                           }
                           else
                           {
                              enf = -8.2 / enf;
                           }
                           xenf *= enf;
                           yenf *= enf;
                           shots(trg.xp,trg.yp,xenf,yenf,f1);
                        }
                        break;
                     case 6:
                        if(trg.d.d._currentframe > 20 && trg.d.d._currentframe < 48)
                        {
                           trg.xpp = 0;
                           trg.ypp = 1;
                           v1 = 20;
                           lasershow(trg);
                           trg.xp -= v1;
                           lasershow(trg);
                           trg.xp += v1 + v1;
                           lasershow(trg);
                           trg.xp -= v1;
                        }
                        break;
                     case 7:
                        if(trg.d.d._currentframe > 18 && trg.d.d._currentframe < 46)
                        {
                           trg.xpp = 0;
                           trg.ypp = 1;
                           v1 = 85;
                           trg.xp -= v1;
                           lasershow(trg);
                           trg.xp += v1 + v1;
                           lasershow(trg);
                           trg.xp -= v1;
                        }
                  }
                  break;
               case 4:
                  if(trg.app != 2)
                  {
                     trg.app = 2;
                     _root.soundy("satan hurt.mp");
                  }
                  devl();
                  if(trg.trg2 == undefined && trg.d.d._currentframe == 50 && trg.d._currentframe == 9)
                  {
                     trg.trg2 = _loc0_ = create(player.xp,player.yp,0,0,0,0,84);
                     trg2 = _loc0_;
                     trg2.pow = 5;
                     trg2._visible = false;
                     trg2.trg3 = _loc0_ = trg;
                     trg2.trg2 = _loc0_;
                  }
            }
         }
         break;
      case 83:
         if(fra % 3 == 0 && trg.specoz == 23 && (trg.greeny || trg.hp < trg.mhp * 0.5) && random(4) != 0)
         {
            trg2 = parc("bloo",trg.xp,trg.yp);
            trg2._xscale *= 1.2;
            trg2._yscale = trg2._xscale;
            trg2.gotoAndStop(20);
            if(trg.greeny)
            {
               colorit(trg2,0,2,0,0,40,0);
            }
            else
            {
               trg2.gotoAndStop(90);
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if(trg.specoz == 23 && !trg.greeny)
         {
            trg.hp += 0.03 / (1 + fra * 0.001);
         }
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               trg.xp = Math.min(580,Math.max(60,trg.xp));
               randrun();
               sideflip(trg.xbew);
               f1 = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               if(random(30) == 0 && f1 < 200 || trg.specoz == 23 && !trg.greeny && random(50) == 0)
               {
                  trg.d.gotoAndStop(7);
                  if(trg.specoz == 23 && !trg.greeny)
                  {
                     trg.xo = 0;
                     trg.yo = 0;
                  }
               }
               else if(random(120) == 0 || Math.abs(yenf) < 20 && random(80) == 0)
               {
                  _root.soundy("Monster_Yell_A_" + random(3) + ".mp",100);
                  sideflip(player.xp - trg.xp);
                  trg.d.gotoAndStop(5);
                  trg.xpp = trg.xp;
                  trg.ypp = trg.yp;
                  trg.gogo = 3;
                  trg.bh = _loc0_ = true;
                  trg._visible = _loc0_;
               }
               break;
            case 7:
               if(trg.specoz == 23 && !trg.greeny)
               {
                  if(trg.d.d._currentframe >= 13 && trg.d.d._currentframe < 31)
                  {
                     enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 8,player.yp + player.ybew * 8,10000);
                     f1 = true;
                     enf = enfget(xenf,yenf);
                     enf = -9.2 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     if(trg.d.d._currentframe == 13)
                     {
                        _root.soundy("Blood_Laser" + random(2) + ".mp");
                     }
                     else
                     {
                        xenf *= 0.3;
                        yenf *= 0.3;
                        xenf += trg.xo * 0.7;
                        yenf += trg.yo * 0.7;
                     }
                     trg.xo = xenf;
                     trg.yo = yenf;
                     ffmo(trg.xp,trg.yp + 5,0,xenf * 1.4,yenf * 1.4,0,9,trg.s,true);
                  }
               }
               else if(trg.d.d._currentframe == 13)
               {
                  enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
                  f1 = true;
                  _root.soundy("Monster_Grunt_2_" + abr() + ".mp",100);
                  enf = enfget(xenf,yenf);
                  enf = -9.2 / enf;
                  xenf *= enf;
                  yenf *= enf;
                  shots(trg.xp,trg.yp,xenf,yenf,f1);
               }
               break;
            case 6:
               trg.xbew = trg.d._xscale * 0.18;
               if(trg.specoz == 23 && !trg.greeny && random(100) == 0)
               {
                  trg.gogo--;
               }
               if(trg.gogo > 0)
               {
                  f1 = false;
                  if(trg.xp > 619)
                  {
                     trg.xp = 10;
                     f1 = true;
                  }
                  else if(trg.xp < 21)
                  {
                     trg.xp = 630;
                     f1 = true;
                  }
                  if(f1)
                  {
                     f1 = 95;
                     trg.yp += f1;
                     if(trg.yp > 430)
                     {
                        trg.yp -= f1 * 3;
                     }
                     trg.gogo--;
                  }
               }
               else if((trg.xp - trg.ypp) * trg.xbew > 0)
               {
                  trg.d.gotoAndStop(1);
               }
         }
         break;
      case 82:
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               randrunx(1);
               sideflip(trg.xbew);
               walkframe(3);
               if(random(40) == 0)
               {
                  trg.d.gotoAndStop(5);
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 9)
               {
                  green();
                  _root.soundy("heartout.wav",100);
               }
         }
         break;
      case 64:
         b1 = allets;
         allets = false;
         trg.xp = Math.min(580,Math.max(60,trg.xp));
         if(trg.specoz == 17)
         {
            spidboss = true;
         }
         if(trg.specoz == 23 && !trg.whut)
         {
            trg.hp += 50 / (100 + fra);
         }
         if(fra % 3 == 0 && trg.specoz != 17)
         {
            splater(trg.xp + crand(),trg.yp + crand(random(20)),trg.spl + 1 + random(10),Math.random() * 0.5 + 0.4);
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if(trg.specoz == 23)
         {
            f1 = 0.65;
         }
         else
         {
            f1 = 0.5;
         }
         if((trg.whut || trg.hp / trg.mhp < f1) && trg.d._currentframe < 7)
         {
            if(!trg.whut)
            {
               trg.gosplash = true;
               trg.whut = true;
               if(trg.specoz == 23)
               {
                  trg2 = spaw(trg.xp,trg.yp,0,83);
                  trg2.specoz = 23;
                  trg2.greeny = true;
                  trg2.hp = trg.hp * 0.65;
                  trg2.mhp = trg.mhp;
                  speco(trg2);
               }
            }
            trg.d.gotoAndStop(7);
         }
         if(fra % 7 == 0)
         {
            trg2 = parc("bloo",trg.xp,trg.yp);
            trg2._xscale *= 2;
            trg2._yscale = trg2._xscale;
            if(trg.specoz == 17)
            {
               colorit(trg2,0,0,0,235,235,235);
            }
            else
            {
               colorit(trg2,0,2,0,0,40,0);
            }
         }
         trg.f10 = false;
         switch(trg.d._currentframe)
         {
            case 7:
               trg.xp = Math.min(580,Math.max(60,trg.xp));
               randrun();
               if(random(40) == 0 && ashut < 4)
               {
                  trg.d.gotoAndStop(9);
               }
               else if(random(20) == 0)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,230))
                  {
                     sideflip(player.xp - trg.xp);
                     trg.d.gotoAndStop(8);
                  }
               }
               break;
            case 1:
            case 2:
               randrunx(1);
               sideflip(trg.xbew);
               walkframe(3);
               if(random(40) == 0 && ashut < 4)
               {
                  trg.d.gotoAndStop(6);
               }
               else if(random(20) == 0)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,230))
                  {
                     sideflip(player.xp - trg.xp);
                     trg.d.gotoAndStop(5);
                  }
               }
               break;
            case 6:
               if(trg.d.d._currentframe == 25)
               {
                  _root.soundy("Monster_Grunt_5.mp",100);
                  xenf = crand(10);
                  yenf = crand();
                  if(trg.specoz == 17)
                  {
                     create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,29.1);
                  }
                  else
                  {
                     trg2 = create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,23 + random(2) * 8);
                     trg3 = create(trg.xp - xenf,trg.yp - yenf,0,0,0,0,23 + random(2) * 8);
                     if(trg.specoz == 23)
                     {
                     }
                  }
                  _root.soundy("summonsound.wav",120);
               }
               break;
            case 9:
               if(trg.specoz == 17)
               {
                  if(trg.d.d._currentframe == 19)
                  {
                     boil();
                     _root.soundy("Wheezy_Cough_" + random(3) + ".mp",100);
                  }
               }
               else if(trg.d.d._currentframe == 25)
               {
                  _root.soundy("Wheezy_Cough_" + random(3) + ".mp",100);
                  xenf = crand(10);
                  yenf = crand();
                  trg2 = create(trg.xp + trg.d._xscale * 0.4 + xenf,trg.yp + yenf,0,0,0,0,18);
                  trg3 = create(trg.xp + trg.d._xscale * 0.4 - xenf,trg.yp - yenf,0,0,0,0,18);
                  trg3.die = _loc0_ = true;
                  trg2.die = _loc0_;
                  trg3.fra = _loc0_ = -20;
                  trg2.fra = _loc0_;
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 22)
               {
                  trg.f10 = true;
               }
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 30)
                  {
                     if(trg.firee-- > 0)
                     {
                        trg.d.d.gotoAndStop(16);
                     }
                  }
                  if(trg.d.d._currentframe == 3)
                  {
                     trg.firee = 4;
                  }
               }
               break;
            case 8:
               if(trg.d.d._currentframe == 9)
               {
                  trg.f10 = true;
               }
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 23)
                  {
                     if(trg.firee-- > 0)
                     {
                        trg.d.d.gotoAndStop(7);
                     }
                  }
                  if(trg.d.d._currentframe == 3)
                  {
                     trg.firee = 1;
                  }
               }
         }
         if(trg.f10)
         {
            if(trg.specoz == 17)
            {
               trg.s = 11;
               cirf(trg.xp,trg.yp - 50,8,6);
               trg.s = 64;
            }
            else
            {
               green();
            }
         }
         allets = b1;
         break;
      case 63:
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if((trg.whut || trg.hp / trg.mhp < 0.3) && trg.d._currentframe < 8)
         {
            if(!trg.whut)
            {
               trg.gosplash = true;
               trg.whut = true;
               trg.fire = 0;
            }
            trg.d.gotoAndStop(8);
         }
         switch(trg.d._currentframe)
         {
            case 8:
            case 9:
               firemode(300,8);
               splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.6 + 0.6);
               if(trg.fire <= 0)
               {
                  enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                  enf = 0.5 / enf;
                  trg.xbew -= xenf * enf;
                  trg.ybew -= yenf * enf;
               }
               break;
            case 1:
            case 2:
               randrun();
               if((random(40) == 0 || Math.abs(trg.yp - player.yp) < 20 && ashut < 3 && trg.specoz == 23) && (ashut < 3 || trg.specoz))
               {
                  trg.d.gotoAndStop(5);
               }
               else if((Math.abs(trg.yp - player.yp) < 20 && (Math.abs(trg.xp - player.xp) > 100 || trg.specoz != 23) || trg.specoz == 7 && random(4) == 0) && random(5) == 0 && trg.speczo != 23)
               {
                  _root.soundy("Monster_Yell_A_" + random(3) + ".mp",100);
                  sideflip(player.xp - trg.xp);
                  trg.d.gotoAndStop(6);
                  if(trg.specoz == 23)
                  {
                     trg.xpp = player.xp;
                     trg.ypp = player.yp;
                     if(player.xp < trg.xp)
                     {
                        trg.xpp -= 100;
                     }
                     else
                     {
                        trg.xpp += 100;
                     }
                     trg.xpp = Math.min(480,Math.max(200,trg.xpp));
                     trg.gogo = true;
                  }
                  else
                  {
                     trg.xpp = trg.xp;
                     trg.ypp = trg.yp;
                     trg.gogo = true;
                  }
               }
               break;
            case 5:
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 5)
                  {
                     trg.fire = 0;
                     if(ashut > 1 + random(2))
                     {
                        trg.fire = 1 + random(30);
                     }
                  }
                  if(trg.d.d._currentframe == 25 || (trg.d.d._currentframe == 27 || trg.d.d._currentframe == 29) && trg.fire != 0)
                  {
                     _root.soundy("Monster_Grunt_5.mp",100);
                     if(trg.fire != 0)
                     {
                        trg.s = 11;
                        cirf(trg.xp,trg.yp - 33,8,3,(trg.fire + trg.d.d._currentframe) * 0.2);
                        trg.s = 63;
                     }
                     else
                     {
                        xenf = crand(50);
                        yenf = crand();
                        b1 = allets;
                        allets = false;
                        trg2 = create(trg.xp + xenf,trg.yp + yenf,0,xenf * 0.2,yenf * 0.2,0,14);
                        trg2.fra -= 20;
                        trg2.specoz = 23;
                        speco(trg2);
                        trg2.hp -= 3;
                        trg3 = create(trg.xp + yenf,trg.yp - xenf,0,yenf * 0.2,(- xenf) * 0.2,0,14.1);
                        trg3.fra -= 20;
                        trg3.specoz = 23;
                        trg3.hp -= 3;
                        speco(trg3);
                        if(ashut < 3)
                        {
                           trg4 = create(trg.xp - xenf,trg.yp - yenf,0,(- xenf) * 0.2,(- yenf) * 0.2,0,14);
                           trg4.fra -= 20;
                           trg4.specoz = 23;
                           speco(trg4);
                           trg4.hp -= 3;
                           if(ashut < 2)
                           {
                              trg5 = create(trg.xp - yenf,trg.yp + xenf,0,(- yenf) * 0.2,xenf * 0.2,0,14 + random(2) * 0.1);
                              trg5.fra -= 20;
                              trg5.specoz = 23;
                              speco(trg5);
                              trg5.hp -= 3;
                           }
                        }
                        allets = b1;
                        _root.soundy("summonsound.wav",80);
                     }
                  }
               }
               else if(trg.d.d._currentframe == 25)
               {
                  _root.soundy("Monster_Grunt_5.mp",100);
                  if(trg.specoz == 7)
                  {
                     trg.s = 11;
                     cirf(trg.xp,trg.yp - 33,8,6);
                     trg.s = 63;
                  }
                  else
                  {
                     xenf = crand(50);
                     yenf = crand();
                     create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,14);
                     _root.soundy("summonsound.wav",80);
                  }
               }
               break;
            case 7:
               if(trg.specoz)
               {
                  trg.ybew -= absmax((trg.yp - player.yp) / 100,0.4);
               }
               trg.xbew = trg.d._xscale * 0.18;
               if(!trg.gogo || trg.specoz == 23)
               {
                  if((trg.xp - trg.xpp) * trg.xbew > 0)
                  {
                     if(trg.xp < 520 && trg.xp > 150)
                     {
                        if(trg.specoz == 23)
                        {
                           trg.d.gotoAndStop(5);
                           trg.d.d.gotoAndStop(19);
                           trg.fire = random(50) + 1;
                        }
                        else
                        {
                           trg.d.gotoAndStop(1);
                        }
                     }
                     else if(trg.fire-- < 0)
                     {
                        trg.fire = 10;
                        trg.gogo = true;
                        trg.xpp = 300;
                     }
                  }
               }
               if(trg.gogo)
               {
                  if(trg.xp > 619)
                  {
                     trg.xp = 0;
                     trg.gogo = false;
                  }
                  else if(trg.xp < 21)
                  {
                     trg.xp = 640;
                     trg.gogo = false;
                  }
               }
         }
         break;
      case 62:
         f14 = 33;
         if(altboss)
         {
            if(trg.d._currentframe == 6 || trg.d._currentframe == 10)
            {
               trg.d._yscale = _loc0_ = 85;
               trg.d._xscale = _loc0_;
            }
            else
            {
               trg.d._yscale = _loc0_ = 65;
               trg.d._xscale = _loc0_;
            }
            f14 = 26;
         }
         wormet++;
         trg.worm = wormet;
         worm[wormet] = trg;
         if(trg.worm == 1)
         {
            if(trg.d._currentframe == 8 || trg.d._currentframe == 9)
            {
               trg.xppp = 0;
               trgnextd();
               trg.bh = true;
               if(trg.d._currentframe == 8 && trg.d.d._currentframe > 88 || trg.d._currentframe == 9 && trg.d.d._currentframe > 55)
               {
                  trg.bh = false;
               }
               trg._visible = true;
               trg.ybew = _loc0_ = 0;
               trg.xbew = _loc0_;
               trg.dy = 0;
               if(trg.d._currentframe == 1)
               {
                  trg.gogo = 3;
                  trg._visible = false;
               }
               if(trg.d.d._currentframe == 46 && trg.d._currentframe == 8)
               {
                  _root.soundy("Boss_Lite_HIss.mp",100);
                  bossfire(15,true);
               }
               else if(trg.d._currentframe == 9)
               {
                  if(trg.d.d._currentframe == 23)
                  {
                     if(!altboss)
                     {
                        _root.soundy("Monster_Roar_2.mp",100);
                     }
                     else
                     {
                        _root.soundy("Cute_Grunt_2.mp",80);
                     }
                  }
                  if(trg.d.d._currentframe == 23 || (trg.d.d._currentframe == 24 && trg.specoz != 23 || trg.d.d._currentframe == 25) && !altboss)
                  {
                     if(trg.specoz == 16)
                     {
                        cirf(trg.xp,trg.yp - 20,8,6);
                     }
                     else if(trg.specoz == 23)
                     {
                        if(trg.d.d._currentframe == 25 || altboss)
                        {
                           if(trg.fire == undefined)
                           {
                              trg.fire = 0;
                           }
                           trg.fire = trg.fire + 1;
                           if(altboss)
                           {
                              f1 = 5;
                           }
                           else
                           {
                              f1 = 2;
                           }
                           if(trg.fire < f1)
                           {
                              trg.d.d.gotoAndStop(18);
                           }
                           else
                           {
                              trg.fire = 0;
                           }
                        }
                        green(true,true);
                     }
                     else
                     {
                        green();
                     }
                  }
               }
            }
            else
            {
               if(!trg.whut)
               {
                  trg.beenx = [trg.xp];
                  trg.beeny = [trg.yp];
                  trg.beenf = [35];
                  trg.xpp = 320 - trg.xp;
                  trg.ypp = 280 - trg.yp;
                  trg.gogo = true;
                  trg.whut = true;
               }
               if(trg.ybew < -0.5)
               {
                  trg.d.gotoAndStop(2);
               }
               else
               {
                  trg.d.gotoAndStop(1);
               }
               if(!enfcheck(trg.xp,trg.yp,trg.beenx[0],trg.beeny[0],3) || trg.dy > 10)
               {
                  trg.beenx.unshift(trg.xp);
                  trg.beeny.unshift(trg.yp);
                  trg.beenf.unshift(trg.dy);
               }
               if(trg.beenx.length > 80)
               {
                  f2 = [];
                  f3 = [];
                  f4 = [];
                  a = 0;
                  while(a < 50)
                  {
                     f2[a] = trg.beenx[a];
                     f3[a] = trg.beeny[a];
                     f4[a] = trg.beenf[a];
                     a++;
                  }
                  trg.beenx = new Array(50);
                  trg.beeny = new Array(50);
                  trg.beenf = new Array(50);
                  a = 0;
                  while(a < 50)
                  {
                     trg.beenx[a] = f2[a];
                     trg.beeny[a] = f3[a];
                     trg.beenf[a] = f4[a];
                     a++;
                  }
               }
               if(trg.gogo && trg.gogo != 2)
               {
                  if(random(2) == 0 && fra > 100 && trg.gogo != 3 && (!altboss || random(2) == 0))
                  {
                     trg.gogo = false;
                     if(random(2) == 0 && !altboss)
                     {
                        trg.d.gotoAndStop(8);
                     }
                     else
                     {
                        trg.d.gotoAndStop(9);
                     }
                  }
                  else
                  {
                     enf = enfget(trg.xpp,trg.ypp);
                     trg.zp = -2 - enf * 0.02;
                     enf = 8 / enf;
                     trg.xpp *= enf;
                     trg.ypp *= enf;
                     trg.xppp = trg.xp;
                     trg.yppp = trg.yp;
                     trg.lasx = fra;
                     trg.dy = 10;
                     trg.gogo = false;
                     trg.rem = true;
                     trg.xbew = trg.xpp;
                     trg.ybew = trg.ypp;
                     f1 = 100;
                     if(altboss)
                     {
                        f1 = 70;
                     }
                     _root.soundy("Maggot_Burst_Out_" + random(2) + ".wav",f1);
                  }
               }
               trg.dy += trg.zp;
               trg.zp += 0.4;
               if(trg.dy < f14)
               {
                  trg.bh = true;
                  if(trg.dy > 10 && trg.rem && trg.zp > 0)
                  {
                     trg.rem = false;
                     trg.xppp = trg.xp;
                     trg.yppp = trg.yp;
                     trg.lasx = fra + 5;
                     f1 = 100;
                     if(altboss)
                     {
                        f1 = 70;
                     }
                     _root.soundy("Maggot_Enter_Ground_" + random(2) + ".wav",f1);
                  }
                  trg.gogo = 2;
                  trg._visible = trg.dy < 23;
               }
               else
               {
                  trg._visible = false;
                  trg.bh = false;
                  trg.dy = f14;
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,10000);
                  f1 = enf;
                  trg.xbew *= 0.95;
                  trg.ybew *= 0.95;
                  enf = (250 - enf) / enf * 0.003;
                  trg.xbew += xenf * enf;
                  trg.ybew += yenf * enf;
                  enfcheck(trg.xp,trg.yp,320,280,10000);
                  enf = Math.min(200,enf) / enf * 0.002;
                  trg.xbew -= xenf * enf;
                  trg.ybew -= yenf * enf;
                  if(trg.zp - f1 / 20 > 15 && trg.gogo == 2 && f1 > 100)
                  {
                     trg.xpp = player.xp;
                     trg.ypp = player.yp;
                     trg.xpp -= trg.xp;
                     trg.ypp -= trg.yp;
                     trg.gogo = true;
                  }
               }
            }
         }
         else if(trg.worm == 7 && trg.specoz != 23 || trg.specoz == 23 && trg.worm == 9)
         {
            trg.bh = false;
            f1 = worm[1].xppp;
            if(f1 > 0)
            {
               trg.ybew = _loc0_ = 0;
               trg.xbew = _loc0_;
               trg2 = worm[1];
               if(trg2.lasx + 15 > fra)
               {
                  trg.d.gotoAndStop(6);
               }
               else
               {
                  trg.d.gotoAndStop(10);
               }
               trg.xp = trg2.xppp;
               trg.yp = trg2.yppp;
               trg._visible = true;
            }
            else
            {
               trg._visible = false;
            }
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            f1 = [0,0,4,2,4,4,5];
            if(altboss)
            {
               if(trg.specoz == 23)
               {
                  f1 = [0,0,2,2,2,2,2,2,2,2];
               }
               else
               {
                  f1 = [0,0,2,2,2,2,2,2];
               }
            }
            trg.d.gotoAndStop(f1[trg.worm]);
            if(altboss)
            {
               if(trg.specoz == 23)
               {
                  f1 = 100;
                  f1 = [0,f1,f1,f1 * 1.1,f1 * 1.2,f1 * 1.2,f1 * 1.1,f1,f1 * 0.85];
                  f2 = [0,0,2,5,8,11,14,17,20];
               }
               else
               {
                  f1 = 100;
                  f1 = [0,f1,f1,f1,f1,f1,f1];
                  f2 = [0,0,2,5,8,11,14];
               }
            }
            else
            {
               f1 = [0,0,100,100,92,85,100];
               f2 = [0,0,3,7,11,15,18];
            }
            trg.d.d._yscale = _loc0_ = f1[trg.worm];
            trg.d.d._xscale = _loc0_;
            trg2 = worm[1];
            f2 = Math.min(trg2.beenx.length - 1,f2[trg.worm]);
            if(f2 > 0)
            {
               trg.xp = trg2.beenx[f2];
               trg.yp = trg2.beeny[f2];
               trg.dy = trg2.beenf[f2];
               if(trg.dy < f14)
               {
                  trg.bh = true;
                  trg._visible = trg.dy < f14 - 8;
                  if(altboss)
                  {
                     if(trg.specoz == 23)
                     {
                        if(fra % 7 == 0 && trg.worm == 4)
                        {
                           f1 = trg2.beenx[f2] - trg2.beenx[f2 - 1];
                           f2 = trg2.beeny[f2] - trg2.beeny[f2 - 1];
                           f3 = 7 / Math.sqrt(f1 * f1 + f2 * f2);
                           f1 *= f3;
                           f2 *= f3;
                           ffmo(trg.xp,trg.yp,0,(- f2) * 0.6 - f1 * 0.5,f1 * 0.8 - f2 * 0.5,0,9,trg.s,true,false);
                           ffmo(trg.xp,trg.yp,0,f2 * 0.6 - f1 * 0.5,(- f1) * 0.8 - f2 * 0.5,0,9,trg.s,true,false);
                        }
                     }
                     else if(wormet == 6)
                     {
                        if(random(2) == 0 && trg.dy < -30 && wormfo <= fra)
                        {
                           wormfo = fra + 30;
                           quadf(trg.xp,trg.yp,5,2);
                        }
                     }
                  }
               }
               else
               {
                  trg._visible = false;
                  trg.bh = false;
                  trg.dy = 33;
               }
            }
            else
            {
               trg._visible = false;
               trg.bh = false;
            }
         }
         trg.d.sh._y = - trg.dy;
         trg.d._y = trg.dy;
         if(altboss)
         {
            trg.d._y = trg.dy * 0.8 - 14;
         }
   }
}
function smartb()
{
   smartd();
   smarties();
   switch(trg.s)
   {
      case 66:
         blackout = trg.specoz != 23;
         if(!trg.sic)
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
         }
         trgnextd();
         if(trg.sic)
         {
            if(!trg.whut)
            {
               sideflip(player.xp - trg.xp);
               trg.whut = true;
               if(trg.specoz == 23)
               {
                  trg.d.gotoAndStop(12);
               }
               else
               {
                  trg.d.gotoAndStop(13);
               }
               trg.ffa = fra - enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000) * 0.1 + 80;
            }
            else if(trg.d._currentframe < 11)
            {
               trg.d.gotoAndStop(13);
            }
         }
         else if(trg.horse)
         {
            trg.d.gotoAndStop(8);
            if(trg.hp + 40 > death.hp)
            {
               trg.hp--;
            }
         }
         else if((trg.whut || trg.hp / hps[trg.s] < 0.5) && trg.d._currentframe < 7)
         {
            trg.xp = Math.min(580,Math.max(60,trg.xp));
            death = trg;
            if(!trg.whut)
            {
               sideflip(player.xp - trg.xp);
               trg.whut = true;
               trg.d.gotoAndStop(7);
               if(trg.specoz == 23)
               {
               }
            }
            else
            {
               trg.d.gotoAndStop(9);
            }
         }
         switch(trg.d._currentframe)
         {
            case 13:
               trg.xbew *= 0.975;
               trg.ybew *= 0.975;
               if(trg.alt)
               {
                  if(trg.ffa < fra - 180)
                  {
                     trg.done = true;
                  }
                  if(trg.ffa > fra)
                  {
                     yenf = _loc0_ = 0;
                     xenf = _loc0_;
                     trg.d.d.gotoAndStop(1);
                  }
                  else if(!trg.whuzz)
                  {
                     trg.whuzz = true;
                     enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                     enf = 0.75 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     trg.xpp = xenf;
                     trg.ypp = yenf;
                  }
                  else
                  {
                     xenf = trg.xpp;
                     yenf = trg.ypp;
                  }
               }
               else
               {
                  enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                  enf = 0.5 / enf;
                  xenf *= enf;
                  yenf *= enf;
               }
               trg.xbew -= xenf;
               trg.ybew -= yenf;
               break;
            case 10:
               if(trg.d.d._currentframe == 16)
               {
                  xenf = crand(10);
                  yenf = crand();
                  if(trg.specoz == 23)
                  {
                     trg2 = create(trg.xp,trg.yp,0,0,0,0,66);
                     trg2.sic = true;
                     trg2.apf = true;
                     trg2.d.gotoAndStop(12);
                     trg2.hp = 60;
                     trg2._yscale = _loc0_ = 150;
                     trg2._xscale = _loc0_;
                     trg2.outway = true;
                     trg.outway = true;
                     trg2.specoz = 23;
                     speco(trg2);
                  }
                  else
                  {
                     if(trg.specoz)
                     {
                        f1 = 26.1;
                     }
                     else
                     {
                        f1 = 41;
                     }
                     create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,f1);
                     create(trg.xp - xenf,trg.yp - yenf,0,0,0,0,f1);
                  }
                  _root.soundy("summonsound.wav",120);
                  _root.soundy("Monster_Grunt_5.mp",100);
               }
               break;
            case 9:
               randrun();
               if(random(90) == 0 && (ashut < 3 && trg.specoz != 23 || (ashut < 3 || !trg.nogrow) && trg.specoz == 23))
               {
                  trg.nogrow = true;
                  trg.d.gotoAndStop(10);
               }
               break;
            case 1:
            case 2:
               randrun();
               f1 = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               if(random(90) == 0 && (ashut < 2 + random(2) && trg.specoz != 23 || ashut < 7 && trg.specoz == 23 && trg.lastdd != 5))
               {
                  trg.d.gotoAndStop(5);
                  trg.lastdd = 5;
               }
               else if(random(180) == 0 && sloww <= -100 && trg.specoz != 18)
               {
                  trg.d.gotoAndStop(6);
                  trg.lastdd = 6;
               }
               else if(random(100) == 0 && (ashut < 5 && trg.specoz != 23 || ashut < 7 && trg.specoz == 23 && trg.lastdd != 14))
               {
                  trg.d.gotoAndStop(14);
                  trg.lastdd = 14;
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 20)
               {
                  _root.soundy("Monster_Grunt_5.mp",100);
                  _root.soundy("summonsound.wav",120);
                  if(trg.specoz == 18)
                  {
                     xenf = crand(50);
                     yenf = crand();
                     trg2 = create(trg.xp + xenf * 1.5,trg.yp + yenf * 1.5,0,0,0,0,55.1);
                     trg3 = create(trg.xp - xenf * 1.5,trg.yp - yenf * 1.5,0,0,0,0,55.1);
                  }
                  else if(trg.specoz == 23)
                  {
                     i = 0;
                     while(i < 3)
                     {
                        trg2 = create(trg.xp,trg.yp,0,0,0,0,66);
                        if(i > 2)
                        {
                           trg2.xp += 20;
                        }
                        else
                        {
                           trg2.xp -= 20;
                        }
                        if(i == 1 || i == 3)
                        {
                           trg2.yp += 20;
                        }
                        else
                        {
                           trg2.yp -= 20;
                        }
                        trg2.sic = true;
                        trg2.apf = true;
                        trg2.d.gotoAndStop(12);
                        trg2.hp = 15;
                        trg.outway = true;
                        trg2.specoz = 23;
                        speco(trg2);
                        i++;
                     }
                  }
                  else
                  {
                     i = 0;
                     while(i < 1.9)
                     {
                        trg2 = spaw(trg.xp,trg.yp,250 + random(100),66);
                        if(enfcheck(trg2.xp,trg2.yp,player.xp,player.yp,150))
                        {
                           trg2.done = true;
                           trg2.sic = true;
                           trg2._visible = false;
                           trg2.bh = false;
                           trg.outway = true;
                           i -= 0.95;
                        }
                        else
                        {
                           trg2.sic = true;
                           trg2.apf = true;
                           trg2.d.gotoAndStop(12);
                           trg2.hp = 15;
                        }
                        trg.outway = true;
                        i++;
                     }
                  }
               }
               break;
            case 6:
               if(trg.d.d._currentframe == 22)
               {
                  sloww = 100;
                  _root.over.gotoAndStop(7);
               }
               break;
            case 14:
               if(trg.d.d._currentframe == 18)
               {
                  if(trg.specoz == 23)
                  {
                     enf = _loc0_ = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                     if(_loc0_)
                     {
                        xenf *= 40 / enf;
                        yenf *= 40 / enf;
                        trg2 = create(trg.xp - xenf,trg.yp - yenf,0,0,0,0,27);
                        trg2.hp += 13;
                     }
                  }
                  else
                  {
                     trg2 = [];
                     trg2.push(create(20,trg.yp,0,0,0,0,66));
                     trg2.push(create(620,trg.yp,0,0,0,0,66));
                     trg2.push(create(trg.xp,120,0,0,0,0,66));
                     trg2.push(create(trg.xp,460,0,0,0,0,66));
                     _root.soundy("summonsound.wav",150);
                     _root.soundy("Monster_Grunt_0_" + abr() + ".mp",100);
                     for(z in trg2)
                     {
                        trg2[z].sic = true;
                        trg2[z].apf = true;
                        trg2[z].d.gotoAndStop(12);
                        trg2[z].hp = 15;
                        trg2[z].outway = true;
                        trg2[z].alt = true;
                        if(enfcheck(trg2[z].xp,trg2[z].yp,player.xp,player.yp,80))
                        {
                           trg2[z].dones = true;
                           trg2[z].done = true;
                        }
                     }
                  }
               }
               break;
            case 11:
               if(!trg.whuuu)
               {
                  _root.soundy("Monster_Yell_A_" + random(3) + ".mp",100);
                  trg.whuuu = true;
                  trg2 = create(trg.xp,trg.yp,0,0,0,0,66);
                  _root.soundy("summonsound.wav",150);
                  trg2.d.gotoAndStop(8);
                  trg2.horse = true;
                  trg2.gogo = true;
                  if(trg.specoz == 23)
                  {
                     trg2.specoz = 23;
                     speco(trg2);
                  }
                  trg2.d._xscale = trg.d._xscale;
                  trg2.d._yscale = trg.d._yscale;
                  trg2.apf = true;
                  trg.outway = true;
               }
               break;
            case 8:
               trg.xbew = trg.d._xscale * 0.18;
               if(trg.gogo)
               {
                  f1 = false;
                  if(trg.xp > 750)
                  {
                     trg.xp = 10;
                     f1 = true;
                  }
                  else if(trg.xp < -150)
                  {
                     trg.xp = 630;
                     f1 = true;
                  }
                  if(f1)
                  {
                     f1 = 95;
                     trg.yp += f1;
                     if(trg.yp > 430)
                     {
                        trg.yp -= f1 * 3;
                     }
                  }
               }
         }
         break;
      case 65:
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if(trg.specoz == 23)
         {
            f1 = 0.25;
         }
         else
         {
            f1 = 0.5;
         }
         if((trg.whut || trg.hp / trg.mhp < f1) && trg.d._currentframe < 9 && !altboss)
         {
            bord();
            trg.xp = Math.min(580,Math.max(60,trg.xp));
            trg._visible = trg.bh = true;
            if(!trg.whut)
            {
               trg.gosplash = true;
               trg.whut = true;
               trg.d.gotoAndStop(10);
            }
            else
            {
               trg.d.gotoAndStop(9);
            }
         }
         switch(trg.d._currentframe)
         {
            case 9:
               trg.sp += 0.1;
               trg.sp *= 0.955;
               f1 = 1 + trg.sp * 0.1;
               trg.xbew *= f1;
               trg.ybew *= f1;
               pathfind(trg,playx,playy,trg.sp * 0.55 + 0.5);
               trg.xp = Math.min(580,Math.max(60,trg.xp));
               trg.yp = Math.min(410,Math.max(180,trg.yp));
               if(mhit(trg.xp,trg.yp))
               {
                  trg.xp += crand(5);
                  trg.yp += crand(5);
               }
               sideflip(trg.xbew);
               if(trg.ffra + 10 > fra)
               {
                  trg.hpp = trg.hp;
               }
               if(trg.hp + 85 - trg.sp * 5 < trg.hpp)
               {
                  trg.d.gotoAndStop(10);
                  trg.bh = _loc0_ = true;
                  trg._visible = _loc0_;
               }
               if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
               {
                  trg.d.bo.gotoAndStop(3);
               }
               else
               {
                  trg.d.bo.gotoAndStop(2);
               }
               break;
            case 10:
               if(trg.d.d._currentframe == 3 && trg.specoz == 16)
               {
                  cirf(trg.xp,trg.yp - 50,8,6);
               }
               trg.ffra = fra;
               trg.hpp = trg.hp;
               trg.sp = 0.5;
               break;
            case 1:
            case 2:
               randrun();
               f1 = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               if(random(90) == 0 && f1 < 200)
               {
                  trg.d.gotoAndStop(5);
               }
               else if(f1 > 150 && random(200) == 0 || Math.abs(yenf) < 20 && random(30) == 0)
               {
                  _root.soundy("Monster_Yell_A_" + random(3) + ".mp",100);
                  sideflip(player.xp - trg.xp);
                  trg.d.gotoAndStop(7);
                  trg.xpp = trg.xp;
                  trg.ypp = trg.yp;
                  trg.gogo = 3;
                  trg.bh = _loc0_ = true;
                  trg._visible = _loc0_;
               }
               else if(random(180) == 0 || ashut > 5 && trg.specoz == 23 && random(30) == 0)
               {
                  trg.d.gotoAndStop(6);
                  _root.soundy("Monster_Roar_" + random(4) + ".mp");
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 5)
               {
                  quadf(trg.xp,trg.yp,10,!altboss);
               }
               break;
            case 6:
               if(trg.d.d._currentframe == 30)
               {
                  trg.bh = false;
                  anarch = 25;
                  analt = _loc0_ = altboss;
                  if(_loc0_)
                  {
                     anarch = 50;
                  }
                  if(trg.specoz == 16)
                  {
                     anarch = 10;
                     analt = 5;
                  }
               }
               else if(!trg.bh && anarch < -80)
               {
                  trg.bh = true;
                  trg.d.gotoAndStop(8);
                  trg.xpp = trg.xp;
                  trg.ypp = trg.yp;
                  if(player.xp > 320)
                  {
                     trg.xp = 10;
                     sideflip(100);
                  }
                  else
                  {
                     sideflip(-100);
                     trg.xp = 630;
                  }
                  trg._visible = true;
               }
               if(trg.d.d._currentframe == 33)
               {
                  trg._visible = false;
               }
               break;
            case 8:
               if(trg.specoz)
               {
                  noet = true;
                  if((fra % 45 == 0 || fra % 15 == 0 && trg.specoz == 23 && !altboss) && (anarch <= -80 && trg.loap && trg.specoz != 23 || trg.specoz == 23 && trg.loap))
                  {
                     if(trg.specoz == 23)
                     {
                        if(altboss || true)
                        {
                           if(ashut < 7)
                           {
                              if(altboss)
                              {
                                 f1 = 24.1;
                              }
                              else
                              {
                                 f1 = 24;
                              }
                              trg2 = create(trg.xp,trg.yp,0,0,0,0,f1);
                              trg.hp -= 5;
                           }
                           else
                           {
                              trg.loap = false;
                           }
                        }
                        else
                        {
                           trg.loap = false;
                           trg2 = create(trg.xp,trg.yp,0,0,0,0,5.04);
                           trg2.col = 3;
                        }
                     }
                  }
                  noet = false;
               }
               if(altboss && trg.gogo < 3 && trg.gogo > 1 && !trg.goner && fra % 8 == 0)
               {
                  trg.gogo -= 0.4;
                  noet = true;
                  trg2 = create(trg.xpp,random(300) + 150,0,trg.xbew,0,0,65);
                  noet = false;
                  _root.soundy("Monster_Yell_A_" + random(3) + ".mp3",60);
                  trg2.goner = true;
                  trg2.fra = 0;
                  trg2.d._xscale = trg.d._xscale;
                  trg2.d.gotoAndStop(trg.d._currentframe);
                  if(trg.specoz)
                  {
                     trg2.specoz = trg.specoz;
                     speco(trg2);
                  }
               }
               trg.xbew = trg.d._xscale * 0.18;
               if(trg.gogo > 0)
               {
                  f1 = false;
                  if(trg.xp > 619)
                  {
                     trg.xp = _loc0_ = 10;
                     trg.xpp = _loc0_;
                     f1 = true;
                  }
                  else if(trg.xp < 21)
                  {
                     trg.xp = _loc0_ = 630;
                     trg.xpp = _loc0_;
                     f1 = true;
                  }
                  if(f1)
                  {
                     trg.loap = true;
                     if(altboss)
                     {
                        if(trg.goner)
                        {
                           trg.done = true;
                        }
                     }
                     else
                     {
                        f1 = 95;
                        trg.yp += f1;
                        if(trg.yp > 430)
                        {
                           trg.yp -= f1 * 3;
                        }
                     }
                     trg.gogo--;
                  }
               }
               else if((trg.xp - trg.ypp) * trg.xbew > 0)
               {
                  trg.d.gotoAndStop(1);
               }
         }
         break;
      case 81:
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trgnextd();
         if((trg.whut || trg.hp / hps[trg.s] < 0.5) && trg._xscale > 90 && trg.alter == 1)
         {
            if(!trg.whut)
            {
               trg.gosplash = true;
               trg.whut = true;
               _root.soundy("Monster_Roar_2.mp",100);
            }
            trg.d.gotoAndStop(9);
         }
         switch(trg.d._currentframe)
         {
            case 1:
            case 2:
               randrunx(1);
               sideflip(trg.xbew);
               walkframe(3);
               if(random(3) == 0 || trg._xscale > 90)
               {
                  if(random(140 - trg.alter * 60) == 0 && (trg.alter == 1 || enfcheckx(trg.xp,trg.yp,player.xp,player.yp,400)))
                  {
                     if(trg.alter == 1)
                     {
                        trg.d.gotoAndStop(7);
                     }
                     else
                     {
                        trg.d.gotoAndStop(6);
                     }
                     _root.soundy("Monster_Yell_B_0.mp3",100);
                  }
                  else if(random(20) == 0)
                  {
                     if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,230))
                     {
                        sideflip(player.xp - trg.xp);
                        trg.d.gotoAndStop(5);
                     }
                  }
               }
               break;
            case 9:
               trg.bh = false;
               if(trg.d.d._currentframe == 25)
               {
                  _root.soundy("summonsound.wav",200);
                  xenf = 30;
                  trg2 = create(trg.xp,trg.yp - 20,0,0,0,0,81);
                  trg3 = create(trg.xp,trg.yp - 20,0,0,0,0,81);
                  if(trg.specoz == 23)
                  {
                     trg4 = create(trg.xp,trg.yp + 10,0,0,0,0,81);
                     trg4.hp *= 0.7;
                     trg4.mhp = _loc0_;
                     trg4._yscale = _loc0_ = 85;
                     trg4._xscale = _loc0_;
                     trg3._yscale = _loc0_ = 70;
                     trg2._xscale = _loc0_;
                     trg2._yscale = _loc0_ = 70;
                     trg3._xscale = _loc0_;
                  }
                  else
                  {
                     trg3._yscale = _loc0_ = 75;
                     trg2._xscale = _loc0_;
                     trg2._yscale = _loc0_ = 75;
                     trg3._xscale = _loc0_;
                  }
                  trg2.hp *= 0.5;
                  trg2.mhp = _loc0_;
                  trg3.hp *= 0.5;
                  trg2.mhp = _loc0_;
               }
               if(trg.d.d._currentframe == 65)
               {
                  trg.done = true;
               }
               break;
            case 5:
               if(trg.d.d._currentframe == 20 || trg.d.d._currentframe == 34)
               {
                  enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
                  if(trg.d.d._currentframe == 20)
                  {
                     f1 = true;
                     _root.soundy("Monster_Grunt_2_" + abr() + ".mp",100);
                  }
                  else
                  {
                     f1 = 2;
                     _root.soundy("Monster_Grunt_1_" + abr() + ".mp",100);
                  }
                  enf = enfget(xenf,yenf);
                  enf = -8.2 / enf;
                  xenf *= enf;
                  yenf *= enf;
                  shots(trg.xp,trg.yp,xenf,yenf,f1);
               }
               if(trg.specoz == 23)
               {
                  if(trg.d.d._currentframe == 44)
                  {
                     if(trg.fire-- > 0)
                     {
                        if(Math.abs(trg._xscale) > 80)
                        {
                           trg.d.d.gotoAndStop(16);
                           sideflip(player.xp - trg.xp);
                        }
                     }
                  }
                  if(trg.d.d._currentframe == 3)
                  {
                     if(Math.abs(trg._xscale) > 100)
                     {
                        trg.fire = 3;
                     }
                     else
                     {
                        trg.fire = 1;
                     }
                  }
               }
               break;
            case 7:
               if(trg.d.d._currentframe < 7)
               {
                  break;
               }
               trg.whup = trg.hp;
            case 8:
               enf = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 5,player.yp + player.ybew * 5,1000);
               if(trg.specoz == 23)
               {
                  if(enf < 90 && random(20) == 0)
                  {
                     if(random(2) == 0)
                     {
                        trg.d.gotoAndStop(6);
                     }
                     else
                     {
                        sideflip(player.xp - trg.xp);
                        trg.d.gotoAndStop(5);
                     }
                  }
               }
               enf = 1.4 / enf;
               xenf *= enf;
               yenf *= enf;
               trg.xbew -= xenf;
               trg.ybew -= yenf;
               sideflip(player.xp - trg.xp);
               if(trg.whup > trg.hp + trg.mhp / 8)
               {
                  trg.d.gotoAndStop(6);
               }
               break;
            case 6:
               if(trg.d.d._currentframe > 20 && trg.d.d._currentframe < 50)
               {
                  trg.ypp = 0;
                  trg.xpp = random(2) - 0.5;
                  lasershow(trg);
                  trg.xpp = 0;
                  trg.ypp = random(2) - 0.5;
                  lasershow(trg);
                  trg.ypp = _loc0_ = undefined;
                  trg.xpp = _loc0_;
               }
         }
   }
}
function bord(f1, f2, f3, f4)
{
   if(f1 == undefined)
   {
      f1 = 575;
      f2 = 60;
      f3 = 410;
      f4 = 150;
   }
   trg.xp = Math.min(f1,Math.max(f2,trg.xp));
   trg.yp = Math.min(f3,Math.max(f4,trg.yp));
   f5 = trg.xp == f1 || trg.xp == f2;
   f6 = trg.yp == f3 || trg.yp == f4;
   if(trg.s == 19 && altboss)
   {
      if(f5)
      {
         trg.xbew *= -1;
      }
      if(f6)
      {
         trg.ybew *= -1;
      }
   }
   f5 = f5 || f6;
   return f5;
}
function cetf()
{
   trg.dx = trg._rotation * 0.3;
}
function smarts()
{
   smartsx();
   ssmarts();
   smartb();
   switch(trg.s)
   {
      case 89:
      case 19:
         if(trg.eternal && trg.s == 89)
         {
            if(fra10)
            {
               trg2 = parc("bloo",trg.xp,trg.yp,0,123);
            }
         }
         trg2 = undefined;
         if(trg.specoz == 7)
         {
            trg.xbew *= 0.96;
            trg.ybew *= 0.96;
         }
         trg.outway = true;
         trg.ggh = true;
         markhere();
         if(levzz(trg.til) > 1.8)
         {
         }
         if(!altboss)
         {
            bord();
         }
         if(trg.specoz == 23 && trg.s == 19)
         {
            if(trg.trg2 && trg.whop)
            {
               trg._yscale = _loc0_ = 162;
               trg._xscale = _loc0_;
            }
            else if(!trg.whop && trg.trg2)
            {
               trg._yscale = _loc0_ = 130;
               trg._xscale = _loc0_;
            }
            else
            {
               trg._yscale = _loc0_ = 155;
               trg._xscale = _loc0_;
            }
            if(!altboss)
            {
               trg._yscale += 20;
               trg._yscale *= 0.65;
               trg._xscale = _loc0_;
            }
         }
         if(!trg.donelook)
         {
            trg.d.gotoAndStop(7);
            trg.fail2 = 0;
            trg.donelook = true;
            for(a in ball)
            {
               trg2 = ball[a];
               if(trg2.s == 19 || trg2.s == 89)
               {
                  if(enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,roxx + 2) && trg2.trg2 != trg && trg2 != trg)
                  {
                     while(trg2.whop)
                     {
                        if(trg2.dones || trg2.hp < 0)
                        {
                           break;
                        }
                        trg2 = trg2.trg3;
                     }
                     if(trg.trg3 != trg2 && trg.trg3.trg3 != trg2 && trg.trg3.trg3.trg3 != trg2 && trg.trg3.trg3.trg3.trg3 != trg2 && trg.trg3.trg3.trg3.trg3.trg3 != trg2)
                     {
                        trg.trg2 = trg2;
                        trg.lar = trg2.lar + 1;
                        trg2.trg3 = trg;
                        trg2.whop = true;
                        trg2 = trg.trg3;
                        if(trg.s != 89)
                        {
                           if(!trg2.specoz)
                           {
                              trg.specoz = trg.trg2.specoz;
                              specoo(trg);
                           }
                           if(trg.specoz)
                           {
                              while(!trg2.specoz && trg2)
                              {
                                 trg2.specoz = trg.specoz;
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
            trg.beenx = [];
            trg.beeny = [];
            trg.beenf = [];
            f1 = 1;
         }
         else if(fra - trg.fra < 25)
         {
            if(trg.trg2.s == 19)
            {
               trg.d.gotoAndStop(4);
            }
            else
            {
               trg.d.gotoAndStop(9);
            }
         }
         else
         {
            if(trg.trg2.s == 19 || trg.trg2.s == 89)
            {
               trg.flyby = true;
               trg.ggh = true;
               if(trg.s == 89 && trg.eternal)
               {
                  trg.hp += trg.mhp * 0.005;
                  trg.hp *= 0.995;
               }
               trg2 = trg.trg2;
               while(trg2.trg3 != undefined && trg2.trg3 != trg)
               {
                  trg2 = trg2.trg3;
               }
               trg2.trg3 = trg;
               trg.lar = trg2.lar + 1;
               if(trg.specoz == 7)
               {
                  if(Math.abs(trg2.hp - trg.hp) > 1)
                  {
                     f1 = (trg2.hp - trg.hp) / 2;
                     trg2.hp -= f1;
                     trg.hp += f1;
                  }
               }
               if(trg.s == 19)
               {
                  trg.d.gotoAndStop(7);
               }
               if(trg2.dones && trg.s == 19)
               {
                  trg.trg2 = undefined;
               }
               else if((trg2.dones || trg2.frei || trg.frei || trg.trg3.frei) && trg.s != 19)
               {
                  trg.trg3.frei = true;
                  trg.trg2 = undefined;
                  if(trg.s == 89)
                  {
                     trg.frei = true;
                  }
                  f1 = -1;
               }
               else if(trg2.beenx.length > 0)
               {
                  if(trg.specoz == 7)
                  {
                     f0 = 6;
                  }
                  else
                  {
                     f0 = 4;
                  }
                  if(trg.s == 89)
                  {
                     f0--;
                  }
                  if(trg.s == 89 && trg2.trg2 == undefined)
                  {
                     f0--;
                  }
                  if(altboss && trg.s == 19)
                  {
                     f0--;
                  }
                  if(trg2.eternal)
                  {
                     if(trg2.s == 89)
                     {
                        f0 += 2;
                     }
                  }
                  if(trg.eternal)
                  {
                     if(trg.s == 89)
                     {
                        f0 += 2;
                     }
                     else if(trg.whop)
                     {
                        f0++;
                     }
                  }
                  f0 = Math.min(f0,trg2.beenx.length - 1);
                  enf = enfcheck(trg.xp,trg.yp,trg2.beenx[f0],trg2.beeny[f0],1000);
                  f2 = 10;
                  if(enf < f2)
                  {
                     f3 = trg2.beenx[f0];
                     f4 = trg2.beeny[f0];
                     if(altboss && trg.s == 19)
                     {
                        if(f4 != trg.yp || f3 != trg.xp)
                        {
                           if(f3 > trg.xp)
                           {
                              f1 = 1;
                           }
                           else
                           {
                              f1 = -1;
                           }
                           if(f4 > trg.yp)
                           {
                              f2 = 1;
                           }
                           else
                           {
                              f2 = -1;
                           }
                           trg._rotation = 15 * f2 * f1;
                           cetf();
                        }
                     }
                     trg.xp = f3;
                     trg.yp = f4;
                     f1 = trg2.beenf[f0];
                  }
                  else
                  {
                     enf = f2 / enf;
                     xenf *= enf;
                     yenf *= enf;
                     trg.xp -= xenf;
                     trg.yp -= yenf;
                     getf();
                     trg2.beenx.push(trg2.beenx[f0] + xenf);
                     trg2.beeny.push(trg2.beeny[f0] + yenf);
                     trg2.beenf.push(f1);
                  }
                  trg2.whop = true;
               }
            }
            else
            {
               if(trg.s != 19 || !altboss)
               {
                  trg.flyby = false;
                  trg.ggh = false;
               }
               f1 = ingrid(trg.xp,trg.yp);
               if(levzz(f1) > 1)
               {
                  trg.xbew += crand(2);
                  trg.ybew += crand(2);
               }
               trg.lar = 0;
               if(!trg.whop && trg.s != 89 && trg.specoz != 23)
               {
                  getf();
                  if(trg.fail2++ > 10)
                  {
                     trg.dones = true;
                  }
               }
               else if(!trg.hpu)
               {
                  trg.hpu = true;
                  if(trg.specoz != 7)
                  {
                     if(trg.s != 89)
                     {
                        trg.hp += 25;
                        if(trg.specoz == 23 && trg.s == 19)
                        {
                        }
                     }
                  }
               }
               else if(trg.fire <= 30)
               {
                  if(trg.s == 19)
                  {
                     trg.d.gotoAndStop(1);
                  }
                  if(altboss && trg.s == 19)
                  {
                     if(enfget(trg.xbew,trg.ybew) < 0.4)
                     {
                        trg.xbew += crand(0.1);
                        trg.ybew += crand(0.1);
                     }
                     if(trg.xbew > 0)
                     {
                        f1 = 1;
                     }
                     else
                     {
                        f1 = -1;
                     }
                     if(trg.ybew > 0)
                     {
                        f2 = 1;
                     }
                     else
                     {
                        f2 = -1;
                     }
                     if(Math.abs(trg.ybew) > Math.abs(trg.xbew))
                     {
                        trg._rotation = 0;
                     }
                     else
                     {
                        trg._rotation = 15 * f2 * f1;
                     }
                     cetf();
                     if(trg.specoz == 23)
                     {
                        if(bord())
                        {
                           trg.xbew *= 0.5;
                           trg.ybew *= 0.5;
                        }
                        if(enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,300))
                        {
                           if(linecheck(trg.xp,trg.yp,player.xp,player.yp))
                           {
                              trg.xbew *= 0.92;
                              trg.ybew *= 0.92;
                              if(enf > 0)
                              {
                                 if(enf < 130)
                                 {
                                    enf *= 0.8;
                                 }
                                 enf *= 2.5;
                                 trg.xbew -= xenf / enf;
                                 trg.ybew -= yenf / enf;
                                 if(trg.whop)
                                 {
                                    if(enf = enfcheck(trg.xp,trg.yp,lastlarx,lastlary,100))
                                    {
                                       trg2 = lastlar;
                                       trg.xbew += xenf / enf;
                                       trg.ybew += yenf / enf;
                                       trg2.xbew -= xenf / enf;
                                       trg2.ybew -= yenf / enf;
                                    }
                                    lastlarx = trg.xp;
                                    lastlary = trg.yp;
                                    lastlar = trg;
                                 }
                              }
                           }
                        }
                        f1 = Math.sqrt(trg.xbew * trg.xbew + trg.ybew * trg.ybew * 0.6);
                        f1 = Math.min(10,f1 + 2) / f1;
                        trg.xbew *= f1;
                        trg.ybew *= f1;
                        if(!trg.whop)
                        {
                           trg.xbew *= 0.6;
                           trg.ybew *= 0.6;
                           if(fra10)
                           {
                              trg2 = parc("bloo",trg.xp,trg.yp,0,123);
                           }
                        }
                     }
                     else
                     {
                        trg.xbew *= 0.85;
                        trg.ybew *= 0.85;
                        if(trg.gor)
                        {
                           trg.xbew += f1 * 3;
                           trg.ybew += f2 * 1.6;
                        }
                        else
                        {
                           trg.xbew += f1 * 1.8;
                           trg.ybew += f2 * 3;
                        }
                        if(bord() && random(10) == 0)
                        {
                           trg.gor = random(2) == 0;
                        }
                     }
                  }
                  else
                  {
                     if(trg.s == 89 && trg.eternal)
                     {
                        pathfind(trg,playx,playy,1.7);
                     }
                     else
                     {
                        randrunx(2);
                     }
                     trg.ggh = false;
                  }
                  killshit(trg.nextl);
                  xenf = trg.xbew;
                  yenf = trg.ybew;
                  getf();
                  if(trg.specoz == 3 && random(3) == 0)
                  {
                     firewalk();
                  }
                  if(!trg.whop && trg.s == 19)
                  {
                     trg.xbew *= 0.8;
                     trg.ybew *= 0.8;
                     if(fra10)
                     {
                        trg2 = parc("bloo",trg.xp,trg.yp,0,123);
                     }
                  }
               }
               else
               {
                  trg.fire--;
                  f1 = -1;
               }
            }
            if(!enfcheck(trg.xp,trg.yp,trg.beenx[0],trg.beeny[0],3))
            {
               trg.beenx.unshift(trg.xp);
               trg.beeny.unshift(trg.yp);
               trg.beenf.unshift(f1);
            }
         }
         if(trg.s == 19)
         {
            if(trg.trg2.s != 19 || trg2.dones)
            {
            }
            if(f1 > 0)
            {
               trg.d.d.d.gotoAndStop(f1);
            }
         }
         else
         {
            if(trg2.s == 89)
            {
               enfcheck(trg2.xp,trg2.yp,trg.xp,trg.yp,1000);
               getf();
            }
            f2 = [0,2,6,1,5];
            trg.d.gotoAndStop(f2[f1]);
         }
         if(trg.beenx.length > 12)
         {
            f2 = [];
            f3 = [];
            f4 = [];
            a = 0;
            while(a < 9)
            {
               f2[a] = trg.beenx[a];
               f3[a] = trg.beeny[a];
               f4[a] = trg.beenf[a];
               a++;
            }
            trg.beenx = new Array(9);
            trg.beeny = new Array(9);
            trg.beenf = new Array(9);
            a = 0;
            while(a < 9)
            {
               trg.beenx[a] = f2[a];
               trg.beeny[a] = f3[a];
               trg.beenf[a] = f4[a];
               a++;
            }
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         if(random(16) == 0 && trg.s == 19)
         {
            splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.6 + 0.6);
         }
         if(trg.s == 19 && !altboss)
         {
            if(trg.whop <= 0)
            {
               if((_root.lev != _root.chamb || trg.eternal) && fra > 20 && (random(100) == 0 || random(20) == 0 && trg.whop < 0))
               {
                  f1 = 5;
                  f2 = ingrid(trg.beenx[f1],trg.beeny[f1]);
                  if(!trg.trg3)
                  {
                     f1 = 1 + Math.round(ashut * 0.2 - 0.2);
                     if(trg.specoz == 23)
                     {
                        if(random(Math.round(f1 + lars)) == 0)
                        {
                           if(lars++ < 7 + _root.chaps * 0.5)
                           {
                              trg2 = create(trg.xp,trg.yp,0,0,0,0,19);
                              trg2.specoz = 23;
                              speco(trg2);
                              trg2.donelook = true;
                              _root.soundy("summonsound.wav",80);
                              trg2.fra = -100;
                              trg2.d.gotoAndStop(7);
                              trg2.fail2 = 0;
                              trg3 = trg;
                              trg2.trg2 = trg3;
                              trg3.trg3 = trg2;
                              trg3.whop = true;
                              trg2.beenx = [];
                              trg2.beeny = [];
                              trg2.beenf = [];
                              trg2.lar = trg3.lar + 1;
                              trg2.hp *= 0.5;
                              trg.hp *= 0.5;
                           }
                        }
                     }
                     else if(trg.specoz != 7)
                     {
                        turd("breakblock",f2,true);
                     }
                  }
               }
            }
         }
         trg.whop = false;
         break;
      case 22:
         trg.pbh = fra2;
         if(trg.d._currentframe < 3)
         {
            angstfind();
            sideflip(trg.xbew);
            walkframe(2);
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
         }
         else
         {
            trgnextd();
         }
         if(trg.needmove > 0 && trg.fire-- <= 0 && ashut < random(5) + 4)
         {
            if(enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,300))
            {
               if(linecheckxx(trg.xp,trg.yp,player.xp,player.yp))
               {
                  _root.soundy("Wheezy_Cough_" + random(3) + ".mp",100);
                  trg.fire = 75;
                  trg.d.gotoAndStop(5);
                  sideflip(- xenf);
                  f1 = trg.xp;
                  f2 = trg.yp;
                  enf = -7 / enf;
                  xenf *= enf;
                  yenf *= enf;
                  if(trg.specoz == 23 && trg.eternal != 2)
                  {
                     f0 = 2;
                  }
                  else
                  {
                     f0 = 1;
                  }
                  while(f0-- > 0)
                  {
                     var trg2 = create(f1,f2,0,xenf,yenf,0,18);
                     trg2.fra -= 20;
                     trg2.die = true;
                     trg2.pbh = true;
                     if(f0 != 0)
                     {
                        trg2.xbew += crand(5);
                        trg2.ybew += crand(5);
                     }
                     if(trg.eternal == 2)
                     {
                        attach(trg2,96);
                        trg2.hp += 20;
                     }
                  }
               }
               else
               {
                  trg.fire = 7;
               }
            }
            else
            {
               trg.fire = 3;
            }
         }
         break;
      case 16:
         trg.pbh = fra2;
         if(trg.d._currentframe < 3)
         {
            if(trg.alter == 3)
            {
               pathfind(trg,playx,playy,1.2);
               if(fra5 && !trg.eternal)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,40))
                  {
                     trg.dones = true;
                  }
               }
               trg.xbew *= 0.9;
               trg.ybew *= 0.9;
            }
            else
            {
               angstfind();
               trg.xbew *= 0.8;
               trg.ybew *= 0.8;
            }
            sideflip(trg.xbew);
            walkframe(2);
            if(trg.needmove > 0)
            {
               trg.d.hx.gotoAndStop(2);
               trg.d.d.hx.gotoAndStop(2);
            }
            else
            {
               trg.d.hx.gotoAndStop(1);
               trg.d.d.hx.gotoAndStop(1);
            }
            if(trg.eternal)
            {
               if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,400) && trg.alter == 1)
               {
                  trg.d.gotoAndStop(6);
               }
               if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,100) && trg.alter == 3)
               {
                  trg.d.gotoAndStop(6);
               }
               if((enfcheck(trg.xp,trg.yp,player.xp,player.yp,100) || random(100) == 0) && trg.alter == 2 && ashut < 6)
               {
                  trg.d.gotoAndStop(6);
               }
            }
            else if(trg.gh && random(300) == 0)
            {
               if(trg.alter != 3)
               {
                  trg.d.gotoAndStop(5);
               }
            }
         }
         else
         {
            trg.xbew *= 0.8;
            trg.ybew *= 0.8;
            trgnextd();
            if(trg.d.d._currentframe > 20 && trg.d._currentframe == 5)
            {
               trg.dones = true;
               if(trg.alter != 3)
               {
                  quadf(trg.xp,trg.yp,7);
               }
            }
            if(trg.d._currentframe == 6)
            {
               if(trg.d.d._currentframe == 14)
               {
                  if(trg.alter == 3)
                  {
                     boil(false,1);
                     boil(true,1);
                  }
                  else if(trg.alter == 2)
                  {
                     boil(false,2);
                     if(ashut < 6 && _root.chaps > 2)
                     {
                        boil(false,2);
                     }
                  }
                  else
                  {
                     quadf(trg.xp,trg.yp,13.5);
                  }
               }
            }
         }
         break;
      case 17:
         randrun();
         if((fra + trg.e) % 3 == 0)
         {
            splater(trg.xp,trg.yp,1 + random(10),Math.random() * 0.9 + 0.5);
         }
         trg.xbew *= 0.6;
         trg.ybew *= 0.6;
         break;
      case 15:
         trg.pbh = fra2;
         trgnextd();
         if(trg.alter == 2)
         {
            blackout = 2;
         }
         if((fra + trg.e) % 5 == 0)
         {
            splater(trg.xp,trg.yp,1 + random(10),Math.random() * 0.7 + 0.5);
         }
         trg.xbew *= 0.9;
         trg.ybew *= 0.9;
         switch(trg.mode)
         {
            case 1:
               if(trg.d._currentframe == 1 && trg.modedone || random(30) == 0 && fra - trg.mof > 30)
               {
                  trg.mode = 2;
                  trg.modedone = false;
               }
               else
               {
                  if(trg.eternal)
                  {
                     trg.d.gotoAndStop(6);
                  }
                  else
                  {
                     trg.d.gotoAndStop(5);
                  }
                  if(trg.d.d._currentframe > 10 && !trg.modedone || trg.d._currentframe == 6 && (trg.d.d._currentframe == 11 || trg.d.d._currentframe == 18 || trg.d.d._currentframe == 27))
                  {
                     if(trg.alter == 3)
                     {
                        quadf(trg.xp,trg.yp,7,true);
                     }
                     else if(trg.alter == 2)
                     {
                        quadf(trg.xp,trg.yp,7,2);
                     }
                     else
                     {
                        quadf(trg.xp,trg.yp,7);
                     }
                     if(trg.eternal)
                     {
                        boil();
                        if(trg.hp < trg.mhp + 10)
                        {
                           trg.hp = trg.hp + 1;
                        }
                     }
                     trg.modedone = true;
                     _root.soundy("animal_squish" + random(3) + ".wav",100);
                  }
               }
               break;
            case 2:
               if(trg.eternal)
               {
                  trg.rep = 2;
               }
               trg.mof = fra;
               if(trg.eternal)
               {
                  pathfind(trg,playx,playy,0.7);
                  trg.d.gotoAndStop(2);
                  sideflip(trg.xbew * 3);
                  if(random(40) == 0)
                  {
                     trg.modedone = false;
                     trg.mode = 1;
                  }
               }
               else
               {
                  randrun();
               }
               break;
            default:
               trg.modedone = false;
               trg.mode = random(2) + 1;
               trg.mof = fra;
               if(trg.eternal)
               {
                  trg.rep = 2;
               }
         }
         break;
      case 38:
         bord();
         markhere(trg);
         trg.xbew *= 0.7;
         trg.ybew *= 0.7;
         if(trg.d._currentframe <= 5 || trg.d._currentframe == 5 && trg.d.d._currentframe > 17 && trg.eternal)
         {
            if(random(10) == 0)
            {
               splater(trg.xp,trg.yp,random(10),Math.random() * 0.3 + 0.2);
            }
            trgnextd();
            firemode(200,5);
            if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,400) || trg.telp > 20)
            {
               trg.telp = trg.telp + 1;
            }
            trg.telp += Math.random() * 0.1;
            if(trg.telp > 20)
            {
               z = 0;
               while(z < 10)
               {
                  if(trg.xpp != undefined)
                  {
                     break;
                  }
                  telpx();
                  z++;
               }
               if((trg.d._currentframe == 1 || trg.d._currentframe == 5 && trg.d.d._currentframe > 17 && trg.eternal) && (trg.telp > 40 || trg.eternal && trg.telp > 28) && trg.xpp != undefined)
               {
                  trg.d.gotoAndStop(6);
               }
            }
            trg.bh = true;
         }
         else
         {
            trg.bh = false;
            trgnextd();
            if(trg.eternal)
            {
               if(trg.d._currentframe == 6 && trg.d.d._currentframe == 5)
               {
                  quadf(trg.xp,trg.yp + 10,7,trg.alter - 1);
                  _root.soundy("bloodshoot" + random(3) + ".wav");
               }
            }
            if(trg.d._currentframe == 1 && trg.xpp != undefined)
            {
               trg.d.gotoAndStop(7);
               if(enfcheck(trg,xpp,trg.ypp,player.xp,player.yp,810000) <= 80)
               {
                  trg.xpp = undefined;
                  z = 0;
                  while(z < 100)
                  {
                     if(trg.xpp != undefined)
                     {
                        break;
                     }
                     telpx();
                     z++;
                  }
               }
               if(trg.xpp > 0 && trg.ypp > 0)
               {
                  trg.xp = trg.xpp;
                  trg.yp = trg.ypp;
               }
               trg.xpp = undefined;
               trg.telp = 0;
            }
         }
         if(trg.fire <= 0)
         {
            enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
            enf = 0.33 / enf;
            trg.xbew -= xenf * enf;
            trg.ybew -= yenf * enf;
         }
         break;
      case 59:
         markhere(trg);
         trg.xbew *= 0.65;
         trg.ybew *= 0.65;
         f1 = false;
         f2 = trgnextd();
         if(f2 == 2 || f2 == 5)
         {
            trg.d.gotoAndStop(6);
         }
         if((trg.d._currentframe == 2 || trg.d._currentframe == 5) && trg.d.d._currentframe == 29 || trg.d._currentframe == 6 && trg.d.d._currentframe == 5)
         {
            _root.soundy("Meat_jumps" + random(5) + ".wav");
         }
         if(trg.d._currentframe == 1)
         {
            f1 = true;
            if(random(30) == 0)
            {
               if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,200))
               {
                  trg.d.gotoAndStop(8);
               }
            }
            if(random(20) == 0)
            {
               enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               enf = 100 / enf;
               posw(trg.xp - xenf * enf,trg.yp - yenf * enf,0);
               trg.xpp = xenf;
               trg.ypp = yenf;
               if(trg.yp > trg.ypp)
               {
                  trg.d.gotoAndStop(2);
               }
               else
               {
                  trg.d.gotoAndStop(5);
               }
               trg.f1 = 0;
               f1 = false;
            }
         }
         else if(trg.d._currentframe == 2 || trg.d._currentframe == 5)
         {
            if(trg.d.d._currentframe > 4)
            {
               trg.bh = trg.d.d._currentframe < 27;
               if(trg.d.d._currentframe > 27)
               {
                  if(trg.d.d._currentframe == 29)
                  {
                     f1 = 2;
                     if(trg.eternal)
                     {
                        f1 = true;
                     }
                     quadf(trg.xp,trg.yp + 10,7,f1);
                     _root.soundy("meatheadshoot" + fra % 3 + ".wav");
                  }
                  telpx(true);
               }
               else
               {
                  trg.f1 = Math.min(1,trg.f1 * 1.07 + 0.005);
                  trg.xp = trg.xpp * trg.f1 + trg.xp * (1 - trg.f1);
                  trg.yp = trg.ypp * trg.f1 + trg.yp * (1 - trg.f1);
               }
            }
            f1 = false;
         }
         else if(trg.d._currentframe == 6)
         {
            f1 = true;
         }
         else if(trg.d._currentframe == 8)
         {
            if(trg.d.d._currentframe == 9)
            {
               _root.soundy("heartout.wav",70);
               trg2 = green();
               if(trg.eternal)
               {
                  trg2.hom = 3;
                  colorit(trg2,0.8,1,2.5,0,0,0);
                  trg2.longshot = 2;
                  trg2.dm = -26;
                  trg2.d._yscale = _loc0_ = 240;
                  trg2.d._xscale = _loc0_;
               }
            }
            f1 = true;
         }
         if(f1)
         {
            trg.bh = trg.d._currentframe != 2 && trg.d._currentframe != 5 || trg.d.d._currentframe < 30;
            trg.xp = trg.xpp;
            trg.yp = trg.ypp;
         }
         break;
      case 60:
         if(trg.d._currentframe != 5)
         {
            trg.d.gotoAndStop(1);
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
         trg.xp = trg.xpp;
         trg.yp = trg.ypp;
         if(trg.d._currentframe == 1)
         {
            if(trg.spinny > 0)
            {
               if(trg.spinny++ > 250)
               {
                  trg.spinny = undefined;
               }
               else
               {
                  if(trg.spinny > 125)
                  {
                     f1 = 25 - trg.spinny * 0.1;
                  }
                  else
                  {
                     f1 = trg.spinny * 0.1;
                  }
                  f1 += 1;
                  f1 = Math.min(15,f1) * 1.4;
                  trg.firer += Math.min(6,2 + f1 * 0.3);
                  if(trg.revers)
                  {
                     f1 = - f1;
                  }
                  trg.rp += f1;
                  if(trg.firer > 10)
                  {
                     trg.firer = 0;
                     f2 = (- trg.rp) / 180 * 3.141592653589793;
                     f1 = 8;
                     xenf = Math.sin(f2) * f1;
                     yenf = Math.cos(f2) * f1;
                     trg2 = ffmo(trg.xp + xenf * 3,trg.yp + yenf * 3,0,xenf,yenf,0,9,trg.s,true);
                     if(trg.alter == 2)
                     {
                        trg2.dm -= 3.5;
                     }
                     else
                     {
                        trg2.dm -= 1;
                     }
                  }
               }
            }
            else
            {
               f1 = rotget2(trg.xp - player.xp - player.xbew * 1,trg.yp - player.yp - player.xbew * 1) - 90;
               f1 -= trg.rp;
               enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
               f2 = 3 + trg.alter * 3 - enf / 330;
               f1 = absmax(rotrund(f1),f2);
               if(Math.abs(f1) < f2 / 2)
               {
                  if(random(10) == 0)
                  {
                     trg.d.gotoAndStop(5);
                  }
               }
               else if(trg.eternal)
               {
                  if(random(50) == 0)
                  {
                     if(!mheart || random(5) == 0)
                     {
                        trg.spinny = 1;
                        trg.revers = f1 < 0;
                        trg.firer = -10;
                     }
                  }
               }
               trg.rp += f1;
            }
         }
         else if(trg.d._currentframe == 5)
         {
            if(trgnextd(trg.d.d.d))
            {
               trg.d.gotoAndStop(1);
            }
            if(trg.d.d.d.doit)
            {
               trg.d.d.d.doit = false;
               lasershowx(trg.rp * p180);
            }
            trg.d.d.d._rotation = trg.rp;
         }
         trg.d.hx._rotation = trg.rp;
         break;
      case 90:
         bord(580,60,410,170);
         if(fra % 3 == 0)
         {
            i = 0;
            while(i < ball.length)
            {
               trg3 = ball[i];
               if(trg.s == trg3.s && !trg3.dones)
               {
                  if(trg3 != trg && trg3)
                  {
                     enf = enfcheck(trg.xp,trg.yp,trg3.xp,trg3.yp,100);
                     if(enf > 0)
                     {
                        enf = (100 - enf) / enf * 0.0003;
                        xenf *= enf;
                        yenf *= enf;
                        trg.xbew += xenf;
                        trg.ybew += yenf;
                        trg3.xbew -= xenf;
                        trg3.ybew -= yenf;
                     }
                  }
               }
               i++;
            }
         }
      case 26:
         if(trg.s == 26)
         {
            bord(580,60,410,170);
         }
         trg.outway = false;
         if(random(10) == 0)
         {
            splater(trg.xp,trg.yp,random(10),Math.random() * 0.5 + 0.4);
         }
         if(trg.fire <= 0 || trg.s == 90 && trg.d._currentframe < 3)
         {
            enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
            enf = 0.13 / enf;
            if(trg.alter == 2 && trg.s == 26)
            {
               enf *= 3;
            }
            trg.xbew -= xenf * enf;
            trg.ybew -= yenf * enf;
         }
         trg.xbew *= 0.93;
         trg.ybew *= 0.93;
      case 56:
      case 12:
      case 27:
      case 42:
         if(trg.s == 27)
         {
            if((trg.d._currentframe == 5 || trg.d._currentframe == 6) && (trg.d.d._currentframe == 9 || trg.d.d._currentframe == 55))
            {
               _root.soundy("animal_squish" + random(3) + ".wav",100);
            }
            if(trg.eternal)
            {
               if(trg.d._currentframe < 3)
               {
                  if(random(100) == 0)
                  {
                     trg.d.gotoAndStop(6);
                  }
               }
               if(trg.d._currentframe == 6 && trg.d.d._currentframe == 17)
               {
                  trg.d.d.gotoAndStop(52);
               }
               if(trg.d._currentframe == 6 && trg.d.d._currentframe == 55)
               {
                  quadf(trg.xp,trg.yp,8,1);
               }
               if(trg.d._currentframe == 5 && trg.d.d._currentframe == 11)
               {
                  trg.reps = 2;
               }
               if(trg.d._currentframe == 5 && trg.d.d._currentframe == 41 && trg.alter == 2)
               {
                  if(trg.reps-- > 0)
                  {
                     trg.d.d.gotoAndStop(23);
                     trg.fir = -1;
                  }
                  else
                  {
                     trg.fir = undefined;
                  }
               }
               if(trg.d._currentframe == 5 && trg.d.d._currentframe == 39)
               {
               }
            }
         }
         f1 = 4;
         if(trg.s == 42)
         {
            trg.xp = trg.xpp;
            trg.yp = trg.ypp;
            f1 = 12;
            levz[trg.til] = 3;
         }
         if(justnow > 30 && trg.s == 42)
         {
            trg.d.gotoAndStop(3);
         }
         else
         {
            if(trg.s != 26 && trg.s != 90)
            {
               trg.xbew *= 0.7;
               trg.ybew *= 0.7;
            }
            if(trg.s != 56 || trg.d.d._currentframe != 22 || trg.fire > 0)
            {
               trgnextd();
            }
            else if(random(50) == 0)
            {
               trg.d.gotoAndStop(5);
               trg.d.d.gotoAndStop(49);
            }
            if(trg.alter == 2 && trg.s == 26)
            {
               if(trg.eternal)
               {
                  if(fra % 4 == 0)
                  {
                     trg2 = parc("bloo",trg.xp + crand(),trg.yp + crand(Math.random() * 8));
                  }
               }
            }
            else if(trg.s != 27 || trg.d._currentframe != 6)
            {
               firemode(200,f1);
            }
         }
         if(trg.s == 56)
         {
            markhere(trg);
            if(trg.whuz)
            {
               if(trg.d._currentframe < 3)
               {
                  trg.d.gotoAndStop(2);
                  trg.bh = false;
                  telpx();
                  if(random(20) == 0)
                  {
                     trg.d.gotoAndStop(5);
                  }
               }
               else
               {
                  trg.bh = true;
               }
            }
            else
            {
               trg.whuz = true;
               trg.d.gotoAndStop(5);
               trg.d.d.gotoAndStop(21);
            }
            trg.bh = trg.d._currentframe != 5 || trg.d.d._currentframe > 11 && trg.d.d._currentframe < 54;
            if(trg.d._currentframe == 5 && (trg.d.d._currentframe == 11 || trg.d.d._currentframe == 54))
            {
               _root.soundy("Meat_jumps" + random(5) + ".wav");
            }
            if(trg.d._currentframe == 5 && trg.eternal && trg.d.d._currentframe == 3)
            {
               trg.reps = 2;
            }
            if(trg.d._currentframe == 5 && trg.eternal && trg.d.d._currentframe == 43)
            {
               if(trg.reps-- > 0)
               {
                  trg.d.d.gotoAndStop(31);
               }
            }
         }
         if(trg.s == 56)
         {
            trg.xp = trg.xpp;
            trg.yp = trg.ypp;
         }
         if(trg.s == 42)
         {
            levz[trg.til] = 2;
         }
         break;
      case 26.5:
         trg.s = 26;
         trg._visible = true;
         trg.bh = true;
         if(random(10) == 0 && trg._visible)
         {
            splater(trg.xp,trg.yp,random(10),Math.random() * 0.5 + 0.2);
         }
         break;
      case 11:
         if(trg.specoz == 23)
         {
            if(trg.fast)
            {
               f1 = 1.1;
            }
            else
            {
               f1 = 0.6;
            }
            pathfind(trg,playx,playy,f1);
            firewalk();
            trg.fire--;
         }
         else
         {
            if(!trg.bnuts)
            {
               trg.d.bb._visible = false;
            }
            else
            {
               firewalk();
            }
            trg.xbew *= 0.75;
            trg.ybew *= 0.75;
            randrun();
         }
         if(random(10) == 0)
         {
            splater(trg.xp,trg.yp,random(10),Math.random() * 0.5 + 0.4);
         }
         walkframe(2);
         sideflip(trg.xbew);
         break;
      case 35:
         trg.phb = true;
         if(trg.trg2 == undefined)
         {
            trg.trg2 = _loc0_ = create(trg.xp,trg.yp,0,0,0,0,26);
            trg2 = _loc0_;
            trg.trg2.outway = true;
            trg2.trg2 = trg;
            if(trg2.eternal)
            {
               trg.eternal = true;
               trg.specoz = 23;
               trg._yscale = _loc0_ = trg2._yscale;
               trg._xscale = _loc0_;
               trg.hp += 20;
               speco(trg);
            }
         }
         else
         {
            trg2 = trg.trg2;
            if(trg2.hp <= 0 || random(1000) == 0)
            {
               trg.gosplash = true;
               attach(trg,11);
               trg.s = 11;
               trg.see = false;
               trg.outway = true;
               trg.hp = hps[trg.s];
               splater(trg.xp,trg.yp,random(10) + 1,Math.random() + 0.6);
               if(trg.eternal)
               {
                  trg.hp += 15;
               }
            }
            else
            {
               trg2.d._xscale = trg.d._xscale;
               trg2.d.gotoAndStop(6);
               trg2.fra = -100;
               trg2.s = 26.5;
               trg2.pbh = true;
               trg2.alter = 1;
               trg.fire--;
               if(trg.d._currentframe < 3)
               {
                  trg2.xp = trg.xp;
                  trg2.yp = trg.yp;
                  trg2.ybew = _loc0_ = 0;
                  trg2.xbew = _loc0_;
                  trg2._visible = false;
                  trg2.bh = false;
                  if(fra % 4 == 0)
                  {
                     enf = _loc0_ = enfcheck(trg.xp,trg.yp,player.xp + player.xbew * 1.5,player.yp + player.ybew * 1.5,130);
                     if(_loc0_)
                     {
                        trg.see = true;
                        if(trg.lastv)
                        {
                           enf = 14 / enf;
                           trg2.xbew = (- xenf) * enf;
                           trg2.ybew = (- yenf) * enf;
                           trg.d.gotoAndStop(6);
                           trg.fire = 30;
                           _root.soundy("meatheadshoot" + random(3) + ".wav");
                           if(trg.eternal)
                           {
                              quadf(trg.xp,trg.yp,9,1);
                           }
                        }
                     }
                     else
                     {
                        trg.see = false;
                     }
                  }
               }
               if(trg.d._currentframe >= 3)
               {
                  enf = enfcheck(trg.xp,trg.yp,trg2.xp,trg2.yp,30000);
                  if(enf < 5 && trg.fire < 15)
                  {
                     trg.d.gotoAndStop(1);
                  }
                  else
                  {
                     if(trg.d._xscale < 0)
                     {
                        xenf = - xenf;
                     }
                     i = 0;
                     while(i < 9)
                     {
                        trg3 = trg.d["n" + i];
                        f1 = (7 - i) / 8;
                        trg3._x = (- xenf) * f1;
                        f2 = Math.abs(i - 4);
                        f2 = 16 - f2 * f2;
                        f3 = 100;
                        f2 *= Math.max(0,f3 - enf) / f3;
                        trg3._y = (- yenf) * f1 - 25 + f2 + i - 6;
                        trg3._visible = true;
                        i++;
                     }
                     if(trg.d._xscale < 0)
                     {
                        xenf = - xenf;
                     }
                     enf = 0.7 / enf;
                     trg2.xbew += xenf * enf;
                     trg2.ybew += yenf * enf;
                     f1 = 0.9 + trg.fire * 0.0028;
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
         if(trg.s == 87 && trg.eternal)
         {
            if(fra10 && random(3) != 0)
            {
               trg2 = parc("bloo",trg.xp + crand(4),trg.yp + crand(4));
               trg2._xscale *= 1.2;
               trg2._yscale = trg2._xscale;
               if(random(3) == 0)
               {
                  splater(trg.xp + crand(4),trg.yp + crand(4),31 + random(10),Math.random() + 0.2);
               }
               colorit(trg2,0,2,0,0,40,0);
            }
         }
         if(trg.s == 24 && trg.eternal)
         {
            if(trg.d._currentframe != 5)
            {
               if(enfcheckx(trg.xp,trg.yp,player.xp,player.yp,300) && random(100) == 0 || enfcheck(trg.xp,trg.yp,player.xp,player.yp,80) > 0 && random(1000) == 0)
               {
                  trg.gosplash = true;
                  if(trg.alter == 2)
                  {
                     trg.d.gotoAndStop(6);
                  }
                  else
                  {
                     trg.d.gotoAndStop(5);
                  }
                  trg.outway = true;
                  trg.hp = Math.max(20,trg.hp + 5);
                  splater(trg.xp,trg.yp,random(10) + 1,Math.random() + 0.6);
               }
            }
         }
         gochar = trg.s != 58;
         if(trg.s != 35)
         {
            f1 = trgnextd();
            if(trg.d._currentframe == 6 && trg.s == 58)
            {
               telpx(true);
            }
            if(f1 == 6 && trg.s == 58)
            {
               i = 0;
               while(i < 100 && trg.xpp == undefined)
               {
                  telpx(true);
                  i++;
               }
               if(trg.xpp != undefined)
               {
                  trg.xp = trg.xpp;
                  trg.yp = trg.ypp;
               }
               trg.d.gotoAndStop(5);
               trg.xpp = undefined;
            }
         }
         if(trg.s == 58)
         {
            trg.bh = (trg.d._currentframe != 5 || trg.d.d._currentframe > 3) && (trg.d._currentframe != 6 || trg.d.d._currentframe < 7);
            if(trg.d._currentframe == 5 && trg.d.d._currentframe == 3 || trg.d._currentframe == 6 && trg.d.d._currentframe == 7)
            {
               _root.soundy("Meat_jumps" + random(5) + ".wav");
            }
         }
         if(trg.d._currentframe < 3)
         {
            if(random(10) == 0 && trg.s != 10)
            {
               if(trg.s == 87)
               {
                  splater(trg.xp,trg.yp,random(10) + 31,Math.random() * 0.5 + 0.2);
               }
               else
               {
                  splater(trg.xp,trg.yp,random(10),Math.random() * 0.5 + 0.2);
               }
            }
            walkframe();
            if(trg.s == 58)
            {
               if(!trg.eternal)
               {
                  pathfind(trg,playx,playy,0.8);
               }
               else
               {
                  trg.xbew *= 0.7;
                  trg.ybew *= 0.7;
                  trg.spoo = trg.spoo + 1;
                  if(trg.spoo > 0)
                  {
                     if(trg.spoo == 10 || trg.spoo == 20 && fra < 5000 || trg.spoo == 30 && fra < 2500)
                     {
                        b1 = allets;
                        allets = false;
                        enf = enfcheck(trg.xp,trg.yp,player.xp,player.yp,1000);
                        enf = -15 / enf;
                        xenf *= enf;
                        yenf *= enf;
                        trg.hp -= 4;
                        trg2 = create(trg.xp + xenf,trg.yp + yenf,0,0,0,0,58);
                        trg2.specoz = 23;
                        trg2.fra = -100;
                        trg2.hp *= 0.666;
                        trg2._yscale *= 0.82;
                        trg2._xscale = _loc0_;
                        speco(trg2);
                        _root.soundy("summonsound.wav",80);
                        sideflip(xenf);
                        allets = b1;
                     }
                     if(trg.spoo > 50)
                     {
                        trg.spoo = -100;
                     }
                  }
                  else if(trg.spoo == 0)
                  {
                     trg.spoo = undefined;
                  }
                  else
                  {
                     if(linecheck(player.xp,player.yp,trg.xp,trg.yp))
                     {
                        if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,130))
                        {
                           if(ashut < 5)
                           {
                              trg.spoo = 1;
                           }
                        }
                     }
                     sideflip(- trg.xp + player.xp);
                  }
               }
            }
            else if(trg.s == 24)
            {
               pathfind(trg,playx,playy,0.4 + trg.alter * 0.35);
            }
            else
            {
               pathfind(trg,playx,playy,0.6);
            }
            sideflip(trg.xbew);
            if(trg.s == 87)
            {
               if(random(60) == 0)
               {
                  if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,130))
                  {
                     trg.d.gotoAndStop(5);
                     sideflip(- xenf);
                  }
               }
            }
            if(trg.s == 58)
            {
               if(random(30) == 0 && !trg.lastv && trg.spoo <= 0)
               {
                  trg.d.gotoAndStop(6);
               }
            }
         }
         else
         {
            if(trg.s == 87 && trg.d._currentframe == 5 && trg.d.d._currentframe == 5)
            {
               trg2 = green();
               _root.soundy("heartout.wav",70);
               if(trg.eternal)
               {
                  trg2.hom = 3;
                  colorit(trg2,0.8,1,2.5,0,0,0);
                  trg2.longshot = 2;
                  trg2.dm = -26;
                  trg2.d._yscale = _loc0_ = 240;
                  trg2.d._xscale = _loc0_;
                  trg2.pois = 10;
               }
            }
            if(trg.alter == 2 && trg.s != 35)
            {
               if(enfcheck(trg.xp,trg.yp,player.xp,player.yp,200))
               {
                  enf = 0.5 / enf;
                  trg.xbew += xenf * enf;
                  trg.ybew += yenf * enf;
               }
               trg.xbew *= 0.83;
               trg.ybew *= 0.83;
            }
            else
            {
               trg.xbew *= 0.7;
               trg.ybew *= 0.7;
            }
         }
   }
}
function physix()
{
   for(e in ball)
   {
      trg = ball[e];
      f1 = 1;
      if(trg.s < 5)
      {
         if(sloww > -40)
         {
            f1 = Math.max(0.75,0.5 - sloww / 80);
            if(sloww > 0)
            {
               trg.free = true;
            }
         }
         else
         {
            f1 = 1;
         }
      }
      else if(slow > -40)
      {
         f1 = Math.max(0.5,0.5 - slow / 80);
         if(slow > 0)
         {
            trg.free = true;
         }
      }
      else if(trg.spid > 0)
      {
         trg.spid--;
         trg.xbew *= 0.7;
         trg.ybew *= 0.7;
      }
      if(trg.s == 7 || trg.s == 8)
      {
         if(Math.abs(trg.ybew) <= 0)
         {
            trg.ybew = trg.ypp * 0.7;
         }
      }
      if(trg.frezz <= 0 || scare > 0)
      {
         if(f1 == 1)
         {
            trg.xp += trg.xbew;
            trg.yp += trg.ybew;
         }
         else
         {
            trg.xp += trg.xbew * f1;
            trg.yp += trg.ybew * f1;
         }
      }
      trg.xb = trg.yb = trg.rr = 0;
   }
   for(e in ball)
   {
      trg = ball[e];
      if(trg.dones)
      {
         trg.xbew = trg.ybew = 0;
         trg2 = undefined;
         if(trg.s == 9)
         {
            if(trg.bomb)
            {
               bomf.push([trg.xp,trg.yp,true,trg.pois]);
            }
            else
            {
               trg2 = parc("bloodsplash",trg.xp,trg.yp + trg.d._y,random(360),trg.d._xscale,trg.dpppp + 123);
               if(trg.colo)
               {
                  var _loc3_ = new flash.geom.Transform(trg2);
                  _loc3_.colorTransform = trg.colo;
               }
               if(blackout == 2)
               {
                  colorit(trg2,0,0,0,0,0,0);
               }
            }
            trg.done = true;
         }
         switch(trg.s)
         {
            case 1:
               break;
            case 43:
            case 20:
               trg.d.gotoAndStop(5);
               trg2 = trg.d.d;
               if(trg2._currentframe < 66 && fra % 10 == 0)
               {
                  trg.lasts = trg2._currentframe < 55;
                  gosplash();
               }
               break;
            case 5:
               trg2 = trg.d.d.d;
               break;
            case 2:
               if(trg.bomb)
               {
                  trg.spl = 30;
                  if(trg.bombo)
                  {
                     trg.header = 100;
                  }
                  else
                  {
                     trg.header = 300;
                  }
                  trg.dfr = true;
                  trg.s = 4;
                  attach(trg,4);
                  trg.d.gotoAndStop(5);
                  trg2 = undefined;
                  break;
               }
            case 9:
               if(!trg.dsound)
               {
                  trg.dsound = true;
                  _root.soundy("TearImpacts" + random(3) + ".mp",85);
               }
            case 7:
            case 8:
               if(trg.s != 4)
               {
                  if((random(30) == 0 || trg.spll) && (!trg.firstt || !trg.tooth))
                  {
                     splater(trg.xp,trg.yp,trg.spl + 1 + random(10),Math.random() * 0.8 + 0.1);
                  }
                  if(!trg.firstt)
                  {
                     trg.firstt = true;
                     if(trg.tooth)
                     {
                        trg.d._rotation = random(60) - 30;
                        if(random(2) == 0)
                        {
                           trg.d._xscale *= -1;
                        }
                     }
                     else
                     {
                        trg.d._rotation = random(360);
                     }
                  }
                  trg2 = trg.d;
               }
               break;
            case 19:
               if(_root.levz[_root.lev] <= 0)
               {
                  f1 = true;
                  for(a in ball)
                  {
                     trg2 = ball[a];
                     if(trg2.s == 19 && !trg2.dones)
                     {
                        f1 = false;
                     }
                  }
                  if(f1)
                  {
                     trg.bossd = true;
                  }
               }
            default:
               if(trg.s == 77)
               {
                  trg.d.gotoAndStop(14);
               }
               else if(trg.s == 76)
               {
                  trg.d.gotoAndStop(12);
               }
               else if(trg.s == 73)
               {
                  trg.d.gotoAndStop(9);
               }
               else if(trg.s == 72)
               {
                  trg.d.gotoAndStop(6);
               }
               else if(trg.s == 28)
               {
                  trg.d.gotoAndStop(trg.mag + 6);
               }
               else if(!trg.dfr)
               {
                  trg.d.gotoAndStop(3);
               }
               trg2 = trg.d.d;
               if(trg.s == 102)
               {
                  if(trg2._currentframe == 17)
                  {
                     _root.soundy("superholy.wav",200);
                  }
               }
               else if(trg.s == 100)
               {
                  if(trg2._currentframe == 66 || trg2._currentframe == 15 || trg2._currentframe == 18 || trg2._currentframe == 21 || trg2._currentframe == 24 || trg2._currentframe == 28 || trg2._currentframe == 32 || trg2._currentframe == 38 || trg2._currentframe == 44 || trg2._currentframe == 51 || trg2._currentframe == 75)
                  {
                     trg.lasts = trg2._currentframe < 70;
                     splater(trg.xp,trg.yp,random(10) + 1 + trg.spl,1 + Math.random() * 2);
                     gosplash();
                  }
               }
               else if(trg.s == 99)
               {
                  if(trg2._currentframe == 66 || trg2._currentframe == 3 || trg2._currentframe == 6 || trg2._currentframe == 9 || trg2._currentframe == 12 || trg2._currentframe == 15 || trg2._currentframe == 19 || trg2._currentframe == 35)
                  {
                     trg.lasts = trg2._currentframe < 60;
                     splater(trg.xp,trg.yp,random(10) + 1 + trg.spl,1 + Math.random() * 2);
                     gosplash();
                  }
               }
               else if(trg.s == 28)
               {
                  if(trg2._currentframe > 70 - trg.mag * 18 && trg2._currentframe < 84 - trg.mag * 21 && fra5)
                  {
                     splater(trg.xp,trg.yp,random(10) + 1 + trg.spl,1 + Math.random() * 2);
                     gosplash();
                  }
               }
               else if(trg.s == 36)
               {
                  if(trg2._currentframe < 80 && fra % 7 == 0)
                  {
                     splater(trg.xp,trg.yp,random(10) + 1 + trg.spl,1 + Math.random() * 3.5);
                     gosplash();
                  }
               }
               else if(!trg.firsttx)
               {
                  trg.firsttx = true;
                  gosplash();
               }
               f1 = Math.random() * 0.7 + 0.4;
               if(trg.s == 14)
               {
                  f1 *= 0.7;
               }
               if(trg2._currentframe <= 3)
               {
                  splater(trg.xp,trg.yp,random(10) + 1 + trg.spl,f1);
               }
         }
         if(trg2._currentframe == trg2._totalframes && trg2._alpha)
         {
            trg.done = true;
         }
         else
         {
            trg2.nextFrame();
         }
         trg.sh._visible = false;
      }
   }
   e = 0;
   while(e < ball.length)
   {
      trg = ball[e];
      if(trg.d.done || trg.done || trg.s <= -10)
      {
         if(trg.s == 4)
         {
            if(_root.so.data.bomb > 100)
            {
               _root.locker[35] = true;
            }
         }
         if(trg.s == 30)
         {
            boils--;
         }
         ball.splice(e,1);
         removeMovieClip(trg);
         trg.swapDepths(87);
      }
      e++;
   }
   e = 0;
   while(e < ball.length)
   {
      trg = ball[e];
      trg.gh = false;
      e++;
   }
   topz(3);
   grid.fillRect(grid.rectangle,0);
   grid2.fillRect(grid2.rectangle,0);
   tests.fillRect(tests.rectangle,0);
   e = 0;
   bollocks = [];
   bollocks2 = [];
   while(e < ball.length)
   {
      trg = ball[e];
      if(trg == player)
      {
         ea = e;
      }
      e++;
      if(trg.s > 3 && !trg.noneed)
      {
         if((trg.pbh || trg.outway) && trg.bh && !trg.dones)
         {
            f1 = gridp(trg.xp,trg.yp,-0.5,-0.5);
            gridput2([int(f1[0] + gridmax),int(f1[1])],e);
            gridput2([int(f1[0] + gridmax),int(f1[1] + 1)],e);
            gridput2([int(f1[0]),int(f1[1])],e);
            gridput2([int(f1[0]),int(f1[1] + 1)],e);
         }
         else if(trg.ph && trg.bh && !trg.dones)
         {
            bollocks.push(e - 1);
         }
         else if(trg.bh && !trg.dones)
         {
            f1 = gridp(trg.xp,trg.yp,-0.5,-0.5);
            gridput([int(f1[0] + gridmax),int(f1[1])],e);
            gridput([int(f1[0] + gridmax),int(f1[1] + 1)],e);
            gridput([int(f1[0]),int(f1[1])],e);
            gridput([int(f1[0]),int(f1[1] + 1)],e);
         }
      }
      else if(trg.noneed)
      {
         if(trg.noned-- < 0)
         {
            trg.noneed = false;
         }
      }
   }
   i = 1;
   while(i < 300)
   {
      tests.setPixel(i,i,1);
      i++;
   }
   gxee = gxe * gridmax;
   i = 1;
   while(i < gxee)
   {
      o = 1;
      while(o < gye)
      {
         z = 0;
         while(z < gridmax && grid.getPixel(i + z,o) != 0)
         {
            e = grid.getPixel(i + z,o) - 1;
            c = z + 1;
            while(c < gridmax && grid.getPixel(i + c,o) != 0)
            {
               a = grid.getPixel(i + c,o) - 1;
               ballhit(e,a);
               c++;
            }
            z++;
         }
         o++;
      }
      i += gridmax;
   }
   bollocks3 = [];
   for(e in ball)
   {
      trg = ball[e];
      if(trg.bh && !trg.outway)
      {
         if(trg.s < 5 || trg.s == 44 || trg.s == 28)
         {
            f1 = gridp(trg.xp,trg.yp);
            i = f1[0];
            o = f1[1];
            z = 0;
            while(z < gridmax && grid2.getPixel(i + z,o) != 0)
            {
               a = grid2.getPixel(i + z,o) - 1;
               ballhit(e,a);
               z++;
            }
            if(trg.s < 5)
            {
               z = 0;
               while(z < gridmax && grid.getPixel(i + z,o) != 0)
               {
                  a = grid.getPixel(i + z,o) - 1;
                  ballhit(e,a);
                  z++;
               }
            }
         }
      }
   }
   for(i in bollocks)
   {
      a = bollocks[i];
      e = ea;
      ballhit(e,a);
      for(z in flys)
      {
         e = flys[z];
         ballhit(e,a);
      }
   }
   tip(3);
   if(flys.length > 2)
   {
      fll = 0.6666666666666666;
   }
   else
   {
      fll = 1;
   }
   flys = [];
   for(e in ball)
   {
      trg = ball[e];
      trg.xbew += trg.xb;
      trg.ybew += trg.yb;
      trg.xb = trg.yb = trg.rr = 0;
   }
   topz(4);
   for(e in ball)
   {
      trg = ball[e];
      if(!trg.ggh && !trg.dones)
      {
         f1 = trg.s > 2;
         if(trg == player || trg.s == 23 || trg.s == 55 || trg.s == 32 || trg.s == 44)
         {
            f1 = !enfcheckx(trg.xp,trg.yp,320,280,1000) || hhorse > 0;
         }
         if(trg.s == 84)
         {
            trg.xp = Math.min(580,Math.max(60,trg.xp));
         }
         else if(trg.s < 67 && trg.s > 62 || trg.s == 83)
         {
            trg.yp = Math.min(410,Math.max(170,trg.yp));
         }
         else if(trg.flyai)
         {
            trg.xp = Math.min(580,Math.max(60,trg.xp));
            trg.yp = Math.min(410,Math.max(180,trg.yp));
         }
         else if(f1 && !trg.sic && !trg.horse && trg.s != 9 && !(trg.s >= 63 && trg.s <= 66))
         {
            trg.xp = Math.min(580,Math.max(60,trg.xp));
            trg.yp = Math.min(420,Math.max(150,trg.yp));
            if(trg == player)
            {
               if(trg.xp == 580 || trg.xp == 60 || trg.yp == 420 || trg.yp == 150)
               {
                  if(horse < 90)
                  {
                     horse = undefined;
                     trg.xbew *= 0.6;
                     trg.ybew *= 0.6;
                  }
                  f1 = ingrid(trg.xp,trg.yp);
                  if(levzz(f1) > 1 && hhorse <= 0)
                  {
                     turdb = f1;
                  }
               }
            }
         }
         if(trg == player)
         {
            if(turdb)
            {
               outgrid(turdb);
               if(enfcheck(xenf,yenf,trg.xp,trg.yp,35))
               {
                  turdz = levz[turdb];
                  levz[turdb] = 0;
               }
               else
               {
                  turdb = undefined;
               }
            }
         }
         f1 = trg.xp;
         f2 = trg.yp;
         f5 = f6 = 0;
         siz = sizes[trg.s] + 2;
         v1 = trg.s;
         if(trg == player)
         {
            if(ladder != undefined)
            {
               if(levz[ladder] == 3)
               {
                  levz[ladder] = 0;
               }
            }
         }
         if(trg.shot)
         {
            if(trg._alpha > 50 && trg.sss != 84 && !trg.knife || trg.death)
            {
               if(mhity(f1,f2))
               {
                  mhix();
               }
               else if(levzz(f33) == 0.99)
               {
                  if(webs[f33] && !trg.slowed)
                  {
                     trg.slowed = true;
                     trg.xbew *= 0.64;
                     trg.ybew *= 0.64;
                  }
               }
            }
            else if(random(Math.max(7 - _root.luck,1)) == 0 || trg.knife)
            {
               killshit(ingrid(trg.xp,trg.yp));
            }
         }
         else if(trg.flyby == 2)
         {
            mhix();
         }
         else if(trg.flyby)
         {
            f3 = false;
            for(i in hardx[v1])
            {
               f3 = !f3;
               if(f3)
               {
                  if(mhitx(f1 + hardx[v1][i],f2 + hardy[v1][i]))
                  {
                     f5 += hardx[v1][i];
                     f6 += hardy[v1][i];
                  }
               }
            }
            f3 = true;
            if(Math.abs(f5) > 0 || Math.abs(f6) > 0 || trg.gh)
            {
               for(i in hardx[v1])
               {
                  f3 = !f3;
                  if(f3)
                  {
                     if(mhitx(f1 + hardx[v1][i],f2 + hardy[v1][i]))
                     {
                        f5 += hardx[v1][i];
                        f6 += hardy[v1][i];
                     }
                  }
               }
            }
         }
         else
         {
            f3 = false;
            for(i in hardx[v1])
            {
               f3 = !f3;
               if(f3)
               {
                  if(mhit(f1 + hardx[v1][i],f2 + hardy[v1][i]))
                  {
                     f5 += hardx[v1][i];
                     f6 += hardy[v1][i];
                  }
               }
            }
            f3 = true;
            if(Math.abs(f5) > 0 || Math.abs(f6) > 0 || trg.gh)
            {
               for(i in hardx[v1])
               {
                  f3 = !f3;
                  if(f3)
                  {
                     if(mhit(f1 + hardx[v1][i],f2 + hardy[v1][i]))
                     {
                        f5 += hardx[v1][i];
                        f6 += hardy[v1][i];
                     }
                  }
               }
            }
         }
         if(Math.abs(f5) > 0 || Math.abs(f6) > 0)
         {
            if(trg.s == 9)
            {
               trg.dones = true;
            }
            if(trg.breaker)
            {
               f1 = ingrid(trg.xp,trg.yp);
               var _loc2_ = true;
               i = 0;
               while(i < door.length)
               {
                  trg = door[i];
                  if(trg.blo == f1)
                  {
                     _loc2_ = false;
                  }
                  i++;
               }
               if(_loc2_)
               {
                  bloww(f1,trg.xbew,trg.ybew);
               }
            }
            if(trg == player && fra > 20)
            {
               if(horse < 90)
               {
                  horse = undefined;
                  trg.xbew *= 0.6;
                  trg.ybew *= 0.6;
               }
               f1 = f6 * trg.ybew + f5 * trg.xbew;
               trg.xbew *= 0.88;
               trg.ybew *= 0.88;
               if(f1 > 0 || lastf1 > fra)
               {
                  if(f1 > 0)
                  {
                     lastf1 = fra + 4;
                  }
                  trg.ghhh = true;
                  if(lastf2 <= fra)
                  {
                     lastf2 = fra + 10;
                     if(Math.abs(f5) > Math.abs(f6))
                     {
                        lastxx = 0;
                        lastxy = 1;
                     }
                     else
                     {
                        lastxy = 0;
                        lastxx = 1;
                     }
                  }
               }
            }
            if(trg.s == 2 && !trg.dones)
            {
               trg.dones = true;
               v2 = 10 / enfget(trg.xbew,trg.ybew);
               v2 = ingrid(trg.xp + trg.xbew * v2,trg.yp + trg.ybew * v2);
               v1 = trg.dmg > 5;
               if(!killshit(v2,v1))
               {
                  if(!killshit(ingrid(trg.xp + 10,trg.yp),v1))
                  {
                     if(!killshit(ingrid(trg.xp,trg.yp + 10),v1))
                     {
                        if(!killshit(ingrid(trg.xp - 10,trg.yp),v1))
                        {
                           killshit(ingrid(trg.xp,trg.yp - 10,v1));
                        }
                     }
                  }
               }
            }
            roty = sizes[trg.s] * 3.141592653589793 / 180;
            f7 = Math.sqrt(f5 * f5 + f6 * f6);
            f5 /= f7;
            f6 /= f7;
            if(trg.rotn != undefined)
            {
               trg.roty = Math.atan((- f5) / f6) / 3.141592653589793 * 180;
               if(f6 >= 0)
               {
                  trg.roty += 180;
               }
               trg.rotn = 3;
            }
            f8 = (- f5) * trg.xbew - f6 * trg.ybew;
            if(f8 < 0)
            {
               trg.rr = trg.rr + 1;
               trg.gh = true;
               if(trg.s == 99 && trg.fraz <= fra)
               {
                  trg.fraz = fra + 5;
                  _root.soundy("Death_Burst_Large_1.mp",f8 * 5);
               }
               f9 = f8 * 1.8 - 0.1;
               if(f9 < -10)
               {
                  soundy("mh");
               }
               if(trg.s == 99)
               {
                  f9 *= 1.4;
               }
               trg.xbew += f5 * f9;
               trg.ybew += f6 * f9;
               siz = Math.sqrt(trg.xbew * trg.xbew + trg.ybew * trg.ybew);
               siz2 = sizes[trg.s];
               if(siz > 0 && f8 < 0)
               {
                  f1 = trg.xp;
                  f2 = trg.yp;
                  if(trg.shot)
                  {
                     if(trg.s == 14 || trg.s == 13)
                     {
                        siz2 = 5;
                     }
                     v2 = siz2 - 10;
                     while(!mhity(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 4;
                     }
                     v2 -= 4;
                     while(!mhity(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 0.5;
                     }
                  }
                  else if(trg.flyby)
                  {
                     v2 = siz2 - 10;
                     while(!mhitx(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 4;
                     }
                     v2 -= 4;
                     while(!mhitx(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 0.5;
                     }
                  }
                  else
                  {
                     v2 = siz2 - 10;
                     while(!mhit(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 4;
                     }
                     v2 -= 4;
                     while(!mhit(f1 + f5 * v2,f2 + f6 * v2) && v2 < siz2 + 10)
                     {
                        v2 += 0.5;
                     }
                  }
                  v2 -= siz2;
                  if(v2 > 0)
                  {
                     v2 = 0;
                  }
                  else
                  {
                     v2 *= Math.max(0.2 - v2 * 0.05,1);
                  }
                  trg.xp += f5 * v2;
                  trg.yp += f6 * v2;
                  f8 = (- f8) / siz;
                  f8 = 1 - f8 * 0.5;
                  trg.xbew *= f8;
                  trg.ybew *= f8;
               }
            }
         }
         if(turdz)
         {
            levz[turdb] = turdz;
            turdz = undefined;
         }
         if(trg.rr > 0)
         {
            trg.xbew += trg.xb / trg.rr;
            trg.ybew += trg.yb / trg.rr;
         }
         if(trg == player)
         {
            if(ladder != undefined)
            {
               if(levz[ladder] == 0)
               {
                  levz[ladder] = 3;
               }
            }
         }
      }
   }
   e = 0;
   while(e < ball.length)
   {
      trg = ball[e];
      if(trg.laser)
      {
         trg2 = trg.d.l;
         if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
         {
            f1 = lass;
         }
         else
         {
            f1 = lass;
         }
         trg2._yscale = f1;
         trg2._xscale = lassd * 30;
      }
      if(trg == player)
      {
         if(ashut > 0 || Math.abs(trg.xp - 320) > 25 && Math.abs(trg.yp - 280) > 25)
         {
            if(levz[ingrid(trg.xp + trg.xbew,trg.yp + trg.ybew)] > 1)
            {
               bord(568,60,410,150);
            }
         }
      }
      trg._x = trg.xp;
      trg._y = trg.yp;
      if(trg.s == 79)
      {
         if(!trg.dones)
         {
            if(!trg.alt)
            {
               trg2 = trg.trg2;
               trg3 = trg.trg3;
               if(trg2)
               {
                  gem(trg2,0);
               }
               if(trg3)
               {
                  gem(trg3,1);
               }
            }
         }
      }
      if(mheart == trg)
      {
         trg.d.veins._x = - trg._x + 320;
         trg.d.veins._y = - trg._y + 100;
      }
      if(trg.s == 19)
      {
         if(trg.dx)
         {
            trg._x -= trg.dx;
         }
      }
      if(!(trg.s == 19 && !altboss && false))
      {
         if(trg.s == 26.5)
         {
         }
         if(trg.worm)
         {
            if(trg.d._y > 10)
            {
               trg2 = worm[1];
               trg._y = Math.min(trg._y,trg2.yppp);
            }
         }
         if(trg.s == 2)
         {
            trgdy(!trg.piss && !ups[149]);
         }
         else if(trg.s == 7 || trg.s == 8 || trg.s == 9)
         {
            trgdy();
         }
         if(!trg.nod)
         {
            trg.dpppp = Math.max(e,Math.round(trg.yp) * 100 + 10030 + e);
            if(trg.s == 28)
            {
               trg.dpppp += 2500 - trg.mag * 1000;
            }
            if(trg.s == 19 || trg.s == 89)
            {
               if(trg.lar > 0)
               {
                  trg.dpppp -= trg.lar * 100;
               }
            }
            if(trg.s == 5 && trg.d._currentframe == 9)
            {
               trg.dpppp -= 2500;
            }
            if(trg.s == 26.5)
            {
               trg.dpppp += 2500;
            }
            if(trg.worm)
            {
               if(trg.worm == wormet)
               {
                  trg.dpppp += 1000;
               }
               else
               {
                  trg.dpppp -= Math.max(-30,trg.d._y) * 200;
               }
            }
            if(trg.s == 1 && trg.dones)
            {
               trg.dpppp += 100000000;
            }
            if(trg.flyai && gurdy)
            {
               trg.dpppp += 6000;
            }
            trg.swapDepths(trg.dpppp);
         }
         if(trg.col)
         {
            f1 = trg.col;
            if(trg.s == 5 && trg.d._currentframe == 7)
            {
               f1 = pic(f1);
            }
            trg.d.d.d.d.d.p.gotoAndStop(f1);
            trg.d.d.d.d.p.gotoAndStop(f1);
            trg.d.d.d.p.gotoAndStop(f1);
            trg.d.d.p.gotoAndStop(f1);
         }
         if(trg.s == 5)
         {
            if(trg.d.d._currentframe > 35 && trg.d.d._currentframe < 41)
            {
               if(trg.col == 31)
               {
                  f1 = 2;
               }
               else
               {
                  f1 = 1;
               }
               trg2 = trg.d.d.d;
               trg2.p.gotoAndStop(f1);
               trg2.p0.gotoAndStop(f1);
               trg2.p1.gotoAndStop(f1);
               trg2.p2.gotoAndStop(f1);
               trg2.p3.gotoAndStop(f1);
               trg2.p4.gotoAndStop(f1);
            }
         }
      }
      e++;
   }
   tip(4);
}
function emo(f1)
{
   if(f1)
   {
      if(emosound)
      {
         _root.soundy("thumbs down.wav");
      }
      player.d.gotoAndStop(10);
   }
   else
   {
      if(emosound)
      {
         _root.soundy("thumbsup.wav");
      }
      player.d.gotoAndStop(9);
   }
}
function lsou()
{
   if(trg.ris + 27 <= fra)
   {
      if(trg.s == 84)
      {
         _root.soundy("hand lasers.mp");
      }
      else if(trg.s == 1 || trg.s == 43 || trg.s == 49)
      {
         _root.soundy("Blood_Laser_Large.mp");
      }
      else if(trg.s == 60)
      {
         _root.soundy("RedLightning_Zap_" + random(3) + ".mp");
      }
      else
      {
         _root.soundy("Blood_Laser" + random(2) + ".mp");
      }
   }
   trg.ris = fra;
}
function linearcut(f1, f2, f3, f4, f5, f6)
{
   return (f1 * f6 - f2 * f5) / (f3 * f6 - f5 * f4);
}
function lasershowx(f1)
{
   lsou();
   xenf = Math.cos(f1);
   yenf = Math.sin(f1);
   for(a in ball)
   {
      trg2 = ball[a];
      if(trg2.s != trg.s && !trg2.dones && (trg2.bh || trg2.s == 19) && trg2.s != 78 && !trg2.shot)
      {
         f4 = trg.xp - trg2.xp;
         f5 = trg.yp - trg2.yp;
         if(trg.s == 52)
         {
            f5 -= (trg._yscale - 100) * 0.2;
         }
         f2 = linearcut(f4,f5,xenf,yenf,- yenf,xenf);
         if(Math.abs(f2) < sizes[trg2.s] + 5)
         {
            if(linearcut(f4,f5,- yenf,xenf,xenf,yenf) < 0)
            {
               if(trg2 == player)
               {
                  playerhurt(1,trg.s);
               }
               else if(trg == player || !trg2.bosser)
               {
                  hurt(trg2,22);
               }
            }
         }
      }
   }
}
function lasershow(trg, f50, b2)
{
   if(!f50)
   {
      lsou();
   }
   var _loc7_ = undefined;
   if((fra + trg.e) % 2 == 0 || trg == player && ups[118] || f50)
   {
      if(f50)
      {
         f1 = trg.xp;
         f2 = trg.yp;
         lass = 700;
         var _loc4_ = 0;
         if(_loc7_ = Math.abs(trg.ypp) > Math.abs(trg.xpp))
         {
            _loc4_ = (f2 + 20) % roxx - 20;
            if(trg.ypp < 0)
            {
               _loc4_ = - _loc4_;
            }
         }
         else
         {
            _loc4_ = (f1 + 20) % roxx - 20;
            if(trg.xpp < 0)
            {
               _loc4_ = - _loc4_;
            }
         }
         var _loc5_ = !ups[115];
         i = 1;
         while(i < 700)
         {
            f1 += trg.xpp * roxx;
            f2 += trg.ypp * roxx;
            f3 = levzz(ingrid(f1,f2));
            if(f3 >= 1 && f3 != 3 && _loc5_ || f2 < 140 || f2 > 440 || f1 > 615 || f1 < 40)
            {
               lass = i;
               i = 1000;
            }
            i += roxx;
         }
         lass -= _loc4_ - 7;
         lasx = trg.xp;
         lasy = trg.yp;
      }
      if(f50 != 2)
      {
         lassd = dmgdo();
         if(ups[2])
         {
            lassd *= 3;
         }
         if(ups[132])
         {
            lassd += 2;
         }
         if(brim)
         {
            lass = 10000;
            lassd *= 3;
            if(ups[69])
            {
               v111 = Math.max(0.1,Math.min(1,(fra - lchaf) / 60));
               lassd *= v111;
            }
         }
         _root.firrb = lassd;
      }
      if(b2 || b2 == undefined)
      {
         if(f50 == 5)
         {
            lassd *= secol * 0.2;
         }
         for(a in ball)
         {
            trg2 = ball[a];
            if(trg2.s != trg.s && (trg.s != 3 || trg2 != player) && !trg2.dones && trg2.bh && !trg2.shot)
            {
               if(hps[trg2.s] > 0)
               {
                  f1 = false;
                  xenf = trg.xp - trg2.xp;
                  yenf = trg.yp - trg2.yp;
                  if(f50)
                  {
                     f2 = 5;
                  }
                  else
                  {
                     f2 = 25;
                  }
                  if(trg2 == player)
                  {
                     f2 = 10;
                  }
                  f2 += sizes[trg2.s];
                  if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
                  {
                     if(Math.abs(yenf) < f2)
                     {
                        if(xenf * trg.xpp < 0)
                        {
                           f1 = true;
                        }
                     }
                  }
                  else if(Math.abs(xenf) < f2)
                  {
                     if(yenf * trg.ypp < 0)
                     {
                        f1 = true;
                     }
                  }
                  if(f1)
                  {
                     if(trg2 == player)
                     {
                        playerhurt(0.5,trg.s);
                     }
                     else if(f50 || !f50 && trg == player && ups[118])
                     {
                        if(enfget(xenf,yenf) - 20 < lass)
                        {
                           hurt(trg2,lassd);
                           spidcol(trg2);
                        }
                     }
                     else if(trg.s != 39 && (trg2.s != 84 || trg == player))
                     {
                        hurt(trg2,22);
                     }
                  }
               }
            }
         }
         f1 = 1000;
         if(f50)
         {
            f1 = lass + random(31);
         }
         a = 0;
         while(a < f1)
         {
            killshit(ingrid(trg.xp + trg.xpp * a,trg.yp + trg.ypp * a),f50 && lassd > 5);
            a += 10;
         }
      }
   }
}
function laps()
{
   keyhole = false;
   if(keypoww > 0)
   {
      keypoww -= 0.2;
   }
   if(_root.keys > 0 || _root.kep || ups[60] || demon > 0 || _root.coins > 0 || unic > 0 || _root.notch)
   {
      f1 = roxx / enfget(player.xbew,player.ybew);
      f3 = ingrid(player.xp + player.xbew * f1,player.yp + player.ybew * f1);
      outgrid(f3);
      trg.s = 4;
      f10 = false;
      if(levz[f3] == 1 && (demon > 0 || _root.notch))
      {
         bloww(f3,trg.xbew,trg.ybew);
         f10 = true;
      }
      else if(demon > 0 || unic > 0 || _root.notch)
      {
         if(killshit(f3,demon > 0 || _root.notch))
         {
            if(_root.notch)
            {
               killshit(f3,true);
               killshit(f3,true);
            }
            f10 = true;
         }
      }
      if(_root.notch && f10)
      {
         _root.notch = false;
         _root.itc = 0;
         player.d.gotoAndStop(11);
         player.it = 147;
         player.d.d.d.it.d.gotoAndStop(player.it);
         player.d.d.d.it.d.p.gotoAndStop(player.pilc);
      }
      trg.s = 1;
      if(_root.keys > 0 || _root.kep || _root.coins > 0)
      {
         keyhole = f3;
      }
      if(levzz(f3) == 4 && (_root.kep || _root.keys > 0))
      {
         if(f3 != keypow)
         {
            keypow = f3;
            keypoww = 0;
         }
         else if(keypoww++ > 2.8 && !player.flyby)
         {
            _root.soundy("Unlock00.wav",100);
            if(!_root.kep)
            {
               _root.keys = _root.keys - 1;
            }
            levz[f3] = 1.01;
            killshit(f3);
            _root.soundy("metal_blockbreak" + random(2) + ".wav",100);
         }
      }
      if(levzz(f3) == 3 && ups[60])
      {
         if(ladder != ingrid(player.xp,player.yp))
         {
            if(Math.abs(trg.xbew) < Math.abs(trg.ybew))
            {
               if(f3 != alad)
               {
                  if(trg.ybew < 0)
                  {
                     lads._rotation = 0;
                  }
                  else
                  {
                     lads._rotation = 180;
                  }
               }
               if(levzz(f3 + rowz) == 3 || levzz(f3 - rowz) == 3)
               {
                  f3 = 0;
               }
            }
            else
            {
               if(f3 != alad)
               {
                  if(trg.xbew > 0)
                  {
                     lads._rotation = 90;
                  }
                  else
                  {
                     lads._rotation = -90;
                  }
               }
               if(levzz(f3 + 1) == 3 || levzz(f3 - 1) == 3)
               {
                  f3 = 0;
               }
            }
            if(f3 > 0)
            {
               ladder = f3;
               alad = ladder;
               outgrid(ladder);
               lads._x = xenf;
               lads._y = yenf;
               lads._visible = true;
            }
         }
      }
   }
   if(ladder != undefined)
   {
      outgrid(ladder);
      if(!enfcheck(xenf,yenf,player.xp,player.yp,100))
      {
         ladder = undefined;
         lads._x = -10000;
         lads._visible = false;
      }
      else
      {
         outgrid(ladder);
         lads._x = xenf;
         lads._y = yenf;
         lads._visible = true;
      }
   }
}
function roll(f1)
{
   if(f1)
   {
      roller = f1 - 1;
   }
   roller--;
   return random(roller + 1) == 0;
}
function tart(f1, f3)
{
   var _loc1_ = ["X Wheel of fortune","XV The Devil","XIII Death","XI Strength","0 The Fool","I The Magician","IX The hermit","XVIII The Moon","XII The hanged Man","XX Judgement","VII The Chariot","VI The Lovers","XXI The World","VIII Justice","XVI Temperance","IV The Emperor","XVI The Tower","V The Hierophant","II The High Priestess","III The Empress","XIX The Sun","XVII The Stars"];
   _loc1_[63] = "2 of Spades";
   _loc1_[64] = "2 of Clubs";
   _loc1_[65] = "2 of Hearts";
   _loc1_[66] = "2 of Diamonds";
   _loc1_[67] = "The Joker";
   _loc1_ = _loc1_[f1 - 7];
   if(!f3)
   {
      st11(_loc1_);
   }
   return _loc1_;
}
function goodpill()
{
   _root.soundy("Powerup_spewer.wav",100);
}
function fart()
{
   var _loc2_ = create(player.xp,player.yp,0,0,0,0,4);
   _loc2_.dones = true;
   _loc2_._xscale = _loc2_._yscale = 70;
   _loc2_.d.gotoAndStop(5);
   _loc2_.fart = true;
   _loc2_.s = 4.5;
   _loc2_.dfr = true;
   showit = false;
   for(z in ball)
   {
      _loc2_ = ball[z];
      siz = 85 + sizes[Math.round(_loc2_.s)];
      enf = enfcheck(player.xp,player.yp,_loc2_.xp,_loc2_.yp,siz);
      if(enf < siz && !_loc2_.dones && _loc2_.s > 9 && _loc2_.bh && !_loc2_.shot)
      {
         _loc2_.poiss = 200;
         _loc2_.poisd = 3.5;
         hurt(_loc2_,5);
      }
   }
   _root.soundy("fart.mp");
}
function horss(f1)
{
   if(horse == 100 || hfff == fra)
   {
      if(f1)
      {
         xenf = - xenf;
         yenf = - yenf;
      }
      if(xenf != 0 || yenf != 0)
      {
         horsx = xenf;
         horsy = yenf;
         if(xenf != 0 && yenf != 0)
         {
            if(Math.abs(trg.xbew) > Math.abs(trg.ybew))
            {
               horsy = 0;
            }
            else
            {
               horsx = 0;
            }
         }
         horse = 99;
         hfff = fra;
      }
      if(f1)
      {
         xenf = - xenf;
         yenf = - yenf;
      }
   }
}
function piller()
{
   f10 = !ups[46] && !ups[75];
   f1 = _root.piller[_root.pilc];
   while(f1 == undefined)
   {
      if(f1 == undefined || f1 == 3 && ups[75] || f1 == 6 && (!f10 || player.hp < 1))
      {
         if((player.hp < player.mhp || _root.skiner == 4 && _root.armor < 3) && random(10) == 0)
         {
            f1 = 1;
         }
         else if(random(13) == 0)
         {
            f1 = 12;
         }
         else if(random(17) == 0)
         {
            f1 = 13;
         }
         else if(random(17) == 0)
         {
            f1 = 14 + random(2) * 0.2;
         }
         else if(random(15) == 0 && !ups[75])
         {
            f1 = 2;
         }
         else if(random(15) == 0 && !ups[75])
         {
            f1 = 3;
         }
         else if(random(10) == 0)
         {
            f1 = 4;
         }
         else if(random(20) == 0)
         {
            f1 = 5;
         }
         else if(random(9) == 0 && player.hp + _root.armor > 1 && f10)
         {
            f1 = 6;
         }
         else if(random(7) == 0)
         {
            f1 = 7 + random(2) * 0.2;
         }
         else if(random(6) == 0 && (_root.bombs > 0 || _root.keys > 0))
         {
            f1 = 8;
         }
         else if(random(5) == 0 || random(4) == 0 && ups)
         {
            f1 = 9 + random(2) * 0.2;
         }
         else if(random(3) == 0)
         {
            f1 = 10 + random(2) * 0.2;
         }
         else if(random(3) == 0 || ups[75])
         {
            f1 = 11 + random(2) * 0.2;
         }
         else if(random(3) == 0)
         {
            f1 = 17 + random(2) * 0.2;
         }
         else
         {
            f1 = 126;
         }
         for(z in _root.piller)
         {
            if(f1 == _root.piller[z])
            {
               f1 = undefined;
            }
         }
         _root.piller[_root.pilc] = f1;
      }
   }
   f1 = Math.round(_root.piller[_root.pilc]);
   if(f1 != _root.piller[_root.pilc])
   {
      f2 = true;
   }
   else
   {
      f2 = false;
   }
   if(!f10)
   {
      f2 = true;
   }
}
function toot(f1)
{
   return Math.max(f1 * 2,2);
}
function spaceitem()
{
   nospo--;
   if(spac && fra > 10 && player._visible && nospo <= 0)
   {
      if(!nosp)
      {
         nosp = true;
         if(_root.it > 0 && _root.itc >= 1)
         {
            doit = true;
            showit = true;
            pacman = false;
            if(_root.it == 84)
            {
               f1 = [2,3,5,6,7,8,9,10,12,13,16,17,18,25,26,37,38,43,44,45,46,53,57,62,67];
               if(f1.length > 0)
               {
                  f1 = f1[random(f1.length)];
                  _root.it = f1;
                  f1 += itn2(f1);
                  st22(_root.st1[f1]);
               }
               _root.over.gotoAndStop(14);
               goper = true;
            }
            switch(_root.it)
            {
               case 152:
                  ups[3] = ups[3] + 1;
                  if(random(2) == 0)
                  {
                  }
                  ups[1] += 0.75;
                  break;
               case 146:
                  ader();
                  lasth = 0;
                  if(_root.chaps < 7)
                  {
                     ader(true);
                  }
                  if(player.hp < 0.5)
                  {
                     showit = false;
                  }
                  _root.soundy("Death_Card.mp",100);
                  for(e in ball)
                  {
                     trg2 = ball[e];
                     hurt(trg2,40);
                  }
                  sacri = 20;
                  break;
               case 120:
                  anarch = 30;
                  analt = 2;
                  break;
               case 124:
                  _root.bombnext = 2;
                  break;
               case 135:
                  keyd = true;
                  break;
               case 126:
                  for(e in ball)
                  {
                     trg2 = ball[e];
                     if(trg2.s == 5)
                     {
                        if(trg2.d._currentframe < 8)
                        {
                           trg2.done = true;
                           f1 = 5.01 + random(6) * 0.01;
                           if(f1 == 5.06 && random(2) == 0)
                           {
                              f1 = 5.01;
                           }
                           if(f1 == 5.05 && random(3) == 0)
                           {
                              f1 = 5.02;
                           }
                           if(random(10) == 0)
                           {
                              f1 = 5.03 + random(2) * 0.01;
                           }
                           if(random(15) == 0)
                           {
                              f1 = 5.3;
                           }
                           if(random(15) == 0)
                           {
                              f1 = 5.07;
                           }
                           if(random(20) == 0)
                           {
                              f1 = 5.35;
                           }
                           create(trg2.xp,trg2.yp,0,0,0,0,f1);
                        }
                     }
                  }
                  break;
               case 131:
                  _root.soundy("Death_Card.mp",100);
                  for(e in ball)
                  {
                     trg2 = ball[e];
                     hurt(trg2,10);
                     spida(undefined,trg2);
                  }
                  break;
               case 137:
                  if(_root.coins > 0 && sloto == undefined)
                  {
                     _root.coins = _root.coins - 1;
                     sloto = 25;
                  }
                  else
                  {
                     showit = false;
                  }
                  break;
               case 107:
                  _root.notch = !_root.notch;
                  doit = false;
                  showit = false;
                  break;
               case 118:
                  ups[21] = ups[54] = true;
                  _root.world = true;
                  _root.darks = false;
                  mapd();
                  if(random(2) == 0)
                  {
                     spaw(trg.xp,trg.yp,40,5.3);
                  }
                  else
                  {
                     trg2 = spaw(trg.xp,trg.yp,40,5.01);
                     trg2.col = 3;
                  }
                  break;
               case 105:
                  bluf += 2 + random(3);
                  break;
               case 96:
                  dec = 0;
                  break;
               case 106:
                  eta();
                  break;
               case 97:
                  for(e in ball)
                  {
                     trg = ball[e];
                     if(trg.s == 4)
                     {
                        trg.d.gotoAndStop(3);
                        trg.dones = true;
                     }
                  }
                  break;
               case 95:
                  ader();
                  f12 = Math.max(1,random(3));
                  if(ups[75])
                  {
                     f12++;
                  }
                  f11 = 0;
                  while(f11 < f12)
                  {
                     spaw(trg.xp,trg.yp,40,5.02);
                     f11++;
                  }
                  showit = player.hp > 0;
                  break;
               case 93:
                  if(player.mhp > 0)
                  {
                     if(_root.hardmode)
                     {
                        _root.armor += 2;
                     }
                     else
                     {
                        _root.armor += 3;
                     }
                     _root.ups[22]--;
                     player.hp = Math.max(player.hp - 1,0.5);
                     ups[22]--;
                     _root.soundy("Vamp_Gulp.mp");
                  }
                  else
                  {
                     showit = false;
                  }
                  break;
               case 141:
                  anarch = 20;
                  analt = 3;
               case 90:
                  showit = false;
                  horse = 100;
                  break;
               case 83:
                  _root.soundy("satan grow.mp",70);
                  f1 = [8,73,10,57,67,88,95,99,100,112,113,128];
                  for(e in f1)
                  {
                     if(ups[f1[e]])
                     {
                        f1.splice(e,1);
                     }
                  }
                  if(f1.length > 0)
                  {
                     f1 = f1[random(f1.length)];
                     ups[f1] = 1;
                  }
                  if(f1 == 73)
                  {
                     ups[f1] = random(2) + 2;
                  }
                  st22(_root.st1[f1]);
                  _root.over.gotoAndStop(12);
                  break;
               case 84:
                  break;
               case 87:
                  _root.beenlev[_root.lev] = false;
                  _root.shroom = 3;
                  _root.it = 0;
                  _root.door = undefined;
                  _root.playerx = 320;
                  _root.playery = 400;
                  _root.getup = true;
                  _root.swww = _root.chaps;
                  _root.chaps = _root.chaps - 1;
                  if(_root.double)
                  {
                     _root.chaps = _root.chaps - 1;
                  }
                  _root.switchero = false;
                  newstart(false);
                  _root.gotoAndStop("reset");
                  break;
               case 86:
                  razor += 2;
                  if(player.hp > 0.5 || _root.armor <= 0)
                  {
                     f11 = _root.armor;
                     _root.armor = 0;
                     playerhurt(0.5,202);
                     _root.armor = f11;
                  }
                  else
                  {
                     playerhurt(0.5,202);
                  }
                  lasth = 0;
                  if(player.hp > 0.5 || _root.armor <= 0)
                  {
                     f11 = _root.armor;
                     _root.armor = 0;
                     playerhurt(0.5,202);
                     _root.armor = f11;
                  }
                  else
                  {
                     playerhurt(0.5,202);
                  }
                  showit = false;
                  break;
               case 71:
                  fart();
                  break;
               case 67:
                  ups[20] = ups[20] + 1;
                  bodd = true;
                  _root.soundy("bloodbank spawn1.wav",300);
                  break;
               case 65:
                  for(a in ball)
                  {
                     trg2 = ball[a];
                     if(trg2.s == 5 && trg2.it && !trg2.empty)
                     {
                        if(_root.hardmode && random(Math.max(2,5 + _root.luck)) == 0)
                        {
                           trg2.empty = true;
                           if(_root.chamb == _root.lev)
                           {
                              trg2.done = true;
                           }
                           trg2.it = 199;
                           if(trg2.d._currentframe == 10)
                           {
                              trg2.d.d.gotoAndPlay(1);
                           }
                           if(trg2.d._currentframe == 15)
                           {
                              trg2.done = true;
                           }
                        }
                        else
                        {
                           trg2.it = giveit();
                           if(trg2.d._currentframe == 10)
                           {
                              trg2.d.d.gotoAndPlay(1);
                           }
                        }
                     }
                  }
                  break;
               case 62:
                  pillc(4);
                  showit = false;
                  break;
               case 57:
                  f1 = [5.010000001,5.010000003,5.040000001,5.03,5.07,5.3,5.02];
                  f1 = f1[random(f1.length)];
                  spaw(trg.xp,trg.yp,40,f1);
                  break;
               case 38:
                  if(_root.horsem && _root.lev != _root.bossl && _root.chaps < 8 && _root.chaps != 6 && !_root.double)
                  {
                     _root.horse = true;
                     _root.horsem = false;
                     f1 = Math.round(_root.chaps / 2);
                     _root.bosss = f1 + 8;
                     if(random(10) == 0 && !_root.nohead)
                     {
                        _root.nohead = true;
                        f1 = 5;
                        _root.bosss = 22;
                     }
                     _root.levz[_root.bossl] = "h" + f1;
                  }
                  _root.armor = _root.armor + 1;
                  break;
               case 43:
                  demon = 200;
                  _root.soundy("Monster_Yell_A_0.mp");
                  _root.armor = _root.armor + 1;
                  break;
               case 44:
                  if(_root.chaps < 9)
                  {
                     spaw(trg.xp,trg.yp,0,5.09);
                  }
                  else
                  {
                     showit = false;
                     doit = false;
                  }
                  break;
               case 45:
                  pillc(3);
                  showit = false;
                  break;
               case 53:
                  _root.mmus = _root.soundy("isaacunicorn.mp",100);
                  unic = 200;
                  pacman = true;
                  scare = 180;
                  for(z in ball)
                  {
                     trg2 = ball[z];
                     trg2.uncol = fra + 2;
                  }
                  break;
               case 46:
                  f1 = 0;
                  f2 = 4;
                  for(z in ball)
                  {
                     trg2 = ball[z];
                     if(trg2.s > 9 && trg2.s != 20)
                     {
                        if(trg2.hp > f2)
                        {
                           if(!enfcheck(trg2.xp,trg2.yp,player.xp,player.yp,40))
                           {
                              f2 = trg2.hp;
                              f1 = z;
                           }
                        }
                     }
                  }
                  if(f1 > 0)
                  {
                     trg3 = ball[f1];
                     trg2 = create(trg3.xp,trg3.yp,0,0,0,0,20);
                     trg2.weap = true;
                     trg2.ggh = true;
                     trg2.d.gotoAndStop(3);
                     trg2.trg2 = trg3;
                     trg2.bh = false;
                     trg2.fra = -100;
                  }
                  else
                  {
                     showit = false;
                     doit = false;
                  }
                  break;
               case 1:
                  if(_root.chaps == 9 && _root.lev == _root.bossl)
                  {
                     _root.armor = 0;
                     playerhurt(1000,200);
                  }
                  else if((mom.length > 3 || mheart != undefined) && !bibs && (_root.chaps == 6 || _root.chaps == 8) && _root.lev == _root.bossl)
                  {
                     bibs = true;
                     mheart.dones = true;
                     for(z in mom)
                     {
                        mom[z].dones = true;
                        mom[z]._visible = false;
                     }
                     momkill();
                     _root.locker[34] = true;
                  }
                  bible = true;
                  _root.over.gotoAndStop(8);
                  _root.soundy("Book Page Turn 12.wav",100);
                  break;
               case 37:
                  unic = 180;
                  _root.mmus = _root.soundy("isaacunicorn.mp",100);
                  break;
               case 18:
                  playsave = 300;
                  break;
               case 16:
                  create(trg.xp,trg.yp,0,0,0,0,33);
                  _root.soundy("BGascan_pour.wav",100);
                  break;
               case 2:
                  doub = true;
                  _root.over.gotoAndStop(2);
                  _root.soundy("Devil_Card.mp",100);
                  break;
               case 3:
                  _root.over.gotoAndStop(3);
                  _root.soundy("Death_Card.mp",100);
                  for(e in ball)
                  {
                     trg2 = ball[e];
                     hurt(trg2,40);
                  }
                  break;
               case 4:
                  showit = false;
                  f1 = ingrid(trg.xp,trg.yp);
                  outgrid(f1);
                  turd("breakblock",f1);
                  _root.soundy("fart.mp");
                  turdb = f1;
                  break;
               case 11:
                  doit = false;
                  showit = false;
                  break;
               case 10:
                  doit = false;
                  _root.bombnext = true;
                  break;
               case 15:
                  if(bombdrop <= 0)
                  {
                     bombdrop = 100;
                     drop = create(player.xp,player.yp,0,0,0,0,37);
                  }
                  else
                  {
                     doit = false;
                  }
                  break;
               case 7:
                  _root.over.gotoAndStop(4);
                  freez = 220;
                  bra = true;
                  break;
               case 9:
                  _root.over.gotoAndStop(5);
                  scare = 180;
                  freez = 160;
                  break;
               case 8:
                  showit = false;
                  if(fra - lastbo >= 30)
                  {
                     lasth = 0;
                     lastbo = fra;
                     bombfail(trg.xp,trg.yp);
                  }
                  break;
               case 5:
                  showit = false;
                  bomb(true);
                  break;
               case 6:
                  e = 0;
                  while(e < 10)
                  {
                     trg2 = create(trg.xp,trg.yp,0,Math.sin(e / 5 * 3.141592653589793) * 10,Math.cos(e / 5 * 3.141592653589793) * 10,0,2);
                     trg2.d._yscale = trg2.d._xscale = 135.5;
                     e++;
                  }
                  break;
               case 12:
                  showit = false;
                  f1 = random(15);
                  if(_root.chaps < 9)
                  {
                     if(f1 == 0)
                     {
                        tar = 169;
                     }
                     else if(f1 == 0 && _root.chaps != 1)
                     {
                        tar = 166;
                     }
                  }
                  teller();
                  break;
               case 13:
                  player.hp = player.hp + 1;
                  _root.soundy("Vamp_Gulp.mp");
                  break;
               case 17:
                  showit = false;
                  laser = 1;
                  break;
               case 25:
                  _root.over.gotoAndStop(6);
                  _root.soundy("Book Page Turn 12.wav",100);
                  anarch = 30;
                  break;
               case 26:
                  _root.over.gotoAndStop(7);
                  slow = 230;
            }
            if(showit)
            {
               player.d.gotoAndStop(11);
               player.it = _root.colit;
               player.d.d.d.it.d.gotoAndStop(player.it);
               player.d.d.d.it.d.p.gotoAndStop(player.pilc);
            }
            if(itc[_root.it] > 0 && doit)
            {
               if(ups[116])
               {
                  _root.itc = 0.334;
               }
               else
               {
                  _root.itc = 0;
               }
               nocharge = 10;
            }
            if(goper)
            {
               goper = false;
               _root.it = 84;
            }
         }
      }
   }
   else
   {
      nosp = false;
   }
}
function playc()
{
   trg = player;
   f2 = trg.xp;
   f3 = trg.yp;
   if(decer.s == 4)
   {
      f2 = decer.xp;
      f3 = decer.yp;
   }
   f1 = levzz(ingrid(f2,f3));
   if(f1 < 1)
   {
      playx = f2;
      playy = f3;
   }
   if(fra < 10 && (player.hp < 1 && _root.skiner != 4 || _root.armor < 1 && _root.skiner == 4))
   {
      if(_root.skiner == 5)
      {
         splater(trg.xp,trg.yp,random(10) + 1,0.3 + Math.random() * 0.5);
      }
      else
      {
         splater(trg.xp,trg.yp,random(10) + 20,0.3 + Math.random() * 0.5);
      }
   }
   if(coinl)
   {
      if(coinl == 3 && _root.keys > 0)
      {
         f1 = 5.03;
         f6 = _root.keys;
      }
      else if(coinl == 4 && _root.bombs > 0)
      {
         f1 = 5.04;
         f6 = _root.bombs;
      }
      else
      {
         f1 = 5.02;
         f6 = _root.coins;
         coinl = 1;
      }
      f5 = 0;
      if(f6 > 0)
      {
         f5++;
         f3 = Math.min(f6 - 1,random(4) + 1);
         var _loc3_ = 0;
         while(_loc3_ < f3)
         {
            f5++;
            f4 = random(5) + 2;
            trg2 = create(player.xp,player.yp,0,crand(f4),crand(f4),0,f1);
            trg2.col = 1;
            _loc3_ = _loc3_ + 1;
         }
      }
      if(coinl == 4)
      {
         _root.bombs -= f5;
      }
      else if(coinl == 3)
      {
         _root.keys -= f5;
      }
      else
      {
         _root.coins -= f5;
      }
      coinl = false;
   }
   if(bombdrop-- > 0)
   {
      drop.d.gotoAndStop(Math.max(1,Math.round(100 - bombdrop)));
      if(bombdrop == 2)
      {
         bomf.push([drop.xp,drop.yp,4]);
         drop.done = true;
      }
      if(ups[168])
      {
         player.fire = 10;
      }
   }
   trg2 = player;
   if(random(4) == 0 && ups[189])
   {
      splater(trg2.xp,trg2.yp + 5,1 + random(10),Math.random() * 0.5 + 0.3);
   }
   for(a in ball)
   {
      trg = ball[a];
      siz = 270;
      if(trg.s == 5)
      {
         if(ups[53] || trg.d._currentframe == 4 && trg.col == 5)
         {
            if(!trg.empty && trg.d._currentframe <= 4 && trg.bh && (trg.d._currentframe != 1 || trg.col == 3 || player.hp < player.mhp))
            {
               if(enfcheck(trg2.xp,trg2.yp,trg.xp,trg.yp,siz))
               {
                  enf = 0.5 / enf;
                  if(trg.d._currentframe == 4 && trg.col == 5)
                  {
                     enf *= 3;
                  }
                  trg.xbew += xenf * enf;
                  trg.ybew += yenf * enf;
                  trg.xbew *= 0.8;
                  trg.ybew *= 0.8;
                  trg.ggh = true;
               }
            }
            else
            {
               trg.ggh = false;
            }
         }
      }
   }
   if(scare > 0)
   {
      for(a in ball)
      {
         trg = ball[a];
         siz = 270;
         if(trg.s > 9 && (!trg.flyai || trg.s == 18))
         {
            trg.xp = Math.min(580,Math.max(60,trg.xp));
            trg.yp = Math.min(410,Math.max(170,trg.yp));
            if(enfcheck(trg2.xp,trg2.yp,trg.xp,trg.yp,siz))
            {
               enf = (siz - enf) / enf * 0.007;
               trg.xbew -= xenf * enf;
               trg.ybew -= yenf * enf;
               trg.xbew *= 0.85;
               trg.ybew *= 0.85;
               if(trg.sf)
               {
                  sideflip(trg.xbew);
               }
               if(trg.wf)
               {
                  walkframe();
               }
            }
         }
      }
   }
   else if(slow > 0 || sloww > 0)
   {
      for(a in ball)
      {
         trg = ball[a];
         if(trg.free)
         {
            colorit(trg,1,1,1.3,40,40,40);
         }
      }
   }
   else if(freez > 0)
   {
      for(a in ball)
      {
         trg = ball[a];
         if(trg.free)
         {
            trg.frezz = freez + 1;
            colorit(trg,0.22,0.22,0.22,40,40,40);
         }
      }
   }
   else if(freez == 0 || slow == 0 || sloww == 0)
   {
      for(a in ball)
      {
         trg = ball[a];
         if(trg.free)
         {
            trg.free = undefined;
            speco(trg);
         }
      }
   }
   trg = player;
   if(playslow-- > 0)
   {
      trg.xbew *= 0.7;
      trg.ybew *= 0.7;
   }
   trg = player;
   trg = player;
   if(trg.dones)
   {
      unpause = false;
      trg.xbew *= 0.8;
      trg.ybew *= 0.8;
      playcol();
   }
   else
   {
      f55 = 0;
      f44 = false;
      if(firecheck(player))
      {
         if(!relf)
         {
            playerhurt(0.5,6);
         }
         else if(relf == 2)
         {
            playerhurt(1,5);
         }
         else
         {
            for(i in door)
            {
               trg = door[i];
               if(f55 == trg.blo)
               {
                  f55 = 1.1;
               }
            }
            if(_root.lev == _root.sac && !_root.sacer && lasth - fra < 0)
            {
               if(random(5) == 0 || player.hp < 2 && _root.armor <= 0)
               {
                  _root.sacer = true;
                  create(320,340,0,0,0,0,5.05 + random(2) * 0.01);
               }
            }
            if(f55 == 1.1)
            {
               playerhurt(0.5,7);
            }
            else
            {
               playerhurt(1,7);
            }
         }
      }
      f1 = ingrid(trg.xp,trg.yp);
      if(levzz(f1) == 0.99)
      {
         if(webs[f1])
         {
            playslow = 4;
         }
      }
      f1 = lasth - fra;
      _root.lasth = f1 > 6;
      if(f1 > 6 || unic > 0 && (!pacman || unic < 30))
      {
         if(f1 % 3 == 0 || unic > 0)
         {
            if(f1 % 2 == 0)
            {
               playcol(true);
            }
            else
            {
               playcol();
            }
         }
      }
      else
      {
         playcol();
      }
      for(e in door)
      {
         trg = door[e];
         if(trg._visible && player._visible && lastspin <= fra && !(hhorse > 0 && ashut > 0) && (trg.blown || ashut <= 0))
         {
            v1 = enfcheck(trg.xp,trg.yp,player.xp,player.yp,35);
            if(v1 < 25 && trg.nod && fra > 30)
            {
               if(shutdoor != 0)
               {
                  _root.beenlev[_root.lev] = false;
               }
               _root.door = e;
               if(e == 0 || e == 2)
               {
                  _root.playerx = 610 - trg._x * 0.9;
                  _root.playery = 280;
               }
               else
               {
                  _root.playerx = 320;
                  _root.playery = 530 - trg._y * 0.9;
               }
               invp();
               _root.old.fillRect(_root.old.rectangle,0);
               _root.old.draw(this);
               _root.olda._x = 0;
               _root.olda._y = 0;
               _root.olda._visible = true;
               moveon();
               _root.lev = trg.gol;
               _root.gotoAndStop("reset");
            }
            if(!v1)
            {
               trg.nod = true;
            }
         }
      }
      trg = player;
      if(_root.bombnext || _root.notch)
      {
         if(trg.d._currentframe == 11)
         {
            if(trg.d.d.d._currentframe > 9)
            {
               trg.d.d.d.gotoAndStop(10);
            }
         }
         else
         {
            trg.d.gotoAndStop(11);
            if(_root.bombnext == 2)
            {
               trg.it = 164;
            }
            else if(_root.notch)
            {
               trg.it = 147;
            }
            else
            {
               trg.it = 42;
            }
         }
      }
      if(farter)
      {
         farter = false;
         fart();
      }
      spac = Key.isDown(32) || Key.isDown(90) && !_root.so.data.frog;
      if(spac)
      {
         if(_root.notch || _root.bombnext)
         {
            if(!nosp)
            {
               nosp = true;
               _root.notch = false;
               _root.bombnext = false;
            }
         }
      }
      else
      {
         nosp = false;
      }
      if(trg.d._currentframe >= 3)
      {
         if(!_root.bombnext)
         {
            trg.fire = 5;
         }
         trg.xbew *= 0.8;
         trg.ybew *= 0.8;
      }
      else
      {
         if(Key.isDown(69))
         {
            bomb();
         }
         bomberfail -= 0.024;
         if(bomberfail > 0 && nextbo)
         {
            bomberfail--;
            lastbo = 0;
            bomb(2);
            nextbo = false;
         }
         if((Key.isDown(81) && !_root.so.data.frog || Key.isDown(65) && _root.so.data.frog) && fra > 30 && _root.pilc != undefined)
         {
            _root.hud.pilll.gotoAndStop(3);
            player.d.gotoAndStop(11);
            player.it = 43;
            player.d.d.d.it.d.gotoAndStop(player.it);
            player.d.d.d.it.d.p.gotoAndStop(pic(_root.pilc));
            if(_root.pilc >= 7)
            {
               tart(_root.pilc);
               switch(_root.pilc)
               {
                  case 70:
                     _root.keys = toot(_root.keys);
                     break;
                  case 71:
                     _root.bombs = toot(_root.bombs);
                     break;
                  case 72:
                     player.hp = toot(player.hp);
                     break;
                  case 73:
                     _root.coins = toot(_root.coins);
                     break;
                  case 74:
                     tar = 166;
                     teller();
                     break;
                  case 28:
                     teller();
                     tar = _root.boner;
                     _root.bona = true;
                     break;
                  case 27:
                     _root.over.gotoAndStop(15);
                     if(_root.hardmode)
                     {
                        player.hp += 7;
                     }
                     else
                     {
                        player.hp = 1000;
                     }
                     ups[54] = _loc0_ = true;
                     ups[21] = _loc0_;
                     _root.world = true;
                     _root.darks = false;
                     mapd();
                     for(e in ball)
                     {
                        trg2 = ball[e];
                        hurt(trg2,100);
                     }
                     break;
                  case 26:
                     curs();
                     ups[122] = 1.5;
                     break;
                  case 25:
                     f1 = 0;
                     f2 = 4;
                     for(_loc3_ in ball)
                     {
                        trg2 = ball[_loc3_];
                        if(trg2.s > 9 && trg2.s != 45 || trg2 == player)
                        {
                           if(trg2.hp > f2 && trg2.pow != 1 && trg2.pow != 2)
                           {
                              f2 = trg2.hp;
                              f1 = _loc3_;
                           }
                        }
                     }
                     trg3 = ball[f1];
                     trg2 = create(trg3.xp,trg3.yp,0,0,0,0,45);
                     trg2.weap = true;
                     trg2.ggh = true;
                     trg2.d.gotoAndStop(20);
                     trg2.trg2 = trg3;
                     trg2.bh = false;
                     trg2.fra = -100;
                     trg2.specoz = undefined;
                     trg2.eternal = false;
                     trg2.boso = true;
                     speco(trg2);
                     break;
                  case 20:
                     spaw(player.xp,player.yp,45,5.01);
                     spaw(player.xp,player.yp,45,5.02);
                     spaw(player.xp,player.yp,45,5.03);
                     spaw(player.xp,player.yp,45,5.04);
                     break;
                  case 19:
                     ups[21] = ups[54] = true;
                     _root.world = true;
                     _root.darks = false;
                     mapd();
                     break;
                  case 18:
                     f1 = 40;
                     trg2 = spaw(player.xp + f1,player.yp,0,5.01);
                     trg3 = spaw(player.xp - f1,player.yp,0,5.01);
                     trg2.col = 1;
                     trg3.col = 1;
                     break;
                  case 24:
                     f1 = 40;
                     trg2 = spaw(player.xp + f1,player.yp,0,5.01);
                     trg3 = spaw(player.xp - f1,player.yp,0,5.01);
                     trg2.col = 3;
                     trg3.col = 3;
                     break;
                  case 17:
                     player.it = 77;
                     unic = 180;
                     _root.mmus = _root.soundy("isaacunicorn.mp",100);
                     break;
                  case 23:
                     anarch = 30;
                     break;
                  case 21:
                     spaw(player.xp,player.yp,45,5.31);
                     _root.soundy("summonsound.wav",120);
                     break;
                  case 22:
                     teller();
                     tar = _root.bossl;
                     break;
                  case 16:
                     spaw(player.xp,player.yp,45,5.32);
                     _root.soundy("summonsound.wav",120);
                     break;
                  case 7:
                     spaw(player.xp,player.yp,45,5.08);
                     _root.soundy("summonsound.wav",120);
                     break;
                  case 8:
                     doub = true;
                     _root.over.gotoAndStop(2);
                     _root.soundy("Devil_Card.mp",100);
                     break;
                  case 9:
                     _root.over.gotoAndStop(11);
                     _root.soundy("Death_Card.mp",100);
                     for(e in ball)
                     {
                        trg2 = ball[e];
                        hurt(trg2,60);
                     }
                     _root.so.data.dde = _root.so.data.dde + 1;
                     if(_root.so.data.dde > 4)
                     {
                        _root.locker[48] = true;
                     }
                     break;
                  case 10:
                     player.hp = player.hp + 1;
                     ups[12] = ups[12] + 1;
                     break;
                  case 11:
                     teller();
                     tar = 35;
                     break;
                  case 12:
                     ups[3] = ups[3] + 1;
                     if(random(2) == 0)
                     {
                     }
                     ups[1] += 0.75;
                     break;
                  case 13:
                     teller();
                     tar = _root.shopl;
                     _root.shopa = true;
                     break;
                  case 14:
                     teller();
                     tar = _root.hide;
                     break;
                  case 15:
                     ups[20] = ups[20] + 1;
               }
            }
            else
            {
               piller();
               switch(Math.round(f1))
               {
                  case 14:
                     if(f2)
                     {
                        _root.luck = _root.luck + 1;
                        st22("Luck Up");
                        goodpill();
                        emo();
                        pilcol(50,100,50);
                     }
                     else
                     {
                        st22("Luck Down");
                        _root.luck = _root.luck - 1;
                        emo(true);
                     }
                     break;
                  case 13:
                     bluf += 3;
                     st22("Friends till the end!");
                     break;
                  case 6:
                     if(player.hp + _root.armor > 1)
                     {
                        lasth = 0;
                        playerhurt(1,201);
                        st22("Bad Trip!");
                        break;
                     }
                  case 1:
                     if(_root.skiner == 4)
                     {
                        if(_root.armor < 3)
                        {
                           _root.armor = 3;
                        }
                     }
                     else if(player.mhp > 0)
                     {
                        if(_root.hardmode)
                        {
                           player.hp += 5;
                        }
                        else
                        {
                           player.hp = player.mhp;
                        }
                     }
                     if(_root.hardmode)
                     {
                        st22("Full Health?");
                     }
                     else
                     {
                        st22("Full Health");
                     }
                     goodpill();
                     emo();
                     break;
                  case 2:
                     if(random(2) == 0)
                     {
                        hat(54);
                        st11("Puberty");
                     }
                     else
                     {
                        _root.hmode = 16;
                        st11("I found Pills");
                        st22("And ate them!");
                        _root.soundy("derp.mp");
                     }
                     break;
                  case 3:
                     bomberfail = 5.5;
                     st22("Oh no!");
                     emo(true);
                     _root.soundy("fart.mp");
                     break;
                  case 4:
                     _root.armor += 2;
                     st22("Balls of Steel");
                     goodpill();
                     emo();
                     break;
                  case 5:
                     _root.ups[10] += 0.5;
                     ups[10] = _root.ups[10];
                     st22("Pretty Fly");
                     goodpill();
                     emo();
                     break;
                  case 7:
                     if(_root.skiner != 4)
                     {
                        f13 = player.mhp;
                     }
                     else
                     {
                        f13 = _root.armor;
                     }
                     if(f13 <= 1 || f2)
                     {
                        st22("Health Up");
                        if(_root.skiner == 4)
                        {
                           _root.armor = _root.armor + 1;
                        }
                        else
                        {
                           _root.ups[15] = _root.ups[15] + 1;
                        }
                        pilcol(100,50,50);
                        goodpill();
                        emo();
                     }
                     else
                     {
                        if(_root.skiner == 4)
                        {
                           _root.armor = _root.armor - 1;
                        }
                        else
                        {
                           _root.ups[15]--;
                        }
                        st22("Health Down");
                        emo(true);
                     }
                     ups[15] = _root.ups[15];
                     break;
                  case 8:
                     f1 = _root.bombs;
                     _root.bombs = _root.keys;
                     _root.keys = f1;
                     st22("Bombs are Key");
                     emo();
                     break;
                  case 9:
                     if(f2)
                     {
                        _root.ups[32] += 0.5;
                        st22("Tears Up");
                        pilcol(80,80,100);
                        goodpill();
                        emo();
                     }
                     else
                     {
                        _root.ups[32] -= 0.4;
                        st22("Tears Down");
                        emo(true);
                     }
                     ups[32] = _root.ups[32];
                     break;
                  case 10:
                     if(f2 || ups[6] && _root.chaps < 8)
                     {
                        _root.ups[31] += 0.5;
                        st22("Range Up");
                        pilcol(50,100,100);
                        emo();
                        goodpill();
                     }
                     else
                     {
                        _root.ups[31] -= 0.4;
                        st22("Range Down");
                        emo(true);
                     }
                     ups[31] = _root.ups[31];
                     break;
                  case 11:
                     if(f2)
                     {
                        _root.ups[27] = _root.ups[27] + 1;
                        st22("Speed Up");
                        pilcol(100,100,50);
                        goodpill();
                        emo();
                     }
                     else
                     {
                        _root.ups[27] -= 0.8;
                        st22("Speed Down");
                        emo(true);
                     }
                     ups[27] = _root.ups[27];
                     break;
                  case 17:
                     if(f2)
                     {
                        _root.ups[165] = _root.ups[165] + 1;
                        st22("Shot Speed Up");
                        goodpill();
                        emo();
                     }
                     else
                     {
                        pilcol(50,50,50);
                        _root.ups[165] -= 1.4;
                        st22("Shot Speed Down");
                        emo(true);
                     }
                     ups[165] = _root.ups[165];
                     break;
                  case 12:
                     fart();
                     st22("Bad Gas");
                     break;
                  case 126:
                     f1 = random(15);
                     if(_root.chaps < 9)
                     {
                        if(f1 == 0)
                        {
                           tar = 169;
                        }
                        else if(f1 == 0 && _root.chaps != 1)
                        {
                           tar = 166;
                        }
                     }
                     st22("TelePills");
                     teller();
               }
            }
            player.pilc = _root.pilc;
            _root.pilc = undefined;
         }
         spaceitem();
      }
      f1 = _root.bmode;
      if(demon > 0 || ups[122])
      {
         sk = 7;
      }
      else
      {
         sk = _root.sk;
      }
      if(ups[20])
      {
         f1 = 3;
         trg.flyby = true;
      }
      if(ups[82])
      {
         f1 = 9;
         trg.flyby = true;
      }
      if(bible || _root.etol || ups[179] || ups[184])
      {
         f1 = 12;
         trg.flyby = true;
      }
      if(ups[185])
      {
         f1 = 23;
         trg.flyby = true;
      }
      if(sk == 7)
      {
         if(trg.flyby)
         {
            f1 = 9;
         }
         else
         {
            f1 = 8;
         }
      }
      else if(sk == 5)
      {
         _root.hmode = 25;
         _root.bmode = 13;
      }
      if(_root.it == 8 && !ups[20])
      {
         f1 = 2;
      }
      if(ups[159])
      {
         f1 = 22;
         trg.flyby = true;
      }
      if(_root.it == 90 || _root.it == 141)
      {
         f1 = 16;
         trg.flyby = true;
         if(sk == 7)
         {
            f1 = 18;
         }
         else if(sk == 5)
         {
            f1 = 17;
         }
      }
      if(razor > 0 || ups[189])
      {
         if(trg.flyby)
         {
            f1 = 3;
         }
         else
         {
            f1 = 27;
         }
      }
      if(purr)
      {
         f1 = 25;
         trg.flyby = true;
      }
      trg.d.bo.gotoAndStop(f1);
      if(enfget(trg.xbew,trg.ybew) < 2)
      {
         if(_root.it != 90 || fra < 3)
         {
            trg.d.bo.d.gotoAndStop(1);
         }
      }
      else
      {
         f1 = Math.abs(trg.xbew) > Math.abs(trg.ybew);
         if(_root.it == 9)
         {
            f1 = Math.abs(trg.xbew) * 0.5 > Math.abs(trg.ybew);
         }
         if(f1)
         {
            trg.d.bo.d.gotoAndStop(3);
            if(trg.xbew * trg.d.bo._xscale < -100)
            {
               trg.d.bo._xscale *= -1;
            }
         }
         else
         {
            if(_root.it == 90 || _root.it == 141)
            {
               if(trg.ybew > 0)
               {
                  trg.d.bo.d.gotoAndStop(1);
               }
               else
               {
                  trg.d.bo.d.gotoAndStop(2);
               }
            }
            else
            {
               trg.d.bo.d.gotoAndStop(2);
            }
            if(_root.it == 90 || _root.it == 141)
            {
               if(trg.xbew * trg.d.bo._xscale < -100)
               {
                  trg.d.bo._xscale *= -1;
               }
            }
         }
      }
      if(_root.eto >= 7)
      {
         _root.etol = true;
         _root.locker[113] = true;
         _root.playcol[0] = 5;
         _root.playcol[1] = 5;
         _root.playcol[2] = 5;
      }
      dirkey(true);
      horss(true);
      if(xenf == 0)
      {
         lastx = fra;
      }
      if(yenf == 0)
      {
         lasty = fra;
      }
      if(md)
      {
         xenf = _xmouse - trg.xp;
         yenf = _ymouse - trg.yp + 10;
         if(Math.abs(xenf) < Math.abs(yenf))
         {
            xenf = 0;
         }
         else
         {
            yenf = 0;
         }
      }
      if(ups[114])
      {
         xxenf = xenf;
         yyenf = yenf;
      }
      if(nomove && !_root.bombnext && !chaf)
      {
         yenf = _loc0_ = 0;
         xenf = _loc0_;
      }
      if(bombdrop > 0)
      {
         drop.xbew *= 0.5;
         drop.ybew *= 0.5;
         if(!md)
         {
            drop.xbew += xenf * 8;
            drop.ybew += yenf * 8;
         }
         else
         {
            enfcheck(drop.xp,drop.yp,_xmouse,_ymouse,10000);
            enf = Math.min(enf / 3,4) / enf * 2;
            drop.xbew -= xenf * enf;
            drop.ybew -= yenf * enf;
         }
         yenf = _loc0_ = 0;
         xenf = _loc0_;
      }
      else if(xenf != 0 && yenf != 0)
      {
         if(lasty > lastx)
         {
            xenf = 0;
         }
         else
         {
            yenf = 0;
         }
      }
      v1 = plo;
      if(laser <= 1)
      {
         if(xenf != 0 || yenf != 0)
         {
            if(plox <= 8 && (!ups[118] || trg.fire <= 0 || chaf == undefined || _root.bombnext))
            {
               if(Math.abs(xenf) > Math.abs(yenf))
               {
                  yenf = 0;
                  if(xenf > 0)
                  {
                     xenf = 1;
                     plo = 2;
                  }
                  else
                  {
                     plo = 4;
                     xenf = -1;
                  }
               }
               else
               {
                  xenf = 0;
                  if(yenf < 0)
                  {
                     plo = 3;
                     yenf = -1;
                  }
                  else
                  {
                     yenf = 1;
                     plo = 1;
                  }
               }
            }
            if(laser == 1)
            {
               trg.xpp = xenf;
               trg.ypp = yenf;
               yenf = _loc0_ = 0;
               xenf = _loc0_;
            }
            laser++;
         }
      }
      if(ups[68] && plox > 8)
      {
         plo = v1;
      }
      if(laser > 1)
      {
         trg.d.gotoAndStop(1);
         laser++;
         trg.xbew *= 0.9;
         trg.ybew *= 0.9;
         if(laser > 21 && laser < 32 && fra % 3 != 0)
         {
            lasershow(trg);
         }
         if(laser > 40)
         {
            laser = undefined;
         }
         yenf = _loc0_ = 0;
         xenf = _loc0_;
      }
      if(ups[114] && !_root.bombnext)
      {
         if(knil == undefined)
         {
            knil = 23;
            knill = 0;
            knife.xppp = trg.xp;
            knife.yppp = trg.yp;
            knife.xbew = trg.xbew;
            knife.ybew = trg.ybew;
         }
         if(_root.knif == undefined)
         {
            _root.knif = 0;
         }
         if(ups[114])
         {
            f1 = xxenf;
            f2 = yyenf;
            xxenf = xenf;
            yyenf = yenf;
            xenf = f1;
            yenf = f2;
         }
         else
         {
            xxenf = xenf;
            yyenf = yenf;
         }
         if(xenf != 0 || yenf != 0)
         {
            f1 = rotget2(xenf,yenf) + 180;
            _root.knir = f1;
         }
         else
         {
            f1 = _root.knir;
         }
         knife.dmg = dmgdo() * (2 + Math.min(Math.max(knill,0),4));
         knil += knill;
         knill -= 1.4;
         f1 -= knife.d.z._rotation;
         f1 = absmax(rotrund(f1),Math.max(0,40 - knil));
         knife.d.z._rotation += f1 * 0.7;
         _root.knif *= 0.98;
         if(knil < 23)
         {
            knil = 23;
            if((xenf != 0 || yenf != 0) && Math.abs(f1) < 5)
            {
               firr(trg);
               _root.knif += Math.max(0.2,Math.min(0.35,0.2 / trg.fire * 10));
            }
            if(_root.knif > 0.35 && xenf == 0 && yenf == 0 && !kkk)
            {
               knill = Math.min(20,Math.max(10,_root.firrr * 0.51) * (0.3 + _root.knif * 0.2));
               _root.knif = 0;
            }
            knife.xppp = trg.xp;
            knife.yppp = trg.yp;
            knife.xbew = trg.xbew;
            knife.ybew = trg.ybew;
         }
         else if(knill < 0)
         {
            knife.xppp *= 0.5;
            knife.yppp *= 0.5;
            knife.xppp += trg.xp * 0.5;
            knife.yppp += trg.yp * 0.5;
         }
         else
         {
            knife.xppp *= 0.8;
            knife.yppp *= 0.8;
            knife.xppp += trg.xp * 0.2;
            knife.yppp += trg.yp * 0.2;
         }
         f1 = knife.d.z._rotation / 180 * 3.141592653589793;
         if(knife.d.z._rotation < -90 || knife.d.z._rotation > 90)
         {
            knife.d.z._yscale = -100;
         }
         else
         {
            knife.d.z._yscale = 100;
         }
         if(fra > 3)
         {
            knife.xp = knife.xppp + Math.cos(f1) * knil;
            knife.yp = knife.yppp + Math.sin(f1) * knil * 0.8 - Math.cos(f1) * 3;
            knife.xppp += knife.xbew;
            knife.yppp += knife.ybew;
            knife.xbew *= 0.8;
            knife.ybew *= 0.8;
         }
         if(fra % 3 == 0)
         {
            knife.hh = [];
         }
         yenf = _loc0_ = 0;
         xenf = _loc0_;
      }
      if(ups[118] && trg.d.d.d.d._currentframe > 4)
      {
         trg.d.d.d.d.z.nextFrame();
         if(trg.d.d.d.d.z._currentframe == 4 || trg.d.d.d.d.z._currentframe == 11)
         {
            brim = true;
            lasershow(trg);
            yenf = _loc0_ = 0;
            xenf = _loc0_;
            brim = false;
         }
      }
      f1 = _root.fmode;
      f2 = _root.hmode;
      nohat = false;
      if(doub)
      {
         f1 = 8;
         f2 = 8;
      }
      if(ups[3] && !_root.ups[3])
      {
         f1 = 4;
         f2 = 4;
      }
      if(sk != 5 && ups[69])
      {
         f2 = 17;
      }
      if(ups[122])
      {
         f2 = 30;
      }
      else if(sk == 7)
      {
         if(ups[159])
         {
            f2 = 39;
         }
         else if(ups[80])
         {
            f2 = 20;
         }
         else
         {
            f2 = 22;
         }
      }
      if(ups[149])
      {
         f2 = 36;
      }
      if(razor > 0)
      {
         f2 = 29;
      }
      if(ups[189])
      {
         f2 = 42;
      }
      if(purr)
      {
         f2 = 43;
      }
      if(demon > 0)
      {
         f2 = 21;
      }
      if(ups[68])
      {
         if(sk == 5)
         {
            f2 = 28;
         }
         else if(sk == 7)
         {
            f2 = 27;
         }
         else
         {
            f2 = 10;
         }
         f1 = 12;
      }
      if(ups[118])
      {
         f2 = 31;
      }
      if(laser)
      {
         f2 = 14;
      }
      if(unic > 0)
      {
         if(pacman)
         {
            f2 = 23;
         }
         else
         {
            f2 = 19;
         }
         nohat = true;
      }
      facer = f2;
      if(trg.d._currentframe == 1 || _root.bombnext)
      {
         _root.hud.weap.gotoAndStop(f1);
         if(Math.abs(xenf) < 0.5 && Math.abs(yenf) < 0.5 && !kkk && (ups[69] || ups[118]) && !_root.bombnext)
         {
            if(chaf > -1000 && Math.abs(chax) + Math.abs(chay) > 0)
            {
               if(chaaf > 4.7 || ups[69])
               {
                  chaz = true;
                  xenf = chax;
                  yenf = chay;
               }
               else
               {
                  chay = _loc0_ = 0;
                  chax = _loc0_;
                  chaf = undefined;
                  plo = 1;
               }
            }
         }
         if(pacman)
         {
            if(trg.d.d.d.d._xscale * trg.xbew < -300)
            {
               trg.d.d.d.d._xscale *= -1;
               if(trg.d.d.d.d._xscale < 0)
               {
                  trg.d.d.d.d._x = 40.7;
               }
               else
               {
                  trg.d.d.d.d._x = 0;
               }
            }
         }
         else
         {
            if(pacoo)
            {
               pacoo = false;
               trg.d.d.d.d._xscale = 100;
               trg.d.d.d.d._x = plxx;
            }
            else
            {
               plxx = trg.d.d.d.d._x;
            }
            if(Math.abs(xenf) > 0.5 || Math.abs(yenf) > 0.5 || ups[114] && (xxenf != 0 || yyenf != 0))
            {
               plff();
            }
            else
            {
               if(plox < 0 && laser <= 1 && !ups[118])
               {
                  plo = 1;
               }
               if(!ups[118] || trg.fire < 4)
               {
                  trg.d.d.d.d.gotoAndStop(plo);
               }
            }
         }
         if(trg.d._currentframe == 1)
         {
            if(laser > 1)
            {
               trg.d.d.d.d.d.gotoAndStop(laser);
            }
            if(chaaf > 0)
            {
               trg.d.d.d.d.gotoAndStop(plo);
               if(trg.d.d.d.d._currentframe < 5)
               {
                  trg.d.d.d.d.d.gotoAndStop(chaaf);
               }
            }
            else if(_root.hmode == 17 || ups[118])
            {
               if(plox > 8)
               {
                  trg.d.d.d.d.gotoAndStop(plo + 4);
               }
            }
            if(ups[68])
            {
               ups[103] = _root.ups[103];
               if(trixx(30))
               {
                  if(random(10) == 0)
                  {
                     ups[103] = 0;
                  }
               }
               trg2 = player.d.d.d.d.l;
               if(ups[115])
               {
                  colorit(trg2,1.5,2,2,0,0,0);
                  trg2._alpha = 50;
               }
               else if(ups[103])
               {
                  colorit(trg2,0.4,0.97,0.5,0,150,0);
               }
               else if(ups[104])
               {
                  colorit(trg2,1,0.4,0.13,30,0,0);
               }
               else if(ups[89])
               {
                  colorit(trg2,3,3,3,150,150,150);
               }
               else if(ups[90])
               {
                  colorit(trg2,0.4,0.4,0.4,100,100,100);
               }
               else if(ups[69])
               {
                  colorit(trg2,0.33,0.18,0.18,66,40,40);
               }
               else if(ups[6])
               {
                  colorit(trg2,0.2,1,0,255,255,0);
               }
               else if(ups[3])
               {
                  colorit(trg2,0.4,0.15,0.38,90,0,180);
               }
               if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
               {
                  f1 = lass / trg.d.d._xscale / trg._xscale * 10000 + (trg2._x - 6) * trg.xpp;
               }
               else
               {
                  f1 = lass / trg.d.d._xscale / trg._xscale * 10000 + (trg2._y + 20) * trg.ypp;
               }
               trg2._yscale = f1;
               trg2._xscale = lassd * 30;
               trg2._x -= trg.xp - lasx;
               trg2._y -= trg.yp - lasy;
               lasx = trg.xp;
               lasy = trg.yp;
            }
         }
      }
      chaaf = 0;
      plox--;
      plox1--;
      trg.fire--;
      trg.fire1--;
      dirkey(false);
      if(horse > 0)
      {
         if(horse == 100)
         {
            horss();
         }
         else
         {
            horse--;
            xenf = horsx * 4.5;
            yenf = horsy * 4.5;
            trg.xbew *= 0.7;
            trg.ybew *= 0.7;
            if(horse % 6 < 3)
            {
               colorit(player,1.2,1.2,1.2,55,55,55);
            }
         }
         hhorse = 10;
      }
      else if(horse == undefined)
      {
         hhorse--;
      }
      else
      {
         horse = undefined;
      }
      f1 = 100 + (ups[12] - ups[71] + ups[122]) * 25;
      if(demon > 0)
      {
         f1 += 25;
      }
      if(ups[157])
      {
         f1 += (rag - 1) * 14;
      }
      trg._yscale = _loc0_ = f1;
      trg._xscale = _loc0_;
      if(trg.d._currentframe == 1)
      {
         f1 = 100 + (ups[121] - ups[120]) * 20;
         trg.d.d._yscale = _loc0_ = f1;
         trg.d.d._xscale = _loc0_;
      }
      f10 = [0,-0.15,0.3,0,0.1,0.23,0.1];
      f1 = 1;
      _root.playsp = 1 + Math.min(1,(ups[119] + ups[27] + ups[28] + ups[12] + ups[71] + ups[101] + ups[122] + ups[120] + ups[143] + ups[189]) * 0.3 + Math.min(1,ups[14]) * 0.6 - Math.min(1,ups[13] + ups[121]) * 0.1 + f10[_root.skiner] + ups[70] * 0.4 + ups[79] * 0.2 + ups[82] * 0.3) - (ups[90] + ups[129] + ups[118] + ups[182]) * 0.2;
      if(_root.it == 16)
      {
         _root.playersp += 0.4;
      }
      if(unic > 0)
      {
         _root.playsp += 0.28;
      }
      if(trixx(37))
      {
         _root.playsp += 0.15;
      }
      if(demon > 0)
      {
         _root.playsp -= 0.18;
      }
      if(_root.it == 90 || _root.it == 141)
      {
         _root.playsp = Math.max(1.5,_root.playsp);
      }
      f1 = _root.playsp;
      xenf *= 0.75 + f1 * 0.25;
      yenf *= 0.75 + f1 * 0.25;
      nomove = trg.d._currentframe >= 3 && trg.d._currentframe < 9 && (trg.d._currentframe != 4 || trg.d.d.d._currentframe < 38) || fra < 20;
      if(trg.d._currentframe == 4)
      {
         if(xenf != 0 || yenf != 0)
         {
            if(trg.d.d.d._currentframe > 11 && trg.d.d.d._currentframe < 35)
            {
               trg.d.d.d.gotoAndPlay(35);
            }
         }
      }
      if(trg.d._currentframe == 9 || trg.d._currentframe == 10)
      {
         if(xenf != 0 || yenf != 0)
         {
            trg.d.d.d.gotoAndPlay(trg.d.d.d._totalframes - 1);
         }
      }
      if(nomove)
      {
         yenf = _loc0_ = 0;
         xenf = _loc0_;
      }
      if(xenf == 0)
      {
         lastxx = fra;
      }
      if(yenf == 0)
      {
         lastxy = fra;
      }
      if(trg.ghhh)
      {
         if(xenf != 0 && yenf != 0)
         {
            if(lastxy > lastxx)
            {
               xenf = 0;
            }
            else
            {
               yenf = 0;
            }
         }
      }
      else if(xenf != 0 && yenf != 0)
      {
         xenf /= 1.4142135623730951;
         yenf /= 1.4142135623730951;
      }
      trg.ghhh = false;
      v1 = 0;
      if(xenf != 0 && yenf == 0)
      {
         v1 = Math.abs(trg.ybew);
         trg.ybew *= 0.5;
      }
      else if(yenf != 0 && xenf == 0)
      {
         v1 = Math.abs(trg.xbew);
         trg.xbew *= 0.5;
      }
      v1 *= 0.3;
      v2 = xenf * trg.xbew + trg.ybew * yenf;
      v1 = v1 * 0.1 + Math.max(0,v2 * 0.2);
      v1 = 3 + v1 / _root.playsp;
      v1 *= 0.8;
      trg.xbew -= xenf * v1;
      trg.ybew -= yenf * v1;
      trg.xbew *= 0.7 + _root.playsp * 0.075;
      trg.ybew *= 0.7 + _root.playsp * 0.075;
   }
   laps();
}
function posw(f1, f2, f3, b2)
{
   var _loc1_ = -100;
   var _loc2_ = -100;
   var _loc7_ = true;
   while(mhit(_loc1_,_loc2_) || levzz(ingrid(_loc1_,_loc2_)) >= 0.2)
   {
      _loc7_ = true;
      if(f3 > 500)
      {
         f3 = 0;
      }
      f3 += 5;
      _loc1_ = f1 + crand(f3);
      _loc2_ = f2 + crand();
      if(trg.s == 101 || b2)
      {
         var _loc3_ = 0;
         while(_loc3_ < ball.length)
         {
            var _loc5_ = ball[_loc3_];
            var _loc6_ = 50;
            if(_loc5_ == player && b2)
            {
               _loc6_ = 150;
            }
            if(enfcheck(_loc1_,_loc2_,_loc5_.xp,_loc5_.yp,_loc6_) > 0)
            {
               _loc7_ = false;
               _loc1_ = -100;
               _loc2_ = -100;
            }
            _loc3_ = _loc3_ + 1;
         }
      }
      if(_loc7_)
      {
         outgrid(ingrid(_loc1_,_loc2_));
         _loc1_ = xenf;
         _loc2_ = yenf;
         if(random(100) != 0)
         {
            for(z in ball)
            {
               var _loc4_ = ball[z];
               if(_loc4_.s == 5)
               {
                  if(Math.abs(_loc4_.xp - _loc1_) < 20)
                  {
                     if(Math.abs(_loc4_.yp - _loc2_) < 20)
                     {
                        _loc1_ = -100;
                     }
                  }
               }
            }
         }
      }
   }
}
function spaw(f1, f2, f3, f0)
{
   posw(f1,f2,f3,f0 > 9 && _root.lev == _root.chamb);
   levz[ingrid(xenf,yenf)] = 0.9;
   if(spispaw)
   {
      xenf += crand(random(10));
      yenf += crand();
   }
   return create(xenf,yenf,0,0,0,0,f0);
}
function scerf()
{
   if(bgg2 == undefined)
   {
      trg = createEmptyMovieClip("bggg2",35670000);
      bgg2 = new flash.display.BitmapData(gridxs,gridys - f1,true,0);
      trg.attachBitmap(bgg2,1);
      trg._yscale = trg._xscale = 100 / hdx;
      maxx = new flash.geom.Matrix();
      maxx.scale(hdx,hdx);
      bgg2.draw(this,maxx);
   }
}
function dirkey(f1)
{
   xenf = yenf = enf = 0;
   kkk = false;
   if(_root.so.data.left)
   {
      f1 = !f1;
   }
   if(!f1)
   {
      if(_root.so.data.frog)
      {
         if(Key.isDown(81))
         {
            kkk = true;
            xenf++;
         }
         if(Key.isDown(90))
         {
            kkk = true;
            yenf++;
         }
      }
      else
      {
         if(Key.isDown(65))
         {
            kkk = true;
            xenf++;
         }
         if(Key.isDown(87))
         {
            kkk = true;
            yenf++;
         }
      }
      if(Key.isDown(68))
      {
         kkk = true;
         xenf--;
      }
      if(Key.isDown(83))
      {
         kkk = true;
         yenf--;
      }
   }
   else
   {
      if(Key.isDown(39))
      {
         kkk = true;
         xenf++;
      }
      if(Key.isDown(37))
      {
         kkk = true;
         xenf--;
      }
      if(Key.isDown(38))
      {
         kkk = true;
         yenf--;
      }
      if(Key.isDown(40))
      {
         kkk = true;
         yenf++;
      }
   }
   if(_root.so.data.left)
   {
      xenf *= -1;
      yenf *= -1;
   }
}
function xox(f3)
{
   return random(7) == 0 || f3 && random(2) == 0;
}
function trixies(f3)
{
   if(trixx(34) || trixx(36) || trixx(41) || trixx(44) || trixx(45))
   {
      if(xox(f3) && trixx(45))
      {
         f2 = 5.3;
      }
      else if(xox(f3) && trixx(44))
      {
         f2 = 5.07;
      }
      else if(xox(f3) && trixx(41))
      {
         f2 = 5.04;
      }
      else if((xox(f3) || random(17) == 0 && !f3) && trixx(36))
      {
         if(random(2) == 0)
         {
            f2 = 5.06;
         }
         else
         {
            f2 = 5.03;
         }
      }
      else if(xox(f3) && trixx(34))
      {
         f2 = 5.01;
      }
   }
}
function picc(f2)
{
   if(random(2) == 0)
   {
      _root.picers[random(6)] = f2;
   }
}
function pic(f1)
{
   if(f1 < 7)
   {
      f1 = _root.picers[f1 - 1];
   }
   return f1;
}
function cspawn(f0, f12)
{
   i = 0;
   while(i < f12)
   {
      f13 = 0;
      while(f13++ < 10)
      {
         xenf = crand(5);
         yenf = crand(5);
         if(_root.lev == _root.chamb)
         {
            xenf *= 0.4;
            yenf *= 0.4;
         }
         if(linecheckx(chestox,chestoy,trg.xp + xenf * 7,trg.yp + yenf * 7))
         {
            f13 = 1000;
         }
      }
      if(f0 == 5.05 || f0 == 5.06)
      {
         xenf = 0;
         yenf = 0;
         if(trg != 2)
         {
            chestoy += 10;
         }
      }
      var _loc2_ = create(chestox,chestoy,0,xenf,yenf,0,f0);
      _loc2_.alt = true;
      if(f0 == 5.1)
      {
         _loc2_.fra -= 15;
         trg.done = true;
         if(trg == 2 && _root.locker[18] && !ups[90])
         {
            _loc2_.alt = false;
            _loc2_.it = 90;
         }
      }
      if(f0 == 5 && trg == 2)
      {
         _loc2_.col = 3;
      }
      if(f0 == 5.05 || f0 == 5.06)
      {
         if(trg != 2)
         {
            _loc2_._xscale = trg._xscale * 0.8;
            _loc2_._yscale = _loc2_._xscale;
         }
      }
      if(f10 < 0)
      {
         break;
      }
      i++;
   }
}
// every frame:
function onEnterFrame()
{
   _root.tex = "";
   for(e in shiz)
   {
      trg = shiz[e];
      if(trg.fra < fra)
      {
         trg.gotoAndStop(6);
         levz[trg.til] = 1.5;
         shiz.splice(e,1);
      }
   }
   if(bluf == undefined)
   {
      bluf = _root.bluf;
   }
   if(fra == 14 && curss)
   {
      st11(curss);
   }
   if(ups[114])
   {
      ups[69] = ups[118] = 0;
   }
   if(playfirst)
   {
      player.d.gotoAndStop(1);
      playfirst = false;
   }
   _root.chaf = chaf != undefined;
   if(player.dones)
   {
      if(gameover == 2)
      {
         _root.so.data.deads = _root.so.data.deads + 1;
         if(_root.so.data.deads >= 100)
         {
            _root.locker[39] = true;
         }
      }
      if(gameover > 1)
      {
         if(!_root.ups[11] && _root.ups[81] <= 0 && !_root.ups[161])
         {
            if(!_root.dmusic)
            {
               _root.dmusic = true;
               _root.fade = true;
            }
         }
         if(_root.prsk)
         {
            _root.sk = _root.prsk;
            _root.skiner = _root.prsk2;
            _root.prsk = undefined;
            _root.prsk2 = undefined;
         }
      }
      if(gameover++ > 50)
      {
         if(_root.ups[11] || _root.ups[81] > 0 || _root.ups[161])
         {
            _root.armor = 0;
            if(ashut > 0)
            {
               _root.beenlev[_root.lev] = false;
            }
            else if(_root.bossl == _root.lev || _root.bossl2 == _root.lev)
            {
               if(!nobob)
               {
                  bosssp();
                  killa = true;
                  if(_root.lev == _root.bossl2 && _root.double)
                  {
                     _root.bosss = _root.bosss2;
                  }
               }
            }
            _root.shroom = true;
            if(!_root.ups[11])
            {
               if(_root.skiner == 4)
               {
                  _root.armor = 1;
                  _root.ups[23] += - player.mhp;
               }
               else
               {
                  _root.ups[23] += 1 - player.mhp;
               }
               if(!_root.ups[161])
               {
                  _root.shroom = 2;
                  _root.ups[81]--;
               }
               else
               {
                  _root.shroom = 4;
                  _root.ups[161] = 0;
                  if(_root.skiner != 4)
                  {
                     _root.ups[23]--;
                     hat(31);
                     _root.prsk = _root.sk;
                     _root.prsk2 = _root.skiner;
                     _root.skiner = 4;
                     _root.sk = 5;
                  }
                  _root.armor = 3;
               }
            }
            else if(_root.skiner == 4)
            {
               _root.armor = 3;
            }
            _root.ups[11] = 0;
            _root.door = _root.door * 1 + 2;
            if(_root.door >= 4)
            {
               _root.door -= 4;
            }
            _root.playerx = 320;
            _root.playery = 400;
            invp();
            _root.old.fillRect(_root.old.rectangle,0);
            _root.old.draw(this);
            _root.olda._x = 0;
            _root.olda._y = 0;
            _root.olda._visible = true;
            _root.lev = _root.lastl;
            if(_root.lev <= 0)
            {
               _root.lastl = _root.lev = 35;
            }
            _root.hp = 1000;
            _root.getup = true;
            moveon();
            _root.gotoAndStop("reset");
         }
         else
         {
            _root.map.fillRect(_root.map.rectangle,0);
            _root.hud.paus.gotoAndStop(3);
            if(lastk <= 0)
            {
               lastk = 1;
            }
            _root.hud.paus.kill.gotoAndStop(Math.round(lastk));
            _root.hud.paus.nam.gotoAndStop(Math.max(1,_root.skiner));
            _root.hud.paus.loco.gotoAndStop(Math.max(1,_root.chaps));
            onEnterFrame = undefined;
         }
      }
   }
   if(_root.catlives + ups[145] + ups[134] + ups[133] + ups[187] > 2)
   {
      _root.locker[85] = true;
      purr = true;
   }
   player.d.bub2._visible = ups[108] || ups[162] || ups[173] || ups[142] || ups[184];
   if(ups[184])
   {
      player.d.bub2.gotoAndStop(5);
   }
   else if(ups[142])
   {
      player.d.bub2.gotoAndStop(2);
   }
   else if(ups[173])
   {
      player.d.bub2.gotoAndStop(3);
   }
   else if(ups[108])
   {
      player.d.bub2.gotoAndStop(1);
   }
   else
   {
      player.d.bub2.gotoAndStop(4);
   }
   if(player.d.bub._visible = playsave > 0)
   {
      if(playsave < 50)
      {
         if(playsave % 5 == 0)
         {
            if(co = !co)
            {
               player.d.bub._alpha = 100;
            }
            else
            {
               player.d.bub._alpha = 0;
            }
         }
      }
   }
   if(fra == telf)
   {
      _root.door = undefined;
      _root.soundy("hell_portal1.wav");
      if(shutdoor != 0)
      {
         _root.beenlev[_root.lev] = false;
      }
      invp();
      _root.old.fillRect(_root.old.rectangle,0);
      _root.old.draw(this);
      _root.olda._x = 0;
      _root.olda._y = 0;
      _root.olda._visible = true;
      moveon();
      if(tar && (tar != 166 && tar != 169 || _root.chaps < 9))
      {
         _root.lev = tar;
      }
      else
      {
         while(_root.lev == _root.lastl || !_root.levz[_root.lev] || _root.lev > 150)
         {
            _root.lev = random(_root.levz.length) + 1;
         }
      }
      if(_root.lev == _root.bossl && _root.double && _root.bosss != _root.bosss2)
      {
         _root.lev = _root.bossl2;
      }
      _root.tell = true;
      _root.door = undefined;
      _root.lastl = undefined;
      _root.gotoAndStop("reset");
   }
   if(fra % 3 == 0)
   {
      for(e in bomf)
      {
         bombfail(bomf[e][0],bomf[e][1],bomf[e][2],bomf[e][3]);
      }
      bomf = [];
   }
   if(ups[144] && !bumz)
   {
      bumz = true;
      trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.bum = true;
      trg2.flyby = true;
   }
   if(ups[114] && knife == undefined && player.d._currentframe < 3)
   {
      knife = trg = create(player.xp,player.yp - 10,0,0,0,0,2);
      attach(trg,501);
      trg.dy = undefined;
      trg.knife = true;
   }
   if(ups[81] && !cats && player.d._currentframe < 3)
   {
      cats = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.cat = true;
   }
   if(ups[11] && !catss && player.d._currentframe < 3)
   {
      catss = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.cat = 2;
   }
   if(ups[94] && !monb && player.d._currentframe < 3)
   {
      monb = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.mon = 1;
   }
   if(ups[96] && !monb2 && player.d._currentframe < 3)
   {
      monb2 = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.mon = 2;
   }
   if(ups[98] && !monb3 && player.d._currentframe < 3)
   {
      monb3 = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.mon = 3;
   }
   if(ups[131] && !monb4 && player.d._currentframe < 3)
   {
      monb4 = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.mon = 4;
   }
   if(ups[73] && !meats && player.d._currentframe < 3)
   {
      meats = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.meat = true;
      if(ups[73] < 3)
      {
         trg.hpo = 5;
      }
   }
   if(ups[73] > 4 && !meats2 && player.d._currentframe < 3)
   {
      meats2 = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.meat = true;
      trg.me2 = true;
   }
   if(Math.min(2,ups[112]) > flyby4 && player.d._currentframe < 3)
   {
      flyby4++;
      trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.ang = true;
      trg2.hpo = 20;
   }
   while(Math.min(3,ups[8] + ups[67] + ups[95] + ups[99] + ups[100] + ups[113] + ups[163] + ups[167] + ups[174] + ups[188]) > minions && player.d._currentframe < 3)
   {
      minions++;
      create(player.xp,player.yp - 10,0,0,0,0,3);
   }
   if(ups[155] && player.d._currentframe < 3 && !eyepie)
   {
      eyepie = true;
      trg2 = create(player.xp,player.yp - 10,0,crand(10),crand(10),0,3);
      trg2.eye = true;
   }
   if(ups[187] && player.d._currentframe < 3 && !hairb)
   {
      hairb = true;
      trg2 = create(player.xp,player.yp - 10,0,crand(10),crand(10),0,3);
      trg2.hairb = true;
   }
   if(ups[178] && player.d._currentframe < 3 && !holp)
   {
      holp = true;
      trg2 = create(player.xp,player.yp - 10,0,crand(10),crand(10),0,3);
      trg2.hol = true;
      holz = trg2;
   }
   if(ups[172] && player.d._currentframe < 3 && !knip)
   {
      knip = true;
      trg2 = create(player.xp,player.yp - 10,0,crand(10),crand(10),0,3);
      trg2.ni = true;
   }
   if(ups[117] == 0.55)
   {
      ups[117] = 0;
      trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.bird = true;
   }
   if(dbird == 2)
   {
      dbird = 1;
      trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.bird = 2;
   }
   if(trixx(57) && ggho == undefined && player.d._currentframe < 3)
   {
      ggho = trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.ggho = true;
   }
   if(!trixx(57) && ggho)
   {
      ggho.done = true;
      ggho = undefined;
   }
   if(trixx(54) && ggho2 == undefined && player.d._currentframe < 3)
   {
      ggho2 = trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.ggho = 2;
   }
   if(!trixx(54) && ggho2)
   {
      ggho2.done = true;
      ggho2 = undefined;
   }
   if(ups[170] && !dad)
   {
      dad = true;
      trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg2.dad = true;
      trg2.d.gotoAndStop(151);
      trg2.d.d.gotoAndStop(1);
   }
   if(bodd && player.d._currentframe < 3)
   {
      bodd = false;
      trg2 = spaw(trg.xp,trg.yp,0,3);
      trg2.meat = 5;
      colorit(trg2,_root.playcol[0],_root.playcol[1],_root.playcol[2],0,0,0);
   }
   if(Math.min(3,ups[10] * 2) > flyby && player.d._currentframe < 3)
   {
      flyby++;
      trg = create(player.xp,player.yp,0,0,0,0,3);
      trg.fly = true;
      trg.hpo = 2 + ups[9] * 5;
   }
   if(Math.min(1,ups[57]) > flyby2 && player.d._currentframe < 3)
   {
      flyby2++;
      trg = create(player.xp,player.yp,0,0,0,0,3);
      trg.fly = true;
      trg.alt = true;
   }
   if(Math.min(1,ups[128]) > flyby3 && player.d._currentframe < 3)
   {
      flyby3++;
      trg = create(player.xp,player.yp,0,0,0,0,3);
      trg.fly = true;
      trg.alt = 2;
   }
   if(ups[88] && !magsss && player.d._currentframe < 3)
   {
      magsss = true;
      trg = create(player.xp,player.yp - 10,0,0,0,0,3);
      trg.maga = true;
   }
   if(bluf > 0)
   {
      if(player.d._currentframe < 3)
      {
         bluf--;
         trg2 = create(player.xp,player.yp - 10,0,0,0,0,3);
         trg2.bluf = true;
         trg2.fly = true;
         if(blufer != undefined)
         {
            trg2.trg2 = blufer;
            trg2.xbew += crand(10);
            trg2.ybew += crand(10);
         }
      }
   }
   else
   {
      bluf = 0;
   }
   ablufer = blufer;
   blufer = undefined;
   gibb += ball.length * 0.1 - 0.4;
   gibb *= 0.9;
   for(e in door)
   {
      trg = door[e];
      if((trg._visible || trg.govo) && levz[trg.blo] == 0 && (justnow < 10 || trg.hide || trg.hide2))
      {
         trg.blown = true;
         trg._visible = true;
         if(trg.hide || trg.hide2)
         {
            if(trg.hide2)
            {
               hider2();
            }
            else
            {
               hider();
            }
            trg.gotoAndStop(17);
            mapd();
         }
         else if(!keyo)
         {
            if(mom.length > 4 || _root.lev == _root.minb)
            {
               levz[trg.blo] = 1;
               trg.blown = false;
            }
            else
            {
               trg.gotoAndStop(5);
            }
         }
      }
      if(trg.blown && levz[trg.blo] < 1)
      {
         levz[trg.blo] = 0.9;
      }
   }
   if(ups[75] && random(150) == 0)
   {
      piller();
   }
   f1 = _root.it;
   if(f1 < 1)
   {
      f1 = "empty";
      _root.itc = 1;
      _root.hud.it.gotoAndStop(7);
      _root.hud.it.d.gotoAndStop(20);
   }
   f10 = [3,4,2,1,3,2,1];
   if(_root.hardmode)
   {
      f11 = 16;
   }
   else
   {
      f11 = 12;
   }
   if(_root.skiner == 4)
   {
      f11 = 0;
   }
   player.mhp = f10[_root.skiner] + ups[22] + ups[23] + ups[121] + ups[24] + ups[25] + ups[26] + ups[12] + ups[101] + ups[15] + ups[92] + ups[119] + ups[16] * 2 + ups[129] * 2 + ups[176] + ups[184] + ups[193] + ups[189] + ups[138];
   if(player.mhp > f11)
   {
      if(ups[22] == _root.ups[22])
      {
         _root.ups[22]--;
         ups[22] = _root.ups[22];
         _root.armor = _root.armor + 1;
      }
      player.mhp = f11;
   }
   if(player.mhp >= 7)
   {
      _root.locker[1] = true;
   }
   if(player.hp > mhpp)
   {
      if(fra > 10)
      {
         if(player.hp - mhpp > 0.55)
         {
            red = 7;
         }
         else
         {
            red = 4;
         }
      }
   }
   mhpp = player.hp;
   if(_root.armor > ahpp)
   {
      if(fra > 10)
      {
         blue = 7;
      }
   }
   if(player.hp > 0)
   {
      player.hp = Math.max(0.5,Math.min(player.mhp,player.hp));
   }
   if(_root.itc >= 0.9)
   {
      _root.itc = 1;
      if(_root.hud.it._currentframe <= 14)
      {
         _root.hud.it.nextFrame();
      }
      else if(itb-- < 0)
      {
         _root.hud.it.gotoAndStop(15);
      }
   }
   else if(itb-- > 0)
   {
      _root.hud.it.gotoAndStop(16);
   }
   else
   {
      hudder = _root.hud.it._currentframe;
      _root.hud.it.gotoAndStop(Math.round(_root.itc * 6 - 0.5) + 1);
   }
   if(_root.hud.extra2._visible = _root.trix != undefined)
   {
      _root.hud.extra2.d.gotoAndStop(11);
      _root.hud.extra2.d.p.gotoAndStop(_root.trix);
      _root.hud.tex2 = _root.trixer;
      f11 = _root.hud.tex2.split("");
      _root.hud.black._xscale = f11.length * 7 + 20;
      _root.hud.extra2.d._alpha = 100;
      if(_root.hud.plix._currentframe > 2)
      {
         _root.hud.plix.gotoAndStop(1);
      }
   }
   else
   {
      if(_root.hud.plix._currentframe < 3)
      {
         _root.hud.plix.gotoAndStop(4);
      }
      _root.hud.extra2.d._alpha = 0;
      _root.hud.tex2 = "";
      _root.hud.black._xscale = 0.1;
   }
   if(_root.hud.extra3._visible = _root.atrix != undefined)
   {
      _root.hud.extra3.d.gotoAndStop(11);
      _root.hud.extra3.d.p.gotoAndStop(_root.atrix);
      _root.hud.tex3 = _root.atrixer;
      f11 = _root.hud.tex3.split("");
      _root.hud.black2._xscale = f11.length * 7 + 20;
      _root.hud.extra3.d._alpha = 100;
      if(_root.hud.plix2._currentframe > 2)
      {
         _root.hud.plix2.gotoAndStop(1);
      }
   }
   else
   {
      if(_root.hud.plix2._currentframe < 3)
      {
         _root.hud.plix2.gotoAndStop(4);
      }
      _root.hud.extra3.d._alpha = 0;
      _root.hud.tex3 = "";
      _root.hud.black2._xscale = 0.1;
   }
   if(_root.hud.extra._visible = _root.pilc != undefined)
   {
      f1 = _root.it;
      _root.hud.extra.d.gotoAndStop(11);
      _root.hud.extra.d.p.gotoAndStop(pic(_root.pilc));
      if(_root.pilc > 6)
      {
         _root.hud.pilll.tex = tart(_root.pilc,true);
      }
      else
      {
         f10 = !ups[46] && !ups[75];
         f11 = Math.round(_root.piller[_root.pilc]);
         if(f11 != _root.piller[_root.pilc])
         {
            f2 = true;
         }
         else
         {
            f2 = false;
         }
         if(!f10)
         {
            f2 = true;
         }
         if(!_root.piller[_root.pilc])
         {
            f11 = "???";
         }
         else
         {
            switch(Math.round(f11))
            {
               case 14:
                  if(f2)
                  {
                     f11 = "Luck Up";
                  }
                  else
                  {
                     f11 = "Luck Down";
                  }
                  break;
               case 13:
                  f11 = "Friends till the end!";
                  break;
               case 6:
                  if(player.hp + _root.armor > 1)
                  {
                     f11 = "Bad Trip!";
                     break;
                  }
               case 1:
                  if(_root.hardmode)
                  {
                     f11 = "Full Health?";
                  }
                  else
                  {
                     f11 = "Full Health";
                  }
                  break;
               case 2:
                  f11 = "I found Pills";
                  break;
               case 3:
                  f11 = "Explosive Diarrhea!";
                  break;
               case 4:
                  f11 = "Balls of Steel";
                  break;
               case 5:
                  f11 = "Pretty Fly";
                  break;
               case 7:
                  if(_root.skiner != 4)
                  {
                     f13 = player.mhp;
                  }
                  else
                  {
                     f13 = _root.armor;
                  }
                  if(f13 <= 1 || f2)
                  {
                     f11 = "Health Up";
                  }
                  else
                  {
                     f11 = "Health Down";
                  }
                  break;
               case 8:
                  f11 = "Bombs are Key";
                  break;
               case 9:
                  if(f2)
                  {
                     f11 = "Tears Up";
                  }
                  else
                  {
                     f11 = "Tears Down";
                  }
                  break;
               case 10:
                  if(f2 || ups[6] && _root.chaps < 8)
                  {
                     f11 = "Range Up";
                  }
                  else
                  {
                     f11 = "Range Down";
                  }
                  break;
               case 11:
                  if(f2)
                  {
                     f11 = "Speed Up";
                  }
                  else
                  {
                     f11 = "Speed Down";
                  }
                  break;
               case 17:
                  if(f2)
                  {
                     f11 = "Shot Speed Up";
                  }
                  else
                  {
                     f11 = "Shot Speed Down";
                  }
                  break;
               case 12:
                  f11 = "Bad Gas";
                  break;
               case 126:
                  f11 = "TelePills";
            }
         }
         _root.hud.pilll.tex = f11;
      }
      f11 = _root.hud.pilll.tex.split("");
      _root.hud.pilll.black._xscale = f11.length * 7 + 20;
      _root.hud.extra.d._alpha = 100;
      if(_root.hud.pilll._currentframe > 2)
      {
         _root.hud.pilll.gotoAndStop(1);
      }
   }
   else
   {
      if(_root.hud.pilll._currentframe < 3)
      {
         _root.hud.pilll.gotoAndStop(4);
      }
      _root.hud.it.d._alpha = 100;
   }
   if(_root.kep)
   {
      _root.hud.kep.gotoAndStop(2);
   }
   else
   {
      _root.hud.kep.gotoAndStop(1);
   }
   if(f1 > 0 || f1 == "empty")
   {
      _root.hud.it.d.gotoAndStop(f1);
   }
   _root.keys = Math.min(99,_root.keys);
   _root.coins = Math.min(99,_root.coins);
   _root.bombs = Math.min(99,_root.bombs);
   if(_root.coins >= 55)
   {
      _root.locker[2] = true;
   }
   _root.hud.coins = _root.coins;
   _root.hud.bombs = _root.bombs;
   _root.hud.keys = _root.keys;
   f1 = 1;
   if(ups[11])
   {
      f1++;
   }
   if(ups[81])
   {
      f1 += ups[81];
   }
   if(f1 > 1)
   {
      _root.hud.ups = "x" + f1;
   }
   else
   {
      _root.hud.ups = "";
   }
   _root.hud.chaps = levn[_root.chaps];
   if(_root.altchap)
   {
      _root.hud.chaps = levn2[_root.chaps];
   }
   if(_root.double)
   {
      _root.hud.chaps = _root.hud.chaps.split(" 2").join("");
      _root.hud.chaps += " XL";
   }
   f11 = _root.hud.chaps.split("");
   _root.hud.boxx._xscale = f11.length * 8.6 + 15.3;
   if(_root.hud.keys < 10)
   {
      _root.hud.keys = "0" + _root.hud.keys;
   }
   if(_root.hud.bombs < 10)
   {
      _root.hud.bombs = "0" + _root.hud.bombs;
   }
   if(_root.hud.coins < 10)
   {
      _root.hud.coins = "0" + _root.hud.coins;
   }
   _root.mhp = player.mhp;
   _root.hp = player.hp;
   if(fra % 7 == 0)
   {
      if(blackout == 2)
      {
         bloc = new flash.geom.ColorTransform();
         bloc.redMultiplier = 0;
         bloc.greenMultiplier = 0;
         bloc.blueMultiplier = 0;
      }
      else if(blackout)
      {
         bloc = new flash.geom.ColorTransform();
         bloc.redMultiplier = 0.15 + Math.random() * 0.15;
         bloc.greenMultiplier = 0.15 + Math.random() * 0.15;
         bloc.blueMultiplier = 0.15 + Math.random() * 0.15;
      }
      else
      {
         bloc = new flash.geom.ColorTransform();
         bloc.redMultiplier = 0.85 + Math.random() * 0.15;
         bloc.greenMultiplier = 0.85 + Math.random() * 0.15;
         bloc.blueMultiplier = 0.85 + Math.random() * 0.15;
      }
   }
   trg = _root.hud.lif;
   f1 = _root.armor;
   f2 = red-- > 0;
   f3 = blue-- > 0;
   ahpp = _root.armor;
   if(_root.eta)
   {
      f1++;
      ahpp++;
      f4 = true;
   }
   else
   {
      f4 = false;
   }
   f0 = player.mhp + f1;
   if(f0 < 12.5)
   {
      f0 = 12;
      trg.gotoAndStop(1);
   }
   else if(f0 < 24.5)
   {
      f0 = 24;
      trg.gotoAndStop(2);
   }
   else
   {
      f0 = 48;
      trg.gotoAndStop(3);
   }
   e = 0;
   while(e < f0)
   {
      trg2 = trg["h" + e];
      if(e > 2)
      {
         trg2.cacheAsBitmap = true;
      }
      if(e >= player.mhp)
      {
         if(f1-- > 0)
         {
            trg2._visible = true;
            if(f4)
            {
               f4 = false;
               trg2.gotoAndStop(8);
            }
            else if(f1 > -0.5)
            {
               trg2.gotoAndStop(5);
            }
            else
            {
               trg2.gotoAndStop(6);
            }
            if(f3)
            {
               colorit(trg2,1.6,1.6,2,20,20,60);
            }
            else
            {
               colorit(trg2,1,1,1,0,0,0);
            }
         }
         else
         {
            trg2._visible = false;
         }
      }
      else
      {
         trg2._visible = true;
         trg2.gotoAndStop(Math.max(1,Math.min(3,(e - player.hp) * 2 + 3)));
         if(f2 && trg2._currentframe != 3)
         {
            colorit(trg2,2,1.6,1.6,100,0,0);
         }
         else
         {
            colorit(trg2,1,1,1,0,0,0);
         }
      }
      e++;
   }
   trg2 = trg.h0;
   if(!f2)
   {
      if(player.hp < 1 && player.mhp >= 1)
      {
         if(fra % 10 == 0)
         {
            if(fra % 20 == 0)
            {
               colorit(trg2,2,1.6,1.6,100,0,0);
            }
            else
            {
               colorit(trg2,1,1,1,0,0,0);
            }
         }
      }
      else
      {
         colorit(trg2,1,1,1,0,0,0);
      }
   }
   if(enfget(_X,_Y) < 2)
   {
      _root.olda._visible = false;
      _Y = _loc0_ = 0;
      _X = _loc0_;
   }
   else if(_root.door != undefined)
   {
      v1 = 0.5 + Math.min(enfget(_X,_Y) * 0.004,0.22);
      _X = _X * v1;
      _Y = _Y * v1;
      _root.olda._x = _X - olfx;
      _root.olda._y = _Y - olfy;
      _root.olda._visible = true;
   }
   f1 = 40;
   if(olfy > 0)
   {
      _root.olda._y += f1;
   }
   else if(olfy < 0)
   {
      _root.olda._y -= f1;
   }
   if(Key.isDown(82))
   {
      if(resee++ > 30)
      {
         _root.fade = true;
         newstart(true);
      }
   }
   else
   {
      resee = 0;
   }
   if(!Key.isDown(78))
   {
   }
   if(Key.isDown(79))
   {
      unpause = false;
      _root.hud.paus.gotoAndStop(5);
   }
   if(!Key.isDown(73))
   {
   }
   nogridyet = true;
   if(!sadfa)
   {
      sadfa = true;
      if(_root.lev == 80)
      {
         boss.swapDepths(1002088);
         for(e in levz)
         {
            outgrid(e);
            if(xenf > 440)
            {
               levz[e] = 1;
            }
         }
      }
      golev();
      _root.black.prevFrame();
      mapd();
   }
   else
   {
      _root.fullhp = player.hp + _root.armor >= player.mhp;
      if(chama)
      {
         f1 = (_root.chama || (_root.fullhp && !_root.altch || _root.altch && player.hp < 1.5 || _root.altch == 2 || _root.lev == _root.chamb) && chama == 1) && shutdoor == 0 || keyd;
         for(e in door)
         {
            trg = door[e];
            if(trg.chamb)
            {
               if(!f1)
               {
                  v1 = trg.blo;
                  levz[v1] = 2;
                  clevc[v1] = 2;
                  trg.gotoAndStop(26);
               }
               else
               {
                  v1 = trg.blo;
                  levz[v1] = 0;
                  clevc[v1] = 0;
                  if(trg._currentframe != 27 && trg._currentframe != 25)
                  {
                     trg.gotoAndStop(25);
                  }
               }
            }
         }
         if(chama > 1 && !_root.chama)
         {
            if(!_root.amusic)
            {
               _root.amusic = true;
               _root.fade = true;
               _root.mmus.dones = true;
            }
            if(shutdoor == 0)
            {
               if(chamb == 3)
               {
                  if(_root.altch == 2)
                  {
                     if(!souldrop)
                     {
                        souldrop = true;
                        f1 = 40;
                        trg2 = spaw(player.xp + f1,player.yp,0,5.01);
                        trg3 = spaw(player.xp - f1,player.yp,0,5.01);
                        trg2.col = 3;
                        if(_root.chaps > 4)
                        {
                           trg2 = spaw(player.xp,player.yp,40,5.01);
                           trg2.col = 1;
                        }
                     }
                  }
               }
               if(chamb++ > 50)
               {
                  mhelps = 0;
                  f1 = _root.switchero;
                  if(_root.chaps % 2 == 1)
                  {
                     f1 = !f1;
                  }
                  if(_root.altch)
                  {
                     if(_root.altch == 2)
                     {
                        hitc = 0;
                        bossheart = false;
                        allets = true;
                        if(_root.chaps < 3)
                        {
                           if(f1)
                           {
                              f0 = [62.1,1,63,1,38.3,2];
                           }
                           else
                           {
                              f0 = [20,1,79,1,16.3,3];
                           }
                        }
                        else if(_root.chaps < 5)
                        {
                           if(random(3) == 0 && chama == 1 && _root.noff != -1 || _root.noff == _root.chaps)
                           {
                              _root.noff = _root.chaps;
                              f0 = [71,1,49,2];
                           }
                           else if(f1)
                           {
                              f0 = [23,4,68,1,26,3];
                              _root.noff = -1;
                           }
                           else
                           {
                              f0 = [31,5,64,1,27,3];
                              _root.noff = -1;
                           }
                        }
                        else if(_root.chaps < 7)
                        {
                           if(_root.chaps == 6 && random(3) != 0 && _root.noff2 != -1 || _root.noff2 == _root.chaps)
                           {
                              _root.noff2 = _root.chaps;
                              f0 = [58,2,49,1,98,2];
                           }
                           else if(f1)
                           {
                              f0 = [65,1,39,5];
                              _root.noff2 = -1;
                           }
                           else
                           {
                              f0 = [69,1,43,1];
                              _root.noff2 = -1;
                           }
                        }
                        else if(_root.chaps == 8 && random(3) != 0 && _root.noff3 != -1 || _root.noff3 == _root.chaps)
                        {
                           _root.noff3 = _root.chaps;
                           f0 = [48.1,1,99.1,1,38,7];
                        }
                        else if(f1)
                        {
                           f0 = [19,3,68.1,1,40,3];
                           _root.noff3 = -1;
                        }
                        else
                        {
                           f0 = [57,1,51,2,41,4];
                           _root.noff3 = -1;
                        }
                     }
                     else if(_root.chaps < 5)
                     {
                        f0 = [20,1,19,3];
                     }
                     else if(_root.chaps < 7)
                     {
                        f0 = [28,4,68,1];
                     }
                     else
                     {
                        f0 = [69,1,43,1];
                     }
                  }
                  else if(_root.chaps < 3)
                  {
                     if(f1)
                     {
                        f0 = [18,5,14,5,10,4];
                     }
                     else
                     {
                        f0 = [29,3,12,3,15,2];
                     }
                  }
                  else if(_root.chaps < 5)
                  {
                     if(f1)
                     {
                        f0 = [23,5,24,4,26,4];
                     }
                     else
                     {
                        f0 = [31,5,22,3,27,3];
                     }
                  }
                  else if(_root.chaps < 7)
                  {
                     if(f1)
                     {
                        f0 = [38,4,29,5,41,4];
                     }
                     else
                     {
                        f0 = [39,3,34,4,24.4,4];
                     }
                  }
                  else if(f1)
                  {
                     f0 = [19,3,28,4,20,2];
                  }
                  else
                  {
                     f0 = [71,1,69,1,28,1];
                  }
                  f1 = f0[(chama - 2) * 2];
                  f2 = f0[(chama - 2) * 2 + 1];
                  f3 = 0;
                  f6 = 3.141592653589793 / f2 * 2;
                  e = 0;
                  while(e < f2)
                  {
                     f4 = Math.sin(f3) * 200 + 320;
                     f5 = Math.cos(f3) * 180 + 250;
                     if(enfcheck(f4,f5,player.xp,player.yp,100))
                     {
                        f3 += f6 / 12;
                        e--;
                     }
                     else
                     {
                        f3 += f6;
                        _root.soundy("summonsound.wav",150);
                        if(f1 == 62.1)
                        {
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                           spaw(f4,f5,0,f1);
                        }
                        else if(f1 == 19 || f1 == 28)
                        {
                           trg = spaw(f4 + 10,f5,0,f1);
                           trg2 = spaw(f4,f5,0,f1);
                           if(f1 == 28 || _root.altch)
                           {
                              trg3 = spaw(f4 - 10,f5,0,f1);
                           }
                           trg.xp = trg2.xp + 20;
                           trg3.xp = trg2.xp - 20;
                           trg.yp = trg2.yp;
                           trg3.yp = trg2.yp;
                           if(f1 == 28 && f2 > 2)
                           {
                              f1 = 23;
                           }
                        }
                        else
                        {
                           spaw(f4,f5,0,f1);
                        }
                     }
                     e++;
                  }
                  chama++;
                  if(chama > 4)
                  {
                     justnow = 7;
                     _root.chama = true;
                  }
                  chamb = 10;
               }
            }
         }
      }
      if((keyd && !keyo || shutdoor == 0) && unpause)
      {
         if(shutdoor == 0)
         {
            justnow++;
         }
         if(justnow == 10 || keyd && !keyo)
         {
            keyo = true;
            if(fra > 20)
            {
               _root.soundy("Door_Heavy_Open.mp");
            }
            for(e in door)
            {
               trg = door[e];
               nohit = false;
               if(!trg.blown)
               {
                  if(trg.cus)
                  {
                     trg.gotoAndStop(37);
                  }
                  else if(trg.hide || trg.hide2)
                  {
                     nohit = true;
                  }
                  else if(trg.boner2)
                  {
                     if(_root.bona2)
                     {
                        trg.gotoAndStop(33);
                     }
                     else
                     {
                        nohit = true;
                     }
                  }
                  else if(trg.boner)
                  {
                     if(_root.bona)
                     {
                        trg.gotoAndStop(33);
                     }
                     else
                     {
                        nohit = true;
                     }
                  }
                  else if(trg.shop || trg.lib)
                  {
                     if(_root.shopa && trg.shop || _root.liba && trg.lib)
                     {
                        trg.gotoAndStop(1);
                     }
                     else
                     {
                        nohit = true;
                     }
                  }
                  else if(trg.gamb)
                  {
                     if(_root.gama)
                     {
                        trg.gotoAndStop(21);
                     }
                     else
                     {
                        nohit = true;
                     }
                  }
                  else if(trg.chamb)
                  {
                     if(fra < 15)
                     {
                        trg.gotoAndStop(27);
                     }
                  }
                  else if(trg.sat)
                  {
                     if(_this.satan)
                     {
                        if(_root.altsat)
                        {
                           trg.gotoAndStop(41);
                        }
                        else
                        {
                           trg.gotoAndStop(19);
                        }
                     }
                     else
                     {
                        f1 = Math.min(0.3,ups[51] * 0.2) + 0.01;
                        if(_root.it == 2)
                        {
                           f1 += 0.25;
                        }
                        if(_root.it == 38)
                        {
                           f1 += 0.35;
                        }
                        if(_root.bumkill)
                        {
                           f1 += 0.35;
                        }
                        if(bossdmg)
                        {
                           f1 += 0.35;
                        }
                        if(_root.devil)
                        {
                           f1 += 0.99;
                        }
                        if(_root.lastdev + 3 > _root.chaps)
                        {
                           f1 *= 0.5;
                        }
                        if(_root.lastdev + 2 > _root.chaps)
                        {
                           f1 *= 0.5;
                        }
                        if((Math.random() < f1 || _this.satan) && _root.devil != 3 && _root.chaps != 1 && _root.chaps < 9)
                        {
                           _root.devil = 2;
                           _root.lastdev = _root.chaps;
                           if(_root.demonz == 0)
                           {
                              _root.demonz = 1;
                           }
                           if(_root.altsat)
                           {
                              if(fra < 30)
                              {
                                 trg.gotoAndStop(41);
                              }
                              else
                              {
                                 trg.gotoAndStop(40);
                              }
                              _root.mmus = _root.soundy("isaacxpholyroomreveal.mp3",100);
                           }
                           else if(fra < 30)
                           {
                              trg.gotoAndStop(19);
                           }
                           else
                           {
                              trg.gotoAndStop(18);
                           }
                        }
                        else
                        {
                           _root.devil = 3;
                           nohit = true;
                        }
                     }
                  }
                  else if(trg.boss)
                  {
                     if(fra < 30)
                     {
                        trg.gotoAndStop(13);
                     }
                     else
                     {
                        trg.gotoAndStop(15);
                     }
                  }
                  else
                  {
                     trg.gotoAndStop(3);
                     if(fra < 30)
                     {
                        trg.p.gotoAndStop(trg.p._totalframes);
                     }
                  }
                  if(trg._visible && !nohit)
                  {
                     v1 = trg.blo;
                     levz[v1] = 0;
                     clevc[v1] = 0;
                     if(trg.cus)
                     {
                        levz[v1] = 0.99;
                     }
                  }
               }
            }
            if(fra > 7 && shutdoor == 0)
            {
               if(_root.hardmode)
               {
                  _root.eterns += Math.max(0.1,0.2 - _root.luck * 0.01 + _root.chaps * 0.02);
                  _root.eterns *= 0.999;
               }
               if(ups[94] || ups[96] || ups[98] || ups[131])
               {
                  f1 = ups[94] + (ups[96] + ups[98] * 2 + ups[131]) * 1.1;
                  _root.monbb += 0.5 / f1;
               }
               f1 = itc[_root.it];
               if(_root.itc < 1)
               {
                  _root.itc += 1 / f1;
                  itb = 5;
                  if(_root.itc < 1)
                  {
                     _root.soundy("beep.wav");
                  }
                  else
                  {
                     _root.soundy("itemrecharge.wav");
                  }
               }
               if(_root.bossl == _root.lev || _root.bossl2 == _root.lev)
               {
                  bosssp();
                  killa = true;
                  if(_root.lev == _root.bossl2 && _root.double)
                  {
                     _root.bosss = _root.bosss2;
                  }
               }
               else
               {
                  if(_root.amusic && !cock)
                  {
                     cock = true;
                     _root.musc.done = true;
                     _root.bossmusic = true;
                  }
                  f1 = Math.random();
                  if(ups[46])
                  {
                     f1 = f1 * 0.9 + 0.1;
                  }
                  if(_root.luck > 0)
                  {
                     f1 = f1 * 0.9 + 0.1;
                  }
                  if(_root.luck < 0)
                  {
                     f1 += _root.luck * 0.1;
                  }
                  f2 = 0;
                  trixies(false);
                  if(trixx(42))
                  {
                     if(ups[46] && _root.luck > 0)
                     {
                        f1 = f1 * 0.98 + 0.02;
                     }
                     else
                     {
                        f1 = f1 * 0.9 + 0.1;
                     }
                  }
                  if(ups[134])
                  {
                     if(random(3) == 0)
                     {
                        f1 = 1;
                        f2 = 5.05 + random(2) * 0.01;
                     }
                     else if(random(3) == 0)
                     {
                        f1 = 0;
                     }
                  }
                  if(trixx(46))
                  {
                     if(random(10) == 0)
                     {
                        if(player.mhp > 0)
                        {
                           player.hp += 0.5;
                           parc("hearter",player.xp,player.yp - 20,0,100,player.dpppp + 5000);
                           _root.soundy("Vamp_Gulp.mp");
                        }
                     }
                  }
                  if(_root.hardmode)
                  {
                     if(random(Math.max(1,6 + _root.luck)) == 0)
                     {
                        f1 = 0;
                     }
                     if(random(Math.max(1,6 - _root.luck)) == 0 && player.mhp > 0)
                     {
                        f1 = 0.59;
                     }
                  }
                  if(f1 > 0.22)
                  {
                     if(f1 < 0.3)
                     {
                        if(random(3) == 0)
                        {
                           f0 = 5.3;
                        }
                        else if(random(2) == 0)
                        {
                           f0 = 5.35;
                        }
                        else
                        {
                           f0 = 5.07;
                        }
                     }
                     else if(f1 < 0.45 + _root.chaps * 0.03 * _root.luck)
                     {
                        f0 = 5.02;
                     }
                     else if(f1 < 0.58 || random(30 - _root.luck * 2) == 0 && player.hp < player.mhp - 1)
                     {
                        f0 = 5.01;
                        if(_root.luck > 0 && random(30 - _root.luck * 2) == 0 || player.mhp < 1 && random(Math.max(20,40 - _root.luck * 5)) == 0 && _root.hardmode)
                        {
                           f0 = 5.010000003;
                        }
                     }
                     else if(f1 < 0.76 - _root.chaps * 0.007 + _root.luck * 0.02 - Math.min(10,_root.keys) * 0.01)
                     {
                        f0 = 5.03;
                     }
                     else if(f1 < 0.95)
                     {
                        f0 = 5.04;
                     }
                     else
                     {
                        f0 = 5.05;
                     }
                     if(f2 > 0)
                     {
                        f0 = f2;
                     }
                     spaw(320,280,0,f0);
                  }
               }
            }
         }
         openss = true;
      }
      else if(!openss)
      {
         justnow = 0;
      }
   }
   for(e in drawer)
   {
      drawer[e].clear();
   }
   if(!Key.isDown(80) && !Key.isDown(27))
   {
      unspace = true;
   }
   if(_root.unl._currentframe != 1 || _root.over._currentframe != 1)
   {
      unlo = true;
      unpause = false;
   }
   flyshut = 0;
   if(Key.isDown(32) && !apau)
   {
      nospo = 15;
   }
   apau = unpause;
   if(!unpause)
   {
      if(unlo)
      {
         unpause = true;
         unlo = false;
         if((player.d._currentframe != 4 || player.d.d.d._currentframe > 9) && (player.d._currentframe != 11 || player.d.d.d._currentframe > 9))
         {
            scerf();
         }
      }
      else if(gameover == 0 && _root.hud.paus._currentframe == 1)
      {
         _root.hud.paus.gotoAndStop(2);
         scerf();
      }
      if(Key.isDown(80) && unspace)
      {
         unpause = true;
         unspace = false;
      }
      _root.hud.paus.st0.gotoAndStop(Math.min(1 + Math.max(1,Math.round((_root.playsp - 0.8) * 4)),8));
      _root.hud.paus.st1.gotoAndStop(Math.min(Math.max(1,Math.round(12 - _root.firra)),8));
      _root.hud.paus.st2.gotoAndStop(Math.max(1,Math.min(1 + Math.round((_root.firrb - 2.4) * 1.1),8)));
      _root.hud.paus.st3.gotoAndStop(Math.max(1,Math.min(1 + Math.round((_root.firrr - 20) / 4),8)));
   }
   else
   {
      if(bgg2 != undefined)
      {
         bgg2 = undefined;
         bggg2.swapDepths(100);
         removeMovieClip(bggg2);
      }
      topz(0);
      freez--;
      slow--;
      sloww--;
      scare--;
      playsave--;
      unic--;
      if(unic < -1)
      {
         pacman = false;
      }
      if(_root.it == 124 || _root.it == 71 && fra2)
      {
         if(nofun)
         {
            nofun = false;
         }
         else
         {
            _root.itc += 0.01;
         }
      }
      if(ups[63] && shutdoor != 0 && _root.itc - 0.5 < tictic && _root.itc < 1 && _root.lev != _root.gamb)
      {
         tictic = Math.min(_root.itc,tictic);
         _root.itc += 0.0005;
         if(hudder != _root.hud.it._currentframe && _root.hud.it._currentframe < 15)
         {
            if(_root.itc < 1)
            {
            }
            _root.soundy("batterycharge.mp");
            parc("batter",player.xp,player.yp - 20,0,100,player.dpppp + 5000);
         }
      }
      _root.hud.paus.gotoAndStop(1);
      fra++;
      if(etogo)
      {
         etogo--;
         if(etogo < 1)
         {
            _root.over.gotoAndStop(16);
            etogo = undefined;
         }
      }
      fra2 = fra % 2 == 0;
      fra3 = fra % 3 == 0;
      fra5 = fra % 5 == 0;
      fra10 = fra5 && fra2;
      lofo = false;
      lastlarx = lastlary = undefined;
      if(fra10)
      {
         if(_root.locker[90] && _root.locker[99] && _root.locker[100] && _root.locker[101] && _root.locker[102] && _root.locker[103] && _root.locker[104] && _root.locker[106] && _root.locker[107] && _root.locker[108] && _root.locker[109] && _root.locker[110] && _root.locker[111] && _root.locker[112] && _root.locker[113])
         {
            _root.locker[105] = true;
         }
      }
      if(justnow > 10)
      {
         for(e in door)
         {
            trg = door[e];
            if((_root.kep || _root.keys > 0) && enfcheck(trg._x,trg._y,player.xp + player.xbew * 2,player.yp + player.ybew * 2,40) && keyhole == trg.blo)
            {
               if(trg.shop || trg.boner2 || trg.boner || trg.lib)
               {
                  v1 = trg.blo;
                  levz[v1] = 0;
                  clevc[v1] = 0;
                  if(player.xbew * player.xbew + player.ybew * player.ybew > 1)
                  {
                     if(!_root.liba && trg.lib)
                     {
                        trg.gotoAndStop(8);
                        if(!_root.kep)
                        {
                           _root.keys = _root.keys - 1;
                        }
                        _root.liba = true;
                        _root.soundy("Unlock00.wav",100);
                     }
                     if(!_root.shopa && trg.shop)
                     {
                        trg.gotoAndStop(8);
                        if(!_root.kep)
                        {
                           _root.keys = _root.keys - 1;
                        }
                        _root.shopa = true;
                        _root.soundy("Unlock00.wav",100);
                     }
                     if(!_root.bona && trg.boner)
                     {
                        trg.gotoAndStop(31);
                        if(!_root.kep)
                        {
                           _root.keys = _root.keys - 1;
                        }
                        _root.bona = true;
                        _root.soundy("Unlock00.wav",100);
                     }
                     if(!_root.bona2 && trg.boner2)
                     {
                        trg.gotoAndStop(31);
                        if(!_root.kep)
                        {
                           _root.keys = _root.keys - 1;
                        }
                        _root.bona2 = true;
                        _root.soundy("Unlock00.wav",100);
                     }
                  }
               }
            }
            if(trg.gamb && _root.coins > 0 && enfcheck(trg._x,trg._y,player.xp,player.yp,40) && keyhole == trg.blo)
            {
               v1 = trg.blo;
               levz[v1] = 0;
               clevc[v1] = 0;
               if(!_root.gama)
               {
                  trg.gotoAndStop(22);
                  _root.coins = _root.coins - 1;
                  _root.gama = true;
                  _root.soundy("Coin_Slot.mp",100);
               }
            }
         }
      }
      _root.p.gotoAndStop(1);
      if((Key.isDown(27) || Key.isDown(80)) && unspace)
      {
         _root.p.gotoAndStop(_root.pinfo);
         unpause = false;
         unspace = false;
      }
      topz(1);
      f0 = fra % 2 + 1;
      for(e in par)
      {
         trg = par[e];
         if(trg.done)
         {
            removeMovieClip(par[e]);
            par.splice(e,1);
         }
         else
         {
            if(trg.longstay)
            {
               if(ashut > 0)
               {
                  trg.longstay--;
                  trg.prevFrame();
               }
            }
            if(trg.perm && ashut > 0)
            {
               trg.stop();
            }
            else
            {
               trg.nextFrame();
            }
         }
      }
      actions1();
      if(brr.length > 0)
      {
         breakall();
         brr = [];
         brr2 = [];
      }
      topz(2);
      physix();
      tip(2);
      v = 0.7;
      if(fra % 1000 == 999)
      {
         f1 = new Array();
         for(e in levz)
         {
            f1[e] = levz[e];
         }
         levz = new Array(f1.length);
         for(e in f1)
         {
            levz[e] = f1[e];
         }
      }
      v1 = _root.tex;
      _root.tex = " ";
      e = 0;
      while(e < alltimer.length)
      {
         alltimer[e] *= 0.96;
         e++;
      }
      f1 = getTimer();
      if(fra > 35 || _root.lev != 35)
      {
         wtfps *= 0.9;
         wtfps += Math.max(1,1000 / (f1 - wtfps2) * 0.1);
      }
      qqua = _root.so.data.qqal == "AUTO" || _root.so.data.qqal == undefined;
      if(qqua)
      {
         if(wtfps < 14)
         {
            if(_quality == "MEDIUM")
            {
               _quality = "LOW";
            }
         }
         if(wtfps < 26)
         {
            if(_quality == "HIGH")
            {
               _quality = "MEDIUM";
            }
         }
         if(wtfps > 29.4 && _quality == "MEDIUM" || wtfps > 25 && _quality == "LOW")
         {
            if(wtff++ > 100)
            {
               wtff = 0;
               if(_quality == "MEDIUM")
               {
                  _quality = "HIGH";
               }
               else if(_quality == "LOW")
               {
                  _quality = "MEDIUM";
               }
            }
         }
         else
         {
            wtff = 0;
         }
      }
      wtfps2 = f1;
      if(chestopen != undefined)
      {
         trg = chestopen;
         chestopen = undefined;
         if(trg != 2)
         {
            chestox = trg.xp;
            chestoy = trg.yp;
         }
         if(!trg.empty)
         {
            if(chama == 1 && _root.lev == _root.chamb)
            {
               chama = 2;
            }
            trg.empty = true;
            if(trg.col == 31)
            {
               boil(false);
               boil(true);
            }
            else if(trg.c2)
            {
               f10 = 2;
               f1 = [81,134,133,145];
               if(_root.locker[79])
               {
                  f1.push(134);
               }
               f1 = f1[random(f1.length)];
               if(!ups[f1] && random(10) == 0)
               {
                  var trg2 = create(chestox,chestoy,0,0,0,0,5.1);
                  trg2.alt = true;
                  trg2.fra -= 15;
                  trg.done = true;
                  trg2.alt = 5;
                  trg2.it = f1;
                  f1 = 70;
                  enf = enfcheck(chestox,chestoy,player.xp,player.yp,f1);
                  if(enf < f1)
                  {
                     enf = (f1 - enf) / enf * 0.4;
                     player.xbew -= xenf * enf;
                     player.ybew -= yenf * enf;
                  }
               }
               else if(random(18) == 0)
               {
                  tar = 166;
                  teller();
               }
               else if(random(5) == 0)
               {
                  boil(false);
                  boil(true);
               }
               else if(random(5) == 0)
               {
                  spaw(trg.xp,trg.yp,20,5.040000005);
               }
               else if(random(5) == 0)
               {
                  bluf += 3;
               }
               else
               {
                  f1 = [5.010000003,5.040000003,5.07];
                  f1 = f1[random(f1.length)];
                  if(f1 == 5.010000003 && random(2) == 0)
                  {
                     cspawn(f1,1);
                  }
                  else
                  {
                     cspawn(f1,2);
                  }
               }
            }
            else
            {
               if(trg.d._currentframe == 8 && trg.col == 1)
               {
                  f10 = 1 + random(2);
               }
               else if(trg.d._currentframe == 6)
               {
                  f10 = Math.max(2,random(8) - 1);
               }
               else
               {
                  f10 = Math.max(2,random(4) - 1);
               }
               f2 = 0;
               if(random(3) != 0)
               {
                  trixies(true);
                  if(trixx(42) || f2 > 0)
                  {
                     f10++;
                  }
               }
               if(trg.gold)
               {
                  if(random(3) == 0 && _root.locker[84] && !_root.shitpenny)
                  {
                     _root.shitpenny = true;
                     create(trg.xp,trg.yp,0,0,0,0,5.35);
                  }
                  else
                  {
                     cspawn(5.02,5 + random(3));
                  }
               }
               else
               {
                  z = 0;
                  while(z < f10 && !trg.done)
                  {
                     f12 = 1;
                     f1 = Math.random();
                     if(f2 > 0)
                     {
                        f0 = f2;
                        f2 = 0;
                     }
                     else if((_root.locker[18] && random(10) == 0 && trg == 2 || random(5) == 0 && trg.d._currentframe == 6) && z == 0 && (trg != 2 || !ups[90]) || _root.chaps == 11)
                     {
                        f1 = 70;
                        enf = enfcheck(chestox,chestoy,player.xp,player.yp,f1);
                        if(enf < f1)
                        {
                           enf = (f1 - enf) / enf * 0.4;
                           player.xbew -= xenf * enf;
                           player.ybew -= yenf * enf;
                        }
                        f0 = 5.1;
                        trg.done = true;
                        treas = true;
                     }
                     else if(random(5) == 0 && z == 0 && trg != 2)
                     {
                        f1 = 70;
                        enf = enfcheck(chestox,chestoy,player.xp,player.yp,f1);
                        if(enf < f1)
                        {
                           enf = (f1 - enf) / enf * 0.4;
                           player.xbew -= xenf * enf;
                           player.ybew -= yenf * enf;
                        }
                        if(trg.d._currentframe == 6)
                        {
                           f0 = 5.3;
                        }
                        else
                        {
                           f0 = 5.07;
                        }
                        if(random(2) == 0)
                        {
                           f0 = 5.35;
                        }
                        f10 = -100;
                     }
                     else if(f1 < 0.35 && trg != 2)
                     {
                        f0 = 5.02;
                        f12 = random(3) + 1;
                     }
                     else if(f1 < 0.55 || f1 < 0.6 && trg == 2)
                     {
                        f0 = 5;
                        if(random(2) == 0)
                        {
                           f10--;
                        }
                     }
                     else if(f1 < 0.7)
                     {
                        f0 = 5.03;
                        if(trg == 2)
                        {
                           f10 = -100;
                        }
                     }
                     else if(f1 < 0.71 && z == 0)
                     {
                        f0 = 5.05;
                        f10 = -100;
                     }
                     else if((f1 < 0.72 || trg == 2 && f1 < 0.9) && z == 0)
                     {
                        f0 = 5.06;
                        f10 = -100;
                     }
                     else
                     {
                        f0 = 5.04;
                     }
                     if(trg.d._currentframe == 8 && trg.col == 1)
                     {
                        if(random(2) == 0)
                        {
                           f0 = 5.02;
                           f12 = random(4) + 1;
                        }
                        else
                        {
                           f0 = 5;
                        }
                     }
                     cspawn(f0,f12);
                     z++;
                  }
               }
            }
            treas = false;
         }
      }
      tip(0);
   }
   for(e in ball)
   {
      trg = ball[e];
      if(trg.s == 4)
      {
         if(trg.d._currentframe == 3 && ups[140])
         {
            trg.dfr = true;
            trg.d.gotoAndStop(5);
         }
      }
      if(trg.alter)
      {
         f1 = trg.alter;
         if(trg.s == 16)
         {
            trg.d.hx.d.gotoAndStop(f1);
            trg.d.d.hx.d.gotoAndStop(f1);
            trg.d.d.d.hx.d.gotoAndStop(f1);
            trg.d.d.hxx.gotoAndStop(f1);
            trg.d.d.d.hxx.gotoAndStop(f1);
         }
         else
         {
            if(trg.s == 46 && trg.alter == 3 && trg.minb == 3)
            {
               trg.d.he.gotoAndStop(f1);
               trg.d.d.he.gotoAndStop(f1);
               trg.d.d.d.he.gotoAndStop(f1);
            }
            trg.d.hx.gotoAndStop(f1);
            trg.d.d.hx.gotoAndStop(f1);
            trg.d.d.d.hx.gotoAndStop(f1);
            trg.d.d.d.d.hx.gotoAndStop(f1);
            if(trg.s == 50)
            {
               trg.d.d.hx.h.gotoAndStop(trg.f3);
            }
            if(trg.s == 60)
            {
               if(trg.d._currentframe == 5)
               {
                  trg.d.d.gotoAndStop(f1);
               }
               trg.d.hxx.gotoAndStop(f1);
               trg.d.d.hxx.gotoAndStop(f1);
               trg.d.d.d.hxx.gotoAndStop(f1);
            }
         }
      }
   }
   if(fra % 50 == 0)
   {
      f1 = [];
      f2 = [];
      a = 0;
      while(a < ball.length)
      {
         f1[a] = ball[a];
         a++;
      }
      a = 0;
      while(a < par.length)
      {
         f2[a] = par[a];
         a++;
      }
      ball = new Array(f1.length);
      par = new Array(f2.length);
      a = 0;
      while(a < ball.length)
      {
         ball[a] = f1[a];
         a++;
      }
      a = 0;
      while(a < par.length)
      {
         par[a] = f2[a];
         a++;
      }
   }
   if(wtftex)
   {
      _root.tex = wtftex;
   }
   trg = player;
   if(trg.d._currentframe != 1)
   {
      if(trg.d._currentframe == 7 || trg.d._currentframe == 8)
      {
         trgnextd();
      }
      else
      {
         trg.d.d.gotoAndStop(sk);
         if(bgg2 == undefined)
         {
            if(trgnextd(trg.d.d.d,true) && trg.d._currentframe != 6)
            {
               playfirst = true;
            }
         }
         if(trg.d.d.d._currentframe == 32 && trg.d._currentframe == 6)
         {
            _root.soundy("isaacdies.wav");
            if(gameover <= 0)
            {
               gameover = 1;
            }
         }
      }
   }
   else if(demon > 0)
   {
      sk = 7;
   }
   trg.d.d.d.it.d.gotoAndStop(trg.it);
   trg.d.d.d.it.d.p.gotoAndStop(player.pilc);
   trg.d.d.d.it.d._xscale = trg.d.d.d.it.d._yscale = 10000 / player._xscale;
   trg.d.hs._visible = (trg.d.bo._currentframe == 16 || trg.d.bo._currentframe == 17 || trg.d.bo._currentframe == 18) && trg.d.bo.d._currentframe != 2;
   if(trg.d.hs._visible)
   {
      if(trg.d.bo.d._currentframe == 1)
      {
         trg.d.hs.gotoAndStop(1);
      }
      else
      {
         trg.d.hs.gotoAndStop(2);
      }
      trg.d.hs._xscale = trg.d.bo._xscale;
   }
   if(fra > 2 && fra < 15)
   {
      player._visible = true;
   }
   if(plxxx > 0)
   {
      player.fire = 1000;
      player.xp = plxxx;
      player.yp = plyyx;
      player.xbew = 0;
      player.ybew = 0;
   }
   for(e in ball)
   {
      trg = ball[e];
      if(trg.s == 42)
      {
         trg.xp = trg.xpp;
         trg.yp = trg.ypp;
         trg.xbew = 0;
         trg.ybew = 0;
      }
   }
   trg = player;
   if(unpause)
   {
      playc();
   }
   dec++;
   if(dec == 15)
   {
      decer = bomb(4);
      decer.dmg += 100;
   }
   if(cowss > 0)
   {
      cowss--;
      spaw(player.xp,player.yp,40,5.02);
   }
   if(kogs.length > 0)
   {
      spaw(player.xp,player.yp,40,kogs.pop());
   }
   if(sloto != undefined)
   {
      sloto--;
      if(sloto < 0)
      {
         f2 = 0;
         f12 = 1;
         sloty(slotf());
         if(f2 > 0)
         {
            if(f2 < 7)
            {
               emo();
            }
            if(f1 < 33)
            {
               _root.soundy("slotspawn" + random(3) + ".wav");
            }
            i = 0;
            while(i < f12)
            {
               var trg2 = spaw(player.xp,player.yp,40,f2);
               i++;
            }
         }
         sloto = undefined;
      }
   }
   if(trg.d._currentframe == 1 || _root.bombnext)
   {
      f2 = facer;
      if(trg.d._currentframe == 1)
      {
         trg.d.d.d.gotoAndStop(f2);
         if(f2 == 17 || f2 == 31)
         {
            f0 = Math.round((fra - chaf) / 8);
            if(plox <= 8 && chaf == undefined)
            {
               f0 = 0;
               if(f2 == 31)
               {
                  trg.d.d.d.gotoAndStop(33);
               }
               else
               {
                  trg.d.d.d.gotoAndStop(1);
               }
               plo = 1;
            }
            else
            {
               chaaf = Math.max(1,Math.min(6,f0));
            }
         }
         z = 0;
         while(z < 6)
         {
            f4 = false;
            trg2 = trg.d.d.d["hat" + z];
            f3 = _root.hatmode[z];
            if(_root.colit == 86 && z == 0)
            {
               f3 = 18;
            }
            if(_root.ups[161] && z == 0)
            {
            }
            if(z == 4)
            {
               if(ups[117])
               {
                  f3 = 38;
               }
               if(bra && freez > 0)
               {
                  f3 = 28;
               }
            }
            if(_root.ups[152] && z == 4)
            {
               f3 = 45;
               f4 = true;
               trg2.d.gotoAndStop(9);
            }
            if(f3 > 0 && !nohat)
            {
               trg2.gotoAndStop(f3);
               trg2.d.stop();
               if(z != 0)
               {
                  trg2._x = trg.d.d.d.hat0._x;
                  trg2._y = trg.d.d.d.hat0._y;
               }
               if(trg2.d._totalframes > 4 && plox > 8)
               {
                  trg2.d.gotoAndStop(plo + 4);
               }
               else
               {
                  trg2.d.gotoAndStop(plo);
               }
            }
            else
            {
               trg2.gotoAndStop(1);
            }
            if(f4)
            {
               trg2 = trg2.d.l;
               if(Math.abs(trg.xpp) > Math.abs(trg.ypp))
               {
                  f1 = lass / trg.d.d._xscale / trg._xscale * 10000 + (trg2._x - 6) * trg.xpp - 13;
               }
               else
               {
                  f1 = lass / trg.d.d._xscale / trg._xscale * 10000 + (trg2._y + 20) * trg.ypp;
               }
               if(trg.lfrr - fra > -3)
               {
                  trg2.gotoAndStop(fra % 3 + 1);
                  trg2._yscale = f1;
                  trg2 = undefined;
               }
               else
               {
                  trg2._visible = false;
               }
            }
            z++;
         }
      }
   }
}
// start:
llev = [2,117,57,186,2,113,61,173,2,101,53,152,2,90,46,135,2,80,0,0,6,34];
llev2 = [2,117,57,183,2,115,60,171,2,103,53,153,2,91,46,135,2,90,0,0,6,34];
specol = [[1,0.1,0.1],[0.5,0.5,0],[0.2,0.5,0.4],[1,0.5,0.5],[0.7,0.45,0.4],[0.1,0.8,0.2],[0.1,1,0.5],[0,0.15,0.15],[0.55,0.55,1.35],[1.6,0.7,1]];
specol2 = [0,[1,0.6,0.6],[0.6,0.6,0.6],[0.6,1,0.6],[0.6,1,1],[0.5,0.7,0.5],[1,0.7,0.5],[0.5,0.7,1],[0.5,0.7,0.7],[1,0.7,0.5],[0,1.7,1.1],[0.6,0.7,0.6],[1,1,0.5],[0.3,0.7,0.6],[1,0.6,0.6],[0.5,0.5,0.6],[0.44,0.44,0.44],[0.5,0.5,0.5,50,50,50],[0.24,0.24,0.24],[1.2,0.7,0.7],[2.5,1.2,1.5],[1,1,1,20,-50,-222],[1.5,1,1.15],[1.2,1.2,1.2,50,50,50]];
levn = [0,"Basement 1","Basement 2","Caves 1","Caves 2","The Depths 1","The Depths 2","The Womb 1","The Womb 2","Sheol",0,"The Chest"];
levn2 = [0,"Cellar 1","Cellar 2","Catacombs 1","Catacombs 2","Necropolis 1","Necropolis 2","Utero 1","Utero 2","Cathedral",0,"The Chest"];
_root.tex = undefined;
if(_root.chala <= 0)
{
   _root.chala = 0;
}
if(_root.lev == _root.bossl2)
{
   altboss = _root.altboss2;
}
if(_root.lev == _root.bossl)
{
   altboss = _root.altboss;
   if(_root.chaps == 8 || _root.chaps == 6 && !_root.locker[3])
   {
      _root.unl.gotoAndStop(1);
      _root.unl.nogo = true;
   }
}
gridx = 0;
gridy = 0;
if(_root._xscale < 110)
{
   gridxs = 640;
   gridys = 480;
   hdx = 1;
}
else if(_root._xscale < 135)
{
   gridxs = 800;
   gridys = 620;
   hdd = true;
   hdx = 1.25;
}
else
{
   gridxs = 1100;
   gridys = 800;
   hdd = true;
   hdx = 1.667;
}
if(_root.nozinc)
{
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
if(_root.chaps < 3)
{
   lars = 4;
}
else
{
   lars = 0;
}
combis = 0;
lusts = 0;
rag = 1;
thistern = 0;
if(_root.levz.length <= 1)
{
   _root.chaps = Math.max(1,_root.chaps);
   f1 = getTimer() % 100;
   e = 0;
   while(e < f1)
   {
      f2 = random(random(10)) * Math.random();
      e++;
   }
   _root.darky(120);
   if(_root.newstartt || _root.it == undefined)
   {
      _root.newstartt = false;
      newstats();
      _root.eta = false;
   }
   _root.big = false;
   _root.darks = false;
   f1 = 80;
   if(_root.locker[4])
   {
      f1 = 60;
   }
   if(_root.locker[42])
   {
      f1 = 25;
   }
   if(_root.locker[65] || _root.locker[66] || _root.locker[67] || _root.locker[68] || _root.locker[70] || _root.locker[69] || _root.locker[72])
   {
      f1 = 15;
   }
   sams();
   _root.altm = random(f1) == 0 && _root.chaps != 1 && (_root.chaps != 2 || !_root.double);
   _root.big = false;
   _root.double = false;
   _root.darks = false;
   if(_root.chaps != 11)
   {
      if(random(f1) == 0 && _root.chaps % 2 == 1 && _root.chaps < 8)
      {
         _root.double = true;
      }
      else
      {
         _root.double = false;
         if(random(f1 * 2) == 0)
         {
            _root.big = true;
         }
         else if(random(f1 * 2) == 0)
         {
            _root.darks = true;
         }
      }
   }
   if(_root.chala == 1)
   {
      _root.big = false;
      _root.double = false;
      _root.darks = true;
   }
   if(_root.chala == 3)
   {
      _root.big = false;
      _root.double = true;
      _root.darks = false;
   }
   if(_root.double)
   {
      _root.chaps = _root.chaps + 1;
      curss = "Curse of the Labyrinth";
   }
   else if(_root.big)
   {
      curss = "Curse of the Lost";
   }
   else if(_root.darks)
   {
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
   f6 = Math.min(20,random(2) + 5 + _root.chaps * 2.6);
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
   _root.bona = _root.chaps == 1 || _root.chaps == 2 && _root.double;
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
   _root.iter = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
   _root.devil = _root.chaps != 1;
   _root.bumkill = false;
   _root.altch = _root.chaps % 2 == 0 && random(2) == 0;
   if(_root.hardmode)
   {
      if(_root.chaps % 3 == _root.alof && random(2) == 0)
      {
         _root.altch = 2;
      }
   }
   _root.ceye = false;
   if(trixx(59) && random(4) == 0)
   {
      _root.ceye = ups[21] = true;
   }
   _root.altchap = 0;
   if(random(2) == 0 && _root.chaps < 9 || _root.heaven == 2)
   {
      _root.altchap = 9;
   }
   fuckup = 0;
   if(_root.chaps == 1 || _root.chaps == 3 || _root.chaps == 5 || _root.chaps == 7)
   {
      _root.nodmg = true;
   }
   if(_root.hairb > 1)
   {
      _root.hairb = Math.round(_root.hairb * 0.5 + 0.5);
   }
   else
   {
      _root.hairb = 1;
   }
   if(_root.double)
   {
      f6 *= 1.8;
      f6 = Math.min(30,f6);
   }
   else
   {
      if(_root.big)
      {
         f6 += 4;
      }
      if(random(12) == 0)
      {
      }
      f6 = Math.min(30,f6);
   }
   while((_root.mapsize * 1.25 < f6 || _root.levz.length <= 1 || _root.bossl == 45 || _root.hide == undefined && _root.chaps < 3 || _root.bossl == 25 || _root.bossl == 36 || _root.bossl == 34) && fuckup++ < 1000)
   {
      endrooms = [];
      _root.levz = new Array(80);
      e = 0;
      while(e < 80)
      {
         _root.levz[e] = 0;
         e++;
      }
      acts = [];
      acts2 = [];
      pffx(35);
      f3 = random(4);
      f5 = 0;
      if(_root.double)
      {
         f6 -= 1;
      }
      v3 = 0;
      e = 0;
      while(e < 300)
      {
         acts2[acts2.length] = 0;
         acts = acts2.slice(0,-1);
         acts2 = [];
         if(f6 > 15)
         {
            pffx(35);
         }
         for(a in acts)
         {
            v1 = acts[a];
            if(v1 > 0)
            {
               v3 = v1;
            }
            f8 = 0;
            f2 = 2;
            if(e > 3 + random(3 - fuckup) && f5 + random(2) < f6 && fuckup > 4 + random(4))
            {
               f2 = 1;
            }
            if(random(f2) == 0 && v1 % 10 < 9)
            {
               pffx(v1 + 1);
            }
            if(random(f2) == 0 && v1 % 10 > 1)
            {
               pffx(v1 - 1);
            }
            if(random(f2) == 0 && v1 < 70)
            {
               pffx(v1 + 10);
            }
            if(random(f2) == 0 && v1 > 10)
            {
               pffx(v1 - 10);
            }
            if(f8 == 0 && v1 != 35)
            {
               endrooms.push(v1);
            }
         }
         if(acts2.length < 2)
         {
            e -= 0.5;
         }
         e++;
      }
      if(_root.double)
      {
         f6 += 1;
      }
      _root.lastl = _root.lev;
      _root.lastl = _root.lev = 35;
      _root.mapsize = f5;
      _root.boner = _root.shopl = _root.bossl = endrooms[endrooms.length - 1];
      endrooms.splice(endrooms.length - 1,1);
      if(_root.double)
      {
         f1 = -1;
         if(ncheck(_root.bossl + 1) == 1 && _root.bossl % 10 < 9)
         {
            f1 = _root.bossl + 1;
         }
         if(ncheck(_root.bossl - 1) == 1 && _root.bossl % 10 > 1)
         {
            f1 = _root.bossl - 1;
         }
         if(ncheck(_root.bossl + 10) == 1 && _root.bosslv1 < 70)
         {
            f1 = _root.bossl + 10;
         }
         if(ncheck(_root.bossl - 10) == 1 && _root.bossl > 10)
         {
            f1 = _root.bossl - 10;
         }
         if(f1 > 0)
         {
            _root.bossl2 = _root.bossl;
            _root.bossl = f1;
         }
         else
         {
            _root.bossl = 34;
         }
      }
      else
      {
         _root.bossl2 = undefined;
      }
      _root.hide = undefined;
      _root.hide2 = undefined;
      _root.beenlev = [];
      _root.hide2 = ender();
      if(_root.mapsize * 2 > f6 && _root.bossl != 34)
      {
         if(_root.double)
         {
            endrooms.splice(0,Math.max(0,endrooms.length - 6));
         }
         e = 0;
         while(e < 3000)
         {
            f1 = random(_root.levz.length);
            f2 = f1 % 10;
            if(!_root.levz[f1] && f2 < 9 && f2 > 1)
            {
               f2 = ncheck(f1);
               f4 = true;
               if(f2 > 0)
               {
                  f3 = ncheck1(f1);
                  if(!_root.double)
                  {
                  }
               }
               else
               {
                  f3 = false;
               }
               if((f2 > 2 && f3 || (f2 > 2 || f2 > 1.9 && (e > 600 || f3)) && e > 300 && f4) && _root.hide == undefined)
               {
                  _root.levz[f1] = "hide" + random(5);
                  _root.hide = f1;
               }
               else if(_root.mapsize < f6 + random(10) + _root.chaps * 2 && _root.double && f1 != _root.hide && f1 != _root.hide2)
               {
                  if(f3 && (f2 > 1 || f2 == 1 && random(2) == 0) && f1 + 10 != _root.hide && f1 - 10 != _root.hide && f1 - 1 != _root.hide && f1 + 1 != _root.hide && f1 + 10 != _root.hide2 && f1 - 10 != _root.hide2 && f1 - 1 != _root.hide2 && f1 + 1 != _root.hide2)
                  {
                     _root.levz[f1] = 0.75;
                     _root.mapsize = _root.mapsize + 1;
                  }
               }
               else if(_root.hide != undefined)
               {
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
      if((endrooms.length >= 4 || _root.chaps == 1 && endrooms.length >= 3) && _root.bossl != _root.lev && _root.bossl > 0)
      {
         _root.shopl = ender();
         if(_root.chaps != 11)
         {
            if(_root.chala < 5 && (_root.chala != 2 || random(3) != 1))
            {
               _root.boner = ender();
            }
            if(_root.double && _root.chala < 5)
            {
               _root.boner2 = ender();
            }
            if(endrooms.length > 0 && (random(7) == 0 || random(4) == 0 && _root.fullhp))
            {
               _root.sac = ender();
            }
            if(endrooms.length > 0 && (random(20) == 0 || _root.bookster && random(4) == 0))
            {
               _root.lib = ender();
            }
            if(endrooms.length > 0 && (random(2) == 0 || _root.lastdev && random(4) == 0))
            {
               _root.cus = ender();
            }
            if(endrooms.length > 0 && (random(4) == 0 || _root.chaps == 1 && random(3) == 0) && _root.minz.length > 0)
            {
               _root.minb = ender();
            }
            if(endrooms.length > 0 && _root.fullhp && _root.chaps > 1 && (random(2) == 0 || _root.chaps > 2))
            {
               _root.chamb = ender();
            }
            if(endrooms.length > 0 && _root.coins >= 5 && _root.chaps % 2 == 0)
            {
               _root.gamb = ender();
            }
         }
      }
      else
      {
         _root.levz = [];
         _root.mapsize = 0;
      }
      if(_root.chaps > 6)
      {
         _root.boner = undefined;
         _root.boner2 = undefined;
         if(random(5) != 0 || !ups[64] && random(5) != 0)
         {
            _root.shopl = undefined;
         }
      }
   }
   if(fuckup >= 399)
   {
      _root.levz = undefined;
      if(_root.double)
      {
         _root.chaps--;
      }
      _root.cuts = true;
      moveon();
      _root.gotoAndStop("reset");
   }
   if(!_root.altchap)
   {
      f13 = Math.min(llev.length - 2,_root.chaps * 2 - 2);
      f15 = Math.min(llev.length - 2,_root.chaps * 2 - 4);
   }
   else
   {
      f13 = Math.min(llev2.length - 2,_root.chaps * 2 - 2);
      f15 = Math.min(llev2.length - 2,_root.chaps * 2 - 4);
   }
   f14 = true;
   for(e in _root.levz)
   {
      if(random(2) == 0 && _root.double)
      {
         f14 = f15;
      }
      else
      {
         f14 = f13;
      }
      if(_root.levz[e] > 0)
      {
         if(_root.altchap)
         {
            _root.levz[e] = random(llev2[f14 + 1] - llev2[f14]) + llev2[f14] + 2;
         }
         else
         {
            _root.levz[e] = random(llev[f14 + 1] - llev[f14]) + llev[f14] + 2;
         }
         _root.rarer[e] = random(115) + 65;
      }
   }
   if(_root.double)
   {
      _root.chaps--;
   }
   bosschoose();
   if(_root.double)
   {
      _root.levz[_root.bossl2] = f1;
      _root.bosss2 = _root.bosss;
      _root.altboss2 = _root.altboss;
      _root.chaps = _root.chaps + 1;
      while(_root.bosss2 == _root.bosss)
      {
         bosschoose();
      }
      _root.levz[_root.bossl] = f1;
      f1 = _root.bosss2;
      _root.bosss2 = _root.bosss;
      _root.bosss = f1;
   }
   else
   {
      _root.levz[_root.bossl] = f1;
   }
   _root.levz[35] = 2;
   _root.levz[166] = "satan";
   if(_root.altsat)
   {
      _root.levz[166] = "sata";
   }
   else if(!_root.kramper && (random(10) == 0 || random(3) == 0 && _root.evs > 0))
   {
      _root.levz[166] = "krampus";
      _root.kramper = _root.chaps;
   }
   if(_root.chaps == 8)
   {
      _root.levz[166] = "satan1";
   }
   if(_root.chaps < 9)
   {
      _root.levz[169] = "error" + random(4);
   }
   _root.levz[_root.shopl] = "shop" + (random(6) + 1) * 1;
   _root.levz[_root.sac] = "sac";
   _root.levz[_root.lib] = "lib";
   _root.levz[_root.cus] = "c";
   _root.levz[_root.hide2] = "hi" + _root.hid2;
   if(random(3) == 0)
   {
      _root.levz[_root.cus] = "c" + random(2);
      if(random(4) == 0)
      {
         _root.levz[_root.cus] = "c2";
      }
   }
   _root.levz[_root.boner] = "t" + random(6);
   _root.levz[_root.boner2] = "t" + random(6);
   f1 = random(_root.minz.length);
   f2 = "min";
   if(_root.altm)
   {
      f2 = "mi";
   }
   f3 = f2;
   f2 += _root.minz[f1];
   if(_root.chaps > 2 && !_root.us && random(10) == 0)
   {
      f2 = "us";
      _root.us = true;
   }
   _root.levz[_root.minb] = f2;
   _root.levz[_root.gamb] = "gam" + random(6);
   _root.levz[_root.chamb] = "cha" + random(6);
   if(_root.chaps == 11)
   {
      _root.levz[35] = 5;
   }
   if(_root.altch)
   {
      _root.levz[_root.chamb] = "cha5";
   }
   if(_root.chaps > 3 && _root.minb == undefined)
   {
      if(_root.chaps > 4)
      {
         if(random(3) == 0 && _root.chaps - 1 > _root.lastkeeps)
         {
            _root.levz[_root.hide] = f3 + 4;
            _root.minb = _root.hide;
         }
      }
      if(_root.levz[_root.hide] == f3 + 4)
      {
         _root.lastkeeps = _root.chaps;
      }
      if(random(6 - Math.min(_root.chaps,5)) == 0 && _root.chaps - 1 > _root.lastkeeps)
      {
         _root.minb = _root.shopl;
         _root.levz[_root.shopl] = f3 + 4;
         _root.lastkeeps = _root.chaps;
      }
   }
   _root.minz.splice(f1,1);
   if(_root.eta)
   {
      etogo = 4;
      _root.eta = false;
      _root.hp = _root.hp + 1;
      ups[22] = ups[22] + 1;
      _root.ups[22] = _root.ups[22] + 1;
      _root.eto = _root.eto + 1;
   }
   if(trixx(55))
   {
      eta();
   }
}
_root.amusic = false;
if(!_root.beenlev[_root.lev])
{
   if(_root.lev == _root.boner || _root.lev == _root.boner2)
   {
      _root.mmus = _root.soundy("treasure room enter.mp",100);
   }
   else if(_root.lev == _root.bossl || _root.lev == _root.bossl2)
   {
      _root.soundy("castleportcullis.wav",100);
   }
   else if(_root.lev == _root.chamb)
   {
      _root.mmus = _root.soundy("weapon room.mp",100);
   }
   else if(_root.lev == 166)
   {
      if(_root.kramper == _root.chaps)
      {
         _root.bossmusic = true;
         _root.soundy("bossintro.mp3");
      }
      else
      {
         _root.mmus = _root.soundy("Satan find.mp",100);
      }
   }
   else if(_root.lev == _root.minb)
   {
      _root.mmus = _root.soundy("miniboss.mp",100);
      _root.amusic = true;
      _root.fade = true;
   }
}
firsttime = _root.beenlev[_root.lev];
if(firsttime != 2)
{
   _root.beenlev[_root.lev] = true;
}
if(_root.lev == _root.hide)
{
   hider();
}
if(_root.lev == _root.hide2)
{
   hider2();
}
if(_root.lev == _root.minb)
{
   _root.minbb = true;
}
if(_root.lev == _root.gamb)
{
   _root.gambb = true;
   _root.gama = true;
   if(!_root.gamaaa)
   {
      _root.gamaaa = true;
      _root.so.data.gams = _root.so.data.gams + 1;
      if(_root.so.data.gams > 10)
      {
         _root.locker[33] = true;
      }
   }
}
_root.seenlev[_root.lev] = true;
door = [d1,d2,d3,d4];
v1 = _root.lev;
if(v1 % 10 < 9)
{
   door[2].gol = v1 + 1;
}
if(v1 % 10 > 1)
{
   door[0].gol = v1 - 1;
}
if(v1 < 70)
{
   door[1].gol = v1 + 10;
}
if(v1 > 10)
{
   door[3].gol = v1 - 10;
}
for(e in door)
{
   trg = door[e];
   trg.swapDepths(int(291 + e));
   trg.govo = false;
   if(trg.gol > -1 && _root.levz[trg.gol] != 0)
   {
      if(trg.gol == _root.hide || trg.gol == _root.hide2 || (_root.lev == _root.hide || _root.lev == _root.hide2))
      {
         trg.govo = true;
         trg.visible = false;
      }
   }
   else
   {
      trg._visible = false;
   }
}
rowz = 16;
roxx = 40;
roxx2 = roxx / 2;
f1 = _root.levz[_root.lev];
if(f1 == 2)
{
   gotoAndStop(2);
}
else if(f1 * 1 > 1)
{
   if(_root.chaps == 11)
   {
      f15 = 15;
   }
   else
   {
      f15 = Math.round(_root.chaps / 2 + _root.altchap);
   }
   gotoAndStop("levs" + f15);
   inl.gotoAndStop(f1 - 2);
}
else
{
   gotoAndStop("levs6");
   inl.gotoAndStop(f1);
   inl.shop.swapDepths(33901);
   inem = true;
}
_this.error = false;
if(_root.lev == _root.chamb)
{
   f1 = 19;
   if(_root.altch == 2)
   {
      f1 = 26;
   }
}
else if(_root.lev == _root.gamb)
{
   f1 = 15;
}
else if(_root.lev == 166 || _root.lev == _root.cus)
{
   f1 = 19;
   if(_root.lev == 166)
   {
      _this.satan = true;
      _root.devil = 2;
      if(_root.door <= -1)
      {
         _root.door = random(4);
      }
      if(_root.altsat)
      {
         f1 = 26;
      }
   }
}
else if(_root.lev == 169)
{
   _this.error = true;
   f1 = 40;
}
else if(_root.chaps > 8)
{
   if(_root.altchap)
   {
      f1 = 26;
   }
   else
   {
      f1 = 45;
   }
}
else
{
   altgo = true;
   f1 = 1 + Math.round(_root.chaps / 2 - 1) * 3;
}
if(_root.shopl == _root.lev)
{
   f1 = 2;
}
else if((_root.bossl == _root.lev || _root.bossl2 == _root.lev) && _root.chaps != 9)
{
   f1 += 2;
}
else if(_root.hide == _root.lev)
{
   f1 = 20;
}
else if(_root.hide2 == _root.lev)
{
   f1 = [10,26,19,23,21];
   f1 = f1[_root.hid2];
}
else if(altgo && _root.altchap != 0 && _root.chaps != 7 && _root.chaps != 8)
{
   f1 = 21 + Math.round(_root.chaps / 2 - 1);
}
f2 = f1;
if(_root.lev == 35 && !_this.satan && _root.chaps == 1)
{
   f2 = 50;
}
if(_root.lev == _root.sac)
{
   f2 = f1 = 24;
}
if(_root.lev == _root.lib)
{
   f2 = f1 = 25;
}
if(_root.chaps == 11)
{
   f2 = f1 = 27;
}
b.w1.gotoAndStop(f1);
b.w2.gotoAndStop(f1);
b.w3.gotoAndStop(f1);
b.w4.gotoAndStop(f1);
b.bg.gotoAndStop(f2);
b.bg.d.gotoAndStop((_root.rax00 + _root.lev + _root.lev * _root.lev * (_root.rax20 + _root.lev) + (_root.rax10 + _root.lev) * _root.lev * _root.lev) % b.bg.d._totalframes + 1);
b.w1.d.gotoAndStop((_root.rax01 + _root.lev + _root.lev * _root.lev * (_root.rax21 + _root.lev) + (_root.rax11 + _root.lev) * _root.lev * _root.lev) % b.w1.d._totalframes + 1);
b.w2.d.gotoAndStop((_root.rax02 + _root.lev + _root.lev * _root.lev * (_root.rax22 + _root.lev) + (_root.rax12 + _root.lev) * _root.lev * _root.lev) % b.w2.d._totalframes + 1);
b.w3.d.gotoAndStop((_root.rax03 + _root.lev + _root.lev * _root.lev * (_root.rax23 + _root.lev) + (_root.rax13 + _root.lev) * _root.lev * _root.lev) % b.w3.d._totalframes + 1);
b.w4.d.gotoAndStop((_root.rax04 + _root.lev + _root.lev * _root.lev * (_root.rax24 + _root.lev) + (_root.rax14 + _root.lev) * _root.lev * _root.lev) % b.w4.d._totalframes + 1);
xenf = Math.round((gridxs - gridx) / gridv + 1.5);
yenf = Math.round((gridys - gridy) / gridv + 1.5);
gxe = xenf;
gye = yenf;
xenf *= gridmax;
var grid = new flash.display.BitmapData(xenf,yenf,false,0);
var grid2 = new flash.display.BitmapData(xenf,yenf,false,0);
var tests = new flash.display.BitmapData(300,300,false,0);
_root.g.gotoAndPlay(60);
timer = [];
alltimer = [0,0,0,0,0,0,0,0,0];
ballz = 0;
ball = [];
if(_root.chaps >= 5)
{
   mux = 1.25;
}
else
{
   mux = 1;
}
v1 = 13;
v2 = 60 + 15 * Math.min(10,_root.chaps);
v2 /= mux;
p180 = 0.017453292519943295;
p10 = 0.5235987755982988;
v3 = 17;
sizes = [5,10,8,v1,16,12,0,v1,v1,5,v1,v1,v1,v3,v3,v1,v1,v1,v3,20,40,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,50,0,v1,v1,v1,v1,v1,35,v1,35,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,25,25,25,25,35,27,20,0,40,25,v1,40,30,20,v1,35,v1,v1,20,20,16,55,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,v1,20,30,35,35,40,25];
masses = [0,5,8 + _root.ups[4] * 2,0,6,3,0,6,6,8,5,3,3,3,4,10,6,6,3,50,50,7,7,7,10,7,7,15,20,10,10,10,10,1,10,10,70,1,10,10,10,10,20,50,15,70,30,30,30,30,30,30,30,10,10,10,30,30,10,10,10,7,30,30,30,30,30,30,40,20,0,40,30,20,30,20,10,3,100,20,3,50,30,30,100,5,30,30,30,30,30,30,30,30,30,30,5,30,30,80,38,80,100];
hps = [0,10,0,0,0,0,0,0,0,10,10,10,10,3,8,15,13,13,5,22,250,15,20,20,33,20,20,15,350,10,20,10,20,0,25,25,700,0,25,25,25,20,20,550,100,530,v2,v2,v2 * 1.6,v2,v2,v2 * 0.5,v2,20,20,25,30,40,35,20,20,10,300,240,280,400,450,110,450,350,0,60,15,8,190,75,30,12,950,140,10,v2 * 3,v2 * 2,100,600,10,40,40,40,40,40,40,40,40,20,40,300,200,200,250,250,300,1000];
hard = [1.5707963267948966,0.15707963267948966,p10 * 5,p10,p10,p10 * 2,0,0,0,p10 * 5,p10,p10,p10,0,0,p10,p10,p10,0,0,p10,p10,p10,p10,p10,p10,0,p10,p10,0,p10,p10,p10,0,0,p10,p10,0,p10,p10,p10,p10,0,p10,p10,0,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,0,p10,0,0,0,0,p10,p10,p10,0,p10,p10,p10,p10,p10,p10,p10,0,p10,0,0,0,0,0,0,p10,p10,p10,p10,p10,p10,p10,p10,p10,p10,0,p10,p10,p10,p10,p10];
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
if(_root.hardmode)
{
   hps[78] *= 1.45;
}
if(_root.chaps < 3)
{
   hps[83] *= 0.75;
   hps[82] *= 0.75;
}
masses[21] = masses[23];
if(_root.locker[45])
{
   hps[78] *= 1.25;
}
for(e in hops)
{
   hps[e] *= mux;
}
wb = [];
sizes[61] = v3;
sizes[80] = v3;
hardx = [];
hardy = [];
for(e in hard)
{
   v1 = hard[e];
   siz = sizes[e];
   if(e == 14 || e == 13)
   {
      siz = 5;
   }
   if(v1 > 0)
   {
      hardx[e] = [];
      hardy[e] = [];
      a = 0;
      while(a < 6.283185307179586)
      {
         hardx[e][hardx[e].length] = Math.sin(a) * siz;
         hardy[e][hardy[e].length] = Math.cos(a) * siz;
         a += v1;
      }
   }
}
sizes[28] = 18;
it1 = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
watz = 0;
flyer = 0;
hearts = [];
masks = [];
if(_root.chaps != 9 && (_root.chala <= 0 || _root.chala == 10))
{
   _root.heaven = _root.so.data.wins >= 10;
}
else
{
   _root.heaven = false;
}
noetern = false;
spuz = 0;
if(_root.specol[_root.lev] && _root.lev != _root.chamb && (_root.lev != _root.bossl || _root.chaps != 6 && _root.chaps < 8))
{
   gospo = true;
   if(!_root.beenlev2[_root.lev])
   {
      _root.specol[_root.lev] = [];
      _root.alto[_root.lev] = [];
   }
}
else
{
   _root.specol[_root.lev] = [];
   _root.alto[_root.lev] = [];
}
parz = 0;
par = [];
createEmptyMovieClip("blorz",297);
hitc = 0;
hitcc = 0;
lasth = 0;
bossdmg = true;
org = new flash.display.BitmapData(40,40,true,13421772);
v3 = 1;
v2 = 20;
v1.scale(v3,v3);
v1.translate(v2,v2);
org.draw(shaz,v1);
f1 = 75;
trg = createEmptyMovieClip("bggg",290);
bgg = new flash.display.BitmapData(gridxs,gridys - f1,true,0);
trg.attachBitmap(bgg,1);
trg._yscale = trg._xscale = 100 / hdx;
trg._y = f1;
trg = createEmptyMovieClip("splala",296);
splat = new flash.display.BitmapData(gridxs,gridys,true,0);
trg.attachBitmap(splat,1);
trg._yscale = trg._xscale = 100 / hdx;
trg._alpha = 70;
trg = createEmptyMovieClip("guta",298);
gut = new flash.display.BitmapData(gridxs,gridys,true,0);
trg.attachBitmap(gut,1);
trg._yscale = trg._xscale = 100 / hdx;
poi = new flash.geom.Point(0,0);
ref = [];
mapd();
sk = _root.sk;
webs = [];
upa();
mapd();
if(levz.length <= 1)
{
   levz = new Array(200);
   if(_root.whatstart)
   {
      _root.whatstart = false;
   }
}
kogs = [];
itb = 0;
lastcraf = -30;
if(_root.playerx <= 0 || _root.newstartt)
{
   _root.playerx = 320;
   _root.playery = 400;
}
trg = player = create(_root.playerx,_root.playery,0,0,0,0,1);
if(_root.eto >= 7)
{
   _root.etol = true;
   _root.playcol[0] = 5;
   _root.playcol[1] = 5;
   _root.playcol[2] = 5;
   _root.locker[113] = true;
}
if(_root.getup)
{
   _root.getup = false;
   player.d.gotoAndStop(5);
}
if(_root.tell)
{
   _root.tell = false;
   player.d.gotoAndStop(8);
}
player.mhp = _root.mhp;
player.hp = _root.hp;
if(_root.lev == _root.bossl && !firsttime)
{
   if(trixx(53))
   {
      player.hp = player.hp + 1;
   }
}
Mouse.removeListener();
if(mouseListener == undefined)
{
   mouseListener = new Object();
   mouseListener.onMouseDown = function()
   {
      md = true;
   };
   mouseListener.onMouseUp = function()
   {
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
switch(_root.door * 1)
{
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
      olfy = - f1;
}
_X = olfx;
_Y = olfy;
shutdoor = 1;
brr = [];
brr2 = [];
gibb = 0;
if(_root.tex != undefined)
{
   wtftex = _root.tex;
}
gameover = 0;
justnow = 9;
itc = [0,6,3,6,1,2,1,3,0,3,3,0,2,4,0,3,2,3,3,0,0,0,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0,6,6,0,0,0,0,6,6,6,3,0,0,0,0,0,0,6,0,0,0,4,0,0,0,0,6,0,0,3,0,6,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,4];
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
if(_root.shopl == _root.lev)
{
   _root.shopa = true;
}
if(_root.lib == _root.lev)
{
   _root.liba = true;
}
if(_root.boner == _root.lev)
{
   _root.bona = true;
}
if(_root.boner2 == _root.lev)
{
   _root.bona2 = true;
}
secol = 0;
minions = 0;
flyby = 0;
mom = _loc0_ = [];
worm = _loc0_;
mags = _loc0_;
mhelps = 0;
if(random(2) == 0)
{
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
if(_root.lasth)
{
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
if(_root.chaf)
{
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
if(_root.ups[122] && player.hp < 1)
{
   player._visible = false;
}
