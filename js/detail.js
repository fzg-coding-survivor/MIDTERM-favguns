const items = {};

/* รายการ glock */

items.glock = {
  id: "glock",
  name: "Glock",
  group: "Handgun",
  category: "ปืนพก",
  maker: "ออสเตรีย (Austria) 🇦🇹",
  makerLabel: "ประเทศ",
  caption: "พลาสติกเปลี่ยนโลก",
  description:
    "ออกแบบและก่อตั้งโดย Gaston Glock ในเมือง Deutsch-Wagram ประเทศออสเตรีย",
  story:
    "ความเรียบง่าย (Minimalist) โครงโพลิเมอร์ที่ทนทานลุยได้ทุกสภาวะ ปรัชญา Safe Action ที่ไม่มีเซฟนอก และเป็น ตัวเลโก้ ที่มีอะไหล่กับของแต่งเยอะที่สุดในโลก",
  image: "assets/images/collection/glock.png",
  related: ["sigsauer", "cz"],
};

/* รายการ sigsauer */

items.sigsauer = {
  id: "sigsauer",
  name: "SIG Sauer",
  group: "Handgun",
  category: "ปืนพก",
  maker: "สวิตเซอร์แลนด์ 🇨🇭 & เยอรมนี 🇩🇪",
  makerLabel: "ประเทศ",
  caption: "ปืนประจำการยุคใหม่",
  description:
    "เกิดจากการร่วมมือระหว่างบริษัท SIG (สวิตเซอร์แลนด์) และ J.P. Sauer & Sohn (เยอรมนี) ก่อนจะขยายฐานการพัฒนาและผลิตหลักไปที่อเมริกา (SIG Sauer Inc.)",
  story:
    "ตระกูล P226/P229 ในตำนาน และชุดลั่นไกโมดูลาร์ FCU ในรุ่น P320/P366 ที่สลับบอดี้ได้อิสระ จนคว้าสัญญาปืนประจำการกองทัพสหรัฐฯ (M17/M18)",
  image: "assets/images/collection/sig sauer.png",
  related: ["cz", "hk"],
};

/* รายการ cz */

items.cz = {
  id: "cz",
  name: "CZ",
  group: "Handgun",
  category: "ปืนพก",
  maker: "สาธารณรัฐเช็ก (Czech Republic) 🇨🇿",
  makerLabel: "ประเทศ",
  caption: "ราชาสนามแข่ง",
  description:
    "แบรนด์เก่าแก่จากเมือง Uherský Brod ประเทศเช็กเกีย (เชกโกสโลวาเกียเดิม)",
  story:
    "ปืนสัญชาติเช็กอย่าง CZ 75 กับสไลด์ที่ขี่อยู่ข้างในเฟรม (Low-Profile Slide) สรีรศาสตร์ด้ามจับที่เข้ามือที่สุด และไกปืนสุดคมที่ครองแชมป์สนามไอพีเอสซี (IPSC) ทั่วโลก",
  image: "assets/images/collection/cz.png",
  related: ["fn", "desert"],
};

/* รายการ HK */

items.hk = {
  id: "hk",
  name: "HK",
  group: "Handgun",
  category: "ปืนพก",
  maker: "เยอรมนี (Germany) 🇩🇪",
  makerLabel: "ประเทศ",
  caption: "ความเนี๊ยบระดับหน่วยพิเศษ",
  description:
    "คลังอาวุธระดับตำนานจากเมือง Oberndorf am Neckar ประเทศเยอรมนี",
  story:
    "สโลแกน No Compromise ความเป๊ะตามมาตรฐานเยอรมนี คันปลดแม็กกาซีนที่การ์ดไก (Paddle Release) และปืนตำนานอย่าง HK USP หรือ P30 ที่ใช้ในหน่วยรบระดับโลก",
  image: "assets/images/collection/HK.png",
  related: ["desert", "revolver"],
};

/* รายการ SIG 1911 */

items.sig1911 = {
  id: "sig1911",   
  name: "SIG 1911",
  group: "Handgun",
  category: "ปืนพก",
  maker: "สหรัฐอเมริกา (USA) 🇺🇸",
  makerLabel: "ประเทศ",
  caption: "ตำนานอเมริกัน",
  description:
    "รูปทรงปืน 1911 ออกแบบโดย John Browning ในสหรัฐอเมริกา แต่ถูกผลิตและปรับแต่งโดยแบรนด์ SIG Sauer (เดิมคือการแท็กทีมระหว่าง SIG ของสวิตเซอร์แลนด์ และ Sauer ของเยอรมนี ปัจจุบันฐานผลิตหลักของ SIG อยู่ในสหรัฐอเมริกา)",
  story:
    "รูปทรงอมตะของ 1911 กลไก Single-Action ไกหลุดคมกริบ กระสุนขนาด .45 ACP แต่ถูกนำมาเจียระไนใหม่ด้วยสไลด์ทรงเหลี่ยมและงานประกอบอันประณีตตามมาตรฐาน SIG",
  image: "assets/images/collection/sig1911.png",
  related: ["glock", "fn"],
};

/* รายการ FN */


items.fn = {
  id: "fn",
  name: "FN Five-seveN",
  group: "Handgun",
  category: "ปืนพก",
  maker: "เบลเยียม (Belgium) 🇧🇪",
  makerLabel: "ประเทศ",
  caption: "อาวุธจากอนาคต",
  description:
    "พัฒนาและผลิตโดยบริษัท FN Herstal (Fabrique Nationale Herstal) ประเทศเบลเยียม",
  story:
    "กระสุนขนาดพิเศษ 5.7x28mm ทรงหัวเข็มอันเลื่องชื่อเรื่องการเจาะเกราะอ่อน น้ำหนักเบา จูกระสุนได้เยอะ ถอยหลังเบา และรูปทรงไซไฟสุดล้ำสมัย",
  image: "assets/images/collection/five seven.png",
  related: ["glock", "sig1911"],
};

/* รายการ Desert Eagle */

items.desert = {
  id: "desert",
  name: "Desert Eagle",
  group: "Handgun",
  category: "ปืนพก",
  maker: "สหรัฐอเมริกา 🇺🇸 & อิสราเอล 🇮🇱",
  makerLabel: "ประเทศ",
  caption: "พญาราชสีห์ไอคอนฮอลลีวูด",
  description:
    "ออกแบบและคิดค้นโดยบริษัท Magnum Research ในสหรัฐอเมริกา แต่ถูกส่งไปพัฒนาต่อและผลิตโดย IMI (Israel Military Industries) ประเทศอิสราเอล จนกลายเป็นไอคอนยุคแรก",
  story:
    "ขนาดตัวอันมหึมา ระบบลูกสูบแก๊สเหมือนปืนยาว กระสุนขนาดขวานฟ้าหน้าดำอย่าง .50 AE แรงถอยจัดจ้าน และภาพจำปืนพระเอก/ตัวร้ายในภาพยนตร์และเกม FPS",
  image: "assets/images/collection/deseret eagle.png",
  related: ["sig1911", "sigsauer"],
};

/* รายการ revolver */  

items.revolver = {
  id: "revolver",
  name: "Revolver",
  group: "Handgun",
  category: "ปืนพก",
  maker: "สหรัฐอเมริกา (USA) 🇺🇸",
  makerLabel: "ประเทศ",
  caption: "คลาสสิกอมตะ",
  description:
    "แม้จะมีระบบหมุนโม่ยุคแรกๆ ในยุโรป แต่ปืนลูกโม่โมเดิร์นแบบ Single/Double Action ที่เราคุ้นเคยถูกคิดค้น ถือสิทธิบัตร และทำตลาดจนแพร่หลายโดย Samuel Colt ในสหรัฐอเมริกา",
  story:
    "โม่หมุน 6 นัด เสียงสับไกอันดุดัน กลไกที่ไม่พึ่งพาแรงถอยกระสุน (ไม่มีคำว่าติดขัดเพราะขัดปลอก) และภาพจำหนังคาวบอยหรือตำรวจยุคเก๋า",
  image: "assets/images/collection/revolver.png",
  related: ["hk", "glock"],
};

/* อ่าน id จาก URL */

const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */

function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */

function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=bad" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */

if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Personal Collection";
}