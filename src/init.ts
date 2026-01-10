import "@/flash";
import {attachMovie, ContextMenu, createEmptyMovieClip, stop} from "@/flash";
import {callit, fullf, prelod, soz} from "@/foos";

linx = false;
st1 = [
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
st2x = [
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
acnam = [
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
acnam.push(
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
acnam.push(
    "_head",
    "_faith",
    "_eye",
    "_tongue",
    "_birdfoot",
    "_soul",
    "_lock",
    "_hand"
);
acnam.push(
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
while (e < 400) {
    checker[e] = 0;
    e++;
}
e = 0;
while (e < 1000) {
    f1 += f2;
    f2++;
    if (f2 > 5) {
        f2 = 2;
    }
    if (f1 >= 200) {
        f1 -= 200;
    }
    checker[f1] += e % 5;
    if (checker[f1] >= 9) {
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
trg = _root.createEmptyMovieClip("olda", 299);
old = new flash.display.BitmapData(640, 480, true, 0);
trg.attachBitmap(_root.old, 1);
trg = createEmptyMovieClip("mapa", 301);
map = new flash.display.BitmapData(450, 150, true, 0);
trg.attachBitmap(map, 1, true, false);
trg._x = -45;
overlay.swapDepths(500);
if (!linx) {
    f1 = mdm.System.getResolution();
}
wid = f1[0];
wider = f1[0] / f1[1];
colz = f1[2];
if (colz <= 10) {
    colz = 32;
}
if (wider <= 1.5) {
    wider = false;
} else if (wider > 1.7) {
    wider = 2;
}
if (linx) {
    win = false;
} else {
    _root.tex = macVersion = mdm.System.macVerString;
    winVersion = mdm.System.winVerString;
    win = (macVersion + " ").indexOf("type Function") > 0 || winVersion > 0;
    _root.tex = win + " " + winVersion;
    mdm.Application.onAppChangeFocus = function (myObject) {
        if (myObject.focus != "true") {
            if (lasf + 100 < fra) {
                if (so.data.full) {
                    so.data.full = false;
                    fullf();
                }
            }
        }
    };
}
lasf = 0;
refs = [
    0,
    [800, 600],
    [720, 480],
    [640, 480],
    [1280, 800],
    [1280, 720],
    [1024, 768],
];
overlay2._alpha = 0;
ala = 0;
attachMovie("hud", "hud", 300);
fullf();
fra = 0;
nosave = 0;
f1 = "";
f3 = false;
for (e of _root.locker) {
    if (_root.locker[e]) {
        if (acnam[e]) {
            if (f3) {
                f1 += " ";
            }
            f1 += acnam[e];
            f3 = true;
        }
    }
}
_root.tex = f1;
if (f3) {
    callit(f1);
    if (!win) {
        callit(f1);
    }
}
var myMenu = new ContextMenu();
myMenu.hideBuiltInItems();
_root.menu = myMenu;
